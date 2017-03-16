var $ = require("jquery");

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