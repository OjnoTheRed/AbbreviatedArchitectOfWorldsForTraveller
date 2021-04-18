function generateWorlds()
{
	init_rng(Date.now());
	var sandbox = document.getElementById("sandbox");
	var myTable = document.createElement("TABLE");
	sandbox.appendChild(myTable);
	var hdrRow = document.createElement("TR");
	myTable.appendChild(hdrRow);
	var hdrC = document.createElement("TH");
	hdrC.innerHTML = "Name";
	hdrRow.appendChild(hdrC);
	var hdrC = document.createElement("TH");
	hdrC.innerHTML = "UWP";
	hdrRow.appendChild(hdrC);
	var hdrC = document.createElement("TH");
	hdrC.innerHTML = "Trade Classifications";
	hdrRow.appendChild(hdrC);
	var hdrC = document.createElement("TH");
	hdrC.innerHTML = "Temperature";
	hdrRow.appendChild(hdrC);
	var hdrC = document.createElement("TH");
	hdrC.innerHTML = "PBG";
	hdrRow.appendChild(hdrC);
	var namesIndex = [];
	for(var i=0;i<100;i++)
	{
		var myWorld = new world();
		do
		{
			myWorld.name = worldNames[rng(worldNames.length-1)];
		}
		while(namesIndex.find(function(n) { return n == myWorld.name }) !== undefined)
		namesIndex.push(myWorld.name);
		myTable.appendChild(myWorld.toTableRow());
	}
}

var worldNames = ["Galileo","Lubeck Lions","Asahi","Inongo","Amymone","Babek","Castalia","Newcastle","Lahurati","Naples","Bunker Hill","Indalo","Akureyri","Moruya","Cerberus","Grafton Loam","Suur Tõll","Masally","Burgos","Granger’s World","N'Djamena","Baza","Luther","Gangtok","Sardis","New Paris","Truman","Drangsnes","New Argos","New Kolkata","Belzoni Beta","Resheph One","Belton","Norwich","Dangun","New Harare","Saratoga","Epworth","Sebastopol","Haven","Ahone II","Kueyen","Saratov","Iyo","New Trinidad","Hamilton","Zhombe","Xanthi","Mengzhou","Rapa Nui","York","Juazeiro","Beja Xi","Nibiru","Erebus","Union","Polemos","Troy","New Troyes","Bat Yam","Astara","Tuli Oti","Zaba Omicron","Leipzig","Sundstrom","Amritsar","Triteia","Ioannina","Goma Delta","Deadhorse","Zangilan","Stavanger","Inverell","Inglis","Epiphron","Reutlingen","Paden Beau","Dhul Khalasa","Attis Dome","Cragus Boone","Laurits","Excelsior Springs","Ludhiana Four","Duberdicus","Jackson","Columbia","Persephone","Araraquara","Victoria","Alvorada Hold","Nixa","Mongo Lai","Medaurus","Stavropol","Saint Ann","Saint Asaph","Jehanabad","Ermoupoli","Manitoba","Malangwa","Kangiten","Lyon","Bifrost","Independence Core","Aetolia","Masi‐Manimba","Geneva","Bixby","Aihayuta","Lincoln","Lawton Ardmore","Watatsumi","Americana","Barling","Freeport","Celaeno","Caesar","Selvans","Graveyard","Eustis","Ishwarpur 11","Midway","Sallis 9","Kiyosu","Birgunj","Aglaurus","Myōken","Leto Prime","Phorbas","Sabus Prime","Golbazar","Galveston Prime","Goshen","Barsamin","Mostoles","New Hong Kong","Nyami Nyami","Anshun Saint Francis","Tamiya Toulon","Montoro","Vilbus","Bhiwandi","Admetus","Pillan Core","Meerut","Blackwelder","Aphrodite","Durius","Tansen Alpha","Fountainhead","Indra","Izanagi Seven","Teresina","Shullat","Hammerfest","Batbayar","Port Jarvis","Ramla","Abercromby","Cordoba","Plutus","Tianshui","Vogar Signa","Qena","Ganbaatar","Wuxi El Husseiniya","Uberaba","Redcliff","Horagalles","Mwaro","New Congo","New Berlin","New Tasmania","Holmberg","Tharapita","Liberty","Nagpur Indigo","Belmont Free","Sundar Haraincha","Rapti","Exeter","Satara Blud","Zhaoqing","Namtar","Monticello","Turiacus","Sao Leopoldo","Oguz","Theandrios","Stillwater","Durham Cole","Nindara Rim","Kilmichael Newton","Richmond Scone","Mobara II","Komotini","Kopervik Li","Trondheim","Loki","Kasenga B","Nyanga","Nahundi","Oneiros","Ta'lab 3","Taizhou","Yukon Sobral","Kafr Saqr","Dimona","Callahan Zou","Siegen","Sturgis","Mirandela","Zunhua Tieli","Elba Seven","Prometheus","San Borja","Edgewater","Ghorahi","Hwange","Hopkins","Osasco","Kingfisher","Ares Lusitani","Camden","Gibil","Tiberias","Oswego","Gaia","Narrabri","Mantus Grove","Nabu","Bolivar","Santiago","Ngozi","Hughes","Colcapirhua","Blackburn","Bone Gap","Otrera","Zardab","Enyo","Tangaroa","New Jerusalem","Lod","Waldron","New Smyrna","Daphne","Malabar","Freedom","Porus 2","Aiomun‐Kondi","Machedon","Lion's Den","Salisbury Tor","Jurōjin","Eilat","Gilgamesh","Waralden Olmai","Ugajin","Aernus","Book","Montes Claros","Inverness Soar","Dercetius","Pyrgos","Chizhou","Salem","Hull","Blackwater","New London","Wolverhampton","Pax Armada","Uoke","Anantapur","Dievas 4","Rongomai","Priapus","Hezuo Six","Atlantis","Armidale","Kumugwe","Windsor","McIntosh","Karura","Cabeiro","Bhanu Okazaki","Eupora","Narvik Poord","Shaki Aberdeen","Nergal","Novosibirsk","Polymatheia","Ozu Athens","Mnemosyne","Queensland Forge","Bonne Terre","Bardibas","Bloom Theta","Aita","Rangeli Seti"];
var multiplicity_of_stars_tbl = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:1, 4:1, 5:1, 6:1, 7:1, 8:2, 9:2, 10:2, 11:2, 12:3 };
var stellar_classification_tbl = { dice:function(world) {return ((world.uwp.atmos > 3 && world.uwp.atmos < 9) || world.uwp.popul > 7) ? dice(1)+2 : dice(2); }, min:2, max:12, mods:[], 2:"Unusual", 3:"F5-F9 V", 4:"G0-G4 V", 5:"G5-G9 V", 6:"K0-K4 v", 7:"K5-K9 V", 8:"M0-M1 V", 9:"M2-M3 V", 10:"M4-M5 V", 11:"M6-M7 V", 12:"M8 V" };
var stellar_classification_companion_tbl = { dice:function(world) {return dice(1)-1; }, min:2, max:12, mods:[], 2:"Unusual", 3:"F5-F9 V", 4:"G0-G4 V", 5:"G5-G9 V", 6:"K0-K4 v", 7:"K5-K9 V", 8:"M0-M1 V", 9:"M2-M3 V", 10:"M4-M5 V", 11:"M6-M7 V", 12:"M8 V" };
var unusual_stars_tbl = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:"K0-K2 III", 3:"K3-K5 III", 4:"K6-K9 III", 5:"M0-M4 III", 6:"F5-F9 IV", 7:"G0-G4 IV", 8:"G5-G9 IV", 9:"K0-K3 IV", 10:"A0-A4 V", 11:"A5-A9 V", 12:"F0-F4 V" };
var num_gas_giants_tbl = { dice:function(world) 
					{
						var r = dice(2);
						if(world.uwp.atmos > 3 && world.uwp.atmos < 9)
							r = r + 2;
						if(world.numStars > 1)
							r = r - 2;
						if(world.primaryStar == "M0-M1 V" || world.primaryStar == "M2-M3 V")
							r = r - 2;
						if(world.primaryStar == "M4-M5 V" || world.primaryStar == "M6-M7 V")
							r = r - 4;
						if(world.primaryStar == "M8 V")
							r = r - 6;
						return r;
						
					}, min:2, max:12, mods:[], 2:0, 3:0, 4:0, 5:0, 6:1, 7:1, 8:2, 9:2, 10:3, 11:4, 12:5 };
var num_belts_tbl = { dice:function(world) 
					{
						var r = dice(2);
						if(world.uwp.size == 0)
							r = r - 2;
						if(world.numStars == 1 && world.gas_giants < 2)
							r = r - 2;
						return r; 
					}, min:2, max:12, mods:[], 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:1, 9:1, 10:1, 11:1, 12:2 };

var BLACK_BODY_TEMP = [
{code:0, temp:330, title:"Hot", desc:"Any surface water has long since been lost, possibly triggering a runaway greenhouse. Examples: Mercury and Venus."},
{code:1, temp:280, title:"Temperate", desc:"Liquid surface water is possible and even likely. 'Garden' worlds will usuallyfall in this range. Examples: Earth."}, 
{code:2, temp:220, title:"Cold", desc:"Too cold for liquid surface water, although there may be water ice or subsurface aquifers. Examples: Mars."}, 
{code:3, temp:160, title:"Frozen (I)", desc:"Approaching the system’s 'ice line.' Far too cold for liquid surface water. Examples: Ceres."}, 
{code:4, temp:120, title:"Frozen (II)", desc:"Past the 'ice line.' The largest gas giant and its satellites are often found here. Worlds oftenhave thick coats of water ice.Examples: Europaor Ganymede."},
{code:5, temp:90, title:"Frozen (III)", desc:"The outer reachesof the planetary system. More gas giant worlds and their major satellites arefound here, along with the 'minor planets' of the Kuiper Belt. Worlds are likely to have thick coats of water and other ices. Examples: Titan."}
];

var black_body_temp_tbl = { dice:function() { return dice(2); }, min: 2, max: 12, mods:[], 2:BLACK_BODY_TEMP[0], 3:BLACK_BODY_TEMP[1], 4:BLACK_BODY_TEMP[1], 5:BLACK_BODY_TEMP[1], 6:BLACK_BODY_TEMP[1], 7:BLACK_BODY_TEMP[1], 8:BLACK_BODY_TEMP[1], 9:BLACK_BODY_TEMP[2], 10:BLACK_BODY_TEMP[3], 11:BLACK_BODY_TEMP[4], 12:BLACK_BODY_TEMP[5] };
var atmosTbl1 = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:1, 4:1, 5:1, 6:10, 7:10, 8:10, 9:10, 10:11, 11:11, 12:11 };
var atmosTbl2 = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:1, 4:1, 5:1, 6:6, 7:10, 8:10, 9:10, 10:10, 11:10, 12:10 };
var atmosTbl3 = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:6, 4:6, 5:6, 6:6, 7:6, 8:6, 9:10, 10:10, 11:10, 12:10 };
var atmosTbl4 = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:10, 4:10, 5:10, 6:10, 7:10, 8:10, 9:10, 10:11, 11:11, 12:11 };
var atmosTbl5 = { dice:function() {return dice(2); }, min:2, max:12, mods:[], 2:1, 3:6, 4:6, 5:6, 6:6, 7:6, 8:6, 9:6, 10:6, 11:6, 12:10 };


var WORLD_PROPERTIES_TABLE = [
[{at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }} ],
[{at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }} ],
[{at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }} ],
[{at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return 0; }, hy:function(a){ return 0; }}, {at:function(){ return dice(2) < 8 ? 0 : 10; }, hy:function(a){ return a=10 ? Math.max(0, dice(1)-4) : 0; }} ],
[{at:function(){ return 1; }, hy:function(a){ return 1; }}, {at:function(){ return new dice_table(atmosTbl1).roll(); }, hy:function(a){ return (a==10 || a==11) ? Math.max(0,dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 7 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 3 ? 0: 10; }, hy:function(a){ return a==10 ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 3 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 8 ? 0 : 10; }, hy:function(a){ return a=10 ? Math.max(0, dice(1)-4) : 0; }} ],
[{at:function(){ return dice(2) < 6 ? 1 : 10 }, hy:function(a){ return 0; }}, {at:function(){ return new dice_table(atmosTbl2).roll(); }, hy:function(a){ return a==6 ? dice(1) : 0; }}, {at:function(){ return new dice_table(atmosTbl1).roll(); }, hy:function(a){ return (a==10 || a==11) ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 7 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}], 
[{at:function(){ return dice(2) < 7 ? 10 : 11; }, hy:function(a){ return 0; }}, {at:function(){ return new dice_table(atmosTbl3).roll(); }, hy:function(a){ return a==6 ? dice(1) : 0; }}, {at:function(){ return new dice_table(atmosTbl4).roll(); }, hy:function(a){ return (a==10 || a==11) ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 3 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0,dice(1)-4) : 0;  }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}],
[{at:function(){ return dice(2) < 3 ? 10 : 11; }, hy:function(a){ return 0; }}, {at:function(){ return new dice_table(atmosTbl5).roll(); }, hy:function(a){ return a==6 ? dice(1)+2 : 0; }}, {at:function(){ return new dice_table(atmosTbl4).roll(); }, hy:function(a){ return (a==10 || a==11) ? Math.max(0, dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 3 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0,dice(1)-4) : 0; }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}],
[{at:function(){ return 11; }, hy:function(a){ return 0; }}, {at:function(){ return dice(2) < 3 ? 1 : 6; }, hy:function(a){ return a==6 ? dice(1)+3 : 0; }}, {at:function(){ return new dice_table(atmosTbl4).roll(); }, hy:function(a){ return (a==10 || a==11) ? Math.max(0,dice(1)-4) : 0; }}, {at:function(){ return dice(2) < 3 ? 0 : 10; }, hy:function(a){ return a==10 ? Math.max(0,dice(1)-4) : 0; }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}],
[{at:function(){ return 11; }, hy:function(a){ return 0; }}, {at:function(){ return 6; }, hy:function(a){ return dice(1)+4; }}, {at:function(){ return dice(2) < 9 ? 10 : 11; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4);  }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}],
[{at:function(){ return 11; }, hy:function(a){ return 0; }}, {at:function(){ return dice(2) < 12 ? 6 : 10; }, hy:function(a){ return a==6 ? dice(1)+4 : 10; }}, {at:function(){ return dice(2) < 9 ? 10 : 11; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}, {at:function(){ return 10; }, hy:function(a){ return Math.max(0,dice(1)-4); }}]
];

var WORLD_TECH_SP_MOD = {property:"port",A:6, B:4, C:2, D:0, E:0, F:1, G:0, H:0, X: -2, Y:0};
var WORLD_TECH_SI_MOD = {property:"size",0:2, 1:2, 2:1, 3:1, 4:1};
var WORLD_TECH_AT_MOD = {property:"atmos", 0:1, 1:1, 2:1, 3:1, 10:1, 11:1, 12:1, 13:1, 14:1, 15:1};
var WORLD_TECH_HY_MOD = {property:"hydro", 9:1, 10:2};
var WORLD_TECH_PO_MOD = {property:"popul", 1:1, 2:1, 3:1, 4:1, 5:1, 9:2, 10:4};
var WORLD_TECH_GV_MOD = {property:"gov", 0:1, 5:1, 13:-2};
var WORLD_TL_MODS = [WORLD_TECH_SP_MOD,WORLD_TECH_SI_MOD,WORLD_TECH_AT_MOD,WORLD_TECH_HY_MOD,WORLD_TECH_PO_MOD,WORLD_TECH_GV_MOD];
var WORLD_STARPORT_TABLE = {dice: function() { return dice(2) }, min: 2, max: 12, 2:"A", 3:"A", 4:"A", 5:"B", 6:"B", 7:"C", 8:"C", 9:"D", 10:"D", 11:"E", 12:"X"};

var TC_AS = {name:"Asteroid Belt", code:"As", rules:function(world) { return world.uwp.size == 0 && world.uwp.atmos == 0 && world.uwp.hydro == 0; }, mod:-3 };
var TC_DE = {name:"Desert", code:"De", rules:function(world) { return world.uwp.atmos > 1 && world.uwp.atmos < 10 && world.uwp.hydro == 0; }, mod:-2 };
var TC_FL = {name:"Fluid Oceans", code:"Fl", rules:function(world) { return world.uwp.atmos > 9 && world.uwp.atmos < 13 && world.uwp.hydro > 0; }, mod:-3 };
var TC_GA = {name:"Garden World", code:"Ga", rules:function(world) { return world.uwp.size > 5 && world.uwp.size < 9 && (world.uwp.atmos == 5 || world.uwp.atmos == 6 || world.uwp.atmos == 8) && world.uwp.hydro > 4 && world.uwp.hydro < 8; }, mod:2 };
var TC_HE = {name:"Hell World", code:"He", rules:function(world) { return world.uwp.size > 2 && world.uwp.size < 13 && (world.uwp.atmos == 2 || world.uwp.atmos == 4 || world.uwp.atmos == 7 || world.uwp.atmos == 9 || world.uwp.atmos == 10 || world.uwp.atmos == 11 || world.uwp.atmos == 12) && world.uwp.hydro < 3; }, mod:-2};
var TC_IC = {name:"Ice capped", code:"Ic", rules:function(world) { return world.uwp.atmos < 2 && world.uwp.hydro > 0 }, mod:-2 };
var TC_OC = {name:"Ocean World", code:"Oc", rules:function(world) { return world.uwp.size > 9 && ((world.uwp.atmos > 3 && world.uwp.atmos < 10) || world.uwp.atmos > 12) && world.uwp.hydro == 10; }, mod:-1 };
var TC_VA = {name:"Vacuum World", code:"Va", rules:function(world) { return world.uwp.size > 0 && world.uwp.atmos == 0; }, mod:-3 };
var TC_WA = {name:"Water World", code:"Wa", rules:function(world) { return world.uwp.size > 2 && world.uwp.size < 10 && ((world.uwp.atmos > 3 && world.uwp.atmos < 10) || world.uwp.atmos > 12) && world.uwp.hydro == 10; }, mod:-1 };
var TC_DI = {name:"Dieback", code:"Di", rules:function(world) { return world.uwp.popul == 0 && world.uwp.gov == 0 && world.uwp.law == 0 && world.uwp.TL > 0; }, mod:0 };
var TC_BA = {name:"Barren", code:"Ba",  rules:function(world) { return world.uwp.popul == 0 && world.uwp.gov == 0 && world.uwp.law == 0 && world.uwp.TL == 0; }, mod:0 };
var TC_LO = {name:"Low Population", code:"Lo", rules:function(world) { return world.uwp.popul < 4 && world.uwp.popul > 0; }, mod:-1 };
var TC_NI = {name:"Non Industrial", code:"Ni", rules:function(world) { return world.uwp.popul > 3 && world.uwp.popul < 7; }, mod:-1 };
var TC_PH = {name:"Pre High Population", code:"Ph", rules:function(world) { return world.uwp.popul == 8; }, mod:-1 };
var TC_HI = {name:"High Population", code:"Hi", rules:function(world) { return world.uwp.popul > 8; }, mod:-1 };
var TC_PA = {name:"Pre-Agricultural", code:"Pa", rules:function(world) { return world.uwp.atmos > 3 && world.uwp.atmos < 10 && world.uwp.hydro > 3 && world.uwp.hydro < 9 && (world.uwp.popul == 4 || world.uwp.popul == 8); }, mod:1 };
var TC_AG = {name:"Agricultural", code:"Ag", rules:function(world) { return world.uwp.atmos > 3 && world.uwp.atmos < 10 && world.uwp.hydro > 3 && world.uwp.hydro < 9 && world.uwp.popul > 4 && world.uwp.popul < 8; }, mod:2 };
var TC_NA = {name:"Non-Agricultural", code:"Na", rules:function(world) { return world.uwp.atmos < 4 && world.uwp.hydro < 4 && world.uwp.popul > 5}, mod:-2 };
var TC_PX = {name:"Prison or Exile Camp", code:"Px", rules:function(world) { return world.isMainWorld && (world.uwp.atmos == 2 || world.uwp.atmos == 3 || world.uwp.atmos == 10 || world.uwp.atmos == 11) && world.uwp.hydro > 0 && world.uwp.hydro < 6 && world.uwp.popul > 2 && world.uwp.popul < 7 && world.uwp.law > 5 && world.uwp.law < 10; }, mod:0 };
var TC_PI = {name:"Pre-Industrial", code:"Pi", rules:function(world) { return (world.uwp.atmos == 0 || world.uwp.atmos == 1 || world.uwp.atmos == 2 || world.uwp.atmos == 4 || world.uwp.atmos == 7 || world.uwp.atmos == 9) && (world.uwp.popul == 7 || world.uwp.popul == 8); }, mod:-1 };
var TC_IN = {name:"Industrial", code:"In", rules:function(world) { return (world.uwp.atmos == 0 || world.uwp.atmos == 1 || world.uwp.atmos == 2 || world.uwp.atmos == 4 || world.uwp.atmos == 7 || (world.uwp.atmos > 8  && world.uwp.atmos < 13)) && world.uwp.popul > 8; }, mod:-1 };
var TC_PO = {name:"Poor", code:"Po", rules:function(world) { return world.uwp.atmos > 1 && world.uwp.atmos < 6 && world.uwp.hydro < 4; }, mod:-2 };
var TC_PR = {name:"Pre-Rich", code:"Pr", rules:function(world) { return (world.uwp.atmos == 6 || world.uwp.atmos == 8) && (world.uwp.popul == 5 || world.uwp.popul == 9); }, mod:1 };
var TC_RI = {name:"Rich", code:"Ri", rules:function(world) { return (world.uwp.atmos == 6 || world.uwp.atmos == 8) && (world.uwp.popul > 5 && world.uwp.popul < 9); }, mod:2 };
/*var TC_FR = {name:"Frozen", code:"Fr", rules:function(world) { return world.zone == "O" && world.uwp.size > 1 && world.uwp.size < 10 && world.uwp.hydro > 0; }, mod:-1 };
var TC_HO = {name:"Hot", code:"Ho", rules:function(world) { return world.hz_rel == -1; }, mod:0 };
var TC_CO = {name:"Cold", code:"Co", rules:function(world) { return world.hz_rel == 1; }, mod:0 };
var TC_TR = {name:"Tropic", code:"Tr", rules:function(world) { return world.hz_rel == -1 && world.uwp.size > 5 && world.uwp.size < 10 && world.uwp.atmos > 3 && world.uwp.atmos < 10 && world.uwp.hydro > 2 && world.uwp.hydro < 8; }, mod:0 };
var TC_TU = {name:"Tundra", code:"Tu", rules:function(world) { return world.hz_rel == 1 && world.uwp.size > 5 && world.uwp.size < 10 && world.uwp.atmos > 3 && world.uwp.atmos < 10 && world.uwp.hydro > 2 && world.uwp.hydro < 8; }, mod:0 };
var TC_TZ = {name:"Twilight Zone", code:"Tz", rules:function(world) { return (world.systemOrbit == 0 || world.systemOrbit == 1) && world.uwp.size > 0; }, mod:-1 };
var TC_FA = {name:"Farming", code:"Fa", rules:function(world) { return !world.isMainWorld && world.uwp.atmos > 3 && world.uwp.atmos < 10 && world.uwp.hydro > 3 && world.uwp.hydro < 9 && world.uwp.popul > 1 && world.uwp.popul < 7 && world.zone == "H"; }, mod:1 };
var TC_MI = {name:"Mining", code:"Mi", rules:function(world) { return world.uwp.popul > 1 && world.uwp.popul < 7 && !world.isMainWorld && world.mainWorld.tcs.has("In"); }, mod:0 };
var TC_MR = {name:"Military Rule", code:"Mr", rules:function(world) {return false}, mod:0 };
var TC_PE = {name:"Penal Colony", code:"Pe", rules:function(world) { return !world.isMainWorld && (world.uwp.atmos ==2 || world.uwp.atmos ==3 || world.uwp.atmos == 10 || world.uwp.atmos == 11) && world.uwp.hydro > 0 && world.uwp.hydro < 6 && world.uwp.popul > 2 && world.uwp.popul < 7 && world.uwp.gov == 6 && world.uwp.law > 5 && world.uwp.law < 10; }, mod:0 };
var TC_RE = {name:"Reserve", code:"Re", rules:function(world) { return world.uwp.popul > 0 && world.uwp.popul < 5 && world.uwp.gov == 6 && (world.uwp.law ==4 || world.uwp.law ==5); }, mod:0 };
var TC_CY = {name:"Colony", code:"Cy", rules:function(world) { return world.uwp.popul > 4 && world.uwp.popul < 11 && world.uwp.gov == 6 && world.uwp.law < 4; }, mod:0 };
var TC_SA = {name:"Satellite", code:"Sa", rules:function(world) {return world.isSatellite}, mod:0 };
var TC_LK = {name:"Locked", code:"Lk", rules:function(world) {return world.isSatellite && (world.orbit && world.orbit.baseOrbit.m < 70)}, mod:0 };
var TC_PZ = {name:"Puzzle", code:"Pz", rules:function(world) { return world.travelZone == "A" && world.uwp.popul > 6; }, mod:0 };
var TC_DA = {name:"Dangerous", code:"Da", rules:function(world) { return world.travelZone == "A" && world.uwp.popul < 7; }, mod:0 };
var TC_FO = {name:"Forbidden", code:"Fo", rules:function(world) { return world.travelZone == "R"; }, mod:0 };
*/
var ALL_TC = [ TC_AS,TC_DE,TC_FL,TC_GA,TC_HE,TC_IC,TC_OC,TC_VA,TC_WA,TC_DI,TC_BA,TC_LO,TC_NI,TC_PH,TC_HI,TC_PA,TC_AG,TC_NA,TC_PX,TC_PI,TC_IN,TC_PO,TC_PR,TC_RI,/*TC_FR,TC_HO,TC_CO,TC_TR,TC_TU,TC_TZ,TC_FA,TC_MI,TC_MR,TC_PE,TC_RE,TC_CY,TC_PZ,TC_DA,TC_FO,TC_SA,TC_LK*/];

function world()
{
	var me = this;
	me.primaryStar = "";
	me.companionStar = "";
	me.secondCompanionStar = "";
		
	me.toString = function()
	{
		var s = "";
		s += me.name;
		s += " " + me.uwp;
		s += " " + me.tcs;
		s += " Black Body Temperature: " + me.black_body_temp.temp + "K (" + (me.black_body_temp.temp-273) + "C or " + Math.round(((me.black_body_temp.temp-273)*9/5 + 32),0) + "F)";
		s += " Population multiplier: " + me.popMulti;
		return s;
	};
	
	me.toTableRow = function()
	{
		var row = document.createElement("TR");
		var cell1 = document.createElement("TD");
		cell1.innerHTML = me.name;
		var cell2 = document.createElement("TD");
		cell2.innerHTML = me.uwp;
		var cell3 = document.createElement("TD");
		cell3.innerHTML = me.tcs;
		var cell4 = document.createElement("TD");
		cell4.innerHTML = me.black_body_temp.temp + "K (" + (me.black_body_temp.temp-273) + "C or " + Math.round(((me.black_body_temp.temp-273)*9/5 + 32),0) + "F)</td>";
		var cell5 = document.createElement("TD");
		cell5.innerHTML = me.popMulti + "" + me.belts + "" + me.gas_giants;
		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		row.appendChild(cell4);
		row.appendChild(cell5);
		return row;
	};
	
	me.generateStars = function()
	{
		me.numStars = new dice_table(multiplicity_of_stars_tbl).roll();
		var stellarClassificationTbl = new dice_table(stellar_classification_tbl, null, me);
		var primaryStar = stellarClassificationTbl.roll();
		var primaryStarRoll = stellarClassificationTbl.rollResult;
		if(primaryStar == "Unusual")
			primaryStar = new dice_table(unusual_stars_tbl).roll();
		me.primaryStar = primaryStar;
		if(me.numStars > 1)
		{
			var companionStarTbl = new dice_table(stellar_classification_companion_tbl);
			companionStarTbl.DM = primaryStarRoll;
			var companionStar = companionStarTbl.roll();
			var companionStarRoll = companionStarTbl.rollResult;
			me.companionStar = companionStar;
		}
		if(me.numStars > 2)
		{
			companionStarTbl.DM = companionStarRoll;
			var secondCompanionStar = companionStarTbl.roll();
			me.secondCompanionStar = secondCompanionStar;
		}
	};
	
	me.black_body_temp = new dice_table(black_body_temp_tbl).roll();
	me.uwp = new uwp(me);
	me.tcs = new tcs(me);
	me.popMulti = rng(8)+1;
	me.generateStars();
	me.gas_giants = new dice_table(num_gas_giants_tbl, null, me).roll();
	me.belts = new dice_table(num_belts_tbl, null, me).roll();
}

function uwp(world)
{
	var me = this;
	me.world = world;
	
	me.generate = function()
	{
		me.size = dice(2)-2;
		me.atmos = WORLD_PROPERTIES_TABLE[me.size][me.world.black_body_temp.code].at();
		me.hydro = WORLD_PROPERTIES_TABLE[me.size][me.world.black_body_temp.code].hy(me.atmos);
		me.port = new dice_table(WORLD_STARPORT_TABLE).roll();
		me.popul = dice(2)-2;
		me.gov = Math.max(0,me.popul + flux());
		me.law = Math.max(0,me.gov + flux());
		me.tech = dice(1) + me.totalTechDM();		
	};
	
	me.toString = function()
	{
		var s = "";
//		console.log(me.port + "-" + me.size + "-" + me.atmos + "-" + me.hydro + "-" + me.popul + "-" + me.gov + "-" + me.law + "-" + me.tech);
		s += me.port;
		s += pseudoHex(me.size);
		s += pseudoHex(me.atmos);
		s += pseudoHex(me.hydro);
		s += pseudoHex(me.popul);
		s += pseudoHex(me.gov);
		s += pseudoHex(me.law);
		s += "-" + pseudoHex(me.tech);
		return s;
	};
	
	me.totalTechDM = function()
	{
		var total_tech_DM = 0;
		for(var i=0;i<WORLD_TL_MODS.length;i++)
		{
			var propertyValue = me[WORLD_TL_MODS[i].property];
			if(WORLD_TL_MODS[i][propertyValue] !== undefined)
				total_tech_DM += WORLD_TL_MODS[i][propertyValue];
		}
		return total_tech_DM;
	};
	
	me.generate();
}

function tcs(world)
{
	var me = this;
	me.world = world;
	me.classes = [];

	me.generate = function()
	{
		me.classes = [];
		for(var i=0;i<ALL_TC.length;i++)
			if(ALL_TC[i].rules(me.world))
				me.add(ALL_TC[i].code);
	}

	me.has = function(tcCode)
	{
		return me.classes.find(function(v) { return v == tcCode } ) !== undefined;
	}

	me.add = function(tcCode)
	{
		if(!me.has(tcCode))
			me.classes.push(tcCode);
	}

	me.toString = function()
	{
		return me.classes.join(" ");
	}
	
	me.generate();
}
