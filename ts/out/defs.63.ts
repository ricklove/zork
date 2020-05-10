(G_muddle < 100 && use(`LSRTNS`))

// applicables
newtype(offset, word)
rapplic[decl] = () => (atom || false || offset)

// newtypes for parser

newtype(buzz, string)
newtype(direction, atom)
newtype(adjective, atom)
newtype(prep, atom)

\

// generalized oflags tester

defmac(trnn, /*(*/ [() => obj,() => bit] /*)*/,
  form(n_EQ_Q, form(chtype, form(andb, bit,form(oflags, obj)), fix), 0))
defmac(rtrnn, /*(*/ [() => rm,() => bit] /*)*/,
  form(n_EQ_Q, form(chtype, form(andb, bit,form(rbits, rm)), fix), 0))
defmac(rtrz, /*(*/ [() => rm,() => bit] /*)*/,
  form(put, rm,G_rbits,form(andb, form(rbits, rm), form(xorb, bit,_1))))
defmac(trc, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,G_oflags,form(xorb, form(oflags, obj), bit)))
defmac(trz, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,G_oflags,form(andb, form(oflags, obj), form(xorb, bit,_1))))
defmac(tro, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,G_oflags,form(orb, form(oflags, obj), bit)))
defmac(rtro, /*(*/ [() => rm,() => bit] /*)*/,
  form(put, rm,G_rbits,form(orb, form(rbits, rm), bit)))

\

// room definition

newstruc(room, vector,
  rid,     atom,			// room id,
  rdesc1,  string,		// long description,
  rdesc2,  string,		// short description,
  rseen_Q,  (atom || false),	// visited?,
  rlight_Q, (atom || false),	// endogenous light source?,
  rexits,  exit,			// list of exits,
  robjs,   list(/*[*/ [rest, object] /*]*/),	// objects in room,
  raction, rapplic,		// room-action,
  rvars,   primtype(word),	// slot for use of room function,
  rval,    fix,			// value for visiting,
  rbits,   primtype(word),	// random flags,
  rrand,   any,			// random slot)

// flagword for <RBITS room>:    bit-name   bit-tester

flagword(rlandbit,   false,		// on land,
	  rwaterbit,  false,		// water room,
	  rairbit,    false,		// mid-air room,
	  rsacredbit, false,		// thief not allowed,
	  rfillbit,   false,		// can fill bottle here,
	  rmungbit,   false,		// room has been munged,
	  rbuckbit,   false,		// this room is a bucket,
	  rhousebit,  false,		// This room is part of the house)

// exit

newtype(exit, 
	 vector,
	 () => /*<*/ [primtype(vector), /*[*/ [rest, atom, (room || cexit || nexit)] /*]*/] /*>*/)

// conditional exit
   
newstruc(cexit, vector,
  cxflag,   atom,			// condition flag,
  cxroom,   room,			// room it protects,
  cxstr,    (false || string),	// description,
  cxaction, rapplic,		// exit function)

newtype(nexit, string)		// unusable exit description

\

// PARSER related types

// ACTION -- top level type for verbs

newstruc(action, vector,
  vname, atom,	// atom associated with this action,
  vdecl, vspec,	// syntaxes for this verb (any number),
  vstr, string,	// string to print when talking about this verb)

// VSPEC -- uvector of syntaxes for a verb

newtype(vspec, uvector,
  () => /*<*/ [primtype(uvector), /*[*/ [rest, syntax] /*]*/] /*>*/)

// SYNTAX -- a legal syntax for a sentence involving this verb

newstruc(syntax, vector,
  syn1,    varg,	// direct object, more or less,
  syn2,    varg,	// indirect object, more or less,
  sfcn,    verb,	// function to handle this action,
  sflip,   (atom || false),	// (?),
  sdriver, (atom || false),	// (?))

// VARG -- types and locations of objects acceptable as args to verbs,    these go in the SYN1 and SYN2 slots of a SYNTAX.

newstruc(varg, vector,
  vbit,	fix,		// acceptable object characteristics,
  vprep, (prep || false),	// preposition that must precede(?) object,
  vword, fix,		// locations object may be looked for in)

// flagbit definitions for VWORD of a VARG

flagword(vabit, false,	// look in AOBJS,
	  vrbit, false,	// look in ROBJS,
	  vtbit, false,	// no-take,
	  vxbit, false,	// (?) turned on by '=' in VARG spec)

// VTRNN -- test a bit in the VWORD slot of a VARG

defmac(vtrnn, /*(*/ [() => v,() => bit] /*)*/, 
	form(n_EQ_Q, form(chtype, form(andb, bit,form(vword, v)), fix), 0))

// VERB -- name and function to apply to handle verb

newstruc(verb, vector,
  vname, atom,
  vfcn, rapplic)

// ORPHANS -- mysterious vector of orphan data

export let G_orphans: VECTOR((FALSE | ATOM),
	       (FALSE | VERB),
	       (FALSE | OBJECT),
	       (FALSE | PREP),
	       (FALSE | ATOM));

and_Q(msetg(oflag, 1),
      msetg(overb, 2),
      msetg(oslot1, 3),
      msetg(oprep, 4),
      msetg(oname, 5))

// prepositional phrases

newstruc(phrase, vector,
  pprep, prep,
  pobj,  object)

\

// adventurer

newstruc(adv, vector,
  aroom,     room,			// where he is,
  aobjs,     list(/*[*/ [rest, object] /*]*/),	// what he's carrying,
  ascore,    fix,				// score,
  avehicle,  (false || object),		// what he's riding in,
  aobj,      object,			// what he is,
  aaction,   rapplic,			// special action for robot, etc.,
  astrength, fix,				// fighting strength,
  arand,     any,				// ** reserved for future expansion **,
  aflags,    primtype(word),		// flags THIS MUST BE SAME OFFSET AS OFLAGS!)

`bits in <AFLAGS adv>:
	  bit-name  bit-tester`

flagword(astaggered, staggered_Q,		// staggered?)

// object

newstruc(object, vector,
  oid,       atom,			// unique name, SETG'd to this,
  onames,    uvector(/*[*/ [rest, atom] /*]*/),	// synonyms,
  odesc1,    string,			// description when not carried,
  odesc2,    string,			// short description,
  odesco,    (string || false),		// description when untouched,
  oaction,   rapplic,			// object-action,
  ocontents, list(/*[*/ [rest, object] /*]*/),	// list of contents,
  ocan,      (false || object),		// what contains this,
  oflags,    primtype(word),		// flags THIS MUST BE SAME OFFSET AS AFLAGS!,
  otouch_Q,   (atom || false),		// has this been touched?,
  olight_Q,   fix,				// light producer?,
  ofval,     fix,				// value for finding,
  otval,     fix,				// value for putting in trophy case,
  orand,     any,				// random slot,
  oopen_Q,    (atom || false),		// is this open?,
  osize,     fix,				// how big is it?,
  ocapac,    fix,				// how much can it hold?,
  oadjs,     uvector(/*[*/ [rest, adjective] /*]*/),	// adjectives for this,
  oroom,     (false || room),		// what room its in,
  oread,     (false || string),		// reading material)

`bits in <OFLAGS object>:
	  bit-name  bit-tester`

flagword(ovison,    ovis_Q,		// visible?,
	  readbit,   readable_Q,		// readable?,
	  takebit,   can_take_Q,		// takeable?,
	  doorbit,   door_Q,		// object is door,
	  transbit,  transparent_Q,	// object is transparent,
	  foodbit,   edible_Q,		// object is food,
	  ndescbit,  false,			// object not describable,
	  drinkbit,  drinkable_Q,		// object is drinkable,
	  contbit,   false,			// object can be opened/closed,
	  lightbit,  false,			// object can provide light,
	  vicbit,    false,			// object is victim,
	  burnbit,   burnable_Q,		// object is flammable,
	  flamebit,  false,			// object is on fire,
	  toolbit,   false,			// object is a tool,
	  turnbit,   false,			// object can be turned,
	  vehbit,    false,			// object is a vehicle,
	  findmebit, false,			// can be reached from a vehicle,
	  sleepbit,  false,			// object is asleep,
	  searchbit, false,			// allow multi-level access into this,
	  sacredbit, false,			// thief can't take this,
	  tiebit,    false,			// object can be tied,
	  echo_room_bit, false,		// nothing can be taken in echo room,
	  actorbit,  false,			// object is an actor,
	  weaponbit, false,			// object is a weapon,
	  fightbit,  fighting_Q,		// object is in melee,
	  villain,   false,			// object is a bad guy,
	  staggered, false,			// object can't fight this turn,
	  trytakebit, false,			// object wants to handle not being taken,
	  no_check_bit, false,		// ignore checks (in put & drop):  for EVERY and VALUA)

`extra stuff for flagword for objects`

`complement of the visible bit`
msetg(ovisoff, _777777777776_)

`can i be opened?`
defmac(openable_Q, /*(*/ [() => obj] /*)*/, form(trnn, obj,form(_, G_doorbit,G_contbit)))

`complement of the bit state` 
defmac(describable_Q, /*(*/ [() => obj] /*)*/, form(not, form(trnn, obj,G_ndescbit)))

`if object is a light or aflame, then flaming`
defmac(flaming_Q, /*(*/ [() => obj] /*)*/,
    form(and, form(trnn, obj,G_flamebit), form(1_Q, form(olight_Q, obj))))

`if object visible and open or transparent, can see inside it`
defmac(see_inside_Q, /*(*/ [() => obj] /*)*/,
    form(and, form(ovis_Q, obj),
	  form(or, form(transparent_Q, obj), form(oopen_Q, obj))))

\

// demons

newstruc(hack, vector,
	  haction, rapplic,
	  hobjs,   list(/*[*/ [rest, any] /*]*/),
	  `REST`,
	  hrooms,  list(/*[*/ [rest, room] /*]*/),
	  hroom,   room,
	  hobj,    object,
	  hflag,   any)

// Clock interrupts

newstruc(cevent, vector,
	  ctick,   fix,
	  caction, (applicable || offset),
	  cflag,   (atom || false),
	  cid, atom)

\


G_load_max = 100
G_score_max = 0

export let G_raw_score: FIX;export let G_load_max: FIX;export let G_score_max: FIX;export let G_random_list: LIST(/*[*/ [REST, ROOM] /*]*/);export let G_rooms: LIST(/*[*/ [REST, ROOM] /*]*/);export let G_sacred_places: LIST(/*[*/ [REST, ROOM] /*]*/);export let G_stars: LIST(/*[*/ [REST, OBJECT] /*]*/);export let G_objects: LIST(/*[*/ [REST, OBJECT] /*]*/);export let G_weapons: LIST(/*[*/ [REST, OBJECT] /*]*/);export let G_nasties: LIST(/*[*/ [REST, OBJECT] /*]*/);export let G_prsvec: VECTOR((FALSE | VERB), (FALSE | OBJECT | DIRECTION),
					(FALSE | OBJECT));export let G_winner: ADV;export let G_player: ADV;export let G_here: ROOM;export let G_inchan: CHANNEL;export let G_outchan: CHANNEL;export let G_demons: LIST;export let G_moves: FIX;export let G_deaths: FIX;export let G_dummy: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_yuks: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_sword_demon: HACK;

\

`UTILITY FUNCTIONS`

`TO OPEN DOORS`

defmac(cond_open, /*(*/ [() => dir,() => rm] /*)*/,
  form(prog, list(list(el, form(memq, dir,form(rexits, rm)))),
	/*#*/ [decl, /*(*/ [/*(*/ [el] /*)*/, /*<*/ [primtype(vector), atom, cexit] /*>*/] /*)*/] /*2*/,
	form(setg, form(cxflag, form(2, form(lval, el))), t)))

defmac(cond_close, /*(*/ [() => dir,() => rm] /*)*/,
  form(prog, list(list(el, form(memq, dir,form(rexits, rm)))),
	/*#*/ [decl, /*(*/ [/*(*/ [el] /*)*/, /*<*/ [primtype(vector), atom, cexit] /*>*/] /*)*/] /*2*/,
	form(setg, form(cxflag, form(2, form(lval, el))), false)))

`APPLY AN OBJECT FUNCTION`

defmac(apply_object, /*(*/ [() => obj] /*)*/,
    form(prog, /*(*/ [/*(*/ [foo, form(oaction, obj)] /*)*/] /*)*/,
	  form(cond, /*(*/ [form(not, form(lval, foo)), false] /*)*/,
		/*(*/ [form(type_Q, form(lval, foo), atom),
		 form(apply, form(gval, form(lval, foo)))] /*)*/,
		/*(*/ [form(dispatch, form(lval, foo))] /*)*/)))

`FLUSH AN OBJECT FROM A ROOM`

export function remove_object(obj: OBJECT) {
    let ocan: (OBJECT | FALSE) = null;
    let oroom: (FALSE | ROOM) = null;
    if(ocan = ocan(obj)) {
      ocan[G_ocontents] = splice_out(obj,ocontents(ocan));
    } else if(oroom = oroom(obj)) {
      oroom[G_robjs] = splice_out(obj,robjs(oroom));
    } else {
      G_here[G_robjs] = splice_out(obj,robjs(G_here));
    };
obj[G_oroom] = false;
obj[G_ocan] = false;
  }

defmac(insert_object, /*(*/ [() => obj,() => room] /*)*/,
	form(put,
	      room,	      G_robjs,	      /*(*/ [form(put, obj,G_oroom,room), chtype(form(robjs, room), segment)] /*)*/))

defmac(take_object, /*(*/ [() => obj,`OPTIONAL`, /*(*/ [() => winner,() => G_winner] /*)*/] /*)*/,
	form(put,
	      winner,	      G_aobjs,	      /*(*/ [form(put, obj,G_oroom,false), chtype(form(aobjs, winner), segment)] /*)*/))

defmac(drop_object, /*(*/ [() => obj,`OPTIONAL`, /*(*/ [() => winner,() => G_winner] /*)*/] /*)*/,
	form(put, winner,G_aobjs,form(splice_out, obj,form(aobjs, winner))))

export function kill_obj(obj: OBJECT, winner: ADV) {
    if(memq(obj,aobjs(winner))) {
      winner[G_aobjs] = splice_out(obj,aobjs(winner));
    } else {
      ;
    };
  }

export function flush_obj(_tuple_, objs: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let winner: ADV = G_winner;
    mapf(false,
	function(x) {
        let y: OBJECT = find_obj(x);
        (memq(y,aobjs(winner)) && drop_object(find_obj(x), winner));
      },
	objs);
  }

`ROB-ADV:  TAKE ALL OF THE VALUABLES A HACKER IS CARRYING`

export function rob_adv(win: ADV, newlist: LIST(/*[*/ [REST, OBJECT] /*]*/)) {
    mapf(false,
    function(x: OBJECT) {
        if((otval(x) > 0 && !trnn(x,G_sacredbit))) {
          win[G_aobjs] = splice_out(x,aobjs(win));
          newlist = /*(*/ [x,_X,newlist] /*)*/;
        };
      },
    aobjs(win));
  }

`ROB-ROOM:  TAKE VALUABLES FROM A ROOM, PROBABILISTICALLY`

export function rob_room(rm: ROOM, newlist: LIST(/*[*/ [REST, OBJECT] /*]*/), prob: FIX) {
    mapf(false,
    function(x: OBJECT) {
        if((otval(x) > 0 && !trnn(x,G_sacredbit) && ovis_Q(x) && prob(prob))) {
          remove_object(x);
          x[G_otouch_Q] = t;
          newlist = /*(*/ [x,_X,newlist] /*)*/;
        } else {
          newlist = rob_adv(orand(x), newlist);
        };
      },
    robjs(rm));
  }

export function valuables_Q(adv: ADV) {
    mapf(false,
    function(x: OBJECT) {
        if(otval(x) > 0) {
          mapleave(t);
        };
      },
    aobjs(adv));
  }

export function armed_Q(adv: ADV) {
    let weapons = G_weapons;
    mapf(false,
    function(x: OBJECT) {
        if(memq(x,weapons)) {
          mapleave(t);
        };
      },
    aobjs(adv));
  }

export function light_source(me: ADV) {
    mapf(false,
	      function(x) {
        if(!0_Q(olight_Q(x))) {
          mapleave(x);
        };
      },
	      aobjs(me));
  }

export function get_demon(id: STRING) {
    let obj: OBJECT = find_obj(id);
    let dems: LIST(/*[*/ [REST, HACK] /*]*/) = G_demons;
    mapf(false,
    function(x: HACK) {
        if(hobj(x) === obj) {
          mapleave(x);
        };
      },
    dems);
  }

defmac(pick_one, /*(*/ [() => vec] /*)*/, 
	form(nth, vec,form(_, 1, form(mod, form(random), form(length, vec)))))

defmac(clock_disable, /*(*/ [() => ev] /*)*/,
    form(put, ev,G_cflag,false))

defmac(clock_enable, /*(*/ [() => ev] /*)*/,
    form(put, ev,G_cflag,t))

export function yes_no(no_is_bad_Q: (ATOM | FALSE)) {
    let inbuf: STRING = G_inbuf;
    let inchan = G_inchan;
    reset(inchan);
readstring(inbuf,inchan,G_reader_string);
if(true) {
      no_is_bad_Q;
      !memq(inbuf[1], `NnfF`);
    } else {
      t;
      memq(inbuf[1], `TtYy`);
    };
  }

defmac(apply_random, /*(*/ [() => frob,`OPTIONAL`, /*(*/ [() => mumble,false] /*)*/] /*)*/,
	form(cond,
	      /*(*/ [form(type_Q, frob,atom),
	       if(true) {
          mumble;
          form(apply, form(gval, frob), mumble);
        } else {
          ;
        }] /*)*/,
	      /*(*/ [t, form(dispatch, frob,mumble)] /*)*/))

export function da(fn: (APPLICABLE | ATOM | FIX), foo?) {
    prog(/*(*/ [] /*)*/,
    if(type_Q(fn,fix)) {
        dispatch(fn,foo);
      } else if(applicable_Q(fn)) {
        if(true) {
            foo;
            apply(fn,foo);
          } else {
            ;
          };
      } else if(gassigned_Q(fn)) {
        fn = /*,*/ [fn] /*1*/;
        again();
      } else {
        ;
      });
  }

`OLD MAZER`

moblist(flag, 17)

psetg(null_desc, ``)

psetg(null_exit, chtype(/*[*/ [] /*]*/, exit))

psetg(null_syn, _X,/*[*/ [] /*]*/)

export function find_room(id: (ATOM | STRING)) {
    let atm: (ATOM | FALSE) = null;
    let room: ROOM = null;
    if(type_Q(id,atom)) {
      id = spname(id);
    };
if((atm = lookup(id,G_room_obl) && gassigned_Q(atm))) {
      /*,*/ [atm] /*1*/;
    } else {
      setg(atm,		     room = chtype(vector(atm,G_null_desc,G_null_desc,					  false, false, G_null_exit,/*(*/ [] /*)*/, false, 0, 0, 0, t),
				 room));
      G_rooms = /*(*/ [room,_X,G_rooms] /*)*/;
      room;
    };
  }

export function find_obj(id: (ATOM | STRING)) {
    let obj: OBJECT = null;
    let atm: (ATOM | FALSE) = null;
    if(type_Q(id,atom)) {
      id = spname(id);
    };
if((atm = lookup(id,G_object_obl) && gassigned_Q(atm))) {
      /*,*/ [atm] /*1*/;
    } else {
      setg(atm,		     obj = chtype(/*[*/ [atm,G_null_syn,G_null_desc,G_null_desc,false,
				   false, /*(*/ [] /*)*/, false, 0, false, 0, 0, 0, false, false, 5, 0, G_null_syn,false, false] /*]*/,
				  object));
      G_objects = /*(*/ [obj,_X,G_objects] /*)*/;
      obj;
    };
  }

export function function_print(frob: (ATOM | OFFSET | APPLICABLE | FALSE)) {
    if(!frob) {
      princ(`<>`);
    } else if(type_Q(frob,rsubr, rsubr_entry)) {
      prin1(frob[2]);
    } else if(type_Q(frob,atom)) {
      prin1(frob);
    } else if(type_Q(frob,offset)) {
      princ(`#OFFSET `);
      prin1(get_atom(frob));
    } else {
      prin1(get_atom(frob));
    };
  }