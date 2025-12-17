(function () {

  const modifiedISO = new Date(document.lastModified).toISOString();

  const pageTitle =
    document.querySelector("meta[property='og:title']")?.content ||
    document.title;

  const pageURL =
    document.querySelector("link[rel='canonical']")?.href ||
    window.location.href;

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://lekproductions.co.uk/#richard-elliott",
        "name": "Richard Elliott",
        "alternateName": ["Brainstormer", "Lektroid"],
        "url": "https://lekproductions.co.uk"
      },
      {
        "@type": "Organization",
        "@id": "https://lekproductions.co.uk/#lek-productions",
        "name": "LEK Productions",
        "url": "https://lekproductions.co.uk",
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

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(ldJson, null, 2);
  document.head.appendChild(script);

})();
