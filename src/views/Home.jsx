import Features from "../Components/Home/Features";
import Header from "../Components/Home/Header";
import MainHome from "../Components/Home/MainHome";

function Home() {
  return (
    <div className="py-2 px-[1rem] lg:py-8 lg:px-[8rem]  bg-gradient-to-br from-[#a1c4fd] to[#c2e9fb]">
      <Header />
      <MainHome>
        <Features />
      </MainHome>
    </div>
  );
}

export default Home;
