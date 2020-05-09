define(
  boom_room,
  ("AUX"
    (dummy_Q
      <>)
    (prsact
      1(
        GLOBALS.prsvec))
    (win
      GLOBALS.winner)
    o),
  #decl
    ((dummy_Q)
      or(
        atom,
        false)
      (prsact)
      verb
      (win)
      adv
      (o)
      object),
  cond(
    (or(
        _EQ_Q(
          vname(
            _prsact),
          walk_in_X_words),
        and(
          _EQ_Q(
            vname(
              _prsact),
            on_X_words),
          set(
            dummy_Q,
            t)))
      cond(
        (or(
            and(
              memq(
                set(
                  o,
                  find_obj(
                    "CANDL")),
                aobjs(
                  _win)),
              1_Q(
                olight_Q(
                  _o))),
            and(
              memq(
                set(
                  o,
                  find_obj(
                    "TORCH")),
                aobjs(
                  _win)),
              1_Q(
                olight_Q(
                  _o))))
          unwind(
            prog(
              (),
              cond(
                (_dummy_Q
                  tell(
                    "I didn't realize that adventurers are stupid enough to light a",
                    1,
                    odesc2(
                      _o),
                    "in a room which reeks of coal gas.\nFortunately, there is justice in the world.")),
                (tell(
                    "Oh dear.  It appears that the smell coming from this room was coal\ngas.  I would have thought twice about carrying a",
                    1,
                    odesc2(
                      _o),
                    "in here."))),
              fweep(
                7),
              jigs_up(
                "BOOOOOOOOOOOM")),
            jigs_up(
              "BOOOOOOOOOOOM")))))))

define(
  bats_room,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (and(
        _EQ_Q(
          vname(
            _prsact),
          walk_in_X_words),
        not(
          memq(
            find_obj(
              "GARLI"),
            aobjs(
              GLOBALS.winner))))
      fly_me(
        )),
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are in a small room which has only one door, to the east.")
      and(
        memq(
          find_obj(
            "GARLI"),
          aobjs(
            GLOBALS.winner)),
        tell(
          "In the corner of the room on the ceiling is a large vampire bat who\nis obviously deranged and holding his nose.")))))

define(
  fly_me,
  ("AUX"
    (bat_drops
      GLOBALS.bat_drops)),
  #decl
    ((bat_drops)
      vector(
        [rest
          string])),
  unwind(
    prog(
      (),
      fweep(
        4,
        1),
      tell(
        "A deranged giant vampire bat (a reject from WUMPUS) swoops down\nfrom his belfry and lifts you away...."),
      goto(
        find_room(
          pick_one(
            _bat_drops)))),
    goto(
      find_room(
        pick_one(
          _bat_drops)))),
  put(
    GLOBALS.prsvec,
    2,
    <>),
  room_desc(
    ),
  t)

define(
  fweep,
  (num
    "OPTIONAL"
    (slp
      0)),
  #decl
    ((num
        slp)
      fix),
  repeat(
    ((n
        _num)),
    and(
      0_Q(
        set(
          n,
          _(
            _n,
            1))),
      return(
        )),
    image(
      7),
    or(
      0_Q(
        _slp),
      sleep(
        _slp))))

psetg(
  bat_drops,
  () => ["MINE1"
      "MINE2"
      "MINE3"
      "MINE4"
      "MINE5"
      "MINE6"
      "MINE7"
      "TLADD"
      "BLADD"])

gdecl(
  (bat_drops),
  vector(
    [rest
      string]))

GLOBALS.cage_top_X_flag = t

define(
  dumbwaiter,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (tb
      find_obj(
        "TBASK"))
    (top
      find_room(
        "TSHAF"))
    (bot
      find_room(
        "BSHAF"))
    (fb
      find_obj(
        "FBASK"))
    (ct
      GLOBALS.cage_top_X_flag)
    (here
      GLOBALS.here)
    (dummy
      GLOBALS.dummy)),
  #decl
    ((prsact)
      verb
      (fb
        tb)
      object
      (top
        bot)
      room
      (ct)
      or(
        atom,
        false)
      (here)
      room
      (dummy)
      vector(
        [rest
          string])),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.raise_X_words)
      cond(
        (_ct
          tell(
            pick_one(
              GLOBALS.dummy))),
        (remove_object(
            _tb)
          remove_object(
            _fb)
          insert_object(
            _tb,
            _top)
          insert_object(
            _fb,
            _bot)
          tell(
            "The basket is raised to the top of the shaft.")
          GLOBALS.cage_top_X_flag = t))),
    (_EQ_Q(
        _prsact,
        GLOBALS.lower_X_words)
      cond(
        (not(
            _ct)
          tell(
            pick_one(
              _dummy))),
        (remove_object(
            _tb)
          remove_object(
            _fb)
          insert_object(
            _tb,
            _bot)
          insert_object(
            _fb,
            _top)
          tell(
            "The basket is lowered to the bottom of the shaft.")
          GLOBALS.cage_top_X_flag = <>
          t))),
    (_EQ_Q(
        _prsact,
        GLOBALS.take_X_words)
      cond(
        (or(
            and(
              _ct,
              _EQ_Q(
                _here,
                _top)),
            and(
              not(
                _ct),
              _EQ_Q(
                _here,
                _bot)))
          tell(
            "The cage is securely fastened to the iron chain.")),
        (tell(
            "I can't see that here."))))))

define(
  machine_room,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are in a large room which seems to be air-conditioned.  In one\ncorner there is a machine (?) which is shaped somewhat like a clothes\ndryer.  On the 'panel' there is a switch which is labelled in a\ndialect of Swahili.  Fortunately, I know this dialect and the label\ntranslates to START.  The switch does not appear to be manipulable by\nany human hand (unless the fingers are about 1/16 by 1/4 inch).  On\nthe front of the machine is a large lid.")
      cond(
        (oopen_Q(
            find_obj(
              "MACHI"))
          tell(
            "The lid on the machine is open.")),
        (tell(
            "The lid on the machine is closed."))))))

define(
  machine_function,
  ("AUX"
    (dummy
      GLOBALS.dummy)
    (prsact
      1(
        GLOBALS.prsvec))
    (mach
      find_obj(
        "MACHI"))),
  #decl
    ((prsact)
      verb
      (mach)
      object
      (dummy)
      vector(
        [rest
          string])),
  cond(
    (_EQ_Q(
        GLOBALS.here,
        find_room(
          "MACHI"))
      cond(
        (_EQ_Q(
            vname(
              _prsact),
            open_X_words)
          cond(
            (oopen_Q(
                _mach)
              tell(
                pick_one(
                  _dummy))),
            (tell(
                "The lid opens.")
              put(
                _mach,
                GLOBALS.oopen_Q,
                t)))),
        (_EQ_Q(
            vname(
              _prsact),
            close_X_words)
          cond(
            (oopen_Q(
                _mach)
              tell(
                "The lid closes.")
              put(
                _mach,
                GLOBALS.oopen_Q,
                <>)
              t),
            (tell(
                pick_one(
                  _dummy))))),
        (_EQ_Q(
            _prsact,
            GLOBALS.take_X_words))))))

define(
  mswitch_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (c
      find_obj(
        "COAL"))
    (imp
      3(
        GLOBALS.prsvec))
    d
    (mach
      find_obj(
        "MACHI"))
    (screw
      find_obj(
        "SCREW"))),
  #decl
    ((prsact)
      verb
      (imp)
      object
      (mach
        screw
        c
        d)
      object),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.turn_X_words)
      cond(
        (_EQ_Q(
            _imp,
            _screw)
          cond(
            (oopen_Q(
                _mach)
              tell(
                "The machine doesn't seem to want to do anything.")),
            (tell(
                "The machine comes to life (figuratively) with a dazzling display of\ncolored lights and bizarre noises.  After a few moments, the\nexcitement abates.")
              cond(
                (memq(
                    _c,
                    ocontents(
                      _mach))
                  put(
                    _mach,
                    GLOBALS.ocontents,
                    splice_out(
                      _c,
                      ocontents(
                        _mach)))
                  put(
                    _mach,
                    GLOBALS.ocontents,
                    (set(
                        d,
                        find_obj(
                          "DIAMO"))
                      _X
                      ocontents(
                        _mach)))
                  put(
                    _d,
                    GLOBALS.ocan,
                    _mach)),
                (not(
                    empty_Q(
                      ocontents(
                        _mach)))
                  put(
                    _mach,
                    GLOBALS.ocontents,
                    (set(
                        d,
                        find_obj(
                          "GUNK"))))),
                (t))))),
        (tell(
            "It seems that a",
            1,
            odesc2(
              _imp),
            "won't do."))))))

define(
  gunk_function,
  ("AUX"
    (g
      find_obj(
        "GUNK"))
    (m
      ocan(
        _g))),
  #decl
    ((g)
      object
      (m)
      or(
        object,
        false)),
  cond(
    (_m
      put(
        _m,
        GLOBALS.ocontents,
        splice_out(
          _g,
          ocontents(
            _m)))
      put(
        _g,
        GLOBALS.ocan,
        <>)
      tell(
        "The slag turns out to be rather insubstantial, and crumbles into dust\nat your touch.  It must not have been very valuable."))))

GLOBALS.score_max = _(
    GLOBALS.score_max,
    GLOBALS.light_shaft = 10)

define(
  no_objs,
  (),
  cond(
    (empty_Q(
        aobjs(
          GLOBALS.winner))
      GLOBALS.empty_handed_X_flag = t),
    (GLOBALS.empty_handed_X_flag = <>)),
  cond(
    (and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "BSHAF")),
        lit_Q(
          GLOBALS.here))
      score_upd(
        GLOBALS.light_shaft)
      GLOBALS.light_shaft = 0)))

gdecl(
  (light_shaft),
  fix)

define(
  cliff_function,
  (),
  cond(
    (memq(
        find_obj(
          "RBOAT"),
        aobjs(
          GLOBALS.winner))
      GLOBALS.deflate_X_flag = <>),
    (GLOBALS.deflate_X_flag = t)))

define(
  stick_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        wave_X_words)
      cond(
        (or(
            _EQ_Q(
              GLOBALS.here,
              find_room(
                "FALLS")),
            _EQ_Q(
              GLOBALS.here,
              find_room(
                "POG")))
          cond(
            (not(
                GLOBALS.rainbow_X_flag)
              tro(
                find_obj(
                  "POT"),
                GLOBALS.ovison)
              tell(
                "Suddenly, the rainbow appears to become solid and, I venture,\nwalkable (I think the giveaway was the stairs and bannister).")
              GLOBALS.rainbow_X_flag = t),
            (tell(
                "The rainbow seems to have become somewhat run-of-the-mill.")
              GLOBALS.rainbow_X_flag = <>))),
        (_EQ_Q(
            GLOBALS.here,
            find_room(
              "RAINB"))
          GLOBALS.rainbow_X_flag = <>
          jigs_up(
            "The structural integrity of the rainbow seems to have left it,\nleaving you about 450 feet in the air, supported by water vapor.")),
        (tell(
            "Very good."))))))

define(
  falls_room,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are at the top of Aragain Falls, an enormous waterfall with a\ndrop of about 450 feet.  The only path here is on the north end.\nThere is a man-sized barrel here which you could fit into.")
      cond(
        (GLOBALS.rainbow_X_flag
          tell(
            "A solid rainbow spans the falls.")),
        (tell(
            "A beautiful rainbow can be seen over the falls and to the east."))))))

define(
  digger,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (_EQ_Q(
        _prso,
        find_obj(
          "SHOVE"))),
    (trnn(
        _prso,
        GLOBALS.toolbit)
      tell(
        "Digging with the",
        1,
        odesc2(
          _prso),
        "is slow and tedious.")),
    (tell(
        "Digging with a",
        1,
        odesc2(
          _prso),
        "is silly."))))

define(
  dboat_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (here
      GLOBALS.here)
    (prsi
      3(
        GLOBALS.prsvec))
    (dboat
      find_obj(
        "DBOAT"))),
  #decl
    ((dboat)
      object
      (prsact)
      verb
      (here)
      room
      (prsi)
      or(
        false,
        object)),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        infla_X_words)
      tell(
        "This boat will not inflate since some moron put a hole in it.")),
    (_EQ_Q(
        vname(
          _prsact),
        plug_X_words)
      cond(
        (_EQ_Q(
            _prsi,
            find_obj(
              "PUTTY"))
          tell(
            "Well done.  The boat is repaired.")
          cond(
            (not(
                oroom(
                  _dboat))
              drop_object(
                _dboat)
              take_object(
                find_obj(
                  "IBOAT"))),
            (remove_object(
                find_obj(
                  "DBOAT"))
              insert_object(
                find_obj(
                  "IBOAT"),
                _here)))),
        (with_tell(
            _prsi))))))

define(
  rboat_function,
  ("OPTIONAL"
    (arg
      <>)
    "AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (rboat
      find_obj(
        "RBOAT"))
    (iboat
      find_obj(
        "IBOAT"))
    (here
      GLOBALS.here)),
  #decl
    ((arg)
      or(
        false,
        atom)
      (prsact)
      verb
      (iboat
        rboat)
      object
      (here)
      room),
  cond(
    (_arg
      <>),
    (_EQ_Q(
        _prsact,
        GLOBALS.board_X_words)
      cond(
        (memq(
            find_obj(
              "STICK"),
            aobjs(
              GLOBALS.winner))
          tell(
            "There is a hissing sound and the boat deflates.")
          remove_object(
            _rboat)
          insert_object(
            find_obj(
              "DBOAT"),
            _here)
          t))),
    (_EQ_Q(
        _prsact,
        GLOBALS.disem_X_words)
      and(
        member(
          "RIVR",
          spname(
            rid(
              _here))),
        jigs_up(
          "Unfortunately, that leaves you in the water, where you drown."))),
    (_EQ_Q(
        vname(
          _prsact),
        defla_X_words)
      cond(
        (_EQ_Q(
            avehicle(
              GLOBALS.winner),
            _rboat)
          tell(
            "You can't deflate the boat while you're in it.")),
        (not(
            memq(
              _rboat,
              robjs(
                _here)))
          tell(
            "The boat must be on the ground to be deflated.")),
        (tell(
            "The boat deflates.")
          GLOBALS.deflate_X_flag = t
          remove_object(
            _rboat)
          insert_object(
            _iboat,
            _here))))))

define(
  iboat_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (iboat
      find_obj(
        "IBOAT"))
    (rboat
      find_obj(
        "RBOAT"))
    (here
      GLOBALS.here)),
  #decl
    ((prsact)
      verb
      (iboat
        rboat)
      object
      (here)
      room),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        infla_X_words)
      cond(
        (not(
            memq(
              _iboat,
              robjs(
                _here)))
          tell(
            "The boat must be on the ground to be inflated.")),
        (memq(
            find_obj(
              "PUMP"),
            aobjs(
              GLOBALS.winner))
          tell(
            "The boat inflates and appears seaworthy.")
          GLOBALS.deflate_X_flag = <>
          remove_object(
            _iboat)
          insert_object(
            _rboat,
            _here)),
        (tell(
            "I don't think you have enough lung-power to inflate this boat."))))))

define(
  over_falls,
  (),
  cond(
    (_EQ_Q(
        1(
          GLOBALS.prsvec),
        GLOBALS.look_X_words)),
    (jigs_up(
        "Oh dear, you seem to have gone over Aragain Falls.  Not a very smart\nthing to do, apparently."))))

GLOBALS.buoy_flag_X_flag = t

define(
  shake,
  ("AUX"
    (prsobj
      2(
        GLOBALS.prsvec))
    (here
      GLOBALS.here)),
  #decl
    ((prsobj)
      object
      (here)
      room),
  cond(
    (object_action(
        )),
    (and(
        not(
          oopen_Q(
            _prsobj)),
        not(
          empty_Q(
            ocontents(
              _prsobj))),
        tell(
          "It sounds like there is something inside the",
          1,
          odesc2(
            _prsobj),
          "."))),
    (and(
        oopen_Q(
          _prsobj),
        not(
          empty_Q(
            ocontents(
              _prsobj))))
      mapf(
        <>,
        function(
          (x),
          #decl
            ((x)
              object),
          put(
            _x,
            GLOBALS.ocan,
            <>),
          insert_object(
            _x,
            _here)),
        ocontents(
          _prsobj))
      put(
        _prsobj,
        GLOBALS.ocontents,
        ())
      tell(
        "All of the objects spill onto the floor."))))

define(
  rivr4_room,
  (),
  and(
    memq(
      find_obj(
        "BUOY"),
      aobjs(
        GLOBALS.winner)),
    GLOBALS.buoy_flag_X_flag,
    tell(
      "Something seems funny about the feel of the buoy."),
    GLOBALS.buoy_flag_X_flag = <>))

define(
  beach_room,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (shov
      find_obj(
        "SHOVE"))
    (here
      GLOBALS.here)
    cnt),
  #decl
    ((prsact)
      verb
      (shov)
      object
      (here)
      room
      (cnt)
      fix),
  cond(
    (and(
        _EQ_Q(
          vname(
            _prsact),
          dig_X_words),
        _EQ_Q(
          _shov,
          2(
            GLOBALS.prsvec)))
      put(
        _here,
        GLOBALS.rvars,
        set(
          cnt,
          _(
            1,
            rvars(
              _here))))
      cond(
        (g_Q(
            _cnt,
            4)
          put(
            _here,
            GLOBALS.rvars,
            0)
          jigs_up(
            "The hole collapses, smothering you.")),
        (_EQ_Q(
            _cnt,
            4)
          tell(
            "You can see a small statue here in the sand.")
          tro(
            find_obj(
              "STATU"),
            GLOBALS.ovison)
          put(
            _here,
            GLOBALS.rvars,
            _cnt)),
        (l_Q(
            _cnt,
            0)),
        (tell(
            nth(
              GLOBALS.bdigs,
              _cnt)))))))

define(
  tcave_room,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (shov
      find_obj(
        "SHOVE"))
    (here
      GLOBALS.here)
    cnt),
  #decl
    ((prsact)
      verb
      (shov)
      object
      (here)
      room
      (cnt)
      fix),
  cond(
    (and(
        _EQ_Q(
          vname(
            _prsact),
          dig_X_words),
        _EQ_Q(
          2(
            GLOBALS.prsvec),
          _shov))
      cond(
        (memq(
            find_obj(
              "GUANO"),
            robjs(
              _here))
          put(
            _here,
            GLOBALS.rvars,
            set(
              cnt,
              _(
                1,
                rvars(
                  _here))))
          cond(
            (g_Q(
                _cnt,
                3)
              tell(
                "This is getting you nowhere.")),
            (tell(
                nth(
                  GLOBALS.cdigs,
                  _cnt))))),
        (tell(
            "There's nothing to dig into here."))))))

psetg(
  cdigs,
  () => ["You are digging into a pile of bat guano."
      "You seem to be getting knee deep in guano."
      "You are covered with bat turds, cretin."])

psetg(
  bdigs,
  () => ["You seem to be digging a hole here."
      "The hole is getting deeper, but that's about it."
      "You are surrounded by a wall of sand on all sides."])

gdecl(
  (bdigs
    cdigs),
  vector(
    [rest
      string]))

define(
  geronimo,
  (),
  cond(
    (_EQ_Q(
        GLOBALS.here,
        find_room(
          "BARRE"))
      jigs_up(
        "I didn't think you would REALLY try to go over the falls in a\nbarrel. It seems that some 450 feet below, you were met by a number\nof  unfriendly rocks and boulders, causing your immediate demise.  Is\nthis what 'over a barrel' means?")),
    (tell(
        "Wasn't he an Indian?"))))

psetg(
  swimyuks,
  () => ["I don't really see how."
      "I think that swimming is best performed in water."
      "Perhaps it is your head that is swimming."])

gdecl(
  (swimyuks),
  vector(
    [rest
      string]))

define(
  swimmer,
  ("AUX"
    (swimyuks
      GLOBALS.swimyuks)),
  #decl
    ((swimyuks)
      vector(
        [rest
          string])),
  cond(
    (rtrnn(
        GLOBALS.here,
        GLOBALS.rfillbit)
      tell(
        "Swimming is not allowed in this dungeon.")),
    (tell(
        pick_one(
          _swimyuks)))))

define(
  grue_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.exami_X_words)
      tell(
        "The grue is a sinister, lurking presence in the dark places of the\nearth.  Its favorite diet is adventurers, but its insatiable\nappetite is tempered by its fear of light.  No grue has ever been\nseen by the light of day, and few have survived its fearsome jaws\nto tell the tale.")),
    (_EQ_Q(
        _prsa,
        GLOBALS.find_X_words)
      tell(
        "There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby.  I wouldn't let my light go out if I were\nyou!"))))

GLOBALS.btie_X_flag = <>

GLOBALS.binf_X_flag = <>

define(
  balloon,
  ballact,
  ("OPTIONAL"
    (arg
      <>)
    "AUX"
    (prsvec
      GLOBALS.prsvec)
    (ball
      find_obj(
        "BALLO"))
    (prsa
      1(
        _prsvec))
    (prso
      2(
        _prsvec))
    (cont
      find_obj(
        "RECEP"))
    m
    (binf
      GLOBALS.binf_X_flag)
    blabe),
  #decl
    ((arg)
      or(
        atom,
        false)
      (blabe
        ball
        cont
        recep)
      object
      (prsa)
      verb
      (prso)
      or(
        object,
        direction)
      (m)
      or(
        false,
        primtype(
          vector))
      (prsvec)
      vector(
        [3
          any])
      (binf)
      or(
        false,
        room)
      (m)
      or(
        false,
        <primtype(
            vector)
          any
          room>)),
  cond(
    (_EQ_Q(
        _arg,
        read_out)
      cond(
        (_EQ_Q(
            _prsa,
            GLOBALS.look_X_words)
          cond(
            (_binf
              tell(
                "The cloth bag is inflated and there is a",
                1,
                odesc2(
                  _binf),
                "burning in the receptacle.")),
            (tell(
                "The cloth bag is draped over the the basket.")))
          cond(
            (GLOBALS.btie_X_flag
              tell(
                "The balloon is tied to the hook.")))))
      return(
        <>,
        _ballact))),
  cond(
    (_EQ_Q(
        _arg,
        read_in)
      cond(
        (_EQ_Q(
            _prsa,
            GLOBALS.walk_X_words)
          cond(
            (set(
                m,
                memq(
                  chtype(
                    2(
                      _prsvec),
                    atom),
                  rexits(
                    GLOBALS.here)))
              cond(
                (GLOBALS.btie_X_flag
                  tell(
                    "You are tied to the ledge.")
                  return(
                    t,
                    _ballact)),
                (else
                  and(
                    not(
                      rtrnn(
                        2(
                          _m),
                        GLOBALS.rmungbit)),
                    GLOBALS.bloc = 2(
                        _m))
                  return(
                    <>,
                    _ballact)))),
            (tell(
                "I'm afraid you can't control the balloon in this way.")
              return(
                t,
                _ballact)))),
        (and(
            _EQ_Q(
              _prsa,
              GLOBALS.take_X_words),
            _EQ_Q(
              GLOBALS.binf_X_flag,
              _prso))
          tell(
            "You don't really want to hold a burning",
            1,
            odesc2(
              _prso),
            ".")
          return(
            t,
            _ballact)),
        (and(
            _EQ_Q(
              _prsa,
              GLOBALS.put_X_words),
            _EQ_Q(
              3(
                _prsvec),
              _cont),
            not(
              empty_Q(
                ocontents(
                  _cont))))
          tell(
            "The receptacle is already occupied.")
          return(
            t,
            _ballact)),
        (return(
            <>,
            _ballact))))),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.burn_X_words)
      cond(
        (memq(
            _prso,
            ocontents(
              _cont))
          tell(
            "The",
            1,
            odesc2(
              _prso),
            "burns inside the receptacle.")
          GLOBALS.burnup_int = clock_int(
              GLOBALS.brnin,
              _(
                osize(
                  _prso),
                20))
          tro(
            _prso,
            GLOBALS.flamebit)
          trz(
            _prso,
            _(
              GLOBALS.takebit,
              GLOBALS.readbit))
          put(
            _prso,
            GLOBALS.olight_Q,
            1)
          cond(
            (GLOBALS.binf_X_flag),
            (tell(
                "The cloth bag inflates as it fills with hot air.")
              cond(
                (not(
                    GLOBALS.blab_X_flag)
                  put(
                    _ball,
                    GLOBALS.ocontents,
                    (set(
                        blabe,
                        find_obj(
                          "BLABE"))
                      _X
                      ocontents(
                        _ball)))
                  put(
                    _blabe,
                    GLOBALS.ocan,
                    _ball)))
              GLOBALS.blab_X_flag = t
              GLOBALS.binf_X_flag = _prso
              clock_int(
                GLOBALS.bint,
                3)))))),
    (and(
        _EQ_Q(
          _prsa,
          GLOBALS.disem_X_words),
        rtrnn(
          GLOBALS.here,
          GLOBALS.rlandbit))
      cond(
        (GLOBALS.binf_X_flag
          clock_int(
            GLOBALS.bint,
            3)))
      <>),
    (_EQ_Q(
        _prsa,
        GLOBALS.c_int_X_words)
      cond(
        (or(
            and(
              oopen_Q(
                _cont),
              GLOBALS.binf_X_flag),
            member(
              "LEDG",
              spname(
                rid(
                  GLOBALS.here))))
          rise_and_shine(
            _ball,
            GLOBALS.here)),
        (decline_and_fall(
            _ball,
            GLOBALS.here))))))

GLOBALS.blab_X_flag = <>

gdecl(
  (burnup_int
    bint),
  cevent)

define(
  rise_and_shine,
  (ball
    here
    "AUX"
    (s
      top(
        GLOBALS.scrstr))
    m
    (in_Q
      _EQ_Q(
        avehicle(
          GLOBALS.winner),
        _ball))
    (bl
      GLOBALS.bloc)
    foo),
  #decl
    ((ball)
      object
      (here
        bl)
      room
      (m)
      or(
        false,
        string)
      (s)
      string
      (in_Q)
      or(
        atom,
        false)
      (foo)
      cevent),
  clock_int(
    GLOBALS.bint,
    3),
  cond(
    (set(
        m,
        member(
          "VAIR",
          spname(
            rid(
              _bl))))
      cond(
        (__Q(
            rest(
              _m,
              4),
            "4")
          clock_disable(
            GLOBALS.burnup_int)
          clock_disable(
            GLOBALS.bint)
          remove_object(
            _ball)
          insert_object(
            find_obj(
              "DBALL"),
            find_room(
              "VLBOT"))
          cond(
            (_in_Q
              jigs_up(
                "Your balloon has hit the rim of the volcano, ripping the cloth and\ncausing you a 500 foot drop.  Did you get your flight insurance?")),
            (tell(
                "You hear a boom and notice that the balloon is falling to the ground.")))
          GLOBALS.bloc = find_room(
              "VLBOT")),
        (substruc(
            spname(
              rid(
                _bl)),
            0,
            4,
            _s)
          put(
            _s,
            5,
            chtype(
              _(
                chtype(
                  5(
                    _m),
                  fix),
                1),
              character))
          cond(
            (_in_Q
              goto(
                GLOBALS.bloc = find_room(
                    _s))
              tell(
                "The balloon ascends.")
              room_info(
                t)),
            (put_balloon(
                _ball,
                _bl,
                _s,
                "ascends.")))))),
    (set(
        m,
        member(
          "LEDG",
          spname(
            rid(
              _bl))))
      substruc(
        "VAIR",
        0,
        4,
        _s)
      put(
        _s,
        5,
        5(
          _m))
      cond(
        (_in_Q
          goto(
            GLOBALS.bloc = find_room(
                _s))
          tell(
            "The balloon leaves the ledge.")
          room_info(
            t)),
        (clock_int(
            GLOBALS.vlgin,
            10)
          put_balloon(
            _ball,
            _bl,
            _s,
            "floats away.  It seems to be ascending,\ndue to its light load.")))),
    (_in_Q
      goto(
        GLOBALS.bloc = find_room(
            "VAIR1"))
      tell(
        "The balloon rises slowly from the ground.")
      room_info(
        t)),
    (put_balloon(
        _ball,
        _bl,
        "VAIR1",
        "lifts off."))))

define(
  put_balloon,
  (ball
    here
    there
    str),
  #decl
    ((ball)
      object
      (here)
      room
      (there
        str)
      string),
  and(
    member(
      "LEDG",
      spname(
        rid(
          GLOBALS.here))),
    tell(
      "You watch as the balloon slowly",
      1,
      _str)),
  remove_object(
    _ball),
  insert_object(
    _ball,
    GLOBALS.bloc = find_room(
        _there)))

gdecl(
  (bloc),
  room)

define(
  decline_and_fall,
  (ball
    here
    "AUX"
    (s
      top(
        GLOBALS.scrstr))
    m
    (bl
      GLOBALS.bloc)
    (in_Q
      _EQ_Q(
        avehicle(
          GLOBALS.winner),
        _ball))
    foo),
  #decl
    ((ball)
      object
      (here
        bl)
      room
      (m)
      or(
        false,
        string)
      (s)
      string
      (in_Q)
      or(
        atom,
        false)
      (foo)
      cevent),
  clock_int(
    GLOBALS.bint,
    3),
  cond(
    (set(
        m,
        member(
          "VAIR",
          spname(
            rid(
              _bl))))
      cond(
        (__Q(
            rest(
              _m,
              4),
            "1")
          cond(
            (_in_Q
              goto(
                GLOBALS.bloc = find_room(
                    "VLBOT"))
              cond(
                (GLOBALS.binf_X_flag
                  tell(
                    "The balloon has landed.")
                  room_info(
                    t)),
                (t
                  remove_object(
                    _ball)
                  insert_object(
                    find_obj(
                      "DBALL"),
                    GLOBALS.bloc)
                  put(
                    GLOBALS.winner,
                    GLOBALS.avehicle,
                    <>)
                  clock_disable(
                    set(
                      foo,
                      clock_int(
                        GLOBALS.bint,
                        0)))
                  tell(
                    "You have landed, but the balloon did not survive.")))),
            (put_balloon(
                _ball,
                _bl,
                "VLBOT",
                "lands.")))),
        (substruc(
            spname(
              rid(
                _bl)),
            0,
            4,
            _s)
          put(
            _s,
            5,
            chtype(
              _(
                chtype(
                  5(
                    _m),
                  fix),
                1),
              character))
          cond(
            (_in_Q
              goto(
                GLOBALS.bloc = find_room(
                    _s))
              tell(
                "The balloon descends.")
              room_info(
                t)),
            (put_balloon(
                _ball,
                _bl,
                _s,
                "descends."))))))))

define(
  wire_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prsa
      1(
        _pv))
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))
    (bint
      GLOBALS.bint)),
  #decl
    ((bint)
      cevent
      (pv)
      vector
      (prsa)
      verb
      (prso
        prsi)
      prsobj),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.tie_X_words)
      cond(
        (and(
            _EQ_Q(
              _prso,
              find_obj(
                "BROPE")),
            or(
              _EQ_Q(
                _prsi,
                find_obj(
                  "HOOK1")),
              _EQ_Q(
                _prsi,
                find_obj(
                  "HOOK2"))))
          GLOBALS.btie_X_flag = t
          clock_disable(
            _bint)
          tell(
            "The balloon is fastened to the hook.")))),
    (and(
        _EQ_Q(
          _prsa,
          GLOBALS.untie_X_words),
        _EQ_Q(
          _prso,
          find_obj(
            "BROPE")))
      cond(
        (GLOBALS.btie_X_flag
          clock_enable(
            set(
              bint,
              clock_int(
                GLOBALS.bint,
                3)))
          GLOBALS.btie_X_flag = <>
          tell(
            "The wire falls off of the hook.")),
        (tell(
            "The wire is not tied to anything."))))))

define(
  burnup,
  ("AUX"
    (r
      find_obj(
        "RECEP"))
    (obj
      1(
        ocontents(
          _r)))),
  #decl
    ((r
        obj)
      object),
  put(
    _r,
    GLOBALS.ocontents,
    splice_out(
      _obj,
      ocontents(
        _r))),
  tell(
    "It seems that the",
    1,
    odesc2(
      _obj),
    "has burned out, and the cloth\nbag starts to collapse."),
  GLOBALS.binf_X_flag = <>,
  t)

GLOBALS.safe_flag_X_flag = <>

define(
  safe_room,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.look_X_words)
      tell(
        "You are in a dusty old room which is virtually featureless, except\nfor an exit on the north side.",
        1,
        cond(
          (not(
              GLOBALS.safe_flag_X_flag)
            "Imbedded in the far wall, there is a rusty old box.  It appears that\nthe box is somewhat damaged, since an oblong hole has been chipped\nout of the front of it."),
          ("On the far wall is a rusty box, whose door has been blown off."))))))

define(
  safe_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.take_X_words)
      tell(
        "The box is imbedded in the wall.")),
    (_EQ_Q(
        _prsa,
        GLOBALS.open_X_words)
      cond(
        (GLOBALS.safe_flag_X_flag
          tell(
            "The box has no door!")),
        (tell(
            "The box is rusted and will not open.")))),
    (_EQ_Q(
        _prsa,
        GLOBALS.close_X_words)
      cond(
        (GLOBALS.safe_flag_X_flag
          tell(
            "The box has no door!")),
        (tell(
            "The box is not open, chomper!")))),
    (_EQ_Q(
        _prsa,
        GLOBALS.blast_X_words)
      tell(
        "What do you expect, BOOM?"))))

psetg(
  brick_boom,
  "Now you've done it.  It seems that the brick has other properties\nthan weight, namely the ability to blow you to smithereens.")

define(
  brick_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.burn_X_words)
      jigs_up(
        GLOBALS.brick_boom))))

define(
  fuse_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))
    (fuse
      find_obj(
        "FUSE"))
    (brick
      find_obj(
        "BRICK"))
    brick_room
    oc),
  #decl
    ((prsa)
      verb
      (fuse
        brick)
      object
      (brick_room)
      or(
        room,
        false)
      (oc)
      or(
        object,
        false)),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.burn_X_words)
      tell(
        "The wire starts to burn.")
      put(
        _fuse,
        GLOBALS.orand,
        [0
          clock_int(
            GLOBALS.fusin,
            2)])),
    (_EQ_Q(
        _prsa,
        GLOBALS.c_int_X_words)
      trz(
        _fuse,
        GLOBALS.ovison)
      cond(
        (_EQ_Q(
            ocan(
              _fuse),
            _brick)
          trz(
            _brick,
            GLOBALS.ovison)
          cond(
            (set(
                oc,
                ocan(
                  _brick))
              set(
                brick_room,
                oroom(
                  _oc))),
            (set(
                brick_room,
                oroom(
                  _brick))))
          or(
            _brick_room,
            set(
              brick_room,
              GLOBALS.here))
          cond(
            (_EQ_Q(
                _brick_room,
                GLOBALS.here)
              mung_room(
                _brick_room,
                "The way is blocked by debris from an explosion.")
              jigs_up(
                GLOBALS.brick_boom)),
            (_EQ_Q(
                _brick_room,
                find_room(
                  "SAFE"))
              clock_int(
                GLOBALS.safin,
                5)
              GLOBALS.munged_room = oroom(
                  _brick)
              tell(
                "There is an explosion nearby.")
              cond(
                (memq(
                    _brick,
                    ocontents(
                      find_obj(
                        "SSLOT")))
                  trz(
                    find_obj(
                      "SSLOT"),
                    GLOBALS.ovison)
                  put(
                    find_obj(
                      "SAFE"),
                    GLOBALS.oopen_Q,
                    t)
                  GLOBALS.safe_flag_X_flag = t))),
            (tell(
                "There is an explosion nearby.")
              clock_int(
                GLOBALS.safin,
                5)
              GLOBALS.munged_room = _brick_room
              mapf(
                <>,
                /* FUNCTION */
                  (x) => (
                  cond,
                  (can_take_Q(
                        _x)
                      trz(
                        _x,
                        GLOBALS.ovison))),
                robjs(
                  _brick_room))
              cond(
                (_EQ_Q(
                    _brick_room,
                    find_room(
                      "LROOM"))
                  mapf(
                    <>,
                    function(
                      (x),
                      #decl
                        ((x)
                          object),
                      put(
                        _x,
                        GLOBALS.ocan,
                        <>)),
                    ocontents(
                      find_obj(
                        "TCASE")))
                  put(
                    find_obj(
                      "TCASE"),
                    GLOBALS.ocontents,
                    ())))))),
        (or(
            not(
              oroom(
                _fuse)),
            _EQ_Q(
              GLOBALS.here,
              oroom(
                _fuse)))
          tell(
            "The wire rapidly burns into nothingness."))))))

define(
  safe_mung,
  ("AUX"
    (rm
      GLOBALS.munged_room)),
  #decl
    ((rm)
      room),
  cond(
    (_EQ_Q(
        GLOBALS.here,
        _rm)
      jigs_up(
        cond(
          (rtrnn(
              _rm,
              GLOBALS.rhousebit)
            "The house shakes, and the ceiling of the room you're in collapses,\nturning you into a pancake."),
          ("The room trembles and 50,000 pounds of rock fall on you, turning you\ninto a pancake.")))),
    (tell(
        "You may recall your recent explosion.  Well, probably as a result of\nthat, you hear an ominous rumbling, as if one of the rooms in the\ndungeon had collapsed.")
      and(
        _EQ_Q(
          _rm,
          find_room(
            "SAFE")),
        clock_int(
          GLOBALS.ledin,
          8)))),
  mung_room(
    or(
      oroom(
        find_obj(
          "BRICK")),
      GLOBALS.here),
    "The way is blocked by debris from an explosion."))

define(
  ledge_mung,
  ("AUX"
    (rm
      find_room(
        "LEDG4"))),
  #decl
    ((rm)
      room),
  cond(
    (_EQ_Q(
        GLOBALS.here,
        _rm)
      cond(
        (avehicle(
            GLOBALS.winner)
          cond(
            (GLOBALS.btie_X_flag
              set(
                rm,
                find_room(
                  "VLBOT"))
              GLOBALS.bloc = _rm
              remove_object(
                find_obj(
                  "BALLO"))
              insert_object(
                find_obj(
                  "DBALL"),
                _rm)
              GLOBALS.btie_X_flag = <>
              GLOBALS.binf_X_flag = <>
              clock_disable(
                GLOBALS.bint)
              clock_disable(
                GLOBALS.brnin)
              jigs_up(
                "The ledge collapses, probably as a result of the explosion.  A large\nchunk of it, which is attached to the hook, drags you down to the\nground.  Fatally.")),
            (tell(
                "The ledge collapses, leaving you with no place to land.")))),
        (t
          jigs_up(
            "The force of the explosion has caused the ledge to collapse\nbelatedly.")))),
    (tell(
        "The ledge collapses, giving you a narrow escape."))),
  mung_room(
    _rm,
    "The ledge has collapsed and cannot be landed on."))

define(
  ledge_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.walk_in_X_words)
      and(
        GLOBALS.safe_flag_X_flag,
        tell(
          "Behind you, the walls of the safe room collapse into rubble."),
        GLOBALS.safe_flag_X_flag = <>)),
    (_EQ_Q(
        _prsa,
        GLOBALS.look_X_words)
      tell(
        "You are on a wide ledge high into the volcano.  The rim of the\nvolcano is about 200 feet above and there is a precipitous drop below\nto the bottom.",
        1,
        cond(
          (rtrnn(
              find_room(
                "SAFE"),
              GLOBALS.rmungbit)
            "The way to the south is blocked by rubble."),
          ("There is a small door to the south."))))))

define(
  blast,
  (),
  cond(
    (_EQ_Q(
        GLOBALS.here,
        find_room(
          "SAFE"))),
    (tell(
        "I don't really know how to do that."))))

define(
  volgnome,
  (),
  cond(
    (member(
        "LEDG",
        spname(
          rid(
            GLOBALS.here)))
      tell(
        "A volcano gnome seems to walk straight out of the wall and says\n'I have a very busy appointment schedule and little time to waste on\ntresspassers, but for a small fee, I'll show you the way out.'  You\nnotice the gnome nervously glancing at his watch.")
      insert_object(
        find_obj(
          "GNOME"),
        GLOBALS.here)),
    (clock_int(
        GLOBALS.vlgin,
        1))))

GLOBALS.gnome_door_X_flag = GLOBALS.gnome_flag_X_flag = <>

define(
  gnome_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prsa
      1(
        _pv))
    (prso
      2(
        _pv))),
  #decl
    ((pv)
      vector
      (prsa)
      verb
      (prso)
      prsobj),
  cond(
    (and(
        or(
          _EQ_Q(
            _prsa,
            GLOBALS.give_X_words),
          _EQ_Q(
            _prsa,
            GLOBALS.throw_X_words)),
        type_Q(
          _prso,
          object),
        cond(
          (n_EQ_Q(
              otval(
                _prso),
              0)
            tell(
              "Thank you very much for the",
              1,
              odesc2(
                _prso),
              ".  I don't believe \nI've ever seen one as beautiful. 'Follow me', he says, and a door \nappears on the west end of the ledge.  Through the door, you can see\na narrow chimney sloping steeply downward.")
            GLOBALS.gnome_door_X_flag = t),
          (tell(
              "'That wasn't quite what I had in mind', he says, crunching the",
              1,
              odesc2(
                _prso),
              "in his rock-hard hands.")
            remove_object(
              _prso))))),
    (_EQ_Q(
        _prsa,
        GLOBALS.c_int_X_words)
      tell(
        "The gnome glances at his watch.  'Oops.  I'm late for an\nappointment!' He disappears, leaving you alone on the ledge.")
      remove_object(
        find_obj(
          "GNOME"))),
    (tell(
        "The gnome appears increasingly nervous.")
      or(
        GLOBALS.gnome_flag_X_flag,
        clock_int(
          GLOBALS.gnoin,
          5))
      GLOBALS.gnome_flag_X_flag = t)))