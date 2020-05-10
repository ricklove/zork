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
GLOBALS.vers = LOCALS.st
GLOBALS.script_channel = null
GLOBALS.raw_score = 0
LOCALS.ih = on(
      "IPC",
      GLOBALS.ilo,
      1)
handler(
    GLOBALS.divert_int,
    GLOBALS.divert_hand)
cond(
    /*(*/ [g_Q(
        LOCALS.muddle,
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
          LOCALS.fn),
        "SAVED"),
      int_level(
        0),
      t] /*)*/,
    /*(*/ [t,
      // STARTER on 10x sets up tty correctly, setg's DEV to \"MDL\"     if that device exists; if not, (sort of) returns directory muddle     came from.  On its it returns # zorkers currently in existence.,
      cond(
        /*(*/ [and(
            type_Q(
              LOCALS.stv = starter(
                  ),
              fix),
            g_Q(
              LOCALS.stv,
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
            LOCALS.stv,
            string),
          GLOBALS.snm = substruc(
              GLOBALS.scratch_str,
              0,
              _(
                length(
                  GLOBALS.scratch_str),
                length(
                  memq(
                    _X__,
                    LOCALS.stv))))] /*)*/),
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
      LOCALS.bh = on(
          "BLOCKED",
          GLOBALS.blo,
          100),
      start(
        "WHOUS",
        LOCALS.st)] /*)*/)
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
      LOCALS.amt)
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
          LOCALS.amt,
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
                LOCALS.x)),
            _EQ_Q(
              ascii(
                LOCALS.x),
              32)),
          mapstop(
            )] /*)*/,
        /*(*/ [t,
          LOCALS.x] /*)*/)
      },
    gxuname(
      ))
  }

FUNCTIONS.its_get_name = 
  (uname) => {
    
    let nm = field(
        LOCALS.uname,
        GLOBALS._name);
    let cma = null;
    let jr = null;
    let lfst = null;
    let llst = null;
    let tlen = null;
    let tstr = null;
    let str = null;
    cond(
    /*(*/ [LOCALS.nm,
      cond(
        /*(*/ [LOCALS.cma = memq(
              _X__,
              LOCALS.nm),
          LOCALS.llst = _(
              length(
                LOCALS.nm),
              length(
                LOCALS.cma)),
          LOCALS.cma = rest(
              LOCALS.cma),
          LOCALS.lfst = length(
              LOCALS.cma),
          cond(
            /*(*/ [LOCALS.jr = memq(
                  _X__,
                  LOCALS.cma),
              LOCALS.lfst = _(
                  LOCALS.lfst,
                  length(
                    LOCALS.jr))] /*)*/),
          repeat(
            /*(*/ [] /*)*/,
            cond(
              /*(*/ [empty_Q(
                  LOCALS.cma),
                return(
                  )] /*)*/,
              /*(*/ [memq(
                  1(
                    LOCALS.cma),
                  /*%*/ [string(
                      ascii(
                        32),
                      ascii(
                        9))] /*1*/),
                LOCALS.cma = rest(
                    LOCALS.cma),
                LOCALS.lfst = _(
                    LOCALS.lfst,
                    1)] /*)*/,
              /*(*/ [else,
                return(
                  )] /*)*/)),
          LOCALS.tlen = _(
              LOCALS.lfst,
              1,
              LOCALS.llst,
              length(
                LOCALS.jr)),
          LOCALS.str = istring(
              LOCALS.tlen,
              _X__),
          LOCALS.tstr = LOCALS.str,
          substruc(
            LOCALS.cma,
            0,
            LOCALS.lfst,
            LOCALS.tstr),
          LOCALS.tstr = rest(
              LOCALS.tstr,
              _(
                LOCALS.lfst,
                1)),
          substruc(
            LOCALS.nm,
            0,
            LOCALS.llst,
            LOCALS.tstr),
          and(
            LOCALS.jr,
            substruc(
              LOCALS.jr,
              0,
              length(
                LOCALS.jr),
              rest(
                LOCALS.tstr,
                LOCALS.llst))),
          GLOBALS.user_name = LOCALS.str] /*)*/,
        /*(*/ [else,
          GLOBALS.user_name = LOCALS.nm] /*)*/)] /*)*/)
  }

FUNCTIONS.unspeakable_code = 
  () => {
    
    let str = null;
    let nstr = null;
    let len_i = 0;
    let o = find_obj(
        "PAPER");
    LOCALS.str = memq(
      _X__,
      oread(
        LOCALS.o))
cond(
    /*(*/ [_EQ_Q(
        1(
          back(
            LOCALS.str,
            2)),
        _X_1),
      LOCALS.str = back(
          LOCALS.str,
          2),
      LOCALS.len_i = 1] /*)*/,
    /*(*/ [LOCALS.str = back(
          LOCALS.str,
          1)] /*)*/)
LOCALS.nstr = rest(
      memq(
        _X__,
        rest(
          memq(
            _X__,
            LOCALS.str))),
      3)
string(
    "There is an issue of US NEWS & DUNGEON REPORT dated",
    substruc(
      LOCALS.str,
      0,
      _(
        length(
          LOCALS.str),
        length(
          LOCALS.nstr))),
    "here.")
  }

FUNCTIONS.remarkably_disgusting_code = 
  () => {
    
    let n = dskdate(
        );
    string(
    "This version created",
    nth(
      GLOBALS.months,
      chtype(
        getbits(
          LOCALS.n,
          bits(
            4,
            23)),
        fix)),
    _X__,
    unparse(
      chtype(
        getbits(
          LOCALS.n,
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
              LOCALS.now,
              bits(
                18,
                18)),
            fix),
          chtype(
            getbits(
              LOCALS.then,
              bits(
                18,
                18)),
            fix)),
        _(
          _(
            _(
              chtype(
                getbits(
                  LOCALS.now,
                  bits(
                    18,
                    0)),
                fix),
              _(
                24,
                7200)),
            chtype(
              getbits(
                LOCALS.then,
                bits(
                  18,
                  0)),
              fix)),
          2)] /*)*/,
      /*(*/ [_(
          _(
            chtype(
              getbits(
                LOCALS.now,
                bits(
                  18,
                  0)),
              fix),
            chtype(
              getbits(
                LOCALS.then,
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
    LOCALS.time = get_time(
      )
GLOBALS.tell_flag = t
cond(
    /*(*/ [LOCALS.loser_Q,
      princ(
        "You have been playing DUNGEON for")] /*)*/,
    /*(*/ [t,
      princ(
        "Played for")] /*)*/)
and(
    g_Q(
      LOCALS.mins = _(
          LOCALS.time,
          3600),
      0),
    prin1(
      LOCALS.mins),
    princ(
      "hour"),
    or(
      1_Q(
        LOCALS.mins),
      princ(
        "s")),
    princ(
      ","))
cond(
    /*(*/ [g_Q(
        LOCALS.mins = mod(
            _(
              LOCALS.time,
              60),
            60),
        0),
      prin1(
        LOCALS.mins),
      princ(
        "minute"),
      cond(
        /*(*/ [not(
            1_Q(
              LOCALS.mins)),
          princ(
            "s")] /*)*/),
      princ(
        ", and")] /*)*/)
prin1(
    LOCALS.mins = mod(
        LOCALS.time,
        60))
princ(
    "second")
or(
    1_Q(
      LOCALS.mins),
    princ(
      "s"))
cond(
    /*(*/ [LOCALS.loser_Q,
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
    1(
      back(
        GLOBALS.inchan)),
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
          LOCALS.bh)),
      int_level(
        0),
      GLOBALS.dbg = t,
      GLOBALS.alt_flag = t] /*)*/,
    /*(*/ [t,
      cond(
        /*(*/ [and(
            not(
              empty_Q(
                LOCALS.zork)),
            _EQ_Q(
              1(
                LOCALS.zork),
              control_g_Q_X_errors)),
          int_level(
            0),
          finish(
            ),
          put(
            1(
              back(
                GLOBALS.inchan)),
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
            LOCALS.frm)] /*)*/,
        /*(*/ [and(
            _EQ_Q(
              length(
                LOCALS.zork),
              3),
            _EQ_Q(
              1(
                LOCALS.zork),
              file_system_error_X_errors),
            not(
              LOCALS.zf = 3(
                  LOCALS.zork)),
            _EQ_Q(
              length(
                LOCALS.zf),
              3),
            __Q(
              1(
                LOCALS.zf),
              "ILLEGAL CHR AFTER CNTRL P ON TTY DISPLAY")),
          // HACK FOR ILLEGAL CHR AFTER CTRL-P,
          put(
            1(
              back(
                GLOBALS.inchan)),
            6,
            /*#*/ [lose,
              _000000000015_] /*2*/),
          int_level(
            0),
          erret(
            t,
            LOCALS.frm)] /*)*/,
        /*(*/ [tell(
            "I'm sorry, you seem to have encountered an error in the program.\nSend mail to DUNGEON@MIT-DMS describing what it was you tried to do."),
          tell(
            GLOBALS.vers),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                print(
                LOCALS.x)
              },
            LOCALS.zork),
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
    GLOBALS.xunm = LOCALS.xunm
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
        LOCALS.muddle,
        100),
      and(
        g_Q(
          length(
            LOCALS.xunm),
          2),
        __Q(
          substruc(
            LOCALS.xunm,
            0,
            3),
          "___"),
        quit(
          )),
      LOCALS.fn = its_get_name(
          LOCALS.xunm)] /*)*/,
    /*(*/ [LOCALS.fn = get_name(
          )] /*)*/)
cond(
    /*(*/ [LOCALS.fn,
      GLOBALS.user_name = LOCALS.fn] /*)*/,
    /*(*/ [GLOBALS.user_name = LOCALS.xunm] /*)*/)
GLOBALS.deaths = 0
GLOBALS.moves = 0
GLOBALS.winner = GLOBALS.player
put(
    GLOBALS.winner,
    GLOBALS.aroom,
    GLOBALS.here = find_room(
        LOCALS.rm))
tell(
    "Welcome to Dungeon.",
    1,
    LOCALS.st)
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
    1(
      back(
        GLOBALS.inchan)),
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
    /*(*/ [LOCALS.ch = open(
          "PRINT",
          string(
            "MARC;%Z",
            GLOBALS.xunm,
            ">")),
      put(
        top(
          GLOBALS.inchan),
        1,
        /*(*/ [LOCALS.ch] /*)*/),
      put(
        top(
          GLOBALS.outchan),
        1,
        /*(*/ [LOCALS.ch] /*)*/),
      GLOBALS.script_channel = LOCALS.ch,
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
            LOCALS.muddle,
            100),
          and(
            not(
              member(
                "GUEST",
                LOCALS.unm)),
            LOCALS.ch = open(
                "READ",
                ".FILE.",
                "(DIR)",
                "DSK",
                LOCALS.unm),
            close(
              LOCALS.ch),
            LOCALS.ch = open(
                "READ",
                "_MSGS_",
                LOCALS.unm,
                "DSK",
                LOCALS.unm),
            close(
              LOCALS.ch))),
        LOCALS.ch = open(
            "PRINT",
            "ZORK",
            "SCRIPT",
            "DSK",
            LOCALS.unm)),
      put(
        top(
          GLOBALS.inchan),
        1,
        /*(*/ [LOCALS.ch] /*)*/),
      put(
        top(
          GLOBALS.outchan),
        1,
        /*(*/ [LOCALS.ch] /*)*/),
      GLOBALS.script_channel = LOCALS.ch,
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
        LOCALS.verbose,
        tell(
          "Scripting off."))] /*)*/,
    /*(*/ [and(
        LOCALS.verbose,
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
          LOCALS.muddle,
          100),
        and(
          not(
            member(
              "GUEST",
              LOCALS.unm)),
          LOCALS.ch = open(
              "READ",
              ".FILE.",
              "(DIR)",
              "DSK",
              LOCALS.unm),
          close(
            LOCALS.ch))),
      cond(
        /*(*/ [or(
            g_Q(
              LOCALS.muddle,
              100),
            and(
              LOCALS.ch = open(
                  "READ",
                  "_MSGS_",
                  LOCALS.unm,
                  "DSK",
                  LOCALS.unm),
              close(
                LOCALS.ch))),
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
            /*(*/ [LOCALS.ch = open(
                  "PRINTB",
                  cond(
                    /*(*/ [l_Q(
                        LOCALS.muddle,
                        100),
                      string(
                        "DSK:",
                        LOCALS.unm,
                        ";ZORK SAVE")] /*)*/,
                    /*(*/ [t,
                      string(
                        "DSK:<",
                        LOCALS.unm,
                        ">ZORK.SAVE")] /*)*/)),
              save_game(
                LOCALS.ch),
              finish(
                chtype(
                  () => /*(*/ [". Saved."] /*)*/,
                  false))] /*)*/,
            /*(*/ [tell(
                "Save failed."),
              tell(
                1(
                  LOCALS.ch),
                1,
                "",
                2(
                  LOCALS.ch))] /*)*/)] /*)*/,
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
        LOCALS.muddle,
        100),
      LOCALS.str = string(
          "DSK:",
          GLOBALS.xunm,
          ";ZORK SAVE")] /*)*/,
    /*(*/ [t,
      LOCALS.str = string(
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
      /*(*/ [LOCALS.ch = open(
            "READB",
            LOCALS.str),
        cond(
          /*(*/ [restore_game(
              LOCALS.ch),
            cond(
              /*(*/ [member(
                  GLOBALS.xunm,
                  GLOBALS.winners)] /*)*/,
              /*(*/ [_EQ_Q(
                  LOCALS.nowd = chtype(
                      getbits(
                        LOCALS.now = chtype(
                            dskdate(
                              ),
                            fix),
                        bits(
                          18,
                          18)),
                      fix),
                  LOCALS.thend = chtype(
                      getbits(
                        GLOBALS.then,
                        bits(
                          18,
                          18)),
                      fix)),
                cond(
                  /*(*/ [g__Q(
                      _(
                        LOCALS.now,
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
                    LOCALS.nowd,
                    LOCALS.thend)),
                cond(
                  /*(*/ [g__Q(
                      _(
                        _(
                          chtype(
                            getbits(
                              LOCALS.now,
                              bits(
                                18,
                                0)),
                            fix),
                          _(
                            24,
                            7200)),
                        chtype(
                          getbits(
                            LOCALS.now,
                            bits(
                              18,
                              0)),
                          fix)),
                      2400)] /*)*/,
                  /*(*/ [tell(
                      "It's too soon."),
                    quit(
                      )] /*)*/)] /*)*/),
            GLOBALS.intime = LOCALS.now,
            tell(
              "Restored.")] /*)*/,
          /*(*/ [tell(
              "Restore failed.")] /*)*/),
        room_desc(
          )] /*)*/,
      /*(*/ [and(
          LOCALS.foo,
          g_Q(
            LOCALS.muddle,
            100)),
        LOCALS.str = string(
            sname(
              ),
            "ZORK.SAVE"),
        LOCALS.foo = null,
        again(
          )] /*)*/,
      /*(*/ [tell(
          2(
            LOCALS.ch),
          1,
          "",
          1(
            LOCALS.ch))] /*)*/))
  }

FUNCTIONS.prob = 
  (num) => {
    
    l__Q(
    mod(
      random(
        ),
      100),
    LOCALS.num)
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
                  LOCALS.x),
                _EQ_Q(
                  /*,*/ [LOCALS.x] /*1*/,
                  LOCALS.val)),
              return(
                LOCALS.x,
                LOCALS.act)] /*)*/)
          },
        LOCALS.x)
      },
    LOCALS.o))

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
    let prso = 2(
        GLOBALS.prsvec);
    let winobj = find_obj(
        "#####");
    let outchan = GLOBALS.outchan;
    let ra = null;
    GLOBALS.tell_flag = t
and(
    type_Q(
      LOCALS.prso,
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
          LOCALS.prso,
          type_Q(
            LOCALS.prso,
            object)),
        cond(
          /*(*/ [object_action(
              )] /*)*/,
          /*(*/ [oread(
              LOCALS.prso),
            tell(
              oread(
                LOCALS.prso))] /*)*/,
          /*(*/ [tell(
              "I see nothing special about the",
              1,
              odesc2(
                LOCALS.prso),
              ".")] /*)*/),
        return(
          )] /*)*/,
      /*(*/ [not(
          lit_Q(
            LOCALS.rm)),
        tell(
          "It is pitch black.  You are likely to be eaten by a grue."),
        return(
          null)] /*)*/,
      /*(*/ [or(
          and(
            not(
              LOCALS.full),
            GLOBALS.super_brief_X_flag),
          and(
            rseen_Q(
              LOCALS.rm),
            or(
              GLOBALS.brief_X_flag,
              prob(
                80)),
            not(
              LOCALS.full))),
        tell(
          rdesc2(
            LOCALS.rm))] /*)*/,
      /*(*/ [and(
          empty_Q(
            rdesc1(
              LOCALS.rm)),
          LOCALS.ra = raction(
              LOCALS.rm)),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.look_X_words),
        apply_random(
          LOCALS.ra),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.foo_X_words),
        // Something innocuous] /*)*/,
      /*(*/ [tell(
          rdesc1(
            LOCALS.rm))] /*)*/),
    put(
      LOCALS.rm,
      GLOBALS.rseen_Q,
      t),
    and(
      LOCALS.av,
      tell(
        "You are in the",
        1,
        odesc2(
          LOCALS.av),
        ".")),
    mapf(
      null,
      /* FUNCTION */
        (x) => {
          
          cond(
          /*(*/ [and(
              ovis_Q(
                LOCALS.x),
              describable_Q(
                LOCALS.x)),
            cond(
              /*(*/ [_EQ_Q(
                  LOCALS.x,
                  LOCALS.av)] /*)*/,
              /*(*/ [t,
                cond(
                  /*(*/ [long_desc_obj(
                      LOCALS.x),
                    and(
                      LOCALS.av,
                      tell(
                        "[in the room]",
                        0)),
                    crlf(
                      )] /*)*/)] /*)*/),
            cond(
              /*(*/ [trnn(
                  LOCALS.x,
                  GLOBALS.actorbit),
                invent(
                  orand(
                    LOCALS.x))] /*)*/,
              /*(*/ [see_inside_Q(
                  LOCALS.x),
                print_cont(
                  LOCALS.x,
                  LOCALS.av,
                  LOCALS.winobj,
                  GLOBALS.indentstr,
                  cond(
                    /*(*/ [LOCALS.full] /*)*/,
                    /*(*/ [GLOBALS.super_brief_X_flag,
                      null] /*)*/,
                    /*(*/ [GLOBALS.brief_X_flag,
                      null] /*)*/,
                    /*(*/ [t] /*)*/))] /*)*/)] /*)*/)
        },
      robjs(
        LOCALS.rm)),
    cond(
      /*(*/ [and(
          LOCALS.ra = raction(
              LOCALS.rm),
          not(
            LOCALS.full)),
        put(
          GLOBALS.prsvec,
          1,
          GLOBALS.walk_in_X_words),
        apply_random(
          LOCALS.ra),
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
        LOCALS.obj)] /*)*/] /*)*/,
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
          LOCALS.cont)),
      cond(
        /*(*/ [_EQ_Q(
            LOCALS.obj,
            find_obj(
              "TCASE")),
          cond(
            /*(*/ [not(
                LOCALS.case_Q),
              return(
                t,
                LOCALS.print_c)] /*)*/),
          tell(
            "Your collection of treasures consists of:")] /*)*/,
        /*(*/ [not(
            and(
              _EQ_Q(
                length(
                  LOCALS.cont),
                1),
              _EQ_Q(
                1(
                  LOCALS.cont),
                find_obj(
                  "#####")))),
          tell(
            LOCALS.indent,
            0),
          tell(
            "The",
            1,
            odesc2(
              LOCALS.obj),
            "contains:")] /*)*/,
        /*(*/ [return(
            t,
            LOCALS.print_c)] /*)*/),
      mapf(
        null,
        /* FUNCTION */
          (y) => {
            
            cond(
            /*(*/ [and(
                LOCALS.av,
                _EQ_Q(
                  LOCALS.y,
                  LOCALS.winobj))] /*)*/,
            /*(*/ [and(
                ovis_Q(
                  LOCALS.y),
                describable_Q(
                  LOCALS.y),
                not(
                  empty_Q(
                    odesc2(
                      LOCALS.y)))),
              tell(
                LOCALS.indent,
                1,
                "A",
                odesc2(
                  LOCALS.y))] /*)*/)
cond(
            /*(*/ [see_inside_Q(
                LOCALS.y),
              print_cont(
                LOCALS.y,
                LOCALS.av,
                LOCALS.winobj,
                back(
                  LOCALS.indent))] /*)*/)
          },
        ocontents(
          LOCALS.obj))] /*)*/))

"GIVE LONG DESCRIPTION OF OBJECT"

FUNCTIONS.long_desc_obj = 
  (obj) => {
    
    let str = null;
    cond(
    /*(*/ [or(
        otouch_Q(
          LOCALS.obj),
        not(
          odesco(
            LOCALS.obj))),
      LOCALS.str = odesc1(
          LOCALS.obj)] /*)*/,
    /*(*/ [LOCALS.str = odesco(
          LOCALS.obj)] /*)*/)
cond(
    /*(*/ [empty_Q(
        LOCALS.str),
      null] /*)*/,
    /*(*/ [tell(
        LOCALS.str,
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
    LOCALS.ivec,
    prog(
      /*(*/ [] /*)*/,
      put(
        LOCALS.outchan,
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
    LOCALS.vval = t,
    cond(
      /*(*/ [not(
          LOCALS.ivec),
        LOCALS.rm = GLOBALS.here,
        princ(
          ">"),
        GLOBALS.tell_flag = null,
        LOCALS.inplen = readstring(
            LOCALS.inbuf,
            GLOBALS.inchan,
            LOCALS.str),
        readchr(
          GLOBALS.inchan),
        or(
          GLOBALS.alt_flag,
          readchr(
            GLOBALS.inchan)),
        LOCALS.vc = lex(
            LOCALS.inbuf,
            rest(
              LOCALS.inbuf,
              LOCALS.inplen),
            t)] /*)*/),
    cond(
      /*(*/ [g_Q(
          LOCALS.inplen,
          0),
        GLOBALS.moves = _(
            GLOBALS.moves,
            1),
        cond(
          /*(*/ [GLOBALS.parse_won = and(
                eparse(
                  or(
                    LOCALS.ivec,
                    LOCALS.vc),
                  null),
                type_Q(
                  LOCALS.cv = 1(
                      LOCALS.rvec = GLOBALS.prsvec),
                  verb)),
            cond(
              /*(*/ [not(
                  LOCALS.random_action = aaction(
                      LOCALS.winner))] /*)*/,
              /*(*/ [apply_random(
                  LOCALS.random_action),
                return(
                  )] /*)*/),
            and(
              LOCALS.av = avehicle(
                  LOCALS.winner),
              LOCALS.random_action = oaction(
                  LOCALS.av),
              LOCALS.vval = not(
                  apply_random(
                    LOCALS.random_action,
                    read_in))),
            cond(
              /*(*/ [and(
                  LOCALS.vval,
                  LOCALS.random_action = vfcn(
                      LOCALS.cv),
                  apply_random(
                    LOCALS.random_action)),
                cond(
                  /*(*/ [and(
                      LOCALS.random_action = raction(
                          LOCALS.rm = GLOBALS.here),
                      apply_random(
                        LOCALS.random_action))] /*)*/)] /*)*/)] /*)*/,
          /*(*/ [LOCALS.ivec,
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
          /*(*/ [LOCALS.random_action = haction(
                LOCALS.x),
            apply_random(
              LOCALS.random_action,
              LOCALS.x)] /*)*/)
        },
      GLOBALS.demons),
    and(
      GLOBALS.parse_won,
      LOCALS.av = avehicle(
          LOCALS.winner),
      LOCALS.random_action = oaction(
          LOCALS.av),
      apply_random(
        LOCALS.random_action,
        read_out)),
    and(
      LOCALS.ivec,
      return(
        )))
  }

FUNCTIONS.score_obj = 
  (obj) => {
    
    let temp = null;
    cond(
    /*(*/ [g_Q(
        LOCALS.temp = ofval(
            LOCALS.obj),
        0),
      score_upd(
        LOCALS.temp),
      put(
        LOCALS.obj,
        GLOBALS.ofval,
        0)] /*)*/)
  }

FUNCTIONS.score_room = 
  (rm) => {
    
    let temp = null;
    cond(
    /*(*/ [g_Q(
        LOCALS.temp = rval(
            LOCALS.rm),
        0),
      score_upd(
        LOCALS.temp),
      put(
        LOCALS.rm,
        GLOBALS.rval,
        0)] /*)*/)
  }

FUNCTIONS.score_upd = 
  (num) => {
    
    let winner = GLOBALS.winner;
    put(
    LOCALS.winner,
    GLOBALS.ascore,
    _(
      ascore(
        LOCALS.winner),
      LOCALS.num))
GLOBALS.raw_score = _(
      GLOBALS.raw_score,
      LOCALS.num)
  }

FUNCTIONS.score = 
  (ask_Q?) => {
    
    let scor = null;
    let outchan = LOCALS.outchan;
    let pct = null;
    GLOBALS.tell_flag = t
crlf(
    )
cond(
    /*(*/ [LOCALS.ask_Q,
      princ(
        "Your score would be")] /*)*/,
    /*(*/ [princ(
        "Your score is")] /*)*/)
prin1(
    LOCALS.scor = ascore(
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
LOCALS.pct = _(
      float(
        LOCALS.scor),
      float(
        GLOBALS.score_max))
princ(
    cond(
      /*(*/ [1_Q(
          LOCALS.pct),
        "Cheater"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_95000000),
        "Wizard"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_89999999),
        "Master"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_79999999),
        "Winner"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_60000000),
        "Hacker"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_39999999),
        "Adventurer"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_19999999),
        "Junior Adventurer"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
          0_09999999),
        "Novice Adventurer"] /*)*/,
      /*(*/ [g_Q(
          LOCALS.pct,
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
      LOCALS.scor = score(
          LOCALS.ask_Q),
      cond(
        /*(*/ [or(
            and(
              LOCALS.ask_Q,
              tell(
                "Do you wish to leave the game? (Y is affirmative):"),
              yes_no(
                null)),
            not(
              LOCALS.ask_Q)),
          record(
            LOCALS.scor,
            GLOBALS.moves,
            GLOBALS.deaths,
            LOCALS.ask_Q,
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
          /*(*/ [LOCALS.ch = open(
                "READB",
                "ZORK",
                "LOG",
                LOCALS.dev,
                LOCALS.snm),
            cond(
              /*(*/ [g__Q(
                  LOCALS.fl = file_length(
                      LOCALS.ch),
                  1),
                access(
                  LOCALS.ch,
                  _(
                    LOCALS.fl,
                    1)),
                LOCALS.ct = readstring(
                    LOCALS.str,
                    LOCALS.ch,
                    GLOBALS.recorder_string)] /*)*/),
            close(
              LOCALS.ch),
            cond(
              /*(*/ [LOCALS.ch = open(
                    "PRINTO",
                    "ZORK",
                    "LOG",
                    LOCALS.dev,
                    LOCALS.snm)] /*)*/,
              /*(*/ [and(
                  g_Q(
                    LOCALS.muddle,
                    100),
                  _EQ_Q(
                    3(
                      LOCALS.ch),
                    _600123_)),
                // Can't win--no write access,
                return(
                  t,
                  LOCALS.record)] /*)*/,
              /*(*/ [t,
                sleep(
                  1),
                again(
                  )] /*)*/),
            access(
              LOCALS.ch,
              max(
                0,
                _(
                  LOCALS.fl,
                  1))),
            printstring(
              LOCALS.str,
              LOCALS.ch,
              LOCALS.ct)] /*)*/,
          /*(*/ [or(
              and(
                l_Q(
                  LOCALS.muddle,
                  100),
                n_EQ_Q(
                  3(
                    LOCALS.ch),
                  _4000000_)),
              and(
                g_Q(
                  LOCALS.muddle,
                  100),
                _EQ_Q(
                  3(
                    LOCALS.ch),
                  _600130_))),
            // on 10x, must get FILE BUSY to try again,
            sleep(
              1),
            again(
              )] /*)*/,
          /*(*/ [LOCALS.ch = open(
                "PRINT",
                "ZORK",
                "LOG",
                LOCALS.dev,
                LOCALS.snm)] /*)*/,
          /*(*/ [and(
              g_Q(
                LOCALS.muddle,
                100),
              _EQ_Q(
                3(
                  LOCALS.ch),
                _600117_)),
            // No write access,
            return(
              t,
              LOCALS.record)] /*)*/,
          /*(*/ [return(
              t,
              LOCALS.record)] /*)*/)),
      crlf(
        LOCALS.ch),
      princ(
        "",
        LOCALS.ch),
      princ(
        GLOBALS.user_name,
        LOCALS.ch),
      cond(
        /*(*/ [n__Q(
            GLOBALS.user_name,
            GLOBALS.xunm),
          princ(
            "(",
            LOCALS.ch),
          princ(
            GLOBALS.xunm,
            LOCALS.ch),
          princ(
            _X__,
            LOCALS.ch)] /*)*/),
      princ(
        "",
        LOCALS.ch),
      pdskdate(
        dskdate(
          ),
        LOCALS.ch),
      crlf(
        LOCALS.ch),
      play_time(
        LOCALS.ch,
        null),
      crlf(
        LOCALS.ch),
      prin1(
        LOCALS.score,
        LOCALS.ch),
      princ(
        _X__,
        LOCALS.ch),
      prin1(
        GLOBALS.score_max,
        LOCALS.ch),
      princ(
        "points,",
        LOCALS.ch),
      prin1(
        LOCALS.moves,
        LOCALS.ch),
      princ(
        "moves,",
        LOCALS.ch),
      prin1(
        LOCALS.deaths,
        LOCALS.ch),
      princ(
        "death",
        LOCALS.ch),
      cond(
        /*(*/ [1_Q(
            LOCALS.deaths),
          princ(
            ".",
            LOCALS.ch)] /*)*/,
        /*(*/ [t,
          princ(
            "s.",
            LOCALS.ch)] /*)*/),
      princ(
        "In",
        LOCALS.ch),
      princ(
        rdesc2(
          LOCALS.loc),
        LOCALS.ch),
      cond(
        /*(*/ [LOCALS.quit_Q,
          princ(
            ". Quit.",
            LOCALS.ch)] /*)*/,
        /*(*/ [empty_Q(
            LOCALS.quit_Q),
          princ(
            ". Died.",
            LOCALS.ch)] /*)*/,
        /*(*/ [princ(
            1(
              LOCALS.quit_Q),
            LOCALS.ch)] /*)*/),
      crlf(
        LOCALS.ch),
      mapf(
        null,
        /* FUNCTION */
          (x,
            y) => {
            
            cond(
            /*(*/ [/*,*/ [LOCALS.x] /*1*/,
              princ(
                "/",
                LOCALS.ch),
              princ(
                LOCALS.y,
                LOCALS.ch)] /*)*/)
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
                /*,*/ [LOCALS.x] /*1*/),
              princ(
                "/",
                LOCALS.ch),
              princ(
                LOCALS.y,
                LOCALS.ch)] /*)*/)
          },
        GLOBALS.val_names,
        GLOBALS.short_val_names),
      crlf(
        LOCALS.ch),
      close(
        LOCALS.ch)),
    and(
      LOCALS.ch,
      not(
        0_Q(
          1(
            LOCALS.ch))),
      close(
        LOCALS.ch))))

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
          LOCALS.wd,
          bits(
            18,
            0)),
        fix);
    let a_p = "AM";
    let hr = null;
    princ(
    "",
    LOCALS.ch)
cond(
    /*(*/ [0_Q(
        chtype(
          LOCALS.wd,
          fix)),
      princ(
        "unknown",
        LOCALS.ch)] /*)*/,
    /*(*/ [t,
      princ(
        nth(
          GLOBALS.months,
          chtype(
            getbits(
              LOCALS.wd,
              bits(
                4,
                23)),
            fix)),
        LOCALS.ch),
      princ(
        "",
        LOCALS.ch),
      prin1(
        chtype(
          getbits(
            LOCALS.wd,
            bits(
              5,
              18)),
          fix),
        LOCALS.ch),
      princ(
        "at",
        LOCALS.ch),
      LOCALS.hr = _(
          LOCALS.tim,
          7200),
      cond(
        /*(*/ [g__Q(
            LOCALS.hr,
            12),
          LOCALS.hr = _(
              LOCALS.hr,
              12),
          LOCALS.a_p = "PM"] /*)*/),
      cond(
        /*(*/ [0_Q(
            LOCALS.hr),
          LOCALS.hr = 12] /*)*/),
      prin1(
        LOCALS.hr,
        LOCALS.ch),
      princ(
        ":",
        LOCALS.ch),
      LOCALS.hr = _(
          mod(
            LOCALS.tim,
            7200),
          120),
      cond(
        /*(*/ [l_Q(
            LOCALS.hr,
            10),
          princ(
            "0",
            LOCALS.ch)] /*)*/),
      prin1(
        LOCALS.hr,
        LOCALS.ch),
      princ(
        LOCALS.a_p,
        LOCALS.ch)] /*)*/)
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
        LOCALS.winner);
    let random_list = GLOBALS.random_list;
    let lamp = find_obj(
        "LAMP");
    let lamp_location = null;
    let val_list = /*(*/ [] /*)*/;
    let lc = null;
    cond(
    /*(*/ [GLOBALS.dbg,
      tell(
        LOCALS.desc)] /*)*/,
    /*(*/ [unwind(
        prog(
          /*(*/ [] /*)*/,
          cond(
            /*(*/ [n_EQ_Q(
                LOCALS.winner,
                GLOBALS.player),
              tell(
                LOCALS.desc),
              tell(
                "The",
                1,
                odesc2(
                  aobj(
                    LOCALS.winner)),
                "has died."),
              remove_object(
                aobj(
                  LOCALS.winner)),
              put(
                LOCALS.winner,
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
            LOCALS.winner,
            GLOBALS.avehicle,
            null),
          cond(
            /*(*/ [g__Q(
                LOCALS.deaths,
                2),
              tell(
                LOCALS.desc),
              tell(
                "You clearly are a suicidal maniac.  We don't allow psychotics in the\ncave, since they may harm other adventurers.  Your remains will\ninstalled in the Land of the Living Dead, where your fellow adventurers \nmay gloat over them."),
              finish(
                null)] /*)*/,
            /*(*/ [GLOBALS.deaths = _(
                  LOCALS.deaths,
                  1),
              tell(
                LOCALS.desc),
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
                    /*(*/ [LOCALS.lamp_location = oroom(
                          LOCALS.lamp),
                      put(
                        LOCALS.winner,
                        GLOBALS.aobjs,
                        /*(*/ [LOCALS.lamp,
                          _X,
                          LOCALS.aobjs] /*)*/),
                      cond(
                        /*(*/ [memq(
                            LOCALS.lamp,
                            robjs(
                              LOCALS.lamp_location)),
                          remove_object(
                            LOCALS.lamp)] /*)*/,
                        /*(*/ [LOCALS.lc = ocan(
                              LOCALS.lamp),
                          put(
                            LOCALS.lc,
                            GLOBALS.ocontents,
                            splice_out(
                              LOCALS.lamp,
                              ocontents(
                                LOCALS.lc))),
                          put(
                            LOCALS.lamp,
                            GLOBALS.oroom,
                            null),
                          put(
                            LOCALS.lamp,
                            GLOBALS.ocan,
                            null)] /*)*/)] /*)*/,
                    /*(*/ [memq(
                        LOCALS.lamp,
                        LOCALS.aobjs),
                      put(
                        LOCALS.winner,
                        GLOBALS.aobjs,
                        /*(*/ [LOCALS.lamp,
                          _X,
                          splice_out(
                            LOCALS.lamp,
                            LOCALS.aobjs)] /*)*/)] /*)*/),
                  put(
                    find_obj(
                      "DOOR"),
                    GLOBALS.otouch_Q,
                    null),
                  goto(
                    find_room(
                      "FORE1")),
                  GLOBALS.egypt_flag_X_flag = t,
                  LOCALS.val_list = rob_adv(
                      LOCALS.winner,
                      LOCALS.val_list),
                  mapf(
                    null,
                    /* FUNCTION */
                      (x,
                        y) => {
                        
                        insert_object(
                        LOCALS.x,
                        LOCALS.y)
                      },
                    LOCALS.aobjs = aobjs(
                        LOCALS.winner),
                    LOCALS.random_list),
                  cond(
                    /*(*/ [g__Q(
                        length(
                          LOCALS.random_list),
                        length(
                          LOCALS.aobjs)),
                      LOCALS.aobjs = LOCALS.val_list] /*)*/,
                    /*(*/ [empty_Q(
                        LOCALS.val_list),
                      LOCALS.aobjs = rest(
                          LOCALS.aobjs,
                          length(
                            LOCALS.random_list))] /*)*/,
                    /*(*/ [t,
                      putrest(
                        rest(
                          LOCALS.val_list,
                          _(
                            length(
                              LOCALS.val_list),
                            1)),
                        rest(
                          LOCALS.aobjs,
                          length(
                            LOCALS.random_list))),
                      LOCALS.aobjs = LOCALS.val_list] /*)*/),
                  mapf(
                    null,
                    /* FUNCTION */
                      (x,
                        y) => {
                        
                        insert_object(
                        LOCALS.x,
                        LOCALS.y)
                      },
                    LOCALS.aobjs,
                    GLOBALS.rooms),
                  put(
                    LOCALS.winner,
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
        LOCALS.file1,
        LOCALS.file2,
        LOCALS.dev,
        LOCALS.snm);
    let len = null;
    let buf = GLOBALS.inbuf;
    let buflen = length(
        LOCALS.buf);
    let iter = null;
    cond(
    /*(*/ [LOCALS.ch,
      unwind(
        prog(
          /*(*/ [] /*)*/,
          LOCALS.len = file_length(
              LOCALS.ch),
          LOCALS.iter = _(
              LOCALS.len,
              LOCALS.buflen),
          or(
            0_Q(
              mod(
                LOCALS.len,
                LOCALS.buflen)),
            LOCALS.iter = _(
                LOCALS.iter,
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
                  LOCALS.iter),
                LOCALS.slen = readstring(
                    LOCALS.buf,
                    LOCALS.ch,
                    GLOBALS.breaks)] /*)*/,
              /*(*/ [LOCALS.slen = readstring(
                    LOCALS.buf,
                    LOCALS.ch,
                    LOCALS.buflen)] /*)*/),
            printstring(
              LOCALS.buf,
              GLOBALS.outchan,
              LOCALS.slen),
            cond(
              /*(*/ [0_Q(
                  LOCALS.iter = _(
                      LOCALS.iter,
                      1)),
                crlf(
                  GLOBALS.outchan),
                return(
                  close(
                    LOCALS.ch))] /*)*/))),
        close(
          LOCALS.ch))] /*)*/,
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
            LOCALS.x),
          or(
            LOCALS.any,
            prog(
              /*(*/ [] /*)*/,
              cond(
                /*(*/ [_EQ_Q(
                    LOCALS.win,
                    GLOBALS.player),
                  tell(
                    "You are carrying:")] /*)*/,
                /*(*/ [tell(
                    "The",
                    1,
                    odesc2(
                      aobj(
                        LOCALS.win)),
                    "is carrying:")] /*)*/),
              LOCALS.any = t)),
          tell(
            "A",
            0,
            odesc2(
              LOCALS.x)),
          cond(
            /*(*/ [or(
                empty_Q(
                  ocontents(
                    LOCALS.x)),
                not(
                  see_inside_Q(
                    LOCALS.x)))] /*)*/,
            /*(*/ [tell(
                "with",
                0),
              print_contents(
                ocontents(
                  LOCALS.x))] /*)*/),
          crlf(
            )] /*)*/)
      },
    aobjs(
      LOCALS.win))
or(
    LOCALS.any,
    n_EQ_Q(
      LOCALS.win,
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
          1(
            LOCALS.y)))
cond(
        /*(*/ [g_Q(
            length(
              LOCALS.y),
            2),
          princ(
            ",")] /*)*/,
        /*(*/ [_EQ_Q(
            length(
              LOCALS.y),
            2),
          princ(
            ", and")] /*)*/)
      },
    LOCALS.olst)
  }

// LIT? --  IS THERE ANY LIGHT SOURCE IN THIS ROOM

FUNCTIONS.lit_Q = 
  (rm) => {
    
    let win = GLOBALS.winner;
    or(
    rlight_Q(
      LOCALS.rm),
    lfcn(
      robjs(
        LOCALS.rm)),
    lfcn(
      aobjs(
        LOCALS.win)),
    and(
      n_EQ_Q(
        LOCALS.win,
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
            LOCALS.x),
          0),
        mapleave(
          t))
cond(
        /*(*/ [and(
            ovis_Q(
              LOCALS.x),
            or(
              oopen_Q(
                LOCALS.x),
              transparent_Q(
                LOCALS.x))),
          mapf(
            null,
            /* FUNCTION */
              (x) => {
                
                cond(
                /*(*/ [g_Q(
                    olight_Q(
                      LOCALS.x),
                    0),
                  return(
                    t,
                    LOCALS.lfcn)] /*)*/)
              },
            ocontents(
              LOCALS.x))] /*)*/)
cond(
        /*(*/ [and(
            trnn(
              LOCALS.x,
              GLOBALS.actorbit),
            lfcn(
              aobjs(
                LOCALS.y = orand(
                    LOCALS.x)))),
          mapleave(
            t)] /*)*/)
      },
    LOCALS.l))

// WALK --  GIVEN A DIRECTION, WILL ATTEMPT TO WALK THERE

FUNCTIONS.walk = 
  () => {
    
    let leavings = null;
    let nrm = null;
    let where = chtype(
        2(
          GLOBALS.prsvec),
        atom);
    let me = GLOBALS.winner;
    let rm = 1(
        LOCALS.me);
    let nl = null;
    let random_action = null;
    let cxs = null;
    cond(
    /*(*/ [and(
        _EQ_Q(
          LOCALS.me,
          GLOBALS.player),
        not(
          lit_Q(
            LOCALS.rm)),
        prob(
          75)),
      cond(
        /*(*/ [LOCALS.nrm = memq(
              LOCALS.where,
              rexits(
                LOCALS.rm)),
          LOCALS.leavings = 2(
              LOCALS.nrm),
          cond(
            /*(*/ [and(
                type_Q(
                  LOCALS.leavings,
                  room),
                lit_Q(
                  LOCALS.leavings)),
              and(
                goto(
                  LOCALS.leavings),
                room_info(
                  null))] /*)*/,
            /*(*/ [and(
                type_Q(
                  LOCALS.leavings,
                  cexit),
                LOCALS.leavings = cond(
                    /*(*/ [and(
                        LOCALS.random_action = cxaction(
                            LOCALS.leavings),
                        apply_random(
                          LOCALS.random_action))] /*)*/,
                    /*(*/ [/*,*/ [cxflag(
                          LOCALS.leavings)] /*1*/,
                      cxroom(
                        LOCALS.leavings)] /*)*/),
                lit_Q(
                  LOCALS.leavings)),
              or(
                type_Q(
                  LOCALS.leavings,
                  atom),
                and(
                  goto(
                    LOCALS.leavings),
                  room_info(
                    null)))] /*)*/,
            /*(*/ [jigs_up(
                "Oh, no!  A fearsome grue slithered into the room and devoured you.")] /*)*/)] /*)*/,
        /*(*/ [jigs_up(
            "Oh, no!  You walked into the slavering fangs of a lurking grue.")] /*)*/)] /*)*/,
    /*(*/ [LOCALS.nrm = memq(
          LOCALS.where,
          rexits(
            LOCALS.rm)),
      LOCALS.leavings = 2(
          LOCALS.nrm),
      cond(
        /*(*/ [type_Q(
            LOCALS.leavings,
            room),
          and(
            goto(
              LOCALS.leavings),
            room_info(
              null))] /*)*/,
        /*(*/ [type_Q(
            LOCALS.leavings,
            cexit),
          cond(
            /*(*/ [or(
                and(
                  LOCALS.random_action = cxaction(
                      LOCALS.leavings),
                  LOCALS.nl = apply_random(
                      LOCALS.random_action)),
                and(
                  /*,*/ [cxflag(
                      LOCALS.leavings)] /*1*/,
                  LOCALS.nl = cxroom(
                      LOCALS.leavings))),
              or(
                type_Q(
                  LOCALS.nl,
                  atom),
                and(
                  goto(
                    LOCALS.nl),
                  room_info(
                    null)))] /*)*/,
            /*(*/ [LOCALS.cxs = cxstr(
                  LOCALS.leavings),
              or(
                empty_Q(
                  LOCALS.cxs),
                tell(
                  LOCALS.cxs))] /*)*/,
            /*(*/ [tell(
                "There is no way to go in that direction.")] /*)*/)] /*)*/,
        /*(*/ [t,
          tell(
            LOCALS.leavings)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "There is no way to go in that direction.")] /*)*/)
  }

FUNCTIONS.take = 
  (take_Q?) => {
    
    let win = GLOBALS.winner;
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        LOCALS.win);
    let nobj = null;
    let obj = 2(
        LOCALS.vec);
    let getter_Q = null;
    let robjs = robjs(
        LOCALS.rm);
    let aobjs = aobjs(
        LOCALS.win);
    let load_max = GLOBALS.load_max;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [trnn(
          LOCALS.obj,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [ocan(
          LOCALS.obj),
        LOCALS.nobj = ocan(
            LOCALS.obj),
        cond(
          /*(*/ [see_inside_Q(
              LOCALS.nobj),
            cond(
              /*(*/ [oopen_Q(
                  LOCALS.nobj),
                LOCALS.getter_Q = t] /*)*/,
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
          LOCALS.obj,
          avehicle(
            LOCALS.win)),
        tell(
          "You are in it, loser!"),
        return(
          null)] /*)*/,
      /*(*/ [not(
          can_take_Q(
            LOCALS.obj)),
        or(
          apply_object(
            LOCALS.obj),
          tell(
            pick_one(
              GLOBALS.yuks))),
        return(
          null)] /*)*/,
      /*(*/ [or(
          LOCALS.getter_Q,
          memq(
            LOCALS.obj,
            LOCALS.robjs)),
        LOCALS.load_max = _(
            LOCALS.load_max,
            fix(
              _(
                _(
                  1_0,
                  LOCALS.load_max),
                astrength(
                  LOCALS.win)))),
        cond(
          /*(*/ [and(
              LOCALS.getter_Q,
              memq(
                LOCALS.nobj,
                LOCALS.aobjs))] /*)*/,
          /*(*/ [g_Q(
              _(
                weight(
                  LOCALS.aobjs),
                weight(
                  ocontents(
                    LOCALS.obj)),
                osize(
                  LOCALS.obj)),
              LOCALS.load_max),
            tell(
              "Your load is too heavy.  You will have to leave something behind."),
            return(
              null)] /*)*/),
        cond(
          /*(*/ [not(
              apply_object(
                LOCALS.obj)),
            cond(
              /*(*/ [LOCALS.getter_Q,
                put(
                  LOCALS.nobj,
                  GLOBALS.ocontents,
                  splice_out(
                    LOCALS.obj,
                    ocontents(
                      LOCALS.nobj))),
                put(
                  LOCALS.obj,
                  GLOBALS.oroom,
                  null),
                put(
                  LOCALS.obj,
                  GLOBALS.ocan,
                  null)] /*)*/,
              /*(*/ [remove_object(
                  LOCALS.obj)] /*)*/),
            put(
              LOCALS.win,
              GLOBALS.aobjs,
              /*(*/ [LOCALS.obj,
                _X,
                LOCALS.aobjs] /*)*/),
            put(
              LOCALS.obj,
              GLOBALS.otouch_Q,
              t),
            score_obj(
              LOCALS.obj),
            cond(
              /*(*/ [LOCALS.take_Q,
                tell(
                  "Taken.")] /*)*/,
              /*(*/ [t] /*)*/)] /*)*/,
          /*(*/ [t] /*)*/)] /*)*/,
      /*(*/ [memq(
          LOCALS.obj,
          LOCALS.aobjs),
        tell(
          "You already have it.")] /*)*/,
      /*(*/ [tell(
          "I can't see one here."),
        null] /*)*/))
  }

FUNCTIONS.putter = 
  (objact?) => {
    
    let pv = GLOBALS.prsvec;
    let objo = 2(
        LOCALS.pv);
    let obji = 3(
        LOCALS.pv);
    let win = GLOBALS.winner;
    let aobjs = aobjs(
        LOCALS.win);
    let crock = null;
    let can = null;
    let robjs = robjs(
        GLOBALS.here);
    let ocan = null;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [trnn(
          LOCALS.objo,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [or(
          memq(
            LOCALS.objo,
            GLOBALS.stars),
          memq(
            LOCALS.obji,
            GLOBALS.stars)),
        tell(
          "Nice try."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [or(
          oopen_Q(
            LOCALS.obji),
          openable_Q(
            LOCALS.obji),
          trnn(
            LOCALS.obji,
            GLOBALS.vehbit)),
        LOCALS.can = LOCALS.obji,
        LOCALS.crock = LOCALS.objo] /*)*/,
      /*(*/ [tell(
          "I can't do that."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [not(
          oopen_Q(
            LOCALS.can)),
        tell(
          "I can't reach inside."),
        return(
          null)] /*)*/,
      /*(*/ [_EQ_Q(
          LOCALS.can,
          LOCALS.crock),
        tell(
          "How can you do that?"),
        return(
          null)] /*)*/,
      /*(*/ [g_Q(
          _(
            weight(
              ocontents(
                LOCALS.can)),
            osize(
              LOCALS.crock)),
          ocapac(
            LOCALS.can)),
        tell(
          "It won't fit."),
        return(
          null)] /*)*/),
    cond(
      /*(*/ [or(
          memq(
            LOCALS.crock,
            LOCALS.robjs),
          and(
            LOCALS.ocan = ocan(
                LOCALS.crock),
            memq(
              LOCALS.ocan,
              LOCALS.robjs)),
          and(
            LOCALS.ocan,
            LOCALS.ocan = ocan(
                LOCALS.ocan),
            memq(
              LOCALS.ocan,
              LOCALS.robjs))),
        put(
          LOCALS.pv,
          1,
          GLOBALS.take_X_words),
        put(
          LOCALS.pv,
          2,
          LOCALS.crock),
        put(
          LOCALS.pv,
          3,
          null),
        cond(
          /*(*/ [not(
              take(
                null)),
            return(
              null)] /*)*/,
          /*(*/ [LOCALS.aobjs = aobjs(
                LOCALS.win)] /*)*/)] /*)*/,
      /*(*/ [LOCALS.ocan = ocan(
            LOCALS.crock),
        cond(
          /*(*/ [oopen_Q(
              LOCALS.ocan),
            put(
              LOCALS.win,
              GLOBALS.aobjs,
              LOCALS.aobjs = /*(*/ [LOCALS.crock,
                  _X,
                  LOCALS.aobjs] /*)*/),
            put(
              LOCALS.ocan,
              GLOBALS.ocontents,
              splice_out(
                LOCALS.crock,
                ocontents(
                  LOCALS.ocan))),
            put(
              LOCALS.crock,
              GLOBALS.ocan,
              null)] /*)*/,
          /*(*/ [tell(
              "I can't reach the",
              1,
              odesc2(
                LOCALS.crock)),
            return(
              null)] /*)*/)] /*)*/),
    put(
      LOCALS.pv,
      1,
      GLOBALS.put_X_words),
    put(
      LOCALS.pv,
      2,
      LOCALS.crock),
    put(
      LOCALS.pv,
      3,
      LOCALS.can),
    cond(
      /*(*/ [and(
          LOCALS.objact,
          object_action(
            )),
        return(
          )] /*)*/,
      /*(*/ [put(
          LOCALS.win,
          GLOBALS.aobjs,
          splice_out(
            LOCALS.crock,
            LOCALS.aobjs)),
        put(
          LOCALS.can,
          GLOBALS.ocontents,
          /*(*/ [LOCALS.crock,
            _X,
            ocontents(
              LOCALS.can)] /*)*/),
        put(
          LOCALS.crock,
          GLOBALS.ocan,
          LOCALS.can),
        put(
          LOCALS.crock,
          GLOBALS.oroom,
          GLOBALS.here),
        tell(
          "Done.")] /*)*/))
  }

FUNCTIONS.dropper = 
  () => {
    
    let winner = GLOBALS.winner;
    let av = avehicle(
        LOCALS.winner);
    let aobjs = aobjs(
        LOCALS.winner);
    let getter_Q = null;
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        LOCALS.winner);
    let obj = 2(
        LOCALS.vec);
    let pi = 3(
        LOCALS.vec);
    let nobj = null;
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [and(
          memq(
            vname(
              1(
                LOCALS.vec)),
            () => /*[*/ [drop_X_words,
                pour_X_words] /*]*/),
          LOCALS.pi),
        put(
          LOCALS.vec,
          1,
          GLOBALS.put_X_words),
        return(
          putter(
            ))] /*)*/,
      /*(*/ [and(
          LOCALS.pi,
          not(
            or(
              memq(
                LOCALS.obj,
                LOCALS.aobjs),
              memq(
                ocan(
                  LOCALS.obj),
                LOCALS.aobjs)))),
        put(
          LOCALS.vec,
          2,
          LOCALS.pi),
        put(
          LOCALS.vec,
          3,
          LOCALS.obj),
        LOCALS.obj = 2(
            LOCALS.vec)] /*)*/),
    cond(
      /*(*/ [trnn(
          LOCALS.obj,
          GLOBALS.no_check_bit),
        return(
          object_action(
            ))] /*)*/),
    cond(
      /*(*/ [and(
          ocan(
            LOCALS.obj),
          LOCALS.nobj = ocan(
              LOCALS.obj),
          memq(
            LOCALS.nobj,
            LOCALS.aobjs)),
        cond(
          /*(*/ [oopen_Q(
              LOCALS.nobj),
            LOCALS.getter_Q = t] /*)*/,
          /*(*/ [transparent_Q(
              LOCALS.nobj),
            tell(
              "I can't reach that."),
            return(
              )] /*)*/,
          /*(*/ [tell(
              "I can't see that here.")] /*)*/)] /*)*/),
    cond(
      /*(*/ [or(
          LOCALS.getter_Q,
          memq(
            LOCALS.obj,
            LOCALS.aobjs)),
        cond(
          /*(*/ [LOCALS.av] /*)*/,
          /*(*/ [LOCALS.getter_Q,
            put(
              LOCALS.nobj,
              GLOBALS.ocontents,
              splice_out(
                LOCALS.obj,
                ocontents(
                  LOCALS.nobj))),
            put(
              LOCALS.obj,
              GLOBALS.ocan,
              null)] /*)*/,
          /*(*/ [put(
              LOCALS.winner,
              GLOBALS.aobjs,
              splice_out(
                LOCALS.obj,
                LOCALS.aobjs))] /*)*/),
        cond(
          /*(*/ [LOCALS.av,
            put(
              LOCALS.vec,
              2,
              LOCALS.obj),
            put(
              LOCALS.vec,
              3,
              LOCALS.av),
            putter(
              null)] /*)*/,
          /*(*/ [insert_object(
              LOCALS.obj,
              LOCALS.rm)] /*)*/),
        cond(
          /*(*/ [object_action(
              )] /*)*/,
          /*(*/ [_EQ_Q(
              vname(
                1(
                  LOCALS.vec)),
              drop_X_words),
            tell(
              "Dropped.")] /*)*/,
          /*(*/ [_EQ_Q(
              vname(
                1(
                  LOCALS.vec)),
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
    let pa = 1(
        LOCALS.prsvec);
    let ra = vfcn(
        LOCALS.pa);
    let pi = null;
    let winner = GLOBALS.winner;
    let here = GLOBALS.here;
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [or(
                can_take_Q(
                  LOCALS.x),
                trnn(
                  LOCALS.x,
                  GLOBALS.trytakebit)),
              put(
                LOCALS.prsvec,
                2,
                LOCALS.x),
              tell(
                odesc2(
                  LOCALS.x),
                0,
                ":"),
              apply_random(
                LOCALS.ra),
              cond(
                /*(*/ [n_EQ_Q(
                    LOCALS.here,
                    aroom(
                      LOCALS.winner)),
                  mapleave(
                    )] /*)*/)] /*)*/)
          },
        LOCALS.uv)] /*)*/,
    /*(*/ [or(
        _EQ_Q(
          LOCALS.pa,
          GLOBALS.drop_X_words),
        _EQ_Q(
          LOCALS.pa,
          GLOBALS.put_X_words)),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            put(
            LOCALS.prsvec,
            2,
            LOCALS.x)
tell(
            odesc2(
              LOCALS.x),
            0,
            ":")
apply_random(
            LOCALS.ra)
cond(
            /*(*/ [n_EQ_Q(
                LOCALS.here,
                aroom(
                  LOCALS.winner)),
              mapleave(
                )] /*)*/)
          },
        LOCALS.uv)] /*)*/)
  }

psetg(
  losstr,
  "I can't do everything, because I ran out of room.")

FUNCTIONS.everything = 
  () => {
    
    let prsvec = GLOBALS.prsvec;
    let pa = 1(
        LOCALS.prsvec);
    let pi = null;
    let suv = GLOBALS.obj_uv;
    let tuv = top(
        LOCALS.suv);
    let lu = length(
        LOCALS.tuv);
    let here = GLOBALS.here;
    let winner = GLOBALS.winner;
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [and(
                ovis_Q(
                  LOCALS.x),
                not(
                  trnn(
                    LOCALS.x,
                    GLOBALS.actorbit))),
              cond(
                /*(*/ [_EQ_Q(
                    LOCALS.suv,
                    LOCALS.tuv),
                  tell(
                    GLOBALS.losstr),
                  mapleave(
                    )] /*)*/),
              LOCALS.suv = back(
                  LOCALS.suv),
              put(
                LOCALS.suv,
                1,
                LOCALS.x)] /*)*/)
          },
        robjs(
          LOCALS.here))] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.drop_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            LOCALS.suv = back(
              LOCALS.suv)
put(
            LOCALS.suv,
            1,
            LOCALS.x)
          },
        aobjs(
          LOCALS.winner))] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.put_X_words),
      LOCALS.pi = 3(
          LOCALS.prsvec),
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
                    LOCALS.x),
                  n_EQ_Q(
                    LOCALS.x,
                    LOCALS.pi),
                  not(
                    trnn(
                      LOCALS.x,
                      GLOBALS.actorbit))),
                cond(
                  /*(*/ [_EQ_Q(
                      LOCALS.suv,
                      LOCALS.tuv),
                    tell(
                      GLOBALS.losstr),
                    return(
                      t,
                      LOCALS.rp)] /*)*/),
                LOCALS.suv = back(
                    LOCALS.suv),
                put(
                  LOCALS.suv,
                  1,
                  LOCALS.x)] /*)*/)
            },
          robjs(
            LOCALS.here)),
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  _EQ_Q(
                    LOCALS.suv,
                    LOCALS.tuv),
                  n_EQ_Q(
                    LOCALS.x,
                    LOCALS.pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  LOCALS.rp)] /*)*/)
LOCALS.suv = back(
                LOCALS.suv)
put(
              LOCALS.suv,
              1,
              LOCALS.x)
            },
          aobjs(
            LOCALS.winner)))] /*)*/)
cond(
    /*(*/ [empty_Q(
        LOCALS.suv),
      tell(
        "I couldn't find anything.")] /*)*/,
    /*(*/ [frob_lots(
        LOCALS.suv)] /*)*/)
  }

FUNCTIONS.valuables = 
  () => {
    
    let prsvec = GLOBALS.prsvec;
    let pa = 1(
        LOCALS.prsvec);
    let suv = GLOBALS.obj_uv;
    let tuv = top(
        LOCALS.suv);
    let pi = null;
    let lu = length(
        LOCALS.tuv);
    let here = GLOBALS.here;
    let winner = GLOBALS.winner;
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.take_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [and(
                ovis_Q(
                  LOCALS.x),
                not(
                  trnn(
                    LOCALS.x,
                    GLOBALS.actorbit)),
                not(
                  0_Q(
                    otval(
                      LOCALS.x)))),
              cond(
                /*(*/ [_EQ_Q(
                    LOCALS.suv,
                    LOCALS.tuv),
                  tell(
                    GLOBALS.losstr),
                  mapleave(
                    )] /*)*/),
              LOCALS.suv = back(
                  LOCALS.suv),
              put(
                LOCALS.suv,
                1,
                LOCALS.x)] /*)*/)
          },
        robjs(
          LOCALS.here))] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.drop_X_words),
      mapf(
        null,
        /* FUNCTION */
          (x) => {
            
            cond(
            /*(*/ [not(
                0_Q(
                  otval(
                    LOCALS.x))),
              LOCALS.suv = back(
                  LOCALS.suv),
              put(
                LOCALS.suv,
                1,
                LOCALS.x)] /*)*/)
          },
        aobjs(
          LOCALS.winner))] /*)*/,
    /*(*/ [_EQ_Q(
        LOCALS.pa,
        GLOBALS.put_X_words),
      LOCALS.pi = 3(
          LOCALS.prsvec),
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
                    LOCALS.suv,
                    LOCALS.tuv),
                  n_EQ_Q(
                    LOCALS.x,
                    LOCALS.pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  LOCALS.rp)] /*)*/)
cond(
              /*(*/ [and(
                  ovis_Q(
                    LOCALS.x),
                  not(
                    0_Q(
                      otval(
                        LOCALS.x)))),
                LOCALS.suv = back(
                    LOCALS.suv),
                put(
                  LOCALS.suv,
                  1,
                  LOCALS.x)] /*)*/)
            },
          robjs(
            LOCALS.here)),
        mapf(
          null,
          /* FUNCTION */
            (x) => {
              
              cond(
              /*(*/ [and(
                  _EQ_Q(
                    LOCALS.suv,
                    LOCALS.tuv),
                  n_EQ_Q(
                    LOCALS.x,
                    LOCALS.pi)),
                tell(
                  GLOBALS.losstr),
                return(
                  t,
                  LOCALS.rp)] /*)*/)
cond(
              /*(*/ [not(
                  0_Q(
                    otval(
                      LOCALS.x))),
                LOCALS.suv = back(
                    LOCALS.suv),
                put(
                  LOCALS.suv,
                  1,
                  LOCALS.x)] /*)*/)
            },
          aobjs(
            LOCALS.winner)))] /*)*/)
cond(
    /*(*/ [empty_Q(
        LOCALS.suv),
      tell(
        "I couldn't find any valuables.")] /*)*/,
    /*(*/ [frob_lots(
        LOCALS.suv)] /*)*/)
  }

define(
  opener,
  open_act,
  /*(*/ ["AUX",
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/,
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
          LOCALS.prso,
          GLOBALS.contbit)),
      tell(
        "You must tell me how to do that to a",
        1,
        odesc2(
          LOCALS.prso),
        ".")] /*)*/,
    /*(*/ [n_EQ_Q(
        ocapac(
          LOCALS.prso),
        0),
      cond(
        /*(*/ [oopen_Q(
            LOCALS.prso),
          tell(
            "It is already open.")] /*)*/,
        /*(*/ [t,
          put(
            LOCALS.prso,
            GLOBALS.oopen_Q,
            t),
          cond(
            /*(*/ [or(
                empty_Q(
                  ocontents(
                    LOCALS.prso)),
                transparent_Q(
                  LOCALS.prso)),
              tell(
                "Opened.")] /*)*/,
            /*(*/ [GLOBALS.tell_flag = t,
              tell(
                "Opening the",
                0,
                odesc2(
                  LOCALS.prso),
                "reveals"),
              print_contents(
                ocontents(
                  LOCALS.prso)),
              princ(
                _X__),
              crlf(
                )] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "The",
        1,
        odesc2(
          LOCALS.prso),
        "cannot be opened.")] /*)*/))

define(
  closer,
  close_act,
  /*(*/ ["AUX",
    /*(*/ [pv,
      GLOBALS.prsvec] /*)*/,
    /*(*/ [prso,
      2(
        LOCALS.pv)] /*)*/] /*)*/,
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
          LOCALS.prso,
          GLOBALS.contbit)),
      tell(
        "You must tell me how to do that to a",
        1,
        odesc2(
          LOCALS.prso),
        ".")] /*)*/,
    /*(*/ [n_EQ_Q(
        ocapac(
          LOCALS.prso),
        0),
      cond(
        /*(*/ [oopen_Q(
            LOCALS.prso),
          put(
            LOCALS.prso,
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
    
    let prso = 2(
        GLOBALS.prsvec);
    cond(
    /*(*/ [object_action(
        )] /*)*/,
    /*(*/ [LOCALS.prso,
      find_frob(
        LOCALS.prso,
        robjs(
          GLOBALS.here),
        ", which is in the room.",
        "There is a",
        "here."),
      find_frob(
        LOCALS.prso,
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
            LOCALS.x,
            LOCALS.prso),
          tell(
            LOCALS.str2,
            1,
            odesc2(
              LOCALS.x),
            LOCALS.str3)] /*)*/,
        /*(*/ [or(
            transparent_Q(
              LOCALS.x),
            and(
              openable_Q(
                LOCALS.x),
              oopen_Q(
                LOCALS.x))),
          mapf(
            null,
            /* FUNCTION */
              (y) => {
                
                cond(
                /*(*/ [_EQ_Q(
                    LOCALS.y,
                    LOCALS.prso),
                  tell(
                    LOCALS.str2,
                    1,
                    odesc2(
                      LOCALS.y),
                    LOCALS.str3),
                  tell(
                    "It is in the",
                    1,
                    odesc2(
                      LOCALS.x),
                    LOCALS.str1)] /*)*/)
              },
            ocontents(
              LOCALS.x))] /*)*/)
      },
    LOCALS.objl)
  }

// OBJECT-ACTION --  CALL OBJECT FUNCTIONS FOR DIRECT AND INDIRECT OBJECTS

FUNCTIONS.object_action = 
  () => {
    
    let vec = GLOBALS.prsvec;
    let prso = 2(
        LOCALS.vec);
    let prsi = 3(
        LOCALS.vec);
    prog(
    /*(*/ [] /*)*/,
    cond(
      /*(*/ [LOCALS.prsi,
        and(
          apply_object(
            LOCALS.prsi),
          return(
            t))] /*)*/),
    cond(
      /*(*/ [LOCALS.prso,
        apply_object(
          LOCALS.prso)] /*)*/))
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
            LOCALS.obj)),
        return(
          null)] /*)*/,
      /*(*/ [LOCALS.nobj = ocan(
            LOCALS.obj),
        cond(
          /*(*/ [oopen_Q(
              LOCALS.nobj),
            LOCALS.obj = LOCALS.nobj] /*)*/,
          /*(*/ [return(
              null)] /*)*/)] /*)*/),
    or(
      memq(
        LOCALS.obj,
        robjs(
          LOCALS.rm)),
      memq(
        LOCALS.obj,
        aobjs(
          LOCALS.win))))
  }

FUNCTIONS.splice_out = 
  (obj,
    al) => {
    
    cond(
    /*(*/ [_EQ_Q(
        1(
          LOCALS.al),
        LOCALS.obj),
      rest(
        LOCALS.al)] /*)*/,
    /*(*/ [t,
      repeat(
        /*(*/ [/*(*/ [nl,
            rest(
              LOCALS.al)] /*)*/,
          /*(*/ [ol,
            LOCALS.al] /*)*/] /*)*/,
        /*#*/ [decl,
          /*(*/ [/*(*/ [nl,
              ol] /*)*/,
            list] /*)*/] /*2*/,
        cond(
          /*(*/ [_EQ_Q(
              1(
                LOCALS.nl),
              LOCALS.obj),
            putrest(
              LOCALS.ol,
              rest(
                LOCALS.nl)),
            return(
              LOCALS.al)] /*)*/,
          /*(*/ [LOCALS.ol = LOCALS.nl,
            LOCALS.nl = rest(
                LOCALS.nl)] /*)*/))] /*)*/)
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
                LOCALS.obj),
              GLOBALS.bigfix),
            0] /*)*/,
          /*(*/ [osize(
              LOCALS.obj)] /*)*/),
        weight(
          ocontents(
            LOCALS.obj)))
      },
    LOCALS.objl)
  }

FUNCTIONS.pour = 
  () => {
    
    
  }

FUNCTIONS.move = 
  () => {
    
    let vec = GLOBALS.prsvec;
    let rm = aroom(
        GLOBALS.winner);
    let obj = 2(
        LOCALS.vec);
    cond(
    /*(*/ [memq(
        LOCALS.obj,
        robjs(
          LOCALS.rm)),
      object_action(
        )] /*)*/,
    /*(*/ [LOCALS.obj,
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
            LOCALS.x,
            GLOBALS.vicbit),
          mapleave(
            LOCALS.x)] /*)*/)
      },
    robjs(
      LOCALS.rm))
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
      2(
        LOCALS.prsvec)] /*)*/,
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
          LOCALS.obj,
          GLOBALS.burnbit),
        3(
          LOCALS.prsvec),
        put(
          LOCALS.prsvec,
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
                LOCALS.obj),
              0),
            memq(
              LOCALS.obj,
              aobjs(
                LOCALS.me)))] /*)*/,
        /*(*/ [t,
          tell(
            "You can't turn that on."),
          return(
            t,
            LOCALS.lampo)] /*)*/),
      cond(
        /*(*/ [g_Q(
            olight_Q(
              LOCALS.obj),
            0),
          tell(
            "It is already on.")] /*)*/,
        /*(*/ [put(
            LOCALS.obj,
            GLOBALS.olight_Q,
            1),
          tell(
            "The",
            1,
            odesc2(
              LOCALS.obj),
            "is now on."),
          cond(
            /*(*/ [not(
                LOCALS.lit_Q),
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
      2(
        GLOBALS.prsvec)] /*)*/] /*)*/,
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
                LOCALS.obj),
              0),
            memq(
              LOCALS.obj,
              aobjs(
                LOCALS.me)))] /*)*/,
        /*(*/ [tell(
            "You can't turn that off."),
          return(
            t,
            LOCALS.lampo)] /*)*/),
      cond(
        /*(*/ [l_Q(
            olight_Q(
              LOCALS.obj),
            0),
          tell(
            "It is already off.")] /*)*/,
        /*(*/ [put(
            LOCALS.obj,
            GLOBALS.olight_Q,
            _1),
          tell(
            "The",
            1,
            odesc2(
              LOCALS.obj),
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
    LOCALS.w,
    GLOBALS.words)
  }

FUNCTIONS.this_it_Q = 
  (objnam,
    obj,
    adj) => {
    
    cond(
    /*(*/ [and(
        ovis_Q(
          LOCALS.obj),
        or(
          _EQ_Q(
            LOCALS.objnam,
            oid(
              LOCALS.obj)),
          memq(
            LOCALS.objnam,
            onames(
              LOCALS.obj)))),
      cond(
        /*(*/ [not(
            LOCALS.adj)] /*)*/,
        /*(*/ [memq(
            LOCALS.adj,
            oadjs(
              LOCALS.obj))] /*)*/)] /*)*/)
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
    let s1 = LOCALS.s;
    let quot = null;
    mapr(
    null,
    /* FUNCTION */
      (x) => {
        
        let str = 1(
            LOCALS.x);
        put(
        LOCALS.x,
        1,
        rest(
          LOCALS.str,
          length(
            LOCALS.str)))
      },
    LOCALS.v)
cond(
    /*(*/ [_EQ_Q(
        1(
          LOCALS.s),
        _X__Q),
      put(
        LOCALS.v,
        1,
        substruc(
          "HELP",
          0,
          4,
          back(
            1(
              LOCALS.v),
            4)))] /*)*/,
    /*(*/ [repeat(
        /*(*/ [slen] /*)*/,
        /*#*/ [decl,
          /*(*/ [/*(*/ [slen] /*)*/,
            fix] /*)*/] /*2*/,
        cond(
          /*(*/ [or(
              _EQ_Q(
                length(
                  LOCALS.s1),
                length(
                  LOCALS.sx)),
              memq(
                1(
                  LOCALS.s1),
                LOCALS.brks)),
            and(
              g_Q(
                length(
                  LOCALS.s1),
                length(
                  LOCALS.sx)),
              or(
                _EQ_Q(
                  1(
                    LOCALS.s1),
                  _X__),
                _EQ_Q(
                  1(
                    LOCALS.s1),
                  _X__)),
              not(
                LOCALS.quot),
              LOCALS.quot = t,
              LOCALS.v = rest(
                  LOCALS.v)),
            cond(
              /*(*/ [n_EQ_Q(
                  LOCALS.s,
                  LOCALS.s1),
                cond(
                  /*(*/ [empty_Q(
                      LOCALS.v),
                    or(
                      LOCALS.silent_Q,
                      tell(
                        "I'm too simple-minded for that."))] /*)*/,
                  /*(*/ [put(
                      LOCALS.v,
                      1,
                      uppercase(
                        substruc(
                          LOCALS.s,
                          0,
                          LOCALS.slen = min(
                              _(
                                length(
                                  LOCALS.s),
                                length(
                                  LOCALS.s1)),
                              5),
                          back(
                            1(
                              LOCALS.v),
                            LOCALS.slen)))),
                    LOCALS.v = rest(
                        LOCALS.v)] /*)*/)] /*)*/),
            cond(
              /*(*/ [_EQ_Q(
                  length(
                    LOCALS.s1),
                  length(
                    LOCALS.sx)),
                return(
                  LOCALS.v)] /*)*/),
            LOCALS.s = rest(
                LOCALS.s1)] /*)*/),
        LOCALS.s1 = rest(
            LOCALS.s1))] /*)*/)
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
            LOCALS.x,
            LOCALS.sx),
          mapleave(
            null)] /*)*/,
        /*(*/ [not(
            memq(
              1(
                LOCALS.x),
              GLOBALS.brks)),
          mapleave(
            LOCALS.x)] /*)*/)
      },
    LOCALS.s)
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
            1(
              LOCALS.s))] /*)*/
        cond(
        /*(*/ [and(
            g_Q(
              LOCALS.c,
              96),
            l__Q(
              LOCALS.c,
              122)),
          put(
            LOCALS.s,
            1,
            ascii(
              _(
                LOCALS.c,
                32)))] /*)*/)
      },
    LOCALS.str)
  }

FUNCTIONS.wait = 
  (num?) => {
    
    tell(
    "Time passes...")
repeat(
    /*(*/ [/*(*/ [n,
        LOCALS.num] /*)*/] /*)*/,
    /*#*/ [decl,
      /*(*/ [/*(*/ [n] /*)*/,
        fix] /*)*/] /*2*/,
    cond(
      /*(*/ [or(
          l_Q(
            LOCALS.n = _(
                LOCALS.n,
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
                LOCALS.ev);
            cond(
            /*(*/ [not(
                cflag(
                  LOCALS.ev))] /*)*/,
            /*(*/ [0_Q(
                LOCALS.tick)] /*)*/,
            /*(*/ [l_Q(
                LOCALS.tick,
                0),
              put(
                GLOBALS.prsvec,
                1,
                GLOBALS.c_int_X_words),
              cond(
                /*(*/ [type_Q(
                    LOCALS.ca = caction(
                        LOCALS.ev),
                    offset),
                  dispatch(
                    LOCALS.ca)] /*)*/,
                /*(*/ [apply(
                    LOCALS.ca)] /*)*/)] /*)*/,
            /*(*/ [put(
                LOCALS.ev,
                GLOBALS.ctick,
                LOCALS.tick = _(
                    LOCALS.tick,
                    1)),
              and(
                0_Q(
                  LOCALS.tick),
                LOCALS.flg = t,
                put(
                  GLOBALS.prsvec,
                  1,
                  GLOBALS.c_int_X_words),
                cond(
                  /*(*/ [type_Q(
                      LOCALS.ca = caction(
                          LOCALS.ev),
                      offset),
                    dispatch(
                      LOCALS.ca)] /*)*/,
                  /*(*/ [apply(
                      LOCALS.ca)] /*)*/))] /*)*/)
          },
        hobjs(
          LOCALS.hack))] /*)*/)
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
          LOCALS.cev,
          hobjs(
            LOCALS.clocker))),
      put(
        LOCALS.clocker,
        GLOBALS.hobjs,
        /*(*/ [LOCALS.cev,
          _X,
          hobjs(
            LOCALS.clocker)] /*)*/)] /*)*/)
cond(
    /*(*/ [LOCALS.num,
      put(
        LOCALS.cev,
        GLOBALS.ctick,
        LOCALS.num)] /*)*/)
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
    
    let obj = 2(
        GLOBALS.prsvec);
    let win = GLOBALS.winner;
    let av = avehicle(
        LOCALS.win);
    cond(
    /*(*/ [not(
        memq(
          LOCALS.obj,
          robjs(
            GLOBALS.here))),
      tell(
        "The",
        1,
        odesc2(
          LOCALS.obj),
        "must be on the ground to be boarded.")] /*)*/,
    /*(*/ [trnn(
        LOCALS.obj,
        GLOBALS.vehbit),
      cond(
        /*(*/ [LOCALS.av,
          tell(
            "You are already in a",
            1,
            odesc2(
              LOCALS.obj),
            ", cretin!")] /*)*/,
        /*(*/ [t,
          cond(
            /*(*/ [object_action(
                )] /*)*/,
            /*(*/ [tell(
                "You are in the",
                1,
                odesc2(
                  LOCALS.obj),
                "."),
              put(
                LOCALS.win,
                GLOBALS.avehicle,
                LOCALS.obj),
              put(
                LOCALS.obj,
                GLOBALS.ocontents,
                /*(*/ [find_obj(
                    "#####"),
                  _X,
                  ocontents(
                    LOCALS.obj)] /*)*/)] /*)*/)] /*)*/)] /*)*/,
    /*(*/ [tell(
        "I suppose you have a theory on boarding",
        1,
        odesc2(
          LOCALS.obj),
        "s.")] /*)*/)
  }

FUNCTIONS.unboard = 
  () => {
    
    let obj = 2(
        GLOBALS.prsvec);
    let win = GLOBALS.winner;
    let av = avehicle(
        LOCALS.win);
    cond(
    /*(*/ [_EQ_Q(
        LOCALS.av,
        LOCALS.obj),
      cond(
        /*(*/ [object_action(
            )] /*)*/,
        /*(*/ [rtrnn(
            GLOBALS.here,
            GLOBALS.rlandbit),
          tell(
            "You are on your own feet again."),
          put(
            LOCALS.win,
            GLOBALS.avehicle,
            null),
          put(
            LOCALS.obj,
            GLOBALS.ocontents,
            splice_out(
              find_obj(
                "#####"),
              ocontents(
                LOCALS.obj)))] /*)*/,
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
        LOCALS.rm,
        GLOBALS.rlandbit);
    cond(
    /*(*/ [or(
        and(
          not(
            LOCALS.lb),
          or(
            not(
              LOCALS.av),
            not(
              rtrnn(
                LOCALS.rm,
                orand(
                  LOCALS.av))))),
        and(
          rtrnn(
            LOCALS.here,
            GLOBALS.rlandbit),
          LOCALS.lb,
          LOCALS.av,
          n_EQ_Q(
            orand(
              LOCALS.av),
            GLOBALS.rlandbit),
          not(
            rtrnn(
              LOCALS.rm,
              orand(
                LOCALS.av))))),
      cond(
        /*(*/ [LOCALS.av,
          tell(
            "You can't go there in a",
            1,
            odesc2(
              LOCALS.av),
            ".")] /*)*/,
        /*(*/ [tell(
            "You can't go there without a vehicle.")] /*)*/),
      null] /*)*/,
    /*(*/ [rtrnn(
        LOCALS.rm,
        GLOBALS.rmungbit),
      tell(
        rrand(
          LOCALS.rm))] /*)*/,
    /*(*/ [t,
      cond(
        /*(*/ [n_EQ_Q(
            LOCALS.win,
            GLOBALS.player),
          remove_object(
            aobj(
              LOCALS.win)),
          insert_object(
            aobj(
              LOCALS.win),
            LOCALS.rm)] /*)*/),
      cond(
        /*(*/ [LOCALS.av,
          remove_object(
            LOCALS.av),
          insert_object(
            LOCALS.av,
            LOCALS.rm)] /*)*/),
      put(
        GLOBALS.winner,
        GLOBALS.aroom,
        GLOBALS.here = LOCALS.rm),
      score_room(
        LOCALS.rm),
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
    LOCALS.rm,
    GLOBALS.rmungbit)
put(
    LOCALS.rm,
    GLOBALS.rrand,
    LOCALS.str)
  }

FUNCTIONS.command = 
  () => {
    
    let pv = GLOBALS.prsvec;
    let po = 2(
        LOCALS.pv);
    let v = rest(
        member(
          "",
          GLOBALS.lexv));
    let hs = GLOBALS.here;
    let win = GLOBALS.winner;
    let play = GLOBALS.player;
    cond(
    /*(*/ [n_EQ_Q(
        LOCALS.win,
        LOCALS.play),
      tell(
        "You cannot talk through another person!")] /*)*/,
    /*(*/ [trnn(
        LOCALS.po,
        GLOBALS.actorbit),
      GLOBALS.winner = orand(
          LOCALS.po),
      rdcom(
        LOCALS.v),
      GLOBALS.winner = LOCALS.play,
      GLOBALS.here = LOCALS.hs] /*)*/,
    /*(*/ [tell(
        "You cannot talk to that!")] /*)*/)
  }