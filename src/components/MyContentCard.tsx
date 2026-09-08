import { Link } from "react-router";
import { Props } from "./ContentCard";

export default function MyContentCard(Props:Props) {
  return (
    <Link
      to={`/${Props.endpoint}/${Props.videoId}`}
      className="flex-1 group block w-290 h-24 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-200 relative"
    >
      <div className="flex h-full">
        {/* 图片区域（左侧1/3） */}
        <div className="w-1/6 relative overflow-hidden">
          <img
            src={Props.thumbnailURL}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* 内容区域（右侧2/3） */}
        <div className="w-5/6 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {Props.title}
              </h3>

              <span className="text-xs text-gray-500">作者:{Props.author}</span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600 line-clamp-2">
                {Props.description}
              </span>
              <span className="text-xs text-gray-500">{Props.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 悬停装饰元素 */}
      <div className="absolute right-0 top-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}