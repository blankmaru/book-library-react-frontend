import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import BookItem from '../Books/BookItem';

const Romantic = props => {
    const [books, setBooks] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('http://localhost:8080/api/books/category/romantic')
            .then(res => res.json())
            .then(data => {
                setBooks(data.books.reverse());
                setIsFetching(false);
            });
    }, [])

    return (
        <>
            <div style={{width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            }}>
                <h2 style={{marginTop: '1rem'}}><strong>Category:</strong> Romantic</h2>
                {isFetching 
                ? <Spinner style={{marginTop: '1rem'}} animation="border" variant="secondary" /> 
                : null}
            </div>
            <div style={{marginTop: '1rem', display: 'flex'}}>
                {books.map(book => <BookItem book={book} />)}
            </div>
        </>
    );
};

export default Romantic;