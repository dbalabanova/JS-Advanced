// NOTE: The comment sections inside the index.html file is an example of how suppose to
//be structured the current elements.
//       - You can use them as an example when you create those elements, to check
//how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this
//comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!

// This function will be invoked when the html is loaded. Check the console in the
// browser or index.html file.

function mySolution() {
  let text = document.querySelector("#inputSection > textarea");
  let username = document.querySelector(
    '#inputSection > div > input[type="username"]'
  );
  let sendButton = document.querySelector("#inputSection > div > button");
  console.log(sendButton);

  sendButton.addEventListener("click", addToPending);

  function addToPending() {
    let pendingQuestions = document.getElementById("pendingQuestions");

    let createDivElement = document.createElement("div");
    createDivElement.className = "pendingQuestion";

    let createImg = document.createElement("img");
    createImg.setAttribute("src", "./images/user.png");
    createImg.setAttribute("width", "32");
    createImg.setAttribute("height", "32");
    createDivElement.appendChild(createImg);

    let createSpan = document.createElement("span");
    if (username.value === "") {
      createSpan.innerHTML = "Anonymous";
    } else {
      createSpan.innerHTML = username.value;
    }
    createDivElement.appendChild(createSpan);

    let createP = document.createElement("p");
    createP.innerHTML = text.value;
    createDivElement.appendChild(createP);

    let createButtonsDiv = document.createElement("div");
    createButtonsDiv.className = "actions";

    let creatButtonArchive = document.createElement("button");
    creatButtonArchive.className = "archive";
    creatButtonArchive.textContent = "Archive";
    createButtonsDiv.appendChild(creatButtonArchive);

    let creatButtonOpen = document.createElement("button");
    creatButtonOpen.className = "open";
    creatButtonOpen.textContent = "Open";
    createButtonsDiv.appendChild(creatButtonOpen);
    createDivElement.appendChild(createButtonsDiv);

    pendingQuestions.appendChild(createDivElement);
    console.log(Array.from(pendingQuestions.childNodes))
    text.value='';
    username.value='';

    creatButtonArchive.addEventListener("click", removeQuestion);

    function removeQuestion() {
      //console.log(createDivElement);
      document.getElementById("pendingQuestions").removeChild(createDivElement);
      //createDivElement.remove();
    }

    creatButtonOpen.addEventListener("click", moveToOpenQuestions);

    function moveToOpenQuestions() {
      //console.log(e.target);
      let openQuestions = document.getElementById("openQuestions");
      document.getElementById("pendingQuestions").removeChild(createDivElement);


      let createDivOpen = document.createElement("div");
      createDivOpen.className = "openQuestion";

      let createImgOpen = document.createElement("img");
      createImgOpen.setAttribute("src", "./images/user.png");
      createImgOpen.setAttribute("width", "32");
      createImgOpen.setAttribute("height", "32");
      createDivOpen.appendChild(createImgOpen);

      let createSpanOpen = document.createElement("span");
      createSpanOpen.innerHTML = createSpan.innerHTML;
      //   if (username.value === "") {
      //     createSpanOpen.innerHTML = "Anonymous";
      //   } else {
      //     createSpanOpen.innerHTML = username.value;
      //   }
      createDivOpen.appendChild(createSpanOpen);

      let createPOpen = document.createElement("p");
      createPOpen.innerHTML = createP.innerHTML;
      //createPOpen.innerHTML= text.value;
      createDivOpen.appendChild(createPOpen);

      let createDivOpenButton = document.createElement("div");
      createDivOpenButton.className = "actions";

      let createReplyButton = document.createElement("button");
      createReplyButton.className = "reply";
      createReplyButton.textContent = "Reply";
      createDivOpenButton.appendChild(createReplyButton);
      createDivOpen.appendChild(createDivOpenButton);

      let createReplySection = document.createElement("div");
      createReplySection.className = "replySection";
      createReplySection.style.display = "none";

      let createInputElement = document.createElement("input");
      createInputElement.className = "replyInput";
      createInputElement.setAttribute("type", "text");
      createInputElement.setAttribute(
        "placeholder",
        "Reply to this question here..."
      );
      createReplySection.appendChild(createInputElement);

      let createSendButtonOpen = document.createElement("button");
      createSendButtonOpen.className = "replyButton";
      createSendButtonOpen.textContent = "Send";
      createReplySection.appendChild(createSendButtonOpen);

      let createList = document.createElement("ol");
      createList.className = "reply";
      createList.setAttribute("type", "1");
      createReplySection.appendChild(createList);

      createDivOpen.appendChild(createReplySection)
      openQuestions.appendChild(createDivOpen);
      //openQuestions.appendChild(createReplySection);

      createReplyButton.addEventListener("click", showTheReplyInput);

      function showTheReplyInput() {
        if (createReplySection.style.display === "none") {
          createReplySection.style.display = "block";
          createReplyButton.textContent = "Back";
        } else {
          createReplySection.style.display = "none";
          createReplyButton.textContent = "Reply";
        }

        createSendButtonOpen.addEventListener('click', createOrdertList);
        function createOrdertList (){
            let createLi = document.createElement('li');
            createLi.innerHTML=createInputElement.value;
            createList.appendChild(createLi);
            createInputElement.value=''
            
        }
      }
    }
  }
}
