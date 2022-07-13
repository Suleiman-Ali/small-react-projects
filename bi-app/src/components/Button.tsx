interface ButtonProps {
  disabled: boolean;
  type: 'button' | 'submit';
  cls: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
}

function Button({
  disabled,
  type,
  cls,
  onClick,
  value,
}: ButtonProps): JSX.Element {
  return (
    <button disabled={disabled} type={type} className={cls} onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
