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
        items: {
          inc: [],
          exp: [],
        },
        totals:{
          inc :0,
          exp :0,
        }
      }

      return {
        addItem: function(type,desc,val){

            var item,id;
            // Identification = ID
            // [1,2,3,4]
            if(data.items[type].length === 0) id = 1;
            else{
                id = data.items[type][data.items[type].length-1].id + 1;
            }

            if(type == 'inc'){
                item = new Income(id,desc,val)
            }
            else{
                item = new Expence(id,desc,val)
            }
            data.items[type].push(item);
        }
      }
})();
// 
var appController = (function(uiController,fnController){
    var ctrlAddItem = function(){
        // 1. оруурах өгөгдлийг дэлгэцнээс олж авна.
        var input = uiController.getInput();
        // 2. olj awsan ogogdlvvdee sanhvvgin controllertdamjuulj tend hadgalna
        financeController.addItem(input.type,input.description,input.value)
        // 3. olj awsan ogogdlvvdee web deeree tohirog hesegt n gargana 
        // 4. toswiig tootsoolno
        // 5. etssiin vldegdel tootsoog delgetsend gargana.
        
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