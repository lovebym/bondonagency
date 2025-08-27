export default function StructuredData() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BONDON Agency",
    url: "https://bondon.agency",
    email: "hello@bondon.agency",
  };
  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BONDON Agency",
    url: "https://bondon.agency",
  };
  const json = JSON.stringify([org, site]);
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}


