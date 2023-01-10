import React from "react";
import Link from "next/link";
import { Navdata } from "./Navdata";
import styles from '../Navbar/Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav>
        <ul className={styles.menubar} >
          {Navdata.map((item) => {
            return (
              <li>
                <Link href={item.path} activeClassName="active">{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
