

let books = [

    {
        title: 'Great Expectation',
        author: 'Charles Dickens',
        price: 10.99,
        cover: 'https://s-media-cache-ak0.pinimg.com/736x/b4/a4/ba/b4a4ba4763eacabf2133c52dca3487e5.jpg',
    },

    {
        title: 'Old Yeller',
        author: 'Fred Gipson',
        price: 8.99,
        cover: 'https://covers.openlibrary.org/b/id/6907728-M.jpg',
    },

     {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 7.99,
        cover: 'https://d35fkdjhhgt99.cloudfront.net/static/use-media-items/12/11893/full-1400x2136/56702545/The-Great-Gatsby.jpeg?resolution=0',
    },

     {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
        price: 12.99,
        cover: 'http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_old_2.jpg',
    },

     {
        title: 'The Lord of the Rings',
        author: 'J.R.R Tolkien',
        price: 15.99,
        cover: 'http://cdn.collider.com/wp-content/uploads/2016/07/the-lord-of-the-rings-book-cover.jpg',
    },

     {
        title: 'The Shining',
        author: 'Stephen King',
        price: 8.99,
        cover: 'https://images-na.ssl-images-amazon.com/images/I/81ipXKw8rjL.jpg',
    },
]


function generateBook(input) {

    let parent = document.querySelector('main ul');

    let section = document.createElement('li');

    //cover image
    let coverimage = document.createElement('img');
    coverimage.src = input.cover;
    
    //h2 section which displays book tite
    let sectionheader = document.createElement('h2');
    sectionheader.textContent = input.title;
    
    //first ptag that generages author name
    let text1 = document.createElement('p');
    text1.textContent = input.author;
   
   //second ptag that generate the price
    let text2 = document.createElement('p');
    text2.textContent = '$' + input.price;

    //BUY button
    let bttn1 = document.createElement('button');
    bttn1.textContent = 'Buy';

    //BORROW button
    let bttn2 = document.createElement('button');
    bttn2.textContent = 'Borrow';

    //Generating all the html.
    parent.appendChild(section);
    section.appendChild(coverimage);
    section.appendChild(sectionheader);
    section.appendChild(text1);
    section.appendChild(text2);
    section.appendChild(bttn1);
    section.appendChild(bttn2)

};


function getAllBooks() {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://tiy-28202.herokuapp.com/books');
        request.addEventListener('load', function(){
        let response = JSON.parse(request.responseText);
                    console.log(response);

        for (let i = 0; i < response.books.length; i++) {
            let input = {
                title: response.books[i].title,
                author: response.books[i].author,
                price: response.books[i].price,
                cover: response.books[i].cover,
            }
        generateBook(input);  
        }; 
    });   
  request.send();
}


//define AJAX 'GET request as a function then...
window.addEventListener('load', function() {

    getAllBooks();

    let addbtn = document.querySelector('#add-btn');
    addbtn.addEventListener('click', function() {
    let name = document.querySelector('#name');
    let author = document.querySelector('#author');

    // .value property on <input> elements gives us
    // th evalue the user entered

    console.log(name.value);

    let request = new XMLHttpRequest();
    request.open('POST', 'https://tiy-28202.herokuapp.com/books');
    request.addEventListener('load', function () {
        console.log('received response');
    });
    
    request.send(JSON.stringify({
        title: name.value,
        author: author.value,   
      }));
    });
});














