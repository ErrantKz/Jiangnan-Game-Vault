import { useLocation } from "react-router";

function SideBar() {
  const location = useLocation();
  const hasValorantEndPoint = location.pathname.includes("/valorant");
  const hasDeltaForceEndPoint = location.pathname.includes("/deltaforce");
  const hasApexEndPoint = location.pathname.includes("/apex");
  const hasCSEndPoint = location.pathname.includes("/cs");
  return (
    <>
      <aside className="fixed left-0 top-16 h-full bg-white w-64 border-r border-gray-200 shadow-sm overflow-hidden">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
              游戏
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">

          {hasDeltaForceEndPoint ? (
              <a href="/deltaforce">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:bg-opacity-80 bg-blue-50 bg-opacity-80 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/delta-force.png" className="w-11 h-11" />
                  </div>
                  三角洲行动
                </button>
              </a>
            ) : (
              <a href="/deltaforce">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/delta-force.png" className="w-11 h-11" />
                  </div>
                  三角洲行动
                </button>
              </a>
            )}

            {hasValorantEndPoint ? (
              <a href="/valorant">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:bg-opacity-80 bg-blue-50 bg-opacity-80 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/valorant.svg" className="w-11 h-13" />
                  </div>
                  无畏契约
                </button>
              </a>
            ) : (
              <a href="/valorant">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/valorant.svg" className="w-11 h-13" />
                  </div>
                  无畏契约
                </button>
              </a>
            )}

{hasApexEndPoint ? (
              <a href="/apex">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:bg-opacity-80 bg-blue-50 bg-opacity-80 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/apex-legends.ico" className="w-11 h-11" />
                  </div>
                  APEX
                </button>
              </a>
            ) : (
              <a href="/apex">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/apex-legends.ico" className="w-11 h-11" />
                  </div>
                  APEX
                </button>
              </a>
            )}

{hasCSEndPoint ? (
              <a href="/cs">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all focus:bg-opacity-80 bg-blue-50 bg-opacity-80 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/cs2.png" className="w-11 h-11" />
                  </div>
                  CSGO
                </button>
              </a>
            ) : (
              <a href="/cs">
                <button className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                  <div className="grid place-items-center mr-4">
                    <img src="/cs2.png" className="w-11 h-11" />
                  </div>
                  CSGO
                </button>
              </a>
            )}
          </nav>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
