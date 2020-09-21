import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    Spinner
} from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

const Books = props => {
    const [books, setBooks] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        fetch('http://localhost:8080/api/books')
            .then(res => res.json())
            .then(data => {
                setBooks(data.reverse());
                setIsFetching(false);
            });

        const user = localStorage.getItem('user');

        if (user) {
            setIsUser(true);
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
                    />
                </>
                : null}
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
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>{book.desc}</Card.Text>
                            <Card.Text>Author: {book.author}</Card.Text>
                            <Card.Text>PostedBy: {book.postedBy}</Card.Text>
                            <Button variant="primary">Update</Button>
                            <Button variant="danger">Delete</Button>
                        </Card.Body>
                    </Card>
                </>))}
            </div>
        </div>
        </>
    );
};

export default Books;