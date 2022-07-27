import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { IGreeting } from "../../classes/IGreeting";

export default function Post() {
  const context: IGreeting = useOutletContext();

  useEffect(() => {
    console.log(`${context.message} ${Post.name}`);
  }, []);

  return <div>Post</div>;
}
