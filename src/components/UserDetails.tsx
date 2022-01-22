import { User } from '../types';

interface UserDetailsProps {
   user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
    return (
        <ul>
            <li>{user.name}, <b>username: </b>{user.username}, <b>email: </b>{user.email}</li>
        </ul>
    )
  }



  