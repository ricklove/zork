// GUTS OF FROB:  BASIC VERBS, COMMAND READER, PARSER, VOCABULARY HACKERS.

GLOBALS.alt_flag = t

gdecl(
  /*(*/ [muddle] /*)*/,
  fix,
  /*(*/ [tenex_Q] /*)*/,
  or(
    atom,
    false),
  /*(*/ [vers,
    dev,
    snm,
    scratch_str] /*)*/,
  string)

FUNCTIONS.save_it = 
  (fn?) => {
    
    let muddle = GLOBALS.muddle;
    let stv = null;
    let st = remarkably_disgusting_code(
        );
    put(
    find_obj(
      "PAPER"),
    GLOBALS.odesc1,
    unspeakable_code(
      ))
GLOBALS.vers = st
GLOBALS.script_channel = null
GLOBALS.raw_score = 0
ih = on(
      "IPC",
      GLOBALS.ilo,
      1)
handler(
    GLOBALS.divert_int,
    GLOBALS.divert_hand)
cond(
    /*(*/ [g_Q(
        muddle,
        100),
      GLOBALS.scratch_str = istring(
          32),
      GLOBALS.dev = "DSK",
      GLOBALS.snm = "MDL"] /*)*/,
    /*(*/ [sname(
        ""),
      GLOBALS.dev = "DSK",
      GLOBALS.snm = "MADMAN"] /*)*/)
int_level(
    100000)
cond(
    /*(*/ [__Q(
        save(
          fn),
        "SAVED"),
      int_level(
        0),
      t] /*)*/,
    /*(*/ [t,
      // STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"     if that device exists; if not, (sort of) returns directory muddle     came from.  On its it returns # zorkers currently in existence.,
      cond(
        /*(*/ [and(
            type_Q(
              stv = starter(
                  ),
              fix),
            g_Q(
              stv,
              3)),
          or(
            member(
              GLOBALS.xunm = xuname(
                  ),
              GLOBALS.winners),
            __Q(
              GLOBALS.xunm,
              "SEC"),
            __Q(
              GLOBALS.xunm,
              "ELBOW"),
            and(
              off(
                "CHAR",
                GLOBALS.inchan),
              tell(
                "There appears before you a threatening figure clad all over\nin heavy black armor.  His legs seem like the massive trunk\nof the oak tree.  His broad shoulders and helmeted head loom\nhigh over your own puny frame and you realize that his powerful\narms could easily crush the very life from your body.  There\nhangs from his belt a veritable arsenal of deadly weapons:\nsword, mace, ball and chain, dagger, lance, and trident.\nHe speaks with a commanding voice:\n\n		\"YOU SHALL NOT PASS \"\n\nAs he grabs you by the neck all grows dim about you."),
              quit(
                )))] /*)*/,
        /*(*/ [type_Q(
            stv,
            string),
          GLOBALS.snm = substruc(
              GLOBALS.scratch_str,
              0,
              _(
                GLOBALS.scratch_str.length,
                memq(
                    _X__,
                    stv).length))] /*)*/),
      cond(
        /*(*/ [g_Q(
            GLOBALS.muddle,
            100),
          GLOBALS.tenex_Q = getsys(
              )] /*)*/,
        /*(*/ [apply(
            GLOBALS.ipc_off),
          apply(
            GLOBALS.ipc_on,
            uname(
              ),
            "ZORK")] /*)*/),
      bh = on(
          "BLOCKED",
          GLOBALS.blo,
          100),
      start(
        "WHOUS",
        st)] /*)*/)
  }

"Stuff for diverting gc's"

GLOBALS.divert_cnt = 0

GLOBALS.divert_max = 99

GLOBALS.divert_inc = 4000

GLOBALS.divert_amt = 0

GLOBALS.divert_lmt = 100000

gdecl(
  /*(*/ [divert_cnt,
    divert_max,
    divert_inc,
    divert_amt,
    divert_lmt] /*)*/,
  fix)

FUNCTIONS.divert_fcn = 
  (amt,
  reason) => {
    
    GLOBALS.divert_cnt = _(
      GLOBALS.divert_cnt,
      1)
GLOBALS.divert_amt = _(
      GLOBALS.divert_amt,
      GLOBALS.divert_inc,
      amt)
cond(
    /*(*/ [or(
        g_Q(
          GLOBALS.divert_cnt,
          GLOBALS.divert_max),
        g_Q(
          GLOBALS.divert_amt,
          GLOBALS.divert_lmt)),
      // Too much diversion ?,
      GLOBALS.divert_amt = GLOBALS.divert_cnt = 0,
      gc_fcn(
        ),
      gc(
        )] /*)*/,
    /*(*/ [else,
      // Divert this request for storage,
      cond(
        /*(*/ [1_Q(
            GLOBALS.divert_cnt),
          // First diversion ?,
          handler(
            GLOBALS.gc_int,
            GLOBALS.gc_hand)] /*)*/),
      bloat(
        _(
          amt,
          GLOBALS.divert_inc)),
      // Get storage desired plus extra increment] /*)*/)
  }

GLOBALS.divert_hand = handler(
    GLOBALS.divert_int = event(
        "DIVERT-AGC",
        1000),
    GLOBALS.divert_fcn)

off(
  GLOBALS.divert_hand)

FUNCTIONS.gc_fcn = 
  ("TUPLE",
  t) => {
    
    off(
    GLOBALS.gc_hand)
GLOBALS.divert_amt = GLOBALS.divert_cnt = 0
  }

GLOBALS.gc_hand = handler(
    GLOBALS.gc_int = event(
        "GC",
        11),
    GLOBALS.gc_fcn)

off(
  GLOBALS.gc_hand)

FUNCTIONS.xuname = 
  () => {
    
    mapf(
    GLOBALS.string,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [or(
            0_Q(
              ascii(
                x)),
            _EQ_Q(
              ascii(
                x),
              32)),
          mapstop(
            )] /*)*/,
        /*(*/ [t,
          x] /*)*/)
      },
    gxuname(
      ))
  }

FUNCTIONS.its_get_name = 
  (uname) => {
    
    let nm = field(
        uname,
        GLOBALS._name);
    let cma = null;
    let jr = null;
    let lfst = null;
    let llst = null;
    let tlen = null;
    let tstr = null;
    let str = null;
    cond(
    /*(*/ [nm,
      cond(
        /*(*/ [cma = memq(
              _X__,
              nm),
          llst = _(
              nm.length,
              cma.length),
          cma = rest(
              cma),
          lfst = cma.length,
          cond(
            /*(*/ [jr = memq(
                  _X__,
                  cma),
              lfst = _(
                  lfst,
                  jr.length)] /*)*/),
          repeat(
            /*(*/ [] /*)*/,
            cond(
              /*(*/ [empty_Q(
                  cma),
                return(
                  )] /*)*/,
              /*(*/ [memq(
                  cma[1],
                  /*%*/ [string(
                      ascii(
                        32),
                      ascii(
                        9))] /*1*/),
                cma = rest(
                    cma),
                lfst = _(
                    lfst,
                    1)] /*)*/,
              /*(*/ [else,
                return(
                  )] /*)*/)),
          tlen = _(
              lfst,
              1,
              llst,
              jr.length),
          str = istring(
              tlen,
              _X__),
          tstr = str,
          substruc(
            cma,
            0,
            lfst,
            tstr),
          tstr = rest(
              tstr,
              _(
                lfst,
                1)),
          substruc(
            nm,
            0,
            llst,
            tstr),
          and(
            jr,
            substruc(
              jr,
              0,
              jr.length,
              rest(
                tstr,
                llst))),
          GLOBALS.user_name = str] /*)*/,
        /*(*/ [else,
          GLOBALS.user_name = nm] /*)*/)] /*)*/)
  }

FUNCTIONS.unspeakable_code = 
  () => {
    
    let str = null;
    let nstr = null;
    let len_i = 0;
    let o = find_obj(
        "PAPER");
    str = memq(
      _X__,
      oread(
        o))
cond(
    /*(*/ [_EQ_Q(
        back(
            str,
            2)[1],
        _X_1),
      str = back(
          str,
          2),
      len_i = 1] /*)*/,
    /*(*/ [str = back(
          str,
          1)] /*)*/)
nstr = rest(
      memq(
        _X__,
        rest(
          memq(
            _X__,
            str))),
      3)
string(
    "There is an issue of US NEWS & DUNGEON REPORT dated",
    substruc(
      str,
      0,
      _(
        str.length,
        nstr.length)),
    "here.")
  }

FUNCTIONS.remarkably_disgusting_code = 
  () => {
    
    let n = dskdate(
        );
    string(
    "This version created",
    GLOBALS.months[chtype(
        getbits(
          n,
          bits(
            4,
            23)),
        fix)],
    _X__,
    unparse(
      chtype(
        getbits(
          n,
          bits(
            5,
            18)),
        fix)),
    _X__)
  }

FUNCTIONS.version = 
  () => {
    
    tell(
    GLOBALS.vers)
  }

GLOBALS.played_time = 0

gdecl(
  /*(*/ [played_time] /*)*/,
  fix)

FUNCTIONS.get_time = 
  () => {
    
    let now = dskdate(
        );
    let then = GLOBALS.intime;
    _(
    cond(
      /*(*/ [n_EQ_Q(
          chtype(
            getbits(
              now,
              bits(
                18,
                18)),
            fix),
          chtype(
            getbits(
              then,
              bits(
                18,
                18)),
            fix)),
        _(
          _(
            _(
              chtype(
                getbits(
                  now,
                  bits(
                    18,
                    0)),
                fix),
              _(
                24,
                7200)),
            chtype(
              getbits(
                then,
                bits(
                  18,
                  0)),
              fix)),
          2)] /*)*/,
      /*(*/ [_(
          _(
            chtype(
              getbits(
                now,
                bits(
                  18,
                  0)),
              fix),
            chtype(
              getbits(
                then,
                bits(
                  18,
                  0)),
              fix)),
          2)] /*)*/),
    GLOBALS.played_time)
  }

FUNCTIONS.play_time = 
  (outchan?,
    loser_Q) => {
    
    let time = null;
    let mins = null;
    time = get_time(
      )
GLOBALS.tell_flag = t
cond(
    /*(*/ [loser_Q,
      princ(
        "You have been playing DUNGEON for")] /*)*/,
    /*(*/ [t,
      princ(
        "Played for")] /*)*/)
and(
    g_Q(
      mins = _(
          time,
          3600),
      0),
    prin1(
      mins),
    princ(
      "hour"),
    or(
      1_Q(
        mins),
      princ(
        "s")),
    princ(
      ","))
cond(
    /*(*/ [g_Q(
        mins = mod(
            _(
              time,
              60),
            60),
        0),
      prin1(
        mins),
      princ(
        "minute"),
      cond(
        /*(*/ [not(
            1_Q(
              mins)),
          princ(
            "s")] /*)*/),
      princ(
        ", and")] /*)*/)
prin1(
    mins = mod(
        time,
        60))
princ(
    "second")
or(
    1_Q(
      mins),
    princ(
      "s"))
cond(
    /*(*/ [loser_Q,
      princ(
        ".")] /*)*/,
    /*(*/ [princ(
        ".")] /*)*/)
  }

FUNCTIONS.pc = 
  () => {
    
    
  }

FUNCTIONS.handle = 
  (frm,
    _tuple_,
    zork) => {
    
    let zf = null;
    put(
    GLOBALS.outchan,
    13,
    80)
put(
    back(
        GLOBALS.inchan)[1],
    6,
    /*#*/ [lose,
      27] /*2*/)
cond(
    /*(*/ [and(
        or(
          not(
            gassigned_Q(
              xunm)),
          member(
            GLOBALS.xunm,
            GLOBALS.winners)),
        pc(
          )),
      and(
        gassigned_Q(
          saverep),
        GLOBALS.rep = GLOBALS.saverep),
      and(
        assigned_Q(
          bh),
        off(
          bh)),
      int_level(
        0),
      GLOBALS.dbg = t,
      GLOBALS.alt_flag = t] /*)*/,
    /*(*/ [t,
      cond(
        /*(*/ [and(
            not(
              empty_Q(
                zork)),
            _EQ_Q(
              zork[1],
              control_g_Q_X_errors)),
          int_level(
            0),
          finish(
            ),
          put(
            back(
                GLOBALS.inchan)[1],
            6,
            cond(
              /*(*/ [g_Q(
                  GLOBALS.muddle,
                  100),
                cond(
                  /*(*/ [GLOBALS.tenex_Q,
                    /*#*/ [lose,
                      _37_] /*2*/] /*)*/,
                  /*(*/ [t,
                    /*#*/ [lose,
                      _000000000012_] /*2*/] /*)*/)] /*)*/,
              /*(*/ [t,
                /*#*/ [lose,
                  _000000000015_] /*2*/] /*)*/)),
          erret(
            t,
            frm)] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              zork.length,
              3),
            _EQ_Q(
              zork[1],
              file_system_error_X_errors),
            not(
              zf = zork[3]),
            _EQ_Q(
              zf.length,
              3),
            __Q(
              zf[1],
              "ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY")),
          // HACK FOR ILLEGAL CHR AFTER CTRL-P,
          put(
            back(
                GLOBALS.inchan)[1],
            6,
            /*#*/ [lose,
              _000000000015_] /*2*/),
          int_level(
            0),
          erret(
            t,
            frm)] /*)*/,
        /*(*/ [tell(
            "I'm sorry, you seem to have encountered an error in the program.\nSend mail to DUNGEON@MIT-DMS describing what it was you tried to do."),
          tell(
            GLOBALS.vers),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                print(
                x)
              },
            zork),
          finish(
            /*#*/ [false,
              /*(*/ [". Error."] /*)*/] /*2*/)] /*)*/)] /*)*/)
  }

psetg(
  winners,
  () => /*[*/ ["BKD",
      "TAA",
      "MARC",
      "PDL",
      "MDL"] /*]*/)

gdecl(
  /*(*/ [winners] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

or(
  lookup(
    "COMPILE",
    root(
      )),
  lookup(
    "GLUE",
    get(
      package,
      oblist)),
  GLOBALS.errh = handler(
      or(
        get(
          error_X_interrupts,
          interrupt),
        event(
          "ERROR",
          8)),
      GLOBALS.handle))

gdecl(
  /*(*/ [moves] /*)*/,
  fix,
  /*(*/ [script_channel] /*)*/,
  or(
    channel,
    false))

FUNCTIONS.start = 
  (rm,
    st?) => {
    
    let fn = null;
    let muddle = GLOBALS.muddle;
    let xunm = xuname(
        );
    GLOBALS.xunm = xunm
GLOBALS.ptemp = chtype(
      /*[*/ [chtype(
          with_X_words,
          prep),
        find_obj(
          "!!!!!")] /*]*/,
      phrase)
GLOBALS.intime = dskdate(
      )
cond(
    /*(*/ [l_Q(
        muddle,
        100),
      and(
        g_Q(
          xunm.length,
          2),
        __Q(
          substruc(
            xunm,
            0,
            3),
          "___"),
        quit(
          )),
      fn = its_get_name(
          xunm)] /*)*/,
    /*(*/ [fn = get_name(
          )] /*)*/)
cond(
    /*(*/ [fn,
      GLOBALS.user_name = fn] /*)*/,
    /*(*/ [GLOBALS.user_name = xunm] /*)*/)
GLOBALS.deaths = 0
GLOBALS.moves = 0
GLOBALS.winner = GLOBALS.player
put(
    GLOBALS.winner,
    GLOBALS.aroom,
    GLOBALS.here = find_room(
        rm))
tell(
    "Welcome to Dungeon.",
    1,
    st)
random(
    chtype(
      dskdate(
        ),
      fix))
int_level(
    0)
contin(
    )
  }

FUNCTIONS.contin = 
  () => {
    
    GLOBALS.alt_flag = null
put(
    back(
        GLOBALS.inchan)[1],
    6,
    cond(
      /*(*/ [g_Q(
          GLOBALS.muddle,
          100),
        cond(
          /*(*/ [GLOBALS.tenex_Q,
            /*#*/ [lose,
              _37_] /*2*/] /*)*/,
          /*(*/ [t,
            /*#*/ [lose,
              _000000000012_] /*2*/] /*)*/)] /*)*/,
      /*(*/ [t,
        /*#*/ [lose,
          _000000000015_] /*2*/] /*)*/))
GLOBALS.saverep = GLOBALS.rep
GLOBALS.rep = GLOBALS.rdcom
reset(
    GLOBALS.inchan)
GLOBALS.winner = GLOBALS.player
put(
    GLOBALS.prsvec,
    2,
    null)
  }

GLOBALS.my_script = null

gdecl(
  /*(*/ [my_script] /*)*/,
  or(
    atom,
    false))

FUNCTIONS.make_script = 
  () => {
    
    let ch = null;
    cond(
    /*(*/ [GLOBALS.script_channel,
      null] /*)*/,
    /*(*/ [ch = open(
          "PRINT",
          string(
            "MARC;%Z",
            GLOBALS.xunm,
            ">")),
      put(
        top(
          GLOBALS.inchan),
        1,
        /*(*/ [ch] /*)*/),
      put(
        top(
          GLOBALS.outchan),
        1,
        /*(*/ [ch] /*)*/),
      GLOBALS.script_channel = ch,
      GLOBALS.my_script = t] /*)*/)
  }

FUNCTIONS.flush_me = 
  () => {
    
    unwind(
    prog(
      /*(*/ [] /*)*/,
      tell(
        "Suddenly, a sinister, wraithlike figure appears before you, seeming\nto float in the air.  He glows with an eldritch light.  In a barely\naudible voice he says, \"Begone, defiler!  Your presence upsets the\nvery balance of the System itself!\"  With a sinister chuckle, he\nraises his oaken staff, taps you on the head, and fades into the\ngloom.  In his place appears a tastefully lettered sign reading:\n\n			DUNGEON CLOSED\n\nAt that instant, you disappear, and all your belongings clatter to\nthe ground."),
      finish(
        null)),
    finish(
      null))
  }

FUNCTIONS.do_script = 
  () => {
    
    let ch = null;
    let unm = GLOBALS.xunm;
    let muddle = GLOBALS.muddle;
    cond(
    /*(*/ [GLOBALS.my_script,
      do_unscript(
        null)] /*)*/)
cond(
    /*(*/ [GLOBALS.script_channel,
      tell(
        "You are already scripting.")] /*)*/,
    /*(*/ [and(
        or(
          g_Q(
            muddle,
            100),
          and(
            not(
              member(
                "GUEST",
                unm)),
            ch = open(
                "READ",
                ".FILE.",
                "(DIR)",
                "DSK",
                unm),
            close(
              ch),
            ch = open(
                "READ",
                "_MSGS_",
                unm,
                "DSK",
                unm),
            close(
              ch))),
        ch = open(
            "PRINT",
            "ZORK",
            "SCRIPT",
            "DSK",
            unm)),
      put(
        top(
          GLOBALS.inchan),
        1,
        /*(*/ [ch] /*)*/),
      put(
        top(
          GLOBALS.outchan),
        1,
        /*(*/ [ch] /*)*/),
      GLOBALS.script_channel = ch,
      cond(
        /*(*/ [l_Q(
            GLOBALS.muddle,
            100),
          tell(
            "Scripting to",
            1,
            GLOBALS.xunm,
            ";ZORK SCRIPT")] /*)*/,
        /*(*/ [t,
          tell(
            "Scripting to <",
            1,
            GLOBALS.xunm,
            ">ZORK.SCRIPT")] /*)*/)] /*)*/,
    /*(*/ [t,
      tell(
        "I can't open the script channel.")] /*)*/)
  }

FUNCTIONS.do_unscript = 
  (verbose?) => {
    
    cond(
    /*(*/ [GLOBALS.script_channel,
      put(
        top(
          GLOBALS.inchan),
        1,
        /*(*/ [] /*)*/),
      put(
        top(
          GLOBALS.outchan),
        1,
        /*(*/ [] /*)*/),
      close(
        GLOBALS.script_channel),
      GLOBALS.script_channel = null,
      and(
        verbose,
        tell(
          "Scripting off."))] /*)*/,
    /*(*/ [and(
        verbose,
        tell(
          "Scripting wasn't on."))] /*)*/)
  }

gdecl(
  /*(*/ [then] /*)*/,
  fix)

FUNCTIONS.do_save = 
  () => {
    
    let muddle = GLOBALS.muddle;
    let ch = null;
    let unm = GLOBALS.xunm;
    cond(
    /*(*/ [or(
        g_Q(
          muddle,
          100),
        and(
          not(
            member(
              "GUEST",
              unm)),
          ch = open(
              "READ",
              ".FILE.",
              "(DIR)",
              "DSK",
              unm),
          close(
            ch))),
      cond(
        /*(*/ [or(
            g_Q(
              muddle,
              100),
            and(
              ch = open(
                  "READ",
                  "_MSGS_",
                  unm,
                  "DSK",
                  unm),
              close(
                ch))),
          and(
            GLOBALS.script_channel,
            do_unscript(
              )),
          tell(
            "Saving."),
          int_level(
            100000),
          off(
            "CHAR",
            GLOBALS.inchan),
          GLOBALS.then = chtype(
              dskdate(
                ),
              fix),
          GLOBALS.played_time = get_time(
              ),
          cond(
            /*(*/ [ch = open(
                  "PRINTB",
                  cond(
                    /*(*/ [l_Q(
                        muddle,
                        100),
                      string(
                        "DSK:",
                        unm,
                        ";ZORK SAVE")] /*)*/,
                    /*(*/ [t,
                      string(
                        "DSK:<",
                        unm,
                        ">ZORK.SAVE")] /*)*/)),
              save_game(
                ch),
              finish(
                chtype(
                  () => /*(*/ [". Saved."] /*)*/,
                  false))] /*)*/,
            /*(*/ [tell(
                "Save failed."),
              tell(
                ch[1],
                1,
                "",
                ch[2])] /*)*/)] /*)*/,
        /*(*/ [tell(
            "Can't open channel for save.")] /*)*/)] /*)*/,
    /*(*/ [t,
      tell(
        "Can't open channel for save.")] /*)*/)
  }

FUNCTIONS.do_restore = 
  () => {
    
    let ch = null;
    let str = null;
    let muddle = GLOBALS.muddle;
    let nowd = null;
    let now = null;
    let thend = null;
    cond(
    /*(*/ [l_Q(
        muddle,
        100),
      str = string(
          "DSK:",
          GLOBALS.xunm,
          ";ZORK SAVE")] /*)*/,
    /*(*/ [t,
      str = string(
          "DSK:<",
          GLOBALS.xunm,
          ">ZORK.SAVE")] /*)*/)
prog(
    /*(*/ [/*(*/ [foo,
        t] /*)*/,
      /*(*/ [snm,
        sname(
          )] /*)*/] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [foo] /*)*/,
        or(
          atom,
          false),
        /*(*/ [snm] /*)*/,
        special(
          string)] /*)*/] /*2*/,
    cond(
      /*(*/ [ch = open(
            "READB",
            str),
        cond(
          /*(*/ [restore_game(
              ch),
            cond(
              /*(*/ [member(
                  GLOBALS.xunm,
                  GLOBALS.winners)] /*)*/,
              /*(*/ [_EQ_Q(
                  nowd = chtype(
                      getbits(
                        now = chtype(
                            dskdate(
                              ),
                            fix),
                        bits(
                          18,
                          18)),
                      fix),
                  thend = chtype(
                      getbits(
                        GLOBALS.then,
                        bits(
                          18,
                          18)),
                      fix)),
                cond(
                  /*(*/ [g__Q(
                      _(
                        now,
                        GLOBALS.then),
                      2400)] /*)*/,
                  /*(*/ [tell(
                      "It's too soon."),
                    cond(
                      /*(*/ [g_Q(
                          GLOBALS.muddle,
                          100),
                        off(
                          "CHAR",
                          GLOBALS.inchan),
                        int_level(
                          10000),
                        quit(
                          )] /*)*/),
                    quit(
                      )] /*)*/)] /*)*/,
              /*(*/ [1_Q(
                  _(
                    nowd,
                    thend)),
                cond(
                  /*(*/ [g__Q(
                      _(
                        _(
                          chtype(
                            getbits(
                              now,
                              bits(
                                18,
                                0)),
                            fix),
                          _(
                            24,
                            7200)),
                        chtype(
                          getbits(
                            now,
                            bits(
                              18,
                              0)),
                          fix)),
                      2400)] /*)*/,
                  /*(*/ [tell(
                      "It's too soon."),
                    quit(
                      )] /*)*/)] /*)*/),
            GLOBALS.intime = now,
            tell(
              "Restored.")] /*)*/,
          /*(*/ [tell(
              "Restore failed.")] /*)*/),
        room_desc(
          )] /*)*/,
      /*(*/ [and(
          foo,
          g_Q(
            muddle,
            100)),
        str = string(
            sname(
              ),
            "ZORK.SAVE"),
        foo = null,
        again(
          )] /*)*/,
      /*(*/ [tell(
          ch[2],
          1,
          "",
          ch[1])] /*)*/))
  }

FUNCTIONS.prob = 
  (num) => {
    
    l__Q(
    mod(
      random(
        ),
      100),
    num)
  }

"GET-ATOM TAKES A VALUE AND SEARCHES INITIAL FOR FIRST ATOM\nSETG'ED TO THAT."

define(
  get_atom,
  act,
  /*(*/ [val,
    "AUX",
    /*(*/ [o,
      get(
        initial,
        oblist)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [o] /*)*/,
      oblist] /*)*/] /*2*/,
  mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [and(
                gassigned_Q(
                  x),
                _EQ_Q(
                  /*,*/ [x] /*1*/,
                  val)),
              return(
                x,
                act)] /*)*/)
          },
        x)
      },
    o))

// ROOM-INFO --  PRINT SOMETHING ABOUT THIS PLACE  1. CHECK FOR LIGHT --> ELSE WARN LOSER  2. GIVE A DESCRIPTION OF THE ROOM  3. TELL WHAT'S ON THE FLOOR IN THE WAY OF OBJECTS  4. SIGNAL ENTRY INTO THE ROOM

GLOBALS.brief_X_flag = null

GLOBALS.super_brief_X_flag = null

gdecl(
  /*(*/ [super_brief_X_flag,
    brief_X_flag] /*)*/,
  or(
    atom,
    false))

FUNCTIONS.brief = 
  () => {
    
    GLOBALS.brief_X_flag = t
tell(
    "Brief descriptions.")
  }

FUNCTIONS.super_brief = 
  () => {
    
    GLOBALS.super_brief_X_flag = t
tell(
    "No long descriptions.")
  }

FUNCTIONS.un_brief = 
  () => {
    
    GLOBALS.brief_X_flag = null
GLOBALS.super_brief_X_flag = null
tell(
    "Long descriptions.")
  }

FUNCTIONS.un_super_brief = 
  () => {
    
    GLOBALS.super_brief_X_flag = null
tell(
    "Some long descriptions.")
  }

FUNCTIONS.room_desc = 
  () => {
    
    room_info(
    t)
  }

FUNCTIONS.room_info = 
  (full?) => {
    
    let av = avehicle(
        GLOBALS.winner);
    let rm = GLOBALS.here;
    let prso = GLOBALS.prsvec[2];
    let winobj = find_obj(
        "#####");
    let outchan = GLOBALS.outchan;
    let ra = null;
    GLOBALS.tell_flag = t
and(
    type_Q(
      prso,
      direction),
    put(
      GLOBALS.prsvec,
      2,
      null))
prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [n_EQ_Q(
          GLOBALS.here,
          aroom(
            GLOBALS.player)),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.walk_in_X_words),
        tell(
          "Done."),
        return(
          )] /*)*/,
      /*(*/ [and(
          prso,
          type_Q(
            prso,
            object)),
        cond(
          /*(*/ [object_action(
              )] /*)*/,
          /*(*/ [oread(
              prso),
            tell(
              oread(
                prso))] /*)*/,
          /*(*/ [tell(
              "I see nothing special about the",
              1,
              odesc2(
                prso),
              ".")] /*)*/),
        return(
          )] /*)*/,
      /*(*/ [not(
          lit_Q(
            rm)),
        tell(
          "It is pitch black.  You are likely to be eaten by a grue."),
        return(
          null)] /*)*/,
      /*(*/ [or(
          and(
            not(
              full),
            GLOBALS.super_brief_X_flag),
          and(
            rseen_Q(
              rm),
            or(
              GLOBALS.brief_X_flag,
              prob(
                80)),
            not(
              full))),
        tell(
          rdesc2(
            rm))] /*)*/,
      /*(*/ [and(
          empty_Q(
            rdesc1(
              rm)),
          ra = raction(
              rm)),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.look_X_words),
        apply_random(
          ra),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.foo_X_words),
        // Something innocuous] /*)*/,
      /*(*/ [tell(
          rdesc1(
            rm))] /*)*/),
    put(
      rm,
      GLOBALS.rseen_Q,
      t),
    and(
      av,
      tell(
        "You are in the",
        1,
        odesc2(
          av),
        ".")),
    mapf(
      null,
      /* FUNCTION */
        (x) => {
          
          cond(
          /*(*/ [and(
              ovis_Q(
                x),
              describable_Q(
                x)),
            cond(
              /*(*/ [_EQ_Q(
                  x,
                  av)] /*)*/,
              /*(*/ [t,
                cond(
                  /*(*/ [long_desc_obj(
                      x),
                    and(
                      av,
                      tell(
                        "[in the room]",
                        0)),
                    crlf(
                      )] /*)*/)] /*)*/),
            cond(
              /*(*/ [trnn(
                  x,
                  GLOBALS.actorbit),
                invent(
                  orand(
                    x))] /*)*/,
              /*(*/ [see_inside_Q(
                  x),
                print_cont(
                  x,
                  av,
                  winobj,
                  GLOBALS.indentstr,
                  cond(
                    /*(*/ [full] /*)*/,
                    /*(*/ [GLOBALS.super_brief_X_flag,
                      null] /*)*/,
                    /*(*/ [GLOBALS.brief_X_flag,
                      null] /*)*/,
                    /*(*/ [t] /*)*/))] /*)*/)] /*)*/)
        },
      robjs(
        rm)),
    cond(
      /*(*/ [and(
          ra = raction(
              rm),
          not(
            full)),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.walk_in_X_words),
        apply_random(
          ra),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.foo_X_words)] /*)*/),
    t)
  }

psetg(
  indentstr,
  rest(
    istring(
      8),
    8))

define(
  print_cont,
  print_c,
  /*(*/ [obj,
    av,
    winobj,
    indent,
    "OPTIONAL",
    /*(*/ [case_Q,
      t] /*)*/,
    "AUX",
    /*(*/ [cont,
      ocontents(
        obj)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [av] /*)*/,
      or(
        false,
        object),
      /*(*/ [obj,
        winobj] /*)*/,
      object,
      /*(*/ [indent] /*)*/,
      string,
      /*(*/ [cont] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [case_Q] /*)*/,
      or(
        atom,
        false)] /*)*/] /*2*/,
  cond(
    /*(*/ [not(
        empty_Q(
          cont)),
      cond(
        /*(*/ [_EQ_Q(
            obj,
            find_obj(
              "TCASE")),
          cond(
            /*(*/ [not(
                case_Q),
              return(
                t,
                print_c)] /*)*/),
          tell(
            "Your collection of treasures consists of:")] /*)*/,
        /*(*/ [not(
            and(
              _EQ_Q(
                cont.length,
                1),
              _EQ_Q(
                cont[1],
                find_obj(
                  "#####")))),
          tell(
            indent,
            0),
          tell(
            "The",
            1,
            odesc2(
              obj),
            "contains:")] /*)*/,
        /*(*/ [return(
            t,
            print_c)] /*)*/),
      mapf(
        null,
        /* FUNCTION */
          (y) => {
            
            cond(
            /*(*/ [and(
                av,
                _EQ_Q(
                  y,
                  winobj))] /*)*/,
            /*(*/ [and(
                ovis_Q(
                  y),
                describable_Q(
                  y),
                not(
                  empty_Q(
                    odesc2(
                      y)))),
              tell(
                indent,
                1,
                "A",
                odesc2(
                  y))] /*)*/)
cond(
            /*(*/ [see_inside_Q(
                y),
              print_cont(
                y,
                av,
                winobj,
                back(
                  indent))] /*)*/)
          },
        ocontents(
          obj))] /*)*/))

"GIVE LONG DESCRIPTION OF OBJECT"

FUNCTIONS.long_desc_obj = 
  (obj) => {
    
    let str = null;
    cond(
    /*(*/ [or(
        otouch_Q(
          obj),
        not(
          odesco(
            obj))),
      str = odesc1(
          obj)] /*)*/,
    /*(*/ [str = odesco(
          obj)] /*)*/)
cond(
    /*(*/ [empty_Q(
        str),
      null] /*)*/,
    /*(*/ [tell(
        str,
        0)] /*)*/)
  }

"TRUE IF PARSER WON:  OTHERWISE INHIBITS OBJECT ACTIONS, CLOCKS (BUT NOT THIEF)."

gdecl(
  /*(*/ [parse_won] /*)*/,
  or(
    atom,
    false))

psetg(
  reader_string,
  string(
    ascii(
      27),
    ascii(
      13),
    ascii(
      10)))

FUNCTIONS.rdcom = 
  (ivec?) => {
    
    let str = GLOBALS.reader_string;
    let vc = null;
    let rvec = null;
    let rm = null;
    let inplen = 1;
    let inbuf = GLOBALS.inbuf;
    let winner = GLOBALS.winner;
    let av = null;
    let outchan = GLOBALS.outchan;
    let random_action = null;
    or(
    ivec,
    prog(
      /*(*/ [] /*)*/,
      put(
        outchan,
        13,
        1000),
      room_info(
        t)))
repeat(
    /*(*/ [vval,
      cv] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [cv] /*)*/,
        or(
          false,
          verb)] /*)*/] /*2*/,
    vval = t,
    cond(
      /*(*/ [not(
          ivec),
        rm = GLOBALS.here,
        princ(
          ">"),
        GLOBALS.tell_flag = null,
        inplen = readstring(
            inbuf,
            GLOBALS.inchan,
            str),
        readchr(
          GLOBALS.inchan),
        or(
          GLOBALS.alt_flag,
          readchr(
            GLOBALS.inchan)),
        vc = lex(
            inbuf,
            rest(
              inbuf,
              inplen),
            t)] /*)*/),
    cond(
      /*(*/ [g_Q(
          inplen,
          0),
        GLOBALS.moves = _(
            GLOBALS.moves,
            1),
        cond(
          /*(*/ [GLOBALS.parse_won = and(
                eparse(
                  or(
                    ivec,
                    vc),
                  null),
                type_Q(
                  cv = rvec = GLOBALS.prsvec[1],
                  verb)),
            cond(
              /*(*/ [not(
                  random_action = aaction(
                      winner))] /*)*/,
              /*(*/ [apply_random(
                  random_action),
                return(
                  )] /*)*/),
            and(
              av = avehicle(
                  winner),
              random_action = oaction(
                  av),
              vval = not(
                  apply_random(
                    random_action,
                    read_in))),
            cond(
              /*(*/ [and(
                  vval,
                  random_action = vfcn(
                      cv),
                  apply_random(
                    random_action)),
                cond(
                  /*(*/ [and(
                      random_action = raction(
                          rm = GLOBALS.here),
                      apply_random(
                        random_action))] /*)*/)] /*)*/)] /*)*/,
          /*(*/ [ivec,
            cond(
              /*(*/ [GLOBALS.tell_flag,
                tell(
                  "Please input entire command again.")] /*)*/,
              /*(*/ [tell(
                  "Nothing happens.")] /*)*/),
            return(
              )] /*)*/),
        or(
          GLOBALS.tell_flag,
          tell(
            "Nothing happens."))] /*)*/,
      /*(*/ [t,
        GLOBALS.parse_won = null,
        tell(
          "Beg pardon?")] /*)*/),
    mapf(
      null,
      /* FUNCTION */
        (x) => {
          
          cond(
          /*(*/ [random_action = haction(
                x),
            apply_random(
              random_action,
              x)] /*)*/)
        },
      GLOBALS.demons),
    and(
      GLOBALS.parse_won,
      av = avehicle(
          winner),
      random_action = oaction(
          av),
      apply_random(
        random_action,
        read_out)),
    and(
      ivec,
      return(
        )))
  }

FUNCTIONS.score_obj = 
  (obj) => {
    
    let temp = null;
    cond(
    /*(*/ [g_Q(
        temp = ofval(
            obj),
        0),
      score_upd(
        temp),
      put(
        obj,
        GLOBALS.ofval,
        0)] /*)*/)
  }

FUNCTIONS.score_room = 
  (rm) => {
    
    let temp = null;
    cond(
    /*(*/ [g_Q(
        temp = rval(
            rm),
        0),
      score_upd(
        temp),
      put(
        rm,
        GLOBALS.rval,
        0)] /*)*/)
  }

FUNCTIONS.score_upd = 
  (num) => {
    
    let winner = GLOBALS.winner;
    put(
    winner,
    GLOBALS.ascore,
    _(
      ascore(
        winner),
      num))
GLOBALS.raw_score = _(
      GLOBALS.raw_score,
      num)
  }

FUNCTIONS.score = 
  (ask_Q?) => {
    
    let scor = null;
    let outchan = outchan;
    let pct = null;
    GLOBALS.tell_flag = t
crlf(
    )
cond(
    /*(*/ [ask_Q,
      princ(
        "Your score would be")] /*)*/,
    /*(*/ [princ(
        "Your score is")] /*)*/)
prin1(
    scor = ascore(
        GLOBALS.winner))
princ(
    "[total of")
prin1(
    GLOBALS.score_max)
princ(
    "points], in")
prin1(
    GLOBALS.moves)
cond(
    /*(*/ [1_Q(
        GLOBALS.moves),
      princ(
        "move.")] /*)*/,
    /*(*/ [princ(
        "moves.")] /*)*/)
crlf(
    )
princ(
    "This score gives you the rank of")
pct = _(
      float(
        scor),
      float(
        GLOBALS.score_max))
princ(
    cond(
      /*(*/ [1_Q(
          pct),
        "Cheater"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_95000000),
        "Wizard"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_89999999),
        "Master"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_79999999),
        "Winner"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_60000000),
        "Hacker"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_39999999),
        "Adventurer"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_19999999),
        "Junior Adventurer"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_09999999),
        "Novice Adventurer"] /*)*/,
      /*(*/ [g_Q(
          pct,
          0_04999999),
        "Amateur Adventurer"] /*)*/,
      /*(*/ ["Beginner"] /*)*/))
princ(
    ".")
crlf(
    )
  }

FUNCTIONS.finish = 
  (ask_Q?) => {
    
    let scor = null;
    unwind(
    prog(
      /*(*/ [] /*)*/,
      scor = score(
          ask_Q),
      cond(
        /*(*/ [or(
            and(
              ask_Q,
              tell(
                "Do you wish to leave the game? (Y is affirmative):"),
              yes_no(
                null)),
            not(
              ask_Q)),
          record(
            scor,
            GLOBALS.moves,
            GLOBALS.deaths,
            ask_Q,
            GLOBALS.here),
          quit(
            )] /*)*/)),
    quit(
      ))
  }

"PRINT OUT DESCRIPTION OF LOSSAGE:  WHEN PLAYED, SCORE, # MOVES, ETC."

GLOBALS.record_string = istring(
    5)

gdecl(
  /*(*/ [record_string] /*)*/,
  string)

psetg(
  recorder_string,
  string(
    ascii(
      26),
    ascii(
      3),
    ascii(
      0)))

define(
  record,
  record,
  /*(*/ [score,
    moves,
    deaths,
    quit_Q,
    loc,
    "AUX",
    /*(*/ [ch,
      null] /*)*/,
    /*(*/ [str,
      GLOBALS.record_string] /*)*/,
    fl,
    /*(*/ [ct,
      0] /*)*/,
    /*(*/ [muddle,
      GLOBALS.muddle] /*)*/,
    /*(*/ [dev,
      value(
        dev)] /*)*/,
    /*(*/ [snm,
      value(
        snm)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [muddle,
        score,
        moves,
        deaths] /*)*/,
      fix,
      /*(*/ [quit_Q] /*)*/,
      or(
        atom,
        false),
      /*(*/ [loc] /*)*/,
      room,
      /*(*/ [ch] /*)*/,
      or(
        channel(
          fix),
        false),
      /*(*/ [str] /*)*/,
      string,
      /*(*/ [ct,
        fl] /*)*/,
      fix,
      /*(*/ [dev,
        snm] /*)*/,
      string] /*)*/] /*2*/,
  unwind(
    prog(
      /*(*/ [] /*)*/,
      prog(
        /*(*/ [] /*)*/,
        cond(
          /*(*/ [ch = open(
                "READB",
                "ZORK",
                "LOG",
                dev,
                snm),
            cond(
              /*(*/ [g__Q(
                  fl = file_length(
                      ch),
                  1),
                access(
                  ch,
                  _(
                    fl,
                    1)),
                ct = readstring(
                    str,
                    ch,
                    GLOBALS.recorder_string)] /*)*/),
            close(
              ch),
            cond(
              /*(*/ [ch = open(
                    "PRINTO",
                    "ZORK",
                    "LOG",
                    dev,
                    snm)] /*)*/,
              /*(*/ [and(
                  g_Q(
                    muddle,
                    100),
                  _EQ_Q(
                    ch[3],
                    _600123_)),
                // Can't win--no write access,
                return(
                  t,
                  record)] /*)*/,
              /*(*/ [t,
                sleep(
                  1),
                again(
                  )] /*)*/),
            access(
              ch,
              max(
                0,
                _(
                  fl,
                  1))),
            printstring(
              str,
              ch,
              ct)] /*)*/,
          /*(*/ [or(
              and(
                l_Q(
                  muddle,
                  100),
                n_EQ_Q(
                  ch[3],
                  _4000000_)),
              and(
                g_Q(
                  muddle,
                  100),
                _EQ_Q(
                  ch[3],
                  _600130_))),
            // on 10x, must get FILE BUSY to try again,
            sleep(
              1),
            again(
              )] /*)*/,
          /*(*/ [ch = open(
                "PRINT",
                "ZORK",
                "LOG",
                dev,
                snm)] /*)*/,
          /*(*/ [and(
              g_Q(
                muddle,
                100),
              _EQ_Q(
                ch[3],
                _600117_)),
            // No write access,
            return(
              t,
              record)] /*)*/,
          /*(*/ [return(
              t,
              record)] /*)*/)),
      crlf(
        ch),
      princ(
        "",
        ch),
      princ(
        GLOBALS.user_name,
        ch),
      cond(
        /*(*/ [n__Q(
            GLOBALS.user_name,
            GLOBALS.xunm),
          princ(
            "(",
            ch),
          princ(
            GLOBALS.xunm,
            ch),
          princ(
            _X__,
            ch)] /*)*/),
      princ(
        "",
        ch),
      pdskdate(
        dskdate(
          ),
        ch),
      crlf(
        ch),
      play_time(
        ch,
        null),
      crlf(
        ch),
      prin1(
        score,
        ch),
      princ(
        _X__,
        ch),
      prin1(
        GLOBALS.score_max,
        ch),
      princ(
        "points,",
        ch),
      prin1(
        moves,
        ch),
      princ(
        "moves,",
        ch),
      prin1(
        deaths,
        ch),
      princ(
        "death",
        ch),
      cond(
        /*(*/ [1_Q(
            deaths),
          princ(
            ".",
            ch)] /*)*/,
        /*(*/ [t,
          princ(
            "s.",
            ch)] /*)*/),
      princ(
        "In",
        ch),
      princ(
        rdesc2(
          loc),
        ch),
      cond(
        /*(*/ [quit_Q,
          princ(
            ". Quit.",
            ch)] /*)*/,
        /*(*/ [empty_Q(
            quit_Q),
          princ(
            ". Died.",
            ch)] /*)*/,
        /*(*/ [princ(
            quit_Q[1],
            ch)] /*)*/),
      crlf(
        ch),
      mapf(
        null,
        /* FUNCTION */
          (x,
            y) => {
            
            cond(
            /*(*/ [/*,*/ [x] /*1*/,
              princ(
                "/",
                ch),
              princ(
                y,
                ch)] /*)*/)
          },
        GLOBALS.flag_names,
        GLOBALS.short_names),
      mapf(
        null,
        /* FUNCTION */
          (x,
            y) => {
            
            cond(
            /*(*/ [0_Q(
                /*,*/ [x] /*1*/),
              princ(
                "/",
                ch),
              princ(
                y,
                ch)] /*)*/)
          },
        GLOBALS.val_names,
        GLOBALS.short_val_names),
      crlf(
        ch),
      close(
        ch)),
    and(
      ch,
      not(
        0_Q(
          ch[1])),
      close(
        ch))))

flag_names

gdecl(
  /*(*/ [flag_names,
    val_names] /*)*/,
  uvector(
    /*[*/ [rest,
      atom] /*]*/),
  /*(*/ [short_names,
    short_val_names] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/))

block(
  /*(*/ [or(
      get(
        flag,
        oblist),
      moblist(
        flag)),
    get(
      initial,
      oblist),
    root(
      )] /*)*/)

psetg(
  flag_names,
  uvector(
    kitchen_window,
    troll_flag,
    key_flag,
    low_tide,
    dome_flag,
    glacier_flag,
    echo_flag,
    riddle_flag,
    lld_flag,
    cyclops_flag,
    magic_flag,
    rainbow,
    gnome_door,
    carousel_flip,
    cage_solve))

endblock(
  )

psetg(
  short_names,
  vector(
    "KI",
    "TR",
    "KE",
    "LO",
    "DO",
    "GL",
    "EC",
    "RI",
    "LL",
    "CY",
    "MA",
    "RA",
    "GN",
    "CA",
    "CG"))

psetg(
  val_names,
  uvector(
    light_shaft))

psetg(
  short_val_names,
  vector(
    "LI"))

FUNCTIONS.pdskdate = 
  (wd,
    ch) => {
    
    let tim = chtype(
        getbits(
          wd,
          bits(
            18,
            0)),
        fix);
    let a_p = "AM";
    let hr = null;
    princ(
    "",
    ch)
cond(
    /*(*/ [0_Q(
        chtype(
          wd,
          fix)),
      princ(
        "unknown",
        ch)] /*)*/,
    /*(*/ [t,
      princ(
        GLOBALS.months[chtype(
            getbits(
              wd,
              bits(
                4,
                23)),
            fix)],
        ch),
      princ(
        "",
        ch),
      prin1(
        chtype(
          getbits(
            wd,
            bits(
              5,
              18)),
          fix),
        ch),
      princ(
        "at",
        ch),
      hr = _(
          tim,
          7200),
      cond(
        /*(*/ [g__Q(
            hr,
            12),
          hr = _(
              hr,
              12),
          a_p = "PM"] /*)*/),
      cond(
        /*(*/ [0_Q(
            hr),
          hr = 12] /*)*/),
      prin1(
        hr,
        ch),
      princ(
        ":",
        ch),
      hr = _(
          mod(
            tim,
            7200),
          120),
      cond(
        /*(*/ [l_Q(
            hr,
            10),
          princ(
            "0",
            ch)] /*)*/),
      prin1(
        hr,
        ch),
      princ(
        a_p,
        ch)] /*)*/)
  }

psetg(
  months,
  /*[*/ ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"] /*]*/)

gdecl(
  /*(*/ [months] /*)*/,
  vector(
    /*[*/ [12,
      string] /*]*/))

FUNCTIONS.jigs_up = 
  (desc) => {
    
    let winner = GLOBALS.winner;
    let deaths = GLOBALS.deaths;
    let aobjs = aobjs(
        winner);
    let random_list = GLOBALS.random_list;
    let lamp = find_obj(
        "LAMP");
    let lamp_location = null;
    let val_list = /*(*/ [] /*)*/;
    let lc = null;
    cond(
    /*(*/ [GLOBALS.dbg,
      tell(
        desc)] /*)*/,
    /*(*/ [unwind(
        prog(
          /*(*/ [] /*)*/,
          cond(
            /*(*/ [n_EQ_Q(
                winner,
                GLOBALS.player),
              tell(
                desc),
              tell(
                "The",
                1,
                odesc2(
                  aobj(
                    winner)),
                "has died."),
              remove_object(
                aobj(
                  winner)),
              put(
                winner,
                GLOBALS.aroom,
                find_room(
                  "FCHMP")),
              return(
                )] /*)*/),
          reset(
            GLOBALS.inchan),
          score_upd(
            _10),
          put(
            winner,
            GLOBALS.avehicle,
            null),
          cond(
            /*(*/ [g__Q(
                deaths,
                2),
              tell(
                desc),
              tell(
                "You clearly are a suicidal maniac.  We don't allow psychotics in the\ncave, since they may harm other adventurers.  Your remains will\ninstalled in the Land of the Living Dead, where your fellow adventurers \nmay gloat over them."),
              finish(
                null)] /*)*/,
            /*(*/ [GLOBALS.deaths = _(
                  deaths,
                  1),
              tell(
                desc),
              tell(
                "Do you want me to try to patch you?",
                0),
              cond(
                /*(*/ [not(
                    yes_no(
                      t)),
                  tell(
                    "What?  You don't trust me?  Why, only last week I patched a running ITS\nand it survived for over 30 seconds.  Oh, well.",
                    2),
                  finish(
                    null)] /*)*/,
                /*(*/ [t,
                  tell(
                    "Now, let me see...\nWell, we weren't quite able to restore your state.  You can't have\neverything."),
                  cond(
                    /*(*/ [lamp_location = oroom(
                          lamp),
                      put(
                        winner,
                        GLOBALS.aobjs,
                        /*(*/ [lamp,
                          _X,
                          aobjs] /*)*/),
                      cond(
                        /*(*/ [memq(
                            lamp,
                            robjs(
                              lamp_location)),
                          remove_object(
                            lamp)] /*)*/,
                        /*(*/ [lc = ocan(
                              lamp),
                          put(
                            lc,
                            GLOBALS.ocontents,
                            splice_out(
                              lamp,
                              ocontents(
                                lc))),
                          put(
                            lamp,
                            GLOBALS.oroom,
                            null),
                          put(
                            lamp,
                            GLOBALS.ocan,
                            null)] /*)*/)] /*)*/,
                    /*(*/ [memq(
                        lamp,
                        aobjs),
                      put(
                        winner,
                        GLOBALS.aobjs,
                        /*(*/ [lamp,
                          _X,
                          splice_out(
                            lamp,
                            aobjs)] /*)*/)] /*)*/),
                  put(
                    find_obj(
                      "DOOR"),
                    GLOBALS.otouch_Q,
                    null),
                  goto(
                    find_room(
                      "FORE1")),
                  GLOBALS.egypt_flag_X_flag = t,
                  val_list = rob_adv(
                      winner,
                      val_list),
                  mapf(
                    null,
                    /* FUNCTION */
                      (x,
                        y) => {
                        
                        insert_object(
                        x,
                        y)
                      },
                    aobjs = aobjs(
                        winner),
                    random_list),
                  cond(
                    /*(*/ [g__Q(
                        random_list.length,
                        aobjs.length),
                      aobjs = val_list] /*)*/,
                    /*(*/ [empty_Q(
                        val_list),
                      aobjs = rest(
                          aobjs,
                          random_list.length)] /*)*/,
                    /*(*/ [t,
                      putrest(
                        rest(
                          val_list,
                          _(
                            val_list.length,
                            1)),
                        rest(
                          aobjs,
                          random_list.length)),
                      aobjs = val_list] /*)*/),
                  mapf(
                    null,
                    /* FUNCTION */
                      (x,
                        y) => {
                        
                        insert_object(
                        x,
                        y)
                      },
                    aobjs,
                    GLOBALS.rooms),
                  put(
                    winner,
                    GLOBALS.aobjs,
                    /*(*/ [] /*)*/),
                  t] /*)*/)] /*)*/)),
        prog(
          /*(*/ [] /*)*/,
          record(
            score(
              null),
            GLOBALS.moves,
            GLOBALS.deaths,
            null,
            GLOBALS.here),
          quit(
            )))] /*)*/)
  }

FUNCTIONS.info = 
  () => {
    
    file_to_tty(
    "MADADV",
    "INFO")
  }

FUNCTIONS.help = 
  () => {
    
    file_to_tty(
    "MADADV",
    "HELP")
  }

psetg(
  breaks,
  string(
    ascii(
      3),
    ascii(
      0)))

FUNCTIONS.file_to_tty = 
  (file1,
    file2,
    dev?,
    snm) => {
    
    let ch = open(
        "READ",
        file1,
        file2,
        dev,
        snm);
    let len = null;
    let buf = GLOBALS.inbuf;
    let buflen = buf.length;
    let iter = null;
    cond(
    /*(*/ [ch,
      unwind(
        prog(
          /*(*/ [] /*)*/,
          len = file_length(
              ch),
          iter = _(
              len,
              buflen),
          or(
            0_Q(
              mod(
                len,
                buflen)),
            iter = _(
                iter,
                1)),
          crlf(
            GLOBALS.outchan),
          GLOBALS.tell_flag = t,
          repeat(
            /*(*/ [slen] /*)*/,
            /*#*/ [decl,
              /*(*/ [/*(*/ [slen] /*)*/,
                fix] /*)*/] /*2*/,
            cond(
              /*(*/ [1_Q(
                  iter),
                slen = readstring(
                    buf,
                    ch,
                    GLOBALS.breaks)] /*)*/,
              /*(*/ [slen = readstring(
                    buf,
                    ch,
                    buflen)] /*)*/),
            printstring(
              buf,
              GLOBALS.outchan,
              slen),
            cond(
              /*(*/ [0_Q(
                  iter = _(
                      iter,
                      1)),
                crlf(
                  GLOBALS.outchan),
                return(
                  close(
                    ch))] /*)*/))),
        close(
          ch))] /*)*/,
    /*(*/ [tell(
        "File not found.")] /*)*/)
  }

FUNCTIONS.invent = 
  (win?) => {
    
    let any = null;
    let outchan = GLOBALS.outchan;
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [ovis_Q(
            x),
          or(
            any,
            prog(
              /*(*/ [] /*)*/,
              cond(
                /*(*/ [_EQ_Q(
                    win,
                    GLOBALS.player),
                  tell(
                    "You are carrying:")] /*)*/,
                /*(*/ [tell(
                    "The",
                    1,
                    odesc2(
                      aobj(
                        win)),
                    "is carrying:")] /*)*/),
              any = t)),
          tell(
            "A",
            0,
            odesc2(
              x)),
          cond(
            /*(*/ [or(
                empty_Q(
                  ocontents(
                    x)),
                not(
                  see_inside_Q(
                    x)))] /*)*/,
            /*(*/ [tell(
                "with",
                0),
              print_contents(
                ocontents(
                  x))] /*)*/),
          crlf(
            )] /*)*/)
      },
    aobjs(
      win))
or(
    any,
    n_EQ_Q(
      win,
      GLOBALS.player),
    tell(
      "You are empty handed."))
  }

FUNCTIONS.print_contents = 
  (olst) => {
    
    let outchan = GLOBALS.outchan;
    mapr(
    null,
    /* FUNCTION */
      (y) => {
        
        princ(
        "a")
princ(
        odesc2(
          y[1]))
cond(
        /*(*/ [g_Q(
            y.length,
            2),
          princ(
            ",")] /*)*/,
        /*(*/ [_EQ_Q(
            y.length,
            2),
          princ(
            ", and")] /*)*/)
      },
    olst)
  }

// LIT? --  IS THERE ANY LIGHT SOURCE IN THIS ROOM

FUNCTIONS.lit_Q = 
  (rm) => {
    
    let win = GLOBALS.winner;
    or(
    rlight_Q(
      rm),
    lfcn(
      robjs(
        rm)),
    lfcn(
      aobjs(
        win)),
    and(
      n_EQ_Q(
        win,
        GLOBALS.player),
      _EQ_Q(
        GLOBALS.here,
        aroom(
          GLOBALS.player)),
      lfcn(
        aobjs(
          GLOBALS.player))))
  }

define(
  lfcn,
  lfcn,
  /*(*/ [l,
    "AUX",
    y] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [l] /*)*/,
      list(
        /*[*/ [rest,
          object] /*]*/),
      /*(*/ [y] /*)*/,
      adv] /*)*/] /*2*/,
  mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        and(
        g_Q(
          olight_Q(
            x),
          0),
        mapleave(
          t))
cond(
        /*(*/ [and(
            ovis_Q(
              x),
            or(
              oopen_Q(
                x),
              transparent_Q(
                x))),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                cond(
                /*(*/ [g_Q(
                    olight_Q(
                      x),
                    0),
                  return(
                    t,
                    lfcn)] /*)*/)
              },
            ocontents(
              x))] /*)*/)
cond(
        /*(*/ [and(
            trnn(
              x,
              GLOBALS.actorbit),
            lfcn(
              aobjs(
                y = orand(
                    x)))),
          mapleave(
            t)] /*)*/)
      },
    l))

// WALK --  GIVEN A DIRECTION, WILL ATTEMPT TO WALK THERE

FUNCTIONS.walk = 
  () => {
    
    let leavings = null;
    let nrm = null;
    let where = chtype(
        GLOBALS.prsvec[2],
        atom);
    let me = GLOBALS.winner;
    let rm = me[1];
    let nl = null;
    let random_action = null;
    let cxs = null;
    cond(
    /*(*/ [and(
        _EQ_Q(
          me,
          GLOBALS.player),
        not(
          lit_Q(
            rm)),
        prob(
          75)),
      cond(
        /*(*/ [nrm = memq(
              where,
              rexits(
                rm)),
          leavings = nrm[2],
          cond(
            /*(*/ [and(
                type_Q(
                  leavings,
                  room),
                lit_Q(
                  leavings)),
              and(
                goto(
                  leavings),
                room_info(
                  null))] /*)*/,
            /*(*/ [and(
                type_Q(
                  leavings,
                  cexit),
                leavings = cond(
                    /*(*/ [and(
                        random_action = cxaction(
                            leavings),
                        apply_random(
                          random_action))] /*)*/,
                    /*(*/ [/*,*/ [cxflag(
                          leavings)] /*1*/,
                      cxroom(
                        leavings)] /*)*/),
                lit_Q(
                  leavings)),
              or(
                type_Q(
                  leavings,
                  atom),
                and(
                  goto(
                    leavings),
                  room_info(
                    null)))] /*)*/,
            /*(*/ [jigs_up(
                "Oh, no!  A fearsome grue slithered into the room and devoured you.")] /*)*/)] /*)*/,
        /*(*/ [jigs_up(
            "Oh, no!  You walked into the slavering fangs of a lurking grue.")] /*)*/)] /*)*/,
    /*(*/ [nrm = memq(
          where,
          rexits(
            rm)),
      leavings = nrm[2],
      cond(
        /*(*/ [type_Q(
            leavings,
            room),
          and(
            goto(
              leavings),
            room_info(
              null))] /*)*/,
        /*(*/ [type_Q(
            leavings,
            cexit),
          cond(
            /*(*/ [or(
                and(
                  random_action = cxaction(
                      leavings),
                  nl = apply_random(
                      random_action)),
                and(
                  /*,*/ [cxflag(
                      leavings)] /*1*/,
                  nl = cxroom(
                      leavings))),
              or(
                type_Q(
                  nl,
                  atom),
                and(
                  goto(
                    nl),
                  room_info(
                    null)))] /*)*/,
            /*(*/ [cxs = cxstr(
                  leavings),
              or(
                empty_Q(
                  cxs),
                tell(
                  cxs))] /*)*/,
            /*(*/ [tell(
                "There is no way to go in that direction.")] /*)*/)] /*)*/,
        /*(*/ [t,
          tell(
            leavings)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "There is no way to go in that direction.")] /*)*/)
  }

FUNCTIONS.take = 
  (take_Q?) => {
    
    let win = GLOBALS.winner;
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        win);
    let nobj = null;
    let obj = vec[2];
    let getter_Q = null;
    let robjs = robjs(
        rm);
    let aobjs = aobjs(
        win);
    let load_max = GLOBALS.load_max;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [trnn(
          obj,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [ocan(
          obj),
        nobj = ocan(
            obj),
        cond(
          /*(*/ [see_inside_Q(
              nobj),
            cond(
              /*(*/ [oopen_Q(
                  nobj),
                getter_Q = t] /*)*/,
              /*(*/ [tell(
                  "I can't reach that."),
                return(
                  null)] /*)*/)] /*)*/,
          /*(*/ [tell(
              "I can't see one here."),
            return(
              null)] /*)*/)] /*)*/),
    cond(
      /*(*/ [_EQ_Q(
          obj,
          avehicle(
            win)),
        tell(
          "You are in it, loser!"),
        return(
          null)] /*)*/,
      /*(*/ [not(
          can_take_Q(
            obj)),
        or(
          apply_object(
            obj),
          tell(
            pick_one(
              GLOBALS.yuks))),
        return(
          null)] /*)*/,
      /*(*/ [or(
          getter_Q,
          memq(
            obj,
            robjs)),
        load_max = _(
            load_max,
            fix(
              _(
                _(
                  1_0,
                  load_max),
                astrength(
                  win)))),
        cond(
          /*(*/ [and(
              getter_Q,
              memq(
                nobj,
                aobjs))] /*)*/,
          /*(*/ [g_Q(
              _(
                weight(
                  aobjs),
                weight(
                  ocontents(
                    obj)),
                osize(
                  obj)),
              load_max),
            tell(
              "Your load is too heavy.  You will have to leave something behind."),
            return(
              null)] /*)*/),
        cond(
          /*(*/ [not(
              apply_object(
                obj)),
            cond(
              /*(*/ [getter_Q,
                put(
                  nobj,
                  GLOBALS.ocontents,
                  splice_out(
                    obj,
                    ocontents(
                      nobj))),
                put(
                  obj,
                  GLOBALS.oroom,
                  null),
                put(
                  obj,
                  GLOBALS.ocan,
                  null)] /*)*/,
              /*(*/ [remove_object(
                  obj)] /*)*/),
            put(
              win,
              GLOBALS.aobjs,
              /*(*/ [obj,
                _X,
                aobjs] /*)*/),
            put(
              obj,
              GLOBALS.otouch_Q,
              t),
            score_obj(
              obj),
            cond(
              /*(*/ [take_Q,
                tell(
                  "Taken.")] /*)*/,
              /*(*/ [t] /*)*/)] /*)*/,
          /*(*/ [t] /*)*/)] /*)*/,
      /*(*/ [memq(
          obj,
          aobjs),
        tell(
          "You already have it.")] /*)*/,
      /*(*/ [tell(
          "I can't see one here."),
        null] /*)*/))
  }

FUNCTIONS.putter = 
  (objact?) => {
    
    let pv = GLOBALS.prsvec;
    let objo = pv[2];
    let obji = pv[3];
    let win = GLOBALS.winner;
    let aobjs = aobjs(
        win);
    let crock = null;
    let can = null;
    let robjs = robjs(
        GLOBALS.here);
    let ocan = null;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [trnn(
          objo,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [or(
          memq(
            objo,
            GLOBALS.stars),
          memq(
            obji,
            GLOBALS.stars)),
        tell(
          "Nice try."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [or(
          oopen_Q(
            obji),
          openable_Q(
            obji),
          trnn(
            obji,
            GLOBALS.vehbit)),
        can = obji,
        crock = objo] /*)*/,
      /*(*/ [tell(
          "I can't do that."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [not(
          oopen_Q(
            can)),
        tell(
          "I can't reach inside."),
        return(
          null)] /*)*/,
      /*(*/ [_EQ_Q(
          can,
          crock),
        tell(
          "How can you do that?"),
        return(
          null)] /*)*/,
      /*(*/ [g_Q(
          _(
            weight(
              ocontents(
                can)),
            osize(
              crock)),
          ocapac(
            can)),
        tell(
          "It won't fit."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [or(
          memq(
            crock,
            robjs),
          and(
            ocan = ocan(
                crock),
            memq(
              ocan,
              robjs)),
          and(
            ocan,
            ocan = ocan(
                ocan),
            memq(
              ocan,
              robjs))),
        put(
          pv,
          1,
          GLOBALS.take_X_words),
        put(
          pv,
          2,
          crock),
        put(
          pv,
          3,
          null),
        cond(
          /*(*/ [not(
              take(
                null)),
            return(
              null)] /*)*/,
          /*(*/ [aobjs = aobjs(
                win)] /*)*/)] /*)*/,
      /*(*/ [ocan = ocan(
            crock),
        cond(
          /*(*/ [oopen_Q(
              ocan),
            put(
              win,
              GLOBALS.aobjs,
              aobjs = /*(*/ [crock,
                  _X,
                  aobjs] /*)*/),
            put(
              ocan,
              GLOBALS.ocontents,
              splice_out(
                crock,
                ocontents(
                  ocan))),
            put(
              crock,
              GLOBALS.ocan,
              null)] /*)*/,
          /*(*/ [tell(
              "I can't reach the",
              1,
              odesc2(
                crock)),
            return(
              null)] /*)*/)] /*)*/),
    put(
      pv,
      1,
      GLOBALS.put_X_words),
    put(
      pv,
      2,
      crock),
    put(
      pv,
      3,
      can),
    cond(
      /*(*/ [and(
          objact,
          object_action(
            )),
        return(
          )] /*)*/,
      /*(*/ [put(
          win,
          GLOBALS.aobjs,
          splice_out(
            crock,
            aobjs)),
        put(
          can,
          GLOBALS.ocontents,
          /*(*/ [crock,
            _X,
            ocontents(
              can)] /*)*/),
        put(
          crock,
          GLOBALS.ocan,
          can),
        put(
          crock,
          GLOBALS.oroom,
          GLOBALS.here),
        tell(
          "Done.")] /*)*/))
  }

FUNCTIONS.dropper = 
  () => {
    
    let winner = GLOBALS.winner;
    let av = avehicle(
        winner);
    let aobjs = aobjs(
        winner);
    let getter_Q = null;
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        winner);
    let obj = vec[2];
    let pi = vec[3];
    let nobj = null;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [and(
          memq(
            vname(
              vec[1]),
            () => /*[*/ [drop_X_words,
                pour_X_words] /*]*/),
          pi),
        put(
          vec,
          1,
          GLOBALS.put_X_words),
        return(
          putter(
            ))] /*)*/,
      /*(*/ [and(
          pi,
          not(
            or(
              memq(
                obj,
                aobjs),
              memq(
                ocan(
                  obj),
                aobjs)))),
        put(
          vec,
          2,
          pi),
        put(
          vec,
          3,
          obj),
        obj = vec[2]] /*)*/),
    cond(
      /*(*/ [trnn(
          obj,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [and(
          ocan(
            obj),
          nobj = ocan(
              obj),
          memq(
            nobj,
            aobjs)),
        cond(
          /*(*/ [oopen_Q(
              nobj),
            getter_Q = t] /*)*/,
          /*(*/ [transparent_Q(
              nobj),
            tell(
              "I can't reach that."),
            return(
              )] /*)*/,
          /*(*/ [tell(
              "I can't see that here.")] /*)*/)] /*)*/),
    cond(
      /*(*/ [or(
          getter_Q,
          memq(
            obj,
            aobjs)),
        cond(
          /*(*/ [av] /*)*/,
          /*(*/ [getter_Q,
            put(
              nobj,
              GLOBALS.ocontents,
              splice_out(
                obj,
                ocontents(
                  nobj))),
            put(
              obj,
              GLOBALS.ocan,
              null)] /*)*/,
          /*(*/ [put(
              winner,
              GLOBALS.aobjs,
              splice_out(
                obj,
                aobjs))] /*)*/),
        cond(
          /*(*/ [av,
            put(
              vec,
              2,
              obj),
            put(
              vec,
              3,
              av),
            putter(
              null)] /*)*/,
          /*(*/ [insert_object(
              obj,
              rm)] /*)*/),
        cond(
          /*(*/ [object_action(
              )] /*)*/,
          /*(*/ [_EQ_Q(
              vname(
                vec[1]),
              drop_X_words),
            tell(
              "Dropped.")] /*)*/,
          /*(*/ [_EQ_Q(
              vname(
                vec[1]),
              throw_X_words),
            tell(
              "Thrown.")] /*)*/)] /*)*/,
      /*(*/ [tell(
          "You are not carrying that.")] /*)*/))
  }

"STUFF FOR 'EVERYTHING' AND 'VALUABLES'"

GLOBALS.obj_uv = chutype(
    rest(
      iuvector(
        20),
      20),
    object)

gdecl(
  /*(*/ [obj_uv] /*)*/,
  uvector(
    /*[*/ [rest,
      object] /*]*/))

FUNCTIONS.frob_lots = 
  (uv) => {
    
    let prsvec = GLOBALS.prsvec;
    let pa = prsvec[1];
    let ra = vfcn(
        pa);
    let pi = null;
    let winner = GLOBALS.winner;
    let here = GLOBALS.here;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [or(
                can_take_Q(
                  x),
                trnn(
                  x,
                  GLOBALS.trytakebit)),
              put(
                prsvec,
                2,
                x),
              tell(
                odesc2(
                  x),
                0,
                ":"),
              apply_random(
                ra),
              cond(
                /*(*/ [n_EQ_Q(
                    here,
                    aroom(
                      winner)),
                  mapleave(
                    )] /*)*/)] /*)*/)
          },
        uv)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          pa,
          GLOBALS.drop_X_words),
        _EQ_Q(
          pa,
          GLOBALS.put_X_words)),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            put(
            prsvec,
            2,
            x)
tell(
            odesc2(
              x),
            0,
            ":")
apply_random(
            ra)
cond(
            /*(*/ [n_EQ_Q(
                here,
                aroom(
                  winner)),
              mapleave(
                )] /*)*/)
          },
        uv)] /*)*/)
  }

psetg(
  losstr,
  "I can't do everything, because I ran out of room.")

FUNCTIONS.everything = 
  () => {
    
    let prsvec = GLOBALS.prsvec;
    let pa = prsvec[1];
    let pi = null;
    let suv = GLOBALS.obj_uv;
    let tuv = top(
        suv);
    let lu = tuv.length;
    let here = GLOBALS.here;
    let winner = GLOBALS.winner;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [and(
                ovis_Q(
                  x),
                not(
                  trnn(
                    x,
                    GLOBALS.actorbit))),
              cond(
                /*(*/ [_EQ_Q(
                    suv,
                    tuv),
                  tell(
                    GLOBALS.losstr),
                  mapleave(
                    )] /*)*/),
              suv = back(
                  suv),
              put(
                suv,
                1,
                x)] /*)*/)
          },
        robjs(
          here))] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.drop_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            suv = back(
              suv)
put(
            suv,
            1,
            x)
          },
        aobjs(
          winner))] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.put_X_words),
      pi = prsvec[3],
      prog(
        rp,
        /*(*/ [] /*)*/,
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  ovis_Q(
                    x),
                  n_EQ_Q(
                    x,
                    pi),
                  not(
                    trnn(
                      x,
                      GLOBALS.actorbit))),
                cond(
                  /*(*/ [_EQ_Q(
                      suv,
                      tuv),
                    tell(
                      GLOBALS.losstr),
                    return(
                      t,
                      rp)] /*)*/),
                suv = back(
                    suv),
                put(
                  suv,
                  1,
                  x)] /*)*/)
            },
          robjs(
            here)),
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  _EQ_Q(
                    suv,
                    tuv),
                  n_EQ_Q(
                    x,
                    pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  rp)] /*)*/)
suv = back(
                suv)
put(
              suv,
              1,
              x)
            },
          aobjs(
            winner)))] /*)*/)
cond(
    /*(*/ [empty_Q(
        suv),
      tell(
        "I couldn't find anything.")] /*)*/,
    /*(*/ [frob_lots(
        suv)] /*)*/)
  }

FUNCTIONS.valuables = 
  () => {
    
    let prsvec = GLOBALS.prsvec;
    let pa = prsvec[1];
    let suv = GLOBALS.obj_uv;
    let tuv = top(
        suv);
    let pi = null;
    let lu = tuv.length;
    let here = GLOBALS.here;
    let winner = GLOBALS.winner;
    cond(
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [and(
                ovis_Q(
                  x),
                not(
                  trnn(
                    x,
                    GLOBALS.actorbit)),
                not(
                  0_Q(
                    otval(
                      x)))),
              cond(
                /*(*/ [_EQ_Q(
                    suv,
                    tuv),
                  tell(
                    GLOBALS.losstr),
                  mapleave(
                    )] /*)*/),
              suv = back(
                  suv),
              put(
                suv,
                1,
                x)] /*)*/)
          },
        robjs(
          here))] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.drop_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [not(
                0_Q(
                  otval(
                    x))),
              suv = back(
                  suv),
              put(
                suv,
                1,
                x)] /*)*/)
          },
        aobjs(
          winner))] /*)*/,
    /*(*/ [_EQ_Q(
        pa,
        GLOBALS.put_X_words),
      pi = prsvec[3],
      prog(
        rp,
        /*(*/ [] /*)*/,
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  _EQ_Q(
                    suv,
                    tuv),
                  n_EQ_Q(
                    x,
                    pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  rp)] /*)*/)
cond(
              /*(*/ [and(
                  ovis_Q(
                    x),
                  not(
                    0_Q(
                      otval(
                        x)))),
                suv = back(
                    suv),
                put(
                  suv,
                  1,
                  x)] /*)*/)
            },
          robjs(
            here)),
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  _EQ_Q(
                    suv,
                    tuv),
                  n_EQ_Q(
                    x,
                    pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  rp)] /*)*/)
cond(
              /*(*/ [not(
                  0_Q(
                    otval(
                      x))),
                suv = back(
                    suv),
                put(
                  suv,
                  1,
                  x)] /*)*/)
            },
          aobjs(
            winner)))] /*)*/)
cond(
    /*(*/ [empty_Q(
        suv),
      tell(
        "I couldn't find any valuables.")] /*)*/,
    /*(*/ [frob_lots(
        suv)] /*)*/)
  }

define(
  opener,
  open_act,
  /*(*/ ["AUX",
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [prso,
      pv[2]] /*)*/,
    /*(*/ [outchan,
      GLOBALS.outchan] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [prso] /*)*/,
      object,
      /*(*/ [pv] /*)*/,
      vector(
        /*[*/ [3,
          any] /*]*/),
      /*(*/ [outchan] /*)*/,
      channel] /*)*/] /*2*/,
  cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [not(
        trnn(
          prso,
          GLOBALS.contbit)),
      tell(
        "You must tell me how to do that to a",
        1,
        odesc2(
          prso),
        ".")] /*)*/,
    /*(*/ [n_EQ_Q(
        ocapac(
          prso),
        0),
      cond(
        /*(*/ [oopen_Q(
            prso),
          tell(
            "It is already open.")] /*)*/,
        /*(*/ [t,
          put(
            prso,
            GLOBALS.oopen_Q,
            t),
          cond(
            /*(*/ [or(
                empty_Q(
                  ocontents(
                    prso)),
                transparent_Q(
                  prso)),
              tell(
                "Opened.")] /*)*/,
            /*(*/ [GLOBALS.tell_flag = t,
              tell(
                "Opening the",
                0,
                odesc2(
                  prso),
                "reveals"),
              print_contents(
                ocontents(
                  prso)),
              princ(
                _X__),
              crlf(
                )] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "The",
        1,
        odesc2(
          prso),
        "cannot be opened.")] /*)*/))

define(
  closer,
  close_act,
  /*(*/ ["AUX",
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [prso,
      pv[2]] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [pv] /*)*/,
      vector(
        /*[*/ [3,
          any] /*]*/),
      /*(*/ [prso] /*)*/,
      object] /*)*/] /*2*/,
  cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [not(
        trnn(
          prso,
          GLOBALS.contbit)),
      tell(
        "You must tell me how to do that to a",
        1,
        odesc2(
          prso),
        ".")] /*)*/,
    /*(*/ [n_EQ_Q(
        ocapac(
          prso),
        0),
      cond(
        /*(*/ [oopen_Q(
            prso),
          put(
            prso,
            GLOBALS.oopen_Q,
            null),
          tell(
            "Closed.")] /*)*/,
        /*(*/ [t,
          tell(
            "It is already closed.")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "You cannot close that.")] /*)*/))

FUNCTIONS.find = 
  () => {
    
    let prso = GLOBALS.prsvec[2];
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [prso,
      find_frob(
        prso,
        robjs(
          GLOBALS.here),
        ", which is in the room.",
        "There is a",
        "here."),
      find_frob(
        prso,
        aobjs(
          GLOBALS.winner),
        ", which you are carrying.",
        "You are carrying a",
        "."),
      cond(
        /*(*/ [not(
            GLOBALS.tell_flag),
          tell(
            "I can't see that here.")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "I don't know what that is.")] /*)*/)
  }

FUNCTIONS.find_frob = 
  (prso,
    objl,
    str1,
    str2,
    str3) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [_EQ_Q(
            x,
            prso),
          tell(
            str2,
            1,
            odesc2(
              x),
            str3)] /*)*/,
        /*(*/ [or(
            transparent_Q(
              x),
            and(
              openable_Q(
                x),
              oopen_Q(
                x))),
          mapf(
            null,
            /* FUNCTION */
              (y) => {
                
                cond(
                /*(*/ [_EQ_Q(
                    y,
                    prso),
                  tell(
                    str2,
                    1,
                    odesc2(
                      y),
                    str3),
                  tell(
                    "It is in the",
                    1,
                    odesc2(
                      x),
                    str1)] /*)*/)
              },
            ocontents(
              x))] /*)*/)
      },
    objl)
  }

// OBJECT-ACTION --  CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS

FUNCTIONS.object_action = 
  () => {
    
    let vec = GLOBALS.prsvec;
    let prso = vec[2];
    let prsi = vec[3];
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [prsi,
        and(
          apply_object(
            prsi),
          return(
            t))] /*)*/),
    cond(
      /*(*/ [prso,
        apply_object(
          prso)] /*)*/))
  }

"SIMPLE OBJ-HERE:  IS IT IN THE ROOM OR IN THE GUY'S HAND.  TO DO FULL\nSEARCH, USE GET-OBJECT"

FUNCTIONS.obj_here_Q = 
  (obj) => {
    
    let nobj = null;
    let rm = GLOBALS.here;
    let win = GLOBALS.winner;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [not(
          ovis_Q(
            obj)),
        return(
          null)] /*)*/,
      /*(*/ [nobj = ocan(
            obj),
        cond(
          /*(*/ [oopen_Q(
              nobj),
            obj = nobj] /*)*/,
          /*(*/ [return(
              null)] /*)*/)] /*)*/),
    or(
      memq(
        obj,
        robjs(
          rm)),
      memq(
        obj,
        aobjs(
          win))))
  }

FUNCTIONS.splice_out = 
  (obj,
    al) => {
    
    cond(
    /*(*/ [_EQ_Q(
        al[1],
        obj),
      rest(
        al)] /*)*/,
    /*(*/ [t,
      repeat(
        /*(*/ [/*(*/ [nl,
            rest(
              al)] /*)*/,
          /*(*/ [ol,
            al] /*)*/] /*)*/,
        /*#*/ [decl,
          /*(*/ [/*(*/ [nl,
              ol] /*)*/,
            list] /*)*/] /*2*/,
        cond(
          /*(*/ [_EQ_Q(
              nl[1],
              obj),
            putrest(
              ol,
              rest(
                nl)),
            return(
              al)] /*)*/,
          /*(*/ [ol = nl,
            nl = rest(
                nl)] /*)*/))] /*)*/)
  }

"WEIGHT:  Get sum of OSIZEs of supplied list, recursing to the nth level."

FUNCTIONS.weight = 
  (objl) => {
    
    let bigfix = GLOBALS.bigfix;
    mapf(
    GLOBALS._,
    /* FUNCTION */
      (obj) => {
        
        _(
        cond(
          /*(*/ [_EQ_Q(
              osize(
                obj),
              GLOBALS.bigfix),
            0] /*)*/,
          /*(*/ [osize(
              obj)] /*)*/),
        weight(
          ocontents(
            obj)))
      },
    objl)
  }

FUNCTIONS.pour = 
  () => {
    
    
  }

FUNCTIONS.move = 
  () => {
    
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        GLOBALS.winner);
    let obj = vec[2];
    cond(
    /*(*/ [memq(
        obj,
        robjs(
          rm)),
      object_action(
        )] /*)*/,
    /*(*/ [obj,
      tell(
        "I can't get to that to move it.")] /*)*/)
  }

FUNCTIONS.victims_Q = 
  (rm) => {
    
    mapf(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [trnn(
            x,
            GLOBALS.vicbit),
          mapleave(
            x)] /*)*/)
      },
    robjs(
      rm))
  }

define(
  lamp_on,
  lampo,
  /*(*/ ["AUX",
    /*(*/ [prsvec,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [me,
      GLOBALS.winner] /*)*/,
    /*(*/ [obj,
      prsvec[2]] /*)*/,
    /*(*/ [lit_Q,
      lit_Q(
        GLOBALS.here)] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [me] /*)*/,
      adv,
      /*(*/ [obj] /*)*/,
      object,
      /*(*/ [lampo] /*)*/,
      activation] /*)*/] /*2*/,
  cond(
    /*(*/ [and(
        trnn(
          obj,
          GLOBALS.burnbit),
        prsvec[3],
        put(
          prsvec,
          1,
          GLOBALS.burn_X_words)),
      burner(
        )] /*)*/,
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [cond(
        /*(*/ [and(
            n_EQ_Q(
              olight_Q(
                obj),
              0),
            memq(
              obj,
              aobjs(
                me)))] /*)*/,
        /*(*/ [t,
          tell(
            "You can't turn that on."),
          return(
            t,
            lampo)] /*)*/),
      cond(
        /*(*/ [g_Q(
            olight_Q(
              obj),
            0),
          tell(
            "It is already on.")] /*)*/,
        /*(*/ [put(
            obj,
            GLOBALS.olight_Q,
            1),
          tell(
            "The",
            1,
            odesc2(
              obj),
            "is now on."),
          cond(
            /*(*/ [not(
                lit_Q),
              put(
                GLOBALS.prsvec,
                2,
                null),
              room_info(
                null)] /*)*/)] /*)*/)] /*)*/))

define(
  lamp_off,
  lampo,
  /*(*/ ["AUX",
    /*(*/ [me,
      GLOBALS.winner] /*)*/,
    /*(*/ [obj,
      GLOBALS.prsvec[2]] /*)*/] /*)*/,
  /*#*/ [decl,
    /*(*/ [/*(*/ [me] /*)*/,
      adv,
      /*(*/ [obj] /*)*/,
      object,
      /*(*/ [lampo] /*)*/,
      activation] /*)*/] /*2*/,
  cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [cond(
        /*(*/ [and(
            n_EQ_Q(
              olight_Q(
                obj),
              0),
            memq(
              obj,
              aobjs(
                me)))] /*)*/,
        /*(*/ [tell(
            "You can't turn that off."),
          return(
            t,
            lampo)] /*)*/),
      cond(
        /*(*/ [l_Q(
            olight_Q(
              obj),
            0),
          tell(
            "It is already off.")] /*)*/,
        /*(*/ [put(
            obj,
            GLOBALS.olight_Q,
            _1),
          tell(
            "The",
            1,
            odesc2(
              obj),
            "is now off."),
          or(
            lit_Q(
              GLOBALS.here),
            tell(
              "It is now pitch black."))] /*)*/)] /*)*/))

"PARSER & AUXILIARIES"

GLOBALS.inbuf = istring(
    100)

// SET UP INPUT ERROR HANDLER TO CAUSE EPARSE TO FALSE OUT

psetg(
  cntprs,
  "I can't parse that.")

GLOBALS.prsvec = ivector(
    3,
    /*#*/ [false,
      /*(*/ [] /*)*/] /*2*/)

FUNCTIONS.word_Q = 
  (w) => {
    
    lookup(
    w,
    GLOBALS.words)
  }

FUNCTIONS.this_it_Q = 
  (objnam,
    obj,
    adj) => {
    
    cond(
    /*(*/ [and(
        ovis_Q(
          obj),
        or(
          _EQ_Q(
            objnam,
            oid(
              obj)),
          memq(
            objnam,
            onames(
              obj)))),
      cond(
        /*(*/ [not(
            adj)] /*)*/,
        /*(*/ [memq(
            adj,
            oadjs(
              obj))] /*)*/)] /*)*/)
  }

GLOBALS.lexv = ivector(
    10,
    () => rest(
        istring(
          5),
        5))

gdecl(
  /*(*/ [lexv] /*)*/,
  vector(
    /*[*/ [rest,
      string] /*]*/),
  /*(*/ [brks] /*)*/,
  string)

FUNCTIONS.lex = 
  (s,
    sx?,
    silent_Q) => {
    
    let brks = GLOBALS.brks;
    let v = GLOBALS.lexv;
    let s1 = s;
    let quot = null;
    mapr(
    null,
    /* FUNCTION */
      (x) => {
        
        let str = x[1];
        put(
        x,
        1,
        rest(
          str,
          str.length))
      },
    v)
cond(
    /*(*/ [_EQ_Q(
        s[1],
        _X__Q),
      put(
        v,
        1,
        substruc(
          "HELP",
          0,
          4,
          back(
            v[1],
            4)))] /*)*/,
    /*(*/ [repeat(
        /*(*/ [slen] /*)*/,
        /*#*/ [decl,
          /*(*/ [/*(*/ [slen] /*)*/,
            fix] /*)*/] /*2*/,
        cond(
          /*(*/ [or(
              _EQ_Q(
                s1.length,
                sx.length),
              memq(
                s1[1],
                brks)),
            and(
              g_Q(
                s1.length,
                sx.length),
              or(
                _EQ_Q(
                  s1[1],
                  _X__),
                _EQ_Q(
                  s1[1],
                  _X__)),
              not(
                quot),
              quot = t,
              v = rest(
                  v)),
            cond(
              /*(*/ [n_EQ_Q(
                  s,
                  s1),
                cond(
                  /*(*/ [empty_Q(
                      v),
                    or(
                      silent_Q,
                      tell(
                        "I'm too simple-minded for that."))] /*)*/,
                  /*(*/ [put(
                      v,
                      1,
                      uppercase(
                        substruc(
                          s,
                          0,
                          slen = min(
                              _(
                                s.length,
                                s1.length),
                              5),
                          back(
                            v[1],
                            slen)))),
                    v = rest(
                        v)] /*)*/)] /*)*/),
            cond(
              /*(*/ [_EQ_Q(
                  s1.length,
                  sx.length),
                return(
                  v)] /*)*/),
            s = rest(
                s1)] /*)*/),
        s1 = rest(
            s1))] /*)*/)
  }

psetg(
  brks,
  "\"' 	:;.,?!")

FUNCTIONS.anything = 
  (s,
    sx) => {
    
    mapr(
    null,
    /* FUNCTION */
      (x) => {
        
        cond(
        /*(*/ [_EQ_Q(
            x,
            sx),
          mapleave(
            null)] /*)*/,
        /*(*/ [not(
            memq(
              x[1],
              GLOBALS.brks)),
          mapleave(
            x)] /*)*/)
      },
    s)
  }

FUNCTIONS.uppercase = 
  (str) => {
    
    mapr(
    null,
    /* FUNCTION */
      (s) => {
        "AUX",
      /*(*/ [c,
          ascii(
            s[1])] /*)*/
        cond(
        /*(*/ [and(
            g_Q(
              c,
              96),
            l__Q(
              c,
              122)),
          put(
            s,
            1,
            ascii(
              _(
                c,
                32)))] /*)*/)
      },
    str)
  }

FUNCTIONS.wait = 
  (num?) => {
    
    tell(
    "Time passes...")
repeat(
    /*(*/ [/*(*/ [n,
        num] /*)*/] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [n] /*)*/,
        fix] /*)*/] /*2*/,
    cond(
      /*(*/ [or(
          l_Q(
            n = _(
                n,
                1),
            0),
          clock_demon(
            GLOBALS.clocker)),
        return(
          )] /*)*/))
  }

"RUNS ONLY IF PARSE WON, TO PREVENT SCREWS FROM TYPOS."

FUNCTIONS.clock_demon = 
  (hack) => {
    
    let ca = null;
    let flg = null;
    cond(
    /*(*/ [GLOBALS.parse_won,
      put(
        GLOBALS.prsvec,
        2,
        null),
      put(
        GLOBALS.prsvec,
        3,
        null),
      mapf(
        null,
        /* FUNCTION */
          (ev) => {
            
            let tick = ctick(
                ev);
            cond(
            /*(*/ [not(
                cflag(
                  ev))] /*)*/,
            /*(*/ [0_Q(
                tick)] /*)*/,
            /*(*/ [l_Q(
                tick,
                0),
              put(
                GLOBALS.prsvec,
                1,
                GLOBALS.c_int_X_words),
              cond(
                /*(*/ [type_Q(
                    ca = caction(
                        ev),
                    offset),
                  dispatch(
                    ca)] /*)*/,
                /*(*/ [apply(
                    ca)] /*)*/)] /*)*/,
            /*(*/ [put(
                ev,
                GLOBALS.ctick,
                tick = _(
                    tick,
                    1)),
              and(
                0_Q(
                  tick),
                flg = t,
                put(
                  GLOBALS.prsvec,
                  1,
                  GLOBALS.c_int_X_words),
                cond(
                  /*(*/ [type_Q(
                      ca = caction(
                          ev),
                      offset),
                    dispatch(
                      ca)] /*)*/,
                  /*(*/ [apply(
                      ca)] /*)*/))] /*)*/)
          },
        hobjs(
          hack))] /*)*/)
  }

gdecl(
  /*(*/ [clocker] /*)*/,
  hack)

FUNCTIONS.clock_int = 
  (cev,
    num?,
    clocker) => {
    
    cond(
    /*(*/ [not(
        memq(
          cev,
          hobjs(
            clocker))),
      put(
        clocker,
        GLOBALS.hobjs,
        /*(*/ [cev,
          _X,
          hobjs(
            clocker)] /*)*/)] /*)*/)
cond(
    /*(*/ [num,
      put(
        cev,
        GLOBALS.ctick,
        num)] /*)*/)
  }

GLOBALS.demons = /*(*/ [] /*)*/

or(
  lookup(
    "COMPILE",
    root(
      )),
  gassigned_Q(
    group_glue),
  add_demon(
    GLOBALS.clocker = chtype(
        /*[*/ [clock_demon,
          /*(*/ [] /*)*/] /*]*/,
        hack)))

FUNCTIONS.board = 
  () => {
    
    let obj = GLOBALS.prsvec[2];
    let win = GLOBALS.winner;
    let av = avehicle(
        win);
    cond(
    /*(*/ [not(
        memq(
          obj,
          robjs(
            GLOBALS.here))),
      tell(
        "The",
        1,
        odesc2(
          obj),
        "must be on the ground to be boarded.")] /*)*/,
    /*(*/ [trnn(
        obj,
        GLOBALS.vehbit),
      cond(
        /*(*/ [av,
          tell(
            "You are already in a",
            1,
            odesc2(
              obj),
            ", cretin!")] /*)*/,
        /*(*/ [t,
          cond(
            /*(*/ [object_action(
                )] /*)*/,
            /*(*/ [tell(
                "You are in the",
                1,
                odesc2(
                  obj),
                "."),
              put(
                win,
                GLOBALS.avehicle,
                obj),
              put(
                obj,
                GLOBALS.ocontents,
                /*(*/ [find_obj(
                    "#####"),
                  _X,
                  ocontents(
                    obj)] /*)*/)] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "I suppose you have a theory on boarding",
        1,
        odesc2(
          obj),
        "s.")] /*)*/)
  }

FUNCTIONS.unboard = 
  () => {
    
    let obj = GLOBALS.prsvec[2];
    let win = GLOBALS.winner;
    let av = avehicle(
        win);
    cond(
    /*(*/ [_EQ_Q(
        av,
        obj),
      cond(
        /*(*/ [object_action(
            )] /*)*/,
        /*(*/ [rtrnn(
            GLOBALS.here,
            GLOBALS.rlandbit),
          tell(
            "You are on your own feet again."),
          put(
            win,
            GLOBALS.avehicle,
            null),
          put(
            obj,
            GLOBALS.ocontents,
            splice_out(
              find_obj(
                "#####"),
              ocontents(
                obj)))] /*)*/,
        /*(*/ [tell(
            "You realize, just in time, that disembarking here would probably be\nfatal.")] /*)*/)] /*)*/,
    /*(*/ [tell(
        "You aren't in that!")] /*)*/)
  }

FUNCTIONS.goto = 
  (rm) => {
    
    let win = GLOBALS.winner;
    let av = avehicle(
        GLOBALS.winner);
    let here = GLOBALS.here;
    let lb = rtrnn(
        rm,
        GLOBALS.rlandbit);
    cond(
    /*(*/ [or(
        and(
          not(
            lb),
          or(
            not(
              av),
            not(
              rtrnn(
                rm,
                orand(
                  av))))),
        and(
          rtrnn(
            here,
            GLOBALS.rlandbit),
          lb,
          av,
          n_EQ_Q(
            orand(
              av),
            GLOBALS.rlandbit),
          not(
            rtrnn(
              rm,
              orand(
                av))))),
      cond(
        /*(*/ [av,
          tell(
            "You can't go there in a",
            1,
            odesc2(
              av),
            ".")] /*)*/,
        /*(*/ [tell(
            "You can't go there without a vehicle.")] /*)*/),
      null] /*)*/,
    /*(*/ [rtrnn(
        rm,
        GLOBALS.rmungbit),
      tell(
        rrand(
          rm))] /*)*/,
    /*(*/ [t,
      cond(
        /*(*/ [n_EQ_Q(
            win,
            GLOBALS.player),
          remove_object(
            aobj(
              win)),
          insert_object(
            aobj(
              win),
            rm)] /*)*/),
      cond(
        /*(*/ [av,
          remove_object(
            av),
          insert_object(
            av,
            rm)] /*)*/),
      put(
        GLOBALS.winner,
        GLOBALS.aroom,
        GLOBALS.here = rm),
      score_room(
        rm),
      t] /*)*/)
  }

FUNCTIONS.backer = 
  () => {
    
    tell(
    "He who puts his hand to the plow and looks back is not fit for the\nkingdom of winners.  In any case, \"back\" doesn't work.")
  }

FUNCTIONS.act_hack = 
  () => {
    
    or(
    object_action(
      ),
    t)
  }

FUNCTIONS.mung_room = 
  (rm,
    str) => {
    
    rtro(
    rm,
    GLOBALS.rmungbit)
put(
    rm,
    GLOBALS.rrand,
    str)
  }

FUNCTIONS.command = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let po = pv[2];
    let v = rest(
        member(
          "",
          GLOBALS.lexv));
    let hs = GLOBALS.here;
    let win = GLOBALS.winner;
    let play = GLOBALS.player;
    cond(
    /*(*/ [n_EQ_Q(
        win,
        play),
      tell(
        "You cannot talk through another person!")] /*)*/,
    /*(*/ [trnn(
        po,
        GLOBALS.actorbit),
      GLOBALS.winner = orand(
          po),
      rdcom(
        v),
      GLOBALS.winner = play,
      GLOBALS.here = hs] /*)*/,
    /*(*/ [tell(
        "You cannot talk to that!")] /*)*/)
  }