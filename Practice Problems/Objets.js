
let Books = {
    title: "Book One",
    author: "xyz",
    getDetails(){
        console.log(`title: ${this.title} author: ${this.author}`);
        
    }
}

Books.getDetails()


// --------------------

let Laptop = {
    brand: "Acer",
    model: "Aspire 5",
    specification: {
        RAM: "8 GB",
        Processor: "i5 12-Gen",
        Storage: "512GB SSD"
    }
}

console.log(Laptop);