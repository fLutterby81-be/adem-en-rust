/* Adem & Rust – vertalingen (NL, EN, FR, DE, ES)
 *
 * Elke taal heeft dezelfde sleutels. Teksten in de HTML verwijzen ernaar via
 * data-i18n="sleutel" (geneste sleutels met een punt, bv. "techniques.box.name").
 * Toon: rustig en feitelijk, zonder grote beloftes.
 */
const I18N = {
  nl: {
    appSubtitle: 'Rustig ademen, ontspannen lichaam',
    tabBreathe: 'Oefenen', tabStats: 'Statistieken', tabAbout: 'Over',
    themeGroup: 'Thema', langGroup: 'Taal', techniqueGroup: 'Ademtechniek',
    themes: { ocean: 'Oceaan', sunset: 'Zonsondergang', forest: 'Bos', night: 'Nacht', candy: 'Snoep', lavender: 'Lavendel' },
    startBtn: 'Start', stopBtn: 'Stop',
    soundOn: 'Geluid aan', soundOff: 'Geluid uit',
    ready: 'Klaar', readyInstruction: 'Kies een thema en techniek, dan druk je op Start',
    done: 'Oefening voltooid. Goed gedaan.', doneLabel: 'Voltooid',
    cycleText: (c, total) => `Cyclus: ${c} / ${total}`,
    streak0: 'Begin vandaag je reeks',
    streakActive: s => `${s} ${s === 1 ? 'dag' : 'dagen'} op rij`,
    streakPaused: s => `${s} ${s === 1 ? 'dag' : 'dagen'} op rij, vandaag nog niet geoefend`,
    tempoLabel: 'Duur van één tel',
    tempoAria: s => `${s} seconden per tel`,
    tempoHint: s => `Eén cyclus duurt nu ${s} seconden. Lukt 7 tellen vasthouden niet, kies dan een kortere tel. Met wat oefening kun je trager gaan. De verhouding 4:7:8 blijft gelijk.`,
    lblTotalCycles: 'Totaal cycli', lblTotalSessions: 'Totaal sessies', lblStreak: 'Dagen op rij',
    lblToday: 'Cycli vandaag', lblWeek: 'Cycli, 7 dagen', lblLast: 'Laatste sessie',
    chartTitle: 'Cycli per dag, afgelopen 7 dagen',
    reminderTitle: '⏰ Herinnering', reminderLabel: 'Dagelijkse herinnering om', reminderSwitch: 'Herinnering aan of uit',
    reminderNote: 'De app toont op het gekozen tijdstip een herinnering, zolang ze openstaat.',
    reminderMsg: '⏰ Tijd voor je ademhalingsoefening',
    close: 'Sluiten',
    progressTitle: 'Jouw voortgang',
    progressDesc: 'In een studie hadden mensen die een maand lang elke dag 5 minuten ademhalingsoefeningen deden een betere stemming en minder angstgevoelens.',
    safety: 'Voel je je duizelig of ongemakkelijk? Stop en adem rustig verder in je eigen tempo.',
    phases: { inhale: 'Inademen', hold: 'Vasthouden', exhale: 'Uitademen', pause: 'Pauze' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Slaap',
        desc: 'Bekend gemaakt door Dr. Andrew Weil en gebaseerd op pranayama (yoga-ademhaling). Adem op 4 tellen in door je neus, houd je adem 7 tellen vast en adem op 8 tellen hoorbaar uit door je mond. Je tongpunt rust daarbij tegen het randje net achter je bovenste voortanden. Weil raadt aan om de eerste maand niet meer dan 4 cycli na elkaar te doen, minstens twee keer per dag.',
        steps: { inhale: 'Adem rustig in door je neus', hold: 'Houd je adem vast', exhale: 'Adem volledig uit door je mond' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'Een vierkant patroon: 4 seconden in, 4 vasthouden, 4 uit en 4 pauze. Werd bekend via Mark Divine, een voormalige Navy SEAL. Kan helpen om rustig te worden en je te concentreren.',
        steps: { inhale: 'Adem in (4 sec)', hold: 'Houd vast (4 sec)', exhale: 'Adem uit (4 sec)', pause: 'Pauze (4 sec)' }
      },
      equal: {
        name: 'Gelijke Adem',
        desc: 'In yoga bekend als Sama Vritti, “gelijke beweging”: je in- en uitademing duren even lang. Een eenvoudige oefening om mee te beginnen.',
        steps: { inhale: 'Adem gelijkmatig in', exhale: 'Adem gelijkmatig uit' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Ademen in een tempo van 6 keer per minuut: 5 seconden in, 5 seconden uit. Bij dit tempo gaat je hartslag duidelijk mee op en neer met je ademhaling (hartcoherentie). Een sessie duurt 5 minuten, zoals in de methode 3-6-5: 3 keer per dag, 6 ademhalingen per minuut, 5 minuten lang.',
        steps: { inhale: 'Langzaam inademen (5 sec)', exhale: 'Langzaam uitademen (5 sec)' }
      }
    },
    about: {
      title: 'Over Adem & Rust',
      intro: 'Adem & Rust is een eenvoudige app om rustig te ademen. Kies een techniek, druk op Start en adem mee met de cirkel: die wordt groter als je inademt, blijft even groot als je je adem vasthoudt en wordt kleiner als je uitademt. Het getal onder de cirkel telt af naar de volgende stap.',
      expectTitle: 'Wat je mag verwachten',
      expect: 'Ademhalingsoefeningen kunnen helpen om te ontspannen, maar het onderzoek ernaar is nog beperkt en de gemeten effecten zijn klein tot matig. Deze app is geen medisch hulpmiddel en vervangt geen advies van een arts. Heb je een hart- of longaandoening of ben je zwanger, overleg dan eerst met je arts voordat je oefeningen doet waarbij je je adem vasthoudt.',
      privacyTitle: 'Privacy',
      privacy: 'De app verstuurt geen gegevens en gebruikt geen cookies, accounts of tracking. Je statistieken en instellingen worden alleen in je eigen browser bewaard.',
      installTitle: 'Installeren en offline gebruiken',
      install: 'Je kunt de app via het menu van je browser aan je beginscherm toevoegen. Daarna werkt ze ook zonder internetverbinding.',
      sourcesTitle: 'Bronnen',
      sourcesIntro: 'De uitleg bij de technieken is gebaseerd op deze bronnen:',
      research: 'Onderzoek naar ademhalingsoefeningen'
    }
  },

  en: {
    appSubtitle: 'Breathe calmly, relax the body',
    tabBreathe: 'Practice', tabStats: 'Statistics', tabAbout: 'About',
    themeGroup: 'Theme', langGroup: 'Language', techniqueGroup: 'Breathing technique',
    themes: { ocean: 'Ocean', sunset: 'Sunset', forest: 'Forest', night: 'Night', candy: 'Candy', lavender: 'Lavender' },
    startBtn: 'Start', stopBtn: 'Stop',
    soundOn: 'Sound on', soundOff: 'Sound off',
    ready: 'Ready', readyInstruction: 'Choose a theme and technique, then press Start',
    done: 'Exercise complete. Well done.', doneLabel: 'Done',
    cycleText: (c, total) => `Cycle: ${c} / ${total}`,
    streak0: 'Start your streak today',
    streakActive: s => `${s} day${s === 1 ? '' : 's'} in a row`,
    streakPaused: s => `${s} day${s === 1 ? '' : 's'} in a row, no session yet today`,
    tempoLabel: 'Length of one count',
    tempoAria: s => `${s} seconds per count`,
    tempoHint: s => `One cycle now takes ${s} seconds. If holding for 7 counts is hard, choose a shorter count. With practice you can slow down. The 4:7:8 ratio stays the same.`,
    lblTotalCycles: 'Total cycles', lblTotalSessions: 'Total sessions', lblStreak: 'Day streak',
    lblToday: 'Cycles today', lblWeek: 'Cycles, 7 days', lblLast: 'Last session',
    chartTitle: 'Cycles per day, last 7 days',
    reminderTitle: '⏰ Reminder', reminderLabel: 'Daily reminder at', reminderSwitch: 'Reminder on or off',
    reminderNote: 'The app shows a reminder at the chosen time, as long as it is open.',
    reminderMsg: '⏰ Time for your breathing exercise',
    close: 'Close',
    progressTitle: 'Your progress',
    progressDesc: 'In one study, people who did 5 minutes of breathing exercises every day for a month reported better mood and less anxiety.',
    safety: 'Feeling dizzy or uncomfortable? Stop and breathe normally at your own pace.',
    phases: { inhale: 'Inhale', hold: 'Hold', exhale: 'Exhale', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sleep',
        desc: 'Made known by Dr. Andrew Weil and based on pranayama (yogic breathing). Breathe in through your nose for 4 counts, hold your breath for 7 counts and breathe out audibly through your mouth for 8 counts. Keep the tip of your tongue against the ridge just behind your upper front teeth. Weil advises no more than 4 cycles at a time during the first month, at least twice a day.',
        steps: { inhale: 'Breathe in gently through your nose', hold: 'Hold your breath', exhale: 'Exhale fully through your mouth' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'A square pattern: 4 seconds in, 4 hold, 4 out and 4 pause. Became known through Mark Divine, a former Navy SEAL. Can help you settle down and concentrate.',
        steps: { inhale: 'Breathe in (4 sec)', hold: 'Hold (4 sec)', exhale: 'Breathe out (4 sec)', pause: 'Pause (4 sec)' }
      },
      equal: {
        name: 'Equal Breath',
        desc: 'Known in yoga as Sama Vritti, “equal movement”: your inhale and exhale last equally long. A simple exercise to start with.',
        steps: { inhale: 'Breathe in evenly', exhale: 'Breathe out evenly' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Breathing at 6 breaths per minute: 5 seconds in, 5 seconds out. At this pace your heart rate clearly rises and falls with your breath (heart coherence). A session lasts 5 minutes, as in the 3-6-5 method: 3 times a day, 6 breaths per minute, for 5 minutes.',
        steps: { inhale: 'Breathe in slowly (5 sec)', exhale: 'Breathe out slowly (5 sec)' }
      }
    },
    about: {
      title: 'About Adem & Rust',
      intro: 'Adem & Rust (Dutch for “Breath & Rest”) is a simple app for calm breathing. Choose a technique, press Start and breathe along with the circle: it grows as you breathe in, stays the same size while you hold your breath and shrinks as you breathe out. The number below the circle counts down to the next step.',
      expectTitle: 'What to expect',
      expect: 'Breathing exercises can help you relax, but research on them is still limited and the measured effects are small to moderate. This app is not a medical device and does not replace advice from a doctor. If you have a heart or lung condition or are pregnant, talk to your doctor before doing exercises that involve holding your breath.',
      privacyTitle: 'Privacy',
      privacy: 'The app sends no data and uses no cookies, accounts or tracking. Your statistics and settings are stored only in your own browser.',
      installTitle: 'Install and use offline',
      install: 'You can add the app to your home screen from your browser’s menu. After that it also works without an internet connection.',
      sourcesTitle: 'Sources',
      sourcesIntro: 'The explanations of the techniques are based on these sources:',
      research: 'Research on breathing exercises'
    }
  },

  fr: {
    appSubtitle: 'Respirez calmement, détendez le corps',
    tabBreathe: 'Pratiquer', tabStats: 'Statistiques', tabAbout: 'À propos',
    themeGroup: 'Thème', langGroup: 'Langue', techniqueGroup: 'Technique de respiration',
    themes: { ocean: 'Océan', sunset: 'Coucher de soleil', forest: 'Forêt', night: 'Nuit', candy: 'Bonbon', lavender: 'Lavande' },
    startBtn: 'Démarrer', stopBtn: 'Arrêter',
    soundOn: 'Son activé', soundOff: 'Son désactivé',
    ready: 'Prêt', readyInstruction: 'Choisissez un thème et une technique, puis appuyez sur Démarrer',
    done: 'Exercice terminé. Bravo.', doneLabel: 'Terminé',
    cycleText: (c, total) => `Cycle : ${c} / ${total}`,
    streak0: 'Commencez votre série aujourd’hui',
    streakActive: s => `${s} jour${s === 1 ? '' : 's'} d’affilée`,
    streakPaused: s => `${s} jour${s === 1 ? '' : 's'} d’affilée, pas encore de séance aujourd’hui`,
    tempoLabel: 'Durée d’un temps',
    tempoAria: s => `${s} secondes par temps`,
    tempoHint: s => `Un cycle dure maintenant ${s} secondes. S’il est difficile de retenir votre souffle pendant 7 temps, choisissez un temps plus court. Avec la pratique, vous pourrez ralentir. Le rapport 4:7:8 reste le même.`,
    lblTotalCycles: 'Cycles au total', lblTotalSessions: 'Séances au total', lblStreak: 'Jours d’affilée',
    lblToday: 'Cycles aujourd’hui', lblWeek: 'Cycles, 7 jours', lblLast: 'Dernière séance',
    chartTitle: 'Cycles par jour, 7 derniers jours',
    reminderTitle: '⏰ Rappel', reminderLabel: 'Rappel quotidien à', reminderSwitch: 'Activer ou désactiver le rappel',
    reminderNote: 'L’application affiche un rappel à l’heure choisie, tant qu’elle est ouverte.',
    reminderMsg: '⏰ C’est l’heure de votre exercice de respiration',
    close: 'Fermer',
    progressTitle: 'Votre progression',
    progressDesc: 'Dans une étude, les personnes qui ont pratiqué 5 minutes d’exercices de respiration chaque jour pendant un mois ont rapporté une meilleure humeur et moins d’anxiété.',
    safety: 'Si vous ressentez des vertiges ou une gêne, arrêtez et respirez normalement, à votre rythme.',
    phases: { inhale: 'Inspirer', hold: 'Retenir', exhale: 'Expirer', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sommeil',
        desc: 'Rendue populaire par le Dr Andrew Weil et inspirée du pranayama (respiration yogique). Inspirez par le nez sur 4 temps, retenez votre souffle pendant 7 temps et expirez de façon audible par la bouche sur 8 temps. Gardez la pointe de la langue contre le bourrelet juste derrière les incisives supérieures. Weil conseille de ne pas dépasser 4 cycles d’affilée le premier mois, au moins deux fois par jour.',
        steps: { inhale: 'Inspirez calmement par le nez', hold: 'Retenez votre souffle', exhale: 'Expirez complètement par la bouche' }
      },
      box: {
        name: 'Respiration carrée',
        desc: 'Un schéma carré : 4 secondes d’inspiration, 4 de rétention, 4 d’expiration et 4 de pause. Rendue populaire par Mark Divine, ancien Navy SEAL. Peut aider à se calmer et à se concentrer.',
        steps: { inhale: 'Inspirez (4 s)', hold: 'Retenez (4 s)', exhale: 'Expirez (4 s)', pause: 'Pause (4 s)' }
      },
      equal: {
        name: 'Respiration égale',
        desc: 'Appelée Sama Vritti en yoga, « mouvement égal » : l’inspiration et l’expiration durent aussi longtemps l’une que l’autre. Un exercice simple pour commencer.',
        steps: { inhale: 'Inspirez régulièrement', exhale: 'Expirez régulièrement' }
      },
      coherent: {
        name: 'Cohérence 5-5',
        desc: 'Respirer au rythme de 6 respirations par minute : 5 secondes d’inspiration, 5 secondes d’expiration. À ce rythme, le cœur accélère et ralentit nettement avec la respiration (cohérence cardiaque). Une séance dure 5 minutes, comme dans la méthode 3-6-5 : 3 fois par jour, 6 respirations par minute, pendant 5 minutes.',
        steps: { inhale: 'Inspirez lentement (5 s)', exhale: 'Expirez lentement (5 s)' }
      }
    },
    about: {
      title: 'À propos d’Adem & Rust',
      intro: 'Adem & Rust (« Souffle & Repos » en néerlandais) est une application simple pour respirer calmement. Choisissez une technique, appuyez sur Démarrer et respirez au rythme du cercle : il grandit quand vous inspirez, garde sa taille pendant que vous retenez votre souffle et rétrécit quand vous expirez. Le nombre sous le cercle décompte jusqu’à l’étape suivante.',
      expectTitle: 'À quoi vous attendre',
      expect: 'Les exercices de respiration peuvent aider à se détendre, mais la recherche à leur sujet reste limitée et les effets mesurés sont faibles à modérés. Cette application n’est pas un dispositif médical et ne remplace pas l’avis d’un médecin. Si vous avez une maladie cardiaque ou pulmonaire ou si vous êtes enceinte, parlez-en d’abord à votre médecin avant de faire des exercices où l’on retient son souffle.',
      privacyTitle: 'Confidentialité',
      privacy: 'L’application n’envoie aucune donnée et n’utilise ni cookies, ni comptes, ni suivi. Vos statistiques et réglages sont enregistrés uniquement dans votre propre navigateur.',
      installTitle: 'Installation et utilisation hors ligne',
      install: 'Vous pouvez ajouter l’application à votre écran d’accueil depuis le menu de votre navigateur. Elle fonctionne ensuite aussi sans connexion internet.',
      sourcesTitle: 'Sources',
      sourcesIntro: 'Les explications des techniques s’appuient sur ces sources :',
      research: 'Recherche sur les exercices de respiration'
    }
  },

  de: {
    appSubtitle: 'Ruhig atmen, Körper entspannen',
    tabBreathe: 'Üben', tabStats: 'Statistiken', tabAbout: 'Über',
    themeGroup: 'Thema', langGroup: 'Sprache', techniqueGroup: 'Atemtechnik',
    themes: { ocean: 'Ozean', sunset: 'Sonnenuntergang', forest: 'Wald', night: 'Nacht', candy: 'Bonbon', lavender: 'Lavendel' },
    startBtn: 'Start', stopBtn: 'Stopp',
    soundOn: 'Ton an', soundOff: 'Ton aus',
    ready: 'Bereit', readyInstruction: 'Wähle ein Thema und eine Technik und drücke dann auf Start',
    done: 'Übung abgeschlossen. Gut gemacht.', doneLabel: 'Fertig',
    cycleText: (c, total) => `Zyklus: ${c} / ${total}`,
    streak0: 'Starte heute deine Serie',
    streakActive: s => `${s} Tag${s === 1 ? '' : 'e'} in Folge`,
    streakPaused: s => `${s} Tag${s === 1 ? '' : 'e'} in Folge, heute noch nicht geübt`,
    tempoLabel: 'Dauer einer Zählzeit',
    tempoAria: s => `${s} Sekunden pro Zählzeit`,
    tempoHint: s => `Ein Zyklus dauert jetzt ${s} Sekunden. Fällt dir das Halten über 7 Zählzeiten schwer, wähle eine kürzere Zählzeit. Mit etwas Übung kannst du langsamer werden. Das Verhältnis 4:7:8 bleibt gleich.`,
    lblTotalCycles: 'Zyklen gesamt', lblTotalSessions: 'Sitzungen gesamt', lblStreak: 'Tage in Folge',
    lblToday: 'Zyklen heute', lblWeek: 'Zyklen, 7 Tage', lblLast: 'Letzte Sitzung',
    chartTitle: 'Zyklen pro Tag, letzte 7 Tage',
    reminderTitle: '⏰ Erinnerung', reminderLabel: 'Tägliche Erinnerung um', reminderSwitch: 'Erinnerung ein oder aus',
    reminderNote: 'Die App zeigt zur gewählten Zeit eine Erinnerung, solange sie geöffnet ist.',
    reminderMsg: '⏰ Zeit für deine Atemübung',
    close: 'Schließen',
    progressTitle: 'Dein Fortschritt',
    progressDesc: 'In einer Studie berichteten Menschen, die einen Monat lang täglich 5 Minuten Atemübungen machten, von besserer Stimmung und weniger Angst.',
    safety: 'Wird dir schwindelig oder fühlst du dich unwohl? Hör auf und atme in deinem eigenen Tempo weiter.',
    phases: { inhale: 'Einatmen', hold: 'Halten', exhale: 'Ausatmen', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Schlaf',
        desc: 'Bekannt gemacht von Dr. Andrew Weil und angelehnt an Pranayama (yogische Atmung). Atme 4 Zählzeiten durch die Nase ein, halte den Atem 7 Zählzeiten an und atme 8 Zählzeiten hörbar durch den Mund aus. Die Zungenspitze liegt dabei am Gaumen direkt hinter den oberen Schneidezähnen. Weil rät, im ersten Monat höchstens 4 Zyklen am Stück zu machen, mindestens zweimal täglich.',
        steps: { inhale: 'Atme ruhig durch die Nase ein', hold: 'Halte den Atem an', exhale: 'Atme vollständig durch den Mund aus' }
      },
      box: {
        name: 'Box-Atmung',
        desc: 'Ein quadratisches Muster: 4 Sekunden ein, 4 halten, 4 aus und 4 Pause. Bekannt geworden durch Mark Divine, einen ehemaligen Navy SEAL. Kann helfen, zur Ruhe zu kommen und sich zu konzentrieren.',
        steps: { inhale: 'Einatmen (4 Sek.)', hold: 'Halten (4 Sek.)', exhale: 'Ausatmen (4 Sek.)', pause: 'Pause (4 Sek.)' }
      },
      equal: {
        name: 'Gleichmäßiger Atem',
        desc: 'Im Yoga als Sama Vritti bekannt, „gleiche Bewegung“: Ein- und Ausatmung dauern gleich lang. Eine einfache Übung für den Einstieg.',
        steps: { inhale: 'Atme gleichmäßig ein', exhale: 'Atme gleichmäßig aus' }
      },
      coherent: {
        name: 'Kohärent 5-5',
        desc: 'Atmen im Tempo von 6 Atemzügen pro Minute: 5 Sekunden ein, 5 Sekunden aus. In diesem Tempo steigt und fällt der Herzschlag deutlich mit dem Atem (Herzkohärenz). Eine Sitzung dauert 5 Minuten, wie bei der Methode 3-6-5: 3-mal täglich, 6 Atemzüge pro Minute, 5 Minuten lang.',
        steps: { inhale: 'Langsam einatmen (5 Sek.)', exhale: 'Langsam ausatmen (5 Sek.)' }
      }
    },
    about: {
      title: 'Über Adem & Rust',
      intro: 'Adem & Rust (niederländisch für „Atem & Ruhe“) ist eine einfache App zum ruhigen Atmen. Wähle eine Technik, drücke auf Start und atme mit dem Kreis: Er wird größer, wenn du einatmest, bleibt gleich groß, während du den Atem anhältst, und wird kleiner, wenn du ausatmest. Die Zahl unter dem Kreis zählt bis zum nächsten Schritt herunter.',
      expectTitle: 'Was du erwarten kannst',
      expect: 'Atemübungen können beim Entspannen helfen, aber die Forschung dazu ist noch begrenzt und die gemessenen Effekte sind klein bis mittel. Diese App ist kein Medizinprodukt und ersetzt keinen ärztlichen Rat. Wenn du eine Herz- oder Lungenerkrankung hast oder schwanger bist, sprich vor Übungen mit Atemanhalten zuerst mit deiner Ärztin oder deinem Arzt.',
      privacyTitle: 'Datenschutz',
      privacy: 'Die App sendet keine Daten und verwendet keine Cookies, Konten oder Tracking. Deine Statistiken und Einstellungen werden nur in deinem eigenen Browser gespeichert.',
      installTitle: 'Installieren und offline nutzen',
      install: 'Du kannst die App über das Menü deines Browsers zum Startbildschirm hinzufügen. Danach funktioniert sie auch ohne Internetverbindung.',
      sourcesTitle: 'Quellen',
      sourcesIntro: 'Die Erklärungen zu den Techniken beruhen auf diesen Quellen:',
      research: 'Forschung zu Atemübungen'
    }
  },

  es: {
    appSubtitle: 'Respira con calma, relaja el cuerpo',
    tabBreathe: 'Practicar', tabStats: 'Estadísticas', tabAbout: 'Acerca de',
    themeGroup: 'Tema', langGroup: 'Idioma', techniqueGroup: 'Técnica de respiración',
    themes: { ocean: 'Océano', sunset: 'Atardecer', forest: 'Bosque', night: 'Noche', candy: 'Caramelo', lavender: 'Lavanda' },
    startBtn: 'Iniciar', stopBtn: 'Detener',
    soundOn: 'Sonido activado', soundOff: 'Sonido desactivado',
    ready: 'Listo', readyInstruction: 'Elige un tema y una técnica y pulsa Iniciar',
    done: 'Ejercicio completado. Bien hecho.', doneLabel: 'Terminado',
    cycleText: (c, total) => `Ciclo: ${c} / ${total}`,
    streak0: 'Empieza tu racha hoy',
    streakActive: s => `${s} día${s === 1 ? '' : 's'} seguido${s === 1 ? '' : 's'}`,
    streakPaused: s => `${s} día${s === 1 ? '' : 's'} seguido${s === 1 ? '' : 's'}, hoy todavía sin sesión`,
    tempoLabel: 'Duración de cada tiempo',
    tempoAria: s => `${s} segundos por tiempo`,
    tempoHint: s => `Ahora cada ciclo dura ${s} segundos. Si te cuesta aguantar 7 tiempos, elige un tiempo más corto. Con la práctica podrás ir más despacio. La proporción 4:7:8 se mantiene.`,
    lblTotalCycles: 'Ciclos totales', lblTotalSessions: 'Sesiones totales', lblStreak: 'Días seguidos',
    lblToday: 'Ciclos hoy', lblWeek: 'Ciclos, 7 días', lblLast: 'Última sesión',
    chartTitle: 'Ciclos por día, últimos 7 días',
    reminderTitle: '⏰ Recordatorio', reminderLabel: 'Recordatorio diario a las', reminderSwitch: 'Activar o desactivar el recordatorio',
    reminderNote: 'La app muestra un recordatorio a la hora elegida mientras está abierta.',
    reminderMsg: '⏰ Es hora de tu ejercicio de respiración',
    close: 'Cerrar',
    progressTitle: 'Tu progreso',
    progressDesc: 'En un estudio, las personas que hicieron 5 minutos diarios de ejercicios de respiración durante un mes tuvieron mejor estado de ánimo y menos ansiedad.',
    safety: 'Si te mareas o sientes molestias, para y respira con normalidad, a tu ritmo.',
    phases: { inhale: 'Inhalar', hold: 'Aguantar', exhale: 'Exhalar', pause: 'Pausa' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sueño',
        desc: 'Dada a conocer por el Dr. Andrew Weil y basada en el pranayama (respiración yóguica). Inhala por la nariz durante 4 tiempos, aguanta la respiración 7 tiempos y exhala de forma audible por la boca durante 8 tiempos. Mantén la punta de la lengua justo detrás de los dientes incisivos superiores. Weil aconseja no hacer más de 4 ciclos seguidos durante el primer mes, al menos dos veces al día.',
        steps: { inhale: 'Inhala suavemente por la nariz', hold: 'Aguanta la respiración', exhale: 'Exhala por completo por la boca' }
      },
      box: {
        name: 'Respiración cuadrada',
        desc: 'Un patrón cuadrado: 4 segundos inhalar, 4 aguantar, 4 exhalar y 4 pausa. Se dio a conocer a través de Mark Divine, exmiembro de los Navy SEAL. Puede ayudar a calmarse y concentrarse.',
        steps: { inhale: 'Inhala (4 s)', hold: 'Aguanta (4 s)', exhale: 'Exhala (4 s)', pause: 'Pausa (4 s)' }
      },
      equal: {
        name: 'Respiración igual',
        desc: 'Conocida en yoga como Sama Vritti, «movimiento igual»: la inhalación y la exhalación duran lo mismo. Un ejercicio sencillo para empezar.',
        steps: { inhale: 'Inhala de forma uniforme', exhale: 'Exhala de forma uniforme' }
      },
      coherent: {
        name: 'Coherente 5-5',
        desc: 'Respirar a un ritmo de 6 respiraciones por minuto: 5 segundos inhalar, 5 segundos exhalar. A este ritmo, el corazón se acelera y se ralentiza claramente con la respiración (coherencia cardíaca). Una sesión dura 5 minutos, como en el método 3-6-5: 3 veces al día, 6 respiraciones por minuto, durante 5 minutos.',
        steps: { inhale: 'Inhala lentamente (5 s)', exhale: 'Exhala lentamente (5 s)' }
      }
    },
    about: {
      title: 'Acerca de Adem & Rust',
      intro: 'Adem & Rust («Respiración y Calma» en neerlandés) es una app sencilla para respirar con calma. Elige una técnica, pulsa Iniciar y respira al ritmo del círculo: crece cuando inhalas, mantiene su tamaño mientras aguantas la respiración y se encoge cuando exhalas. El número debajo del círculo cuenta hacia atrás hasta el siguiente paso.',
      expectTitle: 'Qué puedes esperar',
      expect: 'Los ejercicios de respiración pueden ayudar a relajarse, pero la investigación sobre ellos aún es limitada y los efectos medidos son de pequeños a moderados. Esta app no es un dispositivo médico y no sustituye el consejo de un médico. Si tienes una enfermedad cardíaca o pulmonar o estás embarazada, consulta primero a tu médico antes de hacer ejercicios en los que se aguanta la respiración.',
      privacyTitle: 'Privacidad',
      privacy: 'La app no envía datos ni usa cookies, cuentas ni seguimiento. Tus estadísticas y ajustes se guardan solo en tu propio navegador.',
      installTitle: 'Instalar y usar sin conexión',
      install: 'Puedes añadir la app a la pantalla de inicio desde el menú de tu navegador. Después también funciona sin conexión a internet.',
      sourcesTitle: 'Fuentes',
      sourcesIntro: 'Las explicaciones de las técnicas se basan en estas fuentes:',
      research: 'Investigación sobre ejercicios de respiración'
    }
  }
};
