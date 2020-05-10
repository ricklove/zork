function cevent
  (tick,
    app,
    flg,
    name) {
    
    let obl = get(
        initial,
        oblist);
    let atm = null;
    cond(
    /*(*/ [type_Q(
        name,
        string),
      cond(
        /*(*/ [atm = lookup(
              name,
              obl)] /*)*/,
        /*(*/ [t,
          atm = insert(
              name,
              obl)] /*)*/)] /*)*/,
    /*(*/ [atm = name] /*)*/)
setg(
    atm,
    chtype(
      /*[*/ [tick,
        app,
        flg,
        atm] /*]*/,
      cevent))
  }

function cons_obj
  (_tuple_,
    objs) {
    
    let winner = GLOBALS.winner;
    mapf(
    null,
    function
      (x) {
        
        let y = find_obj(
            x);
        memq(
          y,
          aobjs(
            winner)) || take_object(
          find_obj(
            x),
          winner)
      },
    objs)
  }

function cexit
  (flid,
    rmid,
    str?,
    flag,
    funct) {
    
    let fval = null;
    let atm = null;
    cond(
    /*(*/ [type_Q(
        flid,
        atom),
      flid = spname(
          flid)] /*)*/)
atm = lookup(
        flid,
        get(
          flag,
          oblist)) || insert(
        flid,
        get(
          flag,
          oblist))
setg(
    atm,
    flag)
chtype(
    vector(
      atm,
      find_room(
        rmid),
      str,
      funct),
    cexit)
  }

function exit
  (_tuple_,
    pairs) {
    
    let dobl = GLOBALS.directions;
    let frob = ivector(
        pairs.length);
    repeat(
    /*(*/ [atm,
      rm,
      /*(*/ [f,
        frob] /*)*/] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [atm] /*)*/,
        atom || false,
        /*(*/ [rm] /*)*/,
        room || false,
        /*(*/ [f] /*)*/,
        vector] /*)*/] /*2*/,
    cond(
      /*(*/ [or(
          atm = lookup(
                pairs[1],
                dobl) && gassigned_Q(
              atm) && type_Q(
              /*,*/ [atm] /*1*/,
              direction)),
        put(
          f,
          1,
          atm),
        cond(
          /*(*/ [type_Q(
              pairs[2],
              string),
            put(
              f,
              2,
              find_room(
                pairs[2]))] /*)*/,
          /*(*/ [put(
              f,
              2,
              pairs[2])] /*)*/),
        f = rest(
            f,
            2)] /*)*/,
      /*(*/ [t,
        put(
          pairs,
          1,
          error(
            illegal_direction,
            pairs[1]))] /*)*/),
    cond(
      /*(*/ [empty_Q(
          pairs = rest(
              pairs,
              2)),
        return(
          )] /*)*/))
chtype(
    frob,
    exit)
  }

function room
  (id,
    d1,
    d2,
    lit_Q,
    ex,
    objs?,
    app,
    val,
    bit) {
    
    let rm = find_room(
        id);
    GLOBALS.score_max = _(
      GLOBALS.score_max,
      val)
put(
    rm,
    GLOBALS.rbits,
    bit)
put(
    rm,
    GLOBALS.rval,
    val)
put(
    rm,
    GLOBALS.robjs,
    objs)
put(
    rm,
    GLOBALS.rdesc1,
    d1)
put(
    rm,
    GLOBALS.rdesc2,
    d2)
put(
    rm,
    GLOBALS.rexits,
    ex)
put(
    rm,
    GLOBALS.raction,
    cond(
      /*(*/ [type_Q(
          app,
          false,
          form),
        null] /*)*/,
      /*(*/ [app] /*)*/))
put(
    rm,
    GLOBALS.rlight_Q,
    cond(
      /*(*/ [type_Q(
          lit_Q,
          form),
        null] /*)*/,
      /*(*/ [t,
        lit_Q] /*)*/))
mapf(
    null,
    function
      (x) {
        
        put(
        x,
        GLOBALS.oroom,
        rm)
      },
    robjs(
      rm))
  }

function sobject
  (id,
    str,
    _tuple_,
    tup) {
    
    object(
    id,
    "",
    str,
    /*%*/ [null] /*1*/,
    null,
    /*(*/ [] /*)*/,
    null,
    _(
      _X,
      tup))
  }

function aobject
  (id,
    str,
    app,
    _tuple_,
    tup) {
    
    object(
    id,
    "",
    str,
    /*%*/ [null] /*1*/,
    app,
    /*(*/ [] /*)*/,
    null,
    _(
      _X,
      tup))
  }

function object
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
    capac) {
    
    GLOBALS.score_max = _(
      GLOBALS.score_max,
      s1,
      s2)
0_Q(
      light_Q) || flags = _(
        flags,
        GLOBALS.lightbit)
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
                            id),
                          GLOBALS.odesc1,
                          desc1),
                        GLOBALS.ocapac,
                        capac),
                      GLOBALS.osize,
                      size),
                    GLOBALS.odesco,
                    desco),
                  GLOBALS.olight_Q,
                  light_Q),
                GLOBALS.oflags,
                flags),
              GLOBALS.ofval,
              s1),
            GLOBALS.otval,
            s2),
          GLOBALS.ocan,
          can),
        GLOBALS.ocontents,
        conts),
      GLOBALS.odesc2,
      desc2),
    GLOBALS.oaction,
    cond(
      /*(*/ [type_Q(
          app,
          false,
          form),
        null] /*)*/,
      /*(*/ [app] /*)*/))
  }

function find_prep
  (str) {
    
    let atm = add_word(
        str);
    cond(
    /*(*/ [gassigned_Q(
        atm),
      cond(
        /*(*/ [type_Q(
            /*,*/ [atm] /*1*/,
            prep),
          /*,*/ [atm] /*1*/] /*)*/,
        /*(*/ [error(
            no_prep_X_errors)] /*)*/)] /*)*/,
    /*(*/ [setg(
        atm,
        chtype(
          atm,
          prep))] /*)*/)
  }

function add_action
  (nam,
    str,
    _tuple_,
    decl) {
    
    let atm = lookup(
          nam,
          GLOBALS.actions) || insert(
          nam,
          GLOBALS.actions);
    setg(
    atm,
    chtype(
      /*[*/ [atm,
        make_action(
          _X,
          decl),
        str] /*]*/,
      action))
  }

function add_directions
  (_tuple_,
    nms) {
    
    let dir = GLOBALS.directions;
    let atm = null;
    mapf(
    null,
    function
      (x) {
        
        setg(
        atm = lookup(
              x,
              dir) || insert(
              x,
              dir),
        chtype(
          atm,
          direction))
      },
    nms)
  }

function dsynonym
  (str,
    _tuple_,
    nms) {
    
    let val = null;
    let dir = GLOBALS.directions;
    let atm = null;
    val = add_directions(
      str)
mapf(
    null,
    function
      (x) {
        
        setg(
        atm = lookup(
              x,
              dir) || insert(
              x,
              dir),
        val)
      },
    nms)
  }

function vsynonym
  (n1,
    _tuple_,
    n2) {
    
    let atm = null;
    let val = null;
    cond(
    /*(*/ [atm = lookup(
          n1,
          GLOBALS.words),
      val = /*,*/ [atm] /*1*/,
      mapf(
        null,
        function
          (x) {
            
            setg(
            add_word(
              x),
            val)
          },
        n2)] /*)*/)
cond(
    /*(*/ [atm = lookup(
          n1,
          GLOBALS.actions),
      val = /*,*/ [atm] /*1*/,
      mapf(
        null,
        function
          (x) {
            
            setg(
            lookup(
                x,
                GLOBALS.actions) || insert(
                x,
                GLOBALS.actions),
            val)
          },
        n2)] /*)*/)
  }

"STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE)."

function add_word
  (w) {
    
    lookup(
      w,
      GLOBALS.words) || insert(
      w,
      GLOBALS.words)
  }

function add_buzz
  (_tuple_,
    w) {
    
    mapf(
    null,
    function
      (x) {
        
        setg(
        add_word(
          x),
        chtype(
          x,
          buzz))
      },
    w)
  }

function add_zork
  (nm,
    _tuple_,
    w) {
    
    mapf(
    null,
    function
      (x) {
        
        let atm = null;
        setg(
        atm = add_word(
            x),
        chtype(
          atm,
          nm))
      },
    w)
  }

function add_object
  (obj,
    names,
    adj?) {
    
    let objs = GLOBALS.object_obl;
    put(
    obj,
    GLOBALS.onames,
    mapf(
      GLOBALS.uvector,
      function
        (x) {
          
          lookup(
            x,
            objs) || insert(
            x,
            objs)
        },
      names))
put(
    obj,
    GLOBALS.oadjs,
    mapf(
      GLOBALS.uvector,
      function
        (w) {
          
          add_zork(
          adjective,
          w)
        },
      adj))
chutype(
    oadjs(
      obj),
    adjective)
  }

function synonym
  (n1,
    _tuple_,
    n2) {
    
    let atm = null;
    let val = null;
    cond(
    /*(*/ [atm = lookup(
          n1,
          GLOBALS.words),
      val = /*,*/ [atm] /*1*/,
      mapf(
        null,
        function
          (x) {
            
            setg(
            add_word(
              x),
            val)
          },
        n2)] /*)*/)
  }

function add_abbrev
  (x,
    y) {
    
    setg(
    add_word(
      x),
    lookup(
        y,
        GLOBALS.words) || insert(
        y,
        GLOBALS.words))
  }

function add_demon
  (x) {
    
    cond(
    /*(*/ [mapr(
        null,
        function
          (y) {
            
            cond(
            /*(*/ [haction(
                  y[1]) === haction(
                  x),
              put(
                y,
                1,
                x),
              mapleave(
                t)] /*)*/)
          },
        GLOBALS.demons)] /*)*/,
    /*(*/ [GLOBALS.demons = /*(*/ [x,
          _X,
          GLOBALS.demons] /*)*/] /*)*/)
  }

function add_star
  (obj) {
    
    GLOBALS.stars = /*(*/ [obj,
      _X,
      GLOBALS.stars] /*)*/
  }

function add_actor
  (adv) {
    
    let actors = GLOBALS.actors;
    cond(
    /*(*/ [mapf(
        null,
        function
          (x) {
            
            cond(
            /*(*/ [aobj(
                  x) === aobj(
                  adv),
              mapleave(
                t)] /*)*/)
          },
        actors)] /*)*/,
    /*(*/ [GLOBALS.actors = /*(*/ [adv,
          _X,
          actors] /*)*/] /*)*/)
  }

function add_desc
  (obj,
    str) {
    
    put(
    obj,
    GLOBALS.oread,
    str)
  }

function sadd_action
  (str1,
  atm) {
    
    add_action(
    str1,
    "",
    /*[*/ [/*[*/ [str1,
        atm] /*]*/] /*]*/)
  }

function 1add_action
  (str1,
  str2,
  atm) {
    
    add_action(
    str1,
    str2,
    /*[*/ [obj,
      /*[*/ [str1,
        atm] /*]*/] /*]*/)
  }

function aadd_action
  (str1,
  str2,
  atm) {
    
    add_action(
    str1,
    str2,
    /*[*/ [/*(*/ [_1,
        aobjs,
        no_take] /*)*/,
      /*[*/ [str1,
        atm] /*]*/] /*]*/)
  }