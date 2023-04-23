// дэлгэцтэй ажиллах controller
var uiController = function(){
    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        addBtn: ".add__btn",
    }


    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value, 
            };
        },
        getDOMstrings: function(){
            return DOMstrings
        }
};
}();
// санхүүтэй ажиллах controller
var financeController = (function(){
    var Income = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
      };
      
      
      var Expence = function(id,description,value){
        this.id = id;
        this.description = description;
        this.value = value;
      };

      var data = {
        allitems: {
          inc: [],
          exp: [],
        },
        totals:{
          inc :0,
          exp :0,
        }
      }
})();
// 
var appController = (function(uiController,fnController){
    var ctrlAddItem = function(){
        console.log(uiController.getInput());
        /*
        1. оруурах өгөгдлийг дэлгэцнээс олж авна.
        2. olj awsan ogogdlvvdee sanhvvgin controllertdamjuulj tend hadgalna
        3. olj awsan ogogdlvvdee web deeree tohirog hesegt n gargana 
        4. toswiig tootsoolno
        5. etssiin vldegdel tootsoog delgetsend gargana.
        */
    };

    var setupEventListeners = function(){
        var DOM = uiController.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click',function(){
            ctrlAddItem();
        });
    
        document.addEventListener('keypress',function(event){
            if(event.key === 'Enter'){
                ctrlAddItem();
            }
        });
    }
    return {
        init : function(){
            console.log("application started");
            setupEventListeners();
        }
    }

})(uiController, financeController);

appController.init();