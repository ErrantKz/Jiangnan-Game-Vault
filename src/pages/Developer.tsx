import SmoothMount from "../animation/SmoothMount";

function DeveloperPage() {
  return (

        <div className="flex flex-grow items-center justify-center min-h-188 bg-gradient-to-r from-blue-300 to-green-400">
          
            <main className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center transform transition-all hover:scale-105 duration-300">
                <SmoothMount>
              <div className="flex justify-center">
                <div className="aspect-square w-32 md:w-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img
                    src="pictures/avatar.JPG"
                    alt="avatar"
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </div>

              <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
                Yanxi Wang
              </h1>
              <p className="text-gray-600 text-lg">我是瞄准低手</p>
              <a
                href="https://www.bilibili.com/video/BV1Ex4y1z7FU/?spm_id_from=333.337.search-card.all.click"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-6">
                  <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full shadow-md transform transition-all hover:scale-105 duration-300">
                    了解更多
                  </span>
                </div>
              </a>
              </SmoothMount>
            </main>
          
        </div>
  );
}

export default DeveloperPage;
