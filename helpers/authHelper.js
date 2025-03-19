export const authHeader = () => {
  return {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTZhY2JjYjIwMzIxNmM1MzVmNzA2MDgiLCJlbWFpbCI6InN1cGVyYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxODM2NjA0fQ.nIxQT7ECXsmksqIz-jusmFhRzzm-cImYfabmq5nch5E",
    "Content-Type": "application/json",
    "Content-Security-Policy": "default-src 'self',frame-src 'self'",
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Frame-Options": "SAMEORIGIN",
    "ngrok-skip-browser-warning": true,
  };
};
export const authHeader_Without_Token = () => {
  return {
    "Content-Type": "application/json",
    "Content-Security-Policy": "default-src 'self',frame-src 'self'",
    "Access-Control-Allow-Origin": "*",
    "X-Content-Type-Options": "nosniff",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "X-Frame-Options": "SAMEORIGIN",
    "ngrok-skip-browser-warning": true,
  };
};
export const setSession = (sessionObj) => {
  localStorage.setItem("authUser", JSON.stringify(sessionObj));
};
export const getSession = () => {
  return JSON.parse(localStorage?.getItem("authUser"));
};
export const deleteSession = () => {
  localStorage.removeItem("authUser");
};
export const setLocal = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getLocal = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
