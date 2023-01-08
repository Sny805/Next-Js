import React from "react";
import Link from "next/link";
import { Navdata } from "./Navdata";
import styles from '../Navbar/Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav>
        <ul className={styles.menubar} >
          {Navdata.map((data) => {
            return (
              <li>
                <Link href={data.path} activeClassName="active">{data.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
