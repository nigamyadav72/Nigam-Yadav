import { Helmet } from "react-helmet-async";

/**
 * Reusable SEO component for per-page meta tags.
 * This ensures each route has unique, crawlable metadata.
 */
export default function SEO({
  title = "Nigam Yadav | Full-Stack Developer & AI Enthusiast",
  description = "Portfolio of Nigam Yadav, a Full-Stack Developer specializing in React, Node.js, and AI. Explore my projects, skills, and experience in building modern web applications.",
  path = "/",
  image = "https://nigamyadav.com.np/og-image.png",
}) {
  const siteUrl = "https://nigamyadav.com.np";
  const url = `${siteUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
