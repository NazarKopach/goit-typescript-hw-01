type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<User>>(initialValues: T) {
  const user: User = {
    name: "DefaultName",
    surname: "DefaultSurname",
    email: "",
    password: "",
    ...initialValues,
  };

  console.log("Generics task_4:", user);
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
