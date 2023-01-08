import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data =await res.json();

  const paths = data.map((curEle) => {
    return {
      params: {
        PageNo: curEle.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.PageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function PageNo({ data }) {
  return (
    <div className="items">
      <h3>{data.id}</h3>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      
    </div>
  );
}

export default PageNo;
