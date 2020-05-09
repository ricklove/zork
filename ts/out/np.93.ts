setg(
  words,
  or(
    get(
      words,
      oblist),
    moblist(
      words,
      23)))

setg(
  object_obl,
  or(
    get(
      objects,
      oblist),
    moblist(
      objects,
      23)))

setg(
  actions,
  moblist(
    actions,
    17))

setg(
  orphans,
  [<>
    <>
    <>
    <>
    <>])

cond(
  (or(
      lookup(
        "COMPILE",
        root(
          )),
      gassigned_Q(
        group_glue))),
  (setg(
      prepvec,
      [chtype(
          [find_prep(
              "WITH")
            find_obj(
              "#####")],
          phrase)
        chtype(
          [find_prep(
              "WITH")
            find_obj(
              "#####")],
          phrase)])
    setg(
      prep2vec,
      [chtype(
          [find_prep(
              "WITH")
            find_obj(
              "#####")],
          phrase)
        chtype(
          [find_prep(
              "WITH")
            find_obj(
              "#####")],
          phrase)])))

define(
  sparse,
  sparout,
  (sv
    vb
    "AUX"
    (words
      ,words)
    (objob
      ,object_obl)
    (pv
      ,prsvec)
    (pvr
      put(
        put(
          rest(
            _pv),
          1,
          <>),
        2,
        <>))
    (actions
      ,actions)
    (dirs
      ,directions)
    (orph
      ,orphans)
    (orfl
      oflag(
        _orph))
    (prv
      ,prepvec)
    (here
      ,here)
    (action
      <>)
    (prep
      <>)
    nprep
    (adj
      <>)
    atm
    aval
    obj
    pprep
    lobj
    val),
  decl(
    (sv),
    vector(
        [rest
          string]),
    (vb
        orfl),
    or(
        atom,
        false),
    (actions
        words
        objob
        dirs),
    oblist,
    (pv
        orph
        prv
        pvr),
    vector,
    (atm),
    or(
        atom,
        false),
    (here),
    room,
    (action),
    or(
        false,
        action),
    (nprep
        prep),
    or(
        false,
        prep),
    (adj),
    or(
        false,
        adjective),
    (aval),
    any,
    (lobj),
    any,
    (obj),
    or(
        false,
        object),
    (pprep),
    phrase),
  set(
    val,
    mapf(
      <>,
      function(
        (x),
        decl(
          (x),
          string),
        cond(
          (empty_Q(
              _x)
            mapleave(
              t)),
          (and(
              not(
                _action),
              set(
                atm,
                lookup(
                  _x,
                  _actions)))
            set(
              action,
              ,_atm)),
          (and(
              not(
                _action),
              set(
                atm,
                lookup(
                  _x,
                  _dirs)))
            put(
              _pv,
              1,
              ,walk_X_words)
            put(
              _pv,
              2,
              ,_atm)
            return(
              win,
              _sparout)),
          (and(
              set(
                atm,
                lookup(
                  _x,
                  _words)),
              cond(
                (type_Q(
                    set(
                      aval,
                      ,_atm),
                    prep)
                  cond(
                    (_prep
                      or(
                        _vb,
                        tell(
                          "Double preposition?",
                          0))
                      mapleave(
                        <>)),
                    (set(
                        prep,
                        _aval)))),
                (type_Q(
                    _aval,
                    adjective)
                  set(
                    adj,
                    _aval)
                  not(
                    and(
                      _orfl,
                      set(
                        atm,
                        oname(
                          _orph)),
                      set(
                        x,
                        spname(
                          _atm))))),
                (t)))),
          (set(
              atm,
              lookup(
                _x,
                _objob))
            cond(
              (set(
                  obj,
                  get_object(
                    _atm,
                    _adj))
                and(
                  empty_Q(
                    _pvr),
                  or(
                    _vb,
                    tell(
                      "Too many objects specified?",
                      0)),
                  mapleave(
                    <>))
                put(
                  _pvr,
                  1,
                  cond(
                    (_prep
                      set(
                        pprep,
                        1(
                          _prv))
                      set(
                        prv,
                        rest(
                          _prv))
                      put(
                        _pprep,
                        1,
                        _prep)
                      set(
                        prep,
                        <>)
                      put(
                        _pprep,
                        2,
                        _obj)),
                    (_obj)))
                set(
                  pvr,
                  rest(
                    _pvr))),
              (t
                cond(
                  (empty_Q(
                      _obj)
                    or(
                      _vb,
                      cond(
                        (lit_Q(
                            _here)
                          tell(
                            "I can't see a",
                            0)
                          cond(
                            (_adj
                              tell(
                                "",
                                0,
                                prstr(
                                  chtype(
                                    _adj,
                                    atom)))))
                          tell(
                            "",
                            0,
                            prstr(
                              _atm),
                            "here.")),
                        (tell(
                            "It is too dark in here to see.",
                            0))))),
                  (_EQ_Q(
                      _obj,
                      ,nefals2)
                    or(
                      _vb,
                      tell(
                        "I can't reach that from inside the",
                        0,
                        odesc2(
                          avehicle(
                            ,winner)),
                        "."))),
                  (or(
                      _vb,
                      tell(
                        "Which",
                        0,
                        prstr(
                          _atm),
                        "?"))
                    orphan(
                      t,
                      or(
                        _action,
                        and(
                          _orfl,
                          overb(
                            _orph))),
                      2(
                        _pv),
                      _prep,
                      _atm)))
                mapleave(
                  <>)))
            set(
              adj,
              <>)
            t),
          (or(
              _vb,
              tell(
                "I don't know the word",
                0,
                _x))
            mapleave(
              <>)))),
      _sv)),
  cond(
    (_val
      cond(
        (and(
            not(
              _action),
            not(
              set(
                action,
                and(
                  _orfl,
                  overb(
                    _orph)))))
          or(
            _vb,
            cond(
              (type_Q(
                  2(
                    _pv),
                  object)
                tell(
                  "What should I do with the",
                  0,
                  odesc2(
                    2(
                      _pv)),
                  "?")),
              (tell(
                  "Huh?",
                  0))))
          orphan(
            t,
            <>,
            2(
              _pv))
          <>),
        (and(
            put(
              _pv,
              1,
              _action),
            _adj)
          or(
            _vb,
            tell(
              "Dangling adjective?",
              0))
          <>),
        (and(
            _orfl,
            set(
              nprep,
              oprep(
                _orph)),
            set(
              obj,
              2(
                _pv)),
            put(
              set(
                pprep,
                1(
                  _prv)),
              1,
              _nprep),
            put(
              _pprep,
              2,
              _obj),
            cond(
              (set(
                  obj,
                  oslot1(
                    _orph))
                put(
                  _pv,
                  2,
                  _obj)
                put(
                  _pv,
                  3,
                  _pprep)),
              (put(
                  _pv,
                  2,
                  _pprep))),
            <>)),
        (_prep
          and(
            type_Q(
              set(
                lobj,
                1(
                  back(
                    _pvr))),
              object),
            top(
              put(
                back(
                  _pvr),
                1,
                put(
                  put(
                    1(
                      _prv),
                    1,
                    _prep),
                  2,
                  _lobj))))),
        (_pv)))))

define(
  sp,
  (str),
  parse(
    lex(
      _str),
    <>))

define(
  orphan,
  ("OPTIONAL"
    (flag
      <>)
    (action
      <>)
    (slot1
      <>)
    (prep
      <>)
    (name
      <>)),
  decl(
    (flag),
    or(
        atom,
        false),
    (name),
    or(
        atom,
        false)),
  put(
    put(
      put(
        put(
          put(
            ,orphans,
            ,oname,
            _name),
          ,oprep,
          _prep),
        ,oslot1,
        _slot1),
      ,overb,
      _action),
    ,oflag,
    _flag))

define(
  syn_match,
  (pv
    "AUX"
    (action
      1(
        _pv))
    (objs
      rest(
        _pv))
    (o1
      1(
        _objs))
    (o2
      2(
        _objs))
    (dforce
      <>)
    (drive
      <>)
    (gwim
      <>)
    synn),
  decl(
    (action),
    action,
    (pv
        objs),
    vector,
    (drive
        dforce),
    or(
        false,
        syntax),
    (o1
        o2),
    or(
        false,
        object,
        phrase),
    (synn),
    varg,
    (gwim),
    or(
        false,
        object)),
  cond(
    (mapf(
        <>,
        function(
          (syn),
          decl(
            (syn),
            syntax),
          cond(
            (syn_equal(
                syn1(
                  _syn),
                _o1)
              cond(
                (syn_equal(
                    syn2(
                      _syn),
                    _o2)
                  and(
                    sflip(
                      _syn),
                    put(
                      _objs,
                      1,
                      _o2),
                    put(
                      _objs,
                      2,
                      _o1))
                  mapleave(
                    take_it_or_leave_it(
                      _syn,
                      put(
                        _pv,
                        1,
                        sfcn(
                          _syn))))),
                (not(
                    _o2)
                  cond(
                    (sdriver(
                        _syn)
                      set(
                        dforce,
                        _syn)),
                    (set(
                        drive,
                        _syn)))
                  <>))),
            (not(
                _o1)
              cond(
                (sdriver(
                    _syn)
                  set(
                    dforce,
                    _syn)),
                (set(
                    drive,
                    _syn)))
              <>))),
        vdecl(
          _action))),
    (set(
        drive,
        or(
          _dforce,
          _drive))
      cond(
        (and(
            set(
              synn,
              syn1(
                _drive)),
            not(
              _o1),
            not(
              0_Q(
                vbit(
                  _synn))),
            not(
              orfeo(
                _synn,
                _objs)),
            not(
              set(
                o1,
                set(
                  gwim,
                  gwim_slot(
                    1,
                    _synn,
                    _action,
                    _objs)))))
          orphan(
            t,
            _action,
            <>,
            vprep(
              _synn))
          ortell(
            _synn,
            _action,
            _gwim)),
        (and(
            set(
              synn,
              syn2(
                _drive)),
            not(
              _o2),
            not(
              0_Q(
                vbit(
                  _synn))),
            not(
              gwim_slot(
                2,
                _synn,
                _action,
                _objs)))
          orphan(
            t,
            _action,
            _o1,
            vprep(
              _synn))
          ortell(
            _synn,
            _action,
            _gwim)),
        (take_it_or_leave_it(
            _drive,
            put(
              _pv,
              1,
              sfcn(
                _drive)))))),
    (tell(
        "I can't make sense out of that.",
        0)
      <>)))

define(
  take_it_or_leave_it,
  (syn
    pv
    "AUX"
    (pv1
      2(
        _pv))
    (pv2
      3(
        _pv))
    obj
    varg),
  decl(
    (syn),
    syntax,
    (pv),
    vector,
    (pv1
        pv2),
    or(
        false,
        object,
        phrase),
    (obj),
    or(
        false,
        object),
    (varg),
    varg),
  put(
    _pv,
    2,
    set(
      obj,
      cond(
        (type_Q(
            _pv1,
            object)
          _pv1),
        (type_Q(
            _pv1,
            phrase)
          2(
            _pv1))))),
  cond(
    (vtrnn(
        set(
          varg,
          syn1(
            _syn)),
        ,vrbit)
      take_it(
        _obj,
        _pv,
        _varg))),
  put(
    _pv,
    3,
    set(
      obj,
      cond(
        (type_Q(
            _pv2,
            object)
          _pv2),
        (type_Q(
            _pv2,
            phrase)
          2(
            _pv2))))),
  cond(
    (vtrnn(
        set(
          varg,
          syn2(
            _syn)),
        ,vrbit)
      take_it(
        _obj,
        _pv,
        _varg))),
  t)

define(
  take_it,
  (obj
    vec
    vrb
    "AUX"
    (sav1
      1(
        _vec))
    (sav2
      2(
        _vec))),
  decl(
    (obj),
    object,
    (vec),
    vector,
    (sav1),
    verb,
    (sav2),
    or(
        false,
        object),
    (vrb),
    varg),
  cond(
    (and(
        search_list(
          oid(
            _obj),
          robjs(
            ,here),
          <>),
        or(
          can_take_Q(
            _obj),
          not(
            vtrnn(
              _vrb,
              ,vtbit))))
      put(
        _vec,
        1,
        ,take_X_words)
      put(
        _vec,
        2,
        _obj)
      take(
        t)
      put(
        _vec,
        1,
        _sav1)
      put(
        _vec,
        2,
        _sav2))))

define(
  orfeo,
  (syn
    objs
    "AUX"
    (orph
      ,orphans)
    (orfl
      oflag(
        _orph))
    slot1),
  decl(
    (syn),
    varg,
    (objs
        orph),
    vector,
    (orfl),
    or(
        atom,
        false),
    (slot1),
    or(
        false,
        phrase,
        object)),
  cond(
    (not(
        _orfl)
      <>),
    (set(
        slot1,
        oslot1(
          _orph))
      and(
        syn_equal(
          _syn,
          _slot1),
        put(
          _objs,
          1,
          _slot1)))))

define(
  ortell,
  (varg
    action
    gwim
    "AUX"
    (prep
      vprep(
        _varg))
    sp),
  decl(
    (varg),
    varg,
    (action),
    action,
    (prep),
    or(
        false,
        prep),
    (sp),
    string,
    (gwim),
    or(
        false,
        object)),
  cond(
    (_prep
      and(
        _gwim,
        tell(
          vstr(
            _action),
          0,
          ""),
        tell(
          odesc2(
            _gwim),
          0,
          ""))
      tell(
        prstr(
          chtype(
            _prep,
            atom)),
        0,
        "what?")),
    (tell(
        vstr(
          _action),
        0,
        "what?"))),
  <>)

define(
  prstr,
  (atm
    "AUX"
    sp),
  decl(
    (atm),
    atom,
    (sp),
    string),
  foostr(
    set(
      sp,
      spname(
        _atm)),
    back(
      ,scrstr,
      length(
        _sp)),
    <>))

define(
  foostr,
  (nam
    str
    "OPTIONAL"
    (1st
      t)),
  decl(
    (str
        nam),
    string,
    (1st),
    or(
        atom,
        false)),
  mapr(
    <>,
    function(
      (x
        y),
      decl(
        (x
            y),
        string),
      cond(
        (and(
            _1st,
            _EQ_Q(
              _x,
              _nam))
          put(
            _y,
            1,
            1(
              _x))),
        (put(
            _y,
            1,
            chtype(
              _(
                32,
                ascii(
                  1(
                    _x))),
              character))))),
    _nam,
    _str),
  _str)

define(
  gwim_slot,
  (fx
    varg
    action
    objs
    "AUX"
    obj),
  decl(
    (fx),
    fix,
    (varg),
    varg,
    (action),
    action,
    (objs),
    vector,
    (obj),
    or(
        false,
        object)),
  cond(
    (set(
        obj,
        gwim(
          vbit(
            _varg),
          _varg,
          _action))
      put(
        _objs,
        _fx,
        _obj)
      _obj)))

"GET WHAT I MEAN - GWIM\n TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY"

define(
  gwim,
  (bit
    fword
    action
    "AUX"
    (aobj
      vtrnn(
        _fword,
        ,vabit))
    (ntake
      vtrnn(
        _fword,
        ,vtbit))
    (robj
      vtrnn(
        _fword,
        ,vrbit))
    (obj
      <>)
    nobj
    (pv
      ,prsvec)
    savobj
    (av
      avehicle(
        ,winner))
    sf),
  decl(
    (bit),
    fix,
    (ntake
        robj
        aobj),
    or(
        atom,
        false),
    (obj
        nobj
        av),
    or(
        object,
        false),
    (pv),
    vector,
    (savobj),
    or(
        false,
        object,
        phrase),
    (fword),
    varg,
    (action),
    action),
  and(
    _aobj,
    set(
      obj,
      fwim(
        _bit,
        aobjs(
          ,winner),
        _ntake))),
  cond(
    (_robj
      cond(
        (and(
            set(
              nobj,
              fwim(
                _bit,
                robjs(
                  ,here),
                _ntake)),
            or(
              not(
                _av),
              _EQ_Q(
                _av,
                _nobj),
              memq(
                _nobj,
                ocontents(
                  _av)),
              trnn(
                _nobj,
                ,findmebit)))
          cond(
            (and(
                or(
                  set(
                    savobj,
                    2(
                      _pv)),
                  t),
                not(
                  _obj),
                or(
                  set(
                    sf,
                    1(
                      _pv)),
                  t),
                put(
                  _pv,
                  1,
                  ,take_X_words),
                put(
                  _pv,
                  2,
                  _nobj),
                or(
                  _EQ_Q(
                    _action,
                    1(
                      _pv)),
                  _ntake,
                  take(
                    )),
                put(
                  _pv,
                  2,
                  _savobj),
                put(
                  _pv,
                  1,
                  _sf),
                _nobj)),
            (put(
                _pv,
                2,
                _savobj)
              <>))),
        (or(
            _nobj,
            not(
              empty_Q(
                _nobj)))
          ,nefals),
        (_obj))),
    (_obj)))

// [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]

define(
  make_action,
  ("TUPLE"
    specs
    "AUX"
    vv
    sum
    (prep
      <>)
    atm),
  chtype(
    mapf(
      ,uvector,
      function(
        (sp
          "AUX"
          (syn
            ivector(
              5,
              <>))
          (whr
            1)),
        decl(
          (sp),
          vector,
          (syn),
          vector,
          (whr),
          fix),
        mapf(
          <>,
          function(
            (itm),
            cond(
              (type_Q(
                  _itm,
                  string)
                set(
                  prep,
                  find_prep(
                    _itm))),
              (and(
                  _EQ_Q(
                    _itm,
                    obj),
                  set(
                    itm,
                    () => (_1)),
                  <>)),
              (type_Q(
                  _itm,
                  list)
                set(
                  vv,
                  ivector(
                    3))
                put(
                  _vv,
                  1,
                  1(
                    _itm))
                put(
                  _vv,
                  2,
                  _prep)
                set(
                  sum,
                  0)
                set(
                  prep,
                  <>)
                and(
                  memq(
                    aobjs,
                    _itm),
                  set(
                    sum,
                    _(
                      _sum,
                      ,vabit)))
                and(
                  memq(
                    robjs,
                    _itm),
                  set(
                    sum,
                    _(
                      _sum,
                      ,vrbit)))
                and(
                  memq(
                    no_take,
                    _itm),
                  set(
                    sum,
                    _(
                      _sum,
                      ,vtbit)))
                and(
                  memq(
                    _,
                    _itm),
                  set(
                    sum,
                    _(
                      _sum,
                      ,vxbit)))
                put(
                  _vv,
                  3,
                  _sum)
                put(
                  _syn,
                  _whr,
                  chtype(
                    _vv,
                    varg))
                set(
                  whr,
                  _(
                    _whr,
                    1))),
              (type_Q(
                  _itm,
                  vector)
                cond(
                  (gassigned_Q(
                      set(
                        atm,
                        add_word(
                          1(
                            _itm))))
                    put(
                      _syn,
                      ,sfcn,
                      ,_atm)),
                  (put(
                      _syn,
                      ,sfcn,
                      setg(
                        set(
                          atm,
                          add_word(
                            1(
                              _itm))),
                        chtype(
                          [_atm
                            2(
                              _itm)],
                          verb)))))),
              (_EQ_Q(
                  _itm,
                  driver)
                put(
                  _syn,
                  ,sdriver,
                  t)),
              (_EQ_Q(
                  _itm,
                  flip)
                put(
                  _syn,
                  ,sflip,
                  t)))),
          _sp),
        or(
          syn1(
            _syn),
          put(
            _syn,
            ,syn1,
            ,evarg)),
        or(
          syn2(
            _syn),
          put(
            _syn,
            ,syn2,
            ,evarg)),
        chtype(
          _syn,
          syntax)),
      _specs),
    vspec))

setg(
  evarg,
  chtype(
    [0
      <>
      0],
    varg))

define(
  syn_equal,
  (varg
    pobj
    "AUX"
    (vbit
      vbit(
        _varg))),
  decl(
    (varg),
    varg,
    (pobj),
    or(
        false,
        phrase,
        object),
    (vbit),
    fix),
  cond(
    (type_Q(
        _pobj,
        phrase)
      and(
        _EQ_Q(
          vprep(
            _varg),
          1(
            _pobj)),
        or(
          not(
            vtrnn(
              _varg,
              ,vxbit)),
          trnn(
            2(
              _pobj),
            _vbit)))),
    (type_Q(
        _pobj,
        object)
      and(
        not(
          vprep(
            _varg)),
        or(
          not(
            vtrnn(
              _varg,
              ,vxbit)),
          trnn(
            _pobj,
            _vbit)))),
    (and(
        not(
          _pobj),
        0_Q(
          _vbit)))))

setg(
  directions,
  moblist(
    directions))

define(
  eparse,
  (pv
    vb
    "AUX"
    val),
  decl(
    (val),
    any,
    (pv),
    vector(
        [rest
          string]),
    (vb),
    or(
        atom,
        false)),
  cond(
    (set(
        val,
        sparse(
          _pv,
          _vb))
      cond(
        (or(
            _EQ_Q(
              _val,
              win),
            syn_match(
              _val))
          orphan(
            <>)),
        (or(
            _vb,
            tell(
              ""))
          <>))),
    (or(
        _vb,
        tell(
          ""))
      <>)))

setg(
  scrstr,
  rest(
    istring(
      5),
    5))

setg(
  ssv,
  ivector(
    10,
    <>))

"GET-OBJECT:  TAKES ATOM (FROM OBJECTS OBLIST), VERBOSITY FLAG.  GROVELS\nOVER: ,STARS; ,HERE; ,WINNER LOOKING FOR OBJECT (LOOKS DOWN TO ONE LEVEL\nOF CONTAINMENT).  RETURNS <> IF NOT FOUND OR FOUND MORE THAN ONE, THE\nOBJECT OTHERWISE."

define(
  get_object,
  get_obj,
  (objnam
    adj
    "AUX"
    obj
    (oobj
      <>)
    (here
      ,here)
    (av
      avehicle(
        ,winner))
    (chomp
      <>)),
  decl(
    (oobj
        obj
        av),
    or(
        object,
        false),
    (objnam),
    atom,
    (here),
    room,
    (adj),
    or(
        adjective,
        false),
    (chomp),
    or(
        atom,
        false),
    (objl),
    or(
        false,
        list(
          [rest
            object]))),
  cond(
    (set(
        obj,
        search_list(
          _objnam,
          ,stars,
          _adj))
      set(
        oobj,
        _obj)),
    (not(
        empty_Q(
          _obj))
      return(
        ,nefals,
        _get_obj))),
  cond(
    (and(
        lit_Q(
          _here),
        set(
          obj,
          search_list(
            _objnam,
            robjs(
              ,here),
            _adj)))
      cond(
        (and(
            _av,
            n_EQ_Q(
              _obj,
              _av),
            not(
              memq(
                _obj,
                ocontents(
                  _av))),
            not(
              trnn(
                _obj,
                ,findmebit)))
          set(
            chomp,
            t)),
        (_oobj
          return(
            ,nefals,
            _get_obj)),
        (set(
            oobj,
            _obj)))),
    (and(
        not(
          _obj),
        not(
          empty_Q(
            _obj)))
      return(
        ,nefals,
        _get_obj))),
  cond(
    (_av
      cond(
        (set(
            obj,
            search_list(
              _objnam,
              ocontents(
                _av),
              _adj))
          set(
            chomp,
            <>)
          set(
            oobj,
            _obj)),
        (not(
            empty_Q(
              _obj))
          return(
            ,nefals,
            _get_obj))))),
  cond(
    (set(
        obj,
        search_list(
          _objnam,
          aobjs(
            ,winner),
          _adj))
      cond(
        (_oobj
          ,nefals),
        (_obj))),
    (not(
        empty_Q(
          _obj))
      ,nefals),
    (_chomp
      ,nefals2),
    (_oobj)))

"SEARCH-LIST:  TAKES OBJECT NAME, LIST OF OBJECTS, AND VERBOSITY.\nIF FINDS ONE FROB UNDER THAT NAME ON LIST, RETURNS IT.  SEARCH IS TO\nONE LEVEL OF CONTAINMENT."

setg(
  nefals,
  false(
    1))

setg(
  nefals2,
  false(
    2))

define(
  search_list,
  sl,
  (objnam
    slist
    adj
    "OPTIONAL"
    (first_Q
      t)
    "AUX"
    (oobj
      <>)
    (nefals
      ,nefals)
    nobj),
  decl(
    (objnam),
    atom,
    (slist),
    list(
        [rest
          object]),
    (oobj
        nobj),
    or(
        false,
        object),
    (adj),
    or(
        false,
        adjective),
    (first_Q),
    or(
        atom,
        false),
    (nefals),
    false),
  mapf(
    <>,
    function(
      (obj),
      decl(
        (obj),
        object),
      cond(
        (this_it_Q(
            _objnam,
            _obj,
            _adj)
          cond(
            (_oobj
              return(
                _nefals,
                _sl)),
            (set(
                oobj,
                _obj))))),
      cond(
        (and(
            ovis_Q(
              _obj),
            or(
              oopen_Q(
                _obj),
              transparent_Q(
                _obj)),
            or(
              _first_Q,
              trnn(
                _obj,
                ,searchbit)))
          cond(
            (set(
                nobj,
                search_list(
                  _objnam,
                  ocontents(
                    _obj),
                  _adj,
                  <>))
              cond(
                (_oobj
                  return(
                    _nefals,
                    _sl)),
                (set(
                    oobj,
                    _nobj)))),
            (_EQ_Q(
                _nobj,
                _nefals)
              return(
                _nefals,
                _sl)))))),
    _slist),
  _oobj)

"FWIM:  TAKE LIST OF FROBS, FIND ONE THAT CAN BE MANIPULATED (VISIBLE\nAND TAKEABLE, OR VISIBLE AND IN SOMETHING THAT'S VISIBLE AND OPEN)"

define(
  fwim,
  dwim,
  (bit
    objs
    no_take
    "AUX"
    (nobj
      <>)),
  decl(
    (no_take),
    or(
        atom,
        false),
    (bit),
    fix,
    (objs),
    list(
        [rest
          object]),
    (nobj),
    or(
        false,
        object)),
  mapf(
    <>,
    function(
      (x),
      decl(
        (x),
        object),
      cond(
        (and(
            ovis_Q(
              _x),
            or(
              _no_take,
              can_take_Q(
                _x)),
            trnn(
              _x,
              _bit))
          cond(
            (_nobj
              return(
                ,nefals,
                _dwim)))
          set(
            nobj,
            _x))),
      cond(
        (and(
            ovis_Q(
              _x),
            oopen_Q(
              _x))
          mapf(
            <>,
            function(
              (x),
              decl(
                (x),
                object),
              cond(
                (and(
                    ovis_Q(
                      _x),
                    trnn(
                      _x,
                      _bit))
                  cond(
                    (_nobj
                      return(
                        ,nefals,
                        _dwim)),
                    (set(
                        nobj,
                        _x)))))),
            ocontents(
              _x))))),
    _objs),
  _nobj)