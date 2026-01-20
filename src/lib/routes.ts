const base = import.meta.env.BASE_URL;

export const routes = {
  home: () => base,
  portfolio: () => `${base}portfolio/`,
  projects: () => `${base}projects/`,
  videos: () => `${base}videos/`,
  repositories: () => `${base}repositories/`,
  blog: {
    index: () => `${base}blog/`,
    post: (id: string) => `${base}blog/${id}/`,
  },
};
