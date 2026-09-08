import MyContentCard from "../components/MyContentCard";
import instance from "../api/axios";
import { useEffect, useState } from "react";
import SmoothMount from "../animation/SmoothMount";
import { DataShape } from "./GamePage/Valorant";


function MyVideo() {
  const [data, setData] = useState<DataShape>();
  const [currentPage, setCurrentPage] = useState(1);
  let userId = localStorage.getItem("decodedId");

  function handleClick(video_id:number){
    instance.delete(`mysource/${video_id}`).then(response=>console.log(response.data));
    window.location.reload();
  }

  function onPageChange(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    try {
      instance
        .get(`mysource/${userId}`)
        .then((response) => setData(response.data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const pageSize=7;
  const totalPages = Math.ceil(data?.data.length / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  /*function getContentsPerPage() {
    const startIndex = pageSize * (currentPage - 1);
    const endIndex = pageSize * currentPage - 1;
    return arr.slice(startIndex, endIndex + 1);
  }*/

  let arr = data?.data;
  if (data) arr = [...arr].reverse();

  if (arr)
    return (
      <>
      <h1 className="text-blue">我的视频:</h1>
        <SmoothMount>
          {arr.map((item: { video_id: number; thumbnailUrl: string; title: string; description: string; uploaderName: string; uploadTime: string; }) => (
            <div key={item.video_id} className="relative">
              <MyContentCard
                endpoint="valorant"
                thumbnailURL={item.thumbnailUrl}
                videoId={item.video_id}
                title={item.title}
                description={item.description}
                author={item.uploaderName}
                date={item.uploadTime}
              />
                <button
                  type="button"
                  className="absolute -right-3 top-1/2 -translate-y-1/2
      py-2 px-4 bg-red-500 text-white rounded-lg 
      hover:bg-red-600 transition-colors shadow-sm"
                onClick={()=>handleClick(item.video_id)}
                >
                  删除
                </button>

                <button
                  type="button"
                  className="absolute -right-24 top-1/2 -translate-y-1/2
      py-2 px-4 bg-blue-500 text-white rounded-lg 
      hover:bg-blue-600 transition-colors shadow-sm"
                onClick={()=>handleClick(item.video_id)}
                >
                  更改
                </button>
            </div>
          ))}
          <div className="flex items-center justify-center gap-4 py-8">
            {/* 上一页按钮 */}
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={isFirstPage}
              className={`p-2 rounded-lg transition-colors ${
                isFirstPage
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-blue-50 text-blue-600 shadow-sm"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* 当前页码 */}
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium">{currentPage}</span>
              <span className="text-gray-400">/</span>
              <span className="font-medium">{totalPages}</span>
            </div>

            {/* 下一页按钮 */}
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={isLastPage}
              className={`p-2 rounded-lg transition-colors ${
                isLastPage
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white hover:bg-blue-50 text-blue-600 shadow-sm"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </SmoothMount>
      </>
    );
}

export default MyVideo;
