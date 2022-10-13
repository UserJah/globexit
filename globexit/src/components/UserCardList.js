import UserCard from './UserCard';

function UserCardList({userData}) {
  console.log(userData);
  return (
    <div>
      {userData.map((userCardData, index) => {
        return <UserCard key={index} userCardData={userCardData} />
      })}
    </div>
  )
}

export default UserCardList;
