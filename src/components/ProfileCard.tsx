export default function ProfileCard() {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          {/* 头像占位符 */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <svg 
                className="w-12 h-12 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>
  
          {/* 个人信息 */}
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              {localStorage.getItem("decodedAlias")}
            </h2>
            <p className="text-gray-500 font-mono text-sm">
              ID: {localStorage.getItem("decodedId")}
            </p>
          </div>
  
          {/* 装饰性分隔线 
          <div className="mt-6">
            <div className="border-t border-gray-200"></div>
          </div>*/}
  
          {/* 附加信息区块 */}
          <div className="mt-4 flex justify-around text-center">
            
            {/*<div className="border-l border-gray-200"></div>*/}
            <div>
              <p className="text-gray-600 text-sm">入站时间</p>
              <span className="text-blue-500 font-bold">{localStorage.getItem("decodedTime")}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }