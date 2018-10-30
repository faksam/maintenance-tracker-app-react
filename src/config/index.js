export default {
  apiUrl: process.env.NODE_ENV === 'production'
    ? 'https://maintenancetracker.herokuapp.com/api/v1/' : 'http://localhost:3456/api/v1/',
};
