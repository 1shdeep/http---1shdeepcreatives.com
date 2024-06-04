const Constants = {
    BASE_URL: 'http://localhost:3001/api',
    getTokens: () => ({
      adminloggedIn: localStorage.getItem('adminToken')
    })
  };
  
  export default Constants;