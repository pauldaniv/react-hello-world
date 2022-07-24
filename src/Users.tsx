import React, {useState, useEffect} from "react";
import {User} from "./data/api/dummyApi";
import UserComponent from "./User";

export interface MyData {
  userList: User[]
}

const UsersComponent: React.FC<MyData> = ({userList: dummyUsers}): JSX.Element => {
  const [userList, setUsers] = useState<User[]>()

  useEffect(() => {
    if (dummyUsers) {
      setUsers(dummyUsers)
    }
  }, [dummyUsers])

  if (userList) {
    return (
      <>
        {
          userList.map(user =>
            <UserComponent user={user}/>
          )
        }
      </>
    )
  }
  return <>loading</>
}

export default UsersComponent;
