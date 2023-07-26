import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { LogOut } from "./LogOut";
import { SignIn } from "./Signin";

const style = {
  nav: "bg-gray-800 h-20 flex justify-between items-center p-4",
  heading: "text-3xl font-bold text-white",
};

export const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat App</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};
