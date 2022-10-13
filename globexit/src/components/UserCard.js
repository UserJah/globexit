function UserCard({userCardData}) {
  return (
    <>
      <h3>{userCardData.name}</h3>
      <span>{userCardData.phone}</span>
      <span>{userCardData.email}</span>
    </>
  )
}

export default UserCard