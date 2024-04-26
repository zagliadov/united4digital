import { FC, SVGProps } from "react";
import Link from "next/link";

interface IProps {
  fill?: string;
  className?: string;
}
export const LinkedIn: FC<IProps> = ({ fill = "white", className = "hover:bg-gray-50" }) => {
  return (
    <Link
      aria-label="LinkedIn link"
      href="https://www.linkedin.com/in/iryna-omelnytska-1152242bb/recent-activity/all/"
      className={`p-2 rounded-full transition-colors ${className}`}
    >
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0674 0.876953H2.99599C1.82522 0.876953 0.876953 1.82522 0.876953 2.99599V22.0674C0.876953 23.2381 1.82522 24.1864 2.99599 24.1864H22.0674C23.2381 24.1864 24.1864 23.2381 24.1864 22.0674V2.99599C24.1864 1.82522 23.2381 0.876953 22.0674 0.876953ZM8.24486 19.9483H5.11927V9.89136H8.24486V19.9483ZM6.65028 8.45359C5.64268 8.45359 4.82791 7.63669 4.82791 6.63121C4.82791 5.62572 5.64374 4.80989 6.65028 4.80989C7.65471 4.80989 8.4716 5.62678 8.4716 6.63121C8.4716 7.63669 7.65471 8.45359 6.65028 8.45359ZM19.9526 19.9483H16.8291V15.0576C16.8291 13.891 16.8079 12.3908 15.2049 12.3908C13.5785 12.3908 13.3284 13.6611 13.3284 14.9728V19.9483H10.205V9.89136H13.2034V11.2656H13.2458C13.6632 10.4752 14.6825 9.64131 16.2029 9.64131C19.3677 9.64131 19.9526 11.7243 19.9526 14.4325V19.9483Z"
          fill={fill}
        />
      </svg>
    </Link>
  );
};
