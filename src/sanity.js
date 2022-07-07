import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const sanity = SanityClient({
  projectId: "2w7j8jyv",
  dataset: "production",
  apiVersion: "2022-06-03",
  token: "",
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanity);
