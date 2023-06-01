let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}




 // Função para exibir o overlay de pesquisa
 function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

// Função para ocultar o overlay de pesquisa
function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

// Função para realizar a pesquisa
function searchElements() {
  var searchValue = document.getElementById("searchInput").value.toLowerCase();
  var gameElements = document.getElementsByClassName("game");

  for (var i = 0; i < gameElements.length; i++) {
    var titleElement = gameElements[i].getElementsByClassName("title")[0];
    var title = titleElement.innerText.toLowerCase();

    if (title.includes(searchValue)) {
      gameElements[i].style.display = "block";
    } else {
      gameElements[i].style.display = "none";
    }
  }
  hideOverlay();
}


// Adicionar manipuladores de eventos aos botões
document.getElementById("searchBtn").addEventListener("click", showOverlay);
document.getElementById("searchSubmit").addEventListener("click", searchElements);






 // Função para exibir o overlay de adicionar jogo
 function showOverlay() {
  document.getElementById("overlayAdd").style.display = "block";
}

// Função para ocultar o overlay de pesquisa
function hideOverlay() {
  document.getElementById("overlayAdd").style.display = "none";
}

function SaveGame(){
  hideOverlay()
}

// Adicionar manipuladores de eventos aos botões
document.getElementById("AddBtn").addEventListener("click", showOverlay);
document.getElementById("GameSubmit").addEventListener("click", SaveGame);