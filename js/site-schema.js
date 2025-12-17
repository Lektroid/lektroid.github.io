(function () {
  // Get last modified date of the document
  const modifiedISO = new Date(document.lastModified).toISOString();

  // Get page title from og:title or fallback to document title
  const pageTitle =
    document.querySelector("meta[property='og:title']")?.content ||
    document.title;

  // Get canonical URL or fallback to current URL
  const pageURL =
    document.querySelector("link[rel='canonical']")?.href ||
    window.location.href;

  // Get optional datePublished from meta[name='date'] (for static pages)
  const datePublished = document.querySelector("meta[name='date']")?.content;

  // Get optional description from meta[name='description']
  const pageDescription = document.querySelector("meta[name='description']")?.content;

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
        "name": "Richard Elliott",
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
        "inLanguage": "en-GB",
        "url": pageURL
      }
    ]
  };

  // Add datePublished if available
  if (datePublished) {
    ldJson["@graph"][3].datePublished = datePublished;
  }

  // Add description if available
  if (pageDescription) {
    ldJson["@graph"][3].description = pageDescription;
  }

  // Inject JSON-LD into the head
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(ldJson);
  document.head.appendChild(script);
})();
