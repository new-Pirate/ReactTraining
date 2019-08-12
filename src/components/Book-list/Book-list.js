import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withBookstoreService from '../Hoc/with-bookstore-service';
import BookListItem from '../Book-list-item/Book-list-item';
import { booksLoaded } from '../../actions/action';
import compose from '../../utils/utils';

import './Book-list.scss';

class BookList extends React.Component {

  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} /></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);