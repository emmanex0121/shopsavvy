import CustomUserTable from "../ui/CustomUserTable";
import CustomButton from "../ui/CustomButton";
import { useContext } from "react";

const { showUsers, setShowUsers } = useContext(ProductContext);

const UsersContent = () => {
  // What happend when the add user button is clicked
  const handleAddUser = () => {
    setShowUsers(false);
    alert("Added user has been clicked");
  };

  return (
    <div className="">
      <div className="flex gap-6 items-center justify-between mt-6 mb-10">
        <h1 className="text-3xl font-bold">Users</h1>
        <CustomButton value="Add a new user" onClick={handleAddUser} />
      </div>
      <CustomUserTable />
    </div>
  );
};

export default UsersContent;
