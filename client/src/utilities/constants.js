const Constants = {
  // BASE_URL: "https://1shdeepcreatives.com/api",
  BASE_URL: "http://13.233.10.251:5000/api",
  getTokens: () => ({
    adminloggedIn: localStorage.getItem("adminToken"),
  }),
};

export default Constants;
