const BASE = "http://ec2-54-247-19-173.eu-west-1.compute.amazonaws.com:8000";

export const endpoints = {
  partners: `${BASE}/search`,
  sign_in: `${BASE}/sign-in`,
  sign_up: {
    migrant: `${BASE}/signup/migrant`,
    volunteer: `${BASE}/signup/volunteer`,
  },
};
