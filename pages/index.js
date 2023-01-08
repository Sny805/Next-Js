import React from "react";

import Navbar from "../compoents/Navbar/Navbar";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Head from "next/head";

function index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 className={styles.header}>Hello world</h1>
        <Image src="/laptop.jpg" width="500" height="200"></Image>
        <style jsx>
          {`
            h1 {
              color: pink;
            }
          `}
        </style>
      </div>
    </>
  );
}

export default index;
