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
    FaMountain,
    FaBook
} from 'react-icons/fa';

const Category = props => {
    return (
        <div style={{marginTop: '1rem'}}>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/action">
                <Jumbotron>
                    <h3>Action Adventure<FaMountain /> </h3>
                </Jumbotron>
            </NavLink>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/classics">
                    <h3>Classics<FaBook /></h3>
                </NavLink>
            </Jumbotron>
            <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/detective">
                <Jumbotron>
                    <h3>Detective<FaUserSecret /></h3>
                </Jumbotron>
            </NavLink>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/drama">
                    <h3>Drama<FaTheaterMasks /></h3>
                </NavLink>
            </Jumbotron>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/fantasy">
                    <h3>Fantasy<FaDragon /></h3>
                </NavLink>
            </Jumbotron>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/science">
                    <h3>Science<FaFlask /></h3>
                </NavLink>
            </Jumbotron>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/romantic">
                    <h3>Romantic<FaHeart /></h3>
                </NavLink>
            </Jumbotron>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/psychology">
                    <h3>Psychology<FaBrain /></h3>
                </NavLink>
            </Jumbotron>
            <Jumbotron>
                <NavLink style={{textDecoration: 'none', color: '#000'}} to="/category/horror">
                    <h3>Horror<FaEye /></h3>
                </NavLink>
            </Jumbotron>
        </div>
    );
};

export default Category;