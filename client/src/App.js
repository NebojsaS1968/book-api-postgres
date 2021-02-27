import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home.jsx";
import UpdateBook from "./routes/UpdateBook.jsx";
import BookDetails from "./routes/BookDetails.jsx";
import AllBooks from "./routes/AllBooks.jsx";
import { BooksContextProvider } from "./context/BooksContext.js";

function App() {
  return (
    <BooksContextProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/:id" component={BookDetails} />
            <Route exact path="/books/:id/update" component={UpdateBook} />
            <Route exact path="/books" component={AllBooks} />
          </Switch>
        </Router>
      </div>
    </BooksContextProvider>
  );
}

export default App;
