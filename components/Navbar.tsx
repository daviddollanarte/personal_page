import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Inicio</Link>
          </li>
          <li>
            <Link href={"/AboutMe"}>Biografía</Link>
          </li>
          <li>
            <Link href={"/"}>CV</Link>
          </li>
          <li>
            <Link href={"/"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
