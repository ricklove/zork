// TYPE 	TYPEPRIM 	S 	E 	A 		; \\comments
// ACTIVATION 	FRAME 		; \\		X 	
// ASOC 		; \\			B 	sic: only one S
// ATOM 		; \\				
// BITS 	WORD 		; \\			
// BYTES 		; \\S 		; \\		
// CHANNEL 	VECTOR 	S 		; \\	X 	
// CHARACTER 	WORD 		; \\			
// CLOSURE 	LIST 	S 		; \\A 		; \\
// CODE 	UVECTOR 	S 		; \\		
// DECL 	LIST 	S 		; \\		
// DISMISS 	ATOM 		; \\			can be returned by interrupt handler
// ENVIRONMENT 	FRAME 		; \\		B 	
// FALSE 	LIST 	S 		; \\		
// FIX 	WORD 		; \\	A 		; \\
// FLOAT 	WORD 		; \\			
// FORM 	LIST 	S 	E 		; \\	
// FRAME 		; \\			B 	
// FSUBR 	WORD 		; \\	A 	X 	
// FUNCTION 	LIST 	S 		; \\A 		; \\
// HANDLER 	VECTOR 	S 		; \\	X 	
// IHEADER 	VECTOR 	S 		; \\	X 	"interrupt header"
// ILLEGAL 	WORD 		; \\		X 	Garbage collector may put this on non_LEGAL? object.
// INTERNAL 	INTERNAL_TYPE 		; \\		X 	should not be seen by programs
// LINK 	ATOM 		; \\		X 	for terminal shorthand
// LIST 		; \\S 	E 		; \\	
// LOCA 		; \\			B 	locative to TUPLE
// LOCAS 		; \\			B 	locative to ASOC
// LOCB 		; \\			B 	locative to BYTES
// LOCD 		; \\			% 	locative to G/LVAL
// LOCL 		; \\			B 	locative to LIST
// LOCR 		; \\			% 	locative to GVAL in pure program
// LOCS 		; \\			B 	locative to STRING
// LOCT 		; \\			B 	locative to TEMPLATE
// LOCU 		; \\			B 	locative to UVECTOR
// LOCV 		; \\			B 	locative to VECTOR
// LOSE 	WORD 		; \\			a place holder
// MACRO 	LIST 	S 		; \\A 		; \\
// OBLIST 	UVECTOR 	S 		; \\	X 	
// OFFSET 	OFFSET 		; \\	A 	% 	
// PCODE 	WORD 		; \\		% 	"pure code"
// PRIMTYPE_C 	WORD 		; \\		% 	"primtype code"
// PROCESS 		; \\			B 	
// QUICK_ENTRY 	VECTOR 	S 		; \\A 	% 	an RSUBR_ENTRY that has been QCALLed and RSUBR_LINKed
// QUICK_RSUBR 	VECTOR 	S 		; \\A 	%/B 	an RSUBR that has been QCALLed and RSUBR_LINKed
// READA 	FRAME 		; \\		X 	in eof slot during recursive READ via READ_TABLE
// RSUBR 	VECTOR 	S 		; \\A 	%/B 	if code vector is pure/impure, respectively
// RSUBR_ENTRY 	VECTOR 	S 		; \\A 	% 	
// SEGMENT 	LIST 	S 	E 		; \\	
// SPLICE 	LIST 	S 		; \\		for returning many things via READ_TABLE
// STORAGE 		; \\S 		; \\		If possible, use FREEZE SUBR instead.
// STRING 		; \\S 		; \\		
// SUBR 	WORD 		; \\	A 	X 	
// TAG 	VECTOR 	S 		; \\	X 	for non_local GOs
// TEMPLATE 		; \\S 		; \\	B 	The interpreter itself can't build one. See Lebling (1979).
// TIME 	WORD 		; \\			used internally to identify FRAMEs
// TUPLE 		; \\S 		; \\	B 	vector on the control stack
// TYPE_C 	WORD 		; \\		% 	"type code"
// TYPE_W 	WORD 		; \\		% 	"type word"
// UNBOUND 	WORD 		; \\		X 	value of unassigned but bound ATOM, as seen by locatives
// UVECTOR 		; \\S 	E 		; \\	"uniform vector"
// VECTOR 		; \\S 	E 		; \\	
// WORD 		; \\				


export type ACTIVATION = { __type: 'ACTIVATION'; } & FRAME;
export type ASOC = { __type: 'ASOC'; } & unknown;
export type ATOM = { __type: 'ATOM'; } & unknown;
export type BITS = { __type: 'BITS'; } & WORD;
export type BYTES = { __type: 'BYTES'; } & unknown;
export type CHANNEL = { __type: 'CHANNEL'; } & VECTOR;
export type CHARACTER = { __type: 'CHARACTER'; } & WORD;
export type CLOSURE = { __type: 'CLOSURE'; } & LIST;
export type CODE = { __type: 'CODE'; } & UVECTOR;
export type DECL = { __type: 'DECL'; } & LIST;
export type DISMISS = { __type: 'DISMISS'; } & ATOM;
export type ENVIRONMENT = { __type: 'ENVIRONMENT'; } & FRAME;
export type FALSE = { __type: 'FALSE'; } & LIST;
export type FIX = { __type: 'FIX'; } & WORD;
export type FLOAT = { __type: 'FLOAT'; } & WORD;
export type FORM = { __type: 'FORM'; } & LIST;
export type FRAME = { __type: 'FRAME'; } & unknown;
export type FSUBR = { __type: 'FSUBR'; } & WORD;
export type FUNCTION = { __type: 'FUNCTION'; } & LIST;
export type HANDLER = { __type: 'HANDLER'; } & VECTOR;
export type IHEADER = { __type: 'IHEADER'; } & VECTOR;
export type ILLEGAL = { __type: 'ILLEGAL'; } & WORD;
export type INTERNAL_TYPE = { __type: 'INTERNAL_TYPE'; } & unknown;
export type INTERNAL = { __type: 'INTERNAL'; } & INTERNAL_TYPE;
export type LINK = { __type: 'LINK'; } & ATOM;
export type LIST = { __type: 'LIST'; } & unknown;
export type LOCA = { __type: 'LOCA'; } & unknown;
export type LOCAS = { __type: 'LOCAS'; } & unknown;
export type LOCB = { __type: 'LOCB'; } & unknown;
export type LOCD = { __type: 'LOCD'; } & unknown;
export type LOCL = { __type: 'LOCL'; } & unknown;
export type LOCR = { __type: 'LOCR'; } & unknown;
export type LOCS = { __type: 'LOCS'; } & unknown;
export type LOCT = { __type: 'LOCT'; } & unknown;
export type LOCU = { __type: 'LOCU'; } & unknown;
export type LOCV = { __type: 'LOCV'; } & unknown;
export type LOSE = { __type: 'LOSE'; } & WORD;
export type MACRO = { __type: 'MACRO'; } & LIST;
export type OBLIST = { __type: 'OBLIST'; } & UVECTOR;
export type OFFSET = { __type: 'OFFSET'; } & unknown;
export type PCODE = { __type: 'PCODE'; } & WORD;
export type PRIMTYPE_C = { __type: 'PRIMTYPE_C'; } & WORD;
export type PROCESS = { __type: 'PROCESS'; } & unknown;
export type QUICK_ENTRY = { __type: 'QUICK_ENTRY'; } & VECTOR;
export type QUICK_RSUBR = { __type: 'QUICK_RSUBR'; } & VECTOR;
export type READA = { __type: 'READA'; } & FRAME;
export type RSUBR = { __type: 'RSUBR'; } & VECTOR;
export type RSUBR_ENTRY = { __type: 'RSUBR_ENTRY'; } & VECTOR;
export type SEGMENT = { __type: 'SEGMENT'; } & LIST;
export type SPLICE = { __type: 'SPLICE'; } & LIST;
export type STORAGE = { __type: 'STORAGE'; } & unknown;
export type STRING = { __type: 'STRING'; } & unknown;
export type SUBR = { __type: 'SUBR'; } & WORD;
export type TAG = { __type: 'TAG'; } & VECTOR;
export type TEMPLATE = { __type: 'TEMPLATE'; } & unknown;
export type TIME = { __type: 'TIME'; } & WORD;
export type TUPLE = { __type: 'TUPLE'; } & unknown;
export type TYPE_C = { __type: 'TYPE_C'; } & WORD;
export type TYPE_W = { __type: 'TYPE_W'; } & WORD;
export type UNBOUND = { __type: 'UNBOUND'; } & WORD;
export type UVECTOR = { __type: 'UVECTOR'; } & unknown;
export type VECTOR = { __type: 'VECTOR'; } & unknown;
export type WORD = { __type: 'WORD'; } & unknown;