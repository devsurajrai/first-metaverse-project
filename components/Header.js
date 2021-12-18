import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
  const { user } = useMoralis();
  return (
    <div className=" sticky bg-black text-yellow-500 top-0 p-5 z-50 shadow-sm border-b-2 border-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            className="rounded-full object-cover "
            src="https://bernardmarr.com/wp-content/uploads/2021/12/The-8-Most-Important-Metaverse-Companies.jpg"
            layout="fill"
          />
        </div>
        <div className=" col-span-4 text-left lg:text-center">
          <div className=" h-48 w-48 relative lg:mx-auto border-yellow-500 border-8 rounded-full hover:w-50 h-50">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl ">Welcome to the METACHAT</h1>
          <h2 className="text-5xl font-bold truncate">
            {user.get("username")}
          </h2>
        </div>
        <ChangeUsername />
      </div>
    </div>
  );
}

export default Header;
