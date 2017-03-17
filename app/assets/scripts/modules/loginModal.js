var $ = require("jquery");
var stories = require("../json/stories.json");

var view = {
    init: function(){
        this.createStoryContainer();
        this.createStoryButton();
        this.wrapEachWordInSpan();
        this.setUpEventListeners();  
    },
    
    createStoryContainer: function(){
        var heroBody = $(".hero__body");
        for(var i = 0; i < stories.length; i++){
            heroBody.append('<div id="div' + i + '" class="main-div"><p>' + stories[i].story + '</p></div>');
        }
        
        heroBody.children().eq(0).addClass("active");
    },
    
    createStoryButton: function(){
        var visibleButtons = $(".visible-btns");
        
        for(var ii = 0; ii < $(".hero__body").children().length; ii++) {
            var buttonNumber = ii + 1;
            visibleButtons.append('<button target="'+ii+'">'+buttonNumber+'</button>');
        }
        
        visibleButtons.children().eq(0).addClass("btn__pink");
    },
    
    wrapEachWordInSpan: function(){
        $(".main-div").each(function() {
            var text = $(".main-div p").html().split(' ');
            var length = text.length;
            var result= [];
            
            for( var i = 0; i < length; i++) {
                result[i] = '<span>' + text[i] + '</span>';
            }
            
            $(this).html(result.join(' '));
        });
    },
    
    setUpEventListeners: function() {
        var storyButtons = $(".hero__btns button");
        var changeThisInput = $('.change-this');
        var toThisInput = $(".to-this");
        var errorChooseWord = $(".hero__error-choose-word");
        var errorNotFound = $(".hero__error-not-found");
        var changeButton = $(".hero__change-btn");
        
        //Show story accordingly to button click
        storyButtons.click(function(){
            $(this).siblings().removeClass("btn__pink");
            $(this).addClass("btn__pink");
            $(".main-div").hide();
            
            $('#div'+$(this).attr('target')).show();
        
            errorChooseWord.hide();
            errorNotFound.hide();
        });
        
        //error handle
        changeThisInput.blur(function() {
            if( !$(this).val() ) {
                errorChooseWord.show();
                errorNotFound.hide(); 
            }else{
                errorChooseWord.hide();
            }
        });
        
        //Change-this input validation
        toThisInput.on("click keyup", function() {
        
            errorNotFound.hide(); 
            
            $(".highlight").removeClass("highlight");
            
            var changeThis = changeThisInput.val().toLowerCase();
            
            $(".main-div:visible span").filter(function() {
                var text = $(this).text().toLowerCase();
            
                if(text === changeThis) {
                     $(this).addClass("highlight");
                }
            });
            
            if( !$(".main-div:visible span").hasClass("highlight")){
                errorNotFound.show();
                changeThisInput.focus(); 
            }
            
            
            if(event.keyCode === 13){
                  changeButton.click();
                  errorNotFound.hide(); 
              }
        });
        
        //When change button is clicked validate to-this input value
        changeButton.on("click keyup", function() {
            var toThis = toThisInput.val();
            
            if(toThis != ''){
                $(".main-div:visible .highlight").text(toThis); 
                $(".highlight").removeClass("highlight");
            }
            
            changeThisInput.focus(); 
            errorNotFound.hide(); 
            
            changeThisInput.val('');
            toThisInput.val('');
        });
    }
    
};

$(document).ready(function() {
    view.init();
    
    require("../modules/modal");
});