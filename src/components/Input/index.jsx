import { Container, InputS } from "./styles";

export const Input = ({
  label,
  value,
  onChange,
  isTextarea = false,
  children,
  register,
  name,
  rules,
}) => {
  return (
    <Container>
      <label htmlFor="">{label}</label>
      {isTextarea ? (
        <textarea
          {...register(name, rules)}
          value={value}
          onChange={onChange}
          type="text"
        />
      ) : (
        <InputS
          {...register(name, rules)}
          value={value}
          onChange={onChange}
          type="text"
        />
      )}
      {children}
    </Container>
  );
};
