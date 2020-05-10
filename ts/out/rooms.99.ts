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
(muddle > 100) ? {
      G_scratch_str = istring(32);
      G_dev = `DSK`;
      return G_snm = `MDL`;
    } : (sname(``)) ? {
      G_dev = `DSK`;
      return G_snm = `MADMAN`;
    } : false;
int_level(100000);
(save(fn) == `SAVED`) ? {
      int_level(0);
      return t;
    } : (t) ? {
      // STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"     if that device exists; if not, (sort of) returns directory muddle     came from.  On its it returns # zorkers currently in existence.;
      ((type_Q(stv = starter(), fix) && stv > 3)) ? {
          return (G_winners[G_xunm = xuname()] || G_xunm == `SEC` || G_xunm == `ELBOW` || (off(`CHAR`, G_inchan) && tell(`There appears before you a threatening figure clad all over
in heavy black armor.  His legs seem like the massive trunk
of the oak tree.  His broad shoulders and helmeted head loom
high over your own puny frame and you realize that his powerful
arms could easily crush the very life from your body.  There
hangs from his belt a veritable arsenal of deadly weapons:
sword, mace, ball and chain, dagger, lance, and trident.
He speaks with a commanding voice:

		\"YOU SHALL NOT PASS \"

As he grabs you by the neck all grows dim about you.`) && quit()));
        } : (type_Q(stv,string)) ? {
          return G_snm = substruc(G_scratch_str,					  0,
					  _(G_scratch_str.length,
					     memq(_X__, stv).length));
        } : false;
      (G_muddle > 100) ? {
          return G_tenex_Q = getsys();
        } : (apply(G_ipc_off)) ? {
          return apply(G_ipc_on,uname(), `ZORK`);
        } : false;
      bh = on(`BLOCKED`, G_blo,100);
      return start(`WHOUS`, st);
    } : false;
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
((G_divert_cnt > G_divert_max || G_divert_amt > G_divert_lmt)) ? {
      // Too much diversion ?;
      G_divert_amt = G_divert_cnt = 0;
      gc_fcn();
      return gc();
    } : (else) ? {
      // Divert this request for storage;
      (1_Q(G_divert_cnt)) ? {
          // First diversion ?;
          return handler(G_gc_int,G_gc_hand);
        } : false;
      bloat(_(amt,G_divert_inc));
      return // Get storage desired plus extra increment;
    } : false;
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
        ((0_Q(ascii(x)) || ascii(x) === 32)) ? {
          return mapstop();
        } : (t) ? {
          return x;
        } : false;
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
    (nm) ? {
      return (cma = memq(_X__, nm)) ? {
          llst = _(nm.length, cma.length);
          cma = rest(cma);
          lfst = cma.length;
          (jr = memq(_X__, cma)) ? {
              return lfst = _(lfst,jr.length);
            } : false;
          repeat(/*(*/ [] /*)*/,
			      (empty_Q(cma)) ? {
                return return();
              } : (memq(cma[1], /*%*/ [string(ascii(32), ascii(9))] /*1*/)) ? {
                cma = rest(cma);
                return lfst = _(lfst,1);
              } : (else) ? {
                return return();
              } : false);
          tlen = _(lfst,1, llst,jr.length);
          str = istring(tlen,_X__);
          tstr = str;
          substruc(cma,0, lfst,tstr);
          tstr = rest(tstr,_(lfst,1));
          substruc(nm,0, llst,tstr);
          (jr && substruc(jr,0, jr.length, rest(tstr,llst)));
          return G_user_name = str;
        } : (else) ? {
          return G_user_name = nm;
        } : false;
    } : false;
  }

export function unspeakable_code() {
    let str: STRING = null;
    let nstr: STRING = null;
    let len_i: FIX = 0;
    let o: OBJECT = find_obj(`PAPER`);
    str = memq(_X__, oread(o));
(back(str,2)[1] === _X_1) ? {
      str = back(str,2);
      return len_i = 1;
    } : {
      return str = back(str,1);
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
    _((chtype(getbits(now,bits(18, 18)), fix) !== chtype(getbits(then,bits(18, 18)), fix)) ? {
        return _(_(_(chtype(getbits(now,bits(18, 0)), fix),
			   _(24, 7200)),
			chtype(getbits(then,bits(18, 0)), fix)),
		     2);
      } : {
        return _(_(chtype(getbits(now,bits(18, 0)), fix),
			chtype(getbits(then,bits(18, 0)), fix)),
		     2);
      },
	   G_played_time);
  }

export function play_time(outchan?: SPECIAL(CHANNEL), loser_Q: (ATOM | FALSE)) {
    let time: FIX = null;
    let mins: FIX = null;
    time = get_time();
G_tell_flag = t;
(loser_Q) ? {
      return princ(`You have been playing DUNGEON for `);
    } : (t) ? {
      return princ(`Played for `);
    } : false;
(mins = _(time,3600) > 0 && prin1(mins) && princ(` hour`) && (1_Q(mins) || princ(`s`)) && princ(`, `));
(mins = mod(_(time,60), 60) > 0) ? {
      prin1(mins);
      princ(` minute`);
      (!1_Q(mins)) ? {
          return princ(`s`);
        } : false;
      return princ(`, and `);
    } : false;
prin1(mins = mod(time,60));
princ(` second`);
(1_Q(mins) || princ(`s`));
(loser_Q) ? {
      return princ(`.
`);
    } : {
      return princ(`.`);
    };
  } 

export function pc() {
      }

export function handle(frm, _tuple_, zork) {
    let zf: ANY = null;
    G_outchan[13] = 80;
back(G_inchan)[1][6] = /*#*/ [lose, 27] /*2*/;
(((!gassigned_Q(xunm) || G_winners[G_xunm]) && pc())) ? {
      (gassigned_Q(saverep) && G_rep = G_saverep);
      (assigned_Q(bh) && off(bh));
      int_level(0);
      G_dbg = t;
      return G_alt_flag = t;
    } : (t) ? {
      return ((!empty_Q(zork) && zork[1] === control_g_Q_X_errors)) ? {
          int_level(0);
          finish();
          back(G_inchan)[1][6] = (G_muddle > 100) ? {
                return (G_tenex_Q) ? {
                    return /*#*/ [lose, _37_] /*2*/;
                  } : (t) ? {
                    return /*#*/ [lose, _000000000012_] /*2*/;
                  } : false;
              } : (t) ? {
                return /*#*/ [lose, _000000000015_] /*2*/;
              } : false;
          return erret(t, frm);
        } : ((zork.length === 3 && zork[1] === file_system_error_X_errors && !zf = zork[3] && zf.length === 3 && zf[1] == `ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY`)) ? {
          // HACK FOR ILLEGAL CHR AFTER CTRL-P;
          back(G_inchan)[1][6] = /*#*/ [lose, _000000000015_] /*2*/;
          int_level(0);
          return erret(t, frm);
        } : (tell(`I'm sorry, you seem to have encountered an error in the program.
Send mail to DUNGEON@MIT-DMS describing what it was you tried to do.`)) ? {
          tell(G_vers);
          mapf(false, function(x) {
                print(x);
              }, zork);
          return finish(/*#*/ [false, /*(*/ [`. Error.`] /*)*/] /*2*/);
        } : false;
    } : false;
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
(muddle < 100) ? {
      (xunm.length > 2 && substruc(xunm,0, 3) == `___` && quit());
      return fn = its_get_name(xunm);
    } : {
      return fn = get_name();
    };
(fn) ? {
      return G_user_name = fn;
    } : {
      return G_user_name = xunm;
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
back(G_inchan)[1][6] = (G_muddle > 100) ? {
        return (G_tenex_Q) ? {
            return /*#*/ [lose, _37_] /*2*/;
          } : (t) ? {
            return /*#*/ [lose, _000000000012_] /*2*/;
          } : false;
      } : (t) ? {
        return /*#*/ [lose, _000000000015_] /*2*/;
      } : false;
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
    (G_script_channel) ? {
      return false;
    } : (ch = open(`PRINT`, string(`MARC;%Z`, G_xunm,` >`))) ? {
      top(G_inchan)[1] = /*(*/ [ch] /*)*/;
      top(G_outchan)[1] = /*(*/ [ch] /*)*/;
      G_script_channel = ch;
      return G_my_script = t;
    } : false;
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
    (G_my_script) ? {
      return do_unscript(false);
    } : false;
(G_script_channel) ? {
      return tell(`You are already scripting.`);
    } : (((muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch) && ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch))) && ch = open(`PRINT`, `ZORK`, `SCRIPT`, `DSK`, unm))) ? {
      top(G_inchan)[1] = /*(*/ [ch] /*)*/;
      top(G_outchan)[1] = /*(*/ [ch] /*)*/;
      G_script_channel = ch;
      return (G_muddle < 100) ? {
          return tell(`Scripting to `, 1, G_xunm,`;ZORK SCRIPT`);
        } : (t) ? {
          return tell(`Scripting to <`, 1, G_xunm,`>ZORK.SCRIPT`);
        } : false;
    } : (t) ? {
      return tell(`I can't open the script channel.`);
    } : false;
  }

export function do_unscript(verbose?: (ATOM | FALSE)) {
    (G_script_channel) ? {
      top(G_inchan)[1] = /*(*/ [] /*)*/;
      top(G_outchan)[1] = /*(*/ [] /*)*/;
      close(G_script_channel);
      G_script_channel = false;
      return (verbose && tell(`Scripting off.`));
    } : {
      return (verbose && tell(`Scripting wasn't on.`));
    };
  }

export let G_then: FIX;

export function do_save() {
    let muddle: FIX = G_muddle;
    let ch: (CHANNEL | FALSE) = null;
    let unm: STRING = G_xunm;
    ((muddle > 100 || (!unm[`GUEST`] && ch = open(`READ`, `.FILE.`, `(DIR)`, `DSK`, unm) && close(ch)))) ? {
      return ((muddle > 100 || (ch = open(`READ`, `_MSGS_`, unm,`DSK`, unm) && close(ch)))) ? {
          (G_script_channel && do_unscript());
          tell(`Saving.`);
          int_level(100000);
          off(`CHAR`, G_inchan);
          G_then = chtype(dskdate(), fix);
          G_played_time = get_time();
          return (ch = open(`PRINTB`,
				     (muddle < 100) ? {
                      return string(`DSK:`, unm,`;ZORK SAVE`);
                    } : (t) ? {
                      return string(`DSK:<`, unm,`>ZORK.SAVE`);
                    } : false)) ? {
              save_game(ch);
              return finish(chtype(() => /*(*/ [`. Saved.`] /*)*/, false));
            } : (tell(`Save failed.`)) ? {
              return tell(ch[1], 1, ` `, ch[2]);
            } : false;
        } : {
          return tell(`Can't open channel for save.`);
        };
    } : (t) ? {
      return tell(`Can't open channel for save.`);
    } : false;
  }

export function do_restore() {
    let ch: (CHANNEL | FALSE) = null;
    let str: STRING = null;
    let muddle: FIX = G_muddle;
    let nowd: FIX = null;
    let now: FIX = null;
    let thend: FIX = null;
    (muddle < 100) ? {
      return str = string(`DSK:`, G_xunm,`;ZORK SAVE`);
    } : (t) ? {
      return str = string(`DSK:<`, G_xunm,`>ZORK.SAVE`);
    } : false;
prog(/*(*/ [/*(*/ [foo, t] /*)*/, /*(*/ [snm, sname()] /*)*/] /*)*/,
	 /*#*/ [decl, /*(*/ [/*(*/ [foo] /*)*/, (atom || false), /*(*/ [snm] /*)*/, special(string)] /*)*/] /*2*/,
	 (ch = open(`READB`, str)) ? {
        (restore_game(ch)) ? {
            (G_winners[G_xunm]) ? {
                ;
              } : (nowd = chtype(getbits(now = chtype(dskdate(), fix),
							 bits(18, 18)),
						fix) === thend = chtype(getbits(G_then,bits(18, 18)), fix)) ? {
                return (g__Q(_(now,G_then), 2400)) ? {
                    ;
                  } : (tell(`It's too soon.`)) ? {
                    (G_muddle > 100) ? {
                        off(`CHAR`, G_inchan);
                        int_level(10000);
                        return quit();
                      } : false;
                    return quit();
                  } : false;
              } : (1_Q(_(nowd,thend))) ? {
                return (g__Q(_(_(chtype(getbits(now,bits(18, 0)), fix),
						_(24, 7200)),
					     chtype(getbits(now,bits(18, 0)), fix)),
					  2400)) ? {
                    ;
                  } : (tell(`It's too soon.`)) ? {
                    return quit();
                  } : false;
              } : false;
            G_intime = now;
            return tell(`Restored.`);
          } : {
            return tell(`Restore failed.`);
          };
        return room_desc();
      } : ((foo && muddle > 100)) ? {
        str = string(sname(), `ZORK.SAVE`);
        foo = false;
        return again();
      } : {
        return tell(ch[2], 1, ` `, ch[1]);
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
            ((gassigned_Q(x) && /*,*/ [x] /*1*/ === val)) ? {
              return return(x,act);
            } : false;
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
     (G_here !== aroom(G_player)) ? {
        G_prsvec[1] = G_walk_in_X_words;
        tell(`Done.`);
        return return();
      } : ((prso && type_Q(prso,object))) ? {
        (object_action()) ? {
            ;
          } : (oread(prso)) ? {
            return tell(oread(prso));
          } : {
            return tell(`I see nothing special about the `,
			 1,
			 odesc2(prso),
			 `.`);
          };
        return return();
      } : (!lit_Q(rm)) ? {
        tell(`It is pitch black.  You are likely to be eaten by a grue.`);
        return return(false);
      } : (((!full && G_super_brief_X_flag) || (rseen_Q(rm) && (G_brief_X_flag || prob(80)) && !full))) ? {
        return tell(rdesc2(rm));
      } : ((empty_Q(rdesc1(rm)) && ra = raction(rm))) ? {
        G_prsvec[1] = G_look_X_words;
        apply_random(ra);
        G_prsvec[1] = G_foo_X_words;
        return // Something innocuous;
      } : {
        return tell(rdesc1(rm));
      },
     rm[G_rseen_Q] = t,
     (av && tell(`You are in the `, 1, odesc2(av), `.`)),
     mapf(false,
      function(x: OBJECT) {
          ((ovis_Q(x) && describable_Q(x))) ? {
            (x === av) ? {
                ;
              } : (t) ? {
                return (long_desc_obj(x)) ? {
                    (av && tell(` [in the room]`, 0));
                    return crlf();
                  } : false;
              } : false;
            return (trnn(x,G_actorbit)) ? {
                return invent(orand(x));
              } : (see_inside_Q(x)) ? {
                return print_cont(x,av,winobj,G_indentstr,(full) ? {
                      ;
                    } : (G_super_brief_X_flag) ? {
                      return false;
                    } : (G_brief_X_flag) ? {
                      return false;
                    } : {
                      return t;
                    });
              } : false;
          } : false;
        },
      robjs(rm)),
     ((ra = raction(rm) && !full)) ? {
        G_prsvec[1] = G_walk_in_X_words;
        apply_random(ra);
        return G_prsvec[1] = G_foo_X_words;
      } : false,
     t);
  }

psetg(indentstr, rest(istring(8), 8))

define(print_cont, print_c, /*(*/ [obj, av, winobj, indent, `OPTIONAL`, /*(*/ [case_Q, t] /*)*/,
			    `AUX`, /*(*/ [cont, ocontents(obj)] /*)*/] /*)*/,
    /*#*/ [decl, /*(*/ [/*(*/ [av] /*)*/, (false || object), /*(*/ [obj, winobj] /*)*/, object, /*(*/ [indent] /*)*/, string,
	   /*(*/ [cont] /*)*/, list(/*[*/ [rest, object] /*]*/), /*(*/ [case_Q] /*)*/, (atom || false)] /*)*/] /*2*/,
    (!empty_Q(cont)) ? {
      (obj === find_obj(`TCASE`)) ? {
          (!case_Q) ? {
              return return(t, print_c);
            } : false;
          return tell(`Your collection of treasures consists of:`);
        } : (!(cont.length === 1 && cont[1] === find_obj(`#####`))) ? {
          tell(indent,0);
          return tell(`The `, 1, odesc2(obj), ` contains:`);
        } : {
          return return(t, print_c);
        };
      return mapf(false,
	     function(y: OBJECT) {
            ((av && y === winobj)) ? {
              ;
            } : ((ovis_Q(y) && describable_Q(y) && !empty_Q(odesc2(y)))) ? {
              return tell(indent,1, ` A `, odesc2(y));
            } : false;
(see_inside_Q(y)) ? {
              return print_cont(y,av,winobj,back(indent));
            } : false;
          },
	     ocontents(obj));
    } : false)

`GIVE LONG DESCRIPTION OF OBJECT`

export function long_desc_obj(obj: OBJECT) {
    let str = null;
    ((otouch_Q(obj) || !odesco(obj))) ? {
      return str = odesc1(obj);
    } : {
      return str = odesco(obj);
    };
(empty_Q(str)) ? {
      return false;
    } : {
      return tell(str,0);
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
	   (!ivec) ? {
        rm = G_here;
        princ(`>`);
        G_tell_flag = false;
        inplen = readstring(inbuf,G_inchan,str);
        readchr(G_inchan);
        (G_alt_flag || readchr(G_inchan));
        return vc = lex(inbuf,rest(inbuf,inplen), t);
      } : false,
	   (inplen > 0) ? {
        G_moves = _(G_moves,1);
        (G_parse_won = (eparse((ivec || vc), false) && type_Q(cv = rvec = G_prsvec[1], verb))) ? {
            (!random_action = aaction(winner)) ? {
                ;
              } : (apply_random(random_action)) ? {
                return return();
              } : false;
            (av = avehicle(winner) && random_action = oaction(av) && vval = !apply_random(random_action,read_in));
            return ((vval && random_action = vfcn(cv) && apply_random(random_action))) ? {
                return (undefined) ? {
                    return (random_action = raction(rm = G_here) && apply_random(random_action));
                  } : false;
              } : false;
          } : (ivec) ? {
            (G_tell_flag) ? {
                return tell(`Please input entire command again.`);
              } : {
                return tell(`Nothing happens.`);
              };
            return return();
          } : false;
        return (G_tell_flag || tell(`Nothing happens.`));
      } : (t) ? {
        G_parse_won = false;
        return tell(`Beg pardon?`);
      } : false,
	   mapf(false,
		 function(x: HACK) {
          (random_action = haction(x)) ? {
            return apply_random(random_action,x);
          } : false;
        },
		 G_demons),
	   (G_parse_won && av = avehicle(winner) && random_action = oaction(av) && apply_random(random_action,read_out)),
	   (ivec && return()));
  }

export function score_obj(obj: OBJECT) {
    let temp = null;
    (temp = ofval(obj) > 0) ? {
      score_upd(temp);
      return obj[G_ofval] = 0;
    } : false;
  }

export function score_room(rm: ROOM) {
    let temp = null;
    (temp = rval(rm) > 0) ? {
      score_upd(temp);
      return rm[G_rval] = 0;
    } : false;
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
(ask_Q) ? {
      return princ(`Your score would be `);
    } : {
      return princ(`Your score is `);
    };
prin1(scor = ascore(G_winner));
princ(` [total of `);
prin1(G_score_max);
princ(` points], in `);
prin1(G_moves);
(1_Q(G_moves)) ? {
      return princ(` move.`);
    } : {
      return princ(` moves.`);
    };
crlf();
princ(`This score gives you the rank of `);
pct = _(float(scor), float(G_score_max));
princ((1_Q(pct)) ? {
        return `Cheater`;
      } : (pct > 0_95000000) ? {
        return `Wizard`;
      } : (pct > 0_89999999) ? {
        return `Master`;
      } : (pct > 0_79999999) ? {
        return `Winner`;
      } : (pct > 0_60000000) ? {
        return `Hacker`;
      } : (pct > 0_39999999) ? {
        return `Adventurer`;
      } : (pct > 0_19999999) ? {
        return `Junior Adventurer`;
      } : (pct > 0_09999999) ? {
        return `Novice Adventurer`;
      } : (pct > 0_04999999) ? {
        return `Amateur Adventurer`;
      } : {
        return `Beginner`;
      });
princ(`.`);
crlf();
  }

export function finish(ask_Q?: (ATOM | FALSE)) {
    let scor: FIX = null;
    unwind(prog(/*(*/ [] /*)*/,
	  scor = score(ask_Q),
	  (((ask_Q && tell(`Do you wish to leave the game? (Y is affirmative): `) && yes_no(false)) || !ask_Q)) ? {
          record(scor,G_moves,G_deaths,ask_Q,G_here);
          return quit();
        } : false),
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
		(ch = open(`READB`, `ZORK`, `LOG`, dev,snm)) ? {
            (g__Q(fl = file_length(ch), 1)) ? {
                access(ch,_(fl,1));
                return ct = readstring(str,ch,G_recorder_string);
              } : false;
            close(ch);
            (ch = open(`PRINTO`, `ZORK`, `LOG`, dev,snm)) ? {
                ;
              } : ((muddle > 100 && ch[3] === _600123_)) ? {
                // Can't win--no write access;
                return return(t, record);
              } : (t) ? {
                sleep(1);
                return again();
              } : false;
            access(ch,max(0, _(fl,1)));
            return printstring(str,ch,ct);
          } : (((muddle < 100 && ch[3] !== _4000000_) || (muddle > 100 && ch[3] === _600130_))) ? {
            // on 10x, must get FILE BUSY to try again;
            sleep(1);
            return again();
          } : (ch = open(`PRINT`, `ZORK`, `LOG`, dev,snm)) ? {
            ;
          } : ((muddle > 100 && ch[3] === _600117_)) ? {
            // No write access;
            return return(t, record);
          } : {
            return return(t, record);
          }),
	  crlf(ch),
	  princ(`	`, ch),
	  princ(G_user_name,ch),
	  (G_user_name != G_xunm) ? {
          princ(`  (`, ch);
          princ(G_xunm,ch);
          return princ(_X__, ch);
        } : false,
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
	  (1_Q(deaths)) ? {
          return princ(`.`, ch);
        } : (t) ? {
          return princ(`s.`, ch);
        } : false,
	  princ(`  In `, ch),
	  princ(rdesc2(loc), ch),
	  (quit_Q) ? {
          return princ(`. Quit.`, ch);
        } : (empty_Q(quit_Q)) ? {
          return princ(`. Died.`, ch);
        } : {
          return princ(quit_Q[1], ch);
        },
	  crlf(ch),
	  mapf(false,
		function(x: ATOM, y: STRING) {
            (/*,*/ [x] /*1*/) ? {
              princ(`/`, ch);
              return princ(y,ch);
            } : false;
          },
		G_flag_names,		G_short_names),
	  mapf(false,
		function(x: ATOM, y: STRING) {
            (0_Q(/*,*/ [x] /*1*/)) ? {
              princ(`/`, ch);
              return princ(y,ch);
            } : false;
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
(0_Q(chtype(wd,fix))) ? {
      return princ(`unknown `, ch);
    } : (t) ? {
      princ(G_months[chtype(getbits(wd,bits(4, 23)), fix)], ch);
      princ(` `, ch);
      prin1(chtype(getbits(wd,bits(5, 18)), fix), ch);
      princ(` at `, ch);
      hr = _(tim,7200);
      (g__Q(hr,12)) ? {
          hr = _(hr,12);
          return a_p = ` PM`;
        } : false;
      (0_Q(hr)) ? {
          return hr = 12;
        } : false;
      prin1(hr,ch);
      princ(`:`, ch);
      hr = _(mod(tim,7200), 120);
      (hr < 10) ? {
          return princ(`0`, ch);
        } : false;
      prin1(hr,ch);
      return princ(a_p,ch);
    } : false;
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
    (G_dbg) ? {
      return tell(desc);
    } : {
      return unwind(prog(/*(*/ [] /*)*/,
        (winner !== G_player) ? {
              tell(desc);
              tell(`The `, 1, odesc2(aobj(winner)), ` has died.`);
              remove_object(aobj(winner));
              winner[G_aroom] = find_room(`FCHMP`);
              return return();
            } : false,
	reset(G_inchan),
	score_upd(_10),
	winner[G_avehicle] = false,
	(g__Q(deaths,2)) ? {
              tell(desc);
              tell(`You clearly are a suicidal maniac.  We don't allow psychotics in the
cave, since they may harm other adventurers.  Your remains will
installed in the Land of the Living Dead, where your fellow adventurers 
may gloat over them.`);
              return finish(false);
            } : (G_deaths = _(deaths,1)) ? {
              tell(desc);
              tell(`Do you want me to try to patch you?`, 0);
              return (!yes_no(t)) ? {
                  tell(`What?  You don't trust me?  Why, only last week I patched a running ITS
and it survived for over 30 seconds.  Oh, well.`, 2);
                  return finish(false);
                } : (t) ? {
                  tell(`Now, let me see...
Well, we weren't quite able to restore your state.  You can't have
everything.`);
                  (lamp_location = oroom(lamp)) ? {
                      winner[G_aobjs] = /*(*/ [lamp,_X,aobjs] /*)*/;
                      return (memq(lamp,robjs(lamp_location))) ? {
                          return remove_object(lamp);
                        } : (lc = ocan(lamp)) ? {
                          lc[G_ocontents] = splice_out(lamp,ocontents(lc));
                          lamp[G_oroom] = false;
                          return lamp[G_ocan] = false;
                        } : false;
                    } : (memq(lamp,aobjs)) ? {
                      return winner[G_aobjs] = /*(*/ [lamp,_X,splice_out(lamp,aobjs)] /*)*/;
                    } : false;
                  find_obj(`DOOR`)[G_otouch_Q] = false;
                  goto(find_room(`FORE1`));
                  G_egypt_flag_X_flag = t;
                  val_list = rob_adv(winner,val_list);
                  mapf(false,
			    function(x: OBJECT, y: ROOM) {
                        insert_object(x,y);
                      },
			    aobjs = aobjs(winner),
			    random_list);
                  (g__Q(random_list.length, aobjs.length)) ? {
                      return aobjs = val_list;
                    } : (empty_Q(val_list)) ? {
                      return aobjs = rest(aobjs,random_list.length);
                    } : (t) ? {
                      putrest(rest(val_list,_(val_list.length, 1)),
				      rest(aobjs,random_list.length));
                      return aobjs = val_list;
                    } : false;
                  mapf(false,
			    function(x: OBJECT, y: ROOM) {
                        insert_object(x,y);
                      },
			    aobjs,			    G_rooms);
                  winner[G_aobjs] = /*(*/ [] /*)*/;
                  return t;
                } : false;
            } : false),
     prog(/*(*/ [] /*)*/,
       record(score(false), G_moves,G_deaths,false, G_here),
       quit()));
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
    (ch) ? {
      return unwind(prog(/*(*/ [] /*)*/,
		      len = file_length(ch),
		      iter = _(len,buflen),
		      (0_Q(mod(len,buflen)) || iter = _(iter,1)),
		      crlf(G_outchan),
		      G_tell_flag = t,
		      repeat(/*(*/ [slen] /*)*/,
			      /*#*/ [decl, /*(*/ [/*(*/ [slen] /*)*/, fix] /*)*/] /*2*/,
			      (1_Q(iter)) ? {
                return slen = readstring(buf,ch,G_breaks);
              } : {
                return slen = readstring(buf,ch,buflen);
              },
			      printstring(buf,G_outchan,slen),
			      (0_Q(iter = _(iter,1))) ? {
                crlf(G_outchan);
                return return(close(ch));
              } : false)),
		close(ch));
    } : {
      return tell(`File not found.`);
    };
  }

export function invent(win?: ADV) {
    let any: (ATOM | FALSE) = false;
    let outchan: CHANNEL = G_outchan;
    mapf(false,
    function(x: OBJECT) {
        (ovis_Q(x)) ? {
          (any || prog(/*(*/ [] /*)*/,
				  (win === G_player) ? {
                  return tell(`You are carrying:`);
                } : {
                  return tell(`The `,
					       1,
					       odesc2(aobj(win)),
					       ` is carrying:`);
                },
				  any = t));
          tell(`A `, 0, odesc2(x));
          ((empty_Q(ocontents(x)) || !see_inside_Q(x))) ? {
              ;
            } : (tell(` with `, 0)) ? {
              return print_contents(ocontents(x));
            } : false;
          return crlf();
        } : false;
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
(y.length > 2) ? {
          return princ(`, `);
        } : (y.length === 2) ? {
          return princ(`, and `);
        } : false;
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
((ovis_Q(x) && (oopen_Q(x) || transparent_Q(x)))) ? {
          return mapf(false,
			       function(x: OBJECT) {
                (olight_Q(x) > 0) ? {
                  return return(t, lfcn);
                } : false;
              },
			       ocontents(x));
        } : false;
((trnn(x,G_actorbit) && lfcn(aobjs(y = orand(x))))) ? {
          return mapleave(t);
        } : false;
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
    ((me === G_player && !lit_Q(rm) && prob(75))) ? {
      return (nrm = memq(where,rexits(rm))) ? {
          leavings = nrm[2];
          return ((type_Q(leavings,room) && lit_Q(leavings))) ? {
              return (goto(leavings) && room_info(false));
            } : ((type_Q(leavings,cexit) && leavings = ((random_action = cxaction(leavings) && apply_random(random_action))) ? {
                      ;
                    } : (/*,*/ [cxflag(leavings)] /*1*/) ? {
                      return cxroom(leavings);
                    } : false && lit_Q(leavings))) ? {
              return (type_Q(leavings,atom) || (goto(leavings) && room_info(false)));
            } : {
              return jigs_up(`Oh, no!  A fearsome grue slithered into the room and devoured you.`);
            };
        } : {
          return jigs_up(`Oh, no!  You walked into the slavering fangs of a lurking grue.`);
        };
    } : (nrm = memq(where,rexits(rm))) ? {
      leavings = nrm[2];
      return (type_Q(leavings,room)) ? {
          return (goto(leavings) && room_info(false));
        } : (type_Q(leavings,cexit)) ? {
          return (((random_action = cxaction(leavings) && nl = apply_random(random_action)) || (/*,*/ [cxflag(leavings)] /*1*/ && nl = cxroom(leavings)))) ? {
              return (type_Q(nl,atom) || (goto(nl) && room_info(false)));
            } : (cxs = cxstr(leavings)) ? {
              return (empty_Q(cxs) || tell(cxs));
            } : {
              return tell(`There is no way to go in that direction.`);
            };
        } : (t) ? {
          return tell(leavings);
        } : false;
    } : {
      return tell(`There is no way to go in that direction.`);
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
	 (trnn(obj,G_no_check_bit)) ? {
        return return(object_action());
      } : false,
	 (ocan(obj)) ? {
        nobj = ocan(obj);
        return (see_inside_Q(nobj)) ? {
            return (oopen_Q(nobj)) ? {
                return getter_Q = t;
              } : (tell(`I can't reach that.`)) ? {
                return return(false);
              } : false;
          } : (tell(`I can't see one here.`)) ? {
            return return(false);
          } : false;
      } : false,
	 (obj === avehicle(win)) ? {
        tell(`You are in it, loser!`);
        return return(false);
      } : (!can_take_Q(obj)) ? {
        (apply_object(obj) || tell(pick_one(G_yuks)));
        return return(false);
      } : ((getter_Q || memq(obj,robjs))) ? {
        load_max = _(load_max,fix(_(_(1_0, load_max), astrength(win))));
        ((getter_Q && memq(nobj,aobjs))) ? {
            ;
          } : (_(weight(aobjs), weight(ocontents(obj)), osize(obj)) > load_max) ? {
            tell(`Your load is too heavy.  You will have to leave something behind.`);
            return return(false);
          } : false;
        return (!apply_object(obj)) ? {
            (getter_Q) ? {
                nobj[G_ocontents] = splice_out(obj,ocontents(nobj));
                obj[G_oroom] = false;
                return obj[G_ocan] = false;
              } : {
                return remove_object(obj);
              };
            win[G_aobjs] = /*(*/ [obj,_X,aobjs] /*)*/;
            obj[G_otouch_Q] = t;
            score_obj(obj);
            return (take_Q) ? {
                return tell(`Taken.`);
              } : {
                return t;
              };
          } : {
            return t;
          };
      } : (memq(obj,aobjs)) ? {
        return tell(`You already have it.`);
      } : (tell(`I can't see one here.`)) ? {
        return false;
      } : false);
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
	      (trnn(objo,G_no_check_bit)) ? {
        return return(object_action());
      } : false,
	      ((memq(objo,G_stars) || memq(obji,G_stars))) ? {
        tell(`Nice try.`);
        return return(false);
      } : false,
	      ((oopen_Q(obji) || openable_Q(obji) || trnn(obji,G_vehbit))) ? {
        can = obji;
        return crock = objo;
      } : (tell(`I can't do that.`)) ? {
        return return(false);
      } : false,
	      (!oopen_Q(can)) ? {
        tell(`I can't reach inside.`);
        return return(false);
      } : (can === crock) ? {
        tell(`How can you do that?`);
        return return(false);
      } : (_(weight(ocontents(can)), osize(crock)) > ocapac(can)) ? {
        tell(`It won't fit.`);
        return return(false);
      } : false,
	      ((memq(crock,robjs) || (ocan = ocan(crock) && memq(ocan,robjs)) || (ocan && ocan = ocan(ocan) && memq(ocan,robjs)))) ? {
        pv[1] = G_take_X_words;
        pv[2] = crock;
        pv[3] = false;
        return (!take(false)) ? {
            return return(false);
          } : {
            return aobjs = aobjs(win);
          };
      } : (ocan = ocan(crock)) ? {
        return (oopen_Q(ocan)) ? {
            win[G_aobjs] = aobjs = /*(*/ [crock,_X,aobjs] /*)*/;
            ocan[G_ocontents] = splice_out(crock,ocontents(ocan));
            return crock[G_ocan] = false;
          } : (tell(`I can't reach the `, 1, odesc2(crock))) ? {
            return return(false);
          } : false;
      } : false,
	      pv[1] = G_put_X_words,
	      pv[2] = crock,
	      pv[3] = can,
	      ((objact && object_action())) ? {
        return return();
      } : (win[G_aobjs] = splice_out(crock,aobjs)) ? {
        can[G_ocontents] = /*(*/ [crock,_X,ocontents(can)] /*)*/;
        crock[G_ocan] = can;
        crock[G_oroom] = G_here;
        return tell(`Done.`);
      } : false);
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
	      ((memq(vname(vec[1]), () => /*[*/ [drop_X_words, pour_X_words] /*]*/) && pi)) ? {
        vec[1] = G_put_X_words;
        return return(putter());
      } : ((pi && !(memq(obj,aobjs) || memq(ocan(obj), aobjs)))) ? {
        vec[2] = pi;
        vec[3] = obj;
        return obj = vec[2];
      } : false,
	      (trnn(obj,G_no_check_bit)) ? {
        return return(object_action());
      } : false,
	      ((ocan(obj) && nobj = ocan(obj) && memq(nobj,aobjs))) ? {
        return (oopen_Q(nobj)) ? {
            return getter_Q = t;
          } : (transparent_Q(nobj)) ? {
            tell(`I can't reach that.`);
            return return();
          } : {
            return tell(`I can't see that here.`);
          };
      } : false,
	      ((getter_Q || memq(obj,aobjs))) ? {
        (av) ? {
            ;
          } : (getter_Q) ? {
            nobj[G_ocontents] = splice_out(obj,ocontents(nobj));
            return obj[G_ocan] = false;
          } : {
            return winner[G_aobjs] = splice_out(obj,aobjs);
          };
        (av) ? {
            vec[2] = obj;
            vec[3] = av;
            return putter(false);
          } : {
            return insert_object(obj,rm);
          };
        return (object_action()) ? {
            ;
          } : (vname(vec[1]) === drop_X_words) ? {
            return tell(`Dropped.`);
          } : (vname(vec[1]) === throw_X_words) ? {
            return tell(`Thrown.`);
          } : false;
      } : {
        return tell(`You are not carrying that.`);
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
    (pa === G_take_X_words) ? {
      return mapf(false,
	   function(x: OBJECT) {
            ((can_take_Q(x) || trnn(x,G_trytakebit))) ? {
              prsvec[2] = x;
              tell(odesc2(x), 0, `:
  `);
              apply_random(ra);
              return (here !== aroom(winner)) ? {
                  return mapleave();
                } : false;
            } : false;
          },
	   uv);
    } : ((pa === G_drop_X_words || pa === G_put_X_words)) ? {
      return mapf(false,
	   function(x: OBJECT) {
            prsvec[2] = x;
tell(odesc2(x), 0, `:
  `);
apply_random(ra);
(here !== aroom(winner)) ? {
              return mapleave();
            } : false;
          },
	   uv);
    } : false;
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
    (pa === G_take_X_words) ? {
      return mapf(false,
	   function(x: OBJECT) {
            ((ovis_Q(x) && !trnn(x,G_actorbit))) ? {
              (suv === tuv) ? {
                  tell(G_losstr);
                  return mapleave();
                } : false;
              suv = back(suv);
              return suv[1] = x;
            } : false;
          },
	   robjs(here));
    } : (pa === G_drop_X_words) ? {
      return mapf(false,
	   function(x: OBJECT) {
            suv = back(suv);
suv[1] = x;
          },
	   aobjs(winner));
    } : (pa === G_put_X_words) ? {
      pi = prsvec[3];
      return prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: OBJECT) {
              ((ovis_Q(x) && x !== pi && !trnn(x,G_actorbit))) ? {
                (suv === tuv) ? {
                    tell(G_losstr);
                    return return(t, rp);
                  } : false;
                suv = back(suv);
                return suv[1] = x;
              } : false;
            },
	     robjs(here)),
	   mapf(false,
	     function(x: OBJECT) {
              ((suv === tuv && x !== pi)) ? {
                tell(G_losstr);
                return return(t, rp);
              } : false;
suv = back(suv);
suv[1] = x;
            },
	     aobjs(winner)));
    } : false;
(empty_Q(suv)) ? {
      return tell(`I couldn't find anything.`);
    } : {
      return frob_lots(suv);
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
    (pa === G_take_X_words) ? {
      return mapf(false,
	   function(x: OBJECT) {
            ((ovis_Q(x) && !trnn(x,G_actorbit) && !0_Q(otval(x)))) ? {
              (suv === tuv) ? {
                  tell(G_losstr);
                  return mapleave();
                } : false;
              suv = back(suv);
              return suv[1] = x;
            } : false;
          },
	   robjs(here));
    } : (pa === G_drop_X_words) ? {
      return mapf(false,
	   function(x: OBJECT) {
            (!0_Q(otval(x))) ? {
              suv = back(suv);
              return suv[1] = x;
            } : false;
          },
	   aobjs(winner));
    } : (pa === G_put_X_words) ? {
      pi = prsvec[3];
      return prog(rp, /*(*/ [] /*)*/,
	   mapf(false,
	     function(x: OBJECT) {
              ((suv === tuv && x !== pi)) ? {
                tell(G_losstr);
                return return(t, rp);
              } : false;
((ovis_Q(x) && !0_Q(otval(x)))) ? {
                suv = back(suv);
                return suv[1] = x;
              } : false;
            },
	     robjs(here)),
	   mapf(false,
	     function(x: OBJECT) {
              ((suv === tuv && x !== pi)) ? {
                tell(G_losstr);
                return return(t, rp);
              } : false;
(!0_Q(otval(x))) ? {
                suv = back(suv);
                return suv[1] = x;
              } : false;
            },
	     aobjs(winner)));
    } : false;
(empty_Q(suv)) ? {
      return tell(`I couldn't find any valuables.`);
    } : {
      return frob_lots(suv);
    };
  }



define(opener, open_act, /*(*/ [`AUX`, /*(*/ [pv, G_prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/, /*(*/ [outchan, G_outchan] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [prso] /*)*/, object, /*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [outchan] /*)*/, channel] /*)*/] /*2*/,
	(object_action()) ? {
      ;
    } : (!trnn(prso,G_contbit)) ? {
      return tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`);
    } : (ocapac(prso) !== 0) ? {
      return (oopen_Q(prso)) ? {
          return tell(`It is already open.`);
        } : (t) ? {
          prso[G_oopen_Q] = t;
          return ((empty_Q(ocontents(prso)) || transparent_Q(prso))) ? {
              return tell(`Opened.`);
            } : (G_tell_flag = t) ? {
              tell(`Opening the `, 0, odesc2(prso), ` reveals `);
              print_contents(ocontents(prso));
              princ(_X__);
              return crlf();
            } : false;
        } : false;
    } : {
      return tell(`The `, 1, odesc2(prso), ` cannot be opened.`);
    })

define(closer, close_act, /*(*/ [`AUX`, /*(*/ [pv, G_prsvec] /*)*/, /*(*/ [prso, pv[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [pv] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [prso] /*)*/, object] /*)*/] /*2*/,
	(object_action()) ? {
      ;
    } : (!trnn(prso,G_contbit)) ? {
      return tell(`You must tell me how to do that to a `, 1, odesc2(prso), `.`);
    } : (ocapac(prso) !== 0) ? {
      return (oopen_Q(prso)) ? {
          prso[G_oopen_Q] = false;
          return tell(`Closed.`);
        } : (t) ? {
          return tell(`It is already closed.`);
        } : false;
    } : {
      return tell(`You cannot close that.`);
    })

export function find() {
    let prso: (FALSE | OBJECT) = G_prsvec[2];
    (object_action()) ? {
      ;
    } : (prso) ? {
      find_frob(prso,		    robjs(G_here),
		    `, which is in the room.`,
		    `There is a `,
		    ` here.`);
      find_frob(prso,		    aobjs(G_winner),
		    `, which you are carrying.`,
		    `You are carrying a `,
		    `.`);
      return (!G_tell_flag) ? {
          return tell(`I can't see that here.`);
        } : false;
    } : {
      return tell(`I don't know what that is.`);
    };
  }

export function find_frob(prso, objl: LIST(/*[*/ [REST, OBJECT] /*]*/), str1: STRING, str2: STRING, str3: STRING) {
    mapf(false,
	function(x: OBJECT) {
        (x === prso) ? {
          return tell(str2,1, odesc2(x), str3);
        } : ((transparent_Q(x) || (openable_Q(x) && oopen_Q(x)))) ? {
          return mapf(false,
			       function(y: OBJECT) {
                (y === prso) ? {
                  tell(str2,1, odesc2(y), str3);
                  return tell(`It is in the `,
						      1,
						      odesc2(x),
						      str1);
                } : false;
              },
			       ocontents(x));
        } : false;
      },
	 objl);
  }

// OBJECT-ACTION --  CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS

export function object_action() {
    let vec: VECTOR = G_prsvec;
    let prso: (OBJECT | FALSE) = vec[2];
    let prsi: (OBJECT | FALSE) = vec[3];
    prog(/*(*/ [] /*)*/,
	      (prsi) ? {
        return (apply_object(prsi) && return(t));
      } : false,
	      (prso) ? {
        return apply_object(prso);
      } : false);
  }

`SIMPLE OBJ-HERE:  IS IT IN THE ROOM OR IN THE GUY'S HAND.  TO DO FULL
SEARCH, USE GET-OBJECT`

export function obj_here_Q(obj: OBJECT) {
    let nobj: (FALSE | OBJECT) = null;
    let rm: ROOM = G_here;
    let win: ADV = G_winner;
    prog(/*(*/ [] /*)*/,
	      (!ovis_Q(obj)) ? {
        return return(false);
      } : (nobj = ocan(obj)) ? {
        return (oopen_Q(nobj)) ? {
            return obj = nobj;
          } : {
            return return(false);
          };
      } : false,
	      (memq(obj,robjs(rm)) || memq(obj,aobjs(win))));
  }

export function splice_out(obj, al: LIST) {
    (al[1] === obj) ? {
      return rest(al);
    } : (t) ? {
      return repeat(/*(*/ [/*(*/ [nl, rest(al)] /*)*/, /*(*/ [ol, al] /*)*/] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [nl, ol] /*)*/, list] /*)*/] /*2*/,
		       (nl[1] === obj) ? {
            putrest(ol,rest(nl));
            return return(al);
          } : (ol = nl) ? {
            return nl = rest(nl);
          } : false);
    } : false;
  }

`WEIGHT:  Get sum of OSIZEs of supplied list, recursing to the nth level.`

export function weight(objl: LIST(/*[*/ [REST, OBJECT] /*]*/)) {
    let bigfix: FIX = G_bigfix;
    mapf(G__,	      function(obj: OBJECT) {
        _((osize(obj) === G_bigfix) ? {
            return 0;
          } : {
            return osize(obj);
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
    (memq(obj,robjs(rm))) ? {
      return object_action();
    } : (obj) ? {
      return tell(`I can't get to that to move it.`);
    } : false;
  }

export function victims_Q(rm: ROOM) {
    mapf(false,
	      function(x: OBJECT) {
        (trnn(x,G_vicbit)) ? {
          return mapleave(x);
        } : false;
      },
	      robjs(rm));
  }

define(lamp_on, lampo, /*(*/ [`AUX`, /*(*/ [prsvec, G_prsvec] /*)*/, /*(*/ [me, G_winner] /*)*/, /*(*/ [obj, prsvec[2]] /*)*/, /*(*/ [lit_Q,
							     lit_Q(G_here)] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	((trnn(obj,G_burnbit) && prsvec[3] && prsvec[1] = G_burn_X_words)) ? {
      return burner();
    } : (object_action()) ? {
      ;
    } : (((olight_Q(obj) !== 0 && memq(obj,aobjs(me)))) ? {
          ;
        } : (t) ? {
          tell(`You can't turn that on.`);
          return return(t, lampo);
        } : false) ? {
      return (olight_Q(obj) > 0) ? {
          return tell(`It is already on.`);
        } : (obj[G_olight_Q] = 1) ? {
          tell(`The `, 1, odesc2(obj), ` is now on.`);
          return (!lit_Q) ? {
              G_prsvec[2] = false;
              return room_info(false);
            } : false;
        } : false;
    } : false)

define(lamp_off, lampo, /*(*/ [`AUX`, /*(*/ [me, G_winner] /*)*/, /*(*/ [obj, G_prsvec[2]] /*)*/] /*)*/, 
	/*#*/ [decl, /*(*/ [/*(*/ [me] /*)*/, adv, /*(*/ [obj] /*)*/, object, /*(*/ [lampo] /*)*/, activation] /*)*/] /*2*/,
	(object_action()) ? {
      ;
    } : (((olight_Q(obj) !== 0 && memq(obj,aobjs(me)))) ? {
          ;
        } : (tell(`You can't turn that off.`)) ? {
          return return(t, lampo);
        } : false) ? {
      return (olight_Q(obj) < 0) ? {
          return tell(`It is already off.`);
        } : (obj[G_olight_Q] = _1) ? {
          tell(`The `, 1, odesc2(obj), ` is now off.`);
          return (lit_Q(G_here) || tell(`It is now pitch black.`));
        } : false;
    } : false)

`PARSER & AUXILIARIES`

G_inbuf = istring(100)

// SET UP INPUT ERROR HANDLER TO CAUSE EPARSE TO FALSE OUT

psetg(cntprs, `I can't parse that.`)

G_prsvec = ivector(3, /*#*/ [false, /*(*/ [] /*)*/] /*2*/)

export function word_Q(w) {
    lookup(w,G_words);
  }

export function this_it_Q(objnam: ATOM, obj: ATOM, adj: (FALSE | ADJECTIVE)) {
    ((ovis_Q(obj) && (objnam === oid(obj) || memq(objnam,onames(obj))))) ? {
      return (!adj) ? {
          ;
        } : {
          return memq(adj,oadjs(obj));
        };
    } : false;
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
(s[1] === _X__Q) ? {
      return v[1] = substruc(`HELP`, 0, 4, back(v[1], 4));
    } : {
      return repeat(/*(*/ [slen] /*)*/,
       /*#*/ [decl, /*(*/ [/*(*/ [slen] /*)*/, fix] /*)*/] /*2*/,
       ((s1.length === sx.length || memq(s1[1], brks))) ? {
            (s1.length > sx.length && (s1[1] === _X__ || s1[1] === _X__) && !quot && quot = t && v = rest(v));
            (s !== s1) ? {
                return (empty_Q(v)) ? {
                    return (silent_Q || tell(`I'm too simple-minded for that.`));
                  } : (v[1] = uppercase(substruc(s,				       0,
				       slen = min(_(s.length, s1.length),
						 5),
				       back(v[1], slen)))) ? {
                    return v = rest(v);
                  } : false;
              } : false;
            (s1.length === sx.length) ? {
                return return(v);
              } : false;
            return s = rest(s1);
          } : false,
       s1 = rest(s1));
    };
  }

psetg(brks, `\"' 	:;.,?!
`)

export function anything(s: STRING, sx: STRING) {
    mapr(false,
	      function(x) {
        (x === sx) ? {
          return mapleave(false);
        } : (!memq(x[1], G_brks)) ? {
          return mapleave(x);
        } : false;
      },
	      s);
  }

export function uppercase(str: STRING) {
    mapr(false,
	      function(s) {`AUX`, /*(*/ [c, ascii(s[1])] /*)*/
        ((c > 96 && l__Q(c,122))) ? {
          return s[1] = ascii(_(c,32));
        } : false;
      },
	      str);
  }

export function wait(num?: FIX) {
    tell(`Time passes...`);
repeat(/*(*/ [/*(*/ [n, num] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [n] /*)*/, fix] /*)*/] /*2*/,
	((n = _(n,1) < 0 || clock_demon(G_clocker))) ? {
        return return();
      } : false);
  }

`RUNS ONLY IF PARSE WON, TO PREVENT SCREWS FROM TYPOS.`

export function clock_demon(hack: HACK) {
    let ca = null;
    let flg: (ATOM | FALSE) = false;
    (G_parse_won) ? {
      G_prsvec[2] = false;
      G_prsvec[3] = false;
      return mapf(false,
		 function(ev: CEVENT) {
            let tick: FIX = ctick(ev);
            (!cflag(ev)) ? {
              ;
            } : (0_Q(tick)) ? {
              ;
            } : (tick < 0) ? {
              G_prsvec[1] = G_c_int_X_words;
              return (type_Q(ca = caction(ev), offset)) ? {
                  return dispatch(ca);
                } : {
                  return apply(ca);
                };
            } : (ev[G_ctick] = tick = _(tick,1)) ? {
              return (0_Q(tick) && flg = t && G_prsvec[1] = G_c_int_X_words && (type_Q(ca = caction(ev), offset)) ? {
                    return dispatch(ca);
                  } : {
                    return apply(ca);
                  });
            } : false;
          },
		 hobjs(hack));
    } : false;
  }

export let G_clocker: HACK;

export function clock_int(cev: CEVENT, num?: (FIX | FALSE), clocker: HACK) {
    (!memq(cev,hobjs(clocker))) ? {
      return clocker[G_hobjs] = /*(*/ [cev,_X,hobjs(clocker)] /*)*/;
    } : false;
(num) ? {
      return cev[G_ctick] = num;
    } : false;
  }

G_demons = /*(*/ [] /*)*/

(lookup(`COMPILE`, root()) || gassigned_Q(group_glue) || add_demon(G_clocker = chtype(/*[*/ [clock_demon, /*(*/ [] /*)*/] /*]*/, hack)))

export function board() {
    let obj: OBJECT = G_prsvec[2];
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(win);
    (!memq(obj,robjs(G_here))) ? {
      return tell(`The `, 1, odesc2(obj), ` must be on the ground to be boarded.`);
    } : (trnn(obj,G_vehbit)) ? {
      return (av) ? {
          return tell(`You are already in a `,
			    1,
			    odesc2(obj),
			    `, cretin!`);
        } : (t) ? {
          return (object_action()) ? {
              ;
            } : (tell(`You are in the `, 1, odesc2(obj), `.`)) ? {
              win[G_avehicle] = obj;
              return obj[G_ocontents] = /*(*/ [find_obj(`#####`), _X,ocontents(obj)] /*)*/;
            } : false;
        } : false;
    } : {
      return tell(`I suppose you have a theory on boarding `,
		     1,
		     odesc2(obj),
		     `s.`);
    };
  }

export function unboard() {
    let obj: OBJECT = G_prsvec[2];
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(win);
    (av === obj) ? {
      return (object_action()) ? {
          ;
        } : (rtrnn(G_here,G_rlandbit)) ? {
          tell(`You are on your own feet again.`);
          win[G_avehicle] = false;
          return obj[G_ocontents] = splice_out(find_obj(`#####`), ocontents(obj));
        } : {
          return tell(`You realize, just in time, that disembarking here would probably be
fatal.`);
        };
    } : {
      return tell(`You aren't in that!`);
    };
  }

export function goto(rm: ROOM) {
    let win: ADV = G_winner;
    let av: (FALSE | OBJECT) = avehicle(G_winner);
    let here: ROOM = G_here;
    let lb: (ATOM | FALSE) = rtrnn(rm,G_rlandbit);
    (((!lb && (!av || !rtrnn(rm,orand(av)))) || (rtrnn(here,G_rlandbit) && lb && av && orand(av) !== G_rlandbit && !rtrnn(rm,orand(av))))) ? {
      (av) ? {
          return tell(`You can't go there in a `, 1, odesc2(av), `.`);
        } : {
          return tell(`You can't go there without a vehicle.`);
        };
      return false;
    } : (rtrnn(rm,G_rmungbit)) ? {
      return tell(rrand(rm));
    } : (t) ? {
      (win !== G_player) ? {
          remove_object(aobj(win));
          return insert_object(aobj(win), rm);
        } : false;
      (av) ? {
          remove_object(av);
          return insert_object(av,rm);
        } : false;
      G_winner[G_aroom] = G_here = rm;
      score_room(rm);
      return t;
    } : false;
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
    (win !== play) ? {
      return tell(`You cannot talk through another person!`);
    } : (trnn(po,G_actorbit)) ? {
      G_winner = orand(po);
      rdcom(v);
      G_winner = play;
      return G_here = hs;
    } : {
      return tell(`You cannot talk to that!`);
    };
  }