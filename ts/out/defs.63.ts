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
  (() => obj
    () => bit),
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        _bit,
        form(
          oflags,
          _obj)),
      fix),
    0))

defmac(
  rtrnn,
  (() => rm
    () => bit),
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        _bit,
        form(
          rbits,
          _rm)),
      fix),
    0))

defmac(
  rtrz,
  (() => rm
    () => bit),
  form(
    put,
    _rm,
    GLOBALS.rbits,
    form(
      andb,
      form(
        rbits,
        _rm),
      form(
        xorb,
        _bit,
        _1))))

defmac(
  trc,
  (() => obj
    () => bit),
  form(
    put,
    _obj,
    GLOBALS.oflags,
    form(
      xorb,
      form(
        oflags,
        _obj),
      _bit)))

defmac(
  trz,
  (() => obj
    () => bit),
  form(
    put,
    _obj,
    GLOBALS.oflags,
    form(
      andb,
      form(
        oflags,
        _obj),
      form(
        xorb,
        _bit,
        _1))))

defmac(
  tro,
  (() => obj
    () => bit),
  form(
    put,
    _obj,
    GLOBALS.oflags,
    form(
      orb,
      form(
        oflags,
        _obj),
      _bit)))

defmac(
  rtro,
  (() => rm
    () => bit),
  form(
    put,
    _rm,
    GLOBALS.rbits,
    form(
      orb,
      form(
        rbits,
        _rm),
      _bit)))

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
    [rest
      object]),
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
  () => <primtype(
        vector)
      [rest
        atom
        or(
          room,
          cexit,
          nexit)]>)

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
  () => <primtype(
        uvector)
      [rest
        syntax]>)

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
  (() => v
    () => bit),
  form(
    n_EQ_Q,
    form(
      chtype,
      form(
        andb,
        _bit,
        form(
          vword,
          _v)),
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
  (orphans),
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
    [rest
      object]),
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
    [rest
      atom]),
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
    [rest
      object]),
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
    [rest
      adjective]),
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
  (() => obj),
  form(
    trnn,
    _obj,
    form(
      _,
      GLOBALS.doorbit,
      GLOBALS.contbit)))

"complement of the bit state"

defmac(
  describable_Q,
  (() => obj),
  form(
    not,
    form(
      trnn,
      _obj,
      GLOBALS.ndescbit)))

"if object is a light or aflame, then flaming"

defmac(
  flaming_Q,
  (() => obj),
  form(
    and,
    form(
      trnn,
      _obj,
      GLOBALS.flamebit),
    form(
      1_Q,
      form(
        olight_Q,
        _obj))))

"if object visible and open or transparent, can see inside it"

defmac(
  see_inside_Q,
  (() => obj),
  form(
    and,
    form(
      ovis_Q,
      _obj),
    form(
      or,
      form(
        transparent_Q,
        _obj),
      form(
        oopen_Q,
        _obj))))

// demons

newstruc(
  hack,
  vector,
  haction,
  rapplic,
  hobjs,
  list(
    [rest
      any]),
  "REST",
  hrooms,
  list(
    [rest
      room]),
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
  (raw_score
    load_max
    score_max),
  fix,
  (random_list
    rooms
    sacred_places),
  list(
    [rest
      room]),
  (stars
    objects
    weapons
    nasties),
  list(
    [rest
      object]),
  (prsvec),
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
  (winner
    player),
  adv,
  (here),
  room,
  (inchan
    outchan),
  channel,
  (demons),
  list,
  (moves
    deaths),
  fix,
  (dummy
    yuks),
  vector(
    [rest
      string]),
  (sword_demon),
  hack)

"UTILITY FUNCTIONS"

"TO OPEN DOORS"

defmac(
  cond_open,
  (() => dir
    () => rm),
  form(
    prog,
    list(
      list(
        el,
        form(
          memq,
          _dir,
          form(
            rexits,
            _rm)))),
    #decl
      ((el)
        <primtype(
            vector)
          atom
          cexit>),
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
  (() => dir
    () => rm),
  form(
    prog,
    list(
      list(
        el,
        form(
          memq,
          _dir,
          form(
            rexits,
            _rm)))),
    #decl
      ((el)
        <primtype(
            vector)
          atom
          cexit>),
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
  (() => obj),
  form(
    prog,
    ((foo
        form(
          oaction,
          _obj))),
    form(
      cond,
      (form(
          not,
          form(
            lval,
            foo))
        null),
      (form(
          type_Q,
          form(
            lval,
            foo),
          atom)
        form(
          apply,
          form(
            gval,
            form(
              lval,
              foo)))),
      (form(
          dispatch,
          form(
            lval,
            foo))))))

"FLUSH AN OBJECT FROM A ROOM"

define(
  remove_object,
  (obj
    "AUX"
    ocan
    oroom),
  #decl
    ((obj)
      object
      (ocan)
      or(
        object,
        false)
      (oroom)
      or(
        false,
        room)),
  cond(
    (set(
        ocan,
        ocan(
          _obj))
      put(
        _ocan,
        GLOBALS.ocontents,
        splice_out(
          _obj,
          ocontents(
            _ocan)))),
    (set(
        oroom,
        oroom(
          _obj))
      put(
        _oroom,
        GLOBALS.robjs,
        splice_out(
          _obj,
          robjs(
            _oroom)))),
    (memq(
        _obj,
        robjs(
          GLOBALS.here))
      put(
        GLOBALS.here,
        GLOBALS.robjs,
        splice_out(
          _obj,
          robjs(
            GLOBALS.here))))),
  put(
    _obj,
    GLOBALS.oroom,
    null),
  put(
    _obj,
    GLOBALS.ocan,
    null))

defmac(
  insert_object,
  (() => obj
    () => room),
  form(
    put,
    _room,
    GLOBALS.robjs,
    (form(
        put,
        _obj,
        GLOBALS.oroom,
        _room)
      chtype(
        form(
          robjs,
          _room),
        segment))))

defmac(
  take_object,
  (() => obj
    "OPTIONAL"
    (() => winner
      () => GLOBALS.winner)),
  form(
    put,
    _winner,
    GLOBALS.aobjs,
    (form(
        put,
        _obj,
        GLOBALS.oroom,
        null)
      chtype(
        form(
          aobjs,
          _winner),
        segment))))

defmac(
  drop_object,
  (() => obj
    "OPTIONAL"
    (() => winner
      () => GLOBALS.winner)),
  form(
    put,
    _winner,
    GLOBALS.aobjs,
    form(
      splice_out,
      _obj,
      form(
        aobjs,
        _winner))))

define(
  kill_obj,
  (obj
    winner),
  #decl
    ((obj)
      object
      (winner)
      adv),
  cond(
    (memq(
        _obj,
        aobjs(
          _winner))
      put(
        _winner,
        GLOBALS.aobjs,
        splice_out(
          _obj,
          aobjs(
            _winner)))),
    (remove_object(
        _obj))))

define(
  flush_obj,
  ("TUPLE"
    objs
    "AUX"
    (winner
      GLOBALS.winner)),
  #decl
    ((objs)
      tuple(
        [rest
          string])
      (winner)
      adv),
  mapf(
    null,
    function(
      (x
        "AUX"
        (y
          find_obj(
            _x))),
      #decl
        ((y)
          object),
      and(
        memq(
          _y,
          aobjs(
            _winner)),
        drop_object(
          find_obj(
            _x),
          _winner))),
    _objs))

"ROB-ADV:  TAKE ALL OF THE VALUABLES A HACKER IS CARRYING"

define(
  rob_adv,
  (win
    newlist),
  #decl
    ((win)
      adv
      (newlist)
      list(
        [rest
          object])),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          object),
      cond(
        (and(
            g_Q(
              otval(
                _x),
              0),
            not(
              trnn(
                _x,
                GLOBALS.sacredbit)))
          put(
            _win,
            GLOBALS.aobjs,
            splice_out(
              _x,
              aobjs(
                _win)))
          set(
            newlist,
            (_x
              _X_newlist))))),
    aobjs(
      _win)),
  _newlist)

"ROB-ROOM:  TAKE VALUABLES FROM A ROOM, PROBABILISTICALLY"

define(
  rob_room,
  (rm
    newlist
    prob),
  #decl
    ((rm)
      room
      (newlist)
      list(
        [rest
          object])
      (prob)
      fix),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          object),
      cond(
        (and(
            g_Q(
              otval(
                _x),
              0),
            not(
              trnn(
                _x,
                GLOBALS.sacredbit)),
            ovis_Q(
              _x),
            prob(
              _prob))
          remove_object(
            _x)
          put(
            _x,
            GLOBALS.otouch_Q,
            t)
          set(
            newlist,
            (_x
              _X_newlist))),
        (type_Q(
            orand(
              _x),
            adv)
          set(
            newlist,
            rob_adv(
              orand(
                _x),
              _newlist))))),
    robjs(
      _rm)),
  _newlist)

define(
  valuables_Q,
  (adv),
  #decl
    ((adv)
      adv),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          object),
      cond(
        (g_Q(
            otval(
              _x),
            0)
          mapleave(
            t)))),
    aobjs(
      _adv)))

define(
  armed_Q,
  (adv
    "AUX"
    (weapons
      GLOBALS.weapons)),
  #decl
    ((adv)
      adv),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          object),
      cond(
        (memq(
            _x,
            _weapons)
          mapleave(
            t)))),
    aobjs(
      _adv)))

define(
  light_source,
  (me),
  #decl
    ((me)
      adv),
  mapf(
    null,
    /* FUNCTION */
      (x) => (
      cond,
      (not(
            0_Q(
              olight_Q(
                _x)))
          mapleave(
            _x))),
    aobjs(
      _me)))

define(
  get_demon,
  (id
    "AUX"
    (obj
      find_obj(
        _id))
    (dems
      GLOBALS.demons)),
  #decl
    ((id)
      string
      (obj)
      object
      (dems)
      list(
        [rest
          hack])),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          hack),
      cond(
        (_EQ_Q(
            hobj(
              _x),
            _obj)
          mapleave(
            _x)))),
    _dems))

defmac(
  pick_one,
  (() => vec),
  form(
    nth,
    _vec,
    form(
      _,
      1,
      form(
        mod,
        form(
          random),
        form(
          length,
          _vec)))))

defmac(
  clock_disable,
  (() => ev),
  form(
    put,
    _ev,
    GLOBALS.cflag,
    null))

defmac(
  clock_enable,
  (() => ev),
  form(
    put,
    _ev,
    GLOBALS.cflag,
    t))

define(
  yes_no,
  (no_is_bad_Q
    "AUX"
    (inbuf
      GLOBALS.inbuf)
    (inchan
      GLOBALS.inchan)),
  #decl
    ((inbuf)
      string
      (no_is_bad_Q)
      or(
        atom,
        false)),
  reset(
    _inchan),
  readstring(
    _inbuf,
    _inchan,
    GLOBALS.reader_string),
  cond(
    (_no_is_bad_Q
      not(
        memq(
          1(
            _inbuf),
          "NnfF"))),
    (t
      memq(
        1(
          _inbuf),
        "TtYy"))))

defmac(
  apply_random,
  (() => frob
    "OPTIONAL"
    (() => mumble
      null)),
  form(
    cond,
    (form(
        type_Q,
        _frob,
        atom)
      cond(
        (_mumble
          form(
            apply,
            form(
              gval,
              _frob),
            _mumble)),
        (form(
            apply,
            form(
              gval,
              _frob))))),
    (t
      form(
        dispatch,
        _frob,
        _mumble))))

define(
  da,
  (fn
    "OPTIONAL"
    (foo
      null)),
  #decl
    ((fn)
      or(
        applicable,
        atom,
        fix)),
  prog(
    (),
    cond(
      (type_Q(
          _fn,
          fix)
        dispatch(
          _fn,
          _foo)),
      (applicable_Q(
          _fn)
        cond(
          (_foo
            apply(
              _fn,
              _foo)),
          (apply(
              _fn)))),
      (gassigned_Q(
          _fn)
        set(
          fn,
          GLOBALS._fn)
        again(
          )),
      (error(
          unassigned_variable_X_errors,
          _fn,
          da)))))

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
    [],
    exit))

psetg(
  null_syn,
  _X,
  [])

define(
  find_room,
  (id
    "AUX"
    atm
    room),
  #decl
    ((id)
      or(
        atom,
        string)
      (value)
      room
      (room)
      room
      (atm)
      or(
        atom,
        false)),
  cond(
    (type_Q(
        _id,
        atom)
      set(
        id,
        spname(
          _id)))),
  cond(
    (and(
        set(
          atm,
          lookup(
            _id,
            GLOBALS.room_obl)),
        gassigned_Q(
          _atm))
      GLOBALS._atm),
    (or(
        _atm,
        set(
          atm,
          insert(
            _id,
            GLOBALS.room_obl)))
      GLOBALS._atm = set(
          room,
          chtype(
            vector(
              _atm,
              GLOBALS.null_desc,
              GLOBALS.null_desc,
              null,
              null,
              GLOBALS.null_exit,
              (),
              null,
              0,
              0,
              0,
              t),
            room))
      GLOBALS.rooms = (_room
          _X
          GLOBALS.rooms)
      _room)))

define(
  find_obj,
  (id
    "AUX"
    obj
    atm),
  #decl
    ((id)
      or(
        atom,
        string)
      (obj)
      object
      (atm)
      or(
        atom,
        false)
      (value)
      object),
  cond(
    (type_Q(
        _id,
        atom)
      set(
        id,
        spname(
          _id)))),
  cond(
    (and(
        set(
          atm,
          lookup(
            _id,
            GLOBALS.object_obl)),
        gassigned_Q(
          _atm))
      GLOBALS._atm),
    (or(
        _atm,
        set(
          atm,
          insert(
            _id,
            GLOBALS.object_obl)))
      GLOBALS._atm = set(
          obj,
          chtype(
            [_atm
              GLOBALS.null_syn
              GLOBALS.null_desc
              GLOBALS.null_desc
              null
              null
              ()
              null
              0
              null
              0
              0
              0
              null
              null
              5
              0
              GLOBALS.null_syn
              null
              null],
            object))
      GLOBALS.objects = (_obj
          _X
          GLOBALS.objects)
      _obj)))

define(
  function_print,
  (frob),
  #decl
    ((frob)
      or(
        atom,
        offset,
        applicable,
        false)),
  cond(
    (not(
        _frob)
      princ(
        "<>")),
    (type_Q(
        _frob,
        rsubr,
        rsubr_entry)
      prin1(
        2(
          _frob))),
    (type_Q(
        _frob,
        atom)
      prin1(
        _frob)),
    (type_Q(
        _frob,
        offset)
      princ(
        "#OFFSET")
      prin1(
        get_atom(
          _frob))),
    (princ(
        "#FUNCTION")
      prin1(
        get_atom(
          _frob)))))