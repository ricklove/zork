// VOCABULARY

// GLOBAL VARIABLES WHICH ARE ROOMS MUST BE HERE!

psetg(
  rmgvals,
  () => _X)

// GLOBAL VARIABLES WHICH ARE OBJECTS MUST BE HERE!

psetg(
  objgvals,
  () => _X)

// GLOBAL VARIABLES WHICH ARE MONADS MUST BE HERE!

psetg(
  mgvals,
  () => _X)

psetg(
  cntuse,
  "You can't use that!")

setg(
  bigfix,
  _(
    chtype(
      min(
        ),
      fix),
    2))

setg(
  words,
  or(
    get(
      words,
      oblist),
    moblist(
      words,
      23)))

setg(
  object_obl,
  or(
    get(
      objects,
      oblist),
    moblist(
      objects)))

setg(
  room_obl,
  or(
    get(
      rooms,
      oblist),
    moblist(
      rooms)))

setg(
  actors,
  ())

setg(
  stars,
  ())

add_buzz(
  "BY",
  "IS",
  "ONE",
  "IT",
  "A",
  "THE",
  "AN",
  "THIS",
  "OVER")

add_directions(
  "#!#!#",
  "NORTH",
  "SOUTH",
  "EAST",
  "WEST",
  "LAUNC",
  "LAND",
  "SE",
  "SW",
  "NE",
  "NW",
  "UP",
  "DOWN",
  "ENTER",
  "EXIT",
  "CROSS",
  "CLIMB")

dsynonym(
  "NORTH",
  "N")

dsynonym(
  "SOUTH",
  "S")

dsynonym(
  "EAST",
  "E")

dsynonym(
  "WEST",
  "W")

dsynonym(
  "UP",
  "U")

dsynonym(
  "DOWN",
  "D")

dsynonym(
  "ENTER",
  "IN")

dsynonym(
  "EXIT",
  "OUT",
  "LEAVE")

dsynonym(
  "CROSS",
  "TRAVE")

add_zork(
  prep,
  "WITH",
  "AT",
  "TO",
  "IN",
  "DOWN",
  "UP",
  "UNDER")

synonym(
  "WITH",
  "USING",
  "THROU")

synonym(
  "IN",
  "INSID",
  "INTO")

setg(
  rooms,
  ())

setg(
  objects,
  ())

"CEVENT DEFINITIONS"

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.cure_clock,
    <>,
    "CURIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.maint_room,
    t,
    "MNTIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.lantern,
    t,
    "LNTIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.match_function,
    t,
    matin))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.candles,
    t,
    "CNDIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.balloon,
    t,
    "BINT"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.burnup,
    t,
    "BRNIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.fuse_function,
    t,
    "FUSIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.ledge_mung,
    t,
    "LEDIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.safe_mung,
    t,
    "SAFIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.volgnome,
    t,
    "VLGIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.gnome_function,
    t,
    "GNOIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.bucket,
    t,
    "BCKIN"))

or(
  lookup(
    "COMPILE",
    root(
      )),
  cevent(
    0,
    GLOBALS.sphere_function,
    t,
    "SPHIN"))

// KLUDGE

#object
  {"#####"
    "You are here"
    "cretin"
    %<>
    %<>
    ()
    %<>
    %GLOBALS.ovison}

"MAZE"

psetg(
  forest,
  "Forest")

psetg(
  current,
  #nexit
    "You cannot go upstream due to strong currents.")

#room
  {"PASS1"
    "You are in a narrow east-west passageway.  There is a narrow stairway\nleading down at the north end of the room."
    "East-West Passage"
    %<>
    #exit
      {"EAST"
        "CAROU"
        "WEST"
        "MTROL"
        "DOWN"
        "RAVI1"
        "NORTH"
        "RAVI1"}
    ()
    %<>
    5}

#room
  {"WHOUS"
    "You are in an open field west of a big white house, with a boarded\nfront door."
    "West of House"
    t
    #exit
      {"NORTH"
        "NHOUS"
        "SOUTH"
        "SHOUS"
        "WEST"
        "FORE1"
        "EAST"
        #nexit
          "The door is locked, and there is evidently no key."}
    (#find_obj
        {"FDOOR"}
      #find_obj
        {"MAILB"})}

#room
  {"NHOUS"
    "You are facing the north side of a white house.  There is no door here,\nand all the windows are barred."
    "North of House"
    t
    #exit
      {"WEST"
        "WHOUS"
        "EAST"
        "EHOUS"
        "NORTH"
        "FORE3"
        "SOUTH"
        #nexit
          "The windows are all barred."}}

#room
  {"SHOUS"
    "You are facing the south side of a white house. There is no door here,\nand all the windows are barred."
    "South of House"
    t
    #exit
      {"WEST"
        "WHOUS"
        "EAST"
        "EHOUS"
        "SOUTH"
        "FORE2"
        "NORTH"
        #nexit
          "The windows are all barred."}
    ()}

#room
  {"EHOUS"
    ""
    "Behind House"
    t
    #exit
      {"NORTH"
        "NHOUS"
        "SOUTH"
        "SHOUS"
        "EAST"
        "CLEAR"
        "WEST"
        #cexit
          {"KITCHEN-WINDOW"
            "KITCH"}
        "ENTER"
        #cexit
          {"KITCHEN-WINDOW"
            "KITCH"}}
    (#find_obj
        {"WIND1"})
    east_house}

#room
  {"KITCH"
    ""
    "Kitchen"
    t
    #exit
      {"EAST"
        #cexit
          {"KITCHEN-WINDOW"
            "EHOUS"}
        "WEST"
        "LROOM"
        "EXIT"
        #cexit
          {"KITCHEN-WINDOW"
            "EHOUS"}
        "UP"
        "ATTIC"
        "DOWN"
        #nexit
          "Only Santa Claus climbs down chimneys."}
    (#find_obj
        {"WIND2"}
      #find_obj
        {"SBAG"}
      #find_obj
        {"BOTTL"})
    kitchen
    10}

add_object(
  #object
    {"SBAG"
      "A sandwich bag is here."
      "sandwich bag"
      "On the table is an elongated brown sack, smelling of hot peppers."
      %<>
      (#find_obj
          {"GARLI"}
        #find_obj
          {"FOOD"})
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.flamebit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      3
      15},
  ["BAG"
    "SACK"
    "BAGGI"],
  ["BROWN"])

add_object(
  #object
    {"GARLI"
      "There is a clove of garlic here."
      "clove of garlic"
      %<>
      %<>
      ()
      #find_obj
        {"SBAG"}
      %_(
          GLOBALS.takebit,
          GLOBALS.foodbit,
          GLOBALS.ovison)
      0
      0
      0
      5
      0},
  ["CLOVE"])

add_object(
  #object
    {"FOOD"
      "A hot pepper sandwich is here."
      "\.lunch"
      %<>
      %<>
      ()
      #find_obj
        {"SBAG"}
      %_(
          GLOBALS.foodbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      5
      0},
  ["SANDW"
    "LUNCH"
    "PEPPE"
    "DINNE"
    "SNACK"])

add_object(
  #object
    {"GUNK"
      "There is a small piece of vitreous slag here."
      "piece of vitreous slag"
      %<>
      gunk_function
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      10
      0},
  ["MESS"
    "SLAG"],
  ["VITRE"])

add_object(
  #object
    {"COAL"
      "There is a small heap of coal here."
      "small pile of coal"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      20
      0},
  ["HEAP"
    "CHARC"])

add_object(
  #object
    {"JADE"
      "There is an exquisite jade figurine here."
      "jade figurine"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      5
      5
      10
      0},
  ["FIGUR"])

add_object(
  #object
    {"MACHI"
      ""
      "machine"
      %<>
      machine_function
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      50},
  ["PDP10"
    "DRYER"
    "LID"])

add_object(
  #object
    {"DIAMO"
      "There is an enormous diamond (perfectly cut) here."
      "huge diamond"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      10
      6
      5
      0},
  ["PERFE"])

add_object(
  #object
    {"TCASE"
      "There is a trophy case here."
      "trophy case"
      %<>
      trophy_case
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.transbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      %GLOBALS.bigfix},
  ["CASE"],
  ["TROPH"])

add_object(
  #object
    {"BOTTL"
      "A clear glass bottle is here."
      "glass bottle"
      "A bottle is sitting on the table."
      bottle_function
      (#find_obj
          {"WATER"})
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.transbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      5
      4},
  ["CONTA"
    "PITCH"],
  ["GLASS"])

add_object(
  #object
    {"WATER"
      "Water"
      "quantity of water"
      "There is some water here"
      water_function
      ()
      #find_obj
        {"BOTTL"}
      %_(
          GLOBALS.drinkbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      4
      0},
  ["LIQUI"
    "H2O"])

#room
  {"ATTIC"
    "You are in the attic.  The only exit is stairs that lead down."
    "Attic"
    %<>
    #exit
      {"DOWN"
        "KITCH"}
    (#find_obj
        {"BRICK"}
      #find_obj
        {"ROPE"}
      #find_obj
        {"KNIFE"})}

add_object(
  #object
    {"ROPE"
      "There is a large coil of rope here."
      "rope"
      "A large coil of rope is lying in the corner."
      rope_function
      ()
      %<>
      %_(
          GLOBALS.tiebit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      10
      0},
  ["HEMP"
    "COIL"])

add_object(
  #object
    {"KNIFE"
      "There is a nasty-looking knife lying here."
      "knife"
      "On a table is a nasty-looking knife."
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.weaponbit)
      0
      0
      0
      5
      0},
  ["BLADE"],
  ["NASTY"])

add_melee(
  find_obj(
    "KNIFE"),
  GLOBALS.knife_melee)

#room
  {"LROOM"
    ""
    "Living Room"
    t
    #exit
      {"EAST"
        "KITCH"
        "WEST"
        #cexit
          {"MAGIC-FLAG"
            "BLROO"
            "The door is nailed shut."}
        "DOWN"
        #cexit
          {"TRAP-DOOR"
            "CELLA"}}
    (#find_obj
        {"WDOOR"}
      #find_obj
        {"DOOR"}
      #find_obj
        {"TCASE"}
      #find_obj
        {"LAMP"}
      #find_obj
        {"RUG"}
      #find_obj
        {"PAPER"}
      #find_obj
        {"SWORD"})
    living_room}

add_object(
  #object
    {"SWORD"
      "There is an elvish sword here."
      "sword"
      "On hooks above the mantelpiece hangs an elvish sword of great\nantiquity."
      sword
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.weaponbit)
      0
      0
      0
      30
      0},
  ["ORCRI"
    "GLAMD"
    "BLADE"],
  ["ELVIS"])

add_melee(
  find_obj(
    "SWORD"),
  GLOBALS.sword_melee)

add_object(
  #object
    {"LAMP"
      "There is a brass lantern (battery-powered) here."
      "lamp"
      "A battery-powered brass lantern is on the trophy case."
      lantern
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      _1
      0
      0
      15
      0},
  ["LANTE"],
  ["BRASS"])

add_object(
  #object
    {"BLAMP"
      "There is a broken brass lantern here."
      "broken lamp"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0},
  ["LAMP"
    "LANTE"],
  ["BROKE"])

add_object(
  #object
    {"RUG"
      ""
      "carpet"
      %<>
      rug
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.ndescbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["CARPE"],
  ["ORIEN"])

add_object(
  #object
    {"LEAVE"
      "There is a pile of leaves on the ground."
      "pile of leaves"
      %<>
      leaf_pile
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      25
      0},
  ["LEAF"
    "PILE"])

#room
  {"CELLA"
    ""
    "Cellar"
    %<>
    #exit
      {"EAST"
        "MTROL"
        "SOUTH"
        "CHAS2"
        "UP"
        #cexit
          {"TRAP-DOOR"
            "LROOM"
            "The trap door has been barred from the other side."}
        "WEST"
        #nexit
          "You try to ascend the ramp, but it is impossible, and you slide back down."}
    (#find_obj
        {"TDOOR"})
    cellar
    25}

psetg(
  tchomp,
  "The troll fends you off with a menacing gesture.")

#room
  {"MTROL"
    "You are in a small room with passages off in all directions. \nBloodstains and deep scratches (perhaps made by an axe) mar the\nwalls."
    "The Troll Room"
    %<>
    #exit
      {"WEST"
        "CELLA"
        "EAST"
        #cexit
          {"TROLL-FLAG"
            "CRAW4"
            %GLOBALS.tchomp}
        "NORTH"
        #cexit
          {"TROLL-FLAG"
            "PASS1"
            %GLOBALS.tchomp}
        "SOUTH"
        #cexit
          {"TROLL-FLAG"
            "MAZE1"
            %GLOBALS.tchomp}}
    (#find_obj
        {"TROLL"})}

psetg(
  trolldesc,
  "A nasty-looking troll, brandishing a bloody axe, blocks all passages\nout of the room.")

psetg(
  trollout,
  "An unconscious troll is sprawled on the floor.  All passages out of\nthe room are open.")

setg(
  villains,
  (find_obj(
      "TROLL")
    find_obj(
      "THIEF")
    find_obj(
      "CYCLO")))

setg(
  villain_probs,
  iuvector(
    length(
      GLOBALS.villains),
    0))

setg(
  oppv,
  ivector(
    length(
      GLOBALS.villains),
    () => <>))

add_demon(
  setg(
    sword_demon,
    chtype(
      [sword_glow
        GLOBALS.villains
        ()
        1(
          GLOBALS.rooms)
        find_obj(
          "SWORD")
        <>],
      hack)))

#object
  {"TROLL"
    %GLOBALS.trolldesc
    "troll"
    %<>
    troll
    (#find_obj
        {"AXE"})
    %<>
    %_(
        GLOBALS.vicbit,
        GLOBALS.ovison,
        GLOBALS.villain)
    0
    0
    0
    %GLOBALS.bigfix
    2}

add_melee(
  find_obj(
    "TROLL"),
  GLOBALS.troll_melee)

add_demon(
  setg(
    fight_demon,
    chtype(
      [fighting
        GLOBALS.villains
        ()
        1(
          GLOBALS.rooms)
        find_obj(
          "TROLL")
        <>],
      hack)))

add_object(
  #object
    {"AXE"
      "There is a bloody axe here."
      "bloody axe"
      %<>
      %<>
      ()
      %find_obj(
          "TROLL")
      %_(
          GLOBALS.ovison,
          GLOBALS.weaponbit)
      0
      0
      0
      25
      0},
  [],
  ["BLOOD"])

psetg(
  mazedesc,
  "You are in a maze of twisty little passages, all alike.")

psetg(
  deadend,
  "Dead End")

#room
  {"MAZE1"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MTROL"
        "NORTH"
        "MAZE1"
        "SOUTH"
        "MAZE2"
        "EAST"
        "MAZE4"}
    ()}

#room
  {"MAZE2"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"SOUTH"
        "MAZE1"
        "NORTH"
        "MAZE4"
        "EAST"
        "MAZE3"}
    ()}

#room
  {"MAZE3"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MAZE2"
        "NORTH"
        "MAZE4"
        "UP"
        "MAZE5"}
    ()}

#room
  {"MAZE4"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MAZE3"
        "NORTH"
        "MAZE1"
        "EAST"
        "DEAD1"}
    ()}

#room
  {"DEAD1"
    %GLOBALS.deadend
    %GLOBALS.deadend
    %<>
    #exit
      {"SOUTH"
        "MAZE4"}
    ()}

#room
  {"MAZE5"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"EAST"
        "DEAD2"
        "NORTH"
        "MAZE3"
        "SW"
        "MAZE6"}
    (#find_obj
        {"BONES"}
      #find_obj
        {"BAGCO"}
      #find_obj
        {"KEYS"}
      #find_obj
        {"BLANT"}
      #find_obj
        {"RKNIF"})}

add_object(
  #object
    {"RKNIF"
      "There is a rusty knife here."
      "rusty knife"
      "Beside the skeleton is a rusty knife."
      rusty_knife
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.weaponbit)
      0
      0
      0
      20
      0},
  ["KNIFE"],
  ["RUSTY"])

add_melee(
  find_obj(
    "RKNIF"),
  GLOBALS.knife_melee)

add_object(
  #object
    {"BLANT"
      "There is a burned-out lantern here."
      "burned-out lantern"
      "The deceased adventurer's useless lantern is here."
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      20
      0},
  ["LANTE"
    "LAMP"],
  ["USED"
    "BURNE"
    "DEAD"
    "USELE"])

#object
  {"KEYS"
    "There is a set of skeleton keys here."
    "set of skeleton keys"
    %<>
    %<>
    ()
    %<>
    %_(
        GLOBALS.toolbit,
        GLOBALS.takebit,
        GLOBALS.ovison)
    0
    0
    0
    10
    0}

add_object(
  #object
    {"BONES"
      "A skeleton, probably the remains of a luckless adventurer, lies here."
      ""
      %<>
      skeleton
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["SKELE"
    "BODY"])

add_object(
  #object
    {"BAGCO"
      "An old leather bag, bulging with coins, is here."
      "bag of coins"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      10
      5
      15
      0},
  ["BAG"
    "COINS"],
  ["LEATH"])

add_object(
  #object
    {"BAR"
      "There is a large platinum bar here."
      "platinum bar"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.sacredbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      12
      10
      20
      0},
  ["PLATI"])

add_object(
  #object
    {"PEARL"
      "There is a pearl necklace here with hundreds of large pearls."
      "pearl necklace"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      9
      5
      10
      0},
  ["NECKL"])

#room
  {"DEAD2"
    %GLOBALS.deadend
    %GLOBALS.deadend
    %<>
    #exit
      {"WEST"
        "MAZE5"}
    ()}

#room
  {"MAZE6"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"DOWN"
        "MAZE5"
        "EAST"
        "MAZE7"
        "WEST"
        "MAZE6"
        "UP"
        "MAZE9"}
    ()}

#room
  {"MAZE7"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"UP"
        "MAZ14"
        "WEST"
        "MAZE6"
        "NE"
        "DEAD1"
        "EAST"
        "MAZE8"
        "SOUTH"
        "MAZ15"}
    ()}

#room
  {"MAZE8"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"NE"
        "MAZE7"
        "WEST"
        "MAZE8"
        "SE"
        "DEAD3"}
    ()}

#room
  {"DEAD3"
    %GLOBALS.deadend
    %GLOBALS.deadend
    %<>
    #exit
      {"NORTH"
        "MAZE8"}
    ()}

#room
  {"MAZE9"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"NORTH"
        "MAZE6"
        "EAST"
        "MAZ11"
        "DOWN"
        "MAZ10"
        "SOUTH"
        "MAZ13"
        "WEST"
        "MAZ12"
        "NW"
        "MAZE9"}
    ()}

#room
  {"MAZ10"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"EAST"
        "MAZE9"
        "WEST"
        "MAZ13"
        "UP"
        "MAZ11"}
    ()}

#room
  {"MAZ11"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"NE"
        "MGRAT"
        "DOWN"
        "MAZ10"
        "NW"
        "MAZ13"
        "SW"
        "MAZ12"}}

#room
  {"MGRAT"
    ""
    "Grating Room"
    %<>
    #exit
      {"SW"
        "MAZ11"
        "UP"
        #cexit
          {"KEY-FLAG"
            "CLEAR"
            "The grating is locked"}}
    (#find_obj
        {"GRAT2"})
    maze_11}

#room
  {"MAZ12"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MAZE5"
        "SW"
        "MAZ11"
        "EAST"
        "MAZ13"
        "UP"
        "MAZE9"
        "NORTH"
        "DEAD4"}
    ()}

#room
  {"DEAD4"
    %GLOBALS.deadend
    %GLOBALS.deadend
    %<>
    #exit
      {"SOUTH"
        "MAZ12"}
    ()}

#room
  {"MAZ13"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"EAST"
        "MAZE9"
        "DOWN"
        "MAZ12"
        "SOUTH"
        "MAZ10"
        "WEST"
        "MAZ11"}
    ()}

#room
  {"MAZ14"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MAZ15"
        "NW"
        "MAZ14"
        "NE"
        "MAZE7"
        "SOUTH"
        "MAZE7"}}

#room
  {"MAZ15"
    %GLOBALS.mazedesc
    %GLOBALS.mazedesc
    %<>
    #exit
      {"WEST"
        "MAZ14"
        "SOUTH"
        "MAZE7"
        "NE"
        "CYCLO"}}

psetg(
  stfore,
  "You are in a forest, with trees in all directions around you.")

#room
  {"FORE1"
    %GLOBALS.stfore
    %GLOBALS.forest
    t
    #exit
      {"NORTH"
        "FORE1"
        "EAST"
        "FORE3"
        "SOUTH"
        "FORE2"
        "WEST"
        "FORE1"}
    ()}

#room
  {"FORE4"
    "You are in a large forest, with trees obstructing all views except\nto the east, where a small clearing may be seen through the trees."
    %GLOBALS.forest
    t
    #exit
      {"EAST"
        "CLTOP"
        "NORTH"
        "FORE5"
        "SOUTH"
        "FORE4"
        "WEST"
        "FORE2"}}

#room
  {"FORE5"
    %GLOBALS.stfore
    %GLOBALS.forest
    t
    #exit
      {"NORTH"
        "FORE5"
        "SE"
        "CLTOP"
        "SOUTH"
        "FORE4"
        "WEST"
        "FORE2"}}

psetg(
  fordes,
  "You are in a dimly lit forest, with large trees all around.  To the\neast, there appears to be sunlight.")

#room
  {"FORE2"
    %GLOBALS.fordes
    %GLOBALS.forest
    t
    #exit
      {"NORTH"
        "SHOUS"
        "EAST"
        "CLEAR"
        "SOUTH"
        "FORE4"
        "WEST"
        "FORE1"}
    ()}

#room
  {"FORE3"
    %GLOBALS.fordes
    %GLOBALS.forest
    t
    #exit
      {"NORTH"
        "FORE2"
        "EAST"
        "CLEAR"
        "SOUTH"
        "CLEAR"
        "WEST"
        "NHOUS"}
    ()}

#room
  {"CLEAR"
    ""
    "Clearing"
    t
    #exit
      {"SW"
        "EHOUS"
        "SE"
        "FORE5"
        "NORTH"
        "CLEAR"
        "EAST"
        "CLEAR"
        "WEST"
        "FORE3"
        "SOUTH"
        "FORE2"
        "DOWN"
        #cexit
          {"KEY-FLAG"
            "MGRAT"}}
    (#find_obj
        {"GRAT1"}
      #find_obj
        {"LEAVE"})
    clearing}

#room
  {"RAVI1"
    "You are in a deep ravine at a crossing with an east-west crawlway. \nSome stone steps are at the south of the ravine and a steep staircase\ndescends."
    "Deep Ravine"
    %<>
    #exit
      {"SOUTH"
        "PASS1"
        "DOWN"
        "RESES"
        "EAST"
        "CHAS1"
        "WEST"
        "CRAW1"}}

#room
  {"CRAW1"
    "You are in a crawlway with a three-foot high ceiling.  Your footing\nis very unsure here due to the assortment of rocks underfoot. \nPassages can be seen in the east, west, and northwest corners of the\npassage."
    "Rocky Crawl"
    %<>
    #exit
      {"WEST"
        "RAVI1"
        "EAST"
        "DOME"
        "NW"
        "EGYPT"}}

#room
  {"RESES"
    ""
    "Reservoir South"
    %<>
    #exit
      {"SOUTH"
        #cexit
          {"EGYPT-FLAG"
            "RAVI1"
            "The coffin will not fit through this passage."
            t
            coffin_cure}
        "WEST"
        "STREA"
        "CROSS"
        #cexit
          {"LOW-TIDE"
            "RESEN"
            "You are not equipped for swimming."}
        "NORTH"
        #cexit
          {"LOW-TIDE"
            "RESEN"
            "You are not equipped for swimming."}
        "UP"
        #cexit
          {"EGYPT-FLAG"
            "CANY1"
            "The stairs are too steep for carrying the coffin."
            t
            coffin_cure}}
    (#find_obj
        {"TRUNK"})
    reservoir_south}

#room
  {"RESEN"
    ""
    "Reservoir North"
    %<>
    #exit
      {"NORTH"
        "ATLAN"
        "CROSS"
        #cexit
          {"LOW-TIDE"
            "RESES"
            "You are not equipped for swimming."}
        "SOUTH"
        #cexit
          {"LOW-TIDE"
            "RESES"
            "You are not equipped for swimming."}}
    (#find_obj
        {"PUMP"})
    reservoir_north}

#room
  {"STREA"
    "You are standing on a path beside a flowing stream.  The path\ntravels to the north and the east."
    "Stream"
    %<>
    #exit
      {"EAST"
        "RESES"
        "NORTH"
        "ICY"}
    (#find_obj
        {"FUSE"})}

#room
  {"EGYPT"
    "You are in a room which looks like an Egyptian tomb.  There is an\nascending staircase in the room as well as doors, east and south."
    "Egyptian Room"
    %<>
    #exit
      {"UP"
        "ICY"
        "SOUTH"
        "LEDG3"
        "EAST"
        #cexit
          {"EGYPT-FLAG"
            "CRAW1"
            "The passage is too narrow to accomodate coffins."
            t
            coffin_cure}}
    (#find_obj
        {"COFFI"})}

#room
  {"ICY"
    ""
    "Glacier Room"
    %<>
    #exit
      {"NORTH"
        "STREA"
        "EAST"
        "EGYPT"
        "WEST"
        #cexit
          {"GLACIER-FLAG"
            "RUBYR"}}
    (#find_obj
        {"ICE"})
    glacier_room}

add_object(
  #object
    {"REFL1"
      ""
      "mirror"
      %<>
      mirror_mirror
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.vicbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["MIRRO"])

add_object(
  #object
    {"REFL2"
      ""
      "mirror"
      %<>
      mirror_mirror
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.vicbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["MIRRO"])

add_object(
  #object
    {"ICE"
      "A mass of ice fills the western half of the room."
      "glacier"
      %<>
      glacier
      ()
      %<>
      %_(
          GLOBALS.vicbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["GLACI"])

#room
  {"RUBYR"
    "You are in a small chamber behind the remains of the Great Glacier.\nTo the south and west are small passageways."
    "Ruby Room"
    %<>
    #exit
      {"WEST"
        "LAVA"
        "SOUTH"
        "ICY"}
    (#find_obj
        {"RUBY"})}

#room
  {"ATLAN"
    "You are in an ancient room, long buried by the Reservoir.  There are\nexits here to the southeast and upward."
    "Atlantis Room"
    %<>
    #exit
      {"SE"
        "RESEN"
        "UP"
        "CAVE1"}
    (#find_obj
        {"TRIDE"})}

#room
  {"CANY1"
    "You are on the south edge of a deep canyon.  Passages lead off\nto the east, south, and northwest.  You can hear the sound of\nflowing water below."
    "Deep Canyon"
    %<>
    #exit
      {"NW"
        "RESES"
        "EAST"
        "DAM"
        "SOUTH"
        "CAROU"}}

#room
  {"ECHO"
    "You are in a large room with a ceiling which cannot be detected from\nthe ground. There is a narrow passage from east to west and a stone\nstairway leading upward.  The room is extremely noisy.  In fact, it is\ndifficult to hear yourself think."
    "Loud Room"
    %<>
    #exit
      {"EAST"
        "CHAS3"
        "WEST"
        "PASS5"
        "UP"
        "CAVE3"}
    (#find_obj
        {"BAR"})
    echo_room}

#object
  {"RUBY"
    "There is a moby ruby lying here."
    "ruby"
    "On the floor lies a moby ruby."
    %<>
    ()
    %<>
    %_(
        GLOBALS.takebit,
        GLOBALS.ovison)
    0
    15
    8
    5
    0}

add_object(
  #object
    {"TRIDE"
      "Neptune's own crystal trident is here."
      "crystal trident"
      "On the shore lies Neptune's own crystal trident."
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      4
      11
      20
      0},
  ["FORK"],
  ["CRYST"])

add_object(
  #object
    {"COFFI"
      "There is a solid-gold coffin, used for the burial of Ramses II, here."
      "gold coffin"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.sacredbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      3
      7
      55
      35},
  ["CASKE"],
  ["GOLD"])

add_object(
  #object
    {"TORCH"
      "There is an ivory torch here."
      "torch"
      "Sitting on the pedestal is a flaming torch, made of ivory."
      %<>
      ()
      %<>
      %_(
          GLOBALS.toolbit,
          GLOBALS.flamebit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      1
      14
      6
      20
      0},
  [],
  ["IVORY"])

#room
  {"MIRR1"
    ""
    "Mirror Room"
    %<>
    #exit
      {"WEST"
        "PASS3"
        "NORTH"
        "CRAW2"
        "EAST"
        "CAVE1"}
    (#find_obj
        {"REFL1"})
    mirror_room}

#room
  {"MIRR2"
    ""
    "Mirror Room"
    t
    #exit
      {"WEST"
        "PASS4"
        "NORTH"
        "CRAW3"
        "EAST"
        "CAVE2"}
    (#find_obj
        {"REFL2"})
    mirror_room}

#room
  {"CAVE1"
    "You are in a small cave with an entrance to the north and a stairway\nleading down."
    "Cave"
    %<>
    #exit
      {"NORTH"
        "MIRR1"
        "DOWN"
        "ATLAN"}}

#room
  {"CAVE2"
    "You are in a tiny cave with entrances west and north, and a dark,\nforbidding staircase leading down."
    "Cave"
    %<>
    #exit
      {"NORTH"
        "CRAW3"
        "WEST"
        "MIRR2"
        "DOWN"
        "LLD1"}
    ()
    cave2_room}

#room
  {"CRAW2"
    "You are in a steep and narrow crawlway.  There are two exits nearby to\nthe south and southwest."
    "Steep Crawlway"
    %<>
    #exit
      {"SOUTH"
        "MIRR1"
        "SW"
        "PASS3"}}

#room
  {"CRAW3"
    "You are in a narrow crawlway.  The crawlway leads from north to south.\nHowever the south passage divides to the south and southwest."
    "Narrow Crawlway"
    %<>
    #exit
      {"SOUTH"
        "CAVE2"
        "SW"
        "MIRR2"
        "NORTH"
        "MGRAI"}}

#room
  {"PASS3"
    "You are in a cold and damp corridor where a long east-west passageway\nintersects with a northward path."
    "Cold Passage"
    %<>
    #exit
      {"EAST"
        "MIRR1"
        "WEST"
        "SLIDE"
        "NORTH"
        "CRAW2"}}

#room
  {"PASS4"
    "You are in a winding passage.  It seems that there is only an exit\non the east end although the whirring from the round room can be\nheard faintly to the north."
    "Winding Passage"
    %<>
    #exit
      {"EAST"
        "MIRR2"
        "NORTH"
        #nexit
          "You hear the whir of the carousel room but can find no entrance."}}

#room
  {"SLIDE"
    "You are in a small chamber, which appears to have been part of a\ncoal mine. On the south wall of the chamber the letters \"Granite\nWall\" are etched in the rock. To the east is a long passage and\nthere is a steep metal slide twisting downward. From the appearance\nof the slide, an attempt to climb up it would be impossible.  To the\nnorth is a small opening."
    "Slide Room"
    %<>
    #exit
      {"EAST"
        "PASS3"
        "DOWN"
        "CELLA"
        "NORTH"
        "ENTRA"}}

#room
  {"ENTRA"
    "You are standing at the entrance of what might have been a coal\nmine. To the northeast and the northwest are entrances to the mine,\nand there is another exit on the south end of the room."
    "Mine Entrance"
    %<>
    #exit
      {"SOUTH"
        "SLIDE"
        "NW"
        "SQUEE"
        "NE"
        "TSHAF"}}

#room
  {"SQUEE"
    "You are a small room.  Strange squeaky sounds may be heard coming from\nthe passage at the west end.  You may also escape to the south."
    "Squeaky Room"
    %<>
    #exit
      {"WEST"
        "BATS"
        "SOUTH"
        "ENTRA"}}

#room
  {"TSHAF"
    "You are in a large room, in the middle of which is a small shaft\ndescending through the floor into darkness below.  To the west and\nthe north are exits from this room.  Constructed over the top of the\nshaft is a metal framework to which a heavy iron chain is attached."
    "Shaft Room"
    %<>
    #exit
      {"DOWN"
        #nexit
          "You wouldn't fit and would die if you could."
        "WEST"
        "ENTRA"
        "NORTH"
        "TUNNE"}
    (#find_obj
        {"TBASK"})}

put(
  add_object(
    #object
      {"TBASK"
        "At the end of the chain is a basket."
        "basket"
        %<>
        dumbwaiter
        ()
        %<>
        %_(
            GLOBALS.contbit,
            GLOBALS.ovison,
            GLOBALS.transbit)
        0
        0
        0
        %GLOBALS.bigfix
        50},
    ["CAGE"
      "DUMBW"
      "BASKE"]),
  GLOBALS.oopen_Q,
  t)

add_object(
  #object
    {"FBASK"
      ""
      ""
      %<>
      dumbwaiter
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["CAGE"
    "DUMBW"
    "BASKE"])

#room
  {"TUNNE"
    "You are in a narrow tunnel with large wooden beams running across\nthe ceiling and around the walls.  A path from the south splits into\npaths running west and northeast."
    "Wooden Tunnel"
    %<>
    #exit
      {"SOUTH"
        "TSHAF"
        "WEST"
        "SMELL"
        "NE"
        "MINE1"}}

#room
  {"SMELL"
    "You are in a small non-descript room.  However, from the direction\nof a small descending staircase a foul odor can be detected.  To the\neast is a narrow path."
    "Smelly Room"
    %<>
    #exit
      {"DOWN"
        "BOOM"
        "EAST"
        "TUNNE"}}

#room
  {"BOOM"
    "You are in a small room which smells strongly of coal gas."
    "Gas Room"
    %<>
    #exit
      {"UP"
        "SMELL"}
    (#find_obj
        {"BRACE"})
    boom_room}

add_object(
  #object
    {"BRACE"
      "There is a sapphire-encrusted bracelet here."
      "sapphire bracelet"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      5
      3
      10
      0},
  ["JEWEL"],
  ["SAPPH"])

#room
  {"TLADD"
    "You are in a very small room.  In the corner is a rickety wooden\nladder, leading downward.  It might be safe to descend.  There is\nalso a staircase leading upward."
    "Ladder Top"
    %<>
    #exit
      {"DOWN"
        "BLADD"
        "UP"
        "MINE7"}}

psetg(
  mindesc,
  "You are in a non-descript part of a coal mine.")

#room
  {"MINE1"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"NORTH"
        "MINE4"
        "SW"
        "MINE2"
        "EAST"
        "TUNNE"}}

#room
  {"MINE2"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"SOUTH"
        "MINE1"
        "WEST"
        "MINE5"
        "UP"
        "MINE3"
        "NE"
        "MINE4"}}

#room
  {"MINE3"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"WEST"
        "MINE2"
        "NE"
        "MINE5"
        "EAST"
        "MINE5"}}

#room
  {"MINE4"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"UP"
        "MINE5"
        "NE"
        "MINE6"
        "SOUTH"
        "MINE1"
        "WEST"
        "MINE2"}}

#room
  {"MINE5"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"DOWN"
        "MINE6"
        "NORTH"
        "MINE7"
        "WEST"
        "MINE2"
        "SOUTH"
        "MINE3"
        "UP"
        "MINE3"
        "EAST"
        "MINE4"}}

#room
  {"MINE6"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"SE"
        "MINE4"
        "UP"
        "MINE5"
        "NW"
        "MINE7"}}

#room
  {"MINE7"
    %GLOBALS.mindesc
    %GLOBALS.mindesc
    %<>
    #exit
      {"EAST"
        "MINE1"
        "WEST"
        "MINE5"
        "DOWN"
        "TLADD"
        "SOUTH"
        "MINE6"}}

#room
  {"BLADD"
    "You are in a rather wide room.  On one side is the bottom of a\nnarrow wooden ladder.  To the northeast and the south are passages\nleaving the room."
    "Ladder Bottom"
    %<>
    #exit
      {"NE"
        "DEAD7"
        "SOUTH"
        "TIMBE"
        "UP"
        "TLADD"}}

#room
  {"DEAD7"
    "Dead End"
    "Dead End"
    %<>
    #exit
      {"SOUTH"
        "BLADD"}
    (#find_obj
        {"COAL"})}

psetg(
  nofit,
  "You cannot fit through this passage with that load.")

#room
  {"TIMBE"
    "You are in a long and narrow passage, which is cluttered with broken\ntimbers.  A wide passage comes from the north and turns at the \nsouthwest corner of the room into a very narrow passageway."
    "Timber Room"
    %<>
    #exit
      {"NORTH"
        "BLADD"
        "SW"
        #cexit
          {"EMPTY-HANDED"
            "BSHAF"
            %GLOBALS.nofit}}
    ()
    no_objs}

#room
  {"BSHAF"
    "You are in a small square room which is at the bottom of a long\nshaft. To the east is a passageway and to the northeast a very narrow\npassage. In the shaft can be seen a heavy iron chain."
    "Lower Shaft"
    %<>
    #exit
      {"EAST"
        "MACHI"
        "OUT"
        #cexit
          {"EMPTY-HANDED"
            "TIMBE"
            %GLOBALS.nofit}
        "NE"
        #cexit
          {"EMPTY-HANDED"
            "TIMBE"
            %GLOBALS.nofit}
        "UP"
        #nexit
          "Not a chance."
        "CLIMB"
        #nexit
          "The chain is not climbable."}
    (#find_obj
        {"FBASK"})
    no_objs}

#room
  {"MACHI"
    ""
    "Machine Room"
    %<>
    #exit
      {"NW"
        "BSHAF"}
    (#find_obj
        {"MSWIT"}
      #find_obj
        {"MACHI"})
    machine_room}

#room
  {"BATS"
    ""
    "Bat Room"
    %<>
    #exit
      {"EAST"
        "SQUEE"}
    (#find_obj
        {"JADE"}
      #find_obj
        {"BAT"})
    bats_room}

#room
  {"DOME"
    ""
    "Dome Room"
    %<>
    #exit
      {"EAST"
        "CRAW1"
        "DOWN"
        #cexit
          {"DOME-FLAG"
            "MTORC"
            "You cannot go down without fracturing many bones."}
        "CLIMB"
        #cexit
          {"DOME-FLAG"
            "MTORC"
            "You cannot go down without fracturing many bones."}}
    (#find_obj
        {"RAILI"})
    dome_room}

#room
  {"MTORC"
    ""
    "Torch Room"
    %<>
    #exit
      {"UP"
        #nexit
          "You cannot reach the rope."
        "WEST"
        "MTORC"
        "DOWN"
        "CRAW4"}
    (#find_obj
        {"TORCH"})
    torch_room}

#room
  {"CRAW4"
    "You are in a north-south crawlway; a passage goes to the east also.\nThere is a hole above, but it provides no opportunities for climbing."
    "North-South Crawlway"
    %<>
    #exit
      {"NORTH"
        "CHAS2"
        "SOUTH"
        "STUDI"
        "EAST"
        "MTROL"
        "UP"
        #nexit
          "Not even a human fly could get up it."}
    ()}

#room
  {"CHAS2"
    "You are on the west edge of a chasm, the bottom of which cannot be\nseen. The east side is sheer rock, providing no exits.  A narrow\npassage goes west, and the path you are on continues to the north and\nsouth."
    "West of Chasm"
    %<>
    #exit
      {"WEST"
        "CELLA"
        "NORTH"
        "CRAW4"
        "SOUTH"
        "GALLE"
        "DOWN"
        #nexit
          "The chasm probably leads straight to the infernal regions."}
    ()}

#room
  {"CAROU"
    ""
    "Round room"
    %<>
    #exit
      {"NORTH"
        #cexit
          {"CAROUSEL-FLIP"
            "CAVE4"
            ""
            %<>
            carousel_exit}
        "SOUTH"
        #cexit
          {"CAROUSEL-FLIP"
            "CAVE4"
            ""
            %<>
            carousel_exit}
        "EAST"
        #cexit
          {"CAROUSEL-FLIP"
            "MGRAI"
            ""
            %<>
            carousel_exit}
        "WEST"
        #cexit
          {"CAROUSEL-FLIP"
            "PASS1"
            ""
            %<>
            carousel_exit}
        "NW"
        #cexit
          {"CAROUSEL-FLIP"
            "CANY1"
            ""
            %<>
            carousel_exit}
        "NE"
        #cexit
          {"CAROUSEL-FLIP"
            "PASS5"
            ""
            %<>
            carousel_exit}
        "SE"
        #cexit
          {"CAROUSEL-FLIP"
            "PASS4"
            ""
            %<>
            carousel_exit}
        "SW"
        #cexit
          {"CAROUSEL-FLIP"
            "MAZE1"
            ""
            %<>
            carousel_exit}
        "EXIT"
        #cexit
          {"CAROUSEL-FLIP"
            "PASS3"
            ""
            %<>
            carousel_out}}
    (#find_obj
        {"IRBOX"})
    carousel_room}

add_object(
  #object
    {"IRBOX"
      "There is a dented iron box here."
      "iron box"
      %<>
      %<>
      (#find_obj
          {"STRAD"})
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.contbit)
      0
      0
      0
      40
      20},
  ["BOX"],
  ["IRON"
    "DENTE"])

add_object(
  #object
    {"STRAD"
      "There is a Stradavarius here."
      "fancy violin"
      %<>
      %<>
      ()
      #find_obj
        {"IRBOX"}
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      10
      10
      10
      0},
  ["VIOLI"],
  ["FANCY"])

#room
  {"PASS5"
    "You are in a high north-south passage, which forks to the northeast."
    "North-South Passage"
    %<>
    #exit
      {"NORTH"
        "CHAS1"
        "NE"
        "ECHO"
        "SOUTH"
        "CAROU"}
    ()}

#room
  {"CHAS1"
    "A chasm runs southwest to northeast.  You are on the south edge; the\npath exits to the south and to the east."
    "Chasm"
    %<>
    #exit
      {"SOUTH"
        "RAVI1"
        "EAST"
        "PASS5"
        "DOWN"
        #nexit
          "Are you out of your mind?"}
    ()}

#room
  {"CAVE3"
    "You are in a cave.  Passages exit to the south and to the east, but\nthe cave narrows to a crack to the west.  The earth is particularly\ndamp here."
    "Damp Cave"
    %<>
    #exit
      {"SOUTH"
        "ECHO"
        "EAST"
        "DAM"
        "WEST"
        #nexit
          "It is too narrow for most insects."}
    ()}

#room
  {"CHAS3"
    "A chasm, evidently produced by an ancient river, runs through the\ncave here.  Passages lead off in all directions."
    "Ancient Chasm"
    %<>
    #exit
      {"SOUTH"
        "ECHO"
        "EAST"
        "TCAVE"
        "NORTH"
        "DEAD5"
        "WEST"
        "DEAD6"}
    ()}

#room
  {"DEAD5"
    "Dead end"
    "Dead end"
    %<>
    #exit
      {"SW"
        "CHAS3"}
    ()}

#room
  {"DEAD6"
    "Dead end"
    "Dead end"
    %<>
    #exit
      {"EAST"
        "CHAS3"}
    ()}

#room
  {"CAVE4"
    "You have entered a cave with passages leading north and southeast."
    "Engravings Cave"
    %<>
    #exit
      {"NORTH"
        "CAROU"
        "SE"
        "RIDDL"}
    (#find_obj
        {"ENGRA"})}

add_object(
  sobject(
    "ENGRA",
    "wall with engravings",
    GLOBALS.ovison,
    GLOBALS.readbit,
    GLOBALS.sacredbit),
  ["INSCR"],
  ["OLD"
    "ANCIE"])

put(
  find_obj(
    "ENGRA"),
  GLOBALS.odesc1,
  "There are old engravings on the walls here.")

#room
  {"RIDDL"
    "This is a room which is bare on all sides.  There is an exit down. \nTo the east is a great door made of stone.  Above the stone, the\nfollowing words are written: 'No man shall enter this room without\nsolving this riddle:\n  What is tall as a house,\n	  round as a cup, \n	  and all the king's horses can't draw it up?'"
    "Riddle Room"
    %<>
    #exit
      {"DOWN"
        "CAVE4"
        "EAST"
        #cexit
          {"RIDDLE-FLAG"
            "MPEAR"
            "Your way is blocked by an invisible force."}}
    (#find_obj
        {"SDOOR"})}

#room
  {"MPEAR"
    "This is a former broom closet.  The exits are to the east and west."
    "Pearl Room"
    %<>
    #exit
      {"EAST"
        "BWELL"
        "WEST"
        "RIDDL"}
    (#find_obj
        {"PEARL"})}

#room
  {"LLD1"
    ""
    "Entrance to Hades"
    t
    #exit
      {"EAST"
        #cexit
          {"LLD-FLAG"
            "LLD2"
            "Some invisible force prevents you from passing through the gate."}
        "UP"
        "CAVE2"
        "ENTER"
        #cexit
          {"LLD-FLAG"
            "LLD2"
            "Some invisible force prevents you from passing through the gate."}}
    (#find_obj
        {"CORPS"}
      #find_obj
        {"GATES"}
      #find_obj
        {"GHOST"})
    lld_room}

add_object(
  #object
    {"GHOST"
      ""
      ""
      %<>
      ghost_function
      ()
      %<>
      %_(
          GLOBALS.vicbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["SPIRI"
    "FIEND"])

#room
  {"LLD2"
    ""
    "Land of the Living Dead"
    t
    #exit
      {"EAST"
        "TOMB"
        "EXIT"
        "LLD1"
        "WEST"
        "LLD1"}
    (#find_obj
        {"BODIE"})
    lld2_room
    30}

#room
  {"MGRAI"
    "You are standing in a small circular room with a pedestal.  A set of\nstairs leads up, and passages leave to the east and west."
    "Grail Room"
    %<>
    #exit
      {"WEST"
        "CAROU"
        "EAST"
        "CRAW3"
        "UP"
        "TEMP1"}
    (#find_obj
        {"GRAIL"})}

add_object(
  #object
    {"GRAIL"
      "There is an extremely valuable (perhaps original) grail here."
      "grail"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      2
      5
      10
      5},
  [])

#room
  {"TEMP1"
    "You are in the west end of a large temple.  On the south wall is an \nancient inscription, probably a prayer in a long-forgotten language. \nThe north wall is solid granite.  The entrance at the west end of the\nroom is through huge marble pillars."
    "Temple"
    t
    #exit
      {"WEST"
        "MGRAI"
        "EAST"
        "TEMP2"}
    (#find_obj
        {"PRAYE"}
      #find_obj
        {"BELL"})}

add_object(
  sobject(
    "PRAYE",
    "prayer",
    _(
      GLOBALS.readbit,
      GLOBALS.sacredbit,
      GLOBALS.ovison)),
  ["INSCR"],
  ["ANCIE"
    "OLD"])

#room
  {"TEMP2"
    "You are in the east end of a large temple.  In front of you is what\nappears to be an altar."
    "Altar"
    t
    #exit
      {"WEST"
        "TEMP1"}
    (#find_obj
        {"BOOK"}
      #find_obj
        {"CANDL"})}

add_object(
  #object
    {"TRUNK"
      "There is an old trunk here, bulging with assorted jewels."
      "trunk with jewels"
      "Lying half buried in the mud is an old trunk, bulging with jewels."
      %<>
      ()
      %<>
      %GLOBALS.takebit
      0
      15
      8
      35
      0},
  ["CHEST"])

add_object(
  #object
    {"BELL"
      "There is a small brass bell here."
      "bell"
      "Lying in a corner of the room is a small brass bell."
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      5
      0},
  [],
  ["BRASS"])

add_object(
  #object
    {"BOOK"
      "There is a large black book here."
      "book"
      "On the altar is a large black book, open to page 569."
      black_book
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      10
      0},
  ["PRAYE"
    "BIBLE"
    "GOODB"],
  ["BLACK"])

add_object(
  #object
    {"CANDL"
      "There are two candles here."
      "pair of candles"
      "On the two ends of the altar are burning candles."
      candles
      ()
      %<>
      %_(
          GLOBALS.flamebit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      1
      0
      0
      10
      0},
  [])

#room
  {"DAM"
    ""
    "Dam"
    t
    #exit
      {"SOUTH"
        "CANY1"
        "DOWN"
        "DOCK"
        "EAST"
        "CAVE3"
        "NORTH"
        "LOBBY"}
    (#find_obj
        {"BOLT"}
      #find_obj
        {"DAM"}
      #find_obj
        {"BUBBL"})
    dam_room}

#room
  {"LOBBY"
    "This room appears to have been the waiting room for groups touring\nthe dam.  There are exits here to the north and east marked\n'Private', though the doors are open, and an exit to the south."
    "Dam Lobby"
    t
    #exit
      {"SOUTH"
        "DAM"
        "NORTH"
        "MAINT"
        "EAST"
        "MAINT"}
    (#find_obj
        {"MATCH"}
      #find_obj
        {"GUIDE"})}

add_object(
  #object
    {"GUIDE"
      "There are tour guidebooks here."
      "tour guidebook"
      "Some guidebooks entitled 'Flood Control Dam #3' are on the reception\ndesk."
      %<>
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.readbit,
          GLOBALS.ovison)
      0
      0
      0
      5
      0},
  ["BOOK"],
  ["TOUR"])

add_object(
  #object
    {"PAPER"
      ""
      "newspaper"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.readbit,
          GLOBALS.ovison)
      0
      0
      0
      2
      0},
  ["NEWSP"
    "ISSUE"
    "REPOR"
    "MAGAZ"
    "NEWS"])

#room
  {"MAINT"
    "You are in what appears to have been the maintenance room for Flood\nControl Dam #3, judging by the assortment of tool chests around the\nroom.  Apparently, this room has been ransacked recently, for most of\nthe valuable equipment is gone. On the wall in front of you is a\npanel of buttons, which are labelled in EBCDIC. However, they are of\ndifferent colors:  Blue, Yellow, Brown, and Red. The doors to this\nroom are in the west and south ends."
    "Maintenance Room"
    %<>
    #exit
      {"SOUTH"
        "LOBBY"
        "WEST"
        "LOBBY"}
    (#find_obj
        {"LEAK"}
      #find_obj
        {"TUBE"}
      #find_obj
        {"WRENC"}
      #find_obj
        {"BLBUT"}
      #find_obj
        {"RBUTT"}
      #find_obj
        {"BRBUT"}
      #find_obj
        {"YBUTT"}
      #find_obj
        {"SCREW"})
    maint_room}

add_object(
  #object
    {"MATCH"
      "There is a matchbook whose cover says 'Visit Beautiful FCD#3' here."
      "matchbook"
      %<>
      match_function
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      2
      0},
  ["FLINT"])

add_object(
  #object
    {"ADVER"
      "There is a small leaflet here."
      "leaflet"
      %<>
      %<>
      ()
      #find_obj
        {"MAILB"}
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      2
      0},
  ["PAMPH"
    "LEAFL"
    "BOOKL"])

add_object(
  #object
    {"MAILB"
      "There is a small mailbox here."
      "mailbox"
      %<>
      %<>
      (#find_obj
          {"ADVER"})
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      10},
  ["BOX"])

#object
  {"TUBE"
    "There is an object which looks like a tube of toothpaste here."
    "tube"
    %<>
    tube_function
    (#find_obj
        {"PUTTY"})
    %<>
    %_(
        GLOBALS.contbit,
        GLOBALS.takebit,
        GLOBALS.ovison)
    0
    0
    0
    10
    7}

add_object(
  #object
    {"PUTTY"
      "There is some gunk here"
      "viscous material"
      %<>
      %<>
      ()
      #find_obj
        {"TUBE"}
      %_(
          GLOBALS.toolbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      6
      0},
  ["MATER"
    "GUNK"
    "GLUE"],
  ["VISCO"])

add_object(
  #object
    {"WRENC"
      "There is a wrench here."
      "wrench"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.toolbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      10
      0},
  [])

add_object(
  #object
    {"SCREW"
      "There is a screwdriver here."
      "screwdriver"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.toolbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      5
      0},
  [])

#room
  {"CYCLO"
    ""
    "Cyclops Room"
    %<>
    #exit
      {"WEST"
        "MAZ15"
        "NORTH"
        #cexit
          {"MAGIC-FLAG"
            "BLROO"
            "The north wall is solid rock."}
        "UP"
        #cexit
          {"CYCLOPS-FLAG"
            "TREAS"
            "The cyclops doesn't look like he'll let you past."}}
    (#find_obj
        {"CYCLO"})
    cyclops_room}

add_melee(
  find_obj(
    "CYCLO"),
  GLOBALS.cyclops_melee)

#room
  {"BLROO"
    "You are in a long passage.  To the south is one entrance.  On the\neast there is an old wooden door, with a large hole in it (about\ncyclops sized)."
    "Strange Passage"
    %<>
    #exit
      {"SOUTH"
        "CYCLO"
        "EAST"
        "LROOM"}
    ()
    time
    10}

add_object(
  #object
    {"CYCLO"
      ""
      "cyclops"
      %<>
      cyclops
      ()
      %<>
      %_(
          GLOBALS.vicbit,
          GLOBALS.ovison,
          GLOBALS.villain)
      0
      0
      0
      %GLOBALS.bigfix
      10000},
  ["ONE-E"
    "MONST"])

#room
  {"TREAS"
    "This is a large room, whose north wall is solid granite.  A number\nof discarded bags, which crumble at your touch, are scattered about\non the floor."
    "Treasure Room"
    %<>
    #exit
      {"DOWN"
        "CYCLO"}
    (#find_obj
        {"CHALI"})
    treasure_room
    25}

add_object(
  #object
    {"CHALI"
      "There is a silver chalice, intricately engraved, here."
      "chalice"
      %<>
      chalice
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      10
      10
      10
      5},
  ["CUP"
    "GOBLE"])

#room
  {"STUDI"
    "You are in what appears to have been an artist's studio.  The walls\nand floors are splattered with paints of 69 different colors. \nStrangely enough, nothing of value is hanging here.  At the north and\nnorthwest of the room are open doors (also covered with paint).  An\nextremely dark and narrow chimney leads up from a fireplace; although\nyou might be able to get up it, it seems unlikely you could get back\ndown."
    "Studio"
    %<>
    #exit
      {"NORTH"
        "CRAW4"
        "NW"
        "GALLE"
        "UP"
        #cexit
          {"LIGHT-LOAD"
            "KITCH"
            "The chimney is too narrow for you and all of your baggage."
            %<>
            chimney_function}}
    ()
    %<>}

#room
  {"GALLE"
    "You are in an art gallery.  Most of the paintings which were here\nhave been stolen by vandals with exceptional taste.  The vandals\nleft through either the north or south exits."
    "Gallery"
    t
    #exit
      {"NORTH"
        "CHAS2"
        "SOUTH"
        "STUDI"}
    (#find_obj
        {"PAINT"})}

add_object(
  #object
    {"PAINT"
      "A masterpiece by a neglected genius is here."
      "painting"
      "Fortunately, there is still one chance for you to be a vandal, for on\nthe far wall is a work of unparalleled beauty."
      painting
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      4
      7
      15
      0},
  ["ART"
    "CANVA"
    "MASTE"])

"LISTS OF CRUFT:  WEAPONS, AND IMMOVABLE OBJECTS"

add_demon(
  setg(
    robber_demon,
    chtype(
      [robber
        ()
        GLOBALS.rooms
        1(
          GLOBALS.rooms)
        find_obj(
          "THIEF")
        <>],
      hack)))

psetg(
  robber_c_desc,
  "There is a suspicious-looking individual, holding a bag, leaning\nagainst one wall.  He is armed with a vicious-looking stilletto.")

psetg(
  robber_u_desc,
  "There is a suspicious-looking individual lying unconscious on the\nground.  His bag and stilletto seem to have vanished.")

add_object(
  #object
    {"THIEF"
      %GLOBALS.robber_c_desc
      "thief"
      %<>
      robber_function
      (#find_obj
          {"STILL"})
      %<>
      %_(
          GLOBALS.vicbit,
          GLOBALS.ovison,
          GLOBALS.villain)
      0
      0
      0
      %GLOBALS.bigfix
      4},
  ["ROBBE"
    "CROOK"
    "CRIME"
    "CRIMI"
    "BANDI"
    "GENT"
    "GENTL"
    "MAN"
    "SHADY"
    "THUG"
    "BAGMA"
    "MAFIA"])

add_melee(
  find_obj(
    "THIEF"),
  GLOBALS.thief_melee)

add_object(
  #object
    {"STILL"
      "There is a vicious-looking stilletto here."
      "stilletto"
      %<>
      %<>
      ()
      %find_obj(
          "THIEF")
      %_(
          GLOBALS.ovison,
          GLOBALS.weaponbit)
      0
      0
      0
      10
      0},
  [],
  ["VICIO"])

setg(
  weapons,
  (find_obj(
      "STICK")
    find_obj(
      "KNIFE")))

setg(
  random_list,
  (find_room(
      "LROOM")
    find_room(
      "KITCH")
    find_room(
      "CLEAR")
    find_room(
      "FORE3")
    find_room(
      "FORE2")
    find_room(
      "SHOUS")
    find_room(
      "FORE2")
    find_room(
      "KITCH")
    find_room(
      "EHOUS")))

add_desc(
  find_obj(
    "BOOK"),
  "COMMANDMENT #12592\nOh ye who go about saying unto each:   \"Hello sailor\":\ndost thou know the magnitude of thy sin before the gods?\nYea, verily, thou shalt be ground between two stones.\nShall the angry gods cast thy body into the whirlpool?\nSurely, thy eye shall be put out with a sharp stick!\nEven unto the ends of the earth shalt thou wander and\nunto the land of the dead shalt thou be sent at last.\nSurely thou shalt repent of thy cunning.")

add_desc(
  find_obj(
    "GUIDE"),
  "\"		   Guide Book to\n		Flood Control Dam #3\n\n  Flood Control Dam #3 (FCD#3) was constructed in year 783 of the\nGreat Underground Empire to harness the destructive power of the\nFrigid River.  This work was supported by a grant of 37 million\nzorkmids from the Central Bureaucracy and your omnipotent local\ntyrant Lord Dimwit Flathead the Excessive. This impressive\nstructure is composed of 3.7 cubic feet of concrete, is 256 feet\ntall at the center, and 193 feet wide at the top.  The reservoir\ncreated behind the dam has a volume of 37 billion cubic feet, an\narea of 12 million square feet, and a shore line of 36 thousand\nfeet.\n\n  The construction of FCD#3 took 112 days from ground breaking to\nthe dedication. It required a work force of 384 slaves, 34 slave\ndrivers, 12 engineers, 2 turtle doves, and a partridge in a pear\ntree. The work was managed by a command team composed of 2345\nbureaucrats, 2347 secretaries (at least two of which can type),\n12,256 paper shufflers, 52,469 rubber stampers, 245,193 red tape\nprocessors, and nearly one million dead trees.\n\n  We will now point out some of the more interesting features\nof FCD#3 as we conduct you on a guided tour of the facilities:\n	1) You start your tour here in the Dam Lobby.\n	   You will notice on your right that .........")

add_desc(
  find_obj(
    "PAPER"),
  "US NEWS & DUNGEON REPORT\n12/12/77  				       Late Dungeon Edition\n\n     In order to get a more-or-less working version, we have\ninstalled one with some known bugs.  In particular, the following\nsequence will not work correctly, nor will anything resembling it:\n>take\ntake what?\n>frob\nwhat do you want me to do with it?\n     Note that if you now respond 'take', the right thing will\nhappen. In short, the current parser can't handle verbs with missing\nobjects.  Since it is completely new, we'd appreciate reports of any\nother bugs encountered.\n\nFLASH!\n     An important change has been made.  When you have been killed,\nand the 'patch' question is asked, or if you are confirming a 'quit',\nit is now necessary to terminate the response to the question with a\ncarriage return (you may be surprised to find that this wasn't true\nbefore).  Also, the answer to the 'patch' question is taken to be yes\nunless something starting with n, N, f, or F is typed; the answer to\nthe 'quit' question is no unless something starting with y, Y, t, or\nT is typed.\n\nFLASH!\n     Another FLAG DAY has been declared for save files.  Yes, ladies\nand gentlemen, yet another incompatible change has been made to the\nsave/restore code.  When will it end?\n\n     Things like the bucket should resume working in this version.\n\n     Many people have reported the following message:\n'GIN FREE STORAGE- VECTOR ...GOUT TIME= n.nn'\nThis indicates that a garbage collection is occurring.  Some reports\nhave this taking up to 30 sec. of cpu time, during which your dungeon\nwill refuse to respond.  We have added a feature which should prevent\nthis; if you see such a message, please send mail to DUNGEON@DM\ndescribing the circumstances (particularly number of moves,\nsave/restore status, and the TIME).  A garbage collection is not\nfatal:  your dungeon should be perfectly all right once it finishes\n(after the GOUT TIME= message is printed).")

add_desc(
  find_obj(
    "ADVER"),
  "WELCOME TO DUNGEON\n\n    DUNGEON is a game of adventure, danger, and low cunning.  In it\nyou will explore some of the most amazing territory ever seen by\nmortal man. Hardened adventurers have run screaming from the terrors\ncontained within!\n\n    In DUNGEON the intrepid explorer delves into the forgotten\nsecrets of a lost labyrinth deep in the bowels of the earth,\nsearching for vast treasures long hidden from prying eyes, treasures\nguarded by fearsome monsters and diabolical traps!\n\n    No PDP-10 should be without one!\n\n    DUNGEON was created at the Programming Technology Division of the\nMIT Laboratory for Computer Science, by Tim Anderson, Marc Blank,\nBruce Daniels, and Dave Lebling.  It was inspired by the ADVENTURE\ngame of Crowther and Woods, and Dungeons and Dragons, by Gygax and\nArneson.  DUNGEON is written in MDL (alias MUDDLE).\n\n    Direct inquiries by Net mail to DUNGEON@MIT-DMS.")

add_desc(
  find_obj(
    "MATCH"),
  "[close cover before striking BKD]\n\nYou too can make BIG MONEY in the exciting field of\n		PAPER SHUFFLING!\nMr. TAA of Muddle, Mass. says: \"Before I took\nthis course I used to be a lowly bit twiddler.\nNow with what I learned at MIT Tech I feel really\nimportant and can obfuscate and confuse with the best.\"\nMr. MARC had this to say: \"Ten short days ago all I could\nlook forward to was a dead-end job as a doctor.  Now\nI have a promising future and make really big Zorkmids.\"\n\nMIT Tech can't promise these fantastic results to everyone.\nBut when you earn your MDL degree from MIT Tech your future\nwill be brighter. Send for our free brochure today.")

add_desc(
  find_obj(
    "ENGRA"),
  "The engravings were incised in the living rock of the cave wall by\nan unknown hand.  They depict, in symbolic form, the beliefs of the\nancient peoples of Zork.  Skillfully interwoven with the bas reliefs\nare excerpts illustrating the major tenets expounded by the sacred\ntexts of the religion of that time.  Unfortunately a later age seems\nto have considered them blasphemous and just as skillfully excised\nthem.")

add_desc(
  find_obj(
    "PRAYE"),
  "The prayer is inscribed in an ancient script which is hardly\nremembered these days, much less understood.  What little of it can\nbe made out seems to be a phillipic against small insects,\nabsent-mindedness, and the picking up and dropping of small objects. \nThe final verse seems to consign trespassers to the land of the\ndead.  All evidence indicates that the beliefs of the ancient\nZorkers were obscure.")

// ASSORTED DOORS

psetg(
  butstr,
  "button")

psetg(
  doorstr,
  "door")

add_object(
  aobject(
    "WIND1",
    "window",
    window_function,
    GLOBALS.ovison,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["WINDO"],
  [])

add_object(
  aobject(
    "WIND2",
    "window",
    window_function,
    GLOBALS.ovison,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["WINDO"],
  [])

add_object(
  aobject(
    "BOLT",
    "bolt",
    bolt_function,
    GLOBALS.turnbit,
    GLOBALS.ovison,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["BOLT"
    "NUT"],
  [])

add_object(
  aobject(
    "GRAT1",
    "grating",
    grat1_function,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["GRATI"
    "GRATE"],
  [])

add_object(
  aobject(
    "GRAT2",
    "grating",
    grat2_function,
    GLOBALS.ovison,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["GRATI"
    "GRATE"],
  [])

add_object(
  aobject(
    "DOOR",
    GLOBALS.doorstr,
    trap_door,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["TRAPD"
    "TRAP-"],
  ["TRAP"])

add_object(
  aobject(
    "TDOOR",
    GLOBALS.doorstr,
    trap_door,
    GLOBALS.doorbit,
    GLOBALS.ndescbit),
  ["TRAPD"
    "TRAP-"],
  ["TRAP"])

add_object(
  aobject(
    "WDOOR",
    GLOBALS.doorstr,
    ddoor_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.readbit),
  ["DOOR"],
  ["WOODE"])

add_desc(
  find_obj(
    "WDOOR"),
  "The engravings translate to 'This space intentionally left blank'")

add_object(
  aobject(
    "FDOOR",
    GLOBALS.doorstr,
    ddoor_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["DOOR"],
  ["FRONT"])

add_object(
  aobject(
    "SDOOR",
    GLOBALS.doorstr,
    ddoor_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["DOOR"],
  ["STONE"])

add_object(
  aobject(
    "MSWIT",
    "switch",
    mswitch_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.turnbit),
  ["SWITC"])

// ASSORTED GARBAGE

add_object(
  sobject(
    "HPOLE",
    "head on a pole",
    GLOBALS.ovison),
  ["HEAD"])

add_object(
  sobject(
    "CORPS",
    "corpses",
    GLOBALS.ovison),
  [],
  ["MANGL"])

add_object(
  aobject(
    "BODIE",
    "pile of bodies",
    body_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.trytakebit),
  ["BODY"
    "CORPS"])

add_object(
  sobject(
    "DAM",
    "dam",
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["GATE"
    "GATES"
    "FCD"])

add_object(
  sobject(
    "RAILI",
    "railing",
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["RAIL"])

add_object(
  sobject(
    "BUTTO",
    "button",
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["SWITC"])

sobject(
  "BUBBL",
  "bubble",
  GLOBALS.ovison,
  GLOBALS.ndescbit)

add_object(
  aobject(
    "LEAK",
    "leak",
    leak_function,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["DRIP"
    "HOLE"])

add_star(
  add_object(
    aobject(
      "EVERY",
      "everything",
      everything,
      GLOBALS.ovison,
      GLOBALS.takebit,
      GLOBALS.no_check_bit,
      GLOBALS.ndescbit),
    ["ALL"]))

add_star(
  add_object(
    aobject(
      "VALUA",
      "valuables",
      valuables,
      GLOBALS.ovison,
      GLOBALS.takebit,
      GLOBALS.no_check_bit,
      GLOBALS.ndescbit),
    ["TREAS"]))

add_star(
  sobject(
    "SAILO",
    "sailor",
    GLOBALS.ovison,
    GLOBALS.ndescbit))

add_star(
  sobject(
    "TEETH",
    "set of teeth",
    GLOBALS.ovison,
    GLOBALS.ndescbit))

add_star(
  sobject(
    "WALL",
    "wall",
    GLOBALS.ovison,
    GLOBALS.ndescbit))

add_star(
  find_obj(
    "GRUE"))

add_star(
  add_object(
    sobject(
      "HANDS",
      "pair of hands",
      GLOBALS.ovison,
      GLOBALS.ndescbit,
      GLOBALS.toolbit),
    ["HAND"],
    ["BARE"]))

add_star(
  add_object(
    sobject(
      "LUNGS",
      "breath",
      GLOBALS.ovison,
      GLOBALS.ndescbit,
      GLOBALS.toolbit),
    ["LUNG"
      "AIR"]))

add_star(
  sobject(
    "AVIAT",
    "flyer",
    GLOBALS.ovison,
    GLOBALS.ndescbit))

add_object(
  sobject(
    "RBUTT",
    GLOBALS.butstr,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"
    "SWITC"],
  ["RED"])

add_object(
  sobject(
    "YBUTT",
    GLOBALS.butstr,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"
    "SWITC"],
  ["YELLO"])

add_object(
  sobject(
    "BLBUT",
    GLOBALS.butstr,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"
    "SWITC"],
  ["BLUE"])

add_object(
  sobject(
    "BRBUT",
    GLOBALS.butstr,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"
    "SWITC"],
  ["BROWN"])

add_object(
  aobject(
    "BAT",
    "bat",
    fly_me,
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.trytakebit),
  ["VAMPI"],
  [])

"MORE VOCABULARY"

sobject(
  "RAINB",
  "rainbow",
  GLOBALS.ovison,
  GLOBALS.ndescbit)

psetg(
  cliffs,
  #nexit
    "The White Cliffs prevent your landing here.")

psetg(
  riverdesc,
  "Frigid River")

#room
  {"DOCK"
    "You are at the base of Flood Control Dam #3, which looms above you\nand to the north.  The river Frigid is flowing by here.  Across the\nriver are the White Cliffs which seem to form a giant wall stretching\nfrom north to south along the east shore of the river as it winds its\nway downstream."
    "Dam Base"
    t
    #exit
      {"NORTH"
        "DAM"
        "UP"
        "DAM"
        "LAUNC"
        "RIVR1"}
    (#find_obj
        {"IBOAT"}
      #find_obj
        {"STICK"})
    %<>}

#room
  {"RIVR1"
    "You are on the River Frigid in the vicinity of the Dam.  The river\nflows quietly here.  There is a landing on the west shore."
    %GLOBALS.riverdesc
    %<>
    #exit
      {"UP"
        %GLOBALS.current
        "WEST"
        "DOCK"
        "LAND"
        "DOCK"
        "DOWN"
        "RIVR2"
        "EAST"
        %GLOBALS.cliffs}
    ()
    %<>
    0
    %GLOBALS.rwaterbit}

#room
  {"RIVR2"
    "The River turns a corner here making it impossible to see the\nDam.  The White Cliffs loom on the east bank and large rocks prevent\nlanding on the west."
    %GLOBALS.riverdesc
    %<>
    #exit
      {"UP"
        %GLOBALS.current
        "DOWN"
        "RIVR3"
        "EAST"
        %GLOBALS.cliffs}
    ()
    %<>
    0
    %GLOBALS.rwaterbit}

#room
  {"RIVR3"
    "The river descends here into a valley.  There is a narrow beach on\nthe east below the cliffs and there is some shore on the west which\nmay be suitable.  In the distance a faint rumbling can be heard."
    %GLOBALS.riverdesc
    %<>
    #exit
      {"UP"
        %GLOBALS.current
        "DOWN"
        "RIVR4"
        "EAST"
        "WCLF1"
        "WEST"
        "RCAVE"
        "LAND"
        #nexit
          "You must specify which direction here."}
    ()
    %<>
    0
    %GLOBALS.rwaterbit}

psetg(
  narrow,
  "The path is too narrow.")

#room
  {"WCLF1"
    "You are on a narrow strip of beach which runs along the base of the\nWhite Cliffs. The only path here is a narrow one, heading south\nalong the Cliffs."
    "White Cliffs Beach"
    %<>
    #exit
      {"SOUTH"
        #cexit
          {"DEFLATE"
            "WCLF2"
            %GLOBALS.narrow}
        "LAUNC"
        "RIVR3"}
    ()
    cliff_function
    0}

#room
  {"WCLF2"
    "You are on a rocky, narrow strip of beach beside the Cliffs.  A\nnarrow path leads north along the shore."
    "White Cliffs Beach"
    %<>
    #exit
      {"NORTH"
        #cexit
          {"DEFLATE"
            "WCLF1"
            %GLOBALS.narrow}
        "LAUNC"
        "RIVR4"}
    ()
    cliff_function
    0}

#room
  {"RIVR4"
    "The river is running faster here and the sound ahead appears to be\nthat of rushing water.  On the west shore is a sandy beach.  A small\narea of beach can also be seen below the Cliffs."
    %GLOBALS.riverdesc
    %<>
    #exit
      {"UP"
        %GLOBALS.current
        "DOWN"
        "RIVR5"
        "EAST"
        "WCLF2"
        "WEST"
        "BEACH"
        "LAND"
        #nexit
          "Specify the direction to land."}
    (#find_obj
        {"BUOY"})
    rivr4_room
    0
    %GLOBALS.rwaterbit}

#room
  {"RIVR5"
    "The sound of rushing water is nearly unbearable here.  On the west\nshore is a large landing area."
    %GLOBALS.riverdesc
    %<>
    #exit
      {"UP"
        %GLOBALS.current
        "DOWN"
        "FCHMP"
        "LAND"
        "FANTE"}
    ()
    %<>
    0
    %GLOBALS.rwaterbit}

#room
  {"FCHMP"
    ""
    "Moby lossage"
    %<>
    #exit
      {"NORTH"
        #nexit
          ""}
    ()
    over_falls}

#room
  {"FANTE"
    "You are on the shore of the River.  The river here seems somewhat\ntreacherous.  A path travels from north to south here, the south end\nquickly turning around a sharp corner."
    "Shore"
    %<>
    #exit
      {"LAUNC"
        "RIVR5"
        "NORTH"
        "BEACH"
        "SOUTH"
        "FALLS"}
    ()
    %<>
    0}

#room
  {"BEACH"
    "You are on a large sandy beach at the shore of the river, which is\nflowing quickly by.  A path runs beside the river to the south here."
    "Sandy Beach"
    %<>
    #exit
      {"LAUNC"
        "RIVR4"
        "SOUTH"
        "FANTE"}
    (#find_obj
        {"STATU"})
    beach_room
    0}

#room
  {"RCAVE"
    "You are on the west shore of the river.  An entrance to a cave is\nto the northwest.  The shore is very rocky here."
    "Rocky Shore"
    %<>
    #exit
      {"LAUNC"
        "RIVR3"
        "NW"
        "TCAVE"}
    ()
    %<>
    0}

#room
  {"TCAVE"
    "You are in a small cave whose exits are on the south and northwest."
    "Small Cave"
    %<>
    #exit
      {"SOUTH"
        "RCAVE"
        "NW"
        "CHAS3"}
    (#find_obj
        {"GUANO"}
      #find_obj
        {"SHOVE"})
    tcave_room}

#room
  {"BARRE"
    "You are in a barrel.  Congratulations.  Etched into the side of the\nbarrel is the word 'Geronimo!'."
    "Barrel"
    %<>
    #exit
      {"EXIT"
        "FALLS"}}

#room
  {"FALLS"
    ""
    "Aragain Falls"
    %<>
    #exit
      {"EAST"
        #cexit
          {"RAINBOW"
            "RAINB"}
        "DOWN"
        "FCHMP"
        "NORTH"
        "FANTE"
        "ENTER"
        "BARRE"
        "UP"
        #cexit
          {"RAINBOW"
            "RAINB"}}
    (#find_obj
        {"RAINB"}
      #find_obj
        {"BARRE"})
    falls_room}

#room
  {"RAINB"
    "You are on top of a rainbow (I bet you never thought you would walk\non a rainbow), with a magnificent view of the Falls.  The rainbow\ntravels east-west here.  There is an NBC Commissary here."
    "Rainbow Room"
    t
    #exit
      {"EAST"
        "POG"
        "WEST"
        "FALLS"}}

setg(
  crain,
  #cexit
    {"RAINBOW"
      "RAINB"})

#room
  {"POG"
    "You are on a small beach on the continuation of the Frigid River\npast the Falls.  The beach is narrow due to the presence of the White\nCliffs.  The river canyon opens here and sunlight shines in from\nabove. A rainbow crosses over the falls to the west and a narrow path\ncontinues to the southeast."
    "End of Rainbow"
    t
    #exit
      {"UP"
        %GLOBALS.crain
        "NW"
        %GLOBALS.crain
        "WEST"
        %GLOBALS.crain
        "SE"
        "CLBOT"}
    (#find_obj
        {"RAINB"}
      #find_obj
        {"POT"})
    %<>
    0}

#room
  {"CLBOT"
    "You are beneath the walls of the river canyon which may be climbable\nhere.  There is a small stream here, which is the lesser part of the\nrunoff of Aragain Falls. To the north is a narrow path."
    "Canyon Bottom"
    t
    #exit
      {"UP"
        "CLMID"
        "CLIMB"
        "CLMID"
        "NORTH"
        "POG"}}

#room
  {"CLMID"
    "You are on a ledge about halfway up the wall of the river canyon.\nYou can see from here that the main flow from Aragain Falls twists\nalong a passage which it is impossible to enter.  Below you is the\ncanyon bottom.  Above you is more cliff, which still appears\nclimbable."
    "Rocky Ledge"
    t
    #exit
      {"UP"
        "CLTOP"
        "CLIMB"
        "CLTOP"
        "DOWN"
        "CLBOT"}}

#room
  {"CLTOP"
    "You are at the top of the Great Canyon on its south wall.  From here\nthere is a marvelous view of the Canyon and parts of the Frigid River\nupstream.  Across the canyon, the walls of the White Cliffs still\nappear to loom far above.  Following the Canyon upstream (north and\nnorthwest), Aragain Falls may be seen, complete with rainbow. \nFortunately, my vision is better than average and I can discern the\ntop of the Flood Control Dam #3 far to the distant north.  To the\nwest and south can be seen an immense forest, stretching for miles\naround.  It is possible to climb down into the canyon from here."
    "Canyon View"
    t
    #exit
      {"DOWN"
        "CLMID"
        "CLIMB"
        "CLMID"
        "SOUTH"
        "FORE4"
        "WEST"
        "FORE5"}}

add_object(
  #object
    {"POT"
      "There is a pot of gold here."
      "pot filled with gold"
      "At the end of the rainbow is a pot of gold."
      %<>
      ()
      %<>
      %GLOBALS.takebit
      0
      10
      10
      15
      0},
  [],
  ["GOLD"])

add_object(
  #object
    {"STATU"
      "There is a beautiful statue here."
      "statue"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.takebit
      0
      10
      13
      8
      0},
  ["SCULP"
    "ROCK"])

add_object(
  #object
    {"IBOAT"
      "There is a folded pile of plastic here which has a small valve\nattached."
      "plastic inflatable boat"
      %<>
      iboat_function
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      20
      0},
  ["BOAT"
    "PLAST"
    "PILE"])

add_object(
  #object
    {"DBOAT"
      "There is a pile of plastic here with a large hole in it."
      "plastic boat (with hole)"
      %<>
      dboat_function
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      20
      0},
  ["BOAT"
    "PLAST"
    "PILE"])

add_object(
  #object
    {"PUMP"
      "There is a small pump here."
      "hand-held air pump"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.toolbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      5
      0},
  ["AIR-P"
    "AIRPU"])

add_object(
  #object
    {"RBOAT"
      "There is an inflated boat here."
      "magic boat"
      %<>
      rboat_function
      (#find_obj
          {"LABEL"})
      %<>
      %_(
          GLOBALS.vehbit,
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      20
      100},
  ["BOAT"],
  ["PLAST"
    "SEAWO"])

put(
  find_obj(
    "RBOAT"),
  GLOBALS.oopen_Q,
  t)

put(
  find_obj(
    "RBOAT"),
  GLOBALS.orand,
  GLOBALS.rwaterbit)

add_object(
  #object
    {"LABEL"
      "There is a tan label here."
      "tan label"
      %<>
      %<>
      ()
      #find_obj
        {"RBOAT"}
      %_(
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.readbit,
          GLOBALS.takebit)
      0
      0
      0
      2
      0},
  ["FINEP"],
  ["TAN"])

add_desc(
  find_obj(
    "LABEL"),
  "!!!! 	FROBOZZ MAGIC BOAT COMPANY  !!!!\n\nHello, Sailor!\n\nInstructions for use:\n   \n   To get into boat, say 'Board'\n   To leave boat, say 'Disembark'\n\n   To get into a body of water, say 'Launch'\n   To get to shore, say 'Land'\n    \nWarranty:\n\n  This boat is guaranteed against all defects in parts and\nworkmanship for a period of 76 milliseconds from date of purchase or\nuntil first used, whichever comes first.\n\nWarning:\n   This boat is made of plastic.		Good Luck!")

add_object(
  #object
    {"STICK"
      "There is a broken sharp stick here."
      "broken sharp stick"
      "A sharp stick, which appears to have been broken at one end, is here."
      stick_function
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      3
      0},
  [],
  ["SHARP"
    "BROKE"])

sobject(
  "BARRE",
  "barrel",
  GLOBALS.ovison)

add_object(
  #object
    {"BUOY"
      "There is a red buoy here (probably a warning)."
      "red buoy"
      %<>
      %<>
      (#find_obj
          {"EMERA"})
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.findmebit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      10
      20},
  [],
  ["RED"])

add_object(
  #object
    {"EMERA"
      "There is an emerald here."
      "large emerald"
      %<>
      %<>
      ()
      #find_obj
        {"BUOY"}
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      5
      10
      5
      0},
  [])

add_object(
  #object
    {"SHOVE"
      "There is a large shovel here."
      "shovel"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.toolbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      15
      0},
  [])

add_object(
  #object
    {"GUANO"
      "There is a hunk of bat guano here."
      "hunk of bat guano"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      20
      0},
  ["CRAP"
    "SHIT"
    "HUNK"])

add_object(
  #object
    {"GRUE"
      ""
      "lurking grue"
      %<>
      grue_function
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      0
      0},
  [],
  ["LURKI"])

#room
  {"VLBOT"
    "You are at the bottom of a large dormant volcano.  High above you\nlight may be seen entering from the cone of the volcano.  The only\nexit here is to the north."
    "Volcano Bottom"
    %<>
    #exit
      {"NORTH"
        "LAVA"}
    (#find_obj
        {"BALLO"})}

psetg(
  volcore,
  "Volcano Core")

setg(
  nulexit,
  #exit
    {"#!#!#"
      "!"})

#room
  {"VAIR1"
    "You are about one hundred feet above the bottom of the volcano.  The\ntop of the volcano is clearly visible here."
    %GLOBALS.volcore
    %<>
    %GLOBALS.nulexit
    ()
    %<>
    0
    %GLOBALS.rairbit}

#room
  {"VAIR2"
    "You are about two hundred feet above the volcano floor.  Looming\nabove is the rim of the volcano.  There is a small ledge on the west\nside."
    %GLOBALS.volcore
    %<>
    #exit
      {"WEST"
        "LEDG2"
        "LAND"
        "LEDG2"}
    ()
    %<>
    0
    %GLOBALS.rairbit}

#room
  {"VAIR3"
    "You are high above the floor of the volcano.  From here the rim of\nthe volcano looks very narrow and you are very near it.  To the \neast is what appears to be a viewing ledge, too thin to land on."
    %GLOBALS.volcore
    %<>
    %GLOBALS.nulexit
    ()
    %<>
    0
    %GLOBALS.rairbit}

#room
  {"VAIR4"
    "You are near the rim of the volcano which is only about 15 feet\nacross.  To the west, there is a place to land on a wide ledge."
    %GLOBALS.volcore
    %<>
    #exit
      {"LAND"
        "LEDG4"
        "EAST"
        "LEDG4"}
    ()
    %<>
    0
    %GLOBALS.rairbit}

setg(
  cxgnome,
  #cexit
    {"GNOME-DOOR"
      "VLBOT"})

#room
  {"LEDG2"
    "You are on a narrow ledge overlooking the inside of an old dormant\nvolcano.  This ledge appears to be about in the middle between the\nfloor below and the rim above. There is an exit here to the south."
    "Narrow Ledge"
    %<>
    #exit
      {"DOWN"
        #nexit
          "I wouldn't jump from here."
        "LAUNC"
        "VAIR2"
        "WEST"
        %GLOBALS.cxgnome
        "SOUTH"
        "LIBRA"}
    (#find_obj
        {"HOOK1"}
      #find_obj
        {"ZORKM"})}

#room
  {"LIBRA"
    "You are in a room which must have been a large library, probably\nfor the royal family.  All of the shelves appear to have been gnawed\nto pieces by unfriendly gnomes.  To the north is an exit."
    "Library"
    %<>
    #exit
      {"NORTH"
        "LEDG2"
        "OUT"
        "LEDG2"}
    (#find_obj
        {"BLBK"}
      #find_obj
        {"GRBK"}
      #find_obj
        {"PUBK"}
      #find_obj
        {"WHBK"})}

#room
  {"LEDG3"
    "You are on a ledge in the middle of a large volcano.  Below you\nthe volcano bottom can be seen and above is the rim of the volcano.\nA couple of ledges can be seen on the other side of the volcano;\nit appears that this ledge is intermediate in elevation between\nthose on the other side.  The exit from this room is to the east."
    "Volcano View"
    %<>
    #exit
      {"DOWN"
        #nexit
          "I wouldn't try that."
        "CROSS"
        #nexit
          "It is impossible to cross this distance."
        "EAST"
        "EGYPT"}}

#room
  {"LEDG4"
    ""
    "Wide Ledge"
    %<>
    #exit
      {"DOWN"
        #nexit
          "It's a long way down."
        "LAUNC"
        "VAIR4"
        "WEST"
        %GLOBALS.cxgnome
        "SOUTH"
        "SAFE"}
    (#find_obj
        {"HOOK2"})
    ledge_function}

#room
  {"SAFE"
    ""
    "Dusty Room"
    t
    #exit
      {"NORTH"
        "LEDG4"}
    (#find_obj
        {"SSLOT"}
      #find_obj
        {"SAFE"})
    safe_room}

#room
  {"LAVA"
    "You are in a small room, whose walls are formed by an old lava flow.\nThere are exits here to the west and the south."
    "Lava Room"
    %<>
    #exit
      {"SOUTH"
        "VLBOT"
        "WEST"
        "RUBYR"}}

add_object(
  #object
    {"BALLO"
      "There is a very large and extremely heavy wicker basket with a cloth\nbag here. Inside the basket is a metal receptacle of some kind. \nAttached to the basket on the outside is a piece of wire."
      "basket"
      %<>
      balloon
      (#find_obj
          {"CBAG"}
        #find_obj
          {"BROPE"}
        #find_obj
          {"RECEP"})
      %<>
      %_(
          GLOBALS.vehbit,
          GLOBALS.ovison)
      0
      0
      0
      70
      100},
  ["BASKE"],
  ["WICKE"])

put(
  find_obj(
    "BALLO"),
  GLOBALS.oopen_Q,
  t)

put(
  find_obj(
    "BALLO"),
  GLOBALS.orand,
  GLOBALS.rairbit)

#object
  {"RECEP"
    ""
    "receptacle"
    %<>
    %<>
    ()
    #find_obj
      {"BALLO"}
    %_(
        GLOBALS.contbit,
        GLOBALS.ovison,
        GLOBALS.searchbit)
    0
    0
    0
    %GLOBALS.bigfix
    6}

add_object(
  #object
    {"CBAG"
      ""
      "cloth bag"
      %<>
      %<>
      ()
      #find_obj
        {"BALLO"}
      %GLOBALS.ovison
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["BAG"],
  ["CLOTH"])

add_object(
  #object
    {"BROPE"
      ""
      "braided wire"
      %<>
      wire_function
      ()
      #find_obj
        {"BALLO"}
      %_(
          GLOBALS.tiebit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["WIRE"],
  ["BRAID"])

add_object(
  #object
    {"HOOK1"
      "There is a small hook attached to the rock here."
      "hook"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["HOOK"])

add_object(
  #object
    {"HOOK2"
      "There is a small hook attached to the rock here."
      "hook"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["HOOK"])

add_object(
  #object
    {"ZORKM"
      "There is an engraved zorkmid coin here."
      "priceless zorkmid"
      "On the floor is a gold zorkmid coin (a valuable collector's item)."
      %<>
      ()
      %<>
      %_(
          GLOBALS.readbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      10
      12
      10
      0},
  ["COIN"],
  ["GOLD"])

add_desc(
  find_obj(
    "ZORKM"),
  "--------------------------\n	      /      Gold Zorkmid	 \\\n	     /  T e n   T h o u s a n d   \\\n	    /        Z O R K M I D S	   \\\n	   /				    \\\n	  /        ||||||||||||||||||	     \\\n	 /        !||||		 ||||!	      \\\n	|	   |||   ^^  ^^   |||	       |\n	|	   |||	 OO  OO   |||	       |\n	| In Frobs  |||	   <<    |||  We Trust |\n	|	     || (______) ||	       |\n	|	      |          |	       |\n	|	      |__________|	       |\n	 \\				      /\n	  \\    -- Lord Dimwit Flathead --    /\n	   \\    -- Beloved of Zorkers --    /\n	    \\				   /\n	     \\	     * 722 G.U.E. *       /\n	      \\				 /\n	       --------------------------")

add_object(
  #object
    {"SAFE"
      ""
      "box"
      %<>
      safe_function
      (#find_obj
          {"CROWN"}
        #find_obj
          {"CARD"})
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      15},
  ["BOX"])

add_object(
  #object
    {"CARD"
      "There is a card with writing on it here."
      "card"
      %<>
      %<>
      ()
      #find_obj
        {"SAFE"}
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.readbit,
          GLOBALS.burnbit)
      0
      0
      0
      1
      0},
  ["NOTE"])

add_desc(
  find_obj(
    "CARD"),
  "Warning:\n    This room was constructed over very weak rock strata.  Detonation\nof explosives in this room is strictly prohibited!\n			Frobozz Magic Cave Company\n			per M. Agrippa, foreman")

add_object(
  #object
    {"SSLOT"
      ""
      "hole"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      %GLOBALS.bigfix
      10},
  ["SLOT"
    "HOLE"])

put(
  find_obj(
    "SSLOT"),
  GLOBALS.oopen_Q,
  t)

add_object(
  #object
    {"CROWN"
      "Lord Dimwit's crown is here."
      "crown"
      "The excessively gaudy crown of Lord Dimwit Flathead is here."
      %<>
      ()
      #find_obj
        {"SAFE"}
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      15
      10
      10
      0},
  [],
  ["GAUDY"])

add_object(
  #object
    {"BRICK"
      "There is a square brick here which feels like clay."
      "brick"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.searchbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      9
      2},
  ["BRICK"],
  ["SQUAR"
    "CLAY"])

put(
  find_obj(
    "BRICK"),
  GLOBALS.oopen_Q,
  t)

add_object(
  #object
    {"FUSE"
      "There is a coil of thin shiny wire here."
      "wire coil"
      %<>
      fuse_function
      ()
      %<>
      %_(
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      1
      0},
  ["COIL"
    "WIRE"],
  ["SHINY"
    "THIN"])

add_object(
  #object
    {"GNOME"
      "There is a nervous Volcano Gnome here."
      "Volcano Gnome"
      %<>
      gnome_function
      ()
      %<>
      %_(
          GLOBALS.vicbit,
          GLOBALS.ovison)
      0
      0
      0
      %GLOBALS.bigfix
      0},
  ["TROLL"])

add_object(
  #object
    {"BLABE"
      "There is a blue label here."
      "blue label"
      %<>
      %<>
      ()
      #find_obj
        {"BALLO"}
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.readbit,
          GLOBALS.burnbit)
      0
      0
      0
      1
      0},
  ["LABEL"],
  ["BLUE"])

add_desc(
  find_obj(
    "BLABE"),
  "!!!!  FROBOZZ MAGIC BALLOON COMPANY !!!!\n\nHello, Aviator!\n\nInstructions for use:\n   \n   To get into balloon, say 'Board'\n   To leave balloon, say 'Disembark'\n   To land, say 'Land'\n    \nWarranty:\n   \n   No warranty is expressed or implied.  You're on your own, sport!\n\n					Good Luck.")

add_object(
  #object
    {"DBALL"
      "There is a balloon here, broken into pieces."
      "broken balloon"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison)
      0
      0
      0
      40
      0},
  ["BALLO"
    "BASKE"],
  ["BROKE"])

add_object(
  #object
    {"BLBK"
      "There is a blue book here."
      "blue book"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      10
      2},
  ["BOOK"],
  ["BLUE"])

add_object(
  #object
    {"GRBK"
      "There is a green book here."
      "green book"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      10
      2},
  ["BOOK"],
  ["GREEN"])

add_object(
  #object
    {"PUBK"
      "There is a purple book here."
      "purple book"
      %<>
      %<>
      (#find_obj
          {"STAMP"})
      %<>
      %_(
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit,
          GLOBALS.contbit)
      0
      0
      0
      10
      2},
  ["BOOK"],
  ["PURPL"])

add_object(
  #object
    {"WHBK"
      "There is a white book here."
      "white book"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.contbit,
          GLOBALS.takebit,
          GLOBALS.ovison,
          GLOBALS.readbit)
      0
      0
      0
      10
      2},
  ["BOOK"],
  ["WHITE"])

psetg(
  greek_to_me,
  "This book is written in a tongue with which I am unfamiliar.")

add_desc(
  find_obj(
    "BLBK"),
  GLOBALS.greek_to_me)

add_desc(
  find_obj(
    "GRBK"),
  GLOBALS.greek_to_me)

add_desc(
  find_obj(
    "PUBK"),
  GLOBALS.greek_to_me)

add_desc(
  find_obj(
    "WHBK"),
  GLOBALS.greek_to_me)

#object
  {"STAMP"
    "There is a Flathead Commemorative stamp here."
    "stamp"
    %<>
    %<>
    ()
    #find_obj
      {"PUBK"}
    %_(
        GLOBALS.takebit,
        GLOBALS.readbit,
        GLOBALS.burnbit,
        GLOBALS.ovison)
    0
    4
    10
    1
    0}

add_desc(
  find_obj(
    "STAMP"),
  "---v----v----v----v----v----v----v----v---\n|					 |\n|	   ||||||||||	     LORD	 |\n>         !||||	     |	    DIMWIT	 <\n|	  ||||    ---|	   FLATHEAD	 |\n|	  |||C	   CC \\  		 |\n>	   ||||	      _\\		 <\n|	    ||| (____|			 |\n|	     ||      |			 |\n>	      |______|	     Our	 <\n|		/   \\	  Excessive	 |\n|	       /     \\	    Leader	 |\n>	      |	      |			 <\n|	      |       |			 |\n|					 |\n>    G.U.E. POSTAGE	   3 Zorkmids    <\n|					 |\n---^----^----^----^----^----^----^----^---")

setg(
  bloc,
  find_room(
    "VLBOT"))

// SET UP LIGHT INTERRUPTS, ETC.

put(
  find_obj(
    "LAMP"),
  GLOBALS.orand,
  [0
    clock_disable(
      clock_int(
        GLOBALS.lntin,
        350))])

put(
  find_obj(
    "CANDL"),
  GLOBALS.orand,
  <>)

put(
  find_obj(
    "MATCH"),
  GLOBALS.orand,
  5)

// NUMBER OF MATCHES

psetg(
  indentstr,
  rest(
    istring(
      8,
      _X__),
    8))

#room
  {"TOMB"
    "You are in the Tomb of the Unknown Implementer.\nA hollow voice says:  \"That's not a bug, it's a feature!\"
    "Tomb of the Unknown Implementer"
    %<>
    #exit
      {"WEST"
        "LLD2"}
    (#find_obj
        {"TOMB"}
      #find_obj
        {"HEADS"}
      #find_obj
        {"COKES"}
      #find_obj
        {"LISTS"})
    %<>
    0}

add_object(
  #object
    {"TOMB"
      "There is a tomb here, made of the finest marble, and large enough\nfor four headless corpses.  On one end is the cryptic inscription:\n		    \n		      \"Feel Free.\""
      "tomb"
      %<>
      head_function
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.readbit,
          GLOBALS.ovison)},
  ["GRAVE"])

add_desc(
  find_obj(
    "TOMB"),
  "Here lie the implementers, whose heads were placed on poles by the\nKeeper of the Dungeon for amazing untastefulness.")

add_object(
  #object
    {"HEADS"
      "There are four heads here, mounted securely on poles."
      "set of poled heads"
      %<>
      head_function
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.sacredbit,
          GLOBALS.ovison)},
  ["HEAD"
    "POLE"
    "POLES"
    "PDL"
    "BKD"
    "TAA"
    "MARC"
    "IMPLE"
    "LOSER"])

add_object(
  #object
    {"COKES"
      "Many empty Coke bottles are here.  Alas, they can't hold water."
      "bunch of Coke bottles"
      "There is a large pile of empty Coke bottles here, evidently produced\nby the implementers during their long struggle to win totally."
      coke_bottles
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      15},
  ["BOTTL"],
  ["COKE"])

add_object(
  #object
    {"LISTS"
      "There is an enormous stack of line-printer paper here.  It is barely\nreadable."
      "stack of listings"
      "There is a gigantic pile of line-printer output here.  Although the\npaper once contained useful information, almost nothing can be\ndistinguished now."
      %<>
      ()
      %<>
      %_(
          GLOBALS.readbit,
          GLOBALS.burnbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      70},
  ["PAPER"
    "LIST"
    "PRINT"
    "LISTI"
    "STACK"])

add_desc(
  find_obj(
    "LISTS"),
  "<DEFINE FEEL-FREE (LOSER)\n		   <TELL \"FEEL FREE, CHOMPER!\">>\n			...\nThe rest is, alas, unintelligible (as were the implementers).")

add_object(
  #object
    {"LCASE"
      "There is a large case here, containing objects which you used to\npossess."
      "large case"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.transbit)},
  ["CASE"],
  ["LARGE"])

mapf(
  <>,
  /* FUNCTION */
    (x) => (
    rtro,
    find_room(
        spname(
          _x)),
    GLOBALS.rfillbit),
  _X,
  [resen_X_rooms
    reses_X_rooms
    dam_X_rooms
    strea_X_rooms
    rivr1_X_rooms
    rivr2_X_rooms
    rivr3_X_rooms
    rivr4_X_rooms
    rivr5_X_rooms
    beach_X_rooms
    rcave_X_rooms
    dock_X_rooms
    wclf1
    wclf2
    fante
    pog])

mapf(
  <>,
  /* FUNCTION */
    (x) => (
    rtro,
    find_room(
        _x),
    GLOBALS.rhousebit),
  ["LROOM"
    "KITCH"
    "ATTIC"])

mapf(
  <>,
  /* FUNCTION */
    (x) => (
    rtro,
    find_room(
        _x),
    GLOBALS.rsacredbit),
  ["BSHAF"
    "RIVR1"
    "DOCK"
    "FANTE"
    "FALLS"
    "BEACH"
    "RCAVE"
    "VAIR1"
    "VAIR2"
    "VAIR3"
    "VAIR4"
    "RIVR2"
    "RIVR3"
    "RIVR4"
    "RIVR5"
    "TIMBE"
    "WHOUS"
    "NHOUS"
    "EHOUS"
    "SHOUS"
    "KITCH"
    "LROOM"
    "FORE1"
    "FORE2"
    "FORE3"
    "FORE4"
    "FORE5"
    "CLEAR"
    "TEMP1"
    "TEMP2"
    "CLTOP"
    "CLMID"
    "CLBOT"
    "RAINB"
    "FALLS"])

setg(
  bucket_top_X_flag,
  <>)

setg(
  magcmach,
  #cexit
    {"FROBOZZ"
      "CMACH"
      ""})

setg(
  magalice,
  #cexit
    {"FROBOZZ"
      "ALICE"
      ""})

#room
  {"MAGNE"
    ""
    "Low Room"
    %<>
    #exit
      {"NORTH"
        %GLOBALS.magcmach
        "SOUTH"
        %GLOBALS.magcmach
        "WEST"
        %GLOBALS.magcmach
        "NE"
        %GLOBALS.magcmach
        "NW"
        %GLOBALS.magalice
        "SW"
        %GLOBALS.magalice
        "SE"
        %GLOBALS.magalice
        "EAST"
        %GLOBALS.magcmach}
    (#find_obj
        {"RBTLB"}
      #find_obj
        {"ROBOT"})
    magnet_room}

#room
  {"CMACH"
    ""
    "Machine Room"
    %<>
    #exit
      {"WEST"
        "MAGNE"
        "SOUTH"
        "CAGER"}
    (#find_obj
        {"SQBUT"}
      #find_obj
        {"RNBUT"}
      #find_obj
        {"TRBUT"})
    cmach_room}

#room
  {"CAGER"
    "You are in a dingy closet adjacent to the machine room.  On one wall\nis a small sticker which says\n		Protected by\n		  FROBOZZ\n	     Magic Alarm Company\n	      (Hello, footpad!)"
    "Dingy Closet"
    %<>
    #exit
      {"NORTH"
        "CMACH"}
    (#find_obj
        {"SPHER"})}

#room
  {"CAGED"
    "You are trapped inside an iron cage."
    "Cage"
    %<>
    #exit
      {"NORTH"
        #nexit
          ""}
    (#find_obj
        {"CAGE"})
    caged_room}

add_object(
  #object
    {"CAGE"
      "There is a mangled cage here."
      "mangled cage"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.ndescbit)
      0
      0
      0
      60
      0},
  [],
  [])

add_object(
  #object
    {"RCAGE"
      "There is an iron cage in the middle of the room."
      "iron cage"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.ovison
      0
      0
      0
      0
      0},
  ["CAGE"],
  ["IRON"])

add_object(
  #object
    {"SPHER"
      "There is a beautiful crystal sphere here."
      "crystal sphere"
      %<>
      sphere_function
      ()
      %<>
      %_(
          GLOBALS.trytakebit,
          GLOBALS.sacredbit,
          GLOBALS.ovison)
      0
      6
      6
      10
      0},
  ["BALL"],
  ["CRYST"
    "GLASS"])

add_object(
  aobject(
    "SQBUT",
    GLOBALS.butstr,
    buttons,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"],
  ["SQUAR"])

add_object(
  aobject(
    "RNBUT",
    GLOBALS.butstr,
    buttons,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"],
  ["ROUND"])

add_object(
  aobject(
    "TRBUT",
    GLOBALS.butstr,
    buttons,
    GLOBALS.ovison,
    GLOBALS.ndescbit),
  ["BUTTO"],
  ["TRIAN"])

#room
  {"TWELL"
    "You are at the top of the well.  Well done.  There are etchings on\nthe side of the well. There is a small crack across the floor at the\nentrance to a room on the east, but it can be crossed easily."
    "Top of Well"
    %<>
    #exit
      {"EAST"
        "ALICE"
        "DOWN"
        #nexit
          "It's a long way down!"}
    (#find_obj
        {"ETCH2"})
    %<>
    10
    %_(
        GLOBALS.rlandbit,
        GLOBALS.rbuckbit)}

#room
  {"BWELL"
    "You are in a damp circular room, whose walls are made of brick and\nmortar.  The roof of this room is not visible, but there appear to be\nsome etchings on the walls.  There is a passageway to the west."
    "Circular Room"
    %<>
    #exit
      {"WEST"
        "MPEAR"
        "UP"
        #nexit
          "The walls cannot be climbed."}
    (#find_obj
        {"BUCKE"}
      #find_obj
        {"ETCH1"})
    %<>
    0
    %_(
        GLOBALS.rlandbit,
        GLOBALS.rbuckbit)}

psetg(
  ewalls,
  ["ETCHI"
    "WALLS"
    "WALL"])

add_object(
  sobject(
    "ETCH1",
    "wall with etchings",
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.readbit),
  GLOBALS.ewalls)

add_object(
  sobject(
    "ETCH2",
    "wall with etchings",
    GLOBALS.ovison,
    GLOBALS.ndescbit,
    GLOBALS.readbit),
  GLOBALS.ewalls)

add_desc(
  find_obj(
    "ETCH2"),
  "o  b  o\n		    r 		  z\n		 f   M  A  G  I  C   z\n		 c    W  E   L  L    y\n		    o		  n\n		        m  p  a")

add_desc(
  find_obj(
    "ETCH1"),
  "o  b  o\n		      		  \n		        A  G  I  \n		         E   L  \n		    		  \n		        m  p  a")

#room
  {"ALICE"
    "You are in a small square room, in the center of which is a large\noblong table, no doubt set for afternoon tea.  It is clear from the\nobjects on the table that the users were indeed mad.  In the eastern\ncorner of the room is a small hole (no more that four inches high). \nThere are passageways leading away to the west and the northwest."
    "Tea Room"
    %<>
    #exit
      {"EAST"
        #nexit
          "Only a mouse could get in there."
        "WEST"
        "TWELL"
        "NW"
        "MAGNE"}
    (#find_obj
        {"ATABL"}
      #find_obj
        {"ECAKE"}
      #find_obj
        {"ORICE"}
      #find_obj
        {"RDICE"}
      #find_obj
        {"BLICE"})}

psetg(
  smdrop,
  #nexit
    "There is a chasm too large to jump across.")

#room
  {"ALISM"
    "You are in an enormous room, in the center of which are four wooden\nposts delineating a rectanular area, above which is what appears to\nbe a wooden roof.  In fact, all objects in this room appear to be\nabnormally large. To the east is a passageway.  There is a large\nchasm on the west and the northwest."
    "Posts Room"
    %<>
    #exit
      {"NW"
        %GLOBALS.smdrop
        "EAST"
        "ALITR"
        "WEST"
        %GLOBALS.smdrop
        "DOWN"
        %GLOBALS.smdrop}
    (#find_obj
        {"POSTS"})}

#room
  {"ALITR"
    "You are in a large room, one half of which is depressed.  There is a\nlarge leak in the ceiling through which brown colored goop is\nfalling.  The only exit to this room is to the west."
    "Pool Room"
    %<>
    #exit
      {"EXIT"
        "ALISM"
        "WEST"
        "ALISM"}
    (#find_obj
        {"FLASK"}
      #find_obj
        {"POOL"}
      #find_obj
        {"SAFFR"})}

add_object(
  #object
    {"FLASK"
      "A stoppered glass flask with a skull-and-crossbones marking is here.\nThe flask is filled with some clear liquid."
      "glass flask filled with liquid"
      %<>
      flask_function
      ()
      %<>
      %_(
          GLOBALS.transbit,
          GLOBALS.ovison,
          GLOBALS.takebit)
      0
      0
      0
      10
      5},
  [],
  ["GLASS"])

add_object(
  #object
    {"POOL"
      "The leak has submerged the depressed area in a pool of sewage."
      "pool of sewage"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.vicbit)
      0
      0
      0
      0
      0},
  ["SEWAG"],
  ["LARGE"])

add_object(
  #object
    {"SAFFR"
      "There is a tin of rare spices here."
      "tin of spices"
      %<>
      %<>
      ()
      %<>
      %GLOBALS.takebit
      0
      5
      5
      8
      0},
  ["TIN"
    "SPICE"],
  ["RARE"])

add_object(
  sobject(
    "ATABL",
    "large oblong table",
    GLOBALS.ovison),
  [],
  ["LARGE"
    "OBLON"])

add_object(
  sobject(
    "POSTS",
    "wooden posts",
    GLOBALS.ovison),
  ["POST"],
  ["WOODE"])

add_object(
  #object
    {"BUCKE"
      "There is a wooden bucket here, 3 feet in diameter and 3 feet high."
      "wooden bucket"
      %<>
      bucket
      ()
      %<>
      %_(
          GLOBALS.vehbit,
          GLOBALS.ovison)
      0
      0
      0
      100
      100},
  [],
  ["WOODE"])

add_object(
  #object
    {"ECAKE"
      "There is a piece of cake here with the words 'Eat Me' on it."
      "piece of 'Eat Me' cake"
      %<>
      eatme_function
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.foodbit)
      0
      0
      0
      10
      0},
  ["CAKE"],
  ["EATME"
    "EAT-M"])

add_object(
  #object
    {"ORICE"
      "There is a piece of cake with orange icing here."
      "piece of cake with orange icing"
      %<>
      cake_function
      ()
      %<>
      %_(
          GLOBALS.readbit,
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.foodbit)
      0
      0
      0
      4
      0},
  ["CAKE"
    "ICING"],
  ["ORANG"])

add_object(
  #object
    {"RDICE"
      "There is a piece of cake with red icing here."
      "piece of cake with red icing"
      %<>
      cake_function
      ()
      %<>
      %_(
          GLOBALS.readbit,
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.foodbit)
      0
      0
      0
      4
      0},
  ["CAKE"
    "ICING"],
  ["RED"])

add_object(
  #object
    {"BLICE"
      "There is a piece of cake with blue (ecch) icing here."
      "piece of cake with blue icing"
      %<>
      cake_function
      ()
      %<>
      %_(
          GLOBALS.readbit,
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.foodbit)
      0
      0
      0
      4
      0},
  ["CAKE"
    "ICING"],
  ["BLUE"
    "ECCH"])

put(
  put(
    find_obj(
      "BUCKE"),
    GLOBALS.oopen_Q,
    t),
  GLOBALS.orand,
  GLOBALS.rbuckbit)

add_object(
  #object
    {"ROBOT"
      "There is a robot here."
      "robot"
      %<>
      robot_function
      ()
      %<>
      %_(
          GLOBALS.sacredbit,
          GLOBALS.vicbit,
          GLOBALS.ovison,
          GLOBALS.actorbit)
      0
      0
      0
      0
      0},
  ["R2D2"
    "C3PO"
    "ROBBY"])

put(
  find_obj(
    "ROBOT"),
  GLOBALS.orand,
  add_actor(
    chtype(
      [find_room(
          "MAGNE")
        ()
        0
        <>
        find_obj(
          "ROBOT")
        robot_actor
        3
        t
        0],
      adv)))

add_object(
  #object
    {"RBTLB"
      "There is a green piece of paper here."
      "green piece of paper"
      %<>
      %<>
      ()
      %<>
      %_(
          GLOBALS.ovison,
          GLOBALS.takebit,
          GLOBALS.readbit,
          GLOBALS.burnbit)
      0
      0
      0
      3
      0},
  ["PAPER"],
  ["GREEN"])

add_desc(
  find_obj(
    "RBTLB"),
  "!!!! 	FROBOZZ MAGIC ROBOT COMPANY  !!!!\n\nHello, Master!\n   \n   I am a late-model robot, trained at MIT Tech to perform various\nsimple household functions. \n\nInstructions for use:\n   To activate me, use the following formula:\n	>TELL ROBOT '<something to do>' <cr>\n   The quotation marks are required!\n       \nWarranty:\n   No warranty is expressed or implied.\n				\n					At your service!")

// VERBS

sadd_action(
  "BACK",
  backer)

sadd_action(
  "REPEN",
  repent)

sadd_action(
  "TIME",
  play_time)

sadd_action(
  "WAIT",
  wait)

sadd_action(
  "CURSE",
  curses)

vsynonym(
  "CURSE",
  "SHIT",
  "FUCK",
  "DAMN")

sadd_action(
  "JARGON",
  jargon)

vsynonym(
  "JARGON",
  "FOO",
  "BLETCH")

add_action(
  "PUT",
  "Put",
  [obj
    "IN"
    obj
    ["PUT"
      putter]
    driver],
  ["DOWN"
    obj
    ["DROP"
      dropper]])

add_action(
  "PICK",
  "Pick",
  ["UP"
    obj
    ["TAKE"
      take]])

vsynonym(
  "PUT",
  "STUFF",
  "PLACE",
  "INSER")

1add_action(
  "LOWER",
  "Lower",
  r_l)

add_action(
  "RAISE",
  "Raise",
  [obj
    ["RAISE"
      r_l]
    driver],
  ["UP"
    obj
    ["RAISE"
      r_l]])

vsynonym(
  "RAISE",
  "LIFT")

1add_action(
  "MELT",
  "Melt",
  melter)

vsynonym(
  "MELT",
  "LIQUI")

add_action(
  "LIGHT",
  "Light",
  [(GLOBALS.lightbit
      aobjs
      robjs
      no_take)
    ["LIGHT"
      lamp_on]
    driver],
  [(GLOBALS.lightbit
      aobjs
      robjs
      no_take)
    "WITH"
    (GLOBALS.flamebit
      aobjs)
    ["LIGHT"
      lamp_on]])

add_action(
  "EXTIN",
  "Turn off",
  [(GLOBALS.lightbit
      aobjs
      robjs)
    ["EXTIN"
      lamp_off]])

vsynonym(
  "EXTIN",
  "DOUSE")

add_action(
  "TURN",
  "Turn",
  [(GLOBALS.turnbit
      aobjs
      robjs
      no_take)
    "WITH"
    (GLOBALS.toolbit
      robjs
      aobjs)
    ["TURN"
      turner]
    driver],
  ["ON"
    (GLOBALS.lightbit
      aobjs
      robjs)
    ["TURN-ON"
      lamp_on]],
  ["OFF"
    (GLOBALS.lightbit
      aobjs
      robjs)
    ["TURN-OFF"
      lamp_off]],
  [(GLOBALS.turnbit
      aobjs
      robjs
      no_take)
    "TO"
    (_1
      robjs)
    ["TURN-TO"
      time]])

add_action(
  "TAKE",
  "Take",
  [(_1
      robjs
      aobjs
      no_take)
    ["TAKE"
      take]])

vsynonym(
  "TAKE",
  "GET",
  "HOLD",
  "CARRY")

add_action(
  "LOOK",
  "Look",
  [["LOOK"
      room_desc]],
  ["AT"
    obj
    ["LOOK-AT"
      room_desc]],
  ["UNDER"
    obj
    ["LOOK-UNDER"
      look_under]])

add_action(
  "GIVE",
  "Give",
  [obj
    "TO"
    (GLOBALS.vicbit
      robjs
      no_take)
    ["GIVE"
      dropper]
    driver],
  [(GLOBALS.vicbit
      robjs
      no_take)
    obj
    ["GIVE"
      dropper]
    flip])

vsynonym(
  "GIVE",
  "HAND",
  "DONAT")

add_action(
  "STRIK",
  "Strike",
  [(GLOBALS.vicbit
      _
      robjs
      no_take)
    "WITH"
    (GLOBALS.weaponbit
      aobjs
      robjs)
    ["ATTAC"
      attacker]],
  [(GLOBALS.vicbit
      _
      robjs
      no_take)
    ["ATTAC"
      attacker]
    driver],
  [(_1
      robjs
      aobjs)
    ["LIGHT"
      lamp_on]])

aadd_action(
  "MOVE",
  "Move",
  move)

vsynonym(
  "MOVE",
  "PULL",
  "TUG")

aadd_action(
  "WAVE",
  "Wave",
  waver)

vsynonym(
  "BRAND",
  "FLAUN")

add_action(
  "DROP",
  "Drop",
  [(_1
      aobjs)
    ["DROP"
      dropper]
    driver],
  [(_1
      aobjs)
    "IN"
    obj
    ["DROP"
      dropper]])

vsynonym(
  "DROP",
  "RELEA")

add_action(
  "POUR",
  "Pour",
  [(_1
      aobjs)
    ["POUR"
      dropper]
    driver],
  [(_1
      aobjs)
    "IN"
    obj
    ["POUR"
      dropper]])

vsynonym(
  "POUR",
  "SPILL")

add_action(
  "THROW",
  "Throw",
  [(_1
      aobjs)
    "AT"
    (GLOBALS.vicbit
      robjs
      no_take)
    ["THROW"
      dropper]])

vsynonym(
  "THROW",
  "HURL",
  "CHUCK")

add_action(
  "TELL",
  "Tell",
  [(GLOBALS.actorbit)
    ["TELL"
      command]])

vsynonym(
  "TELL",
  "COMMA",
  "REQUE")

vsynonym(
  "LOOK",
  "L",
  "STARE",
  "GAZE")

sadd_action(
  "BRIEF",
  brief)

sadd_action(
  "UNBRI",
  un_brief)

sadd_action(
  "SUPER",
  super_brief)

sadd_action(
  "UNSUP",
  un_super_brief)

1add_action(
  "EXAMI",
  "Examine",
  room_info)

vsynonym(
  "EXAMI",
  "DESCR",
  "WHAT",
  "WHATS",
  "WHAT'")

1add_action(
  "FIND",
  "Find",
  find)

vsynonym(
  "WHERE",
  "FIND",
  "SEEK",
  "SEE")

sadd_action(
  "INVEN",
  invent)

vsynonym(
  "INVEN",
  "LIST")

sadd_action(
  "VERSI",
  version)

sadd_action(
  "SCRIP",
  do_script)

sadd_action(
  "UNSCR",
  do_unscript)

sadd_action(
  "SAVE",
  do_save)

sadd_action(
  "RESTO",
  do_restore)

sadd_action(
  "WALK-IN",
  time)

sadd_action(
  "C-INT",
  time)

// funny verb for clock ints

sadd_action(
  "DEAD!",
  time)

// funny verb for killing villains

sadd_action(
  "FIRST?",
  time)

// funny verb for surprise by villains

sadd_action(
  "DIAGN",
  diagnose)

sadd_action(
  "HACK?",
  time)

// funny verb for villain fight decisions

sadd_action(
  "SCORE",
  score)

sadd_action(
  "QUIT",
  finish)

sadd_action(
  "INFO",
  info)

sadd_action(
  "HELP",
  help)

add_action(
  "PLUG",
  "Plug",
  [obj
    "WITH"
    obj
    ["PLUG"
      plugger]])

vsynonym(
  "PLUG",
  "GLUE",
  "PATCH")

1add_action(
  "RUB",
  "Rub",
  rubber)

vsynonym(
  "RUB",
  "CARES",
  "TOUCH",
  "FONDL")

sadd_action(
  "SWIM",
  swimmer)

vsynonym(
  "SWIM",
  "BATHE",
  "WADE")

add_action(
  "BURN",
  "Burn",
  [(GLOBALS.burnbit
      aobjs
      robjs
      no_take)
    "WITH"
    (GLOBALS.flamebit
      aobjs
      robjs)
    ["BURN"
      burner]])

vsynonym(
  "BURN",
  "INCIN",
  "IGNIT")

add_action(
  "KILL",
  "Kill",
  [(GLOBALS.villain
      robjs
      no_take)
    "WITH"
    (GLOBALS.weaponbit
      aobjs)
    ["KILL"
      killer]])

vsynonym(
  "KILL",
  "MURDE",
  "SLAY",
  "DISPA")

add_action(
  "ATTAC",
  "Attack",
  [(GLOBALS.villain
      robjs
      no_take)
    "WITH"
    (GLOBALS.weaponbit
      aobjs)
    ["ATTAC"
      attacker]])

vsynonym(
  "ATTAC",
  "FIGHT",
  "MUNG",
  "HACK",
  "FROB",
  "HURT",
  "INJUR",
  "DAMAG",
  "HIT")

add_action(
  "SWING",
  "Swing",
  [(GLOBALS.weaponbit
      aobjs)
    "AT"
    (GLOBALS.villain
      robjs
      no_take)
    ["SWING"
      swinger]])

vsynonym(
  "SWING",
  "THRUS")

add_action(
  "POKE",
  "Poke",
  [(GLOBALS.villain
      robjs
      no_take)
    "WITH"
    (GLOBALS.weaponbit
      aobjs)
    ["POKE"
      munger]])

vsynonym(
  "POKE",
  "JAB",
  "BREAK")

1add_action(
  "KICK",
  "Kick",
  kicker)

vsynonym(
  "KICK",
  "BITE",
  "TAUNT")

1add_action(
  "PUSH",
  "Push",
  pusher)

vsynonym(
  "PUSH",
  "PRESS")

add_action(
  "OPEN",
  "Open",
  [(_(
        GLOBALS.doorbit,
        GLOBALS.contbit)
      aobjs
      robjs
      no_take)
    ["OPEN"
      opener]])

vsynonym(
  "OPEN")

add_action(
  "CLOSE",
  "Close",
  [(_(
        GLOBALS.doorbit,
        GLOBALS.contbit)
      aobjs
      robjs
      no_take)
    ["CLOSE"
      closer]])

vsynonym(
  "CLOSE")

add_action(
  "UNLOC",
  "Unlock",
  [(_1
      robjs
      no_take)
    "WITH"
    (GLOBALS.toolbit
      aobjs
      robjs)
    ["UNLOC"
      unlocker]])

add_action(
  "LOCK",
  "Lock",
  [(_1
      robjs
      no_take)
    ["LOCK"
      locker]])

add_action(
  "TIE",
  "Tie",
  [obj
    "TO"
    obj
    ["TIE"
      tie]])

vsynonym(
  "TIE",
  "KNOT",
  "FASTE")

1add_action(
  "RING",
  "Ring",
  ring)

vsynonym(
  "RING",
  "PEAL")

add_action(
  "EAT",
  "Eat",
  [(GLOBALS.foodbit
      aobjs
      robjs)
    ["EAT"
      eat]])

vsynonym(
  "EAT",
  "CONSU",
  "GOBBL",
  "MUNCH",
  "TASTE")

add_action(
  "DRINK",
  "Drink",
  [(GLOBALS.drinkbit
      aobjs
      robjs)
    ["DRINK"
      eat]])

vsynonym(
  "DRINK",
  "IMBIB",
  "SWALL")

add_action(
  "BRUSH",
  "Brush",
  [(_1
      aobjs
      robjs)
    ["BRUSH"
      brush]
    driver],
  [(_1
      aobjs
      robjs)
    "WITH"
    obj
    ["BRUSH"
      brush]])

vsynonym(
  "BRUSH",
  "CLEAN")

1add_action(
  "UNTIE",
  "Untie",
  untie)

vsynonym(
  "UNTIE",
  "RELEA",
  "FREE")

sadd_action(
  "EXORC",
  exorcise)

vsynonym(
  "EXORC",
  "XORCI")

sadd_action(
  "CHOMP",
  chomp)

vsynonym(
  "CHOMP",
  "LOSE",
  "BARF")

sadd_action(
  "YELL",
  yell)

vsynonym(
  "YELL",
  "SCREA",
  "SHOUT")

sadd_action(
  "WIN",
  win)

vsynonym(
  "WIN",
  "WINNA")

sadd_action(
  "FROBO",
  frobozz)

sadd_action(
  "TREAS",
  treas)

sadd_action(
  "TEMPL",
  treas)

sadd_action(
  "PRAY",
  prayer)

sadd_action(
  "JUMP",
  leaper)

sadd_action(
  "SKIP",
  skipper)

vsynonym(
  "SKIP",
  "HOP")

sadd_action(
  "MUMBL",
  mumbler)

vsynonym(
  "MUMBL",
  "SIGH")

sadd_action(
  "ZORK",
  zork)

sadd_action(
  "DUNGE",
  dungeon)

add_action(
  "WAKE",
  "Wake",
  [(GLOBALS.vicbit
      robjs
      no_take)
    ["WAKE"
      alarm]])

vsynonym(
  "WAKE",
  "AWAKE",
  "SURPR",
  "START")

add_action(
  "HELLO",
  "Hello",
  [["HELLO"
      hello]
    driver],
  [obj
    ["HELLO"
      hello]])

vsynonym(
  "HELLO",
  "HI")

1add_action(
  "GRANI",
  "Granite",
  granite)

vsynonym(
  "JUMP",
  "LEAP",
  "VAULT")

1add_action(
  "FILL",
  "Fill",
  fill)

sadd_action(
  "WELL",
  well)

sadd_action(
  "ODYSS",
  sinbad)

vsynonym(
  "ODYSS",
  "ULYSS")

add_action(
  "READ",
  "Read",
  [(GLOBALS.readbit
      aobjs
      robjs
      no_take)
    ["READ"
      reader]
    driver],
  [(GLOBALS.readbit
      aobjs
      robjs
      no_take)
    "WITH"
    obj
    ["READ"
      reader]])

vsynonym(
  "READ",
  "SKIM",
  "SCAN")

1add_action(
  "DEFLA",
  "Deflate",
  deflater)

add_action(
  "INFLA",
  "Inflate",
  [obj
    "WITH"
    (GLOBALS.toolbit
      robjs
      aobjs
      no_take)
    ["INFLA"
      inflater]])

add_action(
  "DISEM",
  "Disembark from",
  [(GLOBALS.vehbit
      robjs
      no_take)
    ["DISEM"
      unboard]])

add_action(
  "DIG",
  "Dig",
  ["WITH"
    (GLOBALS.toolbit
      aobjs)
    ["DIG"
      digger]])

add_action(
  "BOARD",
  "Board",
  [(GLOBALS.vehbit
      robjs
      no_take)
    ["BOARD"
      board]])

add_action(
  "KNOCK",
  "Knock",
  ["AT"
    obj
    ["KNOCK"
      knock]
    driver],
  ["ON"
    obj
    ["KNOCK"
      knock]],
  ["DOWN"
    (GLOBALS.vicbit
      _
      robjs
      no_take)
    ["ATTAC"
      attacker]])

sadd_action(
  "GERON",
  geronimo)

sadd_action(
  "BLAST",
  blast)

1add_action(
  "WALK",
  "Walk",
  walk)

add_buzz(
  "RUN",
  "GO",
  "PROCE")

setg(
  robot_actions,
  _X,
  [GLOBALS.walk_X_words
    GLOBALS.take_X_words
    GLOBALS.drop_X_words
    GLOBALS.put_X_words
    GLOBALS.jump_X_words
    GLOBALS.push_X_words
    GLOBALS.throw_X_words
    GLOBALS.turn_X_words])

setg(
  player,
  add_actor(
    chtype(
      [GLOBALS.whous_X_rooms
        ()
        0
        <>
        find_obj(
          "#####")
        <>
        0
        t
        0],
      adv)))