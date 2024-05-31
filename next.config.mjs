/** @type {import('next').NextConfig} */
const nextConfig = {
    server: {
        port: process.env.PORT || 3000, // Sử dụng cổng được cung cấp bởi biến môi trường PORT hoặc mặc định là 3000
      },
};

export default nextConfig;
