import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const sanity = SanityClient({
  projectId: '2w7j8jyv',
  dataset: 'production',
  apiVersion: '2022-06-03',
  token: '',
  // this option enables faster responses
  // but can return stale data at times.
  // recommended for client-side queries
  useCdn: true,
});

export const imageUrlBuilder = ImageUrlBuilder(sanity);