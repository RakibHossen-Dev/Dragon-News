// const NewsCard = ({ singleNews }) => {
//   const { title, thumbnail_url, image_url, details } = singleNews;
//   return (
//     <div>
//       <div className="border my-4">
//         <h3>{title}</h3>
//         <img className="w-full p-3" src={image_url} alt="" />
//         <p>{details}</p>
//       </div>
//     </div>
//   );
// };

// export default NewsCard;

import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";

const NewsCard = (props = {}) => {
  const { news } = props || {};

  return (
    <div className="  bg-white rounded-lg shadow-md my-4">
      {/* Author Information */}
      <div className="flex items-center mb-4 bg-base-200 p-4 rounded-t-lg">
        <img
          src={news.author.img}
          alt={news.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{news.author.name}</p>
          <p className="text-sm text-gray-500">{news.author.published_date}</p>
        </div>
        <div className="ml-auto flex gap-2">
          <FaRegBookmark className="text-gray-600 text-lg" />
          <FaShareAlt className="text-gray-600 text-lg" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-2 p-4">{news.title}</h2>

      {/* Thumbnail Image */}
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full  object-cover rounded-lg mb-4 p-4"
      />

      {/* Details */}
      <p className="text-gray-700 text-sm mb-4 p-4">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-primary">Read More</span>
      </p>

      <div className="border-b my-4"></div>
      {/* Ratings and Views */}
      <div className="flex items-center p-4 justify-between text-gray-600 text-sm">
        {/* Rating */}
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <AiFillStar
              key={i}
              className={`text-yellow-500 ${
                i < Math.round(news.rating.number) ? "" : "opacity-50"
              }`}
            />
          ))}
          <span className="ml-2 font-semibold">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center">
          <FaRegEye className="mr-1" />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;

// Sample news

//
