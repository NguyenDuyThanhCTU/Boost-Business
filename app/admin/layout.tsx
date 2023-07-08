import Header from "@components/Admin/Header/Header";
import Verify from "@components/Admin/Item/Verify";
import Siderbar from "@components/Admin/Sidebar/Siderbar";
import "@styles/styles.css";

export const metadata = {
  title: "Dashboard",
  description: "Sàn việc làm Cần Thơ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen font-LexendDeca flex">
        <Verify />
        <div className="w-[25%] h-screen bg-blue-400">
          <Siderbar />
        </div>
        <div className="w-[75%] h-screen flex flex-col">
          <div className="h-[10%] bg-red-400">
            <Header />
          </div>
          <div className="h-[90%] bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
