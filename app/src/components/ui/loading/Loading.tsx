import { IGreeting } from "classes/IGreeting";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function Loading() {
  const context: IGreeting = useOutletContext();

  useEffect(() => {
    console.log(`${context.message} ${Loading.name}`);
  }, []);

  return (
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
