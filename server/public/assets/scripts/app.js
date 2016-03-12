//variables
var xNum = null;
var xString = "";
var yNum = null;
var yString = "";

var operator


//large functions

function inputNumber() {
  xString += $(this).text();
  $('#screen-big').text(xString);
  $('.operator').removeAttr( "disabled", "disabled" );
  if (yNum == null) {
    $('.equals').attr( "disabled", "disabled" );
  }
  if (yNum != null) {
    $('.operator').attr( "disabled", "disabled" );
    $('.equals').removeAttr( "disabled", "disabled" );
  }
  if ($(this).text() == "." ) {
    $('.dot').attr( "disabled", "disabled" );
  }

}

function inputOperator(){
  if (yNum == null) {
    operator = $(this).data('operator');
    yNum = xString;
    xString = "";
    $('#screen-small').text(yNum);
    $('#screen-big').text(xString)
    console.log(operator);
    $('.operator').attr( "disabled", "disabled" );
    $('.dot').removeAttr( "disabled", "disabled" );
  } else {
    $.ajax({
         type: "GET",
         url: "/math/" + operator + "/" + xString + "/" + yNum,
         success: function(data){
           console.log(data);
           $('#screen-small').text("");
           $('#screen-big').text(data.response);
           xString = "";
           xNum = null;
           yNum = null;
           $('.operator').attr( "disabled", "disabled" );
           $('.dot').removeAttr( "disabled", "disabled" )
         }
     });
  }
}

$('document').ready( function () {

  $('.operator').attr( "disabled", "disabled" );

  //we need click listeners for each button
  $('.btn-default').on('click', inputNumber);
  $('.btn-primary').on('click', inputOperator);


});
