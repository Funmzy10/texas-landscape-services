import { services, siteUrl } from "@/lib/data";

export default function sitemap() {
  const paths = ["", "/work", "/services", "/about", "/contact", "/privacy", ...services.map((service) => `/services/${service.slug}`)];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
