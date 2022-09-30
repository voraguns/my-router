import React from "react";
import Posts from "./Posts";
import Home from "./Home";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Profile from "./Profile";

const App = () => {
  return (
    <BrowserRouter>
    <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">All Posts</Link></li>
          <li><Link to="/profile">User Profile</Link></li>
        </ul>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;