# Fanikauppa

**Fanikauppa** on ReactJS:llä toteutettu verkkokauppaprototyyppi. Kyseessä on fanituotteiden myyntiin suunniteltu sovellus, jossa voidaan ostaa esimerkiksi mukeja, lippiksiä, T-paitoja tai julisteita. Projekti on toteutettu osana web-kehityskoulutustani.

## Pääominaisuudet

### Tuotteiden selaaminen
- Lista myynnissä olevista tuotteista, jossa näkyy kuva, nimi, hinta ja tuotetyyppi.
- Mahdollisuus tarkastella tuotteen lisätietoja otsikkoa klikkaamalla tai karusellityyppisen navigoinnin kautta.
- Helppokäyttöinen ja käyttäjäystävällinen käyttöliittymä.

### Tuotteiden lisääminen ostoskoriin
- Tuotteen lisääminen ostoskoriin määrittelemällä haluttu määrä.
- Ostoskorin kokonaissumma päivittyy automaattisesti lisättyjen tuotteiden mukaan.
- Määrää voi muuttaa joko `+` ja `-` -painikkeilla tai lomakekentän kautta.

### Ostoskorin hallinta
- Näytä lisätyt tuotteet ostoskorissa.
- Mahdollisuus tyhjentää ostoskori, jolloin myös kokonaissumma palautuu nollaan.

### Tilaamisen vahvistaminen
- Tilauksen vahvistuslomake, joka kysyy seuraavat tiedot:
  - Nimi
  - Sähköpostiosoite
  - Puhelinnumero
  - Osoite (katuosoite, postinumero, kaupunki)
- Tilauksen vahvistamisen jälkeen näytetään yhteenveto, jossa näkyvät:
  - Tilatut tuotteet
  - Lopullinen kokonaishinta (sisältäen mahdolliset alennukset)
  - Toimitusosoite
- Kiitosviesti ja käyttäjän tietojen sekä ostoskorin sisällön tyhjennys.

### Alennukset (edistynyt toiminto)
- Alennukset lasketaan tilauksen kokonaissumman perusteella:
  - 2,5 % alennus, jos summa on vähintään 100 €
  - 4 % alennus, jos summa on vähintään 250 €
  - 10 % alennus, jos summa on vähintään 500 €

## Julkaisu ja käyttö
Projekti on julkaistu [GitHub Pages -sivustolla](https://Bertrand14.github.io/fanikauppa/).  
Voit avata sen myös portfolioni kautta: [Portfolio Fanikauppa](https://Bertrand14.github.io/).

## Ohjeet projektin testaamiseen paikallisesti
1. Kloonaa GitHub-repo:  
   ```bash
   git clone https://github.com/Bertrand14/fanikauppa.git



## Haasteet
React-router:in käyttäminen oli minulle uusi asia. Olen käyttänyt "W3schools"-sivuston niin, että pystyn käytämään sen.