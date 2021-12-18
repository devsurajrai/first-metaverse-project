import { useMoralis } from "react-moralis";
import Image from "next/image";

function Avatar({ userName, logoutOnPress }) {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full cursor-pointer bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/miniavs/${
        userName || user.get("username")
      }.svg`}
      onClick={() => logoutOnPress && logout()}
      layout="fill"
    />
  );
}
export default Avatar;
