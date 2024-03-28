import { ReactNode } from "react";
interface IProps {
  children: ReactNode;
}
export default function Container({ children }: IProps) {
  return <div className="container mx-auto">{children}</div>;
}
