import { ChangeEventHandler } from 'react';

interface InputProps {
  labelName: string;
  labelCls: string;
  inputId: string;
  inputCls: string;
  inputValue: string;
  inputType: string;
  min?: number;
  max?: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({
  labelName,
  labelCls,
  inputId,
  inputCls,
  inputValue,
  inputType,
  min,
  max,
  onChange,
}: InputProps): JSX.Element {
  return (
    <>
      <label htmlFor={inputId} className={labelCls}>
        {labelName}
      </label>
      <input
        min={min}
        max={max}
        type={inputType}
        className={inputCls}
        id={inputId}
        onChange={onChange}
        value={inputValue}
      />
    </>
  );
}

export default Input;
