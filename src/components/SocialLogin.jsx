import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Login With</h3>
      <div className="flex flex-col gap-2 mt-4">
        <button className="border p-2 border-blue-600 flex items-center justify-center gap-2 rounded-md text-blue-600">
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button className="border p-2 border-gray-700 rounded-md flex items-center justify-center gap-2 text-gray-700">
          <FaGithub />
          <p>Login with Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
