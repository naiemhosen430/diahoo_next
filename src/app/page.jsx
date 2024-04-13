import Feed from "./Components/Feed";

export default function Home() {
  return (
    <>
    <div className=" h-screen overflow-y-auto custom-scrollbar-hidden">
      <Feed />
    </div>
    </>
  );
}
