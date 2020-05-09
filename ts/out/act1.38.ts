// VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)

FUNCTIONS.blo = 
  (y) => {
    cond(
    /*(*/ [type_Q(
        GLOBALS.rep,
        subr,
        fsubr),
      LOCALS.read_table = put(
          ivector(
            256,
            0),
          chtype(
            ascii(
              _X__),
            fix),
          _X__),
      evaltype(
        form,
        segment),
      applytype(
        subr,
        fix),
      put(
        alltypes(
          ),
        6,
        7(
          alltypes(
            ))),
      substitute(
        2,
        1),
      off(
        LOCALS.bh)] /*)*/)
  }

gdecl(
  /*(*/ [ff] /*)*/,
  string)

FUNCTIONS.ilo = 
  (body: string,
    type: fix,
    nm1: string,
    nm2: string,
    m1?: string,
    m2: string) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.type,
        _400000000000_),
      cond(
        /*(*/ [or(
            and(
              member(
                "<FLUSH-ME>",
                LOCALS.body),
              not(
                member(
                  GLOBALS.xunm,
                  GLOBALS.winners))),
            and(
              member(
                LOCALS.nm1,
                GLOBALS.winners),
              member(
                GLOBALS.ff,
                LOCALS.body))),
          eval(
            parse(
              LOCALS.body))] /*)*/)] /*)*/)
dismiss(
    t)
  }

// ROOM FUNCTIONS

FUNCTIONS.east_house = 
  ("AUX": unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        LOCALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are behind the white house.  In one corner of the house there\nis a small window which is",
        1,
        cond(
          /*(*/ [GLOBALS.kitchen_window_X_flag,
            "open."] /*)*/,
          /*(*/ ["slightly ajar."] /*)*/))] /*)*/)
  }

// HACK THE KITCHEN WINDOW

GLOBALS.grunlock_X_flag = null

FUNCTIONS.window_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    open_close(
    LOCALS.prsact,
    kitchen_window_X_flag,
    "With great effort, you open the window far enough to allow entry.",
    "The window closes (more easily than it opened).")
  }

FUNCTIONS.open_close = 
  (verb: verb,
    atm: atom,
    stropn: string,
    strcls: string) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.open_X_words),
      cond(
        /*(*/ [/*,*/ [LOCALS.atm] /*1*/,
          tell(
            pick_one(
              GLOBALS.dummy))] /*)*/,
        /*(*/ [tell(
            LOCALS.stropn),
          setg(
            LOCALS.atm,
            t)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.close_X_words),
      cond(
        /*(*/ [/*,*/ [LOCALS.atm] /*1*/,
          tell(
            LOCALS.strcls),
          setg(
            LOCALS.atm,
            null),
          t] /*)*/,
        /*(*/ [tell(
            pick_one(
              GLOBALS.dummy))] /*)*/)] /*)*/)
  }

// KITCHEN -- CHECK THE WINDOW

FUNCTIONS.kitchen = 
  ("AUX": unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        LOCALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in the kitchen of the white house.  A table seems to have\nbeen used recently for the preparation of food.  A passage leads to\nthe west and a dark staircase can be seen leading upward.  To the\neast is a small window which is",
        0),
      cond(
        /*(*/ [GLOBALS.kitchen_window_X_flag,
          tell(
            "open.",
            1)] /*)*/,
        /*(*/ [tell(
            "slightly ajar.",
            1)] /*)*/)] /*)*/,
    /*(*/ [t] /*)*/)
  }

FUNCTIONS.leaf_pile = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [l,
      2(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        1(
          LOCALS.pv),
        GLOBALS.burn_X_words),
      put(
        LOCALS.l,
        GLOBALS.orand,
        1),
      cond(
        /*(*/ [oroom(
            LOCALS.l),
          tell(
            "The leaves burn and the neighbors start to complain."),
          remove_object(
            LOCALS.l)] /*)*/,
        /*(*/ [t,
          drop_object(
            LOCALS.l),
          jigs_up(
            "The sight of someone carrying a pile of burning leaves so offends\nthe neighbors that they come over and put you out.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        1(
          LOCALS.pv),
        GLOBALS.move_X_words),
      put(
        LOCALS.l,
        GLOBALS.orand,
        1),
      tell(
        "Done.")] /*)*/)
  }

psetg(
  resdesc,
  "However, with the water level lowered, there is merely a wide stream\nrunning through the center of the room.")

psetg(
  gladesc,
  "You are in a large room, with giant icicles hanging from the walls\nand ceiling.  There are passages to the north and east.")

FUNCTIONS.glacier_room = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      cond(
        /*(*/ [GLOBALS.glacier_flag_X_flag,
          tell(
            GLOBALS.gladesc),
          tell(
            "There is a large passageway leading westward.",
            1)] /*)*/,
        /*(*/ [tell(
            GLOBALS.gladesc)] /*)*/)] /*)*/)
  }

FUNCTIONS.trophy_case = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.take_X_words),
      tell(
        "The trophy case is securely fastened to the wall (perhaps to foil any\nattempt by robbers to remove it).")] /*)*/)
  }

FUNCTIONS.glacier = 
  ("AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    t: verb) => {
    cond(
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        throw_X_words),
      cond(
        /*(*/ [_EQ_Q(
            2(
              LOCALS.prsvec),
            LOCALS.t = find_obj(
                "TORCH")),
          tell(
            "The torch hits the glacier and explodes into a great ball of flame,\ndevouring the glacier.  The water from the melting glacier rushes\ndownstream, carrying the torch with it.  In the place of the glacier,\nthere is a passageway leading west."),
          remove_object(
            find_obj(
              "ICE")),
          remove_object(
            LOCALS.t),
          insert_object(
            LOCALS.t,
            find_room(
              "STREA")),
          put(
            LOCALS.t,
            GLOBALS.odesc2,
            "burned out ivory torch"),
          put(
            LOCALS.t,
            GLOBALS.odesc1,
            "There is a burned out ivory torch here."),
          put(
            LOCALS.t,
            GLOBALS.olight_Q,
            0),
          trz(
            LOCALS.t,
            GLOBALS.flamebit),
          or(
            lit_Q(
              GLOBALS.here),
            tell(
              "The melting glacier seems to have carried the torch away, leaving\nyou in the dark.")),
          GLOBALS.glacier_flag_X_flag = t] /*)*/,
        /*(*/ [tell(
            "The glacier is unmoved by your ridiculous attempt."),
          null] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        melt_X_words),
      tell(
        "How exactly are you going to melt this glacier?")] /*)*/)
  }

psetg(
  yuks,
  () => /*[*/ ["Nice try.",
      "You can't be serious.",
      "Chomp, Chomp.",
      "Not a prayer.",
      "I don't think so."] /*]*/)

FUNCTIONS.reservoir_south = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      cond(
        /*(*/ [GLOBALS.low_tide_X_flag,
          tell(
            "You are in the south end of a large cavernous room which was formerly\na reservoir."),
          tell(
            GLOBALS.resdesc,
            1)] /*)*/,
        /*(*/ [tell(
            "You are at the south end of a large reservoir.")] /*)*/),
      tell(
        "There is a western exit, a passageway south, and a steep pathway\nclimbing up along the edge of a cliff.",
        1)] /*)*/)
  }

FUNCTIONS.reservoir_north = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      cond(
        /*(*/ [GLOBALS.low_tide_X_flag,
          tell(
            "You are in the north end of a large cavernous room which was formerly\na reservoir."),
          tell(
            GLOBALS.resdesc,
            1)] /*)*/,
        /*(*/ [tell(
            "You are at the north end of a large reservoir.")] /*)*/),
      tell(
        "There is a tunnel leaving the room to the north.",
        1)] /*)*/)
  }

// LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE

FUNCTIONS.living_room = 
  ("AUX": unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    rug_Q: or(
        atom,
        false),
    /*(*/ [prsact,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    tc: object) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      cond(
        /*(*/ [GLOBALS.magic_flag_X_flag,
          tell(
            "You are in the living room.  There is a door to the east.  To the\nwest is a cyclops-shaped hole in an old wooden door, above which is\nsome strange gothic lettering",
            0)] /*)*/,
        /*(*/ [tell(
            "You are in the living room.  There is a door to the east, a wooden\ndoor with strange gothic lettering to the west, which appears to be\nnailed shut,",
            0)] /*)*/),
      LOCALS.rug_Q = orand(
          find_obj(
            "RUG")),
      cond(
        /*(*/ [and(
            LOCALS.rug_Q,
            GLOBALS.trap_door_X_flag),
          tell(
            "and a rug lying beside an open trap-door.",
            1)] /*)*/,
        /*(*/ [LOCALS.rug_Q,
          tell(
            "and a closed trap-door at your feet.",
            1)] /*)*/,
        /*(*/ [GLOBALS.trap_door_X_flag,
          tell(
            "and an open trap-door at your feet.",
            1)] /*)*/,
        /*(*/ [tell(
            "and a large oriental rug in the center of the room.",
            1)] /*)*/),
      t] /*)*/,
    /*(*/ [and(
        LOCALS.tc = find_obj(
            "TCASE"),
        or(
          _EQ_Q(
            LOCALS.prsact,
            GLOBALS.take_X_words),
          and(
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.put_X_words),
            _EQ_Q(
              3(
                LOCALS.prsvec),
              LOCALS.tc)))),
      put(
        GLOBALS.winner,
        GLOBALS.ascore,
        _(
          GLOBALS.raw_score,
          mapf(
            GLOBALS._,
            GLOBALS.otval,
            ocontents(
              LOCALS.tc))))] /*)*/)
  }

FUNCTIONS.trap_door = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [rm,
      GLOBALS.here] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.rm,
        find_room(
          "LROOM")),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsact,
            GLOBALS.open_X_words),
          cond(
            /*(*/ [GLOBALS.trap_door_X_flag,
              tell(
                "It's open.")] /*)*/,
            /*(*/ [tell(
                "The door reluctantly opens to reveal a rickety staircase descending\ninto darkness.")] /*)*/),
          cond_open(
            down_X_directions,
            LOCALS.rm)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prsact,
            GLOBALS.close_X_words),
          cond(
            /*(*/ [GLOBALS.trap_door_X_flag,
              tell(
                "The door swings shut and closes.")] /*)*/,
            /*(*/ [tell(
                "It's closed.")] /*)*/),
          cond_close(
            down_X_directions,
            LOCALS.rm),
          t] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.rm,
        find_room(
          "CELLA")),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsact,
            GLOBALS.open_X_words),
          tell(
            "The door is locked from above.")] /*)*/,
        /*(*/ [tell(
            pick_one(
              GLOBALS.dummy))] /*)*/)] /*)*/)
  }

FUNCTIONS.look_under = 
  ("AUX": unknown,
    /*(*/ [obj,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          LOCALS.obj,
          find_obj(
            "RUG")),
        not(
          orand(
            LOCALS.obj)),
        not(
          GLOBALS.trap_door_X_flag)),
      tell(
        "Underneath the rug is a closed trap door.")] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          LOCALS.obj,
          find_obj(
            "LEAVE")),
        n_EQ_Q(
          rvars(
            find_room(
              "CLEAR")),
          1)),
      tell(
        "Underneath the pile of leaves is a grating.")] /*)*/)
  }

FUNCTIONS.repent = 
  () => {
    tell(
    "It could very well be too late!")
  }

FUNCTIONS.clearing = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [rm,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [grate,
      find_obj(
        "GRAT1")] /*)*/: unknown,
    /*(*/ [leaves,
      find_obj(
        "LEAVE")] /*)*/: unknown,
    /*(*/ [rv,
      rvars(
        LOCALS.rm)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a clearing, with a forest surrounding you on the west\nand south."),
      cond(
        /*(*/ [GLOBALS.key_flag_X_flag,
          tell(
            "There is an open grating, descending into darkness.",
            1)] /*)*/,
        /*(*/ [not(
            0_Q(
              LOCALS.rv)),
          tell(
            "There is a grating securely fastened into the ground.",
            1)] /*)*/)] /*)*/,
    /*(*/ [and(
        0_Q(
          LOCALS.rv),
        or(
          and(
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.burn_X_words),
            not(
              0_Q(
                orand(
                  LOCALS.leaves)))),
          _EQ_Q(
            LOCALS.prsact,
            GLOBALS.take_X_words),
          _EQ_Q(
            LOCALS.prsact,
            GLOBALS.move_X_words)),
        _EQ_Q(
          2(
            GLOBALS.prsvec),
          LOCALS.leaves)),
      tell(
        "A grating appears on the ground."),
      tro(
        LOCALS.grate,
        GLOBALS.ovison),
      put(
        LOCALS.rm,
        GLOBALS.rvars,
        1)] /*)*/)
  }

// CELLAR--FIRST ROOM IN BASEMENT.

FUNCTIONS.cellar = 
  ("AUX": unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [door,
      find_obj(
        "DOOR")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a dark and damp cellar with a narrow passageway leading\neast, and a crawlway to the south.  On the west is the bottom of a\nsteep metal ramp which is unclimbable.")] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          vname(
            LOCALS.prsact),
          walk_in_X_words),
        GLOBALS.trap_door_X_flag,
        not(
          otouch_Q(
            LOCALS.door))),
      GLOBALS.trap_door_X_flag = null,
      put(
        LOCALS.door,
        GLOBALS.otouch_Q,
        t),
      tell(
        "The trap door crashes shut, and you hear someone barring it.",
        1)] /*)*/)
  }

"STUDIO:  LET PEOPLE UP THE CHIMNEY IF THEY DON'T HAVE MUCH STUFF"

FUNCTIONS.chimney_function = 
  ("AUX": unknown,
    /*(*/ [winner,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [aobjs,
      aobjs(
        LOCALS.winner)] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        l__Q(
          length(
            LOCALS.aobjs),
          2),
        memq(
          find_obj(
            "LAMP"),
          LOCALS.aobjs)),
      GLOBALS.light_load_X_flag = t,
      // Door will slam shut next time, too, since this way up don't count.,
      cond(
        /*(*/ [not(
            GLOBALS.trap_door_X_flag),
          put(
            find_obj(
              "DOOR"),
            GLOBALS.otouch_Q,
            null)] /*)*/),
      null] /*)*/,
    /*(*/ [t,
      GLOBALS.light_load_X_flag = null] /*)*/)
  }

// OBJECT FUNCTIONS

FUNCTIONS.rug = 
  ("AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsa,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    obj: object) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.lift_X_words),
      tell(
        "The rug is too heavy to lift, but in trying to take it you have \nnoticed an irregularity beneath it.")] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.move_X_words),
      cond(
        /*(*/ [orand(
            LOCALS.obj = find_obj(
                "RUG")),
          tell(
            "Having moved the carpet previously, you find it impossible to move\nit again.")] /*)*/,
        /*(*/ [tell(
            "With a great effort, the rug is moved to one side of the room.\nWith the rug moved, the dusty cover of a closed trap-door appears."),
          tro(
            find_obj(
              "DOOR"),
            GLOBALS.ovison),
          put(
            LOCALS.obj,
            GLOBALS.orand,
            t)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.take_X_words),
      tell(
        "The rug is extremely heavy and cannot be carried.")] /*)*/)
  }

FUNCTIONS.rusty_knife = 
  ("AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsa,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.take_X_words),
      and(
        memq(
          find_obj(
            "SWORD"),
          aobjs(
            GLOBALS.winner)),
        tell(
          "As you pick up the rusty knife, your sword gives a single pulse\nof blinding blue light.")),
      null] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.attac_X_words),
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.swing_X_words),
        and(
          _EQ_Q(
            LOCALS.prsa,
            GLOBALS.throw_X_words),
          LOCALS.prsi),
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.kill_X_words)),
      kill_obj(
        find_obj(
          "RKNIF"),
        GLOBALS.winner),
      jigs_up(
        "As the knife approaches its victim, your mind is submerged by an\novermastering will.  Slowly, your hand turns, until the rusty blade\nis an inch from your neck.  The knife seems to sing as it savagely\nslits your throat.")] /*)*/)
  }

FUNCTIONS.skeleton = 
  ("AUX": unknown,
    /*(*/ [rm,
      1(
        GLOBALS.winner)] /*)*/: unknown,
    /*(*/ [lld,
      find_room(
        "LLD2")] /*)*/: unknown,
    l: room) => {
    tell(
    "A ghost appears in the room and is appalled at your having\ndesecrated the remains of a fellow adventurer.  He casts a curse\non all of your valuables and orders them banished to the Land of\nthe Living Dead.  The ghost leaves, muttering obscenities.")
LOCALS.l = rob_room(
      LOCALS.rm,
      /*(*/ [] /*)*/,
      100)
LOCALS.l = rob_adv(
      GLOBALS.player,
      LOCALS.l)
mapf(
    null,
    /* FUNCTION */
      (x: object) => {
        put(
        LOCALS.x,
        GLOBALS.oroom,
        LOCALS.lld)
      },
    LOCALS.l)
cond(
    /*(*/ [not(
        empty_Q(
          LOCALS.l)),
      putrest(
        rest(
          LOCALS.l,
          _(
            length(
              LOCALS.l),
            1)),
        robjs(
          LOCALS.lld)),
      put(
        LOCALS.lld,
        GLOBALS.robjs,
        LOCALS.l)] /*)*/)
  }

FUNCTIONS.troll = 
  ("AUX": unknown,
    /*(*/ [pa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [here,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [t,
      find_obj(
        "TROLL")] /*)*/: unknown,
    /*(*/ [a,
      find_obj(
        "AXE")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.fight_X_words),
      cond(
        /*(*/ [_EQ_Q(
            ocan(
              LOCALS.a),
            LOCALS.t),
          null] /*)*/,
        /*(*/ [memq(
            LOCALS.a,
            robjs(
              GLOBALS.here)),
          snarf_object(
            LOCALS.t,
            LOCALS.a),
          and(
            _EQ_Q(
              LOCALS.here,
              oroom(
                LOCALS.t)),
            tell(
              "The troll, now worried about this encounter, recovers his bloody\naxe.")),
          t] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.here,
            oroom(
              LOCALS.t)),
          tell(
            "The troll, disarmed, cowers in terror, pleading for his life in\nthe guttural tongue of the trolls."),
          t] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.dead__X_X_words),
      GLOBALS.troll_flag_X_flag = t] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.out__X_X_words),
      trz(
        find_obj(
          "AXE"),
        GLOBALS.ovison),
      put(
        LOCALS.t,
        GLOBALS.odesc1,
        GLOBALS.trollout),
      GLOBALS.troll_flag_X_flag = t] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.in__X_X_words),
      tro(
        find_obj(
          "AXE"),
        GLOBALS.ovison),
      cond(
        /*(*/ [_EQ_Q(
            oroom(
              LOCALS.t),
            LOCALS.here),
          tell(
            "The troll stirs, quickly resuming a fighting stance.")] /*)*/),
      put(
        LOCALS.t,
        GLOBALS.odesc1,
        GLOBALS.trolldesc),
      GLOBALS.troll_flag_X_flag = null] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.first_Q_X_words),
      prob(
        33)] /*)*/,
    /*(*/ [and(
        or(
          _EQ_Q(
            LOCALS.pa,
            GLOBALS.throw_X_words),
          _EQ_Q(
            LOCALS.pa,
            GLOBALS.give_X_words)),
        LOCALS.prso),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.pa,
            GLOBALS.throw_X_words),
          tell(
            "The troll, who is remarkably coordinated, catches the",
            1,
            odesc2(
              LOCALS.prso))] /*)*/,
        /*(*/ [tell(
            "The troll, who is not overly proud, graciously accepts the gift")] /*)*/),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "KNIFE")),
          tell(
            "and being for the moment sated, throws it back.  Fortunately, the\ntroll has poor control, and the knife falls to the floor.  He does\nnot look pleased."),
          tro(
            LOCALS.t,
            GLOBALS.fightbit)] /*)*/,
        /*(*/ [tell(
            "and not having the most discriminating tastes, gleefully eats it."),
          remove_object(
            2(
              LOCALS.pv))] /*)*/)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.pa,
          GLOBALS.take_X_words),
        _EQ_Q(
          LOCALS.pa,
          GLOBALS.move_X_words)),
      tell(
        "The troll spits in your face, saying \"Better luck next time.\")] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.pa),
        mung_X_words),
      tell(
        "The troll laughs at your puny gesture.")] /*)*/)
  }

"MIRROR ROOM HACKERY"

FUNCTIONS.mirror_room = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.look_X_words),
        lit_Q(
          GLOBALS.here)),
      tell(
        "You are in a large square room with tall ceilings.  On the south wall\nis an enormous mirror which fills the entire wall.  There are exits\non the other three sides of the room."),
      cond(
        /*(*/ [GLOBALS.mirror_mung_X_flag,
          tell(
            "Unfortunately, you have managed to destroy it by your reckless\nactions.",
            1)] /*)*/)] /*)*/)
  }

GLOBALS.mirror_mung_X_flag = null

FUNCTIONS.mirror_mirror = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    rm1: room,
    rm2: room,
    l1: list(
        /*[*/ [rest,
          object] /*]*/)) => {
    cond(
    /*(*/ [and(
        not(
          GLOBALS.mirror_mung_X_flag),
        _EQ_Q(
          vname(
            LOCALS.prsact),
          rub_X_words)),
      LOCALS.rm1 = GLOBALS.here,
      LOCALS.rm2 = cond(
          /*(*/ [_EQ_Q(
              LOCALS.rm1,
              find_room(
                "MIRR1")),
            find_room(
              "MIRR2")] /*)*/,
          /*(*/ [find_room(
              "MIRR1")] /*)*/),
      LOCALS.l1 = robjs(
          LOCALS.rm1),
      put(
        LOCALS.rm1,
        GLOBALS.robjs,
        robjs(
          LOCALS.rm2)),
      put(
        LOCALS.rm2,
        GLOBALS.robjs,
        LOCALS.l1),
      mapf(
        null,
        /* FUNCTION */
          (x: object) => {
            put(
            LOCALS.x,
            GLOBALS.oroom,
            LOCALS.rm1)
          },
        robjs(
          LOCALS.rm1)),
      mapf(
        null,
        /* FUNCTION */
          (x: object) => {
            put(
            LOCALS.x,
            GLOBALS.oroom,
            LOCALS.rm2)
          },
        robjs(
          LOCALS.rm2)),
      goto(
        LOCALS.rm2),
      tell(
        "There is a rumble from deep within the earth and the room shakes.")] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.look_X_words),
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.exami_X_words)),
      cond(
        /*(*/ [GLOBALS.mirror_mung_X_flag,
          tell(
            "The mirror is broken into many pieces.")] /*)*/,
        /*(*/ [tell(
            "There is an ugly person staring at you.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.take_X_words),
      tell(
        "Nobody but a greedy surgeon would allow you to attempt that trick.")] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          vname(
            LOCALS.prsact),
          mung_X_words),
        _EQ_Q(
          vname(
            LOCALS.prsact),
          throw_X_words)),
      cond(
        /*(*/ [GLOBALS.mirror_mung_X_flag,
          tell(
            "Haven't you done enough already?")] /*)*/,
        /*(*/ [GLOBALS.mirror_mung_X_flag = t,
          tell(
            "You have broken the mirror.  I hope you have a seven years supply of\ngood luck handy.")] /*)*/)] /*)*/)
  }

FUNCTIONS.carousel_room = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          1(
            LOCALS.pv),
          GLOBALS.walk_in_X_words),
        GLOBALS.carousel_zoom_X_flag),
      jigs_up(
        GLOBALS.spindizzy)] /*)*/,
    /*(*/ [_EQ_Q(
        1(
          LOCALS.pv),
        GLOBALS.look_X_words),
      tell(
        "You are in a circular room with passages off in eight directions.",
        1),
      cond(
        /*(*/ [not(
            GLOBALS.carousel_flip_X_flag),
          tell(
            "Your compass needle spins wildly, and you can't get your bearings.",
            1)] /*)*/)] /*)*/)
  }

FUNCTIONS.carousel_exit = 
  ("AUX": unknown,
    cx: or(
        cexit,
        nexit,
        room)) => {
    cond(
    /*(*/ [GLOBALS.carousel_flip_X_flag,
      null] /*)*/,
    /*(*/ [tell(
        "Unfortunately, it is impossible to tell directions in here.",
        1),
      carousel_out(
        )] /*)*/)
  }

FUNCTIONS.carousel_out = 
  ("AUX": unknown,
    cx: or(
        cexit,
        nexit,
        room)) => {
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
      LOCALS.cx))
  }

FUNCTIONS.torch_room = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a large room with a prominent doorway leading to a down\nstaircase. To the west is a narrow twisting tunnel.  Above you is a\nlarge dome painted with scenes depicting elfin hacking rites. Up\naround the edge of the dome (20 feet up) is a wooden railing. In the\ncenter of the room there is a white marble pedestal."),
      cond(
        /*(*/ [GLOBALS.dome_flag_X_flag,
          tell(
            "A large piece of rope descends from the railing above, ending some\nfive feet above your head.",
            1)] /*)*/)] /*)*/)
  }

FUNCTIONS.dome_room = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are at the periphery of a large dome, which forms the ceiling\nof another room below.  Protecting you from a precipitous drop is a\nwooden railing which circles the dome."),
      cond(
        /*(*/ [GLOBALS.dome_flag_X_flag,
          tell(
            "Hanging down from the railing is a rope which ends about ten feet\nfrom the floor below.",
            1)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        jump_X_words),
      jigs_up(
        "I'm afraid that the leap you attempted has done you in.")] /*)*/)
  }

FUNCTIONS.coffin_cure = 
  () => {
    cond(
    /*(*/ [memq(
        find_obj(
          "COFFI"),
        aobjs(
          GLOBALS.winner)),
      GLOBALS.egypt_flag_X_flag = null] /*)*/,
    /*(*/ [else,
      GLOBALS.egypt_flag_X_flag = t] /*)*/)
null
  }

FUNCTIONS.lld_room = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [wobj,
      aobjs(
        LOCALS.win)] /*)*/: unknown,
    /*(*/ [pa,
      1(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [cand,
      find_obj(
        "CANDL")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.look_X_words),
      tell(
        "You are outside a large gateway, on which is inscribed \n	\"Abandon every hope, all ye who enter here.\"  \nThe gate is open; through it you can see a desolation, with a pile of\nmangled corpses in one corner.  Thousands of voices, lamenting some\nhideous fate, can be heard."),
      cond(
        /*(*/ [not(
            GLOBALS.lld_flag_X_flag),
          tell(
            "The way through the gate is barred by evil spirits, who jeer at your\nattempts to pass.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.pa),
        exorc_X_words),
      cond(
        /*(*/ [memq(
            find_obj(
              "GHOST"),
            robjs(
              GLOBALS.here)),
          cond(
            /*(*/ [and(
                memq(
                  find_obj(
                    "BELL"),
                  LOCALS.wobj),
                memq(
                  find_obj(
                    "BOOK"),
                  LOCALS.wobj),
                memq(
                  LOCALS.cand = find_obj(
                      "CANDL"),
                  LOCALS.wobj),
                g_Q(
                  olight_Q(
                    LOCALS.cand),
                  0)),
              tell(
                "There is a clap of thunder, and a voice echoes through the cavern: \n\"Begone, fiends!\"  The spirits, sensing the presence of a greater\npower, flee through the walls."),
              remove_object(
                find_obj(
                  "GHOST")),
              GLOBALS.lld_flag_X_flag = t] /*)*/,
            /*(*/ [tell(
                "You are not equipped for an exorcism.")] /*)*/)] /*)*/,
        /*(*/ [jigs_up(
            "There is a clap of thunder, and a voice echoes through the\ncavern: \"Begone, chomper!\"  Apparently, the voice thinks you\nare an evil spirit, and dismisses you from the realm of the living.")] /*)*/)] /*)*/)
  }

FUNCTIONS.lld2_room = 
  ("AUX": unknown,
    /*(*/ [prsa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.look_X_words),
      tell(
        "You have entered the Land of the Living Dead, a large desolate room.\nAlthough it is apparently uninhabited, you can hear the sounds of\nthousands of lost souls weeping and moaning.  In the east corner are\nstacked the remains of dozens of previous adventurers who were less\nfortunate than yourself.  To the east is an ornate passage,\napparently recently constructed.",
        1,
        cond(
          /*(*/ [GLOBALS.on_pole_X_flag,
            "Amid the desolation, you spot what\nappears to be your head, at the end of a long pole."] /*)*/,
          /*(*/ [""] /*)*/))] /*)*/)
  }

FUNCTIONS.ghost_function = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [g,
      find_obj(
        "GHOST")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        3(
          LOCALS.pv),
        LOCALS.g),
      tell(
        "How can you attack a spirit with material objects?"),
      null] /*)*/,
    /*(*/ [_EQ_Q(
        2(
          LOCALS.pv),
        LOCALS.g),
      tell(
        "You seem unable to affect these spirits.")] /*)*/)
  }

FUNCTIONS.maze_11 = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are in a small room near the maze. There are twisty passages\nin the immediate vicinity."),
      cond(
        /*(*/ [GLOBALS.key_flag_X_flag,
          tell(
            "Above you is an open grating with sunlight pouring in.")] /*)*/,
        /*(*/ [GLOBALS.grunlock_X_flag,
          tell(
            "Above you is a grating.")] /*)*/,
        /*(*/ [tell(
            "Above you is a grating locked with a skull-and-crossbones lock.")] /*)*/)] /*)*/)
  }

FUNCTIONS.grat1_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [GLOBALS.grunlock_X_flag,
      open_close(
        LOCALS.prsact,
        key_flag_X_flag,
        "The grating opens.",
        "The grating is closed.")] /*)*/,
    /*(*/ [tell(
        "The grating is locked.")] /*)*/)
  }

FUNCTIONS.grat2_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [GLOBALS.grunlock_X_flag,
      open_close(
        LOCALS.prsact,
        key_flag_X_flag,
        "The grating opens to reveal trees above you.",
        "The grating is closed."),
      tro(
        find_obj(
          "GRAT1"),
        GLOBALS.ovison)] /*)*/,
    /*(*/ [tell(
        "The grating is locked.")] /*)*/)
  }

FUNCTIONS.treasure_room = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [hack,
      GLOBALS.robber_demon] /*)*/: unknown,
    hh: list(
        /*[*/ [rest,
          object] /*]*/),
    chali: unknown,
    /*(*/ [hobj,
      hobj(
        LOCALS.hack)] /*)*/: unknown,
    /*(*/ [flg,
      null] /*)*/: unknown,
    tl: list(
        /*[*/ [rest,
          room] /*]*/),
    /*(*/ [here,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [rooms,
      GLOBALS.rooms] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        haction(
          LOCALS.hack),
        _EQ_Q(
          vname(
            1(
              LOCALS.pv)),
          walk_in_X_words)),
      cond(
        /*(*/ [LOCALS.flg = n_EQ_Q(
              oroom(
                LOCALS.hobj),
              LOCALS.here),
          tell(
            "You hear a scream of anguish as you violate the robber's hideaway. \nUsing passages unknown to you, he rushes to its defense."),
          cond(
            /*(*/ [oroom(
                LOCALS.hobj),
              remove_object(
                LOCALS.hobj)] /*)*/),
          tro(
            LOCALS.hobj,
            GLOBALS.fightbit),
          put(
            LOCALS.hack,
            GLOBALS.hroom,
            LOCALS.here),
          put(
            LOCALS.hack,
            GLOBALS.hrooms,
            cond(
              /*(*/ [empty_Q(
                  LOCALS.tl = rest(
                      memq(
                        LOCALS.here,
                        LOCALS.rooms))),
                LOCALS.rooms] /*)*/,
              /*(*/ [LOCALS.tl] /*)*/)),
          insert_object(
            LOCALS.hobj,
            LOCALS.here)] /*)*/,
        /*(*/ [t,
          tro(
            LOCALS.hobj,
            GLOBALS.fightbit)] /*)*/),
      and(
        not(
          ocan(
            LOCALS.chali = find_obj(
                "CHALI"))),
        _EQ_Q(
          oroom(
            LOCALS.chali),
          LOCALS.here),
        trz(
          LOCALS.chali,
          GLOBALS.takebit)),
      cond(
        /*(*/ [not(
            length_Q(
              robjs(
                LOCALS.here),
              2)),
          tell(
            "The thief gestures mysteriously, and the treasures in the room\nsuddenly vanish.")] /*)*/),
      mapf(
        null,
        /* FUNCTION */
          (x: object) => {
            cond(
            /*(*/ [and(
                n_EQ_Q(
                  LOCALS.x,
                  LOCALS.chali),
                n_EQ_Q(
                  LOCALS.x,
                  LOCALS.hobj)),
              trz(
                LOCALS.x,
                GLOBALS.ovison)] /*)*/)
          },
        robjs(
          LOCALS.here))] /*)*/)
  }

FUNCTIONS.treas = 
  () => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          1(
            GLOBALS.prsvec),
          GLOBALS.treas_X_words),
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TEMP1"))),
      goto(
        find_room(
          "TREAS")),
      room_desc(
        )] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          1(
            GLOBALS.prsvec),
          GLOBALS.templ_X_words),
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TREAS"))),
      goto(
        find_room(
          "TEMP1")),
      room_desc(
        )] /*)*/,
    /*(*/ [t,
      tell(
        "Nothing happens.")] /*)*/)
  }

FUNCTIONS.prayer = 
  () => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "TEMP2")),
        goto(
          find_room(
            "FORE1"))),
      room_desc(
        )] /*)*/,
    /*(*/ [tell(
        "If you pray enough, your prayers may be answered.")] /*)*/)
  }

GLOBALS.gate_flag_X_flag = null

FUNCTIONS.dam_room = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.look_X_words),
      tell(
        "You are standing on the top of the Flood Control Dam #3, which was\nquite a tourist attraction in times far distant.  There are paths to\nthe north, south, east, and down."),
      cond(
        /*(*/ [GLOBALS.low_tide_X_flag,
          tell(
            "It appears that the dam has been opened since the water level behind\nit is low and the sluice gate has been opened.  Water is rushing\ndownstream through the gates.",
            1)] /*)*/,
        /*(*/ [tell(
            "The sluice gates on the dam are closed.  Behind the dam, there can be\nseen a wide lake.  A small stream is formed by the runoff from the\nlake.",
            1)] /*)*/),
      tell(
        "There is a control panel here.  There is a large metal bolt on the \npanel. Above the bolt is a small green plastic bubble.",
        1),
      cond(
        /*(*/ [GLOBALS.gate_flag_X_flag,
          tell(
            "The green bubble is glowing.",
            1)] /*)*/)] /*)*/)
  }

FUNCTIONS.bolt_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [trunk,
      find_obj(
        "TRUNK")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.turn_X_words),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsi,
            find_obj(
              "WRENC")),
          cond(
            /*(*/ [GLOBALS.gate_flag_X_flag,
              cond(
                /*(*/ [GLOBALS.low_tide_X_flag,
                  GLOBALS.low_tide_X_flag = null,
                  tell(
                    "The sluice gates close and water starts to collect behind the dam."),
                  and(
                    memq(
                      LOCALS.trunk,
                      robjs(
                        find_room(
                          "RESES"))),
                    trz(
                      LOCALS.trunk,
                      GLOBALS.ovison)),
                  t] /*)*/,
                /*(*/ [GLOBALS.low_tide_X_flag = t,
                  tell(
                    "The sluice gates open and water pours through the dam."),
                  tro(
                    LOCALS.trunk,
                    GLOBALS.ovison)] /*)*/)] /*)*/,
            /*(*/ [tell(
                "The bolt won't turn with your best effort.")] /*)*/)] /*)*/,
        /*(*/ [type_Q(
            LOCALS.prsi,
            object),
          tell(
            "The bolt won't turn using the",
            1,
            odesc2(
              LOCALS.prsi),
            ".")] /*)*/)] /*)*/)
  }

psetg(
  drownings,
  () => /*[*/ ["up to your ankles.",
      "up to your shin.",
      "up to your knees.",
      "up to your hips.",
      "up to your waist.",
      "up to your chest.",
      "up to your neck.",
      "over your head.",
      "high in your lungs."] /*]*/)

gdecl(
  /*(*/ [drownings] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.maint_room = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [mnt,
      find_room(
        "MAINT")] /*)*/: unknown,
    /*(*/ [here_Q,
      _EQ_Q(
        GLOBALS.here,
        LOCALS.mnt)] /*)*/: unknown,
    hack: fix) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.c_int_X_words),
      put(
        LOCALS.mnt,
        GLOBALS.rvars,
        _(
          1,
          LOCALS.hack = rvars(
              LOCALS.mnt))),
      cond(
        /*(*/ [and(
            LOCALS.here_Q,
            tell(
              "The water level here is now",
              1,
              nth(
                GLOBALS.drownings,
                _(
                  1,
                  _(
                    LOCALS.hack = rvars(
                        LOCALS.mnt),
                    2)))))] /*)*/),
      cond(
        /*(*/ [g__Q(
            LOCALS.hack = rvars(
                LOCALS.mnt),
            16),
          mung_room(
            LOCALS.mnt,
            "The room is full of water and cannot be entered."),
          clock_int(
            GLOBALS.mntin,
            0),
          and(
            LOCALS.here_Q,
            jigs_up(
              "I'm afraid you have done drowned yourself."))] /*)*/)] /*)*/)
cond(
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        push_X_words),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "BLBUT")),
          cond(
            /*(*/ [0_Q(
                LOCALS.hack = rvars(
                    GLOBALS.here)),
              tell(
                "There is a rumbling sound and a stream of water appears to burst\nfrom the east wall of the room (apparently, a leak has occurred in a\npipe.)"),
              put(
                GLOBALS.here,
                GLOBALS.rvars,
                1),
              clock_int(
                GLOBALS.mntin,
                _1),
              t] /*)*/,
            /*(*/ [tell(
                "The blue button appears to be jammed.")] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "RBUTT")),
          put(
            GLOBALS.here,
            GLOBALS.rlight_Q,
            not(
              rlight_Q(
                GLOBALS.here))),
          cond(
            /*(*/ [rlight_Q(
                GLOBALS.here),
              tell(
                "The lights within the room come on.")] /*)*/,
            /*(*/ [tell(
                "The lights within the room shut off.")] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "BRBUT")),
          GLOBALS.gate_flag_X_flag = null,
          tell(
            "Click.")] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "YBUTT")),
          GLOBALS.gate_flag_X_flag = t,
          tell(
            "Click.")] /*)*/)] /*)*/)
  }

FUNCTIONS.leak_function = 
  ("AUX": unknown,
    hack: fix,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsa,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        2(
          LOCALS.prsvec),
        find_obj(
          "LEAK")),
      cond(
        /*(*/ [and(
            _EQ_Q(
              vname(
                LOCALS.prsa),
              plug_X_words),
            g_Q(
              LOCALS.hack = rvars(
                  GLOBALS.here),
              0)),
          cond(
            /*(*/ [_EQ_Q(
                LOCALS.prsi,
                find_obj(
                  "PUTTY")),
              put(
                GLOBALS.here,
                GLOBALS.rvars,
                _1),
              clock_int(
                GLOBALS.mntin,
                0),
              tell(
                "By some miracle of elven technology, you have managed to stop the\nleak in the dam.")] /*)*/,
            /*(*/ [with_tell(
                LOCALS.prsi)] /*)*/)] /*)*/)] /*)*/)
  }

FUNCTIONS.tube_function = 
  ("AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          1(
            LOCALS.prsvec),
          GLOBALS.put_X_words),
        _EQ_Q(
          3(
            LOCALS.prsvec),
          find_obj(
            "TUBE"))),
      tell(
        "The tube refuses to accept anything.")] /*)*/)
  }

FUNCTIONS.with_tell = 
  (obj: object) => {
    tell(
    "With a",
    1,
    odesc2(
      LOCALS.obj),
    "?")
  }

FUNCTIONS.cave2_room = 
  ("AUX": unknown,
    foo: vector(
        fix,
        cevent),
    bar: cevent,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    c: verb) => {
    cond(
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        walk_in_X_words),
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
            LOCALS.c)),
        clock_disable(
          LOCALS.bar = 2(
              LOCALS.foo = orand(
                  LOCALS.c))),
        put(
          LOCALS.c,
          GLOBALS.olight_Q,
          _1),
        tell(
          "The cave is very windy at the moment and your candles have blown out."))] /*)*/)
  }

FUNCTIONS.bottle_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        1(
          LOCALS.prsact),
        throw_X_words),
      tell(
        "The bottle hits the far wall and is decimated."),
      remove_object(
        2(
          GLOBALS.prsvec))] /*)*/,
    /*(*/ [_EQ_Q(
        1(
          LOCALS.prsact),
        mung_X_words),
      cond(
        /*(*/ [memq(
            2(
              GLOBALS.prsvec),
            aobjs(
              GLOBALS.winner)),
          put(
            GLOBALS.winner,
            GLOBALS.aobjs,
            splice_out(
              2(
                GLOBALS.prsvec),
              aobjs(
                GLOBALS.winner))),
          tell(
            "You have destroyed the bottle.  Well done.")] /*)*/,
        /*(*/ [memq(
            2(
              GLOBALS.prsvec),
            robjs(
              GLOBALS.here)),
          put(
            GLOBALS.here,
            GLOBALS.robjs,
            splice_out(
              2(
                GLOBALS.prsvec),
              robjs(
                GLOBALS.here))),
          tell(
            "A brilliant maneuver destroys the bottle.")] /*)*/)] /*)*/)
  }

FUNCTIONS.fill = 
  ("AUX": unknown,
    /*(*/ [rem,
      null] /*)*/: unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [w,
      find_obj(
        "WATER")] /*)*/: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [or(
        rtrnn(
          GLOBALS.here,
          GLOBALS.rfillbit),
        LOCALS.rem = or(
            _EQ_Q(
              ocan(
                LOCALS.w),
              avehicle(
                GLOBALS.winner)),
            _EQ_Q(
              oroom(
                LOCALS.w),
              GLOBALS.here))),
      put(
        LOCALS.prsvec,
        1,
        GLOBALS.take_X_words),
      put(
        LOCALS.prsvec,
        3,
        2(
          LOCALS.prsvec)),
      put(
        LOCALS.prsvec,
        2,
        LOCALS.w),
      water_function(
        LOCALS.rem)] /*)*/,
    /*(*/ [tell(
        "I can't find any water here.")] /*)*/)
  }

FUNCTIONS.water_function = 
  (/*(*/ [rem,
      t] /*)*/?: unknown,
    "AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsact,
      1(
        LOCALS.prsvec)] /*)*/: unknown,
    /*(*/ [me,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [b,
      find_obj(
        "BOTTL")] /*)*/: unknown,
    /*(*/ [w,
      2(
        LOCALS.prsvec)] /*)*/: unknown,
    /*(*/ [av,
      avehicle(
        LOCALS.me)] /*)*/: unknown,
    /*(*/ [can,
      3(
        LOCALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.take_X_words),
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.put_X_words)),
      cond(
        /*(*/ [and(
            LOCALS.av,
            _EQ_Q(
              LOCALS.av,
              LOCALS.can)),
          tell(
            "There is now a puddle in the bottom of the",
            1,
            odesc2(
              LOCALS.av),
            "."),
          cond(
            /*(*/ [memq(
                LOCALS.w,
                aobjs(
                  LOCALS.me)),
              drop_object(
                LOCALS.w,
                LOCALS.me)] /*)*/),
          cond(
            /*(*/ [memq(
                LOCALS.w,
                ocontents(
                  LOCALS.av))] /*)*/,
            /*(*/ [put(
                LOCALS.av,
                GLOBALS.ocontents,
                /*(*/ [LOCALS.w,
                  _X,
                  ocontents(
                    LOCALS.av)] /*)*/),
              put(
                LOCALS.w,
                GLOBALS.ocan,
                LOCALS.av)] /*)*/)] /*)*/,
        /*(*/ [and(
            LOCALS.can,
            n_EQ_Q(
              LOCALS.can,
              LOCALS.b)),
          tell(
            "The water leaks out of the",
            1,
            odesc2(
              LOCALS.can),
            "and evaporates immediately."),
          cond(
            /*(*/ [memq(
                LOCALS.w,
                aobjs(
                  LOCALS.me)),
              drop_object(
                LOCALS.w,
                LOCALS.me)] /*)*/,
            /*(*/ [remove_object(
                LOCALS.w)] /*)*/)] /*)*/,
        /*(*/ [memq(
            LOCALS.b,
            aobjs(
              LOCALS.me)),
          cond(
            /*(*/ [not(
                empty_Q(
                  ocontents(
                    LOCALS.b))),
              tell(
                "The bottle is already full.")] /*)*/,
            /*(*/ [not(
                oopen_Q(
                  LOCALS.b)),
              tell(
                "The bottle is closed.")] /*)*/,
            /*(*/ [t,
              and(
                LOCALS.rem,
                remove_object(
                  LOCALS.w)),
              put(
                LOCALS.b,
                GLOBALS.ocontents,
                /*(*/ [LOCALS.w] /*)*/),
              put(
                LOCALS.w,
                GLOBALS.ocan,
                LOCALS.b),
              tell(
                "The bottle is now full of water.")] /*)*/)] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              ocan(
                LOCALS.w),
              LOCALS.b),
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.take_X_words),
            not(
              LOCALS.can)),
          put(
            LOCALS.prsvec,
            2,
            LOCALS.b),
          take(
            t),
          put(
            LOCALS.prsvec,
            2,
            LOCALS.w)] /*)*/,
        /*(*/ [tell(
            "The water slips through your fingers.")] /*)*/)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.drop_X_words),
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.pour_X_words),
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.give_X_words)),
      cond(
        /*(*/ [memq(
            LOCALS.w,
            aobjs(
              LOCALS.me)),
          drop_object(
            LOCALS.w,
            LOCALS.me)] /*)*/),
      cond(
        /*(*/ [LOCALS.av,
          tell(
            "There is now a puddle in the bottom of the",
            1,
            odesc2(
              LOCALS.av),
            ".")] /*)*/,
        /*(*/ [tell(
            "The water spills to the floor and evaporates immediately."),
          remove_object(
            LOCALS.w)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.throw_X_words),
      tell(
        "The water splashes on the walls, and evaporates immediately."),
      remove_object(
        LOCALS.w)] /*)*/)
  }

FUNCTIONS.rope_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [droom,
      find_room(
        "DOME")] /*)*/: unknown,
    /*(*/ [rope,
      find_obj(
        "ROPE")] /*)*/: unknown,
    /*(*/ [win,
      GLOBALS.winner] /*)*/: unknown) => {
    cond(
    /*(*/ [n_EQ_Q(
        GLOBALS.here,
        LOCALS.droom),
      GLOBALS.dome_flag_X_flag = null,
      cond(
        /*(*/ [_EQ_Q(
            vname(
              LOCALS.prsact),
            tie_X_words),
          tell(
            "There is nothing it can be tied to.")] /*)*/,
        /*(*/ [_EQ_Q(
            vname(
              LOCALS.prsact),
            untie_X_words),
          tell(
            "It is not tied to anything.")] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          vname(
            LOCALS.prsact),
          tie_X_words),
        _EQ_Q(
          3(
            GLOBALS.prsvec),
          find_obj(
            "RAILI"))),
      cond(
        /*(*/ [GLOBALS.dome_flag_X_flag,
          tell(
            "The rope is already attached.")] /*)*/,
        /*(*/ [tell(
            "The rope drops over the side and comes within ten feet of the floor."),
          GLOBALS.dome_flag_X_flag = t,
          tro(
            LOCALS.rope,
            GLOBALS.ndescbit),
          cond(
            /*(*/ [not(
                oroom(
                  LOCALS.rope)),
              put(
                LOCALS.win,
                GLOBALS.aobjs,
                splice_out(
                  LOCALS.rope,
                  aobjs(
                    LOCALS.win))),
              insert_object(
                LOCALS.rope,
                LOCALS.droom)] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        untie_X_words),
      cond(
        /*(*/ [GLOBALS.dome_flag_X_flag,
          GLOBALS.dome_flag_X_flag = null,
          trz(
            LOCALS.rope,
            GLOBALS.ndescbit),
          tell(
            "Although you tied it incorrectly, the rope becomes free.")] /*)*/,
        /*(*/ [tell(
            "It is not tied to anything.")] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.drop_X_words),
        not(
          GLOBALS.dome_flag_X_flag)),
      remove_object(
        LOCALS.rope),
      insert_object(
        LOCALS.rope,
        find_room(
          "TORCH")),
      tell(
        "The rope drops gently to the floor below.")] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.take_X_words),
        GLOBALS.dome_flag_X_flag,
        tell(
          "The rope is tied to the railing."))] /*)*/)
  }

FUNCTIONS.cyclops = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsob1,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [rm,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [food,
      find_obj(
        "FOOD")] /*)*/: unknown,
    /*(*/ [drink,
      find_obj(
        "WATER")] /*)*/: unknown,
    /*(*/ [count,
      rvars(
        LOCALS.rm)] /*)*/: unknown,
    /*(*/ [garlic,
      find_obj(
        "GARLI")] /*)*/: unknown,
    cyc: object) => {
    cond(
    /*(*/ [GLOBALS.cyclops_flag_X_flag,
      cond(
        /*(*/ [or(
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.awake_X_words),
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.mung_X_words),
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.burn_X_words),
            _EQ_Q(
              LOCALS.prsact,
              GLOBALS.fight_X_words)),
          tell(
            "The cyclops yawns and stares at the thing that woke him up."),
          GLOBALS.cyclops_flag_X_flag = null,
          trz(
            LOCALS.cyc = find_obj(
                "CYCLO"),
            GLOBALS.sleepbit),
          tro(
            LOCALS.cyc,
            GLOBALS.fightbit),
          put(
            LOCALS.rm,
            GLOBALS.rvars,
            abs(
              rvars(
                LOCALS.rm))),
          t] /*)*/)] /*)*/,
    /*(*/ [g_Q(
        abs(
          LOCALS.count),
        5),
      jigs_up(
        "The cyclops, tired of all of your games and trickery, eats you.\nThe cyclops says 'Mmm.  Just like mom used to make 'em.'")] /*)*/,
    /*(*/ [_EQ_Q(
        vname(
          LOCALS.prsact),
        give_X_words),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsob1,
            LOCALS.food),
          cond(
            /*(*/ [g__Q(
                LOCALS.count,
                0),
              remove_object(
                LOCALS.food),
              tell(
                "The cyclops says 'Mmm Mmm.  I love hot peppers!  But oh, could I use\na drink.  Perhaps I could drink the blood of that thing'.  From the\ngleam in his eye, it could be surmised that you are 'that thing'."),
              put(
                LOCALS.rm,
                GLOBALS.rvars,
                min(
                  _1,
                  _(
                    LOCALS.count)))] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prsob1,
            LOCALS.drink),
          cond(
            /*(*/ [l_Q(
                LOCALS.count,
                0),
              remove_object(
                LOCALS.drink),
              tro(
                LOCALS.cyc = find_obj(
                    "CYCLO"),
                GLOBALS.sleepbit),
              trz(
                LOCALS.cyc,
                GLOBALS.fightbit),
              tell(
                "The cyclops looks tired and quickly falls fast asleep (what did you\nput in that drink, anyway?)."),
              GLOBALS.cyclops_flag_X_flag = t] /*)*/,
            /*(*/ [tell(
                "The cyclops apparently was not thirsty at the time and refuses your\ngenerous gesture."),
              null] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prsob1,
            LOCALS.garlic),
          tell(
            "The cyclops may be hungry, but there is a limit."),
          put(
            LOCALS.rm,
            GLOBALS.rvars,
            aos_sos(
              LOCALS.count))] /*)*/,
        /*(*/ [tell(
            "The cyclops is not so stupid as to eat THAT!"),
          put(
            LOCALS.rm,
            GLOBALS.rvars,
            aos_sos(
              LOCALS.count))] /*)*/)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.first_Q_X_words),
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.fight_X_words)),
      null] /*)*/,
    /*(*/ [and(
        put(
          LOCALS.rm,
          GLOBALS.rvars,
          aos_sos(
            LOCALS.count)),
        null)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsact,
          GLOBALS.throw_X_words),
        _EQ_Q(
          vname(
            LOCALS.prsact),
          mung_X_words)),
      cond(
        /*(*/ [prob(
            50),
          tell(
            "Your actions don't appear to be doing much harm to the cyclops, but\nthey do not exactly lower your insurance premiums, either.")] /*)*/,
        /*(*/ [tell(
            "The cyclops ignores all injury to his body with a shrug.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.take_X_words),
      tell(
        "The cyclops is rather heavy and doesn't take kindly to being grabbed.")] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.tie_X_words),
      tell(
        "You cannot tie the cyclops, although he is fit to be tied.")] /*)*/)
  }

FUNCTIONS.cyclops_room = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [rm,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [vars,
      rvars(
        LOCALS.rm)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        1(
          LOCALS.pv),
        GLOBALS.look_X_words),
      tell(
        "You are in a room with an exit on the west side, and a staircase\nleading up."),
      cond(
        /*(*/ [and(
            GLOBALS.cyclops_flag_X_flag,
            not(
              GLOBALS.magic_flag_X_flag)),
          tell(
            "The cyclops, perhaps affected by a drug in your drink, is sleeping\nblissfully at the foot of the stairs.")] /*)*/,
        /*(*/ [GLOBALS.magic_flag_X_flag,
          tell(
            "On the north of the room is a wall which used to be solid, but which\nnow has a cyclops-sized hole in it.")] /*)*/,
        /*(*/ [0_Q(
            LOCALS.vars),
          tell(
            "A cyclops, who looks prepared to eat horses (much less mere\nadventurers), blocks the staircase.  From his state of health, and\nthe bloodstains on the walls, you gather that he is not very\nfriendly, though he likes people.",
            1)] /*)*/,
        /*(*/ [g_Q(
            LOCALS.vars,
            0),
          tell(
            "The cyclops is standing in the corner, eyeing you closely.  I don't\nthink he likes you very much.  He looks extremely hungry even for a\ncyclops.")] /*)*/,
        /*(*/ [l_Q(
            LOCALS.vars,
            0),
          tell(
            "The cyclops, having eaten the hot peppers, appears to be gasping.\nHis enflamed tongue protrudes from his man-sized mouth.")] /*)*/),
      cond(
        /*(*/ [GLOBALS.cyclops_flag_X_flag] /*)*/,
        /*(*/ [or(
            0_Q(
              LOCALS.vars),
            tell(
              nth(
                GLOBALS.cyclomad,
                abs(
                  LOCALS.vars))))] /*)*/)] /*)*/)
  }

psetg(
  cyclomad,
  () => /*[*/ ["The cyclops seems somewhat agitated.",
      "The cyclops appears to be getting more agitated.",
      "The cyclops is moving about the room, looking for something.",
      "The cyclops was looking for salt and pepper.  I think he is gathering\ncondiments for his upcoming snack.",
      "The cyclops is moving toward you in an unfriendly manner.",
      "You have two choices: 1. Leave  2. Become dinner."] /*]*/)

gdecl(
  /*(*/ [cyclomad] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.aos_sos = 
  (foo: fix) => {
    cond(
    /*(*/ [l_Q(
        LOCALS.foo,
        0),
      LOCALS.foo = _(
          LOCALS.foo,
          1)] /*)*/,
    /*(*/ [LOCALS.foo = _(
          LOCALS.foo,
          1)] /*)*/)
cond(
    /*(*/ [GLOBALS.cyclops_flag_X_flag] /*)*/,
    /*(*/ [tell(
        nth(
          GLOBALS.cyclomad,
          abs(
            LOCALS.foo)))] /*)*/)
  }

GLOBALS.echo_flag_X_flag = null

FUNCTIONS.echo_room = 
  ("AUX": unknown,
    /*(*/ [reader_string,
      GLOBALS.reader_string] /*)*/: unknown,
    /*(*/ [b,
      GLOBALS.inbuf] /*)*/: unknown,
    l: verb,
    /*(*/ [rm,
      find_room(
        "ECHO")] /*)*/: unknown,
    /*(*/ [outchan,
      GLOBALS.outchan] /*)*/: unknown,
    verb: verb,
    /*(*/ [walk,
      GLOBALS.walk_X_words] /*)*/: unknown) => {
    cond(
    /*(*/ [GLOBALS.echo_flag_X_flag] /*)*/,
    /*(*/ [unwind(
        prog(
          /*(*/ [] /*)*/,
          mapf(
            null,
            /* FUNCTION */
              (obj: object) => {
                cond(
                /*(*/ [ovis_Q(
                    LOCALS.obj),
                  tro(
                    LOCALS.obj,
                    GLOBALS.echo_room_bit),
                  trz(
                    LOCALS.obj,
                    GLOBALS.ovison)] /*)*/)
              },
            robjs(
              LOCALS.rm)),
          repeat(
            /*(*/ [/*(*/ [prsvec,
                GLOBALS.prsvec] /*)*/,
              random_action] /*)*/,
            /*#*/ [decl,
              /*(*/ [/*(*/ [prsvec] /*)*/,
                vector] /*)*/] /*2*/,
            LOCALS.l = readstring(
                LOCALS.b,
                GLOBALS.inchan,
                LOCALS.reader_string),
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
              /*(*/ [and(
                  eparse(
                    lex(
                      LOCALS.b,
                      rest(
                        LOCALS.b,
                        LOCALS.l),
                      t),
                    t),
                  _EQ_Q(
                    LOCALS.verb = 1(
                        LOCALS.prsvec),
                    LOCALS.walk),
                  2(
                    LOCALS.prsvec),
                  memq(
                    chtype(
                      2(
                        LOCALS.prsvec),
                      atom),
                    rexits(
                      LOCALS.rm))),
                LOCALS.random_action = vfcn(
                    LOCALS.verb),
                apply_random(
                  LOCALS.random_action),
                cond(
                  /*(*/ [n_EQ_Q(
                      GLOBALS.here,
                      LOCALS.rm),
                    mapf(
                      null,
                      /* FUNCTION */
                        (x: object) => {
                          cond(
                          /*(*/ [trnn(
                              LOCALS.x,
                              GLOBALS.echo_room_bit),
                            trz(
                              LOCALS.x,
                              GLOBALS.echo_room_bit),
                            tro(
                              LOCALS.x,
                              GLOBALS.ovison)] /*)*/)
                        },
                      robjs(
                        LOCALS.rm))] /*)*/),
                return(
                  t)] /*)*/,
              /*(*/ [printstring(
                  LOCALS.b,
                  LOCALS.outchan,
                  LOCALS.l),
                GLOBALS.tell_flag = t,
                crlf(
                  ),
                cond(
                  /*(*/ [_EQ_Q(
                      member(
                        "ECHO",
                        uppercase(
                          LOCALS.b)),
                      LOCALS.b),
                    tell(
                      "The acoustics of the room change subtly.",
                      1),
                    GLOBALS.echo_flag_X_flag = t,
                    mapf(
                      null,
                      /* FUNCTION */
                        (x: object) => {
                          cond(
                          /*(*/ [trnn(
                              LOCALS.x,
                              GLOBALS.echo_room_bit),
                            trz(
                              LOCALS.x,
                              GLOBALS.echo_room_bit),
                            tro(
                              LOCALS.x,
                              GLOBALS.ovison)] /*)*/)
                        },
                      robjs(
                        LOCALS.rm)),
                    return(
                      t)] /*)*/)] /*)*/))),
        prog(
          /*(*/ [] /*)*/,
          goto(
            find_room(
              "CHAS3")),
          GLOBALS.moves = _(
              GLOBALS.moves,
              1),
          mapf(
            null,
            /* FUNCTION */
              (x: object) => {
                cond(
                /*(*/ [trnn(
                    LOCALS.x,
                    GLOBALS.echo_room_bit),
                  trz(
                    LOCALS.x,
                    GLOBALS.echo_room_bit),
                  tro(
                    LOCALS.x,
                    GLOBALS.ovison)] /*)*/)
              },
            robjs(
              LOCALS.rm))))] /*)*/)
  }

FUNCTIONS.leaper = 
  ("AUX": unknown,
    /*(*/ [rm,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [exits,
      rexits(
        LOCALS.rm)] /*)*/: unknown,
    m: room) => {
    cond(
    /*(*/ [LOCALS.m = memq(
          down_X_words,
          LOCALS.exits),
      cond(
        /*(*/ [or(
            type_Q(
              2(
                LOCALS.m),
              nexit),
            and(
              type_Q(
                2(
                  LOCALS.m),
                cexit),
              not(
                cxflag(
                  2(
                    LOCALS.m))))),
          jigs_up(
            pick_one(
              GLOBALS.jumploss))] /*)*/)] /*)*/,
    /*(*/ [tell(
        pick_one(
          GLOBALS.wheeeee))] /*)*/)
  }

FUNCTIONS.skipper = 
  () => {
    tell(
    pick_one(
      GLOBALS.wheeeee))
  }

GLOBALS.hs = 0

gdecl(
  /*(*/ [hs] /*)*/,
  fix)

FUNCTIONS.hello = 
  ("AUX": unknown,
    /*(*/ [prsobj,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [amt,
      GLOBALS.hs = _(
          GLOBALS.hs,
          1)] /*)*/: unknown) => {
    cond(
    /*(*/ [LOCALS.prsobj,
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsobj,
            find_obj(
              "SAILO")),
          cond(
            /*(*/ [0_Q(
                mod(
                  LOCALS.amt,
                  20)),
              tell(
                "You seem to be repeating yourself.")] /*)*/,
            /*(*/ [0_Q(
                mod(
                  LOCALS.amt,
                  10)),
              tell(
                "I think that phrase is getting a bit worn out.")] /*)*/,
            /*(*/ [tell(
                "Nothing happens here.")] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.prsobj,
            find_obj(
              "AVIAT")),
          tell(
            "Here, nothing happens.")] /*)*/,
        /*(*/ [tell(
            "I think that only schizophrenics say 'Hello' to a",
            1,
            odesc2(
              LOCALS.prsobj),
            ".")] /*)*/)] /*)*/,
    /*(*/ [tell(
        pick_one(
          GLOBALS.hellos))] /*)*/)
  }

psetg(
  hellos,
  () => /*[*/ ["Hello.",
      "Good day.",
      "Nice weather we've been having lately",
      "How are you?",
      "Goodbye."] /*]*/)

psetg(
  wheeeee,
  () => /*[*/ ["Very good.  Now you can go to the second grade.",
      "Have you tried hopping around the dungeon, too?",
      "Are you enjoying yourself?",
      "Wheeeeeeeeee!!!!!",
      "Do you expect me to applaud?"] /*]*/)

psetg(
  jumploss,
  () => /*[*/ ["You should have looked before you leaped.",
      "I'm afraid that leap was a bit much for your weak frame.",
      "In the movies, your life would be passing in front of your eyes.",
      "Geronimo....."] /*]*/)

gdecl(
  /*(*/ [hellos,
    wheeeee,
    jumploss] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.reader = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [po,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [pi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [not(
        lit_Q(
          GLOBALS.here)),
      tell(
        "It is impossible to read in the dark.")] /*)*/,
    /*(*/ [and(
        LOCALS.pi,
        not(
          transparent_Q(
            LOCALS.pi))),
      tell(
        "How does one look through a",
        1,
        odesc2(
          LOCALS.pi),
        "?")] /*)*/,
    /*(*/ [not(
        readable_Q(
          LOCALS.po)),
      tell(
        "How can I read a",
        1,
        odesc2(
          LOCALS.po),
        "?")] /*)*/,
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [tell(
        oread(
          LOCALS.po))] /*)*/)
  }

FUNCTIONS.well = 
  () => {
    cond(
    /*(*/ [GLOBALS.riddle_flag_X_flag,
      tell(
        "Well what?")] /*)*/,
    /*(*/ [_EQ_Q(
        GLOBALS.here,
        find_room(
          "RIDDL")),
      GLOBALS.riddle_flag_X_flag = t,
      tell(
        "There is a clap of thunder and the east door opens.")] /*)*/,
    /*(*/ [tell(
        "Well what?")] /*)*/)
  }

FUNCTIONS.sinbad = 
  () => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          GLOBALS.here,
          find_room(
            "CYCLO")),
        memq(
          find_obj(
            "CYCLO"),
          robjs(
            GLOBALS.here))),
      GLOBALS.cyclops_flag_X_flag = t,
      tell(
        "The cyclops, hearing the name of his deadly nemesis, flees the room\nby knocking down the wall on the north of the room."),
      GLOBALS.magic_flag_X_flag = t,
      remove_object(
        find_obj(
          "CYCLO"))] /*)*/,
    /*(*/ [tell(
        "Wasn't he a sailor?")] /*)*/)
  }

FUNCTIONS.granite = 
  () => {
    tell(
    "I think you are taking this thing for granite.")
  }

psetg(
  dummy,
  () => /*[*/ ["Look around.",
      "You think it isn't?",
      "I think you've already done that."] /*]*/)

gdecl(
  /*(*/ [dummy] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.brush = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prso,
        find_obj(
          "TEETH")),
      cond(
        /*(*/ [and(
            _EQ_Q(
              LOCALS.prsi,
              find_obj(
                "PUTTY")),
            memq(
              LOCALS.prsi,
              aobjs(
                GLOBALS.winner))),
          jigs_up(
            "Well, you seem to have been brushing your teeth with some sort of\nglue. As a result, your mouth gets glued together (with your nose)\nand you die of respiratory failure.")] /*)*/,
        /*(*/ [not(
            LOCALS.prsi),
          tell(
            "Dental hygiene is highly recommended, but I'm not sure what you want\nto brush them with.")] /*)*/,
        /*(*/ [tell(
            "A nice idea, but with a",
            1,
            odesc2(
              LOCALS.prsi),
            "?")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "If you wish, but I can't understand why??")] /*)*/)
  }

FUNCTIONS.ring = 
  ("AUX": unknown,
    /*(*/ [prsobj,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsobj,
        find_obj(
          "BELL")),
      tell(
        "Ding, dong.")] /*)*/,
    /*(*/ [tell(
        "How, exactly, can I ring that?")] /*)*/)
  }

FUNCTIONS.eat = 
  ("AUX": unknown,
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [eat_Q,
      null] /*)*/: unknown,
    /*(*/ [drink_Q,
      null] /*)*/: unknown,
    /*(*/ [prsobj,
      2(
        LOCALS.prsvec)] /*)*/: unknown,
    nobj: or(
        object,
        false),
    /*(*/ [aobjs,
      aobjs(
        GLOBALS.winner)] /*)*/: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [and(
        LOCALS.eat_Q = edible_Q(
            LOCALS.prsobj),
        memq(
          LOCALS.prsobj,
          LOCALS.aobjs)),
      cond(
        /*(*/ [_EQ_Q(
            1(
              LOCALS.prsvec),
            GLOBALS.drink_X_words),
          tell(
            "How can I drink that?")] /*)*/,
        /*(*/ [tell(
            "Thank you very much.  It really hit the spot."),
          put(
            GLOBALS.winner,
            GLOBALS.aobjs,
            splice_out(
              LOCALS.prsobj,
              LOCALS.aobjs))] /*)*/)] /*)*/,
    /*(*/ [and(
        LOCALS.drink_Q = drinkable_Q(
            LOCALS.prsobj),
        LOCALS.nobj = ocan(
            LOCALS.prsobj),
        memq(
          LOCALS.nobj,
          LOCALS.aobjs)),
      cond(
        /*(*/ [oopen_Q(
            LOCALS.nobj),
          tell(
            "Thank you very much.  I was rather thirsty (from all this talking,\nprobably).")] /*)*/,
        /*(*/ [t,
          tell(
            "I'd like to, but I can't get to it.")] /*)*/),
      put(
        LOCALS.prsobj,
        GLOBALS.ocan,
        null),
      put(
        LOCALS.nobj,
        GLOBALS.ocontents,
        splice_out(
          LOCALS.prsobj,
          ocontents(
            LOCALS.nobj)))] /*)*/,
    /*(*/ [not(
        or(
          LOCALS.eat_Q,
          LOCALS.drink_Q)),
      tell(
        "I don't think that the",
        1,
        odesc2(
          LOCALS.prsobj),
        "would agree with you.")] /*)*/,
    /*(*/ [tell(
        "I think you should get that first.")] /*)*/)
  }

FUNCTIONS.jargon = 
  () => {
    tell(
    "Well, FOO, BAR, and BLETCH to you too!")
  }

FUNCTIONS.curses = 
  () => {
    tell(
    pick_one(
      GLOBALS.offended))
  }

psetg(
  offended,
  () => /*[*/ ["Such language in a high-class establishment like this!",
      "You ought to be ashamed of yourself.",
      "Its not so bad.  You could have been killed already.",
      "Tough shit, asshole.",
      "Oh, dear.  Such language from a supposed winning adventurer!"] /*]*/)

gdecl(
  /*(*/ [offended] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

"ROBBER"

define(
  robber,
  robber,
  /*(*/ [hack,
    "AUX",
    /*(*/ [rm,
      hroom(
        LOCALS.hack)] /*)*/,
    robj,
    /*(*/ [seen_Q,
      rseen_Q(
        LOCALS.rm)] /*)*/,
    /*(*/ [win,
      GLOBALS.winner] /*)*/,
    /*(*/ [wroom,
      GLOBALS.here] /*)*/,
    /*(*/ [hobj,
      hobj(
        LOCALS.hack)] /*)*/,
    /*(*/ [still,
      find_obj(
        "STILL")] /*)*/,
    here_Q,
    /*(*/ [hh,
      hobjs(
        LOCALS.hack)] /*)*/,
    /*(*/ [treas,
      find_room(
        "TREAS")] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [hack] /*)*/,
      hack,
      /*(*/ [rm,
        wroom] /*)*/,
      room,
      /*(*/ [robj,
        hh] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [seen_Q] /*)*/,
      or(
        atom,
        false),
      /*(*/ [win] /*)*/,
      adv,
      /*(*/ [hobj] /*)*/,
      object,
      /*(*/ [robber] /*)*/,
      activation,
      /*(*/ [here_Q] /*)*/,
      or(
        room,
        false),
      /*(*/ [still] /*)*/,
      object,
      /*(*/ [treas] /*)*/,
      room] /*)*/] /*2*/,
  prog(
    /*(*/ [/*(*/ [once,
        null] /*)*/,
      objt] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [once] /*)*/,
        or(
          atom,
          false),
        /*(*/ [objt] /*)*/,
        list(
          /*[*/ [rest,
            object] /*]*/)] /*)*/] /*2*/,
    cond(
      /*(*/ [LOCALS.here_Q = oroom(
            LOCALS.hobj),
        LOCALS.rm = LOCALS.here_Q] /*)*/),
    LOCALS.robj = robjs(
        LOCALS.rm),
    LOCALS.objt = LOCALS.hh,
    cond(
      /*(*/ [and(
          _EQ_Q(
            LOCALS.rm,
            LOCALS.treas),
          n_EQ_Q(
            LOCALS.rm,
            LOCALS.wroom)),
        cond(
          /*(*/ [LOCALS.here_Q,
            cond(
              /*(*/ [_EQ_Q(
                  oroom(
                    LOCALS.still),
                  LOCALS.treas),
                snarf_object(
                  LOCALS.hobj,
                  LOCALS.still)] /*)*/),
            remove_object(
              LOCALS.hobj),
            LOCALS.here_Q = null] /*)*/),
        mapf(
          null,
          /* FUNCTION */
            (x: object) => {
              cond(
              /*(*/ [g_Q(
                  otval(
                    LOCALS.x),
                  0),
                put(
                  LOCALS.hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = splice_out(
                      LOCALS.x,
                      LOCALS.hh)),
                insert_object(
                  LOCALS.x,
                  LOCALS.rm)] /*)*/)
            },
          LOCALS.hh)] /*)*/,
      /*(*/ [_EQ_Q(
          LOCALS.rm,
          LOCALS.wroom),
        // Adventurer is in room:  CHOMP, CHOMP,
        cond(
          /*(*/ [_EQ_Q(
              LOCALS.rm,
              LOCALS.treas)] /*)*/,
          // Don't move, Gertrude,
          /*(*/ [not(
              hflag(
                LOCALS.hack)),
            cond(
              /*(*/ [and(
                  not(
                    LOCALS.here_Q),
                  prob(
                    30)),
                cond(
                  /*(*/ [_EQ_Q(
                      ocan(
                        LOCALS.still),
                      LOCALS.hobj),
                    insert_object(
                      LOCALS.hobj,
                      LOCALS.rm),
                    tell(
                      "Someone carrying a large bag is casually leaning against one of the\nwalls here.  He does not speak, but it is clear from his aspect that\nthe bag will be taken only over his dead body."),
                    put(
                      LOCALS.hack,
                      GLOBALS.hflag,
                      t),
                    return(
                      t,
                      LOCALS.robber)] /*)*/)] /*)*/,
              /*(*/ [and(
                  LOCALS.here_Q,
                  fighting_Q(
                    LOCALS.hobj),
                  cond(
                    /*(*/ [not(
                        winning_Q(
                          LOCALS.hobj,
                          LOCALS.win)),
                      tell(
                        "Your opponent, determining discretion to be the better part of\nvalor, decides to terminate this little contretemps.  With a rueful\nnod of his head, he steps backward into the gloom and disappears."),
                      remove_object(
                        LOCALS.hobj),
                      trz(
                        LOCALS.hobj,
                        GLOBALS.fighting),
                      snarf_object(
                        LOCALS.hobj,
                        LOCALS.still),
                      return(
                        t,
                        LOCALS.robber)] /*)*/,
                    /*(*/ [prob(
                        90)] /*)*/))] /*)*/,
              /*(*/ [and(
                  LOCALS.here_Q,
                  prob(
                    30)),
                tell(
                  "The holder of the large bag just left, looking disgusted. \nFortunately, he took nothing."),
                remove_object(
                  LOCALS.hobj),
                snarf_object(
                  LOCALS.hobj,
                  LOCALS.still),
                return(
                  t,
                  LOCALS.robber)] /*)*/,
              /*(*/ [prob(
                  70),
                return(
                  t,
                  LOCALS.robber)] /*)*/,
              /*(*/ [t,
                cond(
                  /*(*/ [memq(
                      LOCALS.still,
                      hobjs(
                        LOCALS.hack)),
                    put(
                      LOCALS.hack,
                      GLOBALS.hobjs,
                      splice_out(
                        LOCALS.still,
                        hobjs(
                          LOCALS.hack))),
                    put(
                      LOCALS.hobj,
                      GLOBALS.ocontents,
                      /*(*/ [LOCALS.still] /*)*/),
                    put(
                      LOCALS.still,
                      GLOBALS.ocan,
                      LOCALS.hobj)] /*)*/),
                put(
                  LOCALS.hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = rob_room(
                      LOCALS.rm,
                      LOCALS.hh,
                      100)),
                put(
                  LOCALS.hack,
                  GLOBALS.hobjs,
                  LOCALS.hh = rob_adv(
                      LOCALS.win,
                      LOCALS.hh)),
                put(
                  LOCALS.hack,
                  GLOBALS.hflag,
                  t),
                cond(
                  /*(*/ [and(
                      n_EQ_Q(
                        LOCALS.objt,
                        LOCALS.hh),
                      not(
                        LOCALS.here_Q)),
                    tell(
                      "A seedy-looking individual with a large bag just wandered through\nthe room.  On the way through, he quietly abstracted all valuables\nfrom the room and from your possession, mumbling something about\n\"Doing unto others before..\")] /*)*/,
                  /*(*/ [LOCALS.here_Q,
                    snarf_object(
                      LOCALS.hobj,
                      LOCALS.still),
                    cond(
                      /*(*/ [n_EQ_Q(
                          LOCALS.objt,
                          LOCALS.hh),
                        tell(
                          "The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")] /*)*/,
                      /*(*/ [tell(
                          "The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")] /*)*/),
                    remove_object(
                      LOCALS.hobj),
                    LOCALS.here_Q = null] /*)*/,
                  /*(*/ [t,
                    tell(
                      "A 'lean and hungry' gentleman just wandered through.  Finding\nnothing of value, he left disgruntled.")] /*)*/)] /*)*/)] /*)*/,
          /*(*/ [t,
            cond(
              /*(*/ [LOCALS.here_Q,
                // Here, already announced.,
                cond(
                  /*(*/ [prob(
                      30),
                    put(
                      LOCALS.hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = rob_room(
                          LOCALS.rm,
                          LOCALS.hh,
                          100)),
                    put(
                      LOCALS.hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = rob_adv(
                          LOCALS.win,
                          LOCALS.hh)),
                    cond(
                      /*(*/ [memq(
                          find_obj(
                            "ROPE"),
                          LOCALS.hh),
                        GLOBALS.dome_flag_X_flag = null] /*)*/),
                    cond(
                      /*(*/ [_EQ_Q(
                          LOCALS.objt,
                          LOCALS.hh),
                        tell(
                          "The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")] /*)*/,
                      /*(*/ [t,
                        tell(
                          "The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")] /*)*/),
                    remove_object(
                      LOCALS.hobj),
                    LOCALS.here_Q = null,
                    snarf_object(
                      LOCALS.hobj,
                      LOCALS.still)] /*)*/,
                  /*(*/ [return(
                      t,
                      LOCALS.robber)] /*)*/)] /*)*/)] /*)*/)] /*)*/,
      /*(*/ [and(
          memq(
            LOCALS.hobj,
            robjs(
              LOCALS.rm)),
          // Leave if victim left,
          snarf_object(
            LOCALS.hobj,
            LOCALS.still),
          remove_object(
            LOCALS.hobj),
          LOCALS.here_Q = null)] /*)*/,
      /*(*/ [and(
          _EQ_Q(
            oroom(
              LOCALS.still),
            LOCALS.rm),
          snarf_object(
            LOCALS.hobj,
            LOCALS.still),
          null)] /*)*/,
      /*(*/ [LOCALS.seen_Q,
        // Hack the adventurer's belongings,
        put(
          LOCALS.hack,
          GLOBALS.hobjs,
          LOCALS.hh = rob_room(
              LOCALS.rm,
              LOCALS.hh,
              75)),
        cond(
          /*(*/ [and(
              _EQ_Q(
                rdesc2(
                  LOCALS.rm),
                GLOBALS.mazedesc),
              _EQ_Q(
                rdesc2(
                  LOCALS.wroom),
                GLOBALS.mazedesc)),
            mapf(
              null,
              /* FUNCTION */
                (x: object) => {
                  cond(
                  /*(*/ [and(
                      can_take_Q(
                        LOCALS.x),
                      ovis_Q(
                        LOCALS.x),
                      prob(
                        40)),
                    tell(
                      "You hear, off in the distance, someone saying \"My, I wonder what\nthis fine",
                      3,
                      odesc2(
                        LOCALS.x),
                      "is doing here.\"),
                    tell(
                      "",
                      1),
                    cond(
                      /*(*/ [prob(
                          60),
                        remove_object(
                          LOCALS.x),
                        put(
                          LOCALS.x,
                          GLOBALS.otouch_Q,
                          t),
                        put(
                          LOCALS.hack,
                          GLOBALS.hobjs,
                          LOCALS.hh = /*(*/ [LOCALS.x,
                              _X,
                              LOCALS.hh] /*)*/)] /*)*/),
                    mapleave(
                      )] /*)*/)
                },
              robjs(
                LOCALS.rm))] /*)*/,
          /*(*/ [mapf(
              null,
              /* FUNCTION */
                (x: object) => {
                  cond(
                  /*(*/ [and(
                      0_Q(
                        otval(
                          LOCALS.x)),
                      can_take_Q(
                        LOCALS.x),
                      ovis_Q(
                        LOCALS.x),
                      prob(
                        20)),
                    remove_object(
                      LOCALS.x),
                    put(
                      LOCALS.x,
                      GLOBALS.otouch_Q,
                      t),
                    put(
                      LOCALS.hack,
                      GLOBALS.hobjs,
                      LOCALS.hh = /*(*/ [LOCALS.x,
                          _X,
                          LOCALS.hh] /*)*/),
                    cond(
                      /*(*/ [_EQ_Q(
                          LOCALS.rm,
                          LOCALS.wroom),
                        tell(
                          "You suddenly notice that the",
                          1,
                          odesc2(
                            LOCALS.x),
                          "vanished.")] /*)*/),
                    mapleave(
                      )] /*)*/)
                },
              robjs(
                LOCALS.rm)),
            cond(
              /*(*/ [memq(
                  find_obj(
                    "ROPE"),
                  LOCALS.hh),
                GLOBALS.dome_flag_X_flag = null] /*)*/)] /*)*/)] /*)*/),
    cond(
      /*(*/ [LOCALS.once = not(
            LOCALS.once),
        // Move to next room, and hack.,
        prog(
          /*(*/ [/*(*/ [rooms,
              hrooms(
                LOCALS.hack)] /*)*/] /*)*/,
          LOCALS.rm = 1(
              LOCALS.rooms),
          cond(
            /*(*/ [empty_Q(
                LOCALS.rooms = rest(
                    LOCALS.rooms)),
              LOCALS.rooms = GLOBALS.rooms] /*)*/),
          cond(
            /*(*/ [rtrnn(
                LOCALS.rm,
                GLOBALS.rsacredbit),
              // Can I work here?,
              again(
                )] /*)*/),
          put(
            LOCALS.hack,
            GLOBALS.hroom,
            LOCALS.rm),
          put(
            LOCALS.hack,
            GLOBALS.hflag,
            null),
          put(
            LOCALS.hack,
            GLOBALS.hrooms,
            LOCALS.rooms),
          LOCALS.seen_Q = rseen_Q(
              LOCALS.rm)),
        again(
          )] /*)*/)),
  // Drop worthless cruft, sometimes,
  or(
    _EQ_Q(
      LOCALS.rm,
      LOCALS.treas),
    mapf(
      null,
      /* FUNCTION */
        (x: object) => {
          cond(
          /*(*/ [and(
              0_Q(
                otval(
                  LOCALS.x)),
              prob(
                30)),
            put(
              LOCALS.hack,
              GLOBALS.hobjs,
              LOCALS.hh = splice_out(
                  LOCALS.x,
                  LOCALS.hh)),
            insert_object(
              LOCALS.x,
              LOCALS.rm),
            and(
              _EQ_Q(
                LOCALS.rm,
                LOCALS.wroom),
              tell(
                "The robber, rummaging through his bag, dropped a few items he found\nvalueless."))] /*)*/)
        },
      LOCALS.hh)))

FUNCTIONS.snarf_object = 
  (who: object,
    what: object) => {
    cond(
    /*(*/ [and(
        n_EQ_Q(
          ocan(
            LOCALS.what),
          LOCALS.who),
        or(
          oroom(
            LOCALS.what),
          ocan(
            LOCALS.what))),
      remove_object(
        LOCALS.what),
      put(
        LOCALS.what,
        GLOBALS.ocan,
        LOCALS.who),
      put(
        LOCALS.who,
        GLOBALS.ocontents,
        /*(*/ [LOCALS.what,
          _X,
          ocontents(
            LOCALS.who)] /*)*/)] /*)*/,
    /*(*/ [LOCALS.who] /*)*/)
  }

FUNCTIONS.robber_function = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [dem,
      get_demon(
        "THIEF")] /*)*/: unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prsobj,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [here,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [flg,
      null] /*)*/: unknown,
    brick: object,
    fuse: object,
    st: object,
    f: object,
    /*(*/ [t,
      hobj(
        LOCALS.dem)] /*)*/: unknown,
    /*(*/ [chali,
      find_obj(
        "CHALI")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.fight_X_words),
      cond(
        /*(*/ [_EQ_Q(
            ocan(
              LOCALS.st = find_obj(
                  "STILL")),
            LOCALS.t),
          null] /*)*/,
        /*(*/ [_EQ_Q(
            oroom(
              LOCALS.st),
            LOCALS.here),
          snarf_object(
            LOCALS.t,
            LOCALS.st),
          tell(
            "The robber, somewhat surprised at this turn of events, nimbly\nretrieves his stilletto."),
          t] /*)*/,
        /*(*/ [else,
          tell(
            "Annoyed to be left unarmed in such an obviously dangerous\nneighborhood, the thief slips off into the shadows."),
          tro(
            LOCALS.chali,
            GLOBALS.takebit),
          remove_object(
            LOCALS.t)] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.dead__X_X_words),
      cond(
        /*(*/ [not(
            empty_Q(
              hobjs(
                LOCALS.dem))),
          tell(
            "His booty remains."),
          mapf(
            null,
            /* FUNCTION */
              (x: object) => {
                insert_object(
                LOCALS.x,
                LOCALS.here)
tro(
                LOCALS.x,
                GLOBALS.echo_room_bit)
              },
            hobjs(
              LOCALS.dem)),
          put(
            LOCALS.dem,
            GLOBALS.hobjs,
            /*(*/ [] /*)*/)] /*)*/),
      tro(
        LOCALS.chali,
        GLOBALS.takebit),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.here,
            find_room(
              "TREAS")),
          mapf(
            null,
            /* FUNCTION */
              (x: object) => {
                cond(
                /*(*/ [and(
                    n_EQ_Q(
                      LOCALS.x,
                      LOCALS.chali),
                    n_EQ_Q(
                      LOCALS.x,
                      LOCALS.t)),
                  cond(
                    /*(*/ [trnn(
                        LOCALS.x,
                        GLOBALS.echo_room_bit),
                      trz(
                        LOCALS.x,
                        GLOBALS.echo_room_bit)] /*)*/,
                    /*(*/ [tro(
                        LOCALS.x,
                        GLOBALS.ovison),
                      cond(
                        /*(*/ [not(
                            LOCALS.flg),
                          LOCALS.flg = t,
                          tell(
                            "As the thief dies, the power of his magic decreases, and his\ntreasures reappear:",
                            2)] /*)*/),
                      tell(
                        "A",
                        2,
                        odesc2(
                          LOCALS.x))] /*)*/)] /*)*/)
              },
            robjs(
              LOCALS.here))] /*)*/),
      put(
        LOCALS.dem,
        GLOBALS.haction,
        null)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.first_Q_X_words),
      prob(
        20)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.out__X_X_words),
      put(
        LOCALS.dem,
        GLOBALS.haction,
        null),
      trz(
        find_obj(
          "STILL"),
        GLOBALS.ovison),
      tro(
        LOCALS.chali,
        GLOBALS.takebit),
      put(
        LOCALS.t,
        GLOBALS.odesc1,
        GLOBALS.robber_u_desc)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.in__X_X_words),
      cond(
        /*(*/ [_EQ_Q(
            hroom(
              LOCALS.dem),
            LOCALS.here),
          tell(
            "The robber revives, briefly feigning continued unconsciousness, and\nwhen he sees his moment, scrambles away from you.")] /*)*/),
      cond(
        /*(*/ [type_Q(
            GLOBALS.robber,
            offset),
          put(
            LOCALS.dem,
            GLOBALS.haction,
            robber)] /*)*/,
        /*(*/ [put(
            LOCALS.dem,
            GLOBALS.haction,
            robber)] /*)*/),
      put(
        LOCALS.t,
        GLOBALS.odesc1,
        GLOBALS.robber_c_desc),
      cond(
        /*(*/ [and(
            _EQ_Q(
              LOCALS.here,
              find_room(
                "TREAS")),
            oroom(
              LOCALS.chali = LOCALS.chali)),
          trz(
            LOCALS.chali,
            GLOBALS.takebit)] /*)*/),
      tro(
        find_obj(
          "STILL"),
        GLOBALS.ovison)] /*)*/,
    /*(*/ [and(
        type_Q(
          LOCALS.prsobj,
          object),
        _EQ_Q(
          2(
            LOCALS.pv),
          GLOBALS.knife_X_objects),
        _EQ_Q(
          vname(
            LOCALS.prsact),
          throw_X_words),
        not(
          trnn(
            LOCALS.t,
            GLOBALS.fightbit))),
      cond(
        /*(*/ [prob(
            10),
          tell(
            "You evidently frightened the robber, though you didn't hit him.  He\nflees",
            1,
            cond(
              /*(*/ [empty_Q(
                  hobjs(
                    LOCALS.dem)),
                "."] /*)*/,
              /*(*/ [t,
                mapf(
                  null,
                  /* FUNCTION */
                    (x: object) => {
                      insert_object(
                      LOCALS.x,
                      LOCALS.here)
                    },
                  hobjs(
                    LOCALS.dem)),
                put(
                  LOCALS.dem,
                  GLOBALS.hobjs,
                  /*(*/ [] /*)*/),
                ", but the contents of his bag fall on the floor."] /*)*/)),
          remove_object(
            LOCALS.t)] /*)*/,
        /*(*/ [t,
          tell(
            "You missed.  The thief makes no attempt to take the knife, though it\nwould be a fine addition to the collection in his bag.  He does seem\nangered by your attempt."),
          tro(
            LOCALS.t,
            GLOBALS.fightbit)] /*)*/)] /*)*/,
    /*(*/ [and(
        or(
          _EQ_Q(
            LOCALS.prsact,
            GLOBALS.throw_X_words),
          _EQ_Q(
            LOCALS.prsact,
            GLOBALS.give_X_words)),
        type_Q(
          LOCALS.prsobj,
          object),
        n_EQ_Q(
          LOCALS.prsobj,
          hobj(
            LOCALS.dem))),
      cond(
        /*(*/ [l_Q(
            ocapac(
              LOCALS.t),
            0),
          put(
            LOCALS.t,
            GLOBALS.ocapac,
            _(
              ocapac(
                LOCALS.t))),
          put(
            LOCALS.dem,
            GLOBALS.haction,
            cond(
              /*(*/ [type_Q(
                  GLOBALS.robber,
                  offset),
                GLOBALS.robber] /*)*/,
              /*(*/ [robber] /*)*/)),
          tro(
            find_obj(
              "STILL"),
            GLOBALS.ovison),
          put(
            LOCALS.t,
            GLOBALS.odesc1,
            GLOBALS.robber_c_desc),
          tell(
            "Your proposed victim suddenly recovers consciousness.")] /*)*/),
      cond(
        /*(*/ [and(
            _EQ_Q(
              LOCALS.prsobj,
              LOCALS.brick = find_obj(
                  "BRICK")),
            _EQ_Q(
              ocan(
                LOCALS.fuse = find_obj(
                    "FUSE")),
              LOCALS.brick),
            orand(
              LOCALS.fuse),
            not(
              0_Q(
                ctick(
                  2(
                    LOCALS.f = orand(
                        LOCALS.fuse)))))),
          // I.e., he's trying to give us the brick with a lighted fuse.,
          tell(
            "The thief seems rather offended by your offer.  Do you think he's as\nstupid as you are?")] /*)*/,
        /*(*/ [remove_object(
            LOCALS.prsobj),
          put(
            LOCALS.dem,
            GLOBALS.hobjs,
            /*(*/ [LOCALS.prsobj,
              _X,
              hobjs(
                LOCALS.dem)] /*)*/),
          tell(
            "The thief places the",
            1,
            odesc2(
              LOCALS.prsobj),
            "in his bag and thanks\nyou politely.")] /*)*/)] /*)*/,
    /*(*/ [and(
        LOCALS.prsact,
        _EQ_Q(
          vname(
            LOCALS.prsact),
          take_X_words)),
      tell(
        "Once you got him, what would you do with him?")] /*)*/)
  }

FUNCTIONS.chalice = 
  ("AUX": unknown,
    /*(*/ [prsa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [ch,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    tr: room,
    t: room) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.take_X_words),
      cond(
        /*(*/ [and(
            not(
              ocan(
                LOCALS.ch)),
            _EQ_Q(
              oroom(
                LOCALS.ch),
              LOCALS.tr = find_room(
                  "TREAS")),
            _EQ_Q(
              oroom(
                LOCALS.t = find_obj(
                    "THIEF")),
              LOCALS.tr),
            fighting_Q(
              LOCALS.t),
            haction(
              GLOBALS.robber_demon)),
          tell(
            "Realizing just in time that you'd be stabbed in the back if you\nattempted to take the chalice, you return to the fray.")] /*)*/)] /*)*/)
  }

FUNCTIONS.burner = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [flaming_Q(
        LOCALS.prsi),
      cond(
        /*(*/ [object_action(
            )] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              avehicle(
                GLOBALS.winner),
              find_obj(
                "BALLO")),
            balloon(
              ))] /*)*/,
        /*(*/ [and(
            burnable_Q(
              LOCALS.prso),
            cond(
              /*(*/ [memq(
                  LOCALS.prso,
                  aobjs(
                    GLOBALS.winner)),
                tell(
                  "The",
                  1,
                  odesc2(
                    LOCALS.prso),
                  "catches fire."),
                jigs_up(
                  "Unfortunately, you were holding it at the time.")] /*)*/,
              /*(*/ [hackable_Q(
                  LOCALS.prso,
                  GLOBALS.here),
                tell(
                  "The",
                  1,
                  odesc2(
                    LOCALS.prso),
                  "catches fire and is consumed."),
                remove_object(
                  LOCALS.prso)] /*)*/,
              /*(*/ [tell(
                  "You don't have that.")] /*)*/))] /*)*/,
        /*(*/ [tell(
            "I don't think you can burn a",
            1,
            odesc2(
              LOCALS.prso),
            ".")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "With a",
        1,
        odesc2(
          LOCALS.prsi),
        "??!?")] /*)*/)
  }

FUNCTIONS.turner = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [trnn(
        LOCALS.prso,
        GLOBALS.turnbit),
      cond(
        /*(*/ [trnn(
            LOCALS.prsi,
            GLOBALS.toolbit),
          object_action(
            )] /*)*/,
        /*(*/ [tell(
            "You certainly can't turn it with a",
            1,
            odesc2(
              LOCALS.prsi),
            ".")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "You can't turn that!")] /*)*/)
  }

psetg(
  doormungs,
  () => /*[*/ ["The door is invulnerable.",
      "You cannot damage this door.",
      "The door is still under warranty."] /*]*/)

gdecl(
  /*(*/ [doormungs] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.ddoor_function = 
  ("AUX": unknown,
    /*(*/ [pa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.open_X_words),
      tell(
        "The door cannot be opened.")] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.burn_X_words),
      tell(
        "You cannot burn this door.")] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.mung_X_words),
      tell(
        pick_one(
          GLOBALS.doormungs))] /*)*/)
  }

FUNCTIONS.inflater = 
  ("AUX": unknown,
    /*(*/ [prsi,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prso,
      3(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsi,
        find_obj(
          "IBOAT")),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prso,
            find_obj(
              "PUMP")),
          object_action(
            )] /*)*/,
        /*(*/ [tell(
            "You would inflate it with that?")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsi,
        find_obj(
          "RBOAT")),
      tell(
        "Inflating it further would probably burst it.")] /*)*/,
    /*(*/ [tell(
        "How can you inflate that?")] /*)*/)
  }

FUNCTIONS.deflater = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prso,
        find_obj(
          "RBOAT")),
      object_action(
        )] /*)*/,
    /*(*/ [tell(
        "Come on, now!")] /*)*/)
  }

FUNCTIONS.locker = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prso,
        find_obj(
          "GRAT2")),
      GLOBALS.grunlock_X_flag = null,
      tell(
        "The grate is locked."),
      mapf(
        null,
        /* FUNCTION */
          (x: or(
                cexit,
                nexit,
                room)) => {
            cond(
            /*(*/ [and(
                type_Q(
                  LOCALS.x,
                  cexit),
                _EQ_Q(
                  cxflag(
                    LOCALS.x),
                  key_flag_X_flag)),
              put(
                LOCALS.x,
                GLOBALS.cxstr,
                "The grate is locked."),
              mapleave(
                )] /*)*/)
          },
        rexits(
          GLOBALS.here))] /*)*/,
    /*(*/ [tell(
        "It doesn't seem to work.")] /*)*/)
  }

FUNCTIONS.unlocker = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [r,
      find_room(
        "MGRAT")] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prso,
        find_obj(
          "GRAT2")),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.prsi,
            find_obj(
              "KEYS")),
          GLOBALS.grunlock_X_flag = t,
          tell(
            "The grate is unlocked."),
          mapf(
            null,
            /* FUNCTION */
              (x: or(
                    cexit,
                    nexit,
                    room)) => {
                cond(
                /*(*/ [and(
                    type_Q(
                      LOCALS.x,
                      cexit),
                    _EQ_Q(
                      cxflag(
                        LOCALS.x),
                      key_flag_X_flag)),
                  put(
                    LOCALS.x,
                    GLOBALS.cxstr,
                    "The grate is closed."),
                  mapleave(
                    )] /*)*/)
              },
            rexits(
              LOCALS.r))] /*)*/,
        /*(*/ [tell(
            "Can you unlock a grating with a",
            1,
            odesc2(
              LOCALS.prsi),
            "?")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "It doesn't seem to work.")] /*)*/)
  }

FUNCTIONS.killer = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [not(
        LOCALS.prso),
      tell(
        "There is nothing here to kill.")] /*)*/,
    /*(*/ [not(
        LOCALS.prsi),
      tell(
        "Trying to kill a",
        1,
        odesc2(
          LOCALS.prso),
        "with your bare hands is suicidal.")] /*)*/,
    /*(*/ [not(
        trnn(
          LOCALS.prsi,
          GLOBALS.weaponbit)),
      tell(
        "Trying to kill a",
        0,
        odesc2(
          LOCALS.prso),
        "with a"),
      tell(
        odesc2(
          LOCALS.prsi),
        1,
        "is suicidal.")] /*)*/,
    /*(*/ [else,
      blow(
        GLOBALS.player,
        LOCALS.prso,
        orand(
          LOCALS.prsi),
        t,
        null)] /*)*/)
  }

FUNCTIONS.attacker = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [not(
        LOCALS.prso),
      tell(
        "There is nothing here to attack.")] /*)*/,
    /*(*/ [not(
        LOCALS.prsi),
      tell(
        "Attacking a",
        1,
        odesc2(
          LOCALS.prso),
        "with your bare hands is suicidal.")] /*)*/,
    /*(*/ [not(
        trnn(
          LOCALS.prsi,
          GLOBALS.weaponbit)),
      tell(
        "Attacking a",
        0,
        odesc2(
          LOCALS.prso),
        "with a"),
      tell(
        odesc2(
          LOCALS.prsi),
        1,
        "is suicidal.")] /*)*/,
    /*(*/ [else,
      blow(
        GLOBALS.player,
        LOCALS.prso,
        orand(
          LOCALS.prsi),
        t,
        null)] /*)*/)
  }

FUNCTIONS.swinger = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [prsi,
      3(
        LOCALS.pv)] /*)*/: unknown) => {
    put(
    LOCALS.pv,
    2,
    LOCALS.prsi)
put(
    LOCALS.pv,
    3,
    LOCALS.prso)
attacker(
    )
  }

FUNCTIONS.hack_hack = 
  (obj: object,
    str: string,
    /*(*/ [obj2,
      null] /*)*/?: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [LOCALS.obj2,
      tell(
        LOCALS.str,
        0,
        odesc2(
          LOCALS.obj),
        "with a"),
      tell(
        LOCALS.obj2,
        1,
        pick_one(
          GLOBALS.ho_hum))] /*)*/,
    /*(*/ [else,
      tell(
        LOCALS.str,
        1,
        odesc2(
          LOCALS.obj),
        pick_one(
          GLOBALS.ho_hum))] /*)*/)
  }

psetg(
  ho_hum,
  () => /*[*/ ["does not seem to do anything.",
      "is not notably useful.",
      "isn't very interesting.",
      "doesn't appear worthwhile.",
      "has no effect.",
      "doesn't do anything."] /*]*/)

gdecl(
  /*(*/ [ho_hum] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

FUNCTIONS.munger = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prsw,
      3(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [trnn(
        LOCALS.prso,
        GLOBALS.villain),
      cond(
        /*(*/ [LOCALS.prsw,
          cond(
            /*(*/ [trnn(
                LOCALS.prsw,
                GLOBALS.weaponbit),
              blow(
                GLOBALS.player,
                LOCALS.prso,
                orand(
                  LOCALS.prsw),
                t,
                null)] /*)*/,
            /*(*/ [t,
              tell(
                "Munging a",
                0,
                odesc2(
                  LOCALS.prso),
                "with a"),
              tell(
                odesc2(
                  LOCALS.prsw),
                1,
                "is quite self-destructive.")] /*)*/)] /*)*/,
        /*(*/ [t,
          tell(
            "Munging a",
            1,
            odesc2(
              LOCALS.prso),
            "with your bare hands is suicidal.")] /*)*/)] /*)*/,
    /*(*/ [hack_hack(
        LOCALS.prso,
        "Munging a")] /*)*/)
  }

FUNCTIONS.kicker = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    hack_hack(
    LOCALS.prso,
    "Munging a")
  }

FUNCTIONS.waver = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    hack_hack(
    LOCALS.prso,
    "Waving a")
  }

FUNCTIONS.r_l = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    hack_hack(
    LOCALS.prso,
    "Playing in this way with a")
  }

FUNCTIONS.rubber = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    hack_hack(
    LOCALS.prso,
    "Fiddling with a")
  }

FUNCTIONS.exorcise = 
  () => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [t] /*)*/)
  }

FUNCTIONS.plugger = 
  () => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [tell(
        "This has no effect.")] /*)*/)
  }

FUNCTIONS.untie = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [trnn(
        LOCALS.prso,
        GLOBALS.tiebit),
      tell(
        "I don't think so.")] /*)*/,
    /*(*/ [tell(
        "This cannot be tied, so it cannot be untied!")] /*)*/)
  }

FUNCTIONS.pusher = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [memq(
        butto_X_objects,
        onames(
          LOCALS.prso))] /*)*/,
    /*(*/ [hack_hack(
        LOCALS.prso,
        "Pushing the")] /*)*/)
  }

FUNCTIONS.tie = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [trnn(
        LOCALS.prso,
        GLOBALS.tiebit),
      cond(
        /*(*/ [object_action(
            )] /*)*/,
        /*(*/ [tell(
            "You can't tie it to that.")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "How can you tie that to anything.")] /*)*/)
  }

FUNCTIONS.melter = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [tell(
        "I'm not sure that a",
        1,
        odesc2(
          LOCALS.prso),
        "can be melted.")] /*)*/)
  }

GLOBALS.on_pole_X_flag = null

FUNCTIONS.body_function = 
  ("AUX": unknown,
    /*(*/ [prsa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.take_X_words),
      tell(
        "A force keeps you from taking the bodies.")] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.mung_X_words),
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.burn_X_words)),
      cond(
        /*(*/ [GLOBALS.on_pole_X_flag] /*)*/,
        /*(*/ [GLOBALS.on_pole_X_flag = t,
          insert_object(
            find_obj(
              "HPOLE"),
            find_room(
              "LLD2"))] /*)*/),
      jigs_up(
        "The voice of the guardian of the dungeon booms out from the darkness \n'Your disrespect costs you your life!' and places your head on a pole.")] /*)*/)
  }

FUNCTIONS.mumbler = 
  () => {
    tell(
    "You'll have to speak up if you expect me to hear you!")
  }

FUNCTIONS.alarm = 
  ("AUX": unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [trnn(
        LOCALS.prso,
        GLOBALS.sleepbit),
      object_action(
        )] /*)*/,
    /*(*/ [tell(
        "The",
        1,
        odesc2(
          LOCALS.prso),
        "isn't sleeping.")] /*)*/)
  }

FUNCTIONS.zork = 
  () => {
    tell(
    "That word is replaced henceforth with DUNGEON.")
  }

FUNCTIONS.dungeon = 
  () => {
    tell(
    "At your service!")
  }

FUNCTIONS.painting = 
  ("AUX": unknown,
    /*(*/ [prsa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [art,
      2(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.mung_X_words),
      put(
        LOCALS.art,
        GLOBALS.otval,
        0),
      put(
        LOCALS.art,
        GLOBALS.odesc2,
        "worthless piece of canvas"),
      put(
        LOCALS.art,
        GLOBALS.odesc1,
        "There is a worthless piece of canvas here."),
      tell(
        "Congratulations!  Unlike the other vandals, who merely stole the\nartist's masterpieces, you have destroyed one.")] /*)*/)
  }

psetg(
  dimmer,
  "The lamp appears to be getting dimmer.")

psetg(
  lamp_ticks,
  /*[*/ [50,
    30,
    20,
    10,
    4,
    0] /*]*/)

psetg(
  lamp_tells,
  /*[*/ [GLOBALS.dimmer,
    GLOBALS.dimmer,
    GLOBALS.dimmer,
    GLOBALS.dimmer,
    "The lamp is dying."] /*]*/)

FUNCTIONS.lantern = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [verb,
      1(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [here,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [rlamp,
      find_obj(
        "LAMP")] /*)*/: unknown,
    foo: vector(
        any,
        cevent)) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.throw_X_words),
      tell(
        "The lamp has smashed into the floor and the light has gone out."),
      remove_object(
        find_obj(
          "LAMP")),
      insert_object(
        find_obj(
          "BLAMP"),
        LOCALS.here)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.c_int_X_words),
      light_int(
        LOCALS.rlamp,
        GLOBALS.lntin,
        GLOBALS.lamp_ticks,
        GLOBALS.lamp_tells)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.turn_on_X_words),
      clock_enable(
        2(
          LOCALS.foo = orand(
              LOCALS.rlamp))),
      null] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.verb,
        GLOBALS.turn_off_X_words),
      clock_disable(
        2(
          LOCALS.foo = orand(
              LOCALS.rlamp))),
      null] /*)*/)
  }

FUNCTIONS.sword_glow = 
  (dem: hack,
    "AUX": unknown,
    /*(*/ [sw,
      hobj(
        LOCALS.dem)] /*)*/: unknown,
    /*(*/ [g,
      otval(
        LOCALS.sw)] /*)*/: unknown,
    /*(*/ [here,
      GLOBALS.here] /*)*/: unknown,
    /*(*/ [ng,
      0] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        not(
          oroom(
            LOCALS.sw)),
        not(
          ocan(
            LOCALS.sw)),
        memq(
          LOCALS.sw,
          aobjs(
            GLOBALS.player))),
      cond(
        /*(*/ [infested_Q(
            LOCALS.here),
          LOCALS.ng = 2] /*)*/,
        /*(*/ [mapf(
            null,
            /* FUNCTION */
              (e: or(
                    room,
                    cexit,
                    nexit,
                    atom)) => {
                cond(
                /*(*/ [type_Q(
                    LOCALS.e,
                    room),
                  and(
                    infested_Q(
                      LOCALS.e),
                    mapleave(
                      t))] /*)*/,
                /*(*/ [type_Q(
                    LOCALS.e,
                    cexit),
                  and(
                    infested_Q(
                      2(
                        LOCALS.e)),
                    mapleave(
                      t))] /*)*/)
              },
            rexits(
              LOCALS.here)),
          LOCALS.ng = 1] /*)*/),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.ng,
            LOCALS.g)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.ng,
            2),
          tell(
            "Your sword has begun to glow very brightly.")] /*)*/,
        /*(*/ [1_Q(
            LOCALS.ng),
          tell(
            "Your sword is glowing with a faint blue glow.")] /*)*/,
        /*(*/ [0_Q(
            LOCALS.ng),
          tell(
            "Your sword is no longer glowing.")] /*)*/),
      put(
        LOCALS.sw,
        GLOBALS.otval,
        LOCALS.ng)] /*)*/,
    /*(*/ [put(
        LOCALS.dem,
        GLOBALS.haction,
        null)] /*)*/)
  }

FUNCTIONS.sword = 
  ("AUX": unknown,
    /*(*/ [pa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          LOCALS.pa,
          GLOBALS.take_X_words),
        _EQ_Q(
          GLOBALS.winner,
          GLOBALS.player)),
      put(
        GLOBALS.sword_demon,
        GLOBALS.haction,
        cond(
          /*(*/ [type_Q(
              GLOBALS.sword_glow,
              offset),
            GLOBALS.sword_glow] /*)*/,
          /*(*/ [sword_glow] /*)*/)),
      null] /*)*/)
  }

FUNCTIONS.infested_Q = 
  (r: room,
    "AUX": unknown,
    /*(*/ [villains,
      GLOBALS.villains] /*)*/: unknown,
    /*(*/ [dem,
      get_demon(
        "THIEF")] /*)*/: unknown) => {
    or(
    and(
      _EQ_Q(
        LOCALS.r,
        hroom(
          LOCALS.dem)),
      haction(
        LOCALS.dem)),
    mapf(
      null,
      /* FUNCTION */
        (v: object) => {
          cond(
          /*(*/ [_EQ_Q(
              LOCALS.r,
              oroom(
                LOCALS.v)),
            mapleave(
              t)] /*)*/)
        },
      LOCALS.villains))
  }

psetg(
  cdimmer,
  "The candles grow shorter.")

psetg(
  candle_ticks,
  /*[*/ [20,
    10,
    5,
    0] /*]*/)

psetg(
  candle_tells,
  /*[*/ [GLOBALS.cdimmer,
    GLOBALS.cdimmer,
    "The candles are very short."] /*]*/)

FUNCTIONS.match_function = 
  ("AUX": unknown,
    /*(*/ [prsa,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [prso,
      2(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [match,
      find_obj(
        "MATCH")] /*)*/: unknown,
    /*(*/ [mc,
      orand(
        LOCALS.match)] /*)*/: unknown) => {
    cond(
    /*(*/ [and(
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.light_X_words),
        _EQ_Q(
          LOCALS.prso,
          LOCALS.match)),
      cond(
        /*(*/ [and(
            put(
              LOCALS.match,
              GLOBALS.orand,
              LOCALS.mc = _(
                  LOCALS.mc,
                  1)),
            l__Q(
              LOCALS.mc,
              0)),
          tell(
            "I'm afraid that you have run out of matches.")] /*)*/,
        /*(*/ [tro(
            LOCALS.match,
            GLOBALS.flamebit),
          put(
            LOCALS.match,
            GLOBALS.olight_Q,
            1),
          clock_int(
            GLOBALS.matin,
            2),
          tell(
            "One of the matches starts to burn.")] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          LOCALS.prsa,
          GLOBALS.turn_off_X_words),
        1_Q(
          olight_Q(
            LOCALS.match))),
      tell(
        "The match is out."),
      trz(
        LOCALS.match,
        GLOBALS.flamebit),
      put(
        LOCALS.match,
        GLOBALS.olight_Q,
        0),
      clock_int(
        GLOBALS.matin,
        0),
      t] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsa,
        GLOBALS.c_int_X_words),
      tell(
        "The match has gone out."),
      trz(
        LOCALS.match,
        GLOBALS.flamebit),
      put(
        LOCALS.match,
        GLOBALS.olight_Q,
        0)] /*)*/)
  }

FUNCTIONS.candles = 
  ("AUX": unknown,
    /*(*/ [prsact,
      1(
        GLOBALS.prsvec)] /*)*/: unknown,
    /*(*/ [c,
      find_obj(
        "CANDL")] /*)*/: unknown,
    /*(*/ [winner,
      GLOBALS.winner] /*)*/: unknown,
    /*(*/ [ao,
      aobjs(
        LOCALS.winner)] /*)*/: unknown,
    /*(*/ [w,
      3(
        GLOBALS.prsvec)] /*)*/: unknown,
    match: object,
    foo: vector(
        fix,
        cevent),
    orphans: vector(
        /*[*/ [4,
          any] /*]*/)) => {
    or(
    orand(
      LOCALS.c),
    put(
      LOCALS.c,
      GLOBALS.orand,
      /*[*/ [0,
        clock_int(
          GLOBALS.cndin,
          50)] /*]*/))
LOCALS.foo = orand(
      LOCALS.c)
cond(
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.light_X_words),
      cond(
        /*(*/ [0_Q(
            olight_Q(
              LOCALS.c)),
          tell(
            "Alas, there's not much left of the candles.  Certainly not enough to\nburn.")] /*)*/,
        /*(*/ [not(
            LOCALS.w),
          tell(
            "With what?"),
          put(
            LOCALS.orphans = GLOBALS.orphans,
            GLOBALS.oflag,
            t),
          put(
            LOCALS.orphans,
            GLOBALS.overb,
            LOCALS.prsact),
          put(
            LOCALS.orphans,
            GLOBALS.oslot1,
            LOCALS.c),
          put(
            LOCALS.orphans,
            GLOBALS.oprep,
            chtype(
              with_X_words,
              prep)),
          GLOBALS.parse_won = null,
          t] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              LOCALS.w,
              LOCALS.match = find_obj(
                  "MATCH")),
            1_Q(
              olight_Q(
                LOCALS.match))),
          cond(
            /*(*/ [1_Q(
                olight_Q(
                  LOCALS.c)),
              tell(
                "The candles are already lighted.")] /*)*/,
            /*(*/ [put(
                LOCALS.c,
                GLOBALS.olight_Q,
                1),
              tell(
                "The candles are lighted."),
              clock_enable(
                2(
                  LOCALS.foo))] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            LOCALS.w,
            find_obj(
              "TORCH")),
          cond(
            /*(*/ [1_Q(
                olight_Q(
                  LOCALS.c)),
              tell(
                "You realize, just in time, that the candles are already lighted.")] /*)*/,
            /*(*/ [tell(
                "The heat from the torch is so intense that the candles are vaporised."),
              cond(
                /*(*/ [or(
                    oroom(
                      LOCALS.c),
                    ocan(
                      LOCALS.c)),
                  remove_object(
                    LOCALS.c)] /*)*/,
                /*(*/ [put(
                    LOCALS.winner,
                    GLOBALS.aobjs,
                    splice_out(
                      LOCALS.c,
                      LOCALS.ao))] /*)*/)] /*)*/)] /*)*/,
        /*(*/ [tell(
            "You have to light them with something that's burning, you know.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.turn_off_X_words),
      clock_disable(
        2(
          LOCALS.foo)),
      cond(
        /*(*/ [1_Q(
            olight_Q(
              LOCALS.c)),
          tell(
            "The flame is extinguished."),
          put(
            LOCALS.c,
            GLOBALS.olight_Q,
            _1)] /*)*/,
        /*(*/ [tell(
            "The candles are not lighted.")] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.prsact,
        GLOBALS.c_int_X_words),
      light_int(
        LOCALS.c,
        GLOBALS.cndin,
        GLOBALS.candle_ticks,
        GLOBALS.candle_tells)] /*)*/)
  }

FUNCTIONS.black_book = 
  ("AUX": unknown,
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/: unknown,
    /*(*/ [v,
      1(
        LOCALS.pv)] /*)*/: unknown,
    /*(*/ [b,
      2(
        LOCALS.pv)] /*)*/: unknown) => {
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.v,
        GLOBALS.burn_X_words),
      cond(
        /*(*/ [oroom(
            LOCALS.b),
          remove_object(
            LOCALS.b)] /*)*/,
        /*(*/ [drop_object(
            LOCALS.b)] /*)*/),
      jigs_up(
        "A booming voice says 'Wrong, cretin!' and you notice that you have\nturned into a pile of dust.")] /*)*/)
  }

FUNCTIONS.light_int = 
  (obj: object,
    cev: unknown,
    tick: vector(
        /*[*/ [rest,
          fix] /*]*/),
    tell: vector(
        /*[*/ [rest,
          string] /*]*/),
    "AUX": unknown,
    cnt: fix,
    tim: fix,
    /*(*/ [foo,
      orand(
        LOCALS.obj)] /*)*/: unknown) => {
    put(
    LOCALS.foo,
    1,
    LOCALS.cnt = _(
        1(
          LOCALS.foo),
        1))
clock_int(
    LOCALS.cev,
    LOCALS.tim = nth(
        LOCALS.tick,
        LOCALS.cnt))
cond(
    /*(*/ [0_Q(
        LOCALS.tim),
      cond(
        /*(*/ [or(
            not(
              oroom(
                LOCALS.obj)),
            _EQ_Q(
              oroom(
                LOCALS.obj),
              GLOBALS.here)),
          tell(
            "I hope you have more light than from a",
            1,
            odesc2(
              LOCALS.obj),
            ".")] /*)*/),
      put(
        LOCALS.obj,
        GLOBALS.olight_Q,
        0)] /*)*/,
    /*(*/ [or(
        not(
          oroom(
            LOCALS.obj)),
        _EQ_Q(
          oroom(
            LOCALS.obj),
          GLOBALS.here)),
      tell(
        nth(
          LOCALS.tell,
          LOCALS.cnt))] /*)*/)
  }

FUNCTIONS.hackable_Q = 
  (obj: object,
    rm: room,
    "AUX": unknown,
    /*(*/ [av,
      avehicle(
        GLOBALS.winner)] /*)*/: unknown) => {
    cond(
    /*(*/ [LOCALS.av,
      search_list(
        oid(
          LOCALS.obj),
        ocontents(
          LOCALS.av),
        null)] /*)*/,
    /*(*/ [search_list(
        oid(
          LOCALS.obj),
        robjs(
          LOCALS.rm),
        null)] /*)*/)
  }