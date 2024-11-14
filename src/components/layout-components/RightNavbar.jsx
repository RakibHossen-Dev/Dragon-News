import FindUs from "../FindUs";
import QZone from "../QZone";
import SocialLogin from "../SocialLogin";
import sidebg from "../../assets/bg.png";

const RightNavbar = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <div>
        <img className="w-full" src={sidebg} alt="" />
      </div>
    </div>
  );
};

export default RightNavbar;
