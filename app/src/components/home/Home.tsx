import { IGreeting } from "classes/IGreeting";
import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Home() {
  const context: IGreeting = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`${context.message} ${Home.name}`);
  }, []);

  function redirectToRandomPost() {
    const num = Math.floor(Math.random() * 100 + 1);
    navigate(`/post/${num}`);
  }

  function redirectToPosts() {
    navigate("/posts");
  }

  return (
    <div className="container">
      <h2>Hello human.</h2>
      <h5>Thank you for downloading or cloning this app.</h5>
      <section className={styles.sectionWrapper}>
        <h4>
          To view all posts or a random post, click one of the following
          buttons.
        </h4>
        <p>
          Very simple, choose the <b>right pill</b>. Get it?
        </p>
        <div className={styles.linksWrapper}>
          <button className={styles.customButton} onClick={redirectToPosts}>
            Show all posts
          </button>
          <button
            className={styles.customButton}
            onClick={redirectToRandomPost}
          >
            Surprise me
          </button>
        </div>
      </section>
    </div>
  );
}
