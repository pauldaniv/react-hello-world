import React, {useState, useEffect} from "react";
import {User} from "./data/api/dummyApi";

export interface MyData {
  user: User
}

const UserComponent: React.FC<MyData> = ({user: dummyUser}): JSX.Element => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (dummyUser) {
      setUser(dummyUser)
    }
  }, [dummyUser])

  if (user) {
    return (
      <div key={user.id}>
        <h2>id: {user.id}</h2>
        <h2>name: {user.firstName}</h2>
        <h2>lastName: {user.lastName}</h2>
      </div>
    )
  }
  return <>loading</>
}

export default UserComponent;
