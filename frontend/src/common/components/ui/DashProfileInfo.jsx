import ProfileIcon from "./ProfileIcon";

const DashProfileInfo = () => {
  return (
    <div className="flex items-center gap-4">
      <ProfileIcon />
      <div>
        <h2 className="text-l">Michael Freeman</h2>
        <p className="text-sm">m.freeman@gmail.com</p>
      </div>
    </div>
  );
};

export default DashProfileInfo;
