export interface User {
  id?: string,
  name: string,
  password: string,
  email: string,
  [other: string]: any
}
