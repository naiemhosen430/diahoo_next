import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center flex items-center justify-centerl col-span-3 h-screen overflow-y-auto custom-scrollbar-hidden">
      <div className="w-8/12 m-auto text-centerss text-white">
        <h1 className="text-6xl font-bold py-4">404</h1>
        <h4>Sorry Page Not Found !</h4>

        <div className="py-4">
          <Link className="border bg-transparent hover:bg-white hover:text-blackss rounded-xl p-2 px-4 text-white" href="/">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}
