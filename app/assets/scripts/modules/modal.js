var $ = require("jquery");

var greetingModal = {
    events: function() {
        var startButton = $(".modal__start-btn");
        var greetingModal = $("#modal-open");
        var userNameInput = $(".modal__input");
        var errorUsernameMsg = $(".modal__warning-msg");
        var modalUserAvator = $(".modal__open-user-image");
        var heroUserAvator = $(".hero__user-avator");
        var exitModalUserAvator = $(".modal__close-user-image");
        var heroUserName = $(".username-title");
        
        
        
        //greeting modal input validation
        startButton.click(function() {
           var userName = $(".modal__input").val();
           
           //username validation
           if(userName != ''){
               greetingModal.addClass("modal-hide"); 
               $("body").removeClass("modal-show");
               heroUserName.text(userName);
           }else{
               errorUsernameMsg.show();
               userNameInput.focus(); 
           }
           
           //display user avator
           if($(".modal__open-user-image:first").hasClass("pink-border")) {
                heroUserAvator.html("<img src='assets/images/flowershy.png'/>");
                exitModalUserAvator.html("<img src='assets/images/flowershy.png'/>");
            }else if($(".modal__open-user-image:last").hasClass("pink-border")){
                heroUserAvator.html("<img src='assets/images/train.png'/>");
                exitModalUserAvator.html("<img src='assets/images/train.png'/>");
            }
        });
        
        //on press enter
        userNameInput.keyup(function() {
           if(event.keyCode === 13){
               startButton.click();
           } 
        });
        
        //user image 
        modalUserAvator.click(function() {
            $(this).addClass("pink-border").siblings().removeClass("pink-border");
        });
        
    }
};

var exitModal = {
    events: function(){
        var doneButton = $(".hero__done-btn");
        var exitModal = $("#modal-close");
        var exitModalCloseButton = $(".modal__close-btn");
        
        //show exit modal
        doneButton.click(function() {
            exitModal.show().parent().addClass("modal-show"); 
        });
        
        //back to start
        exitModalCloseButton.click(function() {
             document.location.reload();
        });
        }
};

greetingModal.events();
exitModal.events();