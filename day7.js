// objects

const Book = {
    Title: "As a Man Thinketh",
    Author: "James Allen",
    YearofRealease: 1903,
    output: function (Title, Author) {
        return Title + " By " + Author;
    },
    UpdateYear: function (newYear) {
        this.YearofRealease = newYear; //This is one of the usecase of this keyword
        return this.YearofRealease;
    }
};

console.log(Book);

console.log(Book.Title);

console.log(Book.Author);

console.log(Book.output(Book.Title, Book.Author));

console.log(Book.UpdateYear(1904));
console.log(Book.YearofRealease);




const Library = {
    b1 : {
        Title: "Zero to One",
        Author: "Peter Thiel",
        YearofRealease: 2014,
    },
    b2 : {
        Title: "Rich Dad, Poor Dad",
        Author: "Robert kiyosaki",
        YearofRealease: 1997,
    },
    b3 : {
        Title: "How to Become a RainMaker",
        Author: "Jeffery J Fox",
        YearofRealease: 2000,
    },
}

console.log(Library);

const LibraryArray = Object.values(Library);
console.log(LibraryArray);

const Titles = LibraryArray.map((item) => {
    return item.Title;
});
console.log(Titles);