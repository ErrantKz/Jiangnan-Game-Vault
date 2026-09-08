import { useEffect, useState } from "react";
import { useParams } from "react-router";
import instance from "../api/axios";
import SmoothMount from "../animation/SmoothMount";

export default function VideoPlayer() {
  const [url, setUrl] = useState<string>();
  const { id } = useParams();

  useEffect(() => {
    try {
      instance.get(`source/${id}`).then((response) => {
        setUrl(response.data.data.url);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (url)
    return (
      //Why the if part?
      <div className="max-w-6xl mx-auto px-4"> {/* 新增外层容器 */}
        {/* 返回按钮（现在位于视频容器外） */}
        <button
          onClick={() => window.history.back()}
          className="mb-4 bg-white/90 hover:bg-gray-100 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-x-1 flex items-center"
        >
          <svg 
            className="w-5 h-5 mr-2 text-gray-800"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          返回
        </button>

        {/* 视频容器 */}
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-xl">
          <SmoothMount>
            <video
              controls
              autoPlay
              className="absolute top-0 left-0 w-full h-full"
            >
              <source src={url} type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </SmoothMount>
        </div>
      </div>
    );
}
