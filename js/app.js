/** @jsx React.DOM */
(function () {
    'use strict';
    var Quiz = React.createClass({
        render: function() {
            return <div>test {this.props.data}</div>;
        }
    });
    var Book = React.createClass({
        render: function() {
            return <div>{this.props.title}</div>;
        }
    });
    var Library = React.createClass({
        propTypes: {
            books: React.PropTypes.array
        },
        render: function() {
            return <div>{this.props.books.map(function(book) {
                return <Book title={book} />;
            })}</div>;
        }
    });
    var books = [
        'Lord of rings',
        'Harry Potter',
        '300 Spartans'
    ];
    React.render(<Library books={books} />, document.getElementById('app'));
})();
