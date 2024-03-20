import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactNode;
}

export const Button: FC<IProps> = ({
  label,
  icon,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-secondary text-base-100 leading-4 font-bold ${className}`}
      {...props}
    >
      {icon && <span className="icon-container">{icon}</span>}
      {label && <span className="label-container">{label}</span>}
    </button>
  );
};
