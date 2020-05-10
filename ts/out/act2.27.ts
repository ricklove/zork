FUNCTIONS.boom_room = 
  () => {
    
    let dummy_Q = null;
    let prsact = GLOBALS.prsvec[1];
    let win = GLOBALS.winner;
    let o = null;
    cond(
    /*(*/ [or(
        _EQ_Q(
          vname(
            prsact),
          walk_in_X_words),
        and(
          _EQ_Q(
            vname(
              prsact),
            on_X_words),
          dummy_Q = t)),
      cond(
        /*(*/ [or(
            and(
              memq(
                o = find_obj(
                    "CANDL"),
                aobjs(
                  win)),
              1_Q(
                olight_Q(
                  o))),
            and(
              memq(
                o = find_obj(
                    "TORCH"),
                aobjs(
                  win)),
              1_Q(
                olight_Q(
                  o)))),
          unwind(
            prog(
              /*(*/ [] /*)*/,
              cond(
                /*(*/ [dummy_Q,
                  tell(
                    "I didn't realize that adventurers are stupid enough to light a",
                    1,
                    odesc2(
                      o),
                    "in a room which reeks of coal gas.\nFortunately, there is justice in the world.")] /*)*/,
                /*(*/ [tell(
                    "Oh dear.  It appears that the smell coming from this room was coal\ngas.  I would have thought twice about carrying a",
                    1,
                    odesc2(
                      o),
                    "in here.")] /*)*/),
              fweep(
                7),
              jigs_up(
                "BOOOOOOOOOOOM")),
            jigs_up(
              "BOOOOOOOOOOOM"))] /*)*/)] /*)*/)
  }

FUNCTIONS.bats_room = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    cond(
    /*(*/ [and(
        _EQ_Q(
          vname(
            prsact),
          walk_in_X_words),
        not(
          memq(
            find_obj(
              "GARLI"),
            aobjs(
              GLOBALS.winner)))),
      fly_me(
        )] /*)*/,
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a small room which has only one door, to the east."),
      and(
        memq(
          find_obj(
            "GARLI"),
          aobjs(
            GLOBALS.winner)),
        tell(
          "In the corner of the room on the ceiling is a large vampire bat who\nis obviously deranged and holding his nose."))] /*)*/)
  }

FUNCTIONS.fly_me = 
  () => {
    
    let bat_drops = GLOBALS.bat_drops;
    unwind(
    prog(
      /*(*/ [] /*)*/,
      fweep(
        4,
        1),
      tell(
        "A deranged giant vampire bat (a reject from WUMPUS) swoops down\nfrom his belfry and lifts you away...."),
      goto(
        find_room(
          pick_one(
            bat_drops)))),
    goto(
      find_room(
        pick_one(
          bat_drops))))
put(
    GLOBALS.prsvec,
    2,
    null)
room_desc(
    )
  }

FUNCTIONS.fweep = 
  (num,
    slp?) => {
    
    repeat(
    /*(*/ [/*(*/ [n,
        num] /*)*/] /*)*/,
    and(
      0_Q(
        n = _(
            n,
            1)),
      return(
        )),
    image(
      7),
    or(
      0_Q(
        slp),
      sleep(
        slp)))
  }

psetg(
  bat_drops,
  () => /*[*/ ["MINE1",
      "MINE2",
      "MINE3",
      "MINE4",
      "MINE5",
      "MINE6",
      "MINE7",
      "TLADD",
      "BLADD"] /*]*/)

gdecl(
  /*(*/ [bat_drops] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

GLOBALS.cage_top_X_flag = t

FUNCTIONS.dumbwaiter = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let tb = find_obj(
        "TBASK");
    let top = find_room(
        "TSHAF");
    let bot = find_room(
        "BSHAF");
    let fb = find_obj(
        "FBASK");
    let ct = GLOBALS.cage_top_X_flag;
    let here = GLOBALS.here;
    let dummy = GLOBALS.dummy;
    cond(
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.raise_X_words),
      cond(
        /*(*/ [ct,
          tell(
            pick_one(
              GLOBALS.dummy))] /*)*/,
        /*(*/ [remove_object(
            tb),
          remove_object(
            fb),
          insert_object(
            tb,
            top),
          insert_object(
            fb,
            bot),
          tell(
            "The basket is raised to the top of the shaft."),
          GLOBALS.cage_top_X_flag = t] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.lower_X_words),
      cond(
        /*(*/ [not(
            ct),
          tell(
            pick_one(
              dummy))] /*)*/,
        /*(*/ [remove_object(
            tb),
          remove_object(
            fb),
          insert_object(
            tb,
            bot),
          insert_object(
            fb,
            top),
          tell(
            "The basket is lowered to the bottom of the shaft."),
          GLOBALS.cage_top_X_flag = null,
          t] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.take_X_words),
      cond(
        /*(*/ [or(
            and(
              ct,
              _EQ_Q(
                here,
                top)),
            and(
              not(
                ct),
              _EQ_Q(
                here,
                bot))),
          tell(
            "The cage is securely fastened to the iron chain.")] /*)*/,
        /*(*/ [tell(
            "I can't see that here.")] /*)*/)] /*)*/)
  }

FUNCTIONS.machine_room = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a large room which seems to be air-conditioned.  In one\ncorner there is a machine (?) which is shaped somewhat like a clothes\ndryer.  On the 'panel' there is a switch which is labelled in a\ndialect of Swahili.  Fortunately, I know this dialect and the label\ntranslates to START.  The switch does not appear to be manipulable by\nany human hand (unless the fingers are about 1/16 by 1/4 inch).  On\nthe front of the machine is a large lid."),
      cond(
        /*(*/ [oopen_Q(
            find_obj(
              "MACHI")),
          tell(
            "The lid on the machine is open.")] /*)*/,
        /*(*/ [tell(
            "The lid on the machine is closed.")] /*)*/)] /*)*/)
  }

FUNCTIONS.machine_function = 
  () => {
    
    let dummy = GLOBALS.dummy;
    let prsact = GLOBALS.prsvec[1];
    let mach = find_obj(
        "MACHI");
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        find_room(
          "MACHI")),
      cond(
        /*(*/ [_EQ_Q(
            vname(
              prsact),
            open_X_words),
          cond(
            /*(*/ [oopen_Q(
                mach),
              tell(
                pick_one(
                  dummy))] /*)*/,
            /*(*/ [tell(
                "The lid opens."),
              put(
                mach,
                GLOBALS.oopen_Q,
                t)] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            vname(
              prsact),
            close_X_words),
          cond(
            /*(*/ [oopen_Q(
                mach),
              tell(
                "The lid closes."),
              put(
                mach,
                GLOBALS.oopen_Q,
                null),
              t] /*)*/,
            /*(*/ [tell(
                pick_one(
                  dummy))] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            prsact,
            GLOBALS.take_X_words)] /*)*/)] /*)*/)
  }

FUNCTIONS.mswitch_function = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let c = find_obj(
        "COAL");
    let imp = GLOBALS.prsvec[3];
    let d = null;
    let mach = find_obj(
        "MACHI");
    let screw = find_obj(
        "SCREW");
    cond(
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.turn_X_words),
      cond(
        /*(*/ [_EQ_Q(
            imp,
            screw),
          cond(
            /*(*/ [oopen_Q(
                mach),
              tell(
                "The machine doesn't seem to want to do anything.")] /*)*/,
            /*(*/ [tell(
                "The machine comes to life (figuratively) with a dazzling display of\ncolored lights and bizarre noises.  After a few moments, the\nexcitement abates."),
              cond(
                /*(*/ [memq(
                    c,
                    ocontents(
                      mach)),
                  put(
                    mach,
                    GLOBALS.ocontents,
                    splice_out(
                      c,
                      ocontents(
                        mach))),
                  put(
                    mach,
                    GLOBALS.ocontents,
                    /*(*/ [d = find_obj(
                          "DIAMO"),
                      _X,
                      ocontents(
                        mach)] /*)*/),
                  put(
                    d,
                    GLOBALS.ocan,
                    mach)] /*)*/,
                /*(*/ [not(
                    empty_Q(
                      ocontents(
                        mach))),
                  put(
                    mach,
                    GLOBALS.ocontents,
                    /*(*/ [d = find_obj(
                          "GUNK")] /*)*/)] /*)*/,
                /*(*/ [t] /*)*/)] /*)*/)] /*)*/,
        /*(*/ [tell(
            "It seems that a",
            1,
            odesc2(
              imp),
            "won't do.")] /*)*/)] /*)*/)
  }

FUNCTIONS.gunk_function = 
  () => {
    
    let g = find_obj(
        "GUNK");
    let m = ocan(
        g);
    cond(
    /*(*/ [m,
      put(
        m,
        GLOBALS.ocontents,
        splice_out(
          g,
          ocontents(
            m))),
      put(
        g,
        GLOBALS.ocan,
        null),
      tell(
        "The slag turns out to be rather insubstantial, and crumbles into dust\nat your touch.  It must not have been very valuable.")] /*)*/)
  }

GLOBALS.score_max = _(
    GLOBALS.score_max,
    GLOBALS.light_shaft = 10)

FUNCTIONS.no_objs = 
  () => {
    
    cond(
    /*(*/ [empty_Q(
        aobjs(
          GLOBALS.winner)),
      GLOBALS.empty_handed_X_flag = t] /*)*/,
    /*(*/ [GLOBALS.empty_handed_X_flag = null] /*)*/)
cond(
    /*(*/ [and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "BSHAF")),
        lit_Q(
          GLOBALS.here)),
      score_upd(
        GLOBALS.light_shaft),
      GLOBALS.light_shaft = 0] /*)*/)
  }

gdecl(
  /*(*/ [light_shaft] /*)*/,
  fix)

FUNCTIONS.cliff_function = 
  () => {
    
    cond(
    /*(*/ [memq(
        find_obj(
          "RBOAT"),
        aobjs(
          GLOBALS.winner)),
      GLOBALS.deflate_X_flag = null] /*)*/,
    /*(*/ [GLOBALS.deflate_X_flag = t] /*)*/)
  }

FUNCTIONS.stick_function = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        vname(
          prsact),
        wave_X_words),
      cond(
        /*(*/ [or(
            _EQ_Q(
              GLOBALS.here,
              find_room(
                "FALLS")),
            _EQ_Q(
              GLOBALS.here,
              find_room(
                "POG"))),
          cond(
            /*(*/ [not(
                GLOBALS.rainbow_X_flag),
              tro(
                find_obj(
                  "POT"),
                GLOBALS.ovison),
              tell(
                "Suddenly, the rainbow appears to become solid and, I venture,\nwalkable (I think the giveaway was the stairs and bannister)."),
              GLOBALS.rainbow_X_flag = t] /*)*/,
            /*(*/ [tell(
                "The rainbow seems to have become somewhat run-of-the-mill."),
              GLOBALS.rainbow_X_flag = null] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            GLOBALS.here,
            find_room(
              "RAINB")),
          GLOBALS.rainbow_X_flag = null,
          jigs_up(
            "The structural integrity of the rainbow seems to have left it,\nleaving you about 450 feet in the air, supported by water vapor.")] /*)*/,
        /*(*/ [tell(
            "Very good.")] /*)*/)] /*)*/)
  }

FUNCTIONS.falls_room = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.look_X_words),
      tell(
        "You are at the top of Aragain Falls, an enormous waterfall with a\ndrop of about 450 feet.  The only path here is on the north end.\nThere is a man-sized barrel here which you could fit into."),
      cond(
        /*(*/ [GLOBALS.rainbow_X_flag,
          tell(
            "A solid rainbow spans the falls.")] /*)*/,
        /*(*/ [tell(
            "A beautiful rainbow can be seen over the falls and to the east.")] /*)*/)] /*)*/)
  }

FUNCTIONS.digger = 
  () => {
    
    let prso = GLOBALS.prsvec[2];
    cond(
    /*(*/ [_EQ_Q(
        prso,
        find_obj(
          "SHOVE"))] /*)*/,
    /*(*/ [trnn(
        prso,
        GLOBALS.toolbit),
      tell(
        "Digging with the",
        1,
        odesc2(
          prso),
        "is slow and tedious.")] /*)*/,
    /*(*/ [tell(
        "Digging with a",
        1,
        odesc2(
          prso),
        "is silly.")] /*)*/)
  }

FUNCTIONS.dboat_function = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let here = GLOBALS.here;
    let prsi = GLOBALS.prsvec[3];
    let dboat = find_obj(
        "DBOAT");
    cond(
    /*(*/ [_EQ_Q(
        vname(
          prsact),
        infla_X_words),
      tell(
        "This boat will not inflate since some moron put a hole in it.")] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          prsact),
        plug_X_words),
      cond(
        /*(*/ [_EQ_Q(
            prsi,
            find_obj(
              "PUTTY")),
          tell(
            "Well done.  The boat is repaired."),
          cond(
            /*(*/ [not(
                oroom(
                  dboat)),
              drop_object(
                dboat),
              take_object(
                find_obj(
                  "IBOAT"))] /*)*/,
            /*(*/ [remove_object(
                find_obj(
                  "DBOAT")),
              insert_object(
                find_obj(
                  "IBOAT"),
                here)] /*)*/)] /*)*/,
        /*(*/ [with_tell(
            prsi)] /*)*/)] /*)*/)
  }

FUNCTIONS.rboat_function = 
  (arg?) => {
    
    let prsact = GLOBALS.prsvec[1];
    let rboat = find_obj(
        "RBOAT");
    let iboat = find_obj(
        "IBOAT");
    let here = GLOBALS.here;
    cond(
    /*(*/ [arg,
      null] /*)*/,
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.board_X_words),
      cond(
        /*(*/ [memq(
            find_obj(
              "STICK"),
            aobjs(
              GLOBALS.winner)),
          tell(
            "There is a hissing sound and the boat deflates."),
          remove_object(
            rboat),
          insert_object(
            find_obj(
              "DBOAT"),
            here),
          t] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsact,
        GLOBALS.disem_X_words),
      and(
        member(
          "RIVR",
          spname(
            rid(
              here))),
        jigs_up(
          "Unfortunately, that leaves you in the water, where you drown."))] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          prsact),
        defla_X_words),
      cond(
        /*(*/ [_EQ_Q(
            avehicle(
              GLOBALS.winner),
            rboat),
          tell(
            "You can't deflate the boat while you're in it.")] /*)*/,
        /*(*/ [not(
            memq(
              rboat,
              robjs(
                here))),
          tell(
            "The boat must be on the ground to be deflated.")] /*)*/,
        /*(*/ [tell(
            "The boat deflates."),
          GLOBALS.deflate_X_flag = t,
          remove_object(
            rboat),
          insert_object(
            iboat,
            here)] /*)*/)] /*)*/)
  }

FUNCTIONS.iboat_function = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let iboat = find_obj(
        "IBOAT");
    let rboat = find_obj(
        "RBOAT");
    let here = GLOBALS.here;
    cond(
    /*(*/ [_EQ_Q(
        vname(
          prsact),
        infla_X_words),
      cond(
        /*(*/ [not(
            memq(
              iboat,
              robjs(
                here))),
          tell(
            "The boat must be on the ground to be inflated.")] /*)*/,
        /*(*/ [memq(
            find_obj(
              "PUMP"),
            aobjs(
              GLOBALS.winner)),
          tell(
            "The boat inflates and appears seaworthy."),
          GLOBALS.deflate_X_flag = null,
          remove_object(
            iboat),
          insert_object(
            rboat,
            here)] /*)*/,
        /*(*/ [tell(
            "I don't think you have enough lung-power to inflate this boat.")] /*)*/)] /*)*/)
  }

FUNCTIONS.over_falls = 
  () => {
    
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.prsvec[1],
        GLOBALS.look_X_words)] /*)*/,
    /*(*/ [jigs_up(
        "Oh dear, you seem to have gone over Aragain Falls.  Not a very smart\nthing to do, apparently.")] /*)*/)
  }

GLOBALS.buoy_flag_X_flag = t

FUNCTIONS.shake = 
  () => {
    
    let prsobj = GLOBALS.prsvec[2];
    let here = GLOBALS.here;
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [and(
        not(
          oopen_Q(
            prsobj)),
        not(
          empty_Q(
            ocontents(
              prsobj))),
        tell(
          "It sounds like there is something inside the",
          1,
          odesc2(
            prsobj),
          "."))] /*)*/,
    /*(*/ [and(
        oopen_Q(
          prsobj),
        not(
          empty_Q(
            ocontents(
              prsobj)))),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            put(
            x,
            GLOBALS.ocan,
            null)
insert_object(
            x,
            here)
          },
        ocontents(
          prsobj)),
      put(
        prsobj,
        GLOBALS.ocontents,
        /*(*/ [] /*)*/),
      tell(
        "All of the objects spill onto the floor.")] /*)*/)
  }

FUNCTIONS.rivr4_room = 
  () => {
    
    and(
    memq(
      find_obj(
        "BUOY"),
      aobjs(
        GLOBALS.winner)),
    GLOBALS.buoy_flag_X_flag,
    tell(
      "Something seems funny about the feel of the buoy."),
    GLOBALS.buoy_flag_X_flag = null)
  }

FUNCTIONS.beach_room = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let shov = find_obj(
        "SHOVE");
    let here = GLOBALS.here;
    let cnt = null;
    cond(
    /*(*/ [and(
        _EQ_Q(
          vname(
            prsact),
          dig_X_words),
        _EQ_Q(
          shov,
          GLOBALS.prsvec[2])),
      put(
        here,
        GLOBALS.rvars,
        cnt = _(
            1,
            rvars(
              here))),
      cond(
        /*(*/ [g_Q(
            cnt,
            4),
          put(
            here,
            GLOBALS.rvars,
            0),
          jigs_up(
            "The hole collapses, smothering you.")] /*)*/,
        /*(*/ [_EQ_Q(
            cnt,
            4),
          tell(
            "You can see a small statue here in the sand."),
          tro(
            find_obj(
              "STATU"),
            GLOBALS.ovison),
          put(
            here,
            GLOBALS.rvars,
            cnt)] /*)*/,
        /*(*/ [l_Q(
            cnt,
            0)] /*)*/,
        /*(*/ [tell(
            nth(
              GLOBALS.bdigs,
              cnt))] /*)*/)] /*)*/)
  }

FUNCTIONS.tcave_room = 
  () => {
    
    let prsact = GLOBALS.prsvec[1];
    let shov = find_obj(
        "SHOVE");
    let here = GLOBALS.here;
    let cnt = null;
    cond(
    /*(*/ [and(
        _EQ_Q(
          vname(
            prsact),
          dig_X_words),
        _EQ_Q(
          GLOBALS.prsvec[2],
          shov)),
      cond(
        /*(*/ [memq(
            find_obj(
              "GUANO"),
            robjs(
              here)),
          put(
            here,
            GLOBALS.rvars,
            cnt = _(
                1,
                rvars(
                  here))),
          cond(
            /*(*/ [g_Q(
                cnt,
                3),
              tell(
                "This is getting you nowhere.")] /*)*/,
            /*(*/ [tell(
                nth(
                  GLOBALS.cdigs,
                  cnt))] /*)*/)] /*)*/,
        /*(*/ [tell(
            "There's nothing to dig into here.")] /*)*/)] /*)*/)
  }

psetg(
  cdigs,
  () => /*[*/ ["You are digging into a pile of bat guano.",
      "You seem to be getting knee deep in guano.",
      "You are covered with bat turds, cretin."] /*]*/)

psetg(
  bdigs,
  () => /*[*/ ["You seem to be digging a hole here.",
      "The hole is getting deeper, but that's about it.",
      "You are surrounded by a wall of sand on all sides."] /*]*/)

gdecl(
  /*(*/ [bdigs,
    cdigs] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.geronimo = 
  () => {
    
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        find_room(
          "BARRE")),
      jigs_up(
        "I didn't think you would REALLY try to go over the falls in a\nbarrel. It seems that some 450 feet below, you were met by a number\nof  unfriendly rocks and boulders, causing your immediate demise.  Is\nthis what 'over a barrel' means?")] /*)*/,
    /*(*/ [tell(
        "Wasn't he an Indian?")] /*)*/)
  }

psetg(
  swimyuks,
  () => /*[*/ ["I don't really see how.",
      "I think that swimming is best performed in water.",
      "Perhaps it is your head that is swimming."] /*]*/)

gdecl(
  /*(*/ [swimyuks] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.swimmer = 
  () => {
    
    let swimyuks = GLOBALS.swimyuks;
    cond(
    /*(*/ [rtrnn(
        GLOBALS.here,
        GLOBALS.rfillbit),
      tell(
        "Swimming is not allowed in this dungeon.")] /*)*/,
    /*(*/ [tell(
        pick_one(
          swimyuks))] /*)*/)
  }

FUNCTIONS.grue_function = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.exami_X_words),
      tell(
        "The grue is a sinister, lurking presence in the dark places of the\nearth.  Its favorite diet is adventurers, but its insatiable\nappetite is tempered by its fear of light.  No grue has ever been\nseen by the light of day, and few have survived its fearsome jaws\nto tell the tale.")] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.find_X_words),
      tell(
        "There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby.  I wouldn't let my light go out if I were\nyou!")] /*)*/)
  }

GLOBALS.btie_X_flag = null

GLOBALS.binf_X_flag = null

define(
  balloon,
  ballact,
  /*(*/ ["OPTIONAL",
    /*(*/ [arg,
      null] /*)*/,
    "AUX",
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [ball,
      find_obj(
        "BALLO")] /*)*/,
    /*(*/ [prsa,
      prsvec[1]] /*)*/,
    /*(*/ [prso,
      prsvec[2]] /*)*/,
    /*(*/ [cont,
      find_obj(
        "RECEP")] /*)*/,
    m,
    /*(*/ [binf,
      GLOBALS.binf_X_flag] /*)*/,
    blabe] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [arg] /*)*/,
      or(
        atom,
        false),
      /*(*/ [blabe,
        ball,
        cont,
        recep] /*)*/,
      object,
      /*(*/ [prsa] /*)*/,
      verb,
      /*(*/ [prso] /*)*/,
      or(
        object,
        direction),
      /*(*/ [m] /*)*/,
      or(
        false,
        primtype(
          vector)),
      /*(*/ [prsvec] /*)*/,
      vector(
        /*[*/ [3,
          any] /*]*/),
      /*(*/ [binf] /*)*/,
      or(
        false,
        room),
      /*(*/ [m] /*)*/,
      or(
        false,
        /*<*/ [primtype(
            vector),
          any,
          room] /*>*/)] /*)*/] /*2*/,
  cond(
    /*(*/ [_EQ_Q(
        arg,
        read_out),
      cond(
        /*(*/ [_EQ_Q(
            prsa,
            GLOBALS.look_X_words),
          cond(
            /*(*/ [binf,
              tell(
                "The cloth bag is inflated and there is a",
                1,
                odesc2(
                  binf),
                "burning in the receptacle.")] /*)*/,
            /*(*/ [tell(
                "The cloth bag is draped over the the basket.")] /*)*/),
          cond(
            /*(*/ [GLOBALS.btie_X_flag,
              tell(
                "The balloon is tied to the hook.")] /*)*/)] /*)*/),
      return(
        null,
        ballact)] /*)*/),
  cond(
    /*(*/ [_EQ_Q(
        arg,
        read_in),
      cond(
        /*(*/ [_EQ_Q(
            prsa,
            GLOBALS.walk_X_words),
          cond(
            /*(*/ [m = memq(
                  chtype(
                    prsvec[2],
                    atom),
                  rexits(
                    GLOBALS.here)),
              cond(
                /*(*/ [GLOBALS.btie_X_flag,
                  tell(
                    "You are tied to the ledge."),
                  return(
                    t,
                    ballact)] /*)*/,
                /*(*/ [else,
                  and(
                    not(
                      rtrnn(
                        m[2],
                        GLOBALS.rmungbit)),
                    GLOBALS.bloc = m[2]),
                  return(
                    null,
                    ballact)] /*)*/)] /*)*/,
            /*(*/ [tell(
                "I'm afraid you can't control the balloon in this way."),
              return(
                t,
                ballact)] /*)*/)] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              prsa,
              GLOBALS.take_X_words),
            _EQ_Q(
              GLOBALS.binf_X_flag,
              prso)),
          tell(
            "You don't really want to hold a burning",
            1,
            odesc2(
              prso),
            "."),
          return(
            t,
            ballact)] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              prsa,
              GLOBALS.put_X_words),
            _EQ_Q(
              prsvec[3],
              cont),
            not(
              empty_Q(
                ocontents(
                  cont)))),
          tell(
            "The receptacle is already occupied."),
          return(
            t,
            ballact)] /*)*/,
        /*(*/ [return(
            null,
            ballact)] /*)*/)] /*)*/),
  cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.burn_X_words),
      cond(
        /*(*/ [memq(
            prso,
            ocontents(
              cont)),
          tell(
            "The",
            1,
            odesc2(
              prso),
            "burns inside the receptacle."),
          GLOBALS.burnup_int = clock_int(
              GLOBALS.brnin,
              _(
                osize(
                  prso),
                20)),
          tro(
            prso,
            GLOBALS.flamebit),
          trz(
            prso,
            _(
              GLOBALS.takebit,
              GLOBALS.readbit)),
          put(
            prso,
            GLOBALS.olight_Q,
            1),
          cond(
            /*(*/ [GLOBALS.binf_X_flag] /*)*/,
            /*(*/ [tell(
                "The cloth bag inflates as it fills with hot air."),
              cond(
                /*(*/ [not(
                    GLOBALS.blab_X_flag),
                  put(
                    ball,
                    GLOBALS.ocontents,
                    /*(*/ [blabe = find_obj(
                          "BLABE"),
                      _X,
                      ocontents(
                        ball)] /*)*/),
                  put(
                    blabe,
                    GLOBALS.ocan,
                    ball)] /*)*/),
              GLOBALS.blab_X_flag = t,
              GLOBALS.binf_X_flag = prso,
              clock_int(
                GLOBALS.bint,
                3)] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          prsa,
          GLOBALS.disem_X_words),
        rtrnn(
          GLOBALS.here,
          GLOBALS.rlandbit)),
      cond(
        /*(*/ [GLOBALS.binf_X_flag,
          clock_int(
            GLOBALS.bint,
            3)] /*)*/),
      null] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.c_int_X_words),
      cond(
        /*(*/ [or(
            and(
              oopen_Q(
                cont),
              GLOBALS.binf_X_flag),
            member(
              "LEDG",
              spname(
                rid(
                  GLOBALS.here)))),
          rise_and_shine(
            ball,
            GLOBALS.here)] /*)*/,
        /*(*/ [decline_and_fall(
            ball,
            GLOBALS.here)] /*)*/)] /*)*/))

GLOBALS.blab_X_flag = null

gdecl(
  /*(*/ [burnup_int,
    bint] /*)*/,
  cevent)

FUNCTIONS.rise_and_shine = 
  (ball,
    here) => {
    
    let s = top(
        GLOBALS.scrstr);
    let m = null;
    let in_Q = _EQ_Q(
        avehicle(
          GLOBALS.winner),
        ball);
    let bl = GLOBALS.bloc;
    let foo = null;
    clock_int(
    GLOBALS.bint,
    3)
cond(
    /*(*/ [m = member(
          "VAIR",
          spname(
            rid(
              bl))),
      cond(
        /*(*/ [__Q(
            rest(
              m,
              4),
            "4"),
          clock_disable(
            GLOBALS.burnup_int),
          clock_disable(
            GLOBALS.bint),
          remove_object(
            ball),
          insert_object(
            find_obj(
              "DBALL"),
            find_room(
              "VLBOT")),
          cond(
            /*(*/ [in_Q,
              jigs_up(
                "Your balloon has hit the rim of the volcano, ripping the cloth and\ncausing you a 500 foot drop.  Did you get your flight insurance?")] /*)*/,
            /*(*/ [tell(
                "You hear a boom and notice that the balloon is falling to the ground.")] /*)*/),
          GLOBALS.bloc = find_room(
              "VLBOT")] /*)*/,
        /*(*/ [substruc(
            spname(
              rid(
                bl)),
            0,
            4,
            s),
          put(
            s,
            5,
            chtype(
              _(
                chtype(
                  m[5],
                  fix),
                1),
              character)),
          cond(
            /*(*/ [in_Q,
              goto(
                GLOBALS.bloc = find_room(
                    s)),
              tell(
                "The balloon ascends."),
              room_info(
                t)] /*)*/,
            /*(*/ [put_balloon(
                ball,
                bl,
                s,
                "ascends.")] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [m = member(
          "LEDG",
          spname(
            rid(
              bl))),
      substruc(
        "VAIR",
        0,
        4,
        s),
      put(
        s,
        5,
        m[5]),
      cond(
        /*(*/ [in_Q,
          goto(
            GLOBALS.bloc = find_room(
                s)),
          tell(
            "The balloon leaves the ledge."),
          room_info(
            t)] /*)*/,
        /*(*/ [clock_int(
            GLOBALS.vlgin,
            10),
          put_balloon(
            ball,
            bl,
            s,
            "floats away.  It seems to be ascending,\ndue to its light load.")] /*)*/)] /*)*/,
    /*(*/ [in_Q,
      goto(
        GLOBALS.bloc = find_room(
            "VAIR1")),
      tell(
        "The balloon rises slowly from the ground."),
      room_info(
        t)] /*)*/,
    /*(*/ [put_balloon(
        ball,
        bl,
        "VAIR1",
        "lifts off.")] /*)*/)
  }

FUNCTIONS.put_balloon = 
  (ball,
    here,
    there,
    str) => {
    
    and(
    member(
      "LEDG",
      spname(
        rid(
          GLOBALS.here))),
    tell(
      "You watch as the balloon slowly",
      1,
      str))
remove_object(
    ball)
insert_object(
    ball,
    GLOBALS.bloc = find_room(
        there))
  }

gdecl(
  /*(*/ [bloc] /*)*/,
  room)

FUNCTIONS.decline_and_fall = 
  (ball,
    here) => {
    
    let s = top(
        GLOBALS.scrstr);
    let m = null;
    let bl = GLOBALS.bloc;
    let in_Q = _EQ_Q(
        avehicle(
          GLOBALS.winner),
        ball);
    let foo = null;
    clock_int(
    GLOBALS.bint,
    3)
cond(
    /*(*/ [m = member(
          "VAIR",
          spname(
            rid(
              bl))),
      cond(
        /*(*/ [__Q(
            rest(
              m,
              4),
            "1"),
          cond(
            /*(*/ [in_Q,
              goto(
                GLOBALS.bloc = find_room(
                    "VLBOT")),
              cond(
                /*(*/ [GLOBALS.binf_X_flag,
                  tell(
                    "The balloon has landed."),
                  room_info(
                    t)] /*)*/,
                /*(*/ [t,
                  remove_object(
                    ball),
                  insert_object(
                    find_obj(
                      "DBALL"),
                    GLOBALS.bloc),
                  put(
                    GLOBALS.winner,
                    GLOBALS.avehicle,
                    null),
                  clock_disable(
                    foo = clock_int(
                        GLOBALS.bint,
                        0)),
                  tell(
                    "You have landed, but the balloon did not survive.")] /*)*/)] /*)*/,
            /*(*/ [put_balloon(
                ball,
                bl,
                "VLBOT",
                "lands.")] /*)*/)] /*)*/,
        /*(*/ [substruc(
            spname(
              rid(
                bl)),
            0,
            4,
            s),
          put(
            s,
            5,
            chtype(
              _(
                chtype(
                  m[5],
                  fix),
                1),
              character)),
          cond(
            /*(*/ [in_Q,
              goto(
                GLOBALS.bloc = find_room(
                    s)),
              tell(
                "The balloon descends."),
              room_info(
                t)] /*)*/,
            /*(*/ [put_balloon(
                ball,
                bl,
                s,
                "descends.")] /*)*/)] /*)*/)] /*)*/)
  }

FUNCTIONS.wire_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let prsa = pv[1];
    let prso = pv[2];
    let prsi = pv[3];
    let bint = GLOBALS.bint;
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.tie_X_words),
      cond(
        /*(*/ [and(
            _EQ_Q(
              prso,
              find_obj(
                "BROPE")),
            or(
              _EQ_Q(
                prsi,
                find_obj(
                  "HOOK1")),
              _EQ_Q(
                prsi,
                find_obj(
                  "HOOK2")))),
          GLOBALS.btie_X_flag = t,
          clock_disable(
            bint),
          tell(
            "The balloon is fastened to the hook.")] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          prsa,
          GLOBALS.untie_X_words),
        _EQ_Q(
          prso,
          find_obj(
            "BROPE"))),
      cond(
        /*(*/ [GLOBALS.btie_X_flag,
          clock_enable(
            bint = clock_int(
                GLOBALS.bint,
                3)),
          GLOBALS.btie_X_flag = null,
          tell(
            "The wire falls off of the hook.")] /*)*/,
        /*(*/ [tell(
            "The wire is not tied to anything.")] /*)*/)] /*)*/)
  }

FUNCTIONS.burnup = 
  () => {
    
    let r = find_obj(
        "RECEP");
    let obj = 1(
        ocontents(
          r));
    put(
    r,
    GLOBALS.ocontents,
    splice_out(
      obj,
      ocontents(
        r)))
tell(
    "It seems that the",
    1,
    odesc2(
      obj),
    "has burned out, and the cloth\nbag starts to collapse.")
GLOBALS.binf_X_flag = null
  }

GLOBALS.safe_flag_X_flag = null

FUNCTIONS.safe_room = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.look_X_words),
      tell(
        "You are in a dusty old room which is virtually featureless, except\nfor an exit on the north side.",
        1,
        cond(
          /*(*/ [not(
              GLOBALS.safe_flag_X_flag),
            "Imbedded in the far wall, there is a rusty old box.  It appears that\nthe box is somewhat damaged, since an oblong hole has been chipped\nout of the front of it."] /*)*/,
          /*(*/ ["On the far wall is a rusty box, whose door has been blown off."] /*)*/))] /*)*/)
  }

FUNCTIONS.safe_function = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.take_X_words),
      tell(
        "The box is imbedded in the wall.")] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.open_X_words),
      cond(
        /*(*/ [GLOBALS.safe_flag_X_flag,
          tell(
            "The box has no door!")] /*)*/,
        /*(*/ [tell(
            "The box is rusted and will not open.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.close_X_words),
      cond(
        /*(*/ [GLOBALS.safe_flag_X_flag,
          tell(
            "The box has no door!")] /*)*/,
        /*(*/ [tell(
            "The box is not open, chomper!")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.blast_X_words),
      tell(
        "What do you expect, BOOM?")] /*)*/)
  }

psetg(
  brick_boom,
  "Now you've done it.  It seems that the brick has other properties\nthan weight, namely the ability to blow you to smithereens.")

FUNCTIONS.brick_function = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.burn_X_words),
      jigs_up(
        GLOBALS.brick_boom)] /*)*/)
  }

FUNCTIONS.fuse_function = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    let fuse = find_obj(
        "FUSE");
    let brick = find_obj(
        "BRICK");
    let brick_room = null;
    let oc = null;
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.burn_X_words),
      tell(
        "The wire starts to burn."),
      put(
        fuse,
        GLOBALS.orand,
        /*[*/ [0,
          clock_int(
            GLOBALS.fusin,
            2)] /*]*/)] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.c_int_X_words),
      trz(
        fuse,
        GLOBALS.ovison),
      cond(
        /*(*/ [_EQ_Q(
            ocan(
              fuse),
            brick),
          trz(
            brick,
            GLOBALS.ovison),
          cond(
            /*(*/ [oc = ocan(
                  brick),
              brick_room = oroom(
                  oc)] /*)*/,
            /*(*/ [brick_room = oroom(
                  brick)] /*)*/),
          or(
            brick_room,
            brick_room = GLOBALS.here),
          cond(
            /*(*/ [_EQ_Q(
                brick_room,
                GLOBALS.here),
              mung_room(
                brick_room,
                "The way is blocked by debris from an explosion."),
              jigs_up(
                GLOBALS.brick_boom)] /*)*/,
            /*(*/ [_EQ_Q(
                brick_room,
                find_room(
                  "SAFE")),
              clock_int(
                GLOBALS.safin,
                5),
              GLOBALS.munged_room = oroom(
                  brick),
              tell(
                "There is an explosion nearby."),
              cond(
                /*(*/ [memq(
                    brick,
                    ocontents(
                      find_obj(
                        "SSLOT"))),
                  trz(
                    find_obj(
                      "SSLOT"),
                    GLOBALS.ovison),
                  put(
                    find_obj(
                      "SAFE"),
                    GLOBALS.oopen_Q,
                    t),
                  GLOBALS.safe_flag_X_flag = t] /*)*/)] /*)*/,
            /*(*/ [tell(
                "There is an explosion nearby."),
              clock_int(
                GLOBALS.safin,
                5),
              GLOBALS.munged_room = brick_room,
              mapf(
                null,
                /* FUNCTION */
                  (x) => {
                    
                    cond(
                    /*(*/ [can_take_Q(
                        x),
                      trz(
                        x,
                        GLOBALS.ovison)] /*)*/)
                  },
                robjs(
                  brick_room)),
              cond(
                /*(*/ [_EQ_Q(
                    brick_room,
                    find_room(
                      "LROOM")),
                  mapf(
                    null,
                    /* FUNCTION */
                      (x) => {
                        
                        put(
                        x,
                        GLOBALS.ocan,
                        null)
                      },
                    ocontents(
                      find_obj(
                        "TCASE"))),
                  put(
                    find_obj(
                      "TCASE"),
                    GLOBALS.ocontents,
                    /*(*/ [] /*)*/)] /*)*/)] /*)*/)] /*)*/,
        /*(*/ [or(
            not(
              oroom(
                fuse)),
            _EQ_Q(
              GLOBALS.here,
              oroom(
                fuse))),
          tell(
            "The wire rapidly burns into nothingness.")] /*)*/)] /*)*/)
  }

FUNCTIONS.safe_mung = 
  () => {
    
    let rm = GLOBALS.munged_room;
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        rm),
      jigs_up(
        cond(
          /*(*/ [rtrnn(
              rm,
              GLOBALS.rhousebit),
            "The house shakes, and the ceiling of the room you're in collapses,\nturning you into a pancake."] /*)*/,
          /*(*/ ["The room trembles and 50,000 pounds of rock fall on you, turning you\ninto a pancake."] /*)*/))] /*)*/,
    /*(*/ [tell(
        "You may recall your recent explosion.  Well, probably as a result of\nthat, you hear an ominous rumbling, as if one of the rooms in the\ndungeon had collapsed."),
      and(
        _EQ_Q(
          rm,
          find_room(
            "SAFE")),
        clock_int(
          GLOBALS.ledin,
          8))] /*)*/)
mung_room(
    or(
      oroom(
        find_obj(
          "BRICK")),
      GLOBALS.here),
    "The way is blocked by debris from an explosion.")
  }

FUNCTIONS.ledge_mung = 
  () => {
    
    let rm = find_room(
        "LEDG4");
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        rm),
      cond(
        /*(*/ [avehicle(
            GLOBALS.winner),
          cond(
            /*(*/ [GLOBALS.btie_X_flag,
              rm = find_room(
                  "VLBOT"),
              GLOBALS.bloc = rm,
              remove_object(
                find_obj(
                  "BALLO")),
              insert_object(
                find_obj(
                  "DBALL"),
                rm),
              GLOBALS.btie_X_flag = null,
              GLOBALS.binf_X_flag = null,
              clock_disable(
                GLOBALS.bint),
              clock_disable(
                GLOBALS.brnin),
              jigs_up(
                "The ledge collapses, probably as a result of the explosion.  A large\nchunk of it, which is attached to the hook, drags you down to the\nground.  Fatally.")] /*)*/,
            /*(*/ [tell(
                "The ledge collapses, leaving you with no place to land.")] /*)*/)] /*)*/,
        /*(*/ [t,
          jigs_up(
            "The force of the explosion has caused the ledge to collapse\nbelatedly.")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "The ledge collapses, giving you a narrow escape.")] /*)*/)
mung_room(
    rm,
    "The ledge has collapsed and cannot be landed on.")
  }

FUNCTIONS.ledge_function = 
  () => {
    
    let prsa = GLOBALS.prsvec[1];
    cond(
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.walk_in_X_words),
      and(
        GLOBALS.safe_flag_X_flag,
        tell(
          "Behind you, the walls of the safe room collapse into rubble."),
        GLOBALS.safe_flag_X_flag = null)] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.look_X_words),
      tell(
        "You are on a wide ledge high into the volcano.  The rim of the\nvolcano is about 200 feet above and there is a precipitous drop below\nto the bottom.",
        1,
        cond(
          /*(*/ [rtrnn(
              find_room(
                "SAFE"),
              GLOBALS.rmungbit),
            "The way to the south is blocked by rubble."] /*)*/,
          /*(*/ ["There is a small door to the south."] /*)*/))] /*)*/)
  }

FUNCTIONS.blast = 
  () => {
    
    cond(
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        find_room(
          "SAFE"))] /*)*/,
    /*(*/ [tell(
        "I don't really know how to do that.")] /*)*/)
  }

FUNCTIONS.volgnome = 
  () => {
    
    cond(
    /*(*/ [member(
        "LEDG",
        spname(
          rid(
            GLOBALS.here))),
      tell(
        "A volcano gnome seems to walk straight out of the wall and says\n'I have a very busy appointment schedule and little time to waste on\ntresspassers, but for a small fee, I'll show you the way out.'  You\nnotice the gnome nervously glancing at his watch."),
      insert_object(
        find_obj(
          "GNOME"),
        GLOBALS.here)] /*)*/,
    /*(*/ [clock_int(
        GLOBALS.vlgin,
        1)] /*)*/)
  }

GLOBALS.gnome_door_X_flag = GLOBALS.gnome_flag_X_flag = null

FUNCTIONS.gnome_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let prsa = pv[1];
    let prso = pv[2];
    cond(
    /*(*/ [and(
        or(
          _EQ_Q(
            prsa,
            GLOBALS.give_X_words),
          _EQ_Q(
            prsa,
            GLOBALS.throw_X_words)),
        type_Q(
          prso,
          object),
        cond(
          /*(*/ [n_EQ_Q(
              otval(
                prso),
              0),
            tell(
              "Thank you very much for the",
              1,
              odesc2(
                prso),
              ".  I don't believe \nI've ever seen one as beautiful. 'Follow me', he says, and a door \nappears on the west end of the ledge.  Through the door, you can see\na narrow chimney sloping steeply downward."),
            GLOBALS.gnome_door_X_flag = t] /*)*/,
          /*(*/ [tell(
              "'That wasn't quite what I had in mind', he says, crunching the",
              1,
              odesc2(
                prso),
              "in his rock-hard hands."),
            remove_object(
              prso)] /*)*/))] /*)*/,
    /*(*/ [_EQ_Q(
        prsa,
        GLOBALS.c_int_X_words),
      tell(
        "The gnome glances at his watch.  'Oops.  I'm late for an\nappointment!' He disappears, leaving you alone on the ledge."),
      remove_object(
        find_obj(
          "GNOME"))] /*)*/,
    /*(*/ [tell(
        "The gnome appears increasingly nervous."),
      or(
        GLOBALS.gnome_flag_X_flag,
        clock_int(
          GLOBALS.gnoin,
          5)),
      GLOBALS.gnome_flag_X_flag = t] /*)*/)
  }