import { ChangeEventHandler } from 'react';

interface SelectProps {
  labelName: string;
  labelCls: string;
  selectId: string;
  selectCls: string;
  selectValue: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
}

function Select({
  labelName,
  labelCls,
  selectId,
  selectCls,
  selectValue,
  onChange,
  options,
}: SelectProps): JSX.Element {
  return (
    <>
      <label htmlFor={selectId} className={labelCls}>
        {labelName}
      </label>

      <select
        className={selectCls}
        id={selectId}
        onChange={onChange}
        value={selectValue}
      >
        {options.map((opt, index) => (
          <option value={index + 1} key={index}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
}

export default Select;
