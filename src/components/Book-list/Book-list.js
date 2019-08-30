import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withBookstoreService from '../Hoc/with-bookstore-service';
import { fetchBooks, bookAddedToCart } from '../../actions/action';
import compose from '../../utils/utils';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../Error-indicator/Error-indicator';
import BookListItem from '../Book-list-item/Book-list-item';

import './Book-list.scss';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className='book-list'>
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)} />
            </li>
          )
        })
      }
    </ul>
  );
}

class BookListContainer extends React.Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    if (BookList) {
      return <BookList books={books} onAddedToCart={onAddedToCart} />;
    }
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return {
    books: books,
    loading: loading,
    error: error
  };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart,
  }, dispatch);
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);