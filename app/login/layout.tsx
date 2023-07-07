import "@styles/styles.css";
import { StateProvider } from "@context/StateProvider";
import { DataProvider } from "@context/DataProvider";
export const metadata = {
  title: "Đăng nhập",
  description: "Sàn việc làm cần thơ",
};

type LoginLayoutProps = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body>
        <DataProvider>
          <StateProvider>
            <div className="bg-[rgba(0,0,0,0.3)] w-screen h-screen ">
              {children}
            </div>
          </StateProvider>
        </DataProvider>
      </body>
    </html>
  );
}
