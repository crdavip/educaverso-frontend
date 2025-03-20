import { query } from "./strapi";

export const getUsers = async () => {
  const { data, meta } = await query(`user-details?populate=*`);
  return { data, pagination: meta.pagination };
};

export const getUsersByCategory = async (category: string) => {
  const { data, meta } = await query(`user-details?filters[category][slug][$contains]=${category}&populate=*`);
  return { data, pagination: meta.pagination };
};

export const getUserByUserName = async (username: string) => {
  const { data } = await query(`user-details?filters[username][$contains]=${username}&populate=*`);
  return { data };
};
