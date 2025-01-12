$.fn.hasAttr = function(name) {  
    return this.attr(name) !== undefined;
};

function ReloadPage()
{
  location.reload();
}
function LoadPage(page)
{
  window.location = page;
}

function SetFocus(id){
  data = $("#" + id).val();
  $("#" + id).val("");
  $("#" + id).val(data);
  $("#" + id).focus();
}

function ActivateValidation(){    
  $('.number').keydown(function (e) {
      if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
                   (e.keyCode == 65 && e.ctrlKey === true) || 
                   (e.keyCode >= 35 && e.keyCode <= 39)) {
                               return;
      }
               
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
      }
  });
  $('.number-real').keyup(function (e) {
      data = $(this).val();
              $(this).val(data.replace(" ", ""));
  
              var lista = [ '0', '1', '2', '3', '4', '5', '6', '7','8','9','.' ];
              
              lim = $(this).val().length;
              newCad = "";
              sw = true;
              for(i = 0; i < lim; i++){
                  c = $(this).val().substring(i, i+1);
                  if( lista.includes( c )  ){
                      if ( c != "."){
                          newCad += c;
                      }else{
                          if (sw == true){
                              newCad += c;
                              sw = false;
                          }
                      }               
                  }
              }
      
      $(this).val(newCad);
  });
}

/** Msg OK **/
function MsgOk(title, msg, t=4000){
  $(".bg-all").fadeIn();
  $(".ctn-message").fadeIn(1000);        
      
  $(".ctn-message .msg-title").html(title);
  $(".ctn-message .msg-text").html(msg);
  $(".ctn-message").addClass("bg-ok shake animated");
      
  if (t > 0){
      setTimeout("CloseMsgOk()", t);    
  }    
}

function CloseMsgOk(){
  $(".bg-all").fadeOut();
  $(".ctn-message").fadeOut(1000);    
  $(".ctn-message .msg-title").html("");
  $(".ctn-message .msg-text").html("");
  
  $(".ctn-message").removeClass("bg-ok");
}

/** Msg Err **/
function MsgErr(title, msg, t=4000){
  $(".bg-all").fadeIn();
  $(".ctn-message").fadeIn(1000);
  
  $(".ctn-message .msg-title").html(title);
  $(".ctn-message .msg-text").html(msg);
  $(".ctn-message").addClass("bg-error shake animated");
  
  setTimeout("CloseMsgErr()", t);
}

function CloseMsgErr(){
  $(".bg-all").fadeOut();
  $(".ctn-message").fadeOut(1000);    
  $(".ctn-message .msg-title").html("");
  $(".ctn-message .msg-text").html("");
  
  $(".ctn-message").removeClass("bg-error");
}