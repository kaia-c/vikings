function init(){

	// getting timelineHolder from html element 'myTimeline'
	var timelineHolder = document.getElementById('myTimeline');
	
	//setting up group categories on timeline
	var sc = 'Scandinavia';
	var ga = 'Germanic Areas';
	var nw = 'Neighbouring World';
	var groups = new vis.DataSet([
		{id: sc},		//1
		{id: ga},		//2
		{id: nw},		//3
	]);
		
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
	var romePeak = new dataPoint(nw, 'Peak of Roman Empire', '0000', '0200');
	var germanResist = new dataPoint(ga, 'Resistance to Roman Rule', '0000', '0200');
	var swedesBC = new dataPoint(sc, 'Swedes ~ Abridged BC History', '0000', '0099');
	var norseBC = new dataPoint(sc, 'The Norsemen ~ Abridged BC History', '0000', '0099');
	var danesBC = new dataPoint(sc, 'The Danes ~ Abridged BC History', '0000', '0099');
	var romeFall = new dataPoint(nw, 'Fall of Western Roman Empire', '0261', '0477');
	var finnsBC = new dataPoint(sc, 'The Finns ~ Abridged BC History', '0000','0099');
	var daneBogBods = new dataPoint(sc, 'Pre-Roman Iron Age Bog Bodies in Denmark','0000','0179');	
	var germanBogBods = new dataPoint(ga,'Iron Age+ Bog Bodies in Germanic areas', '0000', '1199');
    	var romanInfl = new dataPoint(sc,'Roman Cultural Influence in Scandinavia','0100','0250');
    	var germanIberia = new dataPoint(ga, 'Germainic Invasion of Iberia','0410','0510');
	var sami = new dataPoint(sc, 'The Sami', '0000', '1199');

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
	var text6 = new dataInfoText("During this time Rome lost much of its' territory. The territories of the Western Roman Empire entered the Dark Ages. Life became hard for peoples still using Roman currency for commerce when new currency stopped flowing in. Germanic tribes, local men with land and positions of power, and the Church jostled to fill the power vacuum.</br></br>Factors that lead to its' downfall included: <ul><li><b>Foreign, especially Germanic Invasions</b> started in previously disputed lands close to borders but by the 5th century they had taken the city of Rome. The empire was attacked by Germainic tribes including the: <ul><li>Visigoths</li><li>Ostrogoths</li><li>Franks</li><li>Vandals</li><li>Angels & Saxons</li></ul><li><b>Mercenary Military</b> with constant wars, Rome had to depend on hired Military men, who were often Germainic and would switch sides during the battle.</li><li><b>Economic Ruin and Social Strife</b> made citizens less willing to fight for Rome. The cost of constant wars resulted in high taxes and the system had changed so that former soldiers often found themselves losing their land or sold into slavery for debt.</li><li><b>Other reasons</b> include epidemics in the 2-3rd centuries and lead in the water piping and carriers used by the elite leading to brain damage in the Ruling class.</li></ul>");
	var text7 = new dataInfoText('<ul><li>The first Germanic and other nomadic inhabitants are believed to have came to the area of Finland around 9000 BC. A recent find, currently being excavated could change out understanding - the site claims to hold a Neanderthal from appx. 122,000 BC! <p><a href="http://www.susiluola.fi/eng/wolfcave.php" target=_blank>Read More about the Wolf Cave in Kristiinankaupunki</a></p></li><li>The Neolithic period is considered to have began by <b>5300 BC</b> in Finland, when skilled potery work from the Comb Ceramic Cultures has been dated to, however sustainance was still acheived through hunting and gathering. </li><li>Finland appears to have been connected to vast trade network and slate from Scandinavia, and large amounts of amber have been found, implying the Finns were connected to the European Amber Road, a route established in at least 16,000 BC supplying the Mediteranian with amber from as far as Russia</li><li>Despite other signs progress and exposure and partial assimilation with other cultures who used agriculture, the first traces of farming and animal husbandry only start on the Eastern tip of Finland around <b>200 BC.</b> Unusually, the Bronze age and Iron ages started first, around 1500 and 500 BC, resrospectivly.</li></ul>');
	var text8 = new dataInfoText('<ul><li><b>Bog Burials</b> This area is known for bog burials, as here is where was found the oldest discovered case in the world, dating to 8000 BC. Most finds have been dated to around 750-1 BC, with a few in AD times. </br> </br> The peat bogs have preserve bodies well for centuries, and hanged persons and large groups of men wounded in battle have been found. </br></br> <a href="http://ngm.nationalgeographic.com/2007/09/bog-bodies/bog-bodies-text/1" target=_blank><img src="http://s.ngm.com/2007/09/bog-bodies/img/bog_feature.jpg" width="300" height="200"><figcaption>Click to read "Tales from the Bog" by National Geographic</figcaption></a></br>The bogs also hold votive offerings intended for the Other world, often of neck-rings, wristlets or ankle-rings made of bronze or more rarely gold. The archaeologist P.V. Glob believed that these were <i>offerings to the gods of fertility and good fortune</i>, a viewpoint that is widely supported. The only written account of possible motivations are from the Roman historian Taticus, who claims: <p><i>Traitors and deserters are hanged on trees; the coward, the unwarlike, the man stained with abominable vices, is plunged into the mire of the morass with a hurdle put over him. This distinction in punishment means that crime, they think, ought, in being punished, to be exposed, while infamy ought to be buried out of sight.</p></i></li></ul>');
	var text9 = new dataInfoText('<ul><li><b>Bog Burials</b> Although Denmark is famous for Bog Burials, they are most common in this area, dating back to about <b>765 BC</b> in Germania and continuing much longer then in Denmark -- all the way until around 1500. The peat bogs have preserve bodies well for centuries, and hanged persons and large groups of men wounded in battle have been found. </br></br> <a href="http://ngm.nationalgeographic.com/2007/09/bog-bodies/bog-bodies-text/1" target=_blank><img src="http://s.ngm.com/2007/09/bog-bodies/img/bog_feature.jpg" width="300" height="200"><figcaption>Click to read "Tales from the Bog" by National Geographic</figcaption></a></br>The bogs also hold votive offerings intended for the Other world, often of neck-rings, wristlets or ankle-rings made of bronze or more rarely gold. The archaeologist P.V. Glob believed that these were <i>offerings to the gods of fertility and good fortune</i>, a viewpoint that is widely supported. The only written account of possible motivations are from the Roman historian Taticus, who claims: <p><i>Traitors and deserters are hanged on trees; the coward, the unwarlike, the man stained with abominable vices, is plunged into the mire of the morass with a hurdle put over him. This distinction in punishment means that crime, they think, ought, in being punished, to be exposed, while infamy ought to be buried out of sight.</p></i></li></ul>');
	var text10 = new dataInfoText('<ul><li>From <b>100 AD</b>, a cultural influence from the Roman Empire took place.</li><li>Trading in largely furs and skins in exchange for luxury goods occured.</li><li>Some Scandinavians also served as Roman mercenaries.</li><li>In mimicing the path of Roman culture, some of the most powerful Norse farmers became chieftains. They functioned as priests and accepted sacrifices from farmers which were again used to pay soldiers. They would obtain a group of soldiers to protect lands called a hird. Thus they were able to rule an area of several settlements and tribes.</li></ul>');
	var text11 = new dataInfoText('During the Germanic Invasions of the Iberian Peninsula, the area was conquered by the Suebi, a Germanic people from Central Europe. In 410, the Suebi established a Kingdom in northwest Iberia, which they maintained as Gallaecia, and made Bracara their capital');
	var text12 = new dataInfoText('<ul><li>The Sami are an indigionous people who settled in Northern Scandinavia after the retreat of the last glaciers.</li><li>The traditional Sami life style, dominated by hunting, fishing and trading, stayed much the same from perhapse 8000 BC-1800 AD, well beyond the scope of this timeline.</li><li>Many believe they are an offshoot of the same mainly Germanic tribes that settled Southen Scandinavia, but this is uncertain. It appears genetically the Sami are a mix of old Asian and European lines, although Asian peoples are not known to have migrated to the area and other pieces of the Sami genome are entirely unique. They are a frequntly studied population for geneticists.</li><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Saami_Family_1900.jpg/350px-Saami_Family_1900.jpg" width="300" height="250"><figcaption>Sami Family, Northern Norway, appx 1900 AD</figcaption></a>');    
	
	//supplying options recognized by visjs jQuery timeline plugin
	var options = {
		min: '0000',								//first date on timeline
		max: '1200',								//last date
		zoomMax: 1000 * 60 * 60 * 24 * 365 * 120,  	//120 years in millisecs
		zoomMin: 1000 * 60 * 60 * 24 * 365 * 60,  	//60 years in millisecs
		orientation: 'top',							//put date labels on top
	};
   
	//make timeline 
	var timeline = new vis.Timeline(timelineHolder, data, options); 
	//add groups
	timeline.setGroups(groups);
  

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
	document.getElementById("moveLeft").onclick =function(){ 
		move(0.2); 
	};
	document.getElementById("moveRight").onclick =function(){
		move(-0.2); 
	};
	
	//map overlay laying function
	//doesn't work right as one big if else if (less blink on transition or overlays 
	//staying slightly visible past desired times this way)
	function mapOverlay(startYear, endYear){
		if(startYear < 50){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484707/1071eaf6-03b3-11e4-8759-ce2accc5e9d3.png" id="overlay1" class="overlay" />');
		} else {
			$("#overlay1").fadeOut(10).remove();
		}
		if (startYear > 50 && startYear < 141){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484708/14a604b8-03b3-11e4-87d8-8463e21de9c3.png" id="overlay100" class="overlay" />');
		} else {
			$("#overlay100").fadeOut(10).remove();
		}	
		if (startYear > 141 && startYear < 241){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484710/18c5f59e-03b3-11e4-8b47-6c399f23d62d.png" id="overlay200" class="overlay" />');
		} else {
			$("#overlay200").fadeOut(10).remove();
		}
		if (startYear > 241 && startYear < 302){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484712/1c079ffa-03b3-11e4-9879-1926360fbbd6.png" id="overlay300" class="overlay" />');
		} else {
			$("#overlay300").fadeOut(10).remove();
		}
		if (startYear > 302 && startYear < 351){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484713/1e0199fa-03b3-11e4-828f-f3bb9872a19d.png" id="overlay361" class="overlay" />');
		} else {
			$("#overlay361").fadeOut(10).remove();
		}
		if (startYear > 351 && startYear < 361){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484715/2481223c-03b3-11e4-9934-e53a9c75ccb9.png" id="overlay410" class="overlay" />');
		} else {
			$("#overlay410").fadeOut(10).remove();
		}
		if (startYear > 361 && startYear < 384){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484716/29c46f06-03b3-11e4-8080-c06223d0d4d3.png" id="overlay420" class="overlay" />');
		} else {
			$("#overlay420").fadeOut(10).remove();
		}
		if (startYear > 384 && startYear < 392){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484717/2fa73d2c-03b3-11e4-9545-ae3141a626cf.png" id="overlay443" class="overlay" />');
		} else {
			$("#overlay443").fadeOut(10).remove();
		}
		if (startYear > 392 && startYear < 394){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484718/374f6f54-03b3-11e4-85e8-c926d46dec28.png" id="overlay451" class="overlay" />');
		} else {
			$("#overlay451").fadeOut(10).remove();
		}
		if (startYear > 394 && startYear < 400){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484720/3da72b8a-03b3-11e4-98d6-910a98ad8055.png" id="overlay453" class="overlay" />');
		} else {
			$("#overlay453").fadeOut(10).remove();
		}
		if (startYear > 400 && startYear < 410){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484721/4306b2a8-03b3-11e4-8809-a5e262417595.png" id="overlay459" class="overlay" />');
		} else {
			$("#overlay459").fadeOut(10).remove();
		}
		if (startYear > 410 && startYear < 420){
			$("#myMap").before('<img src="https://cloud.githubusercontent.com/assets/8033784/3484722/5306e7fe-03b3-11e4-853b-473d7c64a2c0.png" id="overlay469" class="overlay" />');
		} else {
			$("#overlay469").fadeOut(10).remove();
		}
		if (startYear > 420){
			$(".overlay").fadeOut(10).remove();
		}
	}		
	
	function makeInfoBox(id, pointTop, pointLeft){
		//fix any z-indexes still increased on a past click to regular values (5 normal, 6 on hover)
		$(".point").css("z-index", "5");
		$(".point").hover(function(){
			$(this).css("z-index", "6");
		}, function(){
			$(this).css("z-index", "5");
		});
		// remove any other infoBoxes still populated
		$("#info").remove();
		//Create infobox with id #info, class .textHolder, with top and left at first aligned with those on 'point'+id.
		//give it <a>'x' in corner with id & class boxclose
		//give it the title at data[id-1].content and the text at dataInfo[id].text.
		$("#myMap").after('<div id="info" class="textHolder" style="left:'+pointLeft+'px;top:'+(pointTop)+'px;">'
			+'<a class="boxclose" id="boxclose"><b>X</b></a>'
			+'<h3>'+data[id-1].content+'</h3>'+dataInfo[id].text+'</div>');
		//make the "#point"+id clicked change z-index & hover z-index to 10 so it's over #info
		$("#point"+id).css("z-index", "10");
		$("#point"+id).hover(function(){
			$(this).css("z-index", "10");
		}, function(){
			$(this).css("z-index", "10");
		});
		//setting up variables for the #info height & width as called a lot next
		var infoHeight = $("#info").height();
		var infoWidth = $("#info").width();
		//figure out which side of the map the point is on and make reorient/resize #info not overlap edges of map too much
		if (pointLeft >= 700 && pointTop >= 250){ //right right bottom
			$("#info").css("top", (pointTop-infoHeight)).css("left", (pointLeft-infoWidth)).css("width", infoWidth).fadeIn(500);
		} else if (pointLeft <= 500 && pointTop < 250){ //left left top
			$("#info").fadeIn(500);
		} else if (pointLeft >= 700 && pointTop < 250){ //right right top
			$("#info").css("left", (pointLeft-infoWidth)).css("width",infoWidth).fadeIn(500);
		} else if (pointLeft < 700 && pointLeft > 500){ //middle 200px
			if (pointTop > 250){ //bottom middle
				$("#info").css("left", (pointLeft-(infoWidth/2))).css("width",infoWidth).css("top",(pointTop-infoHeight)).fadeIn(500);
			} else if (pointTop < 150){ //top middle
				$("#info").css("left", (pointLeft-(infoWidth/2))).css("width",infoWidth).css("top",(pointTop+25)).fadeIn(500);
			} else { //middle middle
				$("#info").css("left", (pointLeft+32)).css("width",infoWidth-(infoWidth/8)).css("top",(pointTop-(infoHeight/2))).fadeIn(500);
			}
		} else {
			$("#info").hide().css("top", (pointTop-infoHeight)).fadeIn(500);
		}
		//make the #boxclose corner x close #info and adjust z-index of "#point"+id back to normal on click
		$('#boxclose').click(function(){
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
	function makeNewPoint(id, startYear, endYear, pointTop, pointLeft){		
			//if 'point'+id in visible date range
		if ((startYear <= data[id-1].end && endYear >= data[id-1].start) && document.getElementById('point'+id)==null){
			//make map pointer img id=point'+id+'
			$("#myMap").after('<img id="point'+id+'" class="point" src="https://cloud.githubusercontent.com/assets/8033784/3484812/c599a466-03b6-11e4-9125-2f7ba31c2ea7.png" style="position:absolute;display:block;left:'
			+pointLeft+'px;top:'+pointTop+'px;"/>');
			$("#point"+id).hide().fadeIn(200);
			//else if out of range remove point'+id+' 
		} else if ((startYear > data[id-1].end || endYear < data[id-1].start) && document.getElementById('point'+id)){
			$("#point"+id).fadeOut(1000);
			$("#point"+id).remove();
		}
		//if point'+id+' is clicked, makeInfoBox
		$("#point"+id).click(function(){
			makeInfoBox(id, pointTop, pointLeft);
		});//if corresponding timeline element is clicked, makeInfoBox
		timeline.on('select', function (properties) {
			if (properties.items == id ){
				makeInfoBox(id, pointTop, pointLeft);
			}
	  }); 
	}

timeline.on('rangechanged', function (properties) {
	$("#info").remove(); //get rid of any info boxes still open
	//normalize any .point with z-indexes still moved forward
	$(".point").css("z-index", "5");
	$(".point").hover(function(){
		$(this).css("z-index", "6");
	}, function(){
		$(this).css("z-index", "5");
	});
	//get the startYear & endYear from timestamp translated human readable dates
	var endDate = new Date(properties.end); 
	var endYear = endDate.getYear() + 1900;
	var startDate = new Date(properties.start);
    var startYear = startDate.getYear() + 1900;

	// makeNewPoint(id, startYear, endYear, pointTop[NUMBER]px, pointLeft[NUMBER]px);
	makeNewPoint(romePeak.id,  startYear, endYear,  350, 650);
	makeNewPoint(germanResist.id,  startYear, endYear, 240, 600);
	makeNewPoint(swedesBC.id,  startYear, endYear, 160, 700);
	makeNewPoint(norseBC.id,  startYear, endYear, 125, 540);
	makeNewPoint(danesBC.id,  startYear, endYear, 185, 610);
	makeNewPoint(romeFall.id,  startYear, endYear, 350, 651);
	makeNewPoint(finnsBC.id,  startYear, endYear, 100, 930);	
	makeNewPoint(daneBogBods.id,  startYear, endYear, 175, 590);
	makeNewPoint(germanBogBods.id,  startYear, endYear, 230, 620);
	makeNewPoint(romanInfl.id, startYear, endYear, 135, 635);
	makeNewPoint(germanIberia.id, startYear, endYear, 375, 320);
	makeNewPoint(sami.id, startYear, endYear, 1, 885);

	//call mapOverlay
	mapOverlay(startYear, endYear);
}); 		
		
 /* log I use when I need to check var values but leave commented out otherwise.
  function logEvent(event, properties) { //trying to log to see what I'm getting exactly...
    var log = document.getElementById('log');
    var msg = document.createElement('div');
    msg.innerHTML = 'event=' + JSON.stringify(event) + ', ' + 'properties.end=' + JSON.stringify(properties.end);
    if(log.firstChild != null){
	  log.insertBefore(msg, log.firstChild);
    } else {
	  log.appendChild(msg);
	}
  }
  */
}
document.addEventListener("DOMContentLoaded",init, false);
