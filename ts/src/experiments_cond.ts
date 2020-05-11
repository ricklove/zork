

export const __a = () => {

    const b = true && (() => {
        const i = 4 + 4;
        return i;
    })();
};

declare const tell: (...args: any) => boolean & { __type: 'tell' };
declare const pick_one: (...args: any) => boolean & { __type: 'pick_one' };
declare const setg: (...args: any) => boolean & { __type: 'setg' };
declare const t: true & { __type: 't' };
declare const G_dummy: unknown;
declare const G_open_X_words: string;
declare const G_close_X_words: string;

type VERB = string;
type ATOM = string;
type STRING = string;

/*
<DEFINE OPEN-CLOSE (VERB ATM STROPN STRCLS)
    #DECL ((VERB) VERB (ATM) ATOM (STROPN STRCLS) STRING)
    <COND (<==? .VERB ,OPEN!-WORDS>
	   <COND (,.ATM
		  <TELL <PICK-ONE ,DUMMY>>)
		 (<TELL .STROPN>
		  <SETG .ATM T>)>)
	  (<==? .VERB ,CLOSE!-WORDS>
	   <COND (,.ATM
		  <TELL .STRCLS>
		  <SETG .ATM <>>
		  T)
		 (<TELL <PICK-ONE ,DUMMY>>)>)>>
*/

// Works
// Closest to intent
// Good modern code
export function open_close02(verb: VERB, atm: ATOM, stropn: STRING, strcls: STRING) {
    if (verb === G_open_X_words) {
        if (/*,*/[atm] /*1*/) {
            return tell(pick_one(G_dummy));
        } else if (tell(stropn)) {
            return setg(atm, t);
        };
    } else if (verb === G_close_X_words) {
        if (/*,*/[atm] /*1*/) {
            tell(strcls);
            setg(atm, false);
            return t;
        } else {
            return tell(pick_one(G_dummy));
        };
    }

    return false;
}

export function open_close_result(verb: VERB, atm: ATOM, stropn: STRING, strcls: STRING) {
    if (verb === G_open_X_words) {
        if (/*,*/[atm] /*1*/) {
            return tell(pick_one(G_dummy));
        } else if (tell(stropn)) {
            return setg(atm, t);
        };
    } else if (verb === G_close_X_words) {
        if (/*,*/[atm] /*1*/) {
            tell(strcls);
            setg(atm, false);
            return t;
        } else {
            return tell(pick_one(G_dummy));
        };
    };
}

// Ahhh 
// Ternary with Self-Invoking Arrow Functions (to provide a body for multiple statements)
export function open_close01(verb: VERB, atm: ATOM, stropn: STRING, strcls: STRING) {
    return (verb === G_open_X_words) ? (() => {
        return (/*,*/[atm] /*1*/) ? (() => {
            return tell(pick_one(G_dummy));
        })() : (tell(stropn)) ? (() => {
            return setg(atm, t);
        })() : false;
    })() : (verb === G_close_X_words) ? (() => {
        return (/*,*/[atm] /*1*/) ? (() => {
            tell(strcls);
            setg(atm, false);
            return t;
        })() : (() => {
            return tell(pick_one(G_dummy));
        })();
    })() : false;
}


// Technically closest, but completely unreadable
export function open_close03(verb: VERB, atm: ATOM, stropn: STRING, strcls: STRING) {
    return ((verb === G_open_X_words) && (
        ((/*,*/[atm] /*1*/) && (
            tell(pick_one(G_dummy))
        )) || ((tell(stropn)) && (
            setg(atm, t)
        ))
    )) || ((verb === G_close_X_words) && (
        ((/*,*/[atm] /*1*/) && (
            (tell(strcls) && false)
            && (setg(atm, false) && false)
            && t)
        ) || (
            tell(pick_one(G_dummy))
        )
    ));
}