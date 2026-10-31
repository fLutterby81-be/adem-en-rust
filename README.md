# Adem & Rust

Een eenvoudige web-app (PWA) met begeleide ademhalingsoefeningen. Ze werkt in de
browser, kan op je telefoon worden geïnstalleerd en werkt daarna ook offline.

## Wat de app doet

- **Vier technieken**: 4-7-8, box breathing, gelijke adem en coherente ademhaling 5-5
  - bij 4-7-8 kies je zelf hoe lang één tel duurt (0,5 tot 1,5 seconde); de verhouding 4:7:8 blijft gelijk
  - een sessie coherente ademhaling duurt 5 minuten (methode 3-6-5)
- **Ademcirkel** die groter en kleiner wordt, met aftelling en voortgangsring per fase
- **Zes kleurthema's**, elk met een eigen achtergrondgeluid dat in de browser wordt opgewekt
- **Vijf talen**: Nederlands, Engels, Frans, Duits en Spaans
- **Statistieken**: cycli, sessies, dagen op rij en een grafiek van de afgelopen 7 dagen
- **Dagelijkse herinnering** zolang de app openstaat
- **Over-pagina** met uitleg, privacy-informatie en bronnen
- Het scherm blijft aan tijdens een oefening (op toestellen die dat ondersteunen)

## Bestanden

| Bestand | Inhoud |
| --- | --- |
| `index.html` | De pagina-opbouw |
| `style.css` | Opmaak en lay-out |
| `i18n.js` | Alle teksten in de vijf talen |
| `app.js` | De logica: ademsessie, tempo, geluid, statistieken, herinnering, thema's |
| `sw.js` | Service worker voor offline gebruik |
| `manifest.json` | Gegevens om de app te installeren (naam, iconen, kleuren) |
| `icons/` | App-iconen (`icon.svg` is de bron; de PNG's zijn ervan afgeleid) |

Er is geen build-stap en er zijn geen afhankelijkheden: het zijn gewone HTML-, CSS- en JavaScript-bestanden.

## Lokaal uitproberen

Open `index.html` rechtstreeks in je browser, of start een kleine webserver
(nodig om de offline-functie en installatie te testen):

```bash
python3 -m http.server 8000
# open daarna http://localhost:8000
```

## Publiceren met GitHub Pages

1. Ga in de repository naar **Settings → Pages**.
2. Kies bij *Source* voor **Deploy from a branch**, branch `main`, map `/ (root)`.
3. Na een minuutje staat de app op `https://<gebruikersnaam>.github.io/adem-en-rust/`.

Alle paden zijn relatief, dus de app werkt ook in zo'n submap.

## Aanpassen

- **Teksten of vertalingen**: pas `i18n.js` aan. Elke taal moet dezelfde sleutels hebben.
  Houd de toon rustig en feitelijk, zonder grote beloftes.
- **Een techniek wijzigen of toevoegen**: pas `TECHNIQUES` bovenaan `app.js` aan
  (fasen, aantal tellen, aantal cycli), voeg teksten toe onder `techniques` in
  `i18n.js` en een knop in `index.html`. Met `tempo: true` krijgt een techniek de
  tempokeuze; de keuzes staan in `TEMPO_OPTIONS`.
- **Kleuren van een thema**: pas `THEMES` bovenaan `app.js` aan. Let op voldoende
  contrast tussen tekst en achtergrond.
- **Updates**: de service worker haalt altijd eerst de nieuwste versie van het
  netwerk. Voeg je bestanden toe of verwijder je er, pas dan ook de lijst
  `ASSETS` in `sw.js` aan en verhoog `CACHE_NAME` (bv. `adem-rust-v6`).

## Privacy

De app verstuurt geen gegevens en gebruikt geen cookies, accounts of tracking.
Statistieken en instellingen worden alleen in de `localStorage` van je eigen
browser bewaard.

## Bronnen

De beschrijvingen in de app zijn gebaseerd op:

- **4-7-8**: de instructies van Dr. Andrew Weil
  ([video en uitleg](https://www.drweil.com/videos-features/videos/breathing-exercises-4-7-8-breath/),
  [drie ademhalingsoefeningen](https://www.drweil.com/health-wellness/body-mind-spirit/stress-anxiety/three-breathing-exercises-and-techniques/)).
  Weil raadt aan de eerste maand niet meer dan 4 cycli na elkaar te doen; de app doet er daarom 4.
  Volgens hem telt de verhouding 4:7:8, niet het aantal seconden: sneller als vasthouden
  moeilijk is, trager met oefening. Daarom de tempokeuze.
- **Box breathing**: bekend geworden via oud-Navy SEAL Mark Divine
  ([Time](https://time.com/4316151/breathing-technique-navy-seal-calm-focused/)).
- **Gelijke adem**: *sama vritti* pranayama uit de yoga
  ([Ekhart Yoga](https://www.ekhartyoga.com/articles/practice/how-to-practice-samavritti-breath)).
- **Coherent 5-5**: 6 ademhalingen per minuut, 5 minuten lang, zoals in de methode 3-6-5
  ([Université Laval](https://www.ulaval.ca/mon-equilibre-ul/mes-habitudes-de-vie/coherence-cardiaque)).
- **Effect van dagelijks oefenen**: Balban et al., *Cell Reports Medicine*, 2023
  ([PMC9873947](https://pmc.ncbi.nlm.nih.gov/articles/PMC9873947/)), en de meta-analyse
  van Fincham et al., *Scientific Reports*, 2023
  ([PMC9828383](https://pmc.ncbi.nlm.nih.gov/articles/PMC9828383/)).
  Het onderzoek naar ademhalingsoefeningen is nog beperkt; de effecten zijn klein tot matig.

## Disclaimer

Deze app is bedoeld voor ontspanning en vervangt geen medisch advies. Voel je je
duizelig of ongemakkelijk tijdens een oefening, stop dan en adem in je eigen
tempo verder. Heb je een hart- of longaandoening of ben je zwanger, overleg dan
eerst met je arts voordat je oefeningen doet waarbij je de adem vasthoudt.
