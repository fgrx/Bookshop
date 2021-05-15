import { IUser } from "../../src/interfaces/IUser";

const users: IUser[] = [
  {
    id: "1234",
    email: "admin@admin.com",
    password: "$2b$10$1yHdwddAN42gbU1RG7Y31OMoA53/Xanr12jBWBNjAJHnlMbKzHpzK",
    isAdmin: true,
  },
  { id: "456", email: "test@test.com", password: "123456", isAdmin: false },
];

export default users;
