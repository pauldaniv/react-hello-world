import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

const Profile: React.FC = (): JSX.Element => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return ( <>
    <div>
      No session
    </div>
    <LoginButton/>
  </> )

  return (
    <>
      <div>User List</div>
      <div>
        <img src={ user?.picture } alt={ user?.name }/>
        <h2>{ user?.name }</h2>
        <p>{ user?.email }</p>
      </div>
      <div>
        <LogoutButton/>
      </div>
    </>
  );
};

export default Profile;
