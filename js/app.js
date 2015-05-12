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
            data: React.PropTypes.array
        },
        render: function() {
            return <div>{this.props.data.map(function(current) {
                return <div><Book title={current.books[0]} /><Author author={current.author} /></div>;
            })}</div>;
        }
    });
    var Author = React.createClass({
        render: function() {
            return <h1>{this.props.author}</h1>;
        }
    });
    var data = [
        {
            author: 'Shakespeare',
            books: ['Romeo and Juliet', 'Julius Ceaser']
        },
        {
            author: 'J K Rowling',
            books: ['Harry Potter']
        },
        {
            author: 'Chetan Bhagat',
            books: ['Five point someone', 'Three mistakes of my life', '2 states']
        }
    ];
    React.render(<Library data={data} />, document.getElementById('app'));
})();
