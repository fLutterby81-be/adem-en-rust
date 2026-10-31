/* Adem & Rust – vertalingen (NL, EN, FR, DE, ES)
 *
 * Elke taal heeft dezelfde sleutels. Teksten in de HTML verwijzen ernaar via
 * data-i18n="sleutel" (geneste sleutels met een punt, bv. "techniques.box.name").
 */
const I18N = {
  nl: {
    appSubtitle: 'Rustig ademen, ontspannen lichaam',
    tabBreathe: 'Oefenen', tabStats: 'Statistieken',
    themeGroup: 'Thema', langGroup: 'Taal', techniqueGroup: 'Ademtechniek',
    themes: { ocean: 'Oceaan', sunset: 'Zonsondergang', forest: 'Bos', night: 'Nacht', candy: 'Snoep', lavender: 'Lavendel' },
    startBtn: 'Start', stopBtn: 'Stop',
    soundOn: 'Geluid aan', soundOff: 'Geluid uit',
    ready: 'Klaar', readyInstruction: 'Kies een thema en techniek, dan druk je op Start',
    done: 'Oefening voltooid. Goed gedaan! 🎉', doneLabel: 'Klaar!',
    cycleText: (c, total) => `Cyclus: ${c} / ${total}`,
    streak0: 'Begin vandaag je reeks!',
    streakActive: s => `${s} ${s === 1 ? 'dag' : 'dagen'} op rij 🔥`,
    streakPaused: s => `${s} ${s === 1 ? 'dag' : 'dagen'} op rij (doe vandaag een sessie!)`,
    lblTotalCycles: 'Totaal cycli', lblTotalSessions: 'Totaal sessies', lblStreak: 'Dagen op rij',
    lblToday: 'Cycli vandaag', lblWeek: 'Cycli, 7 dagen', lblLast: 'Laatste sessie',
    chartTitle: 'Cycli per dag, afgelopen 7 dagen',
    reminderTitle: '⏰ Herinnering', reminderLabel: 'Dagelijkse herinnering om', reminderSwitch: 'Herinnering aan of uit',
    reminderNote: 'De app toont op het gekozen tijdstip een herinnering, zolang ze openstaat.',
    reminderMsg: '⏰ Tijd voor je ademhalingsoefening!',
    close: 'Sluiten',
    progressTitle: 'Jouw voortgang',
    progressDesc: 'Regelmaat helpt. In een studie hadden mensen die een maand lang dagelijks 5 minuten ademhalingsoefeningen deden een betere stemming en minder angstgevoelens.',
    safety: 'Voel je je duizelig of ongemakkelijk? Stop en adem rustig verder in je eigen tempo.',
    phases: { inhale: 'Inademen', hold: 'Vasthouden', exhale: 'Uitademen', pause: 'Pauze' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Slaap',
        desc: 'Gepopulariseerd door Dr. Andrew Weil en gebaseerd op pranayama (yoga-ademhaling). Weil noemt het een natuurlijk kalmeringsmiddel voor het zenuwstelsel. Adem 4 seconden in door je neus, houd 7 seconden vast en adem 8 seconden hoorbaar uit door je mond, met je tongpunt tegen het randje net achter je bovenste voortanden. Weil raadt aan om de eerste maand niet meer dan 4 cycli na elkaar te doen, minstens twee keer per dag.',
        steps: { inhale: 'Adem rustig in door je neus', hold: 'Houd je adem vast', exhale: 'Adem volledig uit door je mond' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'Gepopulariseerd door oud-Navy SEAL Mark Divine, die het gebruikte om kalm en gefocust te blijven onder druk. Een vierkant patroon: 4 seconden in, 4 vast, 4 uit, 4 pauze. Kan helpen om stress te verminderen en je te concentreren.',
        steps: { inhale: 'Adem in (4 sec)', hold: 'Houd vast (4 sec)', exhale: 'Adem uit (4 sec)', pause: 'Pauze (4 sec)' }
      },
      equal: {
        name: 'Gelijke Adem',
        desc: 'In yoga bekend als Sama Vritti, “gelijke beweging”: je in- en uitademing duren even lang. Een eenvoudige, rustgevende oefening, ideaal voor beginners en dagelijkse ontspanning.',
        steps: { inhale: 'Adem gelijkmatig in', exhale: 'Adem gelijkmatig uit' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Ademen in een tempo van 6 keer per minuut: 5 seconden in, 5 seconden uit. Rond dit tempo gaat je hartslag duidelijk mee op en neer met je ademhaling (hartcoherentie), wat helpt om tot rust te komen.',
        steps: { inhale: 'Langzaam inademen (5 sec)', exhale: 'Langzaam uitademen (5 sec)' }
      }
    }
  },

  en: {
    appSubtitle: 'Breathe calmly, relax the body',
    tabBreathe: 'Practice', tabStats: 'Statistics',
    themeGroup: 'Theme', langGroup: 'Language', techniqueGroup: 'Breathing technique',
    themes: { ocean: 'Ocean', sunset: 'Sunset', forest: 'Forest', night: 'Night', candy: 'Candy', lavender: 'Lavender' },
    startBtn: 'Start', stopBtn: 'Stop',
    soundOn: 'Sound on', soundOff: 'Sound off',
    ready: 'Ready', readyInstruction: 'Choose a theme and technique, then press Start',
    done: 'Exercise complete. Well done! 🎉', doneLabel: 'Done!',
    cycleText: (c, total) => `Cycle: ${c} / ${total}`,
    streak0: 'Start your streak today!',
    streakActive: s => `${s} day${s === 1 ? '' : 's'} in a row 🔥`,
    streakPaused: s => `${s} day${s === 1 ? '' : 's'} in a row (do a session today!)`,
    lblTotalCycles: 'Total cycles', lblTotalSessions: 'Total sessions', lblStreak: 'Day streak',
    lblToday: 'Cycles today', lblWeek: 'Cycles, 7 days', lblLast: 'Last session',
    chartTitle: 'Cycles per day, last 7 days',
    reminderTitle: '⏰ Reminder', reminderLabel: 'Daily reminder at', reminderSwitch: 'Reminder on or off',
    reminderNote: 'The app shows a reminder at the chosen time, as long as it is open.',
    reminderMsg: '⏰ Time for your breathing exercise!',
    close: 'Close',
    progressTitle: 'Your progress',
    progressDesc: 'Regularity helps. In one study, people who did 5 minutes of breathing exercises daily for a month reported better mood and less anxiety.',
    safety: 'Feeling dizzy or uncomfortable? Stop and breathe normally at your own pace.',
    phases: { inhale: 'Inhale', hold: 'Hold', exhale: 'Exhale', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sleep',
        desc: 'Popularized by Dr. Andrew Weil and based on pranayama (yogic breathing). Weil calls it a natural tranquilizer for the nervous system. Inhale through your nose for 4 seconds, hold for 7, and exhale audibly through your mouth for 8, with the tip of your tongue against the ridge just behind your upper front teeth. Weil advises no more than 4 cycles at a time during the first month, at least twice a day.',
        steps: { inhale: 'Breathe in gently through your nose', hold: 'Hold your breath', exhale: 'Exhale fully through your mouth' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'Popularized by former Navy SEAL Mark Divine, who used it to stay calm and focused under pressure. A square pattern: 4 seconds in, 4 hold, 4 out, 4 pause. Can help reduce stress and improve concentration.',
        steps: { inhale: 'Breathe in (4 sec)', hold: 'Hold (4 sec)', exhale: 'Breathe out (4 sec)', pause: 'Pause (4 sec)' }
      },
      equal: {
        name: 'Equal Breath',
        desc: 'Known in yoga as Sama Vritti, “equal movement”: your inhale and exhale last equally long. A simple, calming exercise, ideal for beginners and daily relaxation.',
        steps: { inhale: 'Breathe in evenly', exhale: 'Breathe out evenly' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Breathing at 6 breaths per minute: 5 seconds in, 5 seconds out. Around this pace your heart rate clearly rises and falls with your breath (heart coherence), which helps you calm down.',
        steps: { inhale: 'Breathe in slowly (5 sec)', exhale: 'Breathe out slowly (5 sec)' }
      }
    }
  },

  fr: {
    appSubtitle: 'Respirez calmement, détendez le corps',
    tabBreathe: 'Pratiquer', tabStats: 'Statistiques',
    themeGroup: 'Thème', langGroup: 'Langue', techniqueGroup: 'Technique de respiration',
    themes: { ocean: 'Océan', sunset: 'Coucher de soleil', forest: 'Forêt', night: 'Nuit', candy: 'Bonbon', lavender: 'Lavande' },
    startBtn: 'Démarrer', stopBtn: 'Arrêter',
    soundOn: 'Son activé', soundOff: 'Son désactivé',
    ready: 'Prêt', readyInstruction: 'Choisissez un thème et une technique, puis appuyez sur Démarrer',
    done: 'Exercice terminé. Bravo ! 🎉', doneLabel: 'Terminé !',
    cycleText: (c, total) => `Cycle : ${c} / ${total}`,
    streak0: 'Commencez votre série aujourd’hui !',
    streakActive: s => `${s} jour${s === 1 ? '' : 's'} d’affilée 🔥`,
    streakPaused: s => `${s} jour${s === 1 ? '' : 's'} d’affilée (faites une séance aujourd’hui !)`,
    lblTotalCycles: 'Cycles au total', lblTotalSessions: 'Séances au total', lblStreak: 'Jours d’affilée',
    lblToday: 'Cycles aujourd’hui', lblWeek: 'Cycles, 7 jours', lblLast: 'Dernière séance',
    chartTitle: 'Cycles par jour, 7 derniers jours',
    reminderTitle: '⏰ Rappel', reminderLabel: 'Rappel quotidien à', reminderSwitch: 'Activer ou désactiver le rappel',
    reminderNote: 'L’application affiche un rappel à l’heure choisie, tant qu’elle est ouverte.',
    reminderMsg: '⏰ C’est l’heure de votre exercice de respiration !',
    close: 'Fermer',
    progressTitle: 'Votre progression',
    progressDesc: 'La régularité aide. Dans une étude, les personnes qui pratiquaient 5 minutes d’exercices de respiration par jour pendant un mois rapportaient une meilleure humeur et moins d’anxiété.',
    safety: 'Si vous ressentez des vertiges ou une gêne, arrêtez et respirez normalement, à votre rythme.',
    phases: { inhale: 'Inspirer', hold: 'Retenir', exhale: 'Expirer', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sommeil',
        desc: 'Popularisée par le Dr Andrew Weil et inspirée du pranayama (respiration yogique). Weil la qualifie de tranquillisant naturel pour le système nerveux. Inspirez par le nez pendant 4 secondes, retenez 7 secondes, puis expirez de façon audible par la bouche pendant 8 secondes, la pointe de la langue contre le bourrelet juste derrière les incisives supérieures. Weil conseille de ne pas dépasser 4 cycles d’affilée le premier mois, au moins deux fois par jour.',
        steps: { inhale: 'Inspirez calmement par le nez', hold: 'Retenez votre souffle', exhale: 'Expirez complètement par la bouche' }
      },
      box: {
        name: 'Respiration carrée',
        desc: 'Popularisée par l’ancien Navy SEAL Mark Divine, qui l’utilisait pour rester calme et concentré sous pression. Un schéma carré : 4 secondes d’inspiration, 4 de rétention, 4 d’expiration, 4 de pause. Peut aider à réduire le stress et à se concentrer.',
        steps: { inhale: 'Inspirez (4 s)', hold: 'Retenez (4 s)', exhale: 'Expirez (4 s)', pause: 'Pause (4 s)' }
      },
      equal: {
        name: 'Respiration égale',
        desc: 'Appelée Sama Vritti en yoga, « mouvement égal » : l’inspiration et l’expiration durent aussi longtemps l’une que l’autre. Un exercice simple et apaisant, idéal pour débuter et se détendre au quotidien.',
        steps: { inhale: 'Inspirez régulièrement', exhale: 'Expirez régulièrement' }
      },
      coherent: {
        name: 'Cohérence 5-5',
        desc: 'Respirer au rythme de 6 respirations par minute : 5 secondes d’inspiration, 5 secondes d’expiration. À ce rythme, le cœur accélère et ralentit nettement avec la respiration (cohérence cardiaque), ce qui aide à retrouver le calme.',
        steps: { inhale: 'Inspirez lentement (5 s)', exhale: 'Expirez lentement (5 s)' }
      }
    }
  },

  de: {
    appSubtitle: 'Ruhig atmen, Körper entspannen',
    tabBreathe: 'Üben', tabStats: 'Statistiken',
    themeGroup: 'Thema', langGroup: 'Sprache', techniqueGroup: 'Atemtechnik',
    themes: { ocean: 'Ozean', sunset: 'Sonnenuntergang', forest: 'Wald', night: 'Nacht', candy: 'Bonbon', lavender: 'Lavendel' },
    startBtn: 'Start', stopBtn: 'Stopp',
    soundOn: 'Ton an', soundOff: 'Ton aus',
    ready: 'Bereit', readyInstruction: 'Wähle ein Thema und eine Technik und drücke dann auf Start',
    done: 'Übung abgeschlossen. Gut gemacht! 🎉', doneLabel: 'Fertig!',
    cycleText: (c, total) => `Zyklus: ${c} / ${total}`,
    streak0: 'Starte heute deine Serie!',
    streakActive: s => `${s} Tag${s === 1 ? '' : 'e'} in Folge 🔥`,
    streakPaused: s => `${s} Tag${s === 1 ? '' : 'e'} in Folge (mach heute eine Sitzung!)`,
    lblTotalCycles: 'Zyklen gesamt', lblTotalSessions: 'Sitzungen gesamt', lblStreak: 'Tage in Folge',
    lblToday: 'Zyklen heute', lblWeek: 'Zyklen, 7 Tage', lblLast: 'Letzte Sitzung',
    chartTitle: 'Zyklen pro Tag, letzte 7 Tage',
    reminderTitle: '⏰ Erinnerung', reminderLabel: 'Tägliche Erinnerung um', reminderSwitch: 'Erinnerung ein oder aus',
    reminderNote: 'Die App zeigt zur gewählten Zeit eine Erinnerung, solange sie geöffnet ist.',
    reminderMsg: '⏰ Zeit für deine Atemübung!',
    close: 'Schließen',
    progressTitle: 'Dein Fortschritt',
    progressDesc: 'Regelmäßigkeit hilft. In einer Studie berichteten Menschen, die einen Monat lang täglich 5 Minuten Atemübungen machten, von besserer Stimmung und weniger Angst.',
    safety: 'Wird dir schwindelig oder fühlst du dich unwohl? Hör auf und atme in deinem eigenen Tempo weiter.',
    phases: { inhale: 'Einatmen', hold: 'Halten', exhale: 'Ausatmen', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Schlaf',
        desc: 'Bekannt gemacht von Dr. Andrew Weil und angelehnt an Pranayama (yogische Atmung). Weil nennt sie ein natürliches Beruhigungsmittel für das Nervensystem. Atme 4 Sekunden durch die Nase ein, halte 7 Sekunden und atme 8 Sekunden hörbar durch den Mund aus; die Zungenspitze liegt dabei am Gaumen direkt hinter den oberen Schneidezähnen. Weil rät, im ersten Monat höchstens 4 Zyklen am Stück zu machen, mindestens zweimal täglich.',
        steps: { inhale: 'Atme ruhig durch die Nase ein', hold: 'Halte den Atem an', exhale: 'Atme vollständig durch den Mund aus' }
      },
      box: {
        name: 'Box-Atmung',
        desc: 'Bekannt gemacht vom ehemaligen Navy SEAL Mark Divine, der sie nutzte, um unter Druck ruhig und fokussiert zu bleiben. Ein quadratisches Muster: 4 Sekunden ein, 4 halten, 4 aus, 4 Pause. Kann helfen, Stress abzubauen und sich zu konzentrieren.',
        steps: { inhale: 'Einatmen (4 Sek.)', hold: 'Halten (4 Sek.)', exhale: 'Ausatmen (4 Sek.)', pause: 'Pause (4 Sek.)' }
      },
      equal: {
        name: 'Gleichmäßiger Atem',
        desc: 'Im Yoga als Sama Vritti bekannt, „gleiche Bewegung“: Ein- und Ausatmung dauern gleich lang. Eine einfache, beruhigende Übung, ideal zum Einstieg und für die tägliche Entspannung.',
        steps: { inhale: 'Atme gleichmäßig ein', exhale: 'Atme gleichmäßig aus' }
      },
      coherent: {
        name: 'Kohärent 5-5',
        desc: 'Atmen im Tempo von 6 Atemzügen pro Minute: 5 Sekunden ein, 5 Sekunden aus. In diesem Tempo steigt und fällt der Herzschlag deutlich mit dem Atem (Herzkohärenz), was beim Entspannen hilft.',
        steps: { inhale: 'Langsam einatmen (5 Sek.)', exhale: 'Langsam ausatmen (5 Sek.)' }
      }
    }
  },

  es: {
    appSubtitle: 'Respira con calma, relaja el cuerpo',
    tabBreathe: 'Practicar', tabStats: 'Estadísticas',
    themeGroup: 'Tema', langGroup: 'Idioma', techniqueGroup: 'Técnica de respiración',
    themes: { ocean: 'Océano', sunset: 'Atardecer', forest: 'Bosque', night: 'Noche', candy: 'Caramelo', lavender: 'Lavanda' },
    startBtn: 'Iniciar', stopBtn: 'Detener',
    soundOn: 'Sonido activado', soundOff: 'Sonido desactivado',
    ready: 'Listo', readyInstruction: 'Elige un tema y una técnica y pulsa Iniciar',
    done: 'Ejercicio completado. ¡Bien hecho! 🎉', doneLabel: '¡Listo!',
    cycleText: (c, total) => `Ciclo: ${c} / ${total}`,
    streak0: '¡Empieza tu racha hoy!',
    streakActive: s => `¡${s} día${s === 1 ? '' : 's'} seguido${s === 1 ? '' : 's'}! 🔥`,
    streakPaused: s => `${s} día${s === 1 ? '' : 's'} seguido${s === 1 ? '' : 's'} (¡haz una sesión hoy!)`,
    lblTotalCycles: 'Ciclos totales', lblTotalSessions: 'Sesiones totales', lblStreak: 'Días seguidos',
    lblToday: 'Ciclos hoy', lblWeek: 'Ciclos, 7 días', lblLast: 'Última sesión',
    chartTitle: 'Ciclos por día, últimos 7 días',
    reminderTitle: '⏰ Recordatorio', reminderLabel: 'Recordatorio diario a las', reminderSwitch: 'Activar o desactivar el recordatorio',
    reminderNote: 'La app muestra un recordatorio a la hora elegida mientras está abierta.',
    reminderMsg: '⏰ ¡Es hora de tu ejercicio de respiración!',
    close: 'Cerrar',
    progressTitle: 'Tu progreso',
    progressDesc: 'La constancia ayuda. En un estudio, las personas que hicieron 5 minutos diarios de ejercicios de respiración durante un mes tuvieron mejor estado de ánimo y menos ansiedad.',
    safety: 'Si te mareas o sientes molestias, para y respira con normalidad, a tu ritmo.',
    phases: { inhale: 'Inhalar', hold: 'Aguantar', exhale: 'Exhalar', pause: 'Pausa' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sueño',
        desc: 'Popularizada por el Dr. Andrew Weil y basada en el pranayama (respiración yóguica). Weil la describe como un tranquilizante natural para el sistema nervioso. Inhala por la nariz durante 4 segundos, aguanta 7 y exhala de forma audible por la boca durante 8, con la punta de la lengua apoyada justo detrás de los dientes incisivos superiores. Weil aconseja no hacer más de 4 ciclos seguidos durante el primer mes, al menos dos veces al día.',
        steps: { inhale: 'Inhala suavemente por la nariz', hold: 'Aguanta la respiración', exhale: 'Exhala por completo por la boca' }
      },
      box: {
        name: 'Respiración cuadrada',
        desc: 'Popularizada por Mark Divine, exmiembro de los Navy SEAL, que la usaba para mantener la calma y la concentración bajo presión. Un patrón cuadrado: 4 segundos inhalar, 4 aguantar, 4 exhalar, 4 pausa. Puede ayudar a reducir el estrés y a concentrarse.',
        steps: { inhale: 'Inhala (4 s)', hold: 'Aguanta (4 s)', exhale: 'Exhala (4 s)', pause: 'Pausa (4 s)' }
      },
      equal: {
        name: 'Respiración igual',
        desc: 'Conocida en yoga como Sama Vritti, «movimiento igual»: la inhalación y la exhalación duran lo mismo. Un ejercicio sencillo y relajante, ideal para principiantes y para relajarse a diario.',
        steps: { inhale: 'Inhala de forma uniforme', exhale: 'Exhala de forma uniforme' }
      },
      coherent: {
        name: 'Coherente 5-5',
        desc: 'Respirar a un ritmo de 6 respiraciones por minuto: 5 segundos inhalar, 5 segundos exhalar. A este ritmo, el corazón se acelera y se ralentiza claramente con la respiración (coherencia cardíaca), lo que ayuda a calmarse.',
        steps: { inhale: 'Inhala lentamente (5 s)', exhale: 'Exhala lentamente (5 s)' }
      }
    }
  }
};
