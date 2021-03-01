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

  getCurrentBook() {
    return this.allBooks[this.currentIndex];
  }

  getNextBook() {
    this.currentIndex = this.currentIndex + 1;
    return (
      this.allBooks[this.currentIndex] ||
      this.allBooks[this.allBooks.length - 1]
    );
  }

  getPrevBook() {
    this.currentIndex = this.currentIndex - 1;
    return this.allBooks[this.currentIndex] || this.allBooks[0];
  }

  changeCurrentBook(i) {
    this.currentIndex = i;
    return this.currentIndex;
  }
}

let book1 = new Book("abc", "horror", "AAA", true, new Date());
let book1 = new Book("def", "detective", "BBB", false, new Date());
let book1 = new Book("ghi", "fantasy", "CCC", false, new Date());
let book1 = new Book("jkl", "classic", "DDD", true, new Date());
let book1 = new Book("mno", "comedy", "EEE", true, new Date());

console.log(book1);
