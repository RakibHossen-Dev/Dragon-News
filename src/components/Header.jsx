import moment from "moment/moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-3">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="" />
      </div>

      <h3 className="text-gray-500 text-xl ">
        Journalism Without Fear or Favour
      </h3>
      <p>{moment().format("dddd, MMMM Do YYYY,")}</p>
    </div>
  );
};

export default Header;
