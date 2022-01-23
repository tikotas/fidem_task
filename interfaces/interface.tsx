export interface iUsers {
  id?: string
  first_name?: string
  last_name?: string
  email?: string
  address?: string
  phone?: string
}

export interface iUserReducer {
  users: iUsers[]
}