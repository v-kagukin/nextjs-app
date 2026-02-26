import Link from "next/link";

type Props = {
  children?: string;
  href: string;
  isSelected?: boolean;
  onClick: (url: string) => void;
};

const MenuItem = ({ children, href, isSelected, onClick }: Props) => {
  return (
    <Link
      href={href}
      className={`menu-item ${isSelected ? "selected" : ""}`}
      onClick={() => onClick(href)}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
