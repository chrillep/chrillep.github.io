
<?php
function GravatarAsFavicon() {
	//We need to establish the hashed value of your email address
	$GetTheHash = md5(strtolower(trim('christian.widlund@gmail.com')));
	echo 'http://www.gravatar.com/avatar/' . $GetTheHash . '?s=16';
}
?>
<!DOCTYPE html>
<html lang="sv">
<head>
	<meta name="description" content="Christian Widlunds CV" />
	<meta name="keywords" content="HTML,CSS,CV,Christian,Widlund" />
	<meta name="author" content="Christian Widlund" />
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
	<title>Curriculum Vitae - Christian Widlund</title>
	<link rel="shortcut icon" href="<?php GravatarAsFavicon(); ?>" />
	<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css'>
<!-- 	<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link rel="stylesheet/less" type="text/css" href="css/minstyle.css.css">
 -->
	<link href="css/minstyle.css" type="text/css" rel="stylesheet" />
</head>
<body>
	<div id="wrapper" class="container">
		<div id="bgwrapper">
		<div id="cv" class="rubrik">
		<fieldset>
			<legend><h1>Curriculum Vitae - Christian Widlund</h1></legend>
				<img src="http://www.gravatar.com/avatar/e6b67417d9fcae199d0eece60eaea9c0?s=200" title="Bild på mig" alt="Bild på mig" id="minbild" class="minbild img-circle" />
				<div id="index" class="index">		
					<fieldset>
						<legend class="heading"><h2>Index</h2></legend>
						<div class="top">

							<hr />
							<ol>
								<li><a href="#personuppgifter" class="toggler">Personuppgifter</a></li>
								<li><a href="#presentation" class="toggler">Presentation</a></li>
								<li><a href="#utbildningar" class="toggler">Utbildningar</a></li>
								<li><a href="#anstallningar" class="toggler">Anställningar</a></li>
								<li><a href="#ovriga" class="toggler"> Övriga meriter</a></li>
							</ol
						</div>
					</fieldset>
				</div>
		</fieldset>
		</div>
		<div id="headerpersonuppgifter" class="underrubrik">		
		<fieldset>
			<legend class="heading"><h2>Personuppgifter</h2></legend>
			<a class="aright toggler heading plus" href="#Personuppgifter">[+]</a>
			<div id="personuppgifter" class="content">
				<hr />
				<table border="0" id="ptable" class="table-striped">
					<tbody>
					 <tr>
					    <td>Förnamn:</td>
					    <td>Christian</td>
					</tr>
					<tr>
					    <td>Efternamn:</td>
					    <td>Widlund</td>
					</tr>
					<tr>
					    <td>Telefon:</td>
					    <td><a href='callto:0702478607'>0702478607</a></td>
					</tr> 					<tr>
					    <td>Utdelningsadress:</td>
					    <td><address> Kristallvägen 174</address></td>
					</tr>    
					    <td>Postnummer:</td>
					    <td>126 79</td>
					<tr>
					    <td>Postort:</td>
					    <td>HÄGERTSTEN</td>
					</tr>
					<tr>
					    <td>Land:</td>
					    <td>Sverige</td>
					</tr>
					<tr>
					    <td>E-post adress:</td>
					    <td> <a href="mailto:christian.widlund@gmail.com">christian.widlund@gmail.com</a></td>
					</tr>
					<tr>
					    <td>Hemsida:</td>
					    <td><a href="http://hptftw.ath.cx/cv" target="_blank">http://hptftw.ath.cx/cv</a></td>
					</tr>
					<tr>
					    <td>LinkedIn:</td>
					    <td><a href="http://se.linkedin.com/pub/christian-widlund/47/860/484" target="_blank"style="text-decoration:none;"><span style="font: 80% Arial,sans-serif; color:#0783B6;"><img src="http://www.linkedin.com/img/webpromo/btn_in_20x15.png" width="20" height="15" alt="Visa Christian Widlunds profil på LinkedIn" style="vertical-align:middle" border="0">Visa Christian Widlunds profil</span></a></td>
					</tr>
					<tr>
					    <td>Facebook:</td>
					    <td><a href="http://facebook.com/chrillep" target="_blank" style="text-decoration:none;"><span style="font: 80% Arial,sans-serif; color:#0783B6;"><img src="https://s-static.ak.facebook.com/rsrc.php/yP/r/Ivn-CVe5TGK.ico" width="20" height="15" alt="Visa Christian Widlunds profil på Facebook" style="vertical-align:middle" border="0">Visa Christian Widlunds profil</span></a></td>					    
					</tr>
					<tr>
					    <td>Twitter:</td>
					    <td><a href="https://twitter.com/Chrillep" class="twitter-follow-button" data-show-count="false" data-lang="sv">Följ @Chrillep</a></td>
					</tr>

					</tbody>
				</table>
	        </div>
		</fieldset>
		</div>


		<div id="headerpresentation" class="underrubrik">			
		<fieldset>
			<legend class="heading"><h2>Presentation</h2> </legend><!--Det här är presentationen-->
				<a class="aright toggler heading plus" href="#Personuppgifter">[+]</a>

		<div id="presentation" class="content">
			<hr />
			<p>Jag heter <span class="namn">christian widlund</span> och bor sedan 7 år i Stockholm.
			Har precis avslutat min studier inom <a href="http://jenseneducation.se/JENSEN-yrkeshogskola/Utbildningar/Webbapplikationsutvecklare/">Webbapplikationsutveckling</a> på <a href="http://jenseneducation.se/">JENSEN education.</a>
			Har sedan en tidig ålder haft ett gediget intresse för teknik och datorer.
			Jag studerade därmed media med rörlig bild och ljud som fokus.
			På fritiden tog jag isär och plockade ihop datorer.
			Lärde mig snabbt att hantera mjuk samt hårdvara.
			Flyttade senare ner till Stockholm för att skaffa mig ett jobb.inte så snart så fick jag ett jobb hos ett rekryteringsföretag och genom det jobb på <abbr title="Stort dataföretag">DELL</abbr>.</p>
			<p>
			Jag fick i uppgift att lägga ordrar åt kommuner och landsting.
			Senare blev jag förflyttad till att ta hand om specialbeställningar av reservdelar och tillbehör via telefon och e-post.
			Eftersom som anställning var behovsbaserad sökte jag vidare och blev anställd på Citymail som brevbärare.
			Jobbade på och under somrarna vikarerade jag som <em>coach</em>.<br />
			Vilket innebar att jag översåg planering av dagen, ringde in vikarier och tilldelade anställda deras arbetsuppgifter.
			Innan jag slutade tog jag på mig uppgiften att med Citymails interna mjukvara planera om hela kontoret.
			Satt i två månader och planerade om utdelningsrutter och rutiner samt hjälpte till att planera möblering av hela lokalen.
			Anledningen till att jag slutade var att jag kände att jag behövde göra någonting annorlunda.
			Jag bestämde mig för att åka till sydamerika med en god vän.
			Väl Hemkommen tog jag snabbt ett krogjobb på söder.
			Under tiden sökte jag in på lite olika skolor för att antingen plugga foto eller webbprogramering.

			Jag kom in på webbapplikationsutvecklingsprogramet hos JENSEN education, under studietiden har jag praktiserat på <a href="www.mobillan.se">www.mobillan.se</a>, <a href="www.nettofinans.se">www.nettofinans.se</a> och <a href="www.vulkanmedia.se">www.vulkanmedia.se</a>  som jag varit med från start till sjösättning. Nu ser jag fram emot nya utmaningar.
			</p>
			</div>
		</fieldset>
		</div>

	
		<div id="headerutbildningar" class="underrubrik">			
		<fieldset>
			<legend class="heading"><h2>Utbildningar</h2></legend>
				<a class="aright toggler heading plus" href="#Personuppgifter">[+]</a>

			<div id="utbildningar" class="content">
			<hr />
				<ul>
					<li><h3>Jensen Education</h3></li>
			        <ul>
					<li>Utbildningsnivå: 	Eftergymnasial utbildning</li>
					<li>Inriktning: 	WEBBAPPLIKATIONSUTVECKLING</li>
					<li>Tidsperiod: 	Nu - December 2012</li>
					<li>Beskrivning: Studerade webben med inriktning på</li>		
					<li>php</li>
					<li>MySQL</li>
					<li>Javascript</li>	
					<li>CSS3</li>	
					<li>HTML5</li>		 
			        </ul>
					<li><h3>Lugnetgymnasiet</h3></li>
			        <ul>
					<li>Utbildningsnivå: 	Gymnasial utbildning</li>
					<li>Inriktning: 	Konst och media</li>
					<li>Tidsperiod: 	2000 - 2003</li>
					<li>Beskrivning: Studerade Rörlig bild</li>		
					<li>Ljud i alla dess mediala former</li>
					<li>Mediakunskap</li>
					<li>Filmkunskap</li>	
					<li>Retorik</li>			 
			        </ul>
				</ul>

            </div>
		</fieldset>
		</div>

	
		<div id="headeranstallningar" class="underrubrik">			
		<fieldset>
		<legend class="heading"><h2>Anställningar</h2></legend>
		<a class="aright toggler heading plus" href="#Personuppgifter">[+]</a>
			<div id="anstallningar" class="content">
			<hr />
				<ul>
					<li><h3>Praktik - Webbutvecklare</h3></li>
						<ul>
							<li class="unstyled"><h4><a href="http://www.vulkanmedia.se">Vulkanmedia.se</a></h4></li>

							<ul>
								<li>Tidsperiod:	2012-10-01 - 2012-12-07</li>
								<li>Beskrivning:	webbutveckling och kodning inom flera områden såsom</li>
									<ul>
										<li>PHP</li>
										<li>HTML, HTML5</li>
										<li>CSS</li>
										<li>Javascript</li>
										<li>SQL</li>
										<li>json och xml</li>
										<li>Wordpress, Teman och plugins</li>
										<li>Installation av NAS och därmed Linux</li>
										<li>Google Analytics och tillhörande verktyg</li>
									</ul>
							</ul>
							<li class="nej"><h4><a href="http://www.mobillan.se">Mobillan.se</a> / <a href="http://www.nettofinans.se">Nettofinans.se</a></h4></li>

							<ul>
							<li>Tidsperiod:	2012-03-01 - 2012-05-07</li>
								<li>Beskrivning:	webbutveckling och kodning inom flera områden såsom</li>
									<ul>
										<li>PHP</li>
										<li>HTML, HTML5</li>
										<li>CSS</li>
										<li>Javascript</li>
										<li>SQL</li>
										<li>json och xml</li>
										<li>Wordpress, Teman och plugins</li>
										<li>Google Analytics och tillhörande verktyg</li>
										<li>Flashanimationer</li>
									</ul>
							</ul>
						</ul>
					<li><h3>Städpersonal</h3></li>
						<ul>
							<li>Arbetsgivare:	Trafficare</li>
							<li>Tidsperiod:	2003-05-01 - 2003-08-01</li>
							<li>Beskrivning:	Städa tåg och hålla reda på station i Falun</li>
						</ul>

					<li><h3>Orderhandläggare</h3></li>
						<ul>
							<li>Arbetsgivare:	Kelly services // Dell</li>
							<li>Tidsperiod:	2004-01-01 - 2004-04-01</li>
							<li>Beskrivning:	Jobbade hos dell med att lägga ordrar åt företag. Jobbade senare med att beställa speficika delar åt kunder.</li>
						</ul>		 

					<li><h3>Cityman / Coach / Brevbärare</h3></li>
						<ul>
							<li>Arbetsgivare:	Bring citymail</li>
							<li>Tidsperiod:	2004-06-01 - 2010-10-30</li>
							<li>Beskrivning:	Jobbade som brevbärare. Under några somrar med att ta hand om planering för kontoret. Ladde innan jag slutade om alla rutter på hela kontoret och hjälpte till med planerande av möblering och dylikt</li>
						</ul>

					<li><h3>Nisse</h3></li>
						<ul>
							<li>Arbetsgivare:	Morfar Ginko & Pappa Ray Ray</li>
							<li>Tidsperiod:	2011 - 2011</li>
							<li>Beskrivning:	Jobbade som Nisse, Serverade mat, stod extra i baren, hjälpte till att fylla på i alla barer. Tog emot levereanser. I kort en alltiallo.</li>
						</ul>			 
				</ul>
					</div>
					</fieldset>
				</div>

		<div id="headerovriga" class="underrubrik">			
		<fieldset>
		<legend class="heading"><h2>Övriga meriter</h2></legend>
		<a class="aright toggler heading plus" href="#Personuppgifter">[+]</a>
			<div id="ovriga" class="content">
				<hr />
					<ul>
						<li><h3>Skyttesoldat</h3></li>
							<ul>
								<li>Anordnare:	Svenska militären</li>
								<li>Tidsperiod:	2003 - 2004</li>
								<li>Beskrivning:	Gjorde lumpen i 7,5 halv månad i Östersund på <a href="http://sv.wikipedia.org/wiki/J%C3%A4mtlands_f%C3%A4ltj%C3%A4garregemente">I5</a>. Har 10/8/8 i betyg och cerifikat i vinteröverlevnad</li>
							</ul>		 
					</ul>

		</fieldset>
	</div>
	</div>
	<div id="footer" class="aright">
		<footer>
			© <a href="mailto:christian.widlund@gmail.com">Christian Widlund</a> <?php echo date("Y"); echo " "; ?>
		</footer>
	</div><!--footer-->
</div>
</div>
	<script src="bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/less-1.3.1.min.js"></script>
    <script src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="js/js.js"></script>	
</body>
</html>