import React from "react";
import Navbar from "../../compoents/Navbar/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

function blog({ data }) {
  return (
    <>
      <Navbar />
      <h1>Blog</h1>
      {data.slice(0, 9).map((items) => {
        return (
          <div key={items.id} className="items">
            <h3>{items.id}</h3>
            <Link href={`blog/${items.id}`}> <h3>{items.title}</h3></Link>
          </div>
        );
      })}
    </>
  );
}

export default blog;
