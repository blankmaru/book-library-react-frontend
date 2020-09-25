import React, { useState, useEffect } from 'react';
import {
    Button,
    Card
} from 'react-bootstrap';
import axios from 'axios';

import UpdateModal from './UpdateModal';

const BookItem = props => {
    const [modal, setModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    );

    const toggle = () => setModal(!modal);

    useEffect(() => {
        if (props.book.postedBy === user.id) {
            setUpdate(true);
        };
    }, [])

    const deleteItem = () => {
        axios.delete(`http://localhost:8080/api/books/${props.book._id}`, {
            headers: {
                'auth-token': user.accessToken
            }
        })
            .then(() => console.log('Item deleted'))

        setTimeout(() => {
            window.location = '/books';
        }, 500)
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
                <Card.Text>{props.book.desc}</Card.Text>
                <Card.Text><strong>Category:</strong> {props.book.category}</Card.Text>
                <Card.Text>Author: {props.book.author}</Card.Text>
                <div style={{display: 'block'}}>
                    {update 
                    ? <Button onClick={toggle} variant="success" block>Update</Button>
                    : null}
                    {user 
                    ? <>
                        <Button onClick={deleteItem} variant="danger" block>Delete</Button>
                    </> 
                    : null}
                    <Button variant="dark" block>Read</Button>
                </div>
                <UpdateModal modal={modal} toggle={toggle} book={props.book} />
            </Card.Body>
        </Card>
    );
};

export default BookItem;