and(
  l_Q(
    GLOBALS.muddle,
    100),
  use(
    "LSRTNS"))

// applicables

newtype(
  offset,
  word)

put(
  rapplic,
  decl,
  () => or(
      atom,
      false,
      offset))

// newtypes for parser

newtype(
  buzz,
  string)

newtype(
  direction,
  atom)

newtype(
  adjective,
  atom)

newtype(
  prep,
  atom)

// generalized oflags tester

defmac(
  trnn,
  /*(*/ [() => obj,
    () => bit] /*)*/,
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        LOCALS.bit,
        form(
          oflags,
          LOCALS.obj)),
      fix),
    0))

defmac(
  rtrnn,
  /*(*/ [() => rm,
    () => bit] /*)*/,
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        LOCALS.bit,
        form(
          rbits,
          LOCALS.rm)),
      fix),
    0))

defmac(
  rtrz,
  /*(*/ [() => rm,
    () => bit] /*)*/,
  form(
    put,
    LOCALS.rm,
    GLOBALS.rbits,
    form(
      andb,
      form(
        rbits,
        LOCALS.rm),
      form(
        xorb,
        LOCALS.bit,
        _1))))

defmac(
  trc,
  /*(*/ [() => obj,
    () => bit] /*)*/,
  form(
    put,
    LOCALS.obj,
    GLOBALS.oflags,
    form(
      xorb,
      form(
        oflags,
        LOCALS.obj),
      LOCALS.bit)))

defmac(
  trz,
  /*(*/ [() => obj,
    () => bit] /*)*/,
  form(
    put,
    LOCALS.obj,
    GLOBALS.oflags,
    form(
      andb,
      form(
        oflags,
        LOCALS.obj),
      form(
        xorb,
        LOCALS.bit,
        _1))))

defmac(
  tro,
  /*(*/ [() => obj,
    () => bit] /*)*/,
  form(
    put,
    LOCALS.obj,
    GLOBALS.oflags,
    form(
      orb,
      form(
        oflags,
        LOCALS.obj),
      LOCALS.bit)))

defmac(
  rtro,
  /*(*/ [() => rm,
    () => bit] /*)*/,
  form(
    put,
    LOCALS.rm,
    GLOBALS.rbits,
    form(
      orb,
      form(
        rbits,
        LOCALS.rm),
      LOCALS.bit)))

// room definition

newstruc(
  room,
  vector,
  rid,
  atom,
  // room id,
  rdesc1,
  string,
  // long description,
  rdesc2,
  string,
  // short description,
  rseen_Q,
  or(
    atom,
    false),
  // visited?,
  rlight_Q,
  or(
    atom,
    false),
  // endogenous light source?,
  rexits,
  exit,
  // list of exits,
  robjs,
  list(
    /*[*/ [rest,
      object] /*]*/),
  // objects in room,
  raction,
  rapplic,
  // room-action,
  rvars,
  primtype(
    word),
  // slot for use of room function,
  rval,
  fix,
  // value for visiting,
  rbits,
  primtype(
    word),
  // random flags,
  rrand,
  any,
  // random slot)

// flagword for <RBITS room>:    bit-name   bit-tester

flagword(
  rlandbit,
  null,
  // on land,
  rwaterbit,
  null,
  // water room,
  rairbit,
  null,
  // mid-air room,
  rsacredbit,
  null,
  // thief not allowed,
  rfillbit,
  null,
  // can fill bottle here,
  rmungbit,
  null,
  // room has been munged,
  rbuckbit,
  null,
  // this room is a bucket,
  rhousebit,
  null,
  // This room is part of the house)

// exit

newtype(
  exit,
  vector,
  () => /*<*/ [primtype(
        vector),
      /*[*/ [rest,
        atom,
        or(
          room,
          cexit,
          nexit)] /*]*/] /*>*/)

// conditional exit

newstruc(
  cexit,
  vector,
  cxflag,
  atom,
  // condition flag,
  cxroom,
  room,
  // room it protects,
  cxstr,
  or(
    false,
    string),
  // description,
  cxaction,
  rapplic,
  // exit function)

newtype(
  nexit,
  string)

// unusable exit description

// PARSER related types

// ACTION -- top level type for verbs

newstruc(
  action,
  vector,
  vname,
  atom,
  // atom associated with this action,
  vdecl,
  vspec,
  // syntaxes for this verb (any number),
  vstr,
  string,
  // string to print when talking about this verb)

// VSPEC -- uvector of syntaxes for a verb

newtype(
  vspec,
  uvector,
  () => /*<*/ [primtype(
        uvector),
      /*[*/ [rest,
        syntax] /*]*/] /*>*/)

// SYNTAX -- a legal syntax for a sentence involving this verb

newstruc(
  syntax,
  vector,
  syn1,
  varg,
  // direct object, more or less,
  syn2,
  varg,
  // indirect object, more or less,
  sfcn,
  verb,
  // function to handle this action,
  sflip,
  or(
    atom,
    false),
  // (?),
  sdriver,
  or(
    atom,
    false),
  // (?))

// VARG -- types and locations of objects acceptable as args to verbs,    these go in the SYN1 and SYN2 slots of a SYNTAX.

newstruc(
  varg,
  vector,
  vbit,
  fix,
  // acceptable object characteristics,
  vprep,
  or(
    prep,
    false),
  // preposition that must precede(?) object,
  vword,
  fix,
  // locations object may be looked for in)

// flagbit definitions for VWORD of a VARG

flagword(
  vabit,
  null,
  // look in AOBJS,
  vrbit,
  null,
  // look in ROBJS,
  vtbit,
  null,
  // no-take,
  vxbit,
  null,
  // (?) turned on by '=' in VARG spec)

// VTRNN -- test a bit in the VWORD slot of a VARG

defmac(
  vtrnn,
  /*(*/ [() => v,
    () => bit] /*)*/,
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        LOCALS.bit,
        form(
          vword,
          LOCALS.v)),
      fix),
    0))

// VERB -- name and function to apply to handle verb

newstruc(
  verb,
  vector,
  vname,
  atom,
  vfcn,
  rapplic)

// ORPHANS -- mysterious vector of orphan data

gdecl(
  /*(*/ [orphans] /*)*/,
  vector(
    or(
      false,
      atom),
    or(
      false,
      verb),
    or(
      false,
      object),
    or(
      false,
      prep),
    or(
      false,
      atom)))

and_Q(
  msetg(
    oflag,
    1),
  msetg(
    overb,
    2),
  msetg(
    oslot1,
    3),
  msetg(
    oprep,
    4),
  msetg(
    oname,
    5))

// prepositional phrases

newstruc(
  phrase,
  vector,
  pprep,
  prep,
  pobj,
  object)

// adventurer

newstruc(
  adv,
  vector,
  aroom,
  room,
  // where he is,
  aobjs,
  list(
    /*[*/ [rest,
      object] /*]*/),
  // what he's carrying,
  ascore,
  fix,
  // score,
  avehicle,
  or(
    false,
    object),
  // what he's riding in,
  aobj,
  object,
  // what he is,
  aaction,
  rapplic,
  // special action for robot, etc.,
  astrength,
  fix,
  // fighting strength,
  arand,
  any,
  // ** reserved for future expansion **,
  aflags,
  primtype(
    word),
  // flags THIS MUST BE SAME OFFSET AS OFLAGS!)

"bits in <AFLAGS adv>:\n	  bit-name  bit-tester"

flagword(
  astaggered,
  staggered_Q,
  // staggered?)

// object

newstruc(
  object,
  vector,
  oid,
  atom,
  // unique name, SETG'd to this,
  onames,
  uvector(
    /*[*/ [rest,
      atom] /*]*/),
  // synonyms,
  odesc1,
  string,
  // description when not carried,
  odesc2,
  string,
  // short description,
  odesco,
  or(
    string,
    false),
  // description when untouched,
  oaction,
  rapplic,
  // object-action,
  ocontents,
  list(
    /*[*/ [rest,
      object] /*]*/),
  // list of contents,
  ocan,
  or(
    false,
    object),
  // what contains this,
  oflags,
  primtype(
    word),
  // flags THIS MUST BE SAME OFFSET AS AFLAGS!,
  otouch_Q,
  or(
    atom,
    false),
  // has this been touched?,
  olight_Q,
  fix,
  // light producer?,
  ofval,
  fix,
  // value for finding,
  otval,
  fix,
  // value for putting in trophy case,
  orand,
  any,
  // random slot,
  oopen_Q,
  or(
    atom,
    false),
  // is this open?,
  osize,
  fix,
  // how big is it?,
  ocapac,
  fix,
  // how much can it hold?,
  oadjs,
  uvector(
    /*[*/ [rest,
      adjective] /*]*/),
  // adjectives for this,
  oroom,
  or(
    false,
    room),
  // what room its in,
  oread,
  or(
    false,
    string),
  // reading material)

"bits in <OFLAGS object>:\n	  bit-name  bit-tester"

flagword(
  ovison,
  ovis_Q,
  // visible?,
  readbit,
  readable_Q,
  // readable?,
  takebit,
  can_take_Q,
  // takeable?,
  doorbit,
  door_Q,
  // object is door,
  transbit,
  transparent_Q,
  // object is transparent,
  foodbit,
  edible_Q,
  // object is food,
  ndescbit,
  null,
  // object not describable,
  drinkbit,
  drinkable_Q,
  // object is drinkable,
  contbit,
  null,
  // object can be opened/closed,
  lightbit,
  null,
  // object can provide light,
  vicbit,
  null,
  // object is victim,
  burnbit,
  burnable_Q,
  // object is flammable,
  flamebit,
  null,
  // object is on fire,
  toolbit,
  null,
  // object is a tool,
  turnbit,
  null,
  // object can be turned,
  vehbit,
  null,
  // object is a vehicle,
  findmebit,
  null,
  // can be reached from a vehicle,
  sleepbit,
  null,
  // object is asleep,
  searchbit,
  null,
  // allow multi-level access into this,
  sacredbit,
  null,
  // thief can't take this,
  tiebit,
  null,
  // object can be tied,
  echo_room_bit,
  null,
  // nothing can be taken in echo room,
  actorbit,
  null,
  // object is an actor,
  weaponbit,
  null,
  // object is a weapon,
  fightbit,
  fighting_Q,
  // object is in melee,
  villain,
  null,
  // object is a bad guy,
  staggered,
  null,
  // object can't fight this turn,
  trytakebit,
  null,
  // object wants to handle not being taken,
  no_check_bit,
  null,
  // ignore checks (in put & drop):  for EVERY and VALUA)

"extra stuff for flagword for objects"

"complement of the visible bit"

msetg(
  ovisoff,
  _777777777776_)

"can i be opened?"

defmac(
  openable_Q,
  /*(*/ [() => obj] /*)*/,
  form(
    trnn,
    LOCALS.obj,
    form(
      _,
      GLOBALS.doorbit,
      GLOBALS.contbit)))

"complement of the bit state"

defmac(
  describable_Q,
  /*(*/ [() => obj] /*)*/,
  form(
    not,
    form(
      trnn,
      LOCALS.obj,
      GLOBALS.ndescbit)))

"if object is a light or aflame, then flaming"

defmac(
  flaming_Q,
  /*(*/ [() => obj] /*)*/,
  form(
    and,
    form(
      trnn,
      LOCALS.obj,
      GLOBALS.flamebit),
    form(
      1_Q,
      form(
        olight_Q,
        LOCALS.obj))))

"if object visible and open or transparent, can see inside it"

defmac(
  see_inside_Q,
  /*(*/ [() => obj] /*)*/,
  form(
    and,
    form(
      ovis_Q,
      LOCALS.obj),
    form(
      or,
      form(
        transparent_Q,
        LOCALS.obj),
      form(
        oopen_Q,
        LOCALS.obj))))

// demons

newstruc(
  hack,
  vector,
  haction,
  rapplic,
  hobjs,
  list(
    /*[*/ [rest,
      any] /*]*/),
  "REST",
  hrooms,
  list(
    /*[*/ [rest,
      room] /*]*/),
  hroom,
  room,
  hobj,
  object,
  hflag,
  any)

// Clock interrupts

newstruc(
  cevent,
  vector,
  ctick,
  fix,
  caction,
  or(
    applicable,
    offset),
  cflag,
  or(
    atom,
    false),
  cid,
  atom)

GLOBALS.load_max = 100

GLOBALS.score_max = 0

gdecl(
  /*(*/ [raw_score,
    load_max,
    score_max] /*)*/,
  fix,
  /*(*/ [random_list,
    rooms,
    sacred_places] /*)*/,
  list(
    /*[*/ [rest,
      room] /*]*/),
  /*(*/ [stars,
    objects,
    weapons,
    nasties] /*)*/,
  list(
    /*[*/ [rest,
      object] /*]*/),
  /*(*/ [prsvec] /*)*/,
  vector(
    or(
      false,
      verb),
    or(
      false,
      object,
      direction),
    or(
      false,
      object)),
  /*(*/ [winner,
    player] /*)*/,
  adv,
  /*(*/ [here] /*)*/,
  room,
  /*(*/ [inchan,
    outchan] /*)*/,
  channel,
  /*(*/ [demons] /*)*/,
  list,
  /*(*/ [moves,
    deaths] /*)*/,
  fix,
  /*(*/ [dummy,
    yuks] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/),
  /*(*/ [sword_demon] /*)*/,
  hack)

"UTILITY FUNCTIONS"

"TO OPEN DOORS"

defmac(
  cond_open,
  /*(*/ [() => dir,
    () => rm] /*)*/,
  form(
    prog,
    list(
      list(
        el,
        form(
          memq,
          LOCALS.dir,
          form(
            rexits,
            LOCALS.rm)))),
    /*#*/ [decl,
      /*(*/ [/*(*/ [el] /*)*/,
        /*<*/ [primtype(
            vector),
          atom,
          cexit] /*>*/] /*)*/] /*2*/,
    form(
      setg,
      form(
        cxflag,
        form(
          2,
          form(
            lval,
            el))),
      t)))

defmac(
  cond_close,
  /*(*/ [() => dir,
    () => rm] /*)*/,
  form(
    prog,
    list(
      list(
        el,
        form(
          memq,
          LOCALS.dir,
          form(
            rexits,
            LOCALS.rm)))),
    /*#*/ [decl,
      /*(*/ [/*(*/ [el] /*)*/,
        /*<*/ [primtype(
            vector),
          atom,
          cexit] /*>*/] /*)*/] /*2*/,
    form(
      setg,
      form(
        cxflag,
        form(
          2,
          form(
            lval,
            el))),
      null)))

"APPLY AN OBJECT FUNCTION"

defmac(
  apply_object,
  /*(*/ [() => obj] /*)*/,
  form(
    prog,
    /*(*/ [/*(*/ [foo,
        form(
          oaction,
          LOCALS.obj)] /*)*/] /*)*/,
    form(
      cond,
      /*(*/ [form(
          not,
          form(
            lval,
            foo)),
        null] /*)*/,
      /*(*/ [form(
          type_Q,
          form(
            lval,
            foo),
          atom),
        form(
          apply,
          form(
            gval,
            form(
              lval,
              foo)))] /*)*/,
      /*(*/ [form(
          dispatch,
          form(
            lval,
            foo))] /*)*/)))

"FLUSH AN OBJECT FROM A ROOM"

FUNCTIONS.remove_object = 
  (obj) => {
    
    let ocan = null;
    let oroom = null;
    cond(
    /*(*/ [LOCALS.ocan = ocan(
          LOCALS.obj),
      put(
        LOCALS.ocan,
        GLOBALS.ocontents,
        splice_out(
          LOCALS.obj,
          ocontents(
            LOCALS.ocan)))] /*)*/,
    /*(*/ [LOCALS.oroom = oroom(
          LOCALS.obj),
      put(
        LOCALS.oroom,
        GLOBALS.robjs,
        splice_out(
          LOCALS.obj,
          robjs(
            LOCALS.oroom)))] /*)*/,
    /*(*/ [memq(
        LOCALS.obj,
        robjs(
          GLOBALS.here)),
      put(
        GLOBALS.here,
        GLOBALS.robjs,
        splice_out(
          LOCALS.obj,
          robjs(
            GLOBALS.here)))] /*)*/)
put(
    LOCALS.obj,
    GLOBALS.oroom,
    null)
put(
    LOCALS.obj,
    GLOBALS.ocan,
    null)
  }

defmac(
  insert_object,
  /*(*/ [() => obj,
    () => room] /*)*/,
  form(
    put,
    LOCALS.room,
    GLOBALS.robjs,
    /*(*/ [form(
        put,
        LOCALS.obj,
        GLOBALS.oroom,
        LOCALS.room),
      chtype(
        form(
          robjs,
          LOCALS.room),
        segment)] /*)*/))

defmac(
  take_object,
  /*(*/ [() => obj,
    "OPTIONAL",
    /*(*/ [() => winner,
      () => GLOBALS.winner] /*)*/] /*)*/,
  form(
    put,
    LOCALS.winner,
    GLOBALS.aobjs,
    /*(*/ [form(
        put,
        LOCALS.obj,
        GLOBALS.oroom,
        null),
      chtype(
        form(
          aobjs,
          LOCALS.winner),
        segment)] /*)*/))

defmac(
  drop_object,
  /*(*/ [() => obj,
    "OPTIONAL",
    /*(*/ [() => winner,
      () => GLOBALS.winner] /*)*/] /*)*/,
  form(
    put,
    LOCALS.winner,
    GLOBALS.aobjs,
    form(
      splice_out,
      LOCALS.obj,
      form(
        aobjs,
        LOCALS.winner))))

FUNCTIONS.kill_obj = 
  (obj,
    winner) => {
    
    cond(
    /*(*/ [memq(
        LOCALS.obj,
        aobjs(
          LOCALS.winner)),
      put(
        LOCALS.winner,
        GLOBALS.aobjs,
        splice_out(
          LOCALS.obj,
          aobjs(
            LOCALS.winner)))] /*)*/,
    /*(*/ [remove_object(
        LOCALS.obj)] /*)*/)
  }

FUNCTIONS.flush_obj = 
  (_tuple_,
    objs) => {
    
    let winner = GLOBALS.winner;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        let y = find_obj(
            LOCALS.x);
        and(
        memq(
          LOCALS.y,
          aobjs(
            LOCALS.winner)),
        drop_object(
          find_obj(
            LOCALS.x),
          LOCALS.winner))
      },
    LOCALS.objs)
  }

"ROB-ADV:  TAKE ALL OF THE VALUABLES A HACKER IS CARRYING"

FUNCTIONS.rob_adv = 
  (win,
    newlist) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [and(
            g_Q(
              otval(
                LOCALS.x),
              0),
            not(
              trnn(
                LOCALS.x,
                GLOBALS.sacredbit))),
          put(
            LOCALS.win,
            GLOBALS.aobjs,
            splice_out(
              LOCALS.x,
              aobjs(
                LOCALS.win))),
          LOCALS.newlist = /*(*/ [LOCALS.x,
              _X,
              LOCALS.newlist] /*)*/] /*)*/)
      },
    aobjs(
      LOCALS.win))
  }

"ROB-ROOM:  TAKE VALUABLES FROM A ROOM, PROBABILISTICALLY"

FUNCTIONS.rob_room = 
  (rm,
    newlist,
    prob) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [and(
            g_Q(
              otval(
                LOCALS.x),
              0),
            not(
              trnn(
                LOCALS.x,
                GLOBALS.sacredbit)),
            ovis_Q(
              LOCALS.x),
            prob(
              LOCALS.prob)),
          remove_object(
            LOCALS.x),
          put(
            LOCALS.x,
            GLOBALS.otouch_Q,
            t),
          LOCALS.newlist = /*(*/ [LOCALS.x,
              _X,
              LOCALS.newlist] /*)*/] /*)*/,
        /*(*/ [type_Q(
            orand(
              LOCALS.x),
            adv),
          LOCALS.newlist = rob_adv(
              orand(
                LOCALS.x),
              LOCALS.newlist)] /*)*/)
      },
    robjs(
      LOCALS.rm))
  }

FUNCTIONS.valuables_Q = 
  (adv) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [g_Q(
            otval(
              LOCALS.x),
            0),
          mapleave(
            t)] /*)*/)
      },
    aobjs(
      LOCALS.adv))
  }

FUNCTIONS.armed_Q = 
  (adv) => {
    
    let weapons = GLOBALS.weapons;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [memq(
            LOCALS.x,
            LOCALS.weapons),
          mapleave(
            t)] /*)*/)
      },
    aobjs(
      LOCALS.adv))
  }

FUNCTIONS.light_source = 
  (me) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [not(
            0_Q(
              olight_Q(
                LOCALS.x))),
          mapleave(
            LOCALS.x)] /*)*/)
      },
    aobjs(
      LOCALS.me))
  }

FUNCTIONS.get_demon = 
  (id) => {
    
    let obj = find_obj(
        LOCALS.id);
    let dems = GLOBALS.demons;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [_EQ_Q(
            hobj(
              LOCALS.x),
            LOCALS.obj),
          mapleave(
            LOCALS.x)] /*)*/)
      },
    LOCALS.dems)
  }

defmac(
  pick_one,
  /*(*/ [() => vec] /*)*/,
  form(
    nth,
    LOCALS.vec,
    form(
      _,
      1,
      form(
        mod,
        form(
          random),
        form(
          length,
          LOCALS.vec)))))

defmac(
  clock_disable,
  /*(*/ [() => ev] /*)*/,
  form(
    put,
    LOCALS.ev,
    GLOBALS.cflag,
    null))

defmac(
  clock_enable,
  /*(*/ [() => ev] /*)*/,
  form(
    put,
    LOCALS.ev,
    GLOBALS.cflag,
    t))

FUNCTIONS.yes_no = 
  (no_is_bad_Q) => {
    
    let inbuf = GLOBALS.inbuf;
    let inchan = GLOBALS.inchan;
    reset(
    LOCALS.inchan)
readstring(
    LOCALS.inbuf,
    LOCALS.inchan,
    GLOBALS.reader_string)
cond(
    /*(*/ [LOCALS.no_is_bad_Q,
      not(
        memq(
          1(
            LOCALS.inbuf),
          "NnfF"))] /*)*/,
    /*(*/ [t,
      memq(
        1(
          LOCALS.inbuf),
        "TtYy")] /*)*/)
  }

defmac(
  apply_random,
  /*(*/ [() => frob,
    "OPTIONAL",
    /*(*/ [() => mumble,
      null] /*)*/] /*)*/,
  form(
    cond,
    /*(*/ [form(
        type_Q,
        LOCALS.frob,
        atom),
      cond(
        /*(*/ [LOCALS.mumble,
          form(
            apply,
            form(
              gval,
              LOCALS.frob),
            LOCALS.mumble)] /*)*/,
        /*(*/ [form(
            apply,
            form(
              gval,
              LOCALS.frob))] /*)*/)] /*)*/,
    /*(*/ [t,
      form(
        dispatch,
        LOCALS.frob,
        LOCALS.mumble)] /*)*/))

FUNCTIONS.da = 
  (fn,
    foo?) => {
    
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [type_Q(
          LOCALS.fn,
          fix),
        dispatch(
          LOCALS.fn,
          LOCALS.foo)] /*)*/,
      /*(*/ [applicable_Q(
          LOCALS.fn),
        cond(
          /*(*/ [LOCALS.foo,
            apply(
              LOCALS.fn,
              LOCALS.foo)] /*)*/,
          /*(*/ [apply(
              LOCALS.fn)] /*)*/)] /*)*/,
      /*(*/ [gassigned_Q(
          LOCALS.fn),
        LOCALS.fn = /*,*/ [LOCALS.fn] /*1*/,
        again(
          )] /*)*/,
      /*(*/ [error(
          unassigned_variable_X_errors,
          LOCALS.fn,
          da)] /*)*/))
  }

"OLD MAZER"

moblist(
  flag,
  17)

psetg(
  null_desc,
  "")

psetg(
  null_exit,
  chtype(
    /*[*/ [] /*]*/,
    exit))

psetg(
  null_syn,
  _X,
  /*[*/ [] /*]*/)

FUNCTIONS.find_room = 
  (id) => {
    
    let atm = null;
    let room = null;
    cond(
    /*(*/ [type_Q(
        LOCALS.id,
        atom),
      LOCALS.id = spname(
          LOCALS.id)] /*)*/)
cond(
    /*(*/ [and(
        LOCALS.atm = lookup(
            LOCALS.id,
            GLOBALS.room_obl),
        gassigned_Q(
          LOCALS.atm)),
      /*,*/ [LOCALS.atm] /*1*/] /*)*/,
    /*(*/ [or(
        LOCALS.atm,
        LOCALS.atm = insert(
            LOCALS.id,
            GLOBALS.room_obl)),
      setg(
        LOCALS.atm,
        LOCALS.room = chtype(
            vector(
              LOCALS.atm,
              GLOBALS.null_desc,
              GLOBALS.null_desc,
              null,
              null,
              GLOBALS.null_exit,
              /*(*/ [] /*)*/,
              null,
              0,
              0,
              0,
              t),
            room)),
      GLOBALS.rooms = /*(*/ [LOCALS.room,
          _X,
          GLOBALS.rooms] /*)*/,
      LOCALS.room] /*)*/)
  }

FUNCTIONS.find_obj = 
  (id) => {
    
    let obj = null;
    let atm = null;
    cond(
    /*(*/ [type_Q(
        LOCALS.id,
        atom),
      LOCALS.id = spname(
          LOCALS.id)] /*)*/)
cond(
    /*(*/ [and(
        LOCALS.atm = lookup(
            LOCALS.id,
            GLOBALS.object_obl),
        gassigned_Q(
          LOCALS.atm)),
      /*,*/ [LOCALS.atm] /*1*/] /*)*/,
    /*(*/ [or(
        LOCALS.atm,
        LOCALS.atm = insert(
            LOCALS.id,
            GLOBALS.object_obl)),
      setg(
        LOCALS.atm,
        LOCALS.obj = chtype(
            /*[*/ [LOCALS.atm,
              GLOBALS.null_syn,
              GLOBALS.null_desc,
              GLOBALS.null_desc,
              null,
              null,
              /*(*/ [] /*)*/,
              null,
              0,
              null,
              0,
              0,
              0,
              null,
              null,
              5,
              0,
              GLOBALS.null_syn,
              null,
              null] /*]*/,
            object)),
      GLOBALS.objects = /*(*/ [LOCALS.obj,
          _X,
          GLOBALS.objects] /*)*/,
      LOCALS.obj] /*)*/)
  }

FUNCTIONS.function_print = 
  (frob) => {
    
    cond(
    /*(*/ [not(
        LOCALS.frob),
      princ(
        "<>")] /*)*/,
    /*(*/ [type_Q(
        LOCALS.frob,
        rsubr,
        rsubr_entry),
      prin1(
        2(
          LOCALS.frob))] /*)*/,
    /*(*/ [type_Q(
        LOCALS.frob,
        atom),
      prin1(
        LOCALS.frob)] /*)*/,
    /*(*/ [type_Q(
        LOCALS.frob,
        offset),
      princ(
        "#OFFSET"),
      prin1(
        get_atom(
          LOCALS.frob))] /*)*/,
    /*(*/ [princ(
        "#FUNCTION"),
      prin1(
        get_atom(
          LOCALS.frob))] /*)*/)
  }