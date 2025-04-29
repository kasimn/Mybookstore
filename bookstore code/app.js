
const books = [
  { title: "The Hobbit", language: "English", genre: "Fantasy", price: 8.27, author: "J. R. R. Tolkien", year: 1937 },
  { title: "To Kill a Mockingbird", language: "English", genre: "Fiction", price: 7.99, author: "Harper Lee", year: 1960 },
  { title: "Outliers: The Story of Success", language: "English", genre: "Non-Fiction", price: 13.49, author: "Malcolm Gladwell", year: 2008 },
  { title: "The Girl on the Train", language: "English", genre: "Crime", price: 9.99, author: "Paula Hawkins", year: 2015 },
  { title: "The Infatuations", language: "Spanish", genre: "Fiction", price: 11.25, author: "Javier Marías", year: 2011 },
  { title: "The Shadow of the Wind", language: "Spanish", genre: "Fantasy", price: 12.99, author: "Carlos Ruiz Zafón", year: 2001 },
  { title: "The Invisible Guardian", language: "Spanish", genre: "Crime", price: 9.99, author: "Dolores Redondo", year: 2013 },
  { title: "Learning to Lose", language: "Spanish", genre: "Non-Fiction", price: 9.95, author: "David Trueba", year: 2008 }
];
  function showBooks(filteredBooks) {
    const bookResults = document.getElementById("bookResults");
    bookResults.innerHTML = "";

    if (filteredBooks.length === 0) {
      bookResults.innerHTML = "No books found.";
    } else {
      filteredBooks.forEach(book => {
        bookResults.innerHTML += `
          <strong>${book.title}</strong> by ${book.author} - 
          <em>${book.genre}</em> (£${book.price.toFixed(2)})<br>
        `;
      });
    }
  }

  function filterBooks() {
    const genre = document.getElementById("genreSelect").value;
    const priceInput = parseFloat(document.getElementById("priceInput").value);
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
  
    const results = books.filter(book => {
      const genreMatch = genre === "All" || book.genre === genre;
      const priceMatch = isNaN(priceInput) || book.price <= priceInput;
  
      const textMatch = searchInput === "" || (
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.year.toString().includes(searchInput)
      );
  
      return genreMatch && priceMatch && textMatch;
    });
  
    showBooks(results);
  }
  
  filterBooks();
  document.getElementById("genreSelect").addEventListener("change", filterBooks);
  document.getElementById("priceInput").addEventListener("input", filterBooks);
  document.getElementById("searchInput").addEventListener("input", filterBooks);

