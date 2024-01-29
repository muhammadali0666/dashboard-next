import Link from "next/link";
import styles from "./menuLink.css"

const MenuLink = ({ item }) => {
  return (
    <Link
      href={item.path}
      style={{
        display: "flex",
        padding: "20px",
        alignItems: "center",
        gap: "10px",
      }}
      className={styles.container}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
