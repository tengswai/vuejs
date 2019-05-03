var app =new Vue({
    el:'#swaii',
    data:{
        travel : 'Love Life',
        image : './place/melaka.jpg',
        alt :'Melaka',
        isMas : true,
        food:["Satay","Nyonya-Food"],
        love:0,
        country:[
            {
                countryId:1,
                countryPlace:"Melaka",
                placeImage:"./place/melaka.jpg",
                countryFood:["Satay","Nyonya-Food"],
                isMas :true
            },
            {
                countryId:2,
                countryPlace:"Melbourne",
                placeImage:"./place/melbourne.jpg",
                countryFood:["Steak","Burger"],
                isMas :false
            }
        ]
    },
    methods:{
        addLove(){
            this.love +=1
        },
        changePlace(placeImage,countryFood,isMas){
            this.image = placeImage
            this.food = countryFood
            this.isMas = isMas
        }
    }
})