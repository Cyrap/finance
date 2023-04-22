// дэлгэцтэй ажиллах controller
var uiController = function(){

}();
// санхүүтэй ажиллах controller
var financeController = (function(){

})();
// 
var appController = (function(uiController,fnController){
    var ctrlAddItem = function(){
        document.querySelector('.add__btn').addEventListener('click',function(){
            console.log('Enter towch daragdlaa')
            /*
            1. оруурах өгөгдлийг дэлгэцнээс олж авна.
            2. olj awsan ogogdlvvdee sanhvvgin controllertdamjuulj tend hadgalna
            3. olj awsan ogogdlvvdee web deeree tohirog hesegt n gargana 
            4. toswiig tootsoolno
            5. etssiin vldegdel tootsoog delgetsend gargana.
            */
        })
    }
    document.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
            ctrlAddItem();
        }
    })
})(uiController, financeController);