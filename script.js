let wrapper = document.querySelector(".wrapper");

let offerArray = [
  {
    company: "impex",
    itemGroup: "air fryer",
    groupName: "air fryer",
    itemName: "air fryer smart",
    oldPrice: 4200,
    offerPrice: 3390
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "10 ltr dum",
    oldPrice: 2600,
    offerPrice: 1999
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "12 ltr dum",
    oldPrice: 2850,
    offerPrice: 2190
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "bhiriyani pot",
    itemName: "royal RCS4 2 pcs",
    oldPrice: 2450,
    offerPrice: 1949
  },
  {
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave ICTP28",
    oldPrice: 950,
    offerPrice: 749
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "diecast ruby 27",
    oldPrice: 790,
    offerPrice: 590
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "pan ITP 2620",
    oldPrice: 790,
    offerPrice: 590
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "SS STP 24 Shine",
    oldPrice: 1100,
    offerPrice: 899
  },
  {
    company: "impex",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "diecast ruby 24",
    oldPrice: 900,
    offerPrice: 649
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "SS SFP 24 shine",
    oldPrice: 1200,
    offerPrice: 949
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "SS SKP 24 shine",
    oldPrice: 1800,
    offerPrice: 1449
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "kuzhiyappam",
    itemName: "kuzhiyappam 9",
    oldPrice: 800,
    offerPrice: 649
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "milk pan",
    itemName: "milk pan 1875",
    oldPrice: 850,
    offerPrice: 649
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "2 pcs set TF",
    oldPrice: 950,
    offerPrice: 699
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set KTF 444",
    oldPrice: 1750,
    offerPrice: 1299
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set NV 444",
    oldPrice: 1500,
    offerPrice: 1150
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set RKTF24",
    oldPrice: 2100,
    offerPrice: 1599
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "3 pcs set ROYAL",
    oldPrice: 2100,
    offerPrice: 1599
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "non-stick set",
    itemName: "FTA 4603 pcs set",
    oldPrice: 1600,
    offerPrice: 1250
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "wokpan",
    itemName: "wokpan IB-IWP28",
    oldPrice: 1400,
    offerPrice: 1100
  },{
    company: "impex",
    itemGroup: "non-stick",
    groupName: "sausepan",
    itemName: "sausepan B pot shine 24",
    oldPrice: 1950,
    offerPrice: 1599
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 10 ltr",
    oldPrice: 2100,
    offerPrice: 1699
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 5 ltr",
    oldPrice: 1150,
    offerPrice: 899
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "Aluminium",
    itemName: "norma 3 ltr",
    oldPrice: 950,
    offerPrice: 699
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 2",
    oldPrice: 1100,
    offerPrice: 799
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 3",
    oldPrice: 1000,
    offerPrice: 849
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 5",
    oldPrice: 1450,
    offerPrice: 1049
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 7",
    oldPrice: 2050,
    offerPrice: 1649
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "eco 2+3+5",
    oldPrice: 2350,
    offerPrice: 1950
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep2",
    oldPrice: 1450,
    offerPrice: 1180
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep3",
    oldPrice: 1490,
    offerPrice: 1199
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "ep5",
    oldPrice: 1850,
    offerPrice: 1499
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart 2.5 ltr",
    oldPrice: 1750,
    offerPrice: 1349
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart 4.5 ltr",
    oldPrice: 2200,
    offerPrice: 1799
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart norma 2.5 ltr",
    oldPrice: 1150,
    offerPrice: 849
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "smart",
    itemName: "smart norma 4.5 ltr",
    oldPrice: 1400,
    offerPrice: 1100
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "black",
    itemName: "HA 2.5ltr Dripless",
    oldPrice: 1490,
    offerPrice: 1149
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "black",
    itemName: "HA 4.5ltr Dripless",
    oldPrice: 1850,
    offerPrice: 1490
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 10",
    oldPrice: 2350,
    offerPrice: 1850
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 7",
    oldPrice: 2100,
    offerPrice: 1695
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 5",
    oldPrice: 1400,
    offerPrice: 1099
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 3",
    oldPrice: 1100,
    offerPrice: 849
  },{
    company: "impex",
    itemGroup: "cooker",
    groupName: "delight",
    itemName: "delight 5+3",
    oldPrice: 2200,
    offerPrice: 1799
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "enlight 2B",
    oldPrice: 2400,
    offerPrice: 1949
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "IGS1 3B",
    oldPrice: 3950,
    offerPrice: 3490
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "aspira ador 2B",
    oldPrice: 3300,
    offerPrice: 2650
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "fiera 2B",
    oldPrice: 3750,
    offerPrice: 3100
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "fiera 3B",
    oldPrice: 4750,
    offerPrice: 3990
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 2B",
    oldPrice: 4500,
    offerPrice: 3850
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 3B",
    oldPrice: 5500,
    offerPrice: 4700
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "glaze 3B regular",
    oldPrice: 5250,
    offerPrice: 4490
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 2b elite",
    oldPrice: 3500,
    offerPrice: 2790
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 2b NEO",
    oldPrice: 2900,
    offerPrice: 2250
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "specta 3B NEO",
    oldPrice: 3650,
    offerPrice: 2949
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "welfire 2B",
    oldPrice: 2400,
    offerPrice: 1899
  },{
    company: "impex",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "aira 2B frameless",
    oldPrice: 2400,
    offerPrice: 4590
  },{
    company: "impex",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "omega H2A  SL220",
    oldPrice: 3400,
    offerPrice: 2850
  },{
    company: "impex",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "omega H6A DX",
    oldPrice: 2750,
    offerPrice: 2150
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1001c",
    oldPrice: 1200,
    offerPrice: 949
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1501",
    oldPrice: 800,
    offerPrice: 549
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle GK 18",
    oldPrice: 1650,
    offerPrice: 1349
  },{
    company: "impex",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle JB15 Black",
    oldPrice: 1490,
    offerPrice: 1199
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ceiling fan Aero Alora",
    oldPrice: 2200,
    offerPrice: 1790
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ceiling fan BLDC atom28",
    oldPrice: 3450,
    offerPrice: 2999
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "wall fan",
    itemName: "oreon",
    oldPrice: 2350,
    offerPrice: 1990
  },{
    company: "impex",
    itemGroup: "fan",
    groupName: "wall fan",
    itemName: "zolo 1969",
    oldPrice: 2550,
    offerPrice: 2200
  },{
    company: "impex",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "ss 1 kg",
    oldPrice: 2250,
    offerPrice: 1849
  },{
    company: "impex",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "ss 1.5 kg",
    oldPrice: 2700,
    offerPrice: 2190
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "grind D Q 600",
    oldPrice: 2900,
    offerPrice: 2200
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "Panter 800w",
    oldPrice: 4200,
    offerPrice: 3299
  },{
    company: "impex",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "starmix 750w",
    oldPrice: 3100,
    offerPrice: 2399
  },{
    company: "impex",
    itemGroup: "oven",
    groupName: "oven",
    itemName: "OTG 19 ltr + btr",
    oldPrice: 5100,
    offerPrice: 4150
  },{
    company: "impex",
    itemGroup: "oven",
    groupName: "oven",
    itemName: "OTG 28 ltr",
    oldPrice: 6800,
    offerPrice: 5900
  },{
    company: "impex",
    itemGroup: "magic pan",
    groupName: "magic pan",
    itemName: "magic pan ws 18",
    oldPrice: 2150,
    offerPrice: 1799
  },
  
        //////Amogh
  {
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 1 kg",
    oldPrice: 1900,
    offerPrice: 1490
  },{
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 1.5 kg",
    oldPrice: 2200,
    offerPrice: 1690
  },{
    company: "amogh",
    itemGroup: "rice cooker",
    groupName: "rice cooker",
    itemName: "steel 2 kg",
    oldPrice: 3000,
    offerPrice: 2590
  },
  
    //////BPL
    
    {
    company: "BPL",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle 1.8 00118",
    oldPrice: 900,
    offerPrice: 780
  },{
    company: "BPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "3 jar 500w 46150 +c",
    oldPrice: 2650,
    offerPrice: 2150
  },{
    company: "BPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "3 jar 750w 30975 + c",
    oldPrice: 4250,
    offerPrice: 3590
  },{
    company: "BPL",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "4 jar 750w 45275 + c",
    oldPrice: 4350,
    offerPrice: 3650
  },
  /////butterfly
      {
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 5 ltr",
    oldPrice: 2950,
    offerPrice: 2590
  },,{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 7.5",
    oldPrice: 3600,
    offerPrice: 2990
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "blueline 10 ltr",
    oldPrice: 3950,
    offerPrice: 3399
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 2ltr ss",
    oldPrice: 1950,
    offerPrice: 1649
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 3ltr ss",
    oldPrice: 2350,
    offerPrice: 1890
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "cute 5 ltr",
    oldPrice: 2850,
    offerPrice: 2249
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 2 ltr",
    oldPrice: 2400,
    offerPrice: 1990
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 3 ltr",
    oldPrice: 2600,
    offerPrice: 2249
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "STD 3 ltr",
    oldPrice: 1100,
    offerPrice: 850
  },{
    company: "butterfly",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "tezz 5 ltr",
    oldPrice: 3550,
    offerPrice: 2990
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "Ace",
    oldPrice: 3200,
    offerPrice: 2600
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "rhino",
    oldPrice: 2600,
    offerPrice: 2100
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "treo 3 B",
    oldPrice: 4500,
    offerPrice: 3850
  },{
    company: "butterfly",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "treo pluse 3 B",
    oldPrice: 4600,
    offerPrice: 3850
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "cyclone 3 jar",
    oldPrice: 4200,
    offerPrice: 3650
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "pestle 3 jar",
    oldPrice: 3850,
    offerPrice: 3300
  },{
    company: "butterfly",
    itemGroup: "mixi",
    groupName: "3 jar",
    itemName: "ruby elite 3 jar",
    oldPrice: 2950,
    offerPrice: 2500
  },{
    company: "butterfly",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave tawa 280",
    oldPrice: 1150,
    offerPrice: 849
  },{
    company: "butterfly",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "concave tawa 300",
    oldPrice: 1300,
    offerPrice: 999
  },{
    company: "butterfly",
    itemGroup: "grinder",
    groupName: "grinder",
    itemName: "flora pluse 2.0",
    oldPrice: 5100,
    offerPrice: 4200
  },
  //////Gabry
      {
    company: "Gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "20 Ltr",
    oldPrice: 3650,
    offerPrice: 2950
  },{
    company: "Gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "15 Ltr",
    oldPrice: 3100,
    offerPrice: 2450
  },{
    company: "Gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "10 Ltr",
    oldPrice: 2450,
    offerPrice: 1990
  },{
    company: "Gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "8 Ltr",
    oldPrice: 2000,
    offerPrice: 1550
  },{
    company: "Gabry",
    itemGroup: "biriyani Pot",
    groupName: "biriyani Pot",
    itemName: "4.5 Ltr",
    oldPrice: 1550,
    offerPrice: 1250
  },{
    company: "Gabry",
    itemGroup: "cooking Pot",
    groupName: "cooking Pot",
    itemName: "cooking pot med",
    oldPrice: 1200,
    offerPrice: 949
  },{
    company: "Gabry",
    itemGroup: "cooking Pot",
    groupName: "cooking Pot",
    itemName: "cooking pot sml",
    oldPrice: 1100,
    offerPrice: 849
  },{
    company: "Gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan mini",
    oldPrice: 600,
    offerPrice: 450
  },{
    company: "Gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan small elgnt + lid",
    oldPrice: 860,
    offerPrice: 699
  },{
    company: "Gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan med basic",
    oldPrice: 700,
    offerPrice: 530
  },{
    company: "Gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan large basic",
    oldPrice: 990,
    offerPrice: 849
  },{
    company: "Gabry",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan small IB + lid",
    oldPrice: 830,
    offerPrice: 680
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa small basic",
    oldPrice: 690,
    offerPrice: 475
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa med basic",
    oldPrice: 750,
    offerPrice: 535
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa large basic",
    oldPrice: 800,
    offerPrice: 625
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa large basic IB",
    oldPrice: 900,
    offerPrice: 690
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "elegent",
    itemName: "tawa small elg",
    oldPrice: 700,
    offerPrice: 499
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "elegent",
    itemName: "tawa large elegant",
    oldPrice: 800,
    offerPrice: 575
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "edgless",
    itemName: "tawa mini edgless",
    oldPrice: 1350,
    offerPrice: 1100
  },{
    company: "Gabry",
    itemGroup: "tawa",
    groupName: "basic",
    itemName: "tawa med basic IB",
    oldPrice: 700,
    offerPrice: 599
  },{
    company: "Gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai med",
    oldPrice: 1150,
    offerPrice: 875
  },{
    company: "Gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai med elegant + glass lid",
    oldPrice: 1250,
    offerPrice: 975
  },{
    company: "Gabry",
    itemGroup: "kadai",
    groupName: "kadai",
    itemName: "kadai small basic",
    oldPrice: 900,
    offerPrice: 690
  },{
    company: "Gabry",
    itemGroup: "non-stick set",
    groupName: "set",
    itemName: "tawa + frypan + kadai KTF",
    oldPrice: 1450,
    offerPrice: 1085
  },{
    company: "Gabry",
    itemGroup: "non-stick set",
    groupName: "set",
    itemName: "tawa + frypan FT combo",
    oldPrice: 950,
    offerPrice: 749
  },{
    company: "Gabry",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "SQ flat edg 2259",
    oldPrice: 1680,
    offerPrice: 1299
  },{
    company: "Gabry",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "SQ flat edg 2688",
    oldPrice: 1800,
    offerPrice: 1549
  },{
    company: "Gabry",
    itemGroup: "stew pot",
    groupName: "stewpot",
    itemName: "stewpot glass lid",
    oldPrice: 950,
    offerPrice: 749
  },{
    company: "Gabry",
    itemGroup: "stew pot",
    groupName: "stewpot",
    itemName: "stewpot SS lid",
    oldPrice: 900,
    offerPrice: 690
  },
  ///////greenchef
      {
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "cosmo 3 ltr",
    oldPrice:  950,
    offerPrice: 749
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "hexagon 3 ltr",
    oldPrice: 900,
    offerPrice: 650
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "namo 3 ltr",
    oldPrice: 900,
    offerPrice: 650
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "grand 5 ltr",
    oldPrice: 1250,
    offerPrice: 899
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "compact 1.5 ltr",
    oldPrice: 1200,
    offerPrice: 949
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "classic curve 3 ltr",
    oldPrice: 1750,
    offerPrice: 1349
  },{
    company: "greenchef",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "classic curve 5 ltr",
    oldPrice: 1950,
    offerPrice: 1590
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "super slim 2B",
    oldPrice: 1950,
    offerPrice: 1590
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "bliss 2B",
    oldPrice: 2600,
    offerPrice: 1900
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "crystal pluse 2 B",
    oldPrice: 2600,
    offerPrice: 2150
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "popular 3B",
    oldPrice: 3250,
    offerPrice: 2499
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "namo 2B",
    oldPrice: 2700,
    offerPrice: 2100
  },{
    company: "greenchef",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "namo 3B",
    oldPrice: 3900,
    offerPrice: 3100
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa 285 namo",
    oldPrice: 540,
    offerPrice: 390
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa IB 280 mm",
    oldPrice: 630,
    offerPrice: 490
  },{
    company: "greenchef",
    itemGroup: "non-stick",
    groupName: "appachatty",
    itemName: "appachatty",
    oldPrice: 590,
    offerPrice: 449
  },
  ///////havells
      {
    company: "havells",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "Astura",
    oldPrice: 2900,
    offerPrice: 2200
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "Aquilla amber 1000w",
    oldPrice: 1150,
    offerPrice: 895
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "dazzle",
    oldPrice: 1250,
    offerPrice: 950
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "glance ruby 750w",
    oldPrice: 1200,
    offerPrice: 850
  },{
    company: "havells",
    itemGroup: "iron box",
    groupName: "iron box",
    itemName: "hawk blue weight",
    oldPrice: 1700,
    offerPrice: 1350
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "eso 3 jar",
    oldPrice: 4750,
    offerPrice: 3990
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "hydro 3 jar 750w",
    oldPrice: 4750,
    offerPrice: 3990
  },{
    company: "havells",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "power hunk 800w",
    oldPrice: 5100,
    offerPrice: 4290
  },{
    company: "havells",
    itemGroup: "kettle",
    groupName: "kettle",
    itemName: "kettle Aqua pluse",
    oldPrice: 2200,
    offerPrice: 1850
  },
  
  ///////lisma
      {
    company: "Lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan IB sml",
    oldPrice: 750,
    offerPrice: 590
  },{
    company: "Lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan IB med",
    oldPrice: 790,
    offerPrice: 640
  },{
    company: "Lisma",
    itemGroup: "frypan",
    groupName: "frypan",
    itemName: "frypan med",
    oldPrice: 720,
    offerPrice: 575
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa large",
    oldPrice: 760,
    offerPrice: 590
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa med",
    oldPrice: 660,
    offerPrice: 480
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa ",
    itemName: "tawa small",
    oldPrice: 610,
    offerPrice: 475
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa large IB",
    oldPrice: 810,
    offerPrice: 650
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa med IB",
    oldPrice: 730,
    offerPrice: 550
  },{
    company: "Lisma",
    itemGroup: "tawa",
    groupName: "tawa IB",
    itemName: "tawa small IB",
    oldPrice: 640,
    offerPrice: 525
  },{
    company: "Lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi med",
    oldPrice: 1299,
    offerPrice: 975
  },{
    company: "Lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi med IB",
    oldPrice: 1280,
    offerPrice: 995
  },{
    company: "Lisma",
    itemGroup: "kadayi",
    groupName: "kadayi",
    itemName: "kadayi small IB",
    oldPrice: 1050,
    offerPrice: 850
  },{
    company: "Lisma",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa flat edge",
    oldPrice: 1510,
    offerPrice: 1295
  },{
    company: "Lisma",
    itemGroup: "pathiri tawa",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa four edge",
    oldPrice: 1660,
    offerPrice: 1350
  },{
    company: "Lisma",
    itemGroup: "appachatty",
    groupName: "appachatty",
    itemName: "appachatty 4 mm",
    oldPrice: 650,
    offerPrice: 495
  },{
    company: "Lisma",
    itemGroup: "gravy pot ",
    groupName: "gravy pot ",
    itemName: "gravy pot IB",
    oldPrice: 1610,
    offerPrice: 1395
  },{
    company: "Lisma",
    itemGroup: "nonstick set",
    groupName: "nonstick set",
    itemName: "nonstick set 3 pcs",
    oldPrice: 1700,
    offerPrice: 1390
  },
  /////PREETHI
      {
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "galaxy 750w",
    oldPrice: 4800,
    offerPrice: 3999
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "peppy 3 jar",
    oldPrice: 4700,
    offerPrice: 3890
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "peppy pro",
    oldPrice: 7200,
    offerPrice: 6250
  },{
    company: "preethi",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "zodiac black + atchmnt",
    oldPrice: 9600,
    offerPrice: 8400
  },{
    company: "preethi",
    itemGroup: "cocunut scraper",
    groupName: "cocunut scraper",
    itemName: "cocunut scraper COCOSTA",
    oldPrice: 5100,
    offerPrice: 4200
  },
  /////prestige
      {
    company: "prestige",
    itemGroup: "gas stove",
    groupName: "Hobetop",
    itemName: "hobetop 3B PHTD AI",
    oldPrice: 14600,
    offerPrice: 12400
  },{
    company: "prestige",
    itemGroup: "nonstick",
    groupName: "nonstick",
    itemName: "3pcs set BYK grnt",
    oldPrice: 2450,
    offerPrice: 1900
  },{
    company: "prestige",
    itemGroup: "nonstick",
    groupName: "nonstick",
    itemName: "tawa omega slt + 250m",
    oldPrice: 910,
    offerPrice: 749
  },
  //////Qb
      {
    company: "QBee",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "SS 2B classic",
    oldPrice: 2100,
    offerPrice: 1700
  },{
    company: "QBee",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "2B mini/nano",
    oldPrice: 2450,
    offerPrice: 1899
  },{
    company: "QBee",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "2B splendour",
    oldPrice: 3500,
    offerPrice: 2899
  },{
    company: "QBee",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "SS 1 Kg",
    oldPrice: 1750,
    offerPrice: 1490
  },{
    company: "QBee",
    itemGroup: "rice cooker",
    groupName: "steel",
    itemName: "SS 1.5 Kg",
    oldPrice: 1950,
    offerPrice: 1690
  },
  ///////Rasioya
      {
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "1.5 ltr o/l",
    oldPrice: 650,
    offerPrice: 499
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "2 ltr o/l",
    oldPrice: 790,
    offerPrice: 550
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "2 ltr i/l",
    oldPrice: 790,
    offerPrice: 549
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr o/l",
    oldPrice: 850,
    offerPrice: 599
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "3 ltr i/l",
    oldPrice: 900,
    offerPrice: 690
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr o/l",
    oldPrice: 950,
    offerPrice: 699
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 ltr i/l",
    oldPrice: 1200,
    offerPrice: 890
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "5 Ltr + 3 Ltr combo",
    oldPrice: 1350,
    offerPrice: 990
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "7.5 ltr pluse heavy",
    oldPrice: 1400,
    offerPrice: 1060
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "10 ltr heavy",
    oldPrice: 1500,
    offerPrice: 1150
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "aluminium",
    itemName: "12 ltr heavy",
    oldPrice: 1650,
    offerPrice: 1250
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "3 Ltr o/l IB",
    oldPrice: 900,
    offerPrice: 675
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "3 Ltr i/l IB",
    oldPrice: 950,
    offerPrice: 750
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "5 Ltr o/l IB",
    oldPrice: 1000,
    offerPrice: 775
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "IB",
    itemName: "5 Ltr i/l IB",
    oldPrice: 1250,
    offerPrice: 950
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "3 Ltr SS",
    oldPrice: 1490,
    offerPrice: 1199
  },{
    company: "rasoiya",
    itemGroup: "cooker",
    groupName: "steel",
    itemName: "5 Ltr SS",
    oldPrice: 1950,
    offerPrice: 1550
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 3 ltr glass lid",
    oldPrice: 850,
    offerPrice: 690
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 5 ltr glass lid",
    oldPrice: 1050,
    offerPrice: 799
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 8 ltr",
    oldPrice: 1450,
    offerPrice: 1049
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "biriyani Pot",
    itemName: "biriyani Pot 12 ltr",
    oldPrice: 1950,
    offerPrice: 1549
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa 4mm",
    oldPrice: 985,
    offerPrice: 749
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "pathiri tawa",
    itemName: "pathiri tawa 5mm",
    oldPrice: 1100,
    offerPrice: 849
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "tawa",
    itemName: "tawa 250 3mm",
    oldPrice: 420,
    offerPrice: 249
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "3pcs set",
    itemName: "3pcs Set",
    oldPrice: 1500,
    offerPrice: 1100
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "kadayi 150 mini",
    oldPrice: 330,
    offerPrice: 250
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "kadayi",
    itemName: "kadayi 280 3mm ss lid",
    oldPrice: 950,
    offerPrice: 699
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "frypan",
    itemName: "frypan mini 160",
    oldPrice: 315,
    offerPrice: 230
  },{
    company: "rasoiya",
    itemGroup: "non-stick",
    groupName: "appachatty",
    itemName: "appachatty",
    oldPrice: 400,
    offerPrice: 275
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 2000ml",
    oldPrice: 750,
    offerPrice: 549
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 3000ml",
    oldPrice: 900,
    offerPrice: 649
  },{
    company: "rasoiya",
    itemGroup: "castrol",
    groupName: "castrol",
    itemName: "SS 4000ml",
    oldPrice: 985,
    offerPrice: 749
  },{
    company: "rasoiya",
    itemGroup: "Gas stove",
    groupName: "gas stove",
    itemName: "smart 2B steel",
    oldPrice: 2100,
    offerPrice: 1650
  },
  ////////Sujata
      {
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "supermix",
    oldPrice: 5500,
    offerPrice: 4990
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "dynamix",
    oldPrice: 6500,
    offerPrice: 5790
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "multimix",
    oldPrice: 7750,
    offerPrice: 6950
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "frootmix",
    oldPrice: 4950,
    offerPrice: 4490
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "900w",
    itemName: "powermatic pluse",
    oldPrice: 5950,
    offerPrice: 5500
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG01",
    oldPrice: 6600,
    offerPrice: 5990
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG02",
    oldPrice: 7200,
    offerPrice: 6600
  },{
    company: "sujata",
    itemGroup: "mixi",
    groupName: "1000w",
    itemName: "MG03",
    oldPrice: 8100,
    offerPrice: 7290
  },{
    company: "sujata",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "morning Breez",
    oldPrice: 2500,
    offerPrice: 2250
  },{
    company: "sujata",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "ST270 es 18",
    oldPrice: 2100,
    offerPrice: 1750
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "dry fast max",
    oldPrice: 850,
    offerPrice: 599
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "espira",
    oldPrice: 950,
    offerPrice: 699
  },{
    company: "sujata",
    itemGroup: "iron Box",
    groupName: "iron Box",
    itemName: "smooth slide",
    oldPrice: 990,
    offerPrice: 750
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "kettle",
    itemName: "kettle ek-01",
    oldPrice: 2100,
    offerPrice: 1699
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "Blender",
    itemName: "blend graft",
    oldPrice: 2950,
    offerPrice: 2399
  },{
    company: "sujata",
    itemGroup: "others",
    groupName: "grill",
    itemName: "griller multi purpos",
    oldPrice: 5700,
    offerPrice: 4990
  },
  
  ////////vguard
      {
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "haize + 48",
    oldPrice: 1850,
    offerPrice: 1599
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "romanza art",
    oldPrice: 3850,
    offerPrice: 1599
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "wilo VX 48",
    oldPrice: 1900,
    offerPrice: 1690
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "splendid 2A 2B",
    oldPrice: 3100,
    offerPrice: 2490
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "steel",
    itemName: "splendid 3B",
    oldPrice: 4750,
    offerPrice: 4199
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "idalia 2B",
    oldPrice: 4250,
    offerPrice: 3590
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "idalia 3B",
    oldPrice: 5500,
    offerPrice: 4690
  },{
    company: "vguard",
    itemGroup: "gas stove",
    groupName: "glass top",
    itemName: "insight frameles",
    oldPrice: 7850,
    offerPrice: 7100
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "insignia DX 4 jar",
    oldPrice: 6800,
    offerPrice: 5990
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "insignia 750w",
    oldPrice: 5850,
    offerPrice: 5150
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "invidia 750 3jar GT",
    oldPrice: 4500,
    offerPrice: 3699
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "velocity 750w",
    oldPrice: 4850,
    offerPrice: 4200
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "VX 750 3jar",
    oldPrice: 4500,
    offerPrice: 3850
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "VX 750 pluse 4 jar",
    oldPrice: 4700,
    offerPrice: 3950
  },{
    company: "vguard",
    itemGroup: "mixi",
    groupName: "mixi",
    itemName: "wizmix",
    oldPrice: 4300,
    offerPrice: 3690
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "dreams pluse 48",
    oldPrice: 1950,
    offerPrice: 1699
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "4 leaf dreams+/ haize",
    oldPrice: 2200,
    offerPrice: 1890
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "BLDC Enviro neo 48",
    oldPrice: 3700,
    offerPrice: 3350
  },{
    company: "vguard",
    itemGroup: "fan",
    groupName: "ceiling fan",
    itemName: "BLDC Enviro pro",
    oldPrice: 4200,
    offerPrice: 3799
  },{
    company: "vguard",
    itemGroup: "induction cooker",
    groupName: "induction cooker",
    itemName: "VIC 150",
    oldPrice: 3650,
    offerPrice: 3150
  },
];
wrapper.addEventListener("click", function (e) {

  if (e.target.classList[0] === "on-item") {
    hideAll();
    e.target.parentElement.nextElementSibling.style.cssText =  "display : block;";
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-item");
    e.target.classList.remove("on-item");
  } 
  else if (e.target.classList[0] === "off-item" ) {
    e.target.parentElement.nextElementSibling.style.cssText =  "display : none;";
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-item");
    e.target.classList.remove("off-item");
  }else if (e.target.classList[0] === "on-group" ) {
    hideAllGrp();
    e.target.parentElement.nextElementSibling.style.cssText =
      "display : block;";
    e.target.style.cssText = "background-image: url(up-button.png);";
    e.target.classList.add("off-group");
    e.target.classList.remove("on-group");
  } else if (e.target.classList[0] === "off-group") {
    e.target.parentElement.nextElementSibling.style.cssText = "display : none;";
    e.target.style.cssText = "background-image: url(down-button.png);";
    e.target.classList.add("on-group");
    e.target.classList.remove("off-group");
  };
  if (e.target.classList[0]==="comp"||e.target.classList[0]==="gpr") {
    
    if(e.target.nextElementSibling.classList[0]==="on-item"){
      hideAll();
      e.target.parentElement.nextElementSibling.style.cssText =  "display : block;";
      e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
      e.target.nextElementSibling.classList.add("off-item");
      e.target.nextElementSibling.classList.remove("on-item");
    } else if (e.target.nextElementSibling.classList[0] === "off-item" ) {
      e.target.parentElement.nextElementSibling.style.cssText =  "display : none;";
      e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
      e.target.nextElementSibling.classList.add("on-item");
      e.target.nextElementSibling.classList.remove("off-item");
    }else if (e.target.nextElementSibling.classList[0] === "on-group" ) {
      hideAllGrp();
      e.target.parentElement.nextElementSibling.style.cssText =
        "display : block;";
      e.target.nextElementSibling.style.cssText = "background-image: url(up-button.png);";
      e.target.nextElementSibling.classList.add("off-group");
      e.target.nextElementSibling.classList.remove("on-group");
    }else if (e.target.nextElementSibling.classList[0] === "off-group") {
      e.target.parentElement.nextElementSibling.style.cssText = "display : none;";
      e.target.nextElementSibling.style.cssText = "background-image: url(down-button.png);";
      e.target.nextElementSibling.classList.add("on-group");
      e.target.nextElementSibling.classList.remove("off-group");
    };
  }
  
});

function sortoutArray() {
  let pushcode =``;
  let sorted = companySort();
  sorted.forEach((comp) => {
    let grpary = [];
    let newAry = [];

    pushcode += `<div class="items">
            <div class="header">
                <p class="comp">${comp.charAt(0).toUpperCase() + comp.slice(1)}</p>
                <div class="on-item"></div>
            </div>
                      <div class="groups">`;


    offerArray.forEach((val) => {
      if (val.company == comp) {
        grpary.push(val.itemGroup);
        newAry.push(val);
      }
    });
    grpary = [...new Set(grpary)];
    grpary.forEach((grp) => {
      let itnm = [];
      let new2ary = [];
      pushcode += ` 
            <div class="item-names">
                <div class="itmnm-head">
                    <p class="gpr">${grp.charAt(0).toUpperCase() + grp.slice(1)}</p>
                    <div class="on-group"></div>
                </div>
                         <div class="item-divs">`;

      newAry.forEach((val) => {
        if (val.itemGroup == grp) {
          itnm.push(val.groupName);
          new2ary.push(val);
        }
      });
      itnm = [...new Set(itnm)];
      itnm.forEach((itm) => {
        pushcode += `<fieldset>
                        <legend>${itm.charAt(0).toUpperCase() + itm.slice(1)}</legend>`;
        new2ary.forEach((val) => {
          if (val.groupName == itm) {
            pushcode += ` <div>
                            <p>${val.itemName.charAt(0).toUpperCase() + val.itemName.slice(1) }</p>
                            <p>Old price : ${val.oldPrice} /-</p>
                            <p>Offer price : ${val.offerPrice} /-</p>
                            <p>Diffrence : ${
                              val.oldPrice - val.offerPrice
                            } /-</p>
                        </div>`;
          }
        });
        pushcode += `</fieldset>`;
      });
      pushcode +=`</div>
            
        </div>`;
    });
    
    pushcode += `</div>
                </div> `
  });
  wrapper.innerHTML = pushcode;
}

function companySort() {
  let sortedItemArray = [];
  offerArray.forEach((val) => {
    sortedItemArray.push(val.company);
  });
  let sortedDArray = [...new Set(sortedItemArray)];
  return sortedDArray;
}

// let nl = null;
// function animate(elem) {
//   let pos = 0;
//   clearInterval(nl);
//   id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 100) {
//       clearInterval(nl);
//     } else {
//       pos++; 
//       elem.style.opacity = pos + '%'; 
//     }
//   }
// }


function callLocalstroage() {
  if (localStorage.getItem("offerPascode") && localStorage.getItem("offerPascode") == "vrs.0.11") {
    sortoutArray();
  }else{
  let msg = prompt('Please tha password', "");
  if (msg == "IQB-PKD") {
    localStorage.setItem("offerPascode","vrs.0.11");
    sortoutArray();
  }
  document.write("No Data found");
  }
};

function hideAll(){
const offAll = document.querySelectorAll('.off-item');
const offAllg = document.querySelectorAll('.off-group');
offAll.forEach(function(offAll) {
  offAll.parentElement.nextElementSibling.style.cssText = "display : none;";
  offAll.style.cssText = "background-image: url(down-button.png);";
  offAll.classList.add("on-item");
  offAll.classList.remove("off-item");
});
offAllg.forEach(function(offAllg) {
  offAllg.parentElement.nextElementSibling.style.cssText = "display : none;";
  offAllg.style.cssText = "background-image: url(down-button.png);";
  offAllg.classList.add("on-group");
  offAllg.classList.remove("off-group");
});

}

function hideAllGrp(){
  const offAllg = document.querySelectorAll('.off-group');
  offAllg.forEach(function(offAllg) {
    offAllg.parentElement.nextElementSibling.style.cssText = "display : none;";
    offAllg.style.cssText = "background-image: url(down-button.png);";
    offAllg.classList.add("on-group");
    offAllg.classList.remove("off-group");
});
}

// function animate(element){
//   if (element.classList.contains('visible')) {
//     element.style.height = '0px'; // Set height to 0 before removing the class
//   element.addEventListener('transitionend', function handleTransitionEnd() {
//       element.classList.remove('visible');
//       element.removeEventListener('transitionend', handleTransitionEnd);
//   });
// } else {
//   element.classList.add('visible');
//   element.style.height = element.scrollHeight + 'px'; // Calculate and set the full height
// }
// }


callLocalstroage();
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("srworker.js").then(registration=>{
      console.log("Service worker registered")
      console.log(registration);
  }).catch(error=>{
      console.log("Service worker error")
      console.log(error)
  })
}else{
  alert("Service worker not working")
}

