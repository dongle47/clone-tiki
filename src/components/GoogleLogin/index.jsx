import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt from "jwt-decode";

export function GgLogin() {
  return (
    <div>
      <GoogleOAuthProvider clientId="314251983625-j96d75o3qqu73m8jkaapumumhkuf3kau.apps.googleusercontent.com">
        <GoogleLogin
          size="large"
          shape="circle"
          type="icon"
          onSuccess={(credentialResponse) => {
            console.log(jwt(credentialResponse.credential));
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
