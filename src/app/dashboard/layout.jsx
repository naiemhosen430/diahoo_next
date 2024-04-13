import DashboardNav from "./Components/DashboardNav";



const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  return (
    <>
    <div className="flex justify-center">

    <DashboardNav />
    <div className="lg:w-10/12 lg:p-5 p-2">

        {children}
    </div>
    </div>
    </>
  );
}
