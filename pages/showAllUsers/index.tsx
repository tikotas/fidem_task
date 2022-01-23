import styles                             from './style.module.scss'
import { useAppDispatch, useAppSelector } from "../../src/hooks/hooks";
import { useRouter }                      from "next/router";
import { BaseFlex }                       from "../../src/components/atoms/BaseFlex";
import { ChangeEvent, useState }          from "react";
import { SearchBox }                      from "../../src/components/atoms/SearchBox";
import { delUser }                        from "../../redux/actions/users";


const ShowAllUsers = () => {

  const router = useRouter()
  const users = useAppSelector(state => state)
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("")


  const onHandleEdit = (id: string) => {
    router.push(`/editUserPage/${id}`)
  }

  const onHandleDelete = (id: string) => {
    const deletedUser = users.filter(item => item.id !== id)
    console.log("deleted", deletedUser)
    dispatch(delUser(deletedUser))
    router.push(`/showAllUsers`)
  }

  const filteredData = searchValue.length > 0
    ? users.filter((item: any) => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(searchValue.toLowerCase())
      )
    })
    : users

  const onSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <SearchBox
        placeholder="search by fields"
        onSearch={onSearch}
      />
      {filteredData.length !== 0
        ? <table cellSpacing={0}>
          <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>E-mail</td>
            <td>Address</td>
            <td>Phone</td>
          </tr>
          </thead>
          <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  onClick={() => onHandleEdit(String(user.id))}
                  className={styles.edBtn}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className={styles.delBtn}
                  onClick={() => onHandleDelete(String(user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
          }
          </tbody>
        </table>
        : <BaseFlex>No Users</BaseFlex>
      }
    </div>
  )
}
export default ShowAllUsers
