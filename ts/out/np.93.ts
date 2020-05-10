G_words = (words[oblist] || moblist(words, 23))

G_object_obl = (objects[oblist] || moblist(objects, 23))

G_actions = moblist(actions, 17)

G_orphans = /*[*/ [false, false, false, false, false] /*]*/

if((lookup(`COMPILE`, root()) || gassigned_Q(group_glue))) {
    ;
  } else {
    G_prep2vec = /*[*/ [chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase),
	      chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase)] /*]*/;
  }

define(sparse, sparout, /*(*/ [sv, vb,
			`AUX`, /*(*/ [words, G_words] /*)*/, /*(*/ [objob, G_object_obl] /*)*/, /*(*/ [pv, G_prsvec] /*)*/,
			      /*(*/ [pvr, rest(pv)[1] = false[2] = false] /*)*/,
			      /*(*/ [actions, G_actions] /*)*/, /*(*/ [dirs, G_directions] /*)*/, /*(*/ [orph, G_orphans] /*)*/,
			      /*(*/ [orfl, oflag(orph)] /*)*/, /*(*/ [prv, G_prepvec] /*)*/, /*(*/ [here, G_here] /*)*/,
			      /*(*/ [action, false] /*)*/, /*(*/ [prep, false] /*)*/, nprep, /*(*/ [adj, false] /*)*/, atm, aval, obj,
			      pprep, lobj, val] /*)*/,
   /*#*/ [decl, /*(*/ [/*(*/ [sv] /*)*/, vector(/*[*/ [rest, string] /*]*/), /*(*/ [vb, orfl] /*)*/, (atom || false),
	  /*(*/ [actions, words, objob, dirs] /*)*/, oblist, /*(*/ [pv, orph, prv, pvr] /*)*/, vector,
	  /*(*/ [atm] /*)*/, (atom || false), /*(*/ [here] /*)*/, room, /*(*/ [action] /*)*/, (false || action),
	  /*(*/ [nprep, prep] /*)*/, (false || prep), /*(*/ [adj] /*)*/, (false || adjective), /*(*/ [aval] /*)*/, any,
	  /*(*/ [lobj] /*)*/, any, /*(*/ [obj] /*)*/, (false || object), /*(*/ [pprep] /*)*/, phrase] /*)*/] /*2*/,
   val = mapf(false,
     function(x: STRING) {
          if(empty_Q(x)) {
            mapleave(t);
          } else if((!action && atm = lookup(x,actions))) {
            action = /*,*/ [atm] /*1*/;
          } else if((!action && atm = lookup(x,dirs))) {
            pv[1] = G_walk_X_words;
            pv[2] = /*,*/ [atm] /*1*/;
            return(win, sparout);
          } else if((atm = lookup(x,words) && if(type_Q(aval = /*,*/ [atm] /*1*/, prep)) {
                  if(true) {
                      prep;
                      (vb || tell(`Double preposition?`, 0));
                      mapleave(false);
                    } else {
                      ;
                    };
                } else if(type_Q(aval,adjective)) {
                  adj = aval;
                  !(orfl && atm = oname(orph) && x = spname(atm));
                } else {
                  t;
                })) {
            ;
          } else if(atm = lookup(x,objob)) {
            if(obj = get_object(atm,adj)) {
                (empty_Q(pvr) && (vb || tell(`Too many objects specified?`, 0)) && mapleave(false));
                pvr[1] = if(true) {
                      prep;
                      pprep = prv[1];
                      prv = rest(prv);
                      pprep[1] = prep;
                      prep = false;
                      pprep[2] = obj;
                    } else {
                      obj;
                    };
                pvr = rest(pvr);
              } else {
                t;
                if(empty_Q(obj)) {
                    (vb || if(lit_Q(here)) {
                          tell(`I can't see a`, 0);
                          if(true) {
                              adj;
                              tell(` `, 0, prstr(chtype(adj,atom)));
                            };
                          tell(` `, 0, prstr(atm), ` here.`);
                        } else {
                          ;
                        });
                  } else if(obj === G_nefals2) {
                    (vb || tell(`I can't reach that from inside the `,
			     0,
			     odesc2(avehicle(G_winner)),
			     `.`));
                  } else {
                    orphan(t,
			   (action || (orfl && overb(orph))),
			   pv[2],
			   prep,			   atm);
                  };
                mapleave(false);
              };
            adj = false;
            t;
          } else {
            mapleave(false);
          };
        },
     sv),
   if(true) {
      val;
      if((!action && !action = (orfl && overb(orph)))) {
          (vb || if(type_Q(pv[2], object)) {
                tell(`What should I do with the `,
				  0,
				  odesc2(pv[2]),
				  `?`);
              } else {
                ;
              });
          orphan(t, false, pv[2]);
          false;
        } else if((pv[1] = action && adj)) {
          (vb || tell(`Dangling adjective?`, 0));
          false;
        } else if((orfl && nprep = oprep(orph) && obj = pv[2] && pprep = prv[1][1] = nprep && pprep[2] = obj && if(obj = oslot1(orph)) {
                pv[2] = obj;
                pv[3] = pprep;
              } else {
                ;
              } && false)) {
          ;
        } else if(true) {
          prep;
          (type_Q(lobj = back(pvr)[1], object) && top(back(pvr)[1] = prv[1][1] = prep[2] = lobj));
        } else {
          pv;
        };
    })

export function sp(str) {
    parse(lex(str), false);
  }

export function orphan(flag?: (ATOM | FALSE), action, slot1, prep, name: (ATOM | FALSE)) {
    G_orphans[G_oname] = name[G_oprep] = prep[G_oslot1] = slot1[G_overb] = action[G_oflag] = flag;
  }

export function syn_match(pv: VECTOR) {
    let action: ACTION = pv[1];
    let objs: VECTOR = rest(pv);
    let o1: (FALSE | OBJECT | PHRASE) = objs[1];
    let o2: (FALSE | OBJECT | PHRASE) = objs[2];
    let dforce: (FALSE | SYNTAX) = false;
    let drive: (FALSE | SYNTAX) = false;
    let gwim: (FALSE | OBJECT) = false;
    let synn: VARG = null;
    if(mapf(false,
      function(syn: SYNTAX) {
            if(syn_equal(syn1(syn), o1)) {
              if(syn_equal(syn2(syn), o2)) {
                  (sflip(syn) && objs[1] = o2 && objs[2] = o1);
                  mapleave(take_it_or_leave_it(syn,pv[1] = sfcn(syn)));
                } else {
                  if(sdriver(syn)) {
                      dforce = syn;
                    } else {
                      ;
                    };
                  false;
                };
            } else {
              if(sdriver(syn)) {
                  dforce = syn;
                } else {
                  ;
                };
              false;
            };
          },
      vdecl(action))) {
      ;
    } else if(drive = (dforce || drive)) {
      if((synn = syn1(drive) && !o1 && !0_Q(vbit(synn)) && !orfeo(synn,objs) && !o1 = gwim = gwim_slot(1, synn,action,objs))) {
          orphan(t, action,false, vprep(synn));
          ortell(synn,action,gwim);
        } else if((synn = syn2(drive) && !o2 && !0_Q(vbit(synn)) && !gwim_slot(2, synn,action,objs))) {
          orphan(t, action,o1,vprep(synn));
          ortell(synn,action,gwim);
        } else {
          ;
        };
    } else {
      false;
    };
  }

export function take_it_or_leave_it(syn: SYNTAX, pv: VECTOR) {
    let pv1: (FALSE | OBJECT | PHRASE) = pv[2];
    let pv2: (FALSE | OBJECT | PHRASE) = pv[3];
    let obj: (FALSE | OBJECT) = null;
    let varg: VARG = null;
    pv[2] = obj = if(type_Q(pv1,object)) {
          pv1;
        } else {
          pv1[2];
        };
if(vtrnn(varg = syn1(syn), G_vrbit)) {
      take_it(obj,pv,varg);
    };
pv[3] = obj = if(type_Q(pv2,object)) {
          pv2;
        } else {
          pv2[2];
        };
if(vtrnn(varg = syn2(syn), G_vrbit)) {
      take_it(obj,pv,varg);
    };
  }

export function take_it(obj: OBJECT, vec: VECTOR, vrb: VARG) {
    let sav1: VERB = vec[1];
    let sav2: (FALSE | OBJECT) = vec[2];
    if((search_list(oid(obj), robjs(G_here), false) && (can_take_Q(obj) || !vtrnn(vrb,G_vtbit)))) {
      vec[1] = G_take_X_words;
      vec[2] = obj;
      take(t);
      vec[1] = sav1;
      vec[2] = sav2;
    };
  }

export function orfeo(syn: VARG, objs: VECTOR) {
    let orph: VECTOR = G_orphans;
    let orfl: (ATOM | FALSE) = oflag(orph);
    let slot1: (FALSE | PHRASE | OBJECT) = null;
    if(!orfl) {
      false;
    } else {
      (syn_equal(syn,slot1) && objs[1] = slot1);
    };
  }

export function ortell(varg: VARG, action: ACTION, gwim: (FALSE | OBJECT)) {
    let prep: (FALSE | PREP) = vprep(varg);
    let sp: STRING = null;
    if(true) {
      prep;
      (gwim && tell(vstr(action), 0, ` `) && tell(odesc2(gwim), 0, ` `));
      tell(prstr(chtype(prep,atom)), 0, ` what?`);
    } else {
      ;
    };
false;
  }

export function prstr(atm: ATOM) {
    let sp: STRING = null;
    foostr(sp = spname(atm), back(G_scrstr,sp.length), false);
  }

export function foostr(nam: STRING, str: STRING, 1st?: (ATOM | FALSE)) {
    mapr(false,
	function(x: STRING, y: STRING) {
        if((1st && x === nam)) {
          y[1] = x[1];
        } else {
          ;
        };
      },
	nam,	str);
  }

export function gwim_slot(fx: FIX, varg: VARG, action: ACTION, objs: VECTOR) {
    let obj: VECTOR = null;
    if(obj = gwim(vbit(varg), varg,action)) {
      objs[fx] = obj;
      obj;
    };
  }

`GET WHAT I MEAN - GWIM
 TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY`

export function gwim(bit: FIX, fword: VARG, action: ACTION) {
    let aobj: (ATOM | FALSE) = vtrnn(fword,G_vabit);
    let ntake: (ATOM | FALSE) = vtrnn(fword,G_vtbit);
    let robj: (ATOM | FALSE) = vtrnn(fword,G_vrbit);
    let obj: (ATOM | FALSE) = false;
    let nobj: (OBJECT | FALSE) = null;
    let pv: VECTOR = G_prsvec;
    let savobj: (FALSE | OBJECT | PHRASE) = null;
    let av: (OBJECT | FALSE) = avehicle(G_winner);
    let sf = null;
    (aobj && obj = fwim(bit,aobjs(G_winner), ntake));
if(true) {
      robj;
      if((nobj = fwim(bit,robjs(G_here), ntake) && (!av || av === nobj || memq(nobj,ocontents(av)) || trnn(nobj,G_findmebit)))) {
          if(((savobj = pv[2] || t) && !obj && (sf = pv[1] || t) && pv[1] = G_take_X_words && pv[2] = nobj && (action === pv[1] || ntake || take()) && pv[2] = savobj && pv[1] = sf && nobj)) {
              ;
            } else {
              false;
            };
        } else if((nobj || !empty_Q(nobj))) {
          G_nefals;
        } else {
          obj;
        };
    } else {
      obj;
    };
  }

// [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]

export function make_action(`TUPLE`, specs) {`AUX`, vv, sum, /*(*/ [prep, false] /*)*/, atm
    chtype(mapf(G_uvector,     function(sp: VECTOR) {
          let syn: VECTOR = ivector(5, false);
          let whr: FIX = 1;
          mapf(false,
		   function(itm) {
              if(type_Q(itm,string)) {
                prep = find_prep(itm);
              } else if((itm === obj && itm = () => /*(*/ [_1] /*)*/ && false)) {
                ;
              } else if(type_Q(itm,list)) {
                vv = ivector(3);
                vv[1] = itm[1];
                vv[2] = prep;
                sum = 0;
                prep = false;
                (memq(aobjs, itm) && sum = _(sum,G_vabit));
                (memq(robjs, itm) && sum = _(sum,G_vrbit));
                (memq(no_take, itm) && sum = _(sum,G_vtbit));
                (memq(_, itm) && sum = _(sum,G_vxbit));
                vv[3] = sum;
                syn[whr] = chtype(vv,varg);
                whr = _(whr,1);
              } else if(type_Q(itm,vector)) {
                if(gassigned_Q(atm = add_word(itm[1]))) {
                    syn[G_sfcn] = /*,*/ [atm] /*1*/;
                  } else {
                    ;
                  };
              } else if(itm === driver) {
                syn[G_sdriver] = t;
              } else {
                syn[G_sflip] = t;
              };
            },
		   sp);
(syn1(syn) || syn[G_syn1] = G_evarg);
(syn2(syn) || syn[G_syn2] = G_evarg);
chtype(syn,syntax);
        },
     specs),
    vspec);
  }

G_evarg = chtype(/*[*/ [0, false, 0] /*]*/, varg)

export function syn_equal(varg: VARG, pobj: (FALSE | PHRASE | OBJECT)) {
    let vbit: FIX = vbit(varg);
    if(type_Q(pobj,phrase)) {
      (vprep(varg) === pobj[1] && (!vtrnn(varg,G_vxbit) || trnn(pobj[2], vbit)));
    } else if(type_Q(pobj,object)) {
      (!vprep(varg) && (!vtrnn(varg,G_vxbit) || trnn(pobj,vbit)));
    } else {
      ;
    };
  }

G_directions = moblist(directions)

export function eparse(pv: VECTOR(/*[*/ [REST, STRING] /*]*/), vb: (ATOM | FALSE)) {
    let val: ANY = null;
    if(val = sparse(pv,vb)) {
      if((val === win || syn_match(val))) {
          orphan(false);
        } else {
          false;
        };
    } else {
      false;
    };
  }

G_scrstr = rest(istring(5), 5)

G_ssv = ivector(10, false)

`GET-OBJECT:  TAKES ATOM (FROM OBJECTS OBLIST), VERBOSITY FLAG.  GROVELS
OVER: ,STARS; ,HERE; ,WINNER LOOKING FOR OBJECT (LOOKS DOWN TO ONE LEVEL
OF CONTAINMENT).  RETURNS <> IF NOT FOUND OR FOUND MORE THAN ONE, THE
OBJECT OTHERWISE.`

define(get_object, get_obj, /*(*/ [objnam, adj,
			    `AUX`, obj, /*(*/ [oobj, false] /*)*/, /*(*/ [here, G_here] /*)*/,
				  /*(*/ [av, avehicle(G_winner)] /*)*/, /*(*/ [chomp, false] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [oobj, obj, av] /*)*/, (object || false), /*(*/ [objnam] /*)*/, atom, /*(*/ [here] /*)*/, room,
	       /*(*/ [adj] /*)*/, (adjective || false), /*(*/ [chomp] /*)*/, (atom || false),
	       /*(*/ [objl] /*)*/, (false || list(/*[*/ [rest, object] /*]*/))] /*)*/] /*2*/,
	if(obj = search_list(objnam,G_stars,adj)) {
      oobj = obj;
    } else {
      return(G_nefals,get_obj);
    },
	if((lit_Q(here) && obj = search_list(objnam,robjs(G_here), adj))) {
      if((av && obj !== av && !memq(obj,ocontents(av)) && !trnn(obj,G_findmebit))) {
          chomp = t;
        } else if(true) {
          oobj;
          return(G_nefals,get_obj);
        } else {
          ;
        };
    } else {
      return(G_nefals,get_obj);
    },
	if(true) {
      av;
      if(obj = search_list(objnam,ocontents(av), adj)) {
          chomp = false;
          oobj = obj;
        } else {
          return(G_nefals,get_obj);
        };
    },
	if(obj = search_list(objnam,aobjs(G_winner), adj)) {
      if(true) {
          oobj;
          G_nefals;
        } else {
          obj;
        };
    } else if(!empty_Q(obj)) {
      G_nefals;
    } else if(true) {
      chomp;
      G_nefals2;
    } else {
      oobj;
    })

`SEARCH-LIST:  TAKES OBJECT NAME, LIST OF OBJECTS, AND VERBOSITY.
IF FINDS ONE FROB UNDER THAT NAME ON LIST, RETURNS IT.  SEARCH IS TO
ONE LEVEL OF CONTAINMENT.`

G_nefals = /*#*/ [false, /*(*/ [1] /*)*/] /*2*/

G_nefals2 = /*#*/ [false, /*(*/ [2] /*)*/] /*2*/

define(search_list, sl, /*(*/ [objnam, slist, adj, `OPTIONAL`, /*(*/ [first_Q, t] /*)*/, `AUX`, /*(*/ [oobj, false] /*)*/,
			/*(*/ [nefals, G_nefals] /*)*/, nobj] /*)*/, 
   /*#*/ [decl, /*(*/ [/*(*/ [objnam] /*)*/, atom, /*(*/ [slist] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [oobj, nobj] /*)*/, (false || object), /*(*/ [adj] /*)*/, (false || adjective),
	  /*(*/ [first_Q] /*)*/, (atom || false), /*(*/ [nefals] /*)*/, false] /*)*/] /*2*/,
   mapf(false,
    function(obj: OBJECT) {
        if(this_it_Q(objnam,obj,adj)) {
          if(true) {
              oobj;
              return(nefals,sl);
            } else {
              ;
            };
        };
if((ovis_Q(obj) && (oopen_Q(obj) || transparent_Q(obj)) && (first_Q || trnn(obj,G_searchbit)))) {
          if(nobj = search_list(objnam,ocontents(obj), adj,false)) {
              if(true) {
                  oobj;
                  return(nefals,sl);
                } else {
                  ;
                };
            } else {
              return(nefals,sl);
            };
        };
      },
    slist),
   oobj)

`FWIM:  TAKE LIST OF FROBS, FIND ONE THAT CAN BE MANIPULATED (VISIBLE
AND TAKEABLE, OR VISIBLE AND IN SOMETHING THAT'S VISIBLE AND OPEN)`

define(fwim, dwim, /*(*/ [bit, objs, no_take, `AUX`, /*(*/ [nobj, false] /*)*/] /*)*/, 
   /*#*/ [decl, /*(*/ [/*(*/ [no_take] /*)*/, (atom || false), /*(*/ [bit] /*)*/, fix, /*(*/ [objs] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [nobj] /*)*/, (false || object)] /*)*/] /*2*/,
   mapf(false,
    function(x: OBJECT) {
        if((ovis_Q(x) && (no_take || can_take_Q(x)) && trnn(x,bit))) {
          if(true) {
              nobj;
              return(G_nefals,dwim);
            };
          nobj = x;
        };
if((ovis_Q(x) && oopen_Q(x))) {
          mapf(false,
		    function(x: OBJECT) {
                if((ovis_Q(x) && trnn(x,bit))) {
                  if(true) {
                      nobj;
                      return(G_nefals,dwim);
                    } else {
                      ;
                    };
                };
              },
		    ocontents(x));
        };
      },
    objs),
   nobj)