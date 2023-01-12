import Link from "next/link";
import styles from "../styles/Main.module.css";

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
            <Link href={"/CV"}>CV</Link>
          </li>
          <li>
            <Link href={"/Portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/Contact"}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
