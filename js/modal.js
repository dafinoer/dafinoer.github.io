var modalComponent = {
    data:function(){
        return {
            count:0
        }
    },
    template:'<a href="#" v-on:click="modalbutton"></a>',
    methods:{
        modalbutton:function(){
            console.log('ini modal');
        }
    }
}


new Vue({
    el:'#card-project',
    components:{
        'tombol-modal':modalComponent
    }
})