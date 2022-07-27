import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { IGreeting } from "../../classes/IGreeting";

export default function Posts() {
  const context: IGreeting = useOutletContext();

  useEffect(() => {
    console.log(`${context.message} ${Posts.name}`);
  }, []);

  return <div>Posts</div>;
}
