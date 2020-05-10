export function coke_bottles() {
    let pv: vector(verb) = G_prsvec;
    let bottl: object = pv[2];
    let vb: verb = pv[1];
    cond(/*(*/ [(vb === G_throw_X_words || vname(vb) === mung_X_words),
	 tell(`Congratulations!  You've managed to break all those bottles.
Fortunately for your feet, they were made of magic glass and disappear
immediately.`),
	 trz(bottl,G_ovison),
	 bottl[G_osize] = 0,
	 t] /*)*/);
  }

export function head_function() {
    let pv: vector(verb) = G_prsvec;
    let vb: verb = pv[1];
    let nl: list(/*[*/ [rest, object] /*]*/) = /*(*/ [] /*)*/;
    let lcase: object = find_obj(`LCASE`);
    cond(/*(*/ [vb !== G_read_X_words,
	 tell(`Although the implementers are dead, they foresaw that some cretin
would tamper with their remains.  Therefore, they took steps to
prevent this.`),
	 nl = rob_adv(G_winner,nl),
	 nl = rob_room(G_here,nl,100),
	 cond(/*(*/ [!empty_Q(nl),
		(oroom(lcase) || insert_object(lcase,find_room(`LROOM`))),
		lcase[G_ocontents] = /*(*/ [_X,ocontents(lcase), _X,nl] /*)*/] /*)*/),
	 jigs_up(`Unfortunately, we've run out of poles.  Therefore, in punishment for
your most grievous sin, we shall deprive you of all your valuables,
and of your life.`),
	 t] /*)*/);
  }

G_then = 0

G_bucket_top_X_flag = false

export function bucket(arg?: (false | atom)) {
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    let po: (direction | false | object) = pv[2];
    let w: object = find_obj(`WATER`);
    let buck: object = find_obj(`BUCKE`);
    cond(/*(*/ [arg === read_in, false] /*)*/,
	      /*(*/ [(pa === G_c_int_X_words && cond(/*(*/ [memq(w,ocontents(buck)),
			   remove_object(w),
			   false] /*)*/,
			  /*(*/ [t] /*)*/))] /*)*/,
	      /*(*/ [arg === read_out,
	       cond(/*(*/ [(ocan(w) === buck && !G_bucket_top_X_flag),
		      tell(`The bucket rises and comes to a stop.`),
		      G_bucket_top_X_flag = t,
		      pass_the_bucket(find_room(`TWELL`), pv,buck),
		      clock_int(G_bckin,100),
		      false] /*)*/,
		     /*(*/ [(G_bucket_top_X_flag && ocan(w) !== buck),
		      tell(`The bucket descends and comes to a stop.`),
		      G_bucket_top_X_flag = false,
		      pass_the_bucket(find_room(`BWELL`), pv,buck)] /*)*/)] /*)*/);
  }

export function pass_the_bucket(r: room, pv: vector, b: object) {
    let pvs: (false | object | direction) = pv[2];
    pv[2] = false;
remove_object(b);
insert_object(b,r);
cond(/*(*/ [avehicle(G_winner) === b,
	   goto(r),
    	   room_info(t)] /*)*/);
pv[2] = pvs;
  }

export function eatme_function() {
    let r: room = null;
    let c: object = null;
    let pv: vector = G_prsvec;
    let here: room = G_here;
    cond(/*(*/ [(pv[1] === G_eat_X_words && pv[2] === c = find_obj(`ECAKE`) && here === find_room(`ALICE`)),
	   tell(`Suddenly, the room appears to have become very large.`),
	   kill_obj(c,G_winner),
	   r = find_room(`ALISM`),
	   r[G_robjs] = robjs(here),
	   mapf(false,
		 function(x: object) {
            x[G_osize] = _(64, osize(x));
x[G_oroom] = r;
          },
		 robjs(here)),
	   goto(r)] /*)*/);
  }

export function cake_function() {
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    let po: (false | object) = pv[2];
    let pi: (false | object) = pv[3];
    let rice: object = find_obj(`RDICE`);
    let oice: object = find_obj(`ORICE`);
    let bice: object = find_obj(`BLICE`);
    let here: room = G_here;
    let r: object = null;
    cond(/*(*/ [pa === G_read_X_words,
	       cond(/*(*/ [pi,		      cond(/*(*/ [pi === find_obj(`BOTTL`),
			     tell(`The letters appear larger, but still are too small to be read.`)] /*)*/,
			    /*(*/ [pi === find_obj(`FLASK`),
			     tell(`The icing, now visible, says '`,
				   1,
				   cond(/*(*/ [po === rice, `Evaporate`] /*)*/,
					 /*(*/ [po === oice, `Explode`] /*)*/,
					 /*(*/ [`Enlarge`] /*)*/),
				   `'.`)] /*)*/,
			    /*(*/ [tell(`You can't see through that!`)] /*)*/)] /*)*/,
		     /*(*/ [tell(`The only writing legible is a capital E.  The rest is too small to
be clearly visible.`)] /*)*/)] /*)*/,
	      /*(*/ [(pa === G_eat_X_words && spname(rid(here))[`ALI`]),
	       cond(/*(*/ [po === oice,
		      kill_obj(po,G_winner),
		      iceboom()] /*)*/,
		     /*(*/ [po === bice,
		      kill_obj(po,G_winner),
		      tell(`The room around you seems to be getting smaller.`),
		      cond(/*(*/ [here === find_room(`ALISM`),
			     r = find_room(`ALICE`),
			     r[G_robjs] = robjs(here),
			     mapf(false,
				   function(x: object) {
                    x[G_oroom] = r;
x[G_osize] = _(osize(x), 64);
                  },
				   robjs(here)),
			     goto(r)] /*)*/,
			    /*(*/ [jigs_up(G_crushed)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [(pa === G_throw_X_words && po === oice && spname(rid(here))[`ALI`]),
	       kill_obj(po,G_winner),
	       iceboom()] /*)*/,
	      /*(*/ [(pa === G_throw_X_words && po === rice && pi === find_obj(`POOL`)),
	       remove_object(pi),
	       tell(`The pool of water evaporates, revealing a tin of rare spices.`),
	       tro(find_obj(`SAFFR`), G_ovison)] /*)*/);
  }

export function flask_function() {
    let f = null;
    let pv: vector(verb, object) = G_prsvec;
    let pa: verb = pv[1];
    cond(/*(*/ [pa === G_open_X_words,
	   mung_room(G_here,`Noxious vapors prevent your entry.`),
	   jigs_up(G_vapors)] /*)*/,
	  /*(*/ [(pa === G_mung_X_words || pa === G_throw_X_words),
	   tell(`The flask breaks into pieces.`),
	   f = pv[2],
	   trz(f,G_ovison),
	   jigs_up(G_vapors)] /*)*/);
  }

psetg(vapors,
`Just before you pass out, you notice that the vapors from the
flask's contents are fatal.`)

psetg(crushed,
`The room seems to have become too small to hold you.  It seems that
the  walls are not as compressible as your body, which is somewhat
demolished.`)

export function iceboom() {
    mung_room(G_here,`The door to the room seems to be blocked by sticky orange rubble
from an explosion.  Probably some careless adventurer was playing
with blasting cakes.`);
jigs_up(G_iceblast);
  }

psetg(iceblast, `You have been blasted to smithereens (wherever they are).`)

export function magnet_room() {
    let foo: cexit = null;
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    let po: (false | object | direction) = pv[2];
    let here: room = G_here;
    let m: (false | primtype(vector)) = null;
    cond(/*(*/ [pa === G_look_X_words,
	       tell(`You are in a room with a low ceiling which is circular in shape. 
There are exits to the east and the southeast.`)] /*)*/,
	      /*(*/ [(pa === G_walk_in_X_words && G_carousel_flip_X_flag),
	       cond(/*(*/ [G_carousel_zoom_X_flag,jigs_up(G_spindizzy)] /*)*/,
		     /*(*/ [tell(`As you enter, your compass starts spinning wildly.`),
		      false] /*)*/)] /*)*/,
	      /*(*/ [pa === G_walk_X_words,
	       cond(/*(*/ [(G_carousel_flip_X_flag && G_winner === G_player),
	       	      tell(`You cannot get your bearings...`),
	       	      goto(cxroom(foo = rexits(here)[_(2, _(1, mod(random(), 8)))])),
		      room_info()] /*)*/,
		     /*(*/ [m = memq(chtype(po,atom), rest(rexits(here), 12)),
		      goto(cxroom(foo = m[2])),
		      room_info()] /*)*/)] /*)*/);
  }

export function cmach_room() {
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    cond(/*(*/ [pa === G_look_X_words,
	   tell(`You are in a large room full of assorted heavy machinery.  The room
smells of burned resistors. The room is noisy from the whirring
sounds of the machines. Along one wall of the room are three buttons
which are, respectively, round, triangular, and square.  Naturally,
above these buttons are instructions written in EBCDIC.  A large sign
in English above all the buttons says
		'DANGER -- HIGH VOLTAGE '.
There are exits to the west and the south.`)] /*)*/);
  }
	  
G_carousel_zoom_X_flag = false

G_carousel_flip_X_flag = false

export function buttons() {
    let i: object = null;
    let pv: vector = G_prsvec;
    let po = pv[2];
    let pa: verb = pv[1];
    cond(/*(*/ [pa === G_push_X_words,
	       cond(/*(*/ [G_winner === G_player,
		      jigs_up(`There is a giant spark and you are fried to a crisp.`)] /*)*/,
		     /*(*/ [po === find_obj(`SQBUT`),
		      cond(/*(*/ [G_carousel_zoom_X_flag,			     tell(`Nothing seems to happen.`)] /*)*/,
			    /*(*/ [G_carousel_zoom_X_flag = t,
		      	     tell(`The whirring increases in intensity slightly.`)] /*)*/)] /*)*/,
		     /*(*/ [po === find_obj(`RNBUT`),
		      cond(/*(*/ [G_carousel_zoom_X_flag,			     G_carousel_zoom_X_flag = false,
		      	     tell(`The whirring decreases in intensity slightly.`)] /*)*/,
			    /*(*/ [tell(`Nothing seems to happen.`)] /*)*/)] /*)*/,
		     /*(*/ [po === find_obj(`TRBUT`),
		      G_carousel_flip_X_flag = !G_carousel_flip_X_flag,
		      cond(/*(*/ [memq(i = find_obj(`IRBOX`),
				   robjs(find_room(`CAROU`))),
			     tell(`A dull thump is heard in the distance.`),
			     trc(i,G_ovison)] /*)*/)] /*)*/)] /*)*/);
  }

psetg(spindizzy,
`According to Prof. TAA of MIT Tech, the rapidly changing magnetic
fields in the room are so intense as to cause you to be electrocuted. 
I really don't know, but in any event, something just killed you.`)

G_cage_solve_X_flag = false

export function sphere_function() {
    let pv: vector(verb, object) = G_prsvec;
    let pa: verb = pv[1];
    let r: object = find_obj(`ROBOT`);
    let c: room = null;
    let fl: (atom | false) = null;
    let ract: adv = null;
    fl = (!G_cage_solve_X_flag && pa === G_take_X_words);
cond(/*(*/ [(fl && G_player === G_winner),
	       tell(`As you reach for the sphere, an iron cage falls from the ceiling
to entrap you.  To make matters worse, poisonous gas starts coming
into the room.`),
	       cond(/*(*/ [oroom(r) === G_here,
		      goto(c = find_room(`CAGED`)),
		      remove_object(r),
		      insert_object(r,c),
		      ract = orand(r)[G_aroom] = c,
		      tro(r,G_ndescbit),
		      G_sphere_clock = clock_int(G_sphin,10),
		      t] /*)*/,
		     /*(*/ [else,
		      trz(find_obj(`SPHER`), G_ovison),
		      mung_room(find_room(`CAGER`),
				 `You are stopped by a cloud of poisonous gas.`),
		      jigs_up(G_poison)] /*)*/)] /*)*/,
	      /*(*/ [fl,	       trz(find_obj(`SPHER`), G_ovison),
	       jigs_up(`As the robot reaches for the sphere, an iron cage falls from the
ceiling.  The robot attempts to fend it off, but is trapped below it.
Alas, the robot short-circuits in his vain attempt to escape, and
crushes the sphere beneath him as he falls to the floor.`),
	       remove_object(r),
	       trz(pv[2], G_ovison),
	       insert_object(find_obj(`RCAGE`), G_here),
	       t] /*)*/,
	      /*(*/ [pa === G_c_int_X_words,
	       mung_room(find_room(`CAGER`),
			  `You are stopped by a cloud of poisonous gas.`),
	       jigs_up(G_poison)] /*)*/);
  }

psetg(poison, `Time passes...and you die from some obscure poisoning.`)

export function caged_room() {
    cond(/*(*/ [G_cage_solve_X_flag,G_here = find_room(`CAGER`)] /*)*/);
  }

export let G_sphere_clock: cevent;export let G_robot_actions: uvector(/*[*/ [rest, verb] /*]*/);
export function robot_actor() {
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    let po: (false | object | direction) = pv[2];
    let c: room = null;
    let cage: object = null;
    let r: object = find_obj(`ROBOT`);
    let ract: adv = null;
    cond(/*(*/ [(pa === G_raise_X_words && po === find_obj(`CAGE`)),
	       tell(`The cage shakes and is hurled across the room.`),
	       clock_disable(G_sphere_clock),
	       G_winner = G_player,
	       goto(c = find_room(`CAGER`)),
	       insert_object(cage = find_obj(`CAGE`), c),
	       tro(cage,G_takebit),
	       trz(cage,G_ndescbit),
	       trz(r,G_ndescbit),
	       tro(find_obj(`SPHER`), G_takebit),
	       remove_object(r),
	       insert_object(r,c),
	       ract = orand(r)[G_aroom] = c,
	       G_cage_solve_X_flag = t] /*)*/,
	      /*(*/ [(pa === G_eat_X_words || pa === G_drink_X_words),
	       tell(`\"I am sorry but that action is difficult in the absence of a mouth.\`)] /*)*/,
	      /*(*/ [pa === G_read_X_words,
	       tell(`\"My vision is not that good without eyes.\`)] /*)*/,
	      /*(*/ [memq(pa,G_robot_actions), false] /*)*/,
	      /*(*/ [tell(`\"I am only a stupid robot and cannot perform that command.\`)] /*)*/);
  }

export function robot_function() {
    let pv: vector = G_prsvec;
    let pa: verb = pv[1];
    let po: object = pv[2];
    let pi: (false | object) = pv[3];
    let pp: object = null;
    let aa: adv = null;
    cond(/*(*/ [pa === G_give_X_words,
	       aa = orand(pp = pi),
	       remove_object(po),
	       aa[G_aobjs] = /*(*/ [po,_X,aobjs(aa)] /*)*/,
	       tell(`The robot gladly takes the `,
		     1,
		     odesc2(po),
		     `
and nods his head-like appendage in thanks.`)] /*)*/,
	      /*(*/ [(pa === G_throw_X_words || pa === G_mung_X_words),
	       tell(`The robot is injured (being of shoddy construction) and falls to the
floor in a pile of garbage, which disintegrates before your eyes.`),
	       remove_object(cond(/*(*/ [pa === G_throw_X_words, pi] /*)*/, /*(*/ [po] /*)*/))] /*)*/);
  } 

export function knock() {`AUX`, /*(*/ [prso, G_prsvec[2]] /*)*/
    cond(/*(*/ [memq(door_X_objects, onames(prso)),
	   tell(`I don't think that anybody's home.`)] /*)*/,
	  /*(*/ [tell(`Why knock on a `, 0, odesc2(prso), `?`)] /*)*/);
  }

export function chomp() {
    tell(`I don't know how to do that.  I win in all cases!`);
  }

export function frobozz() {
    tell(`The FROBOZZ Corporation created, owns, and operates this dungeon.`);
  }

export function win() {
    tell(`Naturally!`);
  }

export function yell() {
    tell(`Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!`);
  }