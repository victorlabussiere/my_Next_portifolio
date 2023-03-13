/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TOKEN: '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',
    BASE_URL: "https://api.github.com/",
    BASE_USER: "victorlabussiere",
    DOWNLOAD_API: "https://api-download-victor-resume.onrender.com/download",
    MAIL_API: 'https://api-download-victor-resume.onrender.com/mail'
  }
}

export default nextConfig
