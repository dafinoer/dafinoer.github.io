function inYear(dateData, myAge){
    var getYearNow = dateData.getFullYear();
    var getYearBirdt = myAge.getFullYear();

    var tot = getYearNow - getYearBirdt;

    return tot;
}

function inDays (dateData, myAge){
    var getDateNow = dateData;
    var getDateBird = myAge;

    var tot = dateData - myAge;

    var getDays = parseInt(tot / (24*3600*1000));
    return getDays;
}

function inMonth(dateData, myAge){
    var getYearNow = dateData.getFullYear();
    var getYearBirth = myAge.getFullYear();
    var getMonthNow = dateData.getUTCMonth();
    var getMonthBirdth = myAge.getMonth();

    var tot = (getMonthNow+12*getYearNow) - (getMonthBirdth+12*getYearBirth);

    // var tot = getMonthNow - getMonthBirdth;

    return tot
}

function inWeek(dateData, myAge){
    var tot = dateData - myAge;
    var cnv = parseInt(tot/(1000*60*60*24*7));
    return cnv
}


function inHour(dateData, myAge){
    var a = dateData;
    var b = myAge;

    var tot = a - b;

    var cnv = parseInt(tot / (3600*1000));
    return cnv
}

function inSecond(dateData, myAge){
    var c = dateData;
    var d = myAge;

    var tot = c - d;

    var cnv = parseInt(tot / (1000*60));

    return cnv
}

function inMiliSecond(dateData, myAge){
    var tot = dateData - myAge;
    var cnv = parseInt(tot / 1000);

    console.log(cnv);

    return cnv
}




var myVuew = new Vue({
    el:'#test',
    data:{
        date_time: null
    },
    methods:{
        umur:function(){
            setInterval(()=>  this.count(), 1000);
        },
        count:function(){
            // var data = new Date();
            // var myAge = new Date(1993, (1 - 1), 13);
            
            // var tot = data - myAge;
            // console.log(myAge.getTime());

            // var satuan = Math.floor(tot / (1000*60*60*24*365));
            // console.log(tot / (1000*60*60*24*365));

            var dateData = new Date();
            var myAge = new Date("Jan, 13, 1993");


            var total = inYear(dateData, myAge) + " Tahun " 
            +inMonth(dateData, myAge)+ " Bulan "
            + inWeek(dateData, myAge)+ " Minggu " 
            + inDays(dateData, myAge)+ " Hari "
            + inHour(dateData, myAge)+ " Jam " 
            + inSecond(dateData, myAge)+ " Menit "
            + inMiliSecond(dateData, myAge)+ " Detik";

            this.date_time = total
        }

    },
    computed:{
        tanggal:function(){
            this.umur();
            return this.date_time;
        }
    }
})
