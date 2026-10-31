const bucket = process.env.S3_BUCKET;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Si hay bucket, los assets se piden a S3; si no (desarrollo local), a la raíz
  assetPrefix: bucket
    ? `https://${bucket}.s3.us-east-1.amazonaws.com`
    : undefined,
};

export default nextConfig;