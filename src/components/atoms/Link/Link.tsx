import Link              from "next/link";
import { FC, ReactNode } from "react";


interface iLink {
  href: string
  children: ReactNode
}

export const BaseLink: FC<iLink> = ({href, children}) => {
  return (
    <Link href={href}>
      <a>
        {children}
      </a>
    </Link>
  )
}