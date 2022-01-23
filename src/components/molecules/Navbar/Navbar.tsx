import { FC }       from "react";
import styles       from './styles.module.scss'
import { BaseLink } from "../../atoms/Link";


export const Navbar: FC = () => {
  return (
    <div className={styles.nav}>
      <BaseLink href='/showAllUsers'>See Users</BaseLink>
      <BaseLink href='/addUserPage'>Add new user</BaseLink>
    </div>
  )
}