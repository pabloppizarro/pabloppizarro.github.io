const API = {
  url: "/data/",
  get: async (path) => {
    const res = await fetch(`${API.url}/${path}`);
    return await res.json();
  },
};

export default API;
