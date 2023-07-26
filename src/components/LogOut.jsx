import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const style = {
  button: "bg-gray-200 px-4 py-2 hover:bg-gray-100",
};

export const LogOut = () => {
  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <div onClick={signOutUser} className={style.button}>
      LogOut
    </div>
  );
};
