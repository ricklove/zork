// GUTS OF FROB:  BASIC VERBS, COMMAND READER, PARSER, VOCABULARY HACKERS.

GLOBALS.alt_flag = t

gdecl(/*(*/ [muddle] /*)*/, fix, /*(*/ [tenex_Q] /*)*/, (atom || false), /*(*/ [vers, dev, snm, scratch_str] /*)*/, string)

export function save_it(fn?: string) {
    let muddle: number = GLOBALS.muddle;
    let stv: (string | number) = null;
    let st: (string | number) = remarkably_disgusting_code();
    find_obj(`PAPER`)[GLOBALS.odesc1] = unspeakable_code();
GLOBALS.vers = st;
GLOBALS.script_channel = false;
GLOBALS.raw_score = 0;
ih = on(`IPC`, GLOBALS.ilo,1);
handler(GLOBALS.divert_int,GLOBALS.divert_hand);
cond(/*(*/ [muddle > 100,
	       GLOBALS.scratch_str = istring(32),
	       GLOBALS.dev = `DSK`,
	       GLOBALS.snm = `MDL`] /*)*/,
	      /*(*/ [sname(``),
	       GLOBALS.dev = `DSK`,
	       GLOBALS.snm = `MADMAN`] /*)*/);
int_level(100000);
cond(/*(*/ [save(fn) == `SAVED`, int_level(0), t] /*)*/,
	      /*(*/ [t,
	       // STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"     if that device exists; if not, (sort of) returns directory muddle     came from.  On its it returns # zorkers currently in existence.,
	       cond(/*(*/ [(type_Q(stv = starter(), fix) && stv > 3),
		      (GLOBALS.winners[GLOBALS.xunm = xuname()] || GLOBALS.xunm == `SEC` || GLOBALS.xunm == `ELBOW` || (off(`CHAR`, GLOBALS.inchan) && tell(`There appears before you a threatening figure clad all over
in heavy black armor.  His legs seem like the massive trunk
of the oak tree.  His broad shoulders and helmeted head loom
high over your own puny frame and you realize that his powerful
arms could easily crush the very life from your body.  There
hangs from his belt a veritable arsenal of deadly weapons:
sword, mace, ball and chain, dagger, lance, and trident.
He speaks with a commanding voice:

		\"YOU SHALL NOT PASS \"

As he grabs you by the neck all grows dim about you.`) && quit()))] /*)*/,
		     /*(*/ [type_Q(stv,string),
		      GLOBALS.snm = substruc(GLOBALS.scratch_str,					  0,
					  _(GLOBALS.scratch_str.length,
					     memq(_X__, stv).length))] /*)*/),
	       cond(/*(*/ [GLOBALS.muddle > 100, GLOBALS.tenex_Q = getsys()] /*)*/,
		     /*(*/ [apply(GLOBALS.ipc_off),
		      apply(GLOBALS.ipc_on,uname(), `ZORK`)] /*)*/),
	       bh = on(`BLOCKED`, GLOBALS.blo,100),
	       start(`WHOUS`, st)] /*)*/);
  }



`Stuff for diverting gc's`

GLOBALS.divert_cnt = 0

GLOBALS.divert_max = 99

GLOBALS.divert_inc = 4000

GLOBALS.divert_amt = 0

GLOBALS.divert_lmt = 100000

gdecl(/*(*/ [divert_cnt, divert_max, divert_inc, divert_amt, divert_lmt] /*)*/, fix)

export function divert_fcn(amt, reason) {
    GLOBALS.divert_cnt = _(GLOBALS.divert_cnt,1);
GLOBALS.divert_amt = _(GLOBALS.divert_amt,GLOBALS.divert_inc,amt);
cond(/*(*/ [(GLOBALS.divert_cnt > GLOBALS.divert_max || GLOBALS.divert_amt > GLOBALS.divert_lmt),	// Too much diversion ?,
		GLOBALS.divert_amt = GLOBALS.divert_cnt = 0,
		gc_fcn(),
		gc()] /*)*/,
	      /*(*/ [else,	// Divert this request for storage,
		cond(/*(*/ [1_Q(GLOBALS.divert_cnt),		// First diversion ?,
		       handler(GLOBALS.gc_int,GLOBALS.gc_hand)] /*)*/),
		bloat(_(amt,GLOBALS.divert_inc)),
				// Get storage desired plus extra increment] /*)*/);
  }

GLOBALS.divert_hand = handler(GLOBALS.divert_int = event(`DIVERT-AGC`, 1000),
			GLOBALS.divert_fcn)

off(GLOBALS.divert_hand)

export function gc_fcn(`TUPLE`, t) {
    off(GLOBALS.gc_hand);
GLOBALS.divert_amt = GLOBALS.divert_cnt = 0;
  }

GLOBALS.gc_hand = handler(GLOBALS.gc_int = event(`GC`, 11),
			GLOBALS.gc_fcn)

off(GLOBALS.gc_hand)



export function xuname() {
    mapf(GLOBALS.string,	function(x: character) {
        cond(/*(*/ [(0_Q(ascii(x)) || ascii(x) === 32),
		  mapstop()] /*)*/,
		 /*(*/ [t, x] /*)*/);
      },
	gxuname());
  }

export function its_get_name(uname: string) {
    let nm: (string | false) = field(uname,GLOBALS._name);
    let cma: (string | false) = null;
    let jr: (string | false) = null;
    let lfst: number = null;
    let llst: number = null;
    let tlen: number = null;
    let tstr: string = null;
    let str: string = null;
    cond(/*(*/ [nm,	       cond(/*(*/ [cma = memq(_X__, nm),
		      llst = _(nm.length, cma.length),
		      cma = rest(cma),
		      lfst = cma.length,
		      cond(/*(*/ [jr = memq(_X__, cma),
			     lfst = _(lfst,jr.length)] /*)*/),
		      repeat(/*(*/ [] /*)*/,
			      cond(/*(*/ [empty_Q(cma), return()] /*)*/,
				    /*(*/ [memq(cma[1], /*%*/ [string(ascii(32), ascii(9))] /*1*/),
				     cma = rest(cma),
				     lfst = _(lfst,1)] /*)*/,
				    /*(*/ [else, return()] /*)*/)),
		      tlen = _(lfst,1, llst,jr.length),
		      str = istring(tlen,_X__),
		      tstr = str,
		      substruc(cma,0, lfst,tstr),
		      tstr = rest(tstr,_(lfst,1)),
		      substruc(nm,0, llst,tstr),
		      (jr && substruc(jr,0, jr.length, rest(tstr,llst))),
		      GLOBALS.user_name = str] /*)*/,
		     /*(*/ [else, GLOBALS.user_name = nm] /*)*/)] /*)*/);
  }

export function unspeakable_code() {
    let str: string = null;
    let nstr: string = null;
    let len_i: number = 0;
    let o: object = find_obj(`PAPER`);
    str = memq(_X__, oread(o));
cond(/*(*/ [back(str,2)[1] === _X_1,
	   str = back(str,2),
	   len_i = 1] /*)*/,
	  /*(*/ [str = back(str,1)] /*)*/);
nstr = rest(memq(_X__, rest(memq(_X__, str))), 3);
string(`There is an issue of US NEWS & DUNGEON REPORT dated `,
	    substruc(str,0, _(str.length, nstr.length)),
	    ` here.`);
  }

export function remarkably_disgusting_code() {
    let n: primtype(word) = dskdate();
    string(`This version created `,
	 GLOBALS.months[chtype(getbits(n,bits(4, 23)), fix)],
	 _X__,
	 unparse(chtype(getbits(n,bits(5, 18)), fix)),
	 _X__);
  }

export function version() {
    tell(GLOBALS.vers);
  }

GLOBALS.played_time = 0

gdecl(/*(*/ [played_time] /*)*/, fix)

export function get_time() {
    let now: primtype(word) = dskdate();
    let then: primtype(word) = GLOBALS.intime;
    _(cond(/*(*/ [chtype(getbits(now,bits(18, 18)), fix) !== chtype(getbits(then,bits(18, 18)), fix),
		  _(_(_(chtype(getbits(now,bits(18, 0)), fix),
			   _(24, 7200)),
			chtype(getbits(then,bits(18, 0)), fix)),
		     2)] /*)*/,
		 /*(*/ [_(_(chtype(getbits(now,bits(18, 0)), fix),
			chtype(getbits(then,bits(18, 0)), fix)),
		     2)] /*)*/),
	   GLOBALS.played_time);
  }

export function play_time(outchan?: special(channel), loser_Q: (atom | false)) {
    let time: number = null;
    let mins: number = null;
    time = get_time();
GLOBALS.tell_flag = t;
cond(/*(*/ [loser_Q,princ(`You have been playing DUNGEON for `)] /*)*/,
	      /*(*/ [t,
	       princ(`Played for `)] /*)*/);
(mins = _(time,3600) > 0 && prin1(mins) && princ(` hour`) && (1_Q(mins) || princ(`s`)) && princ(`, `));
cond(/*(*/ [mins = mod(_(time,60), 60) > 0,
	       prin1(mins),
	       princ(` minute`),
	       cond(/*(*/ [!1_Q(mins), princ(`s`)] /*)*/),
	       princ(`, and `)] /*)*/);
prin1(mins = mod(time,60));
princ(` second`);
(1_Q(mins) || princ(`s`));
cond(/*(*/ [loser_Q,princ(`.
`)] /*)*/,
	      /*(*/ [princ(`.`)] /*)*/);
  } 

export function pc() {
      }

export function handle(frm, _tuple_, zork) {
    let zf: any = null;
    GLOBALS.outchan[13] = 80;
back(GLOBALS.inchan)[1][6] = /*#*/ [lose, 27] /*2*/;
cond(/*(*/ [((!gassigned_Q(xunm) || GLOBALS.winners[GLOBALS.xunm]) && pc()),
	       (gassigned_Q(saverep) && GLOBALS.rep = GLOBALS.saverep),
	       (assigned_Q(bh) && off(bh)),
	       int_level(0),
	       GLOBALS.dbg = t,
	       GLOBALS.alt_flag = t] /*)*/,
	      /*(*/ [t,
	       cond(/*(*/ [(!empty_Q(zork) && zork[1] === control_g_Q_X_errors),
		      int_level(0),
		      finish(),
		      back(GLOBALS.inchan)[1][6] = cond(/*(*/ [GLOBALS.muddle > 100,
						       cond(/*(*/ [GLOBALS.tenex_Q,/*#*/ [lose, _37_] /*2*/] /*)*/,
							     /*(*/ [t, /*#*/ [lose, _000000000012_] /*2*/] /*)*/)] /*)*/,
						      /*(*/ [t, /*#*/ [lose, _000000000015_] /*2*/] /*)*/),
		      erret(t, frm)] /*)*/,
		     /*(*/ [(zork.length === 3 && zork[1] === file_system_error_X_errors && !zf = zork[3] && zf.length === 3 && zf[1] == `ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY`),
		      // HACK FOR ILLEGAL CHR AFTER CTRL-P,
		      back(GLOBALS.inchan)[1][6] = /*#*/ [lose, _000000000015_] /*2*/,
		      int_level(0),
		      erret(t, frm)] /*)*/,
		     /*(*/ [tell(`I'm sorry, you seem to have encountered an error in the program.
Send mail to DUNGEON@MIT-DMS describing what it was you tried to do.`),
		      tell(GLOBALS.vers),
		      mapf(false, function(x) {
                print(x);
              }, zork),
		      finish(/*#*/ [false, /*(*/ [`. Error.`] /*)*/] /*2*/)] /*)*/)] /*)*/);
  }

psetg(winners, () => /*[*/ [`BKD`, `TAA`, `MARC`, `PDL`, `MDL`] /*]*/)

gdecl(/*(*/ [winners] /*)*/, vector(/*[*/ [rest, string] /*]*/))

(lookup(`COMPILE`, root()) || lookup(`GLUE`, package[oblist]) || GLOBALS.errh = handler((error_X_interrupts[interrupt] || event(`ERROR`, 8)),
		   GLOBALS.handle))

gdecl(/*(*/ [moves] /*)*/, fix, /*(*/ [script_channel] /*)*/, (channel || false))

export function start(rm: string, st?: string) {
    let fn: (false | string) = null;
    let muddle: number = GLOBALS.muddle;
    let xunm: string = xuname();
    GLOBALS.xunm = xunm;
GLOBALS.ptemp = chtype(/*[*/ [chtype(with_X_words, prep), find_obj(`!!!!!`)] /*]*/, phrase);
GLOBALS.intime = dskdate();
cond(/*(*/ [muddle < 100,
	       (xunm.length > 2 && substruc(xunm,0, 3) == `___` && quit()),
	       fn = its_get_name(xunm)] /*)*/,
	      /*(*/ [fn = get_name()] /*)*/);
cond(/*(*/ [fn,	       GLOBALS.user_name = fn] /*)*/,
	      /*(*/ [GLOBALS.user_name = xunm] /*)*/);
GLOBALS.deaths = 0;
GLOBALS.moves = 0;
GLOBALS.winner = GLOBALS.player;
GLOBALS.winner[GLOBALS.aroom] = GLOBALS.here = find_room(rm);
tell(`Welcome to Dungeon.
`, 1, st);
random(chtype(dskdate(), fix));
int_level(0);
contin();
  }

export function contin() {
    GLOBALS.alt_flag = false;
back(GLOBALS.inchan)[1][6] = cond(/*(*/ [GLOBALS.muddle > 100,
					 cond(/*(*/ [GLOBALS.tenex_Q,/*#*/ [lose, _37_] /*2*/] /*)*/,
					       /*(*/ [t, /*#*/ [lose, _000000000012_] /*2*/] /*)*/)] /*)*/,
					/*(*/ [t, /*#*/ [lose, _000000000015_] /*2*/] /*)*/);
GLOBALS.saverep = GLOBALS.rep;
GLOBALS.rep = GLOBALS.rdcom;
reset(GLOBALS.inchan);
GLOBALS.winner = GLOBALS.player;
GLOBALS.prsvec[2] = false;
  }

GLOBALS.my_script = false

gdecl(/*(*/ [my_script] /*)*/, (atom || false))

export function make_script() {
    let ch: (channel | false) = null;
    cond(/*(*/ [GLOBALS.script_channel,	 false] /*)*/,
	/*(*/ [ch = open(`PRINT`, string(`MARC;%Z`, GLOBALS.xunm,` >`)),
	 top(GLOBALS.inchan)[1] = /*(*/ [ch] /*)*/,
	 top(GLOBALS.outchan)[1] = /*(*/ [ch] /*)*/,
	 GLOBALS.script_channel = ch,
	 GLOBALS.my_script = t] /*)*/);
  }

export function flush_me() {
    unwind(prog(/*(*/ [] /*)*/,
	 tell(`Suddenly, a sinister, wraithlike figure appears before you, seeming
to float in the air.  He glows with an eldritch light.  In a barely
audible voice he says, \"Begone, defiler!  Your presence upsets the
very balance of the System itself!\"  With a sinister chuckle, he
raises his oaken staff, taps you on the head, and fades into the
gloom.  In his place appears a tastefully lettered sign reading:

			DUNGEON CLOSED

At that instant, you disappear, and all your belongings clatter to
the ground.
`),
	 finish(false)),
   finish(false));
  }

export function do_script() {
    let ch: (channel | false) = null;
    let unm: string = GLOBALS.xunm;
    let muddle: number = GLOBALS.muddle;
    cond(/*(*/ [GLOBALS.my_script,	 do_unscript(false)] /*)*/);
cond(/*(*/ [GLOBALS.script_channel,	 tell(`You are already scripting.`)] /*)*/,
	/*(*/ [((muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch) && ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch))) && ch = open(`PRINT`, `ZORK`, `SCRIPT`, `DSK`, unm)),
	 top(GLOBALS.inchan)[1] = /*(*/ [ch] /*)*/,
	 top(GLOBALS.outchan)[1] = /*(*/ [ch] /*)*/,
	 GLOBALS.script_channel = ch,
	 cond(/*(*/ [GLOBALS.muddle < 100,
		tell(`Scripting to `, 1, GLOBALS.xunm,`;ZORK SCRIPT`)] /*)*/,
	       /*(*/ [t,
		tell(`Scripting to <`, 1, GLOBALS.xunm,`>ZORK.SCRIPT`)] /*)*/)] /*)*/,
	/*(*/ [t,
	 tell(`I can't open the script channel.`)] /*)*/);
  }

export function do_unscript(verbose?: (atom | false)) {
    cond(/*(*/ [GLOBALS.script_channel,	 top(GLOBALS.inchan)[1] = /*(*/ [] /*)*/,
	 top(GLOBALS.outchan)[1] = /*(*/ [] /*)*/,
	 close(GLOBALS.script_channel),
	 GLOBALS.script_channel = false,
	 (verbose && tell(`Scripting off.`))] /*)*/,
	/*(*/ [(verbose && tell(`Scripting wasn't on.`))] /*)*/);
  }

gdecl(/*(*/ [then] /*)*/, fix)

export function do_save() {
    let muddle: number = GLOBALS.muddle;
    let ch: (channel | false) = null;
    let unm: string = GLOBALS.xunm;
    cond(/*(*/ [(muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch))),
	 cond(/*(*/ [(muddle > 100 || (ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch))),
		(GLOBALS.script_channel && do_unscript()),
		tell(`Saving.`),
		int_level(100000),
		off(`CHAR`, GLOBALS.inchan),
		GLOBALS.then = chtype(dskdate(), fix),
		GLOBALS.played_time = get_time(),
		cond(/*(*/ [ch = open(`PRINTB`,
				     cond(/*(*/ [muddle < 100,
					    string(`DSK:`, unm,`;ZORK SAVE`)] /*)*/,
					   /*(*/ [t,
					    string(`DSK:<`, unm,`>ZORK.SAVE`)] /*)*/)),
		       save_game(ch),
		       finish(chtype(() => /*(*/ [`. Saved.`] /*)*/, false))] /*)*/,
		      /*(*/ [tell(`Save failed.`),
		       tell(ch[1], 1, ` `, ch[2])] /*)*/)] /*)*/,
	       /*(*/ [tell(`Can't open channel for save.`)] /*)*/)] /*)*/,
	/*(*/ [t, tell(`Can't open channel for save.`)] /*)*/);
  }

export function do_restore() {
    let ch: (channel | false) = null;
    let str: string = null;
    let muddle: number = GLOBALS.muddle;
    let nowd: number = null;
    let now: number = null;
    let thend: number = null;
    cond(/*(*/ [muddle < 100,
	  str = string(`DSK:`, GLOBALS.xunm,`;ZORK SAVE`)] /*)*/,
	 /*(*/ [t,
	  str = string(`DSK:<`, GLOBALS.xunm,`>ZORK.SAVE`)] /*)*/);
prog(/*(*/ [/*(*/ [foo, t] /*)*/, /*(*/ [snm, sname()] /*)*/] /*)*/,
	 /*#*/ [decl, /*(*/ [/*(*/ [foo] /*)*/, (atom || false), /*(*/ [snm] /*)*/, special(string)] /*)*/] /*2*/,
	 cond(/*(*/ [ch = open(`READB`, str),
		cond(/*(*/ [restore_game(ch),
		       cond(/*(*/ [GLOBALS.winners[GLOBALS.xunm]] /*)*/,
			     /*(*/ [nowd = chtype(getbits(now = chtype(dskdate(), fix),
							 bits(18, 18)),
						fix) === thend = chtype(getbits(GLOBALS.then,bits(18, 18)), fix),
			      cond(/*(*/ [g__Q(_(now,GLOBALS.then), 2400)] /*)*/,
				    /*(*/ [tell(`It's too soon.`),
				     cond(/*(*/ [GLOBALS.muddle > 100,
					    off(`CHAR`, GLOBALS.inchan),
					    int_level(10000),
					    quit()] /*)*/),
				     quit()] /*)*/)] /*)*/,
			     /*(*/ [1_Q(_(nowd,thend)),
			      cond(/*(*/ [g__Q(_(_(chtype(getbits(now,bits(18, 0)), fix),
						_(24, 7200)),
					     chtype(getbits(now,bits(18, 0)), fix)),
					  2400)] /*)*/,
				    /*(*/ [tell(`It's too soon.`),
				     quit()] /*)*/)] /*)*/),
		       GLOBALS.intime = now,
		       tell(`Restored.`)] /*)*/,
		      /*(*/ [tell(`Restore failed.`)] /*)*/),
		room_desc()] /*)*/,
	       /*(*/ [(foo && muddle > 100),
		str = string(sname(), `ZORK.SAVE`),
		foo = false,
		again()] /*)*/,
	       /*(*/ [tell(ch[2], 1, ` `, ch[1])] /*)*/));
  }

export function prob(num: number) {
    l__Q(mod(random(), 100), num);
  }

`GET-ATOM TAKES A VALUE AND SEARCHES INITIAL FOR FIRST ATOM
SETG'ED TO THAT.`

define(get_atom, act, /*(*/ [val, `AUX`, /*(*/ [o, initial[oblist]] /*)*/] /*)*/,
  /*#*/ [decl, /*(*/ [/*(*/ [o] /*)*/, oblist] /*)*/] /*2*/,
  mapf(false,
    function(x: list(/*[*/ [rest, atom] /*]*/)) {
        mapf(false,
        function(x: atom) {
            cond(/*(*/ [(gassigned_Q(x) && /*,*/ [x] /*1*/ === val),
		 return(x,act)] /*)*/);
          },
	x);
      },
    o))

// ROOM-INFO --  PRINT SOMETHING ABOUT THIS PLACE  1. CHECK FOR LIGHT --> ELSE WARN LOSER  2. GIVE A DESCRIPTION OF THE ROOM  3. TELL WHAT'S ON THE FLOOR IN THE WAY OF OBJECTS  4. SIGNAL ENTRY INTO THE ROOM
GLOBALS.brief_X_flag = false
GLOBALS.super_brief_X_flag = false

gdecl(/*(*/ [super_brief_X_flag, brief_X_flag] /*)*/, (atom || false))

export function brief() {
    GLOBALS.brief_X_flag = t;
tell(`Brief descriptions.`);
  }

export function super_brief() {
    GLOBALS.super_brief_X_flag = t;
tell(`No long descriptions.`);
  }

export function un_brief() {
    GLOBALS.brief_X_flag = false;
GLOBALS.super_brief_X_flag = false;
tell(`Long descriptions.`);
  }

export function un_super_brief() {
    GLOBALS.super_brief_X_flag = false;
tell(`Some long descriptions.`);
  }

export function room_desc() {
    room_info(t);
  }

export function room_info(full?: (atom | false)) {
    let av: (false | object) = avehicle(GLOBALS.winner);
    let rm: room = GLOBALS.here;
    let prso: (direction | false | object) = GLOBALS.prsvec[2];
    let winobj: object = find_obj(`#####`);
    let outchan: channel = GLOBALS.outchan;
    let ra = null;
    GLOBALS.tell_flag = t;
(type_Q(prso,direction) && GLOBALS.prsvec[2] = false);
prog(/*(*/ [] /*)*/,
     cond(/*(*/ [GLOBALS.here !== aroom(GLOBALS.player),
	    GLOBALS.prsvec[1] = GLOBALS.walk_in_X_words,
	    tell(`Done.`),
	    return()] /*)*/,
	   /*(*/ [(prso && type_Q(prso,object)),
	    cond(/*(*/ [object_action()] /*)*/,
		  /*(*/ [oread(prso),
		   tell(oread(prso))] /*)*/,
		  /*(*/ [tell(`I see nothing special about the `,
			 1,
			 odesc2(prso),
			 `.`)] /*)*/),
	    return()] /*)*/,
	   /*(*/ [!lit_Q(rm),
	    tell(`It is pitch black.  You are likely to be eaten by a grue.`),
	    return(false)] /*)*/,
	   /*(*/ [((!full && GLOBALS.super_brief_X_flag) || (rseen_Q(rm) && (GLOBALS.brief_X_flag || prob(80)) && !full)),
	    tell(rdesc2(rm))] /*)*/,
	   /*(*/ [(empty_Q(rdesc1(rm)) && ra = raction(rm)),
	    GLOBALS.prsvec[1] = GLOBALS.look_X_words,
	    apply_random(ra),
	    GLOBALS.prsvec[1] = GLOBALS.foo_X_words, // Something innocuous] /*)*/,
	   /*(*/ [tell(rdesc1(rm))] /*)*/),
     rm[GLOBALS.rseen_Q] = t,
     (av && tell(`You are in the `, 1, odesc2(av), `.`)),
     mapf(false,
      function(x: object) {
          cond(/*(*/ [(ovis_Q(x) && describable_Q(x)),
	   cond(/*(*/ [x === av] /*)*/,
		 /*(*/ [t,
		  cond(/*(*/ [long_desc_obj(x),
		  	 (av && tell(` [in the room]`, 0)),
		  	 crlf()] /*)*/)] /*)*/),
	   cond(/*(*/ [trnn(x,GLOBALS.actorbit),
	   	  invent(orand(x))] /*)*/,
		 /*(*/ [see_inside_Q(x),
		  print_cont(x,av,winobj,GLOBALS.indentstr,cond(/*(*/ [full] /*)*/,
						   /*(*/ [GLOBALS.super_brief_X_flag,false] /*)*/,
						   /*(*/ [GLOBALS.brief_X_flag,false] /*)*/,
						   /*(*/ [t] /*)*/))] /*)*/)] /*)*/);
        },
      robjs(rm)),
     cond(/*(*/ [(ra = raction(rm) && !full),
	    GLOBALS.prsvec[1] = GLOBALS.walk_in_X_words,
	    apply_random(ra),
	    GLOBALS.prsvec[1] = GLOBALS.foo_X_words] /*)*/),
     t);
  }

psetg(indentstr, rest(istring(8), 8))

define(print_cont, print_c, /*(*/ [obj, av, winobj, indent, `OPTIONAL`, /*(*/ [case_Q, t] /*)*/,
			    `AUX`, /*(*/ [cont, ocontents(obj)] /*)*/] /*)*/,
    /*#*/ [decl, /*(*/ [/*(*/ [av] /*)*/, (false || object), /*(*/ [obj, winobj] /*)*/, object, /*(*/ [indent] /*)*/, string,
	   /*(*/ [cont] /*)*/, list(/*[*/ [rest, object] /*]*/), /*(*/ [case_Q] /*)*/, (atom || false)] /*)*/] /*2*/,
    cond(/*(*/ [!empty_Q(cont),
	   cond(/*(*/ [obj === find_obj(`TCASE`),
		  cond(/*(*/ [!case_Q, return(t, print_c)] /*)*/),
		  tell(`Your collection of treasures consists of:`)] /*)*/,
		 /*(*/ [!(cont.length === 1 && cont[1] === find_obj(`#####`)),
		  tell(indent,0),
		  tell(`The `, 1, odesc2(obj), ` contains:`)] /*)*/,
		 /*(*/ [return(t, print_c)] /*)*/),
	   mapf(false,
	     function(y: object) {
            cond(/*(*/ [(av && y === winobj)] /*)*/,
		     /*(*/ [(ovis_Q(y) && describable_Q(y) && !empty_Q(odesc2(y))),
		      tell(indent,1, ` A `, odesc2(y))] /*)*/);
cond(/*(*/ [see_inside_Q(y),
		      print_cont(y,av,winobj,back(indent))] /*)*/);
          },
	     ocontents(obj))] /*)*/))

`GIVE LONG DESCRIPTION OF OBJECT`

export function long_desc_obj(obj: object) {
    let str = null;
    cond(/*(*/ [(otouch_Q(obj) || !odesco(obj)),
	       str = odesc1(obj)] /*)*/,
	      /*(*/ [str = odesco(obj)] /*)*/);
cond(/*(*/ [empty_Q(str), false] /*)*/,
	      /*(*/ [tell(str,0)] /*)*/);
  }

`TRUE IF PARSER WON:  OTHERWISE INHIBITS OBJECT ACTIONS, CLOCKS (BUT NOT THIEF).`

gdecl(/*(*/ [parse_won] /*)*/, (atom || false))

psetg(reader_string, string(ascii(27), ascii(13), ascii(10)))

export function rdcom(ivec?: (false | vector)) {
    let str = GLOBALS.reader_string;
    let vc: vector = null;
    let rvec: (false | vector) = null;
    let rm: room = null;
    let inplen: number = 1;
    let inbuf: string = GLOBALS.inbuf;
    let winner: adv = GLOBALS.winner;
    let av: (false | object) = null;
    let outchan: channel = GLOBALS.outchan;
    let random_action = null;
    (ivec || prog(/*(*/ [] /*)*/,
		   outchan[13] = 1000,
		   room_info(t)));
repeat(/*(*/ [vval, cv] /*)*/,
	   /*#*/ [decl, /*(*/ [/*(*/ [cv] /*)*/, (false || verb)] /*)*/] /*2*/,
	   vval = t,
	   cond(/*(*/ [!ivec,
		  rm = GLOBALS.here,
		  princ(`>`),
		  GLOBALS.tell_flag = false,
		  inplen = readstring(inbuf,GLOBALS.inchan,str),
		  readchr(GLOBALS.inchan),
		  (GLOBALS.alt_flag || readchr(GLOBALS.inchan)),
		  vc = lex(inbuf,rest(inbuf,inplen), t)] /*)*/),
	   cond(/*(*/ [inplen > 0,
		  GLOBALS.moves = _(GLOBALS.moves,1),
		  cond(/*(*/ [GLOBALS.parse_won = (eparse((ivec || vc), false) && type_Q(cv = rvec = GLOBALS.prsvec[1], verb)),
			 cond(/*(*/ [!random_action = aaction(winner)] /*)*/,
			       /*(*/ [apply_random(random_action),
				return()] /*)*/),
			 (av = avehicle(winner) && random_action = oaction(av) && vval = !apply_random(random_action,read_in)),
			 cond(/*(*/ [(vval && random_action = vfcn(cv) && apply_random(random_action)),
				cond(/*(*/ [(random_action = raction(rm = GLOBALS.here) && apply_random(random_action))] /*)*/)] /*)*/)] /*)*/,
			/*(*/ [ivec,			 cond(/*(*/ [GLOBALS.tell_flag,				tell(`Please input entire command again.`)] /*)*/,
			       /*(*/ [tell(`Nothing happens.`)] /*)*/),
			 return()] /*)*/),
		  (GLOBALS.tell_flag || tell(`Nothing happens.`))] /*)*/,
		 /*(*/ [t, GLOBALS.parse_won = false, tell(`Beg pardon?`)] /*)*/),
	   mapf(false,
		 function(x: hack) {
          cond(/*(*/ [random_action = haction(x),
				apply_random(random_action,x)] /*)*/);
        },
		 GLOBALS.demons),
	   (GLOBALS.parse_won && av = avehicle(winner) && random_action = oaction(av) && apply_random(random_action,read_out)),
	   (ivec && return()));
  }

export function score_obj(obj: object) {
    let temp = null;
    cond(/*(*/ [temp = ofval(obj) > 0,
	       score_upd(temp),
	       obj[GLOBALS.ofval] = 0] /*)*/);
  }

export function score_room(rm: room) {
    let temp = null;
    cond(/*(*/ [temp = rval(rm) > 0,
	       score_upd(temp),
	       rm[GLOBALS.rval] = 0] /*)*/);
  }

export function score_upd(num: number) {
    let winner = GLOBALS.winner;
    winner[GLOBALS.ascore] = _(ascore(winner), num);
GLOBALS.raw_score = _(GLOBALS.raw_score,num);
  }

export function score(ask_Q?: (atom | false)) {
    let scor: number = null;
    let outchan: channel = outchan;
    let pct: number = null;
    GLOBALS.tell_flag = t;
crlf();
cond(/*(*/ [ask_Q,princ(`Your score would be `)] /*)*/,
	      /*(*/ [princ(`Your score is `)] /*)*/);
prin1(scor = ascore(GLOBALS.winner));
princ(` [total of `);
prin1(GLOBALS.score_max);
princ(` points], in `);
prin1(GLOBALS.moves);
cond(/*(*/ [1_Q(GLOBALS.moves), princ(` move.`)] /*)*/,
	      /*(*/ [princ(` moves.`)] /*)*/);
crlf();
princ(`This score gives you the rank of `);
pct = _(float(scor), float(GLOBALS.score_max));
princ(cond(/*(*/ [1_Q(pct), `Cheater`] /*)*/,
		     /*(*/ [pct > 0_95000000, `Wizard`] /*)*/,
		     /*(*/ [pct > 0_89999999, `Master`] /*)*/,
		     /*(*/ [pct > 0_79999999, `Winner`] /*)*/,
		     /*(*/ [pct > 0_60000000, `Hacker`] /*)*/,
		     /*(*/ [pct > 0_39999999, `Adventurer`] /*)*/,
		     /*(*/ [pct > 0_19999999, `Junior Adventurer`] /*)*/,
		     /*(*/ [pct > 0_09999999, `Novice Adventurer`] /*)*/,
		     /*(*/ [pct > 0_04999999, `Amateur Adventurer`] /*)*/,
		     /*(*/ [`Beginner`] /*)*/));
princ(`.`);
crlf();
  }

export function finish(ask_Q?: (atom | false)) {
    let scor: number = null;
    unwind(prog(/*(*/ [] /*)*/,
	  scor = score(ask_Q),
	  cond(/*(*/ [((ask_Q && tell(`Do you wish to leave the game? (Y is affirmative): `) && yes_no(false)) || !ask_Q),
	         record(scor,GLOBALS.moves,GLOBALS.deaths,ask_Q,GLOBALS.here),
	         quit()] /*)*/)),
	 quit());
  }

`PRINT OUT DESCRIPTION OF LOSSAGE:  WHEN PLAYED, SCORE, # MOVES, ETC.`

GLOBALS.record_string = istring(5)

gdecl(/*(*/ [record_string] /*)*/, string)

psetg(recorder_string, string(ascii(26), ascii(3), ascii(0)))

define(record, record, /*(*/ [score, moves, deaths, quit_Q, loc,
		`AUX`, /*(*/ [ch, false] /*)*/, /*(*/ [str, GLOBALS.record_string] /*)*/, fl, /*(*/ [ct, 0] /*)*/, /*(*/ [muddle, GLOBALS.muddle] /*)*/,
		/*(*/ [dev, value(dev)] /*)*/, /*(*/ [snm, value(snm)] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [muddle, score, moves, deaths] /*)*/, fix, /*(*/ [quit_Q] /*)*/, (atom || false), /*(*/ [loc] /*)*/, room,
	       /*(*/ [ch] /*)*/, (channel(fix) || false), /*(*/ [str] /*)*/, string, /*(*/ [ct, fl] /*)*/, fix,
	       /*(*/ [dev, snm] /*)*/, string] /*)*/] /*2*/,
	unwind(prog(/*(*/ [] /*)*/,
	  prog(/*(*/ [] /*)*/,
		cond(/*(*/ [ch = open(`READB`, `ZORK`, `LOG`, dev,snm),
		       cond(/*(*/ [g__Q(fl = file_length(ch), 1),
			      access(ch,_(fl,1)),
			      ct = readstring(str,ch,GLOBALS.recorder_string)] /*)*/),
		       close(ch),
		       cond(/*(*/ [ch = open(`PRINTO`, `ZORK`, `LOG`, dev,snm)] /*)*/,
			     /*(*/ [(muddle > 100 && ch[3] === _600123_),
			      // Can't win--no write access,
			      return(t, record)] /*)*/,
			     /*(*/ [t, sleep(1), again()] /*)*/),
		       access(ch,max(0, _(fl,1))),
		       printstring(str,ch,ct)] /*)*/,
		      /*(*/ [((muddle < 100 && ch[3] !== _4000000_) || (muddle > 100 && ch[3] === _600130_)),
		       // on 10x, must get FILE BUSY to try again,
		       sleep(1),
		       again()] /*)*/,
		      /*(*/ [ch = open(`PRINT`, `ZORK`, `LOG`, dev,snm)] /*)*/,
		      /*(*/ [(muddle > 100 && ch[3] === _600117_),
		       // No write access,
		       return(t, record)] /*)*/,
		      /*(*/ [return(t, record)] /*)*/)),
	  crlf(ch),
	  princ(`	`, ch),
	  princ(GLOBALS.user_name,ch),
	  cond(/*(*/ [GLOBALS.user_name != GLOBALS.xunm,
		 princ(`  (`, ch),
		 princ(GLOBALS.xunm,ch),
		 princ(_X__, ch)] /*)*/),
	  princ(`	`, ch),
	  pdskdate(dskdate(), ch),
	  crlf(ch),
	  play_time(ch,false),
	  crlf(ch),
	  prin1(score,ch),
	  princ(_X__, ch),
	  prin1(GLOBALS.score_max,ch),
	  princ(` points, `, ch),
	  prin1(moves,ch),
	  princ(` moves, `, ch),
	  prin1(deaths,ch),
	  princ(` death`, ch),
	  cond(/*(*/ [1_Q(deaths), princ(`.`, ch)] /*)*/,
		/*(*/ [t, princ(`s.`, ch)] /*)*/),
	  princ(`  In `, ch),
	  princ(rdesc2(loc), ch),
	  cond(/*(*/ [quit_Q,princ(`. Quit.`, ch)] /*)*/,
		/*(*/ [empty_Q(quit_Q), princ(`. Died.`, ch)] /*)*/,
		/*(*/ [princ(quit_Q[1], ch)] /*)*/),
	  crlf(ch),
	  mapf(false,
		function(x: atom, y: string) {
            cond(/*(*/ [/*,*/ [x] /*1*/,princ(`/`, ch), princ(y,ch)] /*)*/);
          },
		GLOBALS.flag_names,		GLOBALS.short_names),
	  mapf(false,
		function(x: atom, y: string) {
            cond(/*(*/ [0_Q(/*,*/ [x] /*1*/), princ(`/`, ch), princ(y,ch)] /*)*/);
          },
		GLOBALS.val_names,		GLOBALS.short_val_names),
	  crlf(ch),
	  close(ch)),
	 (ch && !0_Q(ch[1]) && close(ch))))

flag_names 

gdecl(/*(*/ [flag_names, val_names] /*)*/,
       uvector(/*[*/ [rest, atom] /*]*/),
       /*(*/ [short_names, short_val_names] /*)*/,
       vector(/*[*/ [rest, string] /*]*/))

block(/*(*/ [(flag[oblist] || moblist(flag)), initial[oblist], root()] /*)*/)

psetg(flag_names,
      uvector(kitchen_window,
	       troll_flag,
	       key_flag,
	       low_tide,
	       dome_flag,
	       glacier_flag,
	       echo_flag,
	       riddle_flag,
	       lld_flag,
	       cyclops_flag,
	       magic_flag,
	       rainbow,
	       gnome_door,
	       carousel_flip,
	       cage_solve))

endblock()

psetg(short_names,
      vector(`KI`, `TR`, `KE`, `LO`, `DO`, `GL`, `EC`,
	      `RI`, `LL`, `CY`, `MA`, `RA`, `GN`, `CA`, `CG`))

psetg(val_names, uvector(light_shaft))

psetg(short_val_names, vector(`LI`))

export function pdskdate(wd: primtype(word), ch: channel) {
    let tim: number = chtype(getbits(wd,bits(18, 0)), fix);
    let a_p: string = ` AM`;
    let hr: number = null;
    princ(` `, ch);
cond(/*(*/ [0_Q(chtype(wd,fix)), princ(`unknown `, ch)] /*)*/,
	      /*(*/ [t,
	       princ(GLOBALS.months[chtype(getbits(wd,bits(4, 23)), fix)], ch),
	       princ(` `, ch),
	       prin1(chtype(getbits(wd,bits(5, 18)), fix), ch),
	       princ(` at `, ch),
	       hr = _(tim,7200),
	       cond(/*(*/ [g__Q(hr,12), hr = _(hr,12), a_p = ` PM`] /*)*/),
	       cond(/*(*/ [0_Q(hr), hr = 12] /*)*/),
	       prin1(hr,ch),
	       princ(`:`, ch),
	       hr = _(mod(tim,7200), 120),
	       cond(/*(*/ [hr < 10, princ(`0`, ch)] /*)*/),
	       prin1(hr,ch),
	       princ(a_p,ch)] /*)*/);
  }

psetg(months,
      /*[*/ [`January`,
       `February`,
       `March`,
       `April`,
       `May`,
       `June`,
       `July`,
       `August`,
       `September`,
       `October`,
       `November`,
       `December`] /*]*/)

gdecl(/*(*/ [months] /*)*/, vector(/*[*/ [12, string] /*]*/))

export function jigs_up(desc: string) {
    let winner: adv = GLOBALS.winner;
    let deaths: number = GLOBALS.deaths;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    let random_list: list(/*[*/ [rest, room] /*]*/) = GLOBALS.random_list;
    let lamp: (false | room) = find_obj(`LAMP`);
    let lamp_location: (false | room) = null;
    let val_list: list(/*[*/ [rest, object] /*]*/) = /*(*/ [] /*)*/;
    let lc = null;
    cond(/*(*/ [GLOBALS.dbg,    tell(desc)] /*)*/,
   /*(*/ [unwind(prog(/*(*/ [] /*)*/,
        cond(/*(*/ [winner !== GLOBALS.player,
	       tell(desc),
	       tell(`The `, 1, odesc2(aobj(winner)), ` has died.`),
	       remove_object(aobj(winner)),
	       winner[GLOBALS.aroom] = find_room(`FCHMP`),
	       return()] /*)*/),
	reset(GLOBALS.inchan),
	score_upd(_10),
	winner[GLOBALS.avehicle] = false,
	cond(/*(*/ [g__Q(deaths,2),
	       tell(desc),
	       tell(`You clearly are a suicidal maniac.  We don't allow psychotics in the
cave, since they may harm other adventurers.  Your remains will
installed in the Land of the Living Dead, where your fellow adventurers 
may gloat over them.`),
	       finish(false)] /*)*/,
	      /*(*/ [GLOBALS.deaths = _(deaths,1),
	       tell(desc),
	       tell(`Do you want me to try to patch you?`, 0),
	       cond(/*(*/ [!yes_no(t),
		      tell(`What?  You don't trust me?  Why, only last week I patched a running ITS
and it survived for over 30 seconds.  Oh, well.`, 2),
		      finish(false)] /*)*/,
		     /*(*/ [t,
		      tell(`Now, let me see...
Well, we weren't quite able to restore your state.  You can't have
everything.`),
		      cond(/*(*/ [lamp_location = oroom(lamp),
			     winner[GLOBALS.aobjs] = /*(*/ [lamp,_X,aobjs] /*)*/,
			     cond(/*(*/ [memq(lamp,robjs(lamp_location)),
				    remove_object(lamp)] /*)*/,
				   /*(*/ [lc = ocan(lamp),
				    lc[GLOBALS.ocontents] = splice_out(lamp,ocontents(lc)),
				    lamp[GLOBALS.oroom] = false,
				    lamp[GLOBALS.ocan] = false] /*)*/)] /*)*/,
			    /*(*/ [memq(lamp,aobjs),
			     winner[GLOBALS.aobjs] = /*(*/ [lamp,_X,splice_out(lamp,aobjs)] /*)*/] /*)*/),
		      find_obj(`DOOR`)[GLOBALS.otouch_Q] = false,
		      goto(find_room(`FORE1`)),
		      GLOBALS.egypt_flag_X_flag = t,
		      val_list = rob_adv(winner,val_list),
		      mapf(false,
			    function(x: object, y: room) {
                        insert_object(x,y);
                      },
			    aobjs = aobjs(winner),
			    random_list),
		      cond(/*(*/ [g__Q(random_list.length, aobjs.length),
			     aobjs = val_list] /*)*/,
			    /*(*/ [empty_Q(val_list),
			     aobjs = rest(aobjs,random_list.length)] /*)*/,
			    /*(*/ [t,
			     putrest(rest(val_list,_(val_list.length, 1)),
				      rest(aobjs,random_list.length)),
			     aobjs = val_list] /*)*/),
		      mapf(false,
			    function(x: object, y: room) {
                        insert_object(x,y);
                      },
			    aobjs,			    GLOBALS.rooms),
		      winner[GLOBALS.aobjs] = /*(*/ [] /*)*/,
		      t] /*)*/)] /*)*/)),
     prog(/*(*/ [] /*)*/,
       record(score(false), GLOBALS.moves,GLOBALS.deaths,false, GLOBALS.here),
       quit()))] /*)*/);
  }

export function info() {
    file_to_tty(`MADADV`, `INFO`);
  }

export function help() {
    file_to_tty(`MADADV`, `HELP`);
  }

psetg(breaks, string(ascii(3), ascii(0)))

export function file_to_tty(file1: string, file2: string, dev?: string, snm: string) {
    let ch: (channel | false) = open(`READ`, file1,file2,dev,snm);
    let len: number = null;
    let buf: string = GLOBALS.inbuf;
    let buflen: number = buf.length;
    let iter: number = null;
    cond(/*(*/ [ch,	       unwind(prog(/*(*/ [] /*)*/,
		      len = file_length(ch),
		      iter = _(len,buflen),
		      (0_Q(mod(len,buflen)) || iter = _(iter,1)),
		      crlf(GLOBALS.outchan),
		      GLOBALS.tell_flag = t,
		      repeat(/*(*/ [slen] /*)*/,
			      /*#*/ [decl, /*(*/ [/*(*/ [slen] /*)*/, fix] /*)*/] /*2*/,
			      cond(/*(*/ [1_Q(iter),
				     slen = readstring(buf,ch,GLOBALS.breaks)] /*)*/,
				    /*(*/ [slen = readstring(buf,ch,buflen)] /*)*/),
			      printstring(buf,GLOBALS.outchan,slen),
			      cond(/*(*/ [0_Q(iter = _(iter,1)),
				     crlf(GLOBALS.outchan),
				     return(close(ch))] /*)*/))),
		close(ch))] /*)*/,
	      /*(*/ [tell(`File not found.`)] /*)*/);
  }

export function invent(win?: adv) {
    let any: (atom | false) = false;
    let outchan: channel = GLOBALS.outchan;
    mapf(false,
    function(x: object) {
        cond(/*(*/ [ovis_Q(x),
		   (any || prog(/*(*/ [] /*)*/,
				  cond(/*(*/ [win === GLOBALS.player,
					 tell(`You are carrying:`)] /*)*/,
					/*(*/ [tell(`The `,
					       1,
					       odesc2(aobj(win)),
					       ` is carrying:`)] /*)*/),
				  any = t)),
		   tell(`A `, 0, odesc2(x)),
		   cond(/*(*/ [(empty_Q(ocontents(x)) || !see_inside_Q(x))] /*)*/,
			 /*(*/ [tell(` with `, 0),
			  print_contents(ocontents(x))] /*)*/),
		   crlf()] /*)*/);
      },
    aobjs(win));
(any || win !== GLOBALS.player || tell(`You are empty handed.`));
  }

export function print_contents(olst: list(/*[*/ [rest, object] /*]*/)) {
    let outchan: channel = GLOBALS.outchan;
    mapr(false,
	function(y: list(/*[*/ [rest, object] /*]*/)) {
        princ(`a `);
princ(odesc2(y[1]));
cond(/*(*/ [y.length > 2,
		       princ(`, `)] /*)*/,
		      /*(*/ [y.length === 2,
		       princ(`, and `)] /*)*/);
      },
	olst);
  }


// LIT? --  IS THERE ANY LIGHT SOURCE IN THIS ROOM

export function lit_Q(rm: room) {
    let win: adv = GLOBALS.winner;
    (rlight_Q(rm) || lfcn(robjs(rm)) || lfcn(aobjs(win)) || (win !== GLOBALS.player && GLOBALS.here === aroom(GLOBALS.player) && lfcn(aobjs(GLOBALS.player))));
  }

define(lfcn, lfcn, /*(*/ [l, `AUX`, y] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [l] /*)*/, list(/*[*/ [rest, object] /*]*/), /*(*/ [y] /*)*/, adv] /*)*/] /*2*/,
	mapf(false,
	      function(x: object) {
        (olight_Q(x) > 0 && mapleave(t));
cond(/*(*/ [(ovis_Q(x) && (oopen_Q(x) || transparent_Q(x))),
			     mapf(false,
			       function(x: object) {
                cond(/*(*/ [olight_Q(x) > 0,
					return(t, lfcn)] /*)*/);
              },
			       ocontents(x))] /*)*/);
cond(/*(*/ [(trnn(x,GLOBALS.actorbit) && lfcn(aobjs(y = orand(x)))),
			     mapleave(t)] /*)*/);
      },
	      l))

// WALK --  GIVEN A DIRECTION, WILL ATTEMPT TO WALK THERE

export function walk() {
    let leavings: (atom | room | cexit | nexit) = null;
    let nrm: (false | /*<*/ [primtype(vector), /*[*/ [rest, atom, (room | nexit | cexit)] /*]*/] /*>*/) = null;
    let where: atom = chtype(GLOBALS.prsvec[2], atom);
    let me: adv = GLOBALS.winner;
    let rm: room = me[1];
    let nl: (atom | room | false) = null;
    let random_action = null;
    let cxs = null;
    cond(/*(*/ [(me === GLOBALS.player && !lit_Q(rm) && prob(75)),
	       cond(/*(*/ [nrm = memq(where,rexits(rm)),
		      leavings = nrm[2],
		      cond(/*(*/ [(type_Q(leavings,room) && lit_Q(leavings)),
			     (goto(leavings) && room_info(false))] /*)*/,
			    /*(*/ [(type_Q(leavings,cexit) && leavings = cond(/*(*/ [(random_action = cxaction(leavings) && apply_random(random_action))] /*)*/,
					     /*(*/ [/*,*/ [cxflag(leavings)] /*1*/,
					      cxroom(leavings)] /*)*/) && lit_Q(leavings)),
			     (type_Q(leavings,atom) || (goto(leavings) && room_info(false)))] /*)*/,
			    /*(*/ [jigs_up(`Oh, no!  A fearsome grue slithered into the room and devoured you.`)] /*)*/)] /*)*/,
		     /*(*/ [jigs_up(`Oh, no!  You walked into the slavering fangs of a lurking grue.`)] /*)*/)] /*)*/,
	      /*(*/ [nrm = memq(where,rexits(rm)),
	       leavings = nrm[2],
	       cond(/*(*/ [type_Q(leavings,room), (goto(leavings) && room_info(false))] /*)*/,
		     /*(*/ [type_Q(leavings,cexit),
		      cond(/*(*/ [((random_action = cxaction(leavings) && nl = apply_random(random_action)) || (/*,*/ [cxflag(leavings)] /*1*/ && nl = cxroom(leavings))),
			     (type_Q(nl,atom) || (goto(nl) && room_info(false)))] /*)*/,
			    /*(*/ [cxs = cxstr(leavings),
			     (empty_Q(cxs) || tell(cxs))] /*)*/,
			    /*(*/ [tell(`There is no way to go in that direction.`)] /*)*/)] /*)*/,
		     /*(*/ [t, tell(leavings)] /*)*/)] /*)*/,
	      /*(*/ [tell(`There is no way to go in that direction.`)] /*)*/);
  }

export function take(take_Q?: (atom | false)) {
    let win: adv = GLOBALS.winner;
    let vec: vector = GLOBALS.prsvec;
    let rm: room = aroom(win);
    let nobj: object = null;
    let obj: object = vec[2];
    let getter_Q: (atom | false) = false;
    let robjs: list(/*[*/ [rest, object] /*]*/) = robjs(rm);
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(win);
    let load_max: number = GLOBALS.load_max;
    prog(/*(*/ [] /*)*/,
	 cond(/*(*/ [trnn(obj,GLOBALS.no_check_bit),
		return(object_action())] /*)*/),
	 cond(/*(*/ [ocan(obj),
		nobj = ocan(obj),
		cond(/*(*/ [see_inside_Q(nobj),
		       cond(/*(*/ [oopen_Q(nobj), getter_Q = t] /*)*/,
			     /*(*/ [tell(`I can't reach that.`), return(false)] /*)*/)] /*)*/,
		      /*(*/ [tell(`I can't see one here.`), return(false)] /*)*/)] /*)*/),
	 cond(/*(*/ [obj === avehicle(win),
	   tell(`You are in it, loser!`),
	   return(false)] /*)*/,
	  /*(*/ [!can_take_Q(obj),
	   (apply_object(obj) || tell(pick_one(GLOBALS.yuks))),
	   return(false)] /*)*/,
	  /*(*/ [(getter_Q || memq(obj,robjs)),
	   load_max = _(load_max,fix(_(_(1_0, load_max), astrength(win)))),
	   cond(/*(*/ [(getter_Q && memq(nobj,aobjs))] /*)*/,
		 /*(*/ [_(weight(aobjs), weight(ocontents(obj)), osize(obj)) > load_max,
		  tell(`Your load is too heavy.  You will have to leave something behind.`),
		  return(false)] /*)*/),
	   cond(/*(*/ [!apply_object(obj),
		  cond(/*(*/ [getter_Q,			 nobj[GLOBALS.ocontents] = splice_out(obj,ocontents(nobj)),
			 obj[GLOBALS.oroom] = false,
			 obj[GLOBALS.ocan] = false] /*)*/,
			/*(*/ [remove_object(obj)] /*)*/),
		  win[GLOBALS.aobjs] = /*(*/ [obj,_X,aobjs] /*)*/,
		  obj[GLOBALS.otouch_Q] = t,
		  score_obj(obj),
		  cond(/*(*/ [take_Q,tell(`Taken.`)] /*)*/, /*(*/ [t] /*)*/)] /*)*/,
		 /*(*/ [t] /*)*/)] /*)*/,
	  /*(*/ [memq(obj,aobjs), tell(`You already have it.`)] /*)*/,
	  /*(*/ [tell(`I can't see one here.`), false] /*)*/));
  }

export function putter(objact?: (atom | false)) {
    let pv: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let objo: object = pv[2];
    let obji: object = pv[3];
    let win: adv = GLOBALS.winner;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(win);
    let crock: object = null;
    let can: object = null;
    let robjs: list(/*[*/ [rest, object] /*]*/) = robjs(GLOBALS.here);
    let ocan: (false | object) = false;
    prog(/*(*/ [] /*)*/,
	      cond(/*(*/ [trnn(objo,GLOBALS.no_check_bit),
		     return(object_action())] /*)*/),
	      cond(/*(*/ [(memq(objo,GLOBALS.stars) || memq(obji,GLOBALS.stars)),
		     tell(`Nice try.`),
		     return(false)] /*)*/),
	      cond(/*(*/ [(oopen_Q(obji) || openable_Q(obji) || trnn(obji,GLOBALS.vehbit)),
		     can = obji,
		     crock = objo] /*)*/,
		    /*(*/ [tell(`I can't do that.`), return(false)] /*)*/),
	      cond(/*(*/ [!oopen_Q(can),
		     tell(`I can't reach inside.`),
		     return(false)] /*)*/,
		    /*(*/ [can === crock,
		     tell(`How can you do that?`),
		     return(false)] /*)*/,
		    /*(*/ [_(weight(ocontents(can)), osize(crock)) > ocapac(can),
		     tell(`It won't fit.`),
		     return(false)] /*)*/),
	      cond(/*(*/ [(memq(crock,robjs) || (ocan = ocan(crock) && memq(ocan,robjs)) || (ocan && ocan = ocan(ocan) && memq(ocan,robjs))),
		     pv[1] = GLOBALS.take_X_words,
		     pv[2] = crock,
		     pv[3] = false,
		     cond(/*(*/ [!take(false), return(false)] /*)*/,
			   /*(*/ [aobjs = aobjs(win)] /*)*/)] /*)*/,
		    /*(*/ [ocan = ocan(crock),
		     cond(/*(*/ [oopen_Q(ocan),
			    win[GLOBALS.aobjs] = aobjs = /*(*/ [crock,_X,aobjs] /*)*/,
			    ocan[GLOBALS.ocontents] = splice_out(crock,ocontents(ocan)),
			    crock[GLOBALS.ocan] = false] /*)*/,
			   /*(*/ [tell(`I can't reach the `, 1, odesc2(crock)),
			    return(false)] /*)*/)] /*)*/),
	      pv[1] = GLOBALS.put_X_words,
	      pv[2] = crock,
	      pv[3] = can,
	      cond(/*(*/ [(objact && object_action()), return()] /*)*/,
		    /*(*/ [win[GLOBALS.aobjs] = splice_out(crock,aobjs),
		     can[GLOBALS.ocontents] = /*(*/ [crock,_X,ocontents(can)] /*)*/,
		     crock[GLOBALS.ocan] = can,
		     crock[GLOBALS.oroom] = GLOBALS.here,
		     tell(`Done.`)] /*)*/));
  }
 
export function dropper() {
    let winner = GLOBALS.winner;
    let av: (false | object) = avehicle(winner);
    let aobjs = aobjs(winner);
    let getter_Q: (atom | false) = false;
    let vec: vector(verb, object, (false | object)) = GLOBALS.prsvec;
    let rm: room = aroom(winner);
    let obj: object = vec[2];
    let pi: (false | object) = vec[3];
    let nobj: object = null;
    prog(/*(*/ [] /*)*/,
	      cond(/*(*/ [(memq(vname(vec[1]), () => /*[*/ [drop_X_words, pour_X_words] /*]*/) && pi),
		     vec[1] = GLOBALS.put_X_words,
		     return(putter())] /*)*/,
		    /*(*/ [(pi && !(memq(obj,aobjs) || memq(ocan(obj), aobjs))),
		     vec[2] = pi,
		     vec[3] = obj,
		     obj = vec[2]] /*)*/),
	      cond(/*(*/ [trnn(obj,GLOBALS.no_check_bit),
		     return(object_action())] /*)*/),
	      cond(/*(*/ [(ocan(obj) && nobj = ocan(obj) && memq(nobj,aobjs)),
		     cond(/*(*/ [oopen_Q(nobj), getter_Q = t] /*)*/,
			   /*(*/ [transparent_Q(nobj),
			    tell(`I can't reach that.`),
			    return()] /*)*/,
			   /*(*/ [tell(`I can't see that here.`)] /*)*/)] /*)*/),
	      cond(/*(*/ [(getter_Q || memq(obj,aobjs)),
		     cond(/*(*/ [av] /*)*/,
			   /*(*/ [getter_Q,			    nobj[GLOBALS.ocontents] = splice_out(obj,ocontents(nobj)),
			    obj[GLOBALS.ocan] = false] /*)*/,
			   /*(*/ [winner[GLOBALS.aobjs] = splice_out(obj,aobjs)] /*)*/),
		     cond(/*(*/ [av,vec[2] = obj, vec[3] = av, putter(false)] /*)*/,
			   /*(*/ [insert_object(obj,rm)] /*)*/),
		     cond(/*(*/ [object_action()] /*)*/,
			   /*(*/ [vname(vec[1]) === drop_X_words,
			    tell(`Dropped.`)] /*)*/,
			   /*(*/ [vname(vec[1]) === throw_X_words,
			    tell(`Thrown.`)] /*)*/)] /*)*/,
		    /*(*/ [tell(`You are not carrying that.`)] /*)*/));
  }


`STUFF FOR 'EVERYTHING' AND 'VALUABLES'`
GLOBALS.obj_uv = chutype(rest(iuvector(20), 20), object)
gdecl(/*(*/ [obj_uv] /*)*/, uvector(/*[*/ [rest, object] /*]*/))

export function frob_lots(uv: uvector(/*[*/ [rest, object] /*]*/)) {
    let prsvec: vector(verb, /*[*/ [2, any] /*]*/) = GLOBALS.prsvec;
    let pa: verb = prsvec[1];
    let ra: rapplic = vfcn(pa);
    let pi: (object | false) = null;
    let winner: adv = GLOBALS.winner;
    let here: room = GLOBALS.here;
    cond(/*(*/ [pa === GLOBALS.take_X_words,
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [(can_take_Q(x) || trnn(x,GLOBALS.trytakebit)),
		    prsvec[2] = x,
		    tell(odesc2(x), 0, `:
  `),
		    apply_random(ra),
		    cond(/*(*/ [here !== aroom(winner),
			   mapleave()] /*)*/)] /*)*/);
          },
	   uv)] /*)*/,
	/*(*/ [(pa === GLOBALS.drop_X_words || pa === GLOBALS.put_X_words),
	 mapf(false,
	   function(x: object) {
            prsvec[2] = x;
tell(odesc2(x), 0, `:
  `);
apply_random(ra);
cond(/*(*/ [here !== aroom(winner),
		    mapleave()] /*)*/);
          },
	   uv)] /*)*/);
  }

psetg(losstr, `I can't do everything, because I ran out of room.`)

export function everything() {
    let prsvec = GLOBALS.prsvec;
    let pa: verb = prsvec[1];
    let pi: object = null;
    let suv: uvector(/*[*/ [rest, object] /*]*/) = GLOBALS.obj_uv;
    let tuv: uvector(/*[*/ [rest, object] /*]*/) = top(suv);
    let lu: number = tuv.length;
    let here: room = GLOBALS.here;
    let winner: adv = GLOBALS.winner;
    cond(/*(*/ [pa === GLOBALS.take_X_words,
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [(ovis_Q(x) && !trnn(x,GLOBALS.actorbit)),
		    cond(/*(*/ [suv === tuv,
			   tell(GLOBALS.losstr),
			   mapleave()] /*)*/),
		    suv = back(suv),
		    suv[1] = x] /*)*/);
          },
	   robjs(here))] /*)*/,
	/*(*/ [pa === GLOBALS.drop_X_words,
	 mapf(false,
	   function(x: object) {
            suv = back(suv);
suv[1] = x;
          },
	   aobjs(winner))] /*)*/,
	/*(*/ [pa === GLOBALS.put_X_words,
	 pi = prsvec[3],
	 prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: object) {
              cond(/*(*/ [(ovis_Q(x) && x !== pi && !trnn(x,GLOBALS.actorbit)),
		      cond(/*(*/ [suv === tuv,
			     tell(GLOBALS.losstr),
			     return(t, rp)] /*)*/),
		      suv = back(suv),
		      suv[1] = x] /*)*/);
            },
	     robjs(here)),
	   mapf(false,
	     function(x: object) {
              cond(/*(*/ [(suv === tuv && x !== pi),
		      tell(GLOBALS.losstr),
		      return(t, rp)] /*)*/);
suv = back(suv);
suv[1] = x;
            },
	     aobjs(winner)))] /*)*/);
cond(/*(*/ [empty_Q(suv),
	 tell(`I couldn't find anything.`)] /*)*/,
	/*(*/ [frob_lots(suv)] /*)*/);
  }

export function valuables() {
    let prsvec = GLOBALS.prsvec;
    let pa: verb = prsvec[1];
    let suv: uvector(/*[*/ [rest, object] /*]*/) = GLOBALS.obj_uv;
    let tuv: uvector(/*[*/ [rest, object] /*]*/) = top(suv);
    let pi: object = null;
    let lu: number = tuv.length;
    let here: room = GLOBALS.here;
    let winner: adv = GLOBALS.winner;
    cond(/*(*/ [pa === GLOBALS.take_X_words,
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [(ovis_Q(x) && !trnn(x,GLOBALS.actorbit) && !0_Q(otval(x))),
		    cond(/*(*/ [suv === tuv,
			   tell(GLOBALS.losstr),
			   mapleave()] /*)*/),
		    suv = back(suv),
		    suv[1] = x] /*)*/);
          },
	   robjs(here))] /*)*/,
	/*(*/ [pa === GLOBALS.drop_X_words,
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [!0_Q(otval(x)),
		    suv = back(suv),
		    suv[1] = x] /*)*/);
          },
	   aobjs(winner))] /*)*/,
	/*(*/ [pa === GLOBALS.put_X_words,
	 pi = prsvec[3],
	 prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: object) {
              cond(/*(*/ [(suv === tuv && x !== pi),
		      tell(GLOBALS.losstr),
		      return(t, rp)] /*)*/);
cond(/*(*/ [(ovis_Q(x) && !0_Q(otval(x))),
		      suv = back(suv),
		      suv[1] = x] /*)*/);
            },
	     robjs(here)),
	   mapf(false,
	     function(x: object) {
              cond(/*(*/ [(suv === tuv && x !== pi),
		      tell(GLOBALS.losstr),
		      return(t, rp)] /*)*/);
cond(/*(*/ [!0_Q(otval(x)),
		      suv = back(suv),
		      suv[1] = x] /*)*/);
            },
	     aobjs(winner)))] /*)*/);
cond(/*(*/ [empty_Q(suv),
	 tell(`I couldn't find any valuables.`)] /*)*/,
	/*(*/ [frob_lots(suv)] /*)*/);
  }



define(opener, open_act, /*(*/ [`AUX`, /*(*/ [pv, GLOBALS.prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/, /*(*/ [outchan, GLOBALS.outchan] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [prso] /*)*/, object, /*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [outchan] /*)*/, channel] /*)*/] /*2*/,
	cond(/*(*/ [object_action()] /*)*/,
	      /*(*/ [!trnn(prso,GLOBALS.contbit),
	       tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`)] /*)*/,
	      /*(*/ [ocapac(prso) !== 0,
	       cond(/*(*/ [oopen_Q(prso), tell(`It is already open.`)] /*)*/,
		     /*(*/ [t,
		      prso[GLOBALS.oopen_Q] = t,
		      cond(/*(*/ [(empty_Q(ocontents(prso)) || transparent_Q(prso)),
			     tell(`Opened.`)] /*)*/,
			    /*(*/ [GLOBALS.tell_flag = t,
			     tell(`Opening the `, 0, odesc2(prso), ` reveals `),
			     print_contents(ocontents(prso)),
			     princ(_X__),
			     crlf()] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [tell(`The `, 1, odesc2(prso), ` cannot be opened.`)] /*)*/))

define(closer, close_act, /*(*/ [`AUX`, /*(*/ [pv, GLOBALS.prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [prso] /*)*/, object] /*)*/] /*2*/,
	cond(/*(*/ [object_action()] /*)*/,
	      /*(*/ [!trnn(prso,GLOBALS.contbit),
	       tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`)] /*)*/,
	      /*(*/ [ocapac(prso) !== 0,
	       cond(/*(*/ [oopen_Q(prso), prso[GLOBALS.oopen_Q] = false, tell(`Closed.`)] /*)*/,
		     /*(*/ [t, tell(`It is already closed.`)] /*)*/)] /*)*/,
	      /*(*/ [tell(`You cannot close that.`)] /*)*/))

export function find() {
    let prso: (false | object) = GLOBALS.prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	/*(*/ [prso,	 find_frob(prso,		    robjs(GLOBALS.here),
		    `, which is in the room.`,
		    `There is a `,
		    ` here.`),
	 find_frob(prso,		    aobjs(GLOBALS.winner),
		    `, which you are carrying.`,
		    `You are carrying a `,
		    `.`),
	 cond(/*(*/ [!GLOBALS.tell_flag,
		tell(`I can't see that here.`)] /*)*/)] /*)*/,
	/*(*/ [tell(`I don't know what that is.`)] /*)*/);
  }

export function find_frob(prso, objl: list(/*[*/ [rest, object] /*]*/), str1: string, str2: string, str3: string) {
    mapf(false,
	function(x: object) {
        cond(/*(*/ [x === prso,
			 tell(str2,1, odesc2(x), str3)] /*)*/,
			/*(*/ [(transparent_Q(x) || (openable_Q(x) && oopen_Q(x))),
			 mapf(false,
			       function(y: object) {
                cond(/*(*/ [y === prso,
						tell(str2,1, odesc2(y), str3),
						tell(`It is in the `,
						      1,
						      odesc2(x),
						      str1)] /*)*/);
              },
			       ocontents(x))] /*)*/);
      },
	 objl);
  }

// OBJECT-ACTION --  CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS

export function object_action() {
    let vec: vector = GLOBALS.prsvec;
    let prso: (object | false) = vec[2];
    let prsi: (object | false) = vec[3];
    prog(/*(*/ [] /*)*/,
	      cond(/*(*/ [prsi,(apply_object(prsi) && return(t))] /*)*/),
	      cond(/*(*/ [prso,apply_object(prso)] /*)*/));
  }

`SIMPLE OBJ-HERE:  IS IT IN THE ROOM OR IN THE GUY'S HAND.  TO DO FULL
SEARCH, USE GET-OBJECT`

export function obj_here_Q(obj: object) {
    let nobj: (false | object) = null;
    let rm: room = GLOBALS.here;
    let win: adv = GLOBALS.winner;
    prog(/*(*/ [] /*)*/,
	      cond(/*(*/ [!ovis_Q(obj), return(false)] /*)*/,
		    /*(*/ [nobj = ocan(obj),
		     cond(/*(*/ [oopen_Q(nobj), obj = nobj] /*)*/, /*(*/ [return(false)] /*)*/)] /*)*/),
	      (memq(obj,robjs(rm)) || memq(obj,aobjs(win))));
  }

export function splice_out(obj, al: list) {
    cond(/*(*/ [al[1] === obj, rest(al)] /*)*/,
	      /*(*/ [t,
	       repeat(/*(*/ [/*(*/ [nl, rest(al)] /*)*/, /*(*/ [ol, al] /*)*/] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [nl, ol] /*)*/, list] /*)*/] /*2*/,
		       cond(/*(*/ [nl[1] === obj,
			      putrest(ol,rest(nl)),
			      return(al)] /*)*/,
			     /*(*/ [ol = nl, nl = rest(nl)] /*)*/))] /*)*/);
  }

`WEIGHT:  Get sum of OSIZEs of supplied list, recursing to the nth level.`

export function weight(objl: list(/*[*/ [rest, object] /*]*/)) {
    let bigfix: number = GLOBALS.bigfix;
    mapf(GLOBALS._,	      function(obj: object) {
        _(cond(/*(*/ [osize(obj) === GLOBALS.bigfix, 0] /*)*/,
			       /*(*/ [osize(obj)] /*)*/),
			 weight(ocontents(obj)));
      },
	      objl);
  }

export function pour() {
      }

export function move() {
    let vec: vector = GLOBALS.prsvec;
    let rm: room = aroom(GLOBALS.winner);
    let obj: (atom | object) = vec[2];
    cond(/*(*/ [memq(obj,robjs(rm)), object_action()] /*)*/,
	      /*(*/ [obj,	       tell(`I can't get to that to move it.`)] /*)*/);
  }

export function victims_Q(rm: room) {
    mapf(false,
	      function(x: object) {
        cond(/*(*/ [trnn(x,GLOBALS.vicbit), mapleave(x)] /*)*/);
      },
	      robjs(rm));
  }

define(lamp_on, lampo, /*(*/ [`AUX`, /*(*/ [prsvec, GLOBALS.prsvec] /*)*/, /*(*/ [me, GLOBALS.winner] /*)*/, /*(*/ [obj, prsvec[2]] /*)*/, /*(*/ [lit_Q,
							     lit_Q(GLOBALS.here)] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	cond(/*(*/ [(trnn(obj,GLOBALS.burnbit) && prsvec[3] && prsvec[1] = GLOBALS.burn_X_words),
	       burner()] /*)*/,
	      /*(*/ [object_action()] /*)*/,
	      /*(*/ [cond(/*(*/ [(olight_Q(obj) !== 0 && memq(obj,aobjs(me)))] /*)*/,
		     /*(*/ [t, tell(`You can't turn that on.`), return(t, lampo)] /*)*/),
	       cond(/*(*/ [olight_Q(obj) > 0, tell(`It is already on.`)] /*)*/,
		     /*(*/ [obj[GLOBALS.olight_Q] = 1,
		      tell(`The `, 1, odesc2(obj), ` is now on.`),
		      cond(/*(*/ [!lit_Q,
			     GLOBALS.prsvec[2] = false,
			     room_info(false)] /*)*/)] /*)*/)] /*)*/))

define(lamp_off, lampo, /*(*/ [`AUX`, /*(*/ [me, GLOBALS.winner] /*)*/, /*(*/ [obj, GLOBALS.prsvec[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	cond(/*(*/ [object_action()] /*)*/,
	      /*(*/ [cond(/*(*/ [(olight_Q(obj) !== 0 && memq(obj,aobjs(me)))] /*)*/,
		     /*(*/ [tell(`You can't turn that off.`), return(t, lampo)] /*)*/),
	       cond(/*(*/ [olight_Q(obj) < 0, tell(`It is already off.`)] /*)*/,
		     /*(*/ [obj[GLOBALS.olight_Q] = _1,
		      tell(`The `, 1, odesc2(obj), ` is now off.`),
		      (lit_Q(GLOBALS.here) || tell(`It is now pitch black.`))] /*)*/)] /*)*/))

`PARSER & AUXILIARIES`

GLOBALS.inbuf = istring(100)

// SET UP INPUT ERROR HANDLER TO CAUSE EPARSE TO FALSE OUT

psetg(cntprs, `I can't parse that.`)

GLOBALS.prsvec = ivector(3, /*#*/ [false, /*(*/ [] /*)*/] /*2*/)

export function word_Q(w) {
    lookup(w,GLOBALS.words);
  }

export function this_it_Q(objnam: atom, obj: atom, adj: (false | adjective)) {
    cond(/*(*/ [(ovis_Q(obj) && (objnam === oid(obj) || memq(objnam,onames(obj)))),
	       cond(/*(*/ [!adj] /*)*/, /*(*/ [memq(adj,oadjs(obj))] /*)*/)] /*)*/);
  }

GLOBALS.lexv = ivector(10, () => rest(istring(5), 5))

gdecl(/*(*/ [lexv] /*)*/, vector(/*[*/ [rest, string] /*]*/), /*(*/ [brks] /*)*/, string)

export function lex(s: string, sx?: string, silent_Q: (atom | false)) {
    let brks: string = GLOBALS.brks;
    let v: (false | vector) = GLOBALS.lexv;
    let s1: string = s;
    let quot: (atom | false) = false;
    mapr(false,
	 function(x: vector(/*[*/ [rest, string] /*]*/)) {
        let str: string = x[1];
        x[1] = rest(str,str.length);
      },
	 v);
cond(/*(*/ [s[1] === _X__Q, v[1] = substruc(`HELP`, 0, 4, back(v[1], 4))] /*)*/,
    /*(*/ [repeat(/*(*/ [slen] /*)*/,
       /*#*/ [decl, /*(*/ [/*(*/ [slen] /*)*/, fix] /*)*/] /*2*/,
       cond(/*(*/ [(s1.length === sx.length || memq(s1[1], brks)),
	 (s1.length > sx.length && (s1[1] === _X__ || s1[1] === _X__) && !quot && quot = t && v = rest(v)),
	 cond(/*(*/ [s !== s1,
	   cond(/*(*/ [empty_Q(v), (silent_Q || tell(`I'm too simple-minded for that.`))] /*)*/,
	    /*(*/ [v[1] = uppercase(substruc(s,				       0,
				       slen = min(_(s.length, s1.length),
						 5),
				       back(v[1], slen))),
	     v = rest(v)] /*)*/)] /*)*/),
	 cond(/*(*/ [s1.length === sx.length, return(v)] /*)*/),
	 s = rest(s1)] /*)*/),
       s1 = rest(s1))] /*)*/);
  }

psetg(brks, `\"' 	:;.,?!
`)

export function anything(s: string, sx: string) {
    mapr(false,
	      function(x) {
        cond(/*(*/ [x === sx, mapleave(false)] /*)*/,
			    /*(*/ [!memq(x[1], GLOBALS.brks), mapleave(x)] /*)*/);
      },
	      s);
  }

export function uppercase(str: string) {
    mapr(false,
	      function(s) {`AUX`, /*(*/ [c, ascii(s[1])] /*)*/
        cond(/*(*/ [(c > 96 && l__Q(c,122)),
			     s[1] = ascii(_(c,32))] /*)*/);
      },
	      str);
  }

export function wait(num?: number) {
    tell(`Time passes...`);
repeat(/*(*/ [/*(*/ [n, num] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [n] /*)*/, fix] /*)*/] /*2*/,
	cond(/*(*/ [(n = _(n,1) < 0 || clock_demon(GLOBALS.clocker)),
	       return()] /*)*/));
  }

`RUNS ONLY IF PARSE WON, TO PREVENT SCREWS FROM TYPOS.`

export function clock_demon(hack: hack) {
    let ca = null;
    let flg: (atom | false) = false;
    cond(/*(*/ [GLOBALS.parse_won,	   GLOBALS.prsvec[2] = false,
	   GLOBALS.prsvec[3] = false,
	   mapf(false,
		 function(ev: cevent) {
            let tick: number = ctick(ev);
            cond(/*(*/ [!cflag(ev)] /*)*/,
				 /*(*/ [0_Q(tick)] /*)*/,
				 /*(*/ [tick < 0,
				  GLOBALS.prsvec[1] = GLOBALS.c_int_X_words,
				  cond(/*(*/ [type_Q(ca = caction(ev), offset),
					 dispatch(ca)] /*)*/,
					/*(*/ [apply(ca)] /*)*/)] /*)*/,
				 /*(*/ [ev[GLOBALS.ctick] = tick = _(tick,1),
				  (0_Q(tick) && flg = t && GLOBALS.prsvec[1] = GLOBALS.c_int_X_words && cond(/*(*/ [type_Q(ca = caction(ev), offset),
					      dispatch(ca)] /*)*/,
					     /*(*/ [apply(ca)] /*)*/))] /*)*/);
          },
		 hobjs(hack))] /*)*/);
  }

gdecl(/*(*/ [clocker] /*)*/, hack)

export function clock_int(cev: cevent, num?: (number | false), clocker: hack) {
    cond(/*(*/ [!memq(cev,hobjs(clocker)),
	   clocker[GLOBALS.hobjs] = /*(*/ [cev,_X,hobjs(clocker)] /*)*/] /*)*/);
cond(/*(*/ [num,cev[GLOBALS.ctick] = num] /*)*/);
  }

GLOBALS.demons = /*(*/ [] /*)*/

(lookup(`COMPILE`, root()) || gassigned_Q(group_glue) || add_demon(GLOBALS.clocker = chtype(/*[*/ [clock_demon, /*(*/ [] /*)*/] /*]*/, hack)))

export function board() {
    let obj: object = GLOBALS.prsvec[2];
    let win: adv = GLOBALS.winner;
    let av: (false | object) = avehicle(win);
    cond(/*(*/ [!memq(obj,robjs(GLOBALS.here)),
	       tell(`The `, 1, odesc2(obj), ` must be on the ground to be boarded.`)] /*)*/,
	      /*(*/ [trnn(obj,GLOBALS.vehbit),
	       cond(/*(*/ [av,		      tell(`You are already in a `,
			    1,
			    odesc2(obj),
			    `, cretin!`)] /*)*/,
		     /*(*/ [t,
		      cond(/*(*/ [object_action()] /*)*/,
			    /*(*/ [tell(`You are in the `, 1, odesc2(obj), `.`),
		      	     win[GLOBALS.avehicle] = obj,
		             obj[GLOBALS.ocontents] = /*(*/ [find_obj(`#####`), _X,ocontents(obj)] /*)*/] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [tell(`I suppose you have a theory on boarding `,
		     1,
		     odesc2(obj),
		     `s.`)] /*)*/);
  }

export function unboard() {
    let obj: object = GLOBALS.prsvec[2];
    let win: adv = GLOBALS.winner;
    let av: (false | object) = avehicle(win);
    cond(/*(*/ [av === obj,
	       cond(/*(*/ [object_action()] /*)*/,
		     /*(*/ [rtrnn(GLOBALS.here,GLOBALS.rlandbit),
		      tell(`You are on your own feet again.`),
		      win[GLOBALS.avehicle] = false,
		      obj[GLOBALS.ocontents] = splice_out(find_obj(`#####`), ocontents(obj))] /*)*/,
		     /*(*/ [tell(`You realize, just in time, that disembarking here would probably be
fatal.`)] /*)*/)] /*)*/,
	      /*(*/ [tell(`You aren't in that!`)] /*)*/);
  }

export function goto(rm: room) {
    let win: adv = GLOBALS.winner;
    let av: (false | object) = avehicle(GLOBALS.winner);
    let here: room = GLOBALS.here;
    let lb: (atom | false) = rtrnn(rm,GLOBALS.rlandbit);
    cond(/*(*/ [((!lb && (!av || !rtrnn(rm,orand(av)))) || (rtrnn(here,GLOBALS.rlandbit) && lb && av && orand(av) !== GLOBALS.rlandbit && !rtrnn(rm,orand(av)))),
	       cond(/*(*/ [av,tell(`You can't go there in a `, 1, odesc2(av), `.`)] /*)*/,
		     /*(*/ [tell(`You can't go there without a vehicle.`)] /*)*/),
	       false] /*)*/,
	      /*(*/ [rtrnn(rm,GLOBALS.rmungbit), tell(rrand(rm))] /*)*/,
	      /*(*/ [t,
	       cond(/*(*/ [win !== GLOBALS.player,
		      remove_object(aobj(win)),
		      insert_object(aobj(win), rm)] /*)*/),
	       cond(/*(*/ [av,remove_object(av), insert_object(av,rm)] /*)*/),
	       GLOBALS.winner[GLOBALS.aroom] = GLOBALS.here = rm,
	       score_room(rm),
	       t] /*)*/);
  }

export function backer() {
    tell(`He who puts his hand to the plow and looks back is not fit for the
kingdom of winners.  In any case, \"back\" doesn't work.`);
  }

export function act_hack() {
    (object_action() || t);
  }

export function mung_room(rm: room, str: string) {
    rtro(rm,GLOBALS.rmungbit);
rm[GLOBALS.rrand] = str;
  }

export function command() {
    let pv: vector = GLOBALS.prsvec;
    let po: object = pv[2];
    let v: vector = rest(GLOBALS.lexv[``]);
    let hs: room = GLOBALS.here;
    let win: adv = GLOBALS.winner;
    let play: adv = GLOBALS.player;
    cond(/*(*/ [win !== play,
	   tell(`You cannot talk through another person!`)] /*)*/,
	  /*(*/ [trnn(po,GLOBALS.actorbit),
	   GLOBALS.winner = orand(po),
	   rdcom(v),
	   GLOBALS.winner = play,
	   GLOBALS.here = hs] /*)*/,
	  /*(*/ [tell(`You cannot talk to that!`)] /*)*/);
  }