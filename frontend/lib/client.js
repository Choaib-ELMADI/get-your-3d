import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectID: process.env.PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.PROJECT_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);