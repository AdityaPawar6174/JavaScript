// Book Class title author year numOfCopies
// getDetails() borrrow() returnBook()

class Book {
    constructor(title, author, year, numOfCopies) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.numOfCopies = numOfCopies;
    }
    
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}.`;
    }

    borrow() {
        if (this.numOfCopies > 0) {
            this.numOfCopies--;
            return `You have borrowed "${this.title}".`;
        } else {
            return `Sorry, "${this.title}" is NOT available.`;
        }
    }

    returnBook() {
        this.numOfCopies++;
        return `You have returned "${this.title}".`;
    }
}

export default Book;
