import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold">Find Us On</h3>
      <div className="flex flex-col  mt-4">
        <button className="border p-4  flex items-center  gap-2 text-lg  ">
          <FaXTwitter className="text-black  " />
          <p>Twitter</p>
        </button>
        <button className="border p-4   flex items-center text-lg  gap-2 ">
          <FaFacebook className="text-blue-400" />
          <p>Facebook</p>
        </button>
        <button className="border p-4   flex items-center text-lg  gap-2 ">
          <FaInstagram className="text-red-500" />
          <p>Instagram</p>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
