FUNCTIONS.coke_bottles = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let bottl = pv[2];
    let vb = pv[1];
    cond(
    /*(*/ [or(
        _EQ_Q(
          vb,
          GLOBALS.throw_X_words),
        _EQ_Q(
          vname(
            vb),
          mung_X_words)),
      tell(
        "Congratulations!  You've managed to break all those bottles.\nFortunately for your feet, they were made of magic glass and disappear\nimmediately."),
      trz(
        bottl,
        GLOBALS.ovison),
      put(
        bottl,
        GLOBALS.osize,
        0),
      t] /*)*/)
  }

FUNCTIONS.head_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let vb = pv[1];
    let nl = /*(*/ [] /*)*/;
    let lcase = find_obj(
        "LCASE");
    cond(
    /*(*/ [n_EQ_Q(
        vb,
        GLOBALS.read_X_words),
      tell(
        "Although the implementers are dead, they foresaw that some cretin\nwould tamper with their remains.  Therefore, they took steps to\nprevent this."),
      nl = rob_adv(
          GLOBALS.winner,
          nl),
      nl = rob_room(
          GLOBALS.here,
          nl,
          100),
      cond(
        /*(*/ [not(
            empty_Q(
              nl)),
          or(
            oroom(
              lcase),
            insert_object(
              lcase,
              find_room(
                "LROOM"))),
          put(
            lcase,
            GLOBALS.ocontents,
            /*(*/ [_X,
              ocontents(
                lcase),
              _X,
              nl] /*)*/)] /*)*/),
      jigs_up(
        "Unfortunately, we've run out of poles.  Therefore, in punishment for\nyour most grievous sin, we shall deprive you of all your valuables,\nand of your life."),
      t] /*)*/)
  }

GLOBALS.then = 0

GLOBALS.bucket_top_X_flag = null

FUNCTIONS.bucket = 
  (arg?) => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let po = pv[2];
    let w = find_obj(
        "WATER");
    let buck = find_obj(
        "BUCKE");
    cond(
    /*(*/ [_EQ_Q(
        arg,
        read_in),
      null] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.c_int_X_words),
        cond(
          /*(*/ [memq(
              w,
              ocontents(
                buck)),
            remove_object(
              w),
            null] /*)*/,
          /*(*/ [t] /*)*/))] /*)*/,
    /*(*/ [_EQ_Q(
        arg,
        read_out),
      cond(
        /*(*/ [and(
            _EQ_Q(
              ocan(
                w),
              buck),
            not(
              GLOBALS.bucket_top_X_flag)),
          tell(
            "The bucket rises and comes to a stop."),
          GLOBALS.bucket_top_X_flag = t,
          pass_the_bucket(
            find_room(
              "TWELL"),
            pv,
            buck),
          clock_int(
            GLOBALS.bckin,
            100),
          null] /*)*/,
        /*(*/ [and(
            GLOBALS.bucket_top_X_flag,
            n_EQ_Q(
              ocan(
                w),
              buck)),
          tell(
            "The bucket descends and comes to a stop."),
          GLOBALS.bucket_top_X_flag = null,
          pass_the_bucket(
            find_room(
              "BWELL"),
            pv,
            buck)] /*)*/)] /*)*/)
  }

FUNCTIONS.pass_the_bucket = 
  (r,
    pv,
    b) => {
    
    let pvs = pv[2];
    put(
    pv,
    2,
    null)
remove_object(
    b)
insert_object(
    b,
    r)
cond(
    /*(*/ [_EQ_Q(
        avehicle(
          GLOBALS.winner),
        b),
      goto(
        r),
      room_info(
        t)] /*)*/)
put(
    pv,
    2,
    pvs)
  }

FUNCTIONS.eatme_function = 
  () => {
    
    let r = null;
    let c = null;
    let pv = GLOBALS.prsvec;
    let here = GLOBALS.here;
    cond(
    /*(*/ [and(
        _EQ_Q(
          pv[1],
          GLOBALS.eat_X_words),
        _EQ_Q(
          pv[2],
          c = find_obj(
              "ECAKE")),
        _EQ_Q(
          here,
          find_room(
            "ALICE"))),
      tell(
        "Suddenly, the room appears to have become very large."),
      kill_obj(
        c,
        GLOBALS.winner),
      r = find_room(
          "ALISM"),
      put(
        r,
        GLOBALS.robjs,
        robjs(
          here)),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            put(
            x,
            GLOBALS.osize,
            _(
              64,
              osize(
                x)))
put(
            x,
            GLOBALS.oroom,
            r)
          },
        robjs(
          here)),
      goto(
        r)] /*)*/)
  }

FUNCTIONS.cake_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let po = pv[2];
    let pi = pv[3];
    let rice = find_obj(
        "RDICE");
    let oice = find_obj(
        "ORICE");
    let bice = find_obj(
        "BLICE");
    let here = GLOBALS.here;
    let r = null;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.read_X_words),
      cond(
        /*(*/ [pi,
          cond(
            /*(*/ [_EQ_Q(
                pi,
                find_obj(
                  "BOTTL")),
              tell(
                "The letters appear larger, but still are too small to be read.")] /*)*/,
            /*(*/ [_EQ_Q(
                pi,
                find_obj(
                  "FLASK")),
              tell(
                "The icing, now visible, says '",
                1,
                cond(
                  /*(*/ [_EQ_Q(
                      po,
                      rice),
                    "Evaporate"] /*)*/,
                  /*(*/ [_EQ_Q(
                      po,
                      oice),
                    "Explode"] /*)*/,
                  /*(*/ ["Enlarge"] /*)*/),
                "'.")] /*)*/,
            /*(*/ [tell(
                "You can't see through that!")] /*)*/)] /*)*/,
        /*(*/ [tell(
            "The only writing legible is a capital E.  The rest is too small to\nbe clearly visible.")] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.eat_X_words),
        member(
          "ALI",
          spname(
            rid(
              here)))),
      cond(
        /*(*/ [_EQ_Q(
            po,
            oice),
          kill_obj(
            po,
            GLOBALS.winner),
          iceboom(
            )] /*)*/,
        /*(*/ [_EQ_Q(
            po,
            bice),
          kill_obj(
            po,
            GLOBALS.winner),
          tell(
            "The room around you seems to be getting smaller."),
          cond(
            /*(*/ [_EQ_Q(
                here,
                find_room(
                  "ALISM")),
              r = find_room(
                  "ALICE"),
              put(
                r,
                GLOBALS.robjs,
                robjs(
                  here)),
              mapf(
                null,
                /* FUNCTION */
                  (x) => {
                    
                    put(
                    x,
                    GLOBALS.oroom,
                    r)
put(
                    x,
                    GLOBALS.osize,
                    _(
                      osize(
                        x),
                      64))
                  },
                robjs(
                  here)),
              goto(
                r)] /*)*/,
            /*(*/ [jigs_up(
                GLOBALS.crushed)] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          po,
          oice),
        member(
          "ALI",
          spname(
            rid(
              here)))),
      kill_obj(
        po,
        GLOBALS.winner),
      iceboom(
        )] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          po,
          rice),
        _EQ_Q(
          pi,
          find_obj(
            "POOL"))),
      remove_object(
        pi),
      tell(
        "The pool of water evaporates, revealing a tin of rare spices."),
      tro(
        find_obj(
          "SAFFR"),
        GLOBALS.ovison)] /*)*/)
  }

FUNCTIONS.flask_function = 
  () => {
    
    let f = null;
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.open_X_words),
      mung_room(
        GLOBALS.here,
        "Noxious vapors prevent your entry."),
      jigs_up(
        GLOBALS.vapors)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          pa,
          GLOBALS.mung_X_words),
        _EQ_Q(
          pa,
          GLOBALS.throw_X_words)),
      tell(
        "The flask breaks into pieces."),
      f = pv[2],
      trz(
        f,
        GLOBALS.ovison),
      jigs_up(
        GLOBALS.vapors)] /*)*/)
  }

psetg(
  vapors,
  "Just before you pass out, you notice that the vapors from the\nflask's contents are fatal.")

psetg(
  crushed,
  "The room seems to have become too small to hold you.  It seems that\nthe  walls are not as compressible as your body, which is somewhat\ndemolished.")

FUNCTIONS.iceboom = 
  () => {
    
    mung_room(
    GLOBALS.here,
    "The door to the room seems to be blocked by sticky orange rubble\nfrom an explosion.  Probably some careless adventurer was playing\nwith blasting cakes.")
jigs_up(
    GLOBALS.iceblast)
  }

psetg(
  iceblast,
  "You have been blasted to smithereens (wherever they are).")

FUNCTIONS.magnet_room = 
  () => {
    
    let foo = null;
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let po = pv[2];
    let here = GLOBALS.here;
    let m = null;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.look_X_words),
      tell(
        "You are in a room with a low ceiling which is circular in shape. \nThere are exits to the east and the southeast.")] /*)*/,
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.walk_in_X_words),
        GLOBALS.carousel_flip_X_flag),
      cond(
        /*(*/ [GLOBALS.carousel_zoom_X_flag,
          jigs_up(
            GLOBALS.spindizzy)] /*)*/,
        /*(*/ [tell(
            "As you enter, your compass starts spinning wildly."),
          null] /*)*/)] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.walk_X_words),
      cond(
        /*(*/ [and(
            GLOBALS.carousel_flip_X_flag,
            _EQ_Q(
              GLOBALS.winner,
              GLOBALS.player)),
          tell(
            "You cannot get your bearings..."),
          goto(
            cxroom(
              foo = rexits(
                    here)[_(
                    2,
                    _(
                      1,
                      mod(
                        random(
                          ),
                        8)))])),
          room_info(
            )] /*)*/,
        /*(*/ [m = memq(
              chtype(
                po,
                atom),
              rest(
                rexits(
                  here),
                12)),
          goto(
            cxroom(
              foo = m[2])),
          room_info(
            )] /*)*/)] /*)*/)
  }

FUNCTIONS.cmach_room = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.look_X_words),
      tell(
        "You are in a large room full of assorted heavy machinery.  The room\nsmells of burned resistors. The room is noisy from the whirring\nsounds of the machines. Along one wall of the room are three buttons\nwhich are, respectively, round, triangular, and square.  Naturally,\nabove these buttons are instructions written in EBCDIC.  A large sign\nin English above all the buttons says\n		'DANGER -- HIGH VOLTAGE '.\nThere are exits to the west and the south.")] /*)*/)
  }

GLOBALS.carousel_zoom_X_flag = null

GLOBALS.carousel_flip_X_flag = null

FUNCTIONS.buttons = 
  () => {
    
    let i = null;
    let pv = GLOBALS.prsvec;
    let po = pv[2];
    let pa = pv[1];
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.push_X_words),
      cond(
        /*(*/ [_EQ_Q(
            GLOBALS.winner,
            GLOBALS.player),
          jigs_up(
            "There is a giant spark and you are fried to a crisp.")] /*)*/,
        /*(*/ [_EQ_Q(
            po,
            find_obj(
              "SQBUT")),
          cond(
            /*(*/ [GLOBALS.carousel_zoom_X_flag,
              tell(
                "Nothing seems to happen.")] /*)*/,
            /*(*/ [GLOBALS.carousel_zoom_X_flag = t,
              tell(
                "The whirring increases in intensity slightly.")] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            po,
            find_obj(
              "RNBUT")),
          cond(
            /*(*/ [GLOBALS.carousel_zoom_X_flag,
              GLOBALS.carousel_zoom_X_flag = null,
              tell(
                "The whirring decreases in intensity slightly.")] /*)*/,
            /*(*/ [tell(
                "Nothing seems to happen.")] /*)*/)] /*)*/,
        /*(*/ [_EQ_Q(
            po,
            find_obj(
              "TRBUT")),
          GLOBALS.carousel_flip_X_flag = not(
              GLOBALS.carousel_flip_X_flag),
          cond(
            /*(*/ [memq(
                i = find_obj(
                    "IRBOX"),
                robjs(
                  find_room(
                    "CAROU"))),
              tell(
                "A dull thump is heard in the distance."),
              trc(
                i,
                GLOBALS.ovison)] /*)*/)] /*)*/)] /*)*/)
  }

psetg(
  spindizzy,
  "According to Prof. TAA of MIT Tech, the rapidly changing magnetic\nfields in the room are so intense as to cause you to be electrocuted. \nI really don't know, but in any event, something just killed you.")

GLOBALS.cage_solve_X_flag = null

FUNCTIONS.sphere_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let r = find_obj(
        "ROBOT");
    let c = null;
    let fl = null;
    let ract = null;
    fl = and(
      not(
        GLOBALS.cage_solve_X_flag),
      _EQ_Q(
        pa,
        GLOBALS.take_X_words))
cond(
    /*(*/ [and(
        fl,
        _EQ_Q(
          GLOBALS.player,
          GLOBALS.winner)),
      tell(
        "As you reach for the sphere, an iron cage falls from the ceiling\nto entrap you.  To make matters worse, poisonous gas starts coming\ninto the room."),
      cond(
        /*(*/ [_EQ_Q(
            oroom(
              r),
            GLOBALS.here),
          goto(
            c = find_room(
                "CAGED")),
          remove_object(
            r),
          insert_object(
            r,
            c),
          put(
            ract = orand(
                r),
            GLOBALS.aroom,
            c),
          tro(
            r,
            GLOBALS.ndescbit),
          GLOBALS.sphere_clock = clock_int(
              GLOBALS.sphin,
              10),
          t] /*)*/,
        /*(*/ [else,
          trz(
            find_obj(
              "SPHER"),
            GLOBALS.ovison),
          mung_room(
            find_room(
              "CAGER"),
            "You are stopped by a cloud of poisonous gas."),
          jigs_up(
            GLOBALS.poison)] /*)*/)] /*)*/,
    /*(*/ [fl,
      trz(
        find_obj(
          "SPHER"),
        GLOBALS.ovison),
      jigs_up(
        "As the robot reaches for the sphere, an iron cage falls from the\nceiling.  The robot attempts to fend it off, but is trapped below it.\nAlas, the robot short-circuits in his vain attempt to escape, and\ncrushes the sphere beneath him as he falls to the floor."),
      remove_object(
        r),
      trz(
        pv[2],
        GLOBALS.ovison),
      insert_object(
        find_obj(
          "RCAGE"),
        GLOBALS.here),
      t] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.c_int_X_words),
      mung_room(
        find_room(
          "CAGER"),
        "You are stopped by a cloud of poisonous gas."),
      jigs_up(
        GLOBALS.poison)] /*)*/)
  }

psetg(
  poison,
  "Time passes...and you die from some obscure poisoning.")

FUNCTIONS.caged_room = 
  () => {
    
    cond(
    /*(*/ [GLOBALS.cage_solve_X_flag,
      GLOBALS.here = find_room(
          "CAGER")] /*)*/)
  }

gdecl(
  /*(*/ [sphere_clock] /*)*/,
  cevent,
  /*(*/ [robot_actions] /*)*/,
  uvector(
    /*[*/ [rest,
      verb] /*]*/))

FUNCTIONS.robot_actor = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let po = pv[2];
    let c = null;
    let cage = null;
    let r = find_obj(
        "ROBOT");
    let ract = null;
    cond(
    /*(*/ [and(
        _EQ_Q(
          pa,
          GLOBALS.raise_X_words),
        _EQ_Q(
          po,
          find_obj(
            "CAGE"))),
      tell(
        "The cage shakes and is hurled across the room."),
      clock_disable(
        GLOBALS.sphere_clock),
      GLOBALS.winner = GLOBALS.player,
      goto(
        c = find_room(
            "CAGER")),
      insert_object(
        cage = find_obj(
            "CAGE"),
        c),
      tro(
        cage,
        GLOBALS.takebit),
      trz(
        cage,
        GLOBALS.ndescbit),
      trz(
        r,
        GLOBALS.ndescbit),
      tro(
        find_obj(
          "SPHER"),
        GLOBALS.takebit),
      remove_object(
        r),
      insert_object(
        r,
        c),
      put(
        ract = orand(
            r),
        GLOBALS.aroom,
        c),
      GLOBALS.cage_solve_X_flag = t] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          pa,
          GLOBALS.eat_X_words),
        _EQ_Q(
          pa,
          GLOBALS.drink_X_words)),
      tell(
        "\"I am sorry but that action is difficult in the absence of a mouth.\")] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.read_X_words),
      tell(
        "\"My vision is not that good without eyes.\")] /*)*/,
    /*(*/ [memq(
        pa,
        GLOBALS.robot_actions),
      null] /*)*/,
    /*(*/ [tell(
        "\"I am only a stupid robot and cannot perform that command.\")] /*)*/)
  }

FUNCTIONS.robot_function = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let pa = pv[1];
    let po = pv[2];
    let pi = pv[3];
    let pp = null;
    let aa = null;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.give_X_words),
      aa = orand(
          pp = pi),
      remove_object(
        po),
      put(
        aa,
        GLOBALS.aobjs,
        /*(*/ [po,
          _X,
          aobjs(
            aa)] /*)*/),
      tell(
        "The robot gladly takes the",
        1,
        odesc2(
          po),
        "and nods his head-like appendage in thanks.")] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          pa,
          GLOBALS.throw_X_words),
        _EQ_Q(
          pa,
          GLOBALS.mung_X_words)),
      tell(
        "The robot is injured (being of shoddy construction) and falls to the\nfloor in a pile of garbage, which disintegrates before your eyes."),
      remove_object(
        cond(
          /*(*/ [_EQ_Q(
              pa,
              GLOBALS.throw_X_words),
            pi] /*)*/,
          /*(*/ [po] /*)*/))] /*)*/)
  }

FUNCTIONS.knock = 
  () => {
    "AUX",
  /*(*/ [prso,
      GLOBALS.prsvec[2]] /*)*/
    cond(
    /*(*/ [memq(
        door_X_objects,
        onames(
          prso)),
      tell(
        "I don't think that anybody's home.")] /*)*/,
    /*(*/ [tell(
        "Why knock on a",
        0,
        odesc2(
          prso),
        "?")] /*)*/)
  }

FUNCTIONS.chomp = 
  () => {
    
    tell(
    "I don't know how to do that.  I win in all cases!")
  }

FUNCTIONS.frobozz = 
  () => {
    
    tell(
    "The FROBOZZ Corporation created, owns, and operates this dungeon.")
  }

FUNCTIONS.win = 
  () => {
    
    tell(
    "Naturally!")
  }

FUNCTIONS.yell = 
  () => {
    
    tell(
    "Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!")
  }