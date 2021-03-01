class Book {
  constructor(title, category, author, isRead = false, finishedDate) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }

  markBookAsRead() {
    this.isRead = !this.isRead;
    this.finishedDate = new Date();
  }
}

class BookList extends Book {
  constructor() {
    super(title, category, author, isRead, finishedDate);
    this.allBooks = [];
    this.currentIndex = 0;
  }

  add(arr = []) {
    this.allBooks = this.allBooks.concat(arr);
  }

  getCurrentBook(i) {
    return this.allBooks[this.currentIndex];
  }

  getNextBook(i) {
    return this.allBooks[this.currentIndex + 1];
  }

  getPrevBook(i) {
    return this.allBooks[this.currentIndex - 1];
  }

  changeCurrentBook(i) {
    return (this.changeCurrentBook = i);
  }
}

let book1 = new Book("abc", "suspense", "AAA", true, new Date());

console.log(book1);
