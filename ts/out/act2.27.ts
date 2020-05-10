export function boom_room() {
    let dummy_Q: (atom | false) = false;
    let prsact: verb = G_prsvec[1];
    let win: adv = G_winner;
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
    let prsact: verb = G_prsvec[1];
    cond(/*(*/ [(vname(prsact) === walk_in_X_words && !memq(find_obj(`GARLI`), aobjs(G_winner))),
	   fly_me()] /*)*/,
	  /*(*/ [prsact === G_look_X_words,
	   tell(`You are in a small room which has only one door, to the east.`),
	   (memq(find_obj(`GARLI`), aobjs(G_winner)) && tell(`In the corner of the room on the ceiling is a large vampire bat who
is obviously deranged and holding his nose.`))] /*)*/);
  }

export function fly_me() {
    let bat_drops: vector(/*[*/ [rest, string] /*]*/) = G_bat_drops;
    unwind(prog(/*(*/ [] /*)*/,
	      fweep(4, 1),
	      tell(`A deranged giant vampire bat (a reject from WUMPUS) swoops down
from his belfry and lifts you away....`),
	      goto(find_room(pick_one(bat_drops)))),
	goto(find_room(pick_one(bat_drops))));
G_prsvec[2] = false;
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
export let G_bat_drops: vector(/*[*/ [rest, string] /*]*/);

G_cage_top_X_flag = t

export function dumbwaiter() {
    let prsact: verb = G_prsvec[1];
    let tb: object = find_obj(`TBASK`);
    let top: room = find_room(`TSHAF`);
    let bot: room = find_room(`BSHAF`);
    let fb: object = find_obj(`FBASK`);
    let ct: verb = G_cage_top_X_flag;
    let here: room = G_here;
    let dummy: vector(/*[*/ [rest, string] /*]*/) = G_dummy;
    cond(/*(*/ [prsact === G_raise_X_words,
	   cond(/*(*/ [ct,
		  tell(pick_one(G_dummy))] /*)*/,
		 /*(*/ [remove_object(tb),
		  remove_object(fb),
		  insert_object(tb,top),
		  insert_object(fb,bot),
		  tell(`The basket is raised to the top of the shaft.`),
		  G_cage_top_X_flag = t] /*)*/)] /*)*/,
	  /*(*/ [prsact === G_lower_X_words,
	   cond(/*(*/ [!ct,
		  tell(pick_one(dummy))] /*)*/,
		 /*(*/ [remove_object(tb),
		  remove_object(fb),
		  insert_object(tb,bot),
		  insert_object(fb,top),
		  tell(`The basket is lowered to the bottom of the shaft.`),
		  G_cage_top_X_flag = false,
		  t] /*)*/)] /*)*/,
	  /*(*/ [prsact === G_take_X_words,
	   cond(/*(*/ [((ct && here === top) || (!ct && here === bot)),
		  tell(`The cage is securely fastened to the iron chain.`)] /*)*/,
		 /*(*/ [tell(`I can't see that here.`)] /*)*/)] /*)*/);
  }

export function machine_room() {
    let prsact: verb = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
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
    let dummy: vector(/*[*/ [rest, string] /*]*/) = G_dummy;
    let prsact: verb = G_prsvec[1];
    let mach: object = find_obj(`MACHI`);
    cond(/*(*/ [G_here === find_room(`MACHI`),
     cond(/*(*/ [vname(prsact) === open_X_words,
       cond(/*(*/ [oopen_Q(mach),
	      tell(pick_one(dummy))] /*)*/,
	     /*(*/ [tell(`The lid opens.`),
	      mach[G_oopen_Q] = t] /*)*/)] /*)*/,
      /*(*/ [vname(prsact) === close_X_words,
       cond(/*(*/ [oopen_Q(mach),
	      tell(`The lid closes.`),
	      mach[G_oopen_Q] = false,
	      t] /*)*/,
	     /*(*/ [tell(pick_one(dummy))] /*)*/)] /*)*/,
      /*(*/ [prsact === G_take_X_words] /*)*/)] /*)*/);
  }

export function mswitch_function() {
    let prsact: verb = G_prsvec[1];
    let c: verb = find_obj(`COAL`);
    let imp: object = G_prsvec[3];
    let d: object = null;
    let mach: object = find_obj(`MACHI`);
    let screw: object = find_obj(`SCREW`);
    cond(/*(*/ [prsact === G_turn_X_words,
	   cond(/*(*/ [imp === screw,
		  cond(/*(*/ [oopen_Q(mach),
			 tell(`The machine doesn't seem to want to do anything.`)] /*)*/,
			/*(*/ [tell(`The machine comes to life (figuratively) with a dazzling display of
colored lights and bizarre noises.  After a few moments, the
excitement abates.`),
		         cond(/*(*/ [memq(c,ocontents(mach)),
				mach[G_ocontents] = splice_out(c,ocontents(mach)),
				mach[G_ocontents] = /*(*/ [d = find_obj(`DIAMO`),
				      _X,ocontents(mach)] /*)*/,
				d[G_ocan] = mach] /*)*/,
			       /*(*/ [!empty_Q(ocontents(mach)),
				mach[G_ocontents] = /*(*/ [d = find_obj(`GUNK`)] /*)*/] /*)*/,
			       /*(*/ [t] /*)*/)] /*)*/)] /*)*/,
		 /*(*/ [tell(`It seems that a `, 1, odesc2(imp), ` won't do.`)] /*)*/)] /*)*/);
  }

export function gunk_function() {
    let g: object = find_obj(`GUNK`);
    let m: (object | false) = ocan(g);
    cond(/*(*/ [m,
	 m[G_ocontents] = splice_out(g,ocontents(m)),
	 g[G_ocan] = false,
	 tell(`The slag turns out to be rather insubstantial, and crumbles into dust
at your touch.  It must not have been very valuable.`)] /*)*/);
  }

G_score_max = _(G_score_max,G_light_shaft = 10)

export function no_objs() {
    cond(/*(*/ [empty_Q(aobjs(G_winner)),
	   G_empty_handed_X_flag = t] /*)*/,
	  /*(*/ [G_empty_handed_X_flag = false] /*)*/);
cond(/*(*/ [(G_here === find_room(`BSHAF`) && lit_Q(G_here)),
	   score_upd(G_light_shaft),
	   G_light_shaft = 0] /*)*/);
  }
export let G_light_shaft: number;

export function cliff_function() {
    cond(/*(*/ [memq(find_obj(`RBOAT`), aobjs(G_winner)),
	   G_deflate_X_flag = false] /*)*/,
	  /*(*/ [G_deflate_X_flag = t] /*)*/);
  }

export function stick_function() {
    let prsact: verb = G_prsvec[1];
    cond(/*(*/ [vname(prsact) === wave_X_words,
	   cond(/*(*/ [(G_here === find_room(`FALLS`) || G_here === find_room(`POG`)),
		  cond(/*(*/ [!G_rainbow_X_flag,
			 tro(find_obj(`POT`), G_ovison),
			 tell(`Suddenly, the rainbow appears to become solid and, I venture,
walkable (I think the giveaway was the stairs and bannister).`),
			 G_rainbow_X_flag = t] /*)*/,
			/*(*/ [tell(`The rainbow seems to have become somewhat run-of-the-mill.`),
			 G_rainbow_X_flag = false] /*)*/)] /*)*/,
		 /*(*/ [G_here === find_room(`RAINB`),
		  G_rainbow_X_flag = false,
		  jigs_up(`The structural integrity of the rainbow seems to have left it,
leaving you about 450 feet in the air, supported by water vapor.`)] /*)*/,
		 /*(*/ [tell(`Very good.`)] /*)*/)] /*)*/);
  }

export function falls_room() {
    let prsact: verb = G_prsvec[1];
    cond(/*(*/ [prsact === G_look_X_words,
	   tell(`You are at the top of Aragain Falls, an enormous waterfall with a
drop of about 450 feet.  The only path here is on the north end.
There is a man-sized barrel here which you could fit into.`),
	   cond(/*(*/ [G_rainbow_X_flag,
		  tell(`A solid rainbow spans the falls.`)] /*)*/,
		 /*(*/ [tell(`A beautiful rainbow can be seen over the falls and to the east.`)] /*)*/)] /*)*/);
  }

export function digger() {
    let prso: object = G_prsvec[2];
    cond(/*(*/ [prso === find_obj(`SHOVE`)] /*)*/,
	  /*(*/ [trnn(prso,G_toolbit),
	   tell(`Digging with the `, 1, odesc2(prso), ` is slow and tedious.`)] /*)*/,
	  /*(*/ [tell(`Digging with a `, 1, odesc2(prso), ` is silly.`)] /*)*/);
  }

export function dboat_function() {
    let prsact: verb = G_prsvec[1];
    let here: room = G_here;
    let prsi: (false | object) = G_prsvec[3];
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
    let prsact: verb = G_prsvec[1];
    let rboat: object = find_obj(`RBOAT`);
    let iboat: object = find_obj(`IBOAT`);
    let here: room = G_here;
    cond(/*(*/ [arg,false] /*)*/,
	  /*(*/ [prsact === G_board_X_words,
	   cond(/*(*/ [memq(find_obj(`STICK`), aobjs(G_winner)),
		  tell(`There is a hissing sound and the boat deflates.`),
		  remove_object(rboat),
		  insert_object(find_obj(`DBOAT`), here),
		  t] /*)*/)] /*)*/,
	  /*(*/ [prsact === G_disem_X_words,
	   (spname(rid(here))[`RIVR`] && jigs_up(`Unfortunately, that leaves you in the water, where you drown.`))] /*)*/,
	  /*(*/ [vname(prsact) === defla_X_words,
	   cond(/*(*/ [avehicle(G_winner) === rboat,
		  tell(`You can't deflate the boat while you're in it.`)] /*)*/,
		 /*(*/ [!memq(rboat,robjs(here)),
		  tell(`The boat must be on the ground to be deflated.`)] /*)*/,
		 /*(*/ [tell(`The boat deflates.`),
		  G_deflate_X_flag = t,
		  remove_object(rboat),
		  insert_object(iboat,here)] /*)*/)] /*)*/);
  }

export function iboat_function() {
    let prsact: verb = G_prsvec[1];
    let iboat: object = find_obj(`IBOAT`);
    let rboat: object = find_obj(`RBOAT`);
    let here: room = G_here;
    cond(/*(*/ [vname(prsact) === infla_X_words,
	   cond(/*(*/ [!memq(iboat,robjs(here)),
		  tell(`The boat must be on the ground to be inflated.`)] /*)*/,
		 /*(*/ [memq(find_obj(`PUMP`), aobjs(G_winner)),
		  tell(`The boat inflates and appears seaworthy.`),
		  G_deflate_X_flag = false,
		  remove_object(iboat),
	    	  insert_object(rboat,here)] /*)*/,
		 /*(*/ [tell(`I don't think you have enough lung-power to inflate this boat.`)] /*)*/)] /*)*/);
  }

export function over_falls() {
    cond(/*(*/ [G_prsvec[1] === G_look_X_words] /*)*/,
	  /*(*/ [jigs_up(`Oh dear, you seem to have gone over Aragain Falls.  Not a very smart
thing to do, apparently.`)] /*)*/);
  }

G_buoy_flag_X_flag = t

export function shake() {
    let prsobj: object = G_prsvec[2];
    let here: room = G_here;
    cond(/*(*/ [object_action()] /*)*/,
	  /*(*/ [(!oopen_Q(prsobj) && !empty_Q(ocontents(prsobj)) && tell(`It sounds like there is something inside the `, 1, odesc2(prsobj), `.`))] /*)*/,
	  /*(*/ [(oopen_Q(prsobj) && !empty_Q(ocontents(prsobj))),
	   mapf(false,
		 function(x: object) {
            x[G_ocan] = false;
insert_object(x,here);
          },
		 ocontents(prsobj)),
	   prsobj[G_ocontents] = /*(*/ [] /*)*/,
	   tell(`All of the objects spill onto the floor.`)] /*)*/);
  }

export function rivr4_room() {
    (memq(find_obj(`BUOY`), aobjs(G_winner)) && G_buoy_flag_X_flag && tell(`Something seems funny about the feel of the buoy.`) && G_buoy_flag_X_flag = false);
  } 

export function beach_room() {
    let prsact: verb = G_prsvec[1];
    let shov: object = find_obj(`SHOVE`);
    let here: room = G_here;
    let cnt: number = null;
    cond(/*(*/ [(vname(prsact) === dig_X_words && shov === G_prsvec[2]),
	   here[G_rvars] = cnt = _(1, rvars(here)),
	   cond(/*(*/ [cnt > 4,
		  here[G_rvars] = 0,
		  jigs_up(`The hole collapses, smothering you.`)] /*)*/,
		 /*(*/ [cnt === 4,
		  tell(`You can see a small statue here in the sand.`),
		  tro(find_obj(`STATU`), G_ovison),
		  here[G_rvars] = cnt] /*)*/,
		 /*(*/ [cnt < 0] /*)*/,
		 /*(*/ [tell(G_bdigs[cnt])] /*)*/)] /*)*/);
  }

export function tcave_room() {
    let prsact: verb = G_prsvec[1];
    let shov: object = find_obj(`SHOVE`);
    let here: room = G_here;
    let cnt: number = null;
    cond(/*(*/ [(vname(prsact) === dig_X_words && G_prsvec[2] === shov),
	   cond(/*(*/ [memq(find_obj(`GUANO`), robjs(here)),
		  here[G_rvars] = cnt = _(1, rvars(here)),
		  cond(/*(*/ [cnt > 3,
		  	 tell(`This is getting you nowhere.`)] /*)*/,
		 	/*(*/ [tell(G_cdigs[cnt])] /*)*/)] /*)*/,
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
export let G_bdigs: vector(/*[*/ [rest, string] /*]*/);export let G_cdigs: vector(/*[*/ [rest, string] /*]*/);

export function geronimo() {
    cond(/*(*/ [G_here === find_room(`BARRE`),
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
export let G_swimyuks: vector(/*[*/ [rest, string] /*]*/);

export function swimmer() {
    let swimyuks: vector(/*[*/ [rest, string] /*]*/) = G_swimyuks;
    cond(/*(*/ [rtrnn(G_here,G_rfillbit),
	   tell(`Swimming is not allowed in this dungeon.`)] /*)*/,
	  /*(*/ [tell(pick_one(swimyuks))] /*)*/);
  }


export function grue_function() {
    let prsa: verb = G_prsvec[1];
    cond(/*(*/ [prsa === G_exami_X_words,
	   tell(`The grue is a sinister, lurking presence in the dark places of the
earth.  Its favorite diet is adventurers, but its insatiable
appetite is tempered by its fear of light.  No grue has ever been
seen by the light of day, and few have survived its fearsome jaws
to tell the tale.`)] /*)*/,
	  /*(*/ [prsa === G_find_X_words,
	   tell(`There is no grue here, but I'm sure there is at least one lurking
in the darkness nearby.  I wouldn't let my light go out if I were
you!`)] /*)*/);
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
	cond(/*(*/ [arg === read_out,
	       cond(/*(*/ [prsa === G_look_X_words,
		      cond(/*(*/ [binf,
		    	     tell(`The cloth bag is inflated and there is a `,
			   	   1,
			  	   odesc2(binf),
			  	   ` burning in the receptacle.`)] /*)*/,
			    /*(*/ [tell(`The cloth bag is draped over the the basket.`)] /*)*/),
		      cond(/*(*/ [G_btie_X_flag,
			     tell(`The balloon is tied to the hook.`)] /*)*/)] /*)*/),    
	       return(false, ballact)] /*)*/),
	cond(/*(*/ [arg === read_in,
	       cond(/*(*/ [prsa === G_walk_X_words,
		      cond(/*(*/ [m = memq(chtype(prsvec[2], atom),
					rexits(G_here)),
			     cond(/*(*/ [G_btie_X_flag,
				    tell(`You are tied to the ledge.`),
				    return(t, ballact)] /*)*/,
				   /*(*/ [else,
				    (!rtrnn(m[2], G_rmungbit) && G_bloc = m[2]),
				    return(false, ballact)] /*)*/)] /*)*/,
			    /*(*/ [tell(`I'm afraid you can't control the balloon in this way.`),
			     return(t, ballact)] /*)*/)] /*)*/,
		     /*(*/ [(prsa === G_take_X_words && G_binf_X_flag === prso),
	       	      tell(`You don't really want to hold a burning `,
		     	    1,
		            odesc2(prso),
		            `.`),
		      return(t, ballact)] /*)*/,
		     /*(*/ [(prsa === G_put_X_words && prsvec[3] === cont && !empty_Q(ocontents(cont))),
		      tell(`The receptacle is already occupied.`),
		      return(t, ballact)] /*)*/,
		     /*(*/ [return(false, ballact)] /*)*/)] /*)*/),
	cond(/*(*/ [prsa === G_burn_X_words,
	       cond(/*(*/ [memq(prso,ocontents(cont)),
		      tell(`The `,
			    1,
			    odesc2(prso),
			    ` burns inside the receptacle.`),
		      G_burnup_int = clock_int(G_brnin,_(osize(prso), 20)),
		      tro(prso,G_flamebit),
		      trz(prso,_(G_takebit,G_readbit)),
		      prso[G_olight_Q] = 1,
		      cond(/*(*/ [G_binf_X_flag] /*)*/,
			    /*(*/ [tell(`The cloth bag inflates as it fills with hot air.`),
			     cond(/*(*/ [!G_blab_X_flag,
				    ball[G_ocontents] = /*(*/ [blabe = find_obj(`BLABE`),
					  _X,ocontents(ball)] /*)*/,
				    blabe[G_ocan] = ball] /*)*/),
			     G_blab_X_flag = t,
			     G_binf_X_flag = prso,
			     clock_int(G_bint,3)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [(prsa === G_disem_X_words && rtrnn(G_here,G_rlandbit)),
	       cond(/*(*/ [G_binf_X_flag,
		      clock_int(G_bint,3)] /*)*/),
	       false] /*)*/,
	      /*(*/ [prsa === G_c_int_X_words,
	       cond(/*(*/ [((oopen_Q(cont) && G_binf_X_flag) || spname(rid(G_here))[`LEDG`]),
		      rise_and_shine(ball,G_here)] /*)*/,
		     /*(*/ [decline_and_fall(ball,G_here)] /*)*/)] /*)*/))

G_blab_X_flag = false

export let G_burnup_int: cevent;export let G_bint: cevent;
export function rise_and_shine(ball: object, here: room) {
    let s: string = top(G_scrstr);
    let m: (false | string) = null;
    let in_Q: (atom | false) = avehicle(G_winner) === ball;
    let bl: room = G_bloc;
    let foo: cevent = null;
    clock_int(G_bint,3);
cond(/*(*/ [m = spname(rid(bl))[`VAIR`],
	       cond(/*(*/ [rest(m,4) == `4`,
		      clock_disable(G_burnup_int),
		      clock_disable(G_bint),
		      remove_object(ball),
		      insert_object(find_obj(`DBALL`), find_room(`VLBOT`)),
		      cond(/*(*/ [in_Q,
			     jigs_up(`Your balloon has hit the rim of the volcano, ripping the cloth and
causing you a 500 foot drop.  Did you get your flight insurance?`)] /*)*/,
			    /*(*/ [tell(`You hear a boom and notice that the balloon is falling to the ground.`)] /*)*/),
		      G_bloc = find_room(`VLBOT`)] /*)*/,
		     /*(*/ [substruc(spname(rid(bl)), 0, 4, s),
		      s[5] = chtype(_(chtype(m[5], fix), 1), character),
		      cond(/*(*/ [in_Q,
			     goto(G_bloc = find_room(s)),
			     tell(`The balloon ascends.`),
			     room_info(t)] /*)*/,
			    /*(*/ [put_balloon(ball,bl,s,`ascends.`)] /*)*/)] /*)*/)] /*)*/,
	      /*(*/ [m = spname(rid(bl))[`LEDG`],
	       substruc(`VAIR`, 0, 4, s),
	       s[5] = m[5],
	       cond(/*(*/ [in_Q,
		      goto(G_bloc = find_room(s)),
		      tell(`The balloon leaves the ledge.`),
		      room_info(t)] /*)*/,
		     /*(*/ [clock_int(G_vlgin,10),
		      put_balloon(ball,bl,s,`floats away.  It seems to be ascending,
due to its light load.`)] /*)*/)] /*)*/,
	      /*(*/ [in_Q,
	       goto(G_bloc = find_room(`VAIR1`)),
	       tell(`The balloon rises slowly from the ground.`),
	       room_info(t)] /*)*/,
	      /*(*/ [put_balloon(ball,bl,`VAIR1`, `lifts off.`)] /*)*/);
  }

export function put_balloon(ball: object, here: room, there: string, str: string) {
    (spname(rid(G_here))[`LEDG`] && tell(`You watch as the balloon slowly `, 1, str));
remove_object(ball);
insert_object(ball,G_bloc = find_room(there));
  }

export let G_bloc: room;

export function decline_and_fall(ball: object, here: room) {
    let s: string = top(G_scrstr);
    let m: (false | string) = null;
    let bl: room = G_bloc;
    let in_Q: (atom | false) = avehicle(G_winner) === ball;
    let foo: cevent = null;
    clock_int(G_bint,3);
cond(/*(*/ [m = spname(rid(bl))[`VAIR`],
	   cond(/*(*/ [rest(m,4) == `1`,
		  cond(/*(*/ [in_Q,
			 goto(G_bloc = find_room(`VLBOT`)),
			 cond(/*(*/ [G_binf_X_flag,
				tell(`The balloon has landed.`),
				room_info(t)] /*)*/,
			       /*(*/ [t,
				remove_object(ball),
				insert_object(find_obj(`DBALL`), G_bloc),
				G_winner[G_avehicle] = false,
				clock_disable(foo = clock_int(G_bint,0)),
				tell(`You have landed, but the balloon did not survive.`)] /*)*/)] /*)*/,
			/*(*/ [put_balloon(ball,bl,`VLBOT`, `lands.`)] /*)*/)] /*)*/,
		 /*(*/ [substruc(spname(rid(bl)), 0, 4, s),
		  s[5] = chtype(_(chtype(m[5], fix), 1), character),
		  cond(/*(*/ [in_Q,
			 goto(G_bloc = find_room(s)),
			 tell(`The balloon descends.`),
			 room_info(t)] /*)*/,
			/*(*/ [put_balloon(ball,bl,s,`descends.`)] /*)*/)] /*)*/)] /*)*/);
  }

export function wire_function() {
    let pv: vector = G_prsvec;
    let prsa: verb = pv[1];
    let prso: prsobj = pv[2];
    let prsi: prsobj = pv[3];
    let bint: cevent = G_bint;
    cond(/*(*/ [prsa === G_tie_X_words,
	       cond(/*(*/ [(prso === find_obj(`BROPE`) && (prsi === find_obj(`HOOK1`) || prsi === find_obj(`HOOK2`))),
		      G_btie_X_flag = t,
		      clock_disable(bint),
		      tell(`The balloon is fastened to the hook.`)] /*)*/)] /*)*/,
	      /*(*/ [(prsa === G_untie_X_words && prso === find_obj(`BROPE`)),
	       cond(/*(*/ [G_btie_X_flag,
		      clock_enable(bint = clock_int(G_bint,3)),
	       	      G_btie_X_flag = false,
	              tell(`The wire falls off of the hook.`)] /*)*/,
		     /*(*/ [tell(`The wire is not tied to anything.`)] /*)*/)] /*)*/);
  }

export function burnup() {
    let r: object = find_obj(`RECEP`);
    let obj: object = ocontents(r)[1];
    r[G_ocontents] = splice_out(obj,ocontents(r));
tell(`It seems that the `, 1, odesc2(obj), ` has burned out, and the cloth
bag starts to collapse.`);
G_binf_X_flag = false;
  }

G_safe_flag_X_flag = false

export function safe_room() {
    let prsa: verb = G_prsvec[1];
    cond(/*(*/ [prsa === G_look_X_words,
	   tell(`You are in a dusty old room which is virtually featureless, except
for an exit on the north side.`,
	         1,
		 cond(/*(*/ [!G_safe_flag_X_flag,
			`
Imbedded in the far wall, there is a rusty old box.  It appears that
the box is somewhat damaged, since an oblong hole has been chipped
out of the front of it.`] /*)*/,
		       /*(*/ [`
On the far wall is a rusty box, whose door has been blown off.`] /*)*/))] /*)*/);
  }

export function safe_function() {
    let prsa: verb = G_prsvec[1];
    cond(/*(*/ [prsa === G_take_X_words,
	       tell(`The box is imbedded in the wall.`)] /*)*/,
	      /*(*/ [prsa === G_open_X_words,
	       cond(/*(*/ [G_safe_flag_X_flag,tell(`The box has no door!`)] /*)*/,
		     /*(*/ [tell(`The box is rusted and will not open.`)] /*)*/)] /*)*/,
	      /*(*/ [prsa === G_close_X_words,
	       cond(/*(*/ [G_safe_flag_X_flag,tell(`The box has no door!`)] /*)*/,
		     /*(*/ [tell(`The box is not open, chomper!`)] /*)*/)] /*)*/,
	      /*(*/ [prsa === G_blast_X_words, tell(`What do you expect, BOOM?`)] /*)*/);
  }

psetg(brick_boom, 
`Now you've done it.  It seems that the brick has other properties
than weight, namely the ability to blow you to smithereens.`)

export function brick_function() {
    let prsa: verb = G_prsvec[1];
    cond(/*(*/ [prsa === G_burn_X_words, jigs_up(G_brick_boom)] /*)*/);
  }

export function fuse_function() {
    let prsa: verb = G_prsvec[1];
    let fuse: object = find_obj(`FUSE`);
    let brick: object = find_obj(`BRICK`);
    let brick_room: (room | false) = null;
    let oc: (object | false) = null;
    cond(/*(*/ [prsa === G_burn_X_words,
	       tell(`The wire starts to burn.`),
	       fuse[G_orand] = /*[*/ [0, clock_int(G_fusin,2)] /*]*/] /*)*/,
	      /*(*/ [prsa === G_c_int_X_words,
	       trz(fuse,G_ovison),
	       cond(/*(*/ [ocan(fuse) === brick,
		      trz(brick,G_ovison),
		      cond(/*(*/ [oc = ocan(brick),
			     brick_room = oroom(oc)] /*)*/,
			    /*(*/ [brick_room = oroom(brick)] /*)*/),
		      (brick_room || brick_room = G_here),
		      cond(/*(*/ [brick_room === G_here,
			     mung_room(brick_room,
				`The way is blocked by debris from an explosion.`),
			     jigs_up(G_brick_boom)] /*)*/,
			    /*(*/ [brick_room === find_room(`SAFE`),
			     clock_int(G_safin,5),
			     G_munged_room = oroom(brick),
			     tell(`There is an explosion nearby.`),
			     cond(/*(*/ [memq(brick,ocontents(find_obj(`SSLOT`))),
				    trz(find_obj(`SSLOT`), G_ovison),
				    find_obj(`SAFE`)[G_oopen_Q] = t,
				    G_safe_flag_X_flag = t] /*)*/)] /*)*/,
			    /*(*/ [tell(`There is an explosion nearby.`),
			     clock_int(G_safin,5),
			     G_munged_room = brick_room,
			     mapf(false,
				   function(x) {
                    cond(/*(*/ [can_take_Q(x),
					    trz(x,G_ovison)] /*)*/);
                  },
				   robjs(brick_room)),
			     cond(/*(*/ [brick_room === find_room(`LROOM`),
				    mapf(false,
					  function(x: object) {
                        x[G_ocan] = false;
                      },
					  ocontents(find_obj(`TCASE`))),
				    find_obj(`TCASE`)[G_ocontents] = /*(*/ [] /*)*/] /*)*/)] /*)*/)] /*)*/,
		     /*(*/ [(!oroom(fuse) || G_here === oroom(fuse)),
		      tell(`The wire rapidly burns into nothingness.`)] /*)*/)] /*)*/);
  }

export function safe_mung() {
    let rm: room = G_munged_room;
    cond(/*(*/ [G_here === rm,
	       jigs_up(cond(/*(*/ [rtrnn(rm,G_rhousebit),
`The house shakes, and the ceiling of the room you're in collapses,
turning you into a pancake.`] /*)*/, 
/*(*/ [`The room trembles and 50,000 pounds of rock fall on you, turning you
into a pancake.`] /*)*/))] /*)*/,
	      /*(*/ [tell(`You may recall your recent explosion.  Well, probably as a result of
that, you hear an ominous rumbling, as if one of the rooms in the
dungeon had collapsed.`),
	       (rm === find_room(`SAFE`) && clock_int(G_ledin,8))] /*)*/);
mung_room((oroom(find_obj(`BRICK`)) || G_here),
		   `The way is blocked by debris from an explosion.`);
  }

export function ledge_mung() {
    let rm: room = find_room(`LEDG4`);
    cond(/*(*/ [G_here === rm,
	   cond(/*(*/ [avehicle(G_winner),
		  cond(/*(*/ [G_btie_X_flag,
			 rm = find_room(`VLBOT`),
			 G_bloc = rm,
			 remove_object(find_obj(`BALLO`)),
			 insert_object(find_obj(`DBALL`), rm),
			 G_btie_X_flag = false,
			 G_binf_X_flag = false,
			 clock_disable(G_bint),
			 clock_disable(G_brnin),
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
    let prsa: verb = G_prsvec[1];
    cond(/*(*/ [prsa === G_walk_in_X_words,
	   (G_safe_flag_X_flag && tell(`Behind you, the walls of the safe room collapse into rubble.`) && G_safe_flag_X_flag = false)] /*)*/,
	  /*(*/ [prsa === G_look_X_words,
	   tell(`You are on a wide ledge high into the volcano.  The rim of the
volcano is about 200 feet above and there is a precipitous drop below
to the bottom.`, 1,
		cond(/*(*/ [rtrnn(find_room(`SAFE`), G_rmungbit),
		       ` The way to the south is blocked by rubble.`] /*)*/,
		      /*(*/ [` There is a small door to the south.`] /*)*/))] /*)*/);
  }

export function blast() {
    cond(/*(*/ [G_here === find_room(`SAFE`)] /*)*/,
	  /*(*/ [tell(`I don't really know how to do that.`)] /*)*/);
  }

export function volgnome() {
    cond(/*(*/ [spname(rid(G_here))[`LEDG`],
	   tell(`A volcano gnome seems to walk straight out of the wall and says
'I have a very busy appointment schedule and little time to waste on
tresspassers, but for a small fee, I'll show you the way out.'  You
notice the gnome nervously glancing at his watch.`),
	   insert_object(find_obj(`GNOME`), G_here)] /*)*/,
	  /*(*/ [clock_int(G_vlgin,1)] /*)*/);
  }

G_gnome_door_X_flag = G_gnome_flag_X_flag = false

export function gnome_function() {
    let pv: vector = G_prsvec;
    let prsa: verb = pv[1];
    let prso: prsobj = pv[2];
    cond(/*(*/ [((prsa === G_give_X_words || prsa === G_throw_X_words) && type_Q(prso,object) && cond(/*(*/ [otval(prso) !== 0,
		       tell(`Thank you very much for the `, 1, odesc2(prso), `.  I don't believe 
I've ever seen one as beautiful. 'Follow me', he says, and a door 
appears on the west end of the ledge.  Through the door, you can see
a narrow chimney sloping steeply downward.`),
		       G_gnome_door_X_flag = t] /*)*/,
		      /*(*/ [tell(`'That wasn't quite what I had in mind', he says, crunching the
`, 1, odesc2(prso), ` in his rock-hard hands.`),
		       remove_object(prso)] /*)*/))] /*)*/,
	  /*(*/ [prsa === G_c_int_X_words,
	   tell(`The gnome glances at his watch.  'Oops.  I'm late for an
appointment!' He disappears, leaving you alone on the ledge.`),
	   remove_object(find_obj(`GNOME`))] /*)*/,
	  /*(*/ [tell(`The gnome appears increasingly nervous.`),
	   (G_gnome_flag_X_flag || clock_int(G_gnoin,5)),
	   G_gnome_flag_X_flag = t] /*)*/);
  }