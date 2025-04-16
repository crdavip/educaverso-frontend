import { ContentTypeConfig } from "@/interfaces";

export const contentTypesConfig: Record<string, ContentTypeConfig> = {
    blogs: {
        label: "Blog",
        searchFields: ["title", "description"],
        populate: {
          image: true,
          userDetail: {
            populate: {
              category: true,
              user: true,
              profileImage: true,
            },
          },
        },
        getCategory: (item) => item.userDetail?.category?.name || null,
        getTitle: (item) => item.title || "Sin título",
        getImage: (item) => item.image?.url || null,
        getSlug: (item) => item.slug || "",
        getUrl: (item) => `/blog/${item.slug}`,
        getAuthor: (item) =>
          item.userDetail?.user?.username
            ? {
                username: item.userDetail.user.username,
                profileImage: item.userDetail.profileImage?.url || null,
              }
            : null,
      },
  portfolios: {
    label: "Portafolio",
    searchFields: ["title", "description"],
    populate: {
      images: true,
      userDetail: {
        populate: {
          category: true,
          user: true,
          profileImage: true,
        },
      },
    },
    getCategory: (item) => item.userDetail?.category?.name || null,
    getTitle: (item) => item.title || "Sin título",
    getImage: (item) => item.images?.[0]?.url || null,
    getSlug: (item) => item.slug || "",
    getUrl: (item) => `/portafolio/${item.slug}`,
    getAuthor: (item) =>
      item.userDetail?.user?.username
        ? {
            username: item.userDetail.user.username,
            profileImage: item.userDetail.profileImage?.url || null,
          }
        : null,
  },
  "user-details": {
    label: "Profesional",
    searchFields: ["firstname", "lastname", "description", "user.username"],
    populate: {
      profileImage: true,
      category: true,
      user: true,
    },
    getCategory: (item) => item.category?.name || null,
    getTitle: (item) => `${item.firstname} ${item.lastname}`,
    getImage: (item) => item.profileImage?.url || "/avatar-default.jpg",
    getSlug: (item) => item.user?.username || "",
    getUrl: (item) => `/${item.user?.username}`,
    getAuthor: () => null,
  },
};
