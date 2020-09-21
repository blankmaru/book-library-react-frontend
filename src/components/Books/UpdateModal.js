import React, { useState } from 'react';
import {
    Alert,
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import axios from 'axios';

const UpdateModal = props => {
    const [title, setTitle] = useState(props.book.title);
    const [desc, setDesc] = useState(props.book.desc);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    );

    const updateItem = (e) => {
        e.preventDefault();

        const updatedBook = {
            title,
            desc,
            id: props.book._id
        };

        axios.post(`http://localhost:8080/api/books/update/${props.book._id}`, updatedBook, {
            headers: {
                'auth-token': user.accessToken
            }
        })
            .then(() => setSuccess(true))

        setTimeout(() => {
            window.location = '/books';
        }, 1500);
    };

    const onTitleChange = (e) => setTitle(e.target.value);
    const onChangeDesc = (e) => setDesc(e.target.value);

    return (
        <Modal show={props.modal} onHide={props.toggle}>
            <Modal.Header closeButton>
                <Modal.Title>{props.book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success ? (
                    <Alert color="primary">Post successfully updated!</Alert>
                ) : null}
                <Form onSubmit={updateItem}>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control  
                            value={title}
                            onChange={onTitleChange}
                            type="text" 
                            placeholder={props.book.title} 
                            autoComplete="false"
                        />
                        <Form.Text className="text-muted">
                            Change Title of Book Item
                        </Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            value={desc}
                            onChange={onChangeDesc}
                            type="text" 
                            placeholder={props.book.desc}
                            autoComplete="false" 
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Update
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateModal;