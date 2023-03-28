
var a = 1;
var add = function(liitmine) {
    a += liitmine;
    document.getElementById("value").innerHTML = a;
}

var min = function(lahutamine) {
    a -= lahutamine;
    document.getElementById("value").innerHTML = a;
}

var reset = function(reset) {
    a = 0;
    document.getElementById("value").innerHTML = a;
}


  
$(document).ready(function() {

    

    $("#addCard").click(function() {
      var cardtitle = $('#titel').val();
      var cardtext = $('#content').val();
      let cards = '<div class="card" style="width: auto;">' +
        '<div class="card-body"><img style="height: 200px" src="./pilt11.jpg" class="card-img-top" alt="...">' +
        '<h5 class="card-title">'+cardtitle+'</h5>' +
        '<p class="card-text">'+cardtext+'</p>' +
        '</div>' +
        '</div>';
        
  
      $(".newcards").append(cards);

      
      
      
      
    });
  
  });
  