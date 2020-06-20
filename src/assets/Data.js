export default {

    products: [
        { id:1, nazev: "auto", kategorie: 1, majitel:1, mesto: "Praha", cena: "800", images:"auto_moto/auto.jpg" },
        { id:2, nazev: "zvedák", kategorie: 1, majitel:2, mesto: "Brno", cena: "100",images:"auto_moto/zvedak.jpg"},
        { id:3, nazev: "postel", kategorie: 2, majitel:3, mesto: "Ostrava", cena: "20",images:"domacnost/postel.jpg"},
        { id:4, nazev: "skříň", kategorie: 2, majitel:4, mesto: "Plzen", cena: "25",images:"domacnost/skrin.jpg"},
        { id:5, nazev: "stůl", kategorie: 2, majitel:5, mesto: "Olomouc", cena: "20",images:"domacnost/stul.jpg"},
        { id:6, nazev: "židle", kategorie: 2, majitel:1, mesto: "Praha", cena: "10",images:"domacnost/zidle.jpg"},
        { id:7, nazev: "mixer", kategorie: 3, majitel:2, mesto: "Brno", cena: "50",images:"elektro/mixer.jpg"},
        { id:8, nazev: "rádio", kategorie: 3, majitel:3, mesto: "Ostrava", cena: "50",images:"elektro/radio.jpg"},
        { id:9, nazev: "senzor dechu",  kategorie: 3, majitel:4, mesto: "Plzen", cena: "10",images:"elektro/senzor_dechu.jpg"},
        { id:10, nazev: "televize", kategorie: 3, majitel:5, mesto: "Olomouc", cena: "30",images:"elektro/televize.jpg"},
        { id:11, nazev: "tiskárna", kategorie: 3, majitel:1, mesto: "Praha", cena: "50",images:"elektro/tiskarna.jpg"},
        { id:12, nazev: "kladivo", kategorie: 4, majitel:2, mesto: "Brno", cena: "20",images:"naradi/kladivo.jpg"},
        { id:13, nazev: "sada nářadi", kategorie: 4, majitel:3, mesto: "Ostrava", cena: "100",images:"naradi/sada_naradi.jpg"},
        { id:14, nazev: "vrtačka", kategorie: 4, majitel:4, mesto: "Plzen", cena: "90",images:"naradi/vrtacka.jpg"},
        { id:15, nazev: "gumáky", kategorie: 5, majitel:5, mesto: "Olomouc", cena: "20",images:"obleceni/gumaky.jpg"},
        { id:16, nazev: "kabát", kategorie: 5, majitel:1, mesto: "Praha", cena: "30",images:"obleceni/kabat.jpg"},
        { id:17, nazev: "oblek", kategorie: 5, majitel:2, mesto: "Brno", cena: "600",images:"obleceni/oblek.jpg"},
        { id:18, nazev: "svatební šaty", kategorie: 5, majitel:3, mesto: "Ostrava", cena: "1000",images:"obleceni/svatebni_saty.jpg"},
        { id:20, nazev: "autosedačka", kategorie: 7, majitel:3, mesto: "Ostrava", cena: "200",images:"pro_deti/autosedacka.jpg"},
        { id:21, nazev: "kolo", kategorie: 8, majitel:3, mesto: "Ostrava", cena: "200",images:"sport/kolo.jpg"},
        { id:22, nazev: "kolobežka", kategorie: 8, majitel:1, mesto: "Praha", cena: "80",images:"sport/kolobezka.jpg"},
        { id:23, nazev: "rotoped", kategorie: 8, majitel:5, mesto: "Olomouc", cena: "100",images:"sport/rotoped.jpg"},
        { id:24, nazev: "golfová sada", kategorie: 8, majitel:2, mesto: "Brno", cena: "100",images:"sport/golf.jpg"},
        { id:25, nazev: "boxovací pytel", kategorie: 8, majitel:1, mesto: "Praha", cena: "100",images:"sport/boxovaci_pytel.jpg"},
        { id:26, nazev: "činky", kategorie: 8, majitel:2, mesto: "Brno", cena: "50",images:"sport/cinky.jpg"},
        { id:27, nazev: "míč na beach", kategorie: 8, majitel:5, mesto: "Olomouc", cena: "40",images:"sport/mic.jpg"},
        { id:28, nazev: "bagr", kategorie: 9, majitel:4, mesto: "Plzen", cena: "5000",images:"stroje/bagr.jpg"},
        { id:29, nazev: "jeřáb", kategorie: 9, majitel:1, mesto: "Praha", cena: "5000",images:"stroje/jerab.jpg"},
        { id:30, nazev: "sekačka", kategorie: 9, majitel:2, mesto: "Brno", cena: "400",images:"stroje/sekacka.jpg"},
        { id:31, nazev: "kolotoč", kategorie: 7, majitel:3, mesto: "Ostrava", cena: "400",images:"pro_deti/kolotoc.jpg"},
        { id:32, nazev: "vanička", kategorie: 7, majitel:3, mesto: "Ostrava", cena: "400",images:"pro_deti/vanicka.jpg"},
      
    ],

    majitel: [
        { id: 1, jmeno: "Pavel Nový" },
        { id: 2, jmeno: "Jitka Černá" },
        { id: 3, jmeno: "Mojmír Novotný" },
        { id: 4, jmeno: "Ola Hnědá" },
        { id: 5, jmeno: "Petra Veselá" },

    ],

    kategorie: [
        {id:1, name:"Auto-Moto",image:'auto.png',barva:"green"},
        {id:2, name:"Domácnost",image:'dum.png',barva:"primary"}, 
        {id:3, name:"Elektro",image:'elektro.png', barva:"blue"}, 
        {id:4, name:"Nářadí",image:'naradi.png', barva:"yellow"}, 
        {id:5, name:"Oblečení",image:'obleceni.png', barva:"orange"},
        {id:7, name:"Pro Děti",image:'deti.png', barva:"primary"}, 
        {id:8, name:"Sport",image:'sport.png', barva:"success"}, 
        {id:9, name:"Stroje",image:'stroje.png',barva:"yellow"}
    ],

}
