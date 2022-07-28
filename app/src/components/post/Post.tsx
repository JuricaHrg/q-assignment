import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { IGreeting } from "../../classes/IGreeting";
import { IPost } from "../../classes/IPost";
import { IUser } from "../../classes/IUser";
import Loading from "../ui/loading/Loading";
import PostCard from "../ui/post-card/PostCard";

export default function Post() {
  const context: IGreeting = useOutletContext();
  const param = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    console.log(`${context.message} ${Post.name}`);
    const postId = param.id;
    fetchData(postId!);
  }, []);

  async function fetchData(postId: string) {
    setLoading(true);

    let [post, users] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
        (res) => res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
    ]);
    setPost(post);
    setUser(users.find((u: IUser) => u.id === post.userId));
    setLoading(false);
  }

  return (
    <div className="container d-flex align-items-center justify-content-center">
      {loading ? (
        <Loading />
      ) : post ? (
        <PostCard post={post!} user={user} />
      ) : (
        <h1>Post not found</h1>
      )}
    </div>
  );
}
