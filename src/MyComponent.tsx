import React, {useState, useEffect, useCallback} from "react";
import {dummyApi, User} from "./data/api/dummyApi";

export interface MyData {
  users?: User[]
}

const MyComponent: React.FC<MyData> = ({users: dummyUsers}): JSX.Element => {
  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState<boolean>(false)

  const getUsers = useCallback(async () => {
    try {
      const {data: dummyUsers} = await dummyApi.getUsers()
      setUsers(dummyUsers)
    } catch {
      setError(true)
    }
  }, [])

  useEffect(() => {
    if (dummyUsers) {
      setUsers(dummyUsers)
    } else {
      getUsers()
    }
  }, [])

  if (error) {
    return (
      <>Error!</>
    )
  }
  if (users) {
    return (
      <>
        {users.map(user => (
          <>
            <h2>id: {user.id}</h2>
            <h2>name: {user.firstName}</h2>
          </>))
        }
      </>
    )
  }
  return <>loading</>
}

export default MyComponent;
