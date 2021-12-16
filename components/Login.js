import Image from "next/image";
import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative ">
      <h1>I am login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src="https://bernardmarr.com/wp-content/uploads/2021/12/The-8-Most-Important-Metaverse-Companies.jpg"
          width={200}
          height={200}
        />
        <button
          onClick={authenticate}
          className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
