import SmoothMount from "../../animation/SmoothMount";
import ContentCard from "../../components/ContentCard";
import instance from "../../api/axios";

import { useEffect, useState } from "react";

export interface DataShape {
  status: number;
  message: string;
  data: any;
}

function ValorantPage() {
  const [data, setData] = useState<DataShape>();
  const [currentPage, setCurrentPage] = useState(1);
  let arr:any;

  function onPageChange(page: number) {
    setCurrentPage(page);
  }

  useEffect(() => {
    const fetchData = () => {
      try {
        instance
          .post("/source", null, { params: { categoryId: 2 } })
          .then((response) => setData(response.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const pageSize=5;
  const totalPages = Math.ceil(data?.data.length / pageSize);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  arr = data?.data; //arr=data?.data.reverse() won't work here
  if (arr) arr = [...arr].reverse();

  function getContentsPerPage() {
    const startIndex = pageSize * (currentPage - 1);
    const endIndex = pageSize * currentPage - 1;
    return arr.slice(startIndex, endIndex + 1);
  }

  if (arr)
    return (
      <>
        <SmoothMount>
          {getContentsPerPage().map((item: { thumbnailUrl: string; video_id: number; title: string; description: string; uploaderName: string; uploadTime: string; }) => (
            <ContentCard
              endpoint="valorant"
              thumbnailURL={item.thumbnailUrl}
              videoId={item.video_id}
              title={item.title}
              description={item.description}
              author={item.uploaderName}
              date={item.uploadTime}
            />
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

export default ValorantPage;
