export function boom_room() {
    let dummy_Q: (atom | false) = false;
    let prsact: verb = prsvec[1];
    let win: adv = winner;
    let o: object = null;
    cond(/*(*/ [(vname(prsact) === walk_in_X_words || (vname(prsact) === on_X_words && dummy_Q = t)),
	   cond(/*(*/ [((memq(o = find_obj(`CANDL`), aobjs(win)) && 1_Q(olight_Q(o))) || (memq(o = find_obj(`TORCH`), aobjs(win)) && 1_Q(olight_Q(o)))),
		  unwind(prog(/*(*/ [] /*)*/,
		    cond(/*(*/ [dummy_Q,
			   tell(`I didn't realize that adventurers are stupid enough to light a 
`, 1, odesc2(o), ` in a room which reeks of coal gas.
Fortunately, there is justice in the world.`)] /*)*/,
			  /*(*/ [tell(`Oh dear.  It appears that the smell coming from this room was coal
gas.  I would have thought twice about carrying a `, 1, odesc2(o), `in here.`)] /*)*/),
		    fweep(7),
		    jigs_up(`   BOOOOOOOOOOOM      `)),
		   jigs_up(`   BOOOOOOOOOOOM      `))] /*)*/)] /*)*/);
  }    

export function bats_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [(vname(prsact) === walk_in_X_words && !memq(find_obj(`GARLI`), aobjs(winner))),
	   fly_me()] /*)*/,
	  /*(*/ [prsact === look_X_words,
	   tell(`You are in a small room which has only one door, to the east.`),
	   (memq(find_obj(`GARLI`), aobjs(winner)) && tell(`In the corner of the room on the ceiling is a large vampire bat who
is obviously deranged and holding his nose.`))] /*)*/);
  }

export function fly_me() {
    let bat_drops: vector(/*[*/ [rest, string] /*]*/) = bat_drops;
    unwind(prog(/*(*/ [] /*)*/,
	      fweep(4, 1),
	      tell(`A deranged giant vampire bat (a reject from WUMPUS) swoops down
from his belfry and lifts you away....`),
	      goto(find_room(pick_one(bat_drops)))),
	goto(find_room(pick_one(bat_drops))));
prsvec[2] = false;
room_desc();
  }

export function fweep(num: number, slp?: number) {
    repeat(/*(*/ [/*(*/ [n, num] /*)*/] /*)*/,
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
export let bat_drops: vector(/*[*/ [rest, string] /*]*/);

cage_top_X_flag = t

export function dumbwaiter() {
    let prsact: verb = prsvec[1];
    let tb: object = find_obj(`TBASK`);
    let top: room = find_room(`TSHAF`);
    let bot: room = find_room(`BSHAF`);
    let fb: object = find_obj(`FBASK`);
    let ct: verb = cage_top_X_flag;
    let here: room = here;
    let dummy: vector(/*[*/ [rest, string] /*]*/) = dummy;
    cond(/*(*/ [prsact === raise_X_words,
	   cond(/*(*/ [ct,
		  tell(pick_one(dummy))] /*)*/,
		 /*(*/ [remove_object(tb),
		  remove_object(fb),
		  insert_object(tb,top),
		  insert_object(fb,bot),
		  tell(`The basket is raised to the top of the shaft.`),
		  cage_top_X_flag = t] /*)*/)] /*)*/,
	  /*(*/ [prsact === lower_X_words,
	   cond(/*(*/ [!ct,
		  tell(pick_one(dummy))] /*)*/,
		 /*(*/ [remove_object(tb),
		  remove_object(fb),
		  insert_object(tb,bot),
		  insert_object(fb,top),
		  tell(`The basket is lowered to the bottom of the shaft.`),
		  cage_top_X_flag = false,
		  t] /*)*/)] /*)*/,
	  /*(*/ [prsact === take_X_words,
	   cond(/*(*/ [((ct && here === top) || (!ct && here === bot)),
		  tell(`The cage is securely fastened to the iron chain.`)] /*)*/,
		 /*(*/ [tell(`I can't see that here.`)] /*)*/)] /*)*/);
  }

export function machine_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	   tell(`You are in a large room which seems to be air-conditioned.  In one
corner there is a machine (?) which is shaped somewhat like a clothes
dryer.  On the 'panel' there is a switch which is labelled in a
dialect of Swahili.  Fortunately, I know this dialect and the label
translates to START.  The switch does not appear to be manipulable by
any human hand (unless the fingers are about 1/16 by 1/4 inch).  On
the front of the machine is a large lid.`),
	   cond(/*(*/ [oopen_Q(find_obj(`MACHI`)),
		  tell(`The lid on the machine is open.`)] /*)*/,
		 /*(*/ [tell(`The lid on the machine is closed.`)] /*)*/)] /*)*/);
  }

export function machine_function() {
    let dummy: vector(/*[*/ [rest, string] /*]*/) = dummy;
    let prsact: verb = prsvec[1];
    let mach: object = find_obj(`MACHI`);
    cond(/*(*/ [here === find_room(`MACHI`),
     cond(/*(*/ [vname(prsact) === open_X_words,
       cond(/*(*/ [oopen_Q(mach),
	      tell(pick_one(dummy))] /*)*/,
	     /*(*/ [tell(`The lid opens.`),
	      mach[oopen_Q] = t] /*)*/)] /*)*/,
      /*(*/ [vname(prsact) === close_X_words,
       cond(/*(*/ [oopen_Q(mach),
	      tell(`The lid closes.`),
	      mach[oopen_Q] = false,
	      t] /*)*/,
	     /*(*/ [tell(pick_one(dummy))] /*)*/)] /*)*/,
      /*(*/ [prsact === take_X_words] /*)*/)] /*)*/);
  }

export function mswitch_function() {
    let prsact: verb = prsvec[1];
    let c: verb = find_obj(`COAL`);
    let imp: object = prsvec[3];
    let d: object = null;
    let mach: object = find_obj(`MACHI`);
    let screw: object = find_obj(`SCREW`);
    cond(/*(*/ [prsact === turn_X_words,
	   cond(/*(*/ [imp === screw,
		  cond(/*(*/ [oopen_Q(mach),
			 tell(`The machine doesn't seem to want to do anything.`)] /*)*/,
			/*(*/ [tell(`The machine comes to life (figuratively) with a dazzling display of
colored lights and bizarre noises.  After a few moments, the
excitement abates.`),
		         cond(/*(*/ [memq(c,ocontents(mach)),
				mach[ocontents] = splice_out(c,ocontents(mach)),
				mach[ocontents] = /*(*/ [d = find_obj(`DIAMO`),
				      _X,ocontents(mach)] /*)*/,
				d[ocan] = mach] /*)*/,
			       /*(*/ [!empty_Q(ocontents(mach)),
				mach[ocontents] = /*(*/ [d = find_obj(`GUNK`)] /*)*/] /*)*/,
			       /*(*/ [t] /*)*/)] /*)*/)] /*)*/,
		 /*(*/ [tell(`It seems that a `, 1, odesc2(imp), ` won't do.`)] /*)*/)] /*)*/);
  }

export function gunk_function() {
    let g: object = find_obj(`GUNK`);
    let m: (object | false) = ocan(g);
    cond(/*(*/ [m,
	 m[ocontents] = splice_out(g,ocontents(m)),
	 g[ocan] = false,
	 tell(`The slag turns out to be rather insubstantial, and crumbles into dust
at your touch.  It must not have been very valuable.`)] /*)*/);
  }

score_max = _(score_max,light_shaft = 10)

export function no_objs() {
    cond(/*(*/ [empty_Q(aobjs(winner)),
	   empty_handed_X_flag = t] /*)*/,
	  /*(*/ [empty_handed_X_flag = false] /*)*/);
cond(/*(*/ [(here === find_room(`BSHAF`) && lit_Q(here)),
	   score_upd(light_shaft),
	   light_shaft = 0] /*)*/);
  }
export let light_shaft: number;

export function cliff_function() {
    cond(/*(*/ [memq(find_obj(`RBOAT`), aobjs(winner)),
	   deflate_X_flag = false] /*)*/,
	  /*(*/ [deflate_X_flag = t] /*)*/);
  }

export function stick_function() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [vname(prsact) === wave_X_words,
	   cond(/*(*/ [(here === find_room(`FALLS`) || here === find_room(`POG`)),
		  cond(/*(*/ [!rainbow_X_flag,
			 tro(find_obj(`POT`), ovison),
			 tell(`Suddenly, the rainbow appears to become solid and, I venture,
walkable (I think the giveaway was the stairs and bannister).`),
			 rainbow_X_flag = t] /*)*/,
			/*(*/ [tell(`The rainbow seems to have become somewhat run-of-the-mill.`),
			 rainbow_X_flag = false] /*)*/)] /*)*/,
		 /*(*/ [here === find_room(`RAINB`),
		  rainbow_X_flag = false,
		  jigs_up(`The structural integrity of the rainbow seems to have left it,
leaving you about 450 feet in the air, supported by water vapor.`)] /*)*/,
		 /*(*/ [tell(`Very good.`)] /*)*/)] /*)*/);
  }

export function falls_room() {
    let prsact: verb = prsvec[1];
    cond(/*(*/ [prsact === look_X_words,
	   tell(`You are at the top of Aragain Falls, an enormous waterfall with a
drop of about 450 feet.  The only path here is on the north end.
There is a man-sized barrel here which you could fit into.`),
	   cond(/*(*/ [rainbow_X_flag,
		  tell(`A solid rainbow spans the falls.`)] /*)*/,
		 /*(*/ [tell(`A beautiful rainbow can be seen over the falls and to the east.`)] /*)*/)] /*)*/);
  }

export function digger() {
    let prso: object = prsvec[2];
    cond(/*(*/ [prso === find_obj(`SHOVE`)] /*)*/,
	  /*(*/ [trnn(prso,toolbit),
	   tell(`Digging with the `, 1, odesc2(prso), ` is slow and tedious.`)] /*)*/,
	  /*(*/ [tell(`Digging with a `, 1, odesc2(prso), ` is silly.`)] /*)*/);
  }

export function dboat_function() {
    let prsact: verb = prsvec[1];
    let here: room = here;
    let prsi: (false | object) = prsvec[3];
    let dboat: object = find_obj(`DBOAT`);
    cond(/*(*/ [vname(prsact) === infla_X_words,
	   tell(`This boat will not inflate since some moron put a hole in it.`)] /*)*/,
	  /*(*/ [vname(prsact) === plug_X_words,
	   cond(/*(*/ [prsi === find_obj(`PUTTY`),
		  tell(`Well done.  The boat is repaired.`),
		  cond(/*(*/ [!oroom(dboat),
			 drop_object(dboat),
			 take_object(find_obj(`IBOAT`))] /*)*/,
			/*(*/ [remove_object(find_obj(`DBOAT`)),
			 insert_object(find_obj(`IBOAT`), here)] /*)*/)] /*)*/,
		 /*(*/ [with_tell(prsi)] /*)*/)] /*)*/);
  }

export function rboat_function(arg?: (false | atom)) {
    let prsact: verb = prsvec[1];
    let rboat: object = find_obj(`RBOAT`);
    let iboat: object = find_obj(`IBOAT`);
    let here: room = here;
    cond(/*(*/ [arg,false] /*)*/,
	  /*(*/ [prsact === board_X_words,
	   cond(/*(*/ [memq(find_obj(`STICK`), aobjs(winner)),
		  tell(`There is a hissing sound and the boat deflates.`),
		  remove_object(rboat),
		  insert_object(find_obj(`DBOAT`), here),
		  t] /*)*/)] /*)*/,
	  /*(*/ [prsact === disem_X_words,
	   (spname(rid(here))[`RIVR`] && jigs_up(`Unfortunately, that leaves you in the water, where you drown.`))] /*)*/,
	  /*(*/ [vname(prsact) === defla_X_words,
	   cond(/*(*/ [avehicle(winner) === rboat,
		  tell(`You can't deflate the boat while you're in it.`)] /*)*/,
		 /*(*/ [!memq(rboat,robjs(here)),
		  tell(`The boat must be on the ground to be deflated.`)] /*)*/,
		 /*(*/ [tell(`The boat deflates.`),
		  deflate_X_flag = t,
		  remove_object(rboat),
		  insert_object(iboat,here)] /*)*/)] /*)*/);
  }

export function iboat_function() {
    let prsact: verb = prsvec[1];
    let iboat: object = find_obj(`IBOAT`);
    let rboat: object = find_obj(`RBOAT`);
    let here: room = here;
    cond(/*(*/ [vname(prsact) === infla_X_words,
	   cond(/*(*/ [!memq(iboat,robjs(here)),
		  tell(`The boat must be on the ground to be inflated.`)] /*)*/,
		 /*(*/ [memq(find_obj(`PUMP`), aobjs(winner)),
		  tell(`The boat inflates and appears seaworthy.`),
		  deflate_X_flag = false,
		  remove_object(iboat),
	    	  insert_object(rboat,here)] /*)*/,
		 /*(*/ [tell(`I don't think you have enough lung-power to inflate this boat.`)] /*)*/)] /*)*/);
  }

export function over_falls() {
    cond(/*(*/ [prsvec[1] === look_X_words] /*)*/,
	  /*(*/ [jigs_up(`Oh dear, you seem to have gone over Aragain Falls.  Not a very smart
thing to do, apparently.`)] /*)*/);
  }

buoy_flag_X_flag = t

export function shake() {
    let prsobj: object = prsvec[2];
    let here: room = here;
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [(!oopen_Q(prsobj) && !empty_Q(ocontents(prsobj)) && tell(`It sounds like there is something inside the `, 1, odesc2(prsobj), `.`))] /*)*/,
	  /*(*/ [(oopen_Q(prsobj) && !empty_Q(ocontents(prsobj))),
	   mapf(false,
		 function(x: object) {
            x[ocan] = false;
insert_object(x,here);
          },
		 ocontents(prsobj)),
	   prsobj[ocontents] = /*(*/ [] /*)*/,
	   tell(`All of the objects spill onto the floor.`)] /*)*/);
  }

export function rivr4_room() {
    (memq(find_obj(`BUOY`), aobjs(winner)) && buoy_flag_X_flag && tell(`Something seems funny about the feel of the buoy.`) && buoy_flag_X_flag = false);
  } 

export function beach_room() {
    let prsact: verb = prsvec[1];
    let shov: object = find_obj(`SHOVE`);
    let here: room = here;
    let cnt: number = null;
    cond(/*(*/ [(vname(prsact) === dig_X_words && shov === prsvec[2]),
	   here[rvars] = cnt = _(1, rvars(here)),
	   cond(/*(*/ [cnt > 4,
		  here[rvars] = 0,
		  jigs_up(`The hole collapses, smothering you.`)] /*)*/,
		 /*(*/ [cnt === 4,
		  tell(`You can see a small statue here in the sand.`),
		  tro(find_obj(`STATU`), ovison),
		  here[rvars] = cnt] /*)*/,
		 /*(*/ [cnt < 0] /*)*/,
		 /*(*/ [tell(bdigs[cnt])] /*)*/)] /*)*/);
  }

export function tcave_room() {
    let prsact: verb = prsvec[1];
    let shov: object = find_obj(`SHOVE`);
    let here: room = here;
    let cnt: number = null;
    cond(/*(*/ [(vname(prsact) === dig_X_words && prsvec[2] === shov),
	   cond(/*(*/ [memq(find_obj(`GUANO`), robjs(here)),
		  here[rvars] = cnt = _(1, rvars(here)),
		  cond(/*(*/ [cnt > 3,
		  	 tell(`This is getting you nowhere.`)] /*)*/,
		 	/*(*/ [tell(cdigs[cnt])] /*)*/)] /*)*/,
		 /*(*/ [tell(`There's nothing to dig into here.`)] /*)*/)] /*)*/);
  }
	   
psetg(cdigs,
   () => /*[*/ [`You are digging into a pile of bat guano.`,
     `You seem to be getting knee deep in guano.`,
     `You are covered with bat turds, cretin.`] /*]*/)

psetg(bdigs,
   () => /*[*/ [`You seem to be digging a hole here.`,
     `The hole is getting deeper, but that's about it.`,
     `You are surrounded by a wall of sand on all sides.`] /*]*/)
export let bdigs: vector(/*[*/ [rest, string] /*]*/);export let cdigs: vector(/*[*/ [rest, string] /*]*/);

export function geronimo() {
    cond(/*(*/ [here === find_room(`BARRE`),
	   jigs_up(`I didn't think you would REALLY try to go over the falls in a
barrel. It seems that some 450 feet below, you were met by a number
of  unfriendly rocks and boulders, causing your immediate demise.  Is
this what 'over a barrel' means?`)] /*)*/,
	  /*(*/ [tell(`Wasn't he an Indian?`)] /*)*/);
  }

psetg(swimyuks,
   () => /*[*/ [`I don't really see how.`,
     `I think that swimming is best performed in water.`,
     `Perhaps it is your head that is swimming.`] /*]*/)
export let swimyuks: vector(/*[*/ [rest, string] /*]*/);

export function swimmer() {
    let swimyuks: vector(/*[*/ [rest, string] /*]*/) = swimyuks;
    cond(/*(*/ [rtrnn(here,rfillbit),
	   tell(`Swimming is not allowed in this dungeon.`)] /*)*/,
	  /*(*/ [tell(pick_one(swimyuks))] /*)*/);
  }


export function grue_function() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === exami_X_words,
	   tell(`The grue is a sinister, lurking presence in the dark places of the
earth.  Its favorite diet is adventurers, but its insatiable
appetite is tempered by its fear of light.  No grue has ever been
seen by the light of day, and few have survived its fearsome jaws
to tell the tale.`)] /*)*/,
	  /*(*/ [prsa === find_X_words,
	   tell(`There is no grue here, but I'm sure there is at least one lurking
in the darkness nearby.  I wouldn't let my light go out if I were
you!`)] /*)*/);
  }

btie_X_flag = false

binf_X_flag = false

define(balloon, ballact, /*(*/ [`OPTIONAL`, /*(*/ [arg, false] /*)*/,
			 `AUX`, /*(*/ [prsvec, prsvec] /*)*/,
			       /*(*/ [ball, find_obj(`BALLO`)] /*)*/, /*(*/ [prsa, prsvec[1]] /*)*/,
			       /*(*/ [prso, prsvec[2]] /*)*/, /*(*/ [cont, find_obj(`RECEP`)] /*)*/, m,
			       /*(*/ [binf, binf_X_flag] /*)*/, blabe] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [arg] /*)*/, (atom || false), /*(*/ [blabe, ball, cont, recep] /*)*/, object, /*(*/ [prsa] /*)*/, verb,
	       /*(*/ [prso] /*)*/, (object || direction), /*(*/ [m] /*)*/, (false || primtype(vector)),
	       /*(*/ [prsvec] /*)*/, vector(/*[*/ [3, any] /*]*/), /*(*/ [binf] /*)*/, (false || room),
	       /*(*/ [m] /*)*/, (false || /*<*/ [primtype(vector), any, room] /*>*/)] /*)*/] /*2*/,
	cond(/*(*/ [arg === read_out,
	       cond(/*(*/ [prsa === look_X_words,
		      cond(/*(*/ [binf,
		    	     tell(`The cloth bag is inflated and there is a `,
			   	   1,
			  	   odesc2(binf),
			  	   ` burning in the receptacle.`)] /*)*/,
			    /*(*/ [tell(`The cloth bag is draped over the the basket.`)] /*)*/),
		      cond(/*(*/ [btie_X_flag,
			     tell(`The balloon is tied to the hook.`)] /*)*/)] /*)*/),    
	       return(false, ballact)] /*)*/),
	cond(/*(*/ [arg === read_in,
	       cond(/*(*/ [prsa === walk_X_words,
		      cond(/*(*/ [m = memq(chtype(prsvec[2], atom),
					rexits(here)),
			     cond(/*(*/ [btie_X_flag,
				    tell(`You are tied to the ledge.`),
				    return(t, ballact)] /*)*/,
				   /*(*/ [else,
				    (!rtrnn(m[2], rmungbit) && bloc = m[2]),
				    return(false, ballact)] /*)*/)] /*)*/,
			    /*(*/ [tell(`I'm afraid you can't control the balloon in this way.`),
			     return(t, ballact)] /*)*/)] /*)*/,
		     /*(*/ [(prsa === take_X_words && binf_X_flag === prso),
	       	      tell(`You don't really want to hold a burning `,
		     	    1,
		            odesc2(prso),
		            `.`),
		      return(t, ballact)] /*)*/,
		     /*(*/ [(prsa === put_X_words && prsvec[3] === cont && !empty_Q(ocontents(cont))),
		      tell(`The receptacle is already occupied.`),
		      return(t, ballact)] /*)*/,
		     /*(*/ [return(false, ballact)] /*)*/)] /*)*/),
	cond(/*(*/ [prsa === burn_X_words,
	       cond(/*(*/ [memq(prso,ocontents(cont)),
		      tell(`The `,
			    1,
			    odesc2(prso),
			    ` burns inside the receptacle.`),
		      burnup_int = clock_int(brnin,_(osize(prso), 20)),
		      tro(prso,flamebit),
		      trz(prso,_(takebit,readbit)),
		      prso[olight_Q] = 1,
		      cond(/*(*/ [binf_X_flag] /*)*/,
			    /*(*/ [tell(`The cloth bag inflates as it fills with hot air.`),
			     cond(/*(*/ [!blab_X_flag,
				    ball[ocontents] = /*(*/ [blabe = find_obj(`BLABE`),
					  _X,ocontents(ball)] /*)*/,
				    blabe[ocan] = ball] /*)*/),
			     blab_X_flag = t,
			     binf_X_flag = prso,
			     clock_int(bint,3)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [(prsa === disem_X_words && rtrnn(here,rlandbit)),
	       cond(/*(*/ [binf_X_flag,
		      clock_int(bint,3)] /*)*/),
	       false] /*)*/,
	      /*(*/ [prsa === c_int_X_words,
	       cond(/*(*/ [((oopen_Q(cont) && binf_X_flag) || spname(rid(here))[`LEDG`]),
		      rise_and_shine(ball,here)] /*)*/,
		     /*(*/ [decline_and_fall(ball,here)] /*)*/)] /*)*/))

blab_X_flag = false

export let burnup_int: cevent;export let bint: cevent;
export function rise_and_shine(ball: object, here: room) {
    let s: string = top(scrstr);
    let m: (false | string) = null;
    let in_Q: (atom | false) = avehicle(winner) === ball;
    let bl: room = bloc;
    let foo: cevent = null;
    clock_int(bint,3);
cond(/*(*/ [m = spname(rid(bl))[`VAIR`],
	       cond(/*(*/ [rest(m,4) == `4`,
		      clock_disable(burnup_int),
		      clock_disable(bint),
		      remove_object(ball),
		      insert_object(find_obj(`DBALL`), find_room(`VLBOT`)),
		      cond(/*(*/ [in_Q,
			     jigs_up(`Your balloon has hit the rim of the volcano, ripping the cloth and
causing you a 500 foot drop.  Did you get your flight insurance?`)] /*)*/,
			    /*(*/ [tell(`You hear a boom and notice that the balloon is falling to the ground.`)] /*)*/),
		      bloc = find_room(`VLBOT`)] /*)*/,
		     /*(*/ [substruc(spname(rid(bl)), 0, 4, s),
		      s[5] = chtype(_(chtype(m[5], fix), 1), character),
		      cond(/*(*/ [in_Q,
			     goto(bloc = find_room(s)),
			     tell(`The balloon ascends.`),
			     room_info(t)] /*)*/,
			    /*(*/ [put_balloon(ball,bl,s,`ascends.`)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [m = spname(rid(bl))[`LEDG`],
	       substruc(`VAIR`, 0, 4, s),
	       s[5] = m[5],
	       cond(/*(*/ [in_Q,
		      goto(bloc = find_room(s)),
		      tell(`The balloon leaves the ledge.`),
		      room_info(t)] /*)*/,
		     /*(*/ [clock_int(vlgin,10),
		      put_balloon(ball,bl,s,`floats away.  It seems to be ascending,
due to its light load.`)] /*)*/)] /*)*/,
	      /*(*/ [in_Q,
	       goto(bloc = find_room(`VAIR1`)),
	       tell(`The balloon rises slowly from the ground.`),
	       room_info(t)] /*)*/,
	      /*(*/ [put_balloon(ball,bl,`VAIR1`, `lifts off.`)] /*)*/);
  }

export function put_balloon(ball: object, here: room, there: string, str: string) {
    (spname(rid(here))[`LEDG`] && tell(`You watch as the balloon slowly `, 1, str));
remove_object(ball);
insert_object(ball,bloc = find_room(there));
  }

export let bloc: room;

export function decline_and_fall(ball: object, here: room) {
    let s: string = top(scrstr);
    let m: (false | string) = null;
    let bl: room = bloc;
    let in_Q: (atom | false) = avehicle(winner) === ball;
    let foo: cevent = null;
    clock_int(bint,3);
cond(/*(*/ [m = spname(rid(bl))[`VAIR`],
	   cond(/*(*/ [rest(m,4) == `1`,
		  cond(/*(*/ [in_Q,
			 goto(bloc = find_room(`VLBOT`)),
			 cond(/*(*/ [binf_X_flag,
				tell(`The balloon has landed.`),
				room_info(t)] /*)*/,
			       /*(*/ [t,
				remove_object(ball),
				insert_object(find_obj(`DBALL`), bloc),
				winner[avehicle] = false,
				clock_disable(foo = clock_int(bint,0)),
				tell(`You have landed, but the balloon did not survive.`)] /*)*/)] /*)*/,
			/*(*/ [put_balloon(ball,bl,`VLBOT`, `lands.`)] /*)*/)] /*)*/,
		 /*(*/ [substruc(spname(rid(bl)), 0, 4, s),
		  s[5] = chtype(_(chtype(m[5], fix), 1), character),
		  cond(/*(*/ [in_Q,
			 goto(bloc = find_room(s)),
			 tell(`The balloon descends.`),
			 room_info(t)] /*)*/,
			/*(*/ [put_balloon(ball,bl,s,`descends.`)] /*)*/)] /*)*/)] /*)*/);
  }

export function wire_function() {
    let pv: vector = prsvec;
    let prsa: verb = pv[1];
    let prso: prsobj = pv[2];
    let prsi: prsobj = pv[3];
    let bint: cevent = bint;
    cond(/*(*/ [prsa === tie_X_words,
	       cond(/*(*/ [(prso === find_obj(`BROPE`) && (prsi === find_obj(`HOOK1`) || prsi === find_obj(`HOOK2`))),
		      btie_X_flag = t,
		      clock_disable(bint),
		      tell(`The balloon is fastened to the hook.`)] /*)*/)] /*)*/,
	      /*(*/ [(prsa === untie_X_words && prso === find_obj(`BROPE`)),
	       cond(/*(*/ [btie_X_flag,
		      clock_enable(bint = clock_int(bint,3)),
	       	      btie_X_flag = false,
	              tell(`The wire falls off of the hook.`)] /*)*/,
		     /*(*/ [tell(`The wire is not tied to anything.`)] /*)*/)] /*)*/);
  }

export function burnup() {
    let r: object = find_obj(`RECEP`);
    let obj: object = ocontents(r)[1];
    r[ocontents] = splice_out(obj,ocontents(r));
tell(`It seems that the `, 1, odesc2(obj), ` has burned out, and the cloth
bag starts to collapse.`);
binf_X_flag = false;
  }

safe_flag_X_flag = false

export function safe_room() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === look_X_words,
	   tell(`You are in a dusty old room which is virtually featureless, except
for an exit on the north side.`,
	         1,
		 cond(/*(*/ [!safe_flag_X_flag,
			`
Imbedded in the far wall, there is a rusty old box.  It appears that
the box is somewhat damaged, since an oblong hole has been chipped
out of the front of it.`] /*)*/,
		       /*(*/ [`
On the far wall is a rusty box, whose door has been blown off.`] /*)*/))] /*)*/);
  }

export function safe_function() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === take_X_words,
	       tell(`The box is imbedded in the wall.`)] /*)*/,
	      /*(*/ [prsa === open_X_words,
	       cond(/*(*/ [safe_flag_X_flag,tell(`The box has no door!`)] /*)*/,
		     /*(*/ [tell(`The box is rusted and will not open.`)] /*)*/)] /*)*/,
	      /*(*/ [prsa === close_X_words,
	       cond(/*(*/ [safe_flag_X_flag,tell(`The box has no door!`)] /*)*/,
		     /*(*/ [tell(`The box is not open, chomper!`)] /*)*/)] /*)*/,
	      /*(*/ [prsa === blast_X_words, tell(`What do you expect, BOOM?`)] /*)*/);
  }

psetg(brick_boom, 
`Now you've done it.  It seems that the brick has other properties
than weight, namely the ability to blow you to smithereens.`)

export function brick_function() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === burn_X_words, jigs_up(brick_boom)] /*)*/);
  }

export function fuse_function() {
    let prsa: verb = prsvec[1];
    let fuse: object = find_obj(`FUSE`);
    let brick: object = find_obj(`BRICK`);
    let brick_room: (room | false) = null;
    let oc: (object | false) = null;
    cond(/*(*/ [prsa === burn_X_words,
	       tell(`The wire starts to burn.`),
	       fuse[orand] = /*[*/ [0, clock_int(fusin,2)] /*]*/] /*)*/,
	      /*(*/ [prsa === c_int_X_words,
	       trz(fuse,ovison),
	       cond(/*(*/ [ocan(fuse) === brick,
		      trz(brick,ovison),
		      cond(/*(*/ [oc = ocan(brick),
			     brick_room = oroom(oc)] /*)*/,
			    /*(*/ [brick_room = oroom(brick)] /*)*/),
		      (brick_room || brick_room = here),
		      cond(/*(*/ [brick_room === here,
			     mung_room(brick_room,
				`The way is blocked by debris from an explosion.`),
			     jigs_up(brick_boom)] /*)*/,
			    /*(*/ [brick_room === find_room(`SAFE`),
			     clock_int(safin,5),
			     munged_room = oroom(brick),
			     tell(`There is an explosion nearby.`),
			     cond(/*(*/ [memq(brick,ocontents(find_obj(`SSLOT`))),
				    trz(find_obj(`SSLOT`), ovison),
				    find_obj(`SAFE`)[oopen_Q] = t,
				    safe_flag_X_flag = t] /*)*/)] /*)*/,
			    /*(*/ [tell(`There is an explosion nearby.`),
			     clock_int(safin,5),
			     munged_room = brick_room,
			     mapf(false,
				   function(x) {
                    cond(/*(*/ [can_take_Q(x),
					    trz(x,ovison)] /*)*/);
                  },
				   robjs(brick_room)),
			     cond(/*(*/ [brick_room === find_room(`LROOM`),
				    mapf(false,
					  function(x: object) {
                        x[ocan] = false;
                      },
					  ocontents(find_obj(`TCASE`))),
				    find_obj(`TCASE`)[ocontents] = /*(*/ [] /*)*/] /*)*/)] /*)*/)] /*)*/,
		     /*(*/ [(!oroom(fuse) || here === oroom(fuse)),
		      tell(`The wire rapidly burns into nothingness.`)] /*)*/)] /*)*/);
  }

export function safe_mung() {
    let rm: room = munged_room;
    cond(/*(*/ [here === rm,
	       jigs_up(cond(/*(*/ [rtrnn(rm,rhousebit),
`The house shakes, and the ceiling of the room you're in collapses,
turning you into a pancake.`] /*)*/, 
/*(*/ [`The room trembles and 50,000 pounds of rock fall on you, turning you
into a pancake.`] /*)*/))] /*)*/,
	      /*(*/ [tell(`You may recall your recent explosion.  Well, probably as a result of
that, you hear an ominous rumbling, as if one of the rooms in the
dungeon had collapsed.`),
	       (rm === find_room(`SAFE`) && clock_int(ledin,8))] /*)*/);
mung_room((oroom(find_obj(`BRICK`)) || here),
		   `The way is blocked by debris from an explosion.`);
  }

export function ledge_mung() {
    let rm: room = find_room(`LEDG4`);
    cond(/*(*/ [here === rm,
	   cond(/*(*/ [avehicle(winner),
		  cond(/*(*/ [btie_X_flag,
			 rm = find_room(`VLBOT`),
			 bloc = rm,
			 remove_object(find_obj(`BALLO`)),
			 insert_object(find_obj(`DBALL`), rm),
			 btie_X_flag = false,
			 binf_X_flag = false,
			 clock_disable(bint),
			 clock_disable(brnin),
			 jigs_up(`The ledge collapses, probably as a result of the explosion.  A large
chunk of it, which is attached to the hook, drags you down to the
ground.  Fatally.`)] /*)*/,
			/*(*/ [tell(`The ledge collapses, leaving you with no place to land.`)] /*)*/)] /*)*/,
		 /*(*/ [t,
		  jigs_up(`The force of the explosion has caused the ledge to collapse
belatedly.`)] /*)*/)] /*)*/,
	  /*(*/ [tell(`The ledge collapses, giving you a narrow escape.`)] /*)*/);
mung_room(rm,`The ledge has collapsed and cannot be landed on.`);
  }

export function ledge_function() {
    let prsa: verb = prsvec[1];
    cond(/*(*/ [prsa === walk_in_X_words,
	   (safe_flag_X_flag && tell(`Behind you, the walls of the safe room collapse into rubble.`) && safe_flag_X_flag = false)] /*)*/,
	  /*(*/ [prsa === look_X_words,
	   tell(`You are on a wide ledge high into the volcano.  The rim of the
volcano is about 200 feet above and there is a precipitous drop below
to the bottom.`, 1,
		cond(/*(*/ [rtrnn(find_room(`SAFE`), rmungbit),
		       ` The way to the south is blocked by rubble.`] /*)*/,
		      /*(*/ [` There is a small door to the south.`] /*)*/))] /*)*/);
  }

export function blast() {
    cond(/*(*/ [here === find_room(`SAFE`)] /*)*/,
	  /*(*/ [tell(`I don't really know how to do that.`)] /*)*/);
  }

export function volgnome() {
    cond(/*(*/ [spname(rid(here))[`LEDG`],
	   tell(`A volcano gnome seems to walk straight out of the wall and says
'I have a very busy appointment schedule and little time to waste on
tresspassers, but for a small fee, I'll show you the way out.'  You
notice the gnome nervously glancing at his watch.`),
	   insert_object(find_obj(`GNOME`), here)] /*)*/,
	  /*(*/ [clock_int(vlgin,1)] /*)*/);
  }

gnome_door_X_flag = gnome_flag_X_flag = false

export function gnome_function() {
    let pv: vector = prsvec;
    let prsa: verb = pv[1];
    let prso: prsobj = pv[2];
    cond(/*(*/ [((prsa === give_X_words || prsa === throw_X_words) && type_Q(prso,object) && cond(/*(*/ [otval(prso) !== 0,
		       tell(`Thank you very much for the `, 1, odesc2(prso), `.  I don't believe 
I've ever seen one as beautiful. 'Follow me', he says, and a door 
appears on the west end of the ledge.  Through the door, you can see
a narrow chimney sloping steeply downward.`),
		       gnome_door_X_flag = t] /*)*/,
		      /*(*/ [tell(`'That wasn't quite what I had in mind', he says, crunching the
`, 1, odesc2(prso), ` in his rock-hard hands.`),
		       remove_object(prso)] /*)*/))] /*)*/,
	  /*(*/ [prsa === c_int_X_words,
	   tell(`The gnome glances at his watch.  'Oops.  I'm late for an
appointment!' He disappears, leaving you alone on the ledge.`),
	   remove_object(find_obj(`GNOME`))] /*)*/,
	  /*(*/ [tell(`The gnome appears increasingly nervous.`),
	   (gnome_flag_X_flag || clock_int(gnoin,5)),
	   gnome_flag_X_flag = t] /*)*/);
  }