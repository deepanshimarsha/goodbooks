import { useState } from "react";
import "./styles.css";

var books = {
  Javascript: { "Eloquent JavaScript": "4/5", "You Don't Know JS": "3.5/5" },

  Fiction: {
    "Shiva Trilogy": "5/5",
    "Harry Potter and the Sorcerer's Stone": "4.5/5"
  },

  Buisness: { "Never Split the Difference": "3.5/5", loonshots: "5/5" }
};

var genre = Object.keys(books);

export default function App() {
  const [bookList, setbookList] = useState(giveBookList("Javascript"));

  function giveBookList(item) {
    var objBooks = books[item];
    console.log(objBooks);
    return objBooks;
  }

  function clickHandler(item) {
    var newBookList = giveBookList(item);
    setbookList(newBookList);
  }

  function convertToArray(dict) {
    return Object.keys(dict);
  }

  return (
    <main>
      <div className="App">
        <h1> 📚 goodbooks </h1>
        <p>Checkout my favorite books.Select a genre to get started</p>
        <div style={{ textAlign: "left" }}>
          <button onClick={() => clickHandler("Javascript")}>Javascript</button>
          <button onClick={() => clickHandler("Fiction")}>Fiction</button>
          <button onClick={() => clickHandler("Buisness")}>Buisness</button>
        </div>
        <hr />
        {convertToArray(bookList).map(function (item) {
          return (
            <ul key={item}>
              <div
                style={{
                  border: "1px solid rgb(209, 213, 219)",
                  padding: "1rem 1rem",
                  borderRadius: "0.5rem",
                  textAlign: "left",
                  outerWidth: "50%"
                }}
              >
                <li>
                  <div>{item}</div>
                  <div>{bookList[item]}</div>
                </li>
              </div>
            </ul>
          );
        })}
      </div>
    </main>
  );
}
