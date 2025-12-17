(function () {
  // Get last modified date
  const modifiedISO = new Date(document.lastModified).toISOString();

  // Get page title from og:title or fallback to document title
  const pageTitle =
    document.querySelector("meta[property='og:title']")?.content ||
    document.title;

  // Get canonical URL
  const canonicalLink = document.querySelector("link[rel='canonical']");
  let pageURL = canonicalLink ? canonicalLink.href : window.location.href;

  // Normalize URL: remove trailing slash for consistency except root
  if (pageURL.endsWith('/') && pageURL !== 'https://lekproductions.co.uk/') {
    pageURL = pageURL.slice(0, -1);
  }

  // Optional meta fields
  const datePublished =
    document.querySelector("meta[name='date']")?.content || modifiedISO;
  const pageDescription =
    document.querySelector("meta[name='description']")?.content || "";

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
        "founder": {
          "@id": "https://lekproductions.co.uk/#richard-elliott"
        }
      },
      {
        "@type": "CreativeWork",
        "@id": pageURL,
        "name": pageTitle,
        "author": {
          "@id": "https://lekproductions.co.uk/#richard-elliott"
        },
        "publisher": {
          "@id": "https://lekproductions.co.uk/#lek-productions"
        },
        "dateModified": modifiedISO,
        "datePublished": datePublished,
        "description": pageDescription,
        "inLanguage": "en-GB",
        "url": pageURL
      }
    ]
  };

  // Inject JSON-LD into the head
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(ldJson);
  document.head.appendChild(script);
})();
