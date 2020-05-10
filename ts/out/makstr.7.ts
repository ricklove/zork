function cevent
  (tick: fix,
    app: applicable || offset,
    flg: atom || false,
    name: atom || string) {
    
    let obl = get(
        initial,
        oblist);
    let atm: atom || false = null;
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
    objs: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let winner: adv = GLOBALS.winner;
    mapf(
    null,
    function
      (x) {
        
        let y: object = find_obj(
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
  (flid: atom || string,
    rmid: atom || string,
    str?: false || string,
    flag: atom || false,
    funct: atom || false) {
    
    let fval: applicable || false = null;
    let atm: atom || false = null;
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
    pairs: tuple(
        /*[*/ [rest,
          string,
          nexit || cexit || string || atom] /*]*/)) {
    
    let dobl: oblist = GLOBALS.directions;
    let frob: vector = ivector(
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
  (id: string || atom,
    d1: string,
    d2: string,
    lit_Q: atom || form || false,
    ex: exit,
    objs?,
    app: form || false || atom,
    val: fix,
    bit: fix) {
    
    let rm: room = find_room(
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
      (x: object) {
        
        put(
        x,
        GLOBALS.oroom,
        rm)
      },
    robjs(
      rm))
  }

function sobject
  (id: string,
    str,
    _tuple_,
    tup: tuple) {
    
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
  (id: string,
    str,
    app: atom,
    _tuple_,
    tup: tuple) {
    
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
  (id: atom || string,
    desc1: string,
    desc2: string,
    desco: string || false,
    app: false || form || atom,
    conts: list(
        /*[*/ [rest,
          object] /*]*/),
    can: false || object,
    flags: primtype(
        word),
    light_Q?: fix,
    s1: fix,
    s2: fix,
    size: fix,
    capac: fix) {
    
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
  (str: string) {
    
    let atm: false || atom = add_word(
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
  (nam: string,
    str: string,
    _tuple_,
    decl: tuple(
        /*[*/ [rest,
          vector] /*]*/)) {
    
    let atm: atom = lookup(
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
    nms: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let dir: oblist = GLOBALS.directions;
    let atm: atom = null;
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
  (str: string,
    _tuple_,
    nms: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let val: direction = null;
    let dir: oblist = GLOBALS.directions;
    let atm: atom = null;
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
  (n1: string,
    _tuple_,
    n2: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let atm: false || atom = null;
    let val: any = null;
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
  (w: string) {
    
    lookup(
      w,
      GLOBALS.words) || insert(
      w,
      GLOBALS.words)
  }

function add_buzz
  (_tuple_,
    w: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    mapf(
    null,
    function
      (x: string) {
        
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
  (nm: atom,
    _tuple_,
    w: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    mapf(
    null,
    function
      (x: string) {
        
        let atm: atom = null;
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
  (obj: object,
    names: vector(
        /*[*/ [rest,
          string] /*]*/),
    adj?: vector(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let objs: oblist = GLOBALS.object_obl;
    put(
    obj,
    GLOBALS.onames,
    mapf(
      GLOBALS.uvector,
      function
        (x: string) {
          
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
  (n1: string,
    _tuple_,
    n2: tuple(
        /*[*/ [rest,
          string] /*]*/)) {
    
    let atm: false || atom = null;
    let val: any = null;
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
  (x: string,
    y: string) {
    
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
  (x: hack) {
    
    cond(
    /*(*/ [mapr(
        null,
        function
          (y: list(
                /*[*/ [rest,
                  hack] /*]*/)) {
            
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
  (adv: adv) {
    
    let actors: list(
        /*[*/ [rest,
          adv] /*]*/) = GLOBALS.actors;
    cond(
    /*(*/ [mapf(
        null,
        function
          (x: adv) {
            
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
  (obj: object,
    str: string) {
    
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