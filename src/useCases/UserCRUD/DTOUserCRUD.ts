interface UserDTO {
  id?: string,
  name: string,
  password: string,
  email: string,
  [other: string]: any
}
export default UserDTO;
