import React, { useState, useEffect } from 'react';
import { 
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';
import axios from 'axios';

const Home = props => {
    const [classics, setActionBooks] = useState(0);
    const [detectives, setDetective] = useState(0);
    const [drama, setDrama] = useState(0);
    const [fantasy, setFantasy] = useState(0);
    const [science, setScience] = useState(0);
    const [romantic, setRomantic] = useState(0);
    const [psychology, setPsychology] = useState(0);
    const [horror, setHorror] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books/category/classics')
            .then(res => {
                if (res.data.books[0] === null) {
                    setActionBooks(res.data.books.length - 1)
                } else {
                    setActionBooks(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/detective')
            .then(res => {
                if (res.data.books[0] === null) {
                    setDetective(res.data.books.length - 1)
                } else {
                    setDetective(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/drama')
            .then(res => {
                if (res.data.books[0] === null) {
                    setDrama(res.data.books.length - 1)
                } else {
                    setDrama(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/fantasy')
            .then(res => {
                if (res.data.books[0] === null) {
                    setFantasy(res.data.books.length - 1)
                } else {
                    setFantasy(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/science')
            .then(res => {
                if (res.data.books[0] === null) {
                    setScience(res.data.books.length - 1)
                } else {
                    setScience(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/romantic')
            .then(res => {
                if (res.data.books[0] === null) {
                    setRomantic(res.data.books.length - 1)
                } else {
                    setRomantic(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/psychology')
            .then(res => {
                if (res.data.books[0] === null) {
                    setPsychology(res.data.books.length - 1)
                } else {
                    setPsychology(res.data.books.length)
                }
            });
        axios.get('http://localhost:8080/api/books/category/horror')
            .then(res => {
                if (res.data.books[0] === null) {
                    setHorror(res.data.books.length - 1)
                } else {
                    setHorror(res.data.books.length)
                }
            });
    }, [])

    return (    
        <>
            <h3 style={{marginTop: '0.5rem', textAlign: 'center'}}>Welcome to the Book Library</h3>
            <ListGroup style={{marginTop: '2rem'}}>
                <ListGroupItem>Classics: {classics}</ListGroupItem>
                <ListGroupItem>Detectives: {detectives}</ListGroupItem>
                <ListGroupItem>Drama: {drama}</ListGroupItem>
                <ListGroupItem>Fantasy: {fantasy}</ListGroupItem>
                <ListGroupItem>Science: {science}</ListGroupItem>
                <ListGroupItem>Romantic: {romantic}</ListGroupItem>
                <ListGroupItem>Psychology: {psychology}</ListGroupItem>
                <ListGroupItem>Horror: {horror}</ListGroupItem>
            </ListGroup>
        </>
    );
};

export default Home;