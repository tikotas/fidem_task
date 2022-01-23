import { FC } from "react";


interface iProps {
  placeholder: string
  onSearch: () => void
}

export const SearchBox: FC<iProps> = ({placeholder, onSearch}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onSearch}
    />
  )
}