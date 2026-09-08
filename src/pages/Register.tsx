import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import SmoothMount from "../animation/SmoothMount";
import instance from "../api/axios";


function RegisterPage() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  const [networkError,setNetworkError]=useState('');
  const [registerSuccess,setRegisterSuccess]=useState('');

  async function handleRegister(data:FieldValues){
    try{
      const response=await instance.post("/register",data);

      if(response?.data.message==="success") setRegisterSuccess(response.data.message);
      if(!localStorage.getItem("decodedId")) setTimeout(()=>window.location.href='/login',250);

      console.log(response);

    }catch(err:any){
      console.log(err);
      if(err?.message==="Network Error") setNetworkError(err.message);
    }
  }

  return (

      <div className="min-h-187 bg-white flex items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
          <SmoothMount>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                注册界面
              </h1>
              <div className="text-red-500 text-sm"></div>
            </div>

            {registerSuccess && <div className="text-green-500 text-sm text-center">注册成功</div>}

            {networkError && <div className="text-red-500 text-sm text-center">无法连接至服务器</div>}

            <form className="space-y-6" onSubmit={handleSubmit(data=>handleRegister(data))}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  昵称
                </label>
                <input
                  type="text"
                  {...register('alias',{required:true})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

    

              {errors?.alias?.type==='required' && <p className="text-red-500  text-sm">昵称不能为空</p>}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  账号
                </label>
                <input
                  type="text"
                  {...register('username',{required:true,minLength:3})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  
                />
              </div>

              {errors?.username?.type==='required' && <p className="text-red-500  text-sm">账户不能为空</p>}
              {errors?.username?.type==='minLength' && <p className="text-red-500  text-sm">账户不能少于3个字符</p>}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  密码
                </label>
                <input
                  type="password"
                  {...register('password',{required:true,minLength:6})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>

              {errors?.password?.type==='required' && <p className="text-red-500  text-sm">密码不能为空</p>}
              {errors?.password?.type==='minLength' && <p className="text-red-500  text-sm">密码不能少于6个字符</p>}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
              >
                注册
              </button>
            </form>
          </SmoothMount>
        </div>
      </div>
  );
}

export default RegisterPage;
