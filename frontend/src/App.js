
import './App.css';

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigations';
import { Container } from 'react-bootstrap';

import Home from './components/Home';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';

function App() {
  return (
    <div className="">
      {/* <CreateProduct /> */}
      <BrowserRouter>
        <div className="app">
          <div className="row nav-fixed-top">
            <Navigation />
          </div>

          <Container className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/edit/:postID" element={<EditPost />} />
              <Route path="/delete/:postID" element={<DeletePost />} />
              {/* <Route path="/blog/:slug" element={<BlogWithDetails />} /> */}
            </Routes>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
