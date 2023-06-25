export function getApiURL(): string {
  if (process.env.BUILD_TYPE === "uat")
    return `${process.env.REACT_APP_BACKEND_URL}/api`;
  if (process.env.BUILD_TYPE === "dev")
    return `${process.env.REACT_APP_BACKEND_URL}/api`;
  if (process.env.BUILD_TYPE === "uat")
    return `${process.env.REACT_APP_BACKEND_URL}/api`;
  if (process.env.BUILD_TYPE === "dev")
    return `${process.env.REACT_APP_BACKEND_URL}/api`;
  if (process.env.BUILD_TYPE === "local") return "http://localhost:1337/api";
  if (process.env.BUILD_TYPE === "prod")
    return `${process.env.REACT_APP_BACKEND_URL}/api`;
  return `${process.env.REACT_APP_BACKEND_URL}/api`;
}
