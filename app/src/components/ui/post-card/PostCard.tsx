import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { IGreeting } from "../../../classes/IGreeting";
import { IPost } from "../../../classes/IPost";
import { IUser } from "../../../classes/IUser";
import styles from "./styles.module.scss";

interface IProps {
  post: IPost;
  user?: IUser;
}

export default function PostCard(props: IProps) {
  const context: IGreeting = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`${context.message} ${PostCard.name}`);
  }, []);

  function navigateToPost() {
    navigate(`/post/${props.post.id}`);
  }

  return (
    <div className={`card ${styles.postCard}`} onClick={navigateToPost}>
      <div className="card-body">
        <h5 className="card-title mb-2 ">{props.post.title}</h5>
        <p className="card-text">{props.post.body}</p>
        <p className="card-text text-muted">
          {props.user ? props.user.username : "N/A"}
        </p>
      </div>
    </div>
  );
}
