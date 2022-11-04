import './App.css';

const book= document.querySelector("#book-name");
const author= document.querySelector("#author-name");
const year= document.querySelector("#publish-date");
const submit= document.querySelector(".btn");
const list= document.querySelector("#book-list");

/*

*/

submit.addEventListener('click', function(e) {
    e.preventDefault(); 

    if (book.value == '' && author.value =='' && year.value ==''){
        alert("Please fill all the fields necessary");
    }
    else if (book.value ==''){
        alert("Please fill Book Name");
    }
    else if (author.value ==''){
        alert("Please fill Author Name");
    }
    else if (year.value ==''){
        alert("Please fill Published Year");
    }
    else{
        const newRow = document.createElement('tr');
        list.appendChild(newRow);

        const newBookColumn = document.createElement('th');
        newRow.appendChild(newBookColumn);
        newBookColumn.innerText = book.value;

        const newAuthorColumn = document.createElement('th');
        newRow.appendChild(newAuthorColumn);
        newAuthorColumn.innerText = Author.value;

        const newYearColumn = document.createElement('th');
        newRow.appendChild(newYearColumn);
        newYearColumn.innerText = year.value;
    }
})

export default App;
