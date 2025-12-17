(function () {
  // Last modified date in ISO format
  const modifiedISO = new Date(document.lastModified).toISOString();

  // Page title: prefer og:title, fallback to document.title
  const pageTitle = document.querySelector("meta[property='og:title']")?.content || document.title;

  // Canonical URL if present, fallback to current URL
  const canonicalLink = document.querySelector("link[rel='canonical']");
  const pageURL = canonicalLink ? canonicalLink.href : window.location.href;

  // Optional meta fields
  const datePublished = document.querySelector("meta[name='date']")?.content || modifiedISO;
  const pageDescription = document.querySelector("meta[name='description']")?.content || "";

  // JSON-LD schema
  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lekproductions.co.uk/#website",
        "name": "LEK Productions",
        "url": "https://lekproductions.co.uk/"
      },
      {
        "@type": "Person",
        "@id": "https://lekproductions.co.uk/#richard-elliott",
        "name": "Richard Elliott, BSc",
        "alternateName": ["Brainstormer", "Lektroid"],
        "url": "https://lekproductions.co.uk/"
      },
      {
        "@type": "Organization",
        "@id": "https://lekproductions.co.uk/#lek-productions",
        "name": "LEK Productions",
        "url": "https://lekproductions.co.uk/",
        "founder": { "@id": "https://lekproductions.co.uk/#richard-elliott" }
      },
      {
        "@type": "CreativeWork",
        "@id": pageURL,
        "name": pageTitle,
        "author": { "@id": "https://lekproductions.co.uk/#richard-elliott" },
        "publisher": { "@id": "https://lekproductions.co.uk/#lek-productions" },
        "dateModified": modifiedISO,
        "datePublished": datePublished,
        "inLanguage": "en-GB",
        "url": pageURL,
        "description": pageDescription
      }
    ]
  };

  // Inject JSON-LD into head
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(ldJson);
  document.head.appendChild(script);
})();
