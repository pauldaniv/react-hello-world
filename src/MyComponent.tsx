import React, {useState, useEffect, useCallback} from "react"
import {dummyApi, User} from "./data/api/dummyApi"
import UsersComponent from "./Users"

export interface MyData {
  limit: number
}

const MyComponent: React.FC<MyData> = ({limit}): JSX.Element => {
  const [users, setUsers] = useState<User[]>()
  const [error, setError] = useState<boolean>(false)

  const getUsers = useCallback(() => {
      dummyApi.getUsers(limit)
        .then(it => setUsers(it.data.data))
        .catch(() => setError(true))
    }, [limit]
  )

  useEffect(getUsers, [getUsers])

  if (error) {
    return (
      <>Error!</>
    )
  }
  if (users) {
    return (
      <>
        <UsersComponent userList={users}/>
      </>
    )
  }
  return <>loading</>
}

export default MyComponent;
