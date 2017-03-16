var $ = require("jquery");

$(document).ready(function() {
    
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
    
    //modal
    $(".hero__done-btn").click(function() {
        $("#modal-close").show().parent().addClass("modal-show"); 
    });
    
    
     $(".modal__start-btn").click(function() {
       var userName = $(".modal__input").val();
       
       if(userName != ''){
           $("#modal-open").addClass("modal-hide"); 
           $("body").removeClass("modal-show");
           $(".username-title").text(userName);
       }else{
           $(".modal__warning-msg").show();
           $(".modal__input").focus(); 
       }
       
       if($(".modal__open-user-image:first").hasClass("pink-border")) {
            $(".hero__user-avator").html("<img src='assets/images/flowershy.png'/>");
            $(".modal__close-user-image").html("<img src='assets/images/flowershy.png'/>");
        }else if($(".modal__open-user-image:last").hasClass("pink-border")){
            $(".hero__user-avator").html("<img src='assets/images/train.png'/>");
            $(".modal__close-user-image").html("<img src='assets/images/train.png'/>");
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
    
    //user image 
    $(".modal__open-user-image").click(function() {
        $(this).addClass("pink-border").siblings().removeClass("pink-border");
    });
});

exports.example = "";