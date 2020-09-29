import React from 'react';
import {
    Jumbotron
} from 'react-bootstrap';
import {
    NavLink
} from 'react-router-dom';
import {
    FaFlask,
    FaDragon,
    FaHeart,
    FaBrain,
    FaUserSecret,
    FaTheaterMasks,
    FaEye,
    FaBook
} from 'react-icons/fa';

const Category = props => {
    return (
        <div style={{marginTop: '1rem'}}>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/classics">
                <Jumbotron>
                    <h3>Classics<FaBook /></h3>
                </Jumbotron>
            </NavLink>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/detective">
                <Jumbotron>
                    <h3>Detective<FaUserSecret /></h3>
                </Jumbotron>
            </NavLink>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/drama">
                <Jumbotron>
                    <h3>Drama<FaTheaterMasks /></h3>
                </Jumbotron>
            </NavLink>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/fantasy">
                <Jumbotron>
                    <h3>Fantasy<FaDragon /></h3>
                </Jumbotron>
            </NavLink>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/science">
                    <h3>Science<FaFlask /></h3>
                </NavLink>
            </Jumbotron>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/romantic">
                <Jumbotron>
                    <h3>Romantic<FaHeart /></h3>
                </Jumbotron>
            </NavLink>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/psychology">
                <Jumbotron>
                    <h3>Psychology<FaBrain /></h3>
                </Jumbotron>
            </NavLink>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/horror">
                <Jumbotron>
                    <h3>Horror<FaEye /></h3>
                </Jumbotron>
            </NavLink>
        </div>
    );
};

export default Category;