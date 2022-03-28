import User from "./User";

const UserList = ({ listOfUsers }) => {
  return (
    <div className="listOfUsers">
      {listOfUsers.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
};

export default UserList;
