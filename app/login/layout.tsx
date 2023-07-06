import "@styles/styles.css";
import { StateProvider } from "@context/StateProvider";
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
        <StateProvider>
          <div className="bg-[rgba(0,0,0,0.3)] w-screen h-screen relative">
            {children}
          </div>
        </StateProvider>
      </body>
    </html>
  );
}
