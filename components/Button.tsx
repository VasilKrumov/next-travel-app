import Image from "next/image";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  icon?: string;
  variant:
    | "btn_dark_green"
    | "btn_light_green"
    | "btn_dark_white"
    | "btn_light_white";
}
export const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {" "}
      {icon && <Image src={icon} alt={title} width={24} height={24} />}{" "}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};
