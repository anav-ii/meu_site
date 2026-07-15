const motos = [
    {
      idProduto: 1,
      descricao: "Honda CG 160 Start",
      valorUnitario: 16990.00,
      unidade: "UN",
      caminho: "img/motos/honda-cg-160-start.jpg",
      idSecao: 1,
      secao: "Street"
    },
    {
      idProduto: 2,
      descricao: "Honda CG 160 Fan",
      valorUnitario: 18490.00,
      unidade: "UN",
      caminho: "img/motos/honda-cg-160-fan.jpg",
      idSecao: 1,
      secao: "Street"
    },
    {
      idProduto: 3,
      descricao: "Honda CG 160 Titan",
      valorUnitario: 19990.00,
      unidade: "UN",
      caminho: "img/motos/honda-cg-160-titan.jpg",
      idSecao: 1,
      secao: "Street"
    },
    {
      idProduto: 4,
      descricao: "Honda CB 300F Twister",
      valorUnitario: 25990.00,
      unidade: "UN",
      caminho: "img/motos/honda-cb300f-twister.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 5,
      descricao: "Honda Sahara 300",
      valorUnitario: 31990.00,
      unidade: "UN",
      caminho: "img/motos/honda-sahara-300.jpg",
      idSecao: 3,
      secao: "Trail"
    },
    {
      idProduto: 6,
      descricao: "Honda XRE 300",
      valorUnitario: 30990.00,
      unidade: "UN",
      caminho: "img/motos/honda-xre-300.jpg",
      idSecao: 3,
      secao: "Trail"
    },
    {
      idProduto: 7,
      descricao: "Honda Africa Twin CRF 1100L",
      valorUnitario: 89990.00,
      unidade: "UN",
      caminho: "img/motos/honda-africa-twin.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 8,
      descricao: "Yamaha Factor 150",
      descricao: 17990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-factor-150.jpg",
      idSecao: 1,
      secao: "Street"
    },
    {
      idProduto: 9,
      descricao: "Yamaha Fazer FZ15",
      valorUnitario: 18990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-fz15.jpg",
      idSecao: 1,
      secao: "Street"
    },
    {
      idProduto: 10,
      descricao: "Yamaha Fazer FZ25",
      valorUnitario: 24990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-fz25.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 11,
      descricao: "Yamaha MT-03",
      valorUnitario: 32990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-mt03.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 12,
      descricao: "Yamaha MT-07",
      valorUnitario: 57990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-mt07.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 13,
      descricao: "Yamaha Lander 250",
      valorUnitario: 29990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-lander-250.jpg",
      idSecao: 3,
      secao: "Trail"
    },
    {
      idProduto: 14,
      descricao: "Yamaha Ténéré 700",
      valorUnitario: 72990.00,
      unidade: "UN",
      caminho: "img/motos/yamaha-tenere-700.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 15,
      descricao: "BMW G 310 GS",
      valorUnitario: 42990.00,
      unidade: "UN",
      caminho: "img/motos/bmw-g310gs.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 16,
      descricao: "BMW F 900 GS",
      valorUnitario: 79990.00,
      unidade: "UN",
      caminho: "img/motos/bmw-f900gs.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 17,
      descricao: "BMW R 1300 GS",
      valorUnitario: 119990.00,
      unidade: "UN",
      caminho: "img/motos/bmw-r1300gs.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 18,
      descricao: "Kawasaki Ninja 300",
      valorUnitario: 33990.00,
      unidade: "UN",
      caminho: "img/motos/kawasaki-ninja300.jpg",
      idSecao: 5,
      secao: "Esportiva"
    },
    {
      idProduto: 19,
      descricao: "Kawasaki Ninja 400",
      valorUnitario: 39990.00,
      unidade: "UN",
      caminho: "img/motos/kawasaki-ninja400.jpg",
      idSecao: 5,
      secao: "Esportiva"
    },
    {
      idProduto: 20,
      descricao: "Kawasaki Z400",
      valorUnitario: 38990.00,
      unidade: "UN",
      caminho: "img/motos/kawasaki-z400.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 21,
      descricao: "Kawasaki Versys 650",
      valorUnitario: 58990.00,
      unidade: "UN",
      caminho: "img/motos/kawasaki-versys650.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 22,
      descricao: "Suzuki GSX-S1000",
      valorUnitario: 78990.00,
      unidade: "UN",
      caminho: "img/motos/suzuki-gsxs1000.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 23,
      descricao: "Suzuki V-Strom 650",
      valorUnitario: 61990.00,
      unidade: "UN",
      caminho: "img/motos/suzuki-vstrom650.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 24,
      descricao: "Suzuki Hayabusa",
      valorUnitario: 124990.00,
      unidade: "UN",
      caminho: "img/motos/suzuki-hayabusa.jpg",
      idSecao: 5,
      secao: "Esportiva"
    },
    {
      idProduto: 25,
      descricao: "Royal Enfield Hunter 350",
      valorUnitario: 21990.00,
      unidade: "UN",
      caminho: "img/motos/re-hunter350.jpg",
      idSecao: 6,
      secao: "Classic"
    },
    {
      idProduto: 26,
      descricao: "Royal Enfield Meteor 350",
      valorUnitario: 24990.00,
      unidade: "UN",
      caminho: "img/motos/re-meteor350.jpg",
      idSecao: 6,
      secao: "Classic"
    },
    {
      idProduto: 27,
      descricao: "Royal Enfield Classic 350",
      valorUnitario: 25990.00,
      unidade: "UN",
      caminho: "img/motos/re-classic350.jpg",
      idSecao: 6,
      secao: "Classic"
    },
    {
      idProduto: 28,
      descricao: "Royal Enfield Himalayan 450",
      valorUnitario: 33990.00,
      unidade: "UN",
      caminho: "img/motos/re-himalayan450.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 29,
      descricao: "Triumph Speed 400",
      valorUnitario: 29990.00,
      unidade: "UN",
      caminho: "img/motos/triumph-speed400.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 30,
      descricao: "Triumph Scrambler 400 X",
      valorUnitario: 33990.00,
      unidade: "UN",
      caminho: "img/motos/triumph-scrambler400x.jpg",
      idSecao: 3,
      secao: "Trail"
    },
    {
      idProduto: 31,
      descricao: "Triumph Tiger Sport 660",
      valorUnitario: 56990.00,
      unidade: "UN",
      caminho: "img/motos/triumph-tigersport660.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 32,
      descricao: "Triumph Tiger 900 Rally Pro",
      valorUnitario: 88990.00,
      unidade: "UN",
      caminho: "img/motos/triumph-tiger900.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 33,
      descricao: "Ducati Monster",
      valorUnitario: 89990.00,
      unidade: "UN",
      caminho: "img/motos/ducati-monster.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 34,
      descricao: "Ducati Multistrada V4",
      valorUnitario: 149990.00,
      unidade: "UN",
      caminho: "img/motos/ducati-multistrada-v4.jpg",
      idSecao: 4,
      secao: "Big Trail"
    },
    {
      idProduto: 35,
      descricao: "Ducati Panigale V2",
      valorUnitario: 139990.00,
      unidade: "UN",
      caminho: "img/motos/ducati-panigale-v2.jpg",
      idSecao: 5,
      secao: "Esportiva"
    },
    {
      idProduto: 36,
      descricao: "Harley-Davidson Iron 883",
      valorUnitario: 69990.00,
      unidade: "UN",
      caminho: "img/motos/harley-iron883.jpg",
      idSecao: 7,
      secao: "Custom"
    },
    {
      idProduto: 37,
      descricao: "Harley-Davidson Street Bob",
      valorUnitario: 99990.00,
      unidade: "UN",
      caminho: "img/motos/harley-streetbob.jpg",
      idSecao: 7,
      secao: "Custom"
    },
    {
      idProduto: 38,
      descricao: "Harley-Davidson Fat Boy",
      valorUnitario: 149990.00,
      unidade: "UN",
      caminho: "img/motos/harley-fatboy.jpg",
      idSecao: 7,
      secao: "Custom"
    },
    {
      idProduto: 39,
      descricao: "Bajaj Dominar 400",
      valorUnitario: 26990.00,
      unidade: "UN",
      caminho: "img/motos/bajaj-dominar400.jpg",
      idSecao: 2,
      secao: "Naked"
    },
    {
      idProduto: 40,
      descricao: "CFMoto 450MT",
      valorUnitario: 38990.00,
      unidade: "UN",
      caminho: "img/motos/cfmoto-450mt.jpg",
      idSecao: 4,
      secao: "Big Trail"
    }
  ];

  export{motos}