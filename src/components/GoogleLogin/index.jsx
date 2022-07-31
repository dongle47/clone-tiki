import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

const clientId =
  "1006123237514-g8lfrv2bbs5tfnb4gaa40i7shdaklspm.apps.googleusercontent.com";

export function GgLogin() {
  const onSuccess = (res) => {
    console.log("[Login Success] currentUser: ", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[login failed] res: ", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "10rem" }}
        isSignedIn={true}
      />
    </div>
  );
}

export function GgLogout() {
  const onSuccess = () => {
    alert("Logout made successfully");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
