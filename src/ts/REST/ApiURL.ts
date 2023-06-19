export function getApiURL(): string {
  if (process.env.BUILD_TYPE === "uat") return "http://16.16.25.190:1337/api";
  if (process.env.BUILD_TYPE === "dev") return "http://16.16.25.190:1337/api";
  if (process.env.BUILD_TYPE === "uat") return "http://16.16.25.190:1337/api";
  if (process.env.BUILD_TYPE === "dev") return "http://16.16.25.190:1337/api";
  if (process.env.BUILD_TYPE === "local") return "http://localhost:1337/api";
  if (process.env.BUILD_TYPE === "prod") return "http://16.16.25.190:1337/api";
  return "http://16.16.25.190:1337/api";
}
