import React from 'react';
import {
    Button,
    Card
} from 'react-bootstrap';
import axios from 'axios';

const BookItem = props => {

    const deleteItem = () => {
        axios.delete(`http://localhost:8080/api/books/${props.book._id}`)
            .then(() => console.log('Item deleted'))
            .catch(err => console.error(err));

        setTimeout(() => {
            window.location = '/books';
        }, 1500)
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.book.title}</Card.Title>
                <Card.Text>{props.book.desc}</Card.Text>
                <Card.Text>Author: {props.book.author}</Card.Text>
                <div style={{display: 'block'}}>
                    <Button variant="success" block>Update</Button>
                    <Button onClick={deleteItem} variant="danger" block>Delete</Button>
                    <Button variant="dark" block>Read</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BookItem;