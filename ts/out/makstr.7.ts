export function cevent(tick: FIX, app: (APPLICABLE | OFFSET), flg: (ATOM | FALSE), name: (ATOM | STRING)) {
    let obl = initial[oblist];
    let atm: (ATOM | FALSE) = null;
    if(type_Q(name,string)) {
      if(atm = lookup(name,obl)) {
          ;
        } else {
          t;
          atm = insert(name,obl);
        };
    } else {
      ;
    };
setg(atm,chtype(/*[*/ [tick,app,flg,atm] /*]*/, cevent));
  }

export function cons_obj(_tuple_, objs: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let winner: ADV = G_winner;
    mapf(false,
	function(x) {
        let y: OBJECT = find_obj(x);
        (memq(y,aobjs(winner)) || take_object(find_obj(x), winner));
      },
	objs);
  }

export function cexit(flid: (ATOM | STRING), rmid: (ATOM | STRING), str?: (FALSE | STRING), flag: (ATOM | FALSE), funct: (ATOM | FALSE)) {
    let fval: (APPLICABLE | FALSE) = false;
    let atm: (ATOM | FALSE) = null;
    if(type_Q(flid,atom)) {
      flid = spname(flid);
    };
atm = (lookup(flid,flag[oblist]) || insert(flid,flag[oblist]));
setg(atm,flag);
chtype(vector(atm,find_room(rmid), str,funct), cexit);
  }

export function exit(_tuple_, pairs: TUPLE(/*[*/ [REST, STRING, (NEXIT | CEXIT | STRING | ATOM)] /*]*/)) {
    let dobl: OBLIST = G_directions;
    let frob: VECTOR = ivector(pairs.length);
    repeat(/*(*/ [atm, rm, /*(*/ [f, frob] /*)*/] /*)*/,
	  /*#*/ [decl, /*(*/ [/*(*/ [atm] /*)*/, (atom || false), /*(*/ [rm] /*)*/, (room || false), /*(*/ [f] /*)*/, vector] /*)*/] /*2*/,
	  if(or((atm = lookup(pairs[1], dobl) && gassigned_Q(atm) && type_Q(/*,*/ [atm] /*1*/,direction)))) {
        f[1] = atm;
        if(type_Q(pairs[2], string)) {
            f[2] = find_room(pairs[2]);
          } else {
            ;
          };
        f = rest(f,2);
      } else {
        t;
        pairs[1] = error(illegal_direction, pairs[1]);
      },
	  if(empty_Q(pairs = rest(pairs,2))) {
        return();
      });
chtype(frob,exit);
  }

export function room(id: (STRING | ATOM), d1: STRING, d2: STRING, lit_Q: (ATOM | FORM | FALSE), ex: EXIT, objs?, app: (FORM | FALSE | ATOM), val: FIX, bit: FIX) {
    let rm: ROOM = find_room(id);
    G_score_max = _(G_score_max,val);
rm[G_rbits] = bit;
rm[G_rval] = val;
rm[G_robjs] = objs;
rm[G_rdesc1] = d1;
rm[G_rdesc2] = d2;
rm[G_rexits] = ex;
rm[G_raction] = if(type_Q(app,false, form)) {
        false;
      } else {
        app;
      };
rm[G_rlight_Q] = if(type_Q(lit_Q,form)) {
        false;
      } else {
        t;
        lit_Q;
      };
mapf(false,
	      function(x: OBJECT) {
        x[G_oroom] = rm;
      },
	      robjs(rm));
  }

export function sobject(id: STRING, str, _tuple_, tup: TUPLE) {
    object(id,``, str,/*%*/ [false] /*1*/, false, /*(*/ [] /*)*/, false, _(_X,tup));
  }

export function aobject(id: STRING, str, app: ATOM, _tuple_, tup: TUPLE) {
    object(id,``, str,/*%*/ [false] /*1*/, app,/*(*/ [] /*)*/, false, _(_X,tup));
  }

export function object(id: (ATOM | STRING), desc1: STRING, desc2: STRING, desco: (STRING | FALSE), app: (FALSE | FORM | ATOM), conts: LIST(/*[*/ [REST, OBJECT] /*]*/), can: (FALSE | OBJECT), flags: PRIMTYPE(WORD), light_Q?: FIX, s1: FIX, s2: FIX, size: FIX, capac: FIX) {
    G_score_max = _(G_score_max,s1,s2);
(0_Q(light_Q) || flags = _(flags,G_lightbit));
find_obj(id)[G_odesc1] = desc1[G_ocapac] = capac[G_osize] = size[G_odesco] = desco[G_olight_Q] = light_Q[G_oflags] = flags[G_ofval] = s1[G_otval] = s2[G_ocan] = can[G_ocontents] = conts[G_odesc2] = desc2[G_oaction] = if(type_Q(app,false, form)) {
        false;
      } else {
        app;
      };
  }

export function find_prep(str: STRING) {
    let atm: (FALSE | ATOM) = add_word(str);
    if(gassigned_Q(atm)) {
      if(type_Q(/*,*/ [atm] /*1*/,prep)) {
          /*,*/ [atm] /*1*/;
        } else {
          ;
        };
    } else {
      ;
    };
  }

export function add_action(nam: STRING, str: STRING, _tuple_, decl: TUPLE(/*[*/ [REST, VECTOR] /*]*/)) {
    let atm: ATOM = (lookup(nam,G_actions) || insert(nam,G_actions));
    setg(atm,chtype(/*[*/ [atm,make_action(_X,decl), str] /*]*/, action));
  }

export function add_directions(_tuple_, nms: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let dir: OBLIST = G_directions;
    let atm: ATOM = null;
    mapf(false, function(x) {
        setg(atm = (lookup(x,dir) || insert(x,dir)),
				 chtype(atm,direction));
      },
	  nms);
  }

export function dsynonym(str: STRING, _tuple_, nms: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let val: DIRECTION = null;
    let dir: OBLIST = G_directions;
    let atm: ATOM = null;
    val = add_directions(str);
mapf(false, function(x) {
        setg(atm = (lookup(x,dir) || insert(x,dir)),
				 val);
      },
	  nms);
  }

export function vsynonym(n1: STRING, _tuple_, n2: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let atm: (FALSE | ATOM) = null;
    let val: ANY = null;
    if(atm = lookup(n1,G_words)) {
      val = /*,*/ [atm] /*1*/;
      mapf(false, function(x) {
            setg(add_word(x), val);
          }, n2);
    };
if(atm = lookup(n1,G_actions)) {
      val = /*,*/ [atm] /*1*/;
      mapf(false, function(x) {
            setg((lookup(x,G_actions) || insert(x,G_actions)),
					    val);
          }, n2);
    };
  }

`STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE).`

export function add_word(w: STRING) {
    (lookup(w,G_words) || insert(w,G_words));
  }

export function add_buzz(_tuple_, w: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    mapf(false,
	      function(x: STRING) {
        setg(add_word(x), chtype(x,buzz));
      },
	      w);
  }

export function add_zork(nm: ATOM, _tuple_, w: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    mapf(false,
	      function(x: STRING) {
        let atm: ATOM = null;
        setg(atm = add_word(x), chtype(atm,nm));
      },
	      w);
  }

export function add_object(obj: OBJECT, names: VECTOR(/*[*/ [REST, STRING] /*]*/), adj?: VECTOR(/*[*/ [REST, STRING] /*]*/)) {
    let objs: OBLIST = G_object_obl;
    obj[G_onames] = mapf(G_uvector,		   function(x: STRING) {
          (lookup(x,objs) || insert(x,objs));
        },
		   names);
obj[G_oadjs] = mapf(G_uvector,function(w) {
          add_zork(adjective, w);
        }, adj);
chutype(oadjs(obj), adjective);
  }

export function synonym(n1: STRING, _tuple_, n2: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let atm: (FALSE | ATOM) = null;
    let val: ANY = null;
    if(atm = lookup(n1,G_words)) {
      val = /*,*/ [atm] /*1*/;
      mapf(false, function(x) {
            setg(add_word(x), val);
          }, n2);
    };
  }

export function add_abbrev(x: STRING, y: STRING) {
    setg(add_word(x), (lookup(y,G_words) || insert(y,G_words)));
  }

export function add_demon(x: HACK) {
    if(mapr(false,
	  function(y: LIST(/*[*/ [REST, HACK] /*]*/)) {
            if(haction(y[1]) === haction(x)) {
              y[1] = x;
              mapleave(t);
            };
          },
	  G_demons)) {
      ;
    } else {
      ;
    };
  }

export function add_star(obj) {
    G_stars = /*(*/ [obj,_X,G_stars] /*)*/;
  }

export function add_actor(adv: ADV) {
    let actors: LIST(/*[*/ [REST, ADV] /*]*/) = G_actors;
    if(mapf(false,
	       function(x: ADV) {
            if(aobj(x) === aobj(adv)) {
              mapleave(t);
            };
          },
	       actors)) {
      ;
    } else {
      ;
    };
  }

export function add_desc(obj: OBJECT, str: STRING) {
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