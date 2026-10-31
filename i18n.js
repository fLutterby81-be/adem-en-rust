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
    progressDesc: 'Blijf consistent om de meeste voordelen te ervaren. Zelfs 3 minuten per dag helpt al bij stressvermindering en betere slaap.',
    safety: 'Voel je je duizelig of ongemakkelijk? Stop en adem rustig verder in je eigen tempo.',
    phases: { inhale: 'Inademen', hold: 'Vasthouden', exhale: 'Uitademen', pause: 'Pauze' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Slaap',
        desc: 'Ontwikkeld door Dr. Andrew Weil. Een natuurlijk kalmeringsmiddel voor het zenuwstelsel. Adem 4 seconden in door je neus, houd 7 seconden vast, en adem 8 seconden uit door je mond. Herhaal 4 tot 8 cycli.',
        steps: { inhale: 'Adem rustig in door je neus', hold: 'Houd je adem vast', exhale: 'Adem volledig uit door je mond' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'Gebruikt door Navy SEALs voor focus onder druk. Een vierkant patroon van 4 seconden in, 4 vast, 4 uit, 4 pauze. Helpt bij stressmanagement en concentratie.',
        steps: { inhale: 'Adem in (4 sec)', hold: 'Houd vast (4 sec)', exhale: 'Adem uit (4 sec)', pause: 'Pauze (4 sec)' }
      },
      equal: {
        name: 'Gelijke Adem',
        desc: 'Sama Vritti in yoga. Balanceert lichaam en geest door gelijke in- en uitademing. Ideaal voor beginners en dagelijkse ontspanning.',
        steps: { inhale: 'Adem gelijkmatig in', exhale: 'Adem gelijkmatig uit' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Coherente ademhaling op een 5-5 ritme. Brengt hartslag en ademhaling in harmonie voor optimale ontspanning en hartcoherentie.',
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
    progressDesc: 'Stay consistent for maximum benefits. Even 3 minutes per day helps reduce stress and improve sleep.',
    safety: 'Feeling dizzy or uncomfortable? Stop and breathe normally at your own pace.',
    phases: { inhale: 'Inhale', hold: 'Hold', exhale: 'Exhale', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sleep',
        desc: 'Developed by Dr. Andrew Weil. A natural tranquilizer for the nervous system. Inhale through your nose for 4 seconds, hold for 7, and exhale through your mouth for 8. Repeat 4 to 8 cycles.',
        steps: { inhale: 'Breathe in gently through your nose', hold: 'Hold your breath', exhale: 'Exhale fully through your mouth' }
      },
      box: {
        name: 'Box Breathing',
        desc: 'Used by Navy SEALs for focus under pressure. A square pattern of 4 seconds in, 4 hold, 4 out, 4 pause. Helps with stress management and concentration.',
        steps: { inhale: 'Breathe in (4 sec)', hold: 'Hold (4 sec)', exhale: 'Breathe out (4 sec)', pause: 'Pause (4 sec)' }
      },
      equal: {
        name: 'Equal Breath',
        desc: 'Sama Vritti in yoga. Balances body and mind through equal inhalation and exhalation. Ideal for beginners and daily relaxation.',
        steps: { inhale: 'Breathe in evenly', exhale: 'Breathe out evenly' }
      },
      coherent: {
        name: 'Coherent 5-5',
        desc: 'Coherent breathing at a 5-5 rhythm. Brings heart rate and breathing into harmony for optimal relaxation and heart coherence.',
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
    progressDesc: 'Restez régulier pour en tirer le maximum de bienfaits. Même 3 minutes par jour aident à réduire le stress et à mieux dormir.',
    safety: 'Si vous ressentez des vertiges ou une gêne, arrêtez et respirez normalement, à votre rythme.',
    phases: { inhale: 'Inspirer', hold: 'Retenir', exhale: 'Expirer', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sommeil',
        desc: 'Développée par le Dr Andrew Weil. Un tranquillisant naturel pour le système nerveux. Inspirez par le nez pendant 4 secondes, retenez 7 secondes, puis expirez par la bouche pendant 8 secondes. Répétez 4 à 8 cycles.',
        steps: { inhale: 'Inspirez calmement par le nez', hold: 'Retenez votre souffle', exhale: 'Expirez complètement par la bouche' }
      },
      box: {
        name: 'Respiration carrée',
        desc: 'Utilisée par les Navy SEALs pour rester concentrés sous pression. Un schéma carré : 4 secondes d’inspiration, 4 de rétention, 4 d’expiration, 4 de pause. Aide à gérer le stress et à se concentrer.',
        steps: { inhale: 'Inspirez (4 s)', hold: 'Retenez (4 s)', exhale: 'Expirez (4 s)', pause: 'Pause (4 s)' }
      },
      equal: {
        name: 'Respiration égale',
        desc: 'Sama Vritti en yoga. Équilibre le corps et l’esprit grâce à une inspiration et une expiration de même durée. Idéale pour débuter et pour se détendre au quotidien.',
        steps: { inhale: 'Inspirez régulièrement', exhale: 'Expirez régulièrement' }
      },
      coherent: {
        name: 'Cohérence 5-5',
        desc: 'Respiration cohérente sur un rythme 5-5. Harmonise le rythme cardiaque et la respiration pour une détente optimale et une cohérence cardiaque.',
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
    progressDesc: 'Bleib dran, um am meisten davon zu profitieren. Schon 3 Minuten pro Tag helfen, Stress abzubauen und besser zu schlafen.',
    safety: 'Wird dir schwindelig oder fühlst du dich unwohl? Hör auf und atme in deinem eigenen Tempo weiter.',
    phases: { inhale: 'Einatmen', hold: 'Halten', exhale: 'Ausatmen', pause: 'Pause' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Schlaf',
        desc: 'Entwickelt von Dr. Andrew Weil. Ein natürliches Beruhigungsmittel für das Nervensystem. Atme 4 Sekunden durch die Nase ein, halte 7 Sekunden und atme 8 Sekunden durch den Mund aus. Wiederhole 4 bis 8 Zyklen.',
        steps: { inhale: 'Atme ruhig durch die Nase ein', hold: 'Halte den Atem an', exhale: 'Atme vollständig durch den Mund aus' }
      },
      box: {
        name: 'Box-Atmung',
        desc: 'Wird von Navy SEALs genutzt, um unter Druck fokussiert zu bleiben. Ein quadratisches Muster: 4 Sekunden ein, 4 halten, 4 aus, 4 Pause. Hilft bei Stressbewältigung und Konzentration.',
        steps: { inhale: 'Einatmen (4 Sek.)', hold: 'Halten (4 Sek.)', exhale: 'Ausatmen (4 Sek.)', pause: 'Pause (4 Sek.)' }
      },
      equal: {
        name: 'Gleichmäßiger Atem',
        desc: 'Sama Vritti im Yoga. Bringt Körper und Geist durch gleich lange Ein- und Ausatmung ins Gleichgewicht. Ideal zum Einstieg und für die tägliche Entspannung.',
        steps: { inhale: 'Atme gleichmäßig ein', exhale: 'Atme gleichmäßig aus' }
      },
      coherent: {
        name: 'Kohärent 5-5',
        desc: 'Kohärente Atmung im 5-5-Rhythmus. Bringt Herzschlag und Atmung in Einklang für optimale Entspannung und Herzkohärenz.',
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
    progressDesc: 'Sé constante para obtener los máximos beneficios. Incluso 3 minutos al día ayudan a reducir el estrés y a dormir mejor.',
    safety: 'Si te mareas o sientes molestias, para y respira con normalidad, a tu ritmo.',
    phases: { inhale: 'Inhalar', hold: 'Aguantar', exhale: 'Exhalar', pause: 'Pausa' },
    techniques: {
      '4-7-8': {
        name: '4-7-8 Sueño',
        desc: 'Desarrollada por el Dr. Andrew Weil. Un tranquilizante natural para el sistema nervioso. Inhala por la nariz durante 4 segundos, aguanta 7 y exhala por la boca durante 8. Repite de 4 a 8 ciclos.',
        steps: { inhale: 'Inhala suavemente por la nariz', hold: 'Aguanta la respiración', exhale: 'Exhala por completo por la boca' }
      },
      box: {
        name: 'Respiración cuadrada',
        desc: 'La usan los Navy SEALs para mantener la concentración bajo presión. Un patrón cuadrado: 4 segundos inhalar, 4 aguantar, 4 exhalar, 4 pausa. Ayuda a manejar el estrés y a concentrarse.',
        steps: { inhale: 'Inhala (4 s)', hold: 'Aguanta (4 s)', exhale: 'Exhala (4 s)', pause: 'Pausa (4 s)' }
      },
      equal: {
        name: 'Respiración igual',
        desc: 'Sama Vritti en yoga. Equilibra cuerpo y mente con inhalaciones y exhalaciones de igual duración. Ideal para principiantes y para relajarse a diario.',
        steps: { inhale: 'Inhala de forma uniforme', exhale: 'Exhala de forma uniforme' }
      },
      coherent: {
        name: 'Coherente 5-5',
        desc: 'Respiración coherente a ritmo 5-5. Armoniza el ritmo cardíaco y la respiración para una relajación óptima y coherencia cardíaca.',
        steps: { inhale: 'Inhala lentamente (5 s)', exhale: 'Exhala lentamente (5 s)' }
      }
    }
  }
};
