// GUTS OF FROB:  BASIC VERBS, COMMAND READER, PARSER, VOCABULARY HACKERS.

G_alt_flag = t

export let G_muddle: FIX;export let G_tenex_Q: (ATOM | FALSE);export let G_vers: STRING;export let G_dev: STRING;export let G_snm: STRING;export let G_scratch_str: STRING;

export function save_it(fn?: STRING) {
    let muddle: FIX = G_muddle;
    let stv: (STRING | FIX) = null;
    let st: (STRING | FIX) = remarkably_disgusting_code();
    find_obj(`PAPER`)[G_odesc1] = unspeakable_code();
G_vers = st;
G_script_channel = false;
G_raw_score = 0;
ih = on(`IPC`, G_ilo,1);
handler(G_divert_int,G_divert_hand);
if(muddle > 100) {
      G_scratch_str = istring(32);
      G_dev = `DSK`;
      G_snm = `MDL`;
    } else {
      G_dev = `DSK`;
      G_snm = `MADMAN`;
    };
int_level(100000);
if(save(fn) == `SAVED`) {
      int_level(0);
      t;
    } else {
      t;
      // STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"     if that device exists; if not, (sort of) returns directory muddle     came from.  On its it returns # zorkers currently in existence.;
      if((type_Q(stv = starter(), fix) && stv > 3)) {
          (G_winners[G_xunm = xuname()] || G_xunm == `SEC` || G_xunm == `ELBOW` || (off(`CHAR`, G_inchan) && tell(`There appears before you a threatening figure clad all over
in heavy black armor.  His legs seem like the massive trunk
of the oak tree.  His broad shoulders and helmeted head loom
high over your own puny frame and you realize that his powerful
arms could easily crush the very life from your body.  There
hangs from his belt a veritable arsenal of deadly weapons:
sword, mace, ball and chain, dagger, lance, and trident.
He speaks with a commanding voice:

		\"YOU SHALL NOT PASS \"

As he grabs you by the neck all grows dim about you.`) && quit()));
        } else {
          G_snm = substruc(G_scratch_str,					  0,
					  _(G_scratch_str.length,
					     memq(_X__, stv).length));
        };
      if(G_muddle > 100) {
          G_tenex_Q = getsys();
        } else {
          apply(G_ipc_on,uname(), `ZORK`);
        };
      bh = on(`BLOCKED`, G_blo,100);
      start(`WHOUS`, st);
    };
  }



`Stuff for diverting gc's`

G_divert_cnt = 0

G_divert_max = 99

G_divert_inc = 4000

G_divert_amt = 0

G_divert_lmt = 100000

export let G_divert_cnt: FIX;export let G_divert_max: FIX;export let G_divert_inc: FIX;export let G_divert_amt: FIX;export let G_divert_lmt: FIX;

export function divert_fcn(amt, reason) {
    G_divert_cnt = _(G_divert_cnt,1);
G_divert_amt = _(G_divert_amt,G_divert_inc,amt);
if((G_divert_cnt > G_divert_max || G_divert_amt > G_divert_lmt)) {
      // Too much diversion ?;
      G_divert_amt = G_divert_cnt = 0;
      gc_fcn();
      gc();
    } else {
      else;
      // Divert this request for storage;
      if(1_Q(G_divert_cnt)) {
          // First diversion ?;
          handler(G_gc_int,G_gc_hand);
        };
      bloat(_(amt,G_divert_inc));
      // Get storage desired plus extra increment;
    };
  }

G_divert_hand = handler(G_divert_int = event(`DIVERT-AGC`, 1000),
			G_divert_fcn)

off(G_divert_hand)

export function gc_fcn(`TUPLE`, t) {
    off(G_gc_hand);
G_divert_amt = G_divert_cnt = 0;
  }

G_gc_hand = handler(G_gc_int = event(`GC`, 11),
			G_gc_fcn)

off(G_gc_hand)



export function xuname() {
    mapf(G_string,	function(x: CHARACTER) {
        if((0_Q(ascii(x)) || ascii(x) === 32)) {
          mapstop();
        } else {
          t;
          x;
        };
      },
	gxuname());
  }

export function its_get_name(uname: STRING) {
    let nm: (STRING | FALSE) = field(uname,G__name);
    let cma: (STRING | FALSE) = null;
    let jr: (STRING | FALSE) = null;
    let lfst: FIX = null;
    let llst: FIX = null;
    let tlen: FIX = null;
    let tstr: STRING = null;
    let str: STRING = null;
    if(true) {
      nm;
      if(cma = memq(_X__, nm)) {
          llst = _(nm.length, cma.length);
          cma = rest(cma);
          lfst = cma.length;
          if(jr = memq(_X__, cma)) {
              lfst = _(lfst,jr.length);
            };
          repeat(/*(*/ [] /*)*/,
			      if(empty_Q(cma)) {
                return();
              } else if(memq(cma[1], /*%*/ [string(ascii(32), ascii(9))] /*1*/)) {
                cma = rest(cma);
                lfst = _(lfst,1);
              } else {
                else;
                return();
              });
          tlen = _(lfst,1, llst,jr.length);
          str = istring(tlen,_X__);
          tstr = str;
          substruc(cma,0, lfst,tstr);
          tstr = rest(tstr,_(lfst,1));
          substruc(nm,0, llst,tstr);
          (jr && substruc(jr,0, jr.length, rest(tstr,llst)));
          G_user_name = str;
        } else {
          else;
          G_user_name = nm;
        };
    };
  }

export function unspeakable_code() {
    let str: STRING = null;
    let nstr: STRING = null;
    let len_i: FIX = 0;
    let o: OBJECT = find_obj(`PAPER`);
    str = memq(_X__, oread(o));
if(back(str,2)[1] === _X_1) {
      str = back(str,2);
      len_i = 1;
    } else {
      ;
    };
nstr = rest(memq(_X__, rest(memq(_X__, str))), 3);
string(`There is an issue of US NEWS & DUNGEON REPORT dated `,
	    substruc(str,0, _(str.length, nstr.length)),
	    ` here.`);
  }

export function remarkably_disgusting_code() {
    let n: PRIMTYPE(WORD) = dskdate();
    string(`This version created `,
	 G_months[chtype(getbits(n,bits(4, 23)), fix)],
	 _X__,
	 unparse(chtype(getbits(n,bits(5, 18)), fix)),
	 _X__);
  }

export function version() {
    tell(G_vers);
  }

G_played_time = 0

export let G_played_time: FIX;

export function get_time() {
    let now: PRIMTYPE(WORD) = dskdate();
    let then: PRIMTYPE(WORD) = G_intime;
    _(if(chtype(getbits(now,bits(18, 18)), fix) !== chtype(getbits(then,bits(18, 18)), fix)) {
        _(_(_(chtype(getbits(now,bits(18, 0)), fix),
			   _(24, 7200)),
			chtype(getbits(then,bits(18, 0)), fix)),
		     2);
      } else {
        ;
      },
	   G_played_time);
  }

export function play_time(outchan?: SPECIAL(CHANNEL), loser_Q: (ATOM | FALSE)) {
    let time: FIX = null;
    let mins: FIX = null;
    time = get_time();
G_tell_flag = t;
if(true) {
      loser_Q;
      princ(`You have been playing DUNGEON for `);
    } else {
      t;
      princ(`Played for `);
    };
(mins = _(time,3600) > 0 && prin1(mins) && princ(` hour`) && (1_Q(mins) || princ(`s`)) && princ(`, `));
if(mins = mod(_(time,60), 60) > 0) {
      prin1(mins);
      princ(` minute`);
      if(!1_Q(mins)) {
          princ(`s`);
        };
      princ(`, and `);
    };
prin1(mins = mod(time,60));
princ(` second`);
(1_Q(mins) || princ(`s`));
if(true) {
      loser_Q;
      princ(`.
`);
    } else {
      ;
    };
  } 

export function pc() {
      }

export function handle(frm, _tuple_, zork) {
    let zf: ANY = null;
    G_outchan[13] = 80;
back(G_inchan)[1][6] = /*#*/ [lose, 27] /*2*/;
if(((!gassigned_Q(xunm) || G_winners[G_xunm]) && pc())) {
      (gassigned_Q(saverep) && G_rep = G_saverep);
      (assigned_Q(bh) && off(bh));
      int_level(0);
      G_dbg = t;
      G_alt_flag = t;
    } else {
      t;
      if((!empty_Q(zork) && zork[1] === control_g_Q_X_errors)) {
          int_level(0);
          finish();
          back(G_inchan)[1][6] = if(G_muddle > 100) {
                if(true) {
                    G_tenex_Q;
                    /*#*/ [lose, _37_] /*2*/;
                  } else {
                    t;
                    /*#*/ [lose, _000000000012_] /*2*/;
                  };
              } else {
                t;
                /*#*/ [lose, _000000000015_] /*2*/;
              };
          erret(t, frm);
        } else if((zork.length === 3 && zork[1] === file_system_error_X_errors && !zf = zork[3] && zf.length === 3 && zf[1] == `ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY`)) {
          // HACK FOR ILLEGAL CHR AFTER CTRL-P;
          back(G_inchan)[1][6] = /*#*/ [lose, _000000000015_] /*2*/;
          int_level(0);
          erret(t, frm);
        } else {
          tell(G_vers);
          mapf(false, function(x) {
                print(x);
              }, zork);
          finish(/*#*/ [false, /*(*/ [`. Error.`] /*)*/] /*2*/);
        };
    };
  }

psetg(winners, () => /*[*/ [`BKD`, `TAA`, `MARC`, `PDL`, `MDL`] /*]*/)

export let G_winners: VECTOR(/*[*/ [REST, STRING] /*]*/);

(lookup(`COMPILE`, root()) || lookup(`GLUE`, package[oblist]) || G_errh = handler((error_X_interrupts[interrupt] || event(`ERROR`, 8)),
		   G_handle))

export let G_moves: FIX;export let G_script_channel: (CHANNEL | FALSE);

export function start(rm: STRING, st?: STRING) {
    let fn: (FALSE | STRING) = null;
    let muddle: FIX = G_muddle;
    let xunm: STRING = xuname();
    G_xunm = xunm;
G_ptemp = chtype(/*[*/ [chtype(with_X_words, prep), find_obj(`!!!!!`)] /*]*/, phrase);
G_intime = dskdate();
if(muddle < 100) {
      (xunm.length > 2 && substruc(xunm,0, 3) == `___` && quit());
      fn = its_get_name(xunm);
    } else {
      ;
    };
if(true) {
      fn;
      G_user_name = fn;
    } else {
      ;
    };
G_deaths = 0;
G_moves = 0;
G_winner = G_player;
G_winner[G_aroom] = G_here = find_room(rm);
tell(`Welcome to Dungeon.
`, 1, st);
random(chtype(dskdate(), fix));
int_level(0);
contin();
  }

export function contin() {
    G_alt_flag = false;
back(G_inchan)[1][6] = if(G_muddle > 100) {
        if(true) {
            G_tenex_Q;
            /*#*/ [lose, _37_] /*2*/;
          } else {
            t;
            /*#*/ [lose, _000000000012_] /*2*/;
          };
      } else {
        t;
        /*#*/ [lose, _000000000015_] /*2*/;
      };
G_saverep = G_rep;
G_rep = G_rdcom;
reset(G_inchan);
G_winner = G_player;
G_prsvec[2] = false;
  }

G_my_script = false

export let G_my_script: (ATOM | FALSE);

export function make_script() {
    let ch: (CHANNEL | FALSE) = null;
    if(true) {
      G_script_channel;
      false;
    } else {
      top(G_inchan)[1] = /*(*/ [ch] /*)*/;
      top(G_outchan)[1] = /*(*/ [ch] /*)*/;
      G_script_channel = ch;
      G_my_script = t;
    };
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
    let ch: (CHANNEL | FALSE) = null;
    let unm: STRING = G_xunm;
    let muddle: FIX = G_muddle;
    if(true) {
      G_my_script;
      do_unscript(false);
    };
if(true) {
      G_script_channel;
      tell(`You are already scripting.`);
    } else if(((muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch) && ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch))) && ch = open(`PRINT`, `ZORK`, `SCRIPT`, `DSK`, unm))) {
      top(G_inchan)[1] = /*(*/ [ch] /*)*/;
      top(G_outchan)[1] = /*(*/ [ch] /*)*/;
      G_script_channel = ch;
      if(G_muddle < 100) {
          tell(`Scripting to `, 1, G_xunm,`;ZORK SCRIPT`);
        } else {
          t;
          tell(`Scripting to <`, 1, G_xunm,`>ZORK.SCRIPT`);
        };
    } else {
      t;
      tell(`I can't open the script channel.`);
    };
  }

export function do_unscript(verbose?: (ATOM | FALSE)) {
    if(true) {
      G_script_channel;
      top(G_inchan)[1] = /*(*/ [] /*)*/;
      top(G_outchan)[1] = /*(*/ [] /*)*/;
      close(G_script_channel);
      G_script_channel = false;
      (verbose && tell(`Scripting off.`));
    } else {
      ;
    };
  }

export let G_then: FIX;

export function do_save() {
    let muddle: FIX = G_muddle;
    let ch: (CHANNEL | FALSE) = null;
    let unm: STRING = G_xunm;
    if((muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch)))) {
      if((muddle > 100 || (ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch)))) {
          (G_script_channel && do_unscript());
          tell(`Saving.`);
          int_level(100000);
          off(`CHAR`, G_inchan);
          G_then = chtype(dskdate(), fix);
          G_played_time = get_time();
          if(ch = open(`PRINTB`,
				     if(muddle < 100) {
                      string(`DSK:`, unm,`;ZORK SAVE`);
                    } else {
                      t;
                      string(`DSK:<`, unm,`>ZORK.SAVE`);
                    })) {
              save_game(ch);
              finish(chtype(() => /*(*/ [`. Saved.`] /*)*/, false));
            } else {
              tell(ch[1], 1, ` `, ch[2]);
            };
        } else {
          ;
        };
    } else {
      t;
      tell(`Can't open channel for save.`);
    };
  }

export function do_restore() {
    let ch: (CHANNEL | FALSE) = null;
    let str: STRING = null;
    let muddle: FIX = G_muddle;
    let nowd: FIX = null;
    let now: FIX = null;
    let thend: FIX = null;
    if(muddle < 100) {
      str = string(`DSK:`, G_xunm,`;ZORK SAVE`);
    } else {
      t;
      str = string(`DSK:<`, G_xunm,`>ZORK.SAVE`);
    };
prog(/*(*/ [/*(*/ [foo, t] /*)*/, /*(*/ [snm, sname()] /*)*/] /*)*/,
	 /*#*/ [decl, /*(*/ [/*(*/ [foo] /*)*/, (atom || false), /*(*/ [snm] /*)*/, special(string)] /*)*/] /*2*/,
	 if(ch = open(`READB`, str)) {
        if(restore_game(ch)) {
            if(G_winners[G_xunm]) {
                ;
              } else if(nowd = chtype(getbits(now = chtype(dskdate(), fix),
							 bits(18, 18)),
						fix) === thend = chtype(getbits(G_then,bits(18, 18)), fix)) {
                if(g__Q(_(now,G_then), 2400)) {
                    ;
                  } else {
                    if(G_muddle > 100) {
                        off(`CHAR`, G_inchan);
                        int_level(10000);
                        quit();
                      };
                    quit();
                  };
              } else {
                if(g__Q(_(_(chtype(getbits(now,bits(18, 0)), fix),
						_(24, 7200)),
					     chtype(getbits(now,bits(18, 0)), fix)),
					  2400)) {
                    ;
                  } else {
                    quit();
                  };
              };
            G_intime = now;
            tell(`Restored.`);
          } else {
            ;
          };
        room_desc();
      } else if((foo && muddle > 100)) {
        str = string(sname(), `ZORK.SAVE`);
        foo = false;
        again();
      } else {
        ;
      });
  }

export function prob(num: FIX) {
    l__Q(mod(random(), 100), num);
  }

`GET-ATOM TAKES A VALUE AND SEARCHES INITIAL FOR FIRST ATOM
SETG'ED TO THAT.`

define(get_atom, act, /*(*/ [val, `AUX`, /*(*/ [o, initial[oblist]] /*)*/] /*)*/,
  /*#*/ [decl, /*(*/ [/*(*/ [o] /*)*/, oblist] /*)*/] /*2*/,
  mapf(false,
    function(x: LIST(/*[*/ [REST, ATOM] /*]*/)) {
        mapf(false,
        function(x: ATOM) {
            if((gassigned_Q(x) && /*,*/ [x] /*1*/ === val)) {
              return(x,act);
            };
          },
	x);
      },
    o))

// ROOM-INFO --  PRINT SOMETHING ABOUT THIS PLACE  1. CHECK FOR LIGHT --> ELSE WARN LOSER  2. GIVE A DESCRIPTION OF THE ROOM  3. TELL WHAT'S ON THE FLOOR IN THE WAY OF OBJECTS  4. SIGNAL ENTRY INTO THE ROOM
G_brief_X_flag = false
G_super_brief_X_flag = false

export let G_super_brief_X_flag: (ATOM | FALSE);export let G_brief_X_flag: (ATOM | FALSE);

export function brief() {
    G_brief_X_flag = t;
tell(`Brief descriptions.`);
  }

export function super_brief() {
    G_super_brief_X_flag = t;
tell(`No long descriptions.`);
  }

export function un_brief() {
    G_brief_X_flag = false;
G_super_brief_X_flag = false;
tell(`Long descriptions.`);
  }

export function un_super_brief() {
    G_super_brief_X_flag = false;
tell(`Some long descriptions.`);
  }

export function room_desc() {
    room_info(t);
  }

export function room_info(full?: (ATOM | FALSE)) {
    let av: (FALSE | OBJECT) = avehicle(G_winner);
    let rm: ROOM = G_here;
    let prso: (DIRECTION | FALSE | OBJECT) = G_prsvec[2];
    let winobj: OBJECT = find_obj(`#####`);
    let outchan: CHANNEL = G_outchan;
    let ra = null;
    G_tell_flag = t;
(type_Q(prso,direction) && G_prsvec[2] = false);
prog(/*(*/ [] /*)*/,
     if(G_here !== aroom(G_player)) {
        G_prsvec[1] = G_walk_in_X_words;
        tell(`Done.`);
        return();
      } else if((prso && type_Q(prso,object))) {
        if(object_action()) {
            ;
          } else if(oread(prso)) {
            tell(oread(prso));
          } else {
            ;
          };
        return();
      } else if(!lit_Q(rm)) {
        tell(`It is pitch black.  You are likely to be eaten by a grue.`);
        return(false);
      } else if(((!full && G_super_brief_X_flag) || (rseen_Q(rm) && (G_brief_X_flag || prob(80)) && !full))) {
        tell(rdesc2(rm));
      } else if((empty_Q(rdesc1(rm)) && ra = raction(rm))) {
        G_prsvec[1] = G_look_X_words;
        apply_random(ra);
        G_prsvec[1] = G_foo_X_words;
        // Something innocuous;
      } else {
        ;
      },
     rm[G_rseen_Q] = t,
     (av && tell(`You are in the `, 1, odesc2(av), `.`)),
     mapf(false,
      function(x: OBJECT) {
          if((ovis_Q(x) && describable_Q(x))) {
            if(x === av) {
                ;
              } else {
                t;
                if(long_desc_obj(x)) {
                    (av && tell(` [in the room]`, 0));
                    crlf();
                  };
              };
            if(trnn(x,G_actorbit)) {
                invent(orand(x));
              } else {
                print_cont(x,av,winobj,G_indentstr,if(true) {
                      full;
                    } else if(true) {
                      G_super_brief_X_flag;
                      false;
                    } else if(true) {
                      G_brief_X_flag;
                      false;
                    } else {
                      t;
                    });
              };
          };
        },
      robjs(rm)),
     if((ra = raction(rm) && !full)) {
        G_prsvec[1] = G_walk_in_X_words;
        apply_random(ra);
        G_prsvec[1] = G_foo_X_words;
      },
     t);
  }

psetg(indentstr, rest(istring(8), 8))

define(print_cont, print_c, /*(*/ [obj, av, winobj, indent, `OPTIONAL`, /*(*/ [case_Q, t] /*)*/,
			    `AUX`, /*(*/ [cont, ocontents(obj)] /*)*/] /*)*/,
    /*#*/ [decl, /*(*/ [/*(*/ [av] /*)*/, (false || object), /*(*/ [obj, winobj] /*)*/, object, /*(*/ [indent] /*)*/, string,
	   /*(*/ [cont] /*)*/, list(/*[*/ [rest, object] /*]*/), /*(*/ [case_Q] /*)*/, (atom || false)] /*)*/] /*2*/,
    if(!empty_Q(cont)) {
      if(obj === find_obj(`TCASE`)) {
          if(!case_Q) {
              return(t, print_c);
            };
          tell(`Your collection of treasures consists of:`);
        } else if(!(cont.length === 1 && cont[1] === find_obj(`#####`))) {
          tell(indent,0);
          tell(`The `, 1, odesc2(obj), ` contains:`);
        } else {
          ;
        };
      mapf(false,
	     function(y: OBJECT) {
            if((av && y === winobj)) {
              ;
            } else {
              tell(indent,1, ` A `, odesc2(y));
            };
if(see_inside_Q(y)) {
              print_cont(y,av,winobj,back(indent));
            };
          },
	     ocontents(obj));
    })

`GIVE LONG DESCRIPTION OF OBJECT`

export function long_desc_obj(obj: OBJECT) {
    let str = null;
    if((otouch_Q(obj) || !odesco(obj))) {
      str = odesc1(obj);
    } else {
      ;
    };
if(empty_Q(str)) {
      false;
    } else {
      ;
    };
  }

`TRUE IF PARSER WON:  OTHERWISE INHIBITS OBJECT ACTIONS, CLOCKS (BUT NOT THIEF).`

export let G_parse_won: (ATOM | FALSE);

psetg(reader_string, string(ascii(27), ascii(13), ascii(10)))

export function rdcom(ivec?: (FALSE | VECTOR)) {
    let str = G_reader_string;
    let vc: VECTOR = null;
    let rvec: (FALSE | VECTOR) = null;
    let rm: ROOM = null;
    let inplen: FIX = 1;
    let inbuf: STRING = G_inbuf;
    let winner: ADV = G_winner;
    let av: (FALSE | OBJECT) = null;
    let outchan: CHANNEL = G_outchan;
    let random_action = null;
    (ivec || prog(/*(*/ [] /*)*/,
		   outchan[13] = 1000,
		   room_info(t)));
repeat(/*(*/ [vval, cv] /*)*/,
	   /*#*/ [decl, /*(*/ [/*(*/ [cv] /*)*/, (false || verb)] /*)*/] /*2*/,
	   vval = t,
	   if(!ivec) {
        rm = G_here;
        princ(`>`);
        G_tell_flag = false;
        inplen = readstring(inbuf,G_inchan,str);
        readchr(G_inchan);
        (G_alt_flag || readchr(G_inchan));
        vc = lex(inbuf,rest(inbuf,inplen), t);
      },
	   if(inplen > 0) {
        G_moves = _(G_moves,1);
        if(G_parse_won = (eparse((ivec || vc), false) && type_Q(cv = rvec = G_prsvec[1], verb))) {
            if(!random_action = aaction(winner)) {
                ;
              } else {
                return();
              };
            (av = avehicle(winner) && random_action = oaction(av) && vval = !apply_random(random_action,read_in));
            if((vval && random_action = vfcn(cv) && apply_random(random_action))) {
                if((random_action = raction(rm = G_here) && apply_random(random_action))) {
                    ;
                  };
              };
          } else {
            ivec;
            if(true) {
                G_tell_flag;
                tell(`Please input entire command again.`);
              } else {
                ;
              };
            return();
          };
        (G_tell_flag || tell(`Nothing happens.`));
      } else {
        t;
        G_parse_won = false;
        tell(`Beg pardon?`);
      },
	   mapf(false,
		 function(x: HACK) {
          if(random_action = haction(x)) {
            apply_random(random_action,x);
          };
        },
		 G_demons),
	   (G_parse_won && av = avehicle(winner) && random_action = oaction(av) && apply_random(random_action,read_out)),
	   (ivec && return()));
  }

export function score_obj(obj: OBJECT) {
    let temp = null;
    if(temp = ofval(obj) > 0) {
      score_upd(temp);
      obj[G_ofval] = 0;
    };
  }

export function score_room(rm: ROOM) {
    let temp = null;
    if(temp = rval(rm) > 0) {
      score_upd(temp);
      rm[G_rval] = 0;
    };
  }

export function score_upd(num: FIX) {
    let winner = G_winner;
    winner[G_ascore] = _(ascore(winner), num);
G_raw_score = _(G_raw_score,num);
  }

export function score(ask_Q?: (ATOM | FALSE)) {
    let scor: FIX = null;
    let outchan: CHANNEL = outchan;
    let pct: FLOAT = null;
    G_tell_flag = t;
crlf();
if(true) {
      ask_Q;
      princ(`Your score would be `);
    } else {
      ;
    };
prin1(scor = ascore(G_winner));
princ(` [total of `);
prin1(G_score_max);
princ(` points], in `);
prin1(G_moves);
if(1_Q(G_moves)) {
      princ(` move.`);
    } else {
      ;
    };
crlf();
princ(`This score gives you the rank of `);
pct = _(float(scor), float(G_score_max));
princ(if(1_Q(pct)) {
        `Cheater`;
      } else if(pct > 0_95000000) {
        `Wizard`;
      } else if(pct > 0_89999999) {
        `Master`;
      } else if(pct > 0_79999999) {
        `Winner`;
      } else if(pct > 0_60000000) {
        `Hacker`;
      } else if(pct > 0_39999999) {
        `Adventurer`;
      } else if(pct > 0_19999999) {
        `Junior Adventurer`;
      } else if(pct > 0_09999999) {
        `Novice Adventurer`;
      } else if(pct > 0_04999999) {
        `Amateur Adventurer`;
      } else {
        `Beginner`;
      });
princ(`.`);
crlf();
  }

export function finish(ask_Q?: (ATOM | FALSE)) {
    let scor: FIX = null;
    unwind(prog(/*(*/ [] /*)*/,
	  scor = score(ask_Q),
	  if(((ask_Q && tell(`Do you wish to leave the game? (Y is affirmative): `) && yes_no(false)) || !ask_Q)) {
          record(scor,G_moves,G_deaths,ask_Q,G_here);
          quit();
        }),
	 quit());
  }

`PRINT OUT DESCRIPTION OF LOSSAGE:  WHEN PLAYED, SCORE, # MOVES, ETC.`

G_record_string = istring(5)

export let G_record_string: STRING;

psetg(recorder_string, string(ascii(26), ascii(3), ascii(0)))

define(record, record, /*(*/ [score, moves, deaths, quit_Q, loc,
		`AUX`, /*(*/ [ch, false] /*)*/, /*(*/ [str, G_record_string] /*)*/, fl, /*(*/ [ct, 0] /*)*/, /*(*/ [muddle, G_muddle] /*)*/,
		/*(*/ [dev, value(dev)] /*)*/, /*(*/ [snm, value(snm)] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [muddle, score, moves, deaths] /*)*/, fix, /*(*/ [quit_Q] /*)*/, (atom || false), /*(*/ [loc] /*)*/, room,
	       /*(*/ [ch] /*)*/, (channel(fix) || false), /*(*/ [str] /*)*/, string, /*(*/ [ct, fl] /*)*/, fix,
	       /*(*/ [dev, snm] /*)*/, string] /*)*/] /*2*/,
	unwind(prog(/*(*/ [] /*)*/,
	  prog(/*(*/ [] /*)*/,
		if(ch = open(`READB`, `ZORK`, `LOG`, dev,snm)) {
            if(g__Q(fl = file_length(ch), 1)) {
                access(ch,_(fl,1));
                ct = readstring(str,ch,G_recorder_string);
              };
            close(ch);
            if(ch = open(`PRINTO`, `ZORK`, `LOG`, dev,snm)) {
                ;
              } else if((muddle > 100 && ch[3] === _600123_)) {
                // Can't win--no write access;
                return(t, record);
              } else {
                t;
                sleep(1);
                again();
              };
            access(ch,max(0, _(fl,1)));
            printstring(str,ch,ct);
          } else if(((muddle < 100 && ch[3] !== _4000000_) || (muddle > 100 && ch[3] === _600130_))) {
            // on 10x, must get FILE BUSY to try again;
            sleep(1);
            again();
          } else if(ch = open(`PRINT`, `ZORK`, `LOG`, dev,snm)) {
            ;
          } else if((muddle > 100 && ch[3] === _600117_)) {
            // No write access;
            return(t, record);
          } else {
            ;
          }),
	  crlf(ch),
	  princ(`	`, ch),
	  princ(G_user_name,ch),
	  if(G_user_name != G_xunm) {
          princ(`  (`, ch);
          princ(G_xunm,ch);
          princ(_X__, ch);
        },
	  princ(`	`, ch),
	  pdskdate(dskdate(), ch),
	  crlf(ch),
	  play_time(ch,false),
	  crlf(ch),
	  prin1(score,ch),
	  princ(_X__, ch),
	  prin1(G_score_max,ch),
	  princ(` points, `, ch),
	  prin1(moves,ch),
	  princ(` moves, `, ch),
	  prin1(deaths,ch),
	  princ(` death`, ch),
	  if(1_Q(deaths)) {
          princ(`.`, ch);
        } else {
          t;
          princ(`s.`, ch);
        },
	  princ(`  In `, ch),
	  princ(rdesc2(loc), ch),
	  if(true) {
          quit_Q;
          princ(`. Quit.`, ch);
        } else if(empty_Q(quit_Q)) {
          princ(`. Died.`, ch);
        } else {
          ;
        },
	  crlf(ch),
	  mapf(false,
		function(x: ATOM, y: STRING) {
            if(true) {
              /*,*/ [x] /*1*/;
              princ(`/`, ch);
              princ(y,ch);
            };
          },
		G_flag_names,		G_short_names),
	  mapf(false,
		function(x: ATOM, y: STRING) {
            if(0_Q(/*,*/ [x] /*1*/)) {
              princ(`/`, ch);
              princ(y,ch);
            };
          },
		G_val_names,		G_short_val_names),
	  crlf(ch),
	  close(ch)),
	 (ch && !0_Q(ch[1]) && close(ch))))

flag_names 

export let G_flag_names: UVECTOR(/*[*/ [REST, ATOM] /*]*/);export let G_val_names: UVECTOR(/*[*/ [REST, ATOM] /*]*/);export let G_short_names: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_short_val_names: VECTOR(/*[*/ [REST, STRING] /*]*/);

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

export function pdskdate(wd: PRIMTYPE(WORD), ch: CHANNEL) {
    let tim: FIX = chtype(getbits(wd,bits(18, 0)), fix);
    let a_p: STRING = ` AM`;
    let hr: FIX = null;
    princ(` `, ch);
if(0_Q(chtype(wd,fix))) {
      princ(`unknown `, ch);
    } else {
      t;
      princ(G_months[chtype(getbits(wd,bits(4, 23)), fix)], ch);
      princ(` `, ch);
      prin1(chtype(getbits(wd,bits(5, 18)), fix), ch);
      princ(` at `, ch);
      hr = _(tim,7200);
      if(g__Q(hr,12)) {
          hr = _(hr,12);
          a_p = ` PM`;
        };
      if(0_Q(hr)) {
          hr = 12;
        };
      prin1(hr,ch);
      princ(`:`, ch);
      hr = _(mod(tim,7200), 120);
      if(hr < 10) {
          princ(`0`, ch);
        };
      prin1(hr,ch);
      princ(a_p,ch);
    };
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

export let G_months: VECTOR(/*[*/ [12, STRING] /*]*/);

export function jigs_up(desc: STRING) {
    let winner: ADV = G_winner;
    let deaths: FIX = G_deaths;
    let aobjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(winner);
    let random_list: LIST(/*[*/ [REST, ROOM] /*]*/) = G_random_list;
    let lamp: (FALSE | ROOM) = find_obj(`LAMP`);
    let lamp_location: (FALSE | ROOM) = null;
    let val_list: LIST(/*[*/ [REST, OBJECT] /*]*/) = /*(*/ [] /*)*/;
    let lc = null;
    if(true) {
      G_dbg;
      tell(desc);
    } else {
      ;
    };
  }

export function info() {
    file_to_tty(`MADADV`, `INFO`);
  }

export function help() {
    file_to_tty(`MADADV`, `HELP`);
  }

psetg(breaks, string(ascii(3), ascii(0)))

export function file_to_tty(file1: STRING, file2: STRING, dev?: STRING, snm: STRING) {
    let ch: (CHANNEL | FALSE) = open(`READ`, file1,file2,dev,snm);
    let len: FIX = null;
    let buf: STRING = G_inbuf;
    let buflen: FIX = buf.length;
    let iter: FIX = null;
    if(true) {
      ch;
      unwind(prog(/*(*/ [] /*)*/,
		      len = file_length(ch),
		      iter = _(len,buflen),
		      (0_Q(mod(len,buflen)) || iter = _(iter,1)),
		      crlf(G_outchan),
		      G_tell_flag = t,
		      repeat(/*(*/ [slen] /*)*/,
			      /*#*/ [decl, /*(*/ [/*(*/ [slen] /*)*/, fix] /*)*/] /*2*/,
			      if(1_Q(iter)) {
                slen = readstring(buf,ch,G_breaks);
              } else {
                ;
              },
			      printstring(buf,G_outchan,slen),
			      if(0_Q(iter = _(iter,1))) {
                crlf(G_outchan);
                return(close(ch));
              })),
		close(ch));
    } else {
      ;
    };
  }

export function invent(win?: ADV) {
    let any: (ATOM | FALSE) = false;
    let outchan: CHANNEL = G_outchan;
    mapf(false,
    function(x: OBJECT) {
        if(ovis_Q(x)) {
          (any || prog(/*(*/ [] /*)*/,
				  if(win === G_player) {
                  tell(`You are carrying:`);
                } else {
                  ;
                },
				  any = t));
          tell(`A `, 0, odesc2(x));
          if((empty_Q(ocontents(x)) || !see_inside_Q(x))) {
              ;
            } else {
              print_contents(ocontents(x));
            };
          crlf();
        };
      },
    aobjs(win));
(any || win !== G_player || tell(`You are empty handed.`));
  }

export function print_contents(olst: LIST(/*[*/ [REST, OBJECT] /*]*/)) {
    let outchan: CHANNEL = G_outchan;
    mapr(false,
	function(y: LIST(/*[*/ [REST, OBJECT] /*]*/)) {
        princ(`a `);
princ(odesc2(y[1]));
if(y.length > 2) {
          princ(`, `);
        } else {
          princ(`, and `);
        };
      },
	olst);
  }


// LIT? --  IS THERE ANY LIGHT SOURCE IN THIS ROOM

export function lit_Q(rm: ROOM) {
    let win: ADV = G_winner;
    (rlight_Q(rm) || lfcn(robjs(rm)) || lfcn(aobjs(win)) || (win !== G_player && G_here === aroom(G_player) && lfcn(aobjs(G_player))));
  }

define(lfcn, lfcn, /*(*/ [l, `AUX`, y] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [l] /*)*/, list(/*[*/ [rest, object] /*]*/), /*(*/ [y] /*)*/, adv] /*)*/] /*2*/,
	mapf(false,
	      function(x: OBJECT) {
        (olight_Q(x) > 0 && mapleave(t));
if((ovis_Q(x) && (oopen_Q(x) || transparent_Q(x)))) {
          mapf(false,
			       function(x: OBJECT) {
                if(olight_Q(x) > 0) {
                  return(t, lfcn);
                };
              },
			       ocontents(x));
        };
if((trnn(x,G_actorbit) && lfcn(aobjs(y = orand(x))))) {
          mapleave(t);
        };
      },
	      l))

// WALK --  GIVEN A DIRECTION, WILL ATTEMPT TO WALK THERE

export function walk() {
    let leavings: (ATOM | ROOM | CEXIT | NEXIT) = null;
    let nrm: (FALSE | /*<*/ [PRIMTYPE(VECTOR), /*[*/ [REST, ATOM, (ROOM | NEXIT | CEXIT)] /*]*/] /*>*/) = null;
    let where: ATOM = chtype(G_prsvec[2], atom);
    let me: ADV = G_winner;
    let rm: ROOM = me[1];
    let nl: (ATOM | ROOM | FALSE) = null;
    let random_action = null;
    let cxs = null;
    if((me === G_player && !lit_Q(rm) && prob(75))) {
      if(nrm = memq(where,rexits(rm))) {
          leavings = nrm[2];
          if((type_Q(leavings,room) && lit_Q(leavings))) {
              (goto(leavings) && room_info(false));
            } else if((type_Q(leavings,cexit) && leavings = if((random_action = cxaction(leavings) && apply_random(random_action))) {
                      ;
                    } else {
                      /*,*/ [cxflag(leavings)] /*1*/;
                      cxroom(leavings);
                    } && lit_Q(leavings))) {
              (type_Q(leavings,atom) || (goto(leavings) && room_info(false)));
            } else {
              ;
            };
        } else {
          ;
        };
    } else if(nrm = memq(where,rexits(rm))) {
      leavings = nrm[2];
      if(type_Q(leavings,room)) {
          (goto(leavings) && room_info(false));
        } else if(type_Q(leavings,cexit)) {
          if(((random_action = cxaction(leavings) && nl = apply_random(random_action)) || (/*,*/ [cxflag(leavings)] /*1*/ && nl = cxroom(leavings)))) {
              (type_Q(nl,atom) || (goto(nl) && room_info(false)));
            } else if(cxs = cxstr(leavings)) {
              (empty_Q(cxs) || tell(cxs));
            } else {
              ;
            };
        } else {
          t;
          tell(leavings);
        };
    } else {
      ;
    };
  }

export function take(take_Q?: (ATOM | FALSE)) {
    let win: ADV = G_winner;
    let vec: VECTOR = G_prsvec;
    let rm: ROOM = aroom(win);
    let nobj: OBJECT = null;
    let obj: OBJECT = vec[2];
    let getter_Q: (ATOM | FALSE) = false;
    let robjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = robjs(rm);
    let aobjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(win);
    let load_max: FIX = G_load_max;
    prog(/*(*/ [] /*)*/,
	 if(trnn(obj,G_no_check_bit)) {
        return(object_action());
      },
	 if(ocan(obj)) {
        nobj = ocan(obj);
        if(see_inside_Q(nobj)) {
            if(oopen_Q(nobj)) {
                getter_Q = t;
              } else {
                return(false);
              };
          } else {
            return(false);
          };
      },
	 if(obj === avehicle(win)) {
        tell(`You are in it, loser!`);
        return(false);
      } else if(!can_take_Q(obj)) {
        (apply_object(obj) || tell(pick_one(G_yuks)));
        return(false);
      } else if((getter_Q || memq(obj,robjs))) {
        load_max = _(load_max,fix(_(_(1_0, load_max), astrength(win))));
        if((getter_Q && memq(nobj,aobjs))) {
            ;
          } else {
            tell(`Your load is too heavy.  You will have to leave something behind.`);
            return(false);
          };
        if(!apply_object(obj)) {
            if(true) {
                getter_Q;
                nobj[G_ocontents] = splice_out(obj,ocontents(nobj));
                obj[G_oroom] = false;
                obj[G_ocan] = false;
              } else {
                ;
              };
            win[G_aobjs] = /*(*/ [obj,_X,aobjs] /*)*/;
            obj[G_otouch_Q] = t;
            score_obj(obj);
            if(true) {
                take_Q;
                tell(`Taken.`);
              } else {
                t;
              };
          } else {
            t;
          };
      } else if(memq(obj,aobjs)) {
        tell(`You already have it.`);
      } else {
        false;
      });
  }

export function putter(objact?: (ATOM | FALSE)) {
    let pv: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let objo: OBJECT = pv[2];
    let obji: OBJECT = pv[3];
    let win: ADV = G_winner;
    let aobjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(win);
    let crock: OBJECT = null;
    let can: OBJECT = null;
    let robjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = robjs(G_here);
    let ocan: (FALSE | OBJECT) = false;
    prog(/*(*/ [] /*)*/,
	      if(trnn(objo,G_no_check_bit)) {
        return(object_action());
      },
	      if((memq(objo,G_stars) || memq(obji,G_stars))) {
        tell(`Nice try.`);
        return(false);
      },
	      if((oopen_Q(obji) || openable_Q(obji) || trnn(obji,G_vehbit))) {
        can = obji;
        crock = objo;
      } else {
        return(false);
      },
	      if(!oopen_Q(can)) {
        tell(`I can't reach inside.`);
        return(false);
      } else if(can === crock) {
        tell(`How can you do that?`);
        return(false);
      } else {
        tell(`It won't fit.`);
        return(false);
      },
	      if((memq(crock,robjs) || (ocan = ocan(crock) && memq(ocan,robjs)) || (ocan && ocan = ocan(ocan) && memq(ocan,robjs)))) {
        pv[1] = G_take_X_words;
        pv[2] = crock;
        pv[3] = false;
        if(!take(false)) {
            return(false);
          } else {
            ;
          };
      } else {
        if(oopen_Q(ocan)) {
            win[G_aobjs] = aobjs = /*(*/ [crock,_X,aobjs] /*)*/;
            ocan[G_ocontents] = splice_out(crock,ocontents(ocan));
            crock[G_ocan] = false;
          } else {
            return(false);
          };
      },
	      pv[1] = G_put_X_words,
	      pv[2] = crock,
	      pv[3] = can,
	      if((objact && object_action())) {
        return();
      } else {
        can[G_ocontents] = /*(*/ [crock,_X,ocontents(can)] /*)*/;
        crock[G_ocan] = can;
        crock[G_oroom] = G_here;
        tell(`Done.`);
      });
  }
 
export function dropper() {
    let winner = G_winner;
    let av: (FALSE | OBJECT) = avehicle(winner);
    let aobjs = aobjs(winner);
    let getter_Q: (ATOM | FALSE) = false;
    let vec: VECTOR(VERB, OBJECT, (FALSE | OBJECT)) = G_prsvec;
    let rm: ROOM = aroom(winner);
    let obj: OBJECT = vec[2];
    let pi: (FALSE | OBJECT) = vec[3];
    let nobj: OBJECT = null;
    prog(/*(*/ [] /*)*/,
	      if((memq(vname(vec[1]), () => /*[*/ [drop_X_words, pour_X_words] /*]*/) && pi)) {
        vec[1] = G_put_X_words;
        return(putter());
      } else {
        vec[2] = pi;
        vec[3] = obj;
        obj = vec[2];
      },
	      if(trnn(obj,G_no_check_bit)) {
        return(object_action());
      },
	      if((ocan(obj) && nobj = ocan(obj) && memq(nobj,aobjs))) {
        if(oopen_Q(nobj)) {
            getter_Q = t;
          } else if(transparent_Q(nobj)) {
            tell(`I can't reach that.`);
            return();
          } else {
            ;
          };
      },
	      if((getter_Q || memq(obj,aobjs))) {
        if(true) {
            av;
          } else if(true) {
            getter_Q;
            nobj[G_ocontents] = splice_out(obj,ocontents(nobj));
            obj[G_ocan] = false;
          } else {
            ;
          };
        if(true) {
            av;
            vec[2] = obj;
            vec[3] = av;
            putter(false);
          } else {
            ;
          };
        if(object_action()) {
            ;
          } else if(vname(vec[1]) === drop_X_words) {
            tell(`Dropped.`);
          } else {
            tell(`Thrown.`);
          };
      } else {
        ;
      });
  }


`STUFF FOR 'EVERYTHING' AND 'VALUABLES'`
G_obj_uv = chutype(rest(iuvector(20), 20), object)
export let G_obj_uv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/);

export function frob_lots(uv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/)) {
    let prsvec: VECTOR(VERB, /*[*/ [2, ANY] /*]*/) = G_prsvec;
    let pa: VERB = prsvec[1];
    let ra: RAPPLIC = vfcn(pa);
    let pi: (OBJECT | FALSE) = null;
    let winner: ADV = G_winner;
    let here: ROOM = G_here;
    if(pa === G_take_X_words) {
      mapf(false,
	   function(x: OBJECT) {
            if((can_take_Q(x) || trnn(x,G_trytakebit))) {
              prsvec[2] = x;
              tell(odesc2(x), 0, `:
  `);
              apply_random(ra);
              if(here !== aroom(winner)) {
                  mapleave();
                };
            };
          },
	   uv);
    } else {
      mapf(false,
	   function(x: OBJECT) {
            prsvec[2] = x;
tell(odesc2(x), 0, `:
  `);
apply_random(ra);
if(here !== aroom(winner)) {
              mapleave();
            };
          },
	   uv);
    };
  }

psetg(losstr, `I can't do everything, because I ran out of room.`)

export function everything() {
    let prsvec = G_prsvec;
    let pa: VERB = prsvec[1];
    let pi: OBJECT = null;
    let suv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/) = G_obj_uv;
    let tuv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/) = top(suv);
    let lu: FIX = tuv.length;
    let here: ROOM = G_here;
    let winner: ADV = G_winner;
    if(pa === G_take_X_words) {
      mapf(false,
	   function(x: OBJECT) {
            if((ovis_Q(x) && !trnn(x,G_actorbit))) {
              if(suv === tuv) {
                  tell(G_losstr);
                  mapleave();
                };
              suv = back(suv);
              suv[1] = x;
            };
          },
	   robjs(here));
    } else if(pa === G_drop_X_words) {
      mapf(false,
	   function(x: OBJECT) {
            suv = back(suv);
suv[1] = x;
          },
	   aobjs(winner));
    } else {
      pi = prsvec[3];
      prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: OBJECT) {
              if((ovis_Q(x) && x !== pi && !trnn(x,G_actorbit))) {
                if(suv === tuv) {
                    tell(G_losstr);
                    return(t, rp);
                  };
                suv = back(suv);
                suv[1] = x;
              };
            },
	     robjs(here)),
	   mapf(false,
	     function(x: OBJECT) {
              if((suv === tuv && x !== pi)) {
                tell(G_losstr);
                return(t, rp);
              };
suv = back(suv);
suv[1] = x;
            },
	     aobjs(winner)));
    };
if(empty_Q(suv)) {
      tell(`I couldn't find anything.`);
    } else {
      ;
    };
  }

export function valuables() {
    let prsvec = G_prsvec;
    let pa: VERB = prsvec[1];
    let suv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/) = G_obj_uv;
    let tuv: UVECTOR(/*[*/ [REST, OBJECT] /*]*/) = top(suv);
    let pi: OBJECT = null;
    let lu: FIX = tuv.length;
    let here: ROOM = G_here;
    let winner: ADV = G_winner;
    if(pa === G_take_X_words) {
      mapf(false,
	   function(x: OBJECT) {
            if((ovis_Q(x) && !trnn(x,G_actorbit) && !0_Q(otval(x)))) {
              if(suv === tuv) {
                  tell(G_losstr);
                  mapleave();
                };
              suv = back(suv);
              suv[1] = x;
            };
          },
	   robjs(here));
    } else if(pa === G_drop_X_words) {
      mapf(false,
	   function(x: OBJECT) {
            if(!0_Q(otval(x))) {
              suv = back(suv);
              suv[1] = x;
            };
          },
	   aobjs(winner));
    } else {
      pi = prsvec[3];
      prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: OBJECT) {
              if((suv === tuv && x !== pi)) {
                tell(G_losstr);
                return(t, rp);
              };
if((ovis_Q(x) && !0_Q(otval(x)))) {
                suv = back(suv);
                suv[1] = x;
              };
            },
	     robjs(here)),
	   mapf(false,
	     function(x: OBJECT) {
              if((suv === tuv && x !== pi)) {
                tell(G_losstr);
                return(t, rp);
              };
if(!0_Q(otval(x))) {
                suv = back(suv);
                suv[1] = x;
              };
            },
	     aobjs(winner)));
    };
if(empty_Q(suv)) {
      tell(`I couldn't find any valuables.`);
    } else {
      ;
    };
  }



define(opener, open_act, /*(*/ [`AUX`, /*(*/ [pv, G_prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/, /*(*/ [outchan, G_outchan] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [prso] /*)*/, object, /*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [outchan] /*)*/, channel] /*)*/] /*2*/,
	if(object_action()) {
      ;
    } else if(!trnn(prso,G_contbit)) {
      tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`);
    } else if(ocapac(prso) !== 0) {
      if(oopen_Q(prso)) {
          tell(`It is already open.`);
        } else {
          t;
          prso[G_oopen_Q] = t;
          if((empty_Q(ocontents(prso)) || transparent_Q(prso))) {
              tell(`Opened.`);
            } else {
              tell(`Opening the `, 0, odesc2(prso), ` reveals `);
              print_contents(ocontents(prso));
              princ(_X__);
              crlf();
            };
        };
    } else {
      ;
    })

define(closer, close_act, /*(*/ [`AUX`, /*(*/ [pv, G_prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [prso] /*)*/, object] /*)*/] /*2*/,
	if(object_action()) {
      ;
    } else if(!trnn(prso,G_contbit)) {
      tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`);
    } else if(ocapac(prso) !== 0) {
      if(oopen_Q(prso)) {
          prso[G_oopen_Q] = false;
          tell(`Closed.`);
        } else {
          t;
          tell(`It is already closed.`);
        };
    } else {
      ;
    })

export function find() {
    let prso: (FALSE | OBJECT) = G_prsvec[2];
    if(object_action()) {
      ;
    } else if(true) {
      prso;
      find_frob(prso,		    robjs(G_here),
		    `, which is in the room.`,
		    `There is a `,
		    ` here.`);
      find_frob(prso,		    aobjs(G_winner),
		    `, which you are carrying.`,
		    `You are carrying a `,
		    `.`);
      if(!G_tell_flag) {
          tell(`I can't see that here.`);
        };
    } else {
      ;
    };
  }

export function find_frob(prso, objl: LIST(/*[*/ [REST, OBJECT] /*]*/), str1: STRING, str2: STRING, str3: STRING) {
    mapf(false,
	function(x: OBJECT) {
        if(x === prso) {
          tell(str2,1, odesc2(x), str3);
        } else {
          mapf(false,
			       function(y: OBJECT) {
                if(y === prso) {
                  tell(str2,1, odesc2(y), str3);
                  tell(`It is in the `,
						      1,
						      odesc2(x),
						      str1);
                };
              },
			       ocontents(x));
        };
      },
	 objl);
  }

// OBJECT-ACTION --  CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS

export function object_action() {
    let vec: VECTOR = G_prsvec;
    let prso: (OBJECT | FALSE) = vec[2];
    let prsi: (OBJECT | FALSE) = vec[3];
    prog(/*(*/ [] /*)*/,
	      if(true) {
        prsi;
        (apply_object(prsi) && return(t));
      },
	      if(true) {
        prso;
        apply_object(prso);
      });
  }

`SIMPLE OBJ-HERE:  IS IT IN THE ROOM OR IN THE GUY'S HAND.  TO DO FULL
SEARCH, USE GET-OBJECT`

export function obj_here_Q(obj: OBJECT) {
    let nobj: (FALSE | OBJECT) = null;
    let rm: ROOM = G_here;
    let win: ADV = G_winner;
    prog(/*(*/ [] /*)*/,
	      if(!ovis_Q(obj)) {
        return(false);
      } else {
        if(oopen_Q(nobj)) {
            obj = nobj;
          } else {
            ;
          };
      },
	      (memq(obj,robjs(rm)) || memq(obj,aobjs(win))));
  }

export function splice_out(obj, al: LIST) {
    if(al[1] === obj) {
      rest(al);
    } else {
      t;
      repeat(/*(*/ [/*(*/ [nl, rest(al)] /*)*/, /*(*/ [ol, al] /*)*/] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [nl, ol] /*)*/, list] /*)*/] /*2*/,
		       if(nl[1] === obj) {
            putrest(ol,rest(nl));
            return(al);
          } else {
            nl = rest(nl);
          });
    };
  }

`WEIGHT:  Get sum of OSIZEs of supplied list, recursing to the nth level.`

export function weight(objl: LIST(/*[*/ [REST, OBJECT] /*]*/)) {
    let bigfix: FIX = G_bigfix;
    mapf(G__,	      function(obj: OBJECT) {
        _(if(osize(obj) === G_bigfix) {
            0;
          } else {
            ;
          },
			 weight(ocontents(obj)));
      },
	      objl);
  }

export function pour() {
      }

export function move() {
    let vec: VECTOR = G_prsvec;
    let rm: ROOM = aroom(G_winner);
    let obj: (ATOM | OBJECT) = vec[2];
    if(memq(obj,robjs(rm))) {
      object_action();
    } else {
      obj;
      tell(`I can't get to that to move it.`);
    };
  }

export function victims_Q(rm: ROOM) {
    mapf(false,
	      function(x: OBJECT) {
        if(trnn(x,G_vicbit)) {
          mapleave(x);
        };
      },
	      robjs(rm));
  }

define(lamp_on, lampo, /*(*/ [`AUX`, /*(*/ [prsvec, G_prsvec] /*)*/, /*(*/ [me, G_winner] /*)*/, /*(*/ [obj, prsvec[2]] /*)*/, /*(*/ [lit_Q,
							     lit_Q(G_here)] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	if((trnn(obj,G_burnbit) && prsvec[3] && prsvec[1] = G_burn_X_words)) {
      burner();
    } else if(object_action()) {
      ;
    } else {
      if(olight_Q(obj) > 0) {
          tell(`It is already on.`);
        } else {
          tell(`The `, 1, odesc2(obj), ` is now on.`);
          if(!lit_Q) {
              G_prsvec[2] = false;
              room_info(false);
            };
        };
    })

define(lamp_off, lampo, /*(*/ [`AUX`, /*(*/ [me, G_winner] /*)*/, /*(*/ [obj, G_prsvec[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	if(object_action()) {
      ;
    } else {
      if(olight_Q(obj) < 0) {
          tell(`It is already off.`);
        } else {
          tell(`The `, 1, odesc2(obj), ` is now off.`);
          (lit_Q(G_here) || tell(`It is now pitch black.`));
        };
    })

`PARSER & AUXILIARIES`

G_inbuf = istring(100)

// SET UP INPUT ERROR HANDLER TO CAUSE EPARSE TO FALSE OUT

psetg(cntprs, `I can't parse that.`)

G_prsvec = ivector(3, /*#*/ [false, /*(*/ [] /*)*/] /*2*/)

export function word_Q(w) {
    lookup(w,G_words);
  }

export function this_it_Q(objnam: ATOM, obj: ATOM, adj: (FALSE | ADJECTIVE)) {
    if((ovis_Q(obj) && (objnam === oid(obj) || memq(objnam,onames(obj))))) {
      if(!adj) {
          ;
        } else {
          ;
        };
    };
  }

G_lexv = ivector(10, () => rest(istring(5), 5))

export let G_lexv: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_brks: STRING;

export function lex(s: STRING, sx?: STRING, silent_Q: (ATOM | FALSE)) {
    let brks: STRING = G_brks;
    let v: (FALSE | VECTOR) = G_lexv;
    let s1: STRING = s;
    let quot: (ATOM | FALSE) = false;
    mapr(false,
	 function(x: VECTOR(/*[*/ [REST, STRING] /*]*/)) {
        let str: STRING = x[1];
        x[1] = rest(str,str.length);
      },
	 v);
if(s[1] === _X__Q) {
      v[1] = substruc(`HELP`, 0, 4, back(v[1], 4));
    } else {
      ;
    };
  }

psetg(brks, `\"' 	:;.,?!
`)

export function anything(s: STRING, sx: STRING) {
    mapr(false,
	      function(x) {
        if(x === sx) {
          mapleave(false);
        } else {
          mapleave(x);
        };
      },
	      s);
  }

export function uppercase(str: STRING) {
    mapr(false,
	      function(s) {`AUX`, /*(*/ [c, ascii(s[1])] /*)*/
        if((c > 96 && l__Q(c,122))) {
          s[1] = ascii(_(c,32));
        };
      },
	      str);
  }

export function wait(num?: FIX) {
    tell(`Time passes...`);
repeat(/*(*/ [/*(*/ [n, num] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [n] /*)*/, fix] /*)*/] /*2*/,
	if((n = _(n,1) < 0 || clock_demon(G_clocker))) {
        return();
      });
  }

`RUNS ONLY IF PARSE WON, TO PREVENT SCREWS FROM TYPOS.`

export function clock_demon(hack: HACK) {
    let ca = null;
    let flg: (ATOM | FALSE) = false;
    if(true) {
      G_parse_won;
      G_prsvec[2] = false;
      G_prsvec[3] = false;
      mapf(false,
		 function(ev: CEVENT) {
            let tick: FIX = ctick(ev);
            if(!cflag(ev)) {
              ;
            } else if(0_Q(tick)) {
              ;
            } else if(tick < 0) {
              G_prsvec[1] = G_c_int_X_words;
              if(type_Q(ca = caction(ev), offset)) {
                  dispatch(ca);
                } else {
                  ;
                };
            } else {
              (0_Q(tick) && flg = t && G_prsvec[1] = G_c_int_X_words && if(type_Q(ca = caction(ev), offset)) {
                    dispatch(ca);
                  } else {
                    ;
                  });
            };
          },
		 hobjs(hack));
    };
  }

export let G_clocker: HACK;

export function clock_int(cev: CEVENT, num?: (FIX | FALSE), clocker: HACK) {
    if(!memq(cev,hobjs(clocker))) {
      clocker[G_hobjs] = /*(*/ [cev,_X,hobjs(clocker)] /*)*/;
    };
if(true) {
      num;
      cev[G_ctick] = num;
    };
  }

G_demons = /*(*/ [] /*)*/

(lookup(`COMPILE`, root()) || gassigned_Q(group_glue) || add_demon(G_clocker = chtype(/*[*/ [clock_demon, /*(*/ [] /*)*/] /*]*/, hack)))

export function board() {
    let obj: OBJECT = G_prsvec[2];
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(win);
    if(!memq(obj,robjs(G_here))) {
      tell(`The `, 1, odesc2(obj), ` must be on the ground to be boarded.`);
    } else if(trnn(obj,G_vehbit)) {
      if(true) {
          av;
          tell(`You are already in a `,
			    1,
			    odesc2(obj),
			    `, cretin!`);
        } else {
          t;
          if(object_action()) {
              ;
            } else {
              win[G_avehicle] = obj;
              obj[G_ocontents] = /*(*/ [find_obj(`#####`), _X,ocontents(obj)] /*)*/;
            };
        };
    } else {
      ;
    };
  }

export function unboard() {
    let obj: OBJECT = G_prsvec[2];
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(win);
    if(av === obj) {
      if(object_action()) {
          ;
        } else if(rtrnn(G_here,G_rlandbit)) {
          tell(`You are on your own feet again.`);
          win[G_avehicle] = false;
          obj[G_ocontents] = splice_out(find_obj(`#####`), ocontents(obj));
        } else {
          ;
        };
    } else {
      ;
    };
  }

export function goto(rm: ROOM) {
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(G_winner);
    let here: ROOM = G_here;
    let lb: (ATOM | FALSE) = rtrnn(rm,G_rlandbit);
    if(((!lb && (!av || !rtrnn(rm,orand(av)))) || (rtrnn(here,G_rlandbit) && lb && av && orand(av) !== G_rlandbit && !rtrnn(rm,orand(av))))) {
      if(true) {
          av;
          tell(`You can't go there in a `, 1, odesc2(av), `.`);
        } else {
          ;
        };
      false;
    } else if(rtrnn(rm,G_rmungbit)) {
      tell(rrand(rm));
    } else {
      t;
      if(win !== G_player) {
          remove_object(aobj(win));
          insert_object(aobj(win), rm);
        };
      if(true) {
          av;
          remove_object(av);
          insert_object(av,rm);
        };
      G_winner[G_aroom] = G_here = rm;
      score_room(rm);
      t;
    };
  }

export function backer() {
    tell(`He who puts his hand to the plow and looks back is not fit for the
kingdom of winners.  In any case, \"back\" doesn't work.`);
  }

export function act_hack() {
    (object_action() || t);
  }

export function mung_room(rm: ROOM, str: STRING) {
    rtro(rm,G_rmungbit);
rm[G_rrand] = str;
  }

export function command() {
    let pv: VECTOR = G_prsvec;
    let po: OBJECT = pv[2];
    let v: VECTOR = rest(G_lexv[``]);
    let hs: ROOM = G_here;
    let win: ADV = G_winner;
    let play: ADV = G_player;
    if(win !== play) {
      tell(`You cannot talk through another person!`);
    } else if(trnn(po,G_actorbit)) {
      G_winner = orand(po);
      rdcom(v);
      G_winner = play;
      G_here = hs;
    } else {
      ;
    };
  }