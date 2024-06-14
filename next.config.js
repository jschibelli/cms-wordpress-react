if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1), // Remove the trailing colon from the protocol
        hostname, // Hostname from the WordPress API URL
        port, // Port from the WordPress API URL
        pathname: `${pathname}/**`, // Pathname from the WordPress API URL, allowing all paths
      },
      { protocol: "https", hostname: "https://vfo.fzi.mybluehost.me/" },
      { protocol: "https", hostname: "secure.gravatar.com" },
      { protocol: "https", hostname: "i0.wp.com" },
    ],
  },
};
