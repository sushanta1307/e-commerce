import router from '@system.router';
export default {
    data: {
    },
    onInit() {
    },
    detailPage: function(){
        router.push({
            uri:"pages/detailPage/detailPage"
        })
    },
    filterPage: function(){
        router.push({
            uri:"pages/filterPage/filterPage"
        })
    },
    buttonColChange: function (){
    },
    onLike: function(){
    }
}
