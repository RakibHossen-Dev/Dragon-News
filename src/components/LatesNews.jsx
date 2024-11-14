import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatesNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-200 p-3">
      <p className="bg-pink-600 text-base-100 py-3 px-6 font-bold">Lates</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          similique?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          similique?
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          similique?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatesNews;
