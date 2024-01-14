export const HOST = "http://localhost:3001";
const AUTH_ROUTE = `${HOST}/api/auth`;
// export const CHECK_USER_ROUTE = "http://localhost:3001/api/auth/check-user";
// export const ONBOARD_USER_ROUTE = "http://localhost:3001/api/auth/onboard-user";
export const CHECK_USER_ROUTE = `${AUTH_ROUTE}/check-user`;
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboard-user`;