G_words = (words[oblist] || moblist(words, 23))

G_object_obl = (objects[oblist] || moblist(objects, 23))

G_actions = moblist(actions, 17)

G_orphans = /*[*/ [false, false, false, false, false] /*]*/

((lookup(`COMPILE`, root()) || gassigned_Q(group_glue))) ? {
    ;
  } : (G_prepvec = /*[*/ [chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase),
	      chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase)] /*]*/) ? {
    return G_prep2vec = /*[*/ [chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase),
	      chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase)] /*]*/;
  } : false

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
          (empty_Q(x)) ? {
            return mapleave(t);
          } : ((!action && atm = lookup(x,actions))) ? {
            return action = /*,*/ [atm] /*1*/;
          } : ((!action && atm = lookup(x,dirs))) ? {
            pv[1] = G_walk_X_words;
            pv[2] = /*,*/ [atm] /*1*/;
            return return(win, sparout);
          } : ((atm = lookup(x,words) && (type_Q(aval = /*,*/ [atm] /*1*/, prep)) ? {
                  return (prep) ? {
                      (vb || tell(`Double preposition?`, 0));
                      return mapleave(false);
                    } : {
                      return prep = aval;
                    };
                } : (type_Q(aval,adjective)) ? {
                  adj = aval;
                  return !(orfl && atm = oname(orph) && x = spname(atm));
                } : {
                  return t;
                })) ? {
            ;
          } : (atm = lookup(x,objob)) ? {
            (obj = get_object(atm,adj)) ? {
                (empty_Q(pvr) && (vb || tell(`Too many objects specified?`, 0)) && mapleave(false));
                pvr[1] = (prep) ? {
                      pprep = prv[1];
                      prv = rest(prv);
                      pprep[1] = prep;
                      prep = false;
                      return pprep[2] = obj;
                    } : {
                      return obj;
                    };
                return pvr = rest(pvr);
              } : (t) ? {
                (empty_Q(obj)) ? {
                    return (vb || (lit_Q(here)) ? {
                          tell(`I can't see a`, 0);
                          (adj) ? {
                              return tell(` `, 0, prstr(chtype(adj,atom)));
                            } : false;
                          return tell(` `, 0, prstr(atm), ` here.`);
                        } : {
                          return tell(`It is too dark in here to see.`, 0);
                        });
                  } : (obj === G_nefals2) ? {
                    return (vb || tell(`I can't reach that from inside the `,
			     0,
			     odesc2(avehicle(G_winner)),
			     `.`));
                  } : ((vb || tell(`Which `, 0, prstr(atm), `?`))) ? {
                    return orphan(t,
			   (action || (orfl && overb(orph))),
			   pv[2],
			   prep,			   atm);
                  } : false;
                return mapleave(false);
              } : false;
            adj = false;
            return t;
          } : ((vb || tell(`I don't know the word `, 0, x))) ? {
            return mapleave(false);
          } : false;
        },
     sv),
   (val) ? {
      return ((!action && !action = (orfl && overb(orph)))) ? {
          (vb || (type_Q(pv[2], object)) ? {
                return tell(`What should I do with the `,
				  0,
				  odesc2(pv[2]),
				  `?`);
              } : {
                return tell(`Huh?`, 0);
              });
          orphan(t, false, pv[2]);
          return false;
        } : ((pv[1] = action && adj)) ? {
          (vb || tell(`Dangling adjective?`, 0));
          return false;
        } : ((orfl && nprep = oprep(orph) && obj = pv[2] && pprep = prv[1][1] = nprep && pprep[2] = obj && (obj = oslot1(orph)) ? {
                pv[2] = obj;
                return pv[3] = pprep;
              } : {
                return pv[2] = pprep;
              } && false)) ? {
          ;
        } : (prep) ? {
          return (type_Q(lobj = back(pvr)[1], object) && top(back(pvr)[1] = prv[1][1] = prep[2] = lobj));
        } : {
          return pv;
        };
    } : false)

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
    (mapf(false,
      function(syn: SYNTAX) {
            (syn_equal(syn1(syn), o1)) ? {
              return (syn_equal(syn2(syn), o2)) ? {
                  (sflip(syn) && objs[1] = o2 && objs[2] = o1);
                  return mapleave(take_it_or_leave_it(syn,pv[1] = sfcn(syn)));
                } : (!o2) ? {
                  (sdriver(syn)) ? {
                      return dforce = syn;
                    } : {
                      return drive = syn;
                    };
                  return false;
                } : false;
            } : (!o1) ? {
              (sdriver(syn)) ? {
                  return dforce = syn;
                } : {
                  return drive = syn;
                };
              return false;
            } : false;
          },
      vdecl(action))) ? {
      ;
    } : (drive = (dforce || drive)) ? {
      return ((synn = syn1(drive) && !o1 && !0_Q(vbit(synn)) && !orfeo(synn,objs) && !o1 = gwim = gwim_slot(1, synn,action,objs))) ? {
          orphan(t, action,false, vprep(synn));
          return ortell(synn,action,gwim);
        } : ((synn = syn2(drive) && !o2 && !0_Q(vbit(synn)) && !gwim_slot(2, synn,action,objs))) ? {
          orphan(t, action,o1,vprep(synn));
          return ortell(synn,action,gwim);
        } : {
          return take_it_or_leave_it(drive,pv[1] = sfcn(drive));
        };
    } : (tell(`I can't make sense out of that.`, 0)) ? {
      return false;
    } : false;
  }

export function take_it_or_leave_it(syn: SYNTAX, pv: VECTOR) {
    let pv1: (FALSE | OBJECT | PHRASE) = pv[2];
    let pv2: (FALSE | OBJECT | PHRASE) = pv[3];
    let obj: (FALSE | OBJECT) = null;
    let varg: VARG = null;
    pv[2] = obj = (type_Q(pv1,object)) ? {
          return pv1;
        } : (type_Q(pv1,phrase)) ? {
          return pv1[2];
        } : false;
(vtrnn(varg = syn1(syn), G_vrbit)) ? {
      return take_it(obj,pv,varg);
    } : false;
pv[3] = obj = (type_Q(pv2,object)) ? {
          return pv2;
        } : (type_Q(pv2,phrase)) ? {
          return pv2[2];
        } : false;
(vtrnn(varg = syn2(syn), G_vrbit)) ? {
      return take_it(obj,pv,varg);
    } : false;
  }

export function take_it(obj: OBJECT, vec: VECTOR, vrb: VARG) {
    let sav1: VERB = vec[1];
    let sav2: (FALSE | OBJECT) = vec[2];
    ((search_list(oid(obj), robjs(G_here), false) && (can_take_Q(obj) || !vtrnn(vrb,G_vtbit)))) ? {
      vec[1] = G_take_X_words;
      vec[2] = obj;
      take(t);
      vec[1] = sav1;
      return vec[2] = sav2;
    } : false;
  }

export function orfeo(syn: VARG, objs: VECTOR) {
    let orph: VECTOR = G_orphans;
    let orfl: (ATOM | FALSE) = oflag(orph);
    let slot1: (FALSE | PHRASE | OBJECT) = null;
    (!orfl) ? {
      return false;
    } : (slot1 = oslot1(orph)) ? {
      return (syn_equal(syn,slot1) && objs[1] = slot1);
    } : false;
  }

export function ortell(varg: VARG, action: ACTION, gwim: (FALSE | OBJECT)) {
    let prep: (FALSE | PREP) = vprep(varg);
    let sp: STRING = null;
    (prep) ? {
      (gwim && tell(vstr(action), 0, ` `) && tell(odesc2(gwim), 0, ` `));
      return tell(prstr(chtype(prep,atom)), 0, ` what?`);
    } : {
      return tell(vstr(action), 0, ` what?`);
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
        ((1st && x === nam)) ? {
          return y[1] = x[1];
        } : {
          return y[1] = chtype(_(32, ascii(x[1])), character);
        };
      },
	nam,	str);
  }

export function gwim_slot(fx: FIX, varg: VARG, action: ACTION, objs: VECTOR) {
    let obj: VECTOR = null;
    (obj = gwim(vbit(varg), varg,action)) ? {
      objs[fx] = obj;
      return obj;
    } : false;
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
(robj) ? {
      return ((nobj = fwim(bit,robjs(G_here), ntake) && (!av || av === nobj || memq(nobj,ocontents(av)) || trnn(nobj,G_findmebit)))) ? {
          return (((savobj = pv[2] || t) && !obj && (sf = pv[1] || t) && pv[1] = G_take_X_words && pv[2] = nobj && (action === pv[1] || ntake || take()) && pv[2] = savobj && pv[1] = sf && nobj)) ? {
              ;
            } : (pv[2] = savobj) ? {
              return false;
            } : false;
        } : ((nobj || !empty_Q(nobj))) ? {
          return G_nefals;
        } : {
          return obj;
        };
    } : {
      return obj;
    };
  }

// [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]

export function make_action(`TUPLE`, specs) {`AUX`, vv, sum, /*(*/ [prep, false] /*)*/, atm
    chtype(mapf(G_uvector,     function(sp: VECTOR) {
          let syn: VECTOR = ivector(5, false);
          let whr: FIX = 1;
          mapf(false,
		   function(itm) {
              (type_Q(itm,string)) ? {
                return prep = find_prep(itm);
              } : ((itm === obj && itm = () => /*(*/ [_1] /*)*/ && false)) ? {
                ;
              } : (type_Q(itm,list)) ? {
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
                return whr = _(whr,1);
              } : (type_Q(itm,vector)) ? {
                return (gassigned_Q(atm = add_word(itm[1]))) ? {
                    return syn[G_sfcn] = /*,*/ [atm] /*1*/;
                  } : {
                    return syn[G_sfcn] = setg(atm = add_word(itm[1]),
						    chtype(/*[*/ [atm,itm[2]] /*]*/, verb));
                  };
              } : (itm === driver) ? {
                return syn[G_sdriver] = t;
              } : (itm === flip) ? {
                return syn[G_sflip] = t;
              } : false;
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
    (type_Q(pobj,phrase)) ? {
      return (vprep(varg) === pobj[1] && (!vtrnn(varg,G_vxbit) || trnn(pobj[2], vbit)));
    } : (type_Q(pobj,object)) ? {
      return (!vprep(varg) && (!vtrnn(varg,G_vxbit) || trnn(pobj,vbit)));
    } : {
      return (!pobj && 0_Q(vbit));
    };
  }

G_directions = moblist(directions)

export function eparse(pv: VECTOR(/*[*/ [REST, STRING] /*]*/), vb: (ATOM | FALSE)) {
    let val: ANY = null;
    (val = sparse(pv,vb)) ? {
      return ((val === win || syn_match(val))) ? {
          return orphan(false);
        } : ((vb || tell(``))) ? {
          return false;
        } : false;
    } : ((vb || tell(``))) ? {
      return false;
    } : false;
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
	(obj = search_list(objnam,G_stars,adj)) ? {
      return oobj = obj;
    } : (!empty_Q(obj)) ? {
      return return(G_nefals,get_obj);
    } : false,
	((lit_Q(here) && obj = search_list(objnam,robjs(G_here), adj))) ? {
      return ((av && obj !== av && !memq(obj,ocontents(av)) && !trnn(obj,G_findmebit))) ? {
          return chomp = t;
        } : (oobj) ? {
          return return(G_nefals,get_obj);
        } : {
          return oobj = obj;
        };
    } : ((!obj && !empty_Q(obj))) ? {
      return return(G_nefals,get_obj);
    } : false,
	(av) ? {
      return (obj = search_list(objnam,ocontents(av), adj)) ? {
          chomp = false;
          return oobj = obj;
        } : (!empty_Q(obj)) ? {
          return return(G_nefals,get_obj);
        } : false;
    } : false,
	(obj = search_list(objnam,aobjs(G_winner), adj)) ? {
      return (oobj) ? {
          return G_nefals;
        } : {
          return obj;
        };
    } : (!empty_Q(obj)) ? {
      return G_nefals;
    } : (chomp) ? {
      return G_nefals2;
    } : {
      return oobj;
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
        (this_it_Q(objnam,obj,adj)) ? {
          return (oobj) ? {
              return return(nefals,sl);
            } : {
              return oobj = obj;
            };
        } : false;
((ovis_Q(obj) && (oopen_Q(obj) || transparent_Q(obj)) && (first_Q || trnn(obj,G_searchbit)))) ? {
          return (nobj = search_list(objnam,ocontents(obj), adj,false)) ? {
              return (oobj) ? {
                  return return(nefals,sl);
                } : {
                  return oobj = nobj;
                };
            } : (nobj === nefals) ? {
              return return(nefals,sl);
            } : false;
        } : false;
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
        ((ovis_Q(x) && (no_take || can_take_Q(x)) && trnn(x,bit))) ? {
          (nobj) ? {
              return return(G_nefals,dwim);
            } : false;
          return nobj = x;
        } : false;
((ovis_Q(x) && oopen_Q(x))) ? {
          return mapf(false,
		    function(x: OBJECT) {
                ((ovis_Q(x) && trnn(x,bit))) ? {
                  return (nobj) ? {
                      return return(G_nefals,dwim);
                    } : {
                      return nobj = x;
                    };
                } : false;
              },
		    ocontents(x));
        } : false;
      },
    objs),
   nobj)