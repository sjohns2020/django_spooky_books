import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BooksContainer from './containers/BooksContainer';
import BookDetail from './components/BookDetail';
import AddBookForm from './components/AddBookForm';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<BooksContainer />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
