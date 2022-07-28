import { IGreeting } from "classes/IGreeting";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./navbar/Navbar";
import styles from "./styles.module.scss";

export default function AppLayout() {
  const greeting = new IGreeting("Hello from");

  useEffect(() => {
    console.log(`${greeting.message} ${AppLayout.name}`);
  }, []);

  return (
    <div className={styles.layout}>
      <Header greeting={greeting}></Header>
      <div className={styles.contentWrapper}>
        <Outlet context={greeting}></Outlet>
      </div>
      <Footer greeting={greeting}></Footer>
    </div>
  );
}
