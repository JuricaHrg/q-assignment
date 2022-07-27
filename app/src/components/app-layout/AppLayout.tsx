import { Outlet } from "react-router-dom";
import { IGreeting } from "../../classes/IGreeting";
import Footer from "./footer/Footer";
import Header from "./navbar/Navbar";
import styles from "./styles.module.scss";

export default function AppLayout() {
  const greeting = new IGreeting("Hello from");
  return (
    <div className={styles.layout}>
      <Header greeting={greeting}></Header>
      <Outlet context={greeting}></Outlet>
      <Footer greeting={greeting}></Footer>
    </div>
  );
}
