const error = {
  Error: Invalid src prop (https://bayut-production.s3.eu-central-1.amazonaws.com/image/319009715/6d66e540fd284f46ab9a7bdbcbac91bb) on `next/image`, hostname "bayut-production.s3.eu-central-1.amazonaws.com" is not configured under images in your `next.config.js`
}

const result : {
  const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
	},
};
}

// explanation
const explanation ='Next Js does not allow some images or accept some url so you need to specify the type of image or url you will be using from the next.config file'
