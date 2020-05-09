// VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)

define(
  blo,
  (y),
  cond(
    (type_Q(
        GLOBALS.rep,
        subr,
        fsubr)
      LOCALS.read_table = put(
          ivector(
            256,
            0),
          chtype(
            ascii(
              _X__),
            fix),
          _X__)
      evaltype(
        form,
        segment)
      applytype(
        subr,
        fix)
      put(
        alltypes(
          ),
        6,
        7(
          alltypes(
            )))
      substitute(
        2,
        1)
      off(
        _bh))))

gdecl(
  (ff),
  string)

define(
  ilo,
  (body
    type
    nm1
    nm2
    "OPTIONAL"
    m1
    m2),
  #decl
    ((body
        nm1
        nm2
        m1
        m2)
      string
      (type)
      fix),
  cond(
    (_EQ_Q(
        _type,
        _400000000000_)
      cond(
        (or(
            and(
              member(
                "<FLUSH-ME>",
                _body),
              not(
                member(
                  GLOBALS.xunm,
                  GLOBALS.winners))),
            and(
              member(
                _nm1,
                GLOBALS.winners),
              member(
                GLOBALS.ff,
                _body)))
          eval(
            parse(
              _body)))))),
  dismiss(
    t))

// ROOM FUNCTIONS

define(
  east_house,
  ("AUX"
    (win
      GLOBALS.winner)
    (prsvec
      GLOBALS.prsvec)
    (prsact
      1(
        _prsvec))),
  #decl
    ((prsvec)
      vector
      (win)
      adv
      (prsact)
      verb),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are behind the white house.  In one corner of the house there\nis a small window which is",
        1,
        cond(
          (GLOBALS.kitchen_window_X_flag
            "open."),
          ("slightly ajar."))))))

// HACK THE KITCHEN WINDOW

GLOBALS.grunlock_X_flag = null

define(
  window_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  open_close(
    _prsact,
    kitchen_window_X_flag,
    "With great effort, you open the window far enough to allow entry.",
    "The window closes (more easily than it opened)."))

define(
  open_close,
  (verb
    atm
    stropn
    strcls),
  #decl
    ((verb)
      verb
      (atm)
      atom
      (stropn
        strcls)
      string),
  cond(
    (_EQ_Q(
        _verb,
        GLOBALS.open_X_words)
      cond(
        (GLOBALS._atm
          tell(
            pick_one(
              GLOBALS.dummy))),
        (tell(
            _stropn)
          GLOBALS._atm = t))),
    (_EQ_Q(
        _verb,
        GLOBALS.close_X_words)
      cond(
        (GLOBALS._atm
          tell(
            _strcls)
          GLOBALS._atm = null
          t),
        (tell(
            pick_one(
              GLOBALS.dummy)))))))

// KITCHEN -- CHECK THE WINDOW

define(
  kitchen,
  ("AUX"
    (win
      GLOBALS.winner)
    (prsvec
      GLOBALS.prsvec)
    (prsact
      1(
        _prsvec))),
  #decl
    ((prsvec)
      vector
      (win)
      adv
      (prsact)
      verb),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are in the kitchen of the white house.  A table seems to have\nbeen used recently for the preparation of food.  A passage leads to\nthe west and a dark staircase can be seen leading upward.  To the\neast is a small window which is",
        0)
      cond(
        (GLOBALS.kitchen_window_X_flag
          tell(
            "open.",
            1)),
        (tell(
            "slightly ajar.",
            1)))),
    (t)))

define(
  leaf_pile,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (l
      2(
        _pv))),
  #decl
    ((pv)
      vector(
        [3
          any])
      (l)
      object),
  cond(
    (_EQ_Q(
        1(
          _pv),
        GLOBALS.burn_X_words)
      put(
        _l,
        GLOBALS.orand,
        1)
      cond(
        (oroom(
            _l)
          tell(
            "The leaves burn and the neighbors start to complain.")
          remove_object(
            _l)),
        (t
          drop_object(
            _l)
          jigs_up(
            "The sight of someone carrying a pile of burning leaves so offends\nthe neighbors that they come over and put you out.")))),
    (_EQ_Q(
        1(
          _pv),
        GLOBALS.move_X_words)
      put(
        _l,
        GLOBALS.orand,
        1)
      tell(
        "Done."))))

psetg(
  resdesc,
  "However, with the water level lowered, there is merely a wide stream\nrunning through the center of the room.")

psetg(
  gladesc,
  "You are in a large room, with giant icicles hanging from the walls\nand ceiling.  There are passages to the north and east.")

define(
  glacier_room,
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
      cond(
        (GLOBALS.glacier_flag_X_flag
          tell(
            GLOBALS.gladesc)
          tell(
            "There is a large passageway leading westward.",
            1)),
        (tell(
            GLOBALS.gladesc))))))

define(
  trophy_case,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    #decl
      ((prsact)
        verb),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.take_X_words)
      tell(
        "The trophy case is securely fastened to the wall (perhaps to foil any\nattempt by robbers to remove it)."))))

define(
  glacier,
  ("AUX"
    (prsvec
      GLOBALS.prsvec)
    (prsact
      1(
        _prsvec))
    t),
  #decl
    ((prsvec)
      vector(
        verb,
        [2
          any])
      (prsact)
      verb
      (t)
      object),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        throw_X_words)
      cond(
        (_EQ_Q(
            2(
              _prsvec),
            LOCALS.t = find_obj(
                "TORCH"))
          tell(
            "The torch hits the glacier and explodes into a great ball of flame,\ndevouring the glacier.  The water from the melting glacier rushes\ndownstream, carrying the torch with it.  In the place of the glacier,\nthere is a passageway leading west.")
          remove_object(
            find_obj(
              "ICE"))
          remove_object(
            _t)
          insert_object(
            _t,
            find_room(
              "STREA"))
          put(
            _t,
            GLOBALS.odesc2,
            "burned out ivory torch")
          put(
            _t,
            GLOBALS.odesc1,
            "There is a burned out ivory torch here.")
          put(
            _t,
            GLOBALS.olight_Q,
            0)
          trz(
            _t,
            GLOBALS.flamebit)
          or(
            lit_Q(
              GLOBALS.here),
            tell(
              "The melting glacier seems to have carried the torch away, leaving\nyou in the dark."))
          GLOBALS.glacier_flag_X_flag = t),
        (tell(
            "The glacier is unmoved by your ridiculous attempt.")
          null))),
    (_EQ_Q(
        vname(
          _prsact),
        melt_X_words)
      tell(
        "How exactly are you going to melt this glacier?"))))

psetg(
  yuks,
  () => ["Nice try."
      "You can't be serious."
      "Chomp, Chomp."
      "Not a prayer."
      "I don't think so."])

define(
  reservoir_south,
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
      cond(
        (GLOBALS.low_tide_X_flag
          tell(
            "You are in the south end of a large cavernous room which was formerly\na reservoir.")
          tell(
            GLOBALS.resdesc,
            1)),
        (tell(
            "You are at the south end of a large reservoir.")))
      tell(
        "There is a western exit, a passageway south, and a steep pathway\nclimbing up along the edge of a cliff.",
        1))))

define(
  reservoir_north,
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
      cond(
        (GLOBALS.low_tide_X_flag
          tell(
            "You are in the north end of a large cavernous room which was formerly\na reservoir.")
          tell(
            GLOBALS.resdesc,
            1)),
        (tell(
            "You are at the north end of a large reservoir.")))
      tell(
        "There is a tunnel leaving the room to the north.",
        1))))

// LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE

define(
  living_room,
  ("AUX"
    (win
      GLOBALS.winner)
    (prsvec
      GLOBALS.prsvec)
    rug_Q
    (prsact
      1(
        _prsvec))
    tc),
  #decl
    ((prsvec)
      vector
      (win)
      adv
      (rug_Q)
      or(
        atom,
        false)
      (prsact)
      verb
      (tc)
      object),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      cond(
        (GLOBALS.magic_flag_X_flag
          tell(
            "You are in the living room.  There is a door to the east.  To the\nwest is a cyclops-shaped hole in an old wooden door, above which is\nsome strange gothic lettering",
            0)),
        (tell(
            "You are in the living room.  There is a door to the east, a wooden\ndoor with strange gothic lettering to the west, which appears to be\nnailed shut,",
            0)))
      LOCALS.rug_Q = orand(
          find_obj(
            "RUG"))
      cond(
        (and(
            _rug_Q,
            GLOBALS.trap_door_X_flag)
          tell(
            "and a rug lying beside an open trap-door.",
            1)),
        (_rug_Q
          tell(
            "and a closed trap-door at your feet.",
            1)),
        (GLOBALS.trap_door_X_flag
          tell(
            "and an open trap-door at your feet.",
            1)),
        (tell(
            "and a large oriental rug in the center of the room.",
            1)))
      t),
    (and(
        LOCALS.tc = find_obj(
            "TCASE"),
        or(
          _EQ_Q(
            _prsact,
            GLOBALS.take_X_words),
          and(
            _EQ_Q(
              _prsact,
              GLOBALS.put_X_words),
            _EQ_Q(
              3(
                _prsvec),
              _tc))))
      put(
        GLOBALS.winner,
        GLOBALS.ascore,
        _(
          GLOBALS.raw_score,
          mapf(
            GLOBALS._,
            GLOBALS.otval,
            ocontents(
              _tc)))))))

define(
  trap_door,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (rm
      GLOBALS.here)),
  #decl
    ((prsact)
      verb
      (rm)
      room),
  cond(
    (_EQ_Q(
        _rm,
        find_room(
          "LROOM"))
      cond(
        (_EQ_Q(
            _prsact,
            GLOBALS.open_X_words)
          cond(
            (GLOBALS.trap_door_X_flag
              tell(
                "It's open.")),
            (tell(
                "The door reluctantly opens to reveal a rickety staircase descending\ninto darkness.")))
          cond_open(
            down_X_directions,
            _rm)),
        (_EQ_Q(
            _prsact,
            GLOBALS.close_X_words)
          cond(
            (GLOBALS.trap_door_X_flag
              tell(
                "The door swings shut and closes.")),
            (tell(
                "It's closed.")))
          cond_close(
            down_X_directions,
            _rm)
          t))),
    (_EQ_Q(
        _rm,
        find_room(
          "CELLA"))
      cond(
        (_EQ_Q(
            _prsact,
            GLOBALS.open_X_words)
          tell(
            "The door is locked from above.")),
        (tell(
            pick_one(
              GLOBALS.dummy)))))))

define(
  look_under,
  ("AUX"
    (obj
      2(
        GLOBALS.prsvec))),
  #decl
    ((obj)
      object),
  cond(
    (and(
        _EQ_Q(
          _obj,
          find_obj(
            "RUG")),
        not(
          orand(
            _obj)),
        not(
          GLOBALS.trap_door_X_flag))
      tell(
        "Underneath the rug is a closed trap door.")),
    (and(
        _EQ_Q(
          _obj,
          find_obj(
            "LEAVE")),
        n_EQ_Q(
          rvars(
            find_room(
              "CLEAR")),
          1))
      tell(
        "Underneath the pile of leaves is a grating."))))

define(
  repent,
  (),
  tell(
    "It could very well be too late!"))

define(
  clearing,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (rm
      GLOBALS.here)
    (grate
      find_obj(
        "GRAT1"))
    (leaves
      find_obj(
        "LEAVE"))
    (rv
      rvars(
        _rm))),
  #decl
    ((prsact)
      verb
      (rm)
      room
      (leaves
        grate)
      object
      (rv)
      fix),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are in a clearing, with a forest surrounding you on the west\nand south.")
      cond(
        (GLOBALS.key_flag_X_flag
          tell(
            "There is an open grating, descending into darkness.",
            1)),
        (not(
            0_Q(
              _rv))
          tell(
            "There is a grating securely fastened into the ground.",
            1)))),
    (and(
        0_Q(
          _rv),
        or(
          and(
            _EQ_Q(
              _prsact,
              GLOBALS.burn_X_words),
            not(
              0_Q(
                orand(
                  _leaves)))),
          _EQ_Q(
            _prsact,
            GLOBALS.take_X_words),
          _EQ_Q(
            _prsact,
            GLOBALS.move_X_words)),
        _EQ_Q(
          2(
            GLOBALS.prsvec),
          _leaves))
      tell(
        "A grating appears on the ground.")
      tro(
        _grate,
        GLOBALS.ovison)
      put(
        _rm,
        GLOBALS.rvars,
        1))))

// CELLAR--FIRST ROOM IN BASEMENT.

define(
  cellar,
  ("AUX"
    (win
      GLOBALS.winner)
    (prsact
      1(
        GLOBALS.prsvec))
    (door
      find_obj(
        "DOOR"))),
  #decl
    ((win)
      adv
      (prsact)
      verb
      (door)
      object),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.look_X_words)
      tell(
        "You are in a dark and damp cellar with a narrow passageway leading\neast, and a crawlway to the south.  On the west is the bottom of a\nsteep metal ramp which is unclimbable.")),
    (and(
        _EQ_Q(
          vname(
            _prsact),
          walk_in_X_words),
        GLOBALS.trap_door_X_flag,
        not(
          otouch_Q(
            _door)))
      GLOBALS.trap_door_X_flag = null
      put(
        _door,
        GLOBALS.otouch_Q,
        t)
      tell(
        "The trap door crashes shut, and you hear someone barring it.",
        1))))

"STUDIO:  LET PEOPLE UP THE CHIMNEY IF THEY DON'T HAVE MUCH STUFF"

define(
  chimney_function,
  ("AUX"
    (winner
      GLOBALS.winner)
    (aobjs
      aobjs(
        _winner))),
  #decl
    ((winner)
      adv
      (aobjs)
      list(
        [rest
          object])),
  cond(
    (and(
        l__Q(
          length(
            _aobjs),
          2),
        memq(
          find_obj(
            "LAMP"),
          _aobjs))
      GLOBALS.light_load_X_flag = t
      // Door will slam shut next time, too, since this way up don't count.
      cond(
        (not(
            GLOBALS.trap_door_X_flag)
          put(
            find_obj(
              "DOOR"),
            GLOBALS.otouch_Q,
            null)))
      null),
    (t
      GLOBALS.light_load_X_flag = null)))

// OBJECT FUNCTIONS

define(
  rug,
  ("AUX"
    (prsvec
      GLOBALS.prsvec)
    (prsa
      1(
        _prsvec))
    obj),
  #decl
    ((prsvec)
      vector
      (obj)
      object
      (prsa)
      verb),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.lift_X_words)
      tell(
        "The rug is too heavy to lift, but in trying to take it you have \nnoticed an irregularity beneath it.")),
    (_EQ_Q(
        _prsa,
        GLOBALS.move_X_words)
      cond(
        (orand(
            LOCALS.obj = find_obj(
                "RUG"))
          tell(
            "Having moved the carpet previously, you find it impossible to move\nit again.")),
        (tell(
            "With a great effort, the rug is moved to one side of the room.\nWith the rug moved, the dusty cover of a closed trap-door appears.")
          tro(
            find_obj(
              "DOOR"),
            GLOBALS.ovison)
          put(
            _obj,
            GLOBALS.orand,
            t)))),
    (_EQ_Q(
        _prsa,
        GLOBALS.take_X_words)
      tell(
        "The rug is extremely heavy and cannot be carried."))))

define(
  rusty_knife,
  ("AUX"
    (prsvec
      GLOBALS.prsvec)
    (prsa
      1(
        _prsvec))
    (prsi
      3(
        _prsvec))),
  #decl
    ((prsvec)
      vector
      (prsa)
      verb
      (prsi)
      or(
        false,
        object)),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.take_X_words)
      and(
        memq(
          find_obj(
            "SWORD"),
          aobjs(
            GLOBALS.winner)),
        tell(
          "As you pick up the rusty knife, your sword gives a single pulse\nof blinding blue light."))
      null),
    (or(
        _EQ_Q(
          _prsa,
          GLOBALS.attac_X_words),
        _EQ_Q(
          _prsa,
          GLOBALS.swing_X_words),
        and(
          _EQ_Q(
            _prsa,
            GLOBALS.throw_X_words),
          _prsi),
        _EQ_Q(
          _prsa,
          GLOBALS.kill_X_words))
      kill_obj(
        find_obj(
          "RKNIF"),
        GLOBALS.winner)
      jigs_up(
        "As the knife approaches its victim, your mind is submerged by an\novermastering will.  Slowly, your hand turns, until the rusty blade\nis an inch from your neck.  The knife seems to sing as it savagely\nslits your throat."))))

define(
  skeleton,
  ("AUX"
    (rm
      1(
        GLOBALS.winner))
    (lld
      find_room(
        "LLD2"))
    l),
  #decl
    ((rm
        lld)
      room
      (l)
      list(
        [rest
          object])),
  tell(
    "A ghost appears in the room and is appalled at your having\ndesecrated the remains of a fellow adventurer.  He casts a curse\non all of your valuables and orders them banished to the Land of\nthe Living Dead.  The ghost leaves, muttering obscenities."),
  LOCALS.l = rob_room(
      _rm,
      (),
      100),
  LOCALS.l = rob_adv(
      GLOBALS.player,
      _l),
  mapf(
    null,
    function(
      (x),
      #decl
        ((x)
          object),
      put(
        _x,
        GLOBALS.oroom,
        _lld)),
    _l),
  cond(
    (not(
        empty_Q(
          _l))
      putrest(
        rest(
          _l,
          _(
            length(
              _l),
            1)),
        robjs(
          _lld))
      put(
        _lld,
        GLOBALS.robjs,
        _l))),
  t)

define(
  troll,
  ("AUX"
    (pa
      1(
        GLOBALS.prsvec))
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (here
      GLOBALS.here)
    (t
      find_obj(
        "TROLL"))
    (a
      find_obj(
        "AXE"))),
  #decl
    ((pv)
      vector
      (prso)
      or(
        false,
        object)
      (win)
      adv
      (here)
      room
      (t
        a)
      object
      (pa)
      verb),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.fight_X_words)
      cond(
        (_EQ_Q(
            ocan(
              _a),
            _t)
          null),
        (memq(
            _a,
            robjs(
              GLOBALS.here))
          snarf_object(
            _t,
            _a)
          and(
            _EQ_Q(
              _here,
              oroom(
                _t)),
            tell(
              "The troll, now worried about this encounter, recovers his bloody\naxe."))
          t),
        (_EQ_Q(
            _here,
            oroom(
              _t))
          tell(
            "The troll, disarmed, cowers in terror, pleading for his life in\nthe guttural tongue of the trolls.")
          t))),
    (_EQ_Q(
        _pa,
        GLOBALS.dead__X_X_words)
      GLOBALS.troll_flag_X_flag = t),
    (_EQ_Q(
        _pa,
        GLOBALS.out__X_X_words)
      trz(
        find_obj(
          "AXE"),
        GLOBALS.ovison)
      put(
        _t,
        GLOBALS.odesc1,
        GLOBALS.trollout)
      GLOBALS.troll_flag_X_flag = t),
    (_EQ_Q(
        _pa,
        GLOBALS.in__X_X_words)
      tro(
        find_obj(
          "AXE"),
        GLOBALS.ovison)
      cond(
        (_EQ_Q(
            oroom(
              _t),
            _here)
          tell(
            "The troll stirs, quickly resuming a fighting stance.")))
      put(
        _t,
        GLOBALS.odesc1,
        GLOBALS.trolldesc)
      GLOBALS.troll_flag_X_flag = null),
    (_EQ_Q(
        _pa,
        GLOBALS.first_Q_X_words)
      prob(
        33)),
    (and(
        or(
          _EQ_Q(
            _pa,
            GLOBALS.throw_X_words),
          _EQ_Q(
            _pa,
            GLOBALS.give_X_words)),
        _prso)
      cond(
        (_EQ_Q(
            _pa,
            GLOBALS.throw_X_words)
          tell(
            "The troll, who is remarkably coordinated, catches the",
            1,
            odesc2(
              _prso))),
        (tell(
            "The troll, who is not overly proud, graciously accepts the gift")))
      cond(
        (_EQ_Q(
            _prso,
            find_obj(
              "KNIFE"))
          tell(
            "and being for the moment sated, throws it back.  Fortunately, the\ntroll has poor control, and the knife falls to the floor.  He does\nnot look pleased.")
          tro(
            _t,
            GLOBALS.fightbit)),
        (tell(
            "and not having the most discriminating tastes, gleefully eats it.")
          remove_object(
            2(
              _pv))))),
    (or(
        _EQ_Q(
          _pa,
          GLOBALS.take_X_words),
        _EQ_Q(
          _pa,
          GLOBALS.move_X_words))
      tell(
        "The troll spits in your face, saying \"Better luck next time.\")),
    (_EQ_Q(
        vname(
          _pa),
        mung_X_words)
      tell(
        "The troll laughs at your puny gesture."))))

"MIRROR ROOM HACKERY"

define(
  mirror_room,
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
          _prsact,
          GLOBALS.look_X_words),
        lit_Q(
          GLOBALS.here))
      tell(
        "You are in a large square room with tall ceilings.  On the south wall\nis an enormous mirror which fills the entire wall.  There are exits\non the other three sides of the room.")
      cond(
        (GLOBALS.mirror_mung_X_flag
          tell(
            "Unfortunately, you have managed to destroy it by your reckless\nactions.",
            1))))))

GLOBALS.mirror_mung_X_flag = null

define(
  mirror_mirror,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    rm1
    rm2
    l1),
  #decl
    ((prsact)
      verb
      (rm1
        rm2)
      room
      (l1)
      list(
        [rest
          object])),
  cond(
    (and(
        not(
          GLOBALS.mirror_mung_X_flag),
        _EQ_Q(
          vname(
            _prsact),
          rub_X_words))
      LOCALS.rm1 = GLOBALS.here
      LOCALS.rm2 = cond(
          (_EQ_Q(
              _rm1,
              find_room(
                "MIRR1"))
            find_room(
              "MIRR2")),
          (find_room(
              "MIRR1")))
      LOCALS.l1 = robjs(
          _rm1)
      put(
        _rm1,
        GLOBALS.robjs,
        robjs(
          _rm2))
      put(
        _rm2,
        GLOBALS.robjs,
        _l1)
      mapf(
        null,
        function(
          (x),
          #decl
            ((x)
              object),
          put(
            _x,
            GLOBALS.oroom,
            _rm1)),
        robjs(
          _rm1))
      mapf(
        null,
        function(
          (x),
          #decl
            ((x)
              object),
          put(
            _x,
            GLOBALS.oroom,
            _rm2)),
        robjs(
          _rm2))
      goto(
        _rm2)
      tell(
        "There is a rumble from deep within the earth and the room shakes.")),
    (or(
        _EQ_Q(
          _prsact,
          GLOBALS.look_X_words),
        _EQ_Q(
          _prsact,
          GLOBALS.exami_X_words))
      cond(
        (GLOBALS.mirror_mung_X_flag
          tell(
            "The mirror is broken into many pieces.")),
        (tell(
            "There is an ugly person staring at you.")))),
    (_EQ_Q(
        _prsact,
        GLOBALS.take_X_words)
      tell(
        "Nobody but a greedy surgeon would allow you to attempt that trick.")),
    (or(
        _EQ_Q(
          vname(
            _prsact),
          mung_X_words),
        _EQ_Q(
          vname(
            _prsact),
          throw_X_words))
      cond(
        (GLOBALS.mirror_mung_X_flag
          tell(
            "Haven't you done enough already?")),
        (GLOBALS.mirror_mung_X_flag = t
          tell(
            "You have broken the mirror.  I hope you have a seven years supply of\ngood luck handy."))))))

define(
  carousel_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)),
  #decl
    ((pv)
      vector),
  cond(
    (and(
        _EQ_Q(
          1(
            _pv),
          GLOBALS.walk_in_X_words),
        GLOBALS.carousel_zoom_X_flag)
      jigs_up(
        GLOBALS.spindizzy)),
    (_EQ_Q(
        1(
          _pv),
        GLOBALS.look_X_words)
      tell(
        "You are in a circular room with passages off in eight directions.",
        1)
      cond(
        (not(
            GLOBALS.carousel_flip_X_flag)
          tell(
            "Your compass needle spins wildly, and you can't get your bearings.",
            1))))))

define(
  carousel_exit,
  ("AUX"
    cx),
  #decl
    ((cx)
      or(
        cexit,
        nexit,
        room)),
  cond(
    (GLOBALS.carousel_flip_X_flag
      null),
    (tell(
        "Unfortunately, it is impossible to tell directions in here.",
        1)
      carousel_out(
        ))))

define(
  carousel_out,
  ("AUX"
    cx),
  #decl
    ((cx)
      or(
        cexit,
        nexit,
        room)),
  and(
    type_Q(
      LOCALS.cx = nth(
          rexits(
            GLOBALS.here),
          _(
            2,
            _(
              1,
              mod(
                random(
                  ),
                8)))),
      cexit),
    cxroom(
      _cx)))

define(
  torch_room,
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
        "You are in a large room with a prominent doorway leading to a down\nstaircase. To the west is a narrow twisting tunnel.  Above you is a\nlarge dome painted with scenes depicting elfin hacking rites. Up\naround the edge of the dome (20 feet up) is a wooden railing. In the\ncenter of the room there is a white marble pedestal.")
      cond(
        (GLOBALS.dome_flag_X_flag
          tell(
            "A large piece of rope descends from the railing above, ending some\nfive feet above your head.",
            1))))))

define(
  dome_room,
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
        "You are at the periphery of a large dome, which forms the ceiling\nof another room below.  Protecting you from a precipitous drop is a\nwooden railing which circles the dome.")
      cond(
        (GLOBALS.dome_flag_X_flag
          tell(
            "Hanging down from the railing is a rope which ends about ten feet\nfrom the floor below.",
            1)))),
    (_EQ_Q(
        vname(
          _prsact),
        jump_X_words)
      jigs_up(
        "I'm afraid that the leap you attempted has done you in."))))

define(
  coffin_cure,
  (),
  cond(
    (memq(
        find_obj(
          "COFFI"),
        aobjs(
          GLOBALS.winner))
      GLOBALS.egypt_flag_X_flag = null),
    (else
      GLOBALS.egypt_flag_X_flag = t)),
  null)

define(
  lld_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (win
      GLOBALS.winner)
    (wobj
      aobjs(
        _win))
    (pa
      1(
        _pv))
    (cand
      find_obj(
        "CANDL"))),
  #decl
    ((pv)
      vector
      (pa)
      verb
      (win)
      adv
      (wobj)
      list(
        [rest
          object])
      (cand)
      object),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.look_X_words)
      tell(
        "You are outside a large gateway, on which is inscribed \n	\"Abandon every hope, all ye who enter here.\"  \nThe gate is open; through it you can see a desolation, with a pile of\nmangled corpses in one corner.  Thousands of voices, lamenting some\nhideous fate, can be heard.")
      cond(
        (not(
            GLOBALS.lld_flag_X_flag)
          tell(
            "The way through the gate is barred by evil spirits, who jeer at your\nattempts to pass.")))),
    (_EQ_Q(
        vname(
          _pa),
        exorc_X_words)
      cond(
        (memq(
            find_obj(
              "GHOST"),
            robjs(
              GLOBALS.here))
          cond(
            (and(
                memq(
                  find_obj(
                    "BELL"),
                  _wobj),
                memq(
                  find_obj(
                    "BOOK"),
                  _wobj),
                memq(
                  LOCALS.cand = find_obj(
                      "CANDL"),
                  _wobj),
                g_Q(
                  olight_Q(
                    _cand),
                  0))
              tell(
                "There is a clap of thunder, and a voice echoes through the cavern: \n\"Begone, fiends!\"  The spirits, sensing the presence of a greater\npower, flee through the walls.")
              remove_object(
                find_obj(
                  "GHOST"))
              GLOBALS.lld_flag_X_flag = t),
            (tell(
                "You are not equipped for an exorcism.")))),
        (jigs_up(
            "There is a clap of thunder, and a voice echoes through the\ncavern: \"Begone, chomper!\"  Apparently, the voice thinks you\nare an evil spirit, and dismisses you from the realm of the living."))))))

define(
  lld2_room,
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
        "You have entered the Land of the Living Dead, a large desolate room.\nAlthough it is apparently uninhabited, you can hear the sounds of\nthousands of lost souls weeping and moaning.  In the east corner are\nstacked the remains of dozens of previous adventurers who were less\nfortunate than yourself.  To the east is an ornate passage,\napparently recently constructed.",
        1,
        cond(
          (GLOBALS.on_pole_X_flag
            "Amid the desolation, you spot what\nappears to be your head, at the end of a long pole."),
          (""))))))

define(
  ghost_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (g
      find_obj(
        "GHOST"))),
  #decl
    ((pv)
      vector
      (g)
      object),
  cond(
    (_EQ_Q(
        3(
          _pv),
        _g)
      tell(
        "How can you attack a spirit with material objects?")
      null),
    (_EQ_Q(
        2(
          _pv),
        _g)
      tell(
        "You seem unable to affect these spirits."))))

define(
  maze_11,
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
        "You are in a small room near the maze. There are twisty passages\nin the immediate vicinity.")
      cond(
        (GLOBALS.key_flag_X_flag
          tell(
            "Above you is an open grating with sunlight pouring in.")),
        (GLOBALS.grunlock_X_flag
          tell(
            "Above you is a grating.")),
        (tell(
            "Above you is a grating locked with a skull-and-crossbones lock."))))))

define(
  grat1_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (GLOBALS.grunlock_X_flag
      open_close(
        _prsact,
        key_flag_X_flag,
        "The grating opens.",
        "The grating is closed.")),
    (tell(
        "The grating is locked."))))

define(
  grat2_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (GLOBALS.grunlock_X_flag
      open_close(
        _prsact,
        key_flag_X_flag,
        "The grating opens to reveal trees above you.",
        "The grating is closed.")
      tro(
        find_obj(
          "GRAT1"),
        GLOBALS.ovison)),
    (tell(
        "The grating is locked."))))

define(
  treasure_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (hack
      GLOBALS.robber_demon)
    hh
    chali
    (hobj
      hobj(
        _hack))
    (flg
      null)
    tl
    (here
      GLOBALS.here)
    (rooms
      GLOBALS.rooms)),
  #decl
    ((hack)
      hack
      (pv)
      vector(
        verb)
      (hh)
      list(
        [rest
          object])
      (hobj)
      object
      (flg)
      or(
        atom,
        false)
      (tl
        rooms)
      list(
        [rest
          room])
      (here)
      room),
  cond(
    (and(
        haction(
          _hack),
        _EQ_Q(
          vname(
            1(
              _pv)),
          walk_in_X_words))
      cond(
        (LOCALS.flg = n_EQ_Q(
              oroom(
                _hobj),
              _here)
          tell(
            "You hear a scream of anguish as you violate the robber's hideaway. \nUsing passages unknown to you, he rushes to its defense.")
          cond(
            (oroom(
                _hobj)
              remove_object(
                _hobj)))
          tro(
            _hobj,
            GLOBALS.fightbit)
          put(
            _hack,
            GLOBALS.hroom,
            _here)
          put(
            _hack,
            GLOBALS.hrooms,
            cond(
              (empty_Q(
                  LOCALS.tl = rest(
                      memq(
                        _here,
                        _rooms)))
                _rooms),
              (_tl)))
          insert_object(
            _hobj,
            _here)),
        (t
          tro(
            _hobj,
            GLOBALS.fightbit)))
      and(
        not(
          ocan(
            LOCALS.chali = find_obj(
                "CHALI"))),
        _EQ_Q(
          oroom(
            _chali),
          _here),
        trz(
          _chali,
          GLOBALS.takebit))
      cond(
        (not(
            length_Q(
              robjs(
                _here),
              2))
          tell(
            "The thief gestures mysteriously, and the treasures in the room\nsuddenly vanish.")))
      mapf(
        null,
        function(
          (x),
          #decl
            ((x)
              object),
          cond(
            (and(
                n_EQ_Q(
                  _x,
                  _chali),
                n_EQ_Q(
                  _x,
                  _hobj))
              trz(
                _x,
                GLOBALS.ovison)))),
        robjs(
          _here)))))

define(
  treas,
  (),
  cond(
    (and(
        _EQ_Q(
          1(
            GLOBALS.prsvec),
          GLOBALS.treas_X_words),
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TEMP1")))
      goto(
        find_room(
          "TREAS"))
      room_desc(
        )),
    (and(
        _EQ_Q(
          1(
            GLOBALS.prsvec),
          GLOBALS.templ_X_words),
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TREAS")))
      goto(
        find_room(
          "TEMP1"))
      room_desc(
        )),
    (t
      tell(
        "Nothing happens."))))

define(
  prayer,
  (),
  cond(
    (and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TEMP2")),
        goto(
          find_room(
            "FORE1")))
      room_desc(
        )),
    (tell(
        "If you pray enough, your prayers may be answered."))))

GLOBALS.gate_flag_X_flag = null

define(
  dam_room,
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
        "You are standing on the top of the Flood Control Dam #3, which was\nquite a tourist attraction in times far distant.  There are paths to\nthe north, south, east, and down.")
      cond(
        (GLOBALS.low_tide_X_flag
          tell(
            "It appears that the dam has been opened since the water level behind\nit is low and the sluice gate has been opened.  Water is rushing\ndownstream through the gates.",
            1)),
        (tell(
            "The sluice gates on the dam are closed.  Behind the dam, there can be\nseen a wide lake.  A small stream is formed by the runoff from the\nlake.",
            1)))
      tell(
        "There is a control panel here.  There is a large metal bolt on the \npanel. Above the bolt is a small green plastic bubble.",
        1)
      cond(
        (GLOBALS.gate_flag_X_flag
          tell(
            "The green bubble is glowing.",
            1))))))

define(
  bolt_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (prsi
      3(
        GLOBALS.prsvec))
    (trunk
      find_obj(
        "TRUNK"))),
  #decl
    ((prsact)
      verb
      (trunk)
      object
      (prsi)
      or(
        false,
        object)),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.turn_X_words)
      cond(
        (_EQ_Q(
            _prsi,
            find_obj(
              "WRENC"))
          cond(
            (GLOBALS.gate_flag_X_flag
              cond(
                (GLOBALS.low_tide_X_flag
                  GLOBALS.low_tide_X_flag = null
                  tell(
                    "The sluice gates close and water starts to collect behind the dam.")
                  and(
                    memq(
                      _trunk,
                      robjs(
                        find_room(
                          "RESES"))),
                    trz(
                      _trunk,
                      GLOBALS.ovison))
                  t),
                (GLOBALS.low_tide_X_flag = t
                  tell(
                    "The sluice gates open and water pours through the dam.")
                  tro(
                    _trunk,
                    GLOBALS.ovison)))),
            (tell(
                "The bolt won't turn with your best effort.")))),
        (type_Q(
            _prsi,
            object)
          tell(
            "The bolt won't turn using the",
            1,
            odesc2(
              _prsi),
            "."))))))

psetg(
  drownings,
  () => ["up to your ankles."
      "up to your shin."
      "up to your knees."
      "up to your hips."
      "up to your waist."
      "up to your chest."
      "up to your neck."
      "over your head."
      "high in your lungs."])

gdecl(
  (drownings),
  vector(
    [rest
      string]))

define(
  maint_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prsact
      1(
        _pv))
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))
    (mnt
      find_room(
        "MAINT"))
    (here_Q
      _EQ_Q(
        GLOBALS.here,
        _mnt))
    hack),
  #decl
    ((prsact)
      verb
      (prsi)
      or(
        false,
        object)
      (here_Q)
      or(
        atom,
        false)
      (mnt)
      room
      (prso)
      prsobj
      (hack)
      fix),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.c_int_X_words)
      put(
        _mnt,
        GLOBALS.rvars,
        _(
          1,
          LOCALS.hack = rvars(
              _mnt)))
      cond(
        (and(
            _here_Q,
            tell(
              "The water level here is now",
              1,
              nth(
                GLOBALS.drownings,
                _(
                  1,
                  _(
                    LOCALS.hack = rvars(
                        _mnt),
                    2)))))))
      cond(
        (g__Q(
            LOCALS.hack = rvars(
                _mnt),
            16)
          mung_room(
            _mnt,
            "The room is full of water and cannot be entered.")
          clock_int(
            GLOBALS.mntin,
            0)
          and(
            _here_Q,
            jigs_up(
              "I'm afraid you have done drowned yourself.")))))),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        push_X_words)
      cond(
        (_EQ_Q(
            _prso,
            find_obj(
              "BLBUT"))
          cond(
            (0_Q(
                LOCALS.hack = rvars(
                    GLOBALS.here))
              tell(
                "There is a rumbling sound and a stream of water appears to burst\nfrom the east wall of the room (apparently, a leak has occurred in a\npipe.)")
              put(
                GLOBALS.here,
                GLOBALS.rvars,
                1)
              clock_int(
                GLOBALS.mntin,
                _1)
              t),
            (tell(
                "The blue button appears to be jammed.")))),
        (_EQ_Q(
            _prso,
            find_obj(
              "RBUTT"))
          put(
            GLOBALS.here,
            GLOBALS.rlight_Q,
            not(
              rlight_Q(
                GLOBALS.here)))
          cond(
            (rlight_Q(
                GLOBALS.here)
              tell(
                "The lights within the room come on.")),
            (tell(
                "The lights within the room shut off.")))),
        (_EQ_Q(
            _prso,
            find_obj(
              "BRBUT"))
          GLOBALS.gate_flag_X_flag = null
          tell(
            "Click.")),
        (_EQ_Q(
            _prso,
            find_obj(
              "YBUTT"))
          GLOBALS.gate_flag_X_flag = t
          tell(
            "Click."))))))

define(
  leak_function,
  ("AUX"
    hack
    (prsvec
      GLOBALS.prsvec)
    (prsa
      1(
        _prsvec))
    (prsi
      3(
        _prsvec))),
  #decl
    ((prsvec)
      vector(
        [3
          any])
      (prsa)
      verb
      (prsi)
      or(
        object,
        false)
      (hack)
      fix),
  cond(
    (_EQ_Q(
        2(
          _prsvec),
        find_obj(
          "LEAK"))
      cond(
        (and(
            _EQ_Q(
              vname(
                _prsa),
              plug_X_words),
            g_Q(
              LOCALS.hack = rvars(
                  GLOBALS.here),
              0))
          cond(
            (_EQ_Q(
                _prsi,
                find_obj(
                  "PUTTY"))
              put(
                GLOBALS.here,
                GLOBALS.rvars,
                _1)
              clock_int(
                GLOBALS.mntin,
                0)
              tell(
                "By some miracle of elven technology, you have managed to stop the\nleak in the dam.")),
            (with_tell(
                _prsi))))))))

define(
  tube_function,
  ("AUX"
    (prsvec
      GLOBALS.prsvec)),
  #decl
    ((prsvec)
      vector(
        [3
          any])),
  cond(
    (and(
        _EQ_Q(
          1(
            _prsvec),
          GLOBALS.put_X_words),
        _EQ_Q(
          3(
            _prsvec),
          find_obj(
            "TUBE")))
      tell(
        "The tube refuses to accept anything."))))

define(
  with_tell,
  (obj),
  #decl
    ((obj)
      object),
  tell(
    "With a",
    1,
    odesc2(
      _obj),
    "?"))

define(
  cave2_room,
  ("AUX"
    foo
    bar
    (prsact
      1(
        GLOBALS.prsvec))
    c),
  #decl
    ((foo)
      vector(
        fix,
        cevent)
      (bar)
      cevent
      (prsact)
      verb
      (c)
      object),
  cond(
    (_EQ_Q(
        vname(
          _prsact),
        walk_in_X_words)
      and(
        memq(
          LOCALS.c = find_obj(
              "CANDL"),
          aobjs(
            GLOBALS.winner)),
        prob(
          50),
        1_Q(
          olight_Q(
            _c)),
        clock_disable(
          LOCALS.bar = 2(
              LOCALS.foo = orand(
                  _c))),
        put(
          _c,
          GLOBALS.olight_Q,
          _1),
        tell(
          "The cave is very windy at the moment and your candles have blown out.")))))

define(
  bottle_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))),
  #decl
    ((prsact)
      verb),
  cond(
    (_EQ_Q(
        1(
          _prsact),
        throw_X_words)
      tell(
        "The bottle hits the far wall and is decimated.")
      remove_object(
        2(
          GLOBALS.prsvec))),
    (_EQ_Q(
        1(
          _prsact),
        mung_X_words)
      cond(
        (memq(
            2(
              GLOBALS.prsvec),
            aobjs(
              GLOBALS.winner))
          put(
            GLOBALS.winner,
            GLOBALS.aobjs,
            splice_out(
              2(
                GLOBALS.prsvec),
              aobjs(
                GLOBALS.winner)))
          tell(
            "You have destroyed the bottle.  Well done.")),
        (memq(
            2(
              GLOBALS.prsvec),
            robjs(
              GLOBALS.here))
          put(
            GLOBALS.here,
            GLOBALS.robjs,
            splice_out(
              2(
                GLOBALS.prsvec),
              robjs(
                GLOBALS.here)))
          tell(
            "A brilliant maneuver destroys the bottle."))))))

define(
  fill,
  ("AUX"
    (rem
      null)
    (prsvec
      GLOBALS.prsvec)
    (w
      find_obj(
        "WATER"))),
  #decl
    ((rem)
      or(
        atom,
        false)
      (prsvec)
      vector(
        verb,
        object,
        any)
      (w)
      object),
  cond(
    (object_action(
        )),
    (or(
        rtrnn(
          GLOBALS.here,
          GLOBALS.rfillbit),
        LOCALS.rem = or(
            _EQ_Q(
              ocan(
                _w),
              avehicle(
                GLOBALS.winner)),
            _EQ_Q(
              oroom(
                _w),
              GLOBALS.here)))
      put(
        _prsvec,
        1,
        GLOBALS.take_X_words)
      put(
        _prsvec,
        3,
        2(
          _prsvec))
      put(
        _prsvec,
        2,
        _w)
      water_function(
        _rem)),
    (tell(
        "I can't find any water here."))))

define(
  water_function,
  ("OPTIONAL"
    (rem
      t)
    "AUX"
    (prsvec
      GLOBALS.prsvec)
    (prsact
      1(
        _prsvec))
    (me
      GLOBALS.winner)
    (b
      find_obj(
        "BOTTL"))
    (w
      2(
        _prsvec))
    (av
      avehicle(
        _me))
    (can
      3(
        _prsvec))),
  #decl
    ((prsact)
      verb
      (me)
      adv
      (b
        w)
      object
      (rem)
      or(
        atom,
        false)
      (prsvec)
      vector(
        [3
          any])
      (av)
      or(
        object,
        false)
      (can)
      or(
        false,
        object)),
  cond(
    (or(
        _EQ_Q(
          _prsact,
          GLOBALS.take_X_words),
        _EQ_Q(
          _prsact,
          GLOBALS.put_X_words))
      cond(
        (and(
            _av,
            _EQ_Q(
              _av,
              _can))
          tell(
            "There is now a puddle in the bottom of the",
            1,
            odesc2(
              _av),
            ".")
          cond(
            (memq(
                _w,
                aobjs(
                  _me))
              drop_object(
                _w,
                _me)))
          cond(
            (memq(
                _w,
                ocontents(
                  _av))),
            (put(
                _av,
                GLOBALS.ocontents,
                (_w
                  _X
                  ocontents(
                    _av)))
              put(
                _w,
                GLOBALS.ocan,
                _av)))),
        (and(
            _can,
            n_EQ_Q(
              _can,
              _b))
          tell(
            "The water leaks out of the",
            1,
            odesc2(
              _can),
            "and evaporates immediately.")
          cond(
            (memq(
                _w,
                aobjs(
                  _me))
              drop_object(
                _w,
                _me)),
            (remove_object(
                _w)))),
        (memq(
            _b,
            aobjs(
              _me))
          cond(
            (not(
                empty_Q(
                  ocontents(
                    _b)))
              tell(
                "The bottle is already full.")),
            (not(
                oopen_Q(
                  _b))
              tell(
                "The bottle is closed.")),
            (t
              and(
                _rem,
                remove_object(
                  _w))
              put(
                _b,
                GLOBALS.ocontents,
                (_w))
              put(
                _w,
                GLOBALS.ocan,
                _b)
              tell(
                "The bottle is now full of water.")))),
        (and(
            _EQ_Q(
              ocan(
                _w),
              _b),
            _EQ_Q(
              _prsact,
              GLOBALS.take_X_words),
            not(
              _can))
          put(
            _prsvec,
            2,
            _b)
          take(
            t)
          put(
            _prsvec,
            2,
            _w)),
        (tell(
            "The water slips through your fingers.")))),
    (or(
        _EQ_Q(
          _prsact,
          GLOBALS.drop_X_words),
        _EQ_Q(
          _prsact,
          GLOBALS.pour_X_words),
        _EQ_Q(
          _prsact,
          GLOBALS.give_X_words))
      cond(
        (memq(
            _w,
            aobjs(
              _me))
          drop_object(
            _w,
            _me)))
      cond(
        (_av
          tell(
            "There is now a puddle in the bottom of the",
            1,
            odesc2(
              _av),
            ".")),
        (tell(
            "The water spills to the floor and evaporates immediately.")
          remove_object(
            _w)))),
    (_EQ_Q(
        _prsact,
        GLOBALS.throw_X_words)
      tell(
        "The water splashes on the walls, and evaporates immediately.")
      remove_object(
        _w))))

define(
  rope_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (droom
      find_room(
        "DOME"))
    (rope
      find_obj(
        "ROPE"))
    (win
      GLOBALS.winner)),
  #decl
    ((prsact)
      verb
      (rope)
      object
      (win)
      adv
      (droom)
      room),
  cond(
    (n_EQ_Q(
        GLOBALS.here,
        _droom)
      GLOBALS.dome_flag_X_flag = null
      cond(
        (_EQ_Q(
            vname(
              _prsact),
            tie_X_words)
          tell(
            "There is nothing it can be tied to.")),
        (_EQ_Q(
            vname(
              _prsact),
            untie_X_words)
          tell(
            "It is not tied to anything.")))),
    (and(
        _EQ_Q(
          vname(
            _prsact),
          tie_X_words),
        _EQ_Q(
          3(
            GLOBALS.prsvec),
          find_obj(
            "RAILI")))
      cond(
        (GLOBALS.dome_flag_X_flag
          tell(
            "The rope is already attached.")),
        (tell(
            "The rope drops over the side and comes within ten feet of the floor.")
          GLOBALS.dome_flag_X_flag = t
          tro(
            _rope,
            GLOBALS.ndescbit)
          cond(
            (not(
                oroom(
                  _rope))
              put(
                _win,
                GLOBALS.aobjs,
                splice_out(
                  _rope,
                  aobjs(
                    _win)))
              insert_object(
                _rope,
                _droom)))))),
    (_EQ_Q(
        vname(
          _prsact),
        untie_X_words)
      cond(
        (GLOBALS.dome_flag_X_flag
          GLOBALS.dome_flag_X_flag = null
          trz(
            _rope,
            GLOBALS.ndescbit)
          tell(
            "Although you tied it incorrectly, the rope becomes free.")),
        (tell(
            "It is not tied to anything.")))),
    (and(
        _EQ_Q(
          _prsact,
          GLOBALS.drop_X_words),
        not(
          GLOBALS.dome_flag_X_flag))
      remove_object(
        _rope)
      insert_object(
        _rope,
        find_room(
          "TORCH"))
      tell(
        "The rope drops gently to the floor below.")),
    (and(
        _EQ_Q(
          _prsact,
          GLOBALS.take_X_words),
        GLOBALS.dome_flag_X_flag,
        tell(
          "The rope is tied to the railing.")))))

define(
  cyclops,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (prsob1
      2(
        GLOBALS.prsvec))
    (rm
      GLOBALS.here)
    (food
      find_obj(
        "FOOD"))
    (drink
      find_obj(
        "WATER"))
    (count
      rvars(
        _rm))
    (garlic
      find_obj(
        "GARLI"))
    cyc),
  #decl
    ((prsact)
      verb
      (prsob1)
      or(
        object,
        false)
      (rm)
      room
      (food
        drink)
      object
      (cyc
        garlic)
      object
      (count)
      fix),
  cond(
    (GLOBALS.cyclops_flag_X_flag
      cond(
        (or(
            _EQ_Q(
              _prsact,
              GLOBALS.awake_X_words),
            _EQ_Q(
              _prsact,
              GLOBALS.mung_X_words),
            _EQ_Q(
              _prsact,
              GLOBALS.burn_X_words),
            _EQ_Q(
              _prsact,
              GLOBALS.fight_X_words))
          tell(
            "The cyclops yawns and stares at the thing that woke him up.")
          GLOBALS.cyclops_flag_X_flag = null
          trz(
            LOCALS.cyc = find_obj(
                "CYCLO"),
            GLOBALS.sleepbit)
          tro(
            _cyc,
            GLOBALS.fightbit)
          put(
            _rm,
            GLOBALS.rvars,
            abs(
              rvars(
                _rm)))
          t))),
    (g_Q(
        abs(
          _count),
        5)
      jigs_up(
        "The cyclops, tired of all of your games and trickery, eats you.\nThe cyclops says 'Mmm.  Just like mom used to make 'em.'")),
    (_EQ_Q(
        vname(
          _prsact),
        give_X_words)
      cond(
        (_EQ_Q(
            _prsob1,
            _food)
          cond(
            (g__Q(
                _count,
                0)
              remove_object(
                _food)
              tell(
                "The cyclops says 'Mmm Mmm.  I love hot peppers!  But oh, could I use\na drink.  Perhaps I could drink the blood of that thing'.  From the\ngleam in his eye, it could be surmised that you are 'that thing'.")
              put(
                _rm,
                GLOBALS.rvars,
                min(
                  _1,
                  _(
                    _count)))))),
        (_EQ_Q(
            _prsob1,
            _drink)
          cond(
            (l_Q(
                _count,
                0)
              remove_object(
                _drink)
              tro(
                LOCALS.cyc = find_obj(
                    "CYCLO"),
                GLOBALS.sleepbit)
              trz(
                _cyc,
                GLOBALS.fightbit)
              tell(
                "The cyclops looks tired and quickly falls fast asleep (what did you\nput in that drink, anyway?).")
              GLOBALS.cyclops_flag_X_flag = t),
            (tell(
                "The cyclops apparently was not thirsty at the time and refuses your\ngenerous gesture.")
              null))),
        (_EQ_Q(
            _prsob1,
            _garlic)
          tell(
            "The cyclops may be hungry, but there is a limit.")
          put(
            _rm,
            GLOBALS.rvars,
            aos_sos(
              _count))),
        (tell(
            "The cyclops is not so stupid as to eat THAT!")
          put(
            _rm,
            GLOBALS.rvars,
            aos_sos(
              _count))))),
    (or(
        _EQ_Q(
          _prsact,
          GLOBALS.first_Q_X_words),
        _EQ_Q(
          _prsact,
          GLOBALS.fight_X_words))
      null),
    (and(
        put(
          _rm,
          GLOBALS.rvars,
          aos_sos(
            _count)),
        null)),
    (or(
        _EQ_Q(
          _prsact,
          GLOBALS.throw_X_words),
        _EQ_Q(
          vname(
            _prsact),
          mung_X_words))
      cond(
        (prob(
            50)
          tell(
            "Your actions don't appear to be doing much harm to the cyclops, but\nthey do not exactly lower your insurance premiums, either.")),
        (tell(
            "The cyclops ignores all injury to his body with a shrug.")))),
    (_EQ_Q(
        _prsact,
        GLOBALS.take_X_words)
      tell(
        "The cyclops is rather heavy and doesn't take kindly to being grabbed.")),
    (_EQ_Q(
        _prsact,
        GLOBALS.tie_X_words)
      tell(
        "You cannot tie the cyclops, although he is fit to be tied."))))

define(
  cyclops_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (rm
      GLOBALS.here)
    (vars
      rvars(
        _rm))),
  #decl
    ((pv)
      vector
      (rm)
      room
      (vars)
      fix),
  cond(
    (_EQ_Q(
        1(
          _pv),
        GLOBALS.look_X_words)
      tell(
        "You are in a room with an exit on the west side, and a staircase\nleading up.")
      cond(
        (and(
            GLOBALS.cyclops_flag_X_flag,
            not(
              GLOBALS.magic_flag_X_flag))
          tell(
            "The cyclops, perhaps affected by a drug in your drink, is sleeping\nblissfully at the foot of the stairs.")),
        (GLOBALS.magic_flag_X_flag
          tell(
            "On the north of the room is a wall which used to be solid, but which\nnow has a cyclops-sized hole in it.")),
        (0_Q(
            _vars)
          tell(
            "A cyclops, who looks prepared to eat horses (much less mere\nadventurers), blocks the staircase.  From his state of health, and\nthe bloodstains on the walls, you gather that he is not very\nfriendly, though he likes people.",
            1)),
        (g_Q(
            _vars,
            0)
          tell(
            "The cyclops is standing in the corner, eyeing you closely.  I don't\nthink he likes you very much.  He looks extremely hungry even for a\ncyclops.")),
        (l_Q(
            _vars,
            0)
          tell(
            "The cyclops, having eaten the hot peppers, appears to be gasping.\nHis enflamed tongue protrudes from his man-sized mouth.")))
      cond(
        (GLOBALS.cyclops_flag_X_flag),
        (or(
            0_Q(
              _vars),
            tell(
              nth(
                GLOBALS.cyclomad,
                abs(
                  _vars)))))))))

psetg(
  cyclomad,
  () => ["The cyclops seems somewhat agitated."
      "The cyclops appears to be getting more agitated."
      "The cyclops is moving about the room, looking for something."
      "The cyclops was looking for salt and pepper.  I think he is gathering\ncondiments for his upcoming snack."
      "The cyclops is moving toward you in an unfriendly manner."
      "You have two choices: 1. Leave  2. Become dinner."])

gdecl(
  (cyclomad),
  vector(
    [rest
      string]))

define(
  aos_sos,
  (foo),
  #decl
    ((foo)
      fix),
  cond(
    (l_Q(
        _foo,
        0)
      LOCALS.foo = _(
          _foo,
          1)),
    (LOCALS.foo = _(
          _foo,
          1))),
  cond(
    (GLOBALS.cyclops_flag_X_flag),
    (tell(
        nth(
          GLOBALS.cyclomad,
          abs(
            _foo))))),
  _foo)

GLOBALS.echo_flag_X_flag = null

define(
  echo_room,
  ("AUX"
    (reader_string
      GLOBALS.reader_string)
    (b
      GLOBALS.inbuf)
    l
    (rm
      find_room(
        "ECHO"))
    (outchan
      GLOBALS.outchan)
    verb
    (walk
      GLOBALS.walk_X_words)),
  #decl
    ((outchan)
      channel
      (walk
        verb)
      verb
      (reader_string)
      string
      (prsact)
      verb
      (b)
      string
      (l)
      fix
      (rm)
      room),
  cond(
    (GLOBALS.echo_flag_X_flag),
    (unwind(
        prog(
          (),
          mapf(
            null,
            function(
              (obj),
              #decl
                ((obj)
                  object),
              cond(
                (ovis_Q(
                    _obj)
                  tro(
                    _obj,
                    GLOBALS.echo_room_bit)
                  trz(
                    _obj,
                    GLOBALS.ovison)))),
            robjs(
              _rm)),
          repeat(
            ((prsvec
                GLOBALS.prsvec)
              random_action),
            #decl
              ((prsvec)
                vector),
            LOCALS.l = readstring(
                _b,
                GLOBALS.inchan,
                _reader_string),
            readchr(
              GLOBALS.inchan),
            or(
              GLOBALS.alt_flag,
              readchr(
                GLOBALS.inchan)),
            GLOBALS.moves = _(
                GLOBALS.moves,
                1),
            cond(
              (and(
                  eparse(
                    lex(
                      _b,
                      rest(
                        _b,
                        _l),
                      t),
                    t),
                  _EQ_Q(
                    LOCALS.verb = 1(
                        _prsvec),
                    _walk),
                  2(
                    _prsvec),
                  memq(
                    chtype(
                      2(
                        _prsvec),
                      atom),
                    rexits(
                      _rm)))
                LOCALS.random_action = vfcn(
                    _verb)
                apply_random(
                  _random_action)
                cond(
                  (n_EQ_Q(
                      GLOBALS.here,
                      _rm)
                    mapf(
                      null,
                      function(
                        (x),
                        #decl
                          ((x)
                            object),
                        cond(
                          (trnn(
                              _x,
                              GLOBALS.echo_room_bit)
                            trz(
                              _x,
                              GLOBALS.echo_room_bit)
                            tro(
                              _x,
                              GLOBALS.ovison)))),
                      robjs(
                        _rm))))
                return(
                  t)),
              (printstring(
                  _b,
                  _outchan,
                  _l)
                GLOBALS.tell_flag = t
                crlf(
                  )
                cond(
                  (_EQ_Q(
                      member(
                        "ECHO",
                        uppercase(
                          _b)),
                      _b)
                    tell(
                      "The acoustics of the room change subtly.",
                      1)
                    GLOBALS.echo_flag_X_flag = t
                    mapf(
                      null,
                      function(
                        (x),
                        #decl
                          ((x)
                            object),
                        cond(
                          (trnn(
                              _x,
                              GLOBALS.echo_room_bit)
                            trz(
                              _x,
                              GLOBALS.echo_room_bit)
                            tro(
                              _x,
                              GLOBALS.ovison)))),
                      robjs(
                        _rm))
                    return(
                      t))))))),
        prog(
          (),
          goto(
            find_room(
              "CHAS3")),
          GLOBALS.moves = _(
              GLOBALS.moves,
              1),
          mapf(
            null,
            function(
              (x),
              #decl
                ((x)
                  object),
              cond(
                (trnn(
                    _x,
                    GLOBALS.echo_room_bit)
                  trz(
                    _x,
                    GLOBALS.echo_room_bit)
                  tro(
                    _x,
                    GLOBALS.ovison)))),
            robjs(
              _rm)))))))

define(
  leaper,
  ("AUX"
    (rm
      GLOBALS.here)
    (exits
      rexits(
        _rm))
    m),
  #decl
    ((rm)
      room
      (exits)
      exit
      (m)
      or(
        primtype(
          vector),
        false)),
  cond(
    (LOCALS.m = memq(
          down_X_words,
          _exits)
      cond(
        (or(
            type_Q(
              2(
                _m),
              nexit),
            and(
              type_Q(
                2(
                  _m),
                cexit),
              not(
                cxflag(
                  2(
                    _m)))))
          jigs_up(
            pick_one(
              GLOBALS.jumploss))))),
    (tell(
        pick_one(
          GLOBALS.wheeeee)))))

define(
  skipper,
  (),
  tell(
    pick_one(
      GLOBALS.wheeeee)))

GLOBALS.hs = 0

gdecl(
  (hs),
  fix)

define(
  hello,
  ("AUX"
    (prsobj
      2(
        GLOBALS.prsvec))
    (amt
      GLOBALS.hs = _(
          GLOBALS.hs,
          1))),
  #decl
    ((prsobj)
      or(
        object,
        false)
      (amt)
      fix),
  cond(
    (_prsobj
      cond(
        (_EQ_Q(
            _prsobj,
            find_obj(
              "SAILO"))
          cond(
            (0_Q(
                mod(
                  _amt,
                  20))
              tell(
                "You seem to be repeating yourself.")),
            (0_Q(
                mod(
                  _amt,
                  10))
              tell(
                "I think that phrase is getting a bit worn out.")),
            (tell(
                "Nothing happens here.")))),
        (_EQ_Q(
            _prsobj,
            find_obj(
              "AVIAT"))
          tell(
            "Here, nothing happens.")),
        (tell(
            "I think that only schizophrenics say 'Hello' to a",
            1,
            odesc2(
              _prsobj),
            ".")))),
    (tell(
        pick_one(
          GLOBALS.hellos)))))

psetg(
  hellos,
  () => ["Hello."
      "Good day."
      "Nice weather we've been having lately"
      "How are you?"
      "Goodbye."])

psetg(
  wheeeee,
  () => ["Very good.  Now you can go to the second grade."
      "Have you tried hopping around the dungeon, too?"
      "Are you enjoying yourself?"
      "Wheeeeeeeeee!!!!!"
      "Do you expect me to applaud?"])

psetg(
  jumploss,
  () => ["You should have looked before you leaped."
      "I'm afraid that leap was a bit much for your weak frame."
      "In the movies, your life would be passing in front of your eyes."
      "Geronimo....."])

gdecl(
  (hellos
    wheeeee
    jumploss),
  vector(
    [rest
      string]))

define(
  reader,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (po
      2(
        _pv))
    (pi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (po)
      object
      (pi)
      or(
        false,
        object)),
  cond(
    (not(
        lit_Q(
          GLOBALS.here))
      tell(
        "It is impossible to read in the dark.")),
    (and(
        _pi,
        not(
          transparent_Q(
            _pi)))
      tell(
        "How does one look through a",
        1,
        odesc2(
          _pi),
        "?")),
    (not(
        readable_Q(
          _po))
      tell(
        "How can I read a",
        1,
        odesc2(
          _po),
        "?")),
    (object_action(
        )),
    (tell(
        oread(
          _po)))))

define(
  well,
  (),
  cond(
    (GLOBALS.riddle_flag_X_flag
      tell(
        "Well what?")),
    (_EQ_Q(
        GLOBALS.here,
        find_room(
          "RIDDL"))
      GLOBALS.riddle_flag_X_flag = t
      tell(
        "There is a clap of thunder and the east door opens.")),
    (tell(
        "Well what?"))))

define(
  sinbad,
  (),
  cond(
    (and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "CYCLO")),
        memq(
          find_obj(
            "CYCLO"),
          robjs(
            GLOBALS.here)))
      GLOBALS.cyclops_flag_X_flag = t
      tell(
        "The cyclops, hearing the name of his deadly nemesis, flees the room\nby knocking down the wall on the north of the room.")
      GLOBALS.magic_flag_X_flag = t
      remove_object(
        find_obj(
          "CYCLO"))),
    (tell(
        "Wasn't he a sailor?"))))

define(
  granite,
  (),
  tell(
    "I think you are taking this thing for granite."))

psetg(
  dummy,
  () => ["Look around."
      "You think it isn't?"
      "I think you've already done that."])

gdecl(
  (dummy),
  vector(
    [rest
      string]))

define(
  brush,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))
    (prsi
      3(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object
      (prsi)
      or(
        object,
        false)),
  cond(
    (_EQ_Q(
        _prso,
        find_obj(
          "TEETH"))
      cond(
        (and(
            _EQ_Q(
              _prsi,
              find_obj(
                "PUTTY")),
            memq(
              _prsi,
              aobjs(
                GLOBALS.winner)))
          jigs_up(
            "Well, you seem to have been brushing your teeth with some sort of\nglue. As a result, your mouth gets glued together (with your nose)\nand you die of respiratory failure.")),
        (not(
            _prsi)
          tell(
            "Dental hygiene is highly recommended, but I'm not sure what you want\nto brush them with.")),
        (tell(
            "A nice idea, but with a",
            1,
            odesc2(
              _prsi),
            "?")))),
    (tell(
        "If you wish, but I can't understand why??"))))

define(
  ring,
  ("AUX"
    (prsobj
      2(
        GLOBALS.prsvec))),
  #decl
    ((prsobj)
      or(
        object,
        false)),
  cond(
    (_EQ_Q(
        _prsobj,
        find_obj(
          "BELL"))
      tell(
        "Ding, dong.")),
    (tell(
        "How, exactly, can I ring that?"))))

define(
  eat,
  ("AUX"
    (prsvec
      GLOBALS.prsvec)
    (eat_Q
      null)
    (drink_Q
      null)
    (prsobj
      2(
        _prsvec))
    nobj
    (aobjs
      aobjs(
        GLOBALS.winner))),
  #decl
    ((prsobj)
      object
      (nobj)
      or(
        object,
        false)
      (prsvec)
      vector(
        [3
          any])
      (aobjs)
      list(
        [rest
          object])
      (eat_Q
        drink_Q)
      or(
        atom,
        false)),
  cond(
    (object_action(
        )),
    (and(
        LOCALS.eat_Q = edible_Q(
            _prsobj),
        memq(
          _prsobj,
          _aobjs))
      cond(
        (_EQ_Q(
            1(
              _prsvec),
            GLOBALS.drink_X_words)
          tell(
            "How can I drink that?")),
        (tell(
            "Thank you very much.  It really hit the spot.")
          put(
            GLOBALS.winner,
            GLOBALS.aobjs,
            splice_out(
              _prsobj,
              _aobjs))))),
    (and(
        LOCALS.drink_Q = drinkable_Q(
            _prsobj),
        LOCALS.nobj = ocan(
            _prsobj),
        memq(
          _nobj,
          _aobjs))
      cond(
        (oopen_Q(
            _nobj)
          tell(
            "Thank you very much.  I was rather thirsty (from all this talking,\nprobably).")),
        (t
          tell(
            "I'd like to, but I can't get to it.")))
      put(
        _prsobj,
        GLOBALS.ocan,
        null)
      put(
        _nobj,
        GLOBALS.ocontents,
        splice_out(
          _prsobj,
          ocontents(
            _nobj)))),
    (not(
        or(
          _eat_Q,
          _drink_Q))
      tell(
        "I don't think that the",
        1,
        odesc2(
          _prsobj),
        "would agree with you.")),
    (tell(
        "I think you should get that first."))))

define(
  jargon,
  (),
  tell(
    "Well, FOO, BAR, and BLETCH to you too!"))

define(
  curses,
  (),
  tell(
    pick_one(
      GLOBALS.offended)))

psetg(
  offended,
  () => ["Such language in a high-class establishment like this!"
      "You ought to be ashamed of yourself."
      "Its not so bad.  You could have been killed already."
      "Tough shit, asshole."
      "Oh, dear.  Such language from a supposed winning adventurer!"])

gdecl(
  (offended),
  vector(
    [rest
      string]))

"ROBBER"

define(
  robber,
  robber,
  (hack
    "AUX"
    (rm
      hroom(
        _hack))
    robj
    (seen_Q
      rseen_Q(
        _rm))
    (win
      GLOBALS.winner)
    (wroom
      GLOBALS.here)
    (hobj
      hobj(
        _hack))
    (still
      find_obj(
        "STILL"))
    here_Q
    (hh
      hobjs(
        _hack))
    (treas
      find_room(
        "TREAS"))),
  #decl
    ((hack)
      hack
      (rm
        wroom)
      room
      (robj
        hh)
      list(
        [rest
          object])
      (seen_Q)
      or(
        atom,
        false)
      (win)
      adv
      (hobj)
      object
      (robber)
      activation
      (here_Q)
      or(
        room,
        false)
      (still)
      object
      (treas)
      room),
  prog(
    ((once
        null)
      objt),
    #decl
      ((once)
        or(
          atom,
          false)
        (objt)
        list(
          [rest
            object])),
    cond(
      (LOCALS.here_Q = oroom(
            _hobj)
        LOCALS.rm = _here_Q)),
    LOCALS.robj = robjs(
        _rm),
    LOCALS.objt = _hh,
    cond(
      (and(
          _EQ_Q(
            _rm,
            _treas),
          n_EQ_Q(
            _rm,
            _wroom))
        cond(
          (_here_Q
            cond(
              (_EQ_Q(
                  oroom(
                    _still),
                  _treas)
                snarf_object(
                  _hobj,
                  _still)))
            remove_object(
              _hobj)
            LOCALS.here_Q = null))
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
                put(
                  _hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = splice_out(
                      _x,
                      _hh))
                insert_object(
                  _x,
                  _rm)))),
          _hh)),
      (_EQ_Q(
          _rm,
          _wroom)
        // Adventurer is in room:  CHOMP, CHOMP
        cond(
          (_EQ_Q(
              _rm,
              _treas)),
          // Don't move, Gertrude,
          (not(
              hflag(
                _hack))
            cond(
              (and(
                  not(
                    _here_Q),
                  prob(
                    30))
                cond(
                  (_EQ_Q(
                      ocan(
                        _still),
                      _hobj)
                    insert_object(
                      _hobj,
                      _rm)
                    tell(
                      "Someone carrying a large bag is casually leaning against one of the\nwalls here.  He does not speak, but it is clear from his aspect that\nthe bag will be taken only over his dead body.")
                    put(
                      _hack,
                      GLOBALS.hflag,
                      t)
                    return(
                      t,
                      _robber)))),
              (and(
                  _here_Q,
                  fighting_Q(
                    _hobj),
                  cond(
                    (not(
                        winning_Q(
                          _hobj,
                          _win))
                      tell(
                        "Your opponent, determining discretion to be the better part of\nvalor, decides to terminate this little contretemps.  With a rueful\nnod of his head, he steps backward into the gloom and disappears.")
                      remove_object(
                        _hobj)
                      trz(
                        _hobj,
                        GLOBALS.fighting)
                      snarf_object(
                        _hobj,
                        _still)
                      return(
                        t,
                        _robber)),
                    (prob(
                        90))))),
              (and(
                  _here_Q,
                  prob(
                    30))
                tell(
                  "The holder of the large bag just left, looking disgusted. \nFortunately, he took nothing.")
                remove_object(
                  _hobj)
                snarf_object(
                  _hobj,
                  _still)
                return(
                  t,
                  _robber)),
              (prob(
                  70)
                return(
                  t,
                  _robber)),
              (t
                cond(
                  (memq(
                      _still,
                      hobjs(
                        _hack))
                    put(
                      _hack,
                      GLOBALS.hobjs,
                      splice_out(
                        _still,
                        hobjs(
                          _hack)))
                    put(
                      _hobj,
                      GLOBALS.ocontents,
                      (_still))
                    put(
                      _still,
                      GLOBALS.ocan,
                      _hobj)))
                put(
                  _hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = rob_room(
                      _rm,
                      _hh,
                      100))
                put(
                  _hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = rob_adv(
                      _win,
                      _hh))
                put(
                  _hack,
                  GLOBALS.hflag,
                  t)
                cond(
                  (and(
                      n_EQ_Q(
                        _objt,
                        _hh),
                      not(
                        _here_Q))
                    tell(
                      "A seedy-looking individual with a large bag just wandered through\nthe room.  On the way through, he quietly abstracted all valuables\nfrom the room and from your possession, mumbling something about\n\"Doing unto others before..\")),
                  (_here_Q
                    snarf_object(
                      _hobj,
                      _still)
                    cond(
                      (n_EQ_Q(
                          _objt,
                          _hh)
                        tell(
                          "The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")),
                      (tell(
                          "The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")))
                    remove_object(
                      _hobj)
                    LOCALS.here_Q = null),
                  (t
                    tell(
                      "A 'lean and hungry' gentleman just wandered through.  Finding\nnothing of value, he left disgruntled.")))))),
          (t
            cond(
              (_here_Q
                // Here, already announced.
                cond(
                  (prob(
                      30)
                    put(
                      _hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = rob_room(
                          _rm,
                          _hh,
                          100))
                    put(
                      _hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = rob_adv(
                          _win,
                          _hh))
                    cond(
                      (memq(
                          find_obj(
                            "ROPE"),
                          _hh)
                        GLOBALS.dome_flag_X_flag = null))
                    cond(
                      (_EQ_Q(
                          _objt,
                          _hh)
                        tell(
                          "The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")),
                      (t
                        tell(
                          "The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")))
                    remove_object(
                      _hobj)
                    LOCALS.here_Q = null
                    snarf_object(
                      _hobj,
                      _still)),
                  (return(
                      t,
                      _robber)))))))),
      (and(
          memq(
            _hobj,
            robjs(
              _rm)),
          // Leave if victim left,
          snarf_object(
            _hobj,
            _still),
          remove_object(
            _hobj),
          LOCALS.here_Q = null)),
      (and(
          _EQ_Q(
            oroom(
              _still),
            _rm),
          snarf_object(
            _hobj,
            _still),
          null)),
      (_seen_Q
        // Hack the adventurer's belongings
        put(
          _hack,
          GLOBALS.hobjs,
          LOCALS.hh = rob_room(
              _rm,
              _hh,
              75))
        cond(
          (and(
              _EQ_Q(
                rdesc2(
                  _rm),
                GLOBALS.mazedesc),
              _EQ_Q(
                rdesc2(
                  _wroom),
                GLOBALS.mazedesc))
            mapf(
              null,
              function(
                (x),
                #decl
                  ((x)
                    object),
                cond(
                  (and(
                      can_take_Q(
                        _x),
                      ovis_Q(
                        _x),
                      prob(
                        40))
                    tell(
                      "You hear, off in the distance, someone saying \"My, I wonder what\nthis fine",
                      3,
                      odesc2(
                        _x),
                      "is doing here.\")
                    tell(
                      "",
                      1)
                    cond(
                      (prob(
                          60)
                        remove_object(
                          _x)
                        put(
                          _x,
                          GLOBALS.otouch_Q,
                          t)
                        put(
                          _hack,
                          GLOBALS.hobjs,
                          LOCALS.hh = (_x
                              _X_hh))))
                    mapleave(
                      )))),
              robjs(
                _rm))),
          (mapf(
              null,
              function(
                (x),
                #decl
                  ((x)
                    object),
                cond(
                  (and(
                      0_Q(
                        otval(
                          _x)),
                      can_take_Q(
                        _x),
                      ovis_Q(
                        _x),
                      prob(
                        20))
                    remove_object(
                      _x)
                    put(
                      _x,
                      GLOBALS.otouch_Q,
                      t)
                    put(
                      _hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = (_x
                          _X_hh))
                    cond(
                      (_EQ_Q(
                          _rm,
                          _wroom)
                        tell(
                          "You suddenly notice that the",
                          1,
                          odesc2(
                            _x),
                          "vanished.")))
                    mapleave(
                      )))),
              robjs(
                _rm))
            cond(
              (memq(
                  find_obj(
                    "ROPE"),
                  _hh)
                GLOBALS.dome_flag_X_flag = null)))))),
    cond(
      (LOCALS.once = not(
            _once)
        // Move to next room, and hack.
        prog(
          ((rooms
              hrooms(
                _hack))),
          LOCALS.rm = 1(
              _rooms),
          cond(
            (empty_Q(
                LOCALS.rooms = rest(
                    _rooms))
              LOCALS.rooms = GLOBALS.rooms)),
          cond(
            (rtrnn(
                _rm,
                GLOBALS.rsacredbit)
              // Can I work here?
              again(
                ))),
          put(
            _hack,
            GLOBALS.hroom,
            _rm),
          put(
            _hack,
            GLOBALS.hflag,
            null),
          put(
            _hack,
            GLOBALS.hrooms,
            _rooms),
          LOCALS.seen_Q = rseen_Q(
              _rm))
        again(
          )))),
  // Drop worthless cruft, sometimes,
  or(
    _EQ_Q(
      _rm,
      _treas),
    mapf(
      null,
      function(
        (x),
        #decl
          ((x)
            object),
        cond(
          (and(
              0_Q(
                otval(
                  _x)),
              prob(
                30))
            put(
              _hack,
              GLOBALS.hobjs,
              LOCALS.hh = splice_out(
                  _x,
                  _hh))
            insert_object(
              _x,
              _rm)
            and(
              _EQ_Q(
                _rm,
                _wroom),
              tell(
                "The robber, rummaging through his bag, dropped a few items he found\nvalueless."))))),
      _hh)))

define(
  snarf_object,
  (who
    what),
  #decl
    ((who
        what)
      object),
  cond(
    (and(
        n_EQ_Q(
          ocan(
            _what),
          _who),
        or(
          oroom(
            _what),
          ocan(
            _what)))
      remove_object(
        _what)
      put(
        _what,
        GLOBALS.ocan,
        _who)
      put(
        _who,
        GLOBALS.ocontents,
        (_what
          _X
          ocontents(
            _who)))),
    (_who)))

define(
  robber_function,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (dem
      get_demon(
        "THIEF"))
    (pv
      GLOBALS.prsvec)
    (prsobj
      2(
        _pv))
    (here
      GLOBALS.here)
    (flg
      null)
    brick
    fuse
    st
    f
    (t
      hobj(
        _dem))
    (chali
      find_obj(
        "CHALI"))),
  #decl
    ((pv)
      vector
      (dem)
      hack
      (prsact)
      verb
      (prsobj)
      or(
        object,
        false)
      (chali
        t
        hobj
        st
        brick
        fuse)
      object
      (f)
      vector(
        any,
        cevent)
      (here)
      room
      (flg)
      or(
        atom,
        false)),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.fight_X_words)
      cond(
        (_EQ_Q(
            ocan(
              LOCALS.st = find_obj(
                  "STILL")),
            _t)
          null),
        (_EQ_Q(
            oroom(
              _st),
            _here)
          snarf_object(
            _t,
            _st)
          tell(
            "The robber, somewhat surprised at this turn of events, nimbly\nretrieves his stilletto.")
          t),
        (else
          tell(
            "Annoyed to be left unarmed in such an obviously dangerous\nneighborhood, the thief slips off into the shadows.")
          tro(
            _chali,
            GLOBALS.takebit)
          remove_object(
            _t)))),
    (_EQ_Q(
        _prsact,
        GLOBALS.dead__X_X_words)
      cond(
        (not(
            empty_Q(
              hobjs(
                _dem)))
          tell(
            "His booty remains.")
          mapf(
            null,
            function(
              (x),
              #decl
                ((x)
                  object),
              insert_object(
                _x,
                _here),
              tro(
                _x,
                GLOBALS.echo_room_bit)),
            hobjs(
              _dem))
          put(
            _dem,
            GLOBALS.hobjs,
            ())))
      tro(
        _chali,
        GLOBALS.takebit)
      cond(
        (_EQ_Q(
            _here,
            find_room(
              "TREAS"))
          mapf(
            null,
            function(
              (x),
              #decl
                ((x)
                  object),
              cond(
                (and(
                    n_EQ_Q(
                      _x,
                      _chali),
                    n_EQ_Q(
                      _x,
                      _t))
                  cond(
                    (trnn(
                        _x,
                        GLOBALS.echo_room_bit)
                      trz(
                        _x,
                        GLOBALS.echo_room_bit)),
                    (tro(
                        _x,
                        GLOBALS.ovison)
                      cond(
                        (not(
                            _flg)
                          LOCALS.flg = t
                          tell(
                            "As the thief dies, the power of his magic decreases, and his\ntreasures reappear:",
                            2)))
                      tell(
                        "A",
                        2,
                        odesc2(
                          _x))))))),
            robjs(
              _here))))
      put(
        _dem,
        GLOBALS.haction,
        null)),
    (_EQ_Q(
        _prsact,
        GLOBALS.first_Q_X_words)
      prob(
        20)),
    (_EQ_Q(
        _prsact,
        GLOBALS.out__X_X_words)
      put(
        _dem,
        GLOBALS.haction,
        null)
      trz(
        find_obj(
          "STILL"),
        GLOBALS.ovison)
      tro(
        _chali,
        GLOBALS.takebit)
      put(
        _t,
        GLOBALS.odesc1,
        GLOBALS.robber_u_desc)),
    (_EQ_Q(
        _prsact,
        GLOBALS.in__X_X_words)
      cond(
        (_EQ_Q(
            hroom(
              _dem),
            _here)
          tell(
            "The robber revives, briefly feigning continued unconsciousness, and\nwhen he sees his moment, scrambles away from you.")))
      cond(
        (type_Q(
            GLOBALS.robber,
            offset)
          put(
            _dem,
            GLOBALS.haction,
            robber)),
        (put(
            _dem,
            GLOBALS.haction,
            robber)))
      put(
        _t,
        GLOBALS.odesc1,
        GLOBALS.robber_c_desc)
      cond(
        (and(
            _EQ_Q(
              _here,
              find_room(
                "TREAS")),
            oroom(
              LOCALS.chali = _chali))
          trz(
            _chali,
            GLOBALS.takebit)))
      tro(
        find_obj(
          "STILL"),
        GLOBALS.ovison)),
    (and(
        type_Q(
          _prsobj,
          object),
        _EQ_Q(
          2(
            _pv),
          GLOBALS.knife_X_objects),
        _EQ_Q(
          vname(
            _prsact),
          throw_X_words),
        not(
          trnn(
            _t,
            GLOBALS.fightbit)))
      cond(
        (prob(
            10)
          tell(
            "You evidently frightened the robber, though you didn't hit him.  He\nflees",
            1,
            cond(
              (empty_Q(
                  hobjs(
                    _dem))
                "."),
              (t
                mapf(
                  null,
                  function(
                    (x),
                    #decl
                      ((x)
                        object),
                    insert_object(
                      _x,
                      _here)),
                  hobjs(
                    _dem))
                put(
                  _dem,
                  GLOBALS.hobjs,
                  ())
                ", but the contents of his bag fall on the floor.")))
          remove_object(
            _t)),
        (t
          tell(
            "You missed.  The thief makes no attempt to take the knife, though it\nwould be a fine addition to the collection in his bag.  He does seem\nangered by your attempt.")
          tro(
            _t,
            GLOBALS.fightbit)))),
    (and(
        or(
          _EQ_Q(
            _prsact,
            GLOBALS.throw_X_words),
          _EQ_Q(
            _prsact,
            GLOBALS.give_X_words)),
        type_Q(
          _prsobj,
          object),
        n_EQ_Q(
          _prsobj,
          hobj(
            _dem)))
      cond(
        (l_Q(
            ocapac(
              _t),
            0)
          put(
            _t,
            GLOBALS.ocapac,
            _(
              ocapac(
                _t)))
          put(
            _dem,
            GLOBALS.haction,
            cond(
              (type_Q(
                  GLOBALS.robber,
                  offset)
                GLOBALS.robber),
              (robber)))
          tro(
            find_obj(
              "STILL"),
            GLOBALS.ovison)
          put(
            _t,
            GLOBALS.odesc1,
            GLOBALS.robber_c_desc)
          tell(
            "Your proposed victim suddenly recovers consciousness.")))
      cond(
        (and(
            _EQ_Q(
              _prsobj,
              LOCALS.brick = find_obj(
                  "BRICK")),
            _EQ_Q(
              ocan(
                LOCALS.fuse = find_obj(
                    "FUSE")),
              _brick),
            orand(
              _fuse),
            not(
              0_Q(
                ctick(
                  2(
                    LOCALS.f = orand(
                        _fuse))))))
          // I.e., he's trying to give us the brick with a lighted fuse.
          tell(
            "The thief seems rather offended by your offer.  Do you think he's as\nstupid as you are?")),
        (remove_object(
            _prsobj)
          put(
            _dem,
            GLOBALS.hobjs,
            (_prsobj
              _X
              hobjs(
                _dem)))
          tell(
            "The thief places the",
            1,
            odesc2(
              _prsobj),
            "in his bag and thanks\nyou politely.")))),
    (and(
        _prsact,
        _EQ_Q(
          vname(
            _prsact),
          take_X_words))
      tell(
        "Once you got him, what would you do with him?"))))

define(
  chalice,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))
    (ch
      2(
        GLOBALS.prsvec))
    tr
    t),
  #decl
    ((prsa)
      verb
      (ch)
      object
      (tr)
      room
      (t)
      object),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.take_X_words)
      cond(
        (and(
            not(
              ocan(
                _ch)),
            _EQ_Q(
              oroom(
                _ch),
              LOCALS.tr = find_room(
                  "TREAS")),
            _EQ_Q(
              oroom(
                LOCALS.t = find_obj(
                    "THIEF")),
              _tr),
            fighting_Q(
              _t),
            haction(
              GLOBALS.robber_demon))
          tell(
            "Realizing just in time that you'd be stabbed in the back if you\nattempted to take the chalice, you return to the fray."))))))

define(
  burner,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (prso
        prsi)
      object),
  cond(
    (flaming_Q(
        _prsi)
      cond(
        (object_action(
            )),
        (and(
            _EQ_Q(
              avehicle(
                GLOBALS.winner),
              find_obj(
                "BALLO")),
            balloon(
              ))),
        (and(
            burnable_Q(
              _prso),
            cond(
              (memq(
                  _prso,
                  aobjs(
                    GLOBALS.winner))
                tell(
                  "The",
                  1,
                  odesc2(
                    _prso),
                  "catches fire.")
                jigs_up(
                  "Unfortunately, you were holding it at the time.")),
              (hackable_Q(
                  _prso,
                  GLOBALS.here)
                tell(
                  "The",
                  1,
                  odesc2(
                    _prso),
                  "catches fire and is consumed.")
                remove_object(
                  _prso)),
              (tell(
                  "You don't have that."))))),
        (tell(
            "I don't think you can burn a",
            1,
            odesc2(
              _prso),
            ".")))),
    (tell(
        "With a",
        1,
        odesc2(
          _prsi),
        "??!?"))))

define(
  turner,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (prso
        prsi)
      object),
  cond(
    (trnn(
        _prso,
        GLOBALS.turnbit)
      cond(
        (trnn(
            _prsi,
            GLOBALS.toolbit)
          object_action(
            )),
        (tell(
            "You certainly can't turn it with a",
            1,
            odesc2(
              _prsi),
            ".")))),
    (tell(
        "You can't turn that!"))))

psetg(
  doormungs,
  () => ["The door is invulnerable."
      "You cannot damage this door."
      "The door is still under warranty."])

gdecl(
  (doormungs),
  vector(
    [rest
      string]))

define(
  ddoor_function,
  ("AUX"
    (pa
      1(
        GLOBALS.prsvec))),
  #decl
    ((pa)
      verb),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.open_X_words)
      tell(
        "The door cannot be opened.")),
    (_EQ_Q(
        _pa,
        GLOBALS.burn_X_words)
      tell(
        "You cannot burn this door.")),
    (_EQ_Q(
        _pa,
        GLOBALS.mung_X_words)
      tell(
        pick_one(
          GLOBALS.doormungs)))))

define(
  inflater,
  ("AUX"
    (prsi
      2(
        GLOBALS.prsvec))
    (prso
      3(
        GLOBALS.prsvec))),
  #decl
    ((prsi
        prso)
      object),
  cond(
    (_EQ_Q(
        _prsi,
        find_obj(
          "IBOAT"))
      cond(
        (_EQ_Q(
            _prso,
            find_obj(
              "PUMP"))
          object_action(
            )),
        (tell(
            "You would inflate it with that?")))),
    (_EQ_Q(
        _prsi,
        find_obj(
          "RBOAT"))
      tell(
        "Inflating it further would probably burst it.")),
    (tell(
        "How can you inflate that?"))))

define(
  deflater,
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
          "RBOAT"))
      object_action(
        )),
    (tell(
        "Come on, now!"))))

define(
  locker,
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
          "GRAT2"))
      GLOBALS.grunlock_X_flag = null
      tell(
        "The grate is locked.")
      mapf(
        null,
        function(
          (x),
          #decl
            ((x)
              or(
                cexit,
                nexit,
                room)),
          cond(
            (and(
                type_Q(
                  _x,
                  cexit),
                _EQ_Q(
                  cxflag(
                    _x),
                  key_flag_X_flag))
              put(
                _x,
                GLOBALS.cxstr,
                "The grate is locked.")
              mapleave(
                )))),
        rexits(
          GLOBALS.here))),
    (tell(
        "It doesn't seem to work."))))

define(
  unlocker,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))
    (prsi
      3(
        GLOBALS.prsvec))
    (r
      find_room(
        "MGRAT"))),
  #decl
    ((prso
        prsi)
      object
      (r)
      room),
  cond(
    (_EQ_Q(
        _prso,
        find_obj(
          "GRAT2"))
      cond(
        (_EQ_Q(
            _prsi,
            find_obj(
              "KEYS"))
          GLOBALS.grunlock_X_flag = t
          tell(
            "The grate is unlocked.")
          mapf(
            null,
            function(
              (x),
              #decl
                ((x)
                  or(
                    cexit,
                    nexit,
                    room)),
              cond(
                (and(
                    type_Q(
                      _x,
                      cexit),
                    _EQ_Q(
                      cxflag(
                        _x),
                      key_flag_X_flag))
                  put(
                    _x,
                    GLOBALS.cxstr,
                    "The grate is closed.")
                  mapleave(
                    )))),
            rexits(
              _r))),
        (tell(
            "Can you unlock a grating with a",
            1,
            odesc2(
              _prsi),
            "?")))),
    (tell(
        "It doesn't seem to work."))))

define(
  killer,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (prso
        prsi)
      or(
        false,
        object)),
  cond(
    (not(
        _prso)
      tell(
        "There is nothing here to kill.")),
    (not(
        _prsi)
      tell(
        "Trying to kill a",
        1,
        odesc2(
          _prso),
        "with your bare hands is suicidal.")),
    (not(
        trnn(
          _prsi,
          GLOBALS.weaponbit))
      tell(
        "Trying to kill a",
        0,
        odesc2(
          _prso),
        "with a")
      tell(
        odesc2(
          _prsi),
        1,
        "is suicidal.")),
    (else
      blow(
        GLOBALS.player,
        _prso,
        orand(
          _prsi),
        t,
        null))))

define(
  attacker,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (prso
        prsi)
      or(
        false,
        object)),
  cond(
    (not(
        _prso)
      tell(
        "There is nothing here to attack.")),
    (not(
        _prsi)
      tell(
        "Attacking a",
        1,
        odesc2(
          _prso),
        "with your bare hands is suicidal.")),
    (not(
        trnn(
          _prsi,
          GLOBALS.weaponbit))
      tell(
        "Attacking a",
        0,
        odesc2(
          _prso),
        "with a")
      tell(
        odesc2(
          _prsi),
        1,
        "is suicidal.")),
    (else
      blow(
        GLOBALS.player,
        _prso,
        orand(
          _prsi),
        t,
        null))))

define(
  swinger,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (prso
      2(
        _pv))
    (prsi
      3(
        _pv))),
  #decl
    ((pv)
      vector
      (prso
        prsi)
      or(
        false,
        object)),
  put(
    _pv,
    2,
    _prsi),
  put(
    _pv,
    3,
    _prso),
  attacker(
    ))

define(
  hack_hack,
  (obj
    str
    "OPTIONAL"
    (obj2
      null)),
  #decl
    ((obj)
      object
      (str)
      string
      (obj2)
      or(
        false,
        string)),
  cond(
    (object_action(
        )),
    (_obj2
      tell(
        _str,
        0,
        odesc2(
          _obj),
        "with a")
      tell(
        _obj2,
        1,
        pick_one(
          GLOBALS.ho_hum))),
    (else
      tell(
        _str,
        1,
        odesc2(
          _obj),
        pick_one(
          GLOBALS.ho_hum)))))

psetg(
  ho_hum,
  () => ["does not seem to do anything."
      "is not notably useful."
      "isn't very interesting."
      "doesn't appear worthwhile."
      "has no effect."
      "doesn't do anything."])

gdecl(
  (ho_hum),
  vector(
    [rest
      string]))

define(
  munger,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))
    (prsw
      3(
        GLOBALS.prsvec))),
  #decl
    ((prsw)
      or(
        object,
        false)
      (prso)
      object),
  cond(
    (trnn(
        _prso,
        GLOBALS.villain)
      cond(
        (_prsw
          cond(
            (trnn(
                _prsw,
                GLOBALS.weaponbit)
              blow(
                GLOBALS.player,
                _prso,
                orand(
                  _prsw),
                t,
                null)),
            (t
              tell(
                "Munging a",
                0,
                odesc2(
                  _prso),
                "with a")
              tell(
                odesc2(
                  _prsw),
                1,
                "is quite self-destructive.")))),
        (t
          tell(
            "Munging a",
            1,
            odesc2(
              _prso),
            "with your bare hands is suicidal.")))),
    (hack_hack(
        _prso,
        "Munging a"))))

define(
  kicker,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  hack_hack(
    _prso,
    "Munging a"))

define(
  waver,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  hack_hack(
    _prso,
    "Waving a"))

define(
  r_l,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  hack_hack(
    _prso,
    "Playing in this way with a"))

define(
  rubber,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  hack_hack(
    _prso,
    "Fiddling with a"))

define(
  exorcise,
  (),
  cond(
    (object_action(
        )),
    (t)))

define(
  plugger,
  (),
  cond(
    (object_action(
        )),
    (tell(
        "This has no effect."))))

define(
  untie,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (object_action(
        )),
    (trnn(
        _prso,
        GLOBALS.tiebit)
      tell(
        "I don't think so.")),
    (tell(
        "This cannot be tied, so it cannot be untied!"))))

define(
  pusher,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (object_action(
        )),
    (memq(
        butto_X_objects,
        onames(
          _prso))),
    (hack_hack(
        _prso,
        "Pushing the"))))

define(
  tie,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (trnn(
        _prso,
        GLOBALS.tiebit)
      cond(
        (object_action(
            )),
        (tell(
            "You can't tie it to that.")))),
    (tell(
        "How can you tie that to anything."))))

define(
  melter,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (object_action(
        )),
    (tell(
        "I'm not sure that a",
        1,
        odesc2(
          _prso),
        "can be melted."))))

GLOBALS.on_pole_X_flag = null

define(
  body_function,
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
        "A force keeps you from taking the bodies.")),
    (or(
        _EQ_Q(
          _prsa,
          GLOBALS.mung_X_words),
        _EQ_Q(
          _prsa,
          GLOBALS.burn_X_words))
      cond(
        (GLOBALS.on_pole_X_flag),
        (GLOBALS.on_pole_X_flag = t
          insert_object(
            find_obj(
              "HPOLE"),
            find_room(
              "LLD2"))))
      jigs_up(
        "The voice of the guardian of the dungeon booms out from the darkness \n'Your disrespect costs you your life!' and places your head on a pole."))))

define(
  mumbler,
  (),
  tell(
    "You'll have to speak up if you expect me to hear you!"))

define(
  alarm,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  #decl
    ((prso)
      object),
  cond(
    (trnn(
        _prso,
        GLOBALS.sleepbit)
      object_action(
        )),
    (tell(
        "The",
        1,
        odesc2(
          _prso),
        "isn't sleeping."))))

define(
  zork,
  (),
  tell(
    "That word is replaced henceforth with DUNGEON."))

define(
  dungeon,
  (),
  tell(
    "At your service!"))

define(
  painting,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))
    (art
      2(
        GLOBALS.prsvec))),
  #decl
    ((prsa)
      verb
      (art)
      object),
  cond(
    (_EQ_Q(
        _prsa,
        GLOBALS.mung_X_words)
      put(
        _art,
        GLOBALS.otval,
        0)
      put(
        _art,
        GLOBALS.odesc2,
        "worthless piece of canvas")
      put(
        _art,
        GLOBALS.odesc1,
        "There is a worthless piece of canvas here.")
      tell(
        "Congratulations!  Unlike the other vandals, who merely stole the\nartist's masterpieces, you have destroyed one."))))

psetg(
  dimmer,
  "The lamp appears to be getting dimmer.")

psetg(
  lamp_ticks,
  [50
    30
    20
    10
    4
    0])

psetg(
  lamp_tells,
  [GLOBALS.dimmer
    GLOBALS.dimmer
    GLOBALS.dimmer
    GLOBALS.dimmer
    "The lamp is dying."])

define(
  lantern,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (verb
      1(
        _pv))
    (here
      GLOBALS.here)
    (rlamp
      find_obj(
        "LAMP"))
    foo),
  #decl
    ((pv)
      vector
      (verb)
      verb
      (here)
      room
      (rlamp)
      object
      (foo)
      vector(
        any,
        cevent)),
  cond(
    (_EQ_Q(
        _verb,
        GLOBALS.throw_X_words)
      tell(
        "The lamp has smashed into the floor and the light has gone out.")
      remove_object(
        find_obj(
          "LAMP"))
      insert_object(
        find_obj(
          "BLAMP"),
        _here)),
    (_EQ_Q(
        _verb,
        GLOBALS.c_int_X_words)
      light_int(
        _rlamp,
        GLOBALS.lntin,
        GLOBALS.lamp_ticks,
        GLOBALS.lamp_tells)),
    (_EQ_Q(
        _verb,
        GLOBALS.turn_on_X_words)
      clock_enable(
        2(
          LOCALS.foo = orand(
              _rlamp)))
      null),
    (_EQ_Q(
        _verb,
        GLOBALS.turn_off_X_words)
      clock_disable(
        2(
          LOCALS.foo = orand(
              _rlamp)))
      null)))

define(
  sword_glow,
  (dem
    "AUX"
    (sw
      hobj(
        _dem))
    (g
      otval(
        _sw))
    (here
      GLOBALS.here)
    (ng
      0)),
  #decl
    ((dem)
      hack
      (sw)
      object
      (ng
        g)
      fix
      (here)
      room),
  cond(
    (and(
        not(
          oroom(
            _sw)),
        not(
          ocan(
            _sw)),
        memq(
          _sw,
          aobjs(
            GLOBALS.player)))
      cond(
        (infested_Q(
            _here)
          LOCALS.ng = 2),
        (mapf(
            null,
            function(
              (e),
              #decl
                ((e)
                  or(
                    room,
                    cexit,
                    nexit,
                    atom)),
              cond(
                (type_Q(
                    _e,
                    room)
                  and(
                    infested_Q(
                      _e),
                    mapleave(
                      t))),
                (type_Q(
                    _e,
                    cexit)
                  and(
                    infested_Q(
                      2(
                        _e)),
                    mapleave(
                      t))))),
            rexits(
              _here))
          LOCALS.ng = 1))
      cond(
        (_EQ_Q(
            _ng,
            _g)),
        (_EQ_Q(
            _ng,
            2)
          tell(
            "Your sword has begun to glow very brightly.")),
        (1_Q(
            _ng)
          tell(
            "Your sword is glowing with a faint blue glow.")),
        (0_Q(
            _ng)
          tell(
            "Your sword is no longer glowing.")))
      put(
        _sw,
        GLOBALS.otval,
        _ng)),
    (put(
        _dem,
        GLOBALS.haction,
        null))))

define(
  sword,
  ("AUX"
    (pa
      1(
        GLOBALS.prsvec))),
  #decl
    ((pa)
      verb),
  cond(
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.take_X_words),
        _EQ_Q(
          GLOBALS.winner,
          GLOBALS.player))
      put(
        GLOBALS.sword_demon,
        GLOBALS.haction,
        cond(
          (type_Q(
              GLOBALS.sword_glow,
              offset)
            GLOBALS.sword_glow),
          (sword_glow)))
      null)))

define(
  infested_Q,
  (r
    "AUX"
    (villains
      GLOBALS.villains)
    (dem
      get_demon(
        "THIEF"))),
  #decl
    ((r)
      room
      (villains)
      list(
        [rest
          object])
      (dem)
      hack),
  or(
    and(
      _EQ_Q(
        _r,
        hroom(
          _dem)),
      haction(
        _dem)),
    mapf(
      null,
      function(
        (v),
        #decl
          ((v)
            object),
        cond(
          (_EQ_Q(
              _r,
              oroom(
                _v))
            mapleave(
              t)))),
      _villains)))

psetg(
  cdimmer,
  "The candles grow shorter.")

psetg(
  candle_ticks,
  [20
    10
    5
    0])

psetg(
  candle_tells,
  [GLOBALS.cdimmer
    GLOBALS.cdimmer
    "The candles are very short."])

define(
  match_function,
  ("AUX"
    (prsa
      1(
        GLOBALS.prsvec))
    (prso
      2(
        GLOBALS.prsvec))
    (match
      find_obj(
        "MATCH"))
    (mc
      orand(
        _match))),
  #decl
    ((prsa)
      verb
      (match)
      object
      (mc)
      fix),
  cond(
    (and(
        _EQ_Q(
          _prsa,
          GLOBALS.light_X_words),
        _EQ_Q(
          _prso,
          _match))
      cond(
        (and(
            put(
              _match,
              GLOBALS.orand,
              LOCALS.mc = _(
                  _mc,
                  1)),
            l__Q(
              _mc,
              0))
          tell(
            "I'm afraid that you have run out of matches.")),
        (tro(
            _match,
            GLOBALS.flamebit)
          put(
            _match,
            GLOBALS.olight_Q,
            1)
          clock_int(
            GLOBALS.matin,
            2)
          tell(
            "One of the matches starts to burn.")))),
    (and(
        _EQ_Q(
          _prsa,
          GLOBALS.turn_off_X_words),
        1_Q(
          olight_Q(
            _match)))
      tell(
        "The match is out.")
      trz(
        _match,
        GLOBALS.flamebit)
      put(
        _match,
        GLOBALS.olight_Q,
        0)
      clock_int(
        GLOBALS.matin,
        0)
      t),
    (_EQ_Q(
        _prsa,
        GLOBALS.c_int_X_words)
      tell(
        "The match has gone out.")
      trz(
        _match,
        GLOBALS.flamebit)
      put(
        _match,
        GLOBALS.olight_Q,
        0))))

define(
  candles,
  ("AUX"
    (prsact
      1(
        GLOBALS.prsvec))
    (c
      find_obj(
        "CANDL"))
    (winner
      GLOBALS.winner)
    (ao
      aobjs(
        _winner))
    (w
      3(
        GLOBALS.prsvec))
    match
    foo
    orphans),
  #decl
    ((prsact)
      verb
      (match
        c)
      object
      (w)
      or(
        false,
        object)
      (winner)
      adv
      (ao)
      list(
        [rest
          object])
      (foo)
      vector(
        fix,
        cevent)
      (orphans)
      vector(
        [4
          any])),
  or(
    orand(
      _c),
    put(
      _c,
      GLOBALS.orand,
      [0
        clock_int(
          GLOBALS.cndin,
          50)])),
  LOCALS.foo = orand(
      _c),
  cond(
    (_EQ_Q(
        _prsact,
        GLOBALS.light_X_words)
      cond(
        (0_Q(
            olight_Q(
              _c))
          tell(
            "Alas, there's not much left of the candles.  Certainly not enough to\nburn.")),
        (not(
            _w)
          tell(
            "With what?")
          put(
            LOCALS.orphans = GLOBALS.orphans,
            GLOBALS.oflag,
            t)
          put(
            _orphans,
            GLOBALS.overb,
            _prsact)
          put(
            _orphans,
            GLOBALS.oslot1,
            _c)
          put(
            _orphans,
            GLOBALS.oprep,
            chtype(
              with_X_words,
              prep))
          GLOBALS.parse_won = null
          t),
        (and(
            _EQ_Q(
              _w,
              LOCALS.match = find_obj(
                  "MATCH")),
            1_Q(
              olight_Q(
                _match)))
          cond(
            (1_Q(
                olight_Q(
                  _c))
              tell(
                "The candles are already lighted.")),
            (put(
                _c,
                GLOBALS.olight_Q,
                1)
              tell(
                "The candles are lighted.")
              clock_enable(
                2(
                  _foo))))),
        (_EQ_Q(
            _w,
            find_obj(
              "TORCH"))
          cond(
            (1_Q(
                olight_Q(
                  _c))
              tell(
                "You realize, just in time, that the candles are already lighted.")),
            (tell(
                "The heat from the torch is so intense that the candles are vaporised.")
              cond(
                (or(
                    oroom(
                      _c),
                    ocan(
                      _c))
                  remove_object(
                    _c)),
                (put(
                    _winner,
                    GLOBALS.aobjs,
                    splice_out(
                      _c,
                      _ao))))))),
        (tell(
            "You have to light them with something that's burning, you know.")))),
    (_EQ_Q(
        _prsact,
        GLOBALS.turn_off_X_words)
      clock_disable(
        2(
          _foo))
      cond(
        (1_Q(
            olight_Q(
              _c))
          tell(
            "The flame is extinguished.")
          put(
            _c,
            GLOBALS.olight_Q,
            _1)),
        (tell(
            "The candles are not lighted.")))),
    (_EQ_Q(
        _prsact,
        GLOBALS.c_int_X_words)
      light_int(
        _c,
        GLOBALS.cndin,
        GLOBALS.candle_ticks,
        GLOBALS.candle_tells))))

define(
  black_book,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (v
      1(
        _pv))
    (b
      2(
        _pv))),
  #decl
    ((pv)
      vector(
        [3
          any])
      (b)
      object
      (v)
      verb),
  cond(
    (_EQ_Q(
        _v,
        GLOBALS.burn_X_words)
      cond(
        (oroom(
            _b)
          remove_object(
            _b)),
        (drop_object(
            _b)))
      jigs_up(
        "A booming voice says 'Wrong, cretin!' and you notice that you have\nturned into a pile of dust."))))

define(
  light_int,
  (obj
    cev
    tick
    tell
    "AUX"
    cnt
    tim
    (foo
      orand(
        _obj))),
  #decl
    ((obj)
      object
      (fcn)
      applicable
      (tick)
      vector(
        [rest
          fix])
      (tell)
      vector(
        [rest
          string])
      (tim
        cnt)
      fix
      (foo)
      vector(
        fix,
        cevent)),
  put(
    _foo,
    1,
    LOCALS.cnt = _(
        1(
          _foo),
        1)),
  clock_int(
    _cev,
    LOCALS.tim = nth(
        _tick,
        _cnt)),
  cond(
    (0_Q(
        _tim)
      cond(
        (or(
            not(
              oroom(
                _obj)),
            _EQ_Q(
              oroom(
                _obj),
              GLOBALS.here))
          tell(
            "I hope you have more light than from a",
            1,
            odesc2(
              _obj),
            ".")))
      put(
        _obj,
        GLOBALS.olight_Q,
        0)),
    (or(
        not(
          oroom(
            _obj)),
        _EQ_Q(
          oroom(
            _obj),
          GLOBALS.here))
      tell(
        nth(
          _tell,
          _cnt)))))

define(
  hackable_Q,
  (obj
    rm
    "AUX"
    (av
      avehicle(
        GLOBALS.winner))),
  #decl
    ((obj)
      object
      (rm)
      room
      (av)
      or(
        false,
        object)),
  cond(
    (_av
      search_list(
        oid(
          _obj),
        ocontents(
          _av),
        null)),
    (search_list(
        oid(
          _obj),
        robjs(
          _rm),
        null))))