export function cevent(tick: FIX, app: (APPLICABLE | OFFSET), flg: (ATOM | FALSE), name: (ATOM | STRING)) {
    let obl = initial[oblist];
    let atm: (ATOM | FALSE) = null;
    if(type_Q(name,string)) {
      if(atm = lookup(name,obl)) {
          ;
        } else if(t) {
          return atm = insert(name,obl);
        };
    } else {
      return atm = name;
    };
return setg(atm,chtype(/*[*/ [tick,app,flg,atm] /*]*/, cevent));
  }

export function cons_obj(_tuple_, objs: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let winner: ADV = G_winner;
    return mapf(false,
	function(x) {
        let y: OBJECT = find_obj(x);
        return (memq(y,aobjs(winner)) || take_object(find_obj(x), winner));
      },
	objs);
  }

export function cexit(flid: (ATOM | STRING), rmid: (ATOM | STRING), str?: (FALSE | STRING), flag: (ATOM | FALSE), funct: (ATOM | FALSE)) {
    let fval: (APPLICABLE | FALSE) = false;
    let atm: (ATOM | FALSE) = null;
    if(type_Q(flid,atom)) {
      return flid = spname(flid);
    };
return atm = (lookup(flid,flag[oblist]) || insert(flid,flag[oblist]));
return setg(atm,flag);
return chtype(vector(atm,find_room(rmid), str,funct), cexit);
  }

export function exit(_tuple_, pairs: TUPLE(/*[*/ [REST, STRING, (NEXIT | CEXIT | STRING | ATOM)] /*]*/)) {
    let dobl: OBLIST = G_directions;
    let frob: VECTOR = ivector(pairs.length);
    return repeat(/*(*/ [atm, rm, /*(*/ [f, frob] /*)*/] /*)*/,
	  /*#*/ [decl, /*(*/ [/*(*/ [atm] /*)*/, (atom || false), /*(*/ [rm] /*)*/, (room || false), /*(*/ [f] /*)*/, vector] /*)*/] /*2*/,
	  if(or((atm = lookup(pairs[1], dobl) && gassigned_Q(atm) && type_Q(/*,*/ [atm] /*1*/,direction)))) {
        f[1] = atm;
        if(type_Q(pairs[2], string)) {
            return f[2] = find_room(pairs[2]);
          } else {
            return f[2] = pairs[2];
          };
        return f = rest(f,2);
      } else if(t) {
        return pairs[1] = error(illegal_direction, pairs[1]);
      },
	  if(empty_Q(pairs = rest(pairs,2))) {
        return return();
      });
return chtype(frob,exit);
  }

export function room(id: (STRING | ATOM), d1: STRING, d2: STRING, lit_Q: (ATOM | FORM | FALSE), ex: EXIT, objs?, app: (FORM | FALSE | ATOM), val: FIX, bit: FIX) {
    let rm: ROOM = find_room(id);
    return G_score_max = _(G_score_max,val);
return rm[G_rbits] = bit;
return rm[G_rval] = val;
return rm[G_robjs] = objs;
return rm[G_rdesc1] = d1;
return rm[G_rdesc2] = d2;
return rm[G_rexits] = ex;
return rm[G_raction] = if(type_Q(app,false, form)) {
        return false;
      } else {
        return app;
      };
return rm[G_rlight_Q] = if(type_Q(lit_Q,form)) {
        return false;
      } else if(t) {
        return lit_Q;
      };
return mapf(false,
	      function(x: OBJECT) {
        return x[G_oroom] = rm;
      },
	      robjs(rm));
  }

export function sobject(id: STRING, str, _tuple_, tup: TUPLE) {
    return object(id,``, str,/*%*/ [false] /*1*/, false, /*(*/ [] /*)*/, false, _(_X,tup));
  }

export function aobject(id: STRING, str, app: ATOM, _tuple_, tup: TUPLE) {
    return object(id,``, str,/*%*/ [false] /*1*/, app,/*(*/ [] /*)*/, false, _(_X,tup));
  }

export function object(id: (ATOM | STRING), desc1: STRING, desc2: STRING, desco: (STRING | FALSE), app: (FALSE | FORM | ATOM), conts: LIST(/*[*/ [REST, OBJECT] /*]*/), can: (FALSE | OBJECT), flags: PRIMTYPE(WORD), light_Q?: FIX, s1: FIX, s2: FIX, size: FIX, capac: FIX) {
    return G_score_max = _(G_score_max,s1,s2);
return (0_Q(light_Q) || flags = _(flags,G_lightbit));
return find_obj(id)[G_odesc1] = desc1[G_ocapac] = capac[G_osize] = size[G_odesco] = desco[G_olight_Q] = light_Q[G_oflags] = flags[G_ofval] = s1[G_otval] = s2[G_ocan] = can[G_ocontents] = conts[G_odesc2] = desc2[G_oaction] = if(type_Q(app,false, form)) {
        return false;
      } else {
        return app;
      };
  }

export function find_prep(str: STRING) {
    let atm: (FALSE | ATOM) = add_word(str);
    if(gassigned_Q(atm)) {
      if(type_Q(/*,*/ [atm] /*1*/,prep)) {
          return /*,*/ [atm] /*1*/;
        } else {
          return error(no_prep_X_errors);
        };
    } else {
      return setg(atm,chtype(atm,prep));
    };
  }

export function add_action(nam: STRING, str: STRING, _tuple_, decl: TUPLE(/*[*/ [REST, VECTOR] /*]*/)) {
    let atm: ATOM = (lookup(nam,G_actions) || insert(nam,G_actions));
    return setg(atm,chtype(/*[*/ [atm,make_action(_X,decl), str] /*]*/, action));
  }

export function add_directions(_tuple_, nms: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let dir: OBLIST = G_directions;
    let atm: ATOM = null;
    return mapf(false, function(x) {
        return setg(atm = (lookup(x,dir) || insert(x,dir)),
				 chtype(atm,direction));
      },
	  nms);
  }

export function dsynonym(str: STRING, _tuple_, nms: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let val: DIRECTION = null;
    let dir: OBLIST = G_directions;
    let atm: ATOM = null;
    return val = add_directions(str);
return mapf(false, function(x) {
        return setg(atm = (lookup(x,dir) || insert(x,dir)),
				 val);
      },
	  nms);
  }

export function vsynonym(n1: STRING, _tuple_, n2: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let atm: (FALSE | ATOM) = null;
    let val: ANY = null;
    if(atm = lookup(n1,G_words)) {
      val = /*,*/ [atm] /*1*/;
      return mapf(false, function(x) {
            return setg(add_word(x), val);
          }, n2);
    };
if(atm = lookup(n1,G_actions)) {
      val = /*,*/ [atm] /*1*/;
      return mapf(false, function(x) {
            return setg((lookup(x,G_actions) || insert(x,G_actions)),
					    val);
          }, n2);
    };
  }

`STUFF FOR ADDING TO VOCABULARY, ADDING TO LISTS (OF DEMONS, FOR EXAMPLE).`

export function add_word(w: STRING) {
    return (lookup(w,G_words) || insert(w,G_words));
  }

export function add_buzz(_tuple_, w: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    return mapf(false,
	      function(x: STRING) {
        return setg(add_word(x), chtype(x,buzz));
      },
	      w);
  }

export function add_zork(nm: ATOM, _tuple_, w: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    return mapf(false,
	      function(x: STRING) {
        let atm: ATOM = null;
        return setg(atm = add_word(x), chtype(atm,nm));
      },
	      w);
  }

export function add_object(obj: OBJECT, names: VECTOR(/*[*/ [REST, STRING] /*]*/), adj?: VECTOR(/*[*/ [REST, STRING] /*]*/)) {
    let objs: OBLIST = G_object_obl;
    return obj[G_onames] = mapf(G_uvector,		   function(x: STRING) {
          return (lookup(x,objs) || insert(x,objs));
        },
		   names);
return obj[G_oadjs] = mapf(G_uvector,function(w) {
          return add_zork(adjective, w);
        }, adj);
return chutype(oadjs(obj), adjective);
  }

export function synonym(n1: STRING, _tuple_, n2: TUPLE(/*[*/ [REST, STRING] /*]*/)) {
    let atm: (FALSE | ATOM) = null;
    let val: ANY = null;
    if(atm = lookup(n1,G_words)) {
      val = /*,*/ [atm] /*1*/;
      return mapf(false, function(x) {
            return setg(add_word(x), val);
          }, n2);
    };
  }

export function add_abbrev(x: STRING, y: STRING) {
    return setg(add_word(x), (lookup(y,G_words) || insert(y,G_words)));
  }

export function add_demon(x: HACK) {
    if(mapr(false,
	  function(y: LIST(/*[*/ [REST, HACK] /*]*/)) {
            if(haction(y[1]) === haction(x)) {
              y[1] = x;
              return mapleave(t);
            };
          },
	  G_demons)) {
      ;
    } else {
      return G_demons = /*(*/ [x,_X,G_demons] /*)*/;
    };
  }

export function add_star(obj) {
    return G_stars = /*(*/ [obj,_X,G_stars] /*)*/;
  }

export function add_actor(adv: ADV) {
    let actors: LIST(/*[*/ [REST, ADV] /*]*/) = G_actors;
    if(mapf(false,
	       function(x: ADV) {
            if(aobj(x) === aobj(adv)) {
              return mapleave(t);
            };
          },
	       actors)) {
      ;
    } else {
      return G_actors = /*(*/ [adv,_X,actors] /*)*/;
    };
  }

export function add_desc(obj: OBJECT, str: STRING) {
    return obj[G_oread] = str;
  }

export function sadd_action(str1, atm) {
    return add_action(str1,``, /*[*/ [/*[*/ [str1,atm] /*]*/] /*]*/);
  }

export function 1add_action(str1, str2, atm) {
    return add_action(str1,str2,/*[*/ [obj, /*[*/ [str1,atm] /*]*/] /*]*/);
  }

export function aadd_action(str1, str2, atm) {
    return add_action(str1,str2,/*[*/ [/*(*/ [_1, aobjs, no_take] /*)*/, /*[*/ [str1,atm] /*]*/] /*]*/);
  }