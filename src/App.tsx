import SmoothMount from "./animation/SmoothMount";

function App() {
  return (
    <>
      <div className="flex pt-16">
        <main className="flex-1 ml-64 p-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-sm">
              <SmoothMount>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  欢迎来到江南水师
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  欢迎来看gop,vp,ap,op,农p,洲/舟p,潮p的精彩视频。
                </p>
              </SmoothMount>
            </div>

            <SmoothMount>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <a href="https://heymannice.github.io/htmlCanvas/">
                  <div
                    key={item}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold mb-2">开发中{item}</h3>
                    <p className="text-gray-600">To be continued...</p>
                  </div>
                  </a>
                ))}
              </div>
            </SmoothMount>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
