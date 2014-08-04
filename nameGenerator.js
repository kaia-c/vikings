<!DOCTYPE html>
<html lang="en"> 
	<head>
		<title>Viking History Timeline</title>
		<meta charset="UTF-8">
		<link href="timelineStyle.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<div id="outer">
			<div id="topbar"><a href="index.html" id="navlink">
				<img src="topbar.png" alt="Explore History - the Vikings" />
				<div id="sitetitle"> The Vikings</div>
			</a></div>
		<div id="navholder" align="center">
			<ul id="navbar">
				<li class="navelt"><a href="index.html" id="navlink">Home</a></li>
				<li class="navelt"><a href="VikingNameGenerator.html" id="navlink">Viking Name Generator</a></li>
				<li class="navelt"><a href="timeline.html" id="navlink">Interactive Timeline</a></li>
				<li class="navelt"><a href="saga.html" id="navlink">Play Write Your Own Saga</a></li>
			</ul>
		</div>
		
		<div id = "namingCeremony" align="center">
			<div></br><b>Welcome to your Viking Naming Ceremony</b></br></br>Naming was an important Viking rite. Before naming a child, children with defects or which the family could not afford to rear could be exposed to the elements. If it was decided to rear the child, then the baby was washed, dressed, and formally named. The giving of the name conferred upon the child the status of a member of the family and any rights of inheritance, and once the child had been named exposing it would be seen as murder. Naming was done by a practice called "ausa vatni". Protection was asked from the god Þórr as water was poured over the child's head. The child received gifts.</br></br></div>
			<img src="http://www.vikinganswerlady.com/graphics/pagecontent/AusaVatni.jpg" width="30%"/>
			</br>In actual Viking times, you first name would usually be the same as your most honoured deceased ancestor. According to the pagan view, in some mysterious a name way represented the spiritual and intellectual element of the individual for whom it stood. After death the soul went with the name, and the individual was restored to new life with the name being given again. The new-born child so named would with the name become endowed with the character and the personal qualities of the departed.</br></br>On occasion adults were given a nickname in a formal ceremony, often if the new name signified some special event or feat of skill, or as an outsider that had achieved status within Viking society. Your naming will be more similar to this ceremony.</br></br><b>To see your Viking Name, answer the questions below:</b></br>
		</div>
		<div id="formholder"><form name="name1">				
				</br>Are you:</br>
				<input type="radio" name="gender" value="male" onChange="male(this.form)">Male</br>
				<input type="radio" name="gender" value="female" onChange="female(this.form)">Female</br>
				</form>
				<form onsubmit="nameUser()" name="name2">
				<script>
				//this is a page to show how I can work without jquery if I need to.
				var myForm = document.getElementsByTagName("form")[1];
				var names = [];
				var gal = false;
				function createRadioElement(elem, text, name) {
					var radioHtml = '</br><input type="radio" name="fChoices" id="'+name+'">'+text+'</input>';
					
					myForm.innerHTML += radioHtml;
					names.push(name);
					
				}
				function female(form){
					//clear out other elements currently on form but no more
					i=names.length*2;
					i+=27;
					while (myForm.hasChildNodes()&& i>0) {
						myForm.removeChild(myForm.lastChild);
						if(i%2==0&&i>27){
							names.length--;
						}
						i--;
					}
					names = [];
					gal = true;
					//add the dadName textfield
					myForm.innerHTML += '</br></br>What was your father\'s first name?  <input type="text" name="dadName"></br></br>';
					var node = document.createTextNode("Do people think of you as more of a: ");
					myForm.appendChild(node);
					//add radio elements (this, the text by the radio, the id)
					createRadioElement(this, 'God-like woman', 'Ase');
					createRadioElement(this, 'Women wedded to a God', 'Aslaug');
					createRadioElement(this, 'Divine beauty', 'Astra');
					createRadioElement(this, 'Fighter for wealth', 'Audhild');
					createRadioElement(this, 'Sword', 'Brenna');
					createRadioElement(this, 'Peasent day laborer', 'Dagmar');
					createRadioElement(this, 'Ruler', 'Erika');
					createRadioElement(this, 'Devine woman', 'Helga');
					createRadioElement(this, 'Person happy in battle', 'Hillevi');
					createRadioElement(this, 'Woman from an island', 'Iona');
					createRadioElement(this, 'Horse lover', 'Jorunn');
					createRadioElement(this, 'Chaste woman', 'Kari');
					createRadioElement(this, 'Goddess of luck', 'Oydis');
					createRadioElement(this, 'Advisor', 'Ragna');
					createRadioElement(this, 'From a house of strength', 'Solvieg');
					createRadioElement(this, 'Powerful as thunder', 'Thyra');
					createRadioElement(this, 'Wolf-woman', 'Ylva');
					//add the submit button
					myForm.innerHTML +='</br></br><input type="submit" value="Submit">';
				}
				
				function male(form){
					//clear out other elements currently on form but no more
					i=names.length*2;
					i+=27;
					while (myForm.hasChildNodes()&& i>0) {
						myForm.removeChild(myForm.lastChild);
						if(i%2==0&&i>27){
							names.length--;
						}
						i--;
					}
					names = [];
					//add the dadName textfield
					myForm.innerHTML += '</br></br>What was your father\'s first name?  <input type="text" name="dadName"></br></br>';
					var node = document.createTextNode("Do people think of you as more of a: ");
					myForm.appendChild(node);
					//add radio elements (this, the text by the radio, the id)
					createRadioElement(this, 'Spear of God', 'Asger');
					createRadioElement(this, 'Under devide protection', 'Asmund');
					createRadioElement(this, 'A wealthy friend', 'Audun');
					createRadioElement(this, 'A bear', 'Bjorn');
					createRadioElement(this, 'An intellegent man', 'Bjarte');
					createRadioElement(this, 'A warrior in armor', 'Brynjar');
					createRadioElement(this, 'From the wetlands', 'Carr');
					createRadioElement(this, 'Confused or unclear', 'Corey');
					createRadioElement(this, 'Determined as stone', 'Destin');
					createRadioElement(this, 'One to be respected and feared', 'Egill');
					createRadioElement(this, 'A solitary fighter', 'Einar');
					createRadioElement(this, 'Eternal Ruler', 'Eirik');
					createRadioElement(this, 'An outsider or foreigner', 'Erlend');
					createRadioElement(this, 'Mountain man', 'Felman');
					createRadioElement(this, 'Enlightened and wise', 'Frode');
					createRadioElement(this, 'The favorite son', 'Hagen');
					createRadioElement(this, 'A wanderer', 'Stian');
					//add the submit button
					myForm.innerHTML +='</br></br><input type="submit" value="Submit">';
				}
				//changing last letters as done in norse surname prefixes
				function getNorseDadPrefix(dadName){
					dadName=dadName.toLowerCase();
					var lastChar=dadName.slice(-1);
					if(lastChar=="r"){
						dadName=dadName.substr(0, dadName.length-1);
						dadName+="s";
					}else if(lastChar=="a"){
						dadName=dadName.substr(0, dadName.length-1);
						dadName+="u";
					} else if(lastChar=="n"){
						secLastChar = dadName.slice(-2);
						secLastChar = secLastChar.slice(0,1);
						if(secLastChar == "r"){
							dadName=dadName.substr(0, dadName.length-3);
							dadName+="arnar"
						} else if (secLastChar == "n"){
							dadName=dadName.substr(0, dadName.length-1);
							dadName+="s";
						} else {
							dadName+="ar";
						}
					} else if(lastChar=="i" || lastChar == "y" || lastChar=="j"){
						dadName=dadName.substr(0, dadName.length-1);
						dadName+="a";
					} else if(lastChar=="h"){
						secLastChar = dadName.slice(-2);
						secLastChar = secLastChar.slice(0,1);
						if(secLastChar == "t"){
							dadName=dadName.substr(0, dadName.length-1);
						}
					}
					var tempDad="";
					for (i in dadName){//and for security
						if(dadName[i]=="$"||dadName[i]=="<"||dadName[i]==">"||dadName[i]=='"'){
							continue
						} else if (dadName[i]=="j"){//and because scandinavians pronounce j as y and don't have a y
							tempDad+="y";
						}else{
							tempDad+=dadName[i];
						}
					}
					dadName = tempDad.charAt(0).toUpperCase() + tempDad.slice(1);
					return dadName;
				}
				//give user their viking naming ceremony
				function nameUser(){
					var dadName=document.forms["name2"]["dadName"].value;
					var prefix = getNorseDadPrefix(dadName);
					if(gal){					
						dadName=prefix+"dottir";
					} else {
						dadName=prefix+"son";
					}
					var first="";
					for (var i=0;i<names.length;i++){
						if(document.getElementById(names[i]).checked){
							first += (names[i]);
						}
					}
					var vikingName = first+" "+dadName;
					alert("You're Viking name is "+vikingName);
					
					//writing a cookie with users vikingName
					var expireDate=new Date();
					expireDate.setMonth(expireDate.getMonth()+6);
					document.cookie = "userName="+vikingName+";path=/;expires="+expireDate.toGMTString();			
				}				
			</script>	
		</form></div>
		</div>
	</body>
</html>
