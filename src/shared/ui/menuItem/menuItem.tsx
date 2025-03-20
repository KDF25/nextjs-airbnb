"use client";

type Props = {
  onClick: () => void;
  label: string;
};

export const MenuItem: React.FC<Props> = ({ onClick, label }) => {
  return (
    <div
      className=" px-4 py-3 hover:bg-neutral-100 transition font-semibold"
      onClick={onClick}
    >
      {label}
    </div>
  );
};
