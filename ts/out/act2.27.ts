export function boom_room() {
    let dummy_Q: (ATOM | FALSE) = false;
    let prsact: VERB = G_prsvec[1];
    let win: ADV = G_winner;
    let o: OBJECT = null;
    if((vname(prsact) === walk_in_X_words || (vname(prsact) === on_X_words && dummy_Q = true))) {
      if(((memq(o = find_obj(`CANDL`), aobjs(win)) && 1_Q(olight_Q(o))) || (memq(o = find_obj(`TORCH`), aobjs(win)) && 1_Q(olight_Q(o))))) {
          return unwind(prog(/*(*/ [] /*)*/,
		    (() => {if(dummy_Q) {
                  return tell(`I didn't realize that adventurers are stupid enough to light a 
`, 1, odesc2(o), ` in a room which reeks of coal gas.
Fortunately, there is justice in the world.`);
                } else {
                  return tell(`Oh dear.  It appears that the smell coming from this room was coal
gas.  I would have thought twice about carrying a `, 1, odesc2(o), `in here.`);
                }})(),
		    fweep(7),
		    jigs_up(`   BOOOOOOOOOOOM      `)),
		   jigs_up(`   BOOOOOOOOOOOM      `));
        };
    };
  }    

export function bats_room() {
    let prsact: VERB = G_prsvec[1];
    if((vname(prsact) === walk_in_X_words && !memq(find_obj(`GARLI`), aobjs(G_winner)))) {
      return fly_me();
    } else if(prsact === G_look_X_words) {
      tell(`You are in a small room which has only one door, to the east.`);
      return (memq(find_obj(`GARLI`), aobjs(G_winner)) && tell(`In the corner of the room on the ceiling is a large vampire bat who
is obviously deranged and holding his nose.`));
    };
  }

export function fly_me() {
    let bat_drops: VECTOR</*[*/ [REST, STRING] /*]*/> = G_bat_drops;
    return unwind(prog(/*(*/ [] /*)*/,
	      fweep(4, 1),
	      tell(`A deranged giant vampire bat (a reject from WUMPUS) swoops down
from his belfry and lifts you away....`),
	      goto(find_room(pick_one(bat_drops)))),
	goto(find_room(pick_one(bat_drops))));
return G_prsvec[2] = false;
return room_desc();
  }

export function fweep(num: FIX, slp?: FIX) {
    return repeat(/*(*/ [/*(*/ [n, num] /*)*/] /*)*/,
	(0_Q(n = _(n,1)) && return()),
	image(7),
	(0_Q(slp) || sleep(slp)));
  }

psetg(bat_drops,
      () => /*[*/ [`MINE1`,
	`MINE2`,
	`MINE3`,
	`MINE4`,
	`MINE5`,
	`MINE6`,
	`MINE7`,
	`TLADD`,
	`BLADD`] /*]*/)
export let G_bat_drops: VECTOR</*[*/ [REST, STRING] /*]*/>;

G_cage_top_X_flag = true

export function dumbwaiter() {
    let prsact: VERB = G_prsvec[1];
    let tb: OBJECT = find_obj(`TBASK`);
    let top: ROOM = find_room(`TSHAF`);
    let bot: ROOM = find_room(`BSHAF`);
    let fb: OBJECT = find_obj(`FBASK`);
    let ct: VERB = G_cage_top_X_flag;
    let here: ROOM = G_here;
    let dummy: VECTOR</*[*/ [REST, STRING] /*]*/> = G_dummy;
    if(prsact === G_raise_X_words) {
      if(ct) {
          return tell(pick_one(G_dummy));
        } else if(remove_object(tb)) {
          remove_object(fb);
          insert_object(tb,top);
          insert_object(fb,bot);
          tell(`The basket is raised to the top of the shaft.`);
          return G_cage_top_X_flag = true;
        };
    } else if(prsact === G_lower_X_words) {
      if(!ct) {
          return tell(pick_one(dummy));
        } else if(remove_object(tb)) {
          remove_object(fb);
          insert_object(tb,bot);
          insert_object(fb,top);
          tell(`The basket is lowered to the bottom of the shaft.`);
          G_cage_top_X_flag = false;
          return true;
        };
    } else if(prsact === G_take_X_words) {
      if(((ct && here === top) || (!ct && here === bot))) {
          return tell(`The cage is securely fastened to the iron chain.`);
        } else {
          return tell(`I can't see that here.`);
        };
    };
  }

export function machine_room() {
    let prsact: VERB = G_prsvec[1];
    if(prsact === G_look_X_words) {
      tell(`You are in a large room which seems to be air-conditioned.  In one
corner there is a machine (?) which is shaped somewhat like a clothes
dryer.  On the 'panel' there is a switch which is labelled in a
dialect of Swahili.  Fortunately, I know this dialect and the label
translates to START.  The switch does not appear to be manipulable by
any human hand (unless the fingers are about 1/16 by 1/4 inch).  On
the front of the machine is a large lid.`);
      if(oopen_Q(find_obj(`MACHI`))) {
          return tell(`The lid on the machine is open.`);
        } else {
          return tell(`The lid on the machine is closed.`);
        };
    };
  }

export function machine_function() {
    let dummy: VECTOR</*[*/ [REST, STRING] /*]*/> = G_dummy;
    let prsact: VERB = G_prsvec[1];
    let mach: OBJECT = find_obj(`MACHI`);
    if(G_here === find_room(`MACHI`)) {
      if(vname(prsact) === open_X_words) {
          if(oopen_Q(mach)) {
              return tell(pick_one(dummy));
            } else if(tell(`The lid opens.`)) {
              return mach[G_oopen_Q] = true;
            };
        } else if(vname(prsact) === close_X_words) {
          if(oopen_Q(mach)) {
              tell(`The lid closes.`);
              mach[G_oopen_Q] = false;
              return true;
            } else {
              return tell(pick_one(dummy));
            };
        } else {
          return prsact === G_take_X_words;
        };
    };
  }

export function mswitch_function() {
    let prsact: VERB = G_prsvec[1];
    let c: VERB = find_obj(`COAL`);
    let imp: OBJECT = G_prsvec[3];
    let d: OBJECT = null;
    let mach: OBJECT = find_obj(`MACHI`);
    let screw: OBJECT = find_obj(`SCREW`);
    if(prsact === G_turn_X_words) {
      if(imp === screw) {
          if(oopen_Q(mach)) {
              return tell(`The machine doesn't seem to want to do anything.`);
            } else if(tell(`The machine comes to life (figuratively) with a dazzling display of
colored lights and bizarre noises.  After a few moments, the
excitement abates.`)) {
              if(memq(c,ocontents(mach))) {
                  mach[G_ocontents] = splice_out(c,ocontents(mach));
                  mach[G_ocontents] = /*(*/ [d = find_obj(`DIAMO`),
				      _X,ocontents(mach)] /*)*/;
                  return d[G_ocan] = mach;
                } else if(!empty_Q(ocontents(mach))) {
                  return mach[G_ocontents] = /*(*/ [d = find_obj(`GUNK`)] /*)*/;
                } else {
                  return true;
                };
            };
        } else {
          return tell(`It seems that a `, 1, odesc2(imp), ` won't do.`);
        };
    };
  }

export function gunk_function() {
    let g: OBJECT = find_obj(`GUNK`);
    let m: (OBJECT | FALSE) = ocan(g);
    if(m) {
      m[G_ocontents] = splice_out(g,ocontents(m));
      g[G_ocan] = false;
      return tell(`The slag turns out to be rather insubstantial, and crumbles into dust
at your touch.  It must not have been very valuable.`);
    };
  }

G_score_max = _(G_score_max,G_light_shaft = 10)

export function no_objs() {
    if(empty_Q(aobjs(G_winner))) {
      return G_empty_handed_X_flag = true;
    } else {
      return G_empty_handed_X_flag = false;
    };
if((G_here === find_room(`BSHAF`) && lit_Q(G_here))) {
      score_upd(G_light_shaft);
      return G_light_shaft = 0;
    };
  }
export let G_light_shaft: FIX;

export function cliff_function() {
    if(memq(find_obj(`RBOAT`), aobjs(G_winner))) {
      return G_deflate_X_flag = false;
    } else {
      return G_deflate_X_flag = true;
    };
  }

export function stick_function() {
    let prsact: VERB = G_prsvec[1];
    if(vname(prsact) === wave_X_words) {
      if((G_here === find_room(`FALLS`) || G_here === find_room(`POG`))) {
          if(!G_rainbow_X_flag) {
              tro(find_obj(`POT`), G_ovison);
              tell(`Suddenly, the rainbow appears to become solid and, I venture,
walkable (I think the giveaway was the stairs and bannister).`);
              return G_rainbow_X_flag = true;
            } else if(tell(`The rainbow seems to have become somewhat run-of-the-mill.`)) {
              return G_rainbow_X_flag = false;
            };
        } else if(G_here === find_room(`RAINB`)) {
          G_rainbow_X_flag = false;
          return jigs_up(`The structural integrity of the rainbow seems to have left it,
leaving you about 450 feet in the air, supported by water vapor.`);
        } else {
          return tell(`Very good.`);
        };
    };
  }

export function falls_room() {
    let prsact: VERB = G_prsvec[1];
    if(prsact === G_look_X_words) {
      tell(`You are at the top of Aragain Falls, an enormous waterfall with a
drop of about 450 feet.  The only path here is on the north end.
There is a man-sized barrel here which you could fit into.`);
      if(G_rainbow_X_flag) {
          return tell(`A solid rainbow spans the falls.`);
        } else {
          return tell(`A beautiful rainbow can be seen over the falls and to the east.`);
        };
    };
  }

export function digger() {
    let prso: OBJECT = G_prsvec[2];
    if(prso === find_obj(`SHOVE`)) {
      ;
    } else if(trnn(prso,G_toolbit)) {
      return tell(`Digging with the `, 1, odesc2(prso), ` is slow and tedious.`);
    } else {
      return tell(`Digging with a `, 1, odesc2(prso), ` is silly.`);
    };
  }

export function dboat_function() {
    let prsact: VERB = G_prsvec[1];
    let here: ROOM = G_here;
    let prsi: (FALSE | OBJECT) = G_prsvec[3];
    let dboat: OBJECT = find_obj(`DBOAT`);
    if(vname(prsact) === infla_X_words) {
      return tell(`This boat will not inflate since some moron put a hole in it.`);
    } else if(vname(prsact) === plug_X_words) {
      if(prsi === find_obj(`PUTTY`)) {
          tell(`Well done.  The boat is repaired.`);
          if(!oroom(dboat)) {
              drop_object(dboat);
              return take_object(find_obj(`IBOAT`));
            } else if(remove_object(find_obj(`DBOAT`))) {
              return insert_object(find_obj(`IBOAT`), here);
            };
        } else {
          return with_tell(prsi);
        };
    };
  }

export function rboat_function(arg?: (FALSE | ATOM)) {
    let prsact: VERB = G_prsvec[1];
    let rboat: OBJECT = find_obj(`RBOAT`);
    let iboat: OBJECT = find_obj(`IBOAT`);
    let here: ROOM = G_here;
    if(arg) {
      return false;
    } else if(prsact === G_board_X_words) {
      if(memq(find_obj(`STICK`), aobjs(G_winner))) {
          tell(`There is a hissing sound and the boat deflates.`);
          remove_object(rboat);
          insert_object(find_obj(`DBOAT`), here);
          return true;
        };
    } else if(prsact === G_disem_X_words) {
      return (spname(rid(here))[`RIVR`] && jigs_up(`Unfortunately, that leaves you in the water, where you drown.`));
    } else if(vname(prsact) === defla_X_words) {
      if(avehicle(G_winner) === rboat) {
          return tell(`You can't deflate the boat while you're in it.`);
        } else if(!memq(rboat,robjs(here))) {
          return tell(`The boat must be on the ground to be deflated.`);
        } else if(tell(`The boat deflates.`)) {
          G_deflate_X_flag = true;
          remove_object(rboat);
          return insert_object(iboat,here);
        };
    };
  }

export function iboat_function() {
    let prsact: VERB = G_prsvec[1];
    let iboat: OBJECT = find_obj(`IBOAT`);
    let rboat: OBJECT = find_obj(`RBOAT`);
    let here: ROOM = G_here;
    if(vname(prsact) === infla_X_words) {
      if(!memq(iboat,robjs(here))) {
          return tell(`The boat must be on the ground to be inflated.`);
        } else if(memq(find_obj(`PUMP`), aobjs(G_winner))) {
          tell(`The boat inflates and appears seaworthy.`);
          G_deflate_X_flag = false;
          remove_object(iboat);
          return insert_object(rboat,here);
        } else {
          return tell(`I don't think you have enough lung-power to inflate this boat.`);
        };
    };
  }

export function over_falls() {
    if(G_prsvec[1] === G_look_X_words) {
      ;
    } else {
      return jigs_up(`Oh dear, you seem to have gone over Aragain Falls.  Not a very smart
thing to do, apparently.`);
    };
  }

G_buoy_flag_X_flag = true

export function shake() {
    let prsobj: OBJECT = G_prsvec[2];
    let here: ROOM = G_here;
    if(object_action()) {
      ;
    } else if((!oopen_Q(prsobj) && !empty_Q(ocontents(prsobj)) && tell(`It sounds like there is something inside the `, 1, odesc2(prsobj), `.`))) {
      ;
    } else if((oopen_Q(prsobj) && !empty_Q(ocontents(prsobj)))) {
      mapf(false,
		 function(x: OBJECT) {
            return x[G_ocan] = false;
return insert_object(x,here);
          },
		 ocontents(prsobj));
      prsobj[G_ocontents] = /*(*/ [] /*)*/;
      return tell(`All of the objects spill onto the floor.`);
    };
  }

export function rivr4_room() {
    return (memq(find_obj(`BUOY`), aobjs(G_winner)) && G_buoy_flag_X_flag && tell(`Something seems funny about the feel of the buoy.`) && G_buoy_flag_X_flag = false);
  } 

export function beach_room() {
    let prsact: VERB = G_prsvec[1];
    let shov: OBJECT = find_obj(`SHOVE`);
    let here: ROOM = G_here;
    let cnt: FIX = null;
    if((vname(prsact) === dig_X_words && shov === G_prsvec[2])) {
      here[G_rvars] = cnt = _(1, rvars(here));
      if(cnt > 4) {
          here[G_rvars] = 0;
          return jigs_up(`The hole collapses, smothering you.`);
        } else if(cnt === 4) {
          tell(`You can see a small statue here in the sand.`);
          tro(find_obj(`STATU`), G_ovison);
          return here[G_rvars] = cnt;
        } else if(cnt < 0) {
          ;
        } else {
          return tell(G_bdigs[cnt]);
        };
    };
  }

export function tcave_room() {
    let prsact: VERB = G_prsvec[1];
    let shov: OBJECT = find_obj(`SHOVE`);
    let here: ROOM = G_here;
    let cnt: FIX = null;
    if((vname(prsact) === dig_X_words && G_prsvec[2] === shov)) {
      if(memq(find_obj(`GUANO`), robjs(here))) {
          here[G_rvars] = cnt = _(1, rvars(here));
          if(cnt > 3) {
              return tell(`This is getting you nowhere.`);
            } else {
              return tell(G_cdigs[cnt]);
            };
        } else {
          return tell(`There's nothing to dig into here.`);
        };
    };
  }
	   
psetg(cdigs,
   () => /*[*/ [`You are digging into a pile of bat guano.`,
     `You seem to be getting knee deep in guano.`,
     `You are covered with bat turds, cretin.`] /*]*/)

psetg(bdigs,
   () => /*[*/ [`You seem to be digging a hole here.`,
     `The hole is getting deeper, but that's about it.`,
     `You are surrounded by a wall of sand on all sides.`] /*]*/)
export let G_bdigs: VECTOR</*[*/ [REST, STRING] /*]*/>;export let G_cdigs: VECTOR</*[*/ [REST, STRING] /*]*/>;

export function geronimo() {
    if(G_here === find_room(`BARRE`)) {
      return jigs_up(`I didn't think you would REALLY try to go over the falls in a
barrel. It seems that some 450 feet below, you were met by a number
of  unfriendly rocks and boulders, causing your immediate demise.  Is
this what 'over a barrel' means?`);
    } else {
      return tell(`Wasn't he an Indian?`);
    };
  }

psetg(swimyuks,
   () => /*[*/ [`I don't really see how.`,
     `I think that swimming is best performed in water.`,
     `Perhaps it is your head that is swimming.`] /*]*/)
export let G_swimyuks: VECTOR</*[*/ [REST, STRING] /*]*/>;

export function swimmer() {
    let swimyuks: VECTOR</*[*/ [REST, STRING] /*]*/> = G_swimyuks;
    if(rtrnn(G_here,G_rfillbit)) {
      return tell(`Swimming is not allowed in this dungeon.`);
    } else {
      return tell(pick_one(swimyuks));
    };
  }


export function grue_function() {
    let prsa: VERB = G_prsvec[1];
    if(prsa === G_exami_X_words) {
      return tell(`The grue is a sinister, lurking presence in the dark places of the
earth.  Its favorite diet is adventurers, but its insatiable
appetite is tempered by its fear of light.  No grue has ever been
seen by the light of day, and few have survived its fearsome jaws
to tell the tale.`);
    } else if(prsa === G_find_X_words) {
      return tell(`There is no grue here, but I'm sure there is at least one lurking
in the darkness nearby.  I wouldn't let my light go out if I were
you!`);
    };
  }

G_btie_X_flag = false

G_binf_X_flag = false

define(balloon, ballact, /*(*/ [`OPTIONAL`, /*(*/ [arg, false] /*)*/,
			 `AUX`, /*(*/ [prsvec, G_prsvec] /*)*/,
			       /*(*/ [ball, find_obj(`BALLO`)] /*)*/, /*(*/ [prsa, prsvec[1]] /*)*/,
			       /*(*/ [prso, prsvec[2]] /*)*/, /*(*/ [cont, find_obj(`RECEP`)] /*)*/, m,
			       /*(*/ [binf, G_binf_X_flag] /*)*/, blabe] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [arg] /*)*/, (atom || false), /*(*/ [blabe, ball, cont, recep] /*)*/, object, /*(*/ [prsa] /*)*/, verb,
	       /*(*/ [prso] /*)*/, (object || direction), /*(*/ [m] /*)*/, (false || primtype(vector)),
	       /*(*/ [prsvec] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [binf] /*)*/, (false || room),
	       /*(*/ [m] /*)*/, (false || /*<*/ [primtype(vector), any, room] /*>*/)] /*)*/] /*2*/,
	(() => {if(arg === read_out) {
      if(prsa === G_look_X_words) {
          if(binf) {
              return tell(`The cloth bag is inflated and there is a `,
			   	   1,
			  	   odesc2(binf),
			  	   ` burning in the receptacle.`);
            } else {
              return tell(`The cloth bag is draped over the the basket.`);
            };
          if(G_btie_X_flag) {
              return tell(`The balloon is tied to the hook.`);
            };
        };
      return return(false, ballact);
    }})(),
	(() => {if(arg === read_in) {
      if(prsa === G_walk_X_words) {
          if(m = memq(chtype(prsvec[2], atom),
					rexits(G_here))) {
              if(G_btie_X_flag) {
                  tell(`You are tied to the ledge.`);
                  return return(true, ballact);
                } else if(else) {
                  (!rtrnn(m[2], G_rmungbit) && G_bloc = m[2]);
                  return return(false, ballact);
                };
            } else if(tell(`I'm afraid you can't control the balloon in this way.`)) {
              return return(true, ballact);
            };
        } else if((prsa === G_take_X_words && G_binf_X_flag === prso)) {
          tell(`You don't really want to hold a burning `,
		     	    1,
		            odesc2(prso),
		            `.`);
          return return(true, ballact);
        } else if((prsa === G_put_X_words && prsvec[3] === cont && !empty_Q(ocontents(cont)))) {
          tell(`The receptacle is already occupied.`);
          return return(true, ballact);
        } else {
          return return(false, ballact);
        };
    }})(),
	(() => {if(prsa === G_burn_X_words) {
      if(memq(prso,ocontents(cont))) {
          tell(`The `,
			    1,
			    odesc2(prso),
			    ` burns inside the receptacle.`);
          G_burnup_int = clock_int(G_brnin,_(osize(prso), 20));
          tro(prso,G_flamebit);
          trz(prso,_(G_takebit,G_readbit));
          prso[G_olight_Q] = 1;
          if(G_binf_X_flag) {
              ;
            } else if(tell(`The cloth bag inflates as it fills with hot air.`)) {
              if(!G_blab_X_flag) {
                  ball[G_ocontents] = /*(*/ [blabe = find_obj(`BLABE`),
					  _X,ocontents(ball)] /*)*/;
                  return blabe[G_ocan] = ball;
                };
              G_blab_X_flag = true;
              G_binf_X_flag = prso;
              return clock_int(G_bint,3);
            };
        };
    } else if((prsa === G_disem_X_words && rtrnn(G_here,G_rlandbit))) {
      if(G_binf_X_flag) {
          return clock_int(G_bint,3);
        };
      return false;
    } else if(prsa === G_c_int_X_words) {
      if(((oopen_Q(cont) && G_binf_X_flag) || spname(rid(G_here))[`LEDG`])) {
          return rise_and_shine(ball,G_here);
        } else {
          return decline_and_fall(ball,G_here);
        };
    }})())

G_blab_X_flag = false

export let G_burnup_int: CEVENT;export let G_bint: CEVENT;
export function rise_and_shine(ball: OBJECT, here: ROOM) {
    let s: STRING = top(G_scrstr);
    let m: (FALSE | STRING) = null;
    let in_Q: (ATOM | FALSE) = avehicle(G_winner) === ball;
    let bl: ROOM = G_bloc;
    let foo: CEVENT = null;
    return clock_int(G_bint,3);
if(m = spname(rid(bl))[`VAIR`]) {
      if(rest(m,4) == `4`) {
          clock_disable(G_burnup_int);
          clock_disable(G_bint);
          remove_object(ball);
          insert_object(find_obj(`DBALL`), find_room(`VLBOT`));
          if(in_Q) {
              return jigs_up(`Your balloon has hit the rim of the volcano, ripping the cloth and
causing you a 500 foot drop.  Did you get your flight insurance?`);
            } else {
              return tell(`You hear a boom and notice that the balloon is falling to the ground.`);
            };
          return G_bloc = find_room(`VLBOT`);
        } else if(substruc(spname(rid(bl)), 0, 4, s)) {
          s[5] = chtype(_(chtype(m[5], fix), 1), character);
          if(in_Q) {
              goto(G_bloc = find_room(s));
              tell(`The balloon ascends.`);
              return room_info(true);
            } else {
              return put_balloon(ball,bl,s,`ascends.`);
            };
        };
    } else if(m = spname(rid(bl))[`LEDG`]) {
      substruc(`VAIR`, 0, 4, s);
      s[5] = m[5];
      if(in_Q) {
          goto(G_bloc = find_room(s));
          tell(`The balloon leaves the ledge.`);
          return room_info(true);
        } else if(clock_int(G_vlgin,10)) {
          return put_balloon(ball,bl,s,`floats away.  It seems to be ascending,
due to its light load.`);
        };
    } else if(in_Q) {
      goto(G_bloc = find_room(`VAIR1`));
      tell(`The balloon rises slowly from the ground.`);
      return room_info(true);
    } else {
      return put_balloon(ball,bl,`VAIR1`, `lifts off.`);
    };
  }

export function put_balloon(ball: OBJECT, here: ROOM, there: STRING, str: STRING) {
    return (spname(rid(G_here))[`LEDG`] && tell(`You watch as the balloon slowly `, 1, str));
return remove_object(ball);
return insert_object(ball,G_bloc = find_room(there));
  }

export let G_bloc: ROOM;

export function decline_and_fall(ball: OBJECT, here: ROOM) {
    let s: STRING = top(G_scrstr);
    let m: (FALSE | STRING) = null;
    let bl: ROOM = G_bloc;
    let in_Q: (ATOM | FALSE) = avehicle(G_winner) === ball;
    let foo: CEVENT = null;
    return clock_int(G_bint,3);
if(m = spname(rid(bl))[`VAIR`]) {
      if(rest(m,4) == `1`) {
          if(in_Q) {
              goto(G_bloc = find_room(`VLBOT`));
              if(G_binf_X_flag) {
                  tell(`The balloon has landed.`);
                  return room_info(true);
                } else if(true) {
                  remove_object(ball);
                  insert_object(find_obj(`DBALL`), G_bloc);
                  G_winner[G_avehicle] = false;
                  clock_disable(foo = clock_int(G_bint,0));
                  return tell(`You have landed, but the balloon did not survive.`);
                };
            } else {
              return put_balloon(ball,bl,`VLBOT`, `lands.`);
            };
        } else if(substruc(spname(rid(bl)), 0, 4, s)) {
          s[5] = chtype(_(chtype(m[5], fix), 1), character);
          if(in_Q) {
              goto(G_bloc = find_room(s));
              tell(`The balloon descends.`);
              return room_info(true);
            } else {
              return put_balloon(ball,bl,s,`descends.`);
            };
        };
    };
  }

export function wire_function() {
    let pv: VECTOR = G_prsvec;
    let prsa: VERB = pv[1];
    let prso: PRSOBJ = pv[2];
    let prsi: PRSOBJ = pv[3];
    let bint: CEVENT = G_bint;
    if(prsa === G_tie_X_words) {
      if((prso === find_obj(`BROPE`) && (prsi === find_obj(`HOOK1`) || prsi === find_obj(`HOOK2`)))) {
          G_btie_X_flag = true;
          clock_disable(bint);
          return tell(`The balloon is fastened to the hook.`);
        };
    } else if((prsa === G_untie_X_words && prso === find_obj(`BROPE`))) {
      if(G_btie_X_flag) {
          clock_enable(bint = clock_int(G_bint,3));
          G_btie_X_flag = false;
          return tell(`The wire falls off of the hook.`);
        } else {
          return tell(`The wire is not tied to anything.`);
        };
    };
  }

export function burnup() {
    let r: OBJECT = find_obj(`RECEP`);
    let obj: OBJECT = ocontents(r)[1];
    return r[G_ocontents] = splice_out(obj,ocontents(r));
return tell(`It seems that the `, 1, odesc2(obj), ` has burned out, and the cloth
bag starts to collapse.`);
return G_binf_X_flag = false;
  }

G_safe_flag_X_flag = false

export function safe_room() {
    let prsa: VERB = G_prsvec[1];
    if(prsa === G_look_X_words) {
      return tell(`You are in a dusty old room which is virtually featureless, except
for an exit on the north side.`,
	         1,
		 (() => {if(!G_safe_flag_X_flag) {
            return `
Imbedded in the far wall, there is a rusty old box.  It appears that
the box is somewhat damaged, since an oblong hole has been chipped
out of the front of it.`;
          } else {
            return `
On the far wall is a rusty box, whose door has been blown off.`;
          }})());
    };
  }

export function safe_function() {
    let prsa: VERB = G_prsvec[1];
    if(prsa === G_take_X_words) {
      return tell(`The box is imbedded in the wall.`);
    } else if(prsa === G_open_X_words) {
      if(G_safe_flag_X_flag) {
          return tell(`The box has no door!`);
        } else {
          return tell(`The box is rusted and will not open.`);
        };
    } else if(prsa === G_close_X_words) {
      if(G_safe_flag_X_flag) {
          return tell(`The box has no door!`);
        } else {
          return tell(`The box is not open, chomper!`);
        };
    } else if(prsa === G_blast_X_words) {
      return tell(`What do you expect, BOOM?`);
    };
  }

psetg(brick_boom, 
`Now you've done it.  It seems that the brick has other properties
than weight, namely the ability to blow you to smithereens.`)

export function brick_function() {
    let prsa: VERB = G_prsvec[1];
    if(prsa === G_burn_X_words) {
      return jigs_up(G_brick_boom);
    };
  }

export function fuse_function() {
    let prsa: VERB = G_prsvec[1];
    let fuse: OBJECT = find_obj(`FUSE`);
    let brick: OBJECT = find_obj(`BRICK`);
    let brick_room: (ROOM | FALSE) = null;
    let oc: (OBJECT | FALSE) = null;
    if(prsa === G_burn_X_words) {
      tell(`The wire starts to burn.`);
      return fuse[G_orand] = /*[*/ [0, clock_int(G_fusin,2)] /*]*/;
    } else if(prsa === G_c_int_X_words) {
      trz(fuse,G_ovison);
      if(ocan(fuse) === brick) {
          trz(brick,G_ovison);
          if(oc = ocan(brick)) {
              return brick_room = oroom(oc);
            } else {
              return brick_room = oroom(brick);
            };
          (brick_room || brick_room = G_here);
          if(brick_room === G_here) {
              mung_room(brick_room,
				`The way is blocked by debris from an explosion.`);
              return jigs_up(G_brick_boom);
            } else if(brick_room === find_room(`SAFE`)) {
              clock_int(G_safin,5);
              G_munged_room = oroom(brick);
              tell(`There is an explosion nearby.`);
              if(memq(brick,ocontents(find_obj(`SSLOT`)))) {
                  trz(find_obj(`SSLOT`), G_ovison);
                  find_obj(`SAFE`)[G_oopen_Q] = true;
                  return G_safe_flag_X_flag = true;
                };
            } else if(tell(`There is an explosion nearby.`)) {
              clock_int(G_safin,5);
              G_munged_room = brick_room;
              mapf(false,
				   function(x) {
                    if(can_take_Q(x)) {
                      return trz(x,G_ovison);
                    };
                  },
				   robjs(brick_room));
              if(brick_room === find_room(`LROOM`)) {
                  mapf(false,
					  function(x: OBJECT) {
                        return x[G_ocan] = false;
                      },
					  ocontents(find_obj(`TCASE`)));
                  return find_obj(`TCASE`)[G_ocontents] = /*(*/ [] /*)*/;
                };
            };
        } else if((!oroom(fuse) || G_here === oroom(fuse))) {
          return tell(`The wire rapidly burns into nothingness.`);
        };
    };
  }

export function safe_mung() {
    let rm: ROOM = G_munged_room;
    if(G_here === rm) {
      return jigs_up((() => {if(rtrnn(rm,G_rhousebit)) {
            return `The house shakes, and the ceiling of the room you're in collapses,
turning you into a pancake.`;
          } else {
            return `The room trembles and 50,000 pounds of rock fall on you, turning you
into a pancake.`;
          }})());
    } else if(tell(`You may recall your recent explosion.  Well, probably as a result of
that, you hear an ominous rumbling, as if one of the rooms in the
dungeon had collapsed.`)) {
      return (rm === find_room(`SAFE`) && clock_int(G_ledin,8));
    };
return mung_room((oroom(find_obj(`BRICK`)) || G_here),
		   `The way is blocked by debris from an explosion.`);
  }

export function ledge_mung() {
    let rm: ROOM = find_room(`LEDG4`);
    if(G_here === rm) {
      if(avehicle(G_winner)) {
          if(G_btie_X_flag) {
              rm = find_room(`VLBOT`);
              G_bloc = rm;
              remove_object(find_obj(`BALLO`));
              insert_object(find_obj(`DBALL`), rm);
              G_btie_X_flag = false;
              G_binf_X_flag = false;
              clock_disable(G_bint);
              clock_disable(G_brnin);
              return jigs_up(`The ledge collapses, probably as a result of the explosion.  A large
chunk of it, which is attached to the hook, drags you down to the
ground.  Fatally.`);
            } else {
              return tell(`The ledge collapses, leaving you with no place to land.`);
            };
        } else if(true) {
          return jigs_up(`The force of the explosion has caused the ledge to collapse
belatedly.`);
        };
    } else {
      return tell(`The ledge collapses, giving you a narrow escape.`);
    };
return mung_room(rm,`The ledge has collapsed and cannot be landed on.`);
  }

export function ledge_function() {
    let prsa: VERB = G_prsvec[1];
    if(prsa === G_walk_in_X_words) {
      return (G_safe_flag_X_flag && tell(`Behind you, the walls of the safe room collapse into rubble.`) && G_safe_flag_X_flag = false);
    } else if(prsa === G_look_X_words) {
      return tell(`You are on a wide ledge high into the volcano.  The rim of the
volcano is about 200 feet above and there is a precipitous drop below
to the bottom.`, 1,
		(() => {if(rtrnn(find_room(`SAFE`), G_rmungbit)) {
            return ` The way to the south is blocked by rubble.`;
          } else {
            return ` There is a small door to the south.`;
          }})());
    };
  }

export function blast() {
    if(G_here === find_room(`SAFE`)) {
      ;
    } else {
      return tell(`I don't really know how to do that.`);
    };
  }

export function volgnome() {
    if(spname(rid(G_here))[`LEDG`]) {
      tell(`A volcano gnome seems to walk straight out of the wall and says
'I have a very busy appointment schedule and little time to waste on
tresspassers, but for a small fee, I'll show you the way out.'  You
notice the gnome nervously glancing at his watch.`);
      return insert_object(find_obj(`GNOME`), G_here);
    } else {
      return clock_int(G_vlgin,1);
    };
  }

G_gnome_door_X_flag = G_gnome_flag_X_flag = false

export function gnome_function() {
    let pv: VECTOR = G_prsvec;
    let prsa: VERB = pv[1];
    let prso: PRSOBJ = pv[2];
    if(((prsa === G_give_X_words || prsa === G_throw_X_words) && type_Q(prso,object) && (() => {if(otval(prso) !== 0) {
            tell(`Thank you very much for the `, 1, odesc2(prso), `.  I don't believe 
I've ever seen one as beautiful. 'Follow me', he says, and a door 
appears on the west end of the ledge.  Through the door, you can see
a narrow chimney sloping steeply downward.`);
            return G_gnome_door_X_flag = true;
          } else if(tell(`'That wasn't quite what I had in mind', he says, crunching the
`, 1, odesc2(prso), ` in his rock-hard hands.`)) {
            return remove_object(prso);
          }})())) {
      ;
    } else if(prsa === G_c_int_X_words) {
      tell(`The gnome glances at his watch.  'Oops.  I'm late for an
appointment!' He disappears, leaving you alone on the ledge.`);
      return remove_object(find_obj(`GNOME`));
    } else if(tell(`The gnome appears increasingly nervous.`)) {
      (G_gnome_flag_X_flag || clock_int(G_gnoin,5));
      return G_gnome_flag_X_flag = true;
    };
  }