//variables
var xNum = null;
var xString = "";
var yNum = null;
var yString = "";

var operator



//large functions

function inputNumber() {
  xString += $(this).text();
  xNum = parseInt(xString);
  $('#screen-big').text(xNum);
  $('.operator').removeAttr( "disabled", "disabled" );
  if (yNum == null) {
    $('.equals').attr( "disabled", "disabled" );
  }
  if (yNum != null) {
    $('.operator').attr( "disabled", "disabled" );
    $('.equals').removeAttr( "disabled", "disabled" )
  }

}

function inputOperator(){
  if (yNum == null) {
    operator = $(this).data('operator');
    yNum = parseInt(xNum);
    xNum = 0;
    xString = "";
    $('#screen-small').text(yNum);
    $('#screen-big').text(xString)
    console.log(operator);
    $('.operator').attr( "disabled", "disabled" );
  } else {
    $.ajax({
         type: "GET",
         url: "/math/" + operator + "/" + xNum + "/" + yNum,
         success: function(data){
           console.log(data);
           $('#screen-small').text("");
           $('#screen-big').text(data.response);
           xString = "";
           xNum = null;
           yNum = null;
           $('.operator').attr( "disabled", "disabled" );
         }
     });
  }
}

//sub functions



//utility functions


$('document').ready( function () {

  $('.operator').attr( "disabled", "disabled" );

  //we need click listeners for each button
  $('.btn-default').on('click', inputNumber);
  $('.btn-primary').on('click', inputOperator);


});
