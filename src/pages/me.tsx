import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import type { NextPage } from 'next'
import Image from 'next/image'
import * as React from 'react'
import ProTip from '../components/ProTip'

const Me: NextPage = () => {
    const imageSize = 200
    const imageUrl = `https://www.gravatar.com/avatar/e6b67417d9fcae199d0eece60eaea9c0?s=${imageSize}`
    return (
        <Container id="wrapper" className="container" maxWidth="lg">
            <Box
                id="bgwrapper"
                sx={{
                    my: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box id="cv" className="rubrik">
                    <fieldset>
                        <legend>
                            <h1>Curriculum Vitae - Christian Widlund</h1>
                        </legend>

                        <Image
                            src={imageUrl}
                            title="Bild på mig"
                            alt="Bild på mig"
                            id="minbild"
                            className="minbild img-circle"
                            height={imageSize}
                            width={imageSize}
                        />
                        <Box id="index" className="index">
                            <fieldset>
                                <legend className="heading">
                                    <h2>Index</h2>
                                </legend>
                                <Box className="top">
                                    <hr />
                                    <ol>
                                        <li>
                                            <a
                                                href="#personuppgifter"
                                                className="toggler"
                                            >
                                                Personuppgifter
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#presentation"
                                                className="toggler"
                                            >
                                                Presentation
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#utbildningar"
                                                className="toggler"
                                            >
                                                Utbildningar
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#anstallningar"
                                                className="toggler"
                                            >
                                                Anställningar
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#ovriga"
                                                className="toggler"
                                            >
                                                {' '}
                                                Övriga meriter
                                            </a>
                                        </li>
                                    </ol>
                                </Box>
                            </fieldset>
                        </Box>
                    </fieldset>
                </Box>

                <Box id="headerpersonuppgifter" className="underrubrik">
                    <fieldset>
                        <legend className="heading">
                            <h2>Personuppgifter</h2>
                        </legend>
                        <a
                            className="aright toggler heading plus"
                            href="#Personuppgifter"
                        >
                            [+]
                        </a>
                        <Box id="personuppgifter" className="content">
                            <hr />
                            <table id="ptable" className="table-striped">
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
                                        <td>
                                            <a href="callto:0702478607">
                                                0702478607
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Utdelningsadress:</td>
                                        <td>
                                            <address>
                                                {' '}
                                                Kristallvägen 174
                                            </address>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Postnummer:</td>
                                        <td>126 79</td>
                                    </tr>
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
                                        <td>
                                            <a href="mailto:christian.widlund@gmail.com">
                                                christian.widlund@gmail.com
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hemsida:</td>
                                        <td>
                                            <a
                                                href="http://hptftw.ath.cx/cv"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                http://hptftw.ath.cx/cv
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LinkedIn:</td>
                                        <td>
                                            <a
                                                href="https://se.linkedin.com/pub/christian-widlund/47/860/484"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <Image
                                                    src="https://www.linkedin.com/img/webpromo/btn_in_20x15.png"
                                                    width="20"
                                                    height="15"
                                                    alt="Visa Christian Widlunds profil på LinkedIn"
                                                />
                                                Visa Christian Widlunds profil
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Facebook:</td>
                                        <td>
                                            <a
                                                href="https://facebook.com/chrillep"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <span>
                                                    <Image
                                                        src="https://s-static.ak.facebook.com/rsrc.php/yP/r/Ivn-CVe5TGK.ico"
                                                        width="20"
                                                        height="15"
                                                        alt="Visa Christian Widlunds profil på Facebook"
                                                    />
                                                    Visa Christian Widlunds
                                                    profil
                                                </span>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Twitter:</td>
                                        <td>
                                            <a
                                                href="https://twitter.com/Chrillep"
                                                className="twitter-follow-button"
                                                data-show-count="false"
                                                data-lang="sv"
                                            >
                                                Följ @Chrillep
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Box>
                    </fieldset>
                </Box>

                <Box id="headerpresentation" className="underrubrik">
                    <fieldset>
                        <legend className="heading">
                            <h2>Presentation</h2>
                        </legend>

                        <a
                            className="aright toggler heading plus"
                            href="#Personuppgifter"
                        >
                            [+]
                        </a>

                        <Box id="presentation" className="content">
                            <hr />
                            <p>
                                Jag heter{' '}
                                <span className="namn">christian widlund</span>{' '}
                                och bor sedan 7 år i Stockholm. Har precis
                                avslutat min studier inom{' '}
                                <a href="http://jenseneducation.se/JENSEN-yrkeshogskola/Utbildningar/Webbapplikationsutvecklare/">
                                    Webbapplikationsutveckling
                                </a>{' '}
                                på{' '}
                                <a href="http://jenseneducation.se/">
                                    JENSEN education.
                                </a>
                                Har sedan en tidig ålder haft ett gediget
                                intresse för teknik och datorer. Jag studerade
                                därmed media med rörlig bild och ljud som fokus.
                                På fritiden tog jag isär och plockade ihop
                                datorer. Lärde mig snabbt att hantera mjuk samt
                                hårdvara. Flyttade senare ner till Stockholm för
                                att skaffa mig ett jobb.inte så snart så fick
                                jag ett jobb hos ett rekryteringsföretag och
                                genom det jobb på{' '}
                                <abbr title="Stort dataföretag">DELL</abbr>.
                            </p>
                            <p>
                                Jag fick i uppgift att lägga ordrar åt kommuner
                                och landsting. Senare blev jag förflyttad till
                                att ta hand om specialbeställningar av
                                reservdelar och tillbehör via telefon och
                                e-post. Eftersom som anställning var
                                behovsbaserad sökte jag vidare och blev anställd
                                på Citymail som brevbärare. Jobbade på och under
                                somrarna vikarerade jag som <em>coach</em>.
                                <br />
                                Vilket innebar att jag översåg planering av
                                dagen, ringde in vikarier och tilldelade
                                anställda deras arbetsuppgifter. Innan jag
                                slutade tog jag på mig uppgiften att med
                                Citymails interna mjukvara planera om hela
                                kontoret. Satt i två månader och planerade om
                                utdelningsrutter och rutiner samt hjälpte till
                                att planera möblering av hela lokalen.
                                Anledningen till att jag slutade var att jag
                                kände att jag behövde göra någonting annorlunda.
                                Jag bestämde mig för att åka till sydamerika med
                                en god vän. Väl Hemkommen tog jag snabbt ett
                                krogjobb på söder. Under tiden sökte jag in på
                                lite olika skolor för att antingen plugga foto
                                eller webbprogramering. Jag kom in på
                                webbapplikationsutvecklingsprogramet hos JENSEN
                                education, under studietiden har jag praktiserat
                                på <a href="www.mobillan.se">www.mobillan.se</a>
                                ,{' '}
                                <a href="www.nettofinans.se">
                                    www.nettofinans.se
                                </a>{' '}
                                och{' '}
                                <a href="www.vulkanmedia.se">
                                    www.vulkanmedia.se
                                </a>{' '}
                                som jag varit med från start till sjösättning.
                                Nu ser jag fram emot nya utmaningar.
                            </p>
                        </Box>
                    </fieldset>
                </Box>

                <Box id="headerutbildningar" className="underrubrik">
                    <fieldset>
                        <legend className="heading">
                            <h2>Utbildningar</h2>
                        </legend>
                        <a
                            className="aright toggler heading plus"
                            href="#Personuppgifter"
                        >
                            [+]
                        </a>

                        <Box id="utbildningar" className="content">
                            <hr />
                            <ul>
                                <li>
                                    <h3>Jensen Education</h3>
                                </li>
                                <ul>
                                    <li>
                                        Utbildningsnivå: Eftergymnasial
                                        utbildning
                                    </li>
                                    <li>
                                        Inriktning: WEBBAPPLIKATIONSUTVECKLING
                                    </li>
                                    <li>Tidsperiod: Nu - December 2012</li>
                                    <li>
                                        Beskrivning: Studerade webben med
                                        inriktning på
                                    </li>
                                    <li>php</li>
                                    <li>MySQL</li>
                                    <li>Javascript</li>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                </ul>
                                <li>
                                    <h3>Lugnetgymnasiet</h3>
                                </li>
                                <ul>
                                    <li>
                                        Utbildningsnivå: Gymnasial utbildning
                                    </li>
                                    <li>Inriktning: Konst och media</li>
                                    <li>Tidsperiod: 2000 - 2003</li>
                                    <li>Beskrivning: Studerade Rörlig bild</li>
                                    <li>Ljud i alla dess mediala former</li>
                                    <li>Mediakunskap</li>
                                    <li>Filmkunskap</li>
                                    <li>Retorik</li>
                                </ul>
                            </ul>
                        </Box>
                    </fieldset>
                </Box>

                <Box id="headeranstallningar" className="underrubrik">
                    <fieldset>
                        <legend className="heading">
                            <h2>Anställningar</h2>
                        </legend>
                        <a
                            className="aright toggler heading plus"
                            href="#Personuppgifter"
                        >
                            [+]
                        </a>
                        <Box id="anstallningar" className="content">
                            <hr />
                            <ul>
                                <li>
                                    <h3>Praktik - Webbutvecklare</h3>
                                </li>
                                <ul>
                                    <li className="unstyled">
                                        <h4>
                                            <a href="http://www.vulkanmedia.se">
                                                Vulkanmedia.se
                                            </a>
                                        </h4>
                                    </li>

                                    <ul>
                                        <li>
                                            Tidsperiod: 2012-10-01 - 2012-12-07
                                        </li>
                                        <li>
                                            Beskrivning: webbutveckling och
                                            kodning inom flera områden såsom
                                        </li>
                                        <ul>
                                            <li>PHP</li>
                                            <li>HTML, HTML5</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>SQL</li>
                                            <li>json och xml</li>
                                            <li>
                                                Wordpress, Teman och plugins
                                            </li>
                                            <li>
                                                Installation av NAS och därmed
                                                Linux
                                            </li>
                                            <li>
                                                Google Analytics och tillhörande
                                                verktyg
                                            </li>
                                        </ul>
                                    </ul>
                                    <li className="nej">
                                        <h4>
                                            <a href="http://www.mobillan.se">
                                                Mobillan.se
                                            </a>{' '}
                                            /{' '}
                                            <a href="http://www.nettofinans.se">
                                                Nettofinans.se
                                            </a>
                                        </h4>
                                    </li>

                                    <ul>
                                        <li>
                                            Tidsperiod: 2012-03-01 - 2012-05-07
                                        </li>
                                        <li>
                                            Beskrivning: webbutveckling och
                                            kodning inom flera områden såsom
                                        </li>
                                        <ul>
                                            <li>PHP</li>
                                            <li>HTML, HTML5</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>SQL</li>
                                            <li>json och xml</li>
                                            <li>
                                                Wordpress, Teman och plugins
                                            </li>
                                            <li>
                                                Google Analytics och tillhörande
                                                verktyg
                                            </li>
                                            <li>Flashanimationer</li>
                                        </ul>
                                    </ul>
                                </ul>
                                <li>
                                    <h3>Städpersonal</h3>
                                </li>
                                <ul>
                                    <li>Arbetsgivare: Trafficare</li>
                                    <li>Tidsperiod: 2003-05-01 - 2003-08-01</li>
                                    <li>
                                        Beskrivning: Städa tåg och hålla reda på
                                        station i Falun
                                    </li>
                                </ul>

                                <li>
                                    <h3>Orderhandläggare</h3>
                                </li>
                                <ul>
                                    <li>
                                        Arbetsgivare: Kelly services // Dell
                                    </li>
                                    <li>Tidsperiod: 2004-01-01 - 2004-04-01</li>
                                    <li>
                                        Beskrivning: Jobbade hos dell med att
                                        lägga ordrar åt företag. Jobbade senare
                                        med att beställa speficika delar åt
                                        kunder.
                                    </li>
                                </ul>

                                <li>
                                    <h3>Cityman / Coach / Brevbärare</h3>
                                </li>
                                <ul>
                                    <li>Arbetsgivare: Bring citymail</li>
                                    <li>Tidsperiod: 2004-06-01 - 2010-10-30</li>
                                    <li>
                                        Beskrivning: Jobbade som brevbärare.
                                        Under några somrar med att ta hand om
                                        planering för kontoret. Ladde innan jag
                                        slutade om alla rutter på hela kontoret
                                        och hjälpte till med planerande av
                                        möblering och dylikt
                                    </li>
                                </ul>

                                <li>
                                    <h3>Nisse</h3>
                                </li>
                                <ul>
                                    <li>
                                        Arbetsgivare: Morfar Ginko & Pappa Ray
                                        Ray
                                    </li>
                                    <li>Tidsperiod: 2011 - 2011</li>
                                    <li>
                                        Beskrivning: Jobbade som Nisse,
                                        Serverade mat, stod extra i baren,
                                        hjälpte till att fylla på i alla barer.
                                        Tog emot levereanser. I kort en
                                        alltiallo.
                                    </li>
                                </ul>
                            </ul>
                        </Box>
                    </fieldset>
                </Box>

                <Box id="headerovriga" className="underrubrik">
                    <fieldset>
                        <legend className="heading">
                            <h2>Övriga meriter</h2>
                        </legend>
                        <a
                            className="aright toggler heading plus"
                            href="#Personuppgifter"
                        >
                            [+]
                        </a>
                        <Box id="ovriga" className="content">
                            <hr />
                            <ul>
                                <li>
                                    <h3>Skyttesoldat</h3>
                                </li>
                                <ul>
                                    <li>Anordnare: Svenska militären</li>
                                    <li>Tidsperiod: 2003 - 2004</li>
                                    <li>
                                        Beskrivning: Gjorde lumpen i 7,5 halv
                                        månad i Östersund på{' '}
                                        <a href="http://sv.wikipedia.org/wiki/J%C3%A4mtlands_f%C3%A4ltj%C3%A4garregemente">
                                            I5
                                        </a>
                                        . Har 10/8/8 i betyg och cerifikat i
                                        vinteröverlevnad
                                    </li>
                                </ul>
                            </ul>
                        </Box>
                    </fieldset>
                </Box>

                <ProTip />
            </Box>
        </Container>
    )
}

export default Me
