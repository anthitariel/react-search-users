import { User } from '../types';

interface UserProps {
   user: User;
}

export default function UserDetails({ user }: UserProps) {
    return (
        <ul>
            <li>{user.name}, <b>username: </b>{user.username}, <b>email: </b>{user.email}</li>
        </ul>
    )
  }



  