import { useRouter }      from "next/router";
import { useAppSelector } from "../../src/hooks/hooks";
import { Form }           from "../../src/components/molecules/Form";


const EditUsersPage = () => {
  const rout = useRouter();
  const user = useAppSelector(state => state.find(user => user.id === rout.query.id))
  if (typeof user === "undefined") return null

  return (
    <Form
      id={user.id}
      first_name={user.first_name}
      last_name={user.last_name}
      email={user.email}
      address={user.address}
      phone={user.phone}
    />
  )
}

export default EditUsersPage;