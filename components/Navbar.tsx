import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <Link href={"../pages/index.tsx"}>Inicio</Link>
          </li>
          <li>Biografía</li>
          <li>CV</li>
          <li>Portfolio</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
