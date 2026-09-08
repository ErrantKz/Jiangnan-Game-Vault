import { useState, useRef } from "react";
import SmoothMount from "../animation/SmoothMount";
import instance from "../api/axios";

const UploaderPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(0);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const categories = ["三角洲行动","无畏契约","APEX","CSGO"];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmitCopy = async (e: React.FormEvent) => {
    e.preventDefault();

    const name=localStorage.getItem("decodedAlias")!;

    if (!title || !category || !selectedFile) {
      setUploadStatus("请填写所有必填字段并选择视频文件");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("categoryId", category.toString());
    formData.append("file", selectedFile);
    formData.append("uploaderName",name);

    formData.forEach((value, key) => {
      console.log(key, ':', value);
    });

    try {
      setUploadStatus("上传中...");
      const response = await instance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });


      if (response?.data.status===1) {
        setUploadStatus("上传成功！");
        // 清空表单
        setTitle("");
        setDescription("");
        setCategory(0);
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (error) {
      setUploadStatus("上传失败，请重试");
      console.error("Upload error:", error);
    }
  };

  return (
    <SmoothMount>
      <div className="mt-18">
        <form
          onSubmit={handleSubmitCopy}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">上传视频</h1>

          {/* 视频预览 */}
          {previewUrl && (
            <div className="mb-6">
              <video
                src={previewUrl}
                controls
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}

          {/* 文件上传 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              选择视频文件(不超过160MB)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="video/*"
              ref={fileInputRef}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
            />
          </div>

          {/* 标题输入 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              标题
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          {/* 描述输入 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              描述
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
          </div>

          {/* 分类下拉 */}
          <div className="mb-8 relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              类型
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories[category-1] || "选择分类"}
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isCategoryOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {categories.map((cat,index) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setCategory(index+1);
                        setIsCategoryOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 状态提示 */}
          {uploadStatus && (
            <div
              className={`mb-4 text-sm p-3 rounded-lg ${
                uploadStatus.includes("成功")
                  ? "bg-green-100 text-green-800"
                  : uploadStatus.includes("失败")
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {uploadStatus}
            </div>
          )}

          {/* 提交按钮 */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            上传视频
          </button>
        </form>
      </div>
    </SmoothMount>
  );
};

export default UploaderPage;
