FUNCTIONS.cevent = 
  (tick,
    app,
    flg,
    name) => {
    
    let obl = get(
        initial,
        oblist);
    let atm = null;
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
    /*(*/ [LOCALS.atm = LOCALS.name] /*)*/)
setg(
    LOCALS.atm,
    chtype(
      /*[*/ [LOCALS.tick,
        LOCALS.app,
        LOCALS.flg,
        LOCALS.atm] /*]*/,
      cevent))
  }

FUNCTIONS.cons_obj = 
  (_tuple_,
    objs) => {
    
    let winner = GLOBALS.winner;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        let y = find_obj(
            LOCALS.x);
        or(
        memq(
          LOCALS.y,
          aobjs(
            LOCALS.winner)),
        take_object(
          find_obj(
            LOCALS.x),
          LOCALS.winner))
      },
    LOCALS.objs)
  }

FUNCTIONS.cexit = 
  (flid,
    rmid,
    str?,
    flag,
    funct) => {
    
    let fval = null;
    let atm = null;
    cond(
    /*(*/ [type_Q(
        LOCALS.flid,
        atom),
      LOCALS.flid = spname(
          LOCALS.flid)] /*)*/)
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
          oblist)))
setg(
    LOCALS.atm,
    LOCALS.flag)
chtype(
    vector(
      LOCALS.atm,
      find_room(
        LOCALS.rmid),
      LOCALS.str,
      LOCALS.funct),
    cexit)
  }

FUNCTIONS.exit = 
  (_tuple_,
    pairs) => {
    
    let dobl = GLOBALS.directions;
    let frob = ivector(
        length(
          LOCALS.pairs));
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
          )] /*)*/))
chtype(
    LOCALS.frob,
    exit)
  }

FUNCTIONS.room = 
  (id,
    d1,
    d2,
    lit_Q,
    ex,
    objs?,
    app,
    val,
    bit) => {
    
    let rm = find_room(
        LOCALS.id);
    GLOBALS.score_max = _(
      GLOBALS.score_max,
      LOCALS.val)
put(
    LOCALS.rm,
    GLOBALS.rbits,
    LOCALS.bit)
put(
    LOCALS.rm,
    GLOBALS.rval,
    LOCALS.val)
put(
    LOCALS.rm,
    GLOBALS.robjs,
    LOCALS.objs)
put(
    LOCALS.rm,
    GLOBALS.rdesc1,
    LOCALS.d1)
put(
    LOCALS.rm,
    GLOBALS.rdesc2,
    LOCALS.d2)
put(
    LOCALS.rm,
    GLOBALS.rexits,
    LOCALS.ex)
put(
    LOCALS.rm,
    GLOBALS.raction,
    cond(
      /*(*/ [type_Q(
          LOCALS.app,
          false,
          form),
        null] /*)*/,
      /*(*/ [LOCALS.app] /*)*/))
put(
    LOCALS.rm,
    GLOBALS.rlight_Q,
    cond(
      /*(*/ [type_Q(
          LOCALS.lit_Q,
          form),
        null] /*)*/,
      /*(*/ [t,
        LOCALS.lit_Q] /*)*/))
mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        put(
        LOCALS.x,
        GLOBALS.oroom,
        LOCALS.rm)
      },
    robjs(
      LOCALS.rm))
  }

FUNCTIONS.sobject = 
  (id,
    str,
    _tuple_,
    tup) => {
    
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
      LOCALS.tup))
  }

FUNCTIONS.aobject = 
  (id,
    str,
    app,
    _tuple_,
    tup) => {
    
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
      LOCALS.tup))
  }

FUNCTIONS.object = 
  (id,
    desc1,
    desc2,
    desco,
    app,
    conts,
    can,
    flags,
    light_Q?,
    s1,
    s2,
    size,
    capac) => {
    
    GLOBALS.score_max = _(
      GLOBALS.score_max,
      LOCALS.s1,
      LOCALS.s2)
or(
    0_Q(
      LOCALS.light_Q),
    LOCALS.flags = _(
        LOCALS.flags,
        GLOBALS.lightbit))
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
      /*(*/ [LOCALS.app] /*)*/))
  }

FUNCTIONS.find_prep = 
  (str) => {
    
    let atm = add_word(
        LOCALS.str);
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
          prep))] /*)*/)
  }

FUNCTIONS.add_action = 
  (nam,
    str,
    _tuple_,
    decl) => {
    
    let atm = or(
        lookup(
          LOCALS.nam,
          GLOBALS.actions),
        insert(
          LOCALS.nam,
          GLOBALS.actions));
    setg(
    LOCALS.atm,
    chtype(
      /*[*/ [LOCALS.atm,
        make_action(
          _X,
          LOCALS.decl),
        LOCALS.str] /*]*/,
      action))
  }

FUNCTIONS.add_directions = 
  (_tuple_,
    nms) => {
    
    let dir = GLOBALS.directions;
    let atm = null;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        setg(
        LOCALS.atm = or(
            lookup(
              LOCALS.x,
              LOCALS.dir),
            insert(
              LOCALS.x,
              LOCALS.dir)),
        chtype(
          LOCALS.atm,
          direction))
      },
    LOCALS.nms)
  }

FUNCTIONS.dsynonym = 
  (str,
    _tuple_,
    nms) => {
    
    let val = null;
    let dir = GLOBALS.directions;
    let atm = null;
    LOCALS.val = add_directions(
      LOCALS.str)
mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        setg(
        LOCALS.atm = or(
            lookup(
              LOCALS.x,
              LOCALS.dir),
            insert(
              LOCALS.x,
              LOCALS.dir)),
        LOCALS.val)
      },
    LOCALS.nms)
  }

FUNCTIONS.vsynonym = 
  (n1,
    _tuple_,
    n2) => {
    
    let atm = null;
    let val = null;
    cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.words),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            setg(
            add_word(
              LOCALS.x),
            LOCALS.val)
          },
        LOCALS.n2)] /*)*/)
cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.actions),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            setg(
            or(
              lookup(
                LOCALS.x,
                GLOBALS.actions),
              insert(
                LOCALS.x,
                GLOBALS.actions)),
            LOCALS.val)
          },
        LOCALS.n2)] /*)*/)
  }

"STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE)."

FUNCTIONS.add_word = 
  (w) => {
    
    or(
    lookup(
      LOCALS.w,
      GLOBALS.words),
    insert(
      LOCALS.w,
      GLOBALS.words))
  }

FUNCTIONS.add_buzz = 
  (_tuple_,
    w) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        setg(
        add_word(
          LOCALS.x),
        chtype(
          LOCALS.x,
          buzz))
      },
    LOCALS.w)
  }

FUNCTIONS.add_zork = 
  (nm,
    _tuple_,
    w) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        let atm = null;
        setg(
        LOCALS.atm = add_word(
            LOCALS.x),
        chtype(
          LOCALS.atm,
          LOCALS.nm))
      },
    LOCALS.w)
  }

FUNCTIONS.add_object = 
  (obj,
    names,
    adj?) => {
    
    let objs = GLOBALS.object_obl;
    put(
    LOCALS.obj,
    GLOBALS.onames,
    mapf(
      GLOBALS.uvector,
      /* FUNCTION */
        (x) => {
          
          or(
          lookup(
            LOCALS.x,
            LOCALS.objs),
          insert(
            LOCALS.x,
            LOCALS.objs))
        },
      LOCALS.names))
put(
    LOCALS.obj,
    GLOBALS.oadjs,
    mapf(
      GLOBALS.uvector,
      /* FUNCTION */
        (w) => {
          
          add_zork(
          adjective,
          LOCALS.w)
        },
      LOCALS.adj))
chutype(
    oadjs(
      LOCALS.obj),
    adjective)
  }

FUNCTIONS.synonym = 
  (n1,
    _tuple_,
    n2) => {
    
    let atm = null;
    let val = null;
    cond(
    /*(*/ [LOCALS.atm = lookup(
          LOCALS.n1,
          GLOBALS.words),
      LOCALS.val = /*,*/ [LOCALS.atm] /*1*/,
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            setg(
            add_word(
              LOCALS.x),
            LOCALS.val)
          },
        LOCALS.n2)] /*)*/)
  }

FUNCTIONS.add_abbrev = 
  (x,
    y) => {
    
    setg(
    add_word(
      LOCALS.x),
    or(
      lookup(
        LOCALS.y,
        GLOBALS.words),
      insert(
        LOCALS.y,
        GLOBALS.words)))
  }

FUNCTIONS.add_demon = 
  (x) => {
    
    cond(
    /*(*/ [mapr(
        null,
        /* FUNCTION */
          (y) => {
            
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
                t)] /*)*/)
          },
        GLOBALS.demons)] /*)*/,
    /*(*/ [GLOBALS.demons = /*(*/ [LOCALS.x,
          _X,
          GLOBALS.demons] /*)*/] /*)*/)
  }

FUNCTIONS.add_star = 
  (obj) => {
    
    GLOBALS.stars = /*(*/ [LOCALS.obj,
      _X,
      GLOBALS.stars] /*)*/
  }

FUNCTIONS.add_actor = 
  (adv) => {
    
    let actors = GLOBALS.actors;
    cond(
    /*(*/ [mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [_EQ_Q(
                aobj(
                  LOCALS.x),
                aobj(
                  LOCALS.adv)),
              mapleave(
                t)] /*)*/)
          },
        LOCALS.actors)] /*)*/,
    /*(*/ [GLOBALS.actors = /*(*/ [LOCALS.adv,
          _X,
          LOCALS.actors] /*)*/] /*)*/)
  }

FUNCTIONS.add_desc = 
  (obj,
    str) => {
    
    put(
    LOCALS.obj,
    GLOBALS.oread,
    LOCALS.str)
  }

FUNCTIONS.sadd_action = 
  (str1,
  atm) => {
    
    add_action(
    LOCALS.str1,
    "",
    /*[*/ [/*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/)
  }

FUNCTIONS.1add_action = 
  (str1,
  str2,
  atm) => {
    
    add_action(
    LOCALS.str1,
    LOCALS.str2,
    /*[*/ [obj,
      /*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/)
  }

FUNCTIONS.aadd_action = 
  (str1,
  str2,
  atm) => {
    
    add_action(
    LOCALS.str1,
    LOCALS.str2,
    /*[*/ [/*(*/ [_1,
        aobjs,
        no_take] /*)*/,
      /*[*/ [LOCALS.str1,
        LOCALS.atm] /*]*/] /*]*/)
  }