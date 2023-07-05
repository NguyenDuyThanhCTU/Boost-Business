export const metadata = {
  title: "sanvieclamcantho.com",
  description: "Sàn việc làm cần thơ",
};

type EmployerLayoutProps = {
  children: React.ReactNode;
};

export default function EmployerLayout({ children }: EmployerLayoutProps) {
  return <div className="text-purple-600">{children}</div>;
}
