import React, { useState, useEffect } from "react";
import {
    Spinner
} from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

import BookItem from './BookItem';
import AddBookModal from './AddBookModal';

const Books = props => {
    const [books, setBooks] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        setIsFetching(true);
        fetch('http://localhost:8080/api/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data.reverse());
                setIsFetching(false);
            });

        const user = localStorage.getItem('user');

        if (JSON.parse(user)) {
            setIsUser(true);
        } else {
            return;
        };
    }, [])

    return (
        <>
        <div 
            style={{width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
                }}>
            {isUser 
                ? <>
                    <FaPlusCircle
                        size="25"
                        style={{
                            cursor: 'pointer',
                            marginTop: '1rem'
                        }}
                        onClick={toggle}
                    />
                </>
                : null}
            <AddBookModal toggle={toggle} modal={modal} />
            <div
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    }}
                >
                {isFetching 
                ? ( <Spinner style={{marginTop: '1rem'}} animation="border" variant="secondary" /> )
                : null}
            </div>
            <div style={{marginTop: '1rem', display: 'flex'}}>
                {books.map(book => (<>
                    <BookItem book={book} />
                </>))}
            </div>
        </div>
        </>
    );
};

export default Books;