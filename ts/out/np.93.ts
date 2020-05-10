words = (words[oblist] || moblist(words, 23))

object_obl = (objects[oblist] || moblist(objects, 23))

actions = moblist(actions, 17)

orphans = /*[*/ [false, false, false, false, false] /*]*/

cond(/*(*/ [(lookup(`COMPILE`, root()) || gassigned_Q(group_glue))] /*)*/,
      /*(*/ [prepvec = /*[*/ [chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase),
	      chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase)] /*]*/,
       prep2vec = /*[*/ [chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase),
	      chtype(/*[*/ [find_prep(`WITH`), find_obj(`#####`)] /*]*/, phrase)] /*]*/] /*)*/)

define(sparse, sparout, /*(*/ [sv, vb,
			`AUX`, /*(*/ [words, words] /*)*/, /*(*/ [objob, object_obl] /*)*/, /*(*/ [pv, prsvec] /*)*/,
			      /*(*/ [pvr, rest(pv)[1] = false[2] = false] /*)*/,
			      /*(*/ [actions, actions] /*)*/, /*(*/ [dirs, directions] /*)*/, /*(*/ [orph, orphans] /*)*/,
			      /*(*/ [orfl, oflag(orph)] /*)*/, /*(*/ [prv, prepvec] /*)*/, /*(*/ [here, here] /*)*/,
			      /*(*/ [action, false] /*)*/, /*(*/ [prep, false] /*)*/, nprep, /*(*/ [adj, false] /*)*/, atm, aval, obj,
			      pprep, lobj, val] /*)*/,
   /*#*/ [decl, /*(*/ [/*(*/ [sv] /*)*/, vector(/*[*/ [rest, string] /*]*/), /*(*/ [vb, orfl] /*)*/, (atom || false),
	  /*(*/ [actions, words, objob, dirs] /*)*/, oblist, /*(*/ [pv, orph, prv, pvr] /*)*/, vector,
	  /*(*/ [atm] /*)*/, (atom || false), /*(*/ [here] /*)*/, room, /*(*/ [action] /*)*/, (false || action),
	  /*(*/ [nprep, prep] /*)*/, (false || prep), /*(*/ [adj] /*)*/, (false || adjective), /*(*/ [aval] /*)*/, any,
	  /*(*/ [lobj] /*)*/, any, /*(*/ [obj] /*)*/, (false || object), /*(*/ [pprep] /*)*/, phrase] /*)*/] /*2*/,
   val = mapf(false,
     function(x: string) {
          cond(/*(*/ [empty_Q(x), mapleave(t)] /*)*/,
	 /*(*/ [(!action && atm = lookup(x,actions)),
	  action = /*,*/ [atm] /*1*/] /*)*/,
	 /*(*/ [(!action && atm = lookup(x,dirs)),
	  pv[1] = walk_X_words,
	  pv[2] = /*,*/ [atm] /*1*/,
	  return(win, sparout)] /*)*/,
	 /*(*/ [(atm = lookup(x,words) && cond(/*(*/ [type_Q(aval = /*,*/ [atm] /*1*/, prep),
		      cond(/*(*/ [prep,			     (vb || tell(`Double preposition?`, 0)),
			     mapleave(false)] /*)*/,
			    /*(*/ [prep = aval] /*)*/)] /*)*/,
		     /*(*/ [type_Q(aval,adjective),
		      adj = aval,
		      !(orfl && atm = oname(orph) && x = spname(atm))] /*)*/,
		     /*(*/ [t] /*)*/))] /*)*/,
	 /*(*/ [atm = lookup(x,objob),
	  cond(/*(*/ [obj = get_object(atm,adj),
	    (empty_Q(pvr) && (vb || tell(`Too many objects specified?`, 0)) && mapleave(false)),
	    pvr[1] = cond(/*(*/ [prep,			pprep = prv[1],
			prv = rest(prv),
			pprep[1] = prep,
			prep = false,
			pprep[2] = obj] /*)*/,
		       /*(*/ [obj] /*)*/),
	    pvr = rest(pvr)] /*)*/,
	   /*(*/ [t,
	    cond(/*(*/ [empty_Q(obj),
		   (vb || cond(/*(*/ [lit_Q(here),
			      tell(`I can't see a`, 0),
			      cond(/*(*/ [adj,				     tell(` `, 0, prstr(chtype(adj,atom)))] /*)*/),
			      tell(` `, 0, prstr(atm), ` here.`)] /*)*/,
			     /*(*/ [tell(`It is too dark in here to see.`, 0)] /*)*/))] /*)*/,
		  /*(*/ [obj === nefals2,
		   (vb || tell(`I can't reach that from inside the `,
			     0,
			     odesc2(avehicle(winner)),
			     `.`))] /*)*/,
		  /*(*/ [(vb || tell(`Which `, 0, prstr(atm), `?`)),
		   orphan(t,
			   (action || (orfl && overb(orph))),
			   pv[2],
			   prep,			   atm)] /*)*/),
	    mapleave(false)] /*)*/),
	  adj = false,
	  t] /*)*/,
	 /*(*/ [(vb || tell(`I don't know the word `, 0, x)), mapleave(false)] /*)*/);
        },
     sv),
   cond(/*(*/ [val,	  cond(/*(*/ [(!action && !action = (orfl && overb(orph))),
		 (vb || cond(/*(*/ [type_Q(pv[2], object),
			    tell(`What should I do with the `,
				  0,
				  odesc2(pv[2]),
				  `?`)] /*)*/,
			   /*(*/ [tell(`Huh?`, 0)] /*)*/)),
		 orphan(t, false, pv[2]),
		 false] /*)*/,
		/*(*/ [(pv[1] = action && adj),
		 (vb || tell(`Dangling adjective?`, 0)),
		 false] /*)*/,
		/*(*/ [(orfl && nprep = oprep(orph) && obj = pv[2] && pprep = prv[1][1] = nprep && pprep[2] = obj && cond(/*(*/ [obj = oslot1(orph),
			     pv[2] = obj,
			     pv[3] = pprep] /*)*/,
			    /*(*/ [pv[2] = pprep] /*)*/) && false)] /*)*/,
		/*(*/ [prep,		 (type_Q(lobj = back(pvr)[1], object) && top(back(pvr)[1] = prv[1][1] = prep[2] = lobj))] /*)*/,
		/*(*/ [pv] /*)*/)] /*)*/))

export function sp(str) {
    parse(lex(str), false);
  }

export function orphan(flag?: (atom | false), action, slot1, prep, name: (atom | false)) {
    orphans[oname] = name[oprep] = prep[oslot1] = slot1[overb] = action[oflag] = flag;
  }

export function syn_match(pv: vector) {
    let action: action = pv[1];
    let objs: vector = rest(pv);
    let o1: (false | object | phrase) = objs[1];
    let o2: (false | object | phrase) = objs[2];
    let dforce: (false | syntax) = false;
    let drive: (false | syntax) = false;
    let gwim: (false | object) = false;
    let synn: varg = null;
    cond(/*(*/ [mapf(false,
      function(syn: syntax) {
            cond(/*(*/ [syn_equal(syn1(syn), o1),
	   cond(/*(*/ [syn_equal(syn2(syn), o2),
		  (sflip(syn) && objs[1] = o2 && objs[2] = o1),
		  mapleave(take_it_or_leave_it(syn,pv[1] = sfcn(syn)))] /*)*/,
		 /*(*/ [!o2,
		  cond(/*(*/ [sdriver(syn), dforce = syn] /*)*/, /*(*/ [drive = syn] /*)*/),
		  false] /*)*/)] /*)*/,
	  /*(*/ [!o1,
	   cond(/*(*/ [sdriver(syn), dforce = syn] /*)*/, /*(*/ [drive = syn] /*)*/),
	   false] /*)*/);
          },
      vdecl(action))] /*)*/,
    /*(*/ [drive = (dforce || drive),
     cond(/*(*/ [(synn = syn1(drive) && !o1 && !0_Q(vbit(synn)) && !orfeo(synn,objs) && !o1 = gwim = gwim_slot(1, synn,action,objs)),
	    orphan(t, action,false, vprep(synn)),
	    ortell(synn,action,gwim)] /*)*/,
	   /*(*/ [(synn = syn2(drive) && !o2 && !0_Q(vbit(synn)) && !gwim_slot(2, synn,action,objs)),
	    orphan(t, action,o1,vprep(synn)),
	    ortell(synn,action,gwim)] /*)*/,
	   /*(*/ [take_it_or_leave_it(drive,pv[1] = sfcn(drive))] /*)*/)] /*)*/,
    /*(*/ [tell(`I can't make sense out of that.`, 0), false] /*)*/);
  }

export function take_it_or_leave_it(syn: syntax, pv: vector) {
    let pv1: (false | object | phrase) = pv[2];
    let pv2: (false | object | phrase) = pv[3];
    let obj: (false | object) = null;
    let varg: varg = null;
    pv[2] = obj = cond(/*(*/ [type_Q(pv1,object), pv1] /*)*/,
			/*(*/ [type_Q(pv1,phrase), pv1[2]] /*)*/);
cond(/*(*/ [vtrnn(varg = syn1(syn), vrbit),
	       take_it(obj,pv,varg)] /*)*/);
pv[3] = obj = cond(/*(*/ [type_Q(pv2,object), pv2] /*)*/,
			/*(*/ [type_Q(pv2,phrase), pv2[2]] /*)*/);
cond(/*(*/ [vtrnn(varg = syn2(syn), vrbit),
	       take_it(obj,pv,varg)] /*)*/);
  }

export function take_it(obj: object, vec: vector, vrb: varg) {
    let sav1: verb = vec[1];
    let sav2: (false | object) = vec[2];
    cond(/*(*/ [(search_list(oid(obj), robjs(here), false) && (can_take_Q(obj) || !vtrnn(vrb,vtbit))),
	       vec[1] = take_X_words,
	       vec[2] = obj,
	       take(t),
	       vec[1] = sav1,
	       vec[2] = sav2] /*)*/);
  }

export function orfeo(syn: varg, objs: vector) {
    let orph: vector = orphans;
    let orfl: (atom | false) = oflag(orph);
    let slot1: (false | phrase | object) = null;
    cond(/*(*/ [!orfl, false] /*)*/,
	      /*(*/ [slot1 = oslot1(orph),
	       (syn_equal(syn,slot1) && objs[1] = slot1)] /*)*/);
  }

export function ortell(varg: varg, action: action, gwim: (false | object)) {
    let prep: (false | prep) = vprep(varg);
    let sp: string = null;
    cond(/*(*/ [prep,	       (gwim && tell(vstr(action), 0, ` `) && tell(odesc2(gwim), 0, ` `)),
	       tell(prstr(chtype(prep,atom)), 0, ` what?`)] /*)*/,
	      /*(*/ [tell(vstr(action), 0, ` what?`)] /*)*/);
false;
  }

export function prstr(atm: atom) {
    let sp: string = null;
    foostr(sp = spname(atm), back(scrstr,sp.length), false);
  }

export function foostr(nam: string, str: string, 1st?: (atom | false)) {
    mapr(false,
	function(x: string, y: string) {
        cond(/*(*/ [(1st && x === nam),
		   y[1] = x[1]] /*)*/,
		  /*(*/ [y[1] = chtype(_(32, ascii(x[1])), character)] /*)*/);
      },
	nam,	str);
  }

export function gwim_slot(fx: number, varg: varg, action: action, objs: vector) {
    let obj: vector = null;
    cond(/*(*/ [obj = gwim(vbit(varg), varg,action),
	       objs[fx] = obj,
	       obj] /*)*/);
  }

`GET WHAT I MEAN - GWIM
 TAKES BIT TO CHECK AND WHERE TO CHECK AND WINS TOTALLY`

export function gwim(bit: number, fword: varg, action: action) {
    let aobj: (atom | false) = vtrnn(fword,vabit);
    let ntake: (atom | false) = vtrnn(fword,vtbit);
    let robj: (atom | false) = vtrnn(fword,vrbit);
    let obj: (atom | false) = false;
    let nobj: (object | false) = null;
    let pv: vector = prsvec;
    let savobj: (false | object | phrase) = null;
    let av: (object | false) = avehicle(winner);
    let sf = null;
    (aobj && obj = fwim(bit,aobjs(winner), ntake));
cond(/*(*/ [robj,	       cond(/*(*/ [(nobj = fwim(bit,robjs(here), ntake) && (!av || av === nobj || memq(nobj,ocontents(av)) || trnn(nobj,findmebit))),
		      cond(/*(*/ [((savobj = pv[2] || t) && !obj && (sf = pv[1] || t) && pv[1] = take_X_words && pv[2] = nobj && (action === pv[1] || ntake || take()) && pv[2] = savobj && pv[1] = sf && nobj)] /*)*/,
			    /*(*/ [pv[2] = savobj, false] /*)*/)] /*)*/,
		     /*(*/ [(nobj || !empty_Q(nobj)), nefals] /*)*/,
		     /*(*/ [obj] /*)*/)] /*)*/,
	      /*(*/ [obj] /*)*/);
  }

// [ON (,BIT ,BIT ,BIT ROBJS NO-TAKE ...) [ATOM!-WORDS <FCN>] DRIVER]

export function make_action(`TUPLE`, specs) {`AUX`, vv, sum, /*(*/ [prep, false] /*)*/, atm
    chtype(mapf(uvector,     function(sp: vector) {
          let syn: vector = ivector(5, false);
          let whr: number = 1;
          mapf(false,
		   function(itm) {
              cond(/*(*/ [type_Q(itm,string),
				  prep = find_prep(itm)] /*)*/,
				 /*(*/ [(itm === obj && itm = () => /*(*/ [_1] /*)*/ && false)] /*)*/,
				 /*(*/ [type_Q(itm,list),
				  vv = ivector(3),
				  vv[1] = itm[1],
				  vv[2] = prep,
				  sum = 0,
				  prep = false,
				  (memq(aobjs, itm) && sum = _(sum,vabit)),
				  (memq(robjs, itm) && sum = _(sum,vrbit)),
				  (memq(no_take, itm) && sum = _(sum,vtbit)),
				  (memq(_, itm) && sum = _(sum,vxbit)),
				  vv[3] = sum,
				  syn[whr] = chtype(vv,varg),
				  whr = _(whr,1)] /*)*/,
				 /*(*/ [type_Q(itm,vector),
				  cond(/*(*/ [gassigned_Q(atm = add_word(itm[1])),
					 syn[sfcn] = /*,*/ [atm] /*1*/] /*)*/,
					/*(*/ [syn[sfcn] = setg(atm = add_word(itm[1]),
						    chtype(/*[*/ [atm,itm[2]] /*]*/, verb))] /*)*/)] /*)*/,
				 /*(*/ [itm === driver, syn[sdriver] = t] /*)*/,
				 /*(*/ [itm === flip, syn[sflip] = t] /*)*/);
            },
		   sp);
(syn1(syn) || syn[syn1] = evarg);
(syn2(syn) || syn[syn2] = evarg);
chtype(syn,syntax);
        },
     specs),
    vspec);
  }

evarg = chtype(/*[*/ [0, false, 0] /*]*/, varg)

export function syn_equal(varg: varg, pobj: (false | phrase | object)) {
    let vbit: number = vbit(varg);
    cond(/*(*/ [type_Q(pobj,phrase),
	   (vprep(varg) === pobj[1] && (!vtrnn(varg,vxbit) || trnn(pobj[2], vbit)))] /*)*/,
	  /*(*/ [type_Q(pobj,object),
	   (!vprep(varg) && (!vtrnn(varg,vxbit) || trnn(pobj,vbit)))] /*)*/,
	  /*(*/ [(!pobj && 0_Q(vbit))] /*)*/);
  }

directions = moblist(directions)

export function eparse(pv: vector(/*[*/ [rest, string] /*]*/), vb: (atom | false)) {
    let val: any = null;
    cond(/*(*/ [val = sparse(pv,vb),
	       cond(/*(*/ [(val === win || syn_match(val)), orphan(false)] /*)*/,
		     /*(*/ [(vb || tell(``)), false] /*)*/)] /*)*/,
	      /*(*/ [(vb || tell(``)), false] /*)*/);
  }

scrstr = rest(istring(5), 5)

ssv = ivector(10, false)

`GET-OBJECT:  TAKES ATOM (FROM OBJECTS OBLIST), VERBOSITY FLAG.  GROVELS
OVER: ,STARS; ,HERE; ,WINNER LOOKING FOR OBJECT (LOOKS DOWN TO ONE LEVEL
OF CONTAINMENT).  RETURNS <> IF NOT FOUND OR FOUND MORE THAN ONE, THE
OBJECT OTHERWISE.`

define(get_object, get_obj, /*(*/ [objnam, adj,
			    `AUX`, obj, /*(*/ [oobj, false] /*)*/, /*(*/ [here, here] /*)*/,
				  /*(*/ [av, avehicle(winner)] /*)*/, /*(*/ [chomp, false] /*)*/] /*)*/,
	/*#*/ [decl, /*(*/ [/*(*/ [oobj, obj, av] /*)*/, (object || false), /*(*/ [objnam] /*)*/, atom, /*(*/ [here] /*)*/, room,
	       /*(*/ [adj] /*)*/, (adjective || false), /*(*/ [chomp] /*)*/, (atom || false),
	       /*(*/ [objl] /*)*/, (false || list(/*[*/ [rest, object] /*]*/))] /*)*/] /*2*/,
	cond(/*(*/ [obj = search_list(objnam,stars,adj), oobj = obj] /*)*/,
	      /*(*/ [!empty_Q(obj), return(nefals,get_obj)] /*)*/),
	cond(/*(*/ [(lit_Q(here) && obj = search_list(objnam,robjs(here), adj)),
	       cond(/*(*/ [(av && obj !== av && !memq(obj,ocontents(av)) && !trnn(obj,findmebit)),
		      chomp = t] /*)*/,
		     /*(*/ [oobj,return(nefals,get_obj)] /*)*/,
		     /*(*/ [oobj = obj] /*)*/)] /*)*/,
	      /*(*/ [(!obj && !empty_Q(obj)), return(nefals,get_obj)] /*)*/),
	cond(/*(*/ [av,	       cond(/*(*/ [obj = search_list(objnam,ocontents(av), adj),
		      chomp = false,
		      oobj = obj] /*)*/,
		     /*(*/ [!empty_Q(obj), return(nefals,get_obj)] /*)*/)] /*)*/),
	cond(/*(*/ [obj = search_list(objnam,aobjs(winner), adj),
	       cond(/*(*/ [oobj,nefals] /*)*/, /*(*/ [obj] /*)*/)] /*)*/,
	      /*(*/ [!empty_Q(obj), nefals] /*)*/,
	      /*(*/ [chomp,nefals2] /*)*/,
	      /*(*/ [oobj] /*)*/))

`SEARCH-LIST:  TAKES OBJECT NAME, LIST OF OBJECTS, AND VERBOSITY.
IF FINDS ONE FROB UNDER THAT NAME ON LIST, RETURNS IT.  SEARCH IS TO
ONE LEVEL OF CONTAINMENT.`

nefals = /*#*/ [false, /*(*/ [1] /*)*/] /*2*/

nefals2 = /*#*/ [false, /*(*/ [2] /*)*/] /*2*/

define(search_list, sl, /*(*/ [objnam, slist, adj, `OPTIONAL`, /*(*/ [first_Q, t] /*)*/, `AUX`, /*(*/ [oobj, false] /*)*/,
			/*(*/ [nefals, nefals] /*)*/, nobj] /*)*/, 
   /*#*/ [decl, /*(*/ [/*(*/ [objnam] /*)*/, atom, /*(*/ [slist] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [oobj, nobj] /*)*/, (false || object), /*(*/ [adj] /*)*/, (false || adjective),
	  /*(*/ [first_Q] /*)*/, (atom || false), /*(*/ [nefals] /*)*/, false] /*)*/] /*2*/,
   mapf(false,
    function(obj: object) {
        cond(/*(*/ [this_it_Q(objnam,obj,adj),
		   cond(/*(*/ [oobj,return(nefals,sl)] /*)*/, /*(*/ [oobj = obj] /*)*/)] /*)*/);
cond(/*(*/ [(ovis_Q(obj) && (oopen_Q(obj) || transparent_Q(obj)) && (first_Q || trnn(obj,searchbit))),
	      cond(/*(*/ [nobj = search_list(objnam,ocontents(obj), adj,false),
		     cond(/*(*/ [oobj,return(nefals,sl)] /*)*/,
			   /*(*/ [oobj = nobj] /*)*/)] /*)*/,
		    /*(*/ [nobj === nefals, return(nefals,sl)] /*)*/)] /*)*/);
      },
    slist),
   oobj)

`FWIM:  TAKE LIST OF FROBS, FIND ONE THAT CAN BE MANIPULATED (VISIBLE
AND TAKEABLE, OR VISIBLE AND IN SOMETHING THAT'S VISIBLE AND OPEN)`

define(fwim, dwim, /*(*/ [bit, objs, no_take, `AUX`, /*(*/ [nobj, false] /*)*/] /*)*/, 
   /*#*/ [decl, /*(*/ [/*(*/ [no_take] /*)*/, (atom || false), /*(*/ [bit] /*)*/, fix, /*(*/ [objs] /*)*/, list(/*[*/ [rest, object] /*]*/),
	  /*(*/ [nobj] /*)*/, (false || object)] /*)*/] /*2*/,
   mapf(false,
    function(x: object) {
        cond(/*(*/ [(ovis_Q(x) && (no_take || can_take_Q(x)) && trnn(x,bit)),
		   cond(/*(*/ [nobj,return(nefals,dwim)] /*)*/),
		   nobj = x] /*)*/);
cond(/*(*/ [(ovis_Q(x) && oopen_Q(x)),
	      mapf(false,
		    function(x: object) {
                cond(/*(*/ [(ovis_Q(x) && trnn(x,bit)),
				   cond(/*(*/ [nobj,return(nefals,dwim)] /*)*/,
					 /*(*/ [nobj = x] /*)*/)] /*)*/);
              },
		    ocontents(x))] /*)*/);
      },
    objs),
   nobj)