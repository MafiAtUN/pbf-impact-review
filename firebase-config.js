// Paste the Firebase web config here to switch feedback from
// download-a-file to submitted-straight-to-Firestore. Until then the site
// falls back to exporting a file, and nothing else changes.
// These two values are not secrets: Firestore security rules are what protect
// the data, and the rules for this project allow create-only, read-never.
window.FB = {
  apiKey: "",
  projectId: "",
  collection: "feedback",
  // Where "Email it back" sends to. Works with no Firebase project at all,
  // and is the fallback the page offers if a Firestore submission fails.
  contact: "islam50@un.org",
};
