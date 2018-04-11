var myVuew = new Vue({
    el:'#test',
    data:{
        date_time: 0
    },
    methods:{
        umur:function(){
            setInterval(()=>  this.count(), 1000);
        },
        count:function(){
            var data = new Date();
            var myAge = new Date(1993, (1 - 1), 13);
            
            var tot = data - myAge;

            console.log(myAge.getUTCDay());

            var satuan = Math.floor(tot / (1000*60*60*24*365));
            console.log(satuan);

            this.date_time = satuan
        }
    },
    computed:{
        tanggal:function(){
            this.count()
            return this.date_time;
        }
    }
})
