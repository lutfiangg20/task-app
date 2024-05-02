import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="m-4">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
