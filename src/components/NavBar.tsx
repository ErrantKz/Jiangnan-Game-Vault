import { Link } from "react-router";

function NavBar() {
  const statusCode = localStorage.getItem("statusCode");
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              江南水师
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/developer"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            >
              关于
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
            >
              注册
            </Link>

            {statusCode ? (
              <Link
                to="/user"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              >
                我的
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors"
              >
                登录
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
