

type Book = {
    title:string;
    author:string;
    publishedYear:number;
};

const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

const isRecentBook = (obj:Book):boolean => {
    
    // get object publish year
    const objPublishedYear = obj.publishedYear;

    // get current year
    const today = new Date();
    const current_year = today.getFullYear();
     
    // get different
    const diffOfYear = current_year - objPublishedYear;

    if(diffOfYear <= 5){
        return true;
    }
    else{
        return false;
    }

}

const result1 = isRecentBook(book1);
// console.log(result1); // true
