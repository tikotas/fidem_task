import styles                                   from "./styles.module.scss";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useAppDispatch }                       from "../../../hooks/hooks";
import { v4 }                                   from "uuid";
import { addNewUser }                           from "../../../../redux/actions/users";
import { iUsers }                               from "../../../../interfaces";
import { useRouter }                            from "next/router";


const initState: iUsers = {
  id        : "",
  first_name: "",
  last_name : "",
  email     : "",
  address   : "",
  phone     : "",
}

export const Form: FC<iUsers> = ({
                                   id,
                                   first_name,
                                   last_name,
                                   email,
                                   address,
                                   phone, ...props
                                 }) => {

  const getEditValues: iUsers = {
    id,
    first_name,
    last_name,
    email,
    address,
    phone,
  }

  const checkState = id ? getEditValues : initState
  const router = useRouter();
  const [addUser, setAddUser] = useState<iUsers>(checkState)

  const dispatch = useAppDispatch()
  const inputFields = [
    {value: addUser.first_name, type: "text", placeholder: "First name", name: "first_name"},
    {value: addUser.last_name, type: "text", placeholder: "Last name", name: "last_name"},
    {value: addUser.email, type: "email", placeholder: "E-mail", name: "email"},
    {value: addUser.address, type: "text", placeholder: "Address", name: "address"},
    {value: addUser.phone, type: "tel", placeholder: "Phone", name: "phone"},
  ]

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setAddUser({
      ...addUser,
      id    : v4(),
      [name]: value
    })
  }

  const addUserHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAddUser(initState)
    dispatch(addNewUser(addUser))
    router.push("/showAllUsers")
  }


  return (
    <form className={styles.root}>
      <h1>{id ? "Edit User" : "Add User"}</h1>
      {
        inputFields.map(input => (
          <input
            key={input.name}
            required
            onChange={onHandleChange}
            value={input.value}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
          />
        ))
      }
      {
        id
          ? <button>Update user</button>
          : <button onClick={addUserHandler}>Add user</button>
      }

    </form>
  )
}