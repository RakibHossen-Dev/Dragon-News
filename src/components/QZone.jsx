import classImage from "../assets/class.png";
import swimmingImage from "../assets/swimming.png";
import playGroundImage from "../assets/playground.png";

const QZone = () => {
  return (
    <div className="space-y-3 bg-base-200 py-5 px-2 ">
      <h3 className="text-xl font-semibold text-gray-500 pl-3">Q-Zone </h3>
      <img className="w-full" src={swimmingImage} alt="" />
      <img className="w-full" src={classImage} alt="" />
      <img className="w-full" src={playGroundImage} alt="" />
    </div>
  );
};

export default QZone;
