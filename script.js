

let dataKelas ={
    lihat: false,
    menu: false,
    dua : [{
        hari : 'SENIN',
        mapel : 'Praktikum Basis Data',
        mapelDua : 'Pratikum Alpro 2',
        jam : '07.50-09.35',
        jamDua : '09.35-11.20'
    },
    {
        hari : 'SELASA',
        mapel : 'Sistem operasi',
        mapelDua : 'Inovasi Teknologi',
        jam : '07.50-09.35',
        jamDua : '09.35-11.20'
    },
    {
        hari : 'RABU',
        mapel : 'Aljabar',
        mapelDua : 'Teori Alpro 2',
        jam : '08.45-10.25',
        jamDua : '09.35-11.20'
    },
    {
        hari : 'KAMIS',
        mapel : 'Aljabar',
        mapelDua : 'Basis Data',
        jam : '08.45-10.25',
        jamDua : '10.30-13.50'
    },
    {
        hari : 'JUM`AT',
        mapel : 'Agama',
        mapelDua : 'Arsitektur komputer',
        jam : '07.50-09.35',
        jamDua : '09.35-11.20'
    }
]
}

const vm = new Vue({
    el:"#kelas",
    data : dataKelas,
    methods:{
    
}
        
    
    }
);

const item = document.getElementById('kelas');

animasiklik = ()=>{
    anime({
    targets: item,
    translateX: 0,
    scale: 1,
    rotate: '1turn',
  });
}    
item.addEventListener('click',animasiklik);
const menu = document.getElementById('menu');
const navigasi = document.getElementById('nav');
menu.addEventListener('click',function(){
      navigasi.classList.toggle('active');
})
