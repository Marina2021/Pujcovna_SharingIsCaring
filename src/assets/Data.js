export default {

    products: [
        { id:1, nazev: "auto", kategorie: 1, majitel:1, cena: "800", images:"auto_moto/auto.jpg" },
        { id:2, nazev: "zvedák", kategorie: 1, majitel:2, cena: "100",images:"auto_moto/zvedak.jpg"},
        { id:3, nazev: "postel", kategorie: 2, majitel:3, cena: "20",images:"dum_zahrada/postel.jpg"},
        { id:4, nazev: "skříň", kategorie: 2, majitel:4, cena: "25",images:"dum_zahrada/skrin.jpg"},
        { id:5, nazev: "stůl", kategorie: 2, majitel:5, cena: "20",images:"dum_zahrada/stul.jpg"},
        { id:6, nazev: "židle", kategorie: 2, majitel:1, cena: "10",images:"dum_zahrada/zidle.jpg"},
        { id:7, nazev: "mixer", kategorie: 3, majitel:2, cena: "50",images:"elektro/mixer.jpg"},
        { id:8, nazev: "rádio", kategorie: 3, majitel:3, cena: "50",images:"elektro/radio.jpg"},
        { id:9, nazev: "senzor dechu",  kategorie: 3, majitel:4, cena: "10",images:"elektro/senzor_dechu.jpg"},
        { id:10, nazev: "televize", kategorie: 3, majitel:5, cena: "30",images:"elektro/televize.jpg"},
        { id:11, nazev: "tiskárna", kategorie: 3, majitel:1, cena: "50",images:"elektro/tiskarna.jpg"},
        { id:12, nazev: "kladivo", kategorie: 4, majitel:2, cena: "20",images:"naradi/kladivo.jpg"},
        { id:13, nazev: "sada nářadi", kategorie: 4, majitel:3, cena: "100",images:"naradi/sada_naradi.jpg"},
        { id:14, nazev: "vrtačka", kategorie: 4, majitel:4, cena: "90",images:"naradi/vrtacka.jpg"},
        { id:15, nazev: "gumáky", kategorie: 5, majitel:5, cena: "20",images:"obleceni/gumakyjpg"},
        { id:16, nazev: "kabát", kategorie: 5, majitel:1, cena: "30",images:"obleceni/kabat.jpg"},
        { id:17, nazev: "oblek", kategorie: 5, majitel:2, cena: "600",images:"obleceni/oblek.jpg"},
        { id:18, nazev: "svatební šaty", kategorie: 5, majitel:3, cena: "1000",images:"obleceni/svatebni_saty.jpg"},
        { id:19, nazev: "diskokoule", kategorie: 6, majitel:3, cena: "200",images:"ostatni/diskokoule.jpg"},
        { id:20, nazev: "autosedačka", kategorie: 7, majitel:3, cena: "200",images:"autosedacka.jpg"},
        { id:21, nazev: "kolo", kategorie: 8, majitel:3, cena: "200",images:"sport/kolo.jpg"},
        { id:22, nazev: "kolobežka", kategorie: 8, majitel:1, cena: "80",images:"sport/kolobezka.jpg"},
        { id:23, nazev: "rotoped", kategorie: 8, majitel:5, cena: "100",images:"sport/rotoped.jpg"},
        { id:24, nazev: "golfová sada", kategorie: 8, majitel:2, cena: "100",images:"sport/golf.jpg"},
        { id:25, nazev: "boxovací pytel", kategorie: 8, majitel:1, cena: "100",images:"sport/box.jpg"},
        { id:26, nazev: "činky", kategorie: 8, majitel:2, cena: "50",images:"sport/cinky.jpg"},
        { id:27, nazev: "míč na beach", kategorie: 8, majitel:5, cena: "40",images:"sport/mic.jpg"},
        { id:28, nazev: "bagr", kategorie: 8, majitel:4, cena: "5000",images:"stroje/bagr.jpg"},
        { id:29, nazev: "jeřáb", kategorie: 8, majitel:1, cena: "5000",images:"stroje/jerab.jpg"},
        { id:30, nazev: "sekačka", kategorie: 8, majitel:2, cena: "400",images:"stroje/sekacka.jpg"},
        { id:31, nazev: "traktorek", kategorie: 8, majitel:3, cena: "400",images:"stroje/traktorek.jpg"},


    ],

    majitel: [
        { id: 1, jmeno: "Pavel Nový" },
        { id: 2, jmeno: "Jitka Černá" },
        { id: 3, jmeno: "Mojmír Novotný" },
        { id: 4, jmeno: "Ola Hnědá" },
        { id: 5, jmeno: "Petra Veselá" },

    ],

    kategorie: [
        {id:1, name:"Auto-Moto",image:'auto.png'},
        {id:2, name:"Dům a Zahrada",image:'dum.png'}, 
        {id:3, name:"Elektro",image:'elektro.png'}, 
        {id:4, name:"Nářadí",image:'naradi.png'}, 
        {id:5, name:"Oblečení",image:'obleceni.png'},
        {id:6, name:"Ostatní",image:'ostatni.png'}, 
        {id:7, name:"Pro Děti",image:'deti.png'}, 
        {id:8, name:"Sport",image:'sport.png'}, 
        {id:9, name:"Stroje",image:'stroje.png'}
    ],

}
