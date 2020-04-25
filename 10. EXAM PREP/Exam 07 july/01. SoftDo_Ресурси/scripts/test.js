function mySolution() {
    let button = document.querySelector("#inputSection button");
    button.addEventListener("click", addQuestion);
   
    function addQuestion() {
      let textArea = document.querySelector("#inputSection textarea").value;
      //check if the thextarea is filled
      if (textArea) {
        //get the username value
        let username = document.querySelector("#inputSection input").value;
        if (!username) {
          username = "Anonymous";
        }
        createPendingQuestion(textArea, username);
      }
      function createPendingQuestion(textArea, username) {
        //create the wrapper
        let wrapper = document.createElement("div");
        wrapper.setAttribute("class", "pendingQuestion");
   
        //create the first child element - image
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", "./images/user.png");
        imageElement.setAttribute("width", "32");
        imageElement.setAttribute("height", "32");
   
        //create the second child element - span
        let spanElement = document.createElement("span");
        spanElement.textContent = username;
   
        //create the third child element - paragraph
        let pElement = document.createElement("p");
        pElement.textContent = textArea;
   
        //create the fourth child element - div which contains archive and open buttons
        let actionsDivElement = document.createElement("div");
        actionsDivElement.setAttribute("class", "actions");
   
        //create the archive button
        let archiveButtonElement = document.createElement("button");
        archiveButtonElement.setAttribute("class", "archive");
        archiveButtonElement.textContent = "Archive";
        archiveButtonElement.addEventListener("click", function() {
          document.getElementById("pendingQuestions").removeChild(wrapper);
        });
        //create the open button
        let openButtonElement = document.createElement("button");
        openButtonElement.setAttribute("class", "open");
        openButtonElement.textContent = "Open";
        openButtonElement.addEventListener("click", function() {
          createOpenQuestion(textArea, username);
          document.getElementById("pendingQuestions").removeChild(wrapper);
        });
   
        //append the action buttons to the action div
        actionsDivElement.appendChild(archiveButtonElement);
        actionsDivElement.appendChild(openButtonElement);
   
        //append all children to the wrapper element
        wrapper.appendChild(imageElement);
        wrapper.appendChild(spanElement);
        wrapper.appendChild(pElement);
        wrapper.appendChild(actionsDivElement);
   
        //append the wrapper to the pending questions section
        document.getElementById("pendingQuestions").appendChild(wrapper);
      }
      function createOpenQuestion(textArea, username) {
        //create the open question wrapper element
        let wrapper = document.createElement("div");
        wrapper.setAttribute("class", "openQuestion");
   
        //create the first child element - image
        let imageElement = document.createElement("img");
        imageElement.setAttribute("src", "./images/user.png");
        imageElement.setAttribute("width", "32");
        imageElement.setAttribute("height", "32");
   
        //create the second child element - span
        let spanElement = document.createElement("span");
        spanElement.textContent = username;
   
        //create the third child element - paragraph
        let pElement = document.createElement("p");
        pElement.textContent = textArea;
   
        //create the fourth child element - div which contains archive and open buttons
        let actionsDivElement = document.createElement("div");
        actionsDivElement.setAttribute("class", "actions");
   
        //create the reply button element
        let replyButtonElement = document.createElement("button");
        replyButtonElement.setAttribute("class", "reply");
        replyButtonElement.textContent = "Reply";
        replyButtonElement.addEventListener("click", function() {
          if (replySectionElement.getAttribute("style") === "display: none;") {
            replySectionElement.setAttribute("style", "display: block;");
            replyButtonElement.textContent = "Back";
          } else {
            replySectionElement.setAttribute("style", "display: none;");
            replyButtonElement.textContent = "Reply";
          }
        });
        //append the reply button to the actions div
        actionsDivElement.appendChild(replyButtonElement);
   
        //create the reply section element
        let replySectionElement = document.createElement("div");
        replySectionElement.setAttribute("class", "replySection");
        replySectionElement.setAttribute("style", "display: none;");
        //create the reply input field element
        let replyInputElement = document.createElement("input");
        replyInputElement.setAttribute("class", "replyInput");
        replyInputElement.setAttribute("type", "text");
        replyInputElement.setAttribute(
          "placeholder",
          "Reply to this question here..."
        );
        //create the reply button
        let sendButtonElement = document.createElement("button");
        sendButtonElement.setAttribute("class", "replyButton");
        sendButtonElement.textContent = "Send";
        sendButtonElement.addEventListener("click", function() {
          if (replyInputElement.value) {
            //create the li element for currentAnswer
            let liElement=document.createElement('li');
            liElement.textContent=replyInputElement.value;
            olElement.appendChild(liElement);
            replyInputElement.value='';
          }
        });
        //create the ordered list element for the reply section
        let olElement = document.createElement("ol");
        olElement.setAttribute("class", "reply");
        olElement.setAttribute("type", 1);
   
        //append all section elements to the reply section
        replySectionElement.appendChild(replyInputElement);
        replySectionElement.appendChild(sendButtonElement);
        replySectionElement.appendChild(olElement);
   
        //append all elements to the wrapper
        wrapper.appendChild(imageElement);
        wrapper.appendChild(spanElement);
        wrapper.appendChild(pElement);
        wrapper.appendChild(actionsDivElement);
        wrapper.appendChild(replySectionElement);
   
        document.getElementById("openQuestions").appendChild(wrapper);
      }
    }
  }