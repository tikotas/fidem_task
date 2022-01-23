import { FC, ReactNode } from "react";
import styles            from './style.module.scss'


interface iProps {
  children: ReactNode
}

export const BaseFlex: FC<iProps> = ({children}) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  )
}