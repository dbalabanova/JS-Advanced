class Forum {
  constructor() {
    this._users = [];
    this._questions = [];
    this._id = 1;
    this.loginUsers = [];
    // this.answers=[];
  }
  register(username, password, repeatPassword, email) {
    let currUser = this._users.find(s => s.username === username);
    let currEmail = this._users.find(s => s.email === email);
    if (
      username === "" ||
      password === "" ||
      repeatPassword === "" ||
      email === ""
    ) {
      throw new Error("Input can not be empty");
    }
    if (password !== repeatPassword) {
      throw new Error("Passwords do not match");
    }
    if (currUser || currEmail) {
      throw new Error("This user already exists!");
    }
    this._users.push({
      username,
      password,
      email
    });
    return `${username} with ${email} was registered successfully!`;
  }

  login(username, password) {
    let currUser = this._users.find(s => s.username === username);
    if (!currUser) {
      throw new Error("There is no such user");
    }
    if (currUser) {
      if (currUser.password === password) {
        this.loginUsers.push(username);
        return `Hello! You have logged in successfully`;
      }
    }
  }

  logout(username, password) {
    let currUser = this._users.find(s => s.username === username);
    if (!currUser) {
      throw new Error(`There is no such user`);
    }
    if (currUser && currUser.password === password) {
      let index = this.loginUsers.indexOf(username);
      this.loginUsers.splice(index, 1);
      return "You have logged out successfully";
    }
  }

  postQuestion(username, question) {
    let currUser = this._users.find(s => s.username === username);
    if (!currUser || !this.loginUsers.includes(username)) {
      throw new Error("You should be logged in to post questions");
    }
    if (question === "") {
      throw new Error("Invalid question");
    }

    this._questions.push({
      username,
      question,
      id: this._id
    });
    this._id++;
    return "Your question has been posted successfully";
  }
  postAnswer(username, questionId, answer) {
    let currUser = this._users.find(s => s.username === username);
    let currquestId = this._questions.find(s => s.id === questionId);

    if (!currUser || !this.loginUsers.includes(username)) {
      throw new Error("You should be logged in to post answers");
    }
    if (answer === "") {
      throw new Error("Invalid answer");
    }
    if (!currquestId) {
      throw new Error("There is no such question");
    }
    if (currquestId) {
      if (!currquestId.answer) {
        currquestId.answer = [];
      }
      currquestId.answer.push({
        username,
        answer
      });
    }
    // return this._questions
    return "Your answer has been posted successfully";
  }

  showQuestions() {
    let output = "";
    for (let curr of this._questions) {
      let infoQuest = Object.values(curr);
      let [questionBy, theQuestion, theId, answerObj] = infoQuest;
      output += `Question ${theId} by ${questionBy}: ${theQuestion}\n`;
      if (answerObj) {
        let infoAnswer = Object.values(answerObj);
        for (let e of infoAnswer) {
          let l = Object.values(e);
          let [name, answ] = l;
          output += `---${name}: ${answ}\n`;
        }
      }
    }
    return output;
  }
}
let forum = new Forum();

forum.register("Michael", "123", "123", "michael@abv.bg");
forum.register("Stoyan", "123ab7", "123ab7", "some@gmail@.com");
forum.login("Michael", "123");
forum.login("Stoyan", "123ab7");

forum.postQuestion("Michael", "Can I rent a snowboard from your shop?");
forum.postAnswer("Stoyan", 1, "Yes, I have rented one last year.");
forum.postQuestion(
  "Stoyan",
  "How long are supposed to be the ski for my daughter?"
);
forum.postAnswer("Michael", 2, "How old is she?");
forum.postAnswer("Michael", 2, "Tell us how tall she is.");

console.log(forum.showQuestions());

// forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
// forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
// forum.login('Jonny', '12345');
// forum.login('Peter', '123ab7');

// forum.postQuestion('Jonny', "Do I need glasses for skiing?");
// forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
// forum.postAnswer('Jonny',1, "What was your budget");
// forum.postAnswer('Peter',1, "$50");
// (forum.postAnswer('Jonny',1, "Thank you :)"))

// console.log(forum.showQuestions());
