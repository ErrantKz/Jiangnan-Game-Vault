import SmoothMount from "../animation/SmoothMount";
import { useState, useEffect } from "react";
import instance from "../api/axios";
import { jwtDecode } from "jwt-decode";


interface Form {
  username: string;
  password: string;
}

interface UserInfo{
  alias:string;
  userId:number;
  registrationTime:string;
}

function LoginPage() {
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [credentials, setCredentials] = useState<Form>({
    username: "",
    password: "",
  });

  useEffect(() => {
    setError("");
  }, [credentials]);

  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await instance.post(
        "/login",
        credentials
      );
      const decoded:UserInfo = jwtDecode(response.data.data);
      if (response?.data.status === 1) {
        setLoginSuccess("登录成功");
        localStorage.setItem("jwtToken",response.data.data);
        localStorage.setItem("decodedAlias",decoded.alias);
        localStorage.setItem("decodedId",decoded.userId.toString());
        localStorage.setItem("decodedTime",decoded.registrationTime);
        localStorage.setItem("statusCode",response.data.status);       
        setTimeout(() => window.location.href = "/user", 200);
      } else {
        setError(response.data.message);
        console.log(error);
      }
    } catch (err: any) {
      if (err?.message === "Network Error") setError("网络错误,无法连接至服务器");
      if(err?.message==='Request failed with status code 401') setError(err.response.data.message);
    }
  };

  return (
    <div className="min-h-187 bg-white flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
        <SmoothMount>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">登录界面</h1>
            <p className="text-gray-500">登录以继续</p>

            <div className="text-red-500 text-sm"></div>
          </div>

          {loginSuccess && <div className="text-green-500 text-sm text-center">{loginSuccess}</div>}

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                账号
              </label>
              <input
                type="text"
                name="username"
                value={credentials?.username}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Admin"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <input
                type="password"
                name="password"
                value={credentials?.password}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="••••••••"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
            >
              登录
            </button>
          </form>

          <div className="mt-6 text-center text-sm space-y-2">

            <p className="text-gray-500">
              暂无账号?

              <a
                href="/register"
                className="text-blue-500 hover:text-blue-600 transition-colors"
              >
                注册
              </a>

            </p>
          </div>
        </SmoothMount>
      </div>
    </div>
  );
}

export default LoginPage;
