import { Banner } from "../../components";

function Home() {
  return (
    <div className="w-full">
      <Banner />
      <div className="flex h-[400px]">
        <div className="w-1/3 border">Deal daily</div>
        <div className="w-2/3 border">best seller</div>
      </div>
    </div>
  );
}

export default Home;
