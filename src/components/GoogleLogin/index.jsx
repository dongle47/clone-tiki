// import { GoogleLogin } from "react-google-login";
// import { GoogleLogout } from "react-google-login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export function GgLogin() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[login failed] res: ", res);
  };

  return (
    <div>
      <GoogleOAuthProvider clientId="314251983625-j96d75o3qqu73m8jkaapumumhkuf3kau.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
}

// export function GgLogout() {
//   const onSuccess = () => {
//     alert("Logout made successfully");
//   };

//   return (
//     <div>
//       <GoogleLogout
//         clientId={clientId}
//         buttonText="Logout"
//         onLogoutSuccess={onSuccess}
//       />
//     </div>
//   );
// }
