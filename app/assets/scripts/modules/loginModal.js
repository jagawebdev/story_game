var $ = require("jquery");

$(document).ready(function() {
    
    $(".modal").on("show", function () {
      $("body").addClass("modal-open");
    }).on("hidden", function () {
      $("body").removeClass("modal-open");
    });
    
    $(".hero__btns button").click(function(){
        $(this).siblings().removeClass("btn__pink");
        $(this).addClass("btn__pink");
        $(".main-div").hide();
        
        $('#div'+$(this).attr('target')).show();
        
        $(".change-this").focus(); 
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
    
    //modal
    $(".hero__done-btn").click(function() {
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