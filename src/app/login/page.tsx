import MainLayout from "../components/layouts/MainLayout";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col px-auto">
      <div className="mb-2">
        <label htmlFor="username" className="">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full border-2 border-sky-500 focus:border-sky-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full border-2 border-sky-500 focus:border-sky-300 rounded-md"
        />
      </div>
      <div className="mb-2">
        <button className="w-full bg-blue-500 p-2 rounded-xl text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default page;
