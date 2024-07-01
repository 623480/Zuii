export const checkLoginValues = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  if (!isEmailValid) return "Email ID is not valid";
  if (password.length < 6) return "password should be more than 5 digits";

  return null;
};

export const checkSignupValues = (email, password, confirmPassword) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordMatched = password === confirmPassword;

  if (!isEmailValid) return "Email ID is not valid";
  if (password.length < 6) return "password should be more than 5 digits";
  if (!isPasswordMatched) return "Passwords didn't Matched";

  return null;
};
