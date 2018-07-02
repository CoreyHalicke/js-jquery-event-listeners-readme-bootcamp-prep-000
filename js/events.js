//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!')
    return 
});
}

function frameIt() {
  $('img').on('load', function(){
    frame = document.getElementById("img")
    frame.classList.add
});
}

$(document).ready(function(){

// call functions here
  getIt()
  frameIt()
});