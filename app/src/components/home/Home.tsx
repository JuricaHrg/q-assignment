import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { IGreeting } from "../../classes/IGreeting";

export default function Home() {
  const context: IGreeting = useOutletContext();

  useEffect(() => {
    console.log(`${context.message} ${Home.name}`);
  }, []);

  return <div>Home</div>;
}
