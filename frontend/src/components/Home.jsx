import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { Link, NavLink } from "react-router-dom";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const { data } = await axios.get(
            `http://127.0.0.1:8000/post/`
            // `https://restcountries.com/v3.1/region/europe`
        );
        setPosts(data);
        console.log("all Posts: ", data);
    };

    useEffect(() => {
        fetchData();
        // console.log('length: ', countries.length)
    }, []);


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Descriptions</th>
                    <th>Slug</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {posts &&
                    posts.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>{item.slug}</td>
                            <td>
                                <Nav.Link>
                                    <NavLink
                                        activeClassName="active"
                                        // to="/edit"
                                        to={`/edit/${item.id}`}
                                        className="btn btn-primary text-white"
                                    >
                                        Edit
                                    </NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink
                                        activeClassName="active"
                                        // to="/edit"
                                        to={`/delete/${item.id}`}
                                        className="btn btn-danger text-white"
                                    >
                                        Delete
                                    </NavLink>
                                </Nav.Link>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    )
};

export default Home;