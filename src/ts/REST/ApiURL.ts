export function getApiURL(): string {
  if (process.env.BUILD_TYPE === "uat") return "https://qubix.qubixstudio.cz/strapi/api";
  if (process.env.BUILD_TYPE === "dev") return "https://qubix.qubixstudio.cz/strapi/api";
  if (process.env.BUILD_TYPE === "uat") return "https://qubix.qubixstudio.cz/strapi/api";
  if (process.env.BUILD_TYPE === "dev") return "https://qubix.qubixstudio.cz/strapi/api";
  if (process.env.BUILD_TYPE === "local") return "http://localhost:1337/api";
  if (process.env.BUILD_TYPE === "prod") return "https://qubixstudio.com/strapi/api";
  return "https://qubix.qubixstudio.cz/strapi/api";
}
