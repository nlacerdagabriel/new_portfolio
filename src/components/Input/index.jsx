import { Container, InputS } from "./styles";

export const Input = ({
  label,
  value,
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
          type="text"
        />
      ) : (
        <InputS
          {...register(name, rules)}
          value={value}
          type="text"
        />
      )}
      {children}
    </Container>
  );
};
