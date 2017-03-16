var $ = require("jquery");
var stories = require("../json/stories.json");

$(document).ready(function() {
    //json
    for(var i = 0; i < stories.length; i++){
        console.log(stories[i].story);
        $(".hero__body").append('<div id="div' + i + '" class="main-div"><p>' + stories[i].story + '</p></div>');
    }
    
    $(".hero__body").children().eq(0).addClass("active");
    
    for(var ii = 0; ii < $(".hero__body").children().length; ii++) {
        var buttonNumber = ii + 1;
        $(".visible-btns").append('<button target="'+ii+'">'+buttonNumber+'</button>');
    }
    
    $(".visible-btns").children().eq(0).addClass("btn__pink");
    
    //buttons to display div stories
    $(".hero__btns button").click(function(){
        $(this).siblings().removeClass("btn__pink");
        $(this).addClass("btn__pink");
        $(".main-div").hide();
        
        $('#div'+$(this).attr('target')).show();
    
        $(".hero__error-choose-word").hide();
        $(".hero__error-not-found").hide();
    });
    
    //put each word in span tag
    $(".main-div").each(function() {
            var text = $(".main-div p").html().split(' ');
            var length = text.length;
            var result= [];
            
            for( var i = 0; i < length; i++) {
                result[i] = '<span>' + text[i] + '</span>';
            }
            
            $(this).html(result.join(' '));
        });
    
    
    //***********VALIDATION**************//
    $('.change-this').blur(function() {
        if( !$(this).val() ) {
            $(".hero__error-choose-word").show();
            $(".hero__error-not-found").hide(); 
        }else{
            $(".hero__error-choose-word").hide();
        }
    });
  

    //When to-this input gets clicked highlight matched words
    $(".to-this").on("click keyup", function() {
        
        $(".hero__error-not-found").hide(); 
        
        $(".highlight").removeClass("highlight");
        
        var changeThis = $(".change-this").val().toLowerCase();
        
        $(".main-div:visible span").filter(function() {
            var text = $(this).text().toLowerCase();
        
            if(text === changeThis) {
                 $(this).addClass("highlight");
            }
        });
        
        if( !$(".main-div:visible span").hasClass("highlight")){
            $(".hero__error-not-found").show();
            $(".change-this").focus(); 
        }
        
        
        if(event.keyCode === 13){
              $(".hero__change-btn").click();
              $(".hero__error-not-found").hide(); 
          }
    });
    
    //if change-this value matches change it to this
    $(".hero__change-btn").on("click keyup", function() {
        var toThis = $(".to-this").val();
        
        if(toThis != ''){
            $(".main-div:visible .highlight").text(toThis); 
            $(".highlight").removeClass("highlight");
        }
        
        $(".change-this").focus(); 
        $(".hero__error-not-found").hide(); 
        $(".hero__input-container input").val('');
    });
    
    require("../modules/modal");
});