import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {   
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav />
      </div>
            <div className="flex-grow p-6 md:overflow md:overflow-hidden">
            {children}
            </div>
    </div>
  );
}