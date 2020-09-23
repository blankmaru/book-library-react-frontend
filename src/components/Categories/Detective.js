import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';

import BookItem from '../Books/BookItem';

const Detective = props => {
    const [books, setBooks] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        setIsFetching(true);
        fetch('http://localhost:8080/api/books/category/detective')
            .then(res => res.json())
            .then(data => {
                if (data.books[0] === null) {
                    return;
                }
                setBooks(data.books.reverse());
                setIsEmpty(false);
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
                <h2 style={{marginTop: '1rem'}}><strong>Category:</strong> Detective</h2>
                {isFetching 
                ? <Spinner style={{marginTop: '1rem'}} animation="border" variant="secondary" /> 
                : null}
            </div>
            <div style={{marginTop: '1rem', display: 'flex'}}>
                {isEmpty ? null : books.map(book => <BookItem book={book} />)}
            </div>
        </>
    );
};

export default Detective;