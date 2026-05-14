const strapiApiBaseUrl = process.env.STRAPI_API_BASE_URL;

if (!strapiApiBaseUrl) {
  throw new Error("Missing required env var: STRAPI_API_BASE_URL");
}

export const STRAPI_API_BASE_URL = strapiApiBaseUrl;
