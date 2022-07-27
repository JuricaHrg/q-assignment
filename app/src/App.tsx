import "./App.scss";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import AppLayout from "./components/app-layout/AppLayout";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";
import Home from "./components/home/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
