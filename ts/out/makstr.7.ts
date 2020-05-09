define(
  cevent,
  /*(*/ [tick,
    app,
    flg,
    name,
    "AUX",
    /*(*/ [obl,
      get(
        initial,
        oblist)] /*)*/,
    atm] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [tick] /*)*/,
      fix,
      /*(*/ [app] /*)*/,
      or(
        applicable,
        offset),
      /*(*/ [flg] /*)*/,
      or(
        atom,
        false),
      /*(*/ [name] /*)*/,
      or(
        atom,
        string),
      /*(*/ [atm] /*)*/,
      or(
        atom,
        false)] /*)*/] /*2*/,
  cond(
    /*(*/ [type_Q(
        LOCALS.name,
        string),
      cond(
        /*(*/ [LOCALS.atm = lookup(
              LOCALS.name,
              LOCALS.obl)] /*)*/,
        /*(*/ [t,
          LOCALS.atm = insert(
              LOCALS.name,
              LOCALS.obl)] /*)*/)] /*)*/,
    /*(*/ [LOCALS.atm = LOCALS.name] /*)*/),
  setg(
    LOCALS.atm,
    chtype(
      /*[*/ [LOCALS.tick,
        LOCALS.app,
        LOCALS.flg,
        LOCALS.atm] /*]*/,
      cevent)))

define(
  cons_obj,
  /*(*/ ["TUPLE",
    objs,
    "AUX",
    /*(*/ [winner,
      GLOBALS.winner] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [objs] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [winner] /*)*/,
      adv] /*)*/] /*2*/,
  mapf(
    null,
    function(
      /*(*/ [x,
        "AUX",
        /*(*/ [y,
          find_obj(
            LOCALS.x)] /*)*/] /*)*/,
      /*#*/ [decl,
        /*(*/ [/*(*/ [y] /*)*/,
          object] /*)*/] /*2*/,
      or(
        memq(
          LOCALS.y,
          aobjs(
            LOCALS.winner)),
        take_object(
          find_obj(
            LOCALS.x),
          LOCALS.winner))),
    LOCALS.objs))

define(
  cexit,
  /*(*/ [flid,
    rmid,
    "OPTIONAL",
    /*(*/ [str,
      null] /*)*/,
    /*(*/ [flag,
      null] /*)*/,
    /*(*/ [funct,
      null] /*)*/,
    "AUX",
    /*(*/ [fval,
      null] /*)*/,
    atm] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [str] /*)*/,
      or(
        false,
        string),
      /*(*/ [flid,
        rmid] /*)*/,
      or(
        atom,
        string),
      /*(*/ [atm,
        funct] /*)*/,
      or(
        atom,
        false),
      /*(*/ [fval] /*)*/,
      or(
        applicable,
        false),
      /*(*/ [flag] /*)*/,
      or(
        atom,
        false)] /*)*/] /*2*/,
  cond(
    /*(*/ [type_Q(
        LOCALS.flid,
        atom),
      LOCALS.flid = spname(
          LOCALS.flid)] /*)*/),
  LOCALS.atm = or(
      lookup(
        LOCALS.flid,
        get(
          flag,
          oblist)),
      insert(
        LOCALS.flid,
        get(
          flag,
          oblist))),
  setg(
    LOCALS.atm,
    LOCALS.flag),
  chtype(
    vector(
      LOCALS.atm,
      find_room(
        LOCALS.rmid),
      LOCALS.str,
      LOCALS.funct),
    cexit))

define(
  exit,
  /*(*/ ["TUPLE",
    pairs,
    "AUX",
    /*(*/ [dobl,
      GLOBALS.directions] /*)*/,
    /*(*/ [frob,
      ivector(
        length(
          LOCALS.pairs))] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [pairs] /*)*/,
      tuple(
        /*[*/ [rest,
          string,
          or(
            nexit,
            cexit,
            string,
            atom)] /*]*/),
      /*(*/ [dir] /*)*/,
      list(
        /*[*/ [rest,
          atom] /*]*/),
      /*(*/ [frob] /*)*/,
      vector,
      /*(*/ [dobl] /*)*/,
      oblist] /*)*/] /*2*/,
  repeat(
    /*(*/ [atm,
      rm,
      /*(*/ [f,
        LOCALS.frob] /*)*/] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [atm] /*)*/,
        or(
          atom,
          false),
        /*(*/ [rm] /*)*/,
        or(
          room,
          false),
        /*(*/ [f] /*)*/,
        vector] /*)*/] /*2*/,
    cond(
      /*(*/ [or(
          and(
            LOCALS.atm = lookup(
                1(
                  LOCALS.pairs),
                LOCALS.dobl),
            gassigned_Q(
              LOCALS.atm),
            type_Q(
              /*,*/ [LOCALS.atm] /*1*/,
              direction))),
        put(
          LOCALS.f,
          1,
          LOCALS.atm),
        cond(
          /*(*/ [type_Q(
              2(
                LOCALS.pairs),
              string),
            put(
              LOCALS.f,
              2,
              find_room(
                2(
                  LOCALS.pairs)))] /*)*/,
          /*(*/ [put(
              LOCALS.f,
              2,
              2(
                LOCALS.pairs))] /*)*/),
        LOCALS.f = rest(
            LOCALS.f,
            2)] /*)*/,
      /*(*/ [t,
        put(
          LOCALS.pairs,
          1,
          error(
            illegal_direction,
            1(
              LOCALS.pairs)))] /*)*/),
    cond(
      /*(*/ [empty_Q(
          LOCALS.pairs = rest(
              LOCALS.pairs,
              2)),
        return(
          )] /*)*/)),
  chtype(
    LOCALS.frob,
    exit))

define(
  room,
  /*(*/ [id,
    d1,
    d2,
    lit_Q,
    ex,
    "OPTIONAL",
    /*(*/ [objs,
      /*(*/ [] /*)*/] /*)*/,
    /*(*/ [app,
      null] /*)*/,
    /*(*/ [val,
      0] /*)*/,
    /*(*/ [bit,
      GLOBALS.rlandbit] /*)*/,
    "AUX",
    /*(*/ [rm,
      find_room(
        LOCALS.id)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [id] /*)*/,
      or(
        string,
        atom),
      /*(*/ [d1,
        d2] /*)*/,
      string,
      /*(*/ [lit_Q] /*)*/,
      or(
        atom,
        form,
        false),
      /*(*/ [ex] /*)*/,
      exit,
      /*(*/ [app] /*)*/,
      or(
        form,
        false,
        atom),
      /*(*/ [val,
        bit] /*)*/,
      fix,
      /*(*/ [rm] /*)*/,
      room] /*)*/] /*2*/,
  GLOBALS.score_max = _(
      GLOBALS.score_max,
      LOCALS.val),
  put(
    LOCALS.rm,
    GLOBALS.rbits,
    LOCALS.bit),
  put(
    LOCALS.rm,
    GLOBALS.rval,
    LOCALS.val),
  put(
    LOCALS.rm,
    GLOBALS.robjs,
    LOCALS.objs),
  put(
    LOCALS.rm,
    GLOBALS.rdesc1,
    LOCALS.d1),
  put(
    LOCALS.rm,
    GLOBALS.rdesc2,
    LOCALS.d2),
  put(
    LOCALS.rm,
    GLOBALS.rexits,
    LOCALS.ex),
  put(
    LOCALS.rm,
    GLOBALS.raction,
    cond(
      /*(*/ [type_Q(
          LOCALS.app,
          false,
          form),
        null] /*)*/,
      /*(*/ [LOCALS.app] /*)*/)),
  put(
    LOCALS.rm,
    GLOBALS.rlight_Q,
    cond(
      /*(*/ [type_Q(
          LOCALS.lit_Q,
          form),
        null] /*)*/,
      /*(*/ [t,
        LOCALS.lit_Q] /*)*/)),
  mapf(
    null,
    function(
      /*(*/ [x] /*)*/,
      /*#*/ [decl,
        /*(*/ [/*(*/ [x] /*)*/,
          object] /*)*/] /*2*/,
      put(
        LOCALS.x,
        GLOBALS.oroom,
        LOCALS.rm)),
    robjs(
      LOCALS.rm)),
  LOCALS.rm)

define(
  sobject,
  /*(*/ [id,
    str,
    "TUPLE",
    tup] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [id] /*)*/,
      string,
      /*(*/ [tup] /*)*/,
      tuple] /*)*/] /*2*/,
  object(
    LOCALS.id,
    "",
    LOCALS.str,
    /*%*/ [null] /*1*/,
    null,
    /*(*/ [] /*)*/,
    null,
    _(
      _X,
      LOCALS.tup)))

define(
  aobject,
  /*(*/ [id,
    str,
    app,
    "TUPLE",
    tup] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [id] /*)*/,
      string,
      /*(*/ [tup] /*)*/,
      tuple,
      /*(*/ [app] /*)*/,
      atom] /*)*/] /*2*/,
  object(
    LOCALS.id,
    "",
    LOCALS.str,
    /*%*/ [null] /*1*/,
    LOCALS.app,
    /*(*/ [] /*)*/,
    null,
    _(
      _X,
      LOCALS.tup)))

define(
  object,
  /*(*/ [id,
    desc1,
    desc2,
    desco,
    app,
    conts,
    can,
    flags,
    "OPTIONAL",
    /*(*/ [light_Q,
      0] /*)*/,
    /*(*/ [s1,
      0] /*)*/,
    /*(*/ [s2,
      0] /*)*/,
    /*(*/ [size,
      5] /*)*/,
    /*(*/ [capac,
      0] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [id] /*)*/,
      or(
        atom,
        string),
      /*(*/ [desc1,
        desc2] /*)*/,
      string,
      /*(*/ [app] /*)*/,
      or(
        false,
        form,
        atom),
      /*(*/ [conts] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [can] /*)*/,
      or(
        false,
        object),
      /*(*/ [flags] /*)*/,
      primtype(
        word),
      /*(*/ [size,
        capac] /*)*/,
      fix,
      /*(*/ [light_Q,
        s1,
        s2] /*)*/,
      fix,
      /*(*/ [desco] /*)*/,
      or(
        string,
        false)] /*)*/] /*2*/,
  GLOBALS.score_max = _(
      GLOBALS.score_max,
      LOCALS.s1,
      LOCALS.s2),
  or(
    0_Q(
      LOCALS.light_Q),
    LOCALS.flags = _(
        LOCALS.flags,
        GLOBALS.lightbit)),
  put(
    put(
      put(
        put(
          put(
            put(
              put(
                put(
                  put(
                    put(
                      put(
                        put(
                          find_obj(
                            LOCALS.id),
                          GLOBALS.odesc1,
                          LOCALS.desc1),
                        GLOBALS.ocapac,
                        LOCALS.capac),
                      GLOBALS.osize,
                      LOCALS.size),
                    GLOBALS.odesco,
                    LOCALS.desco),
                  GLOBALS.olight_Q,
                  LOCALS.light_Q),
                GLOBALS.oflags,
                LOCALS.flags),
              GLOBALS.ofval,
              LOCALS.s1),
            GLOBALS.otval,
            LOCALS.s2),
          GLOBALS.ocan,
          LOCALS.can),
        GLOBALS.ocontents,
        LOCALS.conts),
      GLOBALS.odesc2,
      LOCALS.desc2),
    GLOBALS.oaction,
    cond(
      /*(*/ [type_Q(
          LOCALS.app,
          false,
          form),
        null] /*)*/,
      /*(*/ [LOCALS.app] /*)*/)))

define(
  find_prep,
  /*(*/ [str,
    "AUX",
    /*(*/ [atm,
      add_word(
        LOCALS.str)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [str] /*)*/,
      string,
      /*(*/ [atm] /*)*/,
      or(
        false,
        atom)] /*)*/] /*2*/,
  cond(
    /*(*/ [gassigned_Q(
        LOCALS.atm),
      cond(
        /*(*/ [type_Q(
            /*,*/ [LOCALS.atm] /*1*/,
            prep),
          /*,*/ [LOCALS.atm] /*1*/] /*)*/,
        /*(*/ [error(
            no_prep_X_errors)] /*)*/)] /*)*/,
    /*(*/ [setg(
        LOCALS.atm,
        chtype(
          LOCALS.atm,
          prep))] /*)*/))

define(
  add_action,
  /*(*/ [nam,
    str,
    "TUPLE",
    decl,
    "AUX",
    /*(*/ [atm,
      or(
        lookup(
          LOCALS.nam,
          GLOBALS.actions),
        insert(
          LOCALS.nam,
          GLOBALS.actions))] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [nam,
        str] /*)*/,
      string,
      /*(*/ [decl] /*)*/,
      tuple(
        /*[*/ [rest,
          vector] /*]*/),
      /*(*/ [atm] /*)*/,
      atom] /*)*/] /*2*/,
  setg(
    LOCALS.atm,
    chtype(
      /*[*/ [LOCALS.atm,
        make_action(
          _X,
          LOCALS.decl),
        LOCALS.str] /*]*/,
      action)),
  LOCALS.atm)

define(
  add_directions,
  /*(*/ ["TUPLE",
    nms,
    "AUX",
    /*(*/ [dir,
      GLOBALS.directions] /*)*/,
    atm] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [nms] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [dir] /*)*/,
      oblist,
      /*(*/ [atm] /*)*/,
      atom] /*)*/] /*2*/,
  mapf(
    null,
    /* FUNCTION */
      (x) => (
      setg,
      LOCALS.atm = or(
            lookup(
              LOCALS.x,
              LOCALS.dir),
            insert(
              LOCALS.x,
              LOCALS.dir)),
      chtype(
          LOCALS.atm,
          direction)),
    LOCALS.nms))

define(
  dsynonym,
  /*(*/ [str,
    "TUPLE",
    nms,
    "AUX",
    val,
    /*(*/ [dir,
      GLOBALS.directions] /*)*/,
    atm] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [atm] /*)*/,
      atom,
      /*(*/ [str] /*)*/,
      string,
      /*(*/ [nms] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [val] /*)*/,
      direction,
      /*(*/ [dir] /*)*/,
      oblist] /*)*/] /*2*/,
  LOCALS.val = add_directions(
      LOCALS.str),
  mapf(
    null,
    /* FUNCTION */
      (x) => (
      setg,
      LOCALS.atm = or(
            lookup(
              LOCALS.x,
              LOCALS.dir),
            insert(
              LOCALS.x,
              LOCALS.dir)),
      LOCALS.val),
    LOCALS.nms))

define(
  vsynonym,
  /*(*/ [n1,
    "TUPLE",
    n2,
    "AUX",
    atm,
    val] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [n1] /*)*/,
      string,
      /*(*/ [n2] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [atm] /*)*/,
      or(
        false,
        atom),
      /*(*/ [val] /*)*/,
      any] /*)*/] /*2*/,
  cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.words),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => (
          setg,
          add_word(
              LOCALS.x),
          LOCALS.val),
        LOCALS.n2)] /*)*/),
  cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.actions),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => (
          setg,
          or(
              lookup(
                LOCALS.x,
                GLOBALS.actions),
              insert(
                LOCALS.x,
                GLOBALS.actions)),
          LOCALS.val),
        LOCALS.n2)] /*)*/))

"STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE)."

define(
  add_word,
  /*(*/ [w] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [w] /*)*/,
      string] /*)*/] /*2*/,
  or(
    lookup(
      LOCALS.w,
      GLOBALS.words),
    insert(
      LOCALS.w,
      GLOBALS.words)))

define(
  add_buzz,
  /*(*/ ["TUPLE",
    w] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [w] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/)] /*)*/] /*2*/,
  mapf(
    null,
    function(
      /*(*/ [x] /*)*/,
      /*#*/ [decl,
        /*(*/ [/*(*/ [x] /*)*/,
          string] /*)*/] /*2*/,
      setg(
        add_word(
          LOCALS.x),
        chtype(
          LOCALS.x,
          buzz))),
    LOCALS.w))

define(
  add_zork,
  /*(*/ [nm,
    "TUPLE",
    w] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [nm] /*)*/,
      atom,
      /*(*/ [w] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/)] /*)*/] /*2*/,
  mapf(
    null,
    function(
      /*(*/ [x,
        "AUX",
        atm] /*)*/,
      /*#*/ [decl,
        /*(*/ [/*(*/ [x] /*)*/,
          string,
          /*(*/ [atm] /*)*/,
          atom] /*)*/] /*2*/,
      setg(
        LOCALS.atm = add_word(
            LOCALS.x),
        chtype(
          LOCALS.atm,
          LOCALS.nm))),
    LOCALS.w))

define(
  add_object,
  /*(*/ [obj,
    names,
    "OPTIONAL",
    /*(*/ [adj,
      () => /*[*/ [] /*]*/] /*)*/,
    "AUX",
    /*(*/ [objs,
      GLOBALS.object_obl] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [obj] /*)*/,
      object,
      /*(*/ [names,
        adj] /*)*/,
      vector(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [objs] /*)*/,
      oblist] /*)*/] /*2*/,
  put(
    LOCALS.obj,
    GLOBALS.onames,
    mapf(
      GLOBALS.uvector,
      function(
        /*(*/ [x] /*)*/,
        /*#*/ [decl,
          /*(*/ [/*(*/ [x] /*)*/,
            string] /*)*/] /*2*/,
        or(
          lookup(
            LOCALS.x,
            LOCALS.objs),
          insert(
            LOCALS.x,
            LOCALS.objs))),
      LOCALS.names)),
  put(
    LOCALS.obj,
    GLOBALS.oadjs,
    mapf(
      GLOBALS.uvector,
      /* FUNCTION */
        (w) => (
        add_zork,
        adjective,
        LOCALS.w),
      LOCALS.adj)),
  chutype(
    oadjs(
      LOCALS.obj),
    adjective),
  LOCALS.obj)

define(
  synonym,
  /*(*/ [n1,
    "TUPLE",
    n2,
    "AUX",
    atm,
    val] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [n1] /*)*/,
      string,
      /*(*/ [n2] /*)*/,
      tuple(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [atm] /*)*/,
      or(
        false,
        atom),
      /*(*/ [val] /*)*/,
      any] /*)*/] /*2*/,
  cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.words),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => (
          setg,
          add_word(
              LOCALS.x),
          LOCALS.val),
        LOCALS.n2)] /*)*/))

define(
  add_abbrev,
  /*(*/ [x,
    y,
    "AUX"] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [x,
        y] /*)*/,
      string] /*)*/] /*2*/,
  setg(
    add_word(
      LOCALS.x),
    or(
      lookup(
        LOCALS.y,
        GLOBALS.words),
      insert(
        LOCALS.y,
        GLOBALS.words))))

define(
  add_demon,
  /*(*/ [x] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [x] /*)*/,
      hack] /*)*/] /*2*/,
  cond(
    /*(*/ [mapr(
        null,
        function(
          /*(*/ [y] /*)*/,
          /*#*/ [decl,
            /*(*/ [/*(*/ [y] /*)*/,
              list(
                /*[*/ [rest,
                  hack] /*]*/)] /*)*/] /*2*/,
          cond(
            /*(*/ [_EQ_Q(
                haction(
                  1(
                    LOCALS.y)),
                haction(
                  LOCALS.x)),
              put(
                LOCALS.y,
                1,
                LOCALS.x),
              mapleave(
                t)] /*)*/)),
        GLOBALS.demons)] /*)*/,
    /*(*/ [GLOBALS.demons = /*(*/ [LOCALS.x,
          _X,
          GLOBALS.demons] /*)*/] /*)*/))

define(
  add_star,
  /*(*/ [obj] /*)*/,
  GLOBALS.stars = /*(*/ [LOCALS.obj,
      _X,
      GLOBALS.stars] /*)*/)

define(
  add_actor,
  /*(*/ [adv,
    "AUX",
    /*(*/ [actors,
      GLOBALS.actors] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [adv] /*)*/,
      adv,
      /*(*/ [actors] /*)*/,
      list(
        /*[*/ [rest,
          adv] /*]*/)] /*)*/] /*2*/,
  cond(
    /*(*/ [mapf(
        null,
        function(
          /*(*/ [x] /*)*/,
          /*#*/ [decl,
            /*(*/ [/*(*/ [x] /*)*/,
              adv] /*)*/] /*2*/,
          cond(
            /*(*/ [_EQ_Q(
                aobj(
                  LOCALS.x),
                aobj(
                  LOCALS.adv)),
              mapleave(
                t)] /*)*/)),
        LOCALS.actors)] /*)*/,
    /*(*/ [GLOBALS.actors = /*(*/ [LOCALS.adv,
          _X,
          LOCALS.actors] /*)*/] /*)*/),
  LOCALS.adv)

define(
  add_desc,
  /*(*/ [obj,
    str] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [obj] /*)*/,
      object,
      /*(*/ [str] /*)*/,
      string] /*)*/] /*2*/,
  put(
    LOCALS.obj,
    GLOBALS.oread,
    LOCALS.str))

define(
  sadd_action,
  /*(*/ [str1,
    atm] /*)*/,
  add_action(
    LOCALS.str1,
    "",
    /*[*/ [/*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/))

define(
  1add_action,
  /*(*/ [str1,
    str2,
    atm] /*)*/,
  add_action(
    LOCALS.str1,
    LOCALS.str2,
    /*[*/ [obj,
      /*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/))

define(
  aadd_action,
  /*(*/ [str1,
    str2,
    atm] /*)*/,
  add_action(
    LOCALS.str1,
    LOCALS.str2,
    /*[*/ [/*(*/ [_1,
        aobjs,
        no_take] /*)*/,
      /*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/))