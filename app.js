(() => {
  const SUPPORTED = ["fr","en","nl","de","it","es","pl","ar","yue","ja"];

  const translations = {
    fr: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Fonctionnalités",
      navLanguages: "Langues",
      navScreens: "Captures",
      navLaunch: "Lancer l’app",
      langPromptTitle: "Choisissez votre langue",

      heroKicker: "City Loop Quest !!",
      heroTitle: "La visite touristique devient une aventure interactive.",
      heroSubtitle: "Plusieurs villes. Plusieurs parcours par ville. Guidage GPS. Quiz en chemin. Pages culturelles, chansons, musées, histoires… en 10 langues.",
      heroCta: "Voir les apps",
      heroInstallHelp: "Comment installer une app sur votre appareil",
      installVideoClose: "Fermer",

      pillCities: "Multi-villes",
      pillRoutes: "Parcours courts/longs",
      pillGps: "Guidage GPS",
      pillQuiz: "Quiz & scores",
      pillCulture: "Culture & médias",
      pill10: "10 langues",

      featuresTitle: "Tout ce qu’un touriste adore… au bon moment.",
      featuresSubtitle: "Une app pensée pour marcher, découvrir, jouer, apprendre — et ne jamais se perdre.",

      f1Title: "Guidage GPS intelligent",
      f1Text: "Itinéraire piéton réaliste, prochain point, distances, temps estimé, et navigation fluide.",
      f2Title: "Culture & lieux emblématiques",
      f2Text: "Monuments, musées, histoires, personnages célèbres, folklore, activités récurrentes…",
      f3Title: "Chansons & médias",
      f3Text: "Pages culturelles, contenus audio/vidéo, anecdotes et immersion locale.",
      f4Title: "Quiz pendant le parcours",
      f4Text: "Questions contextuelles, score, fun en famille, mode adulte/enfant possible.",
      f5Title: "Mobilité & transports",
      f5Text: "Accès rapide aux transports en commun, et accès direct à l’app Uber si installée.",
      f6Title: "Multi-villes, multi-parcours",
      f6Text: "Plusieurs circuits par ville : court, moyen, long — du “must-see” aux trésors cachés.",

      bannerTitle: "Belgique d’abord, international ensuite.",
      bannerText: "CityLoopQuest s’adapte aux grandes destinations touristiques : même expérience, contenus locaux uniques.",

      langTitle: "10 langues, accès direct.",
      langSubtitle: "Un visiteur choisit sa langue, et tout le contenu s’adapte instantanément.",

      screensTitle: "Captures d’écran",
      g1: "Guidage GPS vers le prochain point d'intérêt, menu, photo du prochain point, texte et audio descriptif",
      g2: "Description + histoire + médias",
      g3: "Page d'informations culturelles",
      g4: "Quiz ludique au choix tout au long du parcours avec score",
      g5: "Chansons traditionnelles, populaires et folkloriques",
      g6: "Personnalités et artistes locaux, leur histoire et réalisations",
      g7: "Liste des musées, description, informations et guidage GPS",
      g8: "Description des traditions et folklores locaux",
      g9: "Associations locales et folkloriques",
      g10: "Expressions en patois local",

      whyTitle: "Pourquoi CityLoopQuest ?",
      whyText: "Parce qu’un bon voyage, c’est le bon contenu au bon endroit. CityLoopQuest guide, raconte, amuse et simplifie — sans perdre le visiteur dans 12 apps différentes.",
      c1: "Parcours multi-niveaux (court/moyen/long)",
      c2: "Lieux emblématiques + trésors cachés",
      c3: "Personnages célèbres et récits locaux",
      c4: "Quiz contextuels pendant la balade",
      c5: "Accès rapide transports en commun",
      c6: "Interface fluide et attractive",

      quoteBadge: "Pour villes & partenaires",
      quoteText: "“Une base technique unique, et un contenu local qui fait la différence.”",

      launchTitle: "Commencez l’aventure et choisissez votre ville",
      launchSubtitle: "Cliquez… ou scannez le QR code avec votre mobile :",
      launchGpsWarning: "ATTENTION : LE GUIDAGE GPS EST TRES GOURMAND EN ENERGIE. PENSEZ A AVOIR UN PORTABLE A PLEINE CHARGE OU, MIEUX, UNE BATTERIE PORTABLE...",
      cityMons: "Mons",
      cityBrussels: "Bruxelles",
      continentEurope: "Europe",
      countryBelgium: "Belgique",
      countryFrance: "France",
      countrySpain: "Espagne",
      regionBrussels: "Bruxelles",
      regionWallonia: "Wallonie",
      regionFlanders: "Flandre",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nouvelle-Aquitaine",
      regionMurcia: "Murcia",
      regionValencia: "Communauté valencienne",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Carthagène",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Liège",
      cityLille: "Lille",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "QR provisoire (bientôt actif)",
      cityPendingHint: "En cours de développement",
      scanHint: "Scanner pour ouvrir",
      citySoonTitle: "Bientôt : Bruges / Gand / Anvers…",
      citySoonSub: "et bien d’autres",
      soonHint: "Bientôt disponible",

      footerText: "CityLoopQuest — Visites touristiques interactives multi-villes.",

      shotCaption1: "Parcours court, moyen ou long", 
      shotCaption2: "Guidage GPS, photo et descriptif texte et audio", 
      shotCaption3: "Pages culture", 
      shotCaption4: "Quiz ludique au choix", 
      shotCaption5: "Chansons folkloriques", 
      shotCaption6: "Personnalités et artistes", 
      shotCaption7: "Musées", 
      shotCaption8: "Folklore", 
      shotCaption9: "Associations et groupements", 
      shotCaption10: "Patois local",
    },

    en: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Features",
      navLanguages: "Languages",
      navScreens: "Screenshots",
      navLaunch: "Launch the app",
      langPromptTitle: "Choose your language",

      heroKicker: "City Loop Quest !!",
      heroTitle: "Sightseeing becomes an interactive adventure.",
      heroSubtitle: "Multiple cities. Multiple routes per city. GPS guidance. Quizzes on the way. Culture pages, songs, museums, stories… in 10 languages.",
      heroCta: "See the apps",
      heroInstallHelp: "How to install an app on your device",
      installVideoClose: "Close",

      pillCities: "Multi-city",
      pillRoutes: "Short/long routes",
      pillGps: "GPS guidance",
      pillQuiz: "Quizzes & score",
      pillCulture: "Culture & media",
      pill10: "10 languages",

      featuresTitle: "Everything tourists love… at the right moment.",
      featuresSubtitle: "Built for walking, discovering, playing, learning — without ever getting lost.",

      f1Title: "Smart GPS guidance",
      f1Text: "Realistic walking routes, next stop, distance, ETA, and smooth navigation.",
      f2Title: "Culture & iconic places",
      f2Text: "Landmarks, museums, stories, famous figures, local folklore, recurring events…",
      f3Title: "Songs & media",
      f3Text: "Culture pages, audio/video content, anecdotes and local immersion.",
      f4Title: "Quizzes during the walk",
      f4Text: "Contextual questions, score, family fun, adult/kid modes possible.",
      f5Title: "Mobility & transport",
      f5Text: "Quick access to public transport, plus direct access to the Uber app if installed.",
      f6Title: "Multi-city, multi-route",
      f6Text: "Several circuits per city: short, medium, long — from must-sees to hidden gems.",

      bannerTitle: "Belgium first, international next.",
      bannerText: "CityLoopQuest scales to top tourist destinations: same experience, unique local content.",

      langTitle: "10 languages, instant switching.",
      langSubtitle: "Visitors pick a language and everything updates instantly.",

      screensTitle: "Screenshots",
      g1: "Choose from 3 routes: short, medium, or long.",
      g2: "GPS guidance to the next point of interest, menu, photo of the next stop, descriptive text and audio.",
      g3: "Cultural information page",
      g4: "Optional fun quiz throughout the route, with a score.",
      g5: "Traditional, popular, and folk songs",
      g6: "Local personalities and artists, their stories and achievements",
      g7: "List of museums, descriptions, information, and GPS guidance",
      g8: "Description of local traditions and folklore",
      g9: "Local and folk associations",
      g10: "Expressions in the local dialect",

      whyTitle: "Why CityLoopQuest?",
      whyText: "Because great trips are about the right content at the right place. CityLoopQuest guides, tells stories, entertains and simplifies — without forcing tourists into 12 different apps.",
      c1: "Multi-level routes (short/medium/long)",
      c2: "Iconic places + hidden gems",
      c3: "Famous figures and local stories",
      c4: "Contextual quizzes during the walk",
      c5: "Quick access to public transport",
      c6: "Smooth, attractive UI",

      quoteBadge: "For cities & partners",
      quoteText: "“One solid platform — local content that truly stands out.”",

      launchTitle: "Start the adventure — choose your city",
      launchSubtitle: "Click… or scan the QR code with your phone:",
      launchGpsWarning: "WARNING: GPS navigation is very power-hungry. Make sure your phone is fully charged — or better yet, bring a power bank...",
      cityMons: "Mons",
      cityBrussels: "Brussels",
      continentEurope: "Europe",
      countryBelgium: "Belgium",
      countryFrance: "France",
      countrySpain: "Spain",
      regionBrussels: "Brussels",
      regionWallonia: "Wallonia",
      regionFlanders: "Flanders",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nouvelle-Aquitaine",
      regionMurcia: "Murcia",
      regionValencia: "Valencian Community",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Cartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Liège",
      cityLille: "Lille",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "Placeholder QR (coming soon)",
      cityPendingHint: "In development",
      scanHint: "Scan to open",
      citySoonTitle: "Coming soon: Bruges / Ghent / Antwerp…",
      citySoonSub: "and many more",
      soonHint: "Coming soon",

      footerText: "CityLoopQuest — Multi-city interactive tours.",

      shotCaption1: "Short, medium or long route",
shotCaption2: "GPS guidance, photo, and descriptive text and audio",
shotCaption3: "Cultural pages",
shotCaption4: "Optional fun quiz",
shotCaption5: "Folk songs",
shotCaption6: "Local personalities and artists",
shotCaption7: "Museums",
shotCaption8: "Folklore",
shotCaption9: "Associations and groups",
shotCaption10: "Local dialect",

    },

    nl: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Functies",
      navLanguages: "Talen",
      navScreens: "Screenshots",
      navLaunch: "App starten",
      langPromptTitle: "Kies je taal",

      heroKicker: "City Loop Quest !!",
      heroTitle: "Stadsbezoek wordt een interactieve belevenis.",
      heroSubtitle: "Meerdere steden. Meerdere routes per stad. GPS-begeleiding. Quiz onderweg. Cultuurpagina’s, liedjes, musea, verhalen… in 10 talen.",
      heroCta: "Bekijk de apps",
      heroInstallHelp: "Een app installeren op je apparaat",
      installVideoClose: "Sluiten",

      pillCities: "Multi-stad",
      pillRoutes: "Korte/lange routes",
      pillGps: "GPS-begeleiding",
      pillQuiz: "Quiz & score",
      pillCulture: "Cultuur & media",
      pill10: "10 talen",

      featuresTitle: "Alles wat toeristen graag hebben… op het juiste moment.",
      featuresSubtitle: "Gemaakt om te wandelen, te ontdekken, te spelen en te leren — zonder te verdwalen.",

      f1Title: "Slimme GPS-begeleiding",
      f1Text: "Realistische wandelroutes, volgend punt, afstand, ETA en vlotte navigatie.",
      f2Title: "Cultuur & iconische plekken",
      f2Text: "Monumenten, musea, verhalen, bekende personen, folklore, terugkerende activiteiten…",
      f3Title: "Liedjes & media",
      f3Text: "Cultuurpagina’s, audio/video, anekdotes en lokale sfeer.",
      f4Title: "Quiz tijdens de route",
      f4Text: "Contextvragen, score, fun voor gezinnen, eventueel volwassenen/kinderen.",
      f5Title: "Mobiliteit & vervoer",
      f5Text: "Snelle toegang tot openbaar vervoer, plus directe toegang tot Uber als die app is geïnstalleerd.",
      f6Title: "Multi-stad, multi-route",
      f6Text: "Meerdere circuits per stad: kort, medium, lang — van must-sees tot verborgen parels.",

      bannerTitle: "Eerst België, daarna internationaal.",
      bannerText: "CityLoopQuest groeit mee met toeristische topbestemmingen: dezelfde basis, unieke lokale inhoud.",

      langTitle: "10 talen, direct.",
      langSubtitle: "Bezoekers kiezen een taal en alles past zich meteen aan.",

      screensTitle: "Screenshots",
      g1: "Kies uit 3 routes: kort, gemiddeld of lang.",
      g2: "GPS-navigatie naar het volgende bezienswaardigheidspunt, menu, foto van het volgende punt, beschrijvende tekst en audio.",
      g3: "Pagina met culturele informatie",
      g4: "Optionele leuke quiz onderweg, met score.",
      g5: "Traditionele, populaire en folkloristische liederen",
      g6: "Lokale persoonlijkheden en kunstenaars, hun verhaal en prestaties",
      g7: "Lijst van musea, beschrijving, informatie en GPS-navigatie",
      g8: "Beschrijving van lokale tradities en folklore",
      g9: "Lokale en folkloristische verenigingen",
      g10: "Uitdrukkingen in het lokale dialect",

      whyTitle: "Waarom CityLoopQuest?",
      whyText: "Omdat een goede trip het juiste verhaal op de juiste plek is. CityLoopQuest gidst, vertelt, amuseert en vereenvoudigt — zonder 12 apps.",
      c1: "Routes op niveau (kort/middel/lang)",
      c2: "Iconisch + verborgen parels",
      c3: "Bekende personen en lokale verhalen",
      c4: "Contextuele quiz onderweg",
      c5: "Snelle link naar openbaar vervoer",
      c6: "Vlotte en aantrekkelijke interface",

      quoteBadge: "Voor steden & partners",
      quoteText: "“Eén sterke basis — lokale inhoud die het verschil maakt.”",

      launchTitle: "Start het avontuur — kies je stad",
      launchSubtitle: "Klik… of scan de QR-code met je telefoon:",
      launchGpsWarning: "WAARSCHUWING: GPS-navigatie verbruikt veel energie. Zorg dat je telefoon volledig opgeladen is, of neem (nog beter) een powerbank mee...",
      cityMons: "Mons",
      cityBrussels: "Brussel",
      continentEurope: "Europa",
      countryBelgium: "België",
      countryFrance: "Frankrijk",
      countrySpain: "Spanje",
      regionBrussels: "Brussel",
      regionWallonia: "Wallonië",
      regionFlanders: "Vlaanderen",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nouvelle-Aquitaine",
      regionMurcia: "Murcia",
      regionValencia: "Valenciaanse Gemeenschap",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Cartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Luik",
      cityLille: "Rijsel",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "Voorlopige QR (binnenkort actief)",
      cityPendingHint: "In ontwikkeling",
      scanHint: "Scan om te openen",
      citySoonTitle: "Binnenkort: Brugge / Gent / Antwerpen…",
      citySoonSub: "en nog veel meer",
      soonHint: "Binnenkort",

      footerText: "CityLoopQuest — Interactieve tours voor meerdere steden.",

      shotCaption1: "Korte, middelgrote of lange route",
shotCaption2: "GPS-navigatie, foto en beschrijvende tekst en audio",
shotCaption3: "Culturele pagina’s",
shotCaption4: "Optionele leuke quiz",
shotCaption5: "Folkloristische liederen",
shotCaption6: "Lokale persoonlijkheden en kunstenaars",
shotCaption7: "Musea",
shotCaption8: "Folklore",
shotCaption9: "Verenigingen en groeperingen",
shotCaption10: "Lokaal dialect",

    },

    de: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Funktionen",
      navLanguages: "Sprachen",
      navScreens: "Screenshots",
      navLaunch: "App starten",
      langPromptTitle: "Wählen Sie Ihre Sprache",

      heroKicker: "City Loop Quest !!",
      heroTitle: "Sightseeing wird zum interaktiven Abenteuer.",
      heroSubtitle: "Mehrere Städte. Mehrere Routen pro Stadt. GPS-Navigation. Quiz unterwegs. Kulturseiten, Lieder, Museen, Geschichten… in 10 Sprachen.",
      heroCta: "Apps ansehen",
      heroInstallHelp: "So installieren Sie eine App auf Ihrem Gerät",
      installVideoClose: "Schließen",

      pillCities: "Mehrere Städte",
      pillRoutes: "Kurze/lange Routen",
      pillGps: "GPS-Navigation",
      pillQuiz: "Quiz & Punkte",
      pillCulture: "Kultur & Medien",
      pill10: "10 Sprachen",

      featuresTitle: "Alles, was Touristen lieben… zur richtigen Zeit.",
      featuresSubtitle: "Gemacht zum Spazieren, Entdecken, Spielen und Lernen — ohne sich zu verlaufen.",

      f1Title: "Intelligente GPS-Navigation",
      f1Text: "Realistische Fußwege, nächster Stopp, Distanz, ETA und flüssige Navigation.",
      f2Title: "Kultur & ikonische Orte",
      f2Text: "Sehenswürdigkeiten, Museen, Geschichten, berühmte Persönlichkeiten, Folklore, Events…",
      f3Title: "Lieder & Medien",
      f3Text: "Kulturseiten, Audio/Video, Anekdoten und lokale Atmosphäre.",
      f4Title: "Quiz während der Route",
      f4Text: "Kontextfragen, Score, Familienspaß, optional Kinder/Erwachsene.",
      f5Title: "Mobilität & Verkehr",
      f5Text: "Schneller Zugriff auf ÖPNV sowie direkter Zugriff auf Uber (falls installiert).",
      f6Title: "Mehrere Städte, mehrere Routen",
      f6Text: "Mehrere Rundgänge pro Stadt: kurz, mittel, lang — von Must-Sees bis Geheimtipps.",

      bannerTitle: "Zuerst Belgien, dann international.",
      bannerText: "CityLoopQuest skaliert für Top-Destinationen: gleiche Plattform, einzigartiger lokaler Inhalt.",

      langTitle: "10 Sprachen, sofort.",
      langSubtitle: "Besucher wählen eine Sprache — alles passt sich sofort an.",

      screensTitle: "Screenshots",
      g1: "Wählen Sie aus 3 Routen: kurz, mittel oder lang.",
      g2: "GPS-Navigation zum nächsten Point of Interest, Menü, Foto des nächsten Punkts, Beschreibungstext und Audio.",
      g3: "Seite mit kulturellen Informationen",
      g4: "Optionales Quiz zum Mitmachen entlang der Route, mit Punktestand.",
      g5: "Traditionelle, populäre und folkloristische Lieder",
      g6: "Lokale Persönlichkeiten und Künstler, ihre Geschichte und Leistungen",
      g7: "Liste der Museen, Beschreibung, Informationen und GPS-Navigation",
      g8: "Beschreibung lokaler Traditionen und Folklore",
      g9: "Lokale und folkloristische Vereine",
      g10: "Ausdrücke im lokalen Dialekt",

      whyTitle: "Warum CityLoopQuest?",
      whyText: "Weil gute Reisen die richtigen Geschichten am richtigen Ort sind. CityLoopQuest führt, erzählt, unterhält und vereinfacht — ohne 12 Apps.",
      c1: "Routen (kurz/mittel/lang)",
      c2: "Ikonisch + Geheimtipps",
      c3: "Berühmte Personen & lokale Stories",
      c4: "Kontext-Quiz unterwegs",
      c5: "Schneller ÖPNV-Zugriff",
      c6: "Flüssige, attraktive UI",

      quoteBadge: "Für Städte & Partner",
      quoteText: "„Eine starke Basis — lokaler Content, der den Unterschied macht.“",

      launchTitle: "Starte das Abenteuer — wähle deine Stadt",
      launchSubtitle: "Klicken… oder QR-Code mit dem Handy scannen:",
      launchGpsWarning: "WARNUNG: GPS-Navigation ist sehr stromhungrig. Denk daran, ein voll geladenes Handy dabei zu haben, oder besser noch: eine Powerbank...",
      cityMons: "Mons",
      cityBrussels: "Brüssel",
      continentEurope: "Europa",
      countryBelgium: "Belgien",
      countryFrance: "Frankreich",
      countrySpain: "Spanien",
      regionBrussels: "Brüssel",
      regionWallonia: "Wallonien",
      regionFlanders: "Flandern",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nouvelle-Aquitaine",
      regionMurcia: "Murcia",
      regionValencia: "Valencianische Gemeinschaft",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Cartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Lüttich",
      cityLille: "Lille",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "Vorläufiger QR (bald aktiv)",
      cityPendingHint: "In Entwicklung",
      scanHint: "Scannen zum Öffnen",
      citySoonTitle: "Demnächst: Brügge / Gent / Antwerpen…",
      citySoonSub: "und vieles mehr",
      soonHint: "Demnächst",

      footerText: "CityLoopQuest — Interaktive Touren für mehrere Städte.",

      shotCaption1: "Kurze, mittlere oder lange Route",
shotCaption2: "GPS-Navigation, Foto sowie Beschreibungstext und Audio",
shotCaption3: "Kulturseiten",
shotCaption4: "Optionales Quiz zum Mitmachen",
shotCaption5: "Folkloristische Lieder",
shotCaption6: "Lokale Persönlichkeiten und Künstler",
shotCaption7: "Museen",
shotCaption8: "Folklore",
shotCaption9: "Vereine und Gruppen",
shotCaption10: "Lokaler Dialekt",

    },

    it: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Funzioni",
      navLanguages: "Lingue",
      navScreens: "Screenshot",
      navLaunch: "Avvia l’app",
      langPromptTitle: "Scegli la lingua",

      heroKicker: "City Loop Quest !!",
      heroTitle: "La visita diventa un’avventura interattiva.",
      heroSubtitle: "Più città. Più percorsi per città. Guida GPS. Quiz lungo il tragitto. Pagine culturali, canzoni, musei, storie… in 10 lingue.",
      heroCta: "Vedi le app",
      heroInstallHelp: "Come installare un’app sul dispositivo",
      installVideoClose: "Chiudi",

      pillCities: "Multi-città",
      pillRoutes: "Percorsi brevi/lunghi",
      pillGps: "Guida GPS",
      pillQuiz: "Quiz & punteggio",
      pillCulture: "Cultura & media",
      pill10: "10 lingue",

      featuresTitle: "Tutto ciò che un turista ama… al momento giusto.",
      featuresSubtitle: "Pensata per camminare, scoprire, giocare, imparare — senza perdersi.",

      f1Title: "Guida GPS intelligente",
      f1Text: "Percorsi pedonali realistici, prossima tappa, distanza, ETA e navigazione fluida.",
      f2Title: "Cultura & luoghi iconici",
      f2Text: "Monumenti, musei, storie, personaggi famosi, folklore, attività ricorrenti…",
      f3Title: "Canzoni & media",
      f3Text: "Pagine culturali, audio/video, aneddoti e immersione locale.",
      f4Title: "Quiz durante il percorso",
      f4Text: "Domande contestuali, punteggio, divertimento in famiglia, modalità adulti/bimbi.",
      f5Title: "Mobilità & trasporti",
      f5Text: "Accesso rapido ai mezzi pubblici e accesso diretto a Uber se installata.",
      f6Title: "Multi-città, multi-percorsi",
      f6Text: "Diversi itinerari per città: corto, medio, lungo — dai must-see ai tesori nascosti.",

      bannerTitle: "Prima Belgio, poi internazionale.",
      bannerText: "CityLoopQuest si adatta alle grandi destinazioni: stessa base, contenuti locali unici.",

      langTitle: "10 lingue, subito.",
      langSubtitle: "Il visitatore sceglie la lingua e tutto si aggiorna subito.",

      screensTitle: "Screenshot",
      g1: "Scegli tra 3 percorsi: corto, medio o lungo.",
      g2: "Guida GPS verso il prossimo punto di interesse, menu, foto della prossima tappa, testo descrittivo e audio.",
      g3: "Pagina di informazioni culturali",
      g4: "Quiz divertente opzionale lungo il percorso, con punteggio.",
      g5: "Canzoni tradizionali, popolari e folkloristiche",
      g6: "Personalità e artisti locali, la loro storia e le loro realizzazioni",
      g7: "Elenco dei musei, descrizione, informazioni e guida GPS",
      g8: "Descrizione delle tradizioni e del folklore locali",
      g9: "Associazioni locali e folcloristiche",
      g10: "Espressioni nel dialetto locale",

      whyTitle: "Perché CityLoopQuest?",
      whyText: "Perché un buon viaggio è il contenuto giusto nel posto giusto. CityLoopQuest guida, racconta, intrattiene e semplifica — senza 12 app diverse.",
      c1: "Percorsi (corto/medio/lungo)",
      c2: "Iconico + tesori nascosti",
      c3: "Personaggi famosi e storie locali",
      c4: "Quiz contestuali durante la passeggiata",
      c5: "Link rapido ai trasporti pubblici",
      c6: "Interfaccia fluida e attraente",

      quoteBadge: "Per città & partner",
      quoteText: "“Un’unica base solida — contenuti locali che fanno la differenza.”",

      launchTitle: "Inizia l’avventura — scegli la tua città",
      launchSubtitle: "Clicca… oppure scansiona il QR con il telefono:",
      launchGpsWarning: "ATTENZIONE: la navigazione GPS consuma molta batteria. Assicurati di avere il telefono carico — oppure meglio ancora: una power bank...",
      cityMons: "Mons",
      cityBrussels: "Bruxelles",
      continentEurope: "Europa",
      countryBelgium: "Belgio",
      countryFrance: "Francia",
      countrySpain: "Spagna",
      regionBrussels: "Bruxelles",
      regionWallonia: "Vallonia",
      regionFlanders: "Fiandre",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nuova Aquitania",
      regionMurcia: "Murcia",
      regionValencia: "Comunità Valenciana",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Cartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Liegi",
      cityLille: "Lilla",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "QR provvisorio (presto attivo)",
      cityPendingHint: "In sviluppo",
      scanHint: "Scansiona per aprire",
      citySoonTitle: "In arrivo: Bruges / Gand / Anversa…",
      citySoonSub: "e molto altro",
      soonHint: "In arrivo",

      footerText: "CityLoopQuest — Tour interattivi multi-città.",

      shotCaption1: "Percorso corto, medio o lungo",
shotCaption2: "Guida GPS, foto e descrizione testuale e audio",
shotCaption3: "Pagine culturali",
shotCaption4: "Quiz divertente opzionale",
shotCaption5: "Canzoni folkloristiche",
shotCaption6: "Personalità e artisti locali",
shotCaption7: "Musei",
shotCaption8: "Folclore",
shotCaption9: "Associazioni e gruppi",
shotCaption10: "Dialetto locale",

    },

    es: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Funciones",
      navLanguages: "Idiomas",
      navScreens: "Capturas",
      navLaunch: "Abrir la app",
      langPromptTitle: "Elige tu idioma",

      heroKicker: "City Loop Quest !!",
      heroTitle: "El turismo se vuelve una aventura interactiva.",
      heroSubtitle: "Varias ciudades. Varios recorridos por ciudad. Guía GPS. Quiz en el camino. Páginas culturales, canciones, museos, historias… en 10 idiomas.",
      heroCta: "Ver las apps",
      heroInstallHelp: "Cómo instalar una app en tu dispositivo",
      installVideoClose: "Cerrar",

      pillCities: "Multi-ciudad",
      pillRoutes: "Rutas cortas/largas",
      pillGps: "Guía GPS",
      pillQuiz: "Quiz & puntuación",
      pillCulture: "Cultura & media",
      pill10: "10 idiomas",

      featuresTitle: "Todo lo que un turista ama… en el momento justo.",
      featuresSubtitle: "Pensada para caminar, descubrir, jugar y aprender — sin perderse.",

      f1Title: "Guía GPS inteligente",
      f1Text: "Rutas a pie realistas, siguiente punto, distancia, ETA y navegación fluida.",
      f2Title: "Cultura y lugares emblemáticos",
      f2Text: "Monumentos, museos, historias, personajes famosos, folclore, actividades recurrentes…",
      f3Title: "Canciones y medios",
      f3Text: "Páginas culturales, audio/vídeo, anécdotas e inmersión local.",
      f4Title: "Quiz durante la ruta",
      f4Text: "Preguntas contextuales, puntuación, diversión en familia, modo adulto/niño.",
      f5Title: "Movilidad y transporte",
      f5Text: "Acceso rápido al transporte público y acceso directo a Uber si está instalada.",
      f6Title: "Multi-ciudad, multi-rutas",
      f6Text: "Varios circuitos por ciudad: corto, medio, largo — de imprescindibles a joyas ocultas.",

      bannerTitle: "Bélgica primero, internacional después.",
      bannerText: "CityLoopQuest se adapta a grandes destinos: misma base, contenido local único.",

      langTitle: "10 idiomas, al instante.",
      langSubtitle: "El visitante elige el idioma y todo se adapta al instante.",

      screensTitle: "Capturas",
      g1: "Elige entre 3 recorridos: corto, medio o largo.",
      g2: "Guía GPS hacia el siguiente punto de interés, menú, foto del siguiente punto, texto descriptivo y audio.",
      g3: "Página de información cultural",
      g4: "Quiz divertido opcional durante el recorrido, con puntuación.",
      g5: "Canciones tradicionales, populares y folklóricas",
      g6: "Personalidades y artistas locales, su historia y logros",
      g7: "Lista de museos, descripción, información y guía GPS",
      g8: "Descripción de las tradiciones y el folclore locales",
      g9: "Asociaciones locales y folklóricas",
      g10: "Expresiones en el dialecto local",

      whyTitle: "¿Por qué CityLoopQuest?",
      whyText: "Porque un buen viaje es el contenido correcto en el lugar correcto. CityLoopQuest guía, cuenta historias, entretiene y simplifica — sin 12 apps distintas.",
      c1: "Rutas (corta/media/larga)",
      c2: "Emblemático + joyas ocultas",
      c3: "Personajes famosos e historias locales",
      c4: "Quiz contextuales durante el paseo",
      c5: "Acceso rápido al transporte público",
      c6: "Interfaz fluida y atractiva",

      quoteBadge: "Para ciudades y partners",
      quoteText: "“Una base sólida — contenido local que marca la diferencia.”",

      launchTitle: "Empieza la aventura — elige tu ciudad",
      launchSubtitle: "Haz clic… o escanea el QR con tu móvil:",
      launchGpsWarning: "ADVERTENCIA: la navegación GPS consume mucha batería. Asegúrate de tener el móvil con la carga completa o, mejor aún, una batería externa...",
      cityMons: "Mons",
      cityBrussels: "Bruselas",
      continentEurope: "Europa",
      countryBelgium: "Bélgica",
      countryFrance: "Francia",
      countrySpain: "España",
      regionBrussels: "Bruselas",
      regionWallonia: "Valonia",
      regionFlanders: "Flandes",
      regionHautsDeFrance: "Alta Francia",
      regionNouvelleAquitaine: "Nueva Aquitania",
      regionMurcia: "Murcia",
      regionValencia: "Comunidad Valenciana",
      cityMurcia: "Murcia",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Cartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Lieja",
      cityLille: "Lille",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "QR provisional (próximamente activo)",
      cityPendingHint: "En desarrollo",
      scanHint: "Escanear para abrir",
      citySoonTitle: "Próximamente: Brujas / Gante / Amberes…",
      citySoonSub: "y mucho más",
      soonHint: "Próximamente",

      footerText: "CityLoopQuest — Tours interactivos multi-ciudad.",

      shotCaption1: "Recorrido corto, medio o largo",
shotCaption2: "Guía GPS, foto y descripción en texto y audio",
shotCaption3: "Páginas culturales",
shotCaption4: "Quiz divertido opcional",
shotCaption5: "Canciones folklóricas",
shotCaption6: "Personalidades y artistas locales",
shotCaption7: "Museos",
shotCaption8: "Folclore",
shotCaption9: "Asociaciones y grupos",
shotCaption10: "Dialecto local",

    },

    pl: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "Funkcje",
      navLanguages: "Języki",
      navScreens: "Zrzuty",
      navLaunch: "Uruchom aplikację",
      langPromptTitle: "Wybierz język",

      heroKicker: "City Loop Quest !!",
      heroTitle: "Zwiedzanie staje się interaktywną przygodą.",
      heroSubtitle: "Wiele miast. Wiele tras w mieście. Nawigacja GPS. Quizy po drodze. Strony kulturalne, piosenki, muzea, historie… w 10 językach.",
      heroCta: "Zobacz aplikacje",
      heroInstallHelp: "Jak zainstalować aplikację na swoim urządzeniu",
      installVideoClose: "Zamknij",

      pillCities: "Wiele miast",
      pillRoutes: "Trasy krótkie/długie",
      pillGps: "GPS",
      pillQuiz: "Quizy i wynik",
      pillCulture: "Kultura i media",
      pill10: "10 języków",

      featuresTitle: "Wszystko, co lubią turyści… we właściwym momencie.",
      featuresSubtitle: "Do spacerów, odkrywania, zabawy i nauki — bez gubienia się.",

      f1Title: "Inteligentna nawigacja GPS",
      f1Text: "Realistyczne trasy piesze, kolejny punkt, dystans, ETA i płynna nawigacja.",
      f2Title: "Kultura i miejsca ikoniczne",
      f2Text: "Zabytki, muzea, historie, słynne postacie, folklor, cykliczne wydarzenia…",
      f3Title: "Piosenki i media",
      f3Text: "Strony kulturalne, audio/wideo, ciekawostki i lokalny klimat.",
      f4Title: "Quiz podczas trasy",
      f4Text: "Pytania kontekstowe, wynik, zabawa dla rodziny, tryb dorosły/dziecko.",
      f5Title: "Mobilność i transport",
      f5Text: "Szybki dostęp do transportu publicznego oraz bezpośredni dostęp do Ubera (jeśli zainstalowany).",
      f6Title: "Wiele miast, wiele tras",
      f6Text: "Kilka tras na miasto: krótka, średnia, długa — od must-see po ukryte perełki.",

      bannerTitle: "Najpierw Belgia, potem świat.",
      bannerText: "CityLoopQuest skaluje się na topowe destynacje: ta sama baza, unikalne treści lokalne.",

      langTitle: "10 języków, od razu.",
      langSubtitle: "Turysta wybiera język, a wszystko aktualizuje się natychmiast.",

      screensTitle: "Zrzuty ekranu",
      g1: "Wybierz spośród 3 tras: krótką, średnią lub długą.",
      g2: "Nawigacja GPS do następnego punktu zainteresowania, menu, zdjęcie następnego punktu, opisowy tekst i audio.",
      g3: "Strona z informacjami kulturalnymi",
      g4: "Opcjonalny, zabawny quiz w trakcie trasy, z wynikiem.",
      g5: "Pieśni tradycyjne, popularne i folklorystyczne",
      g6: "Lokalne osobistości i artyści, ich historia i osiągnięcia",
      g7: "Lista muzeów, opisy, informacje i nawigacja GPS",
      g8: "Opis lokalnych tradycji i folkloru",
      g9: "Lokalne i folklorystyczne stowarzyszenia",
      g10: "Wyrażenia w lokalnej gwarze",

      whyTitle: "Dlaczego CityLoopQuest?",
      whyText: "Bo dobra podróż to właściwe treści we właściwym miejscu. CityLoopQuest prowadzi, opowiada, bawi i upraszcza — bez 12 aplikacji.",
      c1: "Trasy (krótka/średnia/długa)",
      c2: "Ikoniczne miejsca + ukryte perełki",
      c3: "Słynne postacie i lokalne historie",
      c4: "Quizy kontekstowe podczas spaceru",
      c5: "Szybki dostęp do transportu",
      c6: "Płynny i atrakcyjny interfejs",

      quoteBadge: "Dla miast i partnerów",
      quoteText: "„Jedna solidna baza — lokalne treści robią różnicę.”",

      launchTitle: "Zacznij przygodę — wybierz miasto",
      launchSubtitle: "Kliknij… albo zeskanuj kod QR telefonem:",
      launchGpsWarning: "UWAGA: nawigacja GPS zużywa dużo energii. Pamiętaj, aby mieć w pełni naładowany telefon albo, jeszcze lepiej, power bank...",
      cityMons: "Mons",
      cityBrussels: "Bruksela",
      continentEurope: "Europa",
      countryBelgium: "Belgia",
      countryFrance: "Francja",
      countrySpain: "Hiszpania",
      regionBrussels: "Bruksela",
      regionWallonia: "Walonia",
      regionFlanders: "Flandria",
      regionHautsDeFrance: "Hauts-de-France",
      regionNouvelleAquitaine: "Nowa Akwitania",
      regionMurcia: "Murcja",
      regionValencia: "Wspólnota Walencka",
      cityMurcia: "Murcja",
      cityAlicante: "Alicante",
      cityLorca: "Lorca",
      cityCarthagena: "Kartagena",
      cityCaravaca: "Caravaca de la Cruz",
      cityLiege: "Liège",
      cityLille: "Lille",
      cityMimizan: "Mimizan",
      cityAguilas: "Águilas",
      cityCehegin: "Cehegín",
      cityCieza: "Cieza",
      cityMazarron: "Mazarrón",
      fakeQrHint: "Tymczasowy QR (wkrótce aktywny)",
      cityPendingHint: "W trakcie rozwoju",
      scanHint: "Zeskanuj, aby otworzyć",
      citySoonTitle: "Wkrótce: Brugia / Gandawa / Antwerpia…",
      citySoonSub: "i wiele więcej",
      soonHint: "Wkrótce",

      footerText: "CityLoopQuest — Interaktywne wycieczki multi-city.",

      shotCaption1: "Trasa krótka, średnia lub długa",
shotCaption2: "Nawigacja GPS, zdjęcie oraz opis w tekście i audio",
shotCaption3: "Strony kulturalne",
shotCaption4: "Opcjonalny, zabawny quiz",
shotCaption5: "Pieśni folklorystyczne",
shotCaption6: "Lokalne osobistości i artyści",
shotCaption7: "Muzea",
shotCaption8: "Folklor",
shotCaption9: "Stowarzyszenia i grupy",
shotCaption10: "Lokalna gwara",

    },

    ar: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "الميزات",
      navLanguages: "اللغات",
      navScreens: "الصور",
      navLaunch: "تشغيل التطبيق",
      langPromptTitle: "اختر لغتك",

      heroKicker: "City Loop Quest !!",
      heroTitle: "الزيارة السياحية تصبح مغامرة تفاعلية.",
      heroSubtitle: "مدن متعددة. مسارات متعددة لكل مدينة. إرشاد GPS. أسئلة ممتعة أثناء الطريق. صفحات ثقافية، أغانٍ، متاحف، قصص… بـ10 لغات.",
      heroCta: "اعرض التطبيقات",
      heroInstallHelp: "كيفية تثبيت تطبيق على جهازك",
      installVideoClose: "إغلاق",

      pillCities: "مدن متعددة",
      pillRoutes: "مسارات قصيرة/طويلة",
      pillGps: "إرشاد GPS",
      pillQuiz: "اختبارات ونقاط",
      pillCulture: "ثقافة ووسائط",
      pill10: "10 لغات",

      featuresTitle: "كل ما يحبه السائح… في الوقت المناسب.",
      featuresSubtitle: "مصمم للمشي والاكتشاف واللعب والتعلم — دون أن تضيع.",

      f1Title: "إرشاد GPS ذكي",
      f1Text: "مسارات مشي واقعية، النقطة التالية، المسافة، الوقت المتوقع، وتنقل سلس.",
      f2Title: "ثقافة وأماكن أيقونية",
      f2Text: "معالم، متاحف، قصص، شخصيات مشهورة، فولكلور، أنشطة متكررة…",
      f3Title: "أغانٍ ووسائط",
      f3Text: "صفحات ثقافية، محتوى صوت/فيديو، طرائف وانغماس محلي.",
      f4Title: "اختبار أثناء المسار",
      f4Text: "أسئلة مرتبطة بالمكان، نقاط، متعة للعائلة، وضع للكبار/للأطفال.",
      f5Title: "تنقل ومواصلات",
      f5Text: "وصول سريع للمواصلات العامة، ووصول مباشر لتطبيق Uber إذا كان مثبتًا.",
      f6Title: "مدن متعددة ومسارات متعددة",
      f6Text: "عدة جولات لكل مدينة: قصير، متوسط، طويل — من الضروريات إلى الجواهر المخفية.",

      bannerTitle: "بلجيكا أولاً، ثم دولياً.",
      bannerText: "CityLoopQuest يتوسع لوجهات سياحية كبرى: نفس التجربة، محتوى محلي فريد.",

      langTitle: "10 لغات، فوراً.",
      langSubtitle: "يختار الزائر اللغة فتتغير كل المحتويات فوراً.",

      screensTitle: "صور من التطبيق",
      g1: "اختر من بين 3 مسارات: قصير، متوسط أو طويل.",
      g2: "إرشاد GPS إلى نقطة الاهتمام التالية، قائمة، صورة للنقطة التالية، نص وصوت وصفيان.",
      g3: "صفحة معلومات ثقافية",
      g4: "اختبار ممتع اختياري طوال المسار مع نقاط.",
      g5: "أغانٍ تقليدية وشعبية وفلكلورية",
      g6: "شخصيات وفنانون محليون، قصصهم وإنجازاتهم",
      g7: "قائمة المتاحف، الوصف، المعلومات وإرشاد GPS",
      g8: "وصف التقاليد والفلكلور المحلي",
      g9: "جمعيات محلية وفلكلورية",
      g10: "تعبيرات باللهجة المحلية",

      whyTitle: "لماذا CityLoopQuest؟",
      whyText: "لأن الرحلة الرائعة هي المحتوى المناسب في المكان المناسب. CityLoopQuest يرشد، يروي، يسلّي ويبسّط — دون الحاجة إلى 12 تطبيقاً.",
      c1: "مسارات (قصير/متوسط/طويل)",
      c2: "أماكن أيقونية + جواهر مخفية",
      c3: "شخصيات مشهورة وقصص محلية",
      c4: "اختبارات مرتبطة بالمكان أثناء المشي",
      c5: "وصول سريع للمواصلات العامة",
      c6: "واجهة سلسة وجذابة",

      quoteBadge: "للمدن والشركاء",
      quoteText: "“منصة قوية واحدة — ومحتوى محلي يصنع الفرق.”",

      launchTitle: "ابدأ المغامرة — اختر مدينتك",
      launchSubtitle: "اضغط… أو امسح رمز QR بهاتفك:",
      launchGpsWarning: "تحذير: إرشاد نظام تحديد المواقع (GPS) يستهلك طاقة كبيرة. تأكد من أن هاتفك مشحون بالكامل أو, الأفضل: اصطحب معك باوربانك...",
      cityMons: "Mons",
      cityBrussels: "Bruxelles",
      continentEurope: "أوروبا",
      countryBelgium: "بلجيكا",
      countryFrance: "فرنسا",
      countrySpain: "إسبانيا",
      regionBrussels: "بروكسل",
      regionWallonia: "والونيا",
      regionFlanders: "فلاندر",
      regionHautsDeFrance: "أوت دو فرانس",
      regionNouvelleAquitaine: "نوفيل أكيتين",
      regionMurcia: "مرسية",
      regionValencia: "مجتمع بلنسية",
      cityMurcia: "مرسية",
      cityAlicante: "أليكانتي",
      cityLorca: "لوركا",
      cityCarthagena: "قرطاجنة",
      cityCaravaca: "كارافاكا دي لا كروز",
      cityLiege: "لييج",
      cityLille: "ليل",
      cityMimizan: "ميميزان",
      cityAguilas: "أغيلاس",
      cityCehegin: "سيهيجين",
      cityCieza: "ثييثا",
      cityMazarron: "مازارون",
      fakeQrHint: "رمز QR مؤقت (قريباً)",
      cityPendingHint: "قيد التطوير",
      scanHint: "امسح لفتح التطبيق",
      citySoonTitle: "قريباً: بروج / غنت / أنتويرب…",
      citySoonSub: "والمزيد",
      soonHint: "قريباً",

      footerText: "CityLoopQuest — جولات تفاعلية لمدن متعددة.",

      shotCaption1: "مسار قصير أو متوسط أو طويل",
shotCaption2: "إرشاد GPS، صورة ووصف نصي وصوتي",
shotCaption3: "صفحات ثقافية",
shotCaption4: "اختبار ممتع اختياري",
shotCaption5: "أغانٍ فلكلورية",
shotCaption6: "شخصيات وفنانون محليون",
shotCaption7: "متاحف",
shotCaption8: "فلكلور",
shotCaption9: "جمعيات ومجموعات",
shotCaption10: "اللهجة المحلية",

    },

    yue: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "功能",
      navLanguages: "語言",
      navScreens: "截圖",
      navLaunch: "開啟 App",
      langPromptTitle: "請揀選你嘅語言",

      heroKicker: "City Loop Quest !!",
      heroTitle: "行街唔止睇景，仲可以玩。",
      heroSubtitle: "多個城市、多條路線。GPS 導覽。路上小測驗。文化頁、歌、博物館、故事… 10 種語言。",
      heroCta: "睇吓啲 App",
      heroInstallHelp: "點樣喺你部裝置度安裝 app",
      installVideoClose: "關閉",

      pillCities: "多城市",
      pillRoutes: "短/長路線",
      pillGps: "GPS 導覽",
      pillQuiz: "小測驗分數",
      pillCulture: "文化與媒體",
      pill10: "10 語言",

      featuresTitle: "旅客最鍾意嘅…一到點就有。",
      featuresSubtitle: "為行路、探索、玩同學而設 — 唔怕迷路。",

      f1Title: "智能 GPS 導覽",
      f1Text: "真實步行路線、下一站、距離、預計時間，導航好順。",
      f2Title: "文化同地標",
      f2Text: "名勝、博物館、故事、名人、民俗、定期活動…",
      f3Title: "歌曲同媒體",
      f3Text: "文化頁、音訊/影片、趣聞，感受在地氣氛。",
      f4Title: "沿途小測驗",
      f4Text: "即場問題、分數、親子好玩，可設成人/小朋友。",
      f5Title: "交通與出行",
      f5Text: "一按去公共交通，同埋如果裝咗 Uber 可直接開啟。",
      f6Title: "多城市多路線",
      f6Text: "每個城市有幾條路線：短/中/長 — 必到同隱世景點都有。",

      bannerTitle: "先做比利時，再走向國際。",
      bannerText: "CityLoopQuest 可以擴展到熱門旅遊城市：同一套體驗，內容因地制宜。",

      langTitle: "10 種語言，即時切換。",
      langSubtitle: "旅客揀語言，內容即刻轉。",

      screensTitle: "App 截圖",
      g1: "可從 3 條路線中選擇：短、中或長。",
      g2: "導航去下一個景點、選單、下一站相片、介紹文字同音訊。",
      g3: "文化資訊頁面",
      g4: "沿途可選玩味小測驗，仲有分數。",
      g5: "傳統、流行同民俗歌曲",
      g6: "本地名人同藝術家：佢哋嘅故事同成就",
      g7: "博物館清單、介紹、資訊同 GPS 導航",
      g8: "本地傳統同民俗介紹",
      g9: "本地同民俗團體",
      g10: "本地土話用語",

      whyTitle: "點解要 CityLoopQuest？",
      whyText: "好旅程就係：喺啱嘅地方，畀你啱嘅內容。CityLoopQuest 會帶路、講故事、娛樂同簡化行程。",
      c1: "路線（短/中/長）",
      c2: "地標 + 隱世",
      c3: "名人同在地故事",
      c4: "行緊路都有小測驗",
      c5: "一按去公共交通",
      c6: "介面流暢又吸引",

      quoteBadge: "畀城市/伙伴",
      quoteText: "「同一個技術底座，本地內容先係王牌。」",

      launchTitle: "開始冒險 — 揀你嘅城市",
      launchSubtitle: "撳… 或者用手機掃描 QR：",
      launchGpsWarning: "警告：GPS 導航好食電。記得帶住全滿電嘅手機，或者仲好：帶埋行動電源（power bank）...",
      cityMons: "Mons",
      cityBrussels: "Bruxelles",
      continentEurope: "歐洲",
      countryBelgium: "比利時",
      countryFrance: "法國",
      countrySpain: "西班牙",
      regionBrussels: "布魯塞爾",
      regionWallonia: "瓦隆",
      regionFlanders: "法蘭德斯",
      regionHautsDeFrance: "上法蘭西",
      regionNouvelleAquitaine: "新阿基坦",
      regionMurcia: "穆爾西亞",
      regionValencia: "瓦倫西亞自治區",
      cityMurcia: "穆爾西亞",
      cityAlicante: "阿利坎特",
      cityLorca: "洛爾卡",
      cityCarthagena: "卡塔赫納",
      cityCaravaca: "卡拉瓦卡德拉克魯斯",
      cityLiege: "列日",
      cityLille: "里爾",
      cityMimizan: "米米藏",
      cityAguilas: "阿吉拉斯",
      cityCehegin: "塞赫欣",
      cityCieza: "西西萨",
      cityMazarron: "馬薩龍",
      fakeQrHint: "臨時 QR（即將啟用）",
      cityPendingHint: "開發中",
      scanHint: "掃描即可開啟",
      citySoonTitle: "即將推出：布魯日 / 根特 / 安特衛普…",
      citySoonSub: "仲有更多",
      soonHint: "即將推出",

      footerText: "CityLoopQuest — 多城市互動旅遊。",

      shotCaption1: "短、中或長路線",
shotCaption2: "GPS 導航、相片同文字／音訊介紹",
shotCaption3: "文化頁面",
shotCaption4: "可選玩味小測驗",
shotCaption5: "民俗歌曲",
shotCaption6: "本地名人同藝術家",
shotCaption7: "博物館",
shotCaption8: "民俗",
shotCaption9: "團體同組織",
shotCaption10: "本地土話",

    },

    ja: {
      brandTag: "Air and Tourism adventures - Thrill and Culture !",
      navFeatures: "機能",
      navLanguages: "言語",
      navScreens: "スクショ",
      navLaunch: "アプリを起動",
      langPromptTitle: "言語を選択してください",

      heroKicker: "City Loop Quest !!",
      heroTitle: "観光が、インタラクティブな冒険になる。",
      heroSubtitle: "複数都市・複数コース。GPSガイド。道中クイズ。文化ページ、歌、博物館、物語… 10言語対応。",
      heroCta: "アプリを見る",
      heroInstallHelp: "端末にアプリをインストールする方法",
      installVideoClose: "閉じる",

      pillCities: "複数都市",
      pillRoutes: "短/長コース",
      pillGps: "GPSガイド",
      pillQuiz: "クイズ＆スコア",
      pillCulture: "文化＆メディア",
      pill10: "10言語",

      featuresTitle: "観光客が欲しいものを、ちょうどいいタイミングで。",
      featuresSubtitle: "歩いて、発見して、遊んで、学ぶ — 迷わない体験設計。",

      f1Title: "スマートGPSガイド",
      f1Text: "現実的な徒歩ルート、次のスポット、距離、到着予想、スムーズなナビ。",
      f2Title: "文化と名所",
      f2Text: "名所、博物館、物語、著名人、民俗、定期イベント…",
      f3Title: "歌とメディア",
      f3Text: "文化ページ、音声/動画、豆知識でローカルに没入。",
      f4Title: "道中クイズ",
      f4Text: "場所に合わせた問題、スコア、家族で楽しい、子ども/大人モードも可能。",
      f5Title: "移動＆交通",
      f5Text: "公共交通へのアクセスに加え、Uber がインストールされていれば直接起動できます。",
      f6Title: "複数都市・複数コース",
      f6Text: "各都市で複数コース：短/中/長 — 定番から隠れた名所まで。",

      bannerTitle: "まずはベルギー、次は世界へ。",
      bannerText: "CityLoopQuest は人気観光地に展開可能：同じ体験、都市ごとの独自コンテンツ。",

      langTitle: "10言語、即時切替。",
      langSubtitle: "言語を選ぶだけで、コンテンツが即時に切り替わります。",

      screensTitle: "スクリーンショット",
      g1: "3つのルートから選べます：短・中・長。",
      g2: "次の観光スポットまでのGPS案内、メニュー、次のポイントの写真、説明テキストと音声。",
      g3: "道中クイズ",
      g4: "ルート中にいつでも選べる楽しいクイズ（スコア付き）。",
      g5: "伝統歌・大衆歌・民謡",
      g6: "地元の著名人やアーティスト：その歴史と功績",
      g7: "博物館リスト、説明、情報、GPS案内",
      g8: "地元の伝統と民俗の紹介",
      g9: "地元・民俗団体",
      g10: "地元方言の表現",

      whyTitle: "なぜ CityLoopQuest？",
      whyText: "旅の価値は「その場所で、その瞬間に、必要な情報があること」。CityLoopQuest は案内し、語り、楽しませ、旅をシンプルにします。",
      c1: "コース（短/中/長）",
      c2: "定番＋隠れスポット",
      c3: "著名人とローカルストーリー",
      c4: "歩きながらクイズ",
      c5: "公共交通へ素早くアクセス",
      c6: "滑らかで魅力的なUI",

      quoteBadge: "自治体・パートナー向け",
      quoteText: "「強い技術基盤＋ローカルコンテンツが差別化。」",

      launchTitle: "冒険を始めよう — 都市を選択",
      launchSubtitle: "クリック… またはスマホでQRをスキャン：",
      launchGpsWarning: "注意：GPSナビは電池の消費がとても大きいです。スマホを満充電にしておくか、できればモバイルバッテリー（パワーバンク）を用意してください...",
      cityMons: "Mons",
      cityBrussels: "Bruxelles",
      continentEurope: "ヨーロッパ",
      countryBelgium: "ベルギー",
      countryFrance: "フランス",
      countrySpain: "スペイン",
      regionBrussels: "ブリュッセル",
      regionWallonia: "ワロン",
      regionFlanders: "フランデレン",
      regionHautsDeFrance: "オー＝ド＝フランス",
      regionNouvelleAquitaine: "ヌーヴェル＝アキテーヌ",
      regionMurcia: "ムルシア",
      regionValencia: "バレンシア自治州",
      cityMurcia: "ムルシア",
      cityAlicante: "アリカンテ",
      cityLorca: "ロルカ",
      cityCarthagena: "カルタヘナ",
      cityCaravaca: "カラバカ・デ・ラ・クルス",
      cityLiege: "リエージュ",
      cityLille: "リール",
      cityMimizan: "ミミザン",
      cityAguilas: "アギラス",
      cityCehegin: "セヘギン",
      cityCieza: "シエサ",
      cityMazarron: "マサロン",
      fakeQrHint: "仮QR（近日有効化）",
      cityPendingHint: "開発中",
      scanHint: "スキャンして開く",
      citySoonTitle: "近日公開：ブルージュ / ヘント / アントワープ…",
      citySoonSub: "ほか多数",
      soonHint: "近日公開",

      footerText: "CityLoopQuest — 複数都市対応のインタラクティブ観光。",

      shotCaption1: "短・中・長のルート",
shotCaption2: "GPS案内、写真、説明テキストと音声",
shotCaption3: "文化ページ",
shotCaption4: "選べる楽しいクイズ",
shotCaption5: "民謡・フォークソング",
shotCaption6: "地元の著名人やアーティスト",
shotCaption7: "博物館",
shotCaption8: "民俗",
shotCaption9: "団体・グループ",
shotCaption10: "地元の方言",
    }
  };

  const shots = [
    { screen: 1, captionKey: "shotCaption1" },
    { screen: 2, captionKey: "shotCaption2" },
    { screen: 3, captionKey: "shotCaption3" },
    { screen: 4, captionKey: "shotCaption4" },
    { screen: 5, captionKey: "shotCaption5" },
    { screen: 6, captionKey: "shotCaption6" },
    { screen: 7, captionKey: "shotCaption7" },
    { screen: 8, captionKey: "shotCaption8" },
    { screen: 9, captionKey: "shotCaption9" },
    { screen: 10, captionKey: "shotCaption10" }
  ];


  let currentLang = "fr";
  let currentShot = 0;

  const $ = (sel) => document.querySelector(sel);
  const IMAGE_BASES = (location.protocol === "file:")
    ? ["assets"]
    : ["/assets", "assets"];

  function buildScreenSrc(base, screenNumber, lang) {
    const cleanBase = String(base || "").replace(/\/+$/, "");
    return `${cleanBase}/screen-${screenNumber}-${lang}.png`;
  }

  function setScreenImg(img, screenNumber, lang) {
    if (!img) return;

    const bases = IMAGE_BASES.slice();
    let i = 0;

    const tryNext = () => {
      if (i >= bases.length) return;
      const src = buildScreenSrc(bases[i++], screenNumber, lang);
      img.src = src;
      if (img.parentElement) {
        img.parentElement.style.setProperty("--shot-bg", `url("${src}")`);
      }
    };

    img.onerror = () => {
      // Try next base if the current path fails (useful for Netlify deep paths vs local file://)
      img.onerror = null;
      tryNext();
    };

    tryNext();
  }

  function screenSrc(screenNumber, lang) {
    return buildScreenSrc(IMAGE_BASES[0], screenNumber, lang);
  }


  function updateGalleryScreens() {
    document.querySelectorAll("img[data-screen]").forEach((img) => {
      const n = Number(img.dataset.screen || "0");
      if (!n) return;
      setScreenImg(img, n, currentLang);
      img.onload = () => ensureBlurBg(img);
      });
    normalizeAllScreens();
  }

  function getQueryLang() {
    const p = new URLSearchParams(location.search);
    const lang = (p.get("lang") || "").toLowerCase();
    return SUPPORTED.includes(lang) ? lang : null;
  }

  function guessBrowserLang() {
    const rawList = [];
    if (typeof navigator.languages !== "undefined" && navigator.languages.length) {
      for (let i = 0; i < navigator.languages.length; i++) {
        rawList.push(String(navigator.languages[i]));
      }
    }
    if (navigator.language) rawList.push(String(navigator.language));

    const normalize = (raw) => {
      const lower = String(raw || "").toLowerCase().trim();
      if (!lower) return null;
      if (
        lower === "zh-hk" ||
        lower === "zh-tw" ||
        lower.startsWith("zh-hk") ||
        lower.startsWith("zh-tw") ||
        lower === "yue" ||
        lower.startsWith("yue-")
      ) {
        return "yue";
      }
      const base = lower.split("-")[0];
      if (base === "zh") {
        if (
          lower.includes("-hk") ||
          lower.includes("-tw") ||
          (lower.includes("hant") && lower.includes("hk"))
        ) {
          return "yue";
        }
        return null;
      }
      if (SUPPORTED.includes(base)) return base;
      return null;
    };

    for (const raw of rawList) {
      const r = normalize(raw);
      if (r) return r;
    }
    return "fr";
  }

  function applyDir(lang) {
    const html = document.documentElement;
    if (lang === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", lang);
    }
  }

  function t(key) {
    const dict = translations[currentLang] || translations.fr;
    return dict[key] ?? translations.fr[key] ?? key;
  }

  function setText() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = "fr";
    currentLang = lang;

    const label = $("#langLabel");
    if (label) label.textContent = lang.toUpperCase();

    applyDir(lang);
    setText();
    renderShot();
    updateGalleryScreens();
    updateLangFlags();

    try {
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState({}, "", url.href);
    } catch (e) {
      /* file:// ou URL non modifiable : la langue reste appliquée côté page */
    }
  }

  function renderDots() {
    const dots = $("#shotDots");
    if (!dots) return;
    dots.innerHTML = "";
    shots.forEach((_, i) => {
      const d = document.createElement("div");
      d.className = "dot" + (i === currentShot ? " active" : "");
      d.setAttribute("role", "button");
      d.setAttribute("tabindex", "0");
      d.setAttribute("aria-label", `Screenshot ${i + 1}`);
      d.addEventListener("click", () => { currentShot = i; renderShot(); renderDots(); });
      d.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          currentShot = i;
          renderShot();
          renderDots();
        }
      });
      dots.appendChild(d);
    });
  }

  function ensureBlurBg(img) {
    const parent = img?.parentElement; // .shot
    if (!parent) return;
    const src = img.currentSrc || img.src;
    if (src) parent.style.setProperty("--shot-bg", `url("${src}")`);
  }

  function normalizeAllScreens() {
    document.querySelectorAll(".shot img").forEach(img => {
      if (!img.classList.contains("screenMedia")) img.classList.add("screenMedia");
      const apply = () => ensureBlurBg(img);
      if (img.complete) apply();
      else img.addEventListener("load", apply, { once: true });
    });
  }

  function debounce(fn, ms=120) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }

  function renderShot() {
    const img = $("#shotImg");
    const cap = $("#shotCaption");
    const s = shots[currentShot];
    if (img) {
      setScreenImg(img, s.screen, currentLang);
      img.alt = "CityLoopQuest screenshot";
      img.onload = () => ensureBlurBg(img);
    }

    if (cap) cap.textContent = t(s.captionKey);
  }

  function bindLangMenu() {
    const btn = $("#langBtn");
    const menu = $("#langMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    menu.querySelectorAll("button[data-lang]").forEach(b => {
      b.addEventListener("click", () => {
        const lang = b.getAttribute("data-lang");
        setLang(lang);
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("open")) return;
      if (btn.contains(e.target) || menu.contains(e.target)) return;
      menu.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  function bindLangFlags() {
    document.querySelectorAll(".langFlag[data-lang]").forEach(flag => {
      flag.addEventListener("click", () => {
        const lang = flag.getAttribute("data-lang");
        setLang(lang);
      });
    });
  }

  function updateLangFlags() {
    document.querySelectorAll(".langFlag[data-lang]").forEach(flag => {
      const lang = flag.getAttribute("data-lang");
      if (lang === currentLang) {
        flag.classList.add("active");
      } else {
        flag.classList.remove("active");
      }
    });
  }

  function bindShots() {
    const prev = $("#prevShot");
    const next = $("#nextShot");

    if (prev) prev.addEventListener("click", () => {
      currentShot = (currentShot - 1 + shots.length) % shots.length;
      renderShot(); renderDots();
      normalizeAllScreens();
    });

    if (next) next.addEventListener("click", () => {
      currentShot = (currentShot + 1) % shots.length;
      renderShot(); renderDots();
      normalizeAllScreens();
    });

    let timer = null;
    const start = () => {
      stop();
      timer = setInterval(() => {
        currentShot = (currentShot + 1) % shots.length;
        renderShot(); renderDots();
        normalizeAllScreens();
      }, 5200);
    };
    const stop = () => { if (timer) clearInterval(timer); timer = null; };

    const visual = document.querySelector(".hero__visual");
    if (visual) {
      visual.addEventListener("mouseenter", stop);
      visual.addEventListener("mouseleave", start);
      visual.addEventListener("focusin", stop);
      visual.addEventListener("focusout", start);
    }
    start();
  }

  /* ==========================================================
     QR CODE (SVG) — local generation (Version 3, EC Level L)
     ========================================================== */

  function makeGfTables() {
    const exp = new Array(512).fill(0);
    const log = new Array(256).fill(0);
    let x = 1;
    for (let i = 0; i < 255; i++) {
      exp[i] = x;
      log[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) exp[i] = exp[i - 255];
    return { exp, log };
  }

  const GF = makeGfTables();

  function gfMul(a, b) {
    if (a === 0 || b === 0) return 0;
    return GF.exp[GF.log[a] + GF.log[b]];
  }

  function rsGeneratorPoly(deg) {
    let poly = [1];
    for (let i = 0; i < deg; i++) {
      const next = [1, GF.exp[i]];
      const out = new Array(poly.length + 1).fill(0);
      for (let p = 0; p < poly.length; p++) {
        out[p] ^= gfMul(poly[p], next[0]);
        out[p + 1] ^= gfMul(poly[p], next[1]);
      }
      poly = out;
    }
    return poly;
  }

  function rsComputeEC(data, ecLen) {
    const gen = rsGeneratorPoly(ecLen);
    const msg = data.slice();
    msg.push(...new Array(ecLen).fill(0));
    for (let i = 0; i < data.length; i++) {
      const coef = msg[i];
      if (coef === 0) continue;
      for (let j = 0; j < gen.length; j++) {
        msg[i + j] ^= gfMul(gen[j], coef);
      }
    }
    return msg.slice(msg.length - ecLen);
  }

  function toUtf8Bytes(str) {
    return new TextEncoder().encode(str);
  }

  function buildCodewords_V3_L(dataStr) {
    const DATA_CW = 55;
    const EC_CW = 15;

    const bytes = Array.from(toUtf8Bytes(dataStr));
    const bits = [];

    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };

    pushBits(0b0100, 4);
    pushBits(bytes.length, 8);
    for (const b of bytes) pushBits(b, 8);

    const maxBits = DATA_CW * 8;
    const remaining = maxBits - bits.length;
    pushBits(0, Math.min(4, Math.max(0, remaining)));

    while (bits.length % 8 !== 0) bits.push(0);

    const data = [];
    for (let i = 0; i < bits.length; i += 8) {
      let v = 0;
      for (let j = 0; j < 8; j++) v = (v << 1) | bits[i + j];
      data.push(v);
    }

    let pad = 0;
    while (data.length < DATA_CW) {
      data.push(pad % 2 === 0 ? 0xEC : 0x11);
      pad++;
    }

    const ec = rsComputeEC(data, EC_CW);
    return data.concat(ec);
  }

  function emptyMatrix(size) {
    const m = new Array(size).fill(0).map(() => new Array(size).fill(null));
    const res = new Array(size).fill(0).map(() => new Array(size).fill(false));
    return { m, res };
  }

  function setModule(ctx, x, y, val, reserve = true) {
    if (x < 0 || y < 0 || x >= ctx.m.length || y >= ctx.m.length) return;
    ctx.m[y][x] = !!val;
    if (reserve) ctx.res[y][x] = true;
  }

  function reserveOnly(ctx, x, y) {
    if (x < 0 || y < 0 || x >= ctx.m.length || y >= ctx.m.length) return;
    ctx.res[y][x] = true;
  }

  function drawFinder(ctx, x, y) {
    for (let dy = -1; dy <= 7; dy++) {
      for (let dx = -1; dx <= 7; dx++) {
        const xx = x + dx, yy = y + dy;
        const inBounds = xx >= 0 && yy >= 0 && xx < ctx.m.length && yy < ctx.m.length;
        if (!inBounds) continue;

        if (dx === -1 || dx === 7 || dy === -1 || dy === 7) {
          setModule(ctx, xx, yy, false, true);
          continue;
        }
        const onBorder = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const inCenter = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        setModule(ctx, xx, yy, onBorder || inCenter, true);
      }
    }
  }

  function drawTiming(ctx) {
    const size = ctx.m.length;
    for (let i = 8; i <= size - 9; i++) {
      const v = (i % 2 === 0);
      if (!ctx.res[6][i]) setModule(ctx, i, 6, v, true);
      if (!ctx.res[i][6]) setModule(ctx, 6, i, v, true);
    }
  }

  function drawAlignment(ctx, cx, cy) {
    for (let dy = -2; dy <= 2; dy++) {
      for (let dx = -2; dx <= 2; dx++) {
        const xx = cx + dx, yy = cy + dy;
        const onBorder = Math.abs(dx) === 2 || Math.abs(dy) === 2;
        const center = dx === 0 && dy === 0;
        setModule(ctx, xx, yy, onBorder || center, true);
      }
    }
  }

  function bchFormatBits(ecLevelBits, mask) {
    let d = ((ecLevelBits & 0b11) << 3) | (mask & 0b111);
    let v = d << 10;
    const g = 0x537;
    for (let i = 14; i >= 10; i--) {
      if ((v >> i) & 1) v ^= g << (i - 10);
    }
    const bch = v & 0x3FF;
    let fmt = (d << 10) | bch;
    fmt ^= 0x5412;
    return fmt & 0x7FFF;
  }

  function placeFormat(ctx, fmt) {
    const size = ctx.m.length;
    const getBit = (i) => (fmt >> (14 - i)) & 1;

    const coords1 = [
      [8,0],[8,1],[8,2],[8,3],[8,4],[8,5],
      [8,7],[8,8],
      [7,8],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8]
    ];
    const coords2 = [
      [size-1,8],[size-2,8],[size-3,8],[size-4,8],[size-5,8],[size-6,8],[size-7,8],[size-8,8],
      [8,size-1],[8,size-2],[8,size-3],[8,size-4],[8,size-5],[8,size-6],[8,size-7]
    ];

    for (let i = 0; i < 15; i++) {
      const b = !!getBit(i);
      const [x1,y1] = coords1[i];
      setModule(ctx, x1, y1, b, true);
      const [x2,y2] = coords2[i];
      setModule(ctx, x2, y2, b, true);
    }

    setModule(ctx, 8, 4*3 + 9, true, true);
  }

  function reserveFormatAreas(ctx) {
    const size = ctx.m.length;
    for (let i = 0; i <= 8; i++) {
      if (i !== 6) reserveOnly(ctx, 8, i);
      if (i !== 6) reserveOnly(ctx, i, 8);
    }
    reserveOnly(ctx, 8, 7);
    reserveOnly(ctx, 7, 8);

    for (let x = size - 8; x < size; x++) reserveOnly(ctx, x, 8);
    for (let y = size - 7; y < size; y++) reserveOnly(ctx, 8, y);
  }

  function mask0(x, y) {
    return ((x + y) % 2) === 0;
  }

  function placeData(ctx, codewords) {
    const size = ctx.m.length;
    let bitIndex = 0;

    const getBitFromCW = () => {
      const cw = codewords[Math.floor(bitIndex / 8)];
      const b = (cw >> (7 - (bitIndex % 8))) & 1;
      bitIndex++;
      return b;
    };

    let x = size - 1;
    let dirUp = true;

    while (x > 0) {
      if (x === 6) x--;

      for (let i = 0; i < size; i++) {
        const y = dirUp ? (size - 1 - i) : i;

        for (let dx = 0; dx < 2; dx++) {
          const xx = x - dx;
          if (ctx.res[y][xx]) continue;

          let bit = getBitFromCW();
          if (mask0(xx, y)) bit ^= 1;

          ctx.m[y][xx] = !!bit;
          ctx.res[y][xx] = true;
        }
      }
      dirUp = !dirUp;
      x -= 2;
    }
  }

  function buildQrMatrix_V3_L(dataStr) {
  const version = 3;
  const size = 21 + 4 * (version - 1);
  const ctx = emptyMatrix(size);

  drawFinder(ctx, 0, 0);
  drawFinder(ctx, size - 7, 0);
  drawFinder(ctx, 0, size - 7);

  drawTiming(ctx);
  drawAlignment(ctx, 22, 22);
  reserveFormatAreas(ctx);

  const codewords = buildCodewords_V3_L(dataStr);
  placeData(ctx, codewords);

  const fmt = bchFormatBits(0b01, 0);
  placeFormat(ctx, fmt);

  return ctx.m;
}

// ✅ Fix: force URL format for better iPhone detection
function normalizeQrData(input) {
  let s = (input || "").trim();
  if (!s) return s;

  // iPhone accroche mieux les URL avec schéma
  if (!/^https?:\/\//i.test(s)) s = "https://" + s;
  return s;
}

function renderQrSvg(matrix, options = {}) {
  const size = matrix.length;

  // ✅ Quiet zone plus généreuse (meilleure détection)
  const quiet = Number.isFinite(options.quiet) ? options.quiet : 8;

  const total = size + quiet * 2;
  const dark = options.dark || "#000";
  const light = options.light || "#fff";

  // ✅ Évite le flou : on rend à une taille EXACTE (modules * scale = pixels)
  // total (version 3 + quiet 8) = 29 + 16 = 45
  // scale 6 => 270px (super scannable)
  const scale = Number.isFinite(options.scale) ? options.scale : 6;
  const px = total * scale;

  let svg = "";
  svg += `<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 ${total} ${total}"
    width="${px}" height="${px}"
    shape-rendering="crispEdges"
    style="display:block;width:${px}px;height:${px}px;"
    aria-hidden="true">`;

  svg += `<rect x="0" y="0" width="${total}" height="${total}" fill="${light}"></rect>`;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (matrix[y][x]) {
        const xx = x + quiet;
        const yy = y + quiet;
        svg += `<rect x="${xx}" y="${yy}" width="1" height="1" fill="${dark}"></rect>`;
      }
    }
  }

  svg += `</svg>`;
  return { svg, px };
}

function qrAssetForUrl(url) {
  const m = (url || "").match(/clq-([a-z]+)\.netlify\.app/i);
  return m ? `assets/qr-${m[1]}.png` : null;
}

function initQrs() {
  document.querySelectorAll(".qr[data-qr-url]").forEach((el) => {
    const url = normalizeQrData(el.getAttribute("data-qr-url"));
    const src = qrAssetForUrl(url);
    if (!url || !src) return;
    const label = el.getAttribute("aria-label") || "QR code";
    el.innerHTML =
      `<div class="qrFrame">` +
      `<img class="qrImg" src="${src}" alt="${label}" width="220" height="220" loading="lazy" decoding="async" />` +
      `</div>`;
  });
}

  function closeLangGate() {
    document.documentElement.classList.remove("lang-gate-pending");
    const gate = $("#langGate");
    if (gate) {
      gate.hidden = true;
      gate.setAttribute("aria-hidden", "true");
    }
  }

  function setupLangGate() {
    const gate = $("#langGate");
    const title = $("#langGateTitle");
    const preview = guessBrowserLang();
    if (!gate || !title) {
      closeLangGate();
      setLang(preview);
      return;
    }
    title.replaceChildren();
    title.classList.add("langGate__title--allLangs");
    SUPPORTED.forEach((code) => {
      const span = document.createElement("span");
      span.className = "langGate__titleLine";
      if (code === preview) span.classList.add("langGate__titleLine--guess");
      const text = (translations[code] || translations.fr).langPromptTitle;
      span.textContent = text;
      if (code === "ar") {
        span.setAttribute("dir", "rtl");
        span.setAttribute("lang", "ar");
      } else if (code === "yue") {
        span.setAttribute("lang", "zh-Hant");
      } else {
        span.setAttribute("lang", code);
      }
      title.appendChild(span);
    });

    gate.setAttribute("dir", "ltr");
    gate.hidden = false;
    gate.setAttribute("aria-hidden", "false");

    gate.addEventListener(
      "click",
      (e) => {
        const t = e.target;
        if (!t || typeof t.closest !== "function") return;
        const btn = t.closest("button[data-lang-gate]");
        if (!btn || !gate.contains(btn)) return;
        e.preventDefault();
        const lang = btn.getAttribute("data-lang-gate");
        if (!lang) return;
        try {
          setLang(lang);
        } catch (err) {
          console.warn("setLang", err);
        } finally {
          closeLangGate();
        }
      },
      true
    );

    const guessBtn = gate.querySelector(`button[data-lang-gate="${preview}"]`);
    const focusBtn = guessBtn || gate.querySelector("button[data-lang-gate]");
    if (focusBtn && typeof focusBtn.focus === "function") focusBtn.focus();
  }

  function bindInstallVideoModal() {
    const openBtn = $("#installVideoBtn");
    const modal = $("#installVideoModal");
    const backdrop = $("#installVideoBackdrop");
    const closeBtn = $("#installVideoCloseBtn");
    const video = $("#installVideoPlayer");
    if (!openBtn || !modal || !video) return;

    function buildInstallVideoUrls() {
      const langs = [];
      for (const lang of [currentLang, ...SUPPORTED]) {
        if (!langs.includes(lang)) langs.push(lang);
      }
      const urls = [];
      for (const lang of langs) {
        for (const base of IMAGE_BASES) {
          const clean = String(base).replace(/\/+$/, "");
          urls.push(`${clean}/install_${lang}.mp4`);
        }
      }
      return urls;
    }

    let urlList = [];
    let urlIndex = 0;

    function tryLoadInstallVideo() {
      video.onerror = null;
      if (urlIndex >= urlList.length) {
        video.removeAttribute("src");
        try {
          video.load();
        } catch (e) { /* ignore */ }
        return;
      }
      const src = urlList[urlIndex];
      video.onerror = () => {
        urlIndex++;
        tryLoadInstallVideo();
      };
      video.addEventListener(
        "canplay",
        () => {
          video.onerror = null;
          video.muted = true;
          const p = video.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        },
        { once: true }
      );
      video.src = src;
      try {
        video.load();
      } catch (e) { /* ignore */ }
    }

    function openInstallVideoModal() {
      urlList = buildInstallVideoUrls();
      urlIndex = 0;
      video.pause();
      video.muted = true;
      video.defaultMuted = true;
      video.removeAttribute("src");
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      tryLoadInstallVideo();
      closeBtn?.focus();
    }

    function closeInstallVideoModal() {
      video.pause();
      video.onerror = null;
      video.removeAttribute("src");
      try {
        video.load();
      } catch (e) { /* ignore */ }
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      openInstallVideoModal();
    });

    backdrop?.addEventListener("click", closeInstallVideoModal);
    closeBtn?.addEventListener("click", closeInstallVideoModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.hidden) closeInstallVideoModal();
    });
  }


function isMobileHandheld() {
  return /iPhone|iPod|iPad|Android/i.test(navigator.userAgent || "");
}

function isIosInAppBrowser() {
  const ua = navigator.userAgent || "";
  if (!/iPhone|iPad|iPod/i.test(ua)) return false;
  if (/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo/i.test(ua)) return false;
  return !/Safari/i.test(ua);
}

function cityOpenBrowserUrl(netlifyAppUrl) {
  const base = String(netlifyAppUrl || "").replace(/\/+$/, "");
  if (/clq-murcia\.netlify\.app/i.test(base)) {
    return base + "/open-browser.html";
  }
  return base;
}

function isAndroidWebView() {
  const ua = navigator.userAgent || "";
  return /Android/i.test(ua) && /; wv\)|\bwv\b|WebView/i.test(ua);
}

function initCityLaunchLinks() {
  document.querySelectorAll('a.cityCard[href^="https://clq-"]').forEach((card) => {
    const raw = card.getAttribute("href");
    if (!raw) return;

    card.addEventListener("click", (e) => {
      if (!isMobileHandheld()) return;
      const needsExternal =
        isIosInAppBrowser() || isAndroidWebView();
      if (!needsExternal || !/clq-murcia\.netlify\.app/i.test(raw)) {
        return;
      }
      e.preventDefault();
      window.location.assign(cityOpenBrowserUrl(raw));
    });
  });
}

function init() {
  const q = getQueryLang();

  bindLangMenu();
  bindLangFlags();
  bindInstallVideoModal();
  bindShots();
  renderDots();

  if (q) {
    setLang(q);
    closeLangGate();
  } else {
    setupLangGate();
  }

  initQrs();
  initCityLaunchLinks();
  normalizeAllScreens();

  window.addEventListener("resize", debounce(normalizeAllScreens, 120));
}

document.addEventListener("DOMContentLoaded", init);
})();

