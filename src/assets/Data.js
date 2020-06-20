export default {

    products: [
        { id:1, nazev: "auto", kategorie: 1, majitel:1, cena: "800", images:"auto_moto/auto.jpg" },
        { id:1, nazev: "zvedák", kategorie: 1, majitel:2, cena: "100",images:"auto_moto/zvedak.jpg"},
        { id:2, nazev: "postel", kategorie: 2, majitel:3, cena: "20",images:"dum_zahrada/postel.jpg"},
        { id:2, nazev: "skříň", kategorie: 2, majitel:4, cena: "25",images:"dum_zahrada/skrin.jpg"},
        { id:2, nazev: "stůl", kategorie: 2, majitel:5, cena: "20",images:"dum_zahrada/stul.jpg"},
        { id:2, nazev: "židle", kategorie: 2, majitel:1, cena: "10",images:"dum_zahrada/zidle.jpg"},
        { id:3, nazev: "mixer", kategorie: 3, majitel:2, cena: "50",images:"elektro/mixer.jpg"},
        { id:3, nazev: "rádio", kategorie: 3, majitel:3, cena: "50",images:"elektro/radio.jpg"},
        { id:3, nazev: "senzor dechu",  kategorie: 3, majitel:4, cena: "10",images:"elektro/senzor_dechu.jpg"},
        { id:3, nazev: "televize", kategorie: 3, majitel:5, cena: "30",images:"elektro/televize.jpg"},
        { id:3, nazev: "tiskárna", kategorie: 3, majitel:1, cena: "50",images:"elektro/tiskarna.jpg"},
        { id:4, nazev: "kladivo", kategorie: 4, majitel:2, cena: "20",images:"naradi/kladivo.jpg"},
        { id:4, nazev: "sada nářadi", kategorie: 4, majitel:3, cena: "100",images:"naradi/sada_naradi.jpg"},
        { id:4, nazev: "vrtačka", kategorie: 4, majitel:4, cena: "90",images:"naradi/vrtacka.jpg"},
        { id:5, nazev: "gumáky", kategorie: 5, majitel:5, cena: "20",images:"obleceni/gumakyjpg"},
        { id:5, nazev: "kabát", kategorie: 5, majitel:1, cena: "30",images:"obleceni/kabat.jpg"},
        { id:5, nazev: "oblek", kategorie: 5, majitel:2, cena: "600",images:"obleceni/oblek.jpg"},
        { id:5, nazev: "svatební šaty", kategorie: 5, majitel:3, cena: "1000",images:"obleceni/svatebni_saty.jpg"},
        { id:6, nazev: "diskokoule", kategorie: 6, majitel:3, cena: "200",images:"ostatni/diskokoule.jpg"},
        { id:7, nazev: "autosedačka", kategorie: 7, majitel:3, cena: "200",images:"autosedacka.jpg"},
        { id:8, nazev: "kolo", kategorie: 8, majitel:3, cena: "200",images:"sport/kolo.jpg"},
        { id:8, nazev: "kolobežka", kategorie: 8, majitel:1, cena: "80",images:"sport/kolobezka.jpg"},
        { id:8, nazev: "rotoped", kategorie: 8, majitel:5, cena: "100",images:"sport/rotoped.jpg"},
        { id:8, nazev: "golfová sada", kategorie: 8, majitel:2, cena: "100",images:"sport/golf.jpg"},
        { id:8, nazev: "boxovací pytel", kategorie: 8, majitel:1, cena: "100",images:"sport/box.jpg"},
        { id:8, nazev: "činky", kategorie: 8, majitel:2, cena: "50",images:"sport/cinky.jpg"},
        { id:8, nazev: "míč na beach", kategorie: 8, majitel:5, cena: "40",images:"sport/mic.jpg"},
        { id:9, nazev: "bagr", kategorie: 8, majitel:4, cena: "5000",images:"stroje/bagr.jpg"},
        { id:9, nazev: "jeřáb", kategorie: 8, majitel:1, cena: "5000",images:"stroje/jerab.jpg"},
        { id:9, nazev: "sekačka", kategorie: 8, majitel:2, cena: "400",images:"stroje/sekacka.jpg"},
        { id:9, nazev: "traktorek", kategorie: 8, majitel:3, cena: "400",images:"stroje/traktorek.jpg"},


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