(GLOBALS.muddle < 100 && use("LSRTNS"))

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
  form(put, rm,GLOBALS.rbits,form(andb, form(rbits, rm), form(xorb, bit,_1))))
defmac(trc, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,GLOBALS.oflags,form(xorb, form(oflags, obj), bit)))
defmac(trz, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,GLOBALS.oflags,form(andb, form(oflags, obj), form(xorb, bit,_1))))
defmac(tro, /*(*/ [() => obj,() => bit] /*)*/,
  form(put, obj,GLOBALS.oflags,form(orb, form(oflags, obj), bit)))
defmac(rtro, /*(*/ [() => rm,() => bit] /*)*/,
  form(put, rm,GLOBALS.rbits,form(orb, form(rbits, rm), bit)))

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

gdecl(/*(*/ [orphans] /*)*/,
       vector((false || atom),
	       (false || verb),
	       (false || object),
	       (false || prep),
	       (false || atom)))

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

"bits in <AFLAGS adv>:\n	  bit-name  bit-tester"

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

"bits in <OFLAGS object>:\n	  bit-name  bit-tester"

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

"extra stuff for flagword for objects"

"complement of the visible bit"
msetg(ovisoff, _777777777776_)

"can i be opened?"
defmac(openable_Q, /*(*/ [() => obj] /*)*/, form(trnn, obj,form(_, GLOBALS.doorbit,GLOBALS.contbit)))

"complement of the bit state" 
defmac(describable_Q, /*(*/ [() => obj] /*)*/, form(not, form(trnn, obj,GLOBALS.ndescbit)))

"if object is a light or aflame, then flaming"
defmac(flaming_Q, /*(*/ [() => obj] /*)*/,
    form(and, form(trnn, obj,GLOBALS.flamebit), form(1_Q, form(olight_Q, obj))))

"if object visible and open or transparent, can see inside it"
defmac(see_inside_Q, /*(*/ [() => obj] /*)*/,
    form(and, form(ovis_Q, obj),
	  form(or, form(transparent_Q, obj), form(oopen_Q, obj))))

\

// demons

newstruc(hack, vector,
	  haction, rapplic,
	  hobjs,   list(/*[*/ [rest, any] /*]*/),
	  "REST",
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


GLOBALS.load_max = 100
GLOBALS.score_max = 0

gdecl(/*(*/ [raw_score, load_max, score_max] /*)*/, fix,
       /*(*/ [random_list, rooms, sacred_places] /*)*/, list(/*[*/ [rest, room] /*]*/),
       /*(*/ [stars, objects, weapons, nasties] /*)*/, list(/*[*/ [rest, object] /*]*/),
       /*(*/ [prsvec] /*)*/, vector((false || verb), (false || object || direction),
					(false || object)),
       /*(*/ [winner, player] /*)*/, adv, /*(*/ [here] /*)*/, room, /*(*/ [inchan, outchan] /*)*/, channel, /*(*/ [demons] /*)*/, list,
       /*(*/ [moves, deaths] /*)*/, fix, /*(*/ [dummy, yuks] /*)*/, vector(/*[*/ [rest, string] /*]*/),
       /*(*/ [sword_demon] /*)*/, hack)

\

"UTILITY FUNCTIONS"

"TO OPEN DOORS"

defmac(cond_open, /*(*/ [() => dir,() => rm] /*)*/,
  form(prog, list(list(el, form(memq, dir,form(rexits, rm)))),
	/*#*/ [decl, /*(*/ [/*(*/ [el] /*)*/, /*<*/ [primtype(vector), atom, cexit] /*>*/] /*)*/] /*2*/,
	form(setg, form(cxflag, form(2, form(lval, el))), t)))

defmac(cond_close, /*(*/ [() => dir,() => rm] /*)*/,
  form(prog, list(list(el, form(memq, dir,form(rexits, rm)))),
	/*#*/ [decl, /*(*/ [/*(*/ [el] /*)*/, /*<*/ [primtype(vector), atom, cexit] /*>*/] /*)*/] /*2*/,
	form(setg, form(cxflag, form(2, form(lval, el))), false)))

"APPLY AN OBJECT FUNCTION"

defmac(apply_object, /*(*/ [() => obj] /*)*/,
    form(prog, /*(*/ [/*(*/ [foo, form(oaction, obj)] /*)*/] /*)*/,
	  form(cond, /*(*/ [form(not, form(lval, foo)), false] /*)*/,
		/*(*/ [form(type_Q, form(lval, foo), atom),
		 form(apply, form(gval, form(lval, foo)))] /*)*/,
		/*(*/ [form(dispatch, form(lval, foo))] /*)*/)))

"FLUSH AN OBJECT FROM A ROOM"

export function remove_object(obj: object) {
    let ocan: (object | false) = null;
    let oroom: (false | room) = null;
    cond(/*(*/ [ocan = ocan(obj),
	       ocan[GLOBALS.ocontents] = splice_out(obj,ocontents(ocan))] /*)*/,
	      /*(*/ [oroom = oroom(obj),
	       oroom[GLOBALS.robjs] = splice_out(obj,robjs(oroom))] /*)*/,
	      /*(*/ [memq(obj,robjs(GLOBALS.here)),
	       GLOBALS.here[GLOBALS.robjs] = splice_out(obj,robjs(GLOBALS.here))] /*)*/);
obj[GLOBALS.oroom] = false;
obj[GLOBALS.ocan] = false;
  }

defmac(insert_object, /*(*/ [() => obj,() => room] /*)*/,
	form(put,
	      room,	      GLOBALS.robjs,	      /*(*/ [form(put, obj,GLOBALS.oroom,room), chtype(form(robjs, room), segment)] /*)*/))

defmac(take_object, /*(*/ [() => obj,"OPTIONAL", /*(*/ [() => winner,() => GLOBALS.winner] /*)*/] /*)*/,
	form(put,
	      winner,	      GLOBALS.aobjs,	      /*(*/ [form(put, obj,GLOBALS.oroom,false), chtype(form(aobjs, winner), segment)] /*)*/))

defmac(drop_object, /*(*/ [() => obj,"OPTIONAL", /*(*/ [() => winner,() => GLOBALS.winner] /*)*/] /*)*/,
	form(put, winner,GLOBALS.aobjs,form(splice_out, obj,form(aobjs, winner))))

export function kill_obj(obj: object, winner: adv) {
    cond(/*(*/ [memq(obj,aobjs(winner)),
	       winner[GLOBALS.aobjs] = splice_out(obj,aobjs(winner))] /*)*/,
	      /*(*/ [remove_object(obj)] /*)*/);
  }

export function flush_obj(_tuple_, objs: tuple(/*[*/ [rest, string] /*]*/)) {
    let winner: adv = GLOBALS.winner;
    mapf(false,
	function(x) {
        let y: object = find_obj(x);
        (memq(y,aobjs(winner)) && drop_object(find_obj(x), winner));
      },
	objs);
  }

"ROB-ADV:  TAKE ALL OF THE VALUABLES A HACKER IS CARRYING"

export function rob_adv(win: adv, newlist: list(/*[*/ [rest, object] /*]*/)) {
    mapf(false,
    function(x: object) {
        cond(/*(*/ [(otval(x) > 0 && !trnn(x,GLOBALS.sacredbit)),
	     win[GLOBALS.aobjs] = splice_out(x,aobjs(win)),
	     newlist = /*(*/ [x,_X,newlist] /*)*/] /*)*/);
      },
    aobjs(win));
  }

"ROB-ROOM:  TAKE VALUABLES FROM A ROOM, PROBABILISTICALLY"

export function rob_room(rm: room, newlist: list(/*[*/ [rest, object] /*]*/), prob: number) {
    mapf(false,
    function(x: object) {
        cond(/*(*/ [(otval(x) > 0 && !trnn(x,GLOBALS.sacredbit) && ovis_Q(x) && prob(prob)),
	     remove_object(x),
	     x[GLOBALS.otouch_Q] = t,
	     newlist = /*(*/ [x,_X,newlist] /*)*/] /*)*/,
	    /*(*/ [type_Q(orand(x), adv),
	     newlist = rob_adv(orand(x), newlist)] /*)*/);
      },
    robjs(rm));
  }

export function valuables_Q(adv: adv) {
    mapf(false,
    function(x: object) {
        cond(/*(*/ [otval(x) > 0, mapleave(t)] /*)*/);
      },
    aobjs(adv));
  }

export function armed_Q(adv: adv) {
    let weapons = GLOBALS.weapons;
    mapf(false,
    function(x: object) {
        cond(/*(*/ [memq(x,weapons),
	     mapleave(t)] /*)*/);
      },
    aobjs(adv));
  }

export function light_source(me: adv) {
    mapf(false,
	      function(x) {
        cond(/*(*/ [!0_Q(olight_Q(x)),
			mapleave(x)] /*)*/);
      },
	      aobjs(me));
  }

export function get_demon(id: string) {
    let obj: object = find_obj(id);
    let dems: list(/*[*/ [rest, hack] /*]*/) = GLOBALS.demons;
    mapf(false,
    function(x: hack) {
        cond(/*(*/ [hobj(x) === obj, mapleave(x)] /*)*/);
      },
    dems);
  }

defmac(pick_one, /*(*/ [() => vec] /*)*/, 
	form(nth, vec,form(_, 1, form(mod, form(random), form(length, vec)))))

defmac(clock_disable, /*(*/ [() => ev] /*)*/,
    form(put, ev,GLOBALS.cflag,false))

defmac(clock_enable, /*(*/ [() => ev] /*)*/,
    form(put, ev,GLOBALS.cflag,t))

export function yes_no(no_is_bad_Q: (atom | false)) {
    let inbuf: string = GLOBALS.inbuf;
    let inchan = GLOBALS.inchan;
    reset(inchan);
readstring(inbuf,inchan,GLOBALS.reader_string);
cond(/*(*/ [no_is_bad_Q,	       !memq(inbuf[1], "NnfF")] /*)*/,
	      /*(*/ [t,
	       memq(inbuf[1], "TtYy")] /*)*/);
  }

defmac(apply_random, /*(*/ [() => frob,"OPTIONAL", /*(*/ [() => mumble,false] /*)*/] /*)*/,
	form(cond,
	      /*(*/ [form(type_Q, frob,atom),
	       cond(/*(*/ [mumble,		      form(apply, form(gval, frob), mumble)] /*)*/,
		     /*(*/ [form(apply, form(gval, frob))] /*)*/)] /*)*/,
	      /*(*/ [t, form(dispatch, frob,mumble)] /*)*/))

export function da(fn: (applicable | atom | number), foo?) {
    prog(/*(*/ [] /*)*/,
    cond(/*(*/ [type_Q(fn,fix), dispatch(fn,foo)] /*)*/,
	  /*(*/ [applicable_Q(fn),
	   cond(/*(*/ [foo,		  apply(fn,foo)] /*)*/,
		 /*(*/ [apply(fn)] /*)*/)] /*)*/,
	  /*(*/ [gassigned_Q(fn),
	   fn = /*,*/ [fn] /*1*/,
	   again()] /*)*/,
	  /*(*/ [error(unassigned_variable_X_errors, fn,da)] /*)*/));
  }

"OLD MAZER"

moblist(flag, 17)

psetg(null_desc, "")

psetg(null_exit, chtype(/*[*/ [] /*]*/, exit))

psetg(null_syn, _X,/*[*/ [] /*]*/)

export function find_room(id: (atom | string)) {
    let atm: (atom | false) = null;
    let room: room = null;
    cond(/*(*/ [type_Q(id,atom), id = spname(id)] /*)*/);
cond(/*(*/ [(atm = lookup(id,GLOBALS.room_obl) && gassigned_Q(atm)),
		    /*,*/ [atm] /*1*/] /*)*/,
	      /*(*/ [(atm || atm = insert(id,GLOBALS.room_obl)),
	       setg(atm,		     room = chtype(vector(atm,GLOBALS.null_desc,GLOBALS.null_desc,					  false, false, GLOBALS.null_exit,/*(*/ [] /*)*/, false, 0, 0, 0, t),
				 room)),
	       GLOBALS.rooms = /*(*/ [room,_X,GLOBALS.rooms] /*)*/,
	       room] /*)*/);
  }

export function find_obj(id: (atom | string)) {
    let obj: object = null;
    let atm: (atom | false) = null;
    cond(/*(*/ [type_Q(id,atom), id = spname(id)] /*)*/);
cond(/*(*/ [(atm = lookup(id,GLOBALS.object_obl) && gassigned_Q(atm)),
	       /*,*/ [atm] /*1*/] /*)*/,
	      /*(*/ [(atm || atm = insert(id,GLOBALS.object_obl)),
	       setg(atm,		     obj = chtype(/*[*/ [atm,GLOBALS.null_syn,GLOBALS.null_desc,GLOBALS.null_desc,false,
				   false, /*(*/ [] /*)*/, false, 0, false, 0, 0, 0, false, false, 5, 0, GLOBALS.null_syn,false, false] /*]*/,
				  object)),
	       GLOBALS.objects = /*(*/ [obj,_X,GLOBALS.objects] /*)*/,
	       obj] /*)*/);
  }

export function function_print(frob: (atom | offset | applicable | false)) {
    cond(/*(*/ [!frob, princ("<>")] /*)*/,
	/*(*/ [type_Q(frob,rsubr, rsubr_entry),
	 prin1(frob[2])] /*)*/,
	/*(*/ [type_Q(frob,atom),
	 prin1(frob)] /*)*/,
	/*(*/ [type_Q(frob,offset),
	 princ("#OFFSET"),
	 prin1(get_atom(frob))] /*)*/,
	/*(*/ [princ("#FUNCTION"),
	 prin1(get_atom(frob))] /*)*/);
  }