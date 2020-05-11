export function coke_bottles() {
    let pv: VECTOR(VERB) = G_prsvec;
    let bottl: OBJECT = pv[2];
    let vb: VERB = pv[1];
    if((vb === G_throw_X_words || vname(vb) === mung_X_words)) {
      tell(`Congratulations!  You've managed to break all those bottles.
Fortunately for your feet, they were made of magic glass and disappear
immediately.`);
      trz(bottl,G_ovison);
      bottl[G_osize] = 0;
      return t;
    }
    return false;
  }

export function head_function() {
    let pv: VECTOR(VERB) = G_prsvec;
    let vb: VERB = pv[1];
    let nl: LIST(/*[*/ [REST, OBJECT] /*]*/) = /*(*/ [] /*)*/;
    let lcase: OBJECT = find_obj(`LCASE`);
    if(vb !== G_read_X_words) {
      tell(`Although the implementers are dead, they foresaw that some cretin
would tamper with their remains.  Therefore, they took steps to
prevent this.`);
      nl = rob_adv(G_winner,nl);
      nl = rob_room(G_here,nl,100);
      if(!empty_Q(nl)) {
          (oroom(lcase) || insert_object(lcase,find_room(`LROOM`)));
          return lcase[G_ocontents] = /*(*/ [_X,ocontents(lcase), _X,nl] /*)*/;
        };
      jigs_up(`Unfortunately, we've run out of poles.  Therefore, in punishment for
your most grievous sin, we shall deprive you of all your valuables,
and of your life.`);
      return t;
    }
    return false;
  }

G_then = 0

G_bucket_top_X_flag = false

export function bucket(arg?: (FALSE | ATOM)) {
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    let po: (DIRECTION | FALSE | OBJECT) = pv[2];
    let w: OBJECT = find_obj(`WATER`);
    let buck: OBJECT = find_obj(`BUCKE`);
    if(arg === read_in) {
      return false;
    } else if((pa === G_c_int_X_words && if(memq(w,ocontents(buck))) {
            remove_object(w);
            return false;
          } else {
            return t;
          })) {
      ;
    } else if(arg === read_out) {
      if((ocan(w) === buck && !G_bucket_top_X_flag)) {
          tell(`The bucket rises and comes to a stop.`);
          G_bucket_top_X_flag = t;
          pass_the_bucket(find_room(`TWELL`), pv,buck);
          clock_int(G_bckin,100);
          return false;
        } else if((G_bucket_top_X_flag && ocan(w) !== buck)) {
          tell(`The bucket descends and comes to a stop.`);
          G_bucket_top_X_flag = false;
          return pass_the_bucket(find_room(`BWELL`), pv,buck);
        }
        return false;
    }
    return false;
  }

export function pass_the_bucket(r: ROOM, pv: VECTOR, b: OBJECT) {
    let pvs: (FALSE | OBJECT | DIRECTION) = pv[2];
    return pv[2] = false;
return remove_object(b);
return insert_object(b,r);
if(avehicle(G_winner) === b) {
      goto(r);
      return room_info(t);
    }
    return false;
return pv[2] = pvs;
  }

export function eatme_function() {
    let r: ROOM = null;
    let c: OBJECT = null;
    let pv: VECTOR = G_prsvec;
    let here: ROOM = G_here;
    if((pv[1] === G_eat_X_words && pv[2] === c = find_obj(`ECAKE`) && here === find_room(`ALICE`))) {
      tell(`Suddenly, the room appears to have become very large.`);
      kill_obj(c,G_winner);
      r = find_room(`ALISM`);
      r[G_robjs] = robjs(here);
      mapf(false,
		 function(x: OBJECT) {
            return x[G_osize] = _(64, osize(x));
return x[G_oroom] = r;
          },
		 robjs(here));
      return goto(r);
    }
    return false;
  }

export function cake_function() {
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    let po: (FALSE | OBJECT) = pv[2];
    let pi: (FALSE | OBJECT) = pv[3];
    let rice: OBJECT = find_obj(`RDICE`);
    let oice: OBJECT = find_obj(`ORICE`);
    let bice: OBJECT = find_obj(`BLICE`);
    let here: ROOM = G_here;
    let r: OBJECT = null;
    if(pa === G_read_X_words) {
      if(pi) {
          if(pi === find_obj(`BOTTL`)) {
              return tell(`The letters appear larger, but still are too small to be read.`);
            } else if(pi === find_obj(`FLASK`)) {
              return tell(`The icing, now visible, says '`,
				   1,
				   if(po === rice) {
                    return `Evaporate`;
                  } else if(po === oice) {
                    return `Explode`;
                  } else {
                    return `Enlarge`;
                  },
				   `'.`);
            } else {
              return tell(`You can't see through that!`);
            };
        } else {
          return tell(`The only writing legible is a capital E.  The rest is too small to
be clearly visible.`);
        };
    } else if((pa === G_eat_X_words && spname(rid(here))[`ALI`])) {
      if(po === oice) {
          kill_obj(po,G_winner);
          return iceboom();
        } else if(po === bice) {
          kill_obj(po,G_winner);
          tell(`The room around you seems to be getting smaller.`);
          if(here === find_room(`ALISM`)) {
              r = find_room(`ALICE`);
              r[G_robjs] = robjs(here);
              mapf(false,
				   function(x: OBJECT) {
                    return x[G_oroom] = r;
return x[G_osize] = _(osize(x), 64);
                  },
				   robjs(here));
              return goto(r);
            } else {
              return jigs_up(G_crushed);
            };
        }
        return false;
    } else if((pa === G_throw_X_words && po === oice && spname(rid(here))[`ALI`])) {
      kill_obj(po,G_winner);
      return iceboom();
    } else if((pa === G_throw_X_words && po === rice && pi === find_obj(`POOL`))) {
      remove_object(pi);
      tell(`The pool of water evaporates, revealing a tin of rare spices.`);
      return tro(find_obj(`SAFFR`), G_ovison);
    }
    return false;
  }

export function flask_function() {
    let f = null;
    let pv: VECTOR(VERB, OBJECT) = G_prsvec;
    let pa: VERB = pv[1];
    if(pa === G_open_X_words) {
      mung_room(G_here,`Noxious vapors prevent your entry.`);
      return jigs_up(G_vapors);
    } else if((pa === G_mung_X_words || pa === G_throw_X_words)) {
      tell(`The flask breaks into pieces.`);
      f = pv[2];
      trz(f,G_ovison);
      return jigs_up(G_vapors);
    }
    return false;
  }

psetg(vapors,
`Just before you pass out, you notice that the vapors from the
flask's contents are fatal.`)

psetg(crushed,
`The room seems to have become too small to hold you.  It seems that
the  walls are not as compressible as your body, which is somewhat
demolished.`)

export function iceboom() {
    return mung_room(G_here,`The door to the room seems to be blocked by sticky orange rubble
from an explosion.  Probably some careless adventurer was playing
with blasting cakes.`);
return jigs_up(G_iceblast);
  }

psetg(iceblast, `You have been blasted to smithereens (wherever they are).`)

export function magnet_room() {
    let foo: CEXIT = null;
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    let po: (FALSE | OBJECT | DIRECTION) = pv[2];
    let here: ROOM = G_here;
    let m: (FALSE | PRIMTYPE(VECTOR)) = null;
    if(pa === G_look_X_words) {
      return tell(`You are in a room with a low ceiling which is circular in shape. 
There are exits to the east and the southeast.`);
    } else if((pa === G_walk_in_X_words && G_carousel_flip_X_flag)) {
      if(G_carousel_zoom_X_flag) {
          return jigs_up(G_spindizzy);
        } else if(tell(`As you enter, your compass starts spinning wildly.`)) {
          return false;
        }
        return false;
    } else if(pa === G_walk_X_words) {
      if((G_carousel_flip_X_flag && G_winner === G_player)) {
          tell(`You cannot get your bearings...`);
          goto(cxroom(foo = rexits(here)[_(2, _(1, mod(random(), 8)))]));
          return room_info();
        } else if(m = memq(chtype(po,atom), rest(rexits(here), 12))) {
          goto(cxroom(foo = m[2]));
          return room_info();
        }
        return false;
    }
    return false;
  }

export function cmach_room() {
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    if(pa === G_look_X_words) {
      return tell(`You are in a large room full of assorted heavy machinery.  The room
smells of burned resistors. The room is noisy from the whirring
sounds of the machines. Along one wall of the room are three buttons
which are, respectively, round, triangular, and square.  Naturally,
above these buttons are instructions written in EBCDIC.  A large sign
in English above all the buttons says
		'DANGER -- HIGH VOLTAGE '.
There are exits to the west and the south.`);
    }
    return false;
  }
	  
G_carousel_zoom_X_flag = false

G_carousel_flip_X_flag = false

export function buttons() {
    let i: OBJECT = null;
    let pv: VECTOR = G_prsvec;
    let po = pv[2];
    let pa: VERB = pv[1];
    if(pa === G_push_X_words) {
      if(G_winner === G_player) {
          return jigs_up(`There is a giant spark and you are fried to a crisp.`);
        } else if(po === find_obj(`SQBUT`)) {
          if(G_carousel_zoom_X_flag) {
              return tell(`Nothing seems to happen.`);
            } else if(G_carousel_zoom_X_flag = t) {
              return tell(`The whirring increases in intensity slightly.`);
            }
            return false;
        } else if(po === find_obj(`RNBUT`)) {
          if(G_carousel_zoom_X_flag) {
              G_carousel_zoom_X_flag = false;
              return tell(`The whirring decreases in intensity slightly.`);
            } else {
              return tell(`Nothing seems to happen.`);
            };
        } else if(po === find_obj(`TRBUT`)) {
          G_carousel_flip_X_flag = !G_carousel_flip_X_flag;
          if(memq(i = find_obj(`IRBOX`),
				   robjs(find_room(`CAROU`)))) {
              tell(`A dull thump is heard in the distance.`);
              return trc(i,G_ovison);
            }
            return false;
        }
        return false;
    }
    return false;
  }

psetg(spindizzy,
`According to Prof. TAA of MIT Tech, the rapidly changing magnetic
fields in the room are so intense as to cause you to be electrocuted. 
I really don't know, but in any event, something just killed you.`)

G_cage_solve_X_flag = false

export function sphere_function() {
    let pv: VECTOR(VERB, OBJECT) = G_prsvec;
    let pa: VERB = pv[1];
    let r: OBJECT = find_obj(`ROBOT`);
    let c: ROOM = null;
    let fl: (ATOM | FALSE) = null;
    let ract: ADV = null;
    return fl = (!G_cage_solve_X_flag && pa === G_take_X_words);
if((fl && G_player === G_winner)) {
      tell(`As you reach for the sphere, an iron cage falls from the ceiling
to entrap you.  To make matters worse, poisonous gas starts coming
into the room.`);
      if(oroom(r) === G_here) {
          goto(c = find_room(`CAGED`));
          remove_object(r);
          insert_object(r,c);
          ract = orand(r)[G_aroom] = c;
          tro(r,G_ndescbit);
          G_sphere_clock = clock_int(G_sphin,10);
          return t;
        } else if(else) {
          trz(find_obj(`SPHER`), G_ovison);
          mung_room(find_room(`CAGER`),
				 `You are stopped by a cloud of poisonous gas.`);
          return jigs_up(G_poison);
        }
        return false;
    } else if(fl) {
      trz(find_obj(`SPHER`), G_ovison);
      jigs_up(`As the robot reaches for the sphere, an iron cage falls from the
ceiling.  The robot attempts to fend it off, but is trapped below it.
Alas, the robot short-circuits in his vain attempt to escape, and
crushes the sphere beneath him as he falls to the floor.`);
      remove_object(r);
      trz(pv[2], G_ovison);
      insert_object(find_obj(`RCAGE`), G_here);
      return t;
    } else if(pa === G_c_int_X_words) {
      mung_room(find_room(`CAGER`),
			  `You are stopped by a cloud of poisonous gas.`);
      return jigs_up(G_poison);
    }
    return false;
  }

psetg(poison, `Time passes...and you die from some obscure poisoning.`)

export function caged_room() {
    if(G_cage_solve_X_flag) {
      return G_here = find_room(`CAGER`);
    }
    return false;
  }

export let G_sphere_clock: CEVENT;export let G_robot_actions: UVECTOR(/*[*/ [REST, VERB] /*]*/);
export function robot_actor() {
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    let po: (FALSE | OBJECT | DIRECTION) = pv[2];
    let c: ROOM = null;
    let cage: OBJECT = null;
    let r: OBJECT = find_obj(`ROBOT`);
    let ract: ADV = null;
    if((pa === G_raise_X_words && po === find_obj(`CAGE`))) {
      tell(`The cage shakes and is hurled across the room.`);
      clock_disable(G_sphere_clock);
      G_winner = G_player;
      goto(c = find_room(`CAGER`));
      insert_object(cage = find_obj(`CAGE`), c);
      tro(cage,G_takebit);
      trz(cage,G_ndescbit);
      trz(r,G_ndescbit);
      tro(find_obj(`SPHER`), G_takebit);
      remove_object(r);
      insert_object(r,c);
      ract = orand(r)[G_aroom] = c;
      return G_cage_solve_X_flag = t;
    } else if((pa === G_eat_X_words || pa === G_drink_X_words)) {
      return tell(`\"I am sorry but that action is difficult in the absence of a mouth.\`);
    } else if(pa === G_read_X_words) {
      return tell(`\"My vision is not that good without eyes.\`);
    } else if(memq(pa,G_robot_actions)) {
      return false;
    } else {
      return tell(`\"I am only a stupid robot and cannot perform that command.\`);
    };
  }

export function robot_function() {
    let pv: VECTOR = G_prsvec;
    let pa: VERB = pv[1];
    let po: OBJECT = pv[2];
    let pi: (FALSE | OBJECT) = pv[3];
    let pp: OBJECT = null;
    let aa: ADV = null;
    if(pa === G_give_X_words) {
      aa = orand(pp = pi);
      remove_object(po);
      aa[G_aobjs] = /*(*/ [po,_X,aobjs(aa)] /*)*/;
      return tell(`The robot gladly takes the `,
		     1,
		     odesc2(po),
		     `
and nods his head-like appendage in thanks.`);
    } else if((pa === G_throw_X_words || pa === G_mung_X_words)) {
      tell(`The robot is injured (being of shoddy construction) and falls to the
floor in a pile of garbage, which disintegrates before your eyes.`);
      return remove_object(if(pa === G_throw_X_words) {
            return pi;
          } else {
            return po;
          });
    }
    return false;
  } 

export function knock() {`AUX`, /*(*/ [prso, G_prsvec[2]] /*)*/
    if(memq(door_X_objects, onames(prso))) {
      return tell(`I don't think that anybody's home.`);
    } else {
      return tell(`Why knock on a `, 0, odesc2(prso), `?`);
    };
  }

export function chomp() {
    return tell(`I don't know how to do that.  I win in all cases!`);
  }

export function frobozz() {
    return tell(`The FROBOZZ Corporation created, owns, and operates this dungeon.`);
  }

export function win() {
    return tell(`Naturally!`);
  }

export function yell() {
    return tell(`Aaaarrrrrrrrgggggggggggggghhhhhhhhhhhhhh!`);
  }