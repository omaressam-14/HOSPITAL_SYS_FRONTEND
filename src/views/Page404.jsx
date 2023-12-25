import Header from "../Components/Home/Header";

function Page404() {
  return (
    <div className="h-screen bg-gradient-to-t from-gray-100 to-white ">
      <Header />
      <div className="flex justify-center items-center flex-col  mt-8">
        <h1 className="font-bold text-[4rem] text-gray-700">404</h1>
        <h1 className="font-bold text-xl text-gray-500">Page Not Found</h1>
        <img src="/404.png" className="w-[30rem]" />
      </div>
    </div>
  );
}

export default Page404;
