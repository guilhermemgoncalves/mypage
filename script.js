let orquestradorEventos = document.addEventListener("click", (e) => {
  console.log("Click event");

  console.log(e.target);

  //quando clicar da div toolcard ou clicar na imagem do toolcard, ou clicar no titulo do toolcard a div deverá se abrir com as demais informações

  if (
    e.target === document.querySelectorAll(".tool-card")[2] ||
    e.target === document.querySelectorAll(".tool-title")[2] ||
    e.target === document.querySelectorAll(".tool-img")[2]
  ) {
    expandCardDb();
  } else if (
    e.target === document.querySelectorAll(".tool-card")[1] ||
    e.target === document.querySelectorAll(".tool-title")[1] ||
    e.target === document.querySelectorAll(".tool-img")[1]
  ) {
    expandCardBe();
  } else if (
    e.target === document.querySelectorAll(".tool-card")[0] ||
    e.target === document.querySelectorAll(".tool-title")[0] ||
    e.target === document.querySelectorAll(".tool-img")[0]
  ) {
    expandCardFe();
  }
});

function expandCardDb() {
  if (document.querySelector("#dbList").hasAttribute("hidden")) {
    document.querySelector("#dbList").removeAttribute("hidden");
    document.getElementById("database-tools").style.transition = "height 0.2s ease 0s";
    document.getElementById("database-tools").style.height = "300px";
  } else {
    document.querySelector("#dbList").setAttribute("hidden", true);
    document.getElementById("database-tools").style.height = "200px";
  }
}

function expandCardBe() {
  if (document.querySelector("#BackEnd-list").hasAttribute("hidden")) {
    document.getElementById("backend-tools").style.height = "350px";
    document.getElementById("backend-tools").style.transition = "height 0.2s ease 0s";
    document.querySelector("#BackEnd-list").removeAttribute("hidden");


  } else {
    document.querySelector("#BackEnd-list").setAttribute("hidden", true);
    document.getElementById("backend-tools").style.height = "200px";
  }
}

function expandCardFe() {
  if (document.querySelector("#FrontEnd-List").hasAttribute("hidden")) {    
    document.getElementById("frontend-tools").style.height = "400px";
    document.getElementById("frontend-tools").style.transition = "height 0.2s ease 0s";
    
    document.querySelector("#FrontEnd-List").removeAttribute("hidden");
   

  } else {
    document.querySelector("#FrontEnd-List").setAttribute("hidden", true);
    document.getElementById("frontend-tools").style.height = "200px";
  }
}
