import UserInfoLabel from "./UserInfoLabel";

function UserContactInfo({ user }) {
  return (
    <div className="sm:grid sm:grid-cols-2 gap-8 sm:p-8 flex flex-col gap bg-gray-50 p-4 rounded-lg">
      <UserInfoLabel
        head="email"
        body={
          <a
            className="text-blue-400 hover:text-blue-600"
            href={`mailto:${user.email}`}>
            {user.email}
          </a>
        }
      />
      <UserInfoLabel head="age" body={user.age} />
      <UserInfoLabel
        head="phone"
        body={
          <a
            href={`tel:${user.phone}`}
            className="text-blue-400 hover:text-blue-600">
            {user.phone}
          </a>
        }
      />
      <UserInfoLabel head="gender" body={user.gender} />
    </div>
  );
}

export default UserContactInfo;
