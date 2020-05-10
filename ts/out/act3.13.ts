function coke_bottles() {
    let pv: vector(verb) = GLOBALS.prsvec;
    let bottl: object = pv[2];
    let vb: verb = pv[1];
    cond(/*(*/ [(vb === GLOBALS.throw_X_words || vname(vb) === mung_X_words),
	 tell("Congratulations!  You've managed to break all those bottles.\nFortunately for your feet, they were made of magic glass and disappear\nimmediately."),
	 trz(bottl,GLOBALS.ovison),
	 bottl[GLOBALS.osize] = 0,
	 t] /*)*/);
  }

function head_function() {
    let pv: vector(verb) = GLOBALS.prsvec;
    let vb: verb = pv[1];
    let nl: list(/*[*/ [rest, object] /*]*/) = /*(*/ [] /*)*/;
    let lcase: object = find_obj("LCASE");
    cond(/*(*/ [vb !== GLOBALS.read_X_words,
	 tell("Although the implementers are dead, they foresaw that some cretin\nwould tamper with their remains.  Therefore, they took steps to\nprevent this."),
	 nl = rob_adv(GLOBALS.winner,nl),
	 nl = rob_room(GLOBALS.here,nl,100),
	 cond(/*(*/ [!empty_Q(nl),
		(oroom(lcase) || insert_object(lcase,find_room("LROOM"))),
		lcase[GLOBALS.ocontents] = /*(*/ [_X,ocontents(lcase), _X,nl] /*)*/] /*)*/),
	 jigs_up("Unfortunately, we've run out of poles.  Therefore, in punishment for\nyour most grievous sin, we shall deprive you of all your valuables,\nand of your life."),
	 t] /*)*/);
  }

GLOBALS.then = 0

GLOBALS.bucket_top_X_flag = false

function bucket(arg?: (false | atom)) {
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let po: (direction | false | object) = pv[2];
    let w: object = find_obj("WATER");
    let buck: object = find_obj("BUCKE");
    cond(/*(*/ [arg === read_in, false] /*)*/,
	      /*(*/ [(pa === GLOBALS.c_int_X_words && cond(/*(*/ [memq(w,ocontents(buck)),
			   remove_object(w),
			   false] /*)*/,
			  /*(*/ [t] /*)*/))] /*)*/,
	      /*(*/ [arg === read_out,
	       cond(/*(*/ [(ocan(w) === buck && !GLOBALS.bucket_top_X_flag),
		      tell("The bucket rises and comes to a stop."),
		      GLOBALS.bucket_top_X_flag = t,
		      pass_the_bucket(find_room("TWELL"), pv,buck),
		      clock_int(GLOBALS.bckin,100),
		      false] /*)*/,
		     /*(*/ [(GLOBALS.bucket_top_X_flag && ocan(w) !== buck),
		      tell("The bucket descends and comes to a stop."),
		      GLOBALS.bucket_top_X_flag = false,
		      pass_the_bucket(find_room("BWELL"), pv,buck)] /*)*/)] /*)*/);
  }

function pass_the_bucket(r: room, pv: vector, b: object) {
    let pvs: (false | object | direction) = pv[2];
    pv[2] = false;
remove_object(b);
insert_object(b,r);
cond(/*(*/ [avehicle(GLOBALS.winner) === b,
	   goto(r),
    	   room_info(t)] /*)*/);
pv[2] = pvs;
  }

function eatme_function() {
    let r: room = null;
    let c: object = null;
    let pv: vector = GLOBALS.prsvec;
    let here: room = GLOBALS.here;
    cond(/*(*/ [(pv[1] === GLOBALS.eat_X_words && pv[2] === c = find_obj("ECAKE") && here === find_room("ALICE")),
	   tell("Suddenly, the room appears to have become very large."),
	   kill_obj(c,GLOBALS.winner),
	   r = find_room("ALISM"),
	   r[GLOBALS.robjs] = robjs(here),
	   mapf(false,
		 function(x: object) {
            x[GLOBALS.osize] = _(64, osize(x));
x[GLOBALS.oroom] = r;
          },
		 robjs(here)),
	   goto(r)] /*)*/);
  }

function cake_function() {
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let po: (false | object) = pv[2];
    let pi: (false | object) = pv[3];
    let rice: object = find_obj("RDICE");
    let oice: object = find_obj("ORICE");
    let bice: object = find_obj("BLICE");
    let here: room = GLOBALS.here;
    let r: object = null;
    cond(/*(*/ [pa === GLOBALS.read_X_words,
	       cond(/*(*/ [pi,		      cond(/*(*/ [pi === find_obj("BOTTL"),
			     tell("The letters appear larger, but still are too small to be read.")] /*)*/,
			    /*(*/ [pi === find_obj("FLASK"),
			     tell("The icing, now visible, says '",
				   1,
				   cond(/*(*/ [po === rice, "Evaporate"] /*)*/,
					 /*(*/ [po === oice, "Explode"] /*)*/,
					 /*(*/ ["Enlarge"] /*)*/),
				   "'.")] /*)*/,
			    /*(*/ [tell("You can't see through that!")] /*)*/)] /*)*/,
		     /*(*/ [tell("The only writing legible is a capital E.  The rest is too small to\nbe clearly visible.")] /*)*/)] /*)*/,
	      /*(*/ [(pa === GLOBALS.eat_X_words && member("ALI", spname(rid(here)))),
	       cond(/*(*/ [po === oice,
		      kill_obj(po,GLOBALS.winner),
		      iceboom()] /*)*/,
		     /*(*/ [po === bice,
		      kill_obj(po,GLOBALS.winner),
		      tell("The room around you seems to be getting smaller."),
		      cond(/*(*/ [here === find_room("ALISM"),
			     r = find_room("ALICE"),
			     r[GLOBALS.robjs] = robjs(here),
			     mapf(false,
				   function(x: object) {
                    x[GLOBALS.oroom] = r;
x[GLOBALS.osize] = _(osize(x), 64);
                  },
				   robjs(here)),
			     goto(r)] /*)*/,
			    /*(*/ [jigs_up(GLOBALS.crushed)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [(pa === GLOBALS.throw_X_words && po === oice && member("ALI", spname(rid(here)))),
	       kill_obj(po,GLOBALS.winner),
	       iceboom()] /*)*/,
	      /*(*/ [(pa === GLOBALS.throw_X_words && po === rice && pi === find_obj("POOL")),
	       remove_object(pi),
	       tell("The pool of water evaporates, revealing a tin of rare spices."),
	       tro(find_obj("SAFFR"), GLOBALS.ovison)] /*)*/);
  }

function flask_function() {
    let f = null;
    let pv: vector(verb, object) = GLOBALS.prsvec;
    let pa: verb = pv[1];
    cond(/*(*/ [pa === GLOBALS.open_X_words,
	   mung_room(GLOBALS.here,"Noxious vapors prevent your entry."),
	   jigs_up(GLOBALS.vapors)] /*)*/,
	  /*(*/ [(pa === GLOBALS.mung_X_words || pa === GLOBALS.throw_X_words),
	   tell("The flask breaks into pieces."),
	   f = pv[2],
	   trz(f,GLOBALS.ovison),
	   jigs_up(GLOBALS.vapors)] /*)*/);
  }

psetg(vapors,
"Just before you pass out, you notice that the vapors from the\nflask's contents are fatal.")

psetg(crushed,
"The room seems to have become too small to hold you.  It seems that\nthe  walls are not as compressible as your body, which is somewhat\ndemolished.")

function iceboom() {
    mung_room(GLOBALS.here,"The door to the room seems to be blocked by sticky orange rubble\nfrom an explosion.  Probably some careless adventurer was playing\nwith blasting cakes.");
jigs_up(GLOBALS.iceblast);
  }

psetg(iceblast, "You have been blasted to smithereens (wherever they are).")

function magnet_room() {
    let foo: cexit = null;
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let po: (false | object | direction) = pv[2];
    let here: room = GLOBALS.here;
    let m: (false | primtype(vector)) = null;
    cond(/*(*/ [pa === GLOBALS.look_X_words,
	       tell("You are in a room with a low ceiling which is circular in shape. \nThere are exits to the east and the southeast.")] /*)*/,
	      /*(*/ [(pa === GLOBALS.walk_in_X_words && GLOBALS.carousel_flip_X_flag),
	       cond(/*(*/ [GLOBALS.carousel_zoom_X_flag,jigs_up(GLOBALS.spindizzy)] /*)*/,
		     /*(*/ [tell("As you enter, your compass starts spinning wildly."),
		      false] /*)*/)] /*)*/,
	      /*(*/ [pa === GLOBALS.walk_X_words,
	       cond(/*(*/ [(GLOBALS.carousel_flip_X_flag && GLOBALS.winner === GLOBALS.player),
	       	      tell("You cannot get your bearings..."),
	       	      goto(cxroom(foo = rexits(here)[_(2, _(1, mod(random(), 8)))])),
		      room_info()] /*)*/,
		     /*(*/ [m = memq(chtype(po,atom), rest(rexits(here), 12)),
		      goto(cxroom(foo = m[2])),
		      room_info()] /*)*/)] /*)*/);
  }

function cmach_room() {
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    cond(/*(*/ [pa === GLOBALS.look_X_words,
	   tell("You are in a large room full of assorted heavy machinery.  The room\nsmells of burned resistors. The room is noisy from the whirring\nsounds of the machines. Along one wall of the room are three buttons\nwhich are, respectively, round, triangular, and square.  Naturally,\nabove these buttons are instructions written in EBCDIC.  A large sign\nin English above all the buttons says\n		'DANGER -- HIGH VOLTAGE '.\nThere are exits to the west and the south.")] /*)*/);
  }
	  
GLOBALS.carousel_zoom_X_flag = false

GLOBALS.carousel_flip_X_flag = false

function buttons() {
    let i: object = null;
    let pv: vector = GLOBALS.prsvec;
    let po = pv[2];
    let pa: verb = pv[1];
    cond(/*(*/ [pa === GLOBALS.push_X_words,
	       cond(/*(*/ [GLOBALS.winner === GLOBALS.player,
		      jigs_up("There is a giant spark and you are fried to a crisp.")] /*)*/,
		     /*(*/ [po === find_obj("SQBUT"),
		      cond(/*(*/ [GLOBALS.carousel_zoom_X_flag,			     tell("Nothing seems to happen.")] /*)*/,
			    /*(*/ [GLOBALS.carousel_zoom_X_flag = t,
		      	     tell("The whirring increases in intensity slightly.")] /*)*/)] /*)*/,
		     /*(*/ [po === find_obj("RNBUT"),
		      cond(/*(*/ [GLOBALS.carousel_zoom_X_flag,			     GLOBALS.carousel_zoom_X_flag = false,
		      	     tell("The whirring decreases in intensity slightly.")] /*)*/,
			    /*(*/ [tell("Nothing seems to happen.")] /*)*/)] /*)*/,
		     /*(*/ [po === find_obj("TRBUT"),
		      GLOBALS.carousel_flip_X_flag = !GLOBALS.carousel_flip_X_flag,
		      cond(/*(*/ [memq(i = find_obj("IRBOX"),
				   robjs(find_room("CAROU"))),
			     tell("A dull thump is heard in the distance."),
			     trc(i,GLOBALS.ovison)] /*)*/)] /*)*/)] /*)*/);
  }

psetg(spindizzy,
"According to Prof. TAA of MIT Tech, the rapidly changing magnetic\nfields in the room are so intense as to cause you to be electrocuted. \nI really don't know, but in any event, something just killed you.")

GLOBALS.cage_solve_X_flag = false

function sphere_function() {
    let pv: vector(verb, object) = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let r: object = find_obj("ROBOT");
    let c: room = null;
    let fl: (atom | false) = null;
    let ract: adv = null;
    fl = (!GLOBALS.cage_solve_X_flag && pa === GLOBALS.take_X_words);
cond(/*(*/ [(fl && GLOBALS.player === GLOBALS.winner),
	       tell("As you reach for the sphere, an iron cage falls from the ceiling\nto entrap you.  To make matters worse, poisonous gas starts coming\ninto the room."),
	       cond(/*(*/ [oroom(r) === GLOBALS.here,
		      goto(c = find_room("CAGED")),
		      remove_object(r),
		      insert_object(r,c),
		      ract = orand(r)[GLOBALS.aroom] = c,
		      tro(r,GLOBALS.ndescbit),
		      GLOBALS.sphere_clock = clock_int(GLOBALS.sphin,10),
		      t] /*)*/,
		     /*(*/ [else,
		      trz(find_obj("SPHER"), GLOBALS.ovison),
		      mung_room(find_room("CAGER"),
				 "You are stopped by a cloud of poisonous gas."),
		      jigs_up(GLOBALS.poison)] /*)*/)] /*)*/,
	      /*(*/ [fl,	       trz(find_obj("SPHER"), GLOBALS.ovison),
	       jigs_up("As the robot reaches for the sphere, an iron cage falls from the\nceiling.  The robot attempts to fend it off, but is trapped below it.\nAlas, the robot short-circuits in his vain attempt to escape, and\ncrushes the sphere beneath him as he falls to the floor."),
	       remove_object(r),
	       trz(pv[2], GLOBALS.ovison),
	       insert_object(find_obj("RCAGE"), GLOBALS.here),
	       t] /*)*/,
	      /*(*/ [pa === GLOBALS.c_int_X_words,
	       mung_room(find_room("CAGER"),
			  "You are stopped by a cloud of poisonous gas."),
	       jigs_up(GLOBALS.poison)] /*)*/);
  }

psetg(poison, "Time passes...and you die from some obscure poisoning.")

function caged_room() {
    cond(/*(*/ [GLOBALS.cage_solve_X_flag,GLOBALS.here = find_room("CAGER")] /*)*/);
  }

gdecl(/*(*/ [sphere_clock] /*)*/, cevent, /*(*/ [robot_actions] /*)*/, uvector(/*[*/ [rest, verb] /*]*/))
function robot_actor() {
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let po: (false | object | direction) = pv[2];
    let c: room = null;
    let cage: object = null;
    let r: object = find_obj("ROBOT");
    let ract: adv = null;
    cond(/*(*/ [(pa === GLOBALS.raise_X_words && po === find_obj("CAGE")),
	       tell("The cage shakes and is hurled across the room."),
	       clock_disable(GLOBALS.sphere_clock),
	       GLOBALS.winner = GLOBALS.player,
	       goto(c = find_room("CAGER")),
	       insert_object(cage = find_obj("CAGE"), c),
	       tro(cage,GLOBALS.takebit),
	       trz(cage,GLOBALS.ndescbit),
	       trz(r,GLOBALS.ndescbit),
	       tro(find_obj("SPHER"), GLOBALS.takebit),
	       remove_object(r),
	       insert_object(r,c),
	       ract = orand(r)[GLOBALS.aroom] = c,
	       GLOBALS.cage_solve_X_flag = t] /*)*/,
	      /*(*/ [(pa === GLOBALS.eat_X_words || pa === GLOBALS.drink_X_words),
	       tell("\"I am sorry but that action is difficult in the absence of a mouth.\")] /*)*/,
	      /*(*/ [pa === GLOBALS.read_X_words,
	       tell("\"My vision is not that good without eyes.\")] /*)*/,
	      /*(*/ [memq(pa,GLOBALS.robot_actions), false] /*)*/,
	      /*(*/ [tell("\"I am only a stupid robot and cannot perform that command.\")] /*)*/);
  }

function robot_function() {
    let pv: vector = GLOBALS.prsvec;
    let pa: verb = pv[1];
    let po: object = pv[2];
    let pi: (false | object) = pv[3];
    let pp: object = null;
    let aa: adv = null;
    cond(/*(*/ [pa === GLOBALS.give_X_words,
	       aa = orand(pp = pi),
	       remove_object(po),
	       aa[GLOBALS.aobjs] = /*(*/ [po,_X,aobjs(aa)] /*)*/,
	       tell("The robot gladly takes the",
		     1,
		     odesc2(po),
		     "and nods his head-like appendage in thanks.")] /*)*/,
	      /*(*/ [(pa === GLOBALS.throw_X_words || pa === GLOBALS.mung_X_words),
	       tell("The robot is injured (being of shoddy construction) and falls to the\nfloor in a pile of garbage, which disintegrates before your eyes."),
	       remove_object(cond(/*(*/ [pa === GLOBALS.throw_X_words, pi] /*)*/, /*(*/ [po] /*)*/))] /*)*/);
  } 

function knock() {"AUX", /*(*/ [prso, GLOBALS.prsvec[2]] /*)*/
    cond(/*(*/ [memq(door_X_objects, onames(prso)),
	   tell("I don't think that anybody's home.")] /*)*/,
	  /*(*/ [tell("Why knock on a", 0, odesc2(prso), "?")] /*)*/);
  }

function chomp() {
    tell("I don't know how to do that.  I win in all cases!");
  }

function frobozz() {
    tell("The FROBOZZ Corporation created, owns, and operates this dungeon.");
  }

function win() {
    tell("Naturally!");
  }

function yell() {
    tell("Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!");
  }