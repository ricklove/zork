GLOBALS.words = or(
    get(
      words,
      oblist),
    moblist(
      words,
      23))

GLOBALS.object_obl = or(
    get(
      objects,
      oblist),
    moblist(
      objects,
      23))

GLOBALS.actions = moblist(
    actions,
    17)

GLOBALS.orphans = /*[*/ [null,
    null,
    null,
    null,
    null] /*]*/

cond(
  /*(*/ [or(
      lookup(
        "COMPILE",
        root(
          )),
      gassigned_Q(
        group_glue))] /*)*/,
  /*(*/ [GLOBALS.prepvec = /*[*/ [chtype(
          /*[*/ [find_prep(
              "WITH"),
            find_obj(
              "#####")] /*]*/,
          phrase),
        chtype(
          /*[*/ [find_prep(
              "WITH"),
            find_obj(
              "#####")] /*]*/,
          phrase)] /*]*/,
    GLOBALS.prep2vec = /*[*/ [chtype(
          /*[*/ [find_prep(
              "WITH"),
            find_obj(
              "#####")] /*]*/,
          phrase),
        chtype(
          /*[*/ [find_prep(
              "WITH"),
            find_obj(
              "#####")] /*]*/,
          phrase)] /*]*/] /*)*/)

define(
  sparse,
  sparout,
  /*(*/ [sv,
    vb,
    "AUX",
    /*(*/ [words,
      GLOBALS.words] /*)*/,
    /*(*/ [objob,
      GLOBALS.object_obl] /*)*/,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [pvr,
      put(
        put(
          rest(
            pv),
          1,
          null),
        2,
        null)] /*)*/,
    /*(*/ [actions,
      GLOBALS.actions] /*)*/,
    /*(*/ [dirs,
      GLOBALS.directions] /*)*/,
    /*(*/ [orph,
      GLOBALS.orphans] /*)*/,
    /*(*/ [orfl,
      oflag(
        orph)] /*)*/,
    /*(*/ [prv,
      GLOBALS.prepvec] /*)*/,
    /*(*/ [here,
      GLOBALS.here] /*)*/,
    /*(*/ [action,
      null] /*)*/,
    /*(*/ [prep,
      null] /*)*/,
    nprep,
    /*(*/ [adj,
      null] /*)*/,
    atm,
    aval,
    obj,
    pprep,
    lobj,
    val] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [sv] /*)*/,
      vector(
        /*[*/ [rest,
          string] /*]*/),
      /*(*/ [vb,
        orfl] /*)*/,
      or(
        atom,
        false),
      /*(*/ [actions,
        words,
        objob,
        dirs] /*)*/,
      oblist,
      /*(*/ [pv,
        orph,
        prv,
        pvr] /*)*/,
      vector,
      /*(*/ [atm] /*)*/,
      or(
        atom,
        false),
      /*(*/ [here] /*)*/,
      room,
      /*(*/ [action] /*)*/,
      or(
        false,
        action),
      /*(*/ [nprep,
        prep] /*)*/,
      or(
        false,
        prep),
      /*(*/ [adj] /*)*/,
      or(
        false,
        adjective),
      /*(*/ [aval] /*)*/,
      any,
      /*(*/ [lobj] /*)*/,
      any,
      /*(*/ [obj] /*)*/,
      or(
        false,
        object),
      /*(*/ [pprep] /*)*/,
      phrase] /*)*/] /*2*/,
  val = mapf(
      null,
      /* FUNCTION */
        (x) => {
          
          cond(
          /*(*/ [empty_Q(
              x),
            mapleave(
              t)] /*)*/,
          /*(*/ [and(
              not(
                action),
              atm = lookup(
                  x,
                  actions)),
            action = /*,*/ [atm] /*1*/] /*)*/,
          /*(*/ [and(
              not(
                action),
              atm = lookup(
                  x,
                  dirs)),
            put(
              pv,
              1,
              GLOBALS.walk_X_words),
            put(
              pv,
              2,
              /*,*/ [atm] /*1*/),
            return(
              win,
              sparout)] /*)*/,
          /*(*/ [and(
              atm = lookup(
                  x,
                  words),
              cond(
                /*(*/ [type_Q(
                    aval = /*,*/ [atm] /*1*/,
                    prep),
                  cond(
                    /*(*/ [prep,
                      or(
                        vb,
                        tell(
                          "Double preposition?",
                          0)),
                      mapleave(
                        null)] /*)*/,
                    /*(*/ [prep = aval] /*)*/)] /*)*/,
                /*(*/ [type_Q(
                    aval,
                    adjective),
                  adj = aval,
                  not(
                    and(
                      orfl,
                      atm = oname(
                          orph),
                      x = spname(
                          atm)))] /*)*/,
                /*(*/ [t] /*)*/))] /*)*/,
          /*(*/ [atm = lookup(
                x,
                objob),
            cond(
              /*(*/ [obj = get_object(
                    atm,
                    adj),
                and(
                  empty_Q(
                    pvr),
                  or(
                    vb,
                    tell(
                      "Too many objects specified?",
                      0)),
                  mapleave(
                    null)),
                put(
                  pvr,
                  1,
                  cond(
                    /*(*/ [prep,
                      pprep = prv[1],
                      prv = rest(
                          prv),
                      put(
                        pprep,
                        1,
                        prep),
                      prep = null,
                      put(
                        pprep,
                        2,
                        obj)] /*)*/,
                    /*(*/ [obj] /*)*/)),
                pvr = rest(
                    pvr)] /*)*/,
              /*(*/ [t,
                cond(
                  /*(*/ [empty_Q(
                      obj),
                    or(
                      vb,
                      cond(
                        /*(*/ [lit_Q(
                            here),
                          tell(
                            "I can't see a",
                            0),
                          cond(
                            /*(*/ [adj,
                              tell(
                                "",
                                0,
                                prstr(
                                  chtype(
                                    adj,
                                    atom)))] /*)*/),
                          tell(
                            "",
                            0,
                            prstr(
                              atm),
                            "here.")] /*)*/,
                        /*(*/ [tell(
                            "It is too dark in here to see.",
                            0)] /*)*/))] /*)*/,
                  /*(*/ [_EQ_Q(
                      obj,
                      GLOBALS.nefals2),
                    or(
                      vb,
                      tell(
                        "I can't reach that from inside the",
                        0,
                        odesc2(
                          avehicle(
                            GLOBALS.winner)),
                        "."))] /*)*/,
                  /*(*/ [or(
                      vb,
                      tell(
                        "Which",
                        0,
                        prstr(
                          atm),
                        "?")),
                    orphan(
                      t,
                      or(
                        action,
                        and(
                          orfl,
                          overb(
                            orph))),
                      pv[2],
                      prep,
                      atm)] /*)*/),
                mapleave(
                  null)] /*)*/),
            adj = null,
            t] /*)*/,
          /*(*/ [or(
              vb,
              tell(
                "I don't know the word",
                0,
                x)),
            mapleave(
              null)] /*)*/)
        },
      sv),
  cond(
    /*(*/ [val,
      cond(
        /*(*/ [and(
            not(
              action),
            not(
              action = and(
                  orfl,
                  overb(
                    orph)))),
          or(
            vb,
            cond(
              /*(*/ [type_Q(
                  pv[2],
                  object),
                tell(
                  "What should I do with the",
                  0,
                  odesc2(
                    pv[2]),
                  "?")] /*)*/,
              /*(*/ [tell(
                  "Huh?",
                  0)] /*)*/)),
          orphan(
            t,
            null,
            pv[2]),
          null] /*)*/,
        /*(*/ [and(
            put(
              pv,
              1,
              action),
            adj),
          or(
            vb,
            tell(
              "Dangling adjective?",
              0)),
          null] /*)*/,
        /*(*/ [and(
            orfl,
            nprep = oprep(
                orph),
            obj = pv[2],
            put(
              pprep = prv[1],
              1,
              nprep),
            put(
              pprep,
              2,
              obj),
            cond(
              /*(*/ [obj = oslot1(
                    orph),
                put(
                  pv,
                  2,
                  obj),
                put(
                  pv,
                  3,
                  pprep)] /*)*/,
              /*(*/ [put(
                  pv,
                  2,
                  pprep)] /*)*/),
            null)] /*)*/,
        /*(*/ [prep,
          and(
            type_Q(
              lobj = back(
                    pvr)[1],
              object),
            top(
              put(
                back(
                  pvr),
                1,
                put(
                  put(
                    prv[1],
                    1,
                    prep),
                  2,
                  lobj))))] /*)*/,
        /*(*/ [pv] /*)*/)] /*)*/))

FUNCTIONS.sp = 
  (str) => {
    
    parse(
    lex(
      str),
    null)
  }

FUNCTIONS.orphan = 
  (flag?,
    action,
    slot1,
    prep,
    name) => {
    
    put(
    put(
      put(
        put(
          put(
            GLOBALS.orphans,
            GLOBALS.oname,
            name),
          GLOBALS.oprep,
          prep),
        GLOBALS.oslot1,
        slot1),
      GLOBALS.overb,
      action),
    GLOBALS.oflag,
    flag)
  }

FUNCTIONS.syn_match = 
  (pv) => {
    
    let action = pv[1];
    let objs = rest(
        pv);
    let o1 = objs[1];
    let o2 = objs[2];
    let dforce = null;
    let drive = null;
    let gwim = null;
    let synn = null;
    cond(
    /*(*/ [mapf(
        null,
        /* FUNCTION */
          (syn) => {
            
            cond(
            /*(*/ [syn_equal(
                syn1(
                  syn),
                o1),
              cond(
                /*(*/ [syn_equal(
                    syn2(
                      syn),
                    o2),
                  and(
                    sflip(
                      syn),
                    put(
                      objs,
                      1,
                      o2),
                    put(
                      objs,
                      2,
                      o1)),
                  mapleave(
                    take_it_or_leave_it(
                      syn,
                      put(
                        pv,
                        1,
                        sfcn(
                          syn))))] /*)*/,
                /*(*/ [not(
                    o2),
                  cond(
                    /*(*/ [sdriver(
                        syn),
                      dforce = syn] /*)*/,
                    /*(*/ [drive = syn] /*)*/),
                  null] /*)*/)] /*)*/,
            /*(*/ [not(
                o1),
              cond(
                /*(*/ [sdriver(
                    syn),
                  dforce = syn] /*)*/,
                /*(*/ [drive = syn] /*)*/),
              null] /*)*/)
          },
        vdecl(
          action))] /*)*/,
    /*(*/ [drive = or(
          dforce,
          drive),
      cond(
        /*(*/ [and(
            synn = syn1(
                drive),
            not(
              o1),
            not(
              0_Q(
                vbit(
                  synn))),
            not(
              orfeo(
                synn,
                objs)),
            not(
              o1 = gwim = gwim_slot(
                    1,
                    synn,
                    action,
                    objs))),
          orphan(
            t,
            action,
            null,
            vprep(
              synn)),
          ortell(
            synn,
            action,
            gwim)] /*)*/,
        /*(*/ [and(
            synn = syn2(
                drive),
            not(
              o2),
            not(
              0_Q(
                vbit(
                  synn))),
            not(
              gwim_slot(
                2,
                synn,
                action,
                objs))),
          orphan(
            t,
            action,
            o1,
            vprep(
              synn)),
          ortell(
            synn,
            action,
            gwim)] /*)*/,
        /*(*/ [take_it_or_leave_it(
            drive,
            put(
              pv,
              1,
              sfcn(
                drive)))] /*)*/)] /*)*/,
    /*(*/ [tell(
        "I can't make sense out of that.",
        0),
      null] /*)*/)
  }

FUNCTIONS.take_it_or_leave_it = 
  (syn,
    pv) => {
    
    let pv1 = pv[2];
    let pv2 = pv[3];
    let obj = null;
    let varg = null;
    put(
    pv,
    2,
    obj = cond(
        /*(*/ [type_Q(
            pv1,
            object),
          pv1] /*)*/,
        /*(*/ [type_Q(
            pv1,
            phrase),
          pv1[2]] /*)*/))
cond(
    /*(*/ [vtrnn(
        varg = syn1(
            syn),
        GLOBALS.vrbit),
      take_it(
        obj,
        pv,
        varg)] /*)*/)
put(
    pv,
    3,
    obj = cond(
        /*(*/ [type_Q(
            pv2,
            object),
          pv2] /*)*/,
        /*(*/ [type_Q(
            pv2,
            phrase),
          pv2[2]] /*)*/))
cond(
    /*(*/ [vtrnn(
        varg = syn2(
            syn),
        GLOBALS.vrbit),
      take_it(
        obj,
        pv,
        varg)] /*)*/)
  }

FUNCTIONS.take_it = 
  (obj,
    vec,
    vrb) => {
    
    let sav1 = vec[1];
    let sav2 = vec[2];
    cond(
    /*(*/ [and(
        search_list(
          oid(
            obj),
          robjs(
            GLOBALS.here),
          null),
        or(
          can_take_Q(
            obj),
          not(
            vtrnn(
              vrb,
              GLOBALS.vtbit)))),
      put(
        vec,
        1,
        GLOBALS.take_X_words),
      put(
        vec,
        2,
        obj),
      take(
        t),
      put(
        vec,
        1,
        sav1),
      put(
        vec,
        2,
        sav2)] /*)*/)
  }

FUNCTIONS.orfeo = 
  (syn,
    objs) => {
    
    let orph = GLOBALS.orphans;
    let orfl = oflag(
        orph);
    let slot1 = null;
    cond(
    /*(*/ [not(
        orfl),
      null] /*)*/,
    /*(*/ [slot1 = oslot1(
          orph),
      and(
        syn_equal(
          syn,
          slot1),
        put(
          objs,
          1,
          slot1))] /*)*/)
  }

FUNCTIONS.ortell = 
  (varg,
    action,
    gwim) => {
    
    let prep = vprep(
        varg);
    let sp = null;
    cond(
    /*(*/ [prep,
      and(
        gwim,
        tell(
          vstr(
            action),
          0,
          ""),
        tell(
          odesc2(
            gwim),
          0,
          "")),
      tell(
        prstr(
          chtype(
            prep,
            atom)),
        0,
        "what?")] /*)*/,
    /*(*/ [tell(
        vstr(
          action),
        0,
        "what?")] /*)*/)
null
  }

FUNCTIONS.prstr = 
  (atm) => {
    
    let sp = null;
    foostr(
    sp = spname(
        atm),
    back(
      GLOBALS.scrstr,
      sp.length),
    null)
  }

FUNCTIONS.foostr = 
  (nam,
    str,
    1st?) => {
    
    mapr(
    null,
    /* FUNCTION */
      (x,
        y) => {
        
        cond(
        /*(*/ [and(
            1st,
            _EQ_Q(
              x,
              nam)),
          put(
            y,
            1,
            x[1])] /*)*/,
        /*(*/ [put(
            y,
            1,
            chtype(
              _(
                32,
                ascii(
                  x[1])),
              character))] /*)*/)
      },
    nam,
    str)
  }

FUNCTIONS.gwim_slot = 
  (fx,
    varg,
    action,
    objs) => {
    
    let obj = null;
    cond(
    /*(*/ [obj = gwim(
          vbit(
            varg),
          varg,
          action),
      put(
        objs,
        fx,
        obj),
      obj] /*)*/)
  }

"GET WHAT I MEAN - GWIM\n TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY"

FUNCTIONS.gwim = 
  (bit,
    fword,
    action) => {
    
    let aobj = vtrnn(
        fword,
        GLOBALS.vabit);
    let ntake = vtrnn(
        fword,
        GLOBALS.vtbit);
    let robj = vtrnn(
        fword,
        GLOBALS.vrbit);
    let obj = null;
    let nobj = null;
    let pv = GLOBALS.prsvec;
    let savobj = null;
    let av = avehicle(
        GLOBALS.winner);
    let sf = null;
    and(
    aobj,
    obj = fwim(
        bit,
        aobjs(
          GLOBALS.winner),
        ntake))
cond(
    /*(*/ [robj,
      cond(
        /*(*/ [and(
            nobj = fwim(
                bit,
                robjs(
                  GLOBALS.here),
                ntake),
            or(
              not(
                av),
              _EQ_Q(
                av,
                nobj),
              memq(
                nobj,
                ocontents(
                  av)),
              trnn(
                nobj,
                GLOBALS.findmebit))),
          cond(
            /*(*/ [and(
                or(
                  savobj = pv[2],
                  t),
                not(
                  obj),
                or(
                  sf = pv[1],
                  t),
                put(
                  pv,
                  1,
                  GLOBALS.take_X_words),
                put(
                  pv,
                  2,
                  nobj),
                or(
                  _EQ_Q(
                    action,
                    pv[1]),
                  ntake,
                  take(
                    )),
                put(
                  pv,
                  2,
                  savobj),
                put(
                  pv,
                  1,
                  sf),
                nobj)] /*)*/,
            /*(*/ [put(
                pv,
                2,
                savobj),
              null] /*)*/)] /*)*/,
        /*(*/ [or(
            nobj,
            not(
              empty_Q(
                nobj))),
          GLOBALS.nefals] /*)*/,
        /*(*/ [obj] /*)*/)] /*)*/,
    /*(*/ [obj] /*)*/)
  }

// [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]

FUNCTIONS.make_action = 
  ("TUPLE",
  specs) => {
    "AUX",
  vv,
  sum,
  /*(*/ [prep,
      null] /*)*/,
  atm
    chtype(
    mapf(
      GLOBALS.uvector,
      /* FUNCTION */
        (sp) => {
          
          let syn = ivector(
              5,
              null);
          let whr = 1;
          mapf(
          null,
          /* FUNCTION */
            (itm) => {
              
              cond(
              /*(*/ [type_Q(
                  itm,
                  string),
                prep = find_prep(
                    itm)] /*)*/,
              /*(*/ [and(
                  _EQ_Q(
                    itm,
                    obj),
                  itm = () => /*(*/ [_1] /*)*/,
                  null)] /*)*/,
              /*(*/ [type_Q(
                  itm,
                  list),
                vv = ivector(
                    3),
                put(
                  vv,
                  1,
                  itm[1]),
                put(
                  vv,
                  2,
                  prep),
                sum = 0,
                prep = null,
                and(
                  memq(
                    aobjs,
                    itm),
                  sum = _(
                      sum,
                      GLOBALS.vabit)),
                and(
                  memq(
                    robjs,
                    itm),
                  sum = _(
                      sum,
                      GLOBALS.vrbit)),
                and(
                  memq(
                    no_take,
                    itm),
                  sum = _(
                      sum,
                      GLOBALS.vtbit)),
                and(
                  memq(
                    _,
                    itm),
                  sum = _(
                      sum,
                      GLOBALS.vxbit)),
                put(
                  vv,
                  3,
                  sum),
                put(
                  syn,
                  whr,
                  chtype(
                    vv,
                    varg)),
                whr = _(
                    whr,
                    1)] /*)*/,
              /*(*/ [type_Q(
                  itm,
                  vector),
                cond(
                  /*(*/ [gassigned_Q(
                      atm = add_word(
                          itm[1])),
                    put(
                      syn,
                      GLOBALS.sfcn,
                      /*,*/ [atm] /*1*/)] /*)*/,
                  /*(*/ [put(
                      syn,
                      GLOBALS.sfcn,
                      setg(
                        atm = add_word(
                            itm[1]),
                        chtype(
                          /*[*/ [atm,
                            itm[2]] /*]*/,
                          verb)))] /*)*/)] /*)*/,
              /*(*/ [_EQ_Q(
                  itm,
                  driver),
                put(
                  syn,
                  GLOBALS.sdriver,
                  t)] /*)*/,
              /*(*/ [_EQ_Q(
                  itm,
                  flip),
                put(
                  syn,
                  GLOBALS.sflip,
                  t)] /*)*/)
            },
          sp)
or(
          syn1(
            syn),
          put(
            syn,
            GLOBALS.syn1,
            GLOBALS.evarg))
or(
          syn2(
            syn),
          put(
            syn,
            GLOBALS.syn2,
            GLOBALS.evarg))
chtype(
          syn,
          syntax)
        },
      specs),
    vspec)
  }

GLOBALS.evarg = chtype(
    /*[*/ [0,
      null,
      0] /*]*/,
    varg)

FUNCTIONS.syn_equal = 
  (varg,
    pobj) => {
    
    let vbit = vbit(
        varg);
    cond(
    /*(*/ [type_Q(
        pobj,
        phrase),
      and(
        _EQ_Q(
          vprep(
            varg),
          pobj[1]),
        or(
          not(
            vtrnn(
              varg,
              GLOBALS.vxbit)),
          trnn(
            pobj[2],
            vbit)))] /*)*/,
    /*(*/ [type_Q(
        pobj,
        object),
      and(
        not(
          vprep(
            varg)),
        or(
          not(
            vtrnn(
              varg,
              GLOBALS.vxbit)),
          trnn(
            pobj,
            vbit)))] /*)*/,
    /*(*/ [and(
        not(
          pobj),
        0_Q(
          vbit))] /*)*/)
  }

GLOBALS.directions = moblist(
    directions)

FUNCTIONS.eparse = 
  (pv,
    vb) => {
    
    let val = null;
    cond(
    /*(*/ [val = sparse(
          pv,
          vb),
      cond(
        /*(*/ [or(
            _EQ_Q(
              val,
              win),
            syn_match(
              val)),
          orphan(
            null)] /*)*/,
        /*(*/ [or(
            vb,
            tell(
              "")),
          null] /*)*/)] /*)*/,
    /*(*/ [or(
        vb,
        tell(
          "")),
      null] /*)*/)
  }

GLOBALS.scrstr = rest(
    istring(
      5),
    5)

GLOBALS.ssv = ivector(
    10,
    null)

"GET-OBJECT:  TAKES ATOM (FROM OBJECTS OBLIST), VERBOSITY FLAG.  GROVELS\nOVER: ,STARS; ,HERE; ,WINNER LOOKING FOR OBJECT (LOOKS DOWN TO ONE LEVEL\nOF CONTAINMENT).  RETURNS <> IF NOT FOUND OR FOUND MORE THAN ONE, THE\nOBJECT OTHERWISE."

define(
  get_object,
  get_obj,
  /*(*/ [objnam,
    adj,
    "AUX",
    obj,
    /*(*/ [oobj,
      null] /*)*/,
    /*(*/ [here,
      GLOBALS.here] /*)*/,
    /*(*/ [av,
      avehicle(
        GLOBALS.winner)] /*)*/,
    /*(*/ [chomp,
      null] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [oobj,
        obj,
        av] /*)*/,
      or(
        object,
        false),
      /*(*/ [objnam] /*)*/,
      atom,
      /*(*/ [here] /*)*/,
      room,
      /*(*/ [adj] /*)*/,
      or(
        adjective,
        false),
      /*(*/ [chomp] /*)*/,
      or(
        atom,
        false),
      /*(*/ [objl] /*)*/,
      or(
        false,
        list(
          /*[*/ [rest,
            object] /*]*/))] /*)*/] /*2*/,
  cond(
    /*(*/ [obj = search_list(
          objnam,
          GLOBALS.stars,
          adj),
      oobj = obj] /*)*/,
    /*(*/ [not(
        empty_Q(
          obj)),
      return(
        GLOBALS.nefals,
        get_obj)] /*)*/),
  cond(
    /*(*/ [and(
        lit_Q(
          here),
        obj = search_list(
            objnam,
            robjs(
              GLOBALS.here),
            adj)),
      cond(
        /*(*/ [and(
            av,
            n_EQ_Q(
              obj,
              av),
            not(
              memq(
                obj,
                ocontents(
                  av))),
            not(
              trnn(
                obj,
                GLOBALS.findmebit))),
          chomp = t] /*)*/,
        /*(*/ [oobj,
          return(
            GLOBALS.nefals,
            get_obj)] /*)*/,
        /*(*/ [oobj = obj] /*)*/)] /*)*/,
    /*(*/ [and(
        not(
          obj),
        not(
          empty_Q(
            obj))),
      return(
        GLOBALS.nefals,
        get_obj)] /*)*/),
  cond(
    /*(*/ [av,
      cond(
        /*(*/ [obj = search_list(
              objnam,
              ocontents(
                av),
              adj),
          chomp = null,
          oobj = obj] /*)*/,
        /*(*/ [not(
            empty_Q(
              obj)),
          return(
            GLOBALS.nefals,
            get_obj)] /*)*/)] /*)*/),
  cond(
    /*(*/ [obj = search_list(
          objnam,
          aobjs(
            GLOBALS.winner),
          adj),
      cond(
        /*(*/ [oobj,
          GLOBALS.nefals] /*)*/,
        /*(*/ [obj] /*)*/)] /*)*/,
    /*(*/ [not(
        empty_Q(
          obj)),
      GLOBALS.nefals] /*)*/,
    /*(*/ [chomp,
      GLOBALS.nefals2] /*)*/,
    /*(*/ [oobj] /*)*/))

"SEARCH-LIST:  TAKES OBJECT NAME, LIST OF OBJECTS, AND VERBOSITY.\nIF FINDS ONE FROB UNDER THAT NAME ON LIST, RETURNS IT.  SEARCH IS TO\nONE LEVEL OF CONTAINMENT."

GLOBALS.nefals = /*#*/ [false,
    /*(*/ [1] /*)*/] /*2*/

GLOBALS.nefals2 = /*#*/ [false,
    /*(*/ [2] /*)*/] /*2*/

define(
  search_list,
  sl,
  /*(*/ [objnam,
    slist,
    adj,
    "OPTIONAL",
    /*(*/ [first_Q,
      t] /*)*/,
    "AUX",
    /*(*/ [oobj,
      null] /*)*/,
    /*(*/ [nefals,
      GLOBALS.nefals] /*)*/,
    nobj] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [objnam] /*)*/,
      atom,
      /*(*/ [slist] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [oobj,
        nobj] /*)*/,
      or(
        false,
        object),
      /*(*/ [adj] /*)*/,
      or(
        false,
        adjective),
      /*(*/ [first_Q] /*)*/,
      or(
        atom,
        false),
      /*(*/ [nefals] /*)*/,
      false] /*)*/] /*2*/,
  mapf(
    null,
    /* FUNCTION */
      (obj) => {
        
        cond(
        /*(*/ [this_it_Q(
            objnam,
            obj,
            adj),
          cond(
            /*(*/ [oobj,
              return(
                nefals,
                sl)] /*)*/,
            /*(*/ [oobj = obj] /*)*/)] /*)*/)
cond(
        /*(*/ [and(
            ovis_Q(
              obj),
            or(
              oopen_Q(
                obj),
              transparent_Q(
                obj)),
            or(
              first_Q,
              trnn(
                obj,
                GLOBALS.searchbit))),
          cond(
            /*(*/ [nobj = search_list(
                  objnam,
                  ocontents(
                    obj),
                  adj,
                  null),
              cond(
                /*(*/ [oobj,
                  return(
                    nefals,
                    sl)] /*)*/,
                /*(*/ [oobj = nobj] /*)*/)] /*)*/,
            /*(*/ [_EQ_Q(
                nobj,
                nefals),
              return(
                nefals,
                sl)] /*)*/)] /*)*/)
      },
    slist),
  oobj)

"FWIM:  TAKE LIST OF FROBS, FIND ONE THAT CAN BE MANIPULATED (VISIBLE\nAND TAKEABLE, OR VISIBLE AND IN SOMETHING THAT'S VISIBLE AND OPEN)"

define(
  fwim,
  dwim,
  /*(*/ [bit,
    objs,
    no_take,
    "AUX",
    /*(*/ [nobj,
      null] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [no_take] /*)*/,
      or(
        atom,
        false),
      /*(*/ [bit] /*)*/,
      fix,
      /*(*/ [objs] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [nobj] /*)*/,
      or(
        false,
        object)] /*)*/] /*2*/,
  mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [and(
            ovis_Q(
              x),
            or(
              no_take,
              can_take_Q(
                x)),
            trnn(
              x,
              bit)),
          cond(
            /*(*/ [nobj,
              return(
                GLOBALS.nefals,
                dwim)] /*)*/),
          nobj = x] /*)*/)
cond(
        /*(*/ [and(
            ovis_Q(
              x),
            oopen_Q(
              x)),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                cond(
                /*(*/ [and(
                    ovis_Q(
                      x),
                    trnn(
                      x,
                      bit)),
                  cond(
                    /*(*/ [nobj,
                      return(
                        GLOBALS.nefals,
                        dwim)] /*)*/,
                    /*(*/ [nobj = x] /*)*/)] /*)*/)
              },
            ocontents(
              x))] /*)*/)
      },
    objs),
  nobj)