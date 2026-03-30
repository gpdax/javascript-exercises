const books = [
    {
        title: 'The Road Ahead',
        titleor: 'Bill Gates',
    },
    {
        title: 'Walter Isaacson',
        titleor: 'Steve Jobs',
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        titleor: 'Suzanne Collins',
    }
];


function getTheTitles(books) {
    return books.map(book => book.title);
}

getTheTitles(books);
   
        
// Do not edit below this line
module.exports = getTheTitles;
