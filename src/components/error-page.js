import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
  const error = useRouteError();
  console.error(error);
  return (
    <div style={{margin: '0', position: "absolute", top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
      <h1>Oops... Looks like this page doesn't exist!</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}