define(
  coke_bottles,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (bottl
      2(
        _pv))
    (vb
      1(
        _pv))),
  #decl
    ((pv)
      vector(
        verb)
      (vb)
      verb
      (bottl)
      object),
  cond(
    (or(
        _EQ_Q(
          _vb,
          GLOBALS.throw_X_words),
        _EQ_Q(
          vname(
            _vb),
          mung_X_words))
      tell(
        "Congratulations!  You've managed to break all those bottles.\nFortunately for your feet, they were made of magic glass and disappear\nimmediately.")
      trz(
        _bottl,
        GLOBALS.ovison)
      put(
        _bottl,
        GLOBALS.osize,
        0)
      t)))

define(
  head_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (vb
      1(
        _pv))
    (nl
      ())
    (lcase
      find_obj(
        "LCASE"))),
  #decl
    ((pv)
      vector(
        verb)
      (vb)
      verb
      (nl)
      list(
        [rest
          object])
      (lcase)
      object),
  cond(
    (n_EQ_Q(
        _vb,
        GLOBALS.read_X_words)
      tell(
        "Although the implementers are dead, they foresaw that some cretin\nwould tamper with their remains.  Therefore, they took steps to\nprevent this.")
      set(
        nl,
        rob_adv(
          GLOBALS.winner,
          _nl))
      set(
        nl,
        rob_room(
          GLOBALS.here,
          _nl,
          100))
      cond(
        (not(
            empty_Q(
              _nl))
          or(
            oroom(
              _lcase),
            insert_object(
              _lcase,
              find_room(
                "LROOM")))
          put(
            _lcase,
            GLOBALS.ocontents,
            (_X
              ocontents(
                _lcase)
              _X_nl))))
      jigs_up(
        "Unfortunately, we've run out of poles.  Therefore, in punishment for\nyour most grievous sin, we shall deprive you of all your valuables,\nand of your life.")
      t)))

GLOBALS.then = 0

GLOBALS.bucket_top_X_flag = null

define(
  bucket,
  ("OPTIONAL"
    (arg
      null)
    "AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (po
      2(
        _pv))
    (w
      find_obj(
        "WATER"))
    (buck
      find_obj(
        "BUCKE"))),
  #decl
    ((arg)
      or(
        false,
        atom)
      (pv)
      vector
      (pa)
      verb
      (po)
      or(
        direction,
        false,
        object)
      (w
        buck)
      object),
  cond(
    (_EQ_Q(
        _arg,
        read_in)
      null),
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.c_int_X_words),
        cond(
          (memq(
              _w,
              ocontents(
                _buck))
            remove_object(
              _w)
            null),
          (t)))),
    (_EQ_Q(
        _arg,
        read_out)
      cond(
        (and(
            _EQ_Q(
              ocan(
                _w),
              _buck),
            not(
              GLOBALS.bucket_top_X_flag))
          tell(
            "The bucket rises and comes to a stop.")
          GLOBALS.bucket_top_X_flag = t
          pass_the_bucket(
            find_room(
              "TWELL"),
            _pv,
            _buck)
          clock_int(
            GLOBALS.bckin,
            100)
          null),
        (and(
            GLOBALS.bucket_top_X_flag,
            n_EQ_Q(
              ocan(
                _w),
              _buck))
          tell(
            "The bucket descends and comes to a stop.")
          GLOBALS.bucket_top_X_flag = null
          pass_the_bucket(
            find_room(
              "BWELL"),
            _pv,
            _buck))))))

define(
  pass_the_bucket,
  (r
    pv
    b
    "AUX"
    (pvs
      2(
        _pv))),
  #decl
    ((r)
      room
      (b)
      object
      (pv)
      vector
      (pvs)
      or(
        false,
        object,
        direction)),
  put(
    _pv,
    2,
    null),
  remove_object(
    _b),
  insert_object(
    _b,
    _r),
  cond(
    (_EQ_Q(
        avehicle(
          GLOBALS.winner),
        _b)
      goto(
        _r)
      room_info(
        t))),
  put(
    _pv,
    2,
    _pvs))

define(
  eatme_function,
  ("AUX"
    r
    c
    (pv
      GLOBALS.prsvec)
    (here
      GLOBALS.here)),
  #decl
    ((pv)
      vector
      (c)
      object
      (pa)
      verb
      (here
        r)
      room),
  cond(
    (and(
        _EQ_Q(
          1(
            _pv),
          GLOBALS.eat_X_words),
        _EQ_Q(
          2(
            _pv),
          set(
            c,
            find_obj(
              "ECAKE"))),
        _EQ_Q(
          _here,
          find_room(
            "ALICE")))
      tell(
        "Suddenly, the room appears to have become very large.")
      kill_obj(
        _c,
        GLOBALS.winner)
      set(
        r,
        find_room(
          "ALISM"))
      put(
        _r,
        GLOBALS.robjs,
        robjs(
          _here))
      mapf(
        null,
        function(
          (x),
          #decl
            ((x)
              object),
          put(
            _x,
            GLOBALS.osize,
            _(
              64,
              osize(
                _x))),
          put(
            _x,
            GLOBALS.oroom,
            _r)),
        robjs(
          _here))
      goto(
        _r))))

define(
  cake_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (po
      2(
        _pv))
    (pi
      3(
        _pv))
    (rice
      find_obj(
        "RDICE"))
    (oice
      find_obj(
        "ORICE"))
    (bice
      find_obj(
        "BLICE"))
    (here
      GLOBALS.here)
    r),
  #decl
    ((pv)
      vector
      (pa)
      verb
      (pi
        po)
      or(
        false,
        object)
      (rice
        oice
        bice)
      object
      (here
        r)
      room),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.read_X_words)
      cond(
        (_pi
          cond(
            (_EQ_Q(
                _pi,
                find_obj(
                  "BOTTL"))
              tell(
                "The letters appear larger, but still are too small to be read.")),
            (_EQ_Q(
                _pi,
                find_obj(
                  "FLASK"))
              tell(
                "The icing, now visible, says '",
                1,
                cond(
                  (_EQ_Q(
                      _po,
                      _rice)
                    "Evaporate"),
                  (_EQ_Q(
                      _po,
                      _oice)
                    "Explode"),
                  ("Enlarge")),
                "'.")),
            (tell(
                "You can't see through that!")))),
        (tell(
            "The only writing legible is a capital E.  The rest is too small to\nbe clearly visible.")))),
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.eat_X_words),
        member(
          "ALI",
          spname(
            rid(
              _here))))
      cond(
        (_EQ_Q(
            _po,
            _oice)
          kill_obj(
            _po,
            GLOBALS.winner)
          iceboom(
            )),
        (_EQ_Q(
            _po,
            _bice)
          kill_obj(
            _po,
            GLOBALS.winner)
          tell(
            "The room around you seems to be getting smaller.")
          cond(
            (_EQ_Q(
                _here,
                find_room(
                  "ALISM"))
              set(
                r,
                find_room(
                  "ALICE"))
              put(
                _r,
                GLOBALS.robjs,
                robjs(
                  _here))
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
                    _r),
                  put(
                    _x,
                    GLOBALS.osize,
                    _(
                      osize(
                        _x),
                      64))),
                robjs(
                  _here))
              goto(
                _r)),
            (jigs_up(
                GLOBALS.crushed)))))),
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          _po,
          _oice),
        member(
          "ALI",
          spname(
            rid(
              _here))))
      kill_obj(
        _po,
        GLOBALS.winner)
      iceboom(
        )),
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          _po,
          _rice),
        _EQ_Q(
          _pi,
          find_obj(
            "POOL")))
      remove_object(
        _pi)
      tell(
        "The pool of water evaporates, revealing a tin of rare spices.")
      tro(
        find_obj(
          "SAFFR"),
        GLOBALS.ovison))))

define(
  flask_function,
  ("AUX"
    f
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))),
  #decl
    ((pv)
      vector(
        verb,
        object)
      (pa)
      verb),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.open_X_words)
      mung_room(
        GLOBALS.here,
        "Noxious vapors prevent your entry.")
      jigs_up(
        GLOBALS.vapors)),
    (or(
        _EQ_Q(
          _pa,
          GLOBALS.mung_X_words),
        _EQ_Q(
          _pa,
          GLOBALS.throw_X_words))
      tell(
        "The flask breaks into pieces.")
      set(
        f,
        2(
          _pv))
      trz(
        _f,
        GLOBALS.ovison)
      jigs_up(
        GLOBALS.vapors))))

psetg(
  vapors,
  "Just before you pass out, you notice that the vapors from the\nflask's contents are fatal.")

psetg(
  crushed,
  "The room seems to have become too small to hold you.  It seems that\nthe  walls are not as compressible as your body, which is somewhat\ndemolished.")

define(
  iceboom,
  (),
  mung_room(
    GLOBALS.here,
    "The door to the room seems to be blocked by sticky orange rubble\nfrom an explosion.  Probably some careless adventurer was playing\nwith blasting cakes."),
  jigs_up(
    GLOBALS.iceblast))

psetg(
  iceblast,
  "You have been blasted to smithereens (wherever they are).")

define(
  magnet_room,
  ("AUX"
    foo
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (po
      2(
        _pv))
    (here
      GLOBALS.here)
    m),
  #decl
    ((pv)
      vector
      (pa)
      verb
      (po)
      or(
        false,
        object,
        direction)
      (here)
      room
      (m)
      or(
        false,
        primtype(
          vector))
      (foo)
      cexit),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.look_X_words)
      tell(
        "You are in a room with a low ceiling which is circular in shape. \nThere are exits to the east and the southeast.")),
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.walk_in_X_words),
        GLOBALS.carousel_flip_X_flag)
      cond(
        (GLOBALS.carousel_zoom_X_flag
          jigs_up(
            GLOBALS.spindizzy)),
        (tell(
            "As you enter, your compass starts spinning wildly.")
          null))),
    (_EQ_Q(
        _pa,
        GLOBALS.walk_X_words)
      cond(
        (and(
            GLOBALS.carousel_flip_X_flag,
            _EQ_Q(
              GLOBALS.winner,
              GLOBALS.player))
          tell(
            "You cannot get your bearings...")
          goto(
            cxroom(
              set(
                foo,
                nth(
                  rexits(
                    _here),
                  _(
                    2,
                    _(
                      1,
                      mod(
                        random(
                          ),
                        8)))))))
          room_info(
            )),
        (set(
            m,
            memq(
              chtype(
                _po,
                atom),
              rest(
                rexits(
                  _here),
                12)))
          goto(
            cxroom(
              set(
                foo,
                2(
                  _m))))
          room_info(
            ))))))

define(
  cmach_room,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))),
  #decl
    ((pv)
      vector
      (pa)
      verb),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.look_X_words)
      tell(
        "You are in a large room full of assorted heavy machinery.  The room\nsmells of burned resistors. The room is noisy from the whirring\nsounds of the machines. Along one wall of the room are three buttons\nwhich are, respectively, round, triangular, and square.  Naturally,\nabove these buttons are instructions written in EBCDIC.  A large sign\nin English above all the buttons says\n		'DANGER -- HIGH VOLTAGE '.\nThere are exits to the west and the south."))))

GLOBALS.carousel_zoom_X_flag = null

GLOBALS.carousel_flip_X_flag = null

define(
  buttons,
  ("AUX"
    i
    (pv
      GLOBALS.prsvec)
    (po
      2(
        _pv))
    (pa
      1(
        _pv))),
  #decl
    ((i)
      object
      (pv)
      vector
      (pa)
      verb),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.push_X_words)
      cond(
        (_EQ_Q(
            GLOBALS.winner,
            GLOBALS.player)
          jigs_up(
            "There is a giant spark and you are fried to a crisp.")),
        (_EQ_Q(
            _po,
            find_obj(
              "SQBUT"))
          cond(
            (GLOBALS.carousel_zoom_X_flag
              tell(
                "Nothing seems to happen.")),
            (GLOBALS.carousel_zoom_X_flag = t
              tell(
                "The whirring increases in intensity slightly.")))),
        (_EQ_Q(
            _po,
            find_obj(
              "RNBUT"))
          cond(
            (GLOBALS.carousel_zoom_X_flag
              GLOBALS.carousel_zoom_X_flag = null
              tell(
                "The whirring decreases in intensity slightly.")),
            (tell(
                "Nothing seems to happen.")))),
        (_EQ_Q(
            _po,
            find_obj(
              "TRBUT"))
          GLOBALS.carousel_flip_X_flag = not(
              GLOBALS.carousel_flip_X_flag)
          cond(
            (memq(
                set(
                  i,
                  find_obj(
                    "IRBOX")),
                robjs(
                  find_room(
                    "CAROU")))
              tell(
                "A dull thump is heard in the distance.")
              trc(
                _i,
                GLOBALS.ovison))))))))

psetg(
  spindizzy,
  "According to Prof. TAA of MIT Tech, the rapidly changing magnetic\nfields in the room are so intense as to cause you to be electrocuted. \nI really don't know, but in any event, something just killed you.")

GLOBALS.cage_solve_X_flag = null

define(
  sphere_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (r
      find_obj(
        "ROBOT"))
    c
    fl
    ract),
  #decl
    ((pv)
      vector(
        verb,
        object)
      (pa)
      verb
      (c)
      room
      (r)
      object
      (fl)
      or(
        atom,
        false)
      (ract)
      adv),
  set(
    fl,
    and(
      not(
        GLOBALS.cage_solve_X_flag),
      _EQ_Q(
        _pa,
        GLOBALS.take_X_words))),
  cond(
    (and(
        _fl,
        _EQ_Q(
          GLOBALS.player,
          GLOBALS.winner))
      tell(
        "As you reach for the sphere, an iron cage falls from the ceiling\nto entrap you.  To make matters worse, poisonous gas starts coming\ninto the room.")
      cond(
        (_EQ_Q(
            oroom(
              _r),
            GLOBALS.here)
          goto(
            set(
              c,
              find_room(
                "CAGED")))
          remove_object(
            _r)
          insert_object(
            _r,
            _c)
          put(
            set(
              ract,
              orand(
                _r)),
            GLOBALS.aroom,
            _c)
          tro(
            _r,
            GLOBALS.ndescbit)
          GLOBALS.sphere_clock = clock_int(
              GLOBALS.sphin,
              10)
          t),
        (else
          trz(
            find_obj(
              "SPHER"),
            GLOBALS.ovison)
          mung_room(
            find_room(
              "CAGER"),
            "You are stopped by a cloud of poisonous gas.")
          jigs_up(
            GLOBALS.poison)))),
    (_fl
      trz(
        find_obj(
          "SPHER"),
        GLOBALS.ovison)
      jigs_up(
        "As the robot reaches for the sphere, an iron cage falls from the\nceiling.  The robot attempts to fend it off, but is trapped below it.\nAlas, the robot short-circuits in his vain attempt to escape, and\ncrushes the sphere beneath him as he falls to the floor.")
      remove_object(
        _r)
      trz(
        2(
          _pv),
        GLOBALS.ovison)
      insert_object(
        find_obj(
          "RCAGE"),
        GLOBALS.here)
      t),
    (_EQ_Q(
        _pa,
        GLOBALS.c_int_X_words)
      mung_room(
        find_room(
          "CAGER"),
        "You are stopped by a cloud of poisonous gas.")
      jigs_up(
        GLOBALS.poison))))

psetg(
  poison,
  "Time passes...and you die from some obscure poisoning.")

define(
  caged_room,
  (),
  cond(
    (GLOBALS.cage_solve_X_flag
      GLOBALS.here = find_room(
          "CAGER"))))

gdecl(
  (sphere_clock),
  cevent,
  (robot_actions),
  uvector(
    [rest
      verb]))

define(
  robot_actor,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (po
      2(
        _pv))
    c
    cage
    (r
      find_obj(
        "ROBOT"))
    ract),
  #decl
    ((c)
      room
      (pa)
      verb
      (pv)
      vector
      (po)
      or(
        false,
        object,
        direction)
      (cage)
      object
      (r)
      object
      (ract)
      adv),
  cond(
    (and(
        _EQ_Q(
          _pa,
          GLOBALS.raise_X_words),
        _EQ_Q(
          _po,
          find_obj(
            "CAGE")))
      tell(
        "The cage shakes and is hurled across the room.")
      clock_disable(
        GLOBALS.sphere_clock)
      GLOBALS.winner = GLOBALS.player
      goto(
        set(
          c,
          find_room(
            "CAGER")))
      insert_object(
        set(
          cage,
          find_obj(
            "CAGE")),
        _c)
      tro(
        _cage,
        GLOBALS.takebit)
      trz(
        _cage,
        GLOBALS.ndescbit)
      trz(
        _r,
        GLOBALS.ndescbit)
      tro(
        find_obj(
          "SPHER"),
        GLOBALS.takebit)
      remove_object(
        _r)
      insert_object(
        _r,
        _c)
      put(
        set(
          ract,
          orand(
            _r)),
        GLOBALS.aroom,
        _c)
      GLOBALS.cage_solve_X_flag = t),
    (or(
        _EQ_Q(
          _pa,
          GLOBALS.eat_X_words),
        _EQ_Q(
          _pa,
          GLOBALS.drink_X_words))
      tell(
        "\"I am sorry but that action is difficult in the absence of a mouth.\")),
    (_EQ_Q(
        _pa,
        GLOBALS.read_X_words)
      tell(
        "\"My vision is not that good without eyes.\")),
    (memq(
        _pa,
        GLOBALS.robot_actions)
      null),
    (tell(
        "\"I am only a stupid robot and cannot perform that command.\"))))

define(
  robot_function,
  ("AUX"
    (pv
      GLOBALS.prsvec)
    (pa
      1(
        _pv))
    (po
      2(
        _pv))
    (pi
      3(
        _pv))
    pp
    aa),
  #decl
    ((aa)
      adv
      (pv)
      vector
      (pa)
      verb
      (pp
        po)
      object
      (pi)
      or(
        false,
        object)),
  cond(
    (_EQ_Q(
        _pa,
        GLOBALS.give_X_words)
      set(
        aa,
        orand(
          set(
            pp,
            _pi)))
      remove_object(
        _po)
      put(
        _aa,
        GLOBALS.aobjs,
        (_po
          _X
          aobjs(
            _aa)))
      tell(
        "The robot gladly takes the",
        1,
        odesc2(
          _po),
        "and nods his head-like appendage in thanks.")),
    (or(
        _EQ_Q(
          _pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          _pa,
          GLOBALS.mung_X_words))
      tell(
        "The robot is injured (being of shoddy construction) and falls to the\nfloor in a pile of garbage, which disintegrates before your eyes.")
      remove_object(
        cond(
          (_EQ_Q(
              _pa,
              GLOBALS.throw_X_words)
            _pi),
          (_po))))))

define(
  knock,
  ("AUX"
    (prso
      2(
        GLOBALS.prsvec))),
  cond(
    (memq(
        door_X_objects,
        onames(
          _prso))
      tell(
        "I don't think that anybody's home.")),
    (tell(
        "Why knock on a",
        0,
        odesc2(
          _prso),
        "?"))))

define(
  chomp,
  (),
  tell(
    "I don't know how to do that.  I win in all cases!"))

define(
  frobozz,
  (),
  tell(
    "The FROBOZZ Corporation created, owns, and operates this dungeon."))

define(
  win,
  (),
  tell(
    "Naturally!"))

define(
  yell,
  (),
  tell(
    "Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!"))