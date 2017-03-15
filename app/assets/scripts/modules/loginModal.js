var $ = require("jquery");

$(document).ready(function() {
    
    $(".div-buttons button").click(function(){
        $(this).siblings().removeClass("blue");
        $(this).addClass("blue");
        $(".main-div").hide();
        
        $('#div'+$(this).attr('target')).show();
        
        $(".change-this").focus(); 
        $(".error-choose-word").hide();
        $(".error-not-found").hide();
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
            $(".error-choose-word").show();
            $(".error-not-found").hide(); 
        }else{
            $(".error-choose-word").hide();
        }
    });
  

    //When to-this input gets clicked highlight matched words
    $(".to-this").on("click keyup", function() {
        
        $(".error-not-found").hide(); 
        
        $(".highlight").removeClass("highlight");
        
        var changeThis = $(".change-this").val().toLowerCase();
        
        $(".main-div:visible span").filter(function() {
            var text = $(this).text().toLowerCase();
        
            if(text === changeThis) {
                 $(this).addClass("highlight");
            }
        });
        
        if( !$(".main-div:visible span").hasClass("highlight")){
            $(".error-not-found").show();
            $(".change-this").focus(); 
        }
        
        
        if(event.keyCode === 13){
              $(".hero__change-btn").click();
              $(".error-not-found").hide(); 
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
        $(".error-not-found").hide(); 
        $(".input-div input").val('');
    });
    
    //modal
    $(".done").click(function() {
        $("#modal-close").show(); 
    });
    
    
     $(".modal__start-btn").click(function() {
       var userName = $(".modal__input").val();
       
       if(userName != ''){
           $("#modal-open").hide(); 
           $(".username-title").text(userName);
       }else{
           $(".modal__warning-msg").show();
           $(".modal__input").focus(); 
       }
    });

    
    $(".modal__close-btn").click(function() {
         document.location.reload();
    });
    
    //on press enter
    $(".modal__input").keyup(function() {
       if(event.keyCode === 13){
           $(".modal__start-btn").click();
       } 
    });
});

exports.example = "";