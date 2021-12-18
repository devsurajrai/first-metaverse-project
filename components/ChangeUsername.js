import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { setUserData, isUserUpdating, useError, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter Your New Username (current: ${user.getUsername()}) `
    );
    if (!username) return;
    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUsername}
        className={` hover:bg-white p-1 cursor-pointer hover:translate-y-1 border-2 h-10 rounded-sm `}
      >
        Change Username
      </button>
    </div>
  );
}

export default ChangeUsername;
