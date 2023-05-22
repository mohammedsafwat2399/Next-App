/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
MONGO_URI:"mongodb+srv://mohammed2399safwat:3w6zU79WWxIk34Jd@cluster0.1iweub8.mongodb.net/products-app?retryWrites=true&w=majority",
APP_DEV:"http://localhost:3000",
APP_PROD:"",
  },
  images: {
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
