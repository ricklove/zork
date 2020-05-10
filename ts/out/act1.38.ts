// VOCABULARY, ACTION FUNCTIONS, MAZE (NORMALLY ENCODED)

export function blo(y) {
    cond(/*(*/ [type_Q(rep,subr, fsubr),
	       read_table = ivector(256, 0)[chtype(ascii(_X__), fix)] = _X__,
	       evaltype(form, segment),
	       applytype(subr, fix),
	       alltypes()[6] = alltypes()[7],
	       substitute(2, 1),
	       off(bh)] /*)*/);
  }

export let ff: string;
export function ilo(body: string, type: number, nm1: string, nm2: string, m1?: string, m2: string) {
    cond(/*(*/ [type === _400000000000_,
	       cond(/*(*/ [((body[`<FLUSH-ME>`] && !winners[xunm]) || (winners[nm1] && body[ff])),
		      eval(parse(body))] /*)*/)] /*)*/);
dismiss(t);
  }

// ROOM FUNCTIONS

export function east_house() {
    let win: adv = winner;
    let prsvec: vector = prsvec;
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	   tell(`You are behind the white house.  In one corner of the house there
is a small window which is `, 1, cond(/*(*/ [kitchen_window_X_flag,		  		      `open.`] /*)*/,
		 		     /*(*/ [`slightly ajar.`] /*)*/))] /*)*/);
  }
	   
// HACK THE KITCHEN WINDOW

grunlock_X_flag = false

export function window_function() {
    let prsact: verb = prsvec[1];
    open_close(prsact,		kitchen_window_X_flag,
`With great effort, you open the window far enough to allow entry.`,
`The window closes (more easily than it opened).`);
  }

export function open_close(verb: verb, atm: atom, stropn: string, strcls: string) {
    cond(/*(*/ [verb === open_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(pick_one(dummy))] /*)*/,
		 /*(*/ [tell(stropn),
		  setg(atm,t)] /*)*/)] /*)*/,
	  /*(*/ [verb === close_X_words,
	   cond(/*(*/ [/*,*/ [atm] /*1*/,		  tell(strcls),
		  setg(atm,false),
		  t] /*)*/,
		 /*(*/ [tell(pick_one(dummy))] /*)*/)] /*)*/);
  }

// KITCHEN -- CHECK THE WINDOW

export function kitchen() {
    let win: adv = winner;
    let prsvec: vector = prsvec;
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	   tell(`You are in the kitchen of the white house.  A table seems to have
been used recently for the preparation of food.  A passage leads to
the west and a dark staircase can be seen leading upward.  To the
east is a small window which is `, 0),
	   cond(/*(*/ [kitchen_window_X_flag,		  tell(`open.`, 1)] /*)*/,
		 /*(*/ [tell(`slightly ajar.`, 1)] /*)*/)] /*)*/,
	  /*(*/ [t] /*)*/);
  }

export function leaf_pile() {
    let pv: vector(/*[*/ [3, any] /*]*/) = prsvec;
    let l: object = pv[2];
    cond(/*(*/ [pv[1] === burn_X_words,
	       l[orand] = 1,
	       cond(/*(*/ [oroom(l),
		      tell(`The leaves burn and the neighbors start to complain.`),
		      remove_object(l)] /*)*/,
		     /*(*/ [t,
		      drop_object(l),
		      jigs_up(`The sight of someone carrying a pile of burning leaves so offends
the neighbors that they come over and put you out.`)] /*)*/)] /*)*/,
	      /*(*/ [pv[1] === move_X_words,
	       l[orand] = 1,
	       tell(`Done.`)] /*)*/);
  }

psetg(resdesc,
`However, with the water level lowered, there is merely a wide stream
running through the center of the room.`)

psetg(gladesc,
`You are in a large room, with giant icicles hanging from the walls
and ceiling.  There are passages to the north and east.`)

export function glacier_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	   cond(/*(*/ [glacier_flag_X_flag,		  tell(gladesc),
		  tell(`There is a large passageway leading westward.`, 1)] /*)*/,
		 /*(*/ [tell(gladesc)] /*)*/)] /*)*/);
  }

export function trophy_case() {
    let prsact = prsvec[1];
    cond(/*(*/ [prsact === take_X_words,
	   tell(`The trophy case is securely fastened to the wall (perhaps to foil any
attempt by robbers to remove it).`)] /*)*/);
  }
	  
export function glacier() {
    let prsvec: vector(verb, /*[*/ [2, any] /*]*/) = prsvec;
    let prsact: verb = prsvec[1];
    let t: verb = null;
    cond(/*(*/ [vname(prsact) === throw_X_words,
	   cond(/*(*/ [prsvec[2] === t = find_obj(`TORCH`),
		  tell(`The torch hits the glacier and explodes into a great ball of flame,
devouring the glacier.  The water from the melting glacier rushes
downstream, carrying the torch with it.  In the place of the glacier,
there is a passageway leading west.`),
		  remove_object(find_obj(`ICE`)),
		  remove_object(t),
		  insert_object(t,find_room(`STREA`)),
		  t[odesc2] = `burned out ivory torch`,
		  t[odesc1] = `There is a burned out ivory torch here.`,
		  t[olight_Q] = 0,
		  trz(t,flamebit),
		  (lit_Q(here) || tell(`The melting glacier seems to have carried the torch away, leaving
you in the dark.`)),
		  glacier_flag_X_flag = t] /*)*/,
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
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	       cond(/*(*/ [low_tide_X_flag,		      tell(`You are in the south end of a large cavernous room which was formerly
a reservoir.`),
		      tell(resdesc,1)] /*)*/,
		     /*(*/ [tell(`You are at the south end of a large reservoir.`)] /*)*/),
	       tell(`There is a western exit, a passageway south, and a steep pathway
climbing up along the edge of a cliff.`, 1)] /*)*/);
  }

export function reservoir_north() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	       cond(/*(*/ [low_tide_X_flag,		      tell(`You are in the north end of a large cavernous room which was formerly
a reservoir.`),
		      tell(resdesc,1)] /*)*/,
		     /*(*/ [tell(`You are at the north end of a large reservoir.`)] /*)*/),
	       tell(`There is a tunnel leaving the room to the north.`, 1)] /*)*/);
  }

// LIVING-ROOM -- FUNCTION TO ENTER THE DUNGEON FROM THE HOUSE

export function living_room() {
    let win: adv = winner;
    let prsvec: vector = prsvec;
    let rug_Q: (atom | false) = null;
    let prsact: verb = prsvec[1];
    let tc: object = null;
    cond(/*(*/ [prsact === look_X_words,
	       cond(/*(*/ [magic_flag_X_flag,		      tell(`You are in the living room.  There is a door to the east.  To the
west is a cyclops-shaped hole in an old wooden door, above which is
some strange gothic lettering `, 0)] /*)*/,
		     /*(*/ [tell(`You are in the living room.  There is a door to the east, a wooden
door with strange gothic lettering to the west, which appears to be
nailed shut, `, 0)] /*)*/),
	       rug_Q = orand(find_obj(`RUG`)),
	       cond(/*(*/ [(rug_Q && trap_door_X_flag),
		      tell(`and a rug lying beside an open trap-door.`, 1)] /*)*/,
		     /*(*/ [rug_Q,		      tell(`and a closed trap-door at your feet.`, 1)] /*)*/,
		     /*(*/ [trap_door_X_flag,		      tell(`and an open trap-door at your feet.`, 1)] /*)*/,
		     /*(*/ [tell(`and a large oriental rug in the center of the room.`, 1)] /*)*/),
	       t] /*)*/,
	      /*(*/ [(tc = find_obj(`TCASE`) && (prsact === take_X_words || (prsact === put_X_words && prsvec[3] === tc))),
	       winner[ascore] = _(raw_score,				       mapf(_,otval,ocontents(tc)))] /*)*/);
  }

export function trap_door() {
    let prsact: verb = prsvec[1];
    let rm: room = here;
    cond(/*(*/ [rm === find_room(`LROOM`),
	   cond(/*(*/ [prsact === open_X_words,
		  cond(/*(*/ [trap_door_X_flag,			 tell(`It's open.`)] /*)*/,
			/*(*/ [tell(`The door reluctantly opens to reveal a rickety staircase descending
into darkness.`)] /*)*/),
		  cond_open(down_X_directions, rm)] /*)*/,
		 /*(*/ [prsact === close_X_words,
		  cond(/*(*/ [trap_door_X_flag,			 tell(`The door swings shut and closes.`)] /*)*/,
			/*(*/ [tell(`It's closed.`)] /*)*/),
		  cond_close(down_X_directions, rm),
		  t] /*)*/)] /*)*/,
	  /*(*/ [rm === find_room(`CELLA`),
	   cond(/*(*/ [prsact === open_X_words,
		  tell(`The door is locked from above.`)] /*)*/,
		 /*(*/ [tell(pick_one(dummy))] /*)*/)] /*)*/);
  }

export function look_under() {
    let obj: object = prsvec[2];
    cond(/*(*/ [(obj === find_obj(`RUG`) && !orand(obj) && !trap_door_X_flag),
	   tell(`Underneath the rug is a closed trap door.`)] /*)*/,
	  /*(*/ [(obj === find_obj(`LEAVE`) && rvars(find_room(`CLEAR`)) !== 1),
	   tell(`Underneath the pile of leaves is a grating.`)] /*)*/);
  }

export function repent() {
    tell(`It could very well be too late!`);
  }

export function clearing() {
    let prsact: verb = prsvec[1];
    let rm: room = here;
    let grate: object = find_obj(`GRAT1`);
    let leaves: object = find_obj(`LEAVE`);
    let rv: number = rvars(rm);
    cond(/*(*/ [prsact === look_X_words,
	 tell(`You are in a clearing, with a forest surrounding you on the west
and south.`),
	 cond(/*(*/ [key_flag_X_flag,		tell(`There is an open grating, descending into darkness.`, 1)] /*)*/,
	       /*(*/ [!0_Q(rv),
		tell(`There is a grating securely fastened into the ground.`, 1)] /*)*/)] /*)*/,
	/*(*/ [(0_Q(rv) && ((prsact === burn_X_words && !0_Q(orand(leaves))) || prsact === take_X_words || prsact === move_X_words) && prsvec[2] === leaves),
	 tell(`A grating appears on the ground.`),
	 tro(grate,ovison),
	 rm[rvars] = 1] /*)*/);
  }

// CELLAR--FIRST ROOM IN BASEMENT.

export function cellar() {
    let win: adv = winner;
    let prsact: verb = prsvec[1];
    let door: object = find_obj(`DOOR`);
    cond(/*(*/ [prsact === look_X_words,
	 tell(`You are in a dark and damp cellar with a narrow passageway leading
east, and a crawlway to the south.  On the west is the bottom of a
steep metal ramp which is unclimbable.`)] /*)*/,
	/*(*/ [(vname(prsact) === walk_in_X_words && trap_door_X_flag && !otouch_Q(door)),
	 trap_door_X_flag = false,
	 door[otouch_Q] = t,
	 tell(`The trap door crashes shut, and you hear someone barring it.`, 1)] /*)*/);
  }

`STUDIO:  LET PEOPLE UP THE CHIMNEY IF THEY DON'T HAVE MUCH STUFF`

export function chimney_function() {
    let winner: adv = winner;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    cond(/*(*/ [(l__Q(aobjs.length, 2) && memq(find_obj(`LAMP`), aobjs)),
	 light_load_X_flag = t,
	 // Door will slam shut next time, too, since this way up don't count.,
	 cond(/*(*/ [!trap_door_X_flag,
		find_obj(`DOOR`)[otouch_Q] = false] /*)*/),
	 false] /*)*/,
	/*(*/ [t,
	 light_load_X_flag = false] /*)*/);
  }

// OBJECT FUNCTIONS

export function rug() {
    let prsvec: vector = prsvec;
    let prsa: verb = prsvec[1];
    let obj: object = null;
    cond(/*(*/ [prsa === lift_X_words,
	  tell(`The rug is too heavy to lift, but in trying to take it you have 
noticed an irregularity beneath it.`)] /*)*/,
	 /*(*/ [prsa === move_X_words,
	  cond(/*(*/ [orand(obj = find_obj(`RUG`)),
		 tell(`Having moved the carpet previously, you find it impossible to move
it again.`)] /*)*/,
		/*(*/ [tell(`With a great effort, the rug is moved to one side of the room.
With the rug moved, the dusty cover of a closed trap-door appears.`),
		 tro(find_obj(`DOOR`), ovison),
		 obj[orand] = t] /*)*/)] /*)*/,
	 /*(*/ [prsa === take_X_words,
	  tell(`The rug is extremely heavy and cannot be carried.`)] /*)*/);
  }

export function rusty_knife() {
    let prsvec: vector = prsvec;
    let prsa: verb = prsvec[1];
    let prsi: (false | object) = prsvec[3];
    cond(/*(*/ [prsa === take_X_words,
	       (memq(find_obj(`SWORD`), aobjs(winner)) && tell(`As you pick up the rusty knife, your sword gives a single pulse
of blinding blue light.`)),
	       false] /*)*/,
	      /*(*/ [(prsa === attac_X_words || prsa === swing_X_words || (prsa === throw_X_words && prsi) || prsa === kill_X_words),
	       kill_obj(find_obj(`RKNIF`), winner),
	       jigs_up(`As the knife approaches its victim, your mind is submerged by an
overmastering will.  Slowly, your hand turns, until the rusty blade
is an inch from your neck.  The knife seems to sing as it savagely
slits your throat.`)] /*)*/);
  }

export function skeleton() {
    let rm: room = winner[1];
    let lld: room = find_room(`LLD2`);
    let l: room = null;
    tell(`A ghost appears in the room and is appalled at your having
desecrated the remains of a fellow adventurer.  He casts a curse
on all of your valuables and orders them banished to the Land of
the Living Dead.  The ghost leaves, muttering obscenities.`);
l = rob_room(rm,/*(*/ [] /*)*/, 100);
l = rob_adv(player,l);
mapf(false,
	 function(x: object) {
        x[oroom] = lld;
      },
	 l);
cond(/*(*/ [!empty_Q(l),
	  putrest(rest(l,_(l.length, 1)), robjs(lld)),
	  lld[robjs] = l] /*)*/);
  }

export function troll() {
    let pa: verb = prsvec[1];
    let pv: vector = prsvec;
    let prso: (false | object) = pv[2];
    let here: room = here;
    let t: object = find_obj(`TROLL`);
    let a: object = find_obj(`AXE`);
    cond(/*(*/ [pa === fight_X_words,
	       cond(/*(*/ [ocan(a) === t, false] /*)*/,
		     /*(*/ [memq(a,robjs(here)),
		      snarf_object(t,a),
		      (here === oroom(t) && tell(`The troll, now worried about this encounter, recovers his bloody
axe.`)),
		      t] /*)*/,
		     /*(*/ [here === oroom(t),
		      tell(`The troll, disarmed, cowers in terror, pleading for his life in
the guttural tongue of the trolls.`),
		      t] /*)*/)] /*)*/,
	      /*(*/ [pa === dead__X_X_words, troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === out__X_X_words,
	       trz(find_obj(`AXE`), ovison),
	       t[odesc1] = trollout,
	       troll_flag_X_flag = t] /*)*/,
	      /*(*/ [pa === in__X_X_words,
	       tro(find_obj(`AXE`), ovison),
	       cond(/*(*/ [oroom(t) === here,
		      tell(`The troll stirs, quickly resuming a fighting stance.`)] /*)*/),
	       t[odesc1] = trolldesc,
	       troll_flag_X_flag = false] /*)*/,
	      /*(*/ [pa === first_Q_X_words, prob(33)] /*)*/,
	      /*(*/ [((pa === throw_X_words || pa === give_X_words) && prso),
	       cond(/*(*/ [pa === throw_X_words,
		      tell(`The troll, who is remarkably coordinated, catches the `, 1, odesc2(prso))] /*)*/,
		     /*(*/ [tell(`The troll, who is not overly proud, graciously accepts the gift`)] /*)*/),
	       cond(/*(*/ [prso === find_obj(`KNIFE`),
		      tell(`and being for the moment sated, throws it back.  Fortunately, the
troll has poor control, and the knife falls to the floor.  He does
not look pleased.`),
		      tro(t,fightbit)] /*)*/,
		     /*(*/ [tell(`and not having the most discriminating tastes, gleefully eats it.`),
		      remove_object(pv[2])] /*)*/)] /*)*/,
	      /*(*/ [(pa === take_X_words || pa === move_X_words),
	       tell(`The troll spits in your face, saying \"Better luck next time.\`)] /*)*/,
	      /*(*/ [vname(pa) === mung_X_words,
	       tell(`The troll laughs at your puny gesture.`)] /*)*/);
  }

`MIRROR ROOM HACKERY`

export function mirror_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [(prsact === look_X_words && lit_Q(here)),
	       tell(`You are in a large square room with tall ceilings.  On the south wall
is an enormous mirror which fills the entire wall.  There are exits
on the other three sides of the room.`),
	       cond(/*(*/ [mirror_mung_X_flag,		      tell(`Unfortunately, you have managed to destroy it by your reckless
actions.`, 1)] /*)*/)] /*)*/);
  }

mirror_mung_X_flag = false

export function mirror_mirror() {
    let prsact: verb = prsvec[1];
    let rm1: room = null;
    let rm2: room = null;
    let l1: list(/*[*/ [rest, object] /*]*/) = null;
    cond(/*(*/ [(!mirror_mung_X_flag && vname(prsact) === rub_X_words),
	       rm1 = here,
	       rm2 = cond(/*(*/ [rm1 === find_room(`MIRR1`),
			find_room(`MIRR2`)] /*)*/,
		       /*(*/ [find_room(`MIRR1`)] /*)*/),
	       l1 = robjs(rm1),
	       rm1[robjs] = robjs(rm2),
	       rm2[robjs] = l1,
	       mapf(false, function(x: object) {
            x[oroom] = rm1;
          },
		     robjs(rm1)),
	       mapf(false, function(x: object) {
            x[oroom] = rm2;
          },
		     robjs(rm2)),
	       goto(rm2),
	       tell(`There is a rumble from deep within the earth and the room shakes.`)] /*)*/,
	      /*(*/ [(prsact === look_X_words || prsact === exami_X_words),
	       cond(/*(*/ [mirror_mung_X_flag,		      tell(`The mirror is broken into many pieces.`)] /*)*/,
		     /*(*/ [tell(`There is an ugly person staring at you.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === take_X_words,
	       tell(`Nobody but a greedy surgeon would allow you to attempt that trick.`)] /*)*/,
	      /*(*/ [(vname(prsact) === mung_X_words || vname(prsact) === throw_X_words),
	       cond(/*(*/ [mirror_mung_X_flag,		      tell(`Haven't you done enough already?`)] /*)*/,
		     /*(*/ [mirror_mung_X_flag = t,
		      tell(`You have broken the mirror.  I hope you have a seven years supply of
good luck handy.`)] /*)*/)] /*)*/);
  } 

export function carousel_room() {
    let pv: vector = prsvec;
    cond(/*(*/ [(pv[1] === walk_in_X_words && carousel_zoom_X_flag),
	       jigs_up(spindizzy)] /*)*/,
	      /*(*/ [pv[1] === look_X_words,
	       tell(`You are in a circular room with passages off in eight directions.`, 1),
	       cond(/*(*/ [!carousel_flip_X_flag,
		      tell(`Your compass needle spins wildly, and you can't get your bearings.`, 1)] /*)*/)] /*)*/);
  }

export function carousel_exit() {
    let cx: (cexit | nexit | room) = null;
    cond(/*(*/ [carousel_flip_X_flag,false] /*)*/,
	      /*(*/ [tell(`Unfortunately, it is impossible to tell directions in here.`, 1),
	       carousel_out()] /*)*/);
  }

export function carousel_out() {
    let cx: (cexit | nexit | room) = null;
    (type_Q(cx = rexits(here)[_(2, _(1, mod(random(), 8)))], cexit) && cxroom(cx));
  }

export function torch_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	tell(`You are in a large room with a prominent doorway leading to a down
staircase. To the west is a narrow twisting tunnel.  Above you is a
large dome painted with scenes depicting elfin hacking rites. Up
around the edge of the dome (20 feet up) is a wooden railing. In the
center of the room there is a white marble pedestal.`),
	cond(/*(*/ [dome_flag_X_flag,	       tell(`A large piece of rope descends from the railing above, ending some
five feet above your head.`, 1)] /*)*/)] /*)*/);
  }

export function dome_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	       tell(`You are at the periphery of a large dome, which forms the ceiling
of another room below.  Protecting you from a precipitous drop is a
wooden railing which circles the dome.`),
	       cond(/*(*/ [dome_flag_X_flag,		      tell(`Hanging down from the railing is a rope which ends about ten feet
from the floor below.`, 1)] /*)*/)] /*)*/,
	      /*(*/ [vname(prsact) === jump_X_words,
	       jigs_up(`I'm afraid that the leap you attempted has done you in.`)] /*)*/);
  }

export function coffin_cure() {
    cond(/*(*/ [memq(find_obj(`COFFI`), aobjs(winner)),
	       egypt_flag_X_flag = false] /*)*/,
	      /*(*/ [else, egypt_flag_X_flag = t] /*)*/);
false;
  }

export function lld_room() {
    let pv: vector = prsvec;
    let win: adv = winner;
    let wobj: list(/*[*/ [rest, object] /*]*/) = aobjs(win);
    let pa: verb = pv[1];
    let cand: object = find_obj(`CANDL`);
    cond(/*(*/ [pa === look_X_words,
	       tell(`You are outside a large gateway, on which is inscribed 
	\"Abandon every hope, all ye who enter here.\"  
The gate is open; through it you can see a desolation, with a pile of
mangled corpses in one corner.  Thousands of voices, lamenting some
hideous fate, can be heard.`),
	       cond(/*(*/ [!lld_flag_X_flag,
		      tell(`The way through the gate is barred by evil spirits, who jeer at your
attempts to pass.`)] /*)*/)] /*)*/,
	      /*(*/ [vname(pa) === exorc_X_words,
	       cond(/*(*/ [memq(find_obj(`GHOST`), robjs(here)),
		      cond(/*(*/ [(memq(find_obj(`BELL`), wobj) && memq(find_obj(`BOOK`), wobj) && memq(cand = find_obj(`CANDL`), wobj) && olight_Q(cand) > 0),
			     tell(`There is a clap of thunder, and a voice echoes through the cavern: 
\"Begone, fiends!\"  The spirits, sensing the presence of a greater
power, flee through the walls.`),
		             remove_object(find_obj(`GHOST`)),
		             lld_flag_X_flag = t] /*)*/,
		            /*(*/ [tell(`You are not equipped for an exorcism.`)] /*)*/)] /*)*/,
		     /*(*/ [jigs_up(`There is a clap of thunder, and a voice echoes through the
cavern: \"Begone, chomper!\"  Apparently, the voice thinks you
are an evil spirit, and dismisses you from the realm of the living.`)] /*)*/)] /*)*/);
  }

export function lld2_room() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === look_X_words,
	   tell(`You have entered the Land of the Living Dead, a large desolate room.
Although it is apparently uninhabited, you can hear the sounds of
thousands of lost souls weeping and moaning.  In the east corner are
stacked the remains of dozens of previous adventurers who were less
fortunate than yourself.  To the east is an ornate passage,
apparently recently constructed. `,
		1,
		cond(/*(*/ [on_pole_X_flag,		                ` Amid the desolation, you spot what
appears to be your head, at the end of a long pole.`] /*)*/, /*(*/ [``] /*)*/))] /*)*/);
  }

export function ghost_function() {
    let pv: vector = prsvec;
    let g: object = find_obj(`GHOST`);
    cond(/*(*/ [pv[3] === g,
	 tell(`How can you attack a spirit with material objects?`),
	 false] /*)*/,
	/*(*/ [pv[2] === g,
	 tell(`You seem unable to affect these spirits.`)] /*)*/);
  }

export function maze_11() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	 tell(`You are in a small room near the maze. There are twisty passages
in the immediate vicinity.`),
	 cond(/*(*/ [key_flag_X_flag,		tell(`Above you is an open grating with sunlight pouring in.`)] /*)*/,
	       /*(*/ [grunlock_X_flag,		tell(`Above you is a grating.`)] /*)*/,
	       /*(*/ [tell(`Above you is a grating locked with a skull-and-crossbones lock.`)] /*)*/)] /*)*/);
  }

export function grat1_function() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      `The grating opens.`,
		      `The grating is closed.`)] /*)*/,
	  /*(*/ [tell(`The grating is locked.`)] /*)*/);
  }

export function grat2_function() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [grunlock_X_flag,	   open_close(prsact,		       key_flag_X_flag,
 		      `The grating opens to reveal trees above you.`,
		      `The grating is closed.`),
	   tro(find_obj(`GRAT1`), ovison)] /*)*/,
	  /*(*/ [tell(`The grating is locked.`)] /*)*/);
  }

export function treasure_room() {
    let pv: vector(verb) = prsvec;
    let hack: hack = robber_demon;
    let hh: list(/*[*/ [rest, object] /*]*/) = null;
    let chali = null;
    let hobj: object = hobj(hack);
    let flg: (atom | false) = false;
    let tl: list(/*[*/ [rest, room] /*]*/) = null;
    let here: room = here;
    let rooms: list(/*[*/ [rest, room] /*]*/) = rooms;
    cond(/*(*/ [(haction(hack) && vname(pv[1]) === walk_in_X_words),
	 cond(/*(*/ [flg = oroom(hobj) !== here,
		tell(`You hear a scream of anguish as you violate the robber's hideaway. 
Using passages unknown to you, he rushes to its defense.`),
		cond(/*(*/ [oroom(hobj),
		       remove_object(hobj)] /*)*/),
		tro(hobj,fightbit),
		hack[hroom] = here,
		hack[hrooms] = cond(/*(*/ [empty_Q(tl = rest(memq(here,rooms))),
					  rooms] /*)*/,
					 /*(*/ [tl] /*)*/),
		insert_object(hobj,here)] /*)*/,
	       /*(*/ [t,
		tro(hobj,fightbit)] /*)*/),
	 (!ocan(chali = find_obj(`CHALI`)) && oroom(chali) === here && trz(chali,takebit)),
	 cond(/*(*/ [!length_Q(robjs(here), 2),
		tell(`The thief gestures mysteriously, and the treasures in the room
suddenly vanish.`)] /*)*/),
	 mapf(false,
	   function(x: object) {
            cond(/*(*/ [(x !== chali && x !== hobj),
		    trz(x,ovison)] /*)*/);
          },
	   robjs(here))] /*)*/);
  }

export function treas() {
    cond(/*(*/ [(prsvec[1] === treas_X_words && here === find_room(`TEMP1`)),
	       goto(find_room(`TREAS`)),
	       room_desc()] /*)*/,
	      /*(*/ [(prsvec[1] === templ_X_words && here === find_room(`TREAS`)),
	       goto(find_room(`TEMP1`)),
	       room_desc()] /*)*/,
	      /*(*/ [t, tell(`Nothing happens.`)] /*)*/);
  }

export function prayer() {
    cond(/*(*/ [(here === find_room(`TEMP2`) && goto(find_room(`FORE1`))),
	 room_desc()] /*)*/,
	/*(*/ [tell(`If you pray enough, your prayers may be answered.`)] /*)*/);
  }

gate_flag_X_flag = false

export function dam_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
     tell(`You are standing on the top of the Flood Control Dam #3, which was
quite a tourist attraction in times far distant.  There are paths to
the north, south, east, and down.`),
     cond(/*(*/ [low_tide_X_flag,	    tell(`It appears that the dam has been opened since the water level behind
it is low and the sluice gate has been opened.  Water is rushing
downstream through the gates.`, 1)] /*)*/,
	   /*(*/ [tell(`The sluice gates on the dam are closed.  Behind the dam, there can be
seen a wide lake.  A small stream is formed by the runoff from the
lake.`, 1)] /*)*/),
     tell(`There is a control panel here.  There is a large metal bolt on the 
panel. Above the bolt is a small green plastic bubble.`, 1),
     cond(/*(*/ [gate_flag_X_flag,tell(`The green bubble is glowing.`, 1)] /*)*/)] /*)*/);
  }

export function bolt_function() {
    let prsact: verb = prsvec[1];
    let prsi: (false | object) = prsvec[3];
    let trunk: object = find_obj(`TRUNK`);
    cond(/*(*/ [prsact === turn_X_words,
	       cond(/*(*/ [prsi === find_obj(`WRENC`),
		      cond(/*(*/ [gate_flag_X_flag,			     cond(/*(*/ [low_tide_X_flag,				    low_tide_X_flag = false,
				    tell(`The sluice gates close and water starts to collect behind the dam.`),
				    (memq(trunk,robjs(find_room(`RESES`))) && trz(trunk,ovison)),
				    t] /*)*/,
				   /*(*/ [low_tide_X_flag = t,
				    tell(`The sluice gates open and water pours through the dam.`),
				    tro(trunk,ovison)] /*)*/)] /*)*/,
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

export let drownings: vector(/*[*/ [rest, string] /*]*/);

export function maint_room() {
    let pv = prsvec;
    let prsact: verb = pv[1];
    let prso: prsobj = pv[2];
    let prsi: (false | object) = pv[3];
    let mnt: room = find_room(`MAINT`);
    let here_Q: (atom | false) = here === mnt;
    let hack: number = null;
    cond(/*(*/ [prsact === c_int_X_words,
	       mnt[rvars] = _(1, hack = rvars(mnt)),
	       cond(/*(*/ [(here_Q && tell(`The water level here is now `,
				 1,
				 drownings[_(1, _(hack = rvars(mnt),
							 2))]))] /*)*/),
	       cond(/*(*/ [g__Q(hack = rvars(mnt), 16),
		      mung_room(mnt,				 
`The room is full of water and cannot be entered.`),
		      clock_int(mntin,0),
		      (here_Q && jigs_up(`I'm afraid you have done drowned yourself.`))] /*)*/)] /*)*/);
cond(/*(*/ [vname(prsact) === push_X_words,
	       cond(/*(*/ [prso === find_obj(`BLBUT`),
		      cond(/*(*/ [0_Q(hack = rvars(here)),
			     tell(`There is a rumbling sound and a stream of water appears to burst
from the east wall of the room (apparently, a leak has occurred in a
pipe.)`),
			     here[rvars] = 1,
			     clock_int(mntin,_1),
			     t] /*)*/,
			    /*(*/ [tell(`The blue button appears to be jammed.`)] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj(`RBUTT`),
		      here[rlight_Q] = !rlight_Q(here),
		      cond(/*(*/ [rlight_Q(here),
			     tell(`The lights within the room come on.`)] /*)*/,
			    /*(*/ [tell(`The lights within the room shut off.`)] /*)*/)] /*)*/,
		     /*(*/ [prso === find_obj(`BRBUT`),
		      gate_flag_X_flag = false,
		      tell(`Click.`)] /*)*/,
		     /*(*/ [prso === find_obj(`YBUTT`),
		      gate_flag_X_flag = t,
		      tell(`Click.`)] /*)*/)] /*)*/);
  }

export function leak_function() {
    let hack: number = null;
    let prsvec: vector(/*[*/ [3, any] /*]*/) = prsvec;
    let prsa: verb = prsvec[1];
    let prsi: (object | false) = prsvec[3];
    cond(/*(*/ [prsvec[2] === find_obj(`LEAK`),
	       cond(/*(*/ [(vname(prsa) === plug_X_words && hack = rvars(here) > 0),
		      cond(/*(*/ [prsi === find_obj(`PUTTY`),
			     here[rvars] = _1,
			     clock_int(mntin,0),
			     tell(`By some miracle of elven technology, you have managed to stop the
leak in the dam.`)] /*)*/,
			    /*(*/ [with_tell(prsi)] /*)*/)] /*)*/)] /*)*/);
  }

export function tube_function() {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = prsvec;
    cond(/*(*/ [(prsvec[1] === put_X_words && prsvec[3] === find_obj(`TUBE`)),
	       tell(`The tube refuses to accept anything.`)] /*)*/);
  }

export function with_tell(obj: object) {
    tell(`With a `, 1, odesc2(obj), `?`);
  }

export function cave2_room() {
    let foo: vector(number, cevent) = null;
    let bar: cevent = null;
    let prsact: verb = prsvec[1];
    let c: verb = null;
    cond(/*(*/ [vname(prsact) === walk_in_X_words,
	 (memq(c = find_obj(`CANDL`), aobjs(winner)) && prob(50) && 1_Q(olight_Q(c)) && clock_disable(bar = foo = orand(c)[2]) && c[olight_Q] = _1 && tell(`The cave is very windy at the moment and your candles have blown out.`))] /*)*/);
  }

export function bottle_function() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact[1] === throw_X_words,
	 tell(`The bottle hits the far wall and is decimated.`),
	 remove_object(prsvec[2])] /*)*/,
	/*(*/ [prsact[1] === mung_X_words,
	 cond(/*(*/ [memq(prsvec[2], aobjs(winner)),
		winner[aobjs] = splice_out(prsvec[2], aobjs(winner)),
		tell(`You have destroyed the bottle.  Well done.`)] /*)*/,
	       /*(*/ [memq(prsvec[2], robjs(here)),
		here[robjs] = splice_out(prsvec[2], robjs(here)),
		tell(`A brilliant maneuver destroys the bottle.`)] /*)*/)] /*)*/);
  }
	
export function fill() {
    let rem: (atom | false) = false;
    let prsvec: vector(verb, object, any) = prsvec;
    let w: object = find_obj(`WATER`);
    cond(/*(*/ [object_action()] /*)*/,
	/*(*/ [(rtrnn(here,rfillbit) || rem = (ocan(w) === avehicle(winner) || oroom(w) === here)),
	 prsvec[1] = take_X_words,
	 prsvec[3] = prsvec[2],
	 prsvec[2] = w,
	 water_function(rem)] /*)*/,
	/*(*/ [tell(`I can't find any water here.`)] /*)*/);
  }

export function water_function(rem?: (atom | false)) {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = prsvec;
    let prsact: verb = prsvec[1];
    let me: adv = winner;
    let b: object = find_obj(`BOTTL`);
    let w: object = prsvec[2];
    let av: (object | false) = avehicle(me);
    let can: (false | object) = prsvec[3];
    cond(/*(*/ [(prsact === take_X_words || prsact === put_X_words),
	       cond(/*(*/ [(av && av === can),
		     tell(`There is now a puddle in the bottom of the `,
			    1,
			    odesc2(av),
			    `.`),
		      cond(/*(*/ [memq(w,aobjs(me)),
			     drop_object(w,me)] /*)*/),
		      cond(/*(*/ [memq(w,ocontents(av))] /*)*/,
			    /*(*/ [av[ocontents] = /*(*/ [w,_X,ocontents(av)] /*)*/,
			     w[ocan] = av] /*)*/)] /*)*/,
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
			     b[ocontents] = /*(*/ [w] /*)*/,
			     w[ocan] = b,
			     tell(`The bottle is now full of water.`)] /*)*/)] /*)*/,
		     /*(*/ [(ocan(w) === b && prsact === take_X_words && !can),
		      prsvec[2] = b,
		      take(t),
		      prsvec[2] = w] /*)*/,
		     /*(*/ [tell(`The water slips through your fingers.`)] /*)*/)] /*)*/,
	      /*(*/ [(prsact === drop_X_words || prsact === pour_X_words || prsact === give_X_words),
	       cond(/*(*/ [memq(w,aobjs(me)),
		      drop_object(w,me)] /*)*/),
	       cond(/*(*/ [av,		      tell(`There is now a puddle in the bottom of the `,
			    1,
			    odesc2(av),
			    `.`)] /*)*/,
		     /*(*/ [tell(`The water spills to the floor and evaporates immediately.`),
	       	      remove_object(w)] /*)*/)] /*)*/,
	      /*(*/ [prsact === throw_X_words,
	       tell(`The water splashes on the walls, and evaporates immediately.`),
	       remove_object(w)] /*)*/);
  }

export function rope_function() {
    let prsact: verb = prsvec[1];
    let droom: room = find_room(`DOME`);
    let rope: object = find_obj(`ROPE`);
    let win: adv = winner;
    cond(/*(*/ [here !== droom,
	 dome_flag_X_flag = false,
	 cond(/*(*/ [vname(prsact) === tie_X_words,
		tell(`There is nothing it can be tied to.`)] /*)*/,
	       /*(*/ [vname(prsact) === untie_X_words,
		tell(`It is not tied to anything.`)] /*)*/)] /*)*/,
	/*(*/ [(vname(prsact) === tie_X_words && prsvec[3] === find_obj(`RAILI`)),
	 cond(/*(*/ [dome_flag_X_flag,		tell(`The rope is already attached.`)] /*)*/,
	       /*(*/ [tell(`The rope drops over the side and comes within ten feet of the floor.`),
		dome_flag_X_flag = t,
		tro(rope,ndescbit),
		cond(/*(*/ [!oroom(rope),
		       win[aobjs] = splice_out(rope,aobjs(win)),
		       insert_object(rope,droom)] /*)*/)] /*)*/)] /*)*/,
	/*(*/ [vname(prsact) === untie_X_words,
	 cond(/*(*/ [dome_flag_X_flag,		dome_flag_X_flag = false,
		trz(rope,ndescbit),
		tell(`Although you tied it incorrectly, the rope becomes free.`)] /*)*/,
	       /*(*/ [tell(`It is not tied to anything.`)] /*)*/)] /*)*/,
	/*(*/ [(prsact === drop_X_words && !dome_flag_X_flag),
	 remove_object(rope),
	 insert_object(rope,find_room(`TORCH`)),
	 tell(`The rope drops gently to the floor below.`)] /*)*/,
	/*(*/ [(prsact === take_X_words && dome_flag_X_flag && tell(`The rope is tied to the railing.`))] /*)*/);
  }

export function cyclops() {
    let prsact: verb = prsvec[1];
    let prsob1: (object | false) = prsvec[2];
    let rm: room = here;
    let food: object = find_obj(`FOOD`);
    let drink: object = find_obj(`WATER`);
    let count: number = rvars(rm);
    let garlic: object = find_obj(`GARLI`);
    let cyc: object = null;
    cond(/*(*/ [cyclops_flag_X_flag,	       cond(/*(*/ [(prsact === awake_X_words || prsact === mung_X_words || prsact === burn_X_words || prsact === fight_X_words),
		      tell(`The cyclops yawns and stares at the thing that woke him up.`),
		      cyclops_flag_X_flag = false,
		      trz(cyc = find_obj(`CYCLO`), sleepbit),
		      tro(cyc,fightbit),
		      rm[rvars] = abs(rvars(rm)),
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
			     rm[rvars] = min(_1, _(count))] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === drink,
		      cond(/*(*/ [count < 0,
			     remove_object(drink),
			     tro(cyc = find_obj(`CYCLO`), sleepbit),
			     trz(cyc,fightbit),
			     tell(`The cyclops looks tired and quickly falls fast asleep (what did you
put in that drink, anyway?).`),
			     cyclops_flag_X_flag = t] /*)*/,
			    /*(*/ [tell(`The cyclops apparently was not thirsty at the time and refuses your
generous gesture.`),
			     false] /*)*/)] /*)*/,
		     /*(*/ [prsob1 === garlic,
		      tell(`The cyclops may be hungry, but there is a limit.`),
		      rm[rvars] = aos_sos(count)] /*)*/,
		     /*(*/ [tell(`The cyclops is not so stupid as to eat THAT!`),
		      rm[rvars] = aos_sos(count)] /*)*/)] /*)*/,
	      /*(*/ [(prsact === first_Q_X_words || prsact === fight_X_words), false] /*)*/,
	      /*(*/ [(rm[rvars] = aos_sos(count) && false)] /*)*/,
	      /*(*/ [(prsact === throw_X_words || vname(prsact) === mung_X_words),
	       cond(/*(*/ [prob(50),
		      tell(`Your actions don't appear to be doing much harm to the cyclops, but
they do not exactly lower your insurance premiums, either.`)] /*)*/,
		     /*(*/ [tell(`The cyclops ignores all injury to his body with a shrug.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === take_X_words,
	       tell(`The cyclops is rather heavy and doesn't take kindly to being grabbed.`)] /*)*/,
	      /*(*/ [prsact === tie_X_words,
	       tell(`You cannot tie the cyclops, although he is fit to be tied.`)] /*)*/);
  }

export function cyclops_room() {
    let pv: vector = prsvec;
    let rm: room = here;
    let vars: number = rvars(rm);
    cond(/*(*/ [pv[1] === look_X_words,
	       tell(`You are in a room with an exit on the west side, and a staircase
leading up.`),
	       cond(/*(*/ [(cyclops_flag_X_flag && !magic_flag_X_flag),
		      tell(`The cyclops, perhaps affected by a drug in your drink, is sleeping
blissfully at the foot of the stairs.`)] /*)*/,
		     /*(*/ [magic_flag_X_flag,		      tell(`On the north of the room is a wall which used to be solid, but which
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
	       cond(/*(*/ [cyclops_flag_X_flag] /*)*/,
	             /*(*/ [(0_Q(vars) || tell(cyclomad[abs(vars)]))] /*)*/)] /*)*/);
  }

psetg(cyclomad,
      () => /*[*/ [`The cyclops seems somewhat agitated.`,
	`The cyclops appears to be getting more agitated.`,
	`The cyclops is moving about the room, looking for something.`,
	
`The cyclops was looking for salt and pepper.  I think he is gathering
condiments for his upcoming snack.`,
	`The cyclops is moving toward you in an unfriendly manner.`,
	`You have two choices: 1. Leave  2. Become dinner.`] /*]*/)

export let cyclomad: vector(/*[*/ [rest, string] /*]*/);

export function aos_sos(foo: number) {
    cond(/*(*/ [foo < 0, foo = _(foo,1)] /*)*/,
	/*(*/ [foo = _(foo,1)] /*)*/);
cond(/*(*/ [cyclops_flag_X_flag] /*)*/,
	/*(*/ [tell(cyclomad[abs(foo)])] /*)*/);
  }

echo_flag_X_flag = false

export function echo_room() {
    let reader_string: string = reader_string;
    let b: verb = inbuf;
    let l: verb = null;
    let rm: room = find_room(`ECHO`);
    let outchan: channel = outchan;
    let verb: verb = null;
    let walk: verb = walk_X_words;
    cond(/*(*/ [echo_flag_X_flag] /*)*/,
	      /*(*/ [unwind(prog(/*(*/ [] /*)*/,
		 mapf(false,
		   function(obj: object) {
                cond(/*(*/ [ovis_Q(obj),
			    tro(obj,echo_room_bit),
			    trz(obj,ovison)] /*)*/);
              },
		   robjs(rm)),
	        repeat(/*(*/ [/*(*/ [prsvec, prsvec] /*)*/, random_action] /*)*/,
		       /*#*/ [decl, /*(*/ [/*(*/ [prsvec] /*)*/, vector] /*)*/] /*2*/,
		       l = readstring(b,					inchan,					reader_string),
		       readchr(inchan),
		       (alt_flag || readchr(inchan)),
		       moves = _(moves,1),
		       cond(/*(*/ [(eparse(lex(b,rest(b,l), t), t) && verb = prsvec[1] === walk && prsvec[2] && memq(chtype(prsvec[2], atom),
					 rexits(rm))),
			      random_action = vfcn(verb),
			      apply_random(random_action),
			      cond(/*(*/ [here !== rm,
				     mapf(false,
				       function(x: object) {
                          cond(/*(*/ [trnn(x,echo_room_bit),
						trz(x,echo_room_bit),
						tro(x,ovison)] /*)*/);
                        },
				       robjs(rm))] /*)*/),
			      return(t)] /*)*/,
			     /*(*/ [printstring(b,outchan,l),
			      tell_flag = t,
			      crlf(),
			      cond(/*(*/ [uppercase(b)[`ECHO`] === b,
				     tell(`The acoustics of the room change subtly.`,
					   1),
				     echo_flag_X_flag = t,
				     mapf(false,
					   function(x: object) {
                          cond(/*(*/ [trnn(x,echo_room_bit),
							    trz(x,echo_room_bit),
							    tro(x,ovison)] /*)*/);
                        },
					   robjs(rm)),
				     return(t)] /*)*/)] /*)*/))),
		prog(/*(*/ [] /*)*/,
		      goto(find_room(`CHAS3`)),
		      moves = _(moves,1),
		      mapf(false,
			    function(x: object) {
                cond(/*(*/ [trnn(x,echo_room_bit),
				     trz(x,echo_room_bit),
				     tro(x,ovison)] /*)*/);
              },
			    robjs(rm))))] /*)*/);
  }

export function leaper() {
    let rm: room = here;
    let exits: exit = rexits(rm);
    let m: room = null;
    cond(/*(*/ [m = memq(down_X_words, exits),
	  cond(/*(*/ [(type_Q(m[2], nexit) || (type_Q(m[2], cexit) && !cxflag(m[2]))),
		 jigs_up(pick_one(jumploss))] /*)*/)] /*)*/,
	 /*(*/ [tell(pick_one(wheeeee))] /*)*/);
  }

export function skipper() {
    tell(pick_one(wheeeee));
  }

hs = 0
export let hs: number;
export function hello() {
    let prsobj: (object | false) = prsvec[2];
    let amt: number = hs = _(hs,1);
    cond(/*(*/ [prsobj,	   cond(/*(*/ [prsobj === find_obj(`SAILO`),
		  cond(/*(*/ [0_Q(mod(amt,20)),
			 tell(`You seem to be repeating yourself.`)] /*)*/,
			/*(*/ [0_Q(mod(amt,10)),
			 tell(`I think that phrase is getting a bit worn out.`)] /*)*/,
			/*(*/ [tell(`Nothing happens here.`)] /*)*/)] /*)*/,
		 /*(*/ [prsobj === find_obj(`AVIAT`),
		  tell(`Here, nothing happens.`)] /*)*/,
		 /*(*/ [tell(`I think that only schizophrenics say 'Hello' to a `, 1, odesc2(prsobj), `.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(pick_one(hellos))] /*)*/);
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

export let hellos: vector(/*[*/ [rest, string] /*]*/);export let wheeeee: vector(/*[*/ [rest, string] /*]*/);export let jumploss: vector(/*[*/ [rest, string] /*]*/);

export function reader() {
    let pv: vector = prsvec;
    let po: object = pv[2];
    let pi: (false | object) = pv[3];
    cond(/*(*/ [!lit_Q(here),
	   tell(`It is impossible to read in the dark.`)] /*)*/,
	  /*(*/ [(pi && !transparent_Q(pi)),
	   tell(`How does one look through a `, 1, odesc2(pi), `?`)] /*)*/,
	  /*(*/ [!readable_Q(po),
	   tell(`How can I read a `, 1, odesc2(po), `?`)] /*)*/,
	  /*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(oread(po))] /*)*/);
  }
	  
export function well() {
    cond(/*(*/ [riddle_flag_X_flag,tell(`Well what?`)] /*)*/,
	  /*(*/ [here === find_room(`RIDDL`),
	   riddle_flag_X_flag = t,
	   tell(`There is a clap of thunder and the east door opens.`)] /*)*/,
	  /*(*/ [tell(`Well what?`)] /*)*/);
  }

export function sinbad() {
    cond(/*(*/ [(here === find_room(`CYCLO`) && memq(find_obj(`CYCLO`), robjs(here))),
	   cyclops_flag_X_flag = t,
	   tell(`The cyclops, hearing the name of his deadly nemesis, flees the room
by knocking down the wall on the north of the room.`),
	   magic_flag_X_flag = t,
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

export let dummy: vector(/*[*/ [rest, string] /*]*/);

export function brush() {
    let prso: object = prsvec[2];
    let prsi: (object | false) = prsvec[3];
    cond(/*(*/ [prso === find_obj(`TEETH`),
	   cond(/*(*/ [(prsi === find_obj(`PUTTY`) && memq(prsi,aobjs(winner))),
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
    let prsobj: (object | false) = prsvec[2];
    cond(/*(*/ [prsobj === find_obj(`BELL`),
	   tell(`Ding, dong.`)] /*)*/,
	  /*(*/ [tell(`How, exactly, can I ring that?`)] /*)*/);
  }

export function eat() {
    let prsvec: vector(/*[*/ [3, any] /*]*/) = prsvec;
    let eat_Q: (atom | false) = false;
    let drink_Q: (atom | false) = false;
    let prsobj: object = prsvec[2];
    let nobj: (object | false) = null;
    let aobjs: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [(eat_Q = edible_Q(prsobj) && memq(prsobj,aobjs)),
	   cond(/*(*/ [prsvec[1] === drink_X_words,
		  tell(`How can I drink that?`)] /*)*/,
		 /*(*/ [tell(`Thank you very much.  It really hit the spot.`),
		  winner[aobjs] = splice_out(prsobj,aobjs)] /*)*/)] /*)*/,
	  /*(*/ [(drink_Q = drinkable_Q(prsobj) && nobj = ocan(prsobj) && memq(nobj,aobjs)),
	   cond(/*(*/ [oopen_Q(nobj),
		  tell(`Thank you very much.  I was rather thirsty (from all this talking,
probably).`)] /*)*/,
		 /*(*/ [t,
		  tell(`I'd like to, but I can't get to it.`)] /*)*/),
	   prsobj[ocan] = false,
	   nobj[ocontents] = splice_out(prsobj,ocontents(nobj))] /*)*/,
	  /*(*/ [!(eat_Q || drink_Q),
	   tell(`I don't think that the `, 1, odesc2(prsobj), ` would agree with you.`)] /*)*/,
	  /*(*/ [tell(`I think you should get that first.`)] /*)*/);
  }

export function jargon() {
    tell(`Well, FOO, BAR, and BLETCH to you too!`);
  }

export function curses() {
    tell(pick_one(offended));
  }

psetg(offended, 
  () => /*[*/ [`Such language in a high-class establishment like this!`,
    `You ought to be ashamed of yourself.`,
    `Its not so bad.  You could have been killed already.`,
    `Tough shit, asshole.`,
    `Oh, dear.  Such language from a supposed winning adventurer!`] /*]*/)

export let offended: vector(/*[*/ [rest, string] /*]*/);

`ROBBER`

define(robber, robber, /*(*/ [hack,
		       `AUX`, /*(*/ [rm, hroom(hack)] /*)*/, robj,
			     /*(*/ [seen_Q, rseen_Q(rm)] /*)*/, /*(*/ [win, winner] /*)*/, /*(*/ [wroom, here] /*)*/,
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
	     function(x: object) {
              cond(/*(*/ [otval(x) > 0,
			    hack[hobjs] = hh = splice_out(x,hh),
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
		       hack[hflag] = t,
		       return(t, robber)] /*)*/)] /*)*/,
	       /*(*/ [(here_Q && fighting_Q(hobj) && cond(/*(*/ [!winning_Q(hobj,win),
			    tell(`Your opponent, determining discretion to be the better part of
valor, decides to terminate this little contretemps.  With a rueful
nod of his head, he steps backward into the gloom and disappears.`),
			    remove_object(hobj),
			    trz(hobj,fighting),
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
		       hack[hobjs] = splice_out(still,hobjs(hack)),
		       hobj[ocontents] = /*(*/ [still] /*)*/,
		       still[ocan] = hobj] /*)*/),
		hack[hobjs] = hh = rob_room(rm,hh,100),
	        hack[hobjs] = hh = rob_adv(win,hh),
	        hack[hflag] = t,
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
		       hack[hobjs] = hh = rob_room(rm,hh,100),
		       hack[hobjs] = hh = rob_adv(win,hh),
		       cond(/*(*/ [memq(find_obj(`ROPE`), hh),
			      dome_flag_X_flag = false] /*)*/),
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
       hack[hobjs] = hh = rob_room(rm,hh,75),
       cond(/*(*/ [(rdesc2(rm) === mazedesc && rdesc2(wroom) === mazedesc),
	 mapf(false,
	       function(x: object) {
                  cond(/*(*/ [(can_take_Q(x) && ovis_Q(x) && prob(40)),
			      tell(`You hear, off in the distance, someone saying \"My, I wonder what
this fine `,		      3, odesc2(x), ` is doing here.\`),
			      tell(``, 1),
			      cond(/*(*/ [prob(60),
				     remove_object(x),
				     x[otouch_Q] = t,
				     hack[hobjs] = hh = /*(*/ [x,_X,hh] /*)*/] /*)*/),
			      mapleave()] /*)*/);
                },
	       robjs(rm))] /*)*/,
	/*(*/ [mapf(false,
	       function(x: object) {
                  cond(/*(*/ [(0_Q(otval(x)) && can_take_Q(x) && ovis_Q(x) && prob(20)),
			      remove_object(x),
			      x[otouch_Q] = t,
			      hack[hobjs] = hh = /*(*/ [x,_X,hh] /*)*/,
			      cond(/*(*/ [rm === wroom,
				     tell(`You suddenly notice that the `,
					   1,
					   odesc2(x),
					   ` vanished.`)] /*)*/),
			      mapleave()] /*)*/);
                },
	       robjs(rm)),
	 cond(/*(*/ [memq(find_obj(`ROPE`), hh),
		dome_flag_X_flag = false] /*)*/)] /*)*/)] /*)*/),
     cond(/*(*/ [once = !once,		 // Move to next room, and hack.,
	    prog(/*(*/ [/*(*/ [rooms, hrooms(hack)] /*)*/] /*)*/,
	      rm = rooms[1],
	      cond(/*(*/ [empty_Q(rooms = rest(rooms)),
		     rooms = rooms] /*)*/),
	      cond(/*(*/ [rtrnn(rm,rsacredbit),	// Can I work here?,
		     again()] /*)*/),
	      hack[hroom] = rm,
	      hack[hflag] = false,
	      hack[hrooms] = rooms,
	      seen_Q = rseen_Q(rm)),
	    again()] /*)*/)),			      // Drop worthless cruft, sometimes,
   (rm === treas || mapf(false,
	     function(x: object) {
          cond(/*(*/ [(0_Q(otval(x)) && prob(30)),
			    hack[hobjs] = hh = splice_out(x,hh),
			    insert_object(x,rm),
			    (rm === wroom && tell(`The robber, rummaging through his bag, dropped a few items he found
valueless.`))] /*)*/);
        },
	      hh)))

export function snarf_object(who: object, what: object) {
    cond(/*(*/ [(ocan(what) !== who && (oroom(what) || ocan(what))),
	       remove_object(what),
	       what[ocan] = who,
	       who[ocontents] = /*(*/ [what,_X,ocontents(who)] /*)*/] /*)*/,
	      /*(*/ [who] /*)*/);
  }

export function robber_function() {
    let prsact: verb = prsvec[1];
    let dem: hack = get_demon(`THIEF`);
    let pv: vector = prsvec;
    let prsobj: (object | false) = pv[2];
    let here: room = here;
    let flg: (atom | false) = false;
    let brick: object = null;
    let fuse: object = null;
    let st: object = null;
    let f: object = null;
    let t: verb = hobj(dem);
    let chali: object = find_obj(`CHALI`);
    cond(/*(*/ [prsact === fight_X_words,
	 cond(/*(*/ [ocan(st = find_obj(`STILL`)) === t, false] /*)*/,
	       /*(*/ [oroom(st) === here,
		snarf_object(t,st),
		tell(`The robber, somewhat surprised at this turn of events, nimbly
retrieves his stilletto.`),
		t] /*)*/,
	       /*(*/ [else,
		tell(`Annoyed to be left unarmed in such an obviously dangerous
neighborhood, the thief slips off into the shadows.`),
		tro(chali,takebit),
		remove_object(t)] /*)*/)] /*)*/,
	/*(*/ [prsact === dead__X_X_words,
	 cond(/*(*/ [!empty_Q(hobjs(dem)),
		tell(`  His booty remains.`),
		mapf(false, function(x: object) {
                insert_object(x,here);
tro(x,echo_room_bit);
              },
		      hobjs(dem)),
		dem[hobjs] = /*(*/ [] /*)*/] /*)*/),
	 tro(chali,takebit),
	 cond(/*(*/ [here === find_room(`TREAS`),
		mapf(false,
		  function(x: object) {
                cond(/*(*/ [(x !== chali && x !== t),
			   cond(/*(*/ [trnn(x,echo_room_bit),
				  trz(x,echo_room_bit)] /*)*/,
				 /*(*/ [tro(x,ovison),
				  cond(/*(*/ [!flg,
					 flg = t,
					 tell(`As the thief dies, the power of his magic decreases, and his
treasures reappear:`, 2)] /*)*/),
				  tell(`  A `, 2, odesc2(x))] /*)*/)] /*)*/);
              },
		  robjs(here))] /*)*/),
	 dem[haction] = false] /*)*/,
	/*(*/ [prsact === first_Q_X_words, prob(20)] /*)*/,
	/*(*/ [prsact === out__X_X_words,
	 dem[haction] = false,
	 trz(find_obj(`STILL`), ovison),
	 tro(chali,takebit),
	 t[odesc1] = robber_u_desc] /*)*/,
	/*(*/ [prsact === in__X_X_words,
	 cond(/*(*/ [hroom(dem) === here,
		tell(`The robber revives, briefly feigning continued unconsciousness, and
when he sees his moment, scrambles away from you.`)] /*)*/),
	 cond(/*(*/ [type_Q(robber,offset), dem[haction] = robber] /*)*/,
	       /*(*/ [dem[haction] = robber] /*)*/),
	 t[odesc1] = robber_c_desc,
	 cond(/*(*/ [(here === find_room(`TREAS`) && oroom(chali = chali)),
		trz(chali,takebit)] /*)*/),
	 tro(find_obj(`STILL`), ovison)] /*)*/,
	/*(*/ [(type_Q(prsobj,object) && pv[2] === knife_X_objects && vname(prsact) === throw_X_words && !trnn(t,fightbit)),
	 cond(/*(*/ [prob(10),
		tell(`You evidently frightened the robber, though you didn't hit him.  He
flees`,		 1,
		 cond(/*(*/ [empty_Q(hobjs(dem)),
		        `.`] /*)*/,
		       /*(*/ [t,
		        mapf(false, function(x: object) {
                      insert_object(x,here);
                    }, hobjs(dem)),
			dem[hobjs] = /*(*/ [] /*)*/,
		        `, but the contents of his bag fall on the floor.`] /*)*/)),
		remove_object(t)] /*)*/,
	       /*(*/ [t,
		tell(`You missed.  The thief makes no attempt to take the knife, though it
would be a fine addition to the collection in his bag.  He does seem
angered by your attempt.`),
		tro(t,fightbit)] /*)*/)] /*)*/,
	/*(*/ [((prsact === throw_X_words || prsact === give_X_words) && type_Q(prsobj,object) && prsobj !== hobj(dem)),
	 cond(/*(*/ [ocapac(t) < 0,
		t[ocapac] = _(ocapac(t)),
		dem[haction] = cond(/*(*/ [type_Q(robber,offset), robber] /*)*/,
					 /*(*/ [robber] /*)*/),
		tro(find_obj(`STILL`), ovison),
		t[odesc1] = robber_c_desc,
		tell(`Your proposed victim suddenly recovers consciousness.`)] /*)*/),
	 cond(/*(*/ [(prsobj === brick = find_obj(`BRICK`) && ocan(fuse = find_obj(`FUSE`)) === brick && orand(fuse) && !0_Q(ctick(f = orand(fuse)[2]))),
		// I.e., he's trying to give us the brick with a lighted fuse.,
		tell(`The thief seems rather offended by your offer.  Do you think he's as
stupid as you are?`)] /*)*/,
	       /*(*/ [remove_object(prsobj),
		dem[hobjs] = /*(*/ [prsobj,_X,hobjs(dem)] /*)*/,
		tell(`The thief places the `, 1, odesc2(prsobj), ` in his bag and thanks
you politely.`)] /*)*/)] /*)*/,
	/*(*/ [(prsact && vname(prsact) === take_X_words),
	 tell(`Once you got him, what would you do with him?`)] /*)*/);
  }

export function chalice() {
    let prsa: verb = prsvec[1];
    let ch: object = prsvec[2];
    let tr: room = null;
    let t: room = null;
    cond(/*(*/ [prsa === take_X_words,
	       cond(/*(*/ [(!ocan(ch) && oroom(ch) === tr = find_room(`TREAS`) && oroom(t = find_obj(`THIEF`)) === tr && fighting_Q(t) && haction(robber_demon)),
		      tell(`Realizing just in time that you'd be stabbed in the back if you
attempted to take the chalice, you return to the fray.`)] /*)*/)] /*)*/);
  }



export function burner() {
    let pv: vector = prsvec;
    let prso: object = pv[2];
    let prsi: object = pv[3];
    cond(/*(*/ [flaming_Q(prsi),
	    cond(/*(*/ [object_action()] /*)*/,
		  /*(*/ [(avehicle(winner) === find_obj(`BALLO`) && balloon())] /*)*/,
		  /*(*/ [(burnable_Q(prso) && cond(/*(*/ [memq(prso,aobjs(winner)),
			       tell(`The `, 1, odesc2(prso), ` catches fire.`),
			       jigs_up(`Unfortunately, you were holding it at the time.`)] /*)*/,
			      /*(*/ [hackable_Q(prso,here),
			       tell(`The `, 1, odesc2(prso), ` catches fire and is consumed.`),
			       remove_object(prso)] /*)*/,
			      /*(*/ [tell(`You don't have that.`)] /*)*/))] /*)*/,
		  /*(*/ [tell(`I don't think you can burn a `, 1, odesc2(prso), `.`)] /*)*/)] /*)*/,
	   /*(*/ [tell(`With a `, 1, odesc2(prsi), `??!?`)] /*)*/);
  }  

export function turner() {
    let pv: vector = prsvec;
    let prso: object = pv[2];
    let prsi: object = pv[3];
    cond(/*(*/ [trnn(prso,turnbit),
	   cond(/*(*/ [trnn(prsi,toolbit),
		  object_action()] /*)*/,
		 /*(*/ [tell(`You certainly can't turn it with a `, 1, odesc2(prsi), `.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`You can't turn that!`)] /*)*/);
  }

psetg(doormungs,
  () => /*[*/ [`The door is invulnerable.`,
    `You cannot damage this door.`,
    `The door is still under warranty.`] /*]*/)

export let doormungs: vector(/*[*/ [rest, string] /*]*/);

export function ddoor_function() {
    let pa: verb = prsvec[1];
    cond(/*(*/ [pa === open_X_words,
	   tell(`The door cannot be opened.`)] /*)*/,
	  /*(*/ [pa === burn_X_words,
	   tell(`You cannot burn this door.`)] /*)*/,
	  /*(*/ [pa === mung_X_words,
	   tell(pick_one(doormungs))] /*)*/);
  }

 export function inflater() {
    let prsi: object = prsvec[2];
    let prso: object = prsvec[3];
    cond(/*(*/ [prsi === find_obj(`IBOAT`),
	   cond(/*(*/ [prso === find_obj(`PUMP`),
		  object_action()] /*)*/,
		 /*(*/ [tell(`You would inflate it with that?`)] /*)*/)] /*)*/,
	  /*(*/ [prsi === find_obj(`RBOAT`),
	   tell(`Inflating it further would probably burst it.`)] /*)*/,
	  /*(*/ [tell(`How can you inflate that?`)] /*)*/);
  }

export function deflater() {
    let prso: object = prsvec[2];
    cond(/*(*/ [prso === find_obj(`RBOAT`),
	   object_action()] /*)*/,
	  /*(*/ [tell(`Come on, now!`)] /*)*/);
  }

export function locker() {
    let prso: object = prsvec[2];
    cond(/*(*/ [prso === find_obj(`GRAT2`),
	   grunlock_X_flag = false,
	   tell(`The grate is locked.`),
	   mapf(false,
		 function(x: (cexit | nexit | room)) {
            cond(/*(*/ [(type_Q(x,cexit) && cxflag(x) === key_flag_X_flag),
				  x[cxstr] = `The grate is locked.`,
				  mapleave()] /*)*/);
          },
		 rexits(here))] /*)*/,
	  /*(*/ [tell(`It doesn't seem to work.`)] /*)*/);
  }

export function unlocker() {
    let prso: object = prsvec[2];
    let prsi: object = prsvec[3];
    let r: object = find_room(`MGRAT`);
    cond(/*(*/ [prso === find_obj(`GRAT2`),
	   cond(/*(*/ [prsi === find_obj(`KEYS`),
		  grunlock_X_flag = t,
		  tell(`The grate is unlocked.`),
		  mapf(false,
			function(x: (cexit | nexit | room)) {
                cond(/*(*/ [(type_Q(x,cexit) && cxflag(x) === key_flag_X_flag),
				 x[cxstr] = `The grate is closed.`,
				 mapleave()] /*)*/);
              },
			rexits(r))] /*)*/,
		 /*(*/ [tell(`Can you unlock a grating with a `, 1, odesc2(prsi), `?`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`It doesn't seem to work.`)] /*)*/);
  }

export function killer() {
    let pv: vector = prsvec;
    let prso: (false | object) = pv[2];
    let prsi: (false | object) = pv[3];
    cond(/*(*/ [!prso,
	       tell(`There is nothing here to kill.`)] /*)*/,
	      /*(*/ [!prsi,
	       tell(`Trying to kill a `, 1, odesc2(prso),
		     ` with your bare hands is suicidal.`)] /*)*/,
	      /*(*/ [!trnn(prsi,weaponbit),
	       tell(`Trying to kill a `, 0, odesc2(prso),
		     ` with a `),
	       tell(odesc2(prsi), 1, ` is suicidal.`)] /*)*/, 
	      /*(*/ [else,
	       blow(player,prso,orand(prsi), t, false)] /*)*/);
  }

export function attacker() {
    let pv: vector = prsvec;
    let prso: (false | object) = pv[2];
    let prsi: (false | object) = pv[3];
    cond(/*(*/ [!prso,
	       tell(`There is nothing here to attack.`)] /*)*/,
	      /*(*/ [!prsi,
	       tell(`Attacking a `, 1, odesc2(prso),
		     ` with your bare hands is suicidal.`)] /*)*/,
	      /*(*/ [!trnn(prsi,weaponbit),
	       tell(`Attacking a `, 0, odesc2(prso),
		      ` with a `),
	       tell(odesc2(prsi), 1, ` is suicidal.`)] /*)*/,
	      /*(*/ [else,
	       blow(player,prso,orand(prsi), t, false)] /*)*/);
  }

export function swinger() {
    let pv: vector = prsvec;
    let prso: (false | object) = pv[2];
    let prsi: (false | object) = pv[3];
    pv[2] = prsi;
pv[3] = prso;
attacker();
  }

export function hack_hack(obj: object, str: string, obj2?: (false | string)) {
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [obj2,	   tell(str,0, odesc2(obj), ` with a `),
	   tell(obj2,1, pick_one(ho_hum))] /*)*/,
	  /*(*/ [else,
	   tell(str,1, odesc2(obj), pick_one(ho_hum))] /*)*/);
  }

psetg(ho_hum,
 () => /*[*/ [` does not seem to do anything.`,
   ` is not notably useful.`,
   ` isn't very interesting.`,
   ` doesn't appear worthwhile.`,
   ` has no effect.`,
   ` doesn't do anything.`] /*]*/)

export let ho_hum: vector(/*[*/ [rest, string] /*]*/);

export function munger() {
    let prso: object = prsvec[2];
    let prsw: (object | false) = prsvec[3];
    cond(/*(*/ [trnn(prso,villain),
	   cond(/*(*/ [prsw,		  cond(/*(*/ [trnn(prsw,weaponbit),
			 blow(player,prso,orand(prsw), t, false)] /*)*/,
			/*(*/ [t,
			 tell(`Munging a `, 0, odesc2(prso), ` with a `),
			 tell(odesc2(prsw), 1, ` is quite self-destructive.`)] /*)*/)] /*)*/,
		 /*(*/ [t,
		  tell(`Munging a `, 1, odesc2(prso), ` with your bare hands is suicidal.`)] /*)*/)] /*)*/,
	  /*(*/ [hack_hack(prso,`Munging a `)] /*)*/);
  }

export function kicker() {
    let prso: object = prsvec[2];
    hack_hack(prso,`Munging a `);
  }

export function waver() {
    let prso: object = prsvec[2];
    hack_hack(prso,`Waving a `);
  }

export function r_l() {
    let prso: object = prsvec[2];
    hack_hack(prso,`Playing in this way with a `);
  }

export function rubber() {
    let prso: object = prsvec[2];
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
    let prso: object = prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [trnn(prso,tiebit),
	   tell(`I don't think so.`)] /*)*/,
	  /*(*/ [tell(`This cannot be tied, so it cannot be untied!`)] /*)*/);
  }

export function pusher() {
    let prso: object = prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [memq(butto_X_objects, onames(prso))] /*)*/,
	  /*(*/ [hack_hack(prso,`Pushing the `)] /*)*/);
  }

export function tie() {
    let prso: object = prsvec[2];
    cond(/*(*/ [trnn(prso,tiebit),
	   cond(/*(*/ [object_action()] /*)*/,
		 /*(*/ [tell(`You can't tie it to that.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`How can you tie that to anything.`)] /*)*/);
  }

export function melter() {
    let prso: object = prsvec[2];
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [tell(`I'm not sure that a `, 1, odesc2(prso), ` can be melted.`)] /*)*/);
  }

on_pole_X_flag = false

export function body_function() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === take_X_words,
	   tell(`A force keeps you from taking the bodies.`)] /*)*/,
	  /*(*/ [(prsa === mung_X_words || prsa === burn_X_words),
	   cond(/*(*/ [on_pole_X_flag] /*)*/,
		 /*(*/ [on_pole_X_flag = t,
		  insert_object(find_obj(`HPOLE`), find_room(`LLD2`))] /*)*/),
	   jigs_up(`The voice of the guardian of the dungeon booms out from the darkness 
'Your disrespect costs you your life!' and places your head on a pole.`)] /*)*/);
  }

export function mumbler() {
    tell(`You'll have to speak up if you expect me to hear you!`);
  }

export function alarm() {
    let prso: object = prsvec[2];
    cond(/*(*/ [trnn(prso,sleepbit),
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
    let prsa: verb = prsvec[1];
    let art: object = prsvec[2];
    cond(/*(*/ [prsa === mung_X_words,
	   art[otval] = 0,
	   art[odesc2] = `worthless piece of canvas`,
	   art[odesc1] = `There is a worthless piece of canvas here.`,
	   tell(`Congratulations!  Unlike the other vandals, who merely stole the
artist's masterpieces, you have destroyed one.`)] /*)*/);
  }

psetg(dimmer, `The lamp appears to be getting dimmer.`)

psetg(lamp_ticks, /*[*/ [50, 30, 20, 10, 4, 0] /*]*/)

psetg(lamp_tells, /*[*/ [dimmer,dimmer,dimmer,dimmer,`The lamp is dying.`] /*]*/)

export function lantern() {
    let pv: vector = prsvec;
    let verb: verb = pv[1];
    let here: room = here;
    let rlamp: object = find_obj(`LAMP`);
    let foo: vector(any, cevent) = null;
    cond(/*(*/ [verb === throw_X_words,
	       tell(`The lamp has smashed into the floor and the light has gone out.`),
	       remove_object(find_obj(`LAMP`)),
	       insert_object(find_obj(`BLAMP`), here)] /*)*/,
	      /*(*/ [verb === c_int_X_words,
	       light_int(rlamp,lntin,lamp_ticks,lamp_tells)] /*)*/,
	      /*(*/ [verb === turn_on_X_words,
	       clock_enable(foo = orand(rlamp)[2]),
	       false] /*)*/,
	      /*(*/ [verb === turn_off_X_words,
	       clock_disable(foo = orand(rlamp)[2]),
	       false] /*)*/);
  }

export function sword_glow(dem: hack) {
    let sw: object = hobj(dem);
    let g: number = otval(sw);
    let here: room = here;
    let ng: number = 0;
    cond(/*(*/ [(!oroom(sw) && !ocan(sw) && memq(sw,aobjs(player))),
	  cond(/*(*/ [infested_Q(here), ng = 2] /*)*/,
		/*(*/ [mapf(false,
		       function(e: (room | cexit | nexit | atom)) {
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
	  sw[otval] = ng] /*)*/,
	 /*(*/ [dem[haction] = false] /*)*/);
  }

export function sword() {
    let pa: verb = prsvec[1];
    cond(/*(*/ [(pa === take_X_words && winner === player),
	       sword_demon[haction] = cond(/*(*/ [type_Q(sword_glow,offset),
						 sword_glow] /*)*/,
						/*(*/ [sword_glow] /*)*/),
	       false] /*)*/);
  }

export function infested_Q(r: room) {
    let villains: list(/*[*/ [rest, object] /*]*/) = villains;
    let dem: hack = get_demon(`THIEF`);
    ((r === hroom(dem) && haction(dem)) || mapf(false,
		  function(v: object) {
          cond(/*(*/ [r === oroom(v), mapleave(t)] /*)*/);
        },
		  villains));
  }


psetg(cdimmer, `The candles grow shorter.`)

psetg(candle_ticks, /*[*/ [20, 10, 5, 0] /*]*/)

psetg(candle_tells, /*[*/ [cdimmer,cdimmer,`The candles are very short.`] /*]*/)

export function match_function() {
    let prsa: verb = prsvec[1];
    let prso = prsvec[2];
    let match: object = find_obj(`MATCH`);
    let mc: number = orand(match);
    cond(/*(*/ [(prsa === light_X_words && prso === match),
	   cond(/*(*/ [(match[orand] = mc = _(mc,1) && l__Q(mc,0)),
		  tell(`I'm afraid that you have run out of matches.`)] /*)*/,
		 /*(*/ [tro(match,flamebit),
		  match[olight_Q] = 1,
		  clock_int(matin,2),
		  tell(`One of the matches starts to burn.`)] /*)*/)] /*)*/,
	  /*(*/ [(prsa === turn_off_X_words && 1_Q(olight_Q(match))),
	   tell(`The match is out.`),
	   trz(match,flamebit),
	   match[olight_Q] = 0,
	   clock_int(matin,0),
	   t] /*)*/,
	  /*(*/ [prsa === c_int_X_words,
	   tell(`The match has gone out.`),
	   trz(match,flamebit),
	   match[olight_Q] = 0] /*)*/);
  }

export function candles() {
    let prsact: verb = prsvec[1];
    let c: verb = find_obj(`CANDL`);
    let winner: adv = winner;
    let ao: list(/*[*/ [rest, object] /*]*/) = aobjs(winner);
    let w: (false | object) = prsvec[3];
    let match: object = null;
    let foo: vector(number, cevent) = null;
    let orphans: vector(/*[*/ [4, any] /*]*/) = null;
    (orand(c) || c[orand] = /*[*/ [0, clock_int(cndin,50)] /*]*/);
foo = orand(c);
cond(/*(*/ [prsact === light_X_words,
	       cond(/*(*/ [0_Q(olight_Q(c)),
		      tell(`Alas, there's not much left of the candles.  Certainly not enough to
burn.`)] /*)*/,
		     /*(*/ [!w,
		      tell(`With what?`),
		      orphans = orphans[oflag] = t,
		      orphans[overb] = prsact,
		      orphans[oslot1] = c,
		      orphans[oprep] = chtype(with_X_words, prep),
		      parse_won = false,
		      t] /*)*/,
		     /*(*/ [(w === match = find_obj(`MATCH`) && 1_Q(olight_Q(match))),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell(`The candles are already lighted.`)] /*)*/,
			    /*(*/ [c[olight_Q] = 1,
			     tell(`The candles are lighted.`),
			     clock_enable(foo[2])] /*)*/)] /*)*/,
		     /*(*/ [w === find_obj(`TORCH`),
		      cond(/*(*/ [1_Q(olight_Q(c)),
			     tell(`You realize, just in time, that the candles are already lighted.`)] /*)*/,
			    /*(*/ [tell(`The heat from the torch is so intense that the candles are vaporised.`),
			     cond(/*(*/ [(oroom(c) || ocan(c)),
				    remove_object(c)] /*)*/,
				   /*(*/ [winner[aobjs] = splice_out(c,ao)] /*)*/)] /*)*/)] /*)*/,
		     /*(*/ [tell(`You have to light them with something that's burning, you know.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === turn_off_X_words,
	       clock_disable(foo[2]),
	       cond(/*(*/ [1_Q(olight_Q(c)),
		      tell(`The flame is extinguished.`),
		      c[olight_Q] = _1] /*)*/,
		     /*(*/ [tell(`The candles are not lighted.`)] /*)*/)] /*)*/,
	      /*(*/ [prsact === c_int_X_words,
	       light_int(c,cndin,candle_ticks,candle_tells)] /*)*/);
  }

export function black_book() {
    let pv: vector(/*[*/ [3, any] /*]*/) = prsvec;
    let v: vector(/*[*/ [3, any] /*]*/) = pv[1];
    let b: object = pv[2];
    cond(/*(*/ [v === burn_X_words,
	 cond(/*(*/ [oroom(b),
		remove_object(b)] /*)*/,
	       /*(*/ [drop_object(b)] /*)*/),
	 jigs_up(`A booming voice says 'Wrong, cretin!' and you notice that you have
turned into a pile of dust.`)] /*)*/);
  }

export function light_int(obj: object, cev, tick: vector(/*[*/ [rest, number] /*]*/), tell: vector(/*[*/ [rest, string] /*]*/)) {
    let cnt: number = null;
    let tim: number = null;
    let foo: vector(number, cevent) = orand(obj);
    foo[1] = cnt = _(foo[1], 1);
clock_int(cev,tim = tick[cnt]);
cond(/*(*/ [0_Q(tim),
 	   cond(/*(*/ [(!oroom(obj) || oroom(obj) === here),
		  tell(`I hope you have more light than from a `, 1, odesc2(obj), `.`)] /*)*/),
	   obj[olight_Q] = 0] /*)*/,
	  /*(*/ [(!oroom(obj) || oroom(obj) === here),
	   tell(tell[cnt])] /*)*/);
  }

export function hackable_Q(obj: object, rm: room) {
    let av: (false | object) = avehicle(winner);
    cond(/*(*/ [av,	   search_list(oid(obj), ocontents(av), false)] /*)*/,
	  /*(*/ [search_list(oid(obj), robjs(rm), false)] /*)*/);
  }