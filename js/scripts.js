$(document).ready(function() {
  // document.getElementById("slothPic").addEventListener('click',function(evt) {
  // var slothTemp = evt.slothPic;
  // if (slothPic === 'yes') {
  //   $("#slothInfo").show();
  // };


  $("#slothPic").click(function(){
    $("#slothInfo").show();
    $("#dogInfo").hide();
    $("#snakeInfo").hide();
  });

  $("#dogPic").click(function(){
    $("#slothInfo").hide();
    $("#dogInfo").show();
    $("#snakeInfo").hide();
  });

  $("#snakePic").click(function(){
    $("#slothInfo").hide();
    $("#dogInfo").hide();
    $("#snakeInfo").show();
  });
});
