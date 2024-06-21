import React, { ChangeEvent } from "react";

type InputProps = {
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  type: string;
  label: string;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  type,
  label,
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
