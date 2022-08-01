import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";

export function FbLogin(props) {
  return (
    <FacebookLogin
      appId="2245302728954327"
      onSuccess={(response) => {
        console.log("Login Success!", response);
      }}
      onFail={(error) => {
        console.log("Login Failed!", error);
      }}
      onProfileSuccess={(response) => {
        console.log("Get Profile Success!", response);
      }}
    />
  );
}
