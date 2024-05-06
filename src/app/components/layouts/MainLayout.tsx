import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Navbar />
          <div className="m-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
