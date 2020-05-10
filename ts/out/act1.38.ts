// VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)

export function blo(y) {
    cond(/*(*/ [type_Q(G_rep,subr, fsubr),
	       read_table = ivector(256, 0)[chtype(ascii(_X__), fix)] = _X__,
	       evaltype(form, segment),
	       applytype(subr, fix),
	       alltypes()[6] = alltypes()[7],
	       substitute(2, 1),
	       off(bh)] /*)*/);
  }

export let G_ff: STRING;
export function ilo(body: STRING, type: FIX, nm1: STRING, nm2: STRING, m1?: STRING, m2: STRING) {
    cond(/*(*/ [type === _400000000000_,
	       cond(/*(*/ [((body[`<FLUSH-ME>`] && !G_winners[G_xunm]) || (G_winners[nm1] && body[G_ff])),
		      eval(parse(body))] /*)*/)] /*)*/);
dismiss(t);
  }

// ROOM FUNCTIONS

export function east_house() {
    let win: ADV = G_winner;
    let prsvec: VECTOR = G_prsvec;
    let prsact: VERB = prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	   tell(`You are behind the white house.  In one corner of the house there
is a small window which is `, 1, cond(/*(*/ [G_kitchen_window_X_flag,		  		      `open.`] /*)*/,
		 		     /*(*/ [`slightly ajar.`] /*)*/))] /*)*/);
  }
	   
// HACK THE KITCHEN WINDOW

G_grunlock_X_flag = false

export function window_function() {
    let prsact: VERB = G_prsvec[1];
    open_close(prsact,		kitchen_window_X_flag,
`With great effort, you open the window far enough to allow entry.`,
`The window closes (more easily than it opened).`);
  }

export function open_close(verb: VERB, atm: ATOM, stropn: STRING, strcls: STRING) {
    cond(/*(*/ [verb === G_open_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(pick_one(G_dummy))] /*)*/,
		 /*(*/ [tell(stropn),
		  setg(atm,t)] /*)*/)] /*)*/,
	  /*(*/ [verb === G_close_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(strcls),
		  setg(atm,false),
		  t] /*)*/,
		 /*(*/ [tell(pick_one(G_dummy))] /*)*/)] /*)*/);
  }

// KITCHEN -- CHECK THE WINDOW

export function kitchen() {
    let win: ADV = G_winner;
    let prsvec: VECTOR = G_prsvec;
    let prsact: VERB = prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	   tell(`You are in the kitchen of the white house.  A table seems to have
been used recently for the preparation of food.  A passage leads to
the west and a dark staircase can be seen leading upward.  To the
east is a small window which is `, 0),
	   cond(/*(*/ [G_kitchen_window_X_flag,		  tell(`open.`, 1)] /*)*/,
		 /*(*/ [tell(`slightly ajar.`, 1)] /*)*/)] /*)*/,
	  /*(*/ [t] /*)*/);
  }

export function leaf_pile() {
    let pv: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let l: OBJECT = pv[2];
    cond(/*(*/ [pv[1] === G_burn_X_words,
	       l[G_orand] = 1,
	       cond(/*(*/ [oroom(l),
		      tell(`The leaves burn and the neighbors start to complain.`),
		      remove_object(l)] /*)*/,
		     /*(*/ [t,
		      drop_object(l),
		      jigs_up(`The sight of someone carrying a pile of burning leaves so offends
the neighbors that they come over and put you out.`)] /*)*/)] /*)*/,
	      /*(*/ [pv[1] === G_move_X_words,
	       l[G_orand] = 1,
	       tell(`Done.`)] /*)*/);
  }

psetg(resdesc,
`However, with the water level lowered, there is merely a wide stream
running through the center of the room.`)

psetg(gladesc,
`You are in a large room, with giant icicles hanging from the walls
and ceiling.  There are passages to the north and east.`)

export function glacier_room() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	   cond(/*(*/ [G_glacier_flag_X_flag,		  tell(G_gladesc),
		  tell(`There is a large passageway leading westward.`, 1)] /*)*/,
		 /*(*/ [tell(G_gladesc)] /*)*/)] /*)*/);
  }

export function trophy_case() {
    let prsact = G_prsvec[1];
    cond(/*(*/ [prsact === G_take_X_words,
	   tell(`The trophy case is securely fastened to the wall (perhaps to foil any
attempt by robbers to remove it).`)] /*)*/);
  }
	  
export function glacier() {
    let prsvec: VECTOR(VERB, /*[*/ [2, ANY] /*]*/) = G_prsvec;
    let prsact: VERB = prsvec[1];
    let t: VERB = null;
    cond(/*(*/ [vname(prsact) === throw_X_words,
	   cond(/*(*/ [prsvec[2] === t = find_obj(`TORCH`),
		  tell(`The torch hits the glacier and explodes into a great ball of flame,
devouring the glacier.  The water from the melting glacier rushes
downstream, carrying the torch with it.  In the place of the glacier,
there is a passageway leading west.`),
		  remove_object(find_obj(`ICE`)),
		  remove_object(t),
		  insert_object(t,find_room(`STREA`)),
		  t[G_odesc2] = `burned out ivory torch`,
		  t[G_odesc1] = `There is a burned out ivory torch here.`,
		  t[G_olight_Q] = 0,
		  trz(t,G_flamebit),
		  (lit_Q(G_here) || tell(`The melting glacier seems to have carried the torch away, leaving
you in the dark.`)),
		  G_glacier_flag_X_flag = t] /*)*/,
		 /*(*/ [tell(`The glacier is unmoved by your ridiculous attempt.`),
		  false] /*)*/)] /*)*/,
	  /*(*/ [vname(prsact) === melt_X_words,
	   tell(`How exactly are you going to melt this glacier?`)] /*)*/);
  }

psetg(yuks,
      () => /*[*/ [`Nice try.`,
	`You can't be serious.`,
	`Chomp, Chomp.`,
	`Not a prayer.`,
	`I don't think so.`] /*]*/)

export function reservoir_south() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	       cond(/*(*/ [G_low_tide_X_flag,		      tell(`You are in the south end of a large cavernous room which was formerly
a reservoir.`),
		      tell(G_resdesc,1)] /*)*/,
		     /*(*/ [tell(`You are at the south end of a large reservoir.`)] /*)*/),
	       tell(`There is a western exit, a passageway south, and a steep pathway
climbing up along the edge of a cliff.`, 1)] /*)*/);
  }

export function reservoir_north() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	       cond(/*(*/ [G_low_tide_X_flag,		      tell(`You are in the north end of a large cavernous room which was formerly
a reservoir.`),
		      tell(G_resdesc,1)] /*)*/,
		     /*(*/ [tell(`You are at the north end of a large reservoir.`)] /*)*/),
	       tell(`There is a tunnel leaving the room to the north.`, 1)] /*)*/);
  }

// LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE

export function living_room() {
    let win: ADV = G_winner;
    let prsvec: VECTOR = G_prsvec;
    let rug_Q: (ATOM | FALSE) = null;
    let prsact: VERB = prsvec[1];
    let tc: OBJECT = null;
    cond(/*(*/ [prsact === G_look_X_words,
	       cond(/*(*/ [G_magic_flag_X_flag,		      tell(`You are in the living room.  There is a door to the east.  To the
west is a cyclops-shaped hole in an old wooden door, above which is
some strange gothic lettering `, 0)] /*)*/,
		     /*(*/ [tell(`You are in the living room.  There is a door to the east, a wooden
door with strange gothic lettering to the west, which appears to be
nailed shut, `, 0)] /*)*/),
	       rug_Q = orand(find_obj(`RUG`)),
	       cond(/*(*/ [(rug_Q && G_trap_door_X_flag),
		      tell(`and a rug lying beside an open trap-door.`, 1)] /*)*/,
		     /*(*/ [rug_Q,		      tell(`and a closed trap-door at your feet.`, 1)] /*)*/,
		     /*(*/ [G_trap_door_X_flag,		      tell(`and an open trap-door at your feet.`, 1)] /*)*/,
		     /*(*/ [tell(`and a large oriental rug in the center of the room.`, 1)] /*)*/),
	       t] /*)*/,
	      /*(*/ [(tc = find_obj(`TCASE`) && (prsact === G_take_X_words || (prsact === G_put_X_words && prsvec[3] === tc))),
	       G_winner[G_ascore] = _(G_raw_score,				       mapf(G__,G_otval,ocontents(tc)))] /*)*/);
  }

export function trap_door() {
    let prsact: VERB = G_prsvec[1];
    let rm: ROOM = G_here;
    cond(/*(*/ [rm === find_room(`LROOM`),
	   cond(/*(*/ [prsact === G_open_X_words,
		  cond(/*(*/ [G_trap_door_X_flag,			 tell(`It's open.`)] /*)*/,
			/*(*/ [tell(`The door reluctantly opens to reveal a rickety staircase descending
into darkness.`)] /*)*/),
		  cond_open(down_X_directions, rm)] /*)*/,
		 /*(*/ [prsact === G_close_X_words,
		  cond(/*(*/ [G_trap_door_X_flag,			 tell(`The door swings shut and closes.`)] /*)*/,
			/*(*/ [tell(`It's closed.`)] /*)*/),
		  cond_close(down_X_directions, rm),
		  t] /*)*/)] /*)*/,
	  /*(*/ [rm === find_room(`CELLA`),
	   cond(/*(*/ [prsact === G_open_X_words,
		  tell(`The door is locked from above.`)] /*)*/,
		 /*(*/ [tell(pick_one(G_dummy))] /*)*/)] /*)*/);
  }

export function look_under() {
    let obj: OBJECT = G_prsvec[2];
    cond(/*(*/ [(obj === find_obj(`RUG`) && !orand(obj) && !G_trap_door_X_flag),
	   tell(`Underneath the rug is a closed trap door.`)] /*)*/,
	  /*(*/ [(obj === find_obj(`LEAVE`) && rvars(find_room(`CLEAR`)) !== 1),
	   tell(`Underneath the pile of leaves is a grating.`)] /*)*/);
  }

export function repent() {
    tell(`It could very well be too late!`);
  }

export function clearing() {
    let prsact: VERB = G_prsvec[1];
    let rm: ROOM = G_here;
    let grate: OBJECT = find_obj(`GRAT1`);
    let leaves: OBJECT = find_obj(`LEAVE`);
    let rv: FIX = rvars(rm);
    cond(/*(*/ [prsact === G_look_X_words,
	 tell(`You are in a clearing, with a forest surrounding you on the west
and south.`),
	 cond(/*(*/ [G_key_flag_X_flag,		tell(`There is an open grating, descending into darkness.`, 1)] /*)*/,
	       /*(*/ [!0_Q(rv),
		tell(`There is a grating securely fastened into the ground.`, 1)] /*)*/)] /*)*/,
	/*(*/ [(0_Q(rv) && ((prsact === G_burn_X_words && !0_Q(orand(leaves))) || prsact === G_take_X_words || prsact === G_move_X_words) && G_prsvec[2] === leaves),
	 tell(`A grating appears on the ground.`),
	 tro(grate,G_ovison),
	 rm[G_rvars] = 1] /*)*/);
  }

// CELLAR--FIRST ROOM IN BASEMENT.

export function cellar() {
    let win: ADV = G_winner;
    let prsact: VERB = G_prsvec[1];
    let door: OBJECT = find_obj(`DOOR`);
    cond(/*(*/ [prsact === G_look_X_words,
	 tell(`You are in a dark and damp cellar with a narrow passageway leading
east, and a crawlway to the south.  On the west is the bottom of a
steep metal ramp which is unclimbable.`)] /*)*/,
	/*(*/ [(vname(prsact) === walk_in_X_words && G_trap_door_X_flag && !otouch_Q(door)),
	 G_trap_door_X_flag = false,
	 door[G_otouch_Q] = t,
	 tell(`The trap door crashes shut, and you hear someone barring it.`, 1)] /*)*/);
  }

`STUDIO:  LET PEOPLE UP THE CHIMNEY IF THEY DON'T HAVE MUCH STUFF`

export function chimney_function() {
    let winner: ADV = G_winner;
    let aobjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(winner);
    cond(/*(*/ [(l__Q(aobjs.length, 2) && memq(find_obj(`LAMP`), aobjs)),
	 G_light_load_X_flag = t,
	 // Door will slam shut next time, too, since this way up don't count.,
	 cond(/*(*/ [!G_trap_door_X_flag,
		find_obj(`DOOR`)[G_otouch_Q] = false] /*)*/),
	 false] /*)*/,
	/*(*/ [t,
	 G_light_load_X_flag = false] /*)*/);
  }

// OBJECT FUNCTIONS

export function rug() {
    let prsvec: VECTOR = G_prsvec;
    let prsa: VERB = prsvec[1];
    let obj: OBJECT = null;
    cond(/*(*/ [prsa === G_lift_X_words,
	  tell(`The rug is too heavy to lift, but in trying to take it you have 
noticed an irregularity beneath it.`)] /*)*/,
	 /*(*/ [prsa === G_move_X_words,
	  cond(/*(*/ [orand(obj = find_obj(`RUG`)),
		 tell(`Having moved the carpet previously, you find it impossible to move
it again.`)] /*)*/,
		/*(*/ [tell(`With a great effort, the rug is moved to one side of the room.
With the rug moved, the dusty cover of a closed trap-door appears.`),
		 tro(find_obj(`DOOR`), G_ovison),
		 obj[G_orand] = t] /*)*/)] /*)*/,
	 /*(*/ [prsa === G_take_X_words,
	  tell(`The rug is extremely heavy and cannot be carried.`)] /*)*/);
  }

export function rusty_knife() {
    let prsvec: VECTOR = G_prsvec;
    let prsa: VERB = prsvec[1];
    let prsi: (FALSE | OBJECT) = prsvec[3];
    cond(/*(*/ [prsa === G_take_X_words,
	       (memq(find_obj(`SWORD`), aobjs(G_winner)) && tell(`As you pick up the rusty knife, your sword gives a single pulse
of blinding blue light.`)),
	       false] /*)*/,
	      /*(*/ [(prsa === G_attac_X_words || prsa === G_swing_X_words || (prsa === G_throw_X_words && prsi) || prsa === G_kill_X_words),
	       kill_obj(find_obj(`RKNIF`), G_winner),
	       jigs_up(`As the knife approaches its victim, your mind is submerged by an
overmastering will.  Slowly, your hand turns, until the rusty blade
is an inch from your neck.  The knife seems to sing as it savagely
slits your throat.`)] /*)*/);
  }

export function skeleton() {
    let rm: ROOM = G_winner[1];
    let lld: ROOM = find_room(`LLD2`);
    let l: ROOM = null;
    tell(`A ghost appears in the room and is appalled at your having
desecrated the remains of a fellow adventurer.  He casts a curse
on all of your valuables and orders them banished to the Land of
the Living Dead.  The ghost leaves, muttering obscenities.`);
l = rob_room(rm,/*(*/ [] /*)*/, 100);
l = rob_adv(G_player,l);
mapf(false,
	 function(x: OBJECT) {
        x[G_oroom] = lld;
      },
	 l);
cond(/*(*/ [!empty_Q(l),
	  putrest(rest(l,_(l.length, 1)), robjs(lld)),
	  lld[G_robjs] = l] /*)*/);
  }

export function troll() {
    let pa: VERB = G_prsvec[1];
    let pv: VECTOR = G_prsvec;
    let prso: (FALSE | OBJECT) = pv[2];
    let here: ROOM = G_here;
    let t: OBJECT = find_obj(`TROLL`);
    let a: OBJECT = find_obj(`AXE`);
    cond(/*(*/ [pa === G_fight_X_words,
	       cond(/*(*/ [ocan(a) === t, false] /*)*/,
		     /*(*/ [memq(a,robjs(G_here)),
		      snarf_object(t,a),
		      (here === oroom(t) && tell(`The troll, now worried about this encounter, recovers his bloody
axe.`)),
		      t] /*)*/,
		     /*(*/ [here === oroom(t),
		      tell(`The troll, disarmed, cowers in terror, pleading for his life in
the guttural tongue of the trolls.`),
		      t] /*)*/)] /*)*/,
	      /*(*/ [pa === G_dead__X_X_words, G_troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === G_out__X_X_words,
	       trz(find_obj(`AXE`), G_ovison),
	       t[G_odesc1] = G_trollout,
	       G_troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === G_in__X_X_words,
	       tro(find_obj(`AXE`), G_ovison),
	       cond(/*(*/ [oroom(t) === here,
		      tell(`The troll stirs, quickly resuming a fighting stance.`)] /*)*/),
	       t[G_odesc1] = G_trolldesc,
	       G_troll_flag_X_flag = false] /*)*/,
	      /*(*/ [pa === G_first_Q_X_words, prob(33)] /*)*/,
	      /*(*/ [((pa === G_throw_X_words || pa === G_give_X_words) && prso),
	       cond(/*(*/ [pa === G_throw_X_words,
		      tell(`The troll, who is remarkably coordinated, catches the `, 1, odesc2(prso))] /*)*/,
		     /*(*/ [tell(`The troll, who is not overly proud, graciously accepts the gift`)] /*)*/),
	       cond(/*(*/ [prso === find_obj(`KNIFE`),
		      tell(`and being for the moment sated, throws it back.  Fortunately, the
troll has poor control, and the knife falls to the floor.  He does
not look pleased.`),
		      tro(t,G_fightbit)] /*)*/,
		     /*(*/ [tell(`and not having the most discriminating tastes, gleefully eats it.`),
		      remove_object(pv[2])] /*)*/)] /*)*/,
	      /*(*/ [(pa === G_take_X_words || pa === G_move_X_words),
	       tell(`The troll spits in your face, saying \"Better luck next time.\`)] /*)*/,
	      /*(*/ [vname(pa) === mung_X_words,
	       tell(`The troll laughs at your puny gesture.`)] /*)*/);
  }

`MIRROR ROOM HACKERY`

export function mirror_room() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [(prsact === G_look_X_words && lit_Q(G_here)),
	       tell(`You are in a large square room with tall ceilings.  On the south wall
is an enormous mirror which fills the entire wall.  There are exits
on the other three sides of the room.`),
	       cond(/*(*/ [G_mirror_mung_X_flag,		      tell(`Unfortunately, you have managed to destroy it by your reckless
actions.`, 1)] /*)*/)] /*)*/);
  }

G_mirror_mung_X_flag = false

export function mirror_mirror() {
    let prsact: VERB = G_prsvec[1];
    let rm1: ROOM = null;
    let rm2: ROOM = null;
    let l1: LIST(/*[*/ [REST, OBJECT] /*]*/) = null;
    cond(/*(*/ [(!G_mirror_mung_X_flag && vname(prsact) === rub_X_words),
	       rm1 = G_here,
	       rm2 = cond(/*(*/ [rm1 === find_room(`MIRR1`),
			find_room(`MIRR2`)] /*)*/,
		       /*(*/ [find_room(`MIRR1`)] /*)*/),
	       l1 = robjs(rm1),
	       rm1[G_robjs] = robjs(rm2),
	       rm2[G_robjs] = l1,
	       mapf(false, function(x: OBJECT) {
            x[G_oroom] = rm1;
          },
		     robjs(rm1)),
	       mapf(false, function(x: OBJECT) {
            x[G_oroom] = rm2;
          },
		     robjs(rm2)),
	       goto(rm2),
	       tell(`There is a rumble from deep within the earth and the room shakes.`)] /*)*/,
	      /*(*/ [(prsact === G_look_X_words || prsact === G_exami_X_words),
	       cond(/*(*/ [G_mirror_mung_X_flag,		      tell(`The mirror is broken into many pieces.`)] /*)*/,
		     /*(*/ [tell(`There is an ugly person staring at you.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === G_take_X_words,
	       tell(`Nobody but a greedy surgeon would allow you to attempt that trick.`)] /*)*/,
	      /*(*/ [(vname(prsact) === mung_X_words || vname(prsact) === throw_X_words),
	       cond(/*(*/ [G_mirror_mung_X_flag,		      tell(`Haven't you done enough already?`)] /*)*/,
		     /*(*/ [G_mirror_mung_X_flag = t,
		      tell(`You have broken the mirror.  I hope you have a seven years supply of
good luck handy.`)] /*)*/)] /*)*/);
  } 

export function carousel_room() {
    let pv: VECTOR = G_prsvec;
    cond(/*(*/ [(pv[1] === G_walk_in_X_words && G_carousel_zoom_X_flag),
	       jigs_up(G_spindizzy)] /*)*/,
	      /*(*/ [pv[1] === G_look_X_words,
	       tell(`You are in a circular room with passages off in eight directions.`, 1),
	       cond(/*(*/ [!G_carousel_flip_X_flag,
		      tell(`Your compass needle spins wildly, and you can't get your bearings.`, 1)] /*)*/)] /*)*/);
  }

export function carousel_exit() {
    let cx: (CEXIT | NEXIT | ROOM) = null;
    cond(/*(*/ [G_carousel_flip_X_flag,false] /*)*/,
	      /*(*/ [tell(`Unfortunately, it is impossible to tell directions in here.`, 1),
	       carousel_out()] /*)*/);
  }

export function carousel_out() {
    let cx: (CEXIT | NEXIT | ROOM) = null;
    (type_Q(cx = rexits(G_here)[_(2, _(1, mod(random(), 8)))], cexit) && cxroom(cx));
  }

export function torch_room() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	tell(`You are in a large room with a prominent doorway leading to a down
staircase. To the west is a narrow twisting tunnel.  Above you is a
large dome painted with scenes depicting elfin hacking rites. Up
around the edge of the dome (20 feet up) is a wooden railing. In the
center of the room there is a white marble pedestal.`),
	cond(/*(*/ [G_dome_flag_X_flag,	       tell(`A large piece of rope descends from the railing above, ending some
five feet above your head.`, 1)] /*)*/)] /*)*/);
  }

export function dome_room() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	       tell(`You are at the periphery of a large dome, which forms the ceiling
of another room below.  Protecting you from a precipitous drop is a
wooden railing which circles the dome.`),
	       cond(/*(*/ [G_dome_flag_X_flag,		      tell(`Hanging down from the railing is a rope which ends about ten feet
from the floor below.`, 1)] /*)*/)] /*)*/,
	      /*(*/ [vname(prsact) === jump_X_words,
	       jigs_up(`I'm afraid that the leap you attempted has done you in.`)] /*)*/);
  }

export function coffin_cure() {
    cond(/*(*/ [memq(find_obj(`COFFI`), aobjs(G_winner)),
	       G_egypt_flag_X_flag = false] /*)*/,
	      /*(*/ [else, G_egypt_flag_X_flag = t] /*)*/);
false;
  }

export function lld_room() {
    let pv: VECTOR = G_prsvec;
    let win: ADV = G_winner;
    let wobj: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(win);
    let pa: VERB = pv[1];
    let cand: OBJECT = find_obj(`CANDL`);
    cond(/*(*/ [pa === G_look_X_words,
	       tell(`You are outside a large gateway, on which is inscribed 
	\"Abandon every hope, all ye who enter here.\"  
The gate is open; through it you can see a desolation, with a pile of
mangled corpses in one corner.  Thousands of voices, lamenting some
hideous fate, can be heard.`),
	       cond(/*(*/ [!G_lld_flag_X_flag,
		      tell(`The way through the gate is barred by evil spirits, who jeer at your
attempts to pass.`)] /*)*/)] /*)*/,
	      /*(*/ [vname(pa) === exorc_X_words,
	       cond(/*(*/ [memq(find_obj(`GHOST`), robjs(G_here)),
		      cond(/*(*/ [(memq(find_obj(`BELL`), wobj) && memq(find_obj(`BOOK`), wobj) && memq(cand = find_obj(`CANDL`), wobj) && olight_Q(cand) > 0),
			     tell(`There is a clap of thunder, and a voice echoes through the cavern: 
\"Begone, fiends!\"  The spirits, sensing the presence of a greater
power, flee through the walls.`),
		             remove_object(find_obj(`GHOST`)),
		             G_lld_flag_X_flag = t] /*)*/,
		            /*(*/ [tell(`You are not equipped for an exorcism.`)] /*)*/)] /*)*/,
		     /*(*/ [jigs_up(`There is a clap of thunder, and a voice echoes through the
cavern: \"Begone, chomper!\"  Apparently, the voice thinks you
are an evil spirit, and dismisses you from the realm of the living.`)] /*)*/)] /*)*/);
  }

export function lld2_room() {
    let prsa: VERB = G_prsvec[1];
    cond(/*(*/ [prsa === G_look_X_words,
	   tell(`You have entered the Land of the Living Dead, a large desolate room.
Although it is apparently uninhabited, you can hear the sounds of
thousands of lost souls weeping and moaning.  In the east corner are
stacked the remains of dozens of previous adventurers who were less
fortunate than yourself.  To the east is an ornate passage,
apparently recently constructed. `,
		1,
		cond(/*(*/ [G_on_pole_X_flag,		                ` Amid the desolation, you spot what
appears to be your head, at the end of a long pole.`] /*)*/, /*(*/ [``] /*)*/))] /*)*/);
  }

export function ghost_function() {
    let pv: VECTOR = G_prsvec;
    let g: OBJECT = find_obj(`GHOST`);
    cond(/*(*/ [pv[3] === g,
	 tell(`How can you attack a spirit with material objects?`),
	 false] /*)*/,
	/*(*/ [pv[2] === g,
	 tell(`You seem unable to affect these spirits.`)] /*)*/);
  }

export function maze_11() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	 tell(`You are in a small room near the maze. There are twisty passages
in the immediate vicinity.`),
	 cond(/*(*/ [G_key_flag_X_flag,		tell(`Above you is an open grating with sunlight pouring in.`)] /*)*/,
	       /*(*/ [G_grunlock_X_flag,		tell(`Above you is a grating.`)] /*)*/,
	       /*(*/ [tell(`Above you is a grating locked with a skull-and-crossbones lock.`)] /*)*/)] /*)*/);
  }

export function grat1_function() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [G_grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      `The grating opens.`,
		      `The grating is closed.`)] /*)*/,
	  /*(*/ [tell(`The grating is locked.`)] /*)*/);
  }

export function grat2_function() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [G_grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      `The grating opens to reveal trees above you.`,
		      `The grating is closed.`),
	   tro(find_obj(`GRAT1`), G_ovison)] /*)*/,
	  /*(*/ [tell(`The grating is locked.`)] /*)*/);
  }

export function treasure_room() {
    let pv: VECTOR(VERB) = G_prsvec;
    let hack: HACK = G_robber_demon;
    let hh: LIST(/*[*/ [REST, OBJECT] /*]*/) = null;
    let chali = null;
    let hobj: OBJECT = hobj(hack);
    let flg: (ATOM | FALSE) = false;
    let tl: LIST(/*[*/ [REST, ROOM] /*]*/) = null;
    let here: ROOM = G_here;
    let rooms: LIST(/*[*/ [REST, ROOM] /*]*/) = G_rooms;
    cond(/*(*/ [(haction(hack) && vname(pv[1]) === walk_in_X_words),
	 cond(/*(*/ [flg = oroom(hobj) !== here,
		tell(`You hear a scream of anguish as you violate the robber's hideaway. 
Using passages unknown to you, he rushes to its defense.`),
		cond(/*(*/ [oroom(hobj),
		       remove_object(hobj)] /*)*/),
		tro(hobj,G_fightbit),
		hack[G_hroom] = here,
		hack[G_hrooms] = cond(/*(*/ [empty_Q(tl = rest(memq(here,rooms))),
					  rooms] /*)*/,
					 /*(*/ [tl] /*)*/),
		insert_object(hobj,here)] /*)*/,
	       /*(*/ [t,
		tro(hobj,G_fightbit)] /*)*/),
	 (!ocan(chali = find_obj(`CHALI`)) && oroom(chali) === here && trz(chali,G_takebit)),
	 cond(/*(*/ [!length_Q(robjs(here), 2),
		tell(`The thief gestures mysteriously, and the treasures in the room
suddenly vanish.`)] /*)*/),
	 mapf(false,
	   function(x: OBJECT) {
            cond(/*(*/ [(x !== chali && x !== hobj),
		    trz(x,G_ovison)] /*)*/);
          },
	   robjs(here))] /*)*/);
  }

export function treas() {
    cond(/*(*/ [(G_prsvec[1] === G_treas_X_words && G_here === find_room(`TEMP1`)),
	       goto(find_room(`TREAS`)),
	       room_desc()] /*)*/,
	      /*(*/ [(G_prsvec[1] === G_templ_X_words && G_here === find_room(`TREAS`)),
	       goto(find_room(`TEMP1`)),
	       room_desc()] /*)*/,
	      /*(*/ [t, tell(`Nothing happens.`)] /*)*/);
  }

export function prayer() {
    cond(/*(*/ [(G_here === find_room(`TEMP2`) && goto(find_room(`FORE1`))),
	 room_desc()] /*)*/,
	/*(*/ [tell(`If you pray enough, your prayers may be answered.`)] /*)*/);
  }

G_gate_flag_X_flag = false

export function dam_room() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
     tell(`You are standing on the top of the Flood Control Dam #3, which was
quite a tourist attraction in times far distant.  There are paths to
the north, south, east, and down.`),
     cond(/*(*/ [G_low_tide_X_flag,	    tell(`It appears that the dam has been opened since the water level behind
it is low and the sluice gate has been opened.  Water is rushing
downstream through the gates.`, 1)] /*)*/,
	   /*(*/ [tell(`The sluice gates on the dam are closed.  Behind the dam, there can be
seen a wide lake.  A small stream is formed by the runoff from the
lake.`, 1)] /*)*/),
     tell(`There is a control panel here.  There is a large metal bolt on the 
panel. Above the bolt is a small green plastic bubble.`, 1),
     cond(/*(*/ [G_gate_flag_X_flag,tell(`The green bubble is glowing.`, 1)] /*)*/)] /*)*/);
  }

export function bolt_function() {
    let prsact: VERB = G_prsvec[1];
    let prsi: (FALSE | OBJECT) = G_prsvec[3];
    let trunk: OBJECT = find_obj(`TRUNK`);
    cond(/*(*/ [prsact === G_turn_X_words,
	       cond(/*(*/ [prsi === find_obj(`WRENC`),
		      cond(/*(*/ [G_gate_flag_X_flag,			     cond(/*(*/ [G_low_tide_X_flag,				    G_low_tide_X_flag = false,
				    tell(`The sluice gates close and water starts to collect behind the dam.`),
				    (memq(trunk,robjs(find_room(`RESES`))) && trz(trunk,G_ovison)),
				    t] /*)*/,
				   /*(*/ [G_low_tide_X_flag = t,
				    tell(`The sluice gates open and water pours through the dam.`),
				    tro(trunk,G_ovison)] /*)*/)] /*)*/,
			    /*(*/ [tell(`The bolt won't turn with your best effort.`)] /*)*/)] /*)*/,
		     /*(*/ [type_Q(prsi,object),
		      tell(`The bolt won't turn using the `, 1, odesc2(prsi), `.`)] /*)*/)] /*)*/);
  }

psetg(drownings,
      () => /*[*/ [`up to your ankles.`,
	`up to your shin.`,
	`up to your knees.`,
	`up to your hips.`,
	`up to your waist.`,
	`up to your chest.`,
	`up to your neck.`,
	`over your head.`,
	`high in your lungs.`] /*]*/)

export let G_drownings: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function maint_room() {
    let pv = G_prsvec;
    let prsact: VERB = pv[1];
    let prso: PRSOBJ = pv[2];
    let prsi: (FALSE | OBJECT) = pv[3];
    let mnt: ROOM = find_room(`MAINT`);
    let here_Q: (ATOM | FALSE) = G_here === mnt;
    let hack: FIX = null;
    cond(/*(*/ [prsact === G_c_int_X_words,
	       mnt[G_rvars] = _(1, hack = rvars(mnt)),
	       cond(/*(*/ [(here_Q && tell(`The water level here is now `,
				 1,
				 G_drownings[_(1, _(hack = rvars(mnt),
							 2))]))] /*)*/),
	       cond(/*(*/ [g__Q(hack = rvars(mnt), 16),
		      mung_room(mnt,				 
`The room is full of water and cannot be entered.`),
		      clock_int(G_mntin,0),
		      (here_Q && jigs_up(`I'm afraid you have done drowned yourself.`))] /*)*/)] /*)*/);
cond(/*(*/ [vname(prsact) === push_X_words,
	       cond(/*(*/ [prso === find_obj(`BLBUT`),
		      cond(/*(*/ [0_Q(hack = rvars(G_here)),
			     tell(`There is a rumbling sound and a stream of water appears to burst
from the east wall of the room (apparently, a leak has occurred in a
pipe.)`),
			     G_here[G_rvars] = 1,
			     clock_int(G_mntin,_1),
			     t] /*)*/,
			    /*(*/ [tell(`The blue button appears to be jammed.`)] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj(`RBUTT`),
		      G_here[G_rlight_Q] = !rlight_Q(G_here),
		      cond(/*(*/ [rlight_Q(G_here),
			     tell(`The lights within the room come on.`)] /*)*/,
			    /*(*/ [tell(`The lights within the room shut off.`)] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj(`BRBUT`),
		      G_gate_flag_X_flag = false,
		      tell(`Click.`)] /*)*/,
		     /*(*/ [prso === find_obj(`YBUTT`),
		      G_gate_flag_X_flag = t,
		      tell(`Click.`)] /*)*/)] /*)*/);
  }

export function leak_function() {
    let hack: FIX = null;
    let prsvec: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let prsa: VERB = prsvec[1];
    let prsi: (OBJECT | FALSE) = prsvec[3];
    cond(/*(*/ [prsvec[2] === find_obj(`LEAK`),
	       cond(/*(*/ [(vname(prsa) === plug_X_words && hack = rvars(G_here) > 0),
		      cond(/*(*/ [prsi === find_obj(`PUTTY`),
			     G_here[G_rvars] = _1,
			     clock_int(G_mntin,0),
			     tell(`By some miracle of elven technology, you have managed to stop the
leak in the dam.`)] /*)*/,
			    /*(*/ [with_tell(prsi)] /*)*/)] /*)*/)] /*)*/);
  }

export function tube_function() {
    let prsvec: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    cond(/*(*/ [(prsvec[1] === G_put_X_words && prsvec[3] === find_obj(`TUBE`)),
	       tell(`The tube refuses to accept anything.`)] /*)*/);
  }

export function with_tell(obj: OBJECT) {
    tell(`With a `, 1, odesc2(obj), `?`);
  }

export function cave2_room() {
    let foo: VECTOR(FIX, CEVENT) = null;
    let bar: CEVENT = null;
    let prsact: VERB = G_prsvec[1];
    let c: VERB = null;
    cond(/*(*/ [vname(prsact) === walk_in_X_words,
	 (memq(c = find_obj(`CANDL`), aobjs(G_winner)) && prob(50) && 1_Q(olight_Q(c)) && clock_disable(bar = foo = orand(c)[2]) && c[G_olight_Q] = _1 && tell(`The cave is very windy at the moment and your candles have blown out.`))] /*)*/);
  }

export function bottle_function() {
    let prsact: VERB = G_prsvec[1];
    cond(/*(*/ [prsact[1] === throw_X_words,
	 tell(`The bottle hits the far wall and is decimated.`),
	 remove_object(G_prsvec[2])] /*)*/,
	/*(*/ [prsact[1] === mung_X_words,
	 cond(/*(*/ [memq(G_prsvec[2], aobjs(G_winner)),
		G_winner[G_aobjs] = splice_out(G_prsvec[2], aobjs(G_winner)),
		tell(`You have destroyed the bottle.  Well done.`)] /*)*/,
	       /*(*/ [memq(G_prsvec[2], robjs(G_here)),
		G_here[G_robjs] = splice_out(G_prsvec[2], robjs(G_here)),
		tell(`A brilliant maneuver destroys the bottle.`)] /*)*/)] /*)*/);
  }
	
export function fill() {
    let rem: (ATOM | FALSE) = false;
    let prsvec: VECTOR(VERB, OBJECT, ANY) = G_prsvec;
    let w: OBJECT = find_obj(`WATER`);
    cond(/*(*/ [object_action()] /*)*/,
	/*(*/ [(rtrnn(G_here,G_rfillbit) || rem = (ocan(w) === avehicle(G_winner) || oroom(w) === G_here)),
	 prsvec[1] = G_take_X_words,
	 prsvec[3] = prsvec[2],
	 prsvec[2] = w,
	 water_function(rem)] /*)*/,
	/*(*/ [tell(`I can't find any water here.`)] /*)*/);
  }

export function water_function(rem?: (ATOM | FALSE)) {
    let prsvec: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let prsact: VERB = prsvec[1];
    let me: ADV = G_winner;
    let b: OBJECT = find_obj(`BOTTL`);
    let w: OBJECT = prsvec[2];
    let av: (OBJECT | FALSE) = avehicle(me);
    let can: (FALSE | OBJECT) = prsvec[3];
    cond(/*(*/ [(prsact === G_take_X_words || prsact === G_put_X_words),
	       cond(/*(*/ [(av && av === can),
		     tell(`There is now a puddle in the bottom of the `,
			    1,
			    odesc2(av),
			    `.`),
		      cond(/*(*/ [memq(w,aobjs(me)),
			     drop_object(w,me)] /*)*/),
		      cond(/*(*/ [memq(w,ocontents(av))] /*)*/,
			    /*(*/ [av[G_ocontents] = /*(*/ [w,_X,ocontents(av)] /*)*/,
			     w[G_ocan] = av] /*)*/)] /*)*/,
		     /*(*/ [(can && can !== b),
		      tell(`The water leaks out of the `, 1, odesc2(can),
			    ` and evaporates immediately.`),
		      cond(/*(*/ [memq(w,aobjs(me)),
			     drop_object(w,me)] /*)*/,
			    /*(*/ [remove_object(w)] /*)*/)] /*)*/,
		     /*(*/ [memq(b,aobjs(me)),
		      cond(/*(*/ [!empty_Q(ocontents(b)),
			     tell(`The bottle is already full.`)] /*)*/,
			    /*(*/ [!oopen_Q(b),
			     tell(`The bottle is closed.`)] /*)*/,
			    /*(*/ [t,
			     (rem && remove_object(w)),
			     b[G_ocontents] = /*(*/ [w] /*)*/,
			     w[G_ocan] = b,
			     tell(`The bottle is now full of water.`)] /*)*/)] /*)*/,
		     /*(*/ [(ocan(w) === b && prsact === G_take_X_words && !can),
		      prsvec[2] = b,
		      take(t),
		      prsvec[2] = w] /*)*/,
		     /*(*/ [tell(`The water slips through your fingers.`)] /*)*/)] /*)*/,
	      /*(*/ [(prsact === G_drop_X_words || prsact === G_pour_X_words || prsact === G_give_X_words),
	       cond(/*(*/ [memq(w,aobjs(me)),
		      drop_object(w,me)] /*)*/),
	       cond(/*(*/ [av,		      tell(`There is now a puddle in the bottom of the `,
			    1,
			    odesc2(av),
			    `.`)] /*)*/,
		     /*(*/ [tell(`The water spills to the floor and evaporates immediately.`),
	       	      remove_object(w)] /*)*/)] /*)*/,
	      /*(*/ [prsact === G_throw_X_words,
	       tell(`The water splashes on the walls, and evaporates immediately.`),
	       remove_object(w)] /*)*/);
  }

export function rope_function() {
    let prsact: VERB = G_prsvec[1];
    let droom: ROOM = find_room(`DOME`);
    let rope: OBJECT = find_obj(`ROPE`);
    let win: ADV = G_winner;
    cond(/*(*/ [G_here !== droom,
	 G_dome_flag_X_flag = false,
	 cond(/*(*/ [vname(prsact) === tie_X_words,
		tell(`There is nothing it can be tied to.`)] /*)*/,
	       /*(*/ [vname(prsact) === untie_X_words,
		tell(`It is not tied to anything.`)] /*)*/)] /*)*/,
	/*(*/ [(vname(prsact) === tie_X_words && G_prsvec[3] === find_obj(`RAILI`)),
	 cond(/*(*/ [G_dome_flag_X_flag,		tell(`The rope is already attached.`)] /*)*/,
	       /*(*/ [tell(`The rope drops over the side and comes within ten feet of the floor.`),
		G_dome_flag_X_flag = t,
		tro(rope,G_ndescbit),
		cond(/*(*/ [!oroom(rope),
		       win[G_aobjs] = splice_out(rope,aobjs(win)),
		       insert_object(rope,droom)] /*)*/)] /*)*/)] /*)*/,
	/*(*/ [vname(prsact) === untie_X_words,
	 cond(/*(*/ [G_dome_flag_X_flag,		G_dome_flag_X_flag = false,
		trz(rope,G_ndescbit),
		tell(`Although you tied it incorrectly, the rope becomes free.`)] /*)*/,
	       /*(*/ [tell(`It is not tied to anything.`)] /*)*/)] /*)*/,
	/*(*/ [(prsact === G_drop_X_words && !G_dome_flag_X_flag),
	 remove_object(rope),
	 insert_object(rope,find_room(`TORCH`)),
	 tell(`The rope drops gently to the floor below.`)] /*)*/,
	/*(*/ [(prsact === G_take_X_words && G_dome_flag_X_flag && tell(`The rope is tied to the railing.`))] /*)*/);
  }

export function cyclops() {
    let prsact: VERB = G_prsvec[1];
    let prsob1: (OBJECT | FALSE) = G_prsvec[2];
    let rm: ROOM = G_here;
    let food: OBJECT = find_obj(`FOOD`);
    let drink: OBJECT = find_obj(`WATER`);
    let count: FIX = rvars(rm);
    let garlic: OBJECT = find_obj(`GARLI`);
    let cyc: OBJECT = null;
    cond(/*(*/ [G_cyclops_flag_X_flag,	       cond(/*(*/ [(prsact === G_awake_X_words || prsact === G_mung_X_words || prsact === G_burn_X_words || prsact === G_fight_X_words),
		      tell(`The cyclops yawns and stares at the thing that woke him up.`),
		      G_cyclops_flag_X_flag = false,
		      trz(cyc = find_obj(`CYCLO`), G_sleepbit),
		      tro(cyc,G_fightbit),
		      rm[G_rvars] = abs(rvars(rm)),
		      t] /*)*/)] /*)*/,
	      /*(*/ [abs(count) > 5,
	       jigs_up(`The cyclops, tired of all of your games and trickery, eats you.
The cyclops says 'Mmm.  Just like mom used to make 'em.'`)] /*)*/,
	      /*(*/ [vname(prsact) === give_X_words,
	       cond(/*(*/ [prsob1 === food,
		      cond(/*(*/ [g__Q(count,0),
			     remove_object(food),
			     tell(`The cyclops says 'Mmm Mmm.  I love hot peppers!  But oh, could I use
a drink.  Perhaps I could drink the blood of that thing'.  From the
gleam in his eye, it could be surmised that you are 'that thing'.`),
			     rm[G_rvars] = min(_1, _(count))] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === drink,
		      cond(/*(*/ [count < 0,
			     remove_object(drink),
			     tro(cyc = find_obj(`CYCLO`), G_sleepbit),
			     trz(cyc,G_fightbit),
			     tell(`The cyclops looks tired and quickly falls fast asleep (what did you
put in that drink, anyway?).`),
			     G_cyclops_flag_X_flag = t] /*)*/,
			    /*(*/ [tell(`The cyclops apparently was not thirsty at the time and refuses your
generous gesture.`),
			     false] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === garlic,
		      tell(`The cyclops may be hungry, but there is a limit.`),
		      rm[G_rvars] = aos_sos(count)] /*)*/,
		     /*(*/ [tell(`The cyclops is not so stupid as to eat THAT!`),
		      rm[G_rvars] = aos_sos(count)] /*)*/)] /*)*/,
	      /*(*/ [(prsact === G_first_Q_X_words || prsact === G_fight_X_words), false] /*)*/,
	      /*(*/ [(rm[G_rvars] = aos_sos(count) && false)] /*)*/,
	      /*(*/ [(prsact === G_throw_X_words || vname(prsact) === mung_X_words),
	       cond(/*(*/ [prob(50),
		      tell(`Your actions don't appear to be doing much harm to the cyclops, but
they do not exactly lower your insurance premiums, either.`)] /*)*/,
		     /*(*/ [tell(`The cyclops ignores all injury to his body with a shrug.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === G_take_X_words,
	       tell(`The cyclops is rather heavy and doesn't take kindly to being grabbed.`)] /*)*/,
	      /*(*/ [prsact === G_tie_X_words,
	       tell(`You cannot tie the cyclops, although he is fit to be tied.`)] /*)*/);
  }

export function cyclops_room() {
    let pv: VECTOR = G_prsvec;
    let rm: ROOM = G_here;
    let vars: FIX = rvars(rm);
    cond(/*(*/ [pv[1] === G_look_X_words,
	       tell(`You are in a room with an exit on the west side, and a staircase
leading up.`),
	       cond(/*(*/ [(G_cyclops_flag_X_flag && !G_magic_flag_X_flag),
		      tell(`The cyclops, perhaps affected by a drug in your drink, is sleeping
blissfully at the foot of the stairs.`)] /*)*/,
		     /*(*/ [G_magic_flag_X_flag,		      tell(`On the north of the room is a wall which used to be solid, but which
now has a cyclops-sized hole in it.`)] /*)*/,
		     /*(*/ [0_Q(vars),
		      tell(`A cyclops, who looks prepared to eat horses (much less mere
adventurers), blocks the staircase.  From his state of health, and
the bloodstains on the walls, you gather that he is not very
friendly, though he likes people.`, 1)] /*)*/,
		     /*(*/ [vars > 0,
		      tell(`The cyclops is standing in the corner, eyeing you closely.  I don't
think he likes you very much.  He looks extremely hungry even for a
cyclops.`)] /*)*/,
		     /*(*/ [vars < 0,
		      tell(`The cyclops, having eaten the hot peppers, appears to be gasping.
His enflamed tongue protrudes from his man-sized mouth.`)] /*)*/),
	       cond(/*(*/ [G_cyclops_flag_X_flag] /*)*/,
	             /*(*/ [(0_Q(vars) || tell(G_cyclomad[abs(vars)]))] /*)*/)] /*)*/);
  }

psetg(cyclomad,
      () => /*[*/ [`The cyclops seems somewhat agitated.`,
	`The cyclops appears to be getting more agitated.`,
	`The cyclops is moving about the room, looking for something.`,
	
`The cyclops was looking for salt and pepper.  I think he is gathering
condiments for his upcoming snack.`,
	`The cyclops is moving toward you in an unfriendly manner.`,
	`You have two choices: 1. Leave  2. Become dinner.`] /*]*/)

export let G_cyclomad: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function aos_sos(foo: FIX) {
    cond(/*(*/ [foo < 0, foo = _(foo,1)] /*)*/,
	/*(*/ [foo = _(foo,1)] /*)*/);
cond(/*(*/ [G_cyclops_flag_X_flag] /*)*/,
	/*(*/ [tell(G_cyclomad[abs(foo)])] /*)*/);
  }

G_echo_flag_X_flag = false

export function echo_room() {
    let reader_string: STRING = G_reader_string;
    let b: VERB = G_inbuf;
    let l: VERB = null;
    let rm: ROOM = find_room(`ECHO`);
    let outchan: CHANNEL = G_outchan;
    let verb: VERB = null;
    let walk: VERB = G_walk_X_words;
    cond(/*(*/ [G_echo_flag_X_flag] /*)*/,
	      /*(*/ [unwind(prog(/*(*/ [] /*)*/,
		 mapf(false,
		   function(obj: OBJECT) {
                cond(/*(*/ [ovis_Q(obj),
			    tro(obj,G_echo_room_bit),
			    trz(obj,G_ovison)] /*)*/);
              },
		   robjs(rm)),
	        repeat(/*(*/ [/*(*/ [prsvec, G_prsvec] /*)*/, random_action] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [prsvec] /*)*/, vector] /*)*/] /*2*/,
		       l = readstring(b,					G_inchan,					reader_string),
		       readchr(G_inchan),
		       (G_alt_flag || readchr(G_inchan)),
		       G_moves = _(G_moves,1),
		       cond(/*(*/ [(eparse(lex(b,rest(b,l), t), t) && verb = prsvec[1] === walk && prsvec[2] && memq(chtype(prsvec[2], atom),
					 rexits(rm))),
			      random_action = vfcn(verb),
			      apply_random(random_action),
			      cond(/*(*/ [G_here !== rm,
				     mapf(false,
				       function(x: OBJECT) {
                          cond(/*(*/ [trnn(x,G_echo_room_bit),
						trz(x,G_echo_room_bit),
						tro(x,G_ovison)] /*)*/);
                        },
				       robjs(rm))] /*)*/),
			      return(t)] /*)*/,
			     /*(*/ [printstring(b,outchan,l),
			      G_tell_flag = t,
			      crlf(),
			      cond(/*(*/ [uppercase(b)[`ECHO`] === b,
				     tell(`The acoustics of the room change subtly.`,
					   1),
				     G_echo_flag_X_flag = t,
				     mapf(false,
					   function(x: OBJECT) {
                          cond(/*(*/ [trnn(x,G_echo_room_bit),
							    trz(x,G_echo_room_bit),
							    tro(x,G_ovison)] /*)*/);
                        },
					   robjs(rm)),
				     return(t)] /*)*/)] /*)*/))),
		prog(/*(*/ [] /*)*/,
		      goto(find_room(`CHAS3`)),
		      G_moves = _(G_moves,1),
		      mapf(false,
			    function(x: OBJECT) {
                cond(/*(*/ [trnn(x,G_echo_room_bit),
				     trz(x,G_echo_room_bit),
				     tro(x,G_ovison)] /*)*/);
              },
			    robjs(rm))))] /*)*/);
  }

export function leaper() {
    let rm: ROOM = G_here;
    let exits: EXIT = rexits(rm);
    let m: ROOM = null;
    cond(/*(*/ [m = memq(down_X_words, exits),
	  cond(/*(*/ [(type_Q(m[2], nexit) || (type_Q(m[2], cexit) && !cxflag(m[2]))),
		 jigs_up(pick_one(G_jumploss))] /*)*/)] /*)*/,
	 /*(*/ [tell(pick_one(G_wheeeee))] /*)*/);
  }

export function skipper() {
    tell(pick_one(G_wheeeee));
  }

G_hs = 0
export let G_hs: FIX;
export function hello() {
    let prsobj: (OBJECT | FALSE) = G_prsvec[2];
    let amt: FIX = G_hs = _(G_hs,1);
    cond(/*(*/ [prsobj,	   cond(/*(*/ [prsobj === find_obj(`SAILO`),
		  cond(/*(*/ [0_Q(mod(amt,20)),
			 tell(`You seem to be repeating yourself.`)] /*)*/,
			/*(*/ [0_Q(mod(amt,10)),
			 tell(`I think that phrase is getting a bit worn out.`)] /*)*/,
			/*(*/ [tell(`Nothing happens here.`)] /*)*/)] /*)*/,
		 /*(*/ [prsobj === find_obj(`AVIAT`),
		  tell(`Here, nothing happens.`)] /*)*/,
		 /*(*/ [tell(`I think that only schizophrenics say 'Hello' to a `, 1, odesc2(prsobj), `.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(pick_one(G_hellos))] /*)*/);
  }

psetg(hellos,
      () => /*[*/ [`Hello.`,
	`Good day.`,
	`Nice weather we've been having lately`,
	`How are you?`,
	`Goodbye.`] /*]*/)

psetg(wheeeee,
      () => /*[*/ [`Very good.  Now you can go to the second grade.`,
	`Have you tried hopping around the dungeon, too?`,
	`Are you enjoying yourself?`,
	`Wheeeeeeeeee!!!!!`,
	`Do you expect me to applaud?`] /*]*/)

psetg(jumploss,
      () => /*[*/ [`You should have looked before you leaped.`,
	`I'm afraid that leap was a bit much for your weak frame.`,
	`In the movies, your life would be passing in front of your eyes.`,
	`Geronimo.....`] /*]*/)

export let G_hellos: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_wheeeee: VECTOR(/*[*/ [REST, STRING] /*]*/);export let G_jumploss: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function reader() {
    let pv: VECTOR = G_prsvec;
    let po: OBJECT = pv[2];
    let pi: (FALSE | OBJECT) = pv[3];
    cond(/*(*/ [!lit_Q(G_here),
	   tell(`It is impossible to read in the dark.`)] /*)*/,
	  /*(*/ [(pi && !transparent_Q(pi)),
	   tell(`How does one look through a `, 1, odesc2(pi), `?`)] /*)*/,
	  /*(*/ [!readable_Q(po),
	   tell(`How can I read a `, 1, odesc2(po), `?`)] /*)*/,
	  /*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(oread(po))] /*)*/);
  }
	  
export function well() {
    cond(/*(*/ [G_riddle_flag_X_flag,tell(`Well what?`)] /*)*/,
	  /*(*/ [G_here === find_room(`RIDDL`),
	   G_riddle_flag_X_flag = t,
	   tell(`There is a clap of thunder and the east door opens.`)] /*)*/,
	  /*(*/ [tell(`Well what?`)] /*)*/);
  }

export function sinbad() {
    cond(/*(*/ [(G_here === find_room(`CYCLO`) && memq(find_obj(`CYCLO`), robjs(G_here))),
	   G_cyclops_flag_X_flag = t,
	   tell(`The cyclops, hearing the name of his deadly nemesis, flees the room
by knocking down the wall on the north of the room.`),
	   G_magic_flag_X_flag = t,
	   remove_object(find_obj(`CYCLO`))] /*)*/,
	  /*(*/ [tell(`Wasn't he a sailor?`)] /*)*/);
  }

export function granite() {
    tell(`I think you are taking this thing for granite.`);
  }

psetg(dummy,
      () => /*[*/ [`Look around.`,
	`You think it isn't?`,
	`I think you've already done that.`] /*]*/)

export let G_dummy: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function brush() {
    let prso: OBJECT = G_prsvec[2];
    let prsi: (OBJECT | FALSE) = G_prsvec[3];
    cond(/*(*/ [prso === find_obj(`TEETH`),
	   cond(/*(*/ [(prsi === find_obj(`PUTTY`) && memq(prsi,aobjs(G_winner))),
		  jigs_up(`Well, you seem to have been brushing your teeth with some sort of
glue. As a result, your mouth gets glued together (with your nose)
and you die of respiratory failure.`)] /*)*/,
		 /*(*/ [!prsi,
		  tell(`Dental hygiene is highly recommended, but I'm not sure what you want
to brush them with.`)] /*)*/,
		 /*(*/ [tell(`A nice idea, but with a `, 1, odesc2(prsi), `?`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`If you wish, but I can't understand why??`)] /*)*/);
  }

export function ring() {
    let prsobj: (OBJECT | FALSE) = G_prsvec[2];
    cond(/*(*/ [prsobj === find_obj(`BELL`),
	   tell(`Ding, dong.`)] /*)*/,
	  /*(*/ [tell(`How, exactly, can I ring that?`)] /*)*/);
  }

export function eat() {
    let prsvec: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let eat_Q: (ATOM | FALSE) = false;
    let drink_Q: (ATOM | FALSE) = false;
    let prsobj: OBJECT = prsvec[2];
    let nobj: (OBJECT | FALSE) = null;
    let aobjs: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(G_winner);
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [(eat_Q = edible_Q(prsobj) && memq(prsobj,aobjs)),
	   cond(/*(*/ [prsvec[1] === G_drink_X_words,
		  tell(`How can I drink that?`)] /*)*/,
		 /*(*/ [tell(`Thank you very much.  It really hit the spot.`),
		  G_winner[G_aobjs] = splice_out(prsobj,aobjs)] /*)*/)] /*)*/,
	  /*(*/ [(drink_Q = drinkable_Q(prsobj) && nobj = ocan(prsobj) && memq(nobj,aobjs)),
	   cond(/*(*/ [oopen_Q(nobj),
		  tell(`Thank you very much.  I was rather thirsty (from all this talking,
probably).`)] /*)*/,
		 /*(*/ [t,
		  tell(`I'd like to, but I can't get to it.`)] /*)*/),
	   prsobj[G_ocan] = false,
	   nobj[G_ocontents] = splice_out(prsobj,ocontents(nobj))] /*)*/,
	  /*(*/ [!(eat_Q || drink_Q),
	   tell(`I don't think that the `, 1, odesc2(prsobj), ` would agree with you.`)] /*)*/,
	  /*(*/ [tell(`I think you should get that first.`)] /*)*/);
  }

export function jargon() {
    tell(`Well, FOO, BAR, and BLETCH to you too!`);
  }

export function curses() {
    tell(pick_one(G_offended));
  }

psetg(offended, 
  () => /*[*/ [`Such language in a high-class establishment like this!`,
    `You ought to be ashamed of yourself.`,
    `Its not so bad.  You could have been killed already.`,
    `Tough shit, asshole.`,
    `Oh, dear.  Such language from a supposed winning adventurer!`] /*]*/)

export let G_offended: VECTOR(/*[*/ [REST, STRING] /*]*/);

`ROBBER`

define(robber, robber, /*(*/ [hack,
		       `AUX`, /*(*/ [rm, hroom(hack)] /*)*/, robj,
			     /*(*/ [seen_Q, rseen_Q(rm)] /*)*/, /*(*/ [win, G_winner] /*)*/, /*(*/ [wroom, G_here] /*)*/,
			     /*(*/ [hobj, hobj(hack)] /*)*/, /*(*/ [still, find_obj(`STILL`)] /*)*/, 
			     here_Q, /*(*/ [hh, hobjs(hack)] /*)*/, /*(*/ [treas, find_room(`TREAS`)] /*)*/] /*)*/,
   /*#*/ [decl, /*(*/ [/*(*/ [hack] /*)*/, hack, /*(*/ [rm, wroom] /*)*/, room, /*(*/ [robj, hh] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [seen_Q] /*)*/, (atom || false), /*(*/ [win] /*)*/, adv, /*(*/ [hobj] /*)*/, object, /*(*/ [robber] /*)*/, activation,
	  /*(*/ [here_Q] /*)*/, (room || false), /*(*/ [still] /*)*/, object, /*(*/ [treas] /*)*/, room] /*)*/] /*2*/,
   prog(/*(*/ [/*(*/ [once, false] /*)*/, objt] /*)*/,
     /*#*/ [decl, /*(*/ [/*(*/ [once] /*)*/, (atom || false), /*(*/ [objt] /*)*/, list(/*[*/ [rest, object] /*]*/)] /*)*/] /*2*/,
     cond(/*(*/ [here_Q = oroom(hobj),
	    rm = here_Q] /*)*/),
     robj = robjs(rm),
     objt = hh,
     cond(/*(*/ [(rm === treas && rm !== wroom),
       cond(/*(*/ [here_Q,	      cond(/*(*/ [oroom(still) === treas,
		     snarf_object(hobj,still)] /*)*/),
	      remove_object(hobj),
	      here_Q = false] /*)*/),
       mapf(false,
	     function(x: OBJECT) {
              cond(/*(*/ [otval(x) > 0,
			    hack[G_hobjs] = hh = splice_out(x,hh),
			    insert_object(x,rm)] /*)*/);
            },
	     hh)] /*)*/,
      /*(*/ [rm === wroom,		 // Adventurer is in room:  CHOMP, CHOMP,
       cond(/*(*/ [rm === treas] /*)*/,	// Don't move, Gertrude,
        /*(*/ [!hflag(hack),
         cond(/*(*/ [(!here_Q && prob(30)),
	        cond(/*(*/ [ocan(still) === hobj,
		       insert_object(hobj,rm),
		       tell(`Someone carrying a large bag is casually leaning against one of the
walls here.  He does not speak, but it is clear from his aspect that
the bag will be taken only over his dead body.`),
		       hack[G_hflag] = t,
		       return(t, robber)] /*)*/)] /*)*/,
	       /*(*/ [(here_Q && fighting_Q(hobj) && cond(/*(*/ [!winning_Q(hobj,win),
			    tell(`Your opponent, determining discretion to be the better part of
valor, decides to terminate this little contretemps.  With a rueful
nod of his head, he steps backward into the gloom and disappears.`),
			    remove_object(hobj),
			    trz(hobj,G_fighting),
			    snarf_object(hobj,still),
			    return(t, robber)] /*)*/,
			   /*(*/ [prob(90)] /*)*/))] /*)*/,
	       /*(*/ [(here_Q && prob(30)),
	        tell(`The holder of the large bag just left, looking disgusted. 
Fortunately, he took nothing.`),
		remove_object(hobj),
		snarf_object(hobj,still),
	        return(t, robber)] /*)*/,
	       /*(*/ [prob(70), return(t, robber)] /*)*/,
	       /*(*/ [t,
		cond(/*(*/ [memq(still,hobjs(hack)),
		       hack[G_hobjs] = splice_out(still,hobjs(hack)),
		       hobj[G_ocontents] = /*(*/ [still] /*)*/,
		       still[G_ocan] = hobj] /*)*/),
		hack[G_hobjs] = hh = rob_room(rm,hh,100),
	        hack[G_hobjs] = hh = rob_adv(win,hh),
	        hack[G_hflag] = t,
	        cond(/*(*/ [(objt !== hh && !here_Q),
		       tell(`A seedy-looking individual with a large bag just wandered through
the room.  On the way through, he quietly abstracted all valuables
from the room and from your possession, mumbling something about
\"Doing unto others before..\`)] /*)*/,
		      /*(*/ [here_Q,		       snarf_object(hobj,still),
		       cond(/*(*/ [objt !== hh,
			      tell(`The other occupant just left, still carrying his large bag.  You may
not have noticed that he robbed you blind first.`)] /*)*/,
			     /*(*/ [tell(`The other occupant (he of the large bag), finding nothing of value,
left disgusted.`)] /*)*/),
		       remove_object(hobj),
		       here_Q = false] /*)*/,
		      /*(*/ [t,
		       tell(`A 'lean and hungry' gentleman just wandered through.  Finding
nothing of value, he left disgruntled.`)] /*)*/)] /*)*/)] /*)*/,
	/*(*/ [t,
	 cond(/*(*/ [here_Q,		// Here, already announced.,
		cond(/*(*/ [prob(30),
		       hack[G_hobjs] = hh = rob_room(rm,hh,100),
		       hack[G_hobjs] = hh = rob_adv(win,hh),
		       cond(/*(*/ [memq(find_obj(`ROPE`), hh),
			      G_dome_flag_X_flag = false] /*)*/),
		       cond(/*(*/ [objt === hh,
			      tell(`The other occupant (he of the large bag), finding nothing of value,
left disgusted.`)] /*)*/,
			     /*(*/ [t,
			      tell(`The other occupant just left, still carrying his large bag.  You may
not have noticed that he robbed you blind first.`)] /*)*/),
		       remove_object(hobj),
		       here_Q = false,
		       snarf_object(hobj,still)] /*)*/,
		      /*(*/ [return(t, robber)] /*)*/)] /*)*/)] /*)*/)] /*)*/,
      /*(*/ [(memq(hobj,robjs(rm)) && // Leave if victim left && snarf_object(hobj,still) && remove_object(hobj) && here_Q = false)] /*)*/,
      /*(*/ [(oroom(still) === rm && snarf_object(hobj,still) && false)] /*)*/,
      /*(*/ [seen_Q,			     // Hack the adventurer's belongings,
       hack[G_hobjs] = hh = rob_room(rm,hh,75),
       cond(/*(*/ [(rdesc2(rm) === G_mazedesc && rdesc2(wroom) === G_mazedesc),
	 mapf(false,
	       function(x: OBJECT) {
                  cond(/*(*/ [(can_take_Q(x) && ovis_Q(x) && prob(40)),
			      tell(`You hear, off in the distance, someone saying \"My, I wonder what
this fine `,		      3, odesc2(x), ` is doing here.\`),
			      tell(``, 1),
			      cond(/*(*/ [prob(60),
				     remove_object(x),
				     x[G_otouch_Q] = t,
				     hack[G_hobjs] = hh = /*(*/ [x,_X,hh] /*)*/] /*)*/),
			      mapleave()] /*)*/);
                },
	       robjs(rm))] /*)*/,
	/*(*/ [mapf(false,
	       function(x: OBJECT) {
                  cond(/*(*/ [(0_Q(otval(x)) && can_take_Q(x) && ovis_Q(x) && prob(20)),
			      remove_object(x),
			      x[G_otouch_Q] = t,
			      hack[G_hobjs] = hh = /*(*/ [x,_X,hh] /*)*/,
			      cond(/*(*/ [rm === wroom,
				     tell(`You suddenly notice that the `,
					   1,
					   odesc2(x),
					   ` vanished.`)] /*)*/),
			      mapleave()] /*)*/);
                },
	       robjs(rm)),
	 cond(/*(*/ [memq(find_obj(`ROPE`), hh),
		G_dome_flag_X_flag = false] /*)*/)] /*)*/)] /*)*/),
     cond(/*(*/ [once = !once,		 // Move to next room, and hack.,
	    prog(/*(*/ [/*(*/ [rooms, hrooms(hack)] /*)*/] /*)*/,
	      rm = rooms[1],
	      cond(/*(*/ [empty_Q(rooms = rest(rooms)),
		     rooms = G_rooms] /*)*/),
	      cond(/*(*/ [rtrnn(rm,G_rsacredbit),	// Can I work here?,
		     again()] /*)*/),
	      hack[G_hroom] = rm,
	      hack[G_hflag] = false,
	      hack[G_hrooms] = rooms,
	      seen_Q = rseen_Q(rm)),
	    again()] /*)*/)),			      // Drop worthless cruft, sometimes,
   (rm === treas || mapf(false,
	     function(x: OBJECT) {
          cond(/*(*/ [(0_Q(otval(x)) && prob(30)),
			    hack[G_hobjs] = hh = splice_out(x,hh),
			    insert_object(x,rm),
			    (rm === wroom && tell(`The robber, rummaging through his bag, dropped a few items he found
valueless.`))] /*)*/);
        },
	      hh)))

export function snarf_object(who: OBJECT, what: OBJECT) {
    cond(/*(*/ [(ocan(what) !== who && (oroom(what) || ocan(what))),
	       remove_object(what),
	       what[G_ocan] = who,
	       who[G_ocontents] = /*(*/ [what,_X,ocontents(who)] /*)*/] /*)*/,
	      /*(*/ [who] /*)*/);
  }

export function robber_function() {
    let prsact: VERB = G_prsvec[1];
    let dem: HACK = get_demon(`THIEF`);
    let pv: VECTOR = G_prsvec;
    let prsobj: (OBJECT | FALSE) = pv[2];
    let here: ROOM = G_here;
    let flg: (ATOM | FALSE) = false;
    let brick: OBJECT = null;
    let fuse: OBJECT = null;
    let st: OBJECT = null;
    let f: OBJECT = null;
    let t: VERB = hobj(dem);
    let chali: OBJECT = find_obj(`CHALI`);
    cond(/*(*/ [prsact === G_fight_X_words,
	 cond(/*(*/ [ocan(st = find_obj(`STILL`)) === t, false] /*)*/,
	       /*(*/ [oroom(st) === here,
		snarf_object(t,st),
		tell(`The robber, somewhat surprised at this turn of events, nimbly
retrieves his stilletto.`),
		t] /*)*/,
	       /*(*/ [else,
		tell(`Annoyed to be left unarmed in such an obviously dangerous
neighborhood, the thief slips off into the shadows.`),
		tro(chali,G_takebit),
		remove_object(t)] /*)*/)] /*)*/,
	/*(*/ [prsact === G_dead__X_X_words,
	 cond(/*(*/ [!empty_Q(hobjs(dem)),
		tell(`  His booty remains.`),
		mapf(false, function(x: OBJECT) {
                insert_object(x,here);
tro(x,G_echo_room_bit);
              },
		      hobjs(dem)),
		dem[G_hobjs] = /*(*/ [] /*)*/] /*)*/),
	 tro(chali,G_takebit),
	 cond(/*(*/ [here === find_room(`TREAS`),
		mapf(false,
		  function(x: OBJECT) {
                cond(/*(*/ [(x !== chali && x !== t),
			   cond(/*(*/ [trnn(x,G_echo_room_bit),
				  trz(x,G_echo_room_bit)] /*)*/,
				 /*(*/ [tro(x,G_ovison),
				  cond(/*(*/ [!flg,
					 flg = t,
					 tell(`As the thief dies, the power of his magic decreases, and his
treasures reappear:`, 2)] /*)*/),
				  tell(`  A `, 2, odesc2(x))] /*)*/)] /*)*/);
              },
		  robjs(here))] /*)*/),
	 dem[G_haction] = false] /*)*/,
	/*(*/ [prsact === G_first_Q_X_words, prob(20)] /*)*/,
	/*(*/ [prsact === G_out__X_X_words,
	 dem[G_haction] = false,
	 trz(find_obj(`STILL`), G_ovison),
	 tro(chali,G_takebit),
	 t[G_odesc1] = G_robber_u_desc] /*)*/,
	/*(*/ [prsact === G_in__X_X_words,
	 cond(/*(*/ [hroom(dem) === here,
		tell(`The robber revives, briefly feigning continued unconsciousness, and
when he sees his moment, scrambles away from you.`)] /*)*/),
	 cond(/*(*/ [type_Q(G_robber,offset), dem[G_haction] = robber] /*)*/,
	       /*(*/ [dem[G_haction] = robber] /*)*/),
	 t[G_odesc1] = G_robber_c_desc,
	 cond(/*(*/ [(here === find_room(`TREAS`) && oroom(chali = chali)),
		trz(chali,G_takebit)] /*)*/),
	 tro(find_obj(`STILL`), G_ovison)] /*)*/,
	/*(*/ [(type_Q(prsobj,object) && pv[2] === G_knife_X_objects && vname(prsact) === throw_X_words && !trnn(t,G_fightbit)),
	 cond(/*(*/ [prob(10),
		tell(`You evidently frightened the robber, though you didn't hit him.  He
flees`,		 1,
		 cond(/*(*/ [empty_Q(hobjs(dem)),
		        `.`] /*)*/,
		       /*(*/ [t,
		        mapf(false, function(x: OBJECT) {
                      insert_object(x,here);
                    }, hobjs(dem)),
			dem[G_hobjs] = /*(*/ [] /*)*/,
		        `, but the contents of his bag fall on the floor.`] /*)*/)),
		remove_object(t)] /*)*/,
	       /*(*/ [t,
		tell(`You missed.  The thief makes no attempt to take the knife, though it
would be a fine addition to the collection in his bag.  He does seem
angered by your attempt.`),
		tro(t,G_fightbit)] /*)*/)] /*)*/,
	/*(*/ [((prsact === G_throw_X_words || prsact === G_give_X_words) && type_Q(prsobj,object) && prsobj !== hobj(dem)),
	 cond(/*(*/ [ocapac(t) < 0,
		t[G_ocapac] = _(ocapac(t)),
		dem[G_haction] = cond(/*(*/ [type_Q(G_robber,offset), G_robber] /*)*/,
					 /*(*/ [robber] /*)*/),
		tro(find_obj(`STILL`), G_ovison),
		t[G_odesc1] = G_robber_c_desc,
		tell(`Your proposed victim suddenly recovers consciousness.`)] /*)*/),
	 cond(/*(*/ [(prsobj === brick = find_obj(`BRICK`) && ocan(fuse = find_obj(`FUSE`)) === brick && orand(fuse) && !0_Q(ctick(f = orand(fuse)[2]))),
		// I.e., he's trying to give us the brick with a lighted fuse.,
		tell(`The thief seems rather offended by your offer.  Do you think he's as
stupid as you are?`)] /*)*/,
	       /*(*/ [remove_object(prsobj),
		dem[G_hobjs] = /*(*/ [prsobj,_X,hobjs(dem)] /*)*/,
		tell(`The thief places the `, 1, odesc2(prsobj), ` in his bag and thanks
you politely.`)] /*)*/)] /*)*/,
	/*(*/ [(prsact && vname(prsact) === take_X_words),
	 tell(`Once you got him, what would you do with him?`)] /*)*/);
  }

export function chalice() {
    let prsa: VERB = G_prsvec[1];
    let ch: OBJECT = G_prsvec[2];
    let tr: ROOM = null;
    let t: ROOM = null;
    cond(/*(*/ [prsa === G_take_X_words,
	       cond(/*(*/ [(!ocan(ch) && oroom(ch) === tr = find_room(`TREAS`) && oroom(t = find_obj(`THIEF`)) === tr && fighting_Q(t) && haction(G_robber_demon)),
		      tell(`Realizing just in time that you'd be stabbed in the back if you
attempted to take the chalice, you return to the fray.`)] /*)*/)] /*)*/);
  }



export function burner() {
    let pv: VECTOR = G_prsvec;
    let prso: OBJECT = pv[2];
    let prsi: OBJECT = pv[3];
    cond(/*(*/ [flaming_Q(prsi),
	    cond(/*(*/ [object_action()] /*)*/,
		  /*(*/ [(avehicle(G_winner) === find_obj(`BALLO`) && balloon())] /*)*/,
		  /*(*/ [(burnable_Q(prso) && cond(/*(*/ [memq(prso,aobjs(G_winner)),
			       tell(`The `, 1, odesc2(prso), ` catches fire.`),
			       jigs_up(`Unfortunately, you were holding it at the time.`)] /*)*/,
			      /*(*/ [hackable_Q(prso,G_here),
			       tell(`The `, 1, odesc2(prso), ` catches fire and is consumed.`),
			       remove_object(prso)] /*)*/,
			      /*(*/ [tell(`You don't have that.`)] /*)*/))] /*)*/,
		  /*(*/ [tell(`I don't think you can burn a `, 1, odesc2(prso), `.`)] /*)*/)] /*)*/,
	   /*(*/ [tell(`With a `, 1, odesc2(prsi), `??!?`)] /*)*/);
  }  

export function turner() {
    let pv: VECTOR = G_prsvec;
    let prso: OBJECT = pv[2];
    let prsi: OBJECT = pv[3];
    cond(/*(*/ [trnn(prso,G_turnbit),
	   cond(/*(*/ [trnn(prsi,G_toolbit),
		  object_action()] /*)*/,
		 /*(*/ [tell(`You certainly can't turn it with a `, 1, odesc2(prsi), `.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`You can't turn that!`)] /*)*/);
  }

psetg(doormungs,
  () => /*[*/ [`The door is invulnerable.`,
    `You cannot damage this door.`,
    `The door is still under warranty.`] /*]*/)

export let G_doormungs: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function ddoor_function() {
    let pa: VERB = G_prsvec[1];
    cond(/*(*/ [pa === G_open_X_words,
	   tell(`The door cannot be opened.`)] /*)*/,
	  /*(*/ [pa === G_burn_X_words,
	   tell(`You cannot burn this door.`)] /*)*/,
	  /*(*/ [pa === G_mung_X_words,
	   tell(pick_one(G_doormungs))] /*)*/);
  }

 export function inflater() {
    let prsi: OBJECT = G_prsvec[2];
    let prso: OBJECT = G_prsvec[3];
    cond(/*(*/ [prsi === find_obj(`IBOAT`),
	   cond(/*(*/ [prso === find_obj(`PUMP`),
		  object_action()] /*)*/,
		 /*(*/ [tell(`You would inflate it with that?`)] /*)*/)] /*)*/,
	  /*(*/ [prsi === find_obj(`RBOAT`),
	   tell(`Inflating it further would probably burst it.`)] /*)*/,
	  /*(*/ [tell(`How can you inflate that?`)] /*)*/);
  }

export function deflater() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [prso === find_obj(`RBOAT`),
	   object_action()] /*)*/,
	  /*(*/ [tell(`Come on, now!`)] /*)*/);
  }

export function locker() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [prso === find_obj(`GRAT2`),
	   G_grunlock_X_flag = false,
	   tell(`The grate is locked.`),
	   mapf(false,
		 function(x: (CEXIT | NEXIT | ROOM)) {
            cond(/*(*/ [(type_Q(x,cexit) && cxflag(x) === key_flag_X_flag),
				  x[G_cxstr] = `The grate is locked.`,
				  mapleave()] /*)*/);
          },
		 rexits(G_here))] /*)*/,
	  /*(*/ [tell(`It doesn't seem to work.`)] /*)*/);
  }

export function unlocker() {
    let prso: OBJECT = G_prsvec[2];
    let prsi: OBJECT = G_prsvec[3];
    let r: OBJECT = find_room(`MGRAT`);
    cond(/*(*/ [prso === find_obj(`GRAT2`),
	   cond(/*(*/ [prsi === find_obj(`KEYS`),
		  G_grunlock_X_flag = t,
		  tell(`The grate is unlocked.`),
		  mapf(false,
			function(x: (CEXIT | NEXIT | ROOM)) {
                cond(/*(*/ [(type_Q(x,cexit) && cxflag(x) === key_flag_X_flag),
				 x[G_cxstr] = `The grate is closed.`,
				 mapleave()] /*)*/);
              },
			rexits(r))] /*)*/,
		 /*(*/ [tell(`Can you unlock a grating with a `, 1, odesc2(prsi), `?`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`It doesn't seem to work.`)] /*)*/);
  }

export function killer() {
    let pv: VECTOR = G_prsvec;
    let prso: (FALSE | OBJECT) = pv[2];
    let prsi: (FALSE | OBJECT) = pv[3];
    cond(/*(*/ [!prso,
	       tell(`There is nothing here to kill.`)] /*)*/,
	      /*(*/ [!prsi,
	       tell(`Trying to kill a `, 1, odesc2(prso),
		     ` with your bare hands is suicidal.`)] /*)*/,
	      /*(*/ [!trnn(prsi,G_weaponbit),
	       tell(`Trying to kill a `, 0, odesc2(prso),
		     ` with a `),
	       tell(odesc2(prsi), 1, ` is suicidal.`)] /*)*/, 
	      /*(*/ [else,
	       blow(G_player,prso,orand(prsi), t, false)] /*)*/);
  }

export function attacker() {
    let pv: VECTOR = G_prsvec;
    let prso: (FALSE | OBJECT) = pv[2];
    let prsi: (FALSE | OBJECT) = pv[3];
    cond(/*(*/ [!prso,
	       tell(`There is nothing here to attack.`)] /*)*/,
	      /*(*/ [!prsi,
	       tell(`Attacking a `, 1, odesc2(prso),
		     ` with your bare hands is suicidal.`)] /*)*/,
	      /*(*/ [!trnn(prsi,G_weaponbit),
	       tell(`Attacking a `, 0, odesc2(prso),
		      ` with a `),
	       tell(odesc2(prsi), 1, ` is suicidal.`)] /*)*/,
	      /*(*/ [else,
	       blow(G_player,prso,orand(prsi), t, false)] /*)*/);
  }

export function swinger() {
    let pv: VECTOR = G_prsvec;
    let prso: (FALSE | OBJECT) = pv[2];
    let prsi: (FALSE | OBJECT) = pv[3];
    pv[2] = prsi;
pv[3] = prso;
attacker();
  }

export function hack_hack(obj: OBJECT, str: STRING, obj2?: (FALSE | STRING)) {
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [obj2,	   tell(str,0, odesc2(obj), ` with a `),
	   tell(obj2,1, pick_one(G_ho_hum))] /*)*/,
	  /*(*/ [else,
	   tell(str,1, odesc2(obj), pick_one(G_ho_hum))] /*)*/);
  }

psetg(ho_hum,
 () => /*[*/ [` does not seem to do anything.`,
   ` is not notably useful.`,
   ` isn't very interesting.`,
   ` doesn't appear worthwhile.`,
   ` has no effect.`,
   ` doesn't do anything.`] /*]*/)

export let G_ho_hum: VECTOR(/*[*/ [REST, STRING] /*]*/);

export function munger() {
    let prso: OBJECT = G_prsvec[2];
    let prsw: (OBJECT | FALSE) = G_prsvec[3];
    cond(/*(*/ [trnn(prso,G_villain),
	   cond(/*(*/ [prsw,		  cond(/*(*/ [trnn(prsw,G_weaponbit),
			 blow(G_player,prso,orand(prsw), t, false)] /*)*/,
			/*(*/ [t,
			 tell(`Munging a `, 0, odesc2(prso), ` with a `),
			 tell(odesc2(prsw), 1, ` is quite self-destructive.`)] /*)*/)] /*)*/,
		 /*(*/ [t,
		  tell(`Munging a `, 1, odesc2(prso), ` with your bare hands is suicidal.`)] /*)*/)] /*)*/,
	  /*(*/ [hack_hack(prso,`Munging a `)] /*)*/);
  }

export function kicker() {
    let prso: OBJECT = G_prsvec[2];
    hack_hack(prso,`Munging a `);
  }

export function waver() {
    let prso: OBJECT = G_prsvec[2];
    hack_hack(prso,`Waving a `);
  }

export function r_l() {
    let prso: OBJECT = G_prsvec[2];
    hack_hack(prso,`Playing in this way with a `);
  }

export function rubber() {
    let prso: OBJECT = G_prsvec[2];
    hack_hack(prso,`Fiddling with a `);
  }

export function exorcise() {
    cond(/*(*/ [object_action()] /*)*/, /*(*/ [t] /*)*/);
  }
	  
export function plugger() {
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(`This has no effect.`)] /*)*/);
  }

export function untie() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [trnn(prso,G_tiebit),
	   tell(`I don't think so.`)] /*)*/,
	  /*(*/ [tell(`This cannot be tied, so it cannot be untied!`)] /*)*/);
  }

export function pusher() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [memq(butto_X_objects, onames(prso))] /*)*/,
	  /*(*/ [hack_hack(prso,`Pushing the `)] /*)*/);
  }

export function tie() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [trnn(prso,G_tiebit),
	   cond(/*(*/ [object_action()] /*)*/,
		 /*(*/ [tell(`You can't tie it to that.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`How can you tie that to anything.`)] /*)*/);
  }

export function melter() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(`I'm not sure that a `, 1, odesc2(prso), ` can be melted.`)] /*)*/);
  }

G_on_pole_X_flag = false

export function body_function() {
    let prsa: VERB = G_prsvec[1];
    cond(/*(*/ [prsa === G_take_X_words,
	   tell(`A force keeps you from taking the bodies.`)] /*)*/,
	  /*(*/ [(prsa === G_mung_X_words || prsa === G_burn_X_words),
	   cond(/*(*/ [G_on_pole_X_flag] /*)*/,
		 /*(*/ [G_on_pole_X_flag = t,
		  insert_object(find_obj(`HPOLE`), find_room(`LLD2`))] /*)*/),
	   jigs_up(`The voice of the guardian of the dungeon booms out from the darkness 
'Your disrespect costs you your life!' and places your head on a pole.`)] /*)*/);
  }

export function mumbler() {
    tell(`You'll have to speak up if you expect me to hear you!`);
  }

export function alarm() {
    let prso: OBJECT = G_prsvec[2];
    cond(/*(*/ [trnn(prso,G_sleepbit),
	   object_action()] /*)*/,
	  /*(*/ [tell(`The `, 1, odesc2(prso), ` isn't sleeping.`)] /*)*/);
  }

export function zork() {
    tell(`That word is replaced henceforth with DUNGEON.`);
  }

export function dungeon() {
    tell(`At your service!`);
  }

export function painting() {
    let prsa: VERB = G_prsvec[1];
    let art: OBJECT = G_prsvec[2];
    cond(/*(*/ [prsa === G_mung_X_words,
	   art[G_otval] = 0,
	   art[G_odesc2] = `worthless piece of canvas`,
	   art[G_odesc1] = `There is a worthless piece of canvas here.`,
	   tell(`Congratulations!  Unlike the other vandals, who merely stole the
artist's masterpieces, you have destroyed one.`)] /*)*/);
  }

psetg(dimmer, `The lamp appears to be getting dimmer.`)

psetg(lamp_ticks, /*[*/ [50, 30, 20, 10, 4, 0] /*]*/)

psetg(lamp_tells, /*[*/ [G_dimmer,G_dimmer,G_dimmer,G_dimmer,`The lamp is dying.`] /*]*/)

export function lantern() {
    let pv: VECTOR = G_prsvec;
    let verb: VERB = pv[1];
    let here: ROOM = G_here;
    let rlamp: OBJECT = find_obj(`LAMP`);
    let foo: VECTOR(ANY, CEVENT) = null;
    cond(/*(*/ [verb === G_throw_X_words,
	       tell(`The lamp has smashed into the floor and the light has gone out.`),
	       remove_object(find_obj(`LAMP`)),
	       insert_object(find_obj(`BLAMP`), here)] /*)*/,
	      /*(*/ [verb === G_c_int_X_words,
	       light_int(rlamp,G_lntin,G_lamp_ticks,G_lamp_tells)] /*)*/,
	      /*(*/ [verb === G_turn_on_X_words,
	       clock_enable(foo = orand(rlamp)[2]),
	       false] /*)*/,
	      /*(*/ [verb === G_turn_off_X_words,
	       clock_disable(foo = orand(rlamp)[2]),
	       false] /*)*/);
  }

export function sword_glow(dem: HACK) {
    let sw: OBJECT = hobj(dem);
    let g: FIX = otval(sw);
    let here: ROOM = G_here;
    let ng: FIX = 0;
    cond(/*(*/ [(!oroom(sw) && !ocan(sw) && memq(sw,aobjs(G_player))),
	  cond(/*(*/ [infested_Q(here), ng = 2] /*)*/,
		/*(*/ [mapf(false,
		       function(e: (ROOM | CEXIT | NEXIT | ATOM)) {
                cond(/*(*/ [type_Q(e,room),
					(infested_Q(e) && mapleave(t))] /*)*/,
				       /*(*/ [type_Q(e,cexit),
					(infested_Q(e[2]) && mapleave(t))] /*)*/);
              },
		       rexits(here)),
		 ng = 1] /*)*/),
	  cond(/*(*/ [ng === g] /*)*/,
		/*(*/ [ng === 2, tell(`Your sword has begun to glow very brightly.`)] /*)*/,
		/*(*/ [1_Q(ng), tell(`Your sword is glowing with a faint blue glow.`)] /*)*/,
		/*(*/ [0_Q(ng), tell(`Your sword is no longer glowing.`)] /*)*/),
	  sw[G_otval] = ng] /*)*/,
	 /*(*/ [dem[G_haction] = false] /*)*/);
  }

export function sword() {
    let pa: VERB = G_prsvec[1];
    cond(/*(*/ [(pa === G_take_X_words && G_winner === G_player),
	       G_sword_demon[G_haction] = cond(/*(*/ [type_Q(G_sword_glow,offset),
						 G_sword_glow] /*)*/,
						/*(*/ [sword_glow] /*)*/),
	       false] /*)*/);
  }

export function infested_Q(r: ROOM) {
    let villains: LIST(/*[*/ [REST, OBJECT] /*]*/) = G_villains;
    let dem: HACK = get_demon(`THIEF`);
    ((r === hroom(dem) && haction(dem)) || mapf(false,
		  function(v: OBJECT) {
          cond(/*(*/ [r === oroom(v), mapleave(t)] /*)*/);
        },
		  villains));
  }


psetg(cdimmer, `The candles grow shorter.`)

psetg(candle_ticks, /*[*/ [20, 10, 5, 0] /*]*/)

psetg(candle_tells, /*[*/ [G_cdimmer,G_cdimmer,`The candles are very short.`] /*]*/)

export function match_function() {
    let prsa: VERB = G_prsvec[1];
    let prso = G_prsvec[2];
    let match: OBJECT = find_obj(`MATCH`);
    let mc: FIX = orand(match);
    cond(/*(*/ [(prsa === G_light_X_words && prso === match),
	   cond(/*(*/ [(match[G_orand] = mc = _(mc,1) && l__Q(mc,0)),
		  tell(`I'm afraid that you have run out of matches.`)] /*)*/,
		 /*(*/ [tro(match,G_flamebit),
		  match[G_olight_Q] = 1,
		  clock_int(G_matin,2),
		  tell(`One of the matches starts to burn.`)] /*)*/)] /*)*/,
	  /*(*/ [(prsa === G_turn_off_X_words && 1_Q(olight_Q(match))),
	   tell(`The match is out.`),
	   trz(match,G_flamebit),
	   match[G_olight_Q] = 0,
	   clock_int(G_matin,0),
	   t] /*)*/,
	  /*(*/ [prsa === G_c_int_X_words,
	   tell(`The match has gone out.`),
	   trz(match,G_flamebit),
	   match[G_olight_Q] = 0] /*)*/);
  }

export function candles() {
    let prsact: VERB = G_prsvec[1];
    let c: VERB = find_obj(`CANDL`);
    let winner: ADV = G_winner;
    let ao: LIST(/*[*/ [REST, OBJECT] /*]*/) = aobjs(winner);
    let w: (FALSE | OBJECT) = G_prsvec[3];
    let match: OBJECT = null;
    let foo: VECTOR(FIX, CEVENT) = null;
    let orphans: VECTOR(/*[*/ [4, ANY] /*]*/) = null;
    (orand(c) || c[G_orand] = /*[*/ [0, clock_int(G_cndin,50)] /*]*/);
foo = orand(c);
cond(/*(*/ [prsact === G_light_X_words,
	       cond(/*(*/ [0_Q(olight_Q(c)),
		      tell(`Alas, there's not much left of the candles.  Certainly not enough to
burn.`)] /*)*/,
		     /*(*/ [!w,
		      tell(`With what?`),
		      orphans = G_orphans[G_oflag] = t,
		      orphans[G_overb] = prsact,
		      orphans[G_oslot1] = c,
		      orphans[G_oprep] = chtype(with_X_words, prep),
		      G_parse_won = false,
		      t] /*)*/,
		     /*(*/ [(w === match = find_obj(`MATCH`) && 1_Q(olight_Q(match))),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell(`The candles are already lighted.`)] /*)*/,
			    /*(*/ [c[G_olight_Q] = 1,
			     tell(`The candles are lighted.`),
			     clock_enable(foo[2])] /*)*/)] /*)*/,
		     /*(*/ [w === find_obj(`TORCH`),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell(`You realize, just in time, that the candles are already lighted.`)] /*)*/,
			    /*(*/ [tell(`The heat from the torch is so intense that the candles are vaporised.`),
			     cond(/*(*/ [(oroom(c) || ocan(c)),
				    remove_object(c)] /*)*/,
				   /*(*/ [winner[G_aobjs] = splice_out(c,ao)] /*)*/)] /*)*/)] /*)*/,
		     /*(*/ [tell(`You have to light them with something that's burning, you know.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === G_turn_off_X_words,
	       clock_disable(foo[2]),
	       cond(/*(*/ [1_Q(olight_Q(c)),
		      tell(`The flame is extinguished.`),
		      c[G_olight_Q] = _1] /*)*/,
		     /*(*/ [tell(`The candles are not lighted.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === G_c_int_X_words,
	       light_int(c,G_cndin,G_candle_ticks,G_candle_tells)] /*)*/);
  }

export function black_book() {
    let pv: VECTOR(/*[*/ [3, ANY] /*]*/) = G_prsvec;
    let v: VECTOR(/*[*/ [3, ANY] /*]*/) = pv[1];
    let b: OBJECT = pv[2];
    cond(/*(*/ [v === G_burn_X_words,
	 cond(/*(*/ [oroom(b),
		remove_object(b)] /*)*/,
	       /*(*/ [drop_object(b)] /*)*/),
	 jigs_up(`A booming voice says 'Wrong, cretin!' and you notice that you have
turned into a pile of dust.`)] /*)*/);
  }

export function light_int(obj: OBJECT, cev, tick: VECTOR(/*[*/ [REST, FIX] /*]*/), tell: VECTOR(/*[*/ [REST, STRING] /*]*/)) {
    let cnt: FIX = null;
    let tim: FIX = null;
    let foo: VECTOR(FIX, CEVENT) = orand(obj);
    foo[1] = cnt = _(foo[1], 1);
clock_int(cev,tim = tick[cnt]);
cond(/*(*/ [0_Q(tim),
 	   cond(/*(*/ [(!oroom(obj) || oroom(obj) === G_here),
		  tell(`I hope you have more light than from a `, 1, odesc2(obj), `.`)] /*)*/),
	   obj[G_olight_Q] = 0] /*)*/,
	  /*(*/ [(!oroom(obj) || oroom(obj) === G_here),
	   tell(tell[cnt])] /*)*/);
  }

export function hackable_Q(obj: OBJECT, rm: ROOM) {
    let av: (FALSE | OBJECT) = avehicle(G_winner);
    cond(/*(*/ [av,	   search_list(oid(obj), ocontents(av), false)] /*)*/,
	  /*(*/ [search_list(oid(obj), robjs(rm), false)] /*)*/);
  }