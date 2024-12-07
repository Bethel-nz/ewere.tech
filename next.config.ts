import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
 
const nextConfig: NextConfig = {
  /* config options here */
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
};
 
// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);