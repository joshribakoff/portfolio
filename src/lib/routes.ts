const base = import.meta.env.BASE_URL;

export const routes = {
  home: () => `${base}/`,
  portfolio: () => `${base}/portfolio/`,
  blog: {
    index: () => `${base}/blog/`,
    post: (id: string) => `${base}/blog/${id}/`,
  },
};
