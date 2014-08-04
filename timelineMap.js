//onload
function init(){

	//get window height
	function windowHeight(){
	return Math.min(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,
	document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);
	}
	
	/*To do: Get access to a mobile to text otherwise use screen height...site looks ok on a tablet I might need another vs for phone
    	var isMobile = window.matchMedia("only screen and (max-width: 760px)");

	  if (isMobile.matches) {
        $("#myMap").after('<div class="textbox" style="left:0%;top0%">test1</div>');
		
    	}

	if ((/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)){
	        $("#myMap").after('<div class="textbox" style="left:0%;top20%">test2</div>');
	}*/
	
	var lteIE8 = false;
	if (document.all && !document.addEventListener){
		lteIE8 = true;
	}
	if (!lteIE8){
		// getting timelineHolder from html element 'myTimeline'
		var timelineHolder = document.getElementById('myTimeline');
		
		//setting up group categories on timeline
		var sc = 'Scandinavia';
		var ga = 'Germanic</br>Areas';
		var nw = 'Neighbouring</br>World';
		var groups = new vis.DataSet([
			{id: sc},		//1
			{id: nw},		//2
		]);
	}
		
	//setting up empty data array and dataPoint constructor to push it values in format 
	//recognized by visjs jQuery timeline plugin
	var data = [];
  	function dataPoint(group, title, startDate, endDate){
		this.id = data.length+1;
		this.group = group;
		this.content = title;
		this.start = startDate;
		this.end = endDate;
		data.push(this);
	}

	//creating new instances of dataPoint to go in data[]
	var romePeak = new dataPoint(nw, '<b>Peak of Roman Empire</b>', '0000', '0200');
	var germanResist = new dataPoint(nw, '<b>Resistance to Roman Rule</b>', '0000', '0200');
	var swedesBC = new dataPoint(sc, '<b>Swedes ~ Abridged BC History</b>', '0000', '0099');
	var norseBC = new dataPoint(sc, '<b>The Norsemen ~ Abridged BC History</b>', '0000', '0099');
	var danesBC = new dataPoint(sc, '<b>The Danes ~ Abridged BC History</b>', '0000', '0099');
	var romeFall = new dataPoint(nw, '<b>Fall of the Western Roman Empire</b>', '0261','0488');
	var finnsBC = new dataPoint(sc, '<b>The Finns ~ Abridged BC History</b>', '0000','0099');
	var daneBogBods = new dataPoint(sc, 'Pre-Roman Iron Age Bog Bodies in Denmark','0000','0179');	
	var germanBogBods = new dataPoint(nw,'Iron Age+ Bog Bodies in Germanic areas', '0000', '1099');
    	var romanInfl = new dataPoint(sc,'<b>Cultural Influence in Scandinavia During Roman Iron Age</b>','0100','0550');
    	var germanIberia = new dataPoint(nw, 'Iberia Invaded by</br>Germanic Tribes','0410','0425');
	var sami = new dataPoint(sc, 'The Sami', '0000', '1099');
	var germanChanges =  new dataPoint(nw, 'Roman Influence on Germanic Tribes', '0000', '0200');
	var romeLostBlSea = new dataPoint(nw, 'Rome Abandons</br>North Black Sea', '0271', '0286');
	var romeDivides = new dataPoint(nw, 'East-West Division of Rome', '0292', '0330');
	var huns370To433 = new dataPoint(nw, 'The Huns Move Into Europe', '0370','0433');
	var huns434To449 = new dataPoint(nw, '<b>Huns Sack East</br>Rome</b>', '0434','0449');
	var huns450To469 = new dataPoint(nw, 'Fall of the Huns', '0450', '0469');
	var taticus = new dataPoint(nw, 'Tacitus writes Germania', '0098', '0108');
	var visgoths1 = new dataPoint(nw, 'Visgoths Migrate </br>and Conquer', '0375', '0390');
	var visgoths2 = new dataPoint(nw, 'Visgoths </br>Attempt Conquest </br>of Rome', '0391', '0401'); 
	var visgoths3 = new dataPoint(nw, 'Visgoths </br>Enter Hispania', '0402', '0412'); 
	var vandals1 = new dataPoint(nw, 'Vandals Migrate', '0390', '0400');
	var vandals2 = new dataPoint(nw, 'Vandals Defeat </br>Hispania', '0401', '0410');
	var vandals3 = new dataPoint(nw, 'Vandals Attack </br>Rome & Italian Islands', '0450', '0460');
	var britIsles = new dataPoint(nw, 'Rome Loses </br>Brittania', '0405', '0415');
	var gaul = new dataPoint(nw, 'Rome Abandons </br>Gaul', '0450', '0460');
	var pannonia = new dataPoint(nw, 'Ostrogoths </br>take Pannonia', '0450', '0460');
	var wRomeFalls = new dataPoint(nw, 'The City of Rome Defeated by Germanic Tribes', '0466', '0526');
	var ostrWRome = new dataPoint(nw, 'Ostrogoths </br>take Italia', '0483', '0493');
	var danesSolidify = new dataPoint(sc, 'Danes Seperate from Germanic areas', '0480', '0520');
	var franksGaul = new dataPoint(nw, 'Franks take </br>Gaul from Visgoths', '0502', '0512');
	var gothWar = new dataPoint(nw, '<b>Goth-Byzantine War</b>', '0535', '0553');
	var justinianPlague = new dataPoint(nw, '<b>Justinian Bubonic Plague</b>', '0531', '0551');
	var avar = new dataPoint(nw, 'Avar Kingdom' , '0553', '0563');
	var lombard = new dataPoint(nw, 'Lombard Rule in Italy' , '0563', '0573');
	var visigIberia = new dataPoint(nw, 'Visigoths take Iberia', '0580', '0590');
	var lombardChristian = new dataPoint(nw, 'Lombards </br>Christianize', '0584', '0594');
	var visigChristian = new dataPoint(nw, 'Visigoths </br>Christianize', '0584', '0594');
	var futhork = new dataPoint(nw, 'Germanics adopt Runic Dialects', '0440', '0460');
	var beowulf = new dataPoint(sc, 'Beowulf & Other Saga Heros', '0500','0530');
	var oldNorse = new dataPoint(sc, 'Old Norse Evolves', '0700', '0900');
	var danevirke = new dataPoint(sc, 'Danevirke Fortifications Built', '0737', '0961');
	var irminsul = new dataPoint(nw, '<b>Charlemagne Destroys Irminsul</b>', '0764', '0780');
	var vikingEngland = new dataPoint(nw, '<b>Vikings raid</br> England</b>', '0788', '1066');
	var vikingIreland = new dataPoint(nw, 'Vikings Raid Ireland', '0795', '1066');
	var youngerFuthark = new dataPoint(sc, 'Runic Alphabet Changes', '0800', '0820');
	var gudfredDenmark = new dataPoint(sc, 'King Gudfred</br>of Denmark', '0800', '0810');
	var charlemagneFranks = new dataPoint(nw, '<b>Charlemagne Unifies a Large Christian Kingdom</b>',  '0768', '0810');
	var hemmingDenmark = new dataPoint(sc, 'King Hemming I</br>of Denmark', '0810', '0820');
	var civilWarDenmark = new dataPoint(sc, 'King Klak, Horik, and Civil War in Denmark', '0812', '0854');
	var vikingCornish = new dataPoint(sc, 'Vikins Ally</br>with Cornish', '0835', '0845');
	var halfdanNorway = new dataPoint(sc, 'King Halfdan the Black of Norway', '0840','0870');
	var vikingSpain = new dataPoint(nw, 'Vikings Raid Moorish Spain', '0844', '0970');
	var rus = new dataPoint(nw, '<b>Varangian Vikings rule the Rus</b>', '0862', '0988');
	var vikingFrance = new dataPoint(nw, 'Vikings raid France', '0798', '1000'); 
	var christianEngland = new dataPoint(nw, 'England is Christianized', '0598', '0686');
	var frisians = new dataPoint(nw, 'The Frisians', '0600', '0734');
	var christianGoths = new dataPoint(nw, 'The Goths Christianize', '0325', '0400');
	var christianRomans = new dataPoint(nw, 'Rome Converts to Christianity', '0313', '0391');
	var christianFranks = new dataPoint(nw, 'The Franks Convert to Christianity', '0498', '698');
	var iceland = new dataPoint(sc, 'Iceland is Discovered and Settled', '0874', '1099');
	var vikingSettlements = new dataPoint(sc,'Viking Settlements', '0850', '1099');
	var egill= new dataPoint(sc,'Egill Skallagrimsson, Viking Poet', '0910', '0990');
	var normans= new dataPoint(nw,'Rollo settles Normandy', '0850', '0924');
	var danelaw=new dataPoint(nw, 'Danelaw settlements', '0850', '0890');
	var fairhair=new dataPoint(sc, 'King Harold Fairhair unifies Norway', '0872', '0930');
	var shipBurials=new dataPoint(sc, 'Ship Burials & Norse Pagan beliefs on Death', '0700', '0900');
	var althingi=new dataPoint(sc, 'The Althingi begins governing assembly', '0930', '1099');
	var njilsSaga=new dataPoint(sc, "Events of Njil's Saga occurred", '0960', '1020');
	var gormDenmark=new dataPoint(sc, "King Gorm the Old Rules Denmark", '0936', '0958');
	var haakonTheGood=new dataPoint(sc, "Haakon the Good takes Norway", '0934', '0961');
	var bluetooth=new dataPoint(sc, 'Harald Bluetooth rules Denmark, converts to Christianity', '0970', '0986');
	var christainIceland=new dataPoint(sc, "Chistianization of Iceland", '0999', '1099');
	var forkbeard=new dataPoint(sc, "King Forkbead of Denmark/England/Norway", '0980', '1013');
	var olafNorway=new dataPoint(sc, "King </br>Olaf of </br>Norway", '0995', '1000');
	var stBriceMassacre=new dataPoint(nw, "St. Brice Day </br>Massacre of </br>Danes in England", '1002', '1012');
	var hardrada=new dataPoint(sc, 'King Hardrada of Norway</br>the "Last Viking King', '1046', '1066');
	var cnutTheGreat=new dataPoint(sc, "Cnut the Great forms </br>North Sea Empire", '1015', '1030');
	var liefEricson=new dataPoint(sc, "Leif Ericson </br>discovers N. America", '0999', '1020');
	var ericTheRed=new dataPoint(sc, "Eric the Red </br>in Greenland", '0982', '1003');
	var germainicIronAge = new dataPoint(sc, "<b>Germanic Iron Age Scandinavia</b>", '0550', '0793');
	var vikingEnd = new dataPoint(sc,"<b>Ending of the Viking Age</b>", '1020', '1099');
	var vikingAge = new dataPoint(sc, "<b>The Viking Age</b>", '0793', '1019');
	
	
	//creating dataInfo array (with 1 empty string already in it so array index of
	//objects pushed in matches data.id) and a constructor
	var dataInfo = ["",];
	function dataInfoText(theText){
		this.text = theText;
		dataInfo.push(this);
	};
	var text1 = new dataInfoText("The Roman Empire grew because of many factors including:<ul><li>They had the <b>world's first professional army</b>.</li><li><b>Naval Dominance</b> and control over Mediterranean Sea</li><li><b>Relative respect of conquered people</b> who often enjoyed greater freedom then they were used to under a codified legal framework.</li><li><b>Economic advantages</b> including <ul><li>well travelled trading routes</li><li>creating the coinage of the realm</li><li>benefiting from the different gold/silver ratio in trade with the east.</li></ul></li></ul> ");
	var text2 = new dataInfoText("Germanic cultures resisted Roman rule. The Germanic people were more tribal and didn't lose touch with their heritage so resisted more strongly then many of their neighbours, using guerilla tactics against the structured Roman military.<p><p>The Battle of the Teutoburg Forest took place here in 9 AD, when an alliance of Germanic tribes led by Arminius of the Cherusci ambushed and decisively destroyed three Roman legions and their auxiliaries, led by Publius Quinctilius Varus. Nothing but a few stories of brutal sacrifices to Germain Gods escaped; Publius Varus killed himself and Arminius cut off his head and had it sent to the king of Bohemia as a gift.</p></p><p><p>Despite all the conquests of the Roman army in the years after, they never again attempted to conquer Germanian territory east of the Rhine River.</p></p>");
	var text3 = new dataInfoText("<ul><li>Sweden's history begins about <b>10,000 BC</b>, following the retreat of the great inland ice sheets, the earliest Germanic and other nomadic inhabitants migrated north into the territory.</li><li>As tempatures continued to rise, so did sea levels. By 4500 the landmass that brought the first settlers from modern-day Denmark to Sweden and Norway had turned to a series of islands.</li><li>The Neolithic period, and the first agricultural settlements, slate tools, earthenware, skis, sleds and large skin boats started around <b>4000 BC</b> on the Southern tip of the territory. Breakthroughs led settlements to be widespread by <b>2500 BC.</b>However many in the North maintained hunter/gatherer ways.</li><li>The Scandinavian Mountain Range divides the north Germainic peoples and, over time, their cultures, into the Norse on the west and Swedes on the east.</li><li><b>From the 4th to the 1st century BC</b> the climate in southern Scandinavia became cooler and wetter, limiting agriculture and starting some migrations southward into Germania.</li><li><b>In 100 BC</b> the Rune Stones were developed.</li></ul></ul>");
	var text4 = new dataInfoText("<ul><li>Norway's history begins about <b>10,000 BC</b>, following the retreat of the great inland ice sheets, the earliest Germanic and other nomadic inhabitants migrated north into the territory.</li><li>As tempatures continued to rise, so did sea levels. By 4500 the landmass that brought the first settlers from modern-day Denmark to Sweden and Norway had turned to a series of islands.</li><li>The Neolithic period, and the first agricultural settlements, slate tools, earthenware, skis, sleds and large skin boats started around <b>4000 BC</b> in the South. Breakthroughs led settlements to be widespread by <b>2500 BC.</b>However many in the North maintained hunter/gatherer ways.</li><li>The Scandinavian Mountain Range divides the north Germainic peoples and, over time, their cultures, into the Norse on the west and Swedes on the east.</li><li><b>From the 4th to the 1st century BC</b> the climate in southern Scandinavia became cooler and wetter, limiting agriculture and starting some migrations southward into Germania.</li><li><b>In 100 BC</b> the Rune Stones were developed.</li></ul></ul>");
	var text5 = new dataInfoText("<ul><li>The first nomadic inhabitants are thought to have came to Denmark around <b>12,000 BC.</b></li><li>Around <b>8300 BC</b> the temperature rose by about 15 degrees, changing the landscape to dense forests and animal populations, and then leading to rising sea levels. By <b>4500 BC</b> the landmass had transformed to a series of islands. </li> <li><Agriculture started around <b>3000 BC</b>, but was hampered by temperatures cooling again between <b>4000-100 BC</b>. People also began to extract iron ore from the peat-bogs during this period.</li><li>The Danes were less segregated from other Germanic tribes and Roman trade routes then other Scandinavians. Much migration into other Germanic areas happened in the last century BC, due to poor farming conditions.</li></ul> ");
	var text6 = new dataInfoText("During this time Rome lost much of its' territory. The territories of the Western Roman Empire entered the Dark Ages. Life became hard for peoples still using Roman currency for commerce when new currency stopped flowing in. Germanic tribes, local men with land and positions of power, and the Church jostled to fill the power vacuum.</br></br>Factors that lead to its' downfall included: <ul><li><b>Foreign, especially Germanic Invasions</b> started in previously disputed lands close to borders but by the 5th century they had taken the city of Rome. The empire was attacked by Germainic tribes including the: <ul><li>Visigoths</li><li>Ostrogoths</li><li>Franks</li><li>Vandals</li><li>Angels & Saxons.</li></ul><li><b>Mercenary Military</b> with constant wars, Rome had to depend on hired Military men, who were often Germainic and would switch sides during the battle.</li><li><b>Economic Ruin and Social Strife</b> made citizens less willing to fight for Rome. The cost of constant wars resulted in high taxes and the system had changed so that former soldiers often found themselves losing their land or sold into slavery for debt.</li><li><b>Other reasons</b> include epidemics in the 2-3rd centuries and lead in the water piping and carriers used by the elite leading to brain damage in the Ruling class.</li></ul>");
	var text7 = new dataInfoText('<ul><li>The first Germanic and other nomadic inhabitants are believed to have came to the area of Finland around 9000 BC. A recent find, currently being excavated could change out understanding - the site claims to hold a Neanderthal from appx. 122,000 BC! <p><a href="http://www.susiluola.fi/eng/wolfcave.php" target=_blank>Read More about the Wolf Cave in Kristiinankaupunki</a></p></li><li>The Neolithic period is considered to have began by <b>5300 BC</b> in Finland, when skilled potery work from the Comb Ceramic Cultures has been dated to, however sustainance was still acheived through hunting and gathering. </li><li>Finland appears to have been connected to vast trade network and slate from Scandinavia, and large amounts of amber have been found, implying the Finns were connected to the European Amber Road, a route established in at least 16,000 BC supplying the Mediteranian with amber from as far as Russia</li><li>Despite other signs progress and exposure and partial assimilation with other cultures who used agriculture, the first traces of farming and animal husbandry only start on the Eastern tip of Finland around <b>200 BC.</b> Unusually, the Bronze age and Iron ages started first, around 1500 and 500 BC, resrospectivly.</li></ul>');
	var text8 = new dataInfoText('<ul><li><b>Bog Burials</b> This area is known for bog burials, as here is where was found the oldest discovered case in the world, dating to 8000 BC. Most finds have been dated to around 750-1 BC, with a few in AD times. </br> </br> The peat bogs have preserve bodies well for centuries, and hanged persons and large groups of men wounded in battle have been found. </br></br> <a href="http://ngm.nationalgeographic.com/2007/09/bog-bodies/bog-bodies-text/1" target=_blank><img src="http://s.ngm.com/2007/09/bog-bodies/img/bog_feature.jpg" width="95%"><figcaption>Click to read "Tales from the Bog" by National Geographic</figcaption></a></br>The bogs also hold votive offerings intended for the Other world, often of neck-rings, wristlets or ankle-rings made of bronze or more rarely gold. The archaeologist P.V. Glob believed that these were <i>offerings to the gods of fertility and good fortune</i>, a viewpoint that is widely supported. The only written account of possible motivations are from the Roman historian Taticus, who claims: <p><i>Traitors and deserters are hanged on trees; the coward, the unwarlike, the man stained with abominable vices, is plunged into the mire of the morass with a hurdle put over him. This distinction in punishment means that crime, they think, ought, in being punished, to be exposed, while infamy ought to be buried out of sight.</p></i></li></ul>');
	var text9 = new dataInfoText('<ul><li><b>Bog Burials</b> Although Denmark is famous for Bog Burials, they are most common in this area, dating back to about <b>765 BC</b> in Germania and continuing much longer then in Denmark -- all the way until around 1500. The peat bogs have preserve bodies well for centuries, and hanged persons and large groups of men wounded in battle have been found. </br></br> <a href="http://ngm.nationalgeographic.com/2007/09/bog-bodies/bog-bodies-text/1" target=_blank><img src="http://s.ngm.com/2007/09/bog-bodies/img/bog_feature.jpg" width="95%"><figcaption>Click to read "Tales from the Bog" by National Geographic</figcaption></a></br>The bogs also hold votive offerings intended for the Other world, often of neck-rings, wristlets or ankle-rings made of bronze or more rarely gold. The archaeologist P.V. Glob believed that these were <i>offerings to the gods of fertility and good fortune</i>, a viewpoint that is widely supported. The only written account of possible motivations are from the Roman historian Taticus, who claims: <p><i>Traitors and deserters are hanged on trees; the coward, the unwarlike, the man stained with abominable vices, is plunged into the mire of the morass with a hurdle put over him. This distinction in punishment means that crime, they think, ought, in being punished, to be exposed, while infamy ought to be buried out of sight.</p></i></li></ul>');
	var text10 = new dataInfoText('<ul><li>From <b>100 AD</b>, a cultural influence from the Roman Empire as well as being surrounded warring Germainic tribes took place in Scandinavia.</li><li>Trading in largely furs and skins in exchange for luxury goods connected Scandinavia with the rest of Europe.</li><li>Some Scandinavians migrated into Europe to return or not, others served as Roman mercenaries.</li><li>The general social structure that lasted from the Iron Age until frequent contact with Europe was a system of Clans. Clans would include parents and their sons and wifes, usually living in the same house. </li><li>In mimicing the path of Roman culture, the previously fairly equal socities became stratisfied. Some of the most powerful Norse farmers became rulers. They functioned as priests and accepted sacrifices from farmers which were again used to pay soldiers. They would obtain a group of soldiers to protect lands called a hird. Thus they were able to rule an area of several settlements and tribes.</li><li>At the bottom of the social order existed those who were unfree: these were termed þræll or "thrall", which means literally, "an unfree servant." The highest class was the jarl: the nobles and kings. The last class was the bondi or free yeoman, whose ranks included farmers, craftsmen, landowners, and other freeborn people.</li><li>The class structure became part of Viking mythology: <a href=http://www.alfheimigs.com/the_lay_of_rig.htm target=_blank>Read how the god Rig birthed the social classes</a></li><li>Scandinavian culture did not change in many other ways. Nordic paganism was an inportant part of life that was preserved in this time. The laws completly different from Roman systems. One check on power that remained was that if a man defeated another man in battle, he won the possetions of the defeated. This allowed common peasants to rise to ruling kingdoms, often desposing of despotic rulers. Conflicts were rosolved at a meeting called a thing - a sacred place where all freemen in the area would jointly make decisions.</li></ul>');
	var text11 = new dataInfoText('During the Germanic Invasions of the Iberian Peninsula, the area was conquered by the Suebi (with help from the Visgoths), a Germanic people from Central Europe. In 410, the Suebi established a Kingdom in northwest Iberia, which they maintained as Gallaecia, and made Bracara their capital');
	var text12 = new dataInfoText('<ul><li>The Sami are an indigionous people who settled in Northern Scandinavia after the retreat of the last glaciers.</li><li>The traditional Sami life style, dominated by hunting, fishing and trading, stayed much the same from perhapse 8000 BC-1800 AD, well beyond the scope of this timeline.</li><li>Many believe they are an offshoot of the same mainly Germanic tribes that settled Southen Scandinavia, but this is uncertain. It appears genetically the Sami are a mix of old Asian and European lines, although Asian peoples are not known to have migrated to the area and other pieces of the Sami genome are entirely unique. They are a frequntly studied population for geneticists.</li><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Saami_Family_1900.jpg/350px-Saami_Family_1900.jpg" width="300" height="250"><figcaption>Sami Family, Northern Norway, appx 1900 AD</figcaption></a>');    
	var text13 = new dataInfoText('The German tribes along the Roman frontier may have resisted Roman rule, but still saw great changes in their way of life. Trade across the frontier led to divergences in wealth within their previously egalitarian communities. At the same time, the constant battles with both from the Roman army and other Germanic tribes militarized society.');
	var text14 = new dataInfoText('Romans withdraw from the north Black Sea area, due to threats from Huns, Gemanics, Alans, and others');
	var text15 = new dataInfoText('<ul><li><b>In 292, </b>Roman Emperor Diocletian divides the empire into East (Greek speaking) & West (Latin speaking), as part of resolving internal wars and as administrating and protecting the massive landmass out of one city was hard.</li><li><b>In 330,</b> Constantine re-establishes the east-west division of Rome. He assumes reign of the Eastern Empire, changing the name of the eastern capitol city Byzantium to Constantinople. Eastern Rome becomes the center of political power.');
	var text16 = new dataInfoText('<ul><li>The Huns were nomads from the Central Asian Steppes, but their exact Origins of the Huns remain a mystery. It is often said that they were remnants of the Xiong Nu, a tribe decimated by the Chinese, but some linguistic and other evidence disagrees. It appears local outcasts may have joined the Huns on their journeys, so they may have been composed of many races.</li><li>It is believed the Huns settled northwest of the Caspian Sea sometime in the <b>3rd Centrury.</b></li>In <b>370 AD</b> the Huns destroyed the neghboring Alans.</li><li>They continued westward and destroyed the Ostrogothic kingdom of Eramanarich.</li><li>Another Hun force crossed the Caucasus and ravaged Armenia, penetrating as far as Syria.</li><li>Widespread panic overtook Europe.</li></ul>');
	var text17 = new dataInfoText("<ul><li>Rua became king of the Huns around <b>430 AD.</b> He planned a massive invasion of Eastern Rome before he died when he was suddenly struck by lightning.</li><li>Rua's nephews, Attila and Bleda took the throne of the Huns in dual kingship. Attila forced Eastern Rome to sign the treaty of Margus, in which the Romans were to pay 700 pounds of gold in tribute each year.</li><li>When Rome failed to make their treaty payments, Attila's and his men poured into the Eastern Roman Empire. Cities including Margus, Singidunum (Belgrade), and Viminacium were destroyed.</li><li><b>In 443</b> Attila penetrated southwest and sacked important cities such as Sardica, Philippopolis, and Arcadiopolis before reaching Constantinople and defeated the Imperial army in the outskirts of the city. The walled city of Constantinople was well defended, so Attila continued his path of destruction to Chersonesus, where the remaining Roman military was nearly destroyed.</li><li>The Tribute was settled. The Romans were to immediately pay 6000 pounds of gold, plus a yearly tribute of 2100 pounds of gold, and all prisoners were to be released. The Peace of Anatolius (the mediator of the treaty negotiation) was signed in autumn <b>443</b> and Attila and his Huns returned north of the Danube, victorious and with an enormous amount of plunder.</li><li><b>In 445,</b> King Bleda died, giving Attila the uncontested throne.</li><li><b>In 447</b> Attila again attacked Eastern Rome, taking the Balkans.</li><li>He this entered Thrance and destroyed at least 70 cities and town, Marcianople being the largest.</li><li>To end hostilities, the Second Peace of Anatolius was signed, giving Attila a land section south of the Danube. The Emperor Theodosius failed at an attempt to have Attila assassinated before agreeing to the 3rd Peace of Anatolius.</li><li>Huna sack Burgundians on the Rhine, killing King Gundahari (the historical antecedent for Gunther/Gunnar of the Nibelungenlied / Volsunga saga)</li>.</ul>");
	var text18 = new dataInfoText("<ul><li><b>In 450</b>, Attila decided he would bring Western Rome, with who the Huns previously had friendly relations, into submission. Attila's army smashed through Germany, causing widespread destruction. Atilla's former friend Aetius was assigned by the Emperor to deal with the Huns. Aetius formed an alliance with his greatest enemy, the Visigothic(Germanic) King Theodoric in hopes their combined strength could finally defeat Attila.</li><li>The armies met on the Catalaunian plains with Attila's battle line contained his own Hunnic warriors in the center, with Ostrogoths and Germans at the flanks. On the other side of the Field was Aetius's army, with Romans at his left flank, Alans in the center, and Theodoric's Visigoths on the right. They fought through the day and then retreated to their camps, but the next day the Visigoths discovered that their king, Theodoric, had been killed. They surrounded Attila's camp and might have destroyed Atilla, but Aetius convinced them to allow Attila to retreat.</li><li>Eastern Rome has stopped paying their tributes again, and it was thought Attila would again head to the heart of Eastern Rome. The Huns instead crossed the Alps, and suddenly appeared in Northern Italy. The Romans were caught off guard as Attila stormed the walls of Aquileia, Vicetia, Verona, Brixia, Bergomum, and Milan. Yet soon, possibly because of an epidemic, the Huns left Italy.</li><li>Back at the Hungarian Plains, Attila died of somewhat mysterious causes. His eldest son Ellak was to succeed him, but was not widely seen as a strong leader and Attila's other sons fought him for the throne. Seeing the instability, subjects throughout Attila's kingdom started large rebellions. By 469, all of Attila's sons were killed by internal or external battles and the few remaining Huns had retreated to Scythia where they would blend with local populations.</li></ul>");
	var text19 = new dataInfoText("Tacitus writes the Germania, the earliest account of the culture of the Germanic peoples. As his writing was based on second hand tles of travelers it is to be taken with a grain of salt, but does provide one of the few written records of the time.</br>");
	var text20 = new dataInfoText("<ul><li>The Visgoths, a Germanic peoples driven West by the Alans and then the Huns, push into Adrianople and defeat the Roman military in <b>378</b>.</li><li>In <b>401</b> they invade Italy and attempt to defeat Rome, but are driven back.</li><li>In <b>405</b> they invade Hispania and take its' governamce from the Vandals, another Germanic tribe who invaded earlier.</li></ul>");
	var text21 = new dataInfoText(dataInfo[20].text);
	var text22 = new dataInfoText(dataInfo[20].text);
	var text23 = new dataInfoText("<ul><li>The Vandals are a Germanic tribe that migrated west and took refuge inside of Rome after the Huns attacked.</li><li>In <b>405</b> the Vandals defeat the Roman Army in Hispania and briefly take control, before being driven out by the Visgoths.</li><li>By <b>429</b>, the Vandals have taken control of North Africa from Rome (below what's shown on this map).</li><li>In <b>455</b> they begin sailing North to invade Italian Islands and eventually make a southern attack on Rome.</li></ul>");
	var text24 = new dataInfoText(dataInfo[23].text);
	var text25 = new dataInfoText(dataInfo[23].text);
	var text26 = new dataInfoText("Romans withdraw troops from Britannia, ending their reign of the British Isles. Germanic tribes (Angles, Saxons & Jutes) from Jutland (modern Denmark) & modern Netherlands begin to invade & conquer SE Briton from the sea, and become the ruling class of the islands.</br>");
	var text27 = new dataInfoText("Romans abandon Gaul (modern France) to reinforce Italy which is under seige by the Germanic invaders, forever losing control of this province. Franks take over rule of Gaul, laying foundation for modern France.</br>");
	var text28 = new dataInfoText("The Germanic tribe of the Ostrogoths were driven westward by the Huns, and forced into the Roman provinces of Pannonia & Dalmatia (modern Slovenia, Croatia, Bosnia and Montenegro).</br>");
	var text29 = new dataInfoText("The official end of the Western Roman Empire takes place as the Roman general Orestes persuades Germanic people in and around Italy to join his side to usurp the emperor’s throne, for promise of larger tracts of land, causing Italy to come under Germanic rule.</br>King Theodoric the Great, later a prominent hero in Germanic tales, takes the throne in 493 and rules Rome until his death.</br><br>The Pope continues to hold power in the city of Rome as well.</br><br>The Roman Empire lives on as the Eastern Roman Empire (aka Byzantine), which was able to avoid the same fate by having greater financial resources to pay off Germanic tribal chieftains, while fortifying Constantinople with massive walls, making it impenetrable.</br>");
	var text30 = new dataInfoText("Eastern Emperor Zenos pays the (Germanic tribe) Ostrogoths to invade & conquer Italy, with hopes of establishing it as client state and re-establishing the former glory of the Roman Empire. The Ostrogoths successfully conquer Italy, but take control themselves instead of returning rule to Constantinople.</br>");
	var text31 = new dataInfoText("Jutland, or Denmark, becomes more of a seperate nation from surrounding Germanic areas around 500 AD. </br>Many from Sweden migrate to the area to escape resource shortages and with the Jutes, come to form the Danes, while tribes like the Angles & Saxons congregate south of Denmark's border.</br>");
	var text32 = new dataInfoText("The Franks defeat the Visigoths and gain control over most of Gaul. The Franks also begin expanding east of the Rhine as well, at the expense of other Germanic tribes.</br>");
	var text33 = new dataInfoText("The Goth War raged between Ostrogoths (Germanic rulers of Italy) & Byzantine Rome from <b>535-553</b>.</br>Byzantine prevailed by 553, but the war was terribly devastating to both sides. Byzantine was only able to maintain control over the city of Rome & Ravenna, along with the southern extremities of Italy. Italy fell into complete shambles as people fled the fighting in big cities and migrated to the countryside.</br>Remaining Ostrogoths migrated back north, assimilating into the Germanic tribes in modern Austria or simply assimilated into the Italian populace. The name Ostrogoth disappeared.</br>For Byzantine, the high cost of victory helped to end hopes of recapturing the height of the Roman Empire</br>");
	var text34 = new dataInfoText("The Bubonic Plague of Justinian affects much of Europe, but Byzantine in particular. </br><b>Up to about half of the European population may have died</b>, further propelling Europe toward the Dark Ages.</br></br>Byzantine, with its legendary emperor Justinian, may have retaken more of Rome during the Goth War based on early successes, but the plague diminished troop numbers greatly, allowing new Germanic tribes to reconquer the area.</br>The plague also led to more peasants abandoning hard-hit cities for the county-side, and Byzantine losses to the East to the Muslim Caliphate.</br>");
	var text35 = new dataInfoText("Avars, a Central Asian Turkic people, are driven west into Europe by Persians & other, more powerful Turkic empires. They are paid off by the Byzantines to settle the area north of the Danube River, driving Germanics (and some Slavs) out of the area.</br>");
	var text36 = new dataInfoText("Lombards, a Germanic tribe, take over Northern Italy, where Byzantine rule was nearly non-existent after the Goth War and the Justinian Bubonic Plague.</br>");
	var text37 = new dataInfoText("Visigoths conquer Suevi Kingdom (another Germanic people who migrated to NW Hispania).</br>");
	var text38 = new dataInfoText("Visigoths in Iberia convert to Christianity, consolidating their power base by gaining support of the church, and support of the existing populace that still held on tightly to the Roman ways.</br>");
	var text38 = new dataInfoText("Lombards in Italy convert to Christianity, consolidating their power base by gaining support of the church, & the support of the populace in Italy, which largely belongs to the Catholic Church.</br>");
	var text39 = new dataInfoText("Germanic tribes living around the North Sea begin to add Norse-like runes to their alphabet to deal with sound changes in their dialects, creating the Anglo-Frisian Futhork.</br>");
	var text40 = new dataInfoText('Lives of the historical antecedents of Beowulf, Hrothgar and Hrolf Kraki are dated to this time. </br>See a summary of Beowulf, the earliest remaining Anglo-Saxon Poem: <embed width="100%" height="300px" src="https://www.youtube.com/v/8SiarUS3ddA" type="application/x-shockwave-flash" allowfullscreen="true"></br>');
	var text41 = new dataInfoText("Runic Norse begins to give way to Old Norse, better blending variations among Scandinavia and taking some words from nearby Germanic tribes.</br>");
	var text42 = new dataInfoText("Due to increasing battles between Danes & other Germanic tribes, the Danevirke is built. This system of Danish fortifications in separates Denmark from other Germanic areas and helps unify their culture further with Scandinavia. This important linear defensive earthwork was constructed across the neck of the Cimbrian peninsula during Denmark's Viking Age.</br>");
	var text43 = new dataInfoText('Charlemagne begins Christian wars against the heathens by destroying the Irminsul. The Irminsul was a chief seat of Germanic religions common to a wide range of European and Scandinavian tribes.</br></br>Irmin was an aspect of the God Wodin (Odin) to the Norse and the God Tyr to other Germanic peoples.</br></br>It was believed that Yggdrasil was the yew or ash tree that grew on The Irminsul from which Odin sacrificed himself by hanging for 9 days and nights without sustenance to conceive the runes, and was the great tree which connected the nine worlds of the Norse religion.</br></br>In addition to the insult and losing a holy gathering place, to the Scandinavians, losing the Irminsul meant losing the connection to the world of the gods.</br><img src="http://www.european-trees.com/400/deloraine_irminsul.jpg" width="20%"><figcaption>Pillar of the world</figcaption></br>');
	var text44 = new dataInfoText('In <b>793 AD</b> what is commonly known as the Viking Age begins as Norse sea-raiders sack the Anglo-Celtic monastery at Lindisfarne. <embed width="100%"  src="https://www.youtube.com/v/bwKNdt8sJ38" type="application/x-shockwave-flash" allowfullscreen="true"></br>Within the next five years, Viking raiders would strike at Lindisfarne and Jarrow in Northumbria, at Wales, Ireland, the Isle of Man, the Isle of Iona in Scotland, and even the islands off Aquitaine in France.</br>');
	var text45 = new dataInfoText('In <b>793 AD</b> what is commonly known as the Viking Age begins as Norse sea-raiders sack the Anglo-Celtic monastery at Lindisfarne. <embed width="100%"  src="https://www.youtube.com/v/bwKNdt8sJ38" type="application/x-shockwave-flash" allowfullscreen="true"></br>Within the next five years, Viking raiders would strike at Lindisfarne and Jarrow in Northumbria, at Wales, Ireland, the Isle of Man, the Isle of Iona in Scotland, and even the islands off Aquitaine in France.</br>');
	var text46 = new dataInfoText("The Elder Futhark, or Rune Alphabet, is replaced by the Younger or Sixteen-Rune Futhark as religius Runic Symbols become less attached to language.</br>");
	var text47 = new dataInfoText("<ul><li>King Gudfred (ruled from 804 or earlier until 810) was a Danish king who fought back against Charlemagne.</li><li>In 804, a Frankish(Germanic) army penetrated as far as the Ejder, Denmark's boundary at the time. Fearing an invasion, Godfred began work on the enormous danevirke structure that separated Jutland from the northern extent of the Frankish Empire. The Frankish invasion never happened. </li><li>It is believed that Gudfred's brother Halfdan became earl of a wealthy market towns south of the river Ejder, occupying what became known as North Frisia. Refusing to pay tax to Gudfred, Halfdan swore his allegiance to Charlemagne in 807 to get his protection.</li><li>In 808, King Gudfred forced the Obodrites(tribe temporarily ruling the area South of Jutland) to acknowledge him as their overlord. The citizens of Reric were allied with Charlemagne, who used the port as part of a strategic trade route. King Gudfred attacked Reric burnt it down, killed Chief Drożko and ordered the merchants to resettle at Hedeby, which was being integrated into the Danevirke defensive line.</li><li>In 809, King Godfred and emissaries of Charlemagne failed to negotiate peace.</li><li>In 810, Gudfrid led 200 ships to plunder the Frisian coast, and forced the merchants and peasant to pay 100 pounds of silver and claimed Northern Frisia as Danish territory. To protect the northern coast of the Frankish Empire, Charlemagne began paying Viking chieftains to protect sections of the coast.</li><li>That same summer King Godfred was killed by one either of his housecarls or an assassin.</br>");
	var text48 = new dataInfoText('Charlemagne was the king of the Germanic Franks since 768 and became the King of Italy from 774, and from 800 he was crowned the first emperor in western Europe since the collapse of the Western Roman Empire (3 centuries ago) by Pope Leo. He united a large area of former Western Rome, but he hoped to unite all Germanic peoples in a Christian kingdom.</br></br> Charlemagne believed his Christian state should protect the papacy and started his wars by removing the Lombards from power in northern Italy. He then campaigned against Muslin Spain and then pagan Germanic tribes to his east, Christianizing them upon penalty of death. He was infamous for the Massacre of Verden, where 4,500 captive Saxons who had rebelled against becoming Christians were killed. </br>See more: <iframe width="480" height="320" src="http://player.history.com/pservice/embed-player/?siteId=hist&tPid=21111083" frameborder="0" scrolling="no" allowfullscreen></iframe> </br>');
	var text49 = new dataInfoText("Hemming I was a king in Denmark from 810 until his death in 812. He made a treaty with Charlemagne and hostilities briefly ended.  After his death or being taken hostage by Charlemagne's armies, their was a dispute between 2 nephews who wanted to succeed him. They raised troops and fought a battle in which over 10,000 were said to have died including both warring successors. The remaining leaders from both armies agreed to make a possible relative, Harald Klak the next king.</br>");
	var text50 = new dataInfoText("Harold Klak was the next king of Denmark in 812. Soon after he was made king his brother was taken hostage by Charlemagne's armies.  Klak sent emissaries and negotiated a peace and release of his brother.</br></br>The king went to a conquered territory in Briton to put down a rebellion, but on his return was disposed from power by other Danish royals, the sons of Godofrid. </br>King Klak begged protection from Charlemagne and Louis the Pious. This protection was granted and Klak took troops to fight the sons of Godofrid. Over many years Klak's troops killed most the sons of Godofrid, except King Horik who was forced to share rule with Klak.</br></br>In 826 Louis the Pious  gave Klak a fiefdom in his Frankish kingdom and Klak converted to Christianity.</br></br>In 827 Klak was forced by Horik's armies out of Denmark, where he'd never return.</br></br>King Horik refused to convert to Christianity as it was his enemies' religion, and fought wars and raided Frankish territories and fought Klak for his fiefdom on the border from 829 - 852 when until Klak died. Viking raids came from other parts of Denmark outside of Horik's permission during his rule; at times Horik has successful raiders who constituted a treat to his power executed. In 854 Horik was killed by an exiled nephew who had joined Viking raiders whom Horik had punished.</br>");
	var text51 = new dataInfoText("The Vikings continue raids throughout England, but Danish Raiders ally with the Cornish (Anglo Celts) in their quest to maintain independence from King Ecgbehrt of Wessex, and the Saxons. The only records show they lost to King Ecgbehrt, most likely at Hingston Down. The reality may have been more complex as the Cornish state developed a border at the Eastern Bank of the Tamar, kept their own King, and the language didn't fade out until the 1800's, as opposed to other parts of the British Isles where languages only lasted a few generations after defeat.</br>");
	var text52 = new dataInfoText("<ul></li>King Halfdan the Black of Norway reigned over Vestfold.</li><li>He is famous for his roles in the Icelandic Sagas. According to legend,<ul><li>When he was 18 or 19 years old, Halfdan became king of Agder. He divided the kingdom with his brother Olaf and after a battle persuaded King Gandalf of Vingulmark to cede half his kingdom.</li><li>Halfdan next is said to have subdued an area called Raumarike by defeating and killed the previous ruler, Sigtryg Eysteinsson, in battle (based on the Scandinavian law meant to assure the brave commoner couldn't be ruled by the weak). </li><li>He then defeated Sigtryg's angry brother and successor, in a series of battles. This established Halfdan's claim not only to Raumarike, but also to half of Hedmark, the core of Sigtryg and Eystein's kingdom.</li><li> Halfdan's first wife was Ragnhild, daughter of King Harald Gulskeg (Goldbeard) of Sogn. Halfdan and Ragnhild had a son named Harald after his grandfather, and they sent him to be raised at his grandfather, Harald Gulskeg's court. The elderly man named his grandson as his successor, shortly before his death. Halfdan's wife Ragnhild died shortly after, and the young Harald fell sick and died the next spring. Halfdon writes a poem of morning before traveling to Sogn to the title of king without dispute.</li><li>On his journey  In Vingulmark, the sons of Gandalf of Vingulmark, Hysing, Helsing, and Hake, attempted to ambush Halfdan at night, but he escaped into the forest. After raising an army, he returned to defeat the brothers, killing Hysing and Helsing. Hake fled the country, and Halfdan became king of all of Vingulmark.</li><li>Halfdan then hears of Ragnhild (same first name as his first wife) Sigurdsdotter, the daughter of Sigurd Hjort, king of Ringerike. She was kidnapped from her home by Hake, a berserker who killed her father. Halfdan saves her from Hake and marries her. They have a son who, like Halfdan's first son, was named Harald.</li></ul><li>Historical record agrees, their son, Harald Fairhair, becomes the first King of a unified Norway.</li></ul>");
	var text53 = new dataInfoText("The Vikings begin raids on Moorish Spain in 844.</br></br>In 860, a new fleet attacked Galicia (northwestern Spain), the Portuguese shores and Sevilla; it crossed the Mediterranean and wiped out the Balearic Islands. They attacked Pamplona after crossing the Ebru river and captured the king of Navarra, Garcia Iniguez, who paid a ransom for his release. Another great campaign took place in 968. The jarl Gundraed attacked Galicia with 100 ships and 8,000 warriors. They roamed freely for years and even occupied Santiago de Compostella, before being defeated by the troops of the count Gonzalo Sanchez. They moved southward, but the Moorish in Spain were at their peak and the Vikings were forced to retreat from armies of Al-Hakam.</br>");
	var text54 = new dataInfoText('<ul><li>The Rus were slavic tribes that were ruled by primaily Swedish Scandinavians.</li><li>The Scandinavians settled in modern NE Russia as early as 750 AD and became known as the Varangians.</li><li>According to the East Slav Primary Chronicles, aroud 800 AD,<ul><li><i>"The four tribes who had been forced to pay tribute to the Varangians — Chuds, Slavs, Merians, and Krivichs— drove the Varangians back beyond the sea, refused to pay them further tribute, and set out to govern themselves. But there was no law among them, and tribe rose against tribe. Discord thus ensued among them, and they began to war one against the other. They said to themselves, "Let us seek a prince who may rule over us, and judge us according to custom". Thus they went overseas to the Varangians, to the Rus. These particular Varangians were known as Rus, just as some are called Swedes, and others Normans and Angles, and still others Jutes, for they were thus named. The Chuds, the Slavs, the Krivichs and the Veps then said to the Rus, "Our land is great and rich, but there is no order in it. Come reign as princes, rule over us". Three brothers, with their kinfolk, were selected. They brought with them all the Rus and migrated."</i></li></ul></li><li>In 882, they conquered Kiev and created the state of Kievan Rus.</li><li>The Varangians roamed the rivers north of the black sea,  pilliaging, trading, and acting as hired mercenaries. They took control of critical trade routes connecting Constantinople, the Arab Caliphates, and midieval Europe, on which most goods as well as coinage traveled at the time.</li><li>They started several Rus-Byzantine wars in attemps at taking the riches of Constantinople, but by 900AD many individial warriors had been bought as Byzantine mercenaries; some very well paid in the elite Varagian Guard. During this period conversion to Christianity began amoung the Varangians, leading to Vladimir the Great being Baptized and inviting the people of Kiev to join him in 988. The influence of the Varangians ended as they were assimilated with Eastern Slavs.</br>');
	var text55 = new dataInfoText(dataInfo[45].text);
	var text56 = new dataInfoText('Anglo-Saxon Europe was pagan until a process starting with missionaries arriving at 597 AD. Missionaries converted those on the top of the social pyramid and populations would usually follow. Some kept aspects of both religions for some time, like the famous case  of king Raedwald of East Anglia, who had a Christian altar erected within his pagan temple. The last pagan kings fought battles over religion and general shifts in control. Penda a late pagan king in England. He defeated had many sucessful military campigns against the Christians before being defeated. A less known King was the ethnically Jutish King Arwald of the Isle of Wight. Caedwella, a Wessex King, attacked in hopes of destroying all the inhabitants and replacing them with his followers (plus giving a quarter of the island to the Church) in 686. From this point all of the Germainic peoples in England were Christianized.</br>');
	var text57 = new dataInfoText('The Frisians were a pagan group that lived in the coastal lands of modern day Netherlands. In the late 600s they were pushed inwards by changing sea levels and their society grew as many Anglo-Saxons became "new Frisians". They grew to control an expanded territory that included important trading routes. By the 700s, the Pagan Frisians were in conflict with the Franks. The last pagan king Bobo was defeated by the Franks. The population rebelled against Christian rule twice in the years after, before Boboraised and army and met the Frankish armies there to squash the rebellion.  He was defeated and dies in the battle, marking an end to Frisian paganism and independence.</br>');
	var text58 = new dataInfoText('The Goths were one of the first Germanic peoples to become Christianized. Ulfias writes his translation of the New Testament, the only surviving work of written Gothic, around 325 AD. The Goths continue to fight Roman rule however, defeating the Romans at Adrianople in 378 AD.</br>'); 
	var text59 = new dataInfoText("In 313, Christianity rose from a nearly unknown religion to a major force, as the emperor Constantine converted. His association with Christianity began with a fateful battle for control of the Western Roman Empire. Constantine faced Western Roman Emperor Maxentius at the Tiber River's Mulvian Bridge in A.D. 312. Fourth-century historian and bishop Eusebius of Caesarea reported that before the great battle Constantine saw a flaming cross in the sky bearing the words 'in this sign thou shalt conquer.' Constantine did indeed conquer, routing and killing his enemy. Christianity was made legal so followers could openly worship. Soon Constantine began outlawing competing religions and looting and tearing down pagan temples. By 391 only Christianity was legal.</br>");
	var text60 = new dataInfoText('The pagan Franks began to convert to Christianity starting on Christmas Day, 498. Clovis I had felt he was losing a local tribal battle when he prayed to the Christian god and promised to convert if he won. He prevailed, and converted the next day. Although the ruling class of the Franks converted quickly after, it took 2 centuries and executions of public figures pagens rallied around before most of the populace converted.</br>');
	var text61 = new dataInfoText('The Norse discover Iceland and begin to settle there by 874, in search of new farmland. The Icelandic Sagas, tales that arguably teach us the most about Viking culture, were verbally passed down and later recorded. Watch a documentary about the Icelandic Sagas:  <embed width="100%"  src="https://www.youtube.com/v/taVsvYWp1UU" type="application/x-shockwave-flash" allowfullscreen="true"></br> ');
	var text62 = new dataInfoText("Vikings begin to settle in England. Farmland that isn't overworked has been scarce in Scandinavia and the ground has never been as fertile as in England. The goals of Viking raids grow to include farmland as much as riches and slaves.</br>");
	var text63 = new dataInfoText("Egill Skallagrimsson was a Viking poet. He was born in Iceland and travelled to Norway and England before returning home older and wiser. His story helps us understand daily life for the early settlers of Iceland, and about the Viking culture. His saga is a long volume written in Old Norse, so it's not possible for us to understand all the meaning in his popular writings. As a sample, here are some particularly potent lines of a translation from after Egill's son dies at sea:</br></br><i>My mouth strains</br>To move the tongue,</br>To weigh and wing</br>The choice word:</br>Not easy to breathe</br>Odin's inspiration</br>In my heart's hinterland,</br>Little hope there.</br>My sorrow the source</br>Of the sluggard stream</br>Mind-meandering,</br>This heavy word-mead,</br>Poet's power</br>Gold-praised, that</br>Odin from ogres tore</br>In ancient time. [ . . .]</br></br>Could my sword stroke take</br>Vengeance on the sea-surge,</br>Bitter ale brewer</br>None can bend or break,</br>Could my hand kill</br>The crushing wave,</br>With god and goddess</br>I should grapple.</br></br>But I've no strength to subdue</br>The slayer of my son</br>Nor the boldness to beat</br>Down my boy's killer:</br>Obvious to all,</br>An old man, unaided,</br>Helpless, unhappy,</br>Can hold out no hope.</br></br>The rough storm has robbed me</br>Of my best riches,</br>It's cruel to recall</br>The loss of that kinsman,</br>The safeguard, the shield</br>Of the house has sailed</br>Out in death's darkness</br>To a dearer place. [ . . .]</br></br>Forgive his fate </br>And forget I will not,</br>Odin not Egil </br>Enjoys him for ever,</br>He has stolen my son, </br>The sapling growth</br>From my wife's womb, </br>The warrior-seed.</br></br>The spear-god shared</br>Spoil with me,</br>My oath was to Odin,</br>He gave me aid:</br>Now that maker of mystic</br>Runes only mocks me,</br>Voids all my victories,</br>That breaker of vows.</br></br>I'll make offerings to Odin,</br>Though not in eagerness, </br>I'll make my soul's sacrifice,</br>Not suffer silently: </br>Though this friend has failed me,</br>Fellow of gods, </br>To his credit he comforts me</br>With compensation.</br></br>That wolf-killer, that warrior</br>God, well seasoned in war</br>Bestowed a bounty</br>Not to be bettered:</br>To my art he added</br>One other gift,</br>A heart that held</br>Not craft only: hatred!</br></br>The end is all.</br>Even now </br>High on the headland</br> Hel stands and waits, </br>Life fades, I must fall </br>And face my own end </br>Not in misery and morning, </br>But with a man's heart.</i></br>");
	var text64 = new dataInfoText("The Vikings had been raiding the Seine Valley since around 850. Although the Viking Rollo had defeated Paris, he wanted farmland for settlement more then the treasures he could carry back. Rollo agreed to a treaty with King Charles where in exchange for being allowed to settle the lands he conquered, he would pledge allegiance to the king, and become Christian (and take a Christian name, Richard). According to legend, when required to kiss the foot of King Charles, as a condition of the treaty, he refused to perform so great a humiliation, and when Charles extended his foot to Rollo, Rollo ordered one of his warriors to do so in his place. His warrior gruffly lifted Charles' foot up to his mouth, causing the king to fall to the ground. </br></br>Rollo was granted the fiefdom of Normandy, and the Scandinavians and local Anglo-Saxons became the Normans.</br>After Charles was deposed by Robert I in 922, Rollo considered his oath at an end. He was given Le Mans and Bayeux in hopes of appeasment before he seized Bessin and attacked Picardy. After gaining land to give all his high class men, the Normans began to intermarry with the French and slowly grow closer to local culture.</br>");
	var text65 = new dataInfoText("Danish settlements in England had expanded and became known as the Danelaw. They eventually fell under rule of King Guthrum. In <b>874 AD</b> they waged war against Wessex, ruled by King Alfred. In 875, his troops devided, some returing to Northumbria under Danish King Halfdan's rule. Guthrum still won battles and conquered territory in many battles over the next year, including a famous battle where he made a surprise attack on the night-time of a Christian feast day in 878. </br></br>However later in <b>878</b>, Guthum's warriors were defeated. The <i>Anglo-Saxon Chronicles</i> record:</br></br><i>Then the raiding army granted him (Alfred) hostages and great oaths that they would leave his kingdom and also promised him that their king (Guthrum) would receive baptism; and they fulfilled it. And three weeks later the king Guthrum came to him, one of thirty of the most honourable men who were in the raiding army, at Aller - and that is near Athelney - and the king received him at baptism; and his chrism loosing was at Wedmore.</i></br></br>Guthrum's conversion to Christianity legitimized his rule of his conquered territories and he was given most of them in the Treaty of Wedmore. Hostilities ended with him ruling these lands where more and more Vikings settled among the Anglo-Saxons.</br>");
	var text66 = new dataInfoText("According to various sagas,  Harald succeeded his father Halfdan the Black Gudrödarson to rule several kingdoms in Vestfold, which had come into his father's hands through conquest and inheritance. Harold had proposed marriage to a woman named Gyda, who was said to have rejected him untill he was king of all of Norway. Harald took a vow not to cut or comb his hair until he was the sole king of Norway; he became known as Harald Tanglehair. He defeated other Kings in battled throughout Norway and parts of modern-day Sweden.  Iceland's settlements quickly grew as exiled royalty fled there. 10 years later when he was king of all of Norway, he cut and combed his hair and became known as Harald Fairhair. </br></br>He ruled Norway until his death in 933. He had many sons during his lifetime.  After his death, the country was split again under his sons who battled to succeed him. ");
	var text67 = new dataInfoText("<ul><li>Ibn-Fadlan, an Arab traveller, writes of his journeys amoung the Viking Rus. We hear accounts of a ship burial for a king, where slaves as well as possessions are sacrificed. His writings combines with many Vikings sagas to help us understand Norse Pagan beliefs on death: </li><li>It was believed that a Viking that did not die in battle would go to <li><b>Helgafjell</b>, the holy mountain, where holy people would go and take possessions buried with them and continue a life much life that of the living, or</li><b>Hel</b>, a dreary underground realm ruled by the giantess Hel. This realm may have still let one take their possessions and included much more feasting then the Christian Hell, but was still not a desired destination. There are tales of warriors who were caught on their deathbed due to disease or a festered wound who would stab themselves through with a spear so Hel would be confused by their wounds and let them go on to </li><li><b>Valhalla</b>, the most known Viking afterlife. <b>Valkyries</b>, beautiful female warrior beings, would take fallen warriors to Valhalla, where they would drink and feast and battle and stay prepared for the final battle, <b>Ragnarök</b>. That would be the end of days, where the gods would wage a final war with each other and the earth would be drowned in a pool before the few gods that survive would save the earth and put one man and woman back on it, to begin the cycle of life anew.</li><li>One half of Viking warriors who died in battle were instead taken by the Goddess <b>Freya</b>, who would take them to <b>Fólkvangr</b>, where they would also drink and battle and prepare for Ragnarök.</li></li></ul></br>");
	var text68 = new dataInfoText("In 930, a <i>thing</i> (an outdoor assembly held at <i>Lögbergs</i>, or Law Rocks throughout Scandinavia, where all free men attended and jointly decided conflicts, punishment for crime, and laws) is held in Iceland where the <i>Althingi</i>, or governing assembly, is formed in the recently settled land. </br></br>The Althingi still governs Iceland, and is the oldest parliamentary institution in the world.</br>");
	var text69 = new dataInfoText("Between 960 and 1020, the events of Njáls saga take place. </br></br>The saga deals with the process of blood feuds in the Icelandic Commonwealth, showing how the requirements of honor could lead to minor slights spiralling into destructive and prolonged bloodshed.</br></br>Insults where a character's manhood is called into question are especially prominent and may reflect an author seeking to teach a lesson on the effects of an overly restrictive ideal of masculinity. Njáll's lack of a beard is repeatedly referred to and used by his opponents to call his manhood into question, and the gift of a silk garment is considered an insult by Flosi and a hard-won settlement breaks down into was as a consequence.</br></br>Omens, prophetic dreams and supernatural foresight figure prominently in Njáls saga.  The course of events is shown in many ways to be driven by fate, even as Njál struggles in vain to alter its' course. This belief in fate is typical of Norse Paganism, but it still persists in this story that wasn't recorded until the 1300's.<a href='http://njalssaga.wordpress.com/' target=_blank>Click to read more:</br><img src='http://njalssaga.files.wordpress.com/2012/06/cropped-njc3a1ll-header.jpg'/></a></br></br>");
	var text70 = new dataInfoText('Gorm the Old Rules Denmark. He is often recognized as the first King of a unified souther Scandinavia and Denmark. His son left a record of his rule with the Jelling Stones.</br></br>Much of Gorm the Old we know from the <i>Jelling Stones</i> he left. These huge stones tell of his ancestry, marriage to Thyra and her crediting her with seeing to completing the Danevirke fortifications, and that he "won all of Denmark". <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Jelling_gr_kl_Stein.JPG/220px-Jelling_gr_kl_Stein.JPG" width="50%"/><figcaption>Jelling Stones</figcaption></br>' );
	var text71 = new dataInfoText("At the death of Harald Farihair, Eric Bloodaxe was left as his main successor, with his many brothers' left sub-kingdoms. There are a few years of war in which most Eric's brothers are killed, and he was reportedly despotic king.  After a few years Hakkon return from lands he ruled in England to Norway and gains support of the ruling classes by promising to do away with a tax on inheritance that was in place. Eric was deserted on all sides and fled to English isles, where he was eventually killed by an English earl in 954. Haakan the Good ruled Norway until his death in 961, and was the last king that maintained his pagan beliefs and actively participated in Vikings raids in his youth.");
	var text72 = new dataInfoText("Harold Bluetooth, son of King Gorm the Old, rules Denmark and parts of Norway and Sweden from <b>970-986 AD</b>.</br></br>King Harald was converted to Christianity, and starts the conversion of the Danes. It is contested as to if he was converted by force after losing a battle, or was converted by choice after putting a missionary through a trial by fire, which he survived without being burned. His son Sweyn I Forkbeard later lead a rebellion against his father and seized his throne. Harald Bluetooth died in exile in appx. 986.");
	var text73 = new dataInfoText('Iceland was Christianized in <b>1000 AD</b> in an event is known as the kristnitaka (literally, "the taking of Christianity").</br></br>When Olaf Tryggvason ascended the throne of Norway, the effort to Christianize Iceland intensified. King Olaf sent an Icelander named Stefnir Thorgilsson back to his homeland to convert his fellow countrymen. Stefnir violently destroyed sanctuaries and images of the heathen gods – this made him so unpopular that he was eventually declared an outlaw. After this failure, Olaf sent a priest named Thangbrand who was an experienced missionary, having proselytized both in Norway and the Faroe Islands. His mission in Iceland from 997–999 was only partly successful. He managed to convert several prominent Icelandic chieftains, but killed two or three men in the process. Thangbrand returned to Norway in 999 and reported his failure to King Olaf, who immediately adopted a more aggressive stance towards the Icelanders. He refused Icelandic seafarers access to Norwegian ports and took as hostages several Icelanders then dwelling in Norway. This cut off all trade between Iceland and its primary trading partner. Some of the hostages taken by King Olaf were the sons of prominent Icelandic chieftains, whom he threatened to kill unless the Icelanders accepted Christianity. </br></br>In Iceland the dispute of whether to become Christian threatened to become a civil war as religious battles broke out.  The law speaker Thorgeir Thorkelsson, was acceptable to both sides as mediator and he accepted responsibility for deciding whether Iceland should become Christian. He contemplated for a day and a night before deciding Iceland should become Christian, although laws based on Pagan traditions would remain and private Pagan worship would be permitted. He then threw his Pagan idols in a waterfall now known as <i>Goðafoss</i>, Waterfall of the Gods.</br></br>Civil war was thus averted and good relations with Norway resumed.</br>' );
	var text74 = new dataInfoText("Sweyn I Forkbeard, son of Harold Bluetooth, was king of of Denmark, England, and Norway in his time. In the 980's he revolted against his father and seized the throne. In 1000, with allegiance of the Trondejarl, Eric of Lade, he was ruler over most of Norway. After a long effort at conquest and shortly before his death, he became, in 1013, the first of the Danish Kings of England. </br></br>His father, Harald Bluetooth, had been one of the first Danish kings to convert to Christianity; Sweyn was a pagan Viking that raided Christian settlements and expelled Bishops from his territories, although he did build a few churches and generally became more tolerant later in his rule.</br></br>His raids in England were seen as retribution for the St. Brice's Day massacre of Danes in England, where his sister Gunhilde was killed.</br>");
	var text75 = new dataInfoText("Olaf Tryggvason was King of Norway from 995-1000. He was a Viking who converted to Christianity and built the first Churches in Norway and put pressure on Norway and settlements as far as Iceland to convert.</br></br>The story of his conversion from Heimskringla Saga is:</br>After Olaf had spent three years in Wendland, his wife Geira died. He felt so much sorrow from her death that he could no longer bear to stay in Wendland, and set out to plunder in 984. He raided from Friesland to the Hebrides. After four years he landed on one of the Scilly Isles. He heard of a seer who lived there. Desiring to test the seer, he sent one of his men to pose as Olaf. But the seer was not fooled. So Olaf went to see the hermit, now convinced he was a real fortune teller. And the seer told him:<ul><li><i>Thou wilt become a renowned king, and do celebrated deeds. Many men wilt thou bring to faith and baptism, and both to thy own and others' good; and that thou mayst have no doubt of the truth of this answer, listen to these tokens. When thou comest to thy ships many of thy people will conspire against thee, and then a battle will follow in which many of thy men will fall, and thou wilt be wounded almost to death, and carried upon a shield to thy ship; yet after seven days thou shalt be well of thy wounds, and immediately thou shalt let thyself be baptized.</i></li></ul></br>After the meeting Olaf was attacked by a group of mutineers, and what the seer had foretold happened. So Olaf let himself be baptised by St. Ælfheah of Canterbury near to Andover, Hampshire in 994.</br></br>This saga of conversion to Christianity as a fate foretold by a Pagan seer is  illustrates how pagans understood the changes they witnessed.</br></br>He desired to Christianize all of Scandinavia and purposes marriage to the Sigrid the Haughty, Queen of Sweden, but she refused to give up her pagan faith.  Olaf was angered and struck her. Sigrid then proceeded to create a coalition of his enemies to bring about his downfall. She allied Sweden with Denmark, marrying the widower Sweyn Forkbeard who had already been feuding with Olaf, and inflamed his anger against Olaf, leading to the Battle of Swold, where Olaf was defeated and killed.");
	var text76 = new dataInfoText("The St Brice's Day massacre was the killing of Danes in the Kingdom of England on St Brice's Day (November 13th) 1002 AD, ordered by King Æthelred the Unready.</br></br>Tired of Viking raids he had proclaimed:</br><i>For it is fully agreed that to all dwelling in this country it will be well known that, since a decree was sent out by me with the counsel of my leading men and magnates, to the effect that all the Danes who had sprung up in this island, sprouting like cockle amongst the wheat, were to be destroyed by a most just extermination, and thus this decree was to be put into effect even as far as death, those Danes who dwelt in the afore-mentioned town, striving to escape death, entered this sanctuary of Christ, having broken by force the doors and bolts, and resolved to make refuge and defence for themselves therein against the people of the town and the suburbs; but when all the people in pursuit strove, forced by necessity, to drive them out, and could not, they set fire to the planks and burnt, as it seems, this church with its ornaments and its books. Afterwards, with God's aid, it was renewed by me.</i></br>");
	var text77 = new dataInfoText("Harald Hardrada (literally hard/stern ruler) was King of Norway from 1046 to 1066.</br></br>When Harald was fifteen years old, in 1030, Harald fought in the Battle of Stiklestad together with his half-brother Olaf Haraldsson (later Saint Olaf). Olaf sought to reclaim the Norwegian throne, which he had lost to the Danish king Cnut the Great two years prior. Olaf and Harald were defeated and Harald was forced in exile to Kievan Rus, where he became commander in the Varangian Guard in Constantinople. In his absence the Norwegian throne had been restored from the Danes to Olaf's illegitimate son Magnus the Good. </br></br>In 1046, Harald joined forces with Magnus's rival in Denmark, Sweyn Estridsson, and started raiding the Danish coast. Magnus, unwilling to fight his uncle, agreed to share the kingship with Harald, since Harald in turn would share his wealth with him. Magnus died the next year and Harald thus became the sole ruler of Norway.</br></br>Harald crushed all local opposition, and reunified Norway.</br></br>Harold spent nearly every year until 1064 raiding the Danish coast and fighting his former ally, Sweyn, to try to become King of Denmark. The raids were successful but he never conquered Denmark. The former Earl of Northumbria, Tostig Godwinson, brother of the newly chosen English king Harold Godwinson, then pledged his allegiance to Harald and invited him to claim the English throne. Harald went along and entered Northern England in September 1066, raided the coast and defeated English regional forces in the Battle of Fulford near York, before he was later defeated and killed in an attack by Harold Godwinson's forces in the Battle of Stamford Bridge.</br></br>Modern historians have often considered Harald's death at Stamford Bridge as the end of the Viking Age.");
	var text78 = new dataInfoText("Cnut the Great was a king of Denmark, England, Norway, and parts of Sweden, referred to as the North Sea Empire. Cnut's father was Sweyn Forkbeard, King of Denmark.  Cnut was the second son, with his older brother Harold being the crown prince. As this meant he was not to inherit the throne he needed to secure his own fortunes.  As a Prince of Denmark, Cnut won the throne of England in 1015 with a Danish army of perhaps 10,000 in 200 longships.</br></br>His brother Harold died in 1018, and Cnut went on to take Denmark. Cnut was born a Christian and treated the church well under his reign and considered a wise ruler. </br</br> Cnut brought together the English and Danish kingdoms, and the people saw a golden age of dominance across Scandinavia, as well as within the British Isles.</br></br>In 1028 he claimed the throne of Norway from Olaf Haraldsson, after arriving with surperior forces.  Olaf Haraldsson later returned to Norway, with Swedes joined in his army. Cnut died in the battle that followed, the Battle of Stiklestad in 1030.</br>");
	var text79 = new dataInfoText("Leif Erikson was a Norse explorer regarded as the first European to land in North America (excluding Greenland), nearly 500 years before Christopher Columbus. According to the Icelandic Sagas, he established a Norse settlement at Vinland, which historians believe to be the northern tip of Newfoundland in modern-day Canada.</br></br>Leif was born in Iceland around the 970s, the son of Erik the Red. He converted to Christianity to be given a mission of introducing the religion to Greenland in 999 AD. </br></br> Leif was also off course, to a land that he did not expect to see, where he found 'self-sown wheat fields and grapevines'. Leif's successful expedition in Vinland encouraged other Norsemen to also make the journey. The first apparent contact between the Norse and the indigenous people, so-called skrælingjar, was made by his brother Thorvald, and resulted in hostilities. In the end there were no permanent Norse settlements in Vinland, although sporadic voyages for forages, timber and trade possibly lasted for centuries.</br></br>The casual tone of references to these journeys in the sagas may suggest that their discovery was not seen as particularly significant, or that it was assumed to be a land already known. Knowledge of the Vinland journeys might have spread around medieval Europe, as writers such as Adam of Bremen made mention of remote lands to the west. It has been suggested that the knowledge of Vinland might have been maintained in European seaports in the 15th century, and that Christopher Columbus, who claimed in a letter to have visited Iceland in 1477, could have heard stories of it.</br>");
	var text80 = new dataInfoText("Erik the Red was a Viking outlaw who sailed the seas and started the first Norse settlements in Greenland. Born in Norway, 'the Red' referred to the color of his hair and beard. </br></br>Erik the Red's father was banished from Norway for the crime of manslaughter. He sailed West from Norway with his family and settled in northwestern Iceland. The Icelanders later sentenced Erik to exile for three years due to 'some killings' he committed around the year 982. He had killed some of the neighbours in retribution for killing some of his thralls(roughly slaves) after they started a landslide that affected their farm.</br></br>Although history often credits Erik the Red with the discovery of Greenland, the sagas indicate Gunnbjorn Ulfsson had been blown off course and discovered Greenland nearly a century before.  However before Erik the Red, all attempts at settling the much frozen land had been unsuccessful.</br></br>During Erik's exile he sailed to Greenland. He spent the 3 years until he could return to Iceland exploring the land, and discovered ice-free areas. Before Erik's time the land had been known as Iceland, but he brought back tales of adventures to Greenland, believing people would be attracted to go there if it had a favorable name. His salesmanship proved successful and many colonists returned to Greenland with him.</br></br>As an outlaw, Erik was able to refuse conversion to Christianity with Iceland, and the Greenland settlers stayed Pagan. The most pressure Erik faced to convert may have come from his wife who was baptised and refused 'relations of a wife' with Erik unless he converted, although she later gave up.</br></br>Erik the Red had a son, the famous Lief Ericson who discovered North America. Eric died of age the winter after his sons' departure.</br>");
	var text81 = new dataInfoText("For Scandinavia, the period succeeding the fall of the Roman Empire is known as the Germanic Iron Age.</br>During this time farmland that hadn't been overused was growing scarce. The migration of Swedes to Jutland increased.</br></br>The Scandinavians were known as traders to their neighbours. During the fall of the Roman empire, gold was traded north for exchange from goods from Scandinavia. Gold began to be used for intricate carving and currency, but after the fall of the Roman empire was complete, it became scarce.</br>");
	var text82 = new dataInfoText("The Viking age ended nearly simultaneously with when they were converted to Christianity.</br></br>Agreeing to convert meant that the lands the Viking conquered would be legitimized as theirs by local inhabitants. The Vikings were able to settle freely, trade with local communities, and otherwise integrate into the larger European network of societies. The battlefront for European Christians shifted to the south with the rise if the Islamic Caliphate.</br></br>Back in Scandinavia, the tales of the Vikings that had been verbally handed down for generations began to be recorded in great Sagas. Scandinavia would be unified and broken apart in wars between Sweden, Norway, and occasionally Denmark  over the next centuries, but the practice of 'going viking' (used as a verb by the Scandinavians to describe the act of a raid by sea) ended.</br></br>");
	var text83 = new dataInfoText(dataInfo[45].text);
	
	
	
	if(!lteIE8){	
		//supplying options recognized by visjs jQuery timeline plugin
		var options = {
			min: '0000',					//first date on timeline
			max: '1100',					//last date
			zoomMax: 1000 * 60 * 60 * 24 * 365 * 120,  	//120 years in millisecs
			zoomMin: 1000 * 60 * 60 * 24 * 365 * 60,  	//60 years in millisecs
			orientation: 'top',				//put date labels on top
			stack: true,
			padding: 4,
		};
		if (windowHeight() <= 490){
			options.stack = false;
			options.padding = 2;
			$(".mapHolder").height("200px");
		}else {
			options.stack = true;
			options.padding = 4;
			$(".mapHolder").height("400px");
		}
		
	   
		//make timeline 
		var timeline = new vis.Timeline(timelineHolder, data, options); 
		//add groups
		timeline.setGroups(groups);
		
		//set initial range ...plugins setWindow function appears not to work well 
		//before 1900 AD. Trying to work around to get data range early as possible,
		//this yields 190 - 250 AD in Chrome 
		//timeline.setWindow({start:'-0220', end: '-0100',});
		//- NO, BREAKS IN IE & MOZ
		//look at source for setWindow later...have to figure out there code

		//function moves timeline by the argument of percentage
		function move (percentage) {
			var range = timeline.getWindow();
			var interval = range.end - range.start;
			timeline.setWindow({
				start: range.start.valueOf() - interval * percentage,
				end:   range.end.valueOf()   - interval * percentage,
			});
		}
		//call move(percentage) onclick of moveLeft and right arrow images
		$("#moveLeft").on("tap", function(){
			move(0.12); 
		});
		$("#moveRight").on("tap", function(){
			move(-0.12); 
		});
		
		///////////////////////////////////////////TO DO: Fix taphold
		/*
			function moveOnHold(percnt, isHeld){
			alert(isHeld);
			var keepMoving = setTimeout(function(){
				move(percnt); 
			}, 100);
			if(isHeld){
				keepMoving;
			} else {
				alert("isn'tHeld"+ isHeld);
				clearTimeout(keepMoving);
			}
		}
		$("#moveLeft").on("taphold", function(){
			moveOnHold(0.1, 1);
		});
		$("#moveRight").on("taphold", function(){
			moveOnHold(-0.1, 1);
		});
		$("#moveLeft").off("taphold", function(){
			alert("isn'tHeld");
			//clearTimeout(keepMoving);
		});
		$("#moveRight").off("taphold", function(){
			alert("isn'tHeld");
			//clearTimeout(keepMoving);
		});	

		///////////////////
		
		stillHeld = false;
		$("#moveLeft").on("taphold", function(){
			stillHeld = true;
			moveOnHold(0.1, 1);
		}).off("taphold", function(){
			stillHeld = false;
		});
		$("#moveRight").on("taphold", function onTapHold(){
			i = 0;
			var keepMoving=setInterval(moveIt, 50);
			function moveIt(){
				i++;
				move(-0.1); 
				if (i>20){
					clearInterval(keepMoving);
				}
			}		
		})
		
		
		
		///////////////////
		function moveOnHold(percnt, isHeld){
			alert("isHeld" + isHeld);
			var keepMoving = setInterval(function(){
				move(percnt); 
			}, 100);
			if(stillHeld){			
				keepMoving;
			} 
			if(!stillHeld){
				clearInterval(keepMoving);
			}
		}*/
		/*
		$("#moveLeft").off("taphold", function(){
			alert("isn'tHeld"+ isHeld);
			clearInterval(keepMoving);
		});
		$("#moveRight").off("taphold", function(){
			alert("isn'tHeld"+ isHeld);
			clearInterval(keepMoving);
		});	
		*/
	}
	
	//set name to name set in cookie from name generator page if available
	var name="Explorer";
	if(document.cookie!=""){
		name=document.cookie.split("=")[1];
	}

	//welcome message reads name and site instructions 
	welcomeHTML='</br>This Interactive Timeline can help you understand the history of Scandinavia and surrounding areas from Europe to the Mediterranean. Get context to see why the practice of "Going Viking" began and how it changed the world.</br></br></br><strong><img src="https://cloud.githubusercontent.com/assets/8033784/3484805/adfc293c-03b6-11e4-922e-9500c8120b3f.png" id="arrowLeft" alt="Move Timeline Left"/><img src="https://cloud.githubusercontent.com/assets/8033784/3484810/b4e87a70-03b6-11e4-93b4-8ed8fb0ac58e.png" id="arrowRight" alt="Move Timeline Right"/>  To start, drag the timeline to the left or right, or use the arrows on either side of the timeline to navigate.</strong></br></br></br> You can click events listed on the timeline, or the point shown on the map when it is in range, to find out more. Hover over the points on the map to see which event took place there during the timeframe you selected.<img width="3.7%" src="https://cloud.githubusercontent.com/assets/8033784/3484812/c599a466-03b6-11e4-9125-2f7ba31c2ea7.png"/></br></br></br>';
	$("#myMap").after('<div id="welcome" class="textHolder" style="left:10%;top:60px;width:79.5%;height:70%"><h3>Welcome, '+name+'</h3>'+welcomeHTML+'</div>');
	
	//on hover, make #titleBox that reads data[id].content + 'Click Point for More'
	function makeHoverTitle(pointTop, pointLeft){		
		$(".point").hover(function(){			
			//if point on hover id == any of the data point id's and no #info are created now,
			for(var i=1;i<=data.length;i++){
				if((($(this).attr('id')) == ("point"+data[i].id)) && ($("#info").length==0)){
					//move forward point and make #titleBox
					$(this).css("z-index", "6");
					$("#myMap").after('<div id="titleBox" class="titleBox" style="left:0%;top:0%;">'
					+ data[i].content + '</div>');
					//now that content is drawn to it, get titleWidth
					var titleWidth = $("#titleBox").width();
					//draw box in middle under '#point'+id
					var pointHeight = $("#point"+data[i].id).height();
					$("#titleBox").hide().css("top", pointTop+pointHeight).css("left", (pointLeft - (titleWidth/2))*myMap.width/1200).fadeIn(500);
				}
			}
		}, function(){
			//move back point & remove #titleBox when hover off
			$(this).css("z-index", "5");
			$("#titleBox").remove();
		});
	};
	
	
	//allows infoBox of of data.id to be created relative to pointTop and pointLeft
	function makeInfoBox(id, pointTop, pointLeft){
		//fix any z-indexes still increased on a past click to regular values (5 normal, 6 on hover)
		$(".point").css("z-index", "5");
		$(".point").hover(function(){
			$(this).css("z-index", "6");
		}, function(){
			$(this).css("z-index", "5");
		});
		// remove any other #info still populated or a hovered #titleBox
		$("#info").remove();
		$("#titleBox").remove();
		//Create #info box with id #info, class .textHolder, with top and left at first aligned with those on 'point'+id.
		//give it <a>'x' in corner with id & class boxclose
		//give it the title at data[id-1].content and the text at dataInfo[id].text.
		$("#myMap").after('<div id="info" class="textHolder" style="left:'+Math.floor(pointLeft/13)+'%;top:'+(pointTop)+'px;">'
			+'<a class="boxclose" id="boxclose"><b>X</b></a>'
			+'<h3>'+data[id-1].content+'</h3>'+dataInfo[id].text+'</div>');
		//make the "#point"+id clicked change z-index & hover z-index to 10 so it's over #info
		var myPoint = $("#point"+id);
		myPoint.css("z-index", "10").hover(function(){
			$(this).css("z-index", "10");
		}, function(){
			$(this).css("z-index", "10");
		});
		//now that content is drawn to it to give it a size, get #info Width/Height
		var infoHeight = $("#info").height();
		var infoWidth = $("#info").width();
		//figure out which side of the map the point is on and make reorient/resize #info not overlap edges of map too much
		if (pointLeft*(myMap.width/1200) >= (myMap.width*0.6) && pointTop >= 200){ //right bottom
			$("#info").css("top", ((pointTop-infoHeight)+(myPoint.height()/4))).css("left", Math.floor((pointLeft-infoWidth)*(myMap.width/1200))).css("width", Math.floor(infoWidth*1.5)*(myMap.width/1200));
			if(pointLeft*(myMap.width/1200) >= (myMap.width*0.9)){	//right so far width was reduced
				function newWidth(){
					return Math.floor(infoWidth*(myMap.width/1200)*4);
				}
				
				$("#info").css("width", (532/newWidth())*(532))
				.css("left", (pointLeft*(myMap.width/1200))-(532/newWidth())*(532));
			}
			$("#info").fadeIn(500);
		} else if (pointLeft*(myMap.width/1200) <= (myMap.width*0.4) && pointTop < 200){ //left  top
			$("#info").fadeIn(500);
		} else if (pointLeft*(myMap.width/1200) >= (myMap.width*0.6) && pointTop < 200){ //right  top
			$("#info").css("left", Math.floor((pointLeft-infoWidth)*(myMap.width/1200))).css("width",infoWidth).fadeIn(500);
		} else if (pointLeft*(myMap.width/1200) < (myMap.width*0.6) && pointLeft*(myMap.width/1200) > (myMap.width*0.4)){ //middle 200px
			if (pointTop > 250){ //bottom middle
				$("#info").css("left", Math.floor((pointLeft-(infoWidth/2))*(myMap.width/1200))).css("width",infoWidth).css("top",(pointTop-infoHeight)).fadeIn(500);
			} else if (pointTop < 150){ //top middle
				$("#info").css("left", Math.floor((pointLeft-(infoWidth/2))*(myMap.width/1200))).css("width",infoWidth).css("top",(pointTop+25)).fadeIn(500);
			} else { //middle middle
				$("#info").css("left", Math.floor((pointLeft+(myMap.width*0.0274))*(myMap.width/1200))).css("width",infoWidth-Math.floor(infoWidth/8)).css("top",(pointTop-(infoHeight/2))).fadeIn(500);
			}
		} else {
			$("#info").hide().css("top", (pointTop-infoHeight)-(myPoint.width()/2)).fadeIn(500);
		}
		//make the #boxclose corner x close #info and adjust z-index of "#point"+id back to normal on click
		$('#boxclose').on("tap", function(){
			$("#info").remove();
			$("#point"+id).css("z-index", "5");
			$("#point"+id).hover(function(){
				$(this).css("z-index", "6");
			}, function(){
				$(this).css("z-index", "5");
			});
		});
	};
	
	//makeNewPoint when timeline event is within range of screen, else remove it. Call makeInfoBox if that point
	//or corresponding timeline event is clicked.
	function makeNewPoint(id, year, pointTop, pointLeft, bigPoint){	
		var small = false;
		if (windowHeight() < 490){			
			$(".mapHolder").height("200px");
			pointTop /= 2;
			small = true;
		} else if (windowHeight() < 480 && small){
			$(".mapHolder").height("400px");
			pointTop *=2;
			small = false;
		}
			//if 'point'+id in visible date range
		if ((year.s <= data[id-1].end && year.e >= data[id-1].start) && document.getElementById('point'+id)==null){
			//make map pointer img id=point'+id+'
			$("#myMap").after('<img id="point'+id+'" class="point" src="https://cloud.githubusercontent.com/assets/8033784/3484812/c599a466-03b6-11e4-9125-2f7ba31c2ea7.png" style="position:absolute;display:block;left:'
			+pointLeft/13+'%;top:'+pointTop+'px;"/>');
			myPoint = $("#point"+id);
			myPoint.hide();
			if(!bigPoint){
				myPoint.width("2.9%").hover(function(){
					$(this).width("3.0%");
				}, function(){
					$(this).width("2.9%");
				});
			}
			myPoint.fadeIn(200);
			//else if out of range remove point'+id+' 
		} else if ((year.s > data[id-1].end || year.e < data[id-1].start) && document.getElementById('point'+id)){
			$("#point"+id).fadeOut(1000);
			$("#point"+id).remove();
		}
		//if points are hovered, 
		makeHoverTitle(pointTop, pointLeft);
		//if point'+id+' is clicked, makeInfoBox and highlight selection on timeline
		$("#point"+id).on("tap", function(){
			makeInfoBox(id, pointTop, pointLeft);
			var idList=[id];
			timeline.setSelection(idList);
		});
		//if corresponding timeline element is selected, makeInfoBox
		timeline.on('select', function (properties) {
			if (properties.items == id ){
				makeInfoBox(id, pointTop, pointLeft);
			}
	    }); 
	}

	
	
	//NEXT::::::::::::::::::::::::::::::::::::::::::
	//this needs retrofitted to use a spritesheet overlaysprites.png!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	function makeNewOverlay(year, firstDate, secondDate, image){
		if (year.s > firstDate && year.s <= secondDate){
					$("#myMap").before('<img src='+ image + ' class="overlay" />');
					//$("#myMap").before('<div id="'+image+'" class="overlay"></div>');
		}
		var overlayCount = $(".overlay").length;
		for(var i = 0; i < overlayCount-1; i++){
			$(".overlay").eq(i).fadeOut(100).remove();
		}	
	}
	//


	function makeThePoints(year){
	// makeNewPoint(id, year(.s&.e), pointTop(in num of px), pointLeft(in num of px), [bigPoint(bool)]);
		makeNewPoint(romePeak.id, year, 360, 651, true);
		makeNewPoint(germanResist.id, year, 250, 600, true);
		makeNewPoint(swedesBC.id,year, 160, 700, true);
		makeNewPoint(norseBC.id,year, 100, 540, true);
		makeNewPoint(danesBC.id,year, 175, 620, true);
		makeNewPoint(romeFall.id,year, 360, 651, true);
		makeNewPoint(finnsBC.id,year, 100, 930, true);	
		makeNewPoint(daneBogBods.id,year,  185, 590);
		makeNewPoint(germanBogBods.id, year, 240, 625);
		makeNewPoint(romanInfl.id, year, 135, 635, true);
		makeNewPoint(germanIberia.id, year, 375, 320);
		makeNewPoint(sami.id, year, 15, 908);
		makeNewPoint(germanChanges.id, year, 275, 655, true);
		makeNewPoint(romeLostBlSea.id, year, 300, 820); 
		makeNewPoint(romeDivides.id, year, 360, 880);
		makeNewPoint(huns370To433.id, year, 240, 1200, true);
		makeNewPoint(huns434To449.id, year, 290, 870, true);
		makeNewPoint(huns450To469.id, year, 300, 640, true);
		makeNewPoint(taticus.id, year, 345, 642);
		makeNewPoint(visgoths1.id, year, 260, 1100);
		makeNewPoint(visgoths2.id, year, 360, 620);
		makeNewPoint(visgoths3.id, year, 385, 420);
		makeNewPoint(vandals1.id, year, 220, 1090);
		makeNewPoint(vandals2.id, year, 380, 430);
		makeNewPoint(vandals3.id, year, 388, 670);
		makeNewPoint(britIsles.id, year, 240, 430);
		makeNewPoint(gaul.id, year, 320, 450);
		makeNewPoint(pannonia.id, year, 340, 690);
		makeNewPoint(wRomeFalls.id, year, 378, 640);
		makeNewPoint(ostrWRome.id, year, 378, 640);
		makeNewPoint(danesSolidify.id, year, 210, 610);
		makeNewPoint(franksGaul.id, year, 320, 480);
		makeNewPoint(gothWar.id, year, 360, 651, true);
		makeNewPoint(justinianPlague.id, year, 370, 770, true);
		makeNewPoint(avar.id, year, 340, 760);
		makeNewPoint(lombard.id, year, 360, 635);
		makeNewPoint(visigIberia.id, year, 375, 320);
		makeNewPoint(lombardChristian.id, year, 375, 635);
		makeNewPoint(visigChristian.id, year, 375, 335);
		makeNewPoint(futhork.id, year, 230, 675);
		makeNewPoint(beowulf.id, year, 200, 675);
		makeNewPoint(oldNorse.id, year, 120, 625);
		makeNewPoint(danevirke.id, year, 215, 595);
		makeNewPoint(irminsul.id, year, 260, 550, true);
		makeNewPoint(vikingEngland.id, year, 220, 440, true);
		makeNewPoint(vikingIreland.id, year, 230, 278, true);
		makeNewPoint(youngerFuthark.id, year, 135, 635);
		makeNewPoint(gudfredDenmark.id, year, 190, 615, true);
		makeNewPoint(charlemagneFranks.id, year,300, 500, true);
		makeNewPoint(hemmingDenmark.id, year, 180, 612);
		makeNewPoint(civilWarDenmark.id, year, 175, 620, true);
		makeNewPoint(vikingCornish.id, year, 255, 275);
		makeNewPoint(halfdanNorway.id, year, 115, 540);
		makeNewPoint(vikingSpain.id, year, 375, 350);
		makeNewPoint(rus.id, year, 220, 1000);
		makeNewPoint(vikingFrance.id, year, 300, 375);
		makeNewPoint(christianEngland.id, year, 250, 420);
		makeNewPoint(frisians.id, year, 240, 525);//here
		makeNewPoint(christianGoths.id, year, 295, 670, true);
		makeNewPoint(christianRomans.id, year, 375, 670, true);
		makeNewPoint(christianFranks.id, year, 320, 450, true);
		makeNewPoint(iceland.id, year, 80, 170);
		makeNewPoint(vikingSettlements.id, year, 250, 420);
		makeNewPoint(egill.id, year, 85, 120);
		makeNewPoint(normans.id, year, 285, 430, true);	
		makeNewPoint(danelaw.id, year, 250, 400, true);
		makeNewPoint(fairhair.id, year, 110, 550, true);
		makeNewPoint(shipBurials.id, year, 240, 1020, true);
		makeNewPoint(althingi.id, year, 75, 140, true);
		makeNewPoint(njilsSaga.id, year, 70, 130);
		makeNewPoint(gormDenmark.id, year, 195, 620);
		makeNewPoint(haakonTheGood.id, year, 135, 552);
		makeNewPoint(bluetooth.id, year, 150, 570);
		makeNewPoint(christainIceland.id, year, 75, 160, true);
		makeNewPoint(forkbeard.id, year, 180, 600);
		makeNewPoint(olafNorway.id, year, 150, 560, true);
		makeNewPoint(stBriceMassacre.id, year, 255, 400, true);
		makeNewPoint(hardrada.id, year, 105, 575);
		makeNewPoint(cnutTheGreat.id, year, 250, 440, true);
		makeNewPoint(liefEricson.id, year, 20, 85, true);
		makeNewPoint(ericTheRed.id, year, -10, 55, true);
		makeNewPoint(germainicIronAge.id, year, 135, 635, true);
		makeNewPoint(vikingEnd.id, year, 135, 635, true);
		makeNewPoint(vikingAge.id, year, 135, 635, true);
		
		
		

		
		
	}
	function makeTheOverlays(year){		//the image id in css needs assed
		makeNewOverlay(year,1,50, "https://cloud.githubusercontent.com/assets/8033784/3792368/fa929cec-1b74-11e4-966b-4f8d6e5e4614.png");
		makeNewOverlay(year,50,141, "https://cloud.githubusercontent.com/assets/8033784/3792372/ff862160-1b74-11e4-923b-ec6220fe9554.png");
		makeNewOverlay(year, 141, 200, "https://cloud.githubusercontent.com/assets/8033784/3792373/05d49cae-1b75-11e4-9c7d-236362c937cd.png");
		makeNewOverlay(year, 200, 290, "https://cloud.githubusercontent.com/assets/8033784/3792374/09bc7abc-1b75-11e4-87fa-d817bed7bb79.png");
		makeNewOverlay(year, 290, 351, "https://cloud.githubusercontent.com/assets/8033784/3792375/0c58159c-1b75-11e4-858e-7c8074780fbb.png");
		makeNewOverlay(year, 351, 364, "https://cloud.githubusercontent.com/assets/8033784/3792377/10a08efe-1b75-11e4-83aa-ed6860766f86.png");
		makeNewOverlay(year, 364, 372, "https://cloud.githubusercontent.com/assets/8033784/3484717/2fa73d2c-03b3-11e4-9545-ae3141a626cf.png");
		makeNewOverlay(year, 372, 374, "https://cloud.githubusercontent.com/assets/8033784/3484718/374f6f54-03b3-11e4-85e8-c926d46dec28.png");
		makeNewOverlay(year, 374, 380, "https://cloud.githubusercontent.com/assets/8033784/3792388/30db749a-1b75-11e4-8802-8d10ca8b3eaa.png");
		makeNewOverlay(year, 380, 390, "https://cloud.githubusercontent.com/assets/8033784/3792389/34d8929e-1b75-11e4-9564-abcf747bc677.png");
		makeNewOverlay(year, 390, 420, "https://cloud.githubusercontent.com/assets/8033784/3792390/381e054c-1b75-11e4-9bca-9520f2032468.png");
		makeNewOverlay(year, 420, 450, "https://cloud.githubusercontent.com/assets/8033784/3792391/3a771770-1b75-11e4-9ba7-e8436fb07739.png");	
		makeNewOverlay(year, 450, 710, "https://cloud.githubusercontent.com/assets/8033784/3792392/3c342878-1b75-11e4-8c18-48375e004f2c.png");	
		makeNewOverlay(year, 710, 795, "https://cloud.githubusercontent.com/assets/8033784/3793055/bc95e41a-1b8a-11e4-8b43-f3c31c7086cc.png");	
		makeNewOverlay(year, 795, 915, "https://cloud.githubusercontent.com/assets/8033784/3793057/d29fd2de-1b8a-11e4-9e6e-044f02e08cee.png");	
		makeNewOverlay(year, 915, 965, "https://cloud.githubusercontent.com/assets/8033784/3793217/b8caee7a-1b8f-11e4-8128-c7ad31dc0c36.png");	
		makeNewOverlay(year, 965, 1099, "https://cloud.githubusercontent.com/assets/8033784/3793218/bcb291c8-1b8f-11e4-9788-daa2f66a4a99.png");	

	
	}
	
	
	//event listener for timeline rangechange on drag of move arrow click
	timeline.on('rangechanged', function doIt(properties) {
		$("#welcome").remove(); //remove welcome information
		$("#info").remove(); //get rid of any info boxes still open
		//normalize any .point with z-indexes still moved forward
		$(".point").css("z-index", "5");
		$(".point").hover(function(){
			$(this).css("z-index", "6");
		}, function(){
			$(this).css("z-index", "5");
		});
		//get the startYear & endYear from timestamp translated to human readable years 
		var endDate = new Date(properties.end); 
		var endYear = (endDate.getYear()>0)? endDate.getYear() : endDate.getYear() + 1900;
		var startDate = new Date(properties.start);
	    var startYear = (startDate.getYear()>0)? startDate.getYear() : startDate.getYear() + 1900;
		//moz and ie read null of NaN on dates prior to 70AD, setting those.
		startYear = startYear || 1;
		endYear = endYear || 70;
		//wrap start & end years in object
		function yearsInRange (s, e){
			this.s = s;
			this.e = e;
		}
		var year = new yearsInRange(startYear, endYear);
		//initialize my points and overlays
		makeThePoints(year);
		makeTheOverlays(year);
	}); 

	//this allows page resize and redraws currently drawn elements
	$(window).resize(function(){
		if (windowHeight() <= 490){//resize to small
			options.stack = false;
			currentMapHeight = $(".mapHolder").height();
			if (currentMapHeight > 350){
				$(".mapHolder").height("210px");				
				for (var i=0;i<data.length;i++){
					var currentPoints = $(".point");
					var currentPoint = currentPoints[i].id;
					var currentPos = $("#"+currentPoint).position();
					$("#"+currentPoint).css("top", currentPos.top/2);
			}
			}
		} else {//resize to big
			options.stack = true;
			currentHeight = $(".mapHolder").height();
			if (currentHeight < 350){
				$(".mapHolder").height("400px");
				for (var i=0;i<data.length;i++){
					var currentPoints = $(".point");
					var currentPoint = currentPoints[i].id;
					var currentPos = $("#"+currentPoint).position();
					$("#"+currentPoint).css("top", currentPos.top*2);
				}
			}
		}
	});
		
	/*
	//generalize or just load points from initial range after I make that work
	triggerdoIt(properties)
	*/
}
document.addEventListener("DOMContentLoaded",init, false);
