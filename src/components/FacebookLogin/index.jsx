import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

export function FbLogin(props) {
  return (
    <div>
      <FacebookLogin
        style={{
          display: "flex",
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "0.5rem",
          border: "none",
          borderRadius: "50%",
          alignItem: "center",
        }}
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
        children={<FacebookRoundedIcon />}
      />

      <button
        onClick={() =>
          FacebookLoginClient.logout(() => {
            console.log("logout completed!");
          })
        }
      >
        Logout
      </button>
    </div>
  );
}
