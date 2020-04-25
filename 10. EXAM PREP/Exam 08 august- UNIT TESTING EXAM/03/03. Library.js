class Library {
  constructor(libraryName) {
    this.libraryName = libraryName;
    this.subscribers = [];
    this.subscriptionTypes = {
      normal: Number(this.libraryName.length),
      special: Number(this.libraryName.length * 2),
      vip: Number.MAX_SAFE_INTEGER
    };
  }

  subscribe(name, type) {
    if (!this.subscriptionTypes.hasOwnProperty(type)) {
      throw new Error(`The type ${type} is invalid`);
    }
    let subscriber = this.subscribers.find(s => s.name === name);

    if (subscriber) {
      subscriber.type = type;
    }
    if (!subscriber) {
      subscriber = {
        name: name,
        type: type,
        books: []
      };
      this.subscribers.push(subscriber);
    }
    return subscriber;
  }

  unsubscribe(name) {
    let subscriberIndex = this.subscribers.findIndex(s => s.name === name);
    if (subscriberIndex===-1) {
      throw new Error(`There is no such subscriber as ${name}`);
    }
   this.subscribers.splice(subscriberIndex,1)
    //this.subscribers = this.subscribers.filter(s => s.name !== name);
    return this.subscribers;
  }

  receiveBook(subscriberName, bookTitle, bookAuthor) {
    let subscriber = this.subscribers.find(s => s.name === subscriberName);
    if (!subscriber) {
      throw new Error(`There is no such subscriber as ${subscriberName}`);
    }
    if (subscriber.books.length >= this.subscriptionTypes[subscriber.type]) {
      throw new Error(
        `You have reached your subscription limit ${
            this.subscriptionTypes[subscriber.type]
        }!`
      );
    }

    let book = {
      title: bookTitle,
      author: bookAuthor
    };

    subscriber.books.push(book);

    return subscriber;
  }

  // showInfo (){
  //     if (this.subscribers.length===0){
  //         return(`${this.libraryName} has no information about any subscribers`)
  //     }
  //     let output='';
  //         for (let person of this.subscribers) {
  //         let subsBooks=[]

  //             output+=`Subscriber: ${person.name}, Type: ${person.type}\n`
  //             for (let book of person.books) {
  //                 subsBooks.push(`${book.title} by ${book.author}`)
  //             }
  //             output+=` Received books: ${subsBooks.join(', ')}\n`;

  //         }
  //         output.trim()
  //         return output

  // }

  showInfo() {
    if (this.subscribers.length === 0) {
      return `${this.libraryName} has no information about any subscribers`;
    }

    let result = "";

    for (const subscriber of this.subscribers) {
      result += `Subscriber: ${subscriber.name}, Type: ${subscriber.type}\n`;

      let subscriberBooks = [];
      for (const book of subscriber.books) {
        subscriberBooks.push(`${book.title} by ${book.author}`);
      }

      result += `Received books: ${subscriberBooks.join(", ")}\n`;
    }

    result.trim();

    return result;
  }
}
