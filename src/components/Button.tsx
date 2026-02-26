"use client";

type Props = {
  children?: string;
};

const Button = ({ children }: Props) => {
  const handleClick = () => {
    alert("Clicked!");
  };

  return <button onClick={handleClick}>{children || "Click me"}</button>;
};

export default Button;
