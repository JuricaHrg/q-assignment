import { IGreeting } from "classes/IGreeting";
import { IPost } from "classes/IPost";
import { IUser } from "classes/IUser";
import Loading from "components/ui/loading/Loading";
import PostCard from "components/ui/post-card/PostCard";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./styles.module.scss";
import { fetchPosts, fetchUsers } from "./utils/apiUtils";

export default function Posts() {
  const context: IGreeting = useOutletContext();
  const [posts, setPosts] = useState<Array<IPost>>();
  const [users, setUsers] = useState<Array<IUser>>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(`${context.message} ${Posts.name}`);
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    const [posts, users] = await Promise.all([
      fetchPosts().then((res) => res.json()),
      fetchUsers().then((res) => res.json()),
    ]);
    setPosts(posts);
    setUsers(users);
    setLoading(false);
  }

  function getPostByTitle(title: string) {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?title_like=^${title}`
    ).then((response: Response) => {
      response
        .json()
        .then((res: Array<IPost>) => {
          setPosts(res);
          setLoading(false);
        })
        .then((err: any) => {
          console.log(err);
          setLoading(false);
        });
    });
  }

  function getAllPosts() {
    setLoading(true);
    fetchPosts().then((res) =>
      res.json().then((posts) => {
        setPosts(posts);
      })
    );
    setLoading(false);
  }

  function handleSearchChange(e: any) {
    if (e.target.value) {
      getPostByTitle(e.target.value);
    } else {
      getAllPosts();
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-between">
        <h2>Posts</h2>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Search..."
          onChange={handleSearchChange}
        ></input>
      </div>
      <p className="mb-5">
        Here you can see all of the posts provided through the{" "}
        <a href="https://jsonplaceholder.typicode.com/users" target="_blank">
          API
        </a>
        .
      </p>

      <div className="container d-flex align-items-center justify-content-center">
        {loading ? (
          <Loading />
        ) : posts ? (
          <div className="container-fluid d-flex flex-wrap">
            {posts.map((post: IPost) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
                  <PostCard
                    post={post}
                    user={users?.find((u) => u.id === post.userId)}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h1>No posts not found</h1>
        )}
      </div>
    </div>
  );
}
