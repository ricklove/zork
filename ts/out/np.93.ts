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
            LOCALS.pv),
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
        LOCALS.orph)] /*)*/,
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
  LOCALS.val = mapf(
      null,
      /* FUNCTION */
        (x) => {
          
          cond(
          /*(*/ [empty_Q(
              LOCALS.x),
            mapleave(
              t)] /*)*/,
          /*(*/ [and(
              not(
                LOCALS.action),
              LOCALS.atm = lookup(
                  LOCALS.x,
                  LOCALS.actions)),
            LOCALS.action = /*,*/ [LOCALS.atm] /*1*/] /*)*/,
          /*(*/ [and(
              not(
                LOCALS.action),
              LOCALS.atm = lookup(
                  LOCALS.x,
                  LOCALS.dirs)),
            put(
              LOCALS.pv,
              1,
              GLOBALS.walk_X_words),
            put(
              LOCALS.pv,
              2,
              /*,*/ [LOCALS.atm] /*1*/),
            return(
              win,
              LOCALS.sparout)] /*)*/,
          /*(*/ [and(
              LOCALS.atm = lookup(
                  LOCALS.x,
                  LOCALS.words),
              cond(
                /*(*/ [type_Q(
                    LOCALS.aval = /*,*/ [LOCALS.atm] /*1*/,
                    prep),
                  cond(
                    /*(*/ [LOCALS.prep,
                      or(
                        LOCALS.vb,
                        tell(
                          "Double preposition?",
                          0)),
                      mapleave(
                        null)] /*)*/,
                    /*(*/ [LOCALS.prep = LOCALS.aval] /*)*/)] /*)*/,
                /*(*/ [type_Q(
                    LOCALS.aval,
                    adjective),
                  LOCALS.adj = LOCALS.aval,
                  not(
                    and(
                      LOCALS.orfl,
                      LOCALS.atm = oname(
                          LOCALS.orph),
                      LOCALS.x = spname(
                          LOCALS.atm)))] /*)*/,
                /*(*/ [t] /*)*/))] /*)*/,
          /*(*/ [LOCALS.atm = lookup(
                LOCALS.x,
                LOCALS.objob),
            cond(
              /*(*/ [LOCALS.obj = get_object(
                    LOCALS.atm,
                    LOCALS.adj),
                and(
                  empty_Q(
                    LOCALS.pvr),
                  or(
                    LOCALS.vb,
                    tell(
                      "Too many objects specified?",
                      0)),
                  mapleave(
                    null)),
                put(
                  LOCALS.pvr,
                  1,
                  cond(
                    /*(*/ [LOCALS.prep,
                      LOCALS.pprep = 1(
                          LOCALS.prv),
                      LOCALS.prv = rest(
                          LOCALS.prv),
                      put(
                        LOCALS.pprep,
                        1,
                        LOCALS.prep),
                      LOCALS.prep = null,
                      put(
                        LOCALS.pprep,
                        2,
                        LOCALS.obj)] /*)*/,
                    /*(*/ [LOCALS.obj] /*)*/)),
                LOCALS.pvr = rest(
                    LOCALS.pvr)] /*)*/,
              /*(*/ [t,
                cond(
                  /*(*/ [empty_Q(
                      LOCALS.obj),
                    or(
                      LOCALS.vb,
                      cond(
                        /*(*/ [lit_Q(
                            LOCALS.here),
                          tell(
                            "I can't see a",
                            0),
                          cond(
                            /*(*/ [LOCALS.adj,
                              tell(
                                "",
                                0,
                                prstr(
                                  chtype(
                                    LOCALS.adj,
                                    atom)))] /*)*/),
                          tell(
                            "",
                            0,
                            prstr(
                              LOCALS.atm),
                            "here.")] /*)*/,
                        /*(*/ [tell(
                            "It is too dark in here to see.",
                            0)] /*)*/))] /*)*/,
                  /*(*/ [_EQ_Q(
                      LOCALS.obj,
                      GLOBALS.nefals2),
                    or(
                      LOCALS.vb,
                      tell(
                        "I can't reach that from inside the",
                        0,
                        odesc2(
                          avehicle(
                            GLOBALS.winner)),
                        "."))] /*)*/,
                  /*(*/ [or(
                      LOCALS.vb,
                      tell(
                        "Which",
                        0,
                        prstr(
                          LOCALS.atm),
                        "?")),
                    orphan(
                      t,
                      or(
                        LOCALS.action,
                        and(
                          LOCALS.orfl,
                          overb(
                            LOCALS.orph))),
                      2(
                        LOCALS.pv),
                      LOCALS.prep,
                      LOCALS.atm)] /*)*/),
                mapleave(
                  null)] /*)*/),
            LOCALS.adj = null,
            t] /*)*/,
          /*(*/ [or(
              LOCALS.vb,
              tell(
                "I don't know the word",
                0,
                LOCALS.x)),
            mapleave(
              null)] /*)*/)
        },
      LOCALS.sv),
  cond(
    /*(*/ [LOCALS.val,
      cond(
        /*(*/ [and(
            not(
              LOCALS.action),
            not(
              LOCALS.action = and(
                  LOCALS.orfl,
                  overb(
                    LOCALS.orph)))),
          or(
            LOCALS.vb,
            cond(
              /*(*/ [type_Q(
                  2(
                    LOCALS.pv),
                  object),
                tell(
                  "What should I do with the",
                  0,
                  odesc2(
                    2(
                      LOCALS.pv)),
                  "?")] /*)*/,
              /*(*/ [tell(
                  "Huh?",
                  0)] /*)*/)),
          orphan(
            t,
            null,
            2(
              LOCALS.pv)),
          null] /*)*/,
        /*(*/ [and(
            put(
              LOCALS.pv,
              1,
              LOCALS.action),
            LOCALS.adj),
          or(
            LOCALS.vb,
            tell(
              "Dangling adjective?",
              0)),
          null] /*)*/,
        /*(*/ [and(
            LOCALS.orfl,
            LOCALS.nprep = oprep(
                LOCALS.orph),
            LOCALS.obj = 2(
                LOCALS.pv),
            put(
              LOCALS.pprep = 1(
                  LOCALS.prv),
              1,
              LOCALS.nprep),
            put(
              LOCALS.pprep,
              2,
              LOCALS.obj),
            cond(
              /*(*/ [LOCALS.obj = oslot1(
                    LOCALS.orph),
                put(
                  LOCALS.pv,
                  2,
                  LOCALS.obj),
                put(
                  LOCALS.pv,
                  3,
                  LOCALS.pprep)] /*)*/,
              /*(*/ [put(
                  LOCALS.pv,
                  2,
                  LOCALS.pprep)] /*)*/),
            null)] /*)*/,
        /*(*/ [LOCALS.prep,
          and(
            type_Q(
              LOCALS.lobj = 1(
                  back(
                    LOCALS.pvr)),
              object),
            top(
              put(
                back(
                  LOCALS.pvr),
                1,
                put(
                  put(
                    1(
                      LOCALS.prv),
                    1,
                    LOCALS.prep),
                  2,
                  LOCALS.lobj))))] /*)*/,
        /*(*/ [LOCALS.pv] /*)*/)] /*)*/))

FUNCTIONS.sp = 
  (str) => {
    
    parse(
    lex(
      LOCALS.str),
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
            LOCALS.name),
          GLOBALS.oprep,
          LOCALS.prep),
        GLOBALS.oslot1,
        LOCALS.slot1),
      GLOBALS.overb,
      LOCALS.action),
    GLOBALS.oflag,
    LOCALS.flag)
  }

FUNCTIONS.syn_match = 
  (pv) => {
    
    let action = 1(
        LOCALS.pv);
    let objs = rest(
        LOCALS.pv);
    let o1 = 1(
        LOCALS.objs);
    let o2 = 2(
        LOCALS.objs);
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
                  LOCALS.syn),
                LOCALS.o1),
              cond(
                /*(*/ [syn_equal(
                    syn2(
                      LOCALS.syn),
                    LOCALS.o2),
                  and(
                    sflip(
                      LOCALS.syn),
                    put(
                      LOCALS.objs,
                      1,
                      LOCALS.o2),
                    put(
                      LOCALS.objs,
                      2,
                      LOCALS.o1)),
                  mapleave(
                    take_it_or_leave_it(
                      LOCALS.syn,
                      put(
                        LOCALS.pv,
                        1,
                        sfcn(
                          LOCALS.syn))))] /*)*/,
                /*(*/ [not(
                    LOCALS.o2),
                  cond(
                    /*(*/ [sdriver(
                        LOCALS.syn),
                      LOCALS.dforce = LOCALS.syn] /*)*/,
                    /*(*/ [LOCALS.drive = LOCALS.syn] /*)*/),
                  null] /*)*/)] /*)*/,
            /*(*/ [not(
                LOCALS.o1),
              cond(
                /*(*/ [sdriver(
                    LOCALS.syn),
                  LOCALS.dforce = LOCALS.syn] /*)*/,
                /*(*/ [LOCALS.drive = LOCALS.syn] /*)*/),
              null] /*)*/)
          },
        vdecl(
          LOCALS.action))] /*)*/,
    /*(*/ [LOCALS.drive = or(
          LOCALS.dforce,
          LOCALS.drive),
      cond(
        /*(*/ [and(
            LOCALS.synn = syn1(
                LOCALS.drive),
            not(
              LOCALS.o1),
            not(
              0_Q(
                vbit(
                  LOCALS.synn))),
            not(
              orfeo(
                LOCALS.synn,
                LOCALS.objs)),
            not(
              LOCALS.o1 = LOCALS.gwim = gwim_slot(
                    1,
                    LOCALS.synn,
                    LOCALS.action,
                    LOCALS.objs))),
          orphan(
            t,
            LOCALS.action,
            null,
            vprep(
              LOCALS.synn)),
          ortell(
            LOCALS.synn,
            LOCALS.action,
            LOCALS.gwim)] /*)*/,
        /*(*/ [and(
            LOCALS.synn = syn2(
                LOCALS.drive),
            not(
              LOCALS.o2),
            not(
              0_Q(
                vbit(
                  LOCALS.synn))),
            not(
              gwim_slot(
                2,
                LOCALS.synn,
                LOCALS.action,
                LOCALS.objs))),
          orphan(
            t,
            LOCALS.action,
            LOCALS.o1,
            vprep(
              LOCALS.synn)),
          ortell(
            LOCALS.synn,
            LOCALS.action,
            LOCALS.gwim)] /*)*/,
        /*(*/ [take_it_or_leave_it(
            LOCALS.drive,
            put(
              LOCALS.pv,
              1,
              sfcn(
                LOCALS.drive)))] /*)*/)] /*)*/,
    /*(*/ [tell(
        "I can't make sense out of that.",
        0),
      null] /*)*/)
  }

FUNCTIONS.take_it_or_leave_it = 
  (syn,
    pv) => {
    
    let pv1 = 2(
        LOCALS.pv);
    let pv2 = 3(
        LOCALS.pv);
    let obj = null;
    let varg = null;
    put(
    LOCALS.pv,
    2,
    LOCALS.obj = cond(
        /*(*/ [type_Q(
            LOCALS.pv1,
            object),
          LOCALS.pv1] /*)*/,
        /*(*/ [type_Q(
            LOCALS.pv1,
            phrase),
          2(
            LOCALS.pv1)] /*)*/))
cond(
    /*(*/ [vtrnn(
        LOCALS.varg = syn1(
            LOCALS.syn),
        GLOBALS.vrbit),
      take_it(
        LOCALS.obj,
        LOCALS.pv,
        LOCALS.varg)] /*)*/)
put(
    LOCALS.pv,
    3,
    LOCALS.obj = cond(
        /*(*/ [type_Q(
            LOCALS.pv2,
            object),
          LOCALS.pv2] /*)*/,
        /*(*/ [type_Q(
            LOCALS.pv2,
            phrase),
          2(
            LOCALS.pv2)] /*)*/))
cond(
    /*(*/ [vtrnn(
        LOCALS.varg = syn2(
            LOCALS.syn),
        GLOBALS.vrbit),
      take_it(
        LOCALS.obj,
        LOCALS.pv,
        LOCALS.varg)] /*)*/)
  }

FUNCTIONS.take_it = 
  (obj,
    vec,
    vrb) => {
    
    let sav1 = 1(
        LOCALS.vec);
    let sav2 = 2(
        LOCALS.vec);
    cond(
    /*(*/ [and(
        search_list(
          oid(
            LOCALS.obj),
          robjs(
            GLOBALS.here),
          null),
        or(
          can_take_Q(
            LOCALS.obj),
          not(
            vtrnn(
              LOCALS.vrb,
              GLOBALS.vtbit)))),
      put(
        LOCALS.vec,
        1,
        GLOBALS.take_X_words),
      put(
        LOCALS.vec,
        2,
        LOCALS.obj),
      take(
        t),
      put(
        LOCALS.vec,
        1,
        LOCALS.sav1),
      put(
        LOCALS.vec,
        2,
        LOCALS.sav2)] /*)*/)
  }

FUNCTIONS.orfeo = 
  (syn,
    objs) => {
    
    let orph = GLOBALS.orphans;
    let orfl = oflag(
        LOCALS.orph);
    let slot1 = null;
    cond(
    /*(*/ [not(
        LOCALS.orfl),
      null] /*)*/,
    /*(*/ [LOCALS.slot1 = oslot1(
          LOCALS.orph),
      and(
        syn_equal(
          LOCALS.syn,
          LOCALS.slot1),
        put(
          LOCALS.objs,
          1,
          LOCALS.slot1))] /*)*/)
  }

FUNCTIONS.ortell = 
  (varg,
    action,
    gwim) => {
    
    let prep = vprep(
        LOCALS.varg);
    let sp = null;
    cond(
    /*(*/ [LOCALS.prep,
      and(
        LOCALS.gwim,
        tell(
          vstr(
            LOCALS.action),
          0,
          ""),
        tell(
          odesc2(
            LOCALS.gwim),
          0,
          "")),
      tell(
        prstr(
          chtype(
            LOCALS.prep,
            atom)),
        0,
        "what?")] /*)*/,
    /*(*/ [tell(
        vstr(
          LOCALS.action),
        0,
        "what?")] /*)*/)
null
  }

FUNCTIONS.prstr = 
  (atm) => {
    
    let sp = null;
    foostr(
    LOCALS.sp = spname(
        LOCALS.atm),
    back(
      GLOBALS.scrstr,
      length(
        LOCALS.sp)),
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
            LOCALS.1st,
            _EQ_Q(
              LOCALS.x,
              LOCALS.nam)),
          put(
            LOCALS.y,
            1,
            1(
              LOCALS.x))] /*)*/,
        /*(*/ [put(
            LOCALS.y,
            1,
            chtype(
              _(
                32,
                ascii(
                  1(
                    LOCALS.x))),
              character))] /*)*/)
      },
    LOCALS.nam,
    LOCALS.str)
  }

FUNCTIONS.gwim_slot = 
  (fx,
    varg,
    action,
    objs) => {
    
    let obj = null;
    cond(
    /*(*/ [LOCALS.obj = gwim(
          vbit(
            LOCALS.varg),
          LOCALS.varg,
          LOCALS.action),
      put(
        LOCALS.objs,
        LOCALS.fx,
        LOCALS.obj),
      LOCALS.obj] /*)*/)
  }

"GET WHAT I MEAN - GWIM\n TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY"

FUNCTIONS.gwim = 
  (bit,
    fword,
    action) => {
    
    let aobj = vtrnn(
        LOCALS.fword,
        GLOBALS.vabit);
    let ntake = vtrnn(
        LOCALS.fword,
        GLOBALS.vtbit);
    let robj = vtrnn(
        LOCALS.fword,
        GLOBALS.vrbit);
    let obj = null;
    let nobj = null;
    let pv = GLOBALS.prsvec;
    let savobj = null;
    let av = avehicle(
        GLOBALS.winner);
    let sf = null;
    and(
    LOCALS.aobj,
    LOCALS.obj = fwim(
        LOCALS.bit,
        aobjs(
          GLOBALS.winner),
        LOCALS.ntake))
cond(
    /*(*/ [LOCALS.robj,
      cond(
        /*(*/ [and(
            LOCALS.nobj = fwim(
                LOCALS.bit,
                robjs(
                  GLOBALS.here),
                LOCALS.ntake),
            or(
              not(
                LOCALS.av),
              _EQ_Q(
                LOCALS.av,
                LOCALS.nobj),
              memq(
                LOCALS.nobj,
                ocontents(
                  LOCALS.av)),
              trnn(
                LOCALS.nobj,
                GLOBALS.findmebit))),
          cond(
            /*(*/ [and(
                or(
                  LOCALS.savobj = 2(
                      LOCALS.pv),
                  t),
                not(
                  LOCALS.obj),
                or(
                  LOCALS.sf = 1(
                      LOCALS.pv),
                  t),
                put(
                  LOCALS.pv,
                  1,
                  GLOBALS.take_X_words),
                put(
                  LOCALS.pv,
                  2,
                  LOCALS.nobj),
                or(
                  _EQ_Q(
                    LOCALS.action,
                    1(
                      LOCALS.pv)),
                  LOCALS.ntake,
                  take(
                    )),
                put(
                  LOCALS.pv,
                  2,
                  LOCALS.savobj),
                put(
                  LOCALS.pv,
                  1,
                  LOCALS.sf),
                LOCALS.nobj)] /*)*/,
            /*(*/ [put(
                LOCALS.pv,
                2,
                LOCALS.savobj),
              null] /*)*/)] /*)*/,
        /*(*/ [or(
            LOCALS.nobj,
            not(
              empty_Q(
                LOCALS.nobj))),
          GLOBALS.nefals] /*)*/,
        /*(*/ [LOCALS.obj] /*)*/)] /*)*/,
    /*(*/ [LOCALS.obj] /*)*/)
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
                  LOCALS.itm,
                  string),
                LOCALS.prep = find_prep(
                    LOCALS.itm)] /*)*/,
              /*(*/ [and(
                  _EQ_Q(
                    LOCALS.itm,
                    obj),
                  LOCALS.itm = () => /*(*/ [_1] /*)*/,
                  null)] /*)*/,
              /*(*/ [type_Q(
                  LOCALS.itm,
                  list),
                LOCALS.vv = ivector(
                    3),
                put(
                  LOCALS.vv,
                  1,
                  1(
                    LOCALS.itm)),
                put(
                  LOCALS.vv,
                  2,
                  LOCALS.prep),
                LOCALS.sum = 0,
                LOCALS.prep = null,
                and(
                  memq(
                    aobjs,
                    LOCALS.itm),
                  LOCALS.sum = _(
                      LOCALS.sum,
                      GLOBALS.vabit)),
                and(
                  memq(
                    robjs,
                    LOCALS.itm),
                  LOCALS.sum = _(
                      LOCALS.sum,
                      GLOBALS.vrbit)),
                and(
                  memq(
                    no_take,
                    LOCALS.itm),
                  LOCALS.sum = _(
                      LOCALS.sum,
                      GLOBALS.vtbit)),
                and(
                  memq(
                    _,
                    LOCALS.itm),
                  LOCALS.sum = _(
                      LOCALS.sum,
                      GLOBALS.vxbit)),
                put(
                  LOCALS.vv,
                  3,
                  LOCALS.sum),
                put(
                  LOCALS.syn,
                  LOCALS.whr,
                  chtype(
                    LOCALS.vv,
                    varg)),
                LOCALS.whr = _(
                    LOCALS.whr,
                    1)] /*)*/,
              /*(*/ [type_Q(
                  LOCALS.itm,
                  vector),
                cond(
                  /*(*/ [gassigned_Q(
                      LOCALS.atm = add_word(
                          1(
                            LOCALS.itm))),
                    put(
                      LOCALS.syn,
                      GLOBALS.sfcn,
                      /*,*/ [LOCALS.atm] /*1*/)] /*)*/,
                  /*(*/ [put(
                      LOCALS.syn,
                      GLOBALS.sfcn,
                      setg(
                        LOCALS.atm = add_word(
                            1(
                              LOCALS.itm)),
                        chtype(
                          /*[*/ [LOCALS.atm,
                            2(
                              LOCALS.itm)] /*]*/,
                          verb)))] /*)*/)] /*)*/,
              /*(*/ [_EQ_Q(
                  LOCALS.itm,
                  driver),
                put(
                  LOCALS.syn,
                  GLOBALS.sdriver,
                  t)] /*)*/,
              /*(*/ [_EQ_Q(
                  LOCALS.itm,
                  flip),
                put(
                  LOCALS.syn,
                  GLOBALS.sflip,
                  t)] /*)*/)
            },
          LOCALS.sp)
or(
          syn1(
            LOCALS.syn),
          put(
            LOCALS.syn,
            GLOBALS.syn1,
            GLOBALS.evarg))
or(
          syn2(
            LOCALS.syn),
          put(
            LOCALS.syn,
            GLOBALS.syn2,
            GLOBALS.evarg))
chtype(
          LOCALS.syn,
          syntax)
        },
      LOCALS.specs),
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
        LOCALS.varg);
    cond(
    /*(*/ [type_Q(
        LOCALS.pobj,
        phrase),
      and(
        _EQ_Q(
          vprep(
            LOCALS.varg),
          1(
            LOCALS.pobj)),
        or(
          not(
            vtrnn(
              LOCALS.varg,
              GLOBALS.vxbit)),
          trnn(
            2(
              LOCALS.pobj),
            LOCALS.vbit)))] /*)*/,
    /*(*/ [type_Q(
        LOCALS.pobj,
        object),
      and(
        not(
          vprep(
            LOCALS.varg)),
        or(
          not(
            vtrnn(
              LOCALS.varg,
              GLOBALS.vxbit)),
          trnn(
            LOCALS.pobj,
            LOCALS.vbit)))] /*)*/,
    /*(*/ [and(
        not(
          LOCALS.pobj),
        0_Q(
          LOCALS.vbit))] /*)*/)
  }

GLOBALS.directions = moblist(
    directions)

FUNCTIONS.eparse = 
  (pv,
    vb) => {
    
    let val = null;
    cond(
    /*(*/ [LOCALS.val = sparse(
          LOCALS.pv,
          LOCALS.vb),
      cond(
        /*(*/ [or(
            _EQ_Q(
              LOCALS.val,
              win),
            syn_match(
              LOCALS.val)),
          orphan(
            null)] /*)*/,
        /*(*/ [or(
            LOCALS.vb,
            tell(
              "")),
          null] /*)*/)] /*)*/,
    /*(*/ [or(
        LOCALS.vb,
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
    /*(*/ [LOCALS.obj = search_list(
          LOCALS.objnam,
          GLOBALS.stars,
          LOCALS.adj),
      LOCALS.oobj = LOCALS.obj] /*)*/,
    /*(*/ [not(
        empty_Q(
          LOCALS.obj)),
      return(
        GLOBALS.nefals,
        LOCALS.get_obj)] /*)*/),
  cond(
    /*(*/ [and(
        lit_Q(
          LOCALS.here),
        LOCALS.obj = search_list(
            LOCALS.objnam,
            robjs(
              GLOBALS.here),
            LOCALS.adj)),
      cond(
        /*(*/ [and(
            LOCALS.av,
            n_EQ_Q(
              LOCALS.obj,
              LOCALS.av),
            not(
              memq(
                LOCALS.obj,
                ocontents(
                  LOCALS.av))),
            not(
              trnn(
                LOCALS.obj,
                GLOBALS.findmebit))),
          LOCALS.chomp = t] /*)*/,
        /*(*/ [LOCALS.oobj,
          return(
            GLOBALS.nefals,
            LOCALS.get_obj)] /*)*/,
        /*(*/ [LOCALS.oobj = LOCALS.obj] /*)*/)] /*)*/,
    /*(*/ [and(
        not(
          LOCALS.obj),
        not(
          empty_Q(
            LOCALS.obj))),
      return(
        GLOBALS.nefals,
        LOCALS.get_obj)] /*)*/),
  cond(
    /*(*/ [LOCALS.av,
      cond(
        /*(*/ [LOCALS.obj = search_list(
              LOCALS.objnam,
              ocontents(
                LOCALS.av),
              LOCALS.adj),
          LOCALS.chomp = null,
          LOCALS.oobj = LOCALS.obj] /*)*/,
        /*(*/ [not(
            empty_Q(
              LOCALS.obj)),
          return(
            GLOBALS.nefals,
            LOCALS.get_obj)] /*)*/)] /*)*/),
  cond(
    /*(*/ [LOCALS.obj = search_list(
          LOCALS.objnam,
          aobjs(
            GLOBALS.winner),
          LOCALS.adj),
      cond(
        /*(*/ [LOCALS.oobj,
          GLOBALS.nefals] /*)*/,
        /*(*/ [LOCALS.obj] /*)*/)] /*)*/,
    /*(*/ [not(
        empty_Q(
          LOCALS.obj)),
      GLOBALS.nefals] /*)*/,
    /*(*/ [LOCALS.chomp,
      GLOBALS.nefals2] /*)*/,
    /*(*/ [LOCALS.oobj] /*)*/))

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
            LOCALS.objnam,
            LOCALS.obj,
            LOCALS.adj),
          cond(
            /*(*/ [LOCALS.oobj,
              return(
                LOCALS.nefals,
                LOCALS.sl)] /*)*/,
            /*(*/ [LOCALS.oobj = LOCALS.obj] /*)*/)] /*)*/)
cond(
        /*(*/ [and(
            ovis_Q(
              LOCALS.obj),
            or(
              oopen_Q(
                LOCALS.obj),
              transparent_Q(
                LOCALS.obj)),
            or(
              LOCALS.first_Q,
              trnn(
                LOCALS.obj,
                GLOBALS.searchbit))),
          cond(
            /*(*/ [LOCALS.nobj = search_list(
                  LOCALS.objnam,
                  ocontents(
                    LOCALS.obj),
                  LOCALS.adj,
                  null),
              cond(
                /*(*/ [LOCALS.oobj,
                  return(
                    LOCALS.nefals,
                    LOCALS.sl)] /*)*/,
                /*(*/ [LOCALS.oobj = LOCALS.nobj] /*)*/)] /*)*/,
            /*(*/ [_EQ_Q(
                LOCALS.nobj,
                LOCALS.nefals),
              return(
                LOCALS.nefals,
                LOCALS.sl)] /*)*/)] /*)*/)
      },
    LOCALS.slist),
  LOCALS.oobj)

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
              LOCALS.x),
            or(
              LOCALS.no_take,
              can_take_Q(
                LOCALS.x)),
            trnn(
              LOCALS.x,
              LOCALS.bit)),
          cond(
            /*(*/ [LOCALS.nobj,
              return(
                GLOBALS.nefals,
                LOCALS.dwim)] /*)*/),
          LOCALS.nobj = LOCALS.x] /*)*/)
cond(
        /*(*/ [and(
            ovis_Q(
              LOCALS.x),
            oopen_Q(
              LOCALS.x)),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                cond(
                /*(*/ [and(
                    ovis_Q(
                      LOCALS.x),
                    trnn(
                      LOCALS.x,
                      LOCALS.bit)),
                  cond(
                    /*(*/ [LOCALS.nobj,
                      return(
                        GLOBALS.nefals,
                        LOCALS.dwim)] /*)*/,
                    /*(*/ [LOCALS.nobj = LOCALS.x] /*)*/)] /*)*/)
              },
            ocontents(
              LOCALS.x))] /*)*/)
      },
    LOCALS.objs),
  LOCALS.nobj)