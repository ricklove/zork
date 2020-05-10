export function cevent(tick: number, app: (applicable | offset), flg: (atom | false), name: (atom | string)) {
    let obl = initial[oblist];
    let atm: (atom | false) = null;
    cond(/*(*/ [type_Q(name,string),
	       cond(/*(*/ [atm = lookup(name,obl)] /*)*/,
		     /*(*/ [t, atm = insert(name,obl)] /*)*/)] /*)*/,
	      /*(*/ [atm = name] /*)*/);
setg(atm,chtype(/*[*/ [tick,app,flg,atm] /*]*/, cevent));
  }

export function cons_obj(_tuple_, objs: tuple(/*[*/ [rest, string] /*]*/)) {
    let winner: adv = G_winner;
    mapf(false,
	function(x) {
        let y: object = find_obj(x);
        (memq(y,aobjs(winner)) || take_object(find_obj(x), winner));
      },
	objs);
  }

export function cexit(flid: (atom | string), rmid: (atom | string), str?: (false | string), flag: (atom | false), funct: (atom | false)) {
    let fval: (applicable | false) = false;
    let atm: (atom | false) = null;
    cond(/*(*/ [type_Q(flid,atom), flid = spname(flid)] /*)*/);
atm = (lookup(flid,flag[oblist]) || insert(flid,flag[oblist]));
setg(atm,flag);
chtype(vector(atm,find_room(rmid), str,funct), cexit);
  }

export function exit(_tuple_, pairs: tuple(/*[*/ [rest, string, (nexit | cexit | string | atom)] /*]*/)) {
    let dobl: oblist = G_directions;
    let frob: vector = ivector(pairs.length);
    repeat(/*(*/ [atm, rm, /*(*/ [f, frob] /*)*/] /*)*/,
	  /*#*/ [decl, /*(*/ [/*(*/ [atm] /*)*/, (atom || false), /*(*/ [rm] /*)*/, (room || false), /*(*/ [f] /*)*/, vector] /*)*/] /*2*/,
	  cond(/*(*/ [or((atm = lookup(pairs[1], dobl) && gassigned_Q(atm) && type_Q(/*,*/ [atm] /*1*/,direction))),
		 f[1] = atm,
		 cond(/*(*/ [type_Q(pairs[2], string),
			f[2] = find_room(pairs[2])] /*)*/,
		       /*(*/ [f[2] = pairs[2]] /*)*/),
		 f = rest(f,2)] /*)*/,
		/*(*/ [t,
		 pairs[1] = error(illegal_direction, pairs[1])] /*)*/),
	  cond(/*(*/ [empty_Q(pairs = rest(pairs,2)),
		 return()] /*)*/));
chtype(frob,exit);
  }

export function room(id: (string | atom), d1: string, d2: string, lit_Q: (atom | form | false), ex: exit, objs?, app: (form | false | atom), val: number, bit: number) {
    let rm: room = find_room(id);
    G_score_max = _(G_score_max,val);
rm[G_rbits] = bit;
rm[G_rval] = val;
rm[G_robjs] = objs;
rm[G_rdesc1] = d1;
rm[G_rdesc2] = d2;
rm[G_rexits] = ex;
rm[G_raction] = cond(/*(*/ [type_Q(app,false, form), false] /*)*/,
				/*(*/ [app] /*)*/);
rm[G_rlight_Q] = cond(/*(*/ [type_Q(lit_Q,form), false] /*)*/,
				/*(*/ [t, lit_Q] /*)*/);
mapf(false,
	      function(x: object) {
        x[G_oroom] = rm;
      },
	      robjs(rm));
  }

export function sobject(id: string, str, _tuple_, tup: tuple) {
    object(id,``, str,/*%*/ [false] /*1*/, false, /*(*/ [] /*)*/, false, _(_X,tup));
  }

export function aobject(id: string, str, app: atom, _tuple_, tup: tuple) {
    object(id,``, str,/*%*/ [false] /*1*/, app,/*(*/ [] /*)*/, false, _(_X,tup));
  }

export function object(id: (atom | string), desc1: string, desc2: string, desco: (string | false), app: (false | form | atom), conts: list(/*[*/ [rest, object] /*]*/), can: (false | object), flags: primtype(word), light_Q?: number, s1: number, s2: number, size: number, capac: number) {
    G_score_max = _(G_score_max,s1,s2);
(0_Q(light_Q) || flags = _(flags,G_lightbit));
find_obj(id)[G_odesc1] = desc1[G_ocapac] = capac[G_osize] = size[G_odesco] = desco[G_olight_Q] = light_Q[G_oflags] = flags[G_ofval] = s1[G_otval] = s2[G_ocan] = can[G_ocontents] = conts[G_odesc2] = desc2[G_oaction] = cond(/*(*/ [type_Q(app,false, form), false] /*)*/,
	       /*(*/ [app] /*)*/);
  }

export function find_prep(str: string) {
    let atm: (false | atom) = add_word(str);
    cond(/*(*/ [gassigned_Q(atm),
    	   cond(/*(*/ [type_Q(/*,*/ [atm] /*1*/,prep), /*,*/ [atm] /*1*/] /*)*/,
		 /*(*/ [error(no_prep_X_errors)] /*)*/)] /*)*/,
	  /*(*/ [setg(atm,chtype(atm,prep))] /*)*/);
  }

export function add_action(nam: string, str: string, _tuple_, decl: tuple(/*[*/ [rest, vector] /*]*/)) {
    let atm: atom = (lookup(nam,G_actions) || insert(nam,G_actions));
    setg(atm,chtype(/*[*/ [atm,make_action(_X,decl), str] /*]*/, action));
  }

export function add_directions(_tuple_, nms: tuple(/*[*/ [rest, string] /*]*/)) {
    let dir: oblist = G_directions;
    let atm: atom = null;
    mapf(false, function(x) {
        setg(atm = (lookup(x,dir) || insert(x,dir)),
				 chtype(atm,direction));
      },
	  nms);
  }

export function dsynonym(str: string, _tuple_, nms: tuple(/*[*/ [rest, string] /*]*/)) {
    let val: direction = null;
    let dir: oblist = G_directions;
    let atm: atom = null;
    val = add_directions(str);
mapf(false, function(x) {
        setg(atm = (lookup(x,dir) || insert(x,dir)),
				 val);
      },
	  nms);
  }

export function vsynonym(n1: string, _tuple_, n2: tuple(/*[*/ [rest, string] /*]*/)) {
    let atm: (false | atom) = null;
    let val: any = null;
    cond(/*(*/ [atm = lookup(n1,G_words),
	       val = /*,*/ [atm] /*1*/,
	       mapf(false, function(x) {
            setg(add_word(x), val);
          }, n2)] /*)*/);
cond(/*(*/ [atm = lookup(n1,G_actions),
	       val = /*,*/ [atm] /*1*/,
	       mapf(false, function(x) {
            setg((lookup(x,G_actions) || insert(x,G_actions)),
					    val);
          }, n2)] /*)*/);
  }

`STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE).`

export function add_word(w: string) {
    (lookup(w,G_words) || insert(w,G_words));
  }

export function add_buzz(_tuple_, w: tuple(/*[*/ [rest, string] /*]*/)) {
    mapf(false,
	      function(x: string) {
        setg(add_word(x), chtype(x,buzz));
      },
	      w);
  }

export function add_zork(nm: atom, _tuple_, w: tuple(/*[*/ [rest, string] /*]*/)) {
    mapf(false,
	      function(x: string) {
        let atm: atom = null;
        setg(atm = add_word(x), chtype(atm,nm));
      },
	      w);
  }

export function add_object(obj: object, names: vector(/*[*/ [rest, string] /*]*/), adj?: vector(/*[*/ [rest, string] /*]*/)) {
    let objs: oblist = G_object_obl;
    obj[G_onames] = mapf(G_uvector,		   function(x: string) {
          (lookup(x,objs) || insert(x,objs));
        },
		   names);
obj[G_oadjs] = mapf(G_uvector,function(w) {
          add_zork(adjective, w);
        }, adj);
chutype(oadjs(obj), adjective);
  }

export function synonym(n1: string, _tuple_, n2: tuple(/*[*/ [rest, string] /*]*/)) {
    let atm: (false | atom) = null;
    let val: any = null;
    cond(/*(*/ [atm = lookup(n1,G_words),
	       val = /*,*/ [atm] /*1*/,
	       mapf(false, function(x) {
            setg(add_word(x), val);
          }, n2)] /*)*/);
  }

export function add_abbrev(x: string, y: string) {
    setg(add_word(x), (lookup(y,G_words) || insert(y,G_words)));
  }

export function add_demon(x: hack) {
    cond(/*(*/ [mapr(false,
	  function(y: list(/*[*/ [rest, hack] /*]*/)) {
            cond(/*(*/ [haction(y[1]) === haction(x),
		   y[1] = x,
		   mapleave(t)] /*)*/);
          },
	  G_demons)] /*)*/,
	/*(*/ [G_demons = /*(*/ [x,_X,G_demons] /*)*/] /*)*/);
  }

export function add_star(obj) {
    G_stars = /*(*/ [obj,_X,G_stars] /*)*/;
  }

export function add_actor(adv: adv) {
    let actors: list(/*[*/ [rest, adv] /*]*/) = G_actors;
    cond(/*(*/ [mapf(false,
	       function(x: adv) {
            cond(/*(*/ [aobj(x) === aobj(adv),
			mapleave(t)] /*)*/);
          },
	       actors)] /*)*/,
	/*(*/ [G_actors = /*(*/ [adv,_X,actors] /*)*/] /*)*/);
  }

export function add_desc(obj: object, str: string) {
    obj[G_oread] = str;
  }

export function sadd_action(str1, atm) {
    add_action(str1,``, /*[*/ [/*[*/ [str1,atm] /*]*/] /*]*/);
  }

export function 1add_action(str1, str2, atm) {
    add_action(str1,str2,/*[*/ [obj, /*[*/ [str1,atm] /*]*/] /*]*/);
  }

export function aadd_action(str1, str2, atm) {
    add_action(str1,str2,/*[*/ [/*(*/ [_1, aobjs, no_take] /*)*/, /*[*/ [str1,atm] /*]*/] /*]*/);
  }