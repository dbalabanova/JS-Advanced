function solve() {
  //debugger
  let username = document.getElementById("username");
  let loginBtn = document.getElementById("loginBtn");
  let createOffer = document.querySelector(".col-6");
  let textContainer = document.getElementById("notification");
  let offerName = document.getElementById("offerName");
  let companyName = document.getElementById("company");
  let description = document.getElementById("description");
  let createBtn = document.getElementById("create-offer-Btn");
  let offersContainer = document.getElementById("offers-container");
  if(loginBtn.textContent === "Login"){
    createOffer.style.display = "none";

  }

  loginBtn.addEventListener("click", loginIfCorrect);
  function loginIfCorrect(e) {
    //debugger
    e.preventDefault();

    if (loginBtn.textContent === "Logout") {
      createOffer.style.display = "none";
      loginBtn.textContent = "Login";
      username.value = "";
      username.setAttribute("class", "form-control mr-sm-2");
      username.setAttribute("type", "search");
      username.setAttribute("placeholder", "Username");
      username.setAttribute("aria-label", "Search");
      username.removeAttribute("disabled");
    } else if (loginBtn.textContent === "Login") {
      if (username.value.length > 4 && username.value.length < 10) {
        let name = username.value;
        createOffer.style.display = "block";
        username.value = `Hello, ${name}!`;
        loginBtn.textContent = "Logout";
        //username.className = "border-0 bg-light";
        username.setAttribute("class", "border-0 bg-light");
        username.setAttribute("disabled", "disabled");
      } else {
        textContainer.textContent =
          "The username length should be between 4 and 10 characters.";
      }
    }
  }

  createBtn.addEventListener("click", attachOffer);
  function attachOffer(e) {
    e.preventDefault();
    if (
      offerName.value != "" &&
      companyName.value != "" &&
      description.value != ""
    ) {
      let createDivCol = document.createElement("div");
      let createDivfirstChild = document.createElement("div");
      let createDivFirstCildOfFirstChild = document.createElement("div");
      let createDivSecondChild = document.createElement("div");
      let createHFirstChildOfSecondChild = document.createElement("h5");
      let createP = document.createElement("p");
      createDivCol.className = "col-3";
      createDivfirstChild.className = "card text-white bg-dark mb-3 pb-3";
      createDivfirstChild.setAttribute("style", "max-width: 18rem;");
      createDivFirstCildOfFirstChild.className = "card-header";
      createDivFirstCildOfFirstChild.textContent = offerName.value;
      createDivSecondChild.className = "card-body";
      createHFirstChildOfSecondChild.className = "card-title";
      createHFirstChildOfSecondChild.textContent = companyName.value;
      createP.className = "card-text";
      createP.textContent = description.value;

      createDivSecondChild.appendChild(createHFirstChildOfSecondChild);
      createDivSecondChild.appendChild(createP);
      createDivfirstChild.appendChild(createDivFirstCildOfFirstChild);
      createDivfirstChild.appendChild(createDivSecondChild);

      createDivCol.appendChild(createDivfirstChild);
      // createDivCol.appendChild(createDivSecondChild);
      // createDivCol.appendChild(createP);

      offersContainer.appendChild(createDivCol);

      offerName.value = "";
      companyName.value = "";
      description.value = "";
    }
  }
}
