const BASE = "https://lexiii.co.uk";

export const endpoints = {
  partners: `${BASE}/search`,
  sign_in: `${BASE}/signin`,
  sign_up: {
    migrant: `${BASE}/signup/migrant`,
    volunteer: `${BASE}/signup/volunteer`,
  },
};
