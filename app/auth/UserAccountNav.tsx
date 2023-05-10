import { User } from 'next-auth'

function UserAccountNav({ user }: { user: Pick<User, 'name' | 'image' | 'email'> }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.image}</p>
      <p>{user.email}</p>
      <div>Logout</div>
    </div>
  )
}

export default UserAccountNav
