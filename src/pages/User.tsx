import SmoothMount from "../animation/SmoothMount";
import ProfileCard from "../components/ProfileCard";

function UserPage() {
  function handleLogout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <SmoothMount>
      <ProfileCard />
      <button
        type="submit"
        className="w-full py-3 px-4 mt-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
        onClick={handleLogout}
      >
        退出登录
      </button>

      <a href="user/upload">
        <button
          type="submit"
          className="w-full py-3 px-4 mt-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
        >
          上传视频
        </button>
      </a>

      <a href="user/myvideo">
        <button
          type="submit"
          className="w-full py-3 px-4 mt-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
        >
          我的视频
        </button>
      </a>
    </SmoothMount>
  );
}

export default UserPage;
