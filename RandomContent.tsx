import { ReactNode } from "react";

const RandomContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen grid place-items-center text-5xl font-bold text-center">
      {children}
    </div>
  );
};

export default RandomContent;
