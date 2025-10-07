"use client";
interface IProps {
  children: React.ReactNode;
}

const PublicDashboardLayout = ({ children }: IProps) => {
  return (
    <div>
      <h1>Children Check</h1>
      {children}
    </div>
  );
};

export default PublicDashboardLayout;
