// VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)

function blo(y) {
    cond(/*(*/ [type_Q(GLOBALS.rep,subr, fsubr),
	       read_table = put(ivector(256, 0), chtype(ascii(_X__), fix), _X__),
	       evaltype(form, segment),
	       applytype(subr, fix),
	       put(alltypes(), 6, alltypes()[7]),
	       substitute(2, 1),
	       off(bh)] /*)*/)
  }

gdecl(/*(*/ [ff] /*)*/, string)

function ilo(body: string, type: number, nm1: string, nm2: string, m1?: string, m2: string) {
    cond(/*(*/ [type === _400000000000_,
	       cond(/*(*/ [member("<FLUSH-ME>", body) && !member(GLOBALS.xunm,GLOBALS.winners) || member(nm1,GLOBALS.winners) && member(GLOBALS.ff,body),
		      eval(parse(body))] /*)*/)] /*)*/)
dismiss(t)
  }

// ROOM FUNCTIONS

function east_house() {
    let win: adv = GLOBALS.winner;
    let prsvec: vector = GLOBALS.prsvec;
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	   tell("You are behind the white house.  In one corner of the house there\nis a small window which is", 1, cond(/*(*/ [GLOBALS.kitchen_window_X_flag,		  		      "open."] /*)*/,
		 		     /*(*/ ["slightly ajar."] /*)*/))] /*)*/)
  }

// HACK THE KITCHEN WINDOW

GLOBALS.grunlock_X_flag = false

function window_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    open_close(prsact,		kitchen_window_X_flag,
"With great effort, you open the window far enough to allow entry.",
"The window closes (more easily than it opened).")
  }

function open_close(verb: verb, atm: atom, stropn: string, strcls: string) {
    cond(/*(*/ [verb === GLOBALS.open_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(pick_one(GLOBALS.dummy))] /*)*/,
		 /*(*/ [tell(stropn),
		  setg(atm,t)] /*)*/)] /*)*/,
	  /*(*/ [verb === GLOBALS.close_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(strcls),
		  setg(atm,false),
		  t] /*)*/,
		 /*(*/ [tell(pick_one(GLOBALS.dummy))] /*)*/)] /*)*/)
  }

// KITCHEN -- CHECK THE WINDOW

function kitchen() {
    let win: adv = GLOBALS.winner;
    let prsvec: vector = GLOBALS.prsvec;
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	   tell("You are in the kitchen of the white house.  A table seems to have\nbeen used recently for the preparation of food.  A passage leads to\nthe west and a dark staircase can be seen leading upward.  To the\neast is a small window which is", 0),
	   cond(/*(*/ [GLOBALS.kitchen_window_X_flag,		  tell("open.", 1)] /*)*/,
		 /*(*/ [tell("slightly ajar.", 1)] /*)*/)] /*)*/,
	  /*(*/ [t] /*)*/)
  }

function leaf_pile() {
    let pv: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let l: object = pv[2];
    cond(/*(*/ [pv[1] === GLOBALS.burn_X_words,
	       put(l,GLOBALS.orand,1),
	       cond(/*(*/ [oroom(l),
		      tell("The leaves burn and the neighbors start to complain."),
		      remove_object(l)] /*)*/,
		     /*(*/ [t,
		      drop_object(l),
		      jigs_up("The sight of someone carrying a pile of burning leaves so offends\nthe neighbors that they come over and put you out.")] /*)*/)] /*)*/,
	      /*(*/ [pv[1] === GLOBALS.move_X_words,
	       put(l,GLOBALS.orand,1),
	       tell("Done.")] /*)*/)
  }

psetg(resdesc,
"However, with the water level lowered, there is merely a wide stream\nrunning through the center of the room.")

psetg(gladesc,
"You are in a large room, with giant icicles hanging from the walls\nand ceiling.  There are passages to the north and east.")

function glacier_room() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	   cond(/*(*/ [GLOBALS.glacier_flag_X_flag,		  tell(GLOBALS.gladesc),
		  tell("There is a large passageway leading westward.", 1)] /*)*/,
		 /*(*/ [tell(GLOBALS.gladesc)] /*)*/)] /*)*/)
  }

function trophy_case() {
    let prsact = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.take_X_words,
	   tell("The trophy case is securely fastened to the wall (perhaps to foil any\nattempt by robbers to remove it).")] /*)*/)
  }

function glacier() {
    let prsvec: vector(verb, /*[*/ [2, any] /*]*/) = GLOBALS.prsvec;
    let prsact: verb = prsvec[1];
    let t: verb = null;
    cond(/*(*/ [vname(prsact) === throw_X_words,
	   cond(/*(*/ [prsvec[2] === t = find_obj("TORCH"),
		  tell("The torch hits the glacier and explodes into a great ball of flame,\ndevouring the glacier.  The water from the melting glacier rushes\ndownstream, carrying the torch with it.  In the place of the glacier,\nthere is a passageway leading west."),
		  remove_object(find_obj("ICE")),
		  remove_object(t),
		  insert_object(t,find_room("STREA")),
		  put(t,GLOBALS.odesc2,"burned out ivory torch"),
		  put(t,GLOBALS.odesc1,"There is a burned out ivory torch here."),
		  put(t,GLOBALS.olight_Q,0),
		  trz(t,GLOBALS.flamebit),
		  lit_Q(GLOBALS.here) || tell("The melting glacier seems to have carried the torch away, leaving\nyou in the dark."),
		  GLOBALS.glacier_flag_X_flag = t] /*)*/,
		 /*(*/ [tell("The glacier is unmoved by your ridiculous attempt."),
		  false] /*)*/)] /*)*/,
	  /*(*/ [vname(prsact) === melt_X_words,
	   tell("How exactly are you going to melt this glacier?")] /*)*/)
  }

psetg(yuks,
      () => /*[*/ ["Nice try.",
	"You can't be serious.",
	"Chomp, Chomp.",
	"Not a prayer.",
	"I don't think so."] /*]*/)

function reservoir_south() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	       cond(/*(*/ [GLOBALS.low_tide_X_flag,		      tell("You are in the south end of a large cavernous room which was formerly\na reservoir."),
		      tell(GLOBALS.resdesc,1)] /*)*/,
		     /*(*/ [tell("You are at the south end of a large reservoir.")] /*)*/),
	       tell("There is a western exit, a passageway south, and a steep pathway\nclimbing up along the edge of a cliff.", 1)] /*)*/)
  }

function reservoir_north() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	       cond(/*(*/ [GLOBALS.low_tide_X_flag,		      tell("You are in the north end of a large cavernous room which was formerly\na reservoir."),
		      tell(GLOBALS.resdesc,1)] /*)*/,
		     /*(*/ [tell("You are at the north end of a large reservoir.")] /*)*/),
	       tell("There is a tunnel leaving the room to the north.", 1)] /*)*/)
  }

// LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE

function living_room() {
    let win: adv = GLOBALS.winner;
    let prsvec: vector = GLOBALS.prsvec;
    let rug_Q: atom | false = null;
    let prsact: verb = prsvec[1];
    let tc: object = null;
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	       cond(/*(*/ [GLOBALS.magic_flag_X_flag,		      tell("You are in the living room.  There is a door to the east.  To the\nwest is a cyclops-shaped hole in an old wooden door, above which is\nsome strange gothic lettering", 0)] /*)*/,
		     /*(*/ [tell("You are in the living room.  There is a door to the east, a wooden\ndoor with strange gothic lettering to the west, which appears to be\nnailed shut,", 0)] /*)*/),
	       rug_Q = orand(find_obj("RUG")),
	       cond(/*(*/ [rug_Q && GLOBALS.trap_door_X_flag,
		      tell("and a rug lying beside an open trap-door.", 1)] /*)*/,
		     /*(*/ [rug_Q,		      tell("and a closed trap-door at your feet.", 1)] /*)*/,
		     /*(*/ [GLOBALS.trap_door_X_flag,		      tell("and an open trap-door at your feet.", 1)] /*)*/,
		     /*(*/ [tell("and a large oriental rug in the center of the room.", 1)] /*)*/),
	       t] /*)*/,
	      /*(*/ [tc = find_obj("TCASE") && prsact === GLOBALS.take_X_words || prsact === GLOBALS.put_X_words && prsvec[3] === tc,
	       put(GLOBALS.winner,GLOBALS.ascore,_(GLOBALS.raw_score,				       mapf(GLOBALS._,GLOBALS.otval,ocontents(tc))))] /*)*/)
  }

function trap_door() {
    let prsact: verb = GLOBALS.prsvec[1];
    let rm: room = GLOBALS.here;
    cond(/*(*/ [rm === find_room("LROOM"),
	   cond(/*(*/ [prsact === GLOBALS.open_X_words,
		  cond(/*(*/ [GLOBALS.trap_door_X_flag,			 tell("It's open.")] /*)*/,
			/*(*/ [tell("The door reluctantly opens to reveal a rickety staircase descending\ninto darkness.")] /*)*/),
		  cond_open(down_X_directions, rm)] /*)*/,
		 /*(*/ [prsact === GLOBALS.close_X_words,
		  cond(/*(*/ [GLOBALS.trap_door_X_flag,			 tell("The door swings shut and closes.")] /*)*/,
			/*(*/ [tell("It's closed.")] /*)*/),
		  cond_close(down_X_directions, rm),
		  t] /*)*/)] /*)*/,
	  /*(*/ [rm === find_room("CELLA"),
	   cond(/*(*/ [prsact === GLOBALS.open_X_words,
		  tell("The door is locked from above.")] /*)*/,
		 /*(*/ [tell(pick_one(GLOBALS.dummy))] /*)*/)] /*)*/)
  }

function look_under() {
    let obj: object = GLOBALS.prsvec[2];
    cond(/*(*/ [obj === find_obj("RUG") && !orand(obj) && !GLOBALS.trap_door_X_flag,
	   tell("Underneath the rug is a closed trap door.")] /*)*/,
	  /*(*/ [obj === find_obj("LEAVE") && rvars(find_room("CLEAR")) !== 1,
	   tell("Underneath the pile of leaves is a grating.")] /*)*/)
  }

function repent() {
    tell("It could very well be too late!")
  }

function clearing() {
    let prsact: verb = GLOBALS.prsvec[1];
    let rm: room = GLOBALS.here;
    let grate: object = find_obj("GRAT1");
    let leaves: object = find_obj("LEAVE");
    let rv: number = rvars(rm);
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	 tell("You are in a clearing, with a forest surrounding you on the west\nand south."),
	 cond(/*(*/ [GLOBALS.key_flag_X_flag,		tell("There is an open grating, descending into darkness.", 1)] /*)*/,
	       /*(*/ [!0_Q(rv),
		tell("There is a grating securely fastened into the ground.", 1)] /*)*/)] /*)*/,
	/*(*/ [0_Q(rv) && prsact === GLOBALS.burn_X_words && !0_Q(orand(leaves)) || prsact === GLOBALS.take_X_words || prsact === GLOBALS.move_X_words && GLOBALS.prsvec[2] === leaves,
	 tell("A grating appears on the ground."),
	 tro(grate,GLOBALS.ovison),
	 put(rm,GLOBALS.rvars,1)] /*)*/)
  }

// CELLAR--FIRST ROOM IN BASEMENT.

function cellar() {
    let win: adv = GLOBALS.winner;
    let prsact: verb = GLOBALS.prsvec[1];
    let door: object = find_obj("DOOR");
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	 tell("You are in a dark and damp cellar with a narrow passageway leading\neast, and a crawlway to the south.  On the west is the bottom of a\nsteep metal ramp which is unclimbable.")] /*)*/,
	/*(*/ [vname(prsact) === walk_in_X_words && GLOBALS.trap_door_X_flag && !otouch_Q(door),
	 GLOBALS.trap_door_X_flag = false,
	 put(door,GLOBALS.otouch_Q,t),
	 tell("The trap door crashes shut, and you hear someone barring it.", 1)] /*)*/)
  }

"STUDIO:  LET PEOPLE UP THE CHIMNEY IF THEY DON'T HAVE MUCH STUFF"

function chimney_function() {
    let winner: adv = GLOBALS.winner;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    cond(/*(*/ [l__Q(aobjs.length, 2) && memq(find_obj("LAMP"), aobjs),
	 GLOBALS.light_load_X_flag = t,
	 // Door will slam shut next time, too, since this way up don't count.,
	 cond(/*(*/ [!GLOBALS.trap_door_X_flag,
		put(find_obj("DOOR"), GLOBALS.otouch_Q,false)] /*)*/),
	 false] /*)*/,
	/*(*/ [t,
	 GLOBALS.light_load_X_flag = false] /*)*/)
  }

// OBJECT FUNCTIONS

function rug() {
    let prsvec: vector = GLOBALS.prsvec;
    let prsa: verb = prsvec[1];
    let obj: object = null;
    cond(/*(*/ [prsa === GLOBALS.lift_X_words,
	  tell("The rug is too heavy to lift, but in trying to take it you have \nnoticed an irregularity beneath it.")] /*)*/,
	 /*(*/ [prsa === GLOBALS.move_X_words,
	  cond(/*(*/ [orand(obj = find_obj("RUG")),
		 tell("Having moved the carpet previously, you find it impossible to move\nit again.")] /*)*/,
		/*(*/ [tell("With a great effort, the rug is moved to one side of the room.\nWith the rug moved, the dusty cover of a closed trap-door appears."),
		 tro(find_obj("DOOR"), GLOBALS.ovison),
		 put(obj,GLOBALS.orand,t)] /*)*/)] /*)*/,
	 /*(*/ [prsa === GLOBALS.take_X_words,
	  tell("The rug is extremely heavy and cannot be carried.")] /*)*/)
  }

function rusty_knife() {
    let prsvec: vector = GLOBALS.prsvec;
    let prsa: verb = prsvec[1];
    let prsi: false | object = prsvec[3];
    cond(/*(*/ [prsa === GLOBALS.take_X_words,
	       memq(find_obj("SWORD"), aobjs(GLOBALS.winner)) && tell("As you pick up the rusty knife, your sword gives a single pulse\nof blinding blue light."),
	       false] /*)*/,
	      /*(*/ [prsa === GLOBALS.attac_X_words || prsa === GLOBALS.swing_X_words || prsa === GLOBALS.throw_X_words && prsi || prsa === GLOBALS.kill_X_words,
	       kill_obj(find_obj("RKNIF"), GLOBALS.winner),
	       jigs_up("As the knife approaches its victim, your mind is submerged by an\novermastering will.  Slowly, your hand turns, until the rusty blade\nis an inch from your neck.  The knife seems to sing as it savagely\nslits your throat.")] /*)*/)
  }

function skeleton() {
    let rm: room = GLOBALS.winner[1];
    let lld: room = find_room("LLD2");
    let l: room = null;
    tell("A ghost appears in the room and is appalled at your having\ndesecrated the remains of a fellow adventurer.  He casts a curse\non all of your valuables and orders them banished to the Land of\nthe Living Dead.  The ghost leaves, muttering obscenities.")
l = rob_room(rm,/*(*/ [] /*)*/, 100)
l = rob_adv(GLOBALS.player,l)
mapf(false,
	 function(x: object) {
        put(x,GLOBALS.oroom,lld)
      },
	 l)
cond(/*(*/ [!empty_Q(l),
	  putrest(rest(l,_(l.length, 1)), robjs(lld)),
	  put(lld,GLOBALS.robjs,l)] /*)*/)
  }

function troll() {
    let pa: verb = GLOBALS.prsvec[1];
    let pv: vector = GLOBALS.prsvec;
    let prso: false | object = pv[2];
    let here: room = GLOBALS.here;
    let t: object = find_obj("TROLL");
    let a: object = find_obj("AXE");
    cond(/*(*/ [pa === GLOBALS.fight_X_words,
	       cond(/*(*/ [ocan(a) === t, false] /*)*/,
		     /*(*/ [memq(a,robjs(GLOBALS.here)),
		      snarf_object(t,a),
		      here === oroom(t) && tell("The troll, now worried about this encounter, recovers his bloody\naxe."),
		      t] /*)*/,
		     /*(*/ [here === oroom(t),
		      tell("The troll, disarmed, cowers in terror, pleading for his life in\nthe guttural tongue of the trolls."),
		      t] /*)*/)] /*)*/,
	      /*(*/ [pa === GLOBALS.dead__X_X_words, GLOBALS.troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === GLOBALS.out__X_X_words,
	       trz(find_obj("AXE"), GLOBALS.ovison),
	       put(t,GLOBALS.odesc1,GLOBALS.trollout),
	       GLOBALS.troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === GLOBALS.in__X_X_words,
	       tro(find_obj("AXE"), GLOBALS.ovison),
	       cond(/*(*/ [oroom(t) === here,
		      tell("The troll stirs, quickly resuming a fighting stance.")] /*)*/),
	       put(t,GLOBALS.odesc1,GLOBALS.trolldesc),
	       GLOBALS.troll_flag_X_flag = false] /*)*/,
	      /*(*/ [pa === GLOBALS.first_Q_X_words, prob(33)] /*)*/,
	      /*(*/ [pa === GLOBALS.throw_X_words || pa === GLOBALS.give_X_words && prso,
	       cond(/*(*/ [pa === GLOBALS.throw_X_words,
		      tell("The troll, who is remarkably coordinated, catches the", 1, odesc2(prso))] /*)*/,
		     /*(*/ [tell("The troll, who is not overly proud, graciously accepts the gift")] /*)*/),
	       cond(/*(*/ [prso === find_obj("KNIFE"),
		      tell("and being for the moment sated, throws it back.  Fortunately, the\ntroll has poor control, and the knife falls to the floor.  He does\nnot look pleased."),
		      tro(t,GLOBALS.fightbit)] /*)*/,
		     /*(*/ [tell("and not having the most discriminating tastes, gleefully eats it."),
		      remove_object(pv[2])] /*)*/)] /*)*/,
	      /*(*/ [pa === GLOBALS.take_X_words || pa === GLOBALS.move_X_words,
	       tell("The troll spits in your face, saying \"Better luck next time.\")] /*)*/,
	      /*(*/ [vname(pa) === mung_X_words,
	       tell("The troll laughs at your puny gesture.")] /*)*/)
  }

"MIRROR ROOM HACKERY"

function mirror_room() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words && lit_Q(GLOBALS.here),
	       tell("You are in a large square room with tall ceilings.  On the south wall\nis an enormous mirror which fills the entire wall.  There are exits\non the other three sides of the room."),
	       cond(/*(*/ [GLOBALS.mirror_mung_X_flag,		      tell("Unfortunately, you have managed to destroy it by your reckless\nactions.", 1)] /*)*/)] /*)*/)
  }

GLOBALS.mirror_mung_X_flag = false

function mirror_mirror() {
    let prsact: verb = GLOBALS.prsvec[1];
    let rm1: room = null;
    let rm2: room = null;
    let l1: list(/*[*/ [rest, object] /*]*/) = null;
    cond(/*(*/ [!GLOBALS.mirror_mung_X_flag && vname(prsact) === rub_X_words,
	       rm1 = GLOBALS.here,
	       rm2 = cond(/*(*/ [rm1 === find_room("MIRR1"),
			find_room("MIRR2")] /*)*/,
		       /*(*/ [find_room("MIRR1")] /*)*/),
	       l1 = robjs(rm1),
	       put(rm1,GLOBALS.robjs,robjs(rm2)),
	       put(rm2,GLOBALS.robjs,l1),
	       mapf(false, function(x: object) {
            put(x,GLOBALS.oroom,rm1)
          },
		     robjs(rm1)),
	       mapf(false, function(x: object) {
            put(x,GLOBALS.oroom,rm2)
          },
		     robjs(rm2)),
	       goto(rm2),
	       tell("There is a rumble from deep within the earth and the room shakes.")] /*)*/,
	      /*(*/ [prsact === GLOBALS.look_X_words || prsact === GLOBALS.exami_X_words,
	       cond(/*(*/ [GLOBALS.mirror_mung_X_flag,		      tell("The mirror is broken into many pieces.")] /*)*/,
		     /*(*/ [tell("There is an ugly person staring at you.")] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.take_X_words,
	       tell("Nobody but a greedy surgeon would allow you to attempt that trick.")] /*)*/,
	      /*(*/ [vname(prsact) === mung_X_words || vname(prsact) === throw_X_words,
	       cond(/*(*/ [GLOBALS.mirror_mung_X_flag,		      tell("Haven't you done enough already?")] /*)*/,
		     /*(*/ [GLOBALS.mirror_mung_X_flag = t,
		      tell("You have broken the mirror.  I hope you have a seven years supply of\ngood luck handy.")] /*)*/)] /*)*/)
  }

function carousel_room() {
    let pv: vector = GLOBALS.prsvec;
    cond(/*(*/ [pv[1] === GLOBALS.walk_in_X_words && GLOBALS.carousel_zoom_X_flag,
	       jigs_up(GLOBALS.spindizzy)] /*)*/,
	      /*(*/ [pv[1] === GLOBALS.look_X_words,
	       tell("You are in a circular room with passages off in eight directions.", 1),
	       cond(/*(*/ [!GLOBALS.carousel_flip_X_flag,
		      tell("Your compass needle spins wildly, and you can't get your bearings.", 1)] /*)*/)] /*)*/)
  }

function carousel_exit() {
    let cx: cexit | nexit | room = null;
    cond(/*(*/ [GLOBALS.carousel_flip_X_flag,false] /*)*/,
	      /*(*/ [tell("Unfortunately, it is impossible to tell directions in here.", 1),
	       carousel_out()] /*)*/)
  }

function carousel_out() {
    let cx: cexit | nexit | room = null;
    type_Q(cx = rexits(GLOBALS.here)[_(2, _(1, mod(random(), 8)))], cexit) && cxroom(cx)
  }

function torch_room() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	tell("You are in a large room with a prominent doorway leading to a down\nstaircase. To the west is a narrow twisting tunnel.  Above you is a\nlarge dome painted with scenes depicting elfin hacking rites. Up\naround the edge of the dome (20 feet up) is a wooden railing. In the\ncenter of the room there is a white marble pedestal."),
	cond(/*(*/ [GLOBALS.dome_flag_X_flag,	       tell("A large piece of rope descends from the railing above, ending some\nfive feet above your head.", 1)] /*)*/)] /*)*/)
  }

function dome_room() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	       tell("You are at the periphery of a large dome, which forms the ceiling\nof another room below.  Protecting you from a precipitous drop is a\nwooden railing which circles the dome."),
	       cond(/*(*/ [GLOBALS.dome_flag_X_flag,		      tell("Hanging down from the railing is a rope which ends about ten feet\nfrom the floor below.", 1)] /*)*/)] /*)*/,
	      /*(*/ [vname(prsact) === jump_X_words,
	       jigs_up("I'm afraid that the leap you attempted has done you in.")] /*)*/)
  }

function coffin_cure() {
    cond(/*(*/ [memq(find_obj("COFFI"), aobjs(GLOBALS.winner)),
	       GLOBALS.egypt_flag_X_flag = false] /*)*/,
	      /*(*/ [else, GLOBALS.egypt_flag_X_flag = t] /*)*/)
false
  }

function lld_room() {
    let pv: vector = GLOBALS.prsvec;
    let win: adv = GLOBALS.winner;
    let wobj: list(/*[*/ [rest, object] /*]*/) = aobjs(win);
    let pa: verb = pv[1];
    let cand: object = find_obj("CANDL");
    cond(/*(*/ [pa === GLOBALS.look_X_words,
	       tell("You are outside a large gateway, on which is inscribed \n	\"Abandon every hope, all ye who enter here.\"  \nThe gate is open; through it you can see a desolation, with a pile of\nmangled corpses in one corner.  Thousands of voices, lamenting some\nhideous fate, can be heard."),
	       cond(/*(*/ [!GLOBALS.lld_flag_X_flag,
		      tell("The way through the gate is barred by evil spirits, who jeer at your\nattempts to pass.")] /*)*/)] /*)*/,
	      /*(*/ [vname(pa) === exorc_X_words,
	       cond(/*(*/ [memq(find_obj("GHOST"), robjs(GLOBALS.here)),
		      cond(/*(*/ [memq(find_obj("BELL"), wobj) && memq(find_obj("BOOK"), wobj) && memq(cand = find_obj("CANDL"), wobj) && olight_Q(cand) > 0,
			     tell("There is a clap of thunder, and a voice echoes through the cavern: \n\"Begone, fiends!\"  The spirits, sensing the presence of a greater\npower, flee through the walls."),
		             remove_object(find_obj("GHOST")),
		             GLOBALS.lld_flag_X_flag = t] /*)*/,
		            /*(*/ [tell("You are not equipped for an exorcism.")] /*)*/)] /*)*/,
		     /*(*/ [jigs_up("There is a clap of thunder, and a voice echoes through the\ncavern: \"Begone, chomper!\"  Apparently, the voice thinks you\nare an evil spirit, and dismisses you from the realm of the living.")] /*)*/)] /*)*/)
  }

function lld2_room() {
    let prsa: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsa === GLOBALS.look_X_words,
	   tell("You have entered the Land of the Living Dead, a large desolate room.\nAlthough it is apparently uninhabited, you can hear the sounds of\nthousands of lost souls weeping and moaning.  In the east corner are\nstacked the remains of dozens of previous adventurers who were less\nfortunate than yourself.  To the east is an ornate passage,\napparently recently constructed.",
		1,
		cond(/*(*/ [GLOBALS.on_pole_X_flag,		                "Amid the desolation, you spot what\nappears to be your head, at the end of a long pole."] /*)*/, /*(*/ [""] /*)*/))] /*)*/)
  }

function ghost_function() {
    let pv: vector = GLOBALS.prsvec;
    let g: object = find_obj("GHOST");
    cond(/*(*/ [pv[3] === g,
	 tell("How can you attack a spirit with material objects?"),
	 false] /*)*/,
	/*(*/ [pv[2] === g,
	 tell("You seem unable to affect these spirits.")] /*)*/)
  }

function maze_11() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
	 tell("You are in a small room near the maze. There are twisty passages\nin the immediate vicinity."),
	 cond(/*(*/ [GLOBALS.key_flag_X_flag,		tell("Above you is an open grating with sunlight pouring in.")] /*)*/,
	       /*(*/ [GLOBALS.grunlock_X_flag,		tell("Above you is a grating.")] /*)*/,
	       /*(*/ [tell("Above you is a grating locked with a skull-and-crossbones lock.")] /*)*/)] /*)*/)
  }

function grat1_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [GLOBALS.grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      "The grating opens.",
		      "The grating is closed.")] /*)*/,
	  /*(*/ [tell("The grating is locked.")] /*)*/)
  }

function grat2_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [GLOBALS.grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      "The grating opens to reveal trees above you.",
		      "The grating is closed."),
	   tro(find_obj("GRAT1"), GLOBALS.ovison)] /*)*/,
	  /*(*/ [tell("The grating is locked.")] /*)*/)
  }

function treasure_room() {
    let pv: vector(verb) = GLOBALS.prsvec;
    let hack: hack = GLOBALS.robber_demon;
    let hh: list(/*[*/ [rest, object] /*]*/) = null;
    let chali = null;
    let hobj: object = hobj(hack);
    let flg: atom | false = false;
    let tl: list(/*[*/ [rest, room] /*]*/) = null;
    let here: room = GLOBALS.here;
    let rooms: list(/*[*/ [rest, room] /*]*/) = GLOBALS.rooms;
    cond(/*(*/ [haction(hack) && vname(pv[1]) === walk_in_X_words,
	 cond(/*(*/ [flg = oroom(hobj) !== here,
		tell("You hear a scream of anguish as you violate the robber's hideaway. \nUsing passages unknown to you, he rushes to its defense."),
		cond(/*(*/ [oroom(hobj),
		       remove_object(hobj)] /*)*/),
		tro(hobj,GLOBALS.fightbit),
		put(hack,GLOBALS.hroom,here),
		put(hack,GLOBALS.hrooms,cond(/*(*/ [empty_Q(tl = rest(memq(here,rooms))),
					  rooms] /*)*/,
					 /*(*/ [tl] /*)*/)),
		insert_object(hobj,here)] /*)*/,
	       /*(*/ [t,
		tro(hobj,GLOBALS.fightbit)] /*)*/),
	 !ocan(chali = find_obj("CHALI")) && oroom(chali) === here && trz(chali,GLOBALS.takebit),
	 cond(/*(*/ [!length_Q(robjs(here), 2),
		tell("The thief gestures mysteriously, and the treasures in the room\nsuddenly vanish.")] /*)*/),
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [x !== chali && x !== hobj,
		    trz(x,GLOBALS.ovison)] /*)*/)
          },
	   robjs(here))] /*)*/)
  }

function treas() {
    cond(/*(*/ [GLOBALS.prsvec[1] === GLOBALS.treas_X_words && GLOBALS.here === find_room("TEMP1"),
	       goto(find_room("TREAS")),
	       room_desc()] /*)*/,
	      /*(*/ [GLOBALS.prsvec[1] === GLOBALS.templ_X_words && GLOBALS.here === find_room("TREAS"),
	       goto(find_room("TEMP1")),
	       room_desc()] /*)*/,
	      /*(*/ [t, tell("Nothing happens.")] /*)*/)
  }

function prayer() {
    cond(/*(*/ [GLOBALS.here === find_room("TEMP2") && goto(find_room("FORE1")),
	 room_desc()] /*)*/,
	/*(*/ [tell("If you pray enough, your prayers may be answered.")] /*)*/)
  }

GLOBALS.gate_flag_X_flag = false

function dam_room() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact === GLOBALS.look_X_words,
     tell("You are standing on the top of the Flood Control Dam #3, which was\nquite a tourist attraction in times far distant.  There are paths to\nthe north, south, east, and down."),
     cond(/*(*/ [GLOBALS.low_tide_X_flag,	    tell("It appears that the dam has been opened since the water level behind\nit is low and the sluice gate has been opened.  Water is rushing\ndownstream through the gates.", 1)] /*)*/,
	   /*(*/ [tell("The sluice gates on the dam are closed.  Behind the dam, there can be\nseen a wide lake.  A small stream is formed by the runoff from the\nlake.", 1)] /*)*/),
     tell("There is a control panel here.  There is a large metal bolt on the \npanel. Above the bolt is a small green plastic bubble.", 1),
     cond(/*(*/ [GLOBALS.gate_flag_X_flag,tell("The green bubble is glowing.", 1)] /*)*/)] /*)*/)
  }

function bolt_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    let prsi: false | object = GLOBALS.prsvec[3];
    let trunk: object = find_obj("TRUNK");
    cond(/*(*/ [prsact === GLOBALS.turn_X_words,
	       cond(/*(*/ [prsi === find_obj("WRENC"),
		      cond(/*(*/ [GLOBALS.gate_flag_X_flag,			     cond(/*(*/ [GLOBALS.low_tide_X_flag,				    GLOBALS.low_tide_X_flag = false,
				    tell("The sluice gates close and water starts to collect behind the dam."),
				    memq(trunk,robjs(find_room("RESES"))) && trz(trunk,GLOBALS.ovison),
				    t] /*)*/,
				   /*(*/ [GLOBALS.low_tide_X_flag = t,
				    tell("The sluice gates open and water pours through the dam."),
				    tro(trunk,GLOBALS.ovison)] /*)*/)] /*)*/,
			    /*(*/ [tell("The bolt won't turn with your best effort.")] /*)*/)] /*)*/,
		     /*(*/ [type_Q(prsi,object),
		      tell("The bolt won't turn using the", 1, odesc2(prsi), ".")] /*)*/)] /*)*/)
  }

psetg(drownings,
      () => /*[*/ ["up to your ankles.",
	"up to your shin.",
	"up to your knees.",
	"up to your hips.",
	"up to your waist.",
	"up to your chest.",
	"up to your neck.",
	"over your head.",
	"high in your lungs."] /*]*/)

gdecl(/*(*/ [drownings] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function maint_room() {
    let pv = GLOBALS.prsvec;
    let prsact: verb = pv[1];
    let prso: prsobj = pv[2];
    let prsi: false | object = pv[3];
    let mnt: room = find_room("MAINT");
    let here_Q: atom | false = GLOBALS.here === mnt;
    let hack: number = null;
    cond(/*(*/ [prsact === GLOBALS.c_int_X_words,
	       put(mnt,GLOBALS.rvars,_(1, hack = rvars(mnt))),
	       cond(/*(*/ [here_Q && tell("The water level here is now",
				 1,
				 GLOBALS.drownings[_(1, _(hack = rvars(mnt),
							 2))])] /*)*/),
	       cond(/*(*/ [g__Q(hack = rvars(mnt), 16),
		      mung_room(mnt,				 
"The room is full of water and cannot be entered."),
		      clock_int(GLOBALS.mntin,0),
		      here_Q && jigs_up("I'm afraid you have done drowned yourself.")] /*)*/)] /*)*/)
cond(/*(*/ [vname(prsact) === push_X_words,
	       cond(/*(*/ [prso === find_obj("BLBUT"),
		      cond(/*(*/ [0_Q(hack = rvars(GLOBALS.here)),
			     tell("There is a rumbling sound and a stream of water appears to burst\nfrom the east wall of the room (apparently, a leak has occurred in a\npipe.)"),
			     put(GLOBALS.here,GLOBALS.rvars,1),
			     clock_int(GLOBALS.mntin,_1),
			     t] /*)*/,
			    /*(*/ [tell("The blue button appears to be jammed.")] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj("RBUTT"),
		      put(GLOBALS.here,GLOBALS.rlight_Q,!rlight_Q(GLOBALS.here)),
		      cond(/*(*/ [rlight_Q(GLOBALS.here),
			     tell("The lights within the room come on.")] /*)*/,
			    /*(*/ [tell("The lights within the room shut off.")] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj("BRBUT"),
		      GLOBALS.gate_flag_X_flag = false,
		      tell("Click.")] /*)*/,
		     /*(*/ [prso === find_obj("YBUTT"),
		      GLOBALS.gate_flag_X_flag = t,
		      tell("Click.")] /*)*/)] /*)*/)
  }

function leak_function() {
    let hack: number = null;
    let prsvec: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let prsa: verb = prsvec[1];
    let prsi: object | false = prsvec[3];
    cond(/*(*/ [prsvec[2] === find_obj("LEAK"),
	       cond(/*(*/ [vname(prsa) === plug_X_words && hack = rvars(GLOBALS.here) > 0,
		      cond(/*(*/ [prsi === find_obj("PUTTY"),
			     put(GLOBALS.here,GLOBALS.rvars,_1),
			     clock_int(GLOBALS.mntin,0),
			     tell("By some miracle of elven technology, you have managed to stop the\nleak in the dam.")] /*)*/,
			    /*(*/ [with_tell(prsi)] /*)*/)] /*)*/)] /*)*/)
  }

function tube_function() {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    cond(/*(*/ [prsvec[1] === GLOBALS.put_X_words && prsvec[3] === find_obj("TUBE"),
	       tell("The tube refuses to accept anything.")] /*)*/)
  }

function with_tell(obj: object) {
    tell("With a", 1, odesc2(obj), "?")
  }

function cave2_room() {
    let foo: vector(number, cevent) = null;
    let bar: cevent = null;
    let prsact: verb = GLOBALS.prsvec[1];
    let c: verb = null;
    cond(/*(*/ [vname(prsact) === walk_in_X_words,
	 memq(c = find_obj("CANDL"), aobjs(GLOBALS.winner)) && prob(50) && 1_Q(olight_Q(c)) && clock_disable(bar = foo = orand(c)[2]) && put(c,GLOBALS.olight_Q,_1) && tell("The cave is very windy at the moment and your candles have blown out.")] /*)*/)
  }

function bottle_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsact[1] === throw_X_words,
	 tell("The bottle hits the far wall and is decimated."),
	 remove_object(GLOBALS.prsvec[2])] /*)*/,
	/*(*/ [prsact[1] === mung_X_words,
	 cond(/*(*/ [memq(GLOBALS.prsvec[2], aobjs(GLOBALS.winner)),
		put(GLOBALS.winner,GLOBALS.aobjs,splice_out(GLOBALS.prsvec[2], aobjs(GLOBALS.winner))),
		tell("You have destroyed the bottle.  Well done.")] /*)*/,
	       /*(*/ [memq(GLOBALS.prsvec[2], robjs(GLOBALS.here)),
		put(GLOBALS.here,GLOBALS.robjs,splice_out(GLOBALS.prsvec[2], robjs(GLOBALS.here))),
		tell("A brilliant maneuver destroys the bottle.")] /*)*/)] /*)*/)
  }

function fill() {
    let rem: atom | false = false;
    let prsvec: vector(verb, object, any) = GLOBALS.prsvec;
    let w: object = find_obj("WATER");
    cond(/*(*/ [object_action()] /*)*/,
	/*(*/ [rtrnn(GLOBALS.here,GLOBALS.rfillbit) || rem = ocan(w) === avehicle(GLOBALS.winner) || oroom(w) === GLOBALS.here,
	 put(prsvec,1, GLOBALS.take_X_words),
	 put(prsvec,3, prsvec[2]),
	 put(prsvec,2, w),
	 water_function(rem)] /*)*/,
	/*(*/ [tell("I can't find any water here.")] /*)*/)
  }

function water_function(rem?: atom | false) {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let prsact: verb = prsvec[1];
    let me: adv = GLOBALS.winner;
    let b: object = find_obj("BOTTL");
    let w: object = prsvec[2];
    let av: object | false = avehicle(me);
    let can: false | object = prsvec[3];
    cond(/*(*/ [prsact === GLOBALS.take_X_words || prsact === GLOBALS.put_X_words,
	       cond(/*(*/ [av && av === can,
		     tell("There is now a puddle in the bottom of the",
			    1,
			    odesc2(av),
			    "."),
		      cond(/*(*/ [memq(w,aobjs(me)),
			     drop_object(w,me)] /*)*/),
		      cond(/*(*/ [memq(w,ocontents(av))] /*)*/,
			    /*(*/ [put(av,GLOBALS.ocontents,/*(*/ [w,_X,ocontents(av)] /*)*/),
			     put(w,GLOBALS.ocan,av)] /*)*/)] /*)*/,
		     /*(*/ [can && can !== b,
		      tell("The water leaks out of the", 1, odesc2(can),
			    "and evaporates immediately."),
		      cond(/*(*/ [memq(w,aobjs(me)),
			     drop_object(w,me)] /*)*/,
			    /*(*/ [remove_object(w)] /*)*/)] /*)*/,
		     /*(*/ [memq(b,aobjs(me)),
		      cond(/*(*/ [!empty_Q(ocontents(b)),
			     tell("The bottle is already full.")] /*)*/,
			    /*(*/ [!oopen_Q(b),
			     tell("The bottle is closed.")] /*)*/,
			    /*(*/ [t,
			     rem && remove_object(w),
			     put(b,GLOBALS.ocontents,/*(*/ [w] /*)*/),
			     put(w,GLOBALS.ocan,b),
			     tell("The bottle is now full of water.")] /*)*/)] /*)*/,
		     /*(*/ [ocan(w) === b && prsact === GLOBALS.take_X_words && !can,
		      put(prsvec,2, b),
		      take(t),
		      put(prsvec,2, w)] /*)*/,
		     /*(*/ [tell("The water slips through your fingers.")] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.drop_X_words || prsact === GLOBALS.pour_X_words || prsact === GLOBALS.give_X_words,
	       cond(/*(*/ [memq(w,aobjs(me)),
		      drop_object(w,me)] /*)*/),
	       cond(/*(*/ [av,		      tell("There is now a puddle in the bottom of the",
			    1,
			    odesc2(av),
			    ".")] /*)*/,
		     /*(*/ [tell("The water spills to the floor and evaporates immediately."),
	       	      remove_object(w)] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.throw_X_words,
	       tell("The water splashes on the walls, and evaporates immediately."),
	       remove_object(w)] /*)*/)
  }

function rope_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    let droom: room = find_room("DOME");
    let rope: object = find_obj("ROPE");
    let win: adv = GLOBALS.winner;
    cond(/*(*/ [GLOBALS.here !== droom,
	 GLOBALS.dome_flag_X_flag = false,
	 cond(/*(*/ [vname(prsact) === tie_X_words,
		tell("There is nothing it can be tied to.")] /*)*/,
	       /*(*/ [vname(prsact) === untie_X_words,
		tell("It is not tied to anything.")] /*)*/)] /*)*/,
	/*(*/ [vname(prsact) === tie_X_words && GLOBALS.prsvec[3] === find_obj("RAILI"),
	 cond(/*(*/ [GLOBALS.dome_flag_X_flag,		tell("The rope is already attached.")] /*)*/,
	       /*(*/ [tell("The rope drops over the side and comes within ten feet of the floor."),
		GLOBALS.dome_flag_X_flag = t,
		tro(rope,GLOBALS.ndescbit),
		cond(/*(*/ [!oroom(rope),
		       put(win,GLOBALS.aobjs,splice_out(rope,aobjs(win))),
		       insert_object(rope,droom)] /*)*/)] /*)*/)] /*)*/,
	/*(*/ [vname(prsact) === untie_X_words,
	 cond(/*(*/ [GLOBALS.dome_flag_X_flag,		GLOBALS.dome_flag_X_flag = false,
		trz(rope,GLOBALS.ndescbit),
		tell("Although you tied it incorrectly, the rope becomes free.")] /*)*/,
	       /*(*/ [tell("It is not tied to anything.")] /*)*/)] /*)*/,
	/*(*/ [prsact === GLOBALS.drop_X_words && !GLOBALS.dome_flag_X_flag,
	 remove_object(rope),
	 insert_object(rope,find_room("TORCH")),
	 tell("The rope drops gently to the floor below.")] /*)*/,
	/*(*/ [prsact === GLOBALS.take_X_words && GLOBALS.dome_flag_X_flag && tell("The rope is tied to the railing.")] /*)*/)
  }

function cyclops() {
    let prsact: verb = GLOBALS.prsvec[1];
    let prsob1: object | false = GLOBALS.prsvec[2];
    let rm: room = GLOBALS.here;
    let food: object = find_obj("FOOD");
    let drink: object = find_obj("WATER");
    let count: number = rvars(rm);
    let garlic: object = find_obj("GARLI");
    let cyc: object = null;
    cond(/*(*/ [GLOBALS.cyclops_flag_X_flag,	       cond(/*(*/ [prsact === GLOBALS.awake_X_words || prsact === GLOBALS.mung_X_words || prsact === GLOBALS.burn_X_words || prsact === GLOBALS.fight_X_words,
		      tell("The cyclops yawns and stares at the thing that woke him up."),
		      GLOBALS.cyclops_flag_X_flag = false,
		      trz(cyc = find_obj("CYCLO"), GLOBALS.sleepbit),
		      tro(cyc,GLOBALS.fightbit),
		      put(rm,GLOBALS.rvars,abs(rvars(rm))),
		      t] /*)*/)] /*)*/,
	      /*(*/ [abs(count) > 5,
	       jigs_up("The cyclops, tired of all of your games and trickery, eats you.\nThe cyclops says 'Mmm.  Just like mom used to make 'em.'")] /*)*/,
	      /*(*/ [vname(prsact) === give_X_words,
	       cond(/*(*/ [prsob1 === food,
		      cond(/*(*/ [g__Q(count,0),
			     remove_object(food),
			     tell("The cyclops says 'Mmm Mmm.  I love hot peppers!  But oh, could I use\na drink.  Perhaps I could drink the blood of that thing'.  From the\ngleam in his eye, it could be surmised that you are 'that thing'."),
			     put(rm,GLOBALS.rvars,min(_1, _(count)))] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === drink,
		      cond(/*(*/ [count < 0,
			     remove_object(drink),
			     tro(cyc = find_obj("CYCLO"), GLOBALS.sleepbit),
			     trz(cyc,GLOBALS.fightbit),
			     tell("The cyclops looks tired and quickly falls fast asleep (what did you\nput in that drink, anyway?)."),
			     GLOBALS.cyclops_flag_X_flag = t] /*)*/,
			    /*(*/ [tell("The cyclops apparently was not thirsty at the time and refuses your\ngenerous gesture."),
			     false] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === garlic,
		      tell("The cyclops may be hungry, but there is a limit."),
		      put(rm,GLOBALS.rvars,aos_sos(count))] /*)*/,
		     /*(*/ [tell("The cyclops is not so stupid as to eat THAT!"),
		      put(rm,GLOBALS.rvars,aos_sos(count))] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.first_Q_X_words || prsact === GLOBALS.fight_X_words, false] /*)*/,
	      /*(*/ [put(rm,GLOBALS.rvars,aos_sos(count)) && false] /*)*/,
	      /*(*/ [prsact === GLOBALS.throw_X_words || vname(prsact) === mung_X_words,
	       cond(/*(*/ [prob(50),
		      tell("Your actions don't appear to be doing much harm to the cyclops, but\nthey do not exactly lower your insurance premiums, either.")] /*)*/,
		     /*(*/ [tell("The cyclops ignores all injury to his body with a shrug.")] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.take_X_words,
	       tell("The cyclops is rather heavy and doesn't take kindly to being grabbed.")] /*)*/,
	      /*(*/ [prsact === GLOBALS.tie_X_words,
	       tell("You cannot tie the cyclops, although he is fit to be tied.")] /*)*/)
  }

function cyclops_room() {
    let pv: vector = GLOBALS.prsvec;
    let rm: room = GLOBALS.here;
    let vars: number = rvars(rm);
    cond(/*(*/ [pv[1] === GLOBALS.look_X_words,
	       tell("You are in a room with an exit on the west side, and a staircase\nleading up."),
	       cond(/*(*/ [GLOBALS.cyclops_flag_X_flag && !GLOBALS.magic_flag_X_flag,
		      tell("The cyclops, perhaps affected by a drug in your drink, is sleeping\nblissfully at the foot of the stairs.")] /*)*/,
		     /*(*/ [GLOBALS.magic_flag_X_flag,		      tell("On the north of the room is a wall which used to be solid, but which\nnow has a cyclops-sized hole in it.")] /*)*/,
		     /*(*/ [0_Q(vars),
		      tell("A cyclops, who looks prepared to eat horses (much less mere\nadventurers), blocks the staircase.  From his state of health, and\nthe bloodstains on the walls, you gather that he is not very\nfriendly, though he likes people.", 1)] /*)*/,
		     /*(*/ [vars > 0,
		      tell("The cyclops is standing in the corner, eyeing you closely.  I don't\nthink he likes you very much.  He looks extremely hungry even for a\ncyclops.")] /*)*/,
		     /*(*/ [vars < 0,
		      tell("The cyclops, having eaten the hot peppers, appears to be gasping.\nHis enflamed tongue protrudes from his man-sized mouth.")] /*)*/),
	       cond(/*(*/ [GLOBALS.cyclops_flag_X_flag] /*)*/,
	             /*(*/ [0_Q(vars) || tell(GLOBALS.cyclomad[abs(vars)])] /*)*/)] /*)*/)
  }

psetg(cyclomad,
      () => /*[*/ ["The cyclops seems somewhat agitated.",
	"The cyclops appears to be getting more agitated.",
	"The cyclops is moving about the room, looking for something.",
	
"The cyclops was looking for salt and pepper.  I think he is gathering\ncondiments for his upcoming snack.",
	"The cyclops is moving toward you in an unfriendly manner.",
	"You have two choices: 1. Leave  2. Become dinner."] /*]*/)

gdecl(/*(*/ [cyclomad] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function aos_sos(foo: number) {
    cond(/*(*/ [foo < 0, foo = _(foo,1)] /*)*/,
	/*(*/ [foo = _(foo,1)] /*)*/)
cond(/*(*/ [GLOBALS.cyclops_flag_X_flag] /*)*/,
	/*(*/ [tell(GLOBALS.cyclomad[abs(foo)])] /*)*/)
  }

GLOBALS.echo_flag_X_flag = false

function echo_room() {
    let reader_string: string = GLOBALS.reader_string;
    let b: verb = GLOBALS.inbuf;
    let l: verb = null;
    let rm: room = find_room("ECHO");
    let outchan: channel = GLOBALS.outchan;
    let verb: verb = null;
    let walk: verb = GLOBALS.walk_X_words;
    cond(/*(*/ [GLOBALS.echo_flag_X_flag] /*)*/,
	      /*(*/ [unwind(prog(/*(*/ [] /*)*/,
		 mapf(false,
		   function(obj: object) {
                cond(/*(*/ [ovis_Q(obj),
			    tro(obj,GLOBALS.echo_room_bit),
			    trz(obj,GLOBALS.ovison)] /*)*/)
              },
		   robjs(rm)),
	        repeat(/*(*/ [/*(*/ [prsvec, GLOBALS.prsvec] /*)*/, random_action] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [prsvec] /*)*/, vector] /*)*/] /*2*/,
		       l = readstring(b,					GLOBALS.inchan,					reader_string),
		       readchr(GLOBALS.inchan),
		       GLOBALS.alt_flag || readchr(GLOBALS.inchan),
		       GLOBALS.moves = _(GLOBALS.moves,1),
		       cond(/*(*/ [eparse(lex(b,rest(b,l), t), t) && verb = prsvec[1] === walk && prsvec[2] && memq(chtype(prsvec[2], atom),
					 rexits(rm)),
			      random_action = vfcn(verb),
			      apply_random(random_action),
			      cond(/*(*/ [GLOBALS.here !== rm,
				     mapf(false,
				       function(x: object) {
                          cond(/*(*/ [trnn(x,GLOBALS.echo_room_bit),
						trz(x,GLOBALS.echo_room_bit),
						tro(x,GLOBALS.ovison)] /*)*/)
                        },
				       robjs(rm))] /*)*/),
			      return(t)] /*)*/,
			     /*(*/ [printstring(b,outchan,l),
			      GLOBALS.tell_flag = t,
			      crlf(),
			      cond(/*(*/ [member("ECHO", uppercase(b)) === b,
				     tell("The acoustics of the room change subtly.",
					   1),
				     GLOBALS.echo_flag_X_flag = t,
				     mapf(false,
					   function(x: object) {
                          cond(/*(*/ [trnn(x,GLOBALS.echo_room_bit),
							    trz(x,GLOBALS.echo_room_bit),
							    tro(x,GLOBALS.ovison)] /*)*/)
                        },
					   robjs(rm)),
				     return(t)] /*)*/)] /*)*/))),
		prog(/*(*/ [] /*)*/,
		      goto(find_room("CHAS3")),
		      GLOBALS.moves = _(GLOBALS.moves,1),
		      mapf(false,
			    function(x: object) {
                cond(/*(*/ [trnn(x,GLOBALS.echo_room_bit),
				     trz(x,GLOBALS.echo_room_bit),
				     tro(x,GLOBALS.ovison)] /*)*/)
              },
			    robjs(rm))))] /*)*/)
  }

function leaper() {
    let rm: room = GLOBALS.here;
    let exits: exit = rexits(rm);
    let m: room = null;
    cond(/*(*/ [m = memq(down_X_words, exits),
	  cond(/*(*/ [type_Q(m[2], nexit) || type_Q(m[2], cexit) && !cxflag(m[2]),
		 jigs_up(pick_one(GLOBALS.jumploss))] /*)*/)] /*)*/,
	 /*(*/ [tell(pick_one(GLOBALS.wheeeee))] /*)*/)
  }

function skipper() {
    tell(pick_one(GLOBALS.wheeeee))
  }

GLOBALS.hs = 0

gdecl(/*(*/ [hs] /*)*/, fix)

function hello() {
    let prsobj: object | false = GLOBALS.prsvec[2];
    let amt: number = GLOBALS.hs = _(GLOBALS.hs,1);
    cond(/*(*/ [prsobj,	   cond(/*(*/ [prsobj === find_obj("SAILO"),
		  cond(/*(*/ [0_Q(mod(amt,20)),
			 tell("You seem to be repeating yourself.")] /*)*/,
			/*(*/ [0_Q(mod(amt,10)),
			 tell("I think that phrase is getting a bit worn out.")] /*)*/,
			/*(*/ [tell("Nothing happens here.")] /*)*/)] /*)*/,
		 /*(*/ [prsobj === find_obj("AVIAT"),
		  tell("Here, nothing happens.")] /*)*/,
		 /*(*/ [tell("I think that only schizophrenics say 'Hello' to a", 1, odesc2(prsobj), ".")] /*)*/)] /*)*/,
	  /*(*/ [tell(pick_one(GLOBALS.hellos))] /*)*/)
  }

psetg(hellos,
      () => /*[*/ ["Hello.",
	"Good day.",
	"Nice weather we've been having lately",
	"How are you?",
	"Goodbye."] /*]*/)

psetg(wheeeee,
      () => /*[*/ ["Very good.  Now you can go to the second grade.",
	"Have you tried hopping around the dungeon, too?",
	"Are you enjoying yourself?",
	"Wheeeeeeeeee!!!!!",
	"Do you expect me to applaud?"] /*]*/)

psetg(jumploss,
      () => /*[*/ ["You should have looked before you leaped.",
	"I'm afraid that leap was a bit much for your weak frame.",
	"In the movies, your life would be passing in front of your eyes.",
	"Geronimo....."] /*]*/)

gdecl(/*(*/ [hellos, wheeeee, jumploss] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function reader() {
    let pv: vector = GLOBALS.prsvec;
    let po: object = pv[2];
    let pi: false | object = pv[3];
    cond(/*(*/ [!lit_Q(GLOBALS.here),
	   tell("It is impossible to read in the dark.")] /*)*/,
	  /*(*/ [pi && !transparent_Q(pi),
	   tell("How does one look through a", 1, odesc2(pi), "?")] /*)*/,
	  /*(*/ [!readable_Q(po),
	   tell("How can I read a", 1, odesc2(po), "?")] /*)*/,
	  /*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(oread(po))] /*)*/)
  }

function well() {
    cond(/*(*/ [GLOBALS.riddle_flag_X_flag,tell("Well what?")] /*)*/,
	  /*(*/ [GLOBALS.here === find_room("RIDDL"),
	   GLOBALS.riddle_flag_X_flag = t,
	   tell("There is a clap of thunder and the east door opens.")] /*)*/,
	  /*(*/ [tell("Well what?")] /*)*/)
  }

function sinbad() {
    cond(/*(*/ [GLOBALS.here === find_room("CYCLO") && memq(find_obj("CYCLO"), robjs(GLOBALS.here)),
	   GLOBALS.cyclops_flag_X_flag = t,
	   tell("The cyclops, hearing the name of his deadly nemesis, flees the room\nby knocking down the wall on the north of the room."),
	   GLOBALS.magic_flag_X_flag = t,
	   remove_object(find_obj("CYCLO"))] /*)*/,
	  /*(*/ [tell("Wasn't he a sailor?")] /*)*/)
  }

function granite() {
    tell("I think you are taking this thing for granite.")
  }

psetg(dummy,
      () => /*[*/ ["Look around.",
	"You think it isn't?",
	"I think you've already done that."] /*]*/)

gdecl(/*(*/ [dummy] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function brush() {
    let prso: object = GLOBALS.prsvec[2];
    let prsi: object | false = GLOBALS.prsvec[3];
    cond(/*(*/ [prso === find_obj("TEETH"),
	   cond(/*(*/ [prsi === find_obj("PUTTY") && memq(prsi,aobjs(GLOBALS.winner)),
		  jigs_up("Well, you seem to have been brushing your teeth with some sort of\nglue. As a result, your mouth gets glued together (with your nose)\nand you die of respiratory failure.")] /*)*/,
		 /*(*/ [!prsi,
		  tell("Dental hygiene is highly recommended, but I'm not sure what you want\nto brush them with.")] /*)*/,
		 /*(*/ [tell("A nice idea, but with a", 1, odesc2(prsi), "?")] /*)*/)] /*)*/,
	  /*(*/ [tell("If you wish, but I can't understand why??")] /*)*/)
  }

function ring() {
    let prsobj: object | false = GLOBALS.prsvec[2];
    cond(/*(*/ [prsobj === find_obj("BELL"),
	   tell("Ding, dong.")] /*)*/,
	  /*(*/ [tell("How, exactly, can I ring that?")] /*)*/)
  }

function eat() {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let eat_Q: atom | false = false;
    let drink_Q: atom | false = false;
    let prsobj: object = prsvec[2];
    let nobj: object | false = null;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(GLOBALS.winner);
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [eat_Q = edible_Q(prsobj) && memq(prsobj,aobjs),
	   cond(/*(*/ [prsvec[1] === GLOBALS.drink_X_words,
		  tell("How can I drink that?")] /*)*/,
		 /*(*/ [tell("Thank you very much.  It really hit the spot."),
		  put(GLOBALS.winner,GLOBALS.aobjs,splice_out(prsobj,aobjs))] /*)*/)] /*)*/,
	  /*(*/ [drink_Q = drinkable_Q(prsobj) && nobj = ocan(prsobj) && memq(nobj,aobjs),
	   cond(/*(*/ [oopen_Q(nobj),
		  tell("Thank you very much.  I was rather thirsty (from all this talking,\nprobably).")] /*)*/,
		 /*(*/ [t,
		  tell("I'd like to, but I can't get to it.")] /*)*/),
	   put(prsobj,GLOBALS.ocan,false),
	   put(nobj,GLOBALS.ocontents,splice_out(prsobj,ocontents(nobj)))] /*)*/,
	  /*(*/ [!eat_Q || drink_Q,
	   tell("I don't think that the", 1, odesc2(prsobj), "would agree with you.")] /*)*/,
	  /*(*/ [tell("I think you should get that first.")] /*)*/)
  }

function jargon() {
    tell("Well, FOO, BAR, and BLETCH to you too!")
  }

function curses() {
    tell(pick_one(GLOBALS.offended))
  }

psetg(offended, 
  () => /*[*/ ["Such language in a high-class establishment like this!",
    "You ought to be ashamed of yourself.",
    "Its not so bad.  You could have been killed already.",
    "Tough shit, asshole.",
    "Oh, dear.  Such language from a supposed winning adventurer!"] /*]*/)

gdecl(/*(*/ [offended] /*)*/, vector(/*[*/ [rest, string] /*]*/))

"ROBBER"

define(robber, robber, /*(*/ [hack,
		       "AUX", /*(*/ [rm, hroom(hack)] /*)*/, robj,
			     /*(*/ [seen_Q, rseen_Q(rm)] /*)*/, /*(*/ [win, GLOBALS.winner] /*)*/, /*(*/ [wroom, GLOBALS.here] /*)*/,
			     /*(*/ [hobj, hobj(hack)] /*)*/, /*(*/ [still, find_obj("STILL")] /*)*/, 
			     here_Q, /*(*/ [hh, hobjs(hack)] /*)*/, /*(*/ [treas, find_room("TREAS")] /*)*/] /*)*/,
   /*#*/ [decl, /*(*/ [/*(*/ [hack] /*)*/, hack, /*(*/ [rm, wroom] /*)*/, room, /*(*/ [robj, hh] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [seen_Q] /*)*/, atom || false, /*(*/ [win] /*)*/, adv, /*(*/ [hobj] /*)*/, object, /*(*/ [robber] /*)*/, activation,
	  /*(*/ [here_Q] /*)*/, room || false, /*(*/ [still] /*)*/, object, /*(*/ [treas] /*)*/, room] /*)*/] /*2*/,
   prog(/*(*/ [/*(*/ [once, false] /*)*/, objt] /*)*/,
     /*#*/ [decl, /*(*/ [/*(*/ [once] /*)*/, atom || false, /*(*/ [objt] /*)*/, list(/*[*/ [rest, object] /*]*/)] /*)*/] /*2*/,
     cond(/*(*/ [here_Q = oroom(hobj),
	    rm = here_Q] /*)*/),
     robj = robjs(rm),
     objt = hh,
     cond(/*(*/ [rm === treas && rm !== wroom,
       cond(/*(*/ [here_Q,	      cond(/*(*/ [oroom(still) === treas,
		     snarf_object(hobj,still)] /*)*/),
	      remove_object(hobj),
	      here_Q = false] /*)*/),
       mapf(false,
	     function(x: object) {
              cond(/*(*/ [otval(x) > 0,
			    put(hack,GLOBALS.hobjs,hh = splice_out(x,hh)),
			    insert_object(x,rm)] /*)*/)
            },
	     hh)] /*)*/,
      /*(*/ [rm === wroom,		 // Adventurer is in room:  CHOMP, CHOMP,
       cond(/*(*/ [rm === treas] /*)*/,	// Don't move, Gertrude,
        /*(*/ [!hflag(hack),
         cond(/*(*/ [!here_Q && prob(30),
	        cond(/*(*/ [ocan(still) === hobj,
		       insert_object(hobj,rm),
		       tell("Someone carrying a large bag is casually leaning against one of the\nwalls here.  He does not speak, but it is clear from his aspect that\nthe bag will be taken only over his dead body."),
		       put(hack,GLOBALS.hflag,t),
		       return(t, robber)] /*)*/)] /*)*/,
	       /*(*/ [here_Q && fighting_Q(hobj) && cond(/*(*/ [!winning_Q(hobj,win),
			    tell("Your opponent, determining discretion to be the better part of\nvalor, decides to terminate this little contretemps.  With a rueful\nnod of his head, he steps backward into the gloom and disappears."),
			    remove_object(hobj),
			    trz(hobj,GLOBALS.fighting),
			    snarf_object(hobj,still),
			    return(t, robber)] /*)*/,
			   /*(*/ [prob(90)] /*)*/)] /*)*/,
	       /*(*/ [here_Q && prob(30),
	        tell("The holder of the large bag just left, looking disgusted. \nFortunately, he took nothing."),
		remove_object(hobj),
		snarf_object(hobj,still),
	        return(t, robber)] /*)*/,
	       /*(*/ [prob(70), return(t, robber)] /*)*/,
	       /*(*/ [t,
		cond(/*(*/ [memq(still,hobjs(hack)),
		       put(hack,GLOBALS.hobjs,splice_out(still,hobjs(hack))),
		       put(hobj,GLOBALS.ocontents,/*(*/ [still] /*)*/),
		       put(still,GLOBALS.ocan,hobj)] /*)*/),
		put(hack,GLOBALS.hobjs,hh = rob_room(rm,hh,100)),
	        put(hack,GLOBALS.hobjs,hh = rob_adv(win,hh)),
	        put(hack,GLOBALS.hflag,t),
	        cond(/*(*/ [objt !== hh && !here_Q,
		       tell("A seedy-looking individual with a large bag just wandered through\nthe room.  On the way through, he quietly abstracted all valuables\nfrom the room and from your possession, mumbling something about\n\"Doing unto others before..\")] /*)*/,
		      /*(*/ [here_Q,		       snarf_object(hobj,still),
		       cond(/*(*/ [objt !== hh,
			      tell("The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")] /*)*/,
			     /*(*/ [tell("The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")] /*)*/),
		       remove_object(hobj),
		       here_Q = false] /*)*/,
		      /*(*/ [t,
		       tell("A 'lean and hungry' gentleman just wandered through.  Finding\nnothing of value, he left disgruntled.")] /*)*/)] /*)*/)] /*)*/,
	/*(*/ [t,
	 cond(/*(*/ [here_Q,		// Here, already announced.,
		cond(/*(*/ [prob(30),
		       put(hack,GLOBALS.hobjs,hh = rob_room(rm,hh,100)),
		       put(hack,GLOBALS.hobjs,hh = rob_adv(win,hh)),
		       cond(/*(*/ [memq(find_obj("ROPE"), hh),
			      GLOBALS.dome_flag_X_flag = false] /*)*/),
		       cond(/*(*/ [objt === hh,
			      tell("The other occupant (he of the large bag), finding nothing of value,\nleft disgusted.")] /*)*/,
			     /*(*/ [t,
			      tell("The other occupant just left, still carrying his large bag.  You may\nnot have noticed that he robbed you blind first.")] /*)*/),
		       remove_object(hobj),
		       here_Q = false,
		       snarf_object(hobj,still)] /*)*/,
		      /*(*/ [return(t, robber)] /*)*/)] /*)*/)] /*)*/)] /*)*/,
      /*(*/ [memq(hobj,robjs(rm)) && // Leave if victim left && snarf_object(hobj,still) && remove_object(hobj) && here_Q = false] /*)*/,
      /*(*/ [oroom(still) === rm && snarf_object(hobj,still) && false] /*)*/,
      /*(*/ [seen_Q,			     // Hack the adventurer's belongings,
       put(hack,GLOBALS.hobjs,hh = rob_room(rm,hh,75)),
       cond(/*(*/ [rdesc2(rm) === GLOBALS.mazedesc && rdesc2(wroom) === GLOBALS.mazedesc,
	 mapf(false,
	       function(x: object) {
                  cond(/*(*/ [can_take_Q(x) && ovis_Q(x) && prob(40),
			      tell("You hear, off in the distance, someone saying \"My, I wonder what\nthis fine",		      3, odesc2(x), "is doing here.\"),
			      tell("", 1),
			      cond(/*(*/ [prob(60),
				     remove_object(x),
				     put(x,GLOBALS.otouch_Q,t),
				     put(hack,GLOBALS.hobjs,hh = /*(*/ [x,_X,hh] /*)*/)] /*)*/),
			      mapleave()] /*)*/)
                },
	       robjs(rm))] /*)*/,
	/*(*/ [mapf(false,
	       function(x: object) {
                  cond(/*(*/ [0_Q(otval(x)) && can_take_Q(x) && ovis_Q(x) && prob(20),
			      remove_object(x),
			      put(x,GLOBALS.otouch_Q,t),
			      put(hack,GLOBALS.hobjs,hh = /*(*/ [x,_X,hh] /*)*/),
			      cond(/*(*/ [rm === wroom,
				     tell("You suddenly notice that the",
					   1,
					   odesc2(x),
					   "vanished.")] /*)*/),
			      mapleave()] /*)*/)
                },
	       robjs(rm)),
	 cond(/*(*/ [memq(find_obj("ROPE"), hh),
		GLOBALS.dome_flag_X_flag = false] /*)*/)] /*)*/)] /*)*/),
     cond(/*(*/ [once = !once,		 // Move to next room, and hack.,
	    prog(/*(*/ [/*(*/ [rooms, hrooms(hack)] /*)*/] /*)*/,
	      rm = rooms[1],
	      cond(/*(*/ [empty_Q(rooms = rest(rooms)),
		     rooms = GLOBALS.rooms] /*)*/),
	      cond(/*(*/ [rtrnn(rm,GLOBALS.rsacredbit),	// Can I work here?,
		     again()] /*)*/),
	      put(hack,GLOBALS.hroom,rm),
	      put(hack,GLOBALS.hflag,false),
	      put(hack,GLOBALS.hrooms,rooms),
	      seen_Q = rseen_Q(rm)),
	    again()] /*)*/)),			      // Drop worthless cruft, sometimes,
   rm === treas || mapf(false,
	     function(x: object) {
          cond(/*(*/ [0_Q(otval(x)) && prob(30),
			    put(hack,GLOBALS.hobjs,hh = splice_out(x,hh)),
			    insert_object(x,rm),
			    rm === wroom && tell("The robber, rummaging through his bag, dropped a few items he found\nvalueless.")] /*)*/)
        },
	      hh))

function snarf_object(who: object, what: object) {
    cond(/*(*/ [ocan(what) !== who && oroom(what) || ocan(what),
	       remove_object(what),
	       put(what,GLOBALS.ocan,who),
	       put(who,GLOBALS.ocontents,/*(*/ [what,_X,ocontents(who)] /*)*/)] /*)*/,
	      /*(*/ [who] /*)*/)
  }

function robber_function() {
    let prsact: verb = GLOBALS.prsvec[1];
    let dem: hack = get_demon("THIEF");
    let pv: vector = GLOBALS.prsvec;
    let prsobj: object | false = pv[2];
    let here: room = GLOBALS.here;
    let flg: atom | false = false;
    let brick: object = null;
    let fuse: object = null;
    let st: object = null;
    let f: object = null;
    let t: verb = hobj(dem);
    let chali: object = find_obj("CHALI");
    cond(/*(*/ [prsact === GLOBALS.fight_X_words,
	 cond(/*(*/ [ocan(st = find_obj("STILL")) === t, false] /*)*/,
	       /*(*/ [oroom(st) === here,
		snarf_object(t,st),
		tell("The robber, somewhat surprised at this turn of events, nimbly\nretrieves his stilletto."),
		t] /*)*/,
	       /*(*/ [else,
		tell("Annoyed to be left unarmed in such an obviously dangerous\nneighborhood, the thief slips off into the shadows."),
		tro(chali,GLOBALS.takebit),
		remove_object(t)] /*)*/)] /*)*/,
	/*(*/ [prsact === GLOBALS.dead__X_X_words,
	 cond(/*(*/ [!empty_Q(hobjs(dem)),
		tell("His booty remains."),
		mapf(false, function(x: object) {
                insert_object(x,here)
tro(x,GLOBALS.echo_room_bit)
              },
		      hobjs(dem)),
		put(dem,GLOBALS.hobjs,/*(*/ [] /*)*/)] /*)*/),
	 tro(chali,GLOBALS.takebit),
	 cond(/*(*/ [here === find_room("TREAS"),
		mapf(false,
		  function(x: object) {
                cond(/*(*/ [x !== chali && x !== t,
			   cond(/*(*/ [trnn(x,GLOBALS.echo_room_bit),
				  trz(x,GLOBALS.echo_room_bit)] /*)*/,
				 /*(*/ [tro(x,GLOBALS.ovison),
				  cond(/*(*/ [!flg,
					 flg = t,
					 tell("As the thief dies, the power of his magic decreases, and his\ntreasures reappear:", 2)] /*)*/),
				  tell("A", 2, odesc2(x))] /*)*/)] /*)*/)
              },
		  robjs(here))] /*)*/),
	 put(dem,GLOBALS.haction,false)] /*)*/,
	/*(*/ [prsact === GLOBALS.first_Q_X_words, prob(20)] /*)*/,
	/*(*/ [prsact === GLOBALS.out__X_X_words,
	 put(dem,GLOBALS.haction,false),
	 trz(find_obj("STILL"), GLOBALS.ovison),
	 tro(chali,GLOBALS.takebit),
	 put(t,GLOBALS.odesc1,GLOBALS.robber_u_desc)] /*)*/,
	/*(*/ [prsact === GLOBALS.in__X_X_words,
	 cond(/*(*/ [hroom(dem) === here,
		tell("The robber revives, briefly feigning continued unconsciousness, and\nwhen he sees his moment, scrambles away from you.")] /*)*/),
	 cond(/*(*/ [type_Q(GLOBALS.robber,offset), put(dem,GLOBALS.haction,robber)] /*)*/,
	       /*(*/ [put(dem,GLOBALS.haction,robber)] /*)*/),
	 put(t,GLOBALS.odesc1,GLOBALS.robber_c_desc),
	 cond(/*(*/ [here === find_room("TREAS") && oroom(chali = chali),
		trz(chali,GLOBALS.takebit)] /*)*/),
	 tro(find_obj("STILL"), GLOBALS.ovison)] /*)*/,
	/*(*/ [type_Q(prsobj,object) && pv[2] === GLOBALS.knife_X_objects && vname(prsact) === throw_X_words && !trnn(t,GLOBALS.fightbit),
	 cond(/*(*/ [prob(10),
		tell("You evidently frightened the robber, though you didn't hit him.  He\nflees",		 1,
		 cond(/*(*/ [empty_Q(hobjs(dem)),
		        "."] /*)*/,
		       /*(*/ [t,
		        mapf(false, function(x: object) {
                      insert_object(x,here)
                    }, hobjs(dem)),
			put(dem,GLOBALS.hobjs,/*(*/ [] /*)*/),
		        ", but the contents of his bag fall on the floor."] /*)*/)),
		remove_object(t)] /*)*/,
	       /*(*/ [t,
		tell("You missed.  The thief makes no attempt to take the knife, though it\nwould be a fine addition to the collection in his bag.  He does seem\nangered by your attempt."),
		tro(t,GLOBALS.fightbit)] /*)*/)] /*)*/,
	/*(*/ [prsact === GLOBALS.throw_X_words || prsact === GLOBALS.give_X_words && type_Q(prsobj,object) && prsobj !== hobj(dem),
	 cond(/*(*/ [ocapac(t) < 0,
		put(t,GLOBALS.ocapac,_(ocapac(t))),
		put(dem,GLOBALS.haction,cond(/*(*/ [type_Q(GLOBALS.robber,offset), GLOBALS.robber] /*)*/,
					 /*(*/ [robber] /*)*/)),
		tro(find_obj("STILL"), GLOBALS.ovison),
		put(t,GLOBALS.odesc1,GLOBALS.robber_c_desc),
		tell("Your proposed victim suddenly recovers consciousness.")] /*)*/),
	 cond(/*(*/ [prsobj === brick = find_obj("BRICK") && ocan(fuse = find_obj("FUSE")) === brick && orand(fuse) && !0_Q(ctick(f = orand(fuse)[2])),
		// I.e., he's trying to give us the brick with a lighted fuse.,
		tell("The thief seems rather offended by your offer.  Do you think he's as\nstupid as you are?")] /*)*/,
	       /*(*/ [remove_object(prsobj),
		put(dem,GLOBALS.hobjs,/*(*/ [prsobj,_X,hobjs(dem)] /*)*/),
		tell("The thief places the", 1, odesc2(prsobj), "in his bag and thanks\nyou politely.")] /*)*/)] /*)*/,
	/*(*/ [prsact && vname(prsact) === take_X_words,
	 tell("Once you got him, what would you do with him?")] /*)*/)
  }

function chalice() {
    let prsa: verb = GLOBALS.prsvec[1];
    let ch: object = GLOBALS.prsvec[2];
    let tr: room = null;
    let t: room = null;
    cond(/*(*/ [prsa === GLOBALS.take_X_words,
	       cond(/*(*/ [!ocan(ch) && oroom(ch) === tr = find_room("TREAS") && oroom(t = find_obj("THIEF")) === tr && fighting_Q(t) && haction(GLOBALS.robber_demon),
		      tell("Realizing just in time that you'd be stabbed in the back if you\nattempted to take the chalice, you return to the fray.")] /*)*/)] /*)*/)
  }

function burner() {
    let pv: vector = GLOBALS.prsvec;
    let prso: object = pv[2];
    let prsi: object = pv[3];
    cond(/*(*/ [flaming_Q(prsi),
	    cond(/*(*/ [object_action()] /*)*/,
		  /*(*/ [avehicle(GLOBALS.winner) === find_obj("BALLO") && balloon()] /*)*/,
		  /*(*/ [burnable_Q(prso) && cond(/*(*/ [memq(prso,aobjs(GLOBALS.winner)),
			       tell("The", 1, odesc2(prso), "catches fire."),
			       jigs_up("Unfortunately, you were holding it at the time.")] /*)*/,
			      /*(*/ [hackable_Q(prso,GLOBALS.here),
			       tell("The", 1, odesc2(prso), "catches fire and is consumed."),
			       remove_object(prso)] /*)*/,
			      /*(*/ [tell("You don't have that.")] /*)*/)] /*)*/,
		  /*(*/ [tell("I don't think you can burn a", 1, odesc2(prso), ".")] /*)*/)] /*)*/,
	   /*(*/ [tell("With a", 1, odesc2(prsi), "??!?")] /*)*/)
  }

function turner() {
    let pv: vector = GLOBALS.prsvec;
    let prso: object = pv[2];
    let prsi: object = pv[3];
    cond(/*(*/ [trnn(prso,GLOBALS.turnbit),
	   cond(/*(*/ [trnn(prsi,GLOBALS.toolbit),
		  object_action()] /*)*/,
		 /*(*/ [tell("You certainly can't turn it with a", 1, odesc2(prsi), ".")] /*)*/)] /*)*/,
	  /*(*/ [tell("You can't turn that!")] /*)*/)
  }

psetg(doormungs,
  () => /*[*/ ["The door is invulnerable.",
    "You cannot damage this door.",
    "The door is still under warranty."] /*]*/)

gdecl(/*(*/ [doormungs] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function ddoor_function() {
    let pa: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [pa === GLOBALS.open_X_words,
	   tell("The door cannot be opened.")] /*)*/,
	  /*(*/ [pa === GLOBALS.burn_X_words,
	   tell("You cannot burn this door.")] /*)*/,
	  /*(*/ [pa === GLOBALS.mung_X_words,
	   tell(pick_one(GLOBALS.doormungs))] /*)*/)
  }

function inflater() {
    let prsi: object = GLOBALS.prsvec[2];
    let prso: object = GLOBALS.prsvec[3];
    cond(/*(*/ [prsi === find_obj("IBOAT"),
	   cond(/*(*/ [prso === find_obj("PUMP"),
		  object_action()] /*)*/,
		 /*(*/ [tell("You would inflate it with that?")] /*)*/)] /*)*/,
	  /*(*/ [prsi === find_obj("RBOAT"),
	   tell("Inflating it further would probably burst it.")] /*)*/,
	  /*(*/ [tell("How can you inflate that?")] /*)*/)
  }

function deflater() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [prso === find_obj("RBOAT"),
	   object_action()] /*)*/,
	  /*(*/ [tell("Come on, now!")] /*)*/)
  }

function locker() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [prso === find_obj("GRAT2"),
	   GLOBALS.grunlock_X_flag = false,
	   tell("The grate is locked."),
	   mapf(false,
		 function(x: cexit | nexit | room) {
            cond(/*(*/ [type_Q(x,cexit) && cxflag(x) === key_flag_X_flag,
				  put(x,GLOBALS.cxstr,"The grate is locked."),
				  mapleave()] /*)*/)
          },
		 rexits(GLOBALS.here))] /*)*/,
	  /*(*/ [tell("It doesn't seem to work.")] /*)*/)
  }

function unlocker() {
    let prso: object = GLOBALS.prsvec[2];
    let prsi: object = GLOBALS.prsvec[3];
    let r: object = find_room("MGRAT");
    cond(/*(*/ [prso === find_obj("GRAT2"),
	   cond(/*(*/ [prsi === find_obj("KEYS"),
		  GLOBALS.grunlock_X_flag = t,
		  tell("The grate is unlocked."),
		  mapf(false,
			function(x: cexit | nexit | room) {
                cond(/*(*/ [type_Q(x,cexit) && cxflag(x) === key_flag_X_flag,
				 put(x,GLOBALS.cxstr,"The grate is closed."),
				 mapleave()] /*)*/)
              },
			rexits(r))] /*)*/,
		 /*(*/ [tell("Can you unlock a grating with a", 1, odesc2(prsi), "?")] /*)*/)] /*)*/,
	  /*(*/ [tell("It doesn't seem to work.")] /*)*/)
  }

function killer() {
    let pv: vector = GLOBALS.prsvec;
    let prso: false | object = pv[2];
    let prsi: false | object = pv[3];
    cond(/*(*/ [!prso,
	       tell("There is nothing here to kill.")] /*)*/,
	      /*(*/ [!prsi,
	       tell("Trying to kill a", 1, odesc2(prso),
		     "with your bare hands is suicidal.")] /*)*/,
	      /*(*/ [!trnn(prsi,GLOBALS.weaponbit),
	       tell("Trying to kill a", 0, odesc2(prso),
		     "with a"),
	       tell(odesc2(prsi), 1, "is suicidal.")] /*)*/, 
	      /*(*/ [else,
	       blow(GLOBALS.player,prso,orand(prsi), t, false)] /*)*/)
  }

function attacker() {
    let pv: vector = GLOBALS.prsvec;
    let prso: false | object = pv[2];
    let prsi: false | object = pv[3];
    cond(/*(*/ [!prso,
	       tell("There is nothing here to attack.")] /*)*/,
	      /*(*/ [!prsi,
	       tell("Attacking a", 1, odesc2(prso),
		     "with your bare hands is suicidal.")] /*)*/,
	      /*(*/ [!trnn(prsi,GLOBALS.weaponbit),
	       tell("Attacking a", 0, odesc2(prso),
		      "with a"),
	       tell(odesc2(prsi), 1, "is suicidal.")] /*)*/,
	      /*(*/ [else,
	       blow(GLOBALS.player,prso,orand(prsi), t, false)] /*)*/)
  }

function swinger() {
    let pv: vector = GLOBALS.prsvec;
    let prso: false | object = pv[2];
    let prsi: false | object = pv[3];
    put(pv,2, prsi)
put(pv,3, prso)
attacker()
  }

function hack_hack(obj: object, str: string, obj2?: false | string) {
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [obj2,	   tell(str,0, odesc2(obj), "with a"),
	   tell(obj2,1, pick_one(GLOBALS.ho_hum))] /*)*/,
	  /*(*/ [else,
	   tell(str,1, odesc2(obj), pick_one(GLOBALS.ho_hum))] /*)*/)
  }

psetg(ho_hum,
 () => /*[*/ ["does not seem to do anything.",
   "is not notably useful.",
   "isn't very interesting.",
   "doesn't appear worthwhile.",
   "has no effect.",
   "doesn't do anything."] /*]*/)

gdecl(/*(*/ [ho_hum] /*)*/, vector(/*[*/ [rest, string] /*]*/))

function munger() {
    let prso: object = GLOBALS.prsvec[2];
    let prsw: object | false = GLOBALS.prsvec[3];
    cond(/*(*/ [trnn(prso,GLOBALS.villain),
	   cond(/*(*/ [prsw,		  cond(/*(*/ [trnn(prsw,GLOBALS.weaponbit),
			 blow(GLOBALS.player,prso,orand(prsw), t, false)] /*)*/,
			/*(*/ [t,
			 tell("Munging a", 0, odesc2(prso), "with a"),
			 tell(odesc2(prsw), 1, "is quite self-destructive.")] /*)*/)] /*)*/,
		 /*(*/ [t,
		  tell("Munging a", 1, odesc2(prso), "with your bare hands is suicidal.")] /*)*/)] /*)*/,
	  /*(*/ [hack_hack(prso,"Munging a")] /*)*/)
  }

function kicker() {
    let prso: object = GLOBALS.prsvec[2];
    hack_hack(prso,"Munging a")
  }

function waver() {
    let prso: object = GLOBALS.prsvec[2];
    hack_hack(prso,"Waving a")
  }

function r_l() {
    let prso: object = GLOBALS.prsvec[2];
    hack_hack(prso,"Playing in this way with a")
  }

function rubber() {
    let prso: object = GLOBALS.prsvec[2];
    hack_hack(prso,"Fiddling with a")
  }

function exorcise() {
    cond(/*(*/ [object_action()] /*)*/, /*(*/ [t] /*)*/)
  }

function plugger() {
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [tell("This has no effect.")] /*)*/)
  }

function untie() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [trnn(prso,GLOBALS.tiebit),
	   tell("I don't think so.")] /*)*/,
	  /*(*/ [tell("This cannot be tied, so it cannot be untied!")] /*)*/)
  }

function pusher() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [memq(butto_X_objects, onames(prso))] /*)*/,
	  /*(*/ [hack_hack(prso,"Pushing the")] /*)*/)
  }

function tie() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [trnn(prso,GLOBALS.tiebit),
	   cond(/*(*/ [object_action()] /*)*/,
		 /*(*/ [tell("You can't tie it to that.")] /*)*/)] /*)*/,
	  /*(*/ [tell("How can you tie that to anything.")] /*)*/)
  }

function melter() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [tell("I'm not sure that a", 1, odesc2(prso), "can be melted.")] /*)*/)
  }

GLOBALS.on_pole_X_flag = false

function body_function() {
    let prsa: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [prsa === GLOBALS.take_X_words,
	   tell("A force keeps you from taking the bodies.")] /*)*/,
	  /*(*/ [prsa === GLOBALS.mung_X_words || prsa === GLOBALS.burn_X_words,
	   cond(/*(*/ [GLOBALS.on_pole_X_flag] /*)*/,
		 /*(*/ [GLOBALS.on_pole_X_flag = t,
		  insert_object(find_obj("HPOLE"), find_room("LLD2"))] /*)*/),
	   jigs_up("The voice of the guardian of the dungeon booms out from the darkness \n'Your disrespect costs you your life!' and places your head on a pole.")] /*)*/)
  }

function mumbler() {
    tell("You'll have to speak up if you expect me to hear you!")
  }

function alarm() {
    let prso: object = GLOBALS.prsvec[2];
    cond(/*(*/ [trnn(prso,GLOBALS.sleepbit),
	   object_action()] /*)*/,
	  /*(*/ [tell("The", 1, odesc2(prso), "isn't sleeping.")] /*)*/)
  }

function zork() {
    tell("That word is replaced henceforth with DUNGEON.")
  }

function dungeon() {
    tell("At your service!")
  }

function painting() {
    let prsa: verb = GLOBALS.prsvec[1];
    let art: object = GLOBALS.prsvec[2];
    cond(/*(*/ [prsa === GLOBALS.mung_X_words,
	   put(art,GLOBALS.otval,0),
	   put(art,GLOBALS.odesc2,"worthless piece of canvas"),
	   put(art,GLOBALS.odesc1,"There is a worthless piece of canvas here."),
	   tell("Congratulations!  Unlike the other vandals, who merely stole the\nartist's masterpieces, you have destroyed one.")] /*)*/)
  }

psetg(dimmer, "The lamp appears to be getting dimmer.")

psetg(lamp_ticks, /*[*/ [50, 30, 20, 10, 4, 0] /*]*/)

psetg(lamp_tells, /*[*/ [GLOBALS.dimmer,GLOBALS.dimmer,GLOBALS.dimmer,GLOBALS.dimmer,"The lamp is dying."] /*]*/)

function lantern() {
    let pv: vector = GLOBALS.prsvec;
    let verb: verb = pv[1];
    let here: room = GLOBALS.here;
    let rlamp: object = find_obj("LAMP");
    let foo: vector(any, cevent) = null;
    cond(/*(*/ [verb === GLOBALS.throw_X_words,
	       tell("The lamp has smashed into the floor and the light has gone out."),
	       remove_object(find_obj("LAMP")),
	       insert_object(find_obj("BLAMP"), here)] /*)*/,
	      /*(*/ [verb === GLOBALS.c_int_X_words,
	       light_int(rlamp,GLOBALS.lntin,GLOBALS.lamp_ticks,GLOBALS.lamp_tells)] /*)*/,
	      /*(*/ [verb === GLOBALS.turn_on_X_words,
	       clock_enable(foo = orand(rlamp)[2]),
	       false] /*)*/,
	      /*(*/ [verb === GLOBALS.turn_off_X_words,
	       clock_disable(foo = orand(rlamp)[2]),
	       false] /*)*/)
  }

function sword_glow(dem: hack) {
    let sw: object = hobj(dem);
    let g: number = otval(sw);
    let here: room = GLOBALS.here;
    let ng: number = 0;
    cond(/*(*/ [!oroom(sw) && !ocan(sw) && memq(sw,aobjs(GLOBALS.player)),
	  cond(/*(*/ [infested_Q(here), ng = 2] /*)*/,
		/*(*/ [mapf(false,
		       function(e: room | cexit | nexit | atom) {
                cond(/*(*/ [type_Q(e,room),
					infested_Q(e) && mapleave(t)] /*)*/,
				       /*(*/ [type_Q(e,cexit),
					infested_Q(e[2]) && mapleave(t)] /*)*/)
              },
		       rexits(here)),
		 ng = 1] /*)*/),
	  cond(/*(*/ [ng === g] /*)*/,
		/*(*/ [ng === 2, tell("Your sword has begun to glow very brightly.")] /*)*/,
		/*(*/ [1_Q(ng), tell("Your sword is glowing with a faint blue glow.")] /*)*/,
		/*(*/ [0_Q(ng), tell("Your sword is no longer glowing.")] /*)*/),
	  put(sw,GLOBALS.otval,ng)] /*)*/,
	 /*(*/ [put(dem,GLOBALS.haction,false)] /*)*/)
  }

function sword() {
    let pa: verb = GLOBALS.prsvec[1];
    cond(/*(*/ [pa === GLOBALS.take_X_words && GLOBALS.winner === GLOBALS.player,
	       put(GLOBALS.sword_demon,GLOBALS.haction,cond(/*(*/ [type_Q(GLOBALS.sword_glow,offset),
						 GLOBALS.sword_glow] /*)*/,
						/*(*/ [sword_glow] /*)*/)),
	       false] /*)*/)
  }

function infested_Q(r: room) {
    let villains: list(/*[*/ [rest, object] /*]*/) = GLOBALS.villains;
    let dem: hack = get_demon("THIEF");
    r === hroom(dem) && haction(dem) || mapf(false,
		  function(v: object) {
          cond(/*(*/ [r === oroom(v), mapleave(t)] /*)*/)
        },
		  villains)
  }

psetg(cdimmer, "The candles grow shorter.")

psetg(candle_ticks, /*[*/ [20, 10, 5, 0] /*]*/)

psetg(candle_tells, /*[*/ [GLOBALS.cdimmer,GLOBALS.cdimmer,"The candles are very short."] /*]*/)

function match_function() {
    let prsa: verb = GLOBALS.prsvec[1];
    let prso = GLOBALS.prsvec[2];
    let match: object = find_obj("MATCH");
    let mc: number = orand(match);
    cond(/*(*/ [prsa === GLOBALS.light_X_words && prso === match,
	   cond(/*(*/ [put(match,GLOBALS.orand,mc = _(mc,1)) && l__Q(mc,0),
		  tell("I'm afraid that you have run out of matches.")] /*)*/,
		 /*(*/ [tro(match,GLOBALS.flamebit),
		  put(match,GLOBALS.olight_Q,1),
		  clock_int(GLOBALS.matin,2),
		  tell("One of the matches starts to burn.")] /*)*/)] /*)*/,
	  /*(*/ [prsa === GLOBALS.turn_off_X_words && 1_Q(olight_Q(match)),
	   tell("The match is out."),
	   trz(match,GLOBALS.flamebit),
	   put(match,GLOBALS.olight_Q,0),
	   clock_int(GLOBALS.matin,0),
	   t] /*)*/,
	  /*(*/ [prsa === GLOBALS.c_int_X_words,
	   tell("The match has gone out."),
	   trz(match,GLOBALS.flamebit),
	   put(match,GLOBALS.olight_Q,0)] /*)*/)
  }

function candles() {
    let prsact: verb = GLOBALS.prsvec[1];
    let c: verb = find_obj("CANDL");
    let winner: adv = GLOBALS.winner;
    let ao: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    let w: false | object = GLOBALS.prsvec[3];
    let match: object = null;
    let foo: vector(number, cevent) = null;
    let orphans: vector(/*[*/ [4, any] /*]*/) = null;
    orand(c) || put(c,GLOBALS.orand,/*[*/ [0, clock_int(GLOBALS.cndin,50)] /*]*/)
foo = orand(c)
cond(/*(*/ [prsact === GLOBALS.light_X_words,
	       cond(/*(*/ [0_Q(olight_Q(c)),
		      tell("Alas, there's not much left of the candles.  Certainly not enough to\nburn.")] /*)*/,
		     /*(*/ [!w,
		      tell("With what?"),
		      put(orphans = GLOBALS.orphans,
			   GLOBALS.oflag,t),
		      put(orphans,GLOBALS.overb,prsact),
		      put(orphans,GLOBALS.oslot1,c),
		      put(orphans,GLOBALS.oprep,chtype(with_X_words, prep)),
		      GLOBALS.parse_won = false,
		      t] /*)*/,
		     /*(*/ [w === match = find_obj("MATCH") && 1_Q(olight_Q(match)),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell("The candles are already lighted.")] /*)*/,
			    /*(*/ [put(c,GLOBALS.olight_Q,1),
			     tell("The candles are lighted."),
			     clock_enable(foo[2])] /*)*/)] /*)*/,
		     /*(*/ [w === find_obj("TORCH"),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell("You realize, just in time, that the candles are already lighted.")] /*)*/,
			    /*(*/ [tell("The heat from the torch is so intense that the candles are vaporised."),
			     cond(/*(*/ [oroom(c) || ocan(c),
				    remove_object(c)] /*)*/,
				   /*(*/ [put(winner,GLOBALS.aobjs,splice_out(c,ao))] /*)*/)] /*)*/)] /*)*/,
		     /*(*/ [tell("You have to light them with something that's burning, you know.")] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.turn_off_X_words,
	       clock_disable(foo[2]),
	       cond(/*(*/ [1_Q(olight_Q(c)),
		      tell("The flame is extinguished."),
		      put(c,GLOBALS.olight_Q,_1)] /*)*/,
		     /*(*/ [tell("The candles are not lighted.")] /*)*/)] /*)*/,
	      /*(*/ [prsact === GLOBALS.c_int_X_words,
	       light_int(c,GLOBALS.cndin,GLOBALS.candle_ticks,GLOBALS.candle_tells)] /*)*/)
  }

function black_book() {
    let pv: vector(/*[*/ [3, any] /*]*/) = GLOBALS.prsvec;
    let v: vector(/*[*/ [3, any] /*]*/) = pv[1];
    let b: object = pv[2];
    cond(/*(*/ [v === GLOBALS.burn_X_words,
	 cond(/*(*/ [oroom(b),
		remove_object(b)] /*)*/,
	       /*(*/ [drop_object(b)] /*)*/),
	 jigs_up("A booming voice says 'Wrong, cretin!' and you notice that you have\nturned into a pile of dust.")] /*)*/)
  }

function light_int(obj: object, cev, tick: vector(/*[*/ [rest, number] /*]*/), tell: vector(/*[*/ [rest, string] /*]*/)) {
    let cnt: number = null;
    let tim: number = null;
    let foo: vector(number, cevent) = orand(obj);
    put(foo,1, cnt = _(foo[1], 1))
clock_int(cev,tim = tick[cnt])
cond(/*(*/ [0_Q(tim),
 	   cond(/*(*/ [!oroom(obj) || oroom(obj) === GLOBALS.here,
		  tell("I hope you have more light than from a", 1, odesc2(obj), ".")] /*)*/),
	   put(obj,GLOBALS.olight_Q,0)] /*)*/,
	  /*(*/ [!oroom(obj) || oroom(obj) === GLOBALS.here,
	   tell(tell[cnt])] /*)*/)
  }

function hackable_Q(obj: object, rm: room) {
    let av: false | object = avehicle(GLOBALS.winner);
    cond(/*(*/ [av,	   search_list(oid(obj), ocontents(av), false)] /*)*/,
	  /*(*/ [search_list(oid(obj), robjs(rm), false)] /*)*/)
  }