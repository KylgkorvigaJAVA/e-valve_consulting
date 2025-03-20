# E-Valve Consulting - Küberohutuse õppemäng

## Ülevaade
E-Valve Consulting on interaktiivne küberohutuse õppemäng, mis õpetab kasutajaid ära tundma ja vältima levinud petuskeeme ning küberohtusid. Mäng simuleerib operatsioonisüsteemi keskkonda ja esitab mängijale erinevaid stsenaariumeid erinevate tegelastega, kes puutuvad kokku võimalike pettustega.

## Omadused
- Retro operatsioonisüsteemi välimus koos töölaua ja ikoonidega
- Interaktiivsed petuskeemi stsenaariumid 8 erineva tegelasega
- Iga stsenaarium pakub 3 vastusevarianti, millest üks on õige ja kaks on valed
- Eestikeelne kasutajaliides

## Süsteeminõuded
- Kaasaegne veebibrauser (Chrome, Firefox, Safari, Edge)
- Internetiühendus Bootstrap CSS ja JavaScript teekide laadimiseks

## Paigaldamine
1. Laadige alla kõik projektifailid
2. Veenduge, et kõik failid (HTML, CSS, JavaScript) asuvad samas kaustas
3. Veenduge, et kõik pildi- ja ikoonifailid on õiges asukohas kaustas "img"

## Kasutamine
1. Avage `index.html` fail oma veebibrauseris
2. Logige sisse mängukeskkonda, kasutades järgmisi kasutajaandmeid:
   - Kasutajanimi: `user007`
   - Parool: `qwerty123`
3. Pärast sisselogimist kuvatakse teile töölaud ikoonidega
4. Klõpsake brauseri ikoonil (või "Profiilid" rakenduse ikoonil), et avada skenaariume
5. Valige tegelane, kelle stsenaariumiga soovite tutvuda
6. Lugege probleemi kirjeldust ja valige õige teguviis pakutud valikute seast
7. Pärast valiku tegemist näidatakse, kas vastasite õigesti (roheline) või valesti (punane)

## Tegelased ja stsenaariumid
Mäng sisaldab erinevaid tegelasi ja stsenaariume:

1. **Viktor** - Vene juurtega eesti kodakondsusega pensionär
2. **Kevin** - Krüptousku noor mees, kelle elutarkused pärinevad TikTokist
3. **Mari** - Tellinud viimase kuu jooksul 15 asja Aliexpressist
4. **Pets** - Sõitnud viimased 20 aastat sama ustava autoga
5. **Reelika** - Raamatupidaja, kes arvab, et kontonumbri muutmine on täiesti normaalne asi
6. **Malle** - Unistab elust palmide all koos rikka abikaasaga
7. **Taavi** - Otsib internetist häid diile
8. **Madis** - Müüb vana diivanit ja usaldab inimesi liiga palju

Iga tegelane seisab silmitsi erineva küberpettuse stsenaariumiga ja kasutaja peab aitama neil teha õiget otsust.

## Projekti struktuur
- `index.html` - Sisselogimise ekraan
- `desktop.html` - Peamine töölaua vaade
- `style.css` - Stiilileht
- `login.js` - Sisselogimise funktsionaalsus
- `index.css` - Welcome ekraani stiilileht
- `desktop.js` - Töölaua ja stsenaariumide funktsionaalsus
- `img/` kaust - Taustapildid, ikoonid ja tegelaste pildid


## Hariduslik väärtus
Mäng on loodud selleks, et tõsta teadlikkust levinud küberrünnakute ja pettuste kohta, nagu:
- Õngitsusrünnakud (phishing)
- Krüptovaluuta pettused
- Pakiveoga seotud pettused
- Libaametiisikute kõned
- Libaromantikas põhinevad pettused (romance scams)
- Lihtsat usaldust ärakasutavad pettused

## Kasutatud allikad
Kelmuse tüübid, võtsime politsei.ee leheküljelt
- https://www.politsei.ee/et/juhend/kaitse-ennast-kelmide-eest/kelmuse-tuubid-mis-eestis-tana-ringlevad
  
Avatari tegemiseks kasutasime Avatarmaker-it
- https://avatarmaker.com/
  
Ideede genereerimiseks kasutasime Chatgpt-id ja Calude
