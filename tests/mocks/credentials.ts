import { ICredentials } from "../../src/interfaces/ICredentials";

const goodCredentials: ICredentials = {
  email: "admin@admin.com",
  password: "123456",
};

const wrongCredentials: ICredentials = {
  email: "admin@admin.com",
  password: "124",
};

export { goodCredentials, wrongCredentials };
