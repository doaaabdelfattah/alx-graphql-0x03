const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  // Your existing Next.js configuration
};

// Make sure adding Sentry options is the last code to run before exporting
module.exports = withSentryConfig(nextConfig, {
  org: "doaa-inspiring-designs",
  project: "alx-error-handling",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
});
