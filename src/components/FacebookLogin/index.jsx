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
          backgroundColor: "white",
          padding: "0.5rem",
          border: "none",
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
        children={
          <FacebookRoundedIcon sx={{ color: "#4267b2", fontSize: "3rem" }} />
        }
      />

      {/* <button
        onClick={() =>
          FacebookLoginClient.logout(() => {
            console.log("logout completed!");
          })
        }
      >
        Logout
      </button> */}
    </div>
  );
}
