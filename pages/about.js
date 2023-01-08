import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../compoents/Navbar/Navbar";
function about() {
  const router = useRouter();
  const inputFn = () => {
    router.push("/");
  };

  return (
    <>
      <Navbar/>
      <div>about</div>
      <button onClick={inputFn}>Back</button>
    </>
  );
}

export default about;
