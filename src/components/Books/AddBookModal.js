import React, { useState } from 'react';
import {
    Alert,
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import axios from 'axios';

const AddBookModal = props => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    
    const [success, setSuccess] = useState(false);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onDescChange = (e) => setDesc(e.target.value);
    const onAuthorChange = (e) => setAuthor(e.target.value);
    const onCategoryChange = (e) => setCategory(e.target.value);

    const createBook = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem('user'));

        const newBook = {
            title,
            desc,
            author,
            postedBy: user.id,
            category
        };

        axios.post('http://localhost:8080/api/books/add', newBook, {
            headers: {
                'auth-token': user.accessToken
            }
        })
            .then(() => setSuccess(true))


        setTimeout(() => {
            window.location = '/books';
        }, 1500);
    }

    return (
        <Modal show={props.modal} onHide={props.toggle}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success ? (
                    <Alert color="primary">Book created successfully!</Alert>
                ) : null}
                <Form onSubmit={createBook}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control  
                            value={title}
                            onChange={onTitleChange}
                            type="text" 
                            autoComplete="false"
                        />
                        <Form.Text className="text-muted">
                            Title for new book
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            value={desc}
                            onChange={onDescChange}
                            type="text" 
                            autoComplete="false" 
                        />
                        <Form.Text className="text-muted">
                            Description for new book
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                            value={author}
                            onChange={onAuthorChange}
                            type="text" 
                            autoComplete="false" 
                        />
                        <Form.Text className="text-muted">
                            Author of new book
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Category</Form.Label>
                        <Form.Control value={category} onChange={onCategoryChange} as="select">
                            <option>Classics</option>
                            <option>Detective</option>
                            <option>Drama</option>
                            <option>Fantasy</option>
                            <option>Science</option>
                            <option>Romantic</option>
                            <option>Psychology</option>
                            <option>Horror</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Choose category of the book
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        CREATE BOOK
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddBookModal;