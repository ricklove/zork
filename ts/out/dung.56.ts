// VOCABULARY

// GLOBAL VARIABLES WHICH ARE ROOMS MUST BE HERE!

psetg(rmgvals, () => _X)

// GLOBAL VARIABLES WHICH ARE OBJECTS MUST BE HERE!

psetg(objgvals, () => _X)

// GLOBAL VARIABLES WHICH ARE MONADS MUST BE HERE!

psetg(mgvals,
      () => _X)

psetg(cntuse, `You can't use that!`)

bigfix = _(chtype(min(), fix), 2)

words = (words[oblist] || moblist(words, 23))

object_obl = (objects[oblist] || moblist(objects))

room_obl = (rooms[oblist] || moblist(rooms))

actors = /*(*/ [] /*)*/

stars = /*(*/ [] /*)*/

add_buzz(`BY`, `IS`, `ONE`, `IT`, `A`, `THE`, `AN`, `THIS`, `OVER`)

add_directions(`#!#!#`, `NORTH`, `SOUTH`, `EAST`, `WEST`, `LAUNC`, `LAND`,
	`SE`, `SW`, `NE`, `NW`, `UP`, `DOWN`, `ENTER`, `EXIT`, `CROSS`, `CLIMB`)

dsynonym(`NORTH`, `N`)
dsynonym(`SOUTH`, `S`)
dsynonym(`EAST`, `E`)
dsynonym(`WEST`, `W`)
dsynonym(`UP`, `U`)
dsynonym(`DOWN`, `D`)
dsynonym(`ENTER`, `IN`)
dsynonym(`EXIT`, `OUT`, `LEAVE`)
dsynonym(`CROSS`, `TRAVE`)

add_zork(prep, `WITH`, `AT`, `TO`, `IN`, `DOWN`, `UP`, `UNDER`)

synonym(`WITH`, `USING`, `THROU`)

synonym(`IN`, `INSID`, `INTO`)

rooms = /*(*/ [] /*)*/

objects = /*(*/ [] /*)*/


`CEVENT DEFINITIONS`
(lookup(`COMPILE`, root()) || cevent(0, cure_clock,false, `CURIN`))

(lookup(`COMPILE`, root()) || cevent(0, maint_room,t, `MNTIN`))

(lookup(`COMPILE`, root()) || cevent(0, lantern,t, `LNTIN`))

(lookup(`COMPILE`, root()) || cevent(0, match_function,t, matin))

(lookup(`COMPILE`, root()) || cevent(0, candles,t, `CNDIN`))

(lookup(`COMPILE`, root()) || cevent(0, balloon,t, `BINT`))

(lookup(`COMPILE`, root()) || cevent(0, burnup,t, `BRNIN`))

(lookup(`COMPILE`, root()) || cevent(0, fuse_function,t, `FUSIN`))

(lookup(`COMPILE`, root()) || cevent(0, ledge_mung,t, `LEDIN`))

(lookup(`COMPILE`, root()) || cevent(0, safe_mung,t, `SAFIN`))

(lookup(`COMPILE`, root()) || cevent(0, volgnome,t, `VLGIN`))

(lookup(`COMPILE`, root()) || cevent(0, gnome_function,t, `GNOIN`))

(lookup(`COMPILE`, root()) || cevent(0, bucket,t, `BCKIN`))

(lookup(`COMPILE`, root()) || cevent(0, sphere_function,t, `SPHIN`))


// KLUDGE

/*#*/ [object, /*{*/ [`#####`,
	 `You are here`, `cretin`, /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/] /*}*/] /*2*/ 

`MAZE`

psetg(forest, `Forest`)

psetg(current, /*#*/ [nexit, `You cannot go upstream due to strong currents.`] /*2*/)

/*#*/ [room, /*{*/ [`PASS1`,
`You are in a narrow east-west passageway.  There is a narrow stairway
leading down at the north end of the room.`,
       `East-West Passage`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `CAROU`, `WEST`, `MTROL`, `DOWN`, `RAVI1`, `NORTH`, `RAVI1`] /*}*/] /*2*/, 
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 5] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`WHOUS`,
`You are in an open field west of a big white house, with a boarded
front door.`,
       `West of House`,
       t,
       /*#*/ [exit, /*{*/ [`NORTH`, `NHOUS`, `SOUTH`, `SHOUS`, `WEST`, `FORE1`,
	      `EAST`, /*#*/ [nexit, `The door is locked, and there is evidently no key.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`FDOOR`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`MAILB`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`NHOUS`,
       `You are facing the north side of a white house.  There is no door here,
and all the windows are barred.`,
       `North of House`,
       t,
       /*#*/ [exit, /*{*/ [`WEST`, `WHOUS`, `EAST`, `EHOUS`, `NORTH`, `FORE3`,
	      `SOUTH`, /*#*/ [nexit, `The windows are all barred.`] /*2*/] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`SHOUS`,
`You are facing the south side of a white house. There is no door here,
and all the windows are barred.`,
       `South of House`,
       t,
       /*#*/ [exit, /*{*/ [`WEST`, `WHOUS`, `EAST`, `EHOUS`, `SOUTH`, `FORE2`,
	      `NORTH`, /*#*/ [nexit, `The windows are all barred.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`EHOUS`,
       ``,
       `Behind House`,
       t,
       /*#*/ [exit, /*{*/ [`NORTH`, `NHOUS`, `SOUTH`, `SHOUS`, `EAST`, `CLEAR`,
	      `WEST`, /*#*/ [cexit, /*{*/ [`KITCHEN-WINDOW`, `KITCH`] /*}*/] /*2*/,
	      `ENTER`, /*#*/ [cexit, /*{*/ [`KITCHEN-WINDOW`, `KITCH`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`WIND1`] /*}*/] /*2*/] /*)*/,
       east_house] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`KITCH`,
       ``,
       `Kitchen`,
       t,
       /*#*/ [exit, /*{*/ [`EAST`, /*#*/ [cexit, /*{*/ [`KITCHEN-WINDOW`, `EHOUS`] /*}*/] /*2*/, `WEST`, `LROOM`,
	      `EXIT`, /*#*/ [cexit, /*{*/ [`KITCHEN-WINDOW`, `EHOUS`] /*}*/] /*2*/, `UP`, `ATTIC`,
	      `DOWN`, /*#*/ [nexit, `Only Santa Claus climbs down chimneys.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`WIND2`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`SBAG`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BOTTL`] /*}*/] /*2*/] /*)*/,
       kitchen, 10] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`SBAG`,
	  `A sandwich bag is here.`,
	  `sandwich bag`,
	  `On the table is an elongated brown sack, smelling of hot peppers.`,
	  /*%*/ [false] /*1*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`GARLI`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`FOOD`] /*}*/] /*2*/] /*)*/,
	  /*%*/ [false] /*1*/, /*%*/ [_(contbit,flamebit,ovison,takebit)] /*1*/, 0, 0, 0, 3, 15] /*}*/] /*2*/,
/*[*/ [`BAG`, `SACK`, `BAGGI`] /*]*/, /*[*/ [`BROWN`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`GARLI`,
	  `There is a clove of garlic here.`,
	  `clove of garlic`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`SBAG`] /*}*/] /*2*/, /*%*/ [_(takebit,foodbit,ovison)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,
/*[*/ [`CLOVE`] /*]*/)


add_object(/*#*/ [object, /*{*/ [`FOOD`,
	  `A hot pepper sandwich is here.`,
	  `\.lunch`,
	  /*%*/ [false] /*1*/,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`SBAG`] /*}*/] /*2*/, /*%*/ [_(foodbit,takebit,ovison)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,
/*[*/ [`SANDW`, `LUNCH`, `PEPPE`, `DINNE`, `SNACK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`GUNK`,
	  `There is a small piece of vitreous slag here.`,
	  `piece of vitreous slag`,
	  /*%*/ [false] /*1*/, gunk_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,takebit,ovison)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,
/*[*/ [`MESS`, `SLAG`] /*]*/, /*[*/ [`VITRE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`COAL`,
	  `There is a small heap of coal here.`,
	  `small pile of coal`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,ovison)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,
/*[*/ [`HEAP`, `CHARC`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`JADE`,
	  `There is an exquisite jade figurine here.`,
	  `jade figurine`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 5, 5, 10, 0] /*}*/] /*2*/,
/*[*/ [`FIGUR`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`MACHI`,
	  ``,
	  `machine`,
	  /*%*/ [false] /*1*/, machine_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,50] /*}*/] /*2*/,
/*[*/ [`PDP10`, `DRYER`, `LID`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`DIAMO`,
	  `There is an enormous diamond (perfectly cut) here.`,
	  `huge diamond`,
	  /*%*/ [false] /*1*/,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 10, 6, 5, 0] /*}*/] /*2*/,
 /*[*/ [`PERFE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`TCASE`,
	  `There is a trophy case here.`,
	  `trophy case`,
	  /*%*/ [false] /*1*/, trophy_case, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,transbit,ovison)] /*1*/,
	  0, 0, 0, /*%*/ [bigfix] /*1*/,/*%*/ [bigfix] /*1*/] /*}*/] /*2*/,
 /*[*/ [`CASE`] /*]*/, /*[*/ [`TROPH`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BOTTL`,
	 `A clear glass bottle is here.`,
	 `glass bottle`,
	 `A bottle is sitting on the table.`,
	 bottle_function,
	 /*(*/ [/*#*/ [find_obj, /*{*/ [`WATER`] /*}*/] /*2*/] /*)*/,
	 /*%*/ [false] /*1*/,
	 /*%*/ [_(contbit,transbit,takebit,ovison)] /*1*/, 0, 0, 0, 5, 4] /*}*/] /*2*/,
/*[*/ [`CONTA`, `PITCH`] /*]*/, /*[*/ [`GLASS`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`WATER`,
	 `Water`,
	 `quantity of water`,
	 `There is some water here`,
	 water_function,
	 /*(*/ [] /*)*/,
	 /*#*/ [find_obj, /*{*/ [`BOTTL`] /*}*/] /*2*/,
	 /*%*/ [_(drinkbit,takebit,ovison)] /*1*/, 0, 0, 0, 4, 0] /*}*/] /*2*/,/*[*/ [`LIQUI`, `H2O`] /*]*/)

/*#*/ [room, /*{*/ [`ATTIC`,
`You are in the attic.  The only exit is stairs that lead down.`,
	`Attic`,
	/*%*/ [false] /*1*/,
	/*#*/ [exit, /*{*/ [`DOWN`, `KITCH`] /*}*/] /*2*/,
	/*(*/ [/*#*/ [find_obj, /*{*/ [`BRICK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ROPE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`KNIFE`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`ROPE`,
	  `There is a large coil of rope here.`,
	  `rope`,
	  `A large coil of rope is lying in the corner.`,
	  rope_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(tiebit,takebit,ovison)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,
/*[*/ [`HEMP`, `COIL`] /*]*/)


add_object(/*#*/ [object, /*{*/ [`KNIFE`,
	  `There is a nasty-looking knife lying here.`,
	  `knife`,
	  `On a table is a nasty-looking knife.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison,weaponbit)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,
/*[*/ [`BLADE`] /*]*/, /*[*/ [`NASTY`] /*]*/)

add_melee(find_obj(`KNIFE`), knife_melee)

/*#*/ [room, /*{*/ [`LROOM`,
       ``,
       `Living Room`,
       t,
       /*#*/ [exit, /*{*/ [`EAST`, `KITCH`,
	      `WEST`, /*#*/ [cexit, /*{*/ [`MAGIC-FLAG`, `BLROO`, `The door is nailed shut.`] /*}*/] /*2*/,
	      `DOWN`, /*#*/ [cexit, /*{*/ [`TRAP-DOOR`, `CELLA`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`WDOOR`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`DOOR`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`TCASE`] /*}*/] /*2*/, 
	/*#*/ [find_obj, /*{*/ [`LAMP`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`RUG`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`PAPER`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`SWORD`] /*}*/] /*2*/] /*)*/,
       living_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`SWORD`,
	  `There is an elvish sword here.`,
	  `sword`,
	  `On hooks above the mantelpiece hangs an elvish sword of great
antiquity.`, sword, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit,weaponbit)] /*1*/, 0, 0, 0, 30, 0] /*}*/] /*2*/,
 /*[*/ [`ORCRI`, `GLAMD`, `BLADE`] /*]*/, /*[*/ [`ELVIS`] /*]*/)

add_melee(find_obj(`SWORD`), sword_melee)

add_object(/*#*/ [object, /*{*/ [`LAMP`,
	  `There is a brass lantern (battery-powered) here.`,
	  `lamp`,
	  `A battery-powered brass lantern is on the trophy case.`,
	  lantern, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, _1, 0, 0, 15, 0] /*}*/] /*2*/,
/*[*/ [`LANTE`] /*]*/, /*[*/ [`BRASS`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BLAMP`,
	   `There is a broken brass lantern here.`,
	   `broken lamp`,
	   /*%*/ [false] /*1*/,
	   /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0] /*}*/] /*2*/,
/*[*/ [`LAMP`, `LANTE`] /*]*/, /*[*/ [`BROKE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`RUG`,
	 ``,
	 `carpet`,
	 /*%*/ [false] /*1*/,
	 rug, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,ndescbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
/*[*/ [`CARPE`] /*]*/, /*[*/ [`ORIEN`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`LEAVE`,
	  `There is a pile of leaves on the ground.`,
	  `pile of leaves`,
	  /*%*/ [false] /*1*/,
	  leaf_pile, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,ovison)] /*1*/, 0, 0, 0, 25, 0] /*}*/] /*2*/,
/*[*/ [`LEAF`, `PILE`] /*]*/)

/*#*/ [room, /*{*/ [`CELLA`,
       ``,
       `Cellar`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MTROL`, `SOUTH`, `CHAS2`,
	      `UP`,
	      /*#*/ [cexit, /*{*/ [`TRAP-DOOR`,
		      `LROOM`,
		      `The trap door has been barred from the other side.`] /*}*/] /*2*/,
	      `WEST`,
	      /*#*/ [nexit, `You try to ascend the ramp, but it is impossible, and you slide back down.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TDOOR`] /*}*/] /*2*/] /*)*/,
       cellar,
       25] /*}*/] /*2*/

psetg(tchomp, `The troll fends you off with a menacing gesture.`)

/*#*/ [room, /*{*/ [`MTROL`,

`You are in a small room with passages off in all directions. 
Bloodstains and deep scratches (perhaps made by an axe) mar the
walls.`,
       `The Troll Room`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`WEST`, `CELLA`,
		  `EAST`, /*#*/ [cexit, /*{*/ [`TROLL-FLAG`, `CRAW4`, /*%*/ [tchomp] /*1*/] /*}*/] /*2*/,
		  `NORTH`, /*#*/ [cexit, /*{*/ [`TROLL-FLAG`, `PASS1`, /*%*/ [tchomp] /*1*/] /*}*/] /*2*/,
		  `SOUTH`, /*#*/ [cexit, /*{*/ [`TROLL-FLAG`, `MAZE1`, /*%*/ [tchomp] /*1*/] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TROLL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

psetg(trolldesc,
`A nasty-looking troll, brandishing a bloody axe, blocks all passages
out of the room.`)

psetg(trollout,
`An unconscious troll is sprawled on the floor.  All passages out of
the room are open.`)

villains = /*(*/ [find_obj(`TROLL`), find_obj(`THIEF`), find_obj(`CYCLO`)] /*)*/
villain_probs = iuvector(villains.length, 0)
oppv = ivector(villains.length, () => false)

add_demon(sword_demon = chtype(/*[*/ [sword_glow, villains,/*(*/ [] /*)*/, rooms[1], find_obj(`SWORD`), false] /*]*/,
			  hack))

 /*#*/ [object, /*{*/ [`TROLL`,
	  /*%*/ [trolldesc] /*1*/,	  `troll`,
	  /*%*/ [false] /*1*/,
	  troll,
	  /*(*/ [/*#*/ [find_obj, /*{*/ [`AXE`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison,villain)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,2] /*}*/] /*2*/

add_melee(find_obj(`TROLL`), troll_melee)

add_demon(fight_demon = chtype(/*[*/ [fighting, villains,/*(*/ [] /*)*/, rooms[1], find_obj(`TROLL`), false] /*]*/,
			 hack))

add_object(/*#*/ [object, /*{*/ [`AXE`,
	  `There is a bloody axe here.`,
	  `bloody axe`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [find_obj(`TROLL`)] /*1*/, /*%*/ [_(ovison,weaponbit)] /*1*/, 0, 0, 0, 25, 0] /*}*/] /*2*/,
 /*[*/ [] /*]*/,/*[*/ [`BLOOD`] /*]*/)

psetg(mazedesc, `You are in a maze of twisty little passages, all alike.`)

psetg(deadend, `Dead End`)

/*#*/ [room, /*{*/ [`MAZE1`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MTROL`,
	      `NORTH`, `MAZE1`,
	      `SOUTH`, `MAZE2`,
	      `EAST`, `MAZE4`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE2`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `MAZE1`,
	      `NORTH`, `MAZE4`,
	      `EAST`, `MAZE3`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE3`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZE2`, `NORTH`, `MAZE4`, `UP`, `MAZE5`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE4`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZE3`, `NORTH`, `MAZE1`, `EAST`, `DEAD1`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD1`,
       /*%*/ [deadend] /*1*/,/*%*/ [deadend] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `MAZE4`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE5`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `DEAD2`, `NORTH`, `MAZE3`, `SW`, `MAZE6`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BONES`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BAGCO`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`KEYS`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`BLANT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`RKNIF`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`RKNIF`,
	  `There is a rusty knife here.`,
	  `rusty knife`,
	  `Beside the skeleton is a rusty knife.`,
	  rusty_knife, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit,weaponbit)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,
 /*[*/ [`KNIFE`] /*]*/, /*[*/ [`RUSTY`] /*]*/)

add_melee(find_obj(`RKNIF`), knife_melee)

add_object(/*#*/ [object, /*{*/ [`BLANT`,
	  `There is a burned-out lantern here.`,
	  `burned-out lantern`,
	  `The deceased adventurer's useless lantern is here.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,
 /*[*/ [`LANTE`, `LAMP`] /*]*/, /*[*/ [`USED`, `BURNE`, `DEAD`, `USELE`] /*]*/)

/*#*/ [object, /*{*/ [`KEYS`,
	 `There is a set of skeleton keys here.`,
	 `set of skeleton keys`,
	 /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,takebit,ovison)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`BONES`,
`A skeleton, probably the remains of a luckless adventurer, lies here.`,
	  ``, /*%*/ [false] /*1*/, skeleton, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
/*[*/ [`SKELE`, `BODY`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BAGCO`,
	  `An old leather bag, bulging with coins, is here.`,
	  `bag of coins`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 10, 5, 15, 0] /*}*/] /*2*/,
/*[*/ [`BAG`, `COINS`] /*]*/, /*[*/ [`LEATH`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BAR`,
	  `There is a large platinum bar here.`,
	  `platinum bar`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(sacredbit,takebit,ovison)] /*1*/, 0, 12, 10, 20, 0] /*}*/] /*2*/,
/*[*/ [`PLATI`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`PEARL`,
	  `There is a pearl necklace here with hundreds of large pearls.`,
	  `pearl necklace`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 9, 5, 10, 0] /*}*/] /*2*/,
/*[*/ [`NECKL`] /*]*/)

/*#*/ [room, /*{*/ [`DEAD2`,
       /*%*/ [deadend] /*1*/,/*%*/ [deadend] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZE5`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE6`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, `MAZE5`, `EAST`, `MAZE7`, `WEST`, `MAZE6`, `UP`, `MAZE9`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE7`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, `MAZ14`, `WEST`, `MAZE6`, `NE`, `DEAD1`, `EAST`, `MAZE8`, `SOUTH`, `MAZ15`] /*}*/] /*2*/,
       /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE8`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NE`, `MAZE7`, `WEST`, `MAZE8`, `SE`, `DEAD3`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD3`,
       /*%*/ [deadend] /*1*/,/*%*/ [deadend] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `MAZE8`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZE9`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `MAZE6`, `EAST`, `MAZ11`, `DOWN`, `MAZ10`, `SOUTH`, `MAZ13`,
	      `WEST`, `MAZ12`, `NW`, `MAZE9`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ10`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MAZE9`, `WEST`, `MAZ13`, `UP`, `MAZ11`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ11`,
       /*%*/ [mazedesc] /*1*/,       /*%*/ [mazedesc] /*1*/,	/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NE`, `MGRAT`, `DOWN`, `MAZ10`, `NW`, `MAZ13`, `SW`, `MAZ12`] /*}*/] /*2*/] /*}*/] /*2*/
	      
/*#*/ [room, /*{*/ [`MGRAT`,
       ``,
       `Grating Room`, /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SW`, `MAZ11`, `UP`, /*#*/ [cexit, /*{*/ [`KEY-FLAG`, `CLEAR`, `The grating is locked`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`GRAT2`] /*}*/] /*2*/] /*)*/, maze_11] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ12`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZE5`, `SW`, `MAZ11`, `EAST`, `MAZ13`, `UP`, `MAZE9`, `NORTH`, `DEAD4`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD4`,
       /*%*/ [deadend] /*1*/,/*%*/ [deadend] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `MAZ12`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ13`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MAZE9`, `DOWN`, `MAZ12`, `SOUTH`, `MAZ10`, `WEST`, `MAZ11`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ14`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZ15`, `NW`, `MAZ14`, `NE`, `MAZE7`, `SOUTH`, `MAZE7`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAZ15`,
       /*%*/ [mazedesc] /*1*/,/*%*/ [mazedesc] /*1*/,/*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAZ14`, `SOUTH`, `MAZE7`, `NE`, `CYCLO`] /*}*/] /*2*/] /*}*/] /*2*/

psetg(stfore,        `You are in a forest, with trees in all directions around you.`)

/*#*/ [room, /*{*/ [`FORE1`,
       /*%*/ [stfore] /*1*/,       /*%*/ [forest] /*1*/,t,
       /*#*/ [exit, /*{*/ [`NORTH`, `FORE1`, `EAST`, `FORE3`, `SOUTH`, `FORE2`, `WEST`, `FORE1`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FORE4`,
       `You are in a large forest, with trees obstructing all views except
to the east, where a small clearing may be seen through the trees.`,
       /*%*/ [forest] /*1*/,       t,
       /*#*/ [exit, /*{*/ [`EAST`, `CLTOP`, `NORTH`, `FORE5`, `SOUTH`, `FORE4`, `WEST`, `FORE2`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FORE5`,
       /*%*/ [stfore] /*1*/,       /*%*/ [forest] /*1*/,       t,
       /*#*/ [exit, /*{*/ [`NORTH`, `FORE5`, `SE`, `CLTOP`, `SOUTH`, `FORE4`, `WEST`, `FORE2`] /*}*/] /*2*/] /*}*/] /*2*/

psetg(fordes,
`You are in a dimly lit forest, with large trees all around.  To the
east, there appears to be sunlight.`)

/*#*/ [room, /*{*/ [`FORE2`,
       /*%*/ [fordes] /*1*/,       /*%*/ [forest] /*1*/,t,
       /*#*/ [exit, /*{*/ [`NORTH`, `SHOUS`, `EAST`, `CLEAR`, `SOUTH`, `FORE4`, `WEST`, `FORE1`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FORE3`,
       /*%*/ [fordes] /*1*/,       /*%*/ [forest] /*1*/,t,
       /*#*/ [exit, /*{*/ [`NORTH`, `FORE2`, `EAST`, `CLEAR`, `SOUTH`, `CLEAR`, `WEST`, `NHOUS`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CLEAR`,
       ``,
       `Clearing`, t,
       /*#*/ [exit, /*{*/ [`SW`, `EHOUS`, `SE`, `FORE5`, `NORTH`, `CLEAR`, `EAST`, `CLEAR`,
	      `WEST`, `FORE3`, `SOUTH`, `FORE2`, `DOWN`, /*#*/ [cexit, /*{*/ [`KEY-FLAG`, `MGRAT`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`GRAT1`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`LEAVE`] /*}*/] /*2*/] /*)*/, clearing] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RAVI1`,

`You are in a deep ravine at a crossing with an east-west crawlway. 
Some stone steps are at the south of the ravine and a steep staircase
descends.`,
       `Deep Ravine`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `PASS1`, `DOWN`, `RESES`, `EAST`, `CHAS1`, `WEST`, `CRAW1`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CRAW1`,

`You are in a crawlway with a three-foot high ceiling.  Your footing
is very unsure here due to the assortment of rocks underfoot. 
Passages can be seen in the east, west, and northwest corners of the
passage.`,
       `Rocky Crawl`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `RAVI1`, `EAST`, `DOME`, `NW`, `EGYPT`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RESES`,
       ``,
       `Reservoir South`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, /*#*/ [cexit, /*{*/ [`EGYPT-FLAG`,
			      `RAVI1`,
			      `The coffin will not fit through this passage.`,
			      t,
			      coffin_cure] /*}*/] /*2*/,
	      `WEST`, `STREA`,
	      `CROSS`, /*#*/ [cexit, /*{*/ [`LOW-TIDE`, `RESEN`, `You are not equipped for swimming.`] /*}*/] /*2*/,
	      `NORTH`, /*#*/ [cexit, /*{*/ [`LOW-TIDE`, `RESEN`, `You are not equipped for swimming.`] /*}*/] /*2*/,
	      `UP`, /*#*/ [cexit, /*{*/ [`EGYPT-FLAG`,
			   `CANY1`,
			   `The stairs are too steep for carrying the coffin.`,
			   t,
			   coffin_cure] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TRUNK`] /*}*/] /*2*/] /*)*/,
       reservoir_south] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RESEN`,
       ``,
       `Reservoir North`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `ATLAN`,
	      `CROSS`, /*#*/ [cexit, /*{*/ [`LOW-TIDE`, `RESES`, `You are not equipped for swimming.`] /*}*/] /*2*/,
	      `SOUTH`, /*#*/ [cexit, /*{*/ [`LOW-TIDE`, `RESES`, `You are not equipped for swimming.`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`PUMP`] /*}*/] /*2*/] /*)*/,
       reservoir_north] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`STREA`,

`You are standing on a path beside a flowing stream.  The path
travels to the north and the east.`,
       `Stream`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `RESES`, `NORTH`, `ICY`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`FUSE`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`EGYPT`,
`You are in a room which looks like an Egyptian tomb.  There is an
ascending staircase in the room as well as doors, east and south.`,
       `Egyptian Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, `ICY`, `SOUTH`, `LEDG3`,
	      `EAST`, /*#*/ [cexit, /*{*/ [`EGYPT-FLAG`, `CRAW1`,
			     `The passage is too narrow to accomodate coffins.`, t,
			     coffin_cure] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`COFFI`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`ICY`,
       ``,
       `Glacier Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `STREA`, `EAST`, `EGYPT`, `WEST`, /*#*/ [cexit, /*{*/ [`GLACIER-FLAG`, `RUBYR`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`ICE`] /*}*/] /*2*/] /*)*/,
       glacier_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`REFL1`,
	  ``,
	  `mirror`,
	  /*%*/ [false] /*1*/, mirror_mirror, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,vicbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`MIRRO`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`REFL2`,
	  ``,
	  `mirror`,
	  /*%*/ [false] /*1*/, mirror_mirror, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,vicbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`MIRRO`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`ICE`,
	  `A mass of ice fills the western half of the room.`,
	  `glacier`, /*%*/ [false] /*1*/, glacier, /*(*/ [] /*)*/,  /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
/*[*/ [`GLACI`] /*]*/)

/*#*/ [room, /*{*/ [`RUBYR`,
`You are in a small chamber behind the remains of the Great Glacier.
To the south and west are small passageways.`,
       `Ruby Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `LAVA`, `SOUTH`, `ICY`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`RUBY`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`ATLAN`,
       `You are in an ancient room, long buried by the Reservoir.  There are
exits here to the southeast and upward.`,
       `Atlantis Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SE`, `RESEN`, `UP`, `CAVE1`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TRIDE`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CANY1`,
`You are on the south edge of a deep canyon.  Passages lead off
to the east, south, and northwest.  You can hear the sound of
flowing water below.`,
       `Deep Canyon`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NW`, `RESES`, `EAST`, `DAM`, `SOUTH`, `CAROU`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`ECHO`,
`You are in a large room with a ceiling which cannot be detected from
the ground. There is a narrow passage from east to west and a stone
stairway leading upward.  The room is extremely noisy.  In fact, it is
difficult to hear yourself think.`,
       `Loud Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `CHAS3`, `WEST`, `PASS5`, `UP`, `CAVE3`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BAR`] /*}*/] /*2*/] /*)*/,
       echo_room] /*}*/] /*2*/

 /*#*/ [object, /*{*/ [`RUBY`,
	  `There is a moby ruby lying here.`,
	  `ruby`,
	  `On the floor lies a moby ruby.`,
	  /*%*/ [false] /*1*/,
	  /*(*/ [] /*)*/,
	  /*%*/ [false] /*1*/,
	  /*%*/ [_(takebit,ovison)] /*1*/,
	  0,
	  15,
	  8,
	  5,
	  0] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`TRIDE`,
	  `Neptune's own crystal trident is here.`,
	  `crystal trident`,
	  `On the shore lies Neptune's own crystal trident.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 4, 11, 20, 0] /*}*/] /*2*/,
/*[*/ [`FORK`] /*]*/, /*[*/ [`CRYST`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`COFFI`,
`There is a solid-gold coffin, used for the burial of Ramses II, here.`,
	  `gold coffin`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,sacredbit,takebit,ovison)] /*1*/, 0, 3, 7, 55, 35] /*}*/] /*2*/,
/*[*/ [`CASKE`] /*]*/, /*[*/ [`GOLD`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`TORCH`,
	  `There is an ivory torch here.`,
	  `torch`,
	  `Sitting on the pedestal is a flaming torch, made of ivory.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,flamebit,takebit,ovison)] /*1*/, 1, 14, 6, 20, 0] /*}*/] /*2*/,
/*[*/ [] /*]*/, /*[*/ [`IVORY`] /*]*/)

/*#*/ [room, /*{*/ [`MIRR1`,
       ``,
       `Mirror Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `PASS3`, `NORTH`, `CRAW2`, `EAST`, `CAVE1`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`REFL1`] /*}*/] /*2*/] /*)*/,
       mirror_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MIRR2`,
       ``,
       `Mirror Room`,
       t,
       /*#*/ [exit, /*{*/ [`WEST`, `PASS4`, `NORTH`, `CRAW3`, `EAST`, `CAVE2`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`REFL2`] /*}*/] /*2*/] /*)*/,
       mirror_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAVE1`,
`You are in a small cave with an entrance to the north and a stairway
leading down.`,
       `Cave`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `MIRR1`, `DOWN`, `ATLAN`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAVE2`,
`You are in a tiny cave with entrances west and north, and a dark,
forbidding staircase leading down.`,
       `Cave`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `CRAW3`, `WEST`, `MIRR2`, `DOWN`, `LLD1`] /*}*/] /*2*/, /*(*/ [] /*)*/, cave2_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CRAW2`,
`You are in a steep and narrow crawlway.  There are two exits nearby to
the south and southwest.`,
       `Steep Crawlway`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `MIRR1`, `SW`, `PASS3`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CRAW3`,
`You are in a narrow crawlway.  The crawlway leads from north to south.
However the south passage divides to the south and southwest.`,
      `Narrow Crawlway`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `CAVE2`, `SW`, `MIRR2`, `NORTH`, `MGRAI`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`PASS3`,
`You are in a cold and damp corridor where a long east-west passageway
intersects with a northward path.`,
       `Cold Passage`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MIRR1`, `WEST`, `SLIDE`, `NORTH`, `CRAW2`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`PASS4`,

`You are in a winding passage.  It seems that there is only an exit
on the east end although the whirring from the round room can be
heard faintly to the north.`,
       `Winding Passage`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MIRR2`, `NORTH`,
 /*#*/ [nexit, `You hear the whir of the carousel room but can find no entrance.`] /*2*/] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`SLIDE`, 

`You are in a small chamber, which appears to have been part of a
coal mine. On the south wall of the chamber the letters \"Granite
Wall\" are etched in the rock. To the east is a long passage and
there is a steep metal slide twisting downward. From the appearance
of the slide, an attempt to climb up it would be impossible.  To the
north is a small opening.`,
       `Slide Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `PASS3`, `DOWN`, `CELLA`, `NORTH`, `ENTRA`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`ENTRA`,

`You are standing at the entrance of what might have been a coal
mine. To the northeast and the northwest are entrances to the mine,
and there is another exit on the south end of the room.`,
       `Mine Entrance`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `SLIDE`, `NW`, `SQUEE`, `NE`, `TSHAF`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`SQUEE`,
`You are a small room.  Strange squeaky sounds may be heard coming from
the passage at the west end.  You may also escape to the south.`,
       `Squeaky Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `BATS`, `SOUTH`, `ENTRA`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`TSHAF`,
       `You are in a large room, in the middle of which is a small shaft
descending through the floor into darkness below.  To the west and
the north are exits from this room.  Constructed over the top of the
shaft is a metal framework to which a heavy iron chain is attached.`,
       `Shaft Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, /*#*/ [nexit, `You wouldn't fit and would die if you could.`] /*2*/,
	      `WEST`, `ENTRA`, `NORTH`, `TUNNE`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TBASK`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`TBASK`,
	  `At the end of the chain is a basket.`,
	  `basket`,
	  /*%*/ [false] /*1*/,
	  dumbwaiter, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,ovison,transbit)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,50] /*}*/] /*2*/,
/*[*/ [`CAGE`, `DUMBW`, `BASKE`] /*]*/)[oopen_Q] = t

add_object(/*#*/ [object, /*{*/ [`FBASK`,
	  ``, 
	  ``,
	  /*%*/ [false] /*1*/,
	  dumbwaiter, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
/*[*/ [`CAGE`, `DUMBW`, `BASKE`] /*]*/)

/*#*/ [room, /*{*/ [`TUNNE`,

`You are in a narrow tunnel with large wooden beams running across
the ceiling and around the walls.  A path from the south splits into
paths running west and northeast.`,
       `Wooden Tunnel`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `TSHAF`, `WEST`, `SMELL`, `NE`, `MINE1`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`SMELL`,

`You are in a small non-descript room.  However, from the direction
of a small descending staircase a foul odor can be detected.  To the
east is a narrow path.`,
       `Smelly Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, `BOOM`, `EAST`, `TUNNE`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BOOM`,
       `You are in a small room which smells strongly of coal gas.`,
       `Gas Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, `SMELL`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BRACE`] /*}*/] /*2*/] /*)*/,
       boom_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`BRACE`,
	  `There is a sapphire-encrusted bracelet here.`,
	  `sapphire bracelet`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 5, 3, 10, 0] /*}*/] /*2*/,
/*[*/ [`JEWEL`] /*]*/, /*[*/ [`SAPPH`] /*]*/)

/*#*/ [room, /*{*/ [`TLADD`,

`You are in a very small room.  In the corner is a rickety wooden
ladder, leading downward.  It might be safe to descend.  There is
also a staircase leading upward.`,
       `Ladder Top`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, `BLADD`, `UP`, `MINE7`] /*}*/] /*2*/] /*}*/] /*2*/

psetg(mindesc, 
`You are in a non-descript part of a coal mine.`)

/*#*/ [room, /*{*/ [`MINE1`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `MINE4`, `SW`, `MINE2`, `EAST`, `TUNNE`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE2`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `MINE1`, `WEST`, `MINE5`, `UP`, `MINE3`, `NE`, `MINE4`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE3`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MINE2`, `NE`, `MINE5`, `EAST`, `MINE5`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE4`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, `MINE5`, `NE`, `MINE6`, `SOUTH`, `MINE1`, `WEST`, `MINE2`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE5`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, `MINE6`, `NORTH`, `MINE7`, `WEST`, `MINE2`, `SOUTH`, `MINE3`,
              `UP`, `MINE3`, `EAST`, `MINE4`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE6`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SE`, `MINE4`, `UP`, `MINE5`, `NW`, `MINE7`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MINE7`,
       /*%*/ [mindesc] /*1*/,       /*%*/ [mindesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MINE1`, `WEST`, `MINE5`, `DOWN`, `TLADD`, `SOUTH`, `MINE6`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BLADD`,

`You are in a rather wide room.  On one side is the bottom of a
narrow wooden ladder.  To the northeast and the south are passages
leaving the room.`,
       `Ladder Bottom`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NE`, `DEAD7`, `SOUTH`, `TIMBE`, `UP`, `TLADD`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD7`,
       `Dead End`,
       `Dead End`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `BLADD`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`COAL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

psetg(nofit, `You cannot fit through this passage with that load.`)

/*#*/ [room, /*{*/ [`TIMBE`,
`You are in a long and narrow passage, which is cluttered with broken
timbers.  A wide passage comes from the north and turns at the 
southwest corner of the room into a very narrow passageway.`,
       `Timber Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `BLADD`,
	      `SW`, /*#*/ [cexit, /*{*/ [`EMPTY-HANDED`, `BSHAF`, /*%*/ [nofit] /*1*/] /*}*/] /*2*/] /*}*/] /*2*/, /*(*/ [] /*)*/, no_objs] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BSHAF`, 

`You are in a small square room which is at the bottom of a long
shaft. To the east is a passageway and to the northeast a very narrow
passage. In the shaft can be seen a heavy iron chain.`,
       `Lower Shaft`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `MACHI`,
	      `OUT`, /*#*/ [cexit, /*{*/ [`EMPTY-HANDED`, `TIMBE`, /*%*/ [nofit] /*1*/] /*}*/] /*2*/,
	      `NE`, /*#*/ [cexit, /*{*/ [`EMPTY-HANDED`, `TIMBE`, /*%*/ [nofit] /*1*/] /*}*/] /*2*/,
	      `UP`, /*#*/ [nexit, `Not a chance.`] /*2*/,
	      `CLIMB`, /*#*/ [nexit, `The chain is not climbable.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`FBASK`] /*}*/] /*2*/] /*)*/, no_objs] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MACHI`,
       ``,
       `Machine Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NW`, `BSHAF`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`MSWIT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`MACHI`] /*}*/] /*2*/] /*)*/, machine_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BATS`, ``, `Bat Room`, /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`EAST`, `SQUEE`] /*}*/] /*2*/, 
       /*(*/ [/*#*/ [find_obj, /*{*/ [`JADE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BAT`] /*}*/] /*2*/] /*)*/, bats_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DOME`,
       ``,
       `Dome Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `CRAW1`,
	      `DOWN`, /*#*/ [cexit, /*{*/ [`DOME-FLAG`,
			     `MTORC`,
			     `You cannot go down without fracturing many bones.`] /*}*/] /*2*/,
	      `CLIMB`, /*#*/ [cexit, /*{*/ [`DOME-FLAG`,
			      `MTORC`,
			      `You cannot go down without fracturing many bones.`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`RAILI`] /*}*/] /*2*/] /*)*/,
       dome_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MTORC`,
       ``,
       `Torch Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*#*/ [nexit, `You cannot reach the rope.`] /*2*/, `WEST`, `MTORC`, `DOWN`, `CRAW4`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`TORCH`] /*}*/] /*2*/] /*)*/,
       torch_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CRAW4`,
`You are in a north-south crawlway; a passage goes to the east also.
There is a hole above, but it provides no opportunities for climbing.`,
       `North-South Crawlway`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `CHAS2`, `SOUTH`, `STUDI`, `EAST`, `MTROL`,
	      `UP`, /*#*/ [nexit, `Not even a human fly could get up it.`] /*2*/] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CHAS2`,

`You are on the west edge of a chasm, the bottom of which cannot be
seen. The east side is sheer rock, providing no exits.  A narrow
passage goes west, and the path you are on continues to the north and
south.`,
       `West of Chasm`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`WEST`, `CELLA`, `NORTH`, `CRAW4`, `SOUTH`, `GALLE`,
		  `DOWN`, /*#*/ [nexit, `The chasm probably leads straight to the infernal regions.`] /*2*/] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAROU`,
       ``,
       `Round room`, /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `CAVE4`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `SOUTH`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `CAVE4`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `EAST`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `MGRAI`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `WEST`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `PASS1`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `NW`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `CANY1`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `NE`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `PASS5`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `SE`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `PASS4`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `SW`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `MAZE1`, ``, /*%*/ [false] /*1*/, carousel_exit] /*}*/] /*2*/,
	      `EXIT`, /*#*/ [cexit, /*{*/ [`CAROUSEL-FLIP`, `PASS3`, ``, /*%*/ [false] /*1*/, carousel_out] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`IRBOX`] /*}*/] /*2*/] /*)*/, carousel_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`IRBOX`,
	  `There is a dented iron box here.`,
	  `iron box`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`STRAD`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,contbit)] /*1*/, 0, 0, 0, 40, 20] /*}*/] /*2*/,
 /*[*/ [`BOX`] /*]*/, /*[*/ [`IRON`, `DENTE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`STRAD`,
	  `There is a Stradavarius here.`,
	  `fancy violin`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`IRBOX`] /*}*/] /*2*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 10, 10, 10, 0] /*}*/] /*2*/,
 /*[*/ [`VIOLI`] /*]*/, /*[*/ [`FANCY`] /*]*/)

/*#*/ [room, /*{*/ [`PASS5`,
       `You are in a high north-south passage, which forks to the northeast.`,
       `North-South Passage`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `CHAS1`, `NE`, `ECHO`, `SOUTH`, `CAROU`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CHAS1`,
`A chasm runs southwest to northeast.  You are on the south edge; the
path exits to the south and to the east.`,
       `Chasm`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SOUTH`, `RAVI1`, `EAST`, `PASS5`,
		  `DOWN`, /*#*/ [nexit, `Are you out of your mind?`] /*2*/] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAVE3`,

`You are in a cave.  Passages exit to the south and to the east, but
the cave narrows to a crack to the west.  The earth is particularly
damp here.`,
       `Damp Cave`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SOUTH`, `ECHO`, `EAST`, `DAM`,
		  `WEST`, /*#*/ [nexit, `It is too narrow for most insects.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CHAS3`,
`A chasm, evidently produced by an ancient river, runs through the
cave here.  Passages lead off in all directions.`,
       `Ancient Chasm`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SOUTH`, `ECHO`, `EAST`, `TCAVE`, `NORTH`, `DEAD5`, `WEST`, `DEAD6`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD5`,
       `Dead end`,
       `Dead end`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SW`, `CHAS3`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`DEAD6`,
       `Dead end`,
       `Dead end`, /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`EAST`, `CHAS3`] /*}*/] /*2*/, /*(*/ [] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAVE4`,
`You have entered a cave with passages leading north and southeast.`,
       `Engravings Cave`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`NORTH`, `CAROU`, `SE`, `RIDDL`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`ENGRA`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(sobject(`ENGRA`, `wall with engravings`, ovison,readbit,	 sacredbit),
	    /*[*/ [`INSCR`] /*]*/, /*[*/ [`OLD`, `ANCIE`] /*]*/)

find_obj(`ENGRA`)[odesc1] = `There are old engravings on the walls here.`

/*#*/ [room, /*{*/ [`RIDDL`,

`This is a room which is bare on all sides.  There is an exit down. 
To the east is a great door made of stone.  Above the stone, the
following words are written: 'No man shall enter this room without
solving this riddle:
  What is tall as a house,
	  round as a cup, 
	  and all the king's horses can't draw it up?'`,
       `Riddle Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, `CAVE4`,
	      `EAST`, /*#*/ [cexit, /*{*/ [`RIDDLE-FLAG`, `MPEAR`,
			     `Your way is blocked by an invisible force.`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`SDOOR`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MPEAR`,
`This is a former broom closet.  The exits are to the east and west.`,
       `Pearl Room`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`EAST`, `BWELL`, `WEST`, `RIDDL`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`PEARL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LLD1`,
       ``,
       `Entrance to Hades`,
       t, /*#*/ [exit, /*{*/ [`EAST`,
		/*#*/ [cexit, /*{*/ [`LLD-FLAG`,
			`LLD2`,
			`Some invisible force prevents you from passing through the gate.`] /*}*/] /*2*/,
		`UP`, `CAVE2`,
		`ENTER`,
		/*#*/ [cexit, /*{*/ [`LLD-FLAG`,
			`LLD2`,
			`Some invisible force prevents you from passing through the gate.`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`CORPS`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`GATES`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`GHOST`] /*}*/] /*2*/] /*)*/, lld_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`GHOST`,
	  ``,
	  ``, /*%*/ [false] /*1*/, ghost_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison)] /*1*/, 0, 0, 0,
	  /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
/*[*/ [`SPIRI`, `FIEND`] /*]*/)	 

/*#*/ [room, /*{*/ [`LLD2`,
       ``,
       `Land of the Living Dead`,
       t, /*#*/ [exit, /*{*/ [`EAST`, `TOMB`,
		`EXIT`, `LLD1`, `WEST`, `LLD1`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`BODIE`] /*}*/] /*2*/] /*)*/, lld2_room, 30] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MGRAI`,
`You are standing in a small circular room with a pedestal.  A set of
stairs leads up, and passages leave to the east and west.`,
       `Grail Room`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`WEST`, `CAROU`, `EAST`, `CRAW3`, `UP`, `TEMP1`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`GRAIL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`GRAIL`,
	  `There is an extremely valuable (perhaps original) grail here.`,
	  `grail`, /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison)] /*1*/, 0, 2, 5, 10, 5] /*}*/] /*2*/,/*[*/ [] /*]*/)

/*#*/ [room, /*{*/ [`TEMP1`,

`You are in the west end of a large temple.  On the south wall is an 
ancient inscription, probably a prayer in a long-forgotten language. 
The north wall is solid granite.  The entrance at the west end of the
room is through huge marble pillars.`,
       `Temple`,
       t, /*#*/ [exit, /*{*/ [`WEST`, `MGRAI`, `EAST`, `TEMP2`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`PRAYE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BELL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(sobject(`PRAYE`, `prayer`, _(readbit,sacredbit,ovison)),
	    /*[*/ [`INSCR`] /*]*/, /*[*/ [`ANCIE`, `OLD`] /*]*/)

/*#*/ [room, /*{*/ [`TEMP2`,
`You are in the east end of a large temple.  In front of you is what
appears to be an altar.`,
       `Altar`,
       t, /*#*/ [exit, /*{*/ [`WEST`, `TEMP1`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BOOK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`CANDL`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`TRUNK`,
	  `There is an old trunk here, bulging with assorted jewels.`,
	  `trunk with jewels`,
	  `Lying half buried in the mud is an old trunk, bulging with jewels.`,
	   /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [takebit] /*1*/,0, 15, 8, 35, 0] /*}*/] /*2*/,
/*[*/ [`CHEST`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BELL`,
	  `There is a small brass bell here.`,
	  `bell`,
	  `Lying in a corner of the room is a small brass bell.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,
/*[*/ [] /*]*/, /*[*/ [`BRASS`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BOOK`,
	  `There is a large black book here.`,
	  `book`,
	  `On the altar is a large black book, open to page 569.`,
	  black_book, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,ovison,readbit)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,
/*[*/ [`PRAYE`, `BIBLE`, `GOODB`] /*]*/, /*[*/ [`BLACK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`CANDL`,
	  `There are two candles here.`,
	  `pair of candles`,
	  `On the two ends of the altar are burning candles.`,
	  candles, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(flamebit,takebit,ovison)] /*1*/, 1, 0, 0, 10, 0] /*}*/] /*2*/,/*[*/ [] /*]*/)

/*#*/ [room, /*{*/ [`DAM`,
       ``,
       `Dam`,
       t, /*#*/ [exit, /*{*/ [`SOUTH`, `CANY1`, `DOWN`, `DOCK`, `EAST`, `CAVE3`, `NORTH`, `LOBBY`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BOLT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`DAM`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BUBBL`] /*}*/] /*2*/] /*)*/, dam_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LOBBY`,
`This room appears to have been the waiting room for groups touring
the dam.  There are exits here to the north and east marked
'Private', though the doors are open, and an exit to the south.`,
       `Dam Lobby`,
       t,
       /*#*/ [exit, /*{*/ [`SOUTH`, `DAM`,
	      `NORTH`, `MAINT`,
	      `EAST`, `MAINT`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`MATCH`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`GUIDE`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`GUIDE`,
	  `There are tour guidebooks here.`,
	  `tour guidebook`,
`Some guidebooks entitled 'Flood Control Dam #3' are on the reception
desk.`, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,readbit,ovison)] /*1*/,
	   0, 0, 0, 5, 0] /*}*/] /*2*/,
/*[*/ [`BOOK`] /*]*/, /*[*/ [`TOUR`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`PAPER`,
	  ``,
	  `newspaper`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,readbit,ovison)] /*1*/, 0, 0, 0, 2, 0] /*}*/] /*2*/,
/*[*/ [`NEWSP`, `ISSUE`, `REPOR`, `MAGAZ`, `NEWS`] /*]*/)	  

/*#*/ [room, /*{*/ [`MAINT`,

`You are in what appears to have been the maintenance room for Flood
Control Dam #3, judging by the assortment of tool chests around the
room.  Apparently, this room has been ransacked recently, for most of
the valuable equipment is gone. On the wall in front of you is a
panel of buttons, which are labelled in EBCDIC. However, they are of
different colors:  Blue, Yellow, Brown, and Red. The doors to this
room are in the west and south ends.`,
       `Maintenance Room`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SOUTH`, `LOBBY`, `WEST`, `LOBBY`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`LEAK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`TUBE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`WRENC`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`BLBUT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`RBUTT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BRBUT`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`YBUTT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`SCREW`] /*}*/] /*2*/] /*)*/, maint_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`MATCH`,
	  `There is a matchbook whose cover says 'Visit Beautiful FCD#3' here.`,
	  `matchbook`,
	  /*%*/ [false] /*1*/, match_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison,readbit)] /*1*/, 0, 0, 0, 2, 0] /*}*/] /*2*/,
/*[*/ [`FLINT`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`ADVER`,
	  `There is a small leaflet here.`,
	  `leaflet`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`MAILB`] /*}*/] /*2*/, /*%*/ [_(burnbit,takebit,ovison,readbit)] /*1*/,
	  0, 0, 0, 2, 0] /*}*/] /*2*/,
/*[*/ [`PAMPH`, `LEAFL`, `BOOKL`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`MAILB`,
	  `There is a small mailbox here.`,
	  `mailbox`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`ADVER`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,10] /*}*/] /*2*/,/*[*/ [`BOX`] /*]*/)

 /*#*/ [object, /*{*/ [`TUBE`,
	  `There is an object which looks like a tube of toothpaste here.`,
	  `tube`,
	  /*%*/ [false] /*1*/, tube_function, /*(*/ [/*#*/ [find_obj, /*{*/ [`PUTTY`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison)] /*1*/, 0, 0, 0, 10, 7] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`PUTTY`,
	  `There is some gunk here`,
	  `viscous material`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`TUBE`] /*}*/] /*2*/, /*%*/ [_(toolbit,takebit,ovison)] /*1*/, 0, 0, 0, 6, 0] /*}*/] /*2*/,
 /*[*/ [`MATER`, `GUNK`, `GLUE`] /*]*/, /*[*/ [`VISCO`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`WRENC`,
	  `There is a wrench here.`,
	  `wrench`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,takebit,ovison)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,/*[*/ [] /*]*/)

add_object(/*#*/ [object, /*{*/ [`SCREW`,
	  `There is a screwdriver here.`,
	  `screwdriver`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,takebit,ovison)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,/*[*/ [] /*]*/)


/*#*/ [room, /*{*/ [`CYCLO`,
       ``, `Cyclops Room`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`WEST`, `MAZ15`, `NORTH`, /*#*/ [cexit, /*{*/ [`MAGIC-FLAG`, `BLROO`, `The north wall is solid rock.`] /*}*/] /*2*/,
		  `UP`, /*#*/ [cexit, /*{*/ [`CYCLOPS-FLAG`, `TREAS`, `The cyclops doesn't look like he'll let you past.`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`CYCLO`] /*}*/] /*2*/] /*)*/, cyclops_room] /*}*/] /*2*/

add_melee(find_obj(`CYCLO`), cyclops_melee)

/*#*/ [room, /*{*/ [`BLROO`,
`You are in a long passage.  To the south is one entrance.  On the
east there is an old wooden door, with a large hole in it (about
cyclops sized).`,
       `Strange Passage`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`SOUTH`, `CYCLO`, `EAST`, `LROOM`] /*}*/] /*2*/, /*(*/ [] /*)*/, time, 10] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`CYCLO`,
	  ``, `cyclops`, /*%*/ [false] /*1*/,
	  cyclops, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison,villain)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,10000] /*}*/] /*2*/,
 /*[*/ [`ONE-E`, `MONST`] /*]*/)

/*#*/ [room, /*{*/ [`TREAS`,

`This is a large room, whose north wall is solid granite.  A number
of discarded bags, which crumble at your touch, are scattered about
on the floor.`,
	`Treasure Room`,
	/*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`DOWN`, `CYCLO`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`CHALI`] /*}*/] /*2*/] /*)*/, treasure_room, 25] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`CHALI`,
	  `There is a silver chalice, intricately engraved, here.`,
	  `chalice`, /*%*/ [false] /*1*/, chalice, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison)] /*1*/, 0, 10, 10, 10, 5] /*}*/] /*2*/,
 /*[*/ [`CUP`, `GOBLE`] /*]*/)

/*#*/ [room, /*{*/ [`STUDI`, 

`You are in what appears to have been an artist's studio.  The walls
and floors are splattered with paints of 69 different colors. 
Strangely enough, nothing of value is hanging here.  At the north and
northwest of the room are open doors (also covered with paint).  An
extremely dark and narrow chimney leads up from a fireplace; although
you might be able to get up it, it seems unlikely you could get back
down.`,
       `Studio`,
       /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`NORTH`, `CRAW4`,
		  `NW`, `GALLE`,
		  `UP`,
		  /*#*/ [cexit, /*{*/ [`LIGHT-LOAD`,
			  `KITCH`,
			  `The chimney is too narrow for you and all of your baggage.`,
			  /*%*/ [false] /*1*/, chimney_function] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`GALLE`,
`You are in an art gallery.  Most of the paintings which were here
have been stolen by vandals with exceptional taste.  The vandals
left through either the north or south exits.`,
       `Gallery`,
       t, /*#*/ [exit, /*{*/ [`NORTH`, `CHAS2`, `SOUTH`, `STUDI`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`PAINT`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/


add_object(/*#*/ [object, /*{*/ [`PAINT`,
	  `A masterpiece by a neglected genius is here.`,
	  `painting`,
`Fortunately, there is still one chance for you to be a vandal, for on
the far wall is a work of unparalleled beauty.`,
 	  painting, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,takebit,ovison)] /*1*/, 0, 4, 7, 15, 0] /*}*/] /*2*/,
/*[*/ [`ART`, `CANVA`, `MASTE`] /*]*/)

`LISTS OF CRUFT:  WEAPONS, AND IMMOVABLE OBJECTS`

add_demon(robber_demon = chtype(/*[*/ [robber, /*(*/ [] /*)*/, rooms,rooms[1], find_obj(`THIEF`), false] /*]*/, hack))

psetg(robber_c_desc,
`There is a suspicious-looking individual, holding a bag, leaning
against one wall.  He is armed with a vicious-looking stilletto.`)

psetg(robber_u_desc,
`There is a suspicious-looking individual lying unconscious on the
ground.  His bag and stilletto seem to have vanished.`)

add_object(/*#*/ [object, /*{*/ [`THIEF`,
	  /*%*/ [robber_c_desc] /*1*/,	  `thief`,
	  /*%*/ [false] /*1*/,
	  robber_function, /*(*/ [/*#*/ [find_obj, /*{*/ [`STILL`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison,villain)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,4] /*}*/] /*2*/,/*[*/ [`ROBBE`, `CROOK`, `CRIME`, `CRIMI`, `BANDI`, `GENT`, `GENTL`,
 `MAN`, `SHADY`, `THUG`, `BAGMA`, `MAFIA`] /*]*/)

add_melee(find_obj(`THIEF`), thief_melee)

add_object(/*#*/ [object, /*{*/ [`STILL`,
	  `There is a vicious-looking stilletto here.`,
	  `stilletto`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [find_obj(`THIEF`)] /*1*/, /*%*/ [_(ovison,weaponbit)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [`VICIO`] /*]*/)

weapons = /*(*/ [find_obj(`STICK`), find_obj(`KNIFE`)] /*)*/

random_list = /*(*/ [find_room(`LROOM`),
       find_room(`KITCH`),
       find_room(`CLEAR`),
       find_room(`FORE3`),
       find_room(`FORE2`),
       find_room(`SHOUS`),
       find_room(`FORE2`),
       find_room(`KITCH`),
       find_room(`EHOUS`)] /*)*/

add_desc(find_obj(`BOOK`),
`		COMMANDMENT #12592
Oh ye who go about saying unto each:   \"Hello sailor\":
dost thou know the magnitude of thy sin before the gods?
Yea, verily, thou shalt be ground between two stones.
Shall the angry gods cast thy body into the whirlpool?
Surely, thy eye shall be put out with a sharp stick!
Even unto the ends of the earth shalt thou wander and
unto the land of the dead shalt thou be sent at last.
Surely thou shalt repent of thy cunning.`)

add_desc(find_obj(`GUIDE`),
`\"		   Guide Book to
		Flood Control Dam #3

  Flood Control Dam #3 (FCD#3) was constructed in year 783 of the
Great Underground Empire to harness the destructive power of the
Frigid River.  This work was supported by a grant of 37 million
zorkmids from the Central Bureaucracy and your omnipotent local
tyrant Lord Dimwit Flathead the Excessive. This impressive
structure is composed of 3.7 cubic feet of concrete, is 256 feet
tall at the center, and 193 feet wide at the top.  The reservoir
created behind the dam has a volume of 37 billion cubic feet, an
area of 12 million square feet, and a shore line of 36 thousand
feet.

  The construction of FCD#3 took 112 days from ground breaking to
the dedication. It required a work force of 384 slaves, 34 slave
drivers, 12 engineers, 2 turtle doves, and a partridge in a pear
tree. The work was managed by a command team composed of 2345
bureaucrats, 2347 secretaries (at least two of which can type),
12,256 paper shufflers, 52,469 rubber stampers, 245,193 red tape
processors, and nearly one million dead trees.

  We will now point out some of the more interesting features
of FCD#3 as we conduct you on a guided tour of the facilities:
	1) You start your tour here in the Dam Lobby.
	   You will notice on your right that .........`)

add_desc(find_obj(`PAPER`),
`		US NEWS & DUNGEON REPORT
12/12/77  				       Late Dungeon Edition

     In order to get a more-or-less working version, we have
installed one with some known bugs.  In particular, the following
sequence will not work correctly, nor will anything resembling it:
>take
take what?
>frob
what do you want me to do with it?
     Note that if you now respond 'take', the right thing will
happen. In short, the current parser can't handle verbs with missing
objects.  Since it is completely new, we'd appreciate reports of any
other bugs encountered.

FLASH!
     An important change has been made.  When you have been killed,
and the 'patch' question is asked, or if you are confirming a 'quit',
it is now necessary to terminate the response to the question with a
carriage return (you may be surprised to find that this wasn't true
before).  Also, the answer to the 'patch' question is taken to be yes
unless something starting with n, N, f, or F is typed; the answer to
the 'quit' question is no unless something starting with y, Y, t, or
T is typed.

FLASH!
     Another FLAG DAY has been declared for save files.  Yes, ladies
and gentlemen, yet another incompatible change has been made to the
save/restore code.  When will it end?

     Things like the bucket should resume working in this version.

     Many people have reported the following message:
'GIN FREE STORAGE- VECTOR ...GOUT TIME= n.nn'
This indicates that a garbage collection is occurring.  Some reports
have this taking up to 30 sec. of cpu time, during which your dungeon
will refuse to respond.  We have added a feature which should prevent
this; if you see such a message, please send mail to DUNGEON@DM
describing the circumstances (particularly number of moves,
save/restore status, and the TIME).  A garbage collection is not
fatal:  your dungeon should be perfectly all right once it finishes
(after the GOUT TIME= message is printed).
`)

add_desc(find_obj(`ADVER`),
`			WELCOME TO DUNGEON

    DUNGEON is a game of adventure, danger, and low cunning.  In it
you will explore some of the most amazing territory ever seen by
mortal man. Hardened adventurers have run screaming from the terrors
contained within!

    In DUNGEON the intrepid explorer delves into the forgotten
secrets of a lost labyrinth deep in the bowels of the earth,
searching for vast treasures long hidden from prying eyes, treasures
guarded by fearsome monsters and diabolical traps!

    No PDP-10 should be without one!

    DUNGEON was created at the Programming Technology Division of the
MIT Laboratory for Computer Science, by Tim Anderson, Marc Blank,
Bruce Daniels, and Dave Lebling.  It was inspired by the ADVENTURE
game of Crowther and Woods, and Dungeons and Dragons, by Gygax and
Arneson.  DUNGEON is written in MDL (alias MUDDLE).

    Direct inquiries by Net mail to DUNGEON@MIT-DMS.
`)

add_desc(find_obj(`MATCH`),
`	[close cover before striking BKD]

You too can make BIG MONEY in the exciting field of
		PAPER SHUFFLING!
Mr. TAA of Muddle, Mass. says: \"Before I took
this course I used to be a lowly bit twiddler.
Now with what I learned at MIT Tech I feel really
important and can obfuscate and confuse with the best.\"
Mr. MARC had this to say: \"Ten short days ago all I could
look forward to was a dead-end job as a doctor.  Now
I have a promising future and make really big Zorkmids.\"

MIT Tech can't promise these fantastic results to everyone.
But when you earn your MDL degree from MIT Tech your future
will be brighter. Send for our free brochure today.`)

add_desc(find_obj(`ENGRA`),
`The engravings were incised in the living rock of the cave wall by
an unknown hand.  They depict, in symbolic form, the beliefs of the
ancient peoples of Zork.  Skillfully interwoven with the bas reliefs
are excerpts illustrating the major tenets expounded by the sacred
texts of the religion of that time.  Unfortunately a later age seems
to have considered them blasphemous and just as skillfully excised
them.`)

add_desc(find_obj(`PRAYE`),
`The prayer is inscribed in an ancient script which is hardly
remembered these days, much less understood.  What little of it can
be made out seems to be a phillipic against small insects,
absent-mindedness, and the picking up and dropping of small objects. 
The final verse seems to consign trespassers to the land of the
dead.  All evidence indicates that the beliefs of the ancient
Zorkers were obscure.`)

// ASSORTED DOORS

psetg(butstr, `button`)
psetg(doorstr, `door`)

add_object(aobject(`WIND1`, `window`, window_function, ovison,doorbit,ndescbit),
   /*[*/ [`WINDO`] /*]*/, /*[*/ [] /*]*/)

add_object(aobject(`WIND2`, `window`, window_function, ovison,doorbit,ndescbit),
   /*[*/ [`WINDO`] /*]*/, /*[*/ [] /*]*/)

add_object(aobject(`BOLT`, `bolt`, bolt_function, turnbit,ovison,doorbit,ndescbit),
	    /*[*/ [`BOLT`, `NUT`] /*]*/, /*[*/ [] /*]*/)

add_object(aobject(`GRAT1`, `grating`, grat1_function, doorbit,ndescbit),
  /*[*/ [`GRATI`, `GRATE`] /*]*/, /*[*/ [] /*]*/)

add_object(aobject(`GRAT2`, `grating`, grat2_function, ovison,doorbit,ndescbit),
  /*[*/ [`GRATI`, `GRATE`] /*]*/, /*[*/ [] /*]*/)

add_object(aobject(`DOOR`, doorstr,trap_door, doorbit,ndescbit),
	    /*[*/ [`TRAPD`, `TRAP-`] /*]*/, /*[*/ [`TRAP`] /*]*/)

add_object(aobject(`TDOOR`, doorstr,trap_door, doorbit,ndescbit),
	    /*[*/ [`TRAPD`, `TRAP-`] /*]*/, /*[*/ [`TRAP`] /*]*/)

add_object(aobject(`WDOOR`, doorstr,ddoor_function, ovison,ndescbit,readbit),
	    /*[*/ [`DOOR`] /*]*/, /*[*/ [`WOODE`] /*]*/)

add_desc(find_obj(`WDOOR`),
`The engravings translate to 'This space intentionally left blank'`)

add_object(aobject(`FDOOR`, doorstr,ddoor_function, ovison,ndescbit),
	    /*[*/ [`DOOR`] /*]*/, /*[*/ [`FRONT`] /*]*/)

add_object(aobject(`SDOOR`, doorstr,ddoor_function, ovison,ndescbit),
	    /*[*/ [`DOOR`] /*]*/, /*[*/ [`STONE`] /*]*/)

add_object(aobject(`MSWIT`, `switch`, mswitch_function, ovison,ndescbit,turnbit),
	    /*[*/ [`SWITC`] /*]*/)

// ASSORTED GARBAGE

add_object(sobject(`HPOLE`, `head on a pole`, ovison), /*[*/ [`HEAD`] /*]*/)
add_object(sobject(`CORPS`, `corpses`, ovison), /*[*/ [] /*]*/, /*[*/ [`MANGL`] /*]*/)
add_object(aobject(`BODIE`, `pile of bodies`, body_function,
		     ovison,ndescbit,trytakebit),
	    /*[*/ [`BODY`, `CORPS`] /*]*/)

add_object(sobject(`DAM`, `dam`, ovison,ndescbit), /*[*/ [`GATE`, `GATES`, `FCD`] /*]*/)
add_object(sobject(`RAILI`, `railing`, ovison,ndescbit), /*[*/ [`RAIL`] /*]*/)
add_object(sobject(`BUTTO`, `button`, ovison,ndescbit), /*[*/ [`SWITC`] /*]*/)
sobject(`BUBBL`, `bubble`, ovison,ndescbit)
add_object(aobject(`LEAK`, `leak`, leak_function, ovison,ndescbit), /*[*/ [`DRIP`, `HOLE`] /*]*/)
add_star(add_object(aobject(`EVERY`, `everything`,
		   everything, ovison,takebit,no_check_bit,ndescbit),
	   /*[*/ [`ALL`] /*]*/))
add_star(add_object(aobject(`VALUA`, `valuables`,
		    valuables, ovison,takebit,no_check_bit,ndescbit),
	   /*[*/ [`TREAS`] /*]*/))
add_star(sobject(`SAILO`, `sailor`, ovison,ndescbit))
add_star(sobject(`TEETH`, `set of teeth`, ovison,ndescbit))
add_star(sobject(`WALL`, `wall`, ovison,ndescbit))
add_star(find_obj(`GRUE`))
add_star(add_object(sobject(`HANDS`, `pair of hands`, ovison,ndescbit,toolbit),
		      /*[*/ [`HAND`] /*]*/, /*[*/ [`BARE`] /*]*/))
add_star(add_object(sobject(`LUNGS`, `breath`, ovison,ndescbit,toolbit),
		      /*[*/ [`LUNG`, `AIR`] /*]*/))
add_star(sobject(`AVIAT`, `flyer`, ovison,ndescbit))

add_object(sobject(`RBUTT`, butstr,ovison,ndescbit),
	    /*[*/ [`BUTTO`, `SWITC`] /*]*/,
	    /*[*/ [`RED`] /*]*/)
add_object(sobject(`YBUTT`, butstr,ovison,ndescbit),
	    /*[*/ [`BUTTO`, `SWITC`] /*]*/,
	    /*[*/ [`YELLO`] /*]*/)

add_object(sobject(`BLBUT`, butstr,ovison,ndescbit),
	    /*[*/ [`BUTTO`, `SWITC`] /*]*/,
	    /*[*/ [`BLUE`] /*]*/)

add_object(sobject(`BRBUT`, butstr,ovison,ndescbit),
	    /*[*/ [`BUTTO`, `SWITC`] /*]*/,
	    /*[*/ [`BROWN`] /*]*/)

add_object(aobject(`BAT`, `bat`, fly_me, ovison,ndescbit,trytakebit), /*[*/ [`VAMPI`] /*]*/,/*[*/ [] /*]*/)

`MORE VOCABULARY`

sobject(`RAINB`, `rainbow`, ovison,ndescbit)

psetg(cliffs, /*#*/ [nexit, `The White Cliffs prevent your landing here.`] /*2*/)
psetg(riverdesc, `Frigid River`)

/*#*/ [room, /*{*/ [`DOCK`,
`You are at the base of Flood Control Dam #3, which looms above you
and to the north.  The river Frigid is flowing by here.  Across the
river are the White Cliffs which seem to form a giant wall stretching
from north to south along the east shore of the river as it winds its
way downstream.`,
       `Dam Base`,
       t,
       /*#*/ [exit, /*{*/ [`NORTH`, `DAM`, `UP`, `DAM`, `LAUNC`, `RIVR1`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`IBOAT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`STICK`] /*}*/] /*2*/] /*)*/,
       /*%*/ [false] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RIVR1`,
`You are on the River Frigid in the vicinity of the Dam.  The river
flows quietly here.  There is a landing on the west shore.`,
       /*%*/ [riverdesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [current] /*1*/,`WEST`, `DOCK`, `LAND`, `DOCK`, `DOWN`, `RIVR2`,
	      `EAST`, /*%*/ [cliffs] /*1*/] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rwaterbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RIVR2`,
`The River turns a corner here making it impossible to see the
Dam.  The White Cliffs loom on the east bank and large rocks prevent
landing on the west.`,
       /*%*/ [riverdesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [current] /*1*/,`DOWN`, `RIVR3`, `EAST`, /*%*/ [cliffs] /*1*/] /*}*/] /*2*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0,
       /*%*/ [rwaterbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RIVR3`,
`The river descends here into a valley.  There is a narrow beach on
the east below the cliffs and there is some shore on the west which
may be suitable.  In the distance a faint rumbling can be heard.`,
       /*%*/ [riverdesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [current] /*1*/,`DOWN`, `RIVR4`, `EAST`, `WCLF1`, `WEST`, `RCAVE`,
	      `LAND`, /*#*/ [nexit, `You must specify which direction here.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rwaterbit] /*1*/] /*}*/] /*2*/

psetg(narrow, `The path is too narrow.`)

/*#*/ [room, /*{*/ [`WCLF1`,
`You are on a narrow strip of beach which runs along the base of the
White Cliffs. The only path here is a narrow one, heading south
along the Cliffs.`,
       `White Cliffs Beach`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, /*#*/ [cexit, /*{*/ [`DEFLATE`, `WCLF2`, /*%*/ [narrow] /*1*/] /*}*/] /*2*/, `LAUNC`, `RIVR3`] /*}*/] /*2*/,
       /*(*/ [] /*)*/, cliff_function, 0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`WCLF2`,

`You are on a rocky, narrow strip of beach beside the Cliffs.  A
narrow path leads north along the shore.`,
       `White Cliffs Beach`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, /*#*/ [cexit, /*{*/ [`DEFLATE`, `WCLF1`, /*%*/ [narrow] /*1*/] /*}*/] /*2*/, `LAUNC`, `RIVR4`] /*}*/] /*2*/,
       /*(*/ [] /*)*/, cliff_function, 0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RIVR4`,

`The river is running faster here and the sound ahead appears to be
that of rushing water.  On the west shore is a sandy beach.  A small
area of beach can also be seen below the Cliffs.`,
       /*%*/ [riverdesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [current] /*1*/,`DOWN`, `RIVR5`, `EAST`, `WCLF2`, `WEST`, `BEACH`,
	      `LAND`, /*#*/ [nexit, `Specify the direction to land.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BUOY`] /*}*/] /*2*/] /*)*/,
       rivr4_room, 0, /*%*/ [rwaterbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RIVR5`,
`The sound of rushing water is nearly unbearable here.  On the west
shore is a large landing area.`,
       /*%*/ [riverdesc] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [current] /*1*/,`DOWN`, `FCHMP`, `LAND`, `FANTE`] /*}*/] /*2*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0,
       /*%*/ [rwaterbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FCHMP`,
       ``,
       `Moby lossage`, /*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`NORTH`, /*#*/ [nexit, ``] /*2*/] /*}*/] /*2*/, /*(*/ [] /*)*/, over_falls] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FANTE`,
`You are on the shore of the River.  The river here seems somewhat
treacherous.  A path travels from north to south here, the south end
quickly turning around a sharp corner.`,
       `Shore`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`LAUNC`, `RIVR5`, `NORTH`, `BEACH`,
	      `SOUTH`, `FALLS`] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BEACH`,
`You are on a large sandy beach at the shore of the river, which is
flowing quickly by.  A path runs beside the river to the south here.`,
       `Sandy Beach`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`LAUNC`, `RIVR4`, `SOUTH`, `FANTE`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`STATU`] /*}*/] /*2*/] /*)*/,
       beach_room, 0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RCAVE`,
`You are on the west shore of the river.  An entrance to a cave is
to the northwest.  The shore is very rocky here.`,
       `Rocky Shore`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`LAUNC`, `RIVR3`, `NW`, `TCAVE`] /*}*/] /*2*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/,
       0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`TCAVE`,
`You are in a small cave whose exits are on the south and northwest.`,
       `Small Cave`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `RCAVE`, `NW`, `CHAS3`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`GUANO`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`SHOVE`] /*}*/] /*2*/] /*)*/,
       tcave_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BARRE`,
`You are in a barrel.  Congratulations.  Etched into the side of the
barrel is the word 'Geronimo!'.`,
       `Barrel`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EXIT`, `FALLS`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`FALLS`,
       ``,
       `Aragain Falls`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, /*#*/ [cexit, /*{*/ [`RAINBOW`, `RAINB`] /*}*/] /*2*/, `DOWN`, `FCHMP`, `NORTH`, `FANTE`,
	      `ENTER`, `BARRE`, `UP`, /*#*/ [cexit, /*{*/ [`RAINBOW`, `RAINB`] /*}*/] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`RAINB`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BARRE`] /*}*/] /*2*/] /*)*/, falls_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`RAINB`,
`You are on top of a rainbow (I bet you never thought you would walk
on a rainbow), with a magnificent view of the Falls.  The rainbow
travels east-west here.  There is an NBC Commissary here.`,
       `Rainbow Room`,
       t,
       /*#*/ [exit, /*{*/ [`EAST`, `POG`, `WEST`, `FALLS`] /*}*/] /*2*/] /*}*/] /*2*/

crain = /*#*/ [cexit, /*{*/ [`RAINBOW`, `RAINB`] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`POG`,
`You are on a small beach on the continuation of the Frigid River
past the Falls.  The beach is narrow due to the presence of the White
Cliffs.  The river canyon opens here and sunlight shines in from
above. A rainbow crosses over the falls to the west and a narrow path
continues to the southeast.`,
       `End of Rainbow`,
       t,
       /*#*/ [exit, /*{*/ [`UP`, /*%*/ [crain] /*1*/,`NW`, /*%*/ [crain] /*1*/,`WEST`, /*%*/ [crain] /*1*/,`SE`, `CLBOT`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`RAINB`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`POT`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, 0] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CLBOT`,
`You are beneath the walls of the river canyon which may be climbable
here.  There is a small stream here, which is the lesser part of the
runoff of Aragain Falls. To the north is a narrow path.`,
       `Canyon Bottom`,
       t,
       /*#*/ [exit, /*{*/ [`UP`, `CLMID`, `CLIMB`, `CLMID`, `NORTH`, `POG`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CLMID`,

`You are on a ledge about halfway up the wall of the river canyon.
You can see from here that the main flow from Aragain Falls twists
along a passage which it is impossible to enter.  Below you is the
canyon bottom.  Above you is more cliff, which still appears
climbable.`,
       `Rocky Ledge`,
       t,
       /*#*/ [exit, /*{*/ [`UP`, `CLTOP`, `CLIMB`, `CLTOP`, `DOWN`, `CLBOT`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CLTOP`,

`You are at the top of the Great Canyon on its south wall.  From here
there is a marvelous view of the Canyon and parts of the Frigid River
upstream.  Across the canyon, the walls of the White Cliffs still
appear to loom far above.  Following the Canyon upstream (north and
northwest), Aragain Falls may be seen, complete with rainbow. 
Fortunately, my vision is better than average and I can discern the
top of the Flood Control Dam #3 far to the distant north.  To the
west and south can be seen an immense forest, stretching for miles
around.  It is possible to climb down into the canyon from here.`,
       `Canyon View`,
       t,
       /*#*/ [exit, /*{*/ [`DOWN`, `CLMID`, `CLIMB`, `CLMID`, `SOUTH`, `FORE4`, `WEST`, `FORE5`] /*}*/] /*2*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`POT`,
	  `There is a pot of gold here.`,
	  `pot filled with gold`,
	  `At the end of the rainbow is a pot of gold.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [takebit] /*1*/,0, 10, 10, 15, 0] /*}*/] /*2*/,
/*[*/ [] /*]*/, /*[*/ [`GOLD`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`STATU`,
	  `There is a beautiful statue here.`,
	  `statue`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [takebit] /*1*/,0, 10, 13, 8, 0] /*}*/] /*2*/,/*[*/ [`SCULP`, `ROCK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`IBOAT`,

`There is a folded pile of plastic here which has a small valve
attached.`, `plastic inflatable boat`, /*%*/ [false] /*1*/, iboat_function, /*(*/ [] /*)*/,
	  /*%*/ [false] /*1*/, /*%*/ [_(burnbit,ovison,takebit)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,/*[*/ [`BOAT`, `PLAST`, `PILE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`DBOAT`,
	  `There is a pile of plastic here with a large hole in it.`,
	  `plastic boat (with hole)`,
	  /*%*/ [false] /*1*/, dboat_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,ovison,takebit)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,/*[*/ [`BOAT`, `PLAST`, `PILE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`PUMP`,
	  `There is a small pump here.`,
	  `hand-held air pump`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,ovison,takebit)] /*1*/, 0, 0, 0, 5, 0] /*}*/] /*2*/,/*[*/ [`AIR-P`, `AIRPU`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`RBOAT`,
	  `There is an inflated boat here.`,
	  `magic boat`,
	  /*%*/ [false] /*1*/,
	  rboat_function, /*(*/ [/*#*/ [find_obj, /*{*/ [`LABEL`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, 
	  /*%*/ [_(vehbit,burnbit,ovison,takebit)] /*1*/,
	  0, 0, 0, 20, 100] /*}*/] /*2*/,
/*[*/ [`BOAT`] /*]*/, /*[*/ [`PLAST`, `SEAWO`] /*]*/)

find_obj(`RBOAT`)[oopen_Q] = t
find_obj(`RBOAT`)[orand] = rwaterbit

add_object(/*#*/ [object, /*{*/ [`LABEL`,
	  `There is a tan label here.`,
	  `tan label`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`RBOAT`] /*}*/] /*2*/, /*%*/ [_(burnbit,ovison,readbit,takebit)] /*1*/,
	  0, 0, 0, 2, 0] /*}*/] /*2*/,
/*[*/ [`FINEP`] /*]*/, /*[*/ [`TAN`] /*]*/)

add_desc(find_obj(`LABEL`),
`	  !!!! 	FROBOZZ MAGIC BOAT COMPANY  !!!!

Hello, Sailor!

Instructions for use:
   
   To get into boat, say 'Board'
   To leave boat, say 'Disembark'

   To get into a body of water, say 'Launch'
   To get to shore, say 'Land'
    
Warranty:

  This boat is guaranteed against all defects in parts and
workmanship for a period of 76 milliseconds from date of purchase or
until first used, whichever comes first.

Warning:
   This boat is made of plastic.		Good Luck!
`)

add_object(/*#*/ [object, /*{*/ [`STICK`,
	  `There is a broken sharp stick here.`,
	  `broken sharp stick`,
	  `A sharp stick, which appears to have been broken at one end, is here.`,
	  stick_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 0, 0, 3, 0] /*}*/] /*2*/,
/*[*/ [] /*]*/, /*[*/ [`SHARP`, `BROKE`] /*]*/)

sobject(`BARRE`, `barrel`, ovison)

add_object(/*#*/ [object, /*{*/ [`BUOY`,
	  `There is a red buoy here (probably a warning).`,
	  `red buoy`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`EMERA`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,findmebit,ovison,takebit)] /*1*/,
	  0, 0, 0, 10, 20] /*}*/] /*2*/,
/*[*/ [] /*]*/,/*[*/ [`RED`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`EMERA`,
	  `There is an emerald here.`,
	  `large emerald`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`BUOY`] /*}*/] /*2*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 5, 10, 5, 0] /*}*/] /*2*/,/*[*/ [] /*]*/)

add_object(/*#*/ [object, /*{*/ [`SHOVE`,
	  `There is a large shovel here.`,
	  `shovel`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(toolbit,ovison,takebit)] /*1*/, 0, 0, 0, 15, 0] /*}*/] /*2*/,/*[*/ [] /*]*/)

add_object(/*#*/ [object, /*{*/ [`GUANO`,
	  `There is a hunk of bat guano here.`,
	  `hunk of bat guano`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 0, 0, 20, 0] /*}*/] /*2*/,/*[*/ [`CRAP`, `SHIT`, `HUNK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`GRUE`,
	  ``, `lurking grue`, /*%*/ [false] /*1*/, grue_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, 0, 0] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [`LURKI`] /*]*/)

/*#*/ [room, /*{*/ [`VLBOT`,
`You are at the bottom of a large dormant volcano.  High above you
light may be seen entering from the cone of the volcano.  The only
exit here is to the north.`,
       `Volcano Bottom`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `LAVA`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BALLO`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

psetg(volcore, `Volcano Core`)

nulexit = /*#*/ [exit, /*{*/ [`#!#!#`, `!`] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`VAIR1`,
`You are about one hundred feet above the bottom of the volcano.  The
top of the volcano is clearly visible here.`,
       /*%*/ [volcore] /*1*/,/*%*/ [false] /*1*/, /*%*/ [nulexit] /*1*/,/*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rairbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`VAIR2`,
`You are about two hundred feet above the volcano floor.  Looming
above is the rim of the volcano.  There is a small ledge on the west
side.`,
       /*%*/ [volcore] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `LEDG2`, `LAND`, `LEDG2`] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rairbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`VAIR3`,
`You are high above the floor of the volcano.  From here the rim of
the volcano looks very narrow and you are very near it.  To the 
east is what appears to be a viewing ledge, too thin to land on.`,
       /*%*/ [volcore] /*1*/,/*%*/ [false] /*1*/, /*%*/ [nulexit] /*1*/,/*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rairbit] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`VAIR4`,
`You are near the rim of the volcano which is only about 15 feet
across.  To the west, there is a place to land on a wide ledge.`,
       /*%*/ [volcore] /*1*/,       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`LAND`, `LEDG4`, `EAST`, `LEDG4`] /*}*/] /*2*/,
       /*(*/ [] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [rairbit] /*1*/] /*}*/] /*2*/

cxgnome = /*#*/ [cexit, /*{*/ [`GNOME-DOOR`, `VLBOT`] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LEDG2`,
`You are on a narrow ledge overlooking the inside of an old dormant
volcano.  This ledge appears to be about in the middle between the
floor below and the rim above. There is an exit here to the south.`,
       `Narrow Ledge`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, /*#*/ [nexit, `I wouldn't jump from here.`] /*2*/,
	      `LAUNC`, `VAIR2`, `WEST`, /*%*/ [cxgnome] /*1*/,`SOUTH`, `LIBRA`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`HOOK1`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ZORKM`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LIBRA`,
`You are in a room which must have been a large library, probably
for the royal family.  All of the shelves appear to have been gnawed
to pieces by unfriendly gnomes.  To the north is an exit.`,
       `Library`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `LEDG2`, `OUT`, `LEDG2`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BLBK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`GRBK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`PUBK`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`WHBK`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LEDG3`,
`You are on a ledge in the middle of a large volcano.  Below you
the volcano bottom can be seen and above is the rim of the volcano.
A couple of ledges can be seen on the other side of the volcano;
it appears that this ledge is intermediate in elevation between
those on the other side.  The exit from this room is to the east.`,
       `Volcano View`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, /*#*/ [nexit, `I wouldn't try that.`] /*2*/,
	      `CROSS`, /*#*/ [nexit, `It is impossible to cross this distance.`] /*2*/,
	      `EAST`, `EGYPT`] /*}*/] /*2*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LEDG4`,
       ``,
       `Wide Ledge`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`DOWN`, /*#*/ [nexit, `It's a long way down.`] /*2*/,
	      `LAUNC`, `VAIR4`, `WEST`, /*%*/ [cxgnome] /*1*/,`SOUTH`, `SAFE`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`HOOK2`] /*}*/] /*2*/] /*)*/,
       ledge_function] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`SAFE`,
       ``,
       `Dusty Room`,
       t,
       /*#*/ [exit, /*{*/ [`NORTH`, `LEDG4`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`SSLOT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`SAFE`] /*}*/] /*2*/] /*)*/,
       safe_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`LAVA`,
`You are in a small room, whose walls are formed by an old lava flow.
There are exits here to the west and the south.`,
       `Lava Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`SOUTH`, `VLBOT`, `WEST`, `RUBYR`] /*}*/] /*2*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`BALLO`,
`There is a very large and extremely heavy wicker basket with a cloth
bag here. Inside the basket is a metal receptacle of some kind. 
Attached to the basket on the outside is a piece of wire.`,
	  `basket`,
	  /*%*/ [false] /*1*/,
	  balloon, /*(*/ [/*#*/ [find_obj, /*{*/ [`CBAG`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BROPE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`RECEP`] /*}*/] /*2*/] /*)*/,
	  /*%*/ [false] /*1*/, /*%*/ [_(vehbit,ovison)] /*1*/, 0, 0, 0, 70, 100] /*}*/] /*2*/,
 /*[*/ [`BASKE`] /*]*/, /*[*/ [`WICKE`] /*]*/)

find_obj(`BALLO`)[oopen_Q] = t
find_obj(`BALLO`)[orand] = rairbit

 /*#*/ [object, /*{*/ [`RECEP`,
	  ``,
	  `receptacle`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`BALLO`] /*}*/] /*2*/, /*%*/ [_(contbit,ovison,searchbit)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,6] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`CBAG`,
	  ``,
	  `cloth bag`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`BALLO`] /*}*/] /*2*/, /*%*/ [ovison] /*1*/,0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`BAG`] /*]*/, /*[*/ [`CLOTH`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BROPE`,
	  ``, `braided wire`, /*%*/ [false] /*1*/, wire_function, /*(*/ [] /*)*/,
	  /*#*/ [find_obj, /*{*/ [`BALLO`] /*}*/] /*2*/, /*%*/ [_(tiebit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`WIRE`] /*]*/, /*[*/ [`BRAID`] /*]*/)

 add_object(/*#*/ [object, /*{*/ [`HOOK1`,
	  `There is a small hook attached to the rock here.`,
	  `hook`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`HOOK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`HOOK2`,
	  `There is a small hook attached to the rock here.`,
	  `hook`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`HOOK`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`ZORKM`,
	  `There is an engraved zorkmid coin here.`,
	  `priceless zorkmid`,
	  `On the floor is a gold zorkmid coin (a valuable collector's item).`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(readbit,ovison,takebit)] /*1*/, 0, 10, 12, 10, 0] /*}*/] /*2*/,
 /*[*/ [`COIN`] /*]*/, /*[*/ [`GOLD`] /*]*/)

add_desc(find_obj(`ZORKM`),
	  `
	       --------------------------
	      /      Gold Zorkmid	 \\
	     /  T e n   T h o u s a n d   \\
	    /        Z O R K M I D S	   \\
	   /				    \\
	  /        ||||||||||||||||||	     \\
	 /        !||||		 ||||!	      \\
	|	   |||   ^^  ^^   |||	       |
	|	   |||	 OO  OO   |||	       |
	| In Frobs  |||	   <<    |||  We Trust |
	|	     || (______) ||	       |
	|	      |          |	       |
	|	      |__________|	       |
	 \\				      /
	  \\    -- Lord Dimwit Flathead --    /
	   \\    -- Beloved of Zorkers --    /
	    \\				   /
	     \\	     * 722 G.U.E. *       /
	      \\				 /
	       --------------------------
`)


add_object(/*#*/ [object, /*{*/ [`SAFE`,
	  ``,
	  `box`,
	  /*%*/ [false] /*1*/, safe_function, /*(*/ [/*#*/ [find_obj, /*{*/ [`CROWN`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`CARD`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,ovison)] /*1*/,
	  0, 0, 0, /*%*/ [bigfix] /*1*/,15] /*}*/] /*2*/,
 /*[*/ [`BOX`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`CARD`,
	  `There is a card with writing on it here.`,
	  `card`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`SAFE`] /*}*/] /*2*/,
	  /*%*/ [_(ovison,takebit,readbit,burnbit)] /*1*/, 0, 0, 0, 1, 0] /*}*/] /*2*/,
 /*[*/ [`NOTE`] /*]*/)

add_desc(find_obj(`CARD`),
	  `
Warning:
    This room was constructed over very weak rock strata.  Detonation
of explosives in this room is strictly prohibited!
			Frobozz Magic Cave Company
			per M. Agrippa, foreman
`)

add_object(/*#*/ [object, /*{*/ [`SSLOT`,
	  ``,
	  `hole`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, /*%*/ [bigfix] /*1*/,10] /*}*/] /*2*/,
 /*[*/ [`SLOT`, `HOLE`] /*]*/)

find_obj(`SSLOT`)[oopen_Q] = t

add_object(/*#*/ [object, /*{*/ [`CROWN`,
	  `Lord Dimwit's crown is here.`,
	  `crown`,
	  `The excessively gaudy crown of Lord Dimwit Flathead is here.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`SAFE`] /*}*/] /*2*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 15, 10, 10, 0] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [`GAUDY`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BRICK`,
	  `There is a square brick here which feels like clay.`,
	  `brick`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,searchbit,ovison,takebit)] /*1*/, 0, 0, 0, 9, 2] /*}*/] /*2*/,
 /*[*/ [`BRICK`] /*]*/, /*[*/ [`SQUAR`, `CLAY`] /*]*/)

find_obj(`BRICK`)[oopen_Q] = t

add_object(/*#*/ [object, /*{*/ [`FUSE`,
	  `There is a coil of thin shiny wire here.`,
	  `wire coil`,
	  /*%*/ [false] /*1*/, fuse_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(burnbit,ovison,takebit)] /*1*/, 0, 0, 0, 1, 0] /*}*/] /*2*/,
 /*[*/ [`COIL`, `WIRE`] /*]*/, /*[*/ [`SHINY`, `THIN`] /*]*/)


add_object(/*#*/ [object, /*{*/ [`GNOME`,
	  `There is a nervous Volcano Gnome here.`,
	  `Volcano Gnome`,
	  /*%*/ [false] /*1*/, gnome_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vicbit,ovison)] /*1*/, 0, 0, 0, /*%*/ [bigfix] /*1*/,0] /*}*/] /*2*/,
 /*[*/ [`TROLL`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BLABE`,
	  `There is a blue label here.`,
	  `blue label`, /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`BALLO`] /*}*/] /*2*/,
	  /*%*/ [_(ovison,takebit,readbit,burnbit)] /*1*/, 0, 0, 0, 1, 0] /*}*/] /*2*/,
 /*[*/ [`LABEL`] /*]*/, /*[*/ [`BLUE`] /*]*/)

add_desc(find_obj(`BLABE`),
	  `
	  !!!!  FROBOZZ MAGIC BALLOON COMPANY !!!!

Hello, Aviator!

Instructions for use:
   
   To get into balloon, say 'Board'
   To leave balloon, say 'Disembark'
   To land, say 'Land'
    
Warranty:
   
   No warranty is expressed or implied.  You're on your own, sport!

					Good Luck.
`)

add_object(/*#*/ [object, /*{*/ [`DBALL`,
	  `There is a balloon here, broken into pieces.`,
	  `broken balloon`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison)] /*1*/, 0, 0, 0, 40, 0] /*}*/] /*2*/,
 /*[*/ [`BALLO`, `BASKE`] /*]*/, /*[*/ [`BROKE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BLBK`,
	  `There is a blue book here.`,
	  `blue book`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison,readbit)] /*1*/, 0, 0, 0, 10, 2] /*}*/] /*2*/,
 /*[*/ [`BOOK`] /*]*/, /*[*/ [`BLUE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`GRBK`,
	  `There is a green book here.`,
	  `green book`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison,readbit)] /*1*/, 0, 0, 0, 10, 2] /*}*/] /*2*/,
 /*[*/ [`BOOK`] /*]*/, /*[*/ [`GREEN`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`PUBK`,
	  `There is a purple book here.`,
	  `purple book`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`STAMP`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(takebit,ovison,readbit,contbit)] /*1*/,
	  0, 0, 0, 10, 2] /*}*/] /*2*/,
 /*[*/ [`BOOK`] /*]*/, /*[*/ [`PURPL`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`WHBK`,
	  `There is a white book here.`,
	  `white book`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(contbit,takebit,ovison,readbit)] /*1*/, 0, 0, 0, 10, 2] /*}*/] /*2*/,
 /*[*/ [`BOOK`] /*]*/, /*[*/ [`WHITE`] /*]*/)

psetg(greek_to_me, 
`This book is written in a tongue with which I am unfamiliar.`)

add_desc(find_obj(`BLBK`), greek_to_me)
add_desc(find_obj(`GRBK`), greek_to_me)
add_desc(find_obj(`PUBK`), greek_to_me)
add_desc(find_obj(`WHBK`), greek_to_me)

 /*#*/ [object, /*{*/ [`STAMP`,	
	  `There is a Flathead Commemorative stamp here.`,
	  `stamp`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*#*/ [find_obj, /*{*/ [`PUBK`] /*}*/] /*2*/, /*%*/ [_(takebit,readbit,burnbit,ovison)] /*1*/,
	  0, 4, 10, 1, 0] /*}*/] /*2*/

add_desc(find_obj(`STAMP`),
	  `
---v----v----v----v----v----v----v----v---
|					 |
|	   ||||||||||	     LORD	 |
>         !||||	     |	    DIMWIT	 <
|	  ||||    ---|	   FLATHEAD	 |
|	  |||C	   CC \\  		 |
>	   ||||	      _\\		 <
|	    ||| (____|			 |
|	     ||      |			 |
>	      |______|	     Our	 <
|		/   \\	  Excessive	 |
|	       /     \\	    Leader	 |
>	      |	      |			 <
|	      |       |			 |
|					 |
>    G.U.E. POSTAGE	   3 Zorkmids    <
|					 |
---^----^----^----^----^----^----^----^---
`)

bloc = find_room(`VLBOT`)

// SET UP LIGHT INTERRUPTS, ETC.

find_obj(`LAMP`)[orand] = /*[*/ [0, clock_disable(clock_int(lntin,350))] /*]*/

find_obj(`CANDL`)[orand] = false

find_obj(`MATCH`)[orand] = 5		// NUMBER OF MATCHES

psetg(indentstr, rest(istring(8, _X__), 8))

/*#*/ [room, /*{*/ [`TOMB`,
`You are in the Tomb of the Unknown Implementer.
A hollow voice says:  \"That's not a bug, it's a feature!\`,
       `Tomb of the Unknown Implementer`,
	/*%*/ [false] /*1*/, /*#*/ [exit, /*{*/ [`WEST`, `LLD2`] /*}*/] /*2*/, /*(*/ [/*#*/ [find_obj, /*{*/ [`TOMB`] /*}*/] /*2*/,
				    /*#*/ [find_obj, /*{*/ [`HEADS`] /*}*/] /*2*/,
				    /*#*/ [find_obj, /*{*/ [`COKES`] /*}*/] /*2*/,
				    /*#*/ [find_obj, /*{*/ [`LISTS`] /*}*/] /*2*/] /*)*/,
	/*%*/ [false] /*1*/, 0] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`TOMB`,
`There is a tomb here, made of the finest marble, and large enough
for four headless corpses.  On one end is the cryptic inscription:
		    
		      \"Feel Free.\"
`,
	  `tomb`, /*%*/ [false] /*1*/,
	  head_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,readbit,ovison)] /*1*/] /*}*/] /*2*/,
 /*[*/ [`GRAVE`] /*]*/)

add_desc(find_obj(`TOMB`),
`Here lie the implementers, whose heads were placed on poles by the
Keeper of the Dungeon for amazing untastefulness.`)

add_object(/*#*/ [object, /*{*/ [`HEADS`,
	  `There are four heads here, mounted securely on poles.`,
	  `set of poled heads`, /*%*/ [false] /*1*/,
	  head_function,
	  /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,sacredbit,ovison)] /*1*/] /*}*/] /*2*/,
 /*[*/ [`HEAD`, `POLE`, `POLES`, `PDL`, `BKD`, `TAA`, `MARC`, `IMPLE`, `LOSER`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`COKES`,
`Many empty Coke bottles are here.  Alas, they can't hold water.`,
	  `bunch of Coke bottles`,
`There is a large pile of empty Coke bottles here, evidently produced
by the implementers during their long struggle to win totally.`,
	  coke_bottles,
	  /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit)] /*1*/, 0, 0, 0, 15] /*}*/] /*2*/,
 /*[*/ [`BOTTL`] /*]*/, /*[*/ [`COKE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`LISTS`,
`There is an enormous stack of line-printer paper here.  It is barely
readable.`,
	  `stack of listings`,
`There is a gigantic pile of line-printer output here.  Although the
paper once contained useful information, almost nothing can be
distinguished now.`,
	  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(readbit,burnbit,ovison,takebit)] /*1*/, 0, 0, 0, 70] /*}*/] /*2*/,
 /*[*/ [`PAPER`, `LIST`, `PRINT`, `LISTI`, `STACK`] /*]*/)

add_desc(find_obj(`LISTS`),
	  `<DEFINE FEEL-FREE (LOSER)
		   <TELL \"FEEL FREE, CHOMPER!\">>
			...
The rest is, alas, unintelligible (as were the implementers).`)

add_object(/*#*/ [object, /*{*/ [`LCASE`,
`There is a large case here, containing objects which you used to
possess.`,
`large case`, /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,transbit)] /*1*/] /*}*/] /*2*/,
 /*[*/ [`CASE`] /*]*/, /*[*/ [`LARGE`] /*]*/)

mapf(false,
   function(x) {
      rtro(find_room(spname(x)), rfillbit);
    },
 _X,/*[*/ [resen_X_rooms, reses_X_rooms, dam_X_rooms, strea_X_rooms,
   rivr1_X_rooms, rivr2_X_rooms, rivr3_X_rooms, rivr4_X_rooms, rivr5_X_rooms,
   beach_X_rooms, rcave_X_rooms, dock_X_rooms, wclf1, wclf2, fante, pog] /*]*/)

mapf(false,
  function(x) {
      rtro(find_room(x), rhousebit);
    },
  /*[*/ [`LROOM`, `KITCH`, `ATTIC`] /*]*/)

mapf(false,
   function(x) {
      rtro(find_room(x), rsacredbit);
    },
      /*[*/ [`BSHAF`,
       `RIVR1`,
       `DOCK`,
       `FANTE`,
       `FALLS`,
       `BEACH`,
       `RCAVE`,
       `VAIR1`,
       `VAIR2`,
       `VAIR3`,
       `VAIR4`,
       `RIVR2`,
       `RIVR3`,
       `RIVR4`,
       `RIVR5`,
       `TIMBE`,
       `WHOUS`,
       `NHOUS`,
       `EHOUS`,
       `SHOUS`,
       `KITCH`,
       `LROOM`,
       `FORE1`,
       `FORE2`,
       `FORE3`,
       `FORE4`,
       `FORE5`,
       `CLEAR`,
       `TEMP1`,
       `TEMP2`,
       `CLTOP`,
       `CLMID`,
       `CLBOT`,
       `RAINB`,
       `FALLS`] /*]*/)

bucket_top_X_flag = false

magcmach = /*#*/ [cexit, /*{*/ [`FROBOZZ`, `CMACH`, ``] /*}*/] /*2*/
magalice = /*#*/ [cexit, /*{*/ [`FROBOZZ`, `ALICE`, ``] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`MAGNE`,
       ``,
       `Low Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, /*%*/ [magcmach] /*1*/,`SOUTH`, /*%*/ [magcmach] /*1*/,`WEST`, /*%*/ [magcmach] /*1*/,`NE`, /*%*/ [magcmach] /*1*/,	      `NW`, /*%*/ [magalice] /*1*/,`SW`, /*%*/ [magalice] /*1*/,`SE`, /*%*/ [magalice] /*1*/,`EAST`, /*%*/ [magcmach] /*1*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`RBTLB`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ROBOT`] /*}*/] /*2*/] /*)*/, magnet_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CMACH`,
       ``,
       `Machine Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MAGNE`, `SOUTH`, `CAGER`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`SQBUT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`RNBUT`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`TRBUT`] /*}*/] /*2*/] /*)*/,
       cmach_room] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAGER`,
`You are in a dingy closet adjacent to the machine room.  On one wall
is a small sticker which says
		Protected by
		  FROBOZZ
	     Magic Alarm Company
	      (Hello, footpad!)
`,
       `Dingy Closet`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, `CMACH`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`SPHER`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`CAGED`,
`You are trapped inside an iron cage.`,
       `Cage`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NORTH`, /*#*/ [nexit, ``] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`CAGE`] /*}*/] /*2*/] /*)*/, caged_room] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`CAGE`,
	  `There is a mangled cage here.`,
	  `mangled cage`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,ndescbit)] /*1*/, 0, 0, 0, 60, 0] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [] /*]*/)

add_object(/*#*/ [object, /*{*/ [`RCAGE`,
	  `There is an iron cage in the middle of the room.`,
	  `iron cage`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [ovison] /*1*/,0, 0, 0, 0, 0] /*}*/] /*2*/,
 /*[*/ [`CAGE`] /*]*/, /*[*/ [`IRON`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`SPHER`,
	  `There is a beautiful crystal sphere here.`,
	  `crystal sphere`,
	  /*%*/ [false] /*1*/, sphere_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(trytakebit,sacredbit,ovison)] /*1*/, 0, 6, 6, 10, 0] /*}*/] /*2*/,
 /*[*/ [`BALL`] /*]*/, /*[*/ [`CRYST`, `GLASS`] /*]*/)

add_object(aobject(`SQBUT`, butstr,buttons, ovison,ndescbit), /*[*/ [`BUTTO`] /*]*/, /*[*/ [`SQUAR`] /*]*/)
add_object(aobject(`RNBUT`, butstr,buttons, ovison,ndescbit), /*[*/ [`BUTTO`] /*]*/, /*[*/ [`ROUND`] /*]*/)
add_object(aobject(`TRBUT`, butstr,buttons, ovison,ndescbit), /*[*/ [`BUTTO`] /*]*/, /*[*/ [`TRIAN`] /*]*/)

/*#*/ [room, /*{*/ [`TWELL`,

`You are at the top of the well.  Well done.  There are etchings on
the side of the well. There is a small crack across the floor at the
entrance to a room on the east, but it can be crossed easily.`,
       `Top of Well`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, `ALICE`, `DOWN`, /*#*/ [nexit, `It's a long way down!`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`ETCH2`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, 10, /*%*/ [_(rlandbit,rbuckbit)] /*1*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`BWELL`,
       
`You are in a damp circular room, whose walls are made of brick and
mortar.  The roof of this room is not visible, but there appear to be
some etchings on the walls.  There is a passageway to the west.`,
       `Circular Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`WEST`, `MPEAR`, `UP`, /*#*/ [nexit, `The walls cannot be climbed.`] /*2*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`BUCKE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ETCH1`] /*}*/] /*2*/] /*)*/, /*%*/ [false] /*1*/, 0, /*%*/ [_(rlandbit,rbuckbit)] /*1*/] /*}*/] /*2*/

psetg(ewalls, /*[*/ [`ETCHI`, `WALLS`, `WALL`] /*]*/)
add_object(sobject(`ETCH1`, `wall with etchings`, ovison,ndescbit,readbit), ewalls)
add_object(sobject(`ETCH2`, `wall with etchings`, ovison,ndescbit,readbit), ewalls)

add_desc(find_obj(`ETCH2`),
`		        o  b  o
		    r 		  z
		 f   M  A  G  I  C   z
		 c    W  E   L  L    y
		    o		  n
		        m  p  a
`)

add_desc(find_obj(`ETCH1`),
`		        o  b  o
		      		  
		        A  G  I  
		         E   L  
		    		  
		        m  p  a
`)

/*#*/ [room, /*{*/ [`ALICE`,

`You are in a small square room, in the center of which is a large
oblong table, no doubt set for afternoon tea.  It is clear from the
objects on the table that the users were indeed mad.  In the eastern
corner of the room is a small hole (no more that four inches high). 
There are passageways leading away to the west and the northwest.`,
       `Tea Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EAST`, /*#*/ [nexit, `Only a mouse could get in there.`] /*2*/,
	      `WEST`, `TWELL`, `NW`, `MAGNE`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`ATABL`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ECAKE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`ORICE`] /*}*/] /*2*/,
	/*#*/ [find_obj, /*{*/ [`RDICE`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`BLICE`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

psetg(smdrop, /*#*/ [nexit, `There is a chasm too large to jump across.`] /*2*/)

/*#*/ [room, /*{*/ [`ALISM`,

`You are in an enormous room, in the center of which are four wooden
posts delineating a rectanular area, above which is what appears to
be a wooden roof.  In fact, all objects in this room appear to be
abnormally large. To the east is a passageway.  There is a large
chasm on the west and the northwest.`,
       `Posts Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`NW`, /*%*/ [smdrop] /*1*/,`EAST`, `ALITR`, `WEST`, /*%*/ [smdrop] /*1*/,`DOWN`, /*%*/ [smdrop] /*1*/] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`POSTS`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

/*#*/ [room, /*{*/ [`ALITR`,

`You are in a large room, one half of which is depressed.  There is a
large leak in the ceiling through which brown colored goop is
falling.  The only exit to this room is to the west.`,
       `Pool Room`,
       /*%*/ [false] /*1*/,
       /*#*/ [exit, /*{*/ [`EXIT`, `ALISM`, `WEST`, `ALISM`] /*}*/] /*2*/,
       /*(*/ [/*#*/ [find_obj, /*{*/ [`FLASK`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`POOL`] /*}*/] /*2*/, /*#*/ [find_obj, /*{*/ [`SAFFR`] /*}*/] /*2*/] /*)*/] /*}*/] /*2*/

add_object(/*#*/ [object, /*{*/ [`FLASK`,
`A stoppered glass flask with a skull-and-crossbones marking is here.
The flask is filled with some clear liquid.`,
	  `glass flask filled with liquid`,
	  /*%*/ [false] /*1*/, flask_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(transbit,ovison,takebit)] /*1*/, 0, 0, 0, 10, 5] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [`GLASS`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`POOL`,
	  `The leak has submerged the depressed area in a pool of sewage.`,
	  `pool of sewage`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,vicbit)] /*1*/, 0, 0, 0, 0, 0] /*}*/] /*2*/,
 /*[*/ [`SEWAG`] /*]*/, /*[*/ [`LARGE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`SAFFR`,
	  `There is a tin of rare spices here.`,
	  `tin of spices`,
	  /*%*/ [false] /*1*/, /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [takebit] /*1*/,0, 5, 5, 8, 0] /*}*/] /*2*/,
 /*[*/ [`TIN`, `SPICE`] /*]*/, /*[*/ [`RARE`] /*]*/)

add_object(sobject(`ATABL`, `large oblong table`, ovison), /*[*/ [] /*]*/, /*[*/ [`LARGE`, `OBLON`] /*]*/)

add_object(sobject(`POSTS`, `wooden posts`, ovison), /*[*/ [`POST`] /*]*/, /*[*/ [`WOODE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BUCKE`,
`There is a wooden bucket here, 3 feet in diameter and 3 feet high.`,
	  `wooden bucket`,
	  /*%*/ [false] /*1*/, bucket, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(vehbit,ovison)] /*1*/, 0, 0, 0, 100, 100] /*}*/] /*2*/,
 /*[*/ [] /*]*/, /*[*/ [`WOODE`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`ECAKE`,
 `There is a piece of cake here with the words 'Eat Me' on it.`,
 	  `piece of 'Eat Me' cake`,
	  /*%*/ [false] /*1*/, eatme_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit,foodbit)] /*1*/, 0, 0, 0, 10, 0] /*}*/] /*2*/,
 /*[*/ [`CAKE`] /*]*/, /*[*/ [`EATME`, `EAT-M`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`ORICE`,
 `There is a piece of cake with orange icing here.`,
 	  `piece of cake with orange icing`,
	  /*%*/ [false] /*1*/, cake_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(readbit,ovison,takebit,foodbit)] /*1*/, 0, 0, 0, 4, 0] /*}*/] /*2*/,
 /*[*/ [`CAKE`, `ICING`] /*]*/, /*[*/ [`ORANG`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`RDICE`,
 `There is a piece of cake with red icing here.`,
 	  `piece of cake with red icing`,
	  /*%*/ [false] /*1*/, cake_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(readbit,ovison,takebit,foodbit)] /*1*/, 0, 0, 0, 4, 0] /*}*/] /*2*/,
 /*[*/ [`CAKE`, `ICING`] /*]*/, /*[*/ [`RED`] /*]*/)

add_object(/*#*/ [object, /*{*/ [`BLICE`,
 `There is a piece of cake with blue (ecch) icing here.`,
 	  `piece of cake with blue icing`,
	  /*%*/ [false] /*1*/, cake_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(readbit,ovison,takebit,foodbit)] /*1*/, 0, 0, 0, 4, 0] /*}*/] /*2*/,
 /*[*/ [`CAKE`, `ICING`] /*]*/, /*[*/ [`BLUE`, `ECCH`] /*]*/)

find_obj(`BUCKE`)[oopen_Q] = t[orand] = rbuckbit

add_object(/*#*/ [object, /*{*/ [`ROBOT`,
	  `There is a robot here.`,
	  `robot`,
	  /*%*/ [false] /*1*/, robot_function, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(sacredbit,vicbit,ovison,actorbit)] /*1*/, 0, 0, 0, 0, 0] /*}*/] /*2*/,
 /*[*/ [`R2D2`, `C3PO`, `ROBBY`] /*]*/)

find_obj(`ROBOT`)[orand] = add_actor(chtype(/*[*/ [find_room(`MAGNE`), /*(*/ [] /*)*/, 0, false, find_obj(`ROBOT`), robot_actor, 3, t, 0] /*]*/, adv))

add_object(/*#*/ [object, /*{*/ [`RBTLB`,
	  `There is a green piece of paper here.`,
	  `green piece of paper`,
	  /*%*/ [false] /*1*/,  /*%*/ [false] /*1*/, /*(*/ [] /*)*/, /*%*/ [false] /*1*/, /*%*/ [_(ovison,takebit,readbit,burnbit)] /*1*/, 0, 0, 0, 3, 0] /*}*/] /*2*/,
 /*[*/ [`PAPER`] /*]*/, /*[*/ [`GREEN`] /*]*/)

add_desc(find_obj(`RBTLB`),
`	  !!!! 	FROBOZZ MAGIC ROBOT COMPANY  !!!!

Hello, Master!
   
   I am a late-model robot, trained at MIT Tech to perform various
simple household functions. 

Instructions for use:
   To activate me, use the following formula:
	>TELL ROBOT '<something to do>' <cr>
   The quotation marks are required!
       
Warranty:
   No warranty is expressed or implied.
				
					At your service!
`)
// VERBS

sadd_action(`BACK`, backer)

sadd_action(`REPEN`, repent)

sadd_action(`TIME`, play_time)

sadd_action(`WAIT`, wait)

sadd_action(`CURSE`, curses)
vsynonym(`CURSE`, `SHIT`, `FUCK`, `DAMN`)

sadd_action(`JARGON`, jargon)
vsynonym(`JARGON`, `FOO`, `BLETCH`)

add_action(`PUT`,
	    `Put`,
	    /*[*/ [obj, `IN`, obj, /*[*/ [`PUT`, putter] /*]*/, driver] /*]*/,
	    /*[*/ [`DOWN`, obj, /*[*/ [`DROP`, dropper] /*]*/] /*]*/) 
	
add_action(`PICK`,
	    `Pick`,
	    /*[*/ [`UP`, obj, /*[*/ [`TAKE`, take] /*]*/] /*]*/)

vsynonym(`PUT`, `STUFF`, `PLACE`, `INSER`)

1add_action(`LOWER`, `Lower`, r_l)

add_action(`RAISE`,
	    `Raise`,
	    /*[*/ [obj, /*[*/ [`RAISE`, r_l] /*]*/, driver] /*]*/,
	    /*[*/ [`UP`, obj, /*[*/ [`RAISE`, r_l] /*]*/] /*]*/)

vsynonym(`RAISE`, `LIFT`)

1add_action(`MELT`, `Melt`, melter)
vsynonym(`MELT`, `LIQUI`)

add_action(`LIGHT`,
	    `Light`,
	    /*[*/ [/*(*/ [lightbit,aobjs, robjs, no_take] /*)*/, /*[*/ [`LIGHT`, lamp_on] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [lightbit,aobjs, robjs, no_take] /*)*/, `WITH`, /*(*/ [flamebit,aobjs] /*)*/,
					     /*[*/ [`LIGHT`, lamp_on] /*]*/] /*]*/)

add_action(`EXTIN`,
	    `Turn off`,
	    /*[*/ [/*(*/ [lightbit,aobjs, robjs] /*)*/, /*[*/ [`EXTIN`, lamp_off] /*]*/] /*]*/)
vsynonym(`EXTIN`, `DOUSE`)

add_action(`TURN`,
	    `Turn`,
	    /*[*/ [/*(*/ [turnbit,aobjs, robjs, no_take] /*)*/,
	     `WITH`,
	     /*(*/ [toolbit,robjs, aobjs] /*)*/,
	     /*[*/ [`TURN`, turner] /*]*/,
	     driver] /*]*/,
	    /*[*/ [`ON`, /*(*/ [lightbit,aobjs, robjs] /*)*/, /*[*/ [`TURN-ON`, lamp_on] /*]*/] /*]*/,
	    /*[*/ [`OFF`, /*(*/ [lightbit,aobjs, robjs] /*)*/, /*[*/ [`TURN-OFF`, lamp_off] /*]*/] /*]*/,
	    /*[*/ [/*(*/ [turnbit,aobjs, robjs, no_take] /*)*/,
	     `TO`,
	     /*(*/ [_1, robjs] /*)*/,
	     /*[*/ [`TURN-TO`, time] /*]*/] /*]*/)

add_action(`TAKE`, `Take`, /*[*/ [/*(*/ [_1, robjs, aobjs, no_take] /*)*/, /*[*/ [`TAKE`, take] /*]*/] /*]*/)
vsynonym(`TAKE`, `GET`, `HOLD`, `CARRY`)

add_action(`LOOK`,
	    `Look`,
	    /*[*/ [/*[*/ [`LOOK`, room_desc] /*]*/] /*]*/,
	    /*[*/ [`AT`, obj, /*[*/ [`LOOK-AT`, room_desc] /*]*/] /*]*/,
	    /*[*/ [`UNDER`, obj, /*[*/ [`LOOK-UNDER`, look_under] /*]*/] /*]*/)

add_action(`GIVE`,
	    `Give`,
	    /*[*/ [obj, `TO`, /*(*/ [vicbit,robjs, no_take] /*)*/, /*[*/ [`GIVE`, dropper] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [vicbit,robjs, no_take] /*)*/, obj, /*[*/ [`GIVE`, dropper] /*]*/, flip] /*]*/)
vsynonym(`GIVE`, `HAND`, `DONAT`)

add_action(`STRIK`,
	    `Strike`,
	    /*[*/ [/*(*/ [vicbit,_, robjs, no_take] /*)*/,
	     `WITH`,
	     /*(*/ [weaponbit,aobjs, robjs] /*)*/,
	     /*[*/ [`ATTAC`, attacker] /*]*/] /*]*/,
	    /*[*/ [/*(*/ [vicbit,_, robjs, no_take] /*)*/, /*[*/ [`ATTAC`, attacker] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [_1, robjs, aobjs] /*)*/, /*[*/ [`LIGHT`, lamp_on] /*]*/] /*]*/)

aadd_action(`MOVE`, `Move`, move)
vsynonym(`MOVE`, `PULL`, `TUG`)

aadd_action(`WAVE`, `Wave`, waver)
vsynonym(`BRAND`, `FLAUN`)

add_action(`DROP`,
	    `Drop`,
	    /*[*/ [/*(*/ [_1, aobjs] /*)*/, /*[*/ [`DROP`, dropper] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [_1, aobjs] /*)*/, `IN`, obj, /*[*/ [`DROP`, dropper] /*]*/] /*]*/)
vsynonym(`DROP`, `RELEA`)

add_action(`POUR`,
	    `Pour`,
	    /*[*/ [/*(*/ [_1, aobjs] /*)*/, /*[*/ [`POUR`, dropper] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [_1, aobjs] /*)*/, `IN`, obj, /*[*/ [`POUR`, dropper] /*]*/] /*]*/)
vsynonym(`POUR`, `SPILL`)

add_action(`THROW`,
	    `Throw`,
	    /*[*/ [/*(*/ [_1, aobjs] /*)*/, `AT`, /*(*/ [vicbit,robjs, no_take] /*)*/, /*[*/ [`THROW`, dropper] /*]*/] /*]*/)
vsynonym(`THROW`, `HURL`, `CHUCK`)

add_action(`TELL`,
	    `Tell`,
	    /*[*/ [/*(*/ [actorbit] /*)*/, /*[*/ [`TELL`, command] /*]*/] /*]*/)
vsynonym(`TELL`, `COMMA`, `REQUE`)

vsynonym(`LOOK`, `L`, `STARE`, `GAZE`)

sadd_action(`BRIEF`, brief)

sadd_action(`UNBRI`, un_brief)

sadd_action(`SUPER`, super_brief)

sadd_action(`UNSUP`, un_super_brief)

1add_action(`EXAMI`, `Examine`, room_info)
vsynonym(`EXAMI`, `DESCR`, `WHAT`, `WHATS`, `WHAT'`)

1add_action(`FIND`, `Find`, find)
vsynonym(`WHERE`, `FIND`, `SEEK`, `SEE`)

sadd_action(`INVEN`, invent)
vsynonym(`INVEN`, `LIST`)

sadd_action(`VERSI`, version)

sadd_action(`SCRIP`, do_script)

sadd_action(`UNSCR`, do_unscript)

sadd_action(`SAVE`, do_save)

sadd_action(`RESTO`, do_restore)

sadd_action(`WALK-IN`, time)

sadd_action(`C-INT`, time)	// funny verb for clock ints

sadd_action(`DEAD!`, time)	// funny verb for killing villains

sadd_action(`FIRST?`, time)	// funny verb for surprise by villains

sadd_action(`DIAGN`, diagnose)

sadd_action(`HACK?`, time)	// funny verb for villain fight decisions

sadd_action(`SCORE`, score)

sadd_action(`QUIT`, finish)

sadd_action(`INFO`, info)

sadd_action(`HELP`, help)

add_action(`PLUG`,
	    `Plug`,
	    /*[*/ [obj, `WITH`, obj, /*[*/ [`PLUG`, plugger] /*]*/] /*]*/)
vsynonym(`PLUG`, `GLUE`, `PATCH`)

1add_action(`RUB`, `Rub`, rubber)
vsynonym(`RUB`, `CARES`, `TOUCH`, `FONDL`)

sadd_action(`SWIM`, swimmer)
vsynonym(`SWIM`, `BATHE`, `WADE`)

add_action(`BURN`,
	    `Burn`,
	    /*[*/ [/*(*/ [burnbit,aobjs, robjs, no_take] /*)*/, `WITH`, /*(*/ [flamebit,aobjs, robjs] /*)*/,
			/*[*/ [`BURN`, burner] /*]*/] /*]*/)
vsynonym(`BURN`, `INCIN`, `IGNIT`)

add_action(`KILL`,
	    `Kill`,
	    /*[*/ [/*(*/ [villain,robjs, no_take] /*)*/, `WITH`, /*(*/ [weaponbit,aobjs] /*)*/, /*[*/ [`KILL`, killer] /*]*/] /*]*/)
vsynonym(`KILL`,
	 `MURDE`,
	 `SLAY`,
	 `DISPA`)

add_action(`ATTAC`,
	    `Attack`,
	    /*[*/ [/*(*/ [villain,robjs, no_take] /*)*/, `WITH`, /*(*/ [weaponbit,aobjs] /*)*/, /*[*/ [`ATTAC`, attacker] /*]*/] /*]*/)
vsynonym(`ATTAC`,
	 `FIGHT`,
	 `MUNG`,
	 `HACK`,
	 `FROB`,
	 `HURT`,
	 `INJUR`,
	 `DAMAG`,
	 `HIT`)

add_action(`SWING`,
	    `Swing`,
	    /*[*/ [/*(*/ [weaponbit,aobjs] /*)*/, `AT`, /*(*/ [villain,robjs, no_take] /*)*/, /*[*/ [`SWING`, swinger] /*]*/] /*]*/)
vsynonym(`SWING`,
	 `THRUS`)

add_action(`POKE`,
	    `Poke`,
	    /*[*/ [/*(*/ [villain,robjs, no_take] /*)*/, `WITH`, /*(*/ [weaponbit,aobjs] /*)*/, /*[*/ [`POKE`, munger] /*]*/] /*]*/)
vsynonym(`POKE`,
	 `JAB`,
	 `BREAK`)

1add_action(`KICK`, `Kick`, kicker)
vsynonym(`KICK`,
	 `BITE`,
	 `TAUNT`)

1add_action(`PUSH`, `Push`, pusher)
vsynonym(`PUSH`, `PRESS`)

add_action(`OPEN`,
	    `Open`,
	    /*[*/ [/*(*/ [_(doorbit,contbit), aobjs, robjs, no_take] /*)*/, /*[*/ [`OPEN`, opener] /*]*/] /*]*/)
vsynonym(`OPEN`)

add_action(`CLOSE`,
	    `Close`,
	    /*[*/ [/*(*/ [_(doorbit,contbit), aobjs, robjs, no_take] /*)*/, /*[*/ [`CLOSE`, closer] /*]*/] /*]*/)
vsynonym(`CLOSE`)

add_action(`UNLOC`,
	    `Unlock`,
	    /*[*/ [/*(*/ [_1, robjs, no_take] /*)*/, `WITH`, /*(*/ [toolbit,aobjs, robjs] /*)*/, /*[*/ [`UNLOC`, unlocker] /*]*/] /*]*/)

add_action(`LOCK`,
	    `Lock`,
	    /*[*/ [/*(*/ [_1, robjs, no_take] /*)*/, /*[*/ [`LOCK`, locker] /*]*/] /*]*/)

add_action(`TIE`,
	    `Tie`,
	    /*[*/ [obj, `TO`, obj, /*[*/ [`TIE`, tie] /*]*/] /*]*/)
vsynonym(`TIE`, `KNOT`, `FASTE`)

1add_action(`RING`, `Ring`, ring)
vsynonym(`RING`, `PEAL`)

add_action(`EAT`,
	    `Eat`,
	    /*[*/ [/*(*/ [foodbit,aobjs, robjs] /*)*/, /*[*/ [`EAT`, eat] /*]*/] /*]*/)
vsynonym(`EAT`, `CONSU`, `GOBBL`, `MUNCH`, `TASTE`)

add_action(`DRINK`,
	    `Drink`,
	    /*[*/ [/*(*/ [drinkbit,aobjs, robjs] /*)*/, /*[*/ [`DRINK`, eat] /*]*/] /*]*/)
vsynonym(`DRINK`, `IMBIB`, `SWALL`)

add_action(`BRUSH`,
	    `Brush`,
	    /*[*/ [/*(*/ [_1, aobjs, robjs] /*)*/, /*[*/ [`BRUSH`, brush] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [_1, aobjs, robjs] /*)*/, `WITH`, obj, /*[*/ [`BRUSH`, brush] /*]*/] /*]*/)
vsynonym(`BRUSH`, `CLEAN`)

1add_action(`UNTIE`, `Untie`, untie)
vsynonym(`UNTIE`, `RELEA`, `FREE`)

sadd_action(`EXORC`, exorcise)
vsynonym(`EXORC`, `XORCI`)

sadd_action(`CHOMP`, chomp)
vsynonym(`CHOMP`, `LOSE`, `BARF`)

sadd_action(`YELL`, yell)
vsynonym(`YELL`, `SCREA`, `SHOUT`)

sadd_action(`WIN`, win)
vsynonym(`WIN`, `WINNA`)

sadd_action(`FROBO`, frobozz)

sadd_action(`TREAS`, treas)

sadd_action(`TEMPL`, treas)

sadd_action(`PRAY`, prayer)

sadd_action(`JUMP`, leaper)

sadd_action(`SKIP`, skipper)
vsynonym(`SKIP`, `HOP`)

sadd_action(`MUMBL`, mumbler)
vsynonym(`MUMBL`, `SIGH`)

sadd_action(`ZORK`, zork)

sadd_action(`DUNGE`, dungeon)

add_action(`WAKE`,
	    `Wake`,
	    /*[*/ [/*(*/ [vicbit,robjs, no_take] /*)*/, /*[*/ [`WAKE`, alarm] /*]*/] /*]*/)
vsynonym(`WAKE`, `AWAKE`, `SURPR`, `START`)

add_action(`HELLO`,
	    `Hello`,
	    /*[*/ [/*[*/ [`HELLO`, hello] /*]*/, driver] /*]*/,
	    /*[*/ [obj, /*[*/ [`HELLO`, hello] /*]*/] /*]*/)
vsynonym(`HELLO`, `HI`)

1add_action(`GRANI`, `Granite`, granite)

vsynonym(`JUMP`, `LEAP`, `VAULT`)

1add_action(`FILL`, `Fill`, fill)

sadd_action(`WELL`, well)

sadd_action(`ODYSS`, sinbad)
vsynonym(`ODYSS`, `ULYSS`)

add_action(`READ`,
	    `Read`,
	    /*[*/ [/*(*/ [readbit,aobjs, robjs, no_take] /*)*/, /*[*/ [`READ`, reader] /*]*/, driver] /*]*/,
	    /*[*/ [/*(*/ [readbit,aobjs, robjs, no_take] /*)*/, `WITH`, obj, /*[*/ [`READ`, reader] /*]*/] /*]*/)
vsynonym(`READ`, `SKIM`, `SCAN`)

1add_action(`DEFLA`, `Deflate`, deflater)

add_action(`INFLA`,
	    `Inflate`,
	    /*[*/ [obj, `WITH`, /*(*/ [toolbit,robjs, aobjs, no_take] /*)*/, /*[*/ [`INFLA`, inflater] /*]*/] /*]*/)

add_action(`DISEM`,
	    `Disembark from`,
	    /*[*/ [/*(*/ [vehbit,robjs, no_take] /*)*/, /*[*/ [`DISEM`, unboard] /*]*/] /*]*/)

add_action(`DIG`,
	    `Dig`,
	    /*[*/ [`WITH`, /*(*/ [toolbit,aobjs] /*)*/, /*[*/ [`DIG`, digger] /*]*/] /*]*/)

add_action(`BOARD`,
	    `Board`,
	    /*[*/ [/*(*/ [vehbit,robjs, no_take] /*)*/, /*[*/ [`BOARD`, board] /*]*/] /*]*/)

add_action(`KNOCK`,
	    `Knock`,
	    /*[*/ [`AT`, obj, /*[*/ [`KNOCK`, knock] /*]*/, driver] /*]*/,
	    /*[*/ [`ON`, obj, /*[*/ [`KNOCK`, knock] /*]*/] /*]*/,
	    /*[*/ [`DOWN`, /*(*/ [vicbit,_, robjs, no_take] /*)*/, /*[*/ [`ATTAC`, attacker] /*]*/] /*]*/)

sadd_action(`GERON`, geronimo)

sadd_action(`BLAST`, blast)

1add_action(`WALK`, `Walk`, walk)

add_buzz(`RUN`, `GO`, `PROCE`)

setg(robot_actions, _X,/*[*/ [walk_X_words,take_X_words,drop_X_words,put_X_words,    jump_X_words,push_X_words,throw_X_words,turn_X_words] /*]*/)

player = add_actor(chtype(/*[*/ [whous_X_rooms,			  /*(*/ [] /*)*/, 0, false, find_obj(`#####`), false, 0, t, 0] /*]*/,
			 adv))