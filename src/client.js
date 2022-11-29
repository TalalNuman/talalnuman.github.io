import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "zli4c48o",
  dataset: "production",
  useCdn: true,
  token: "skChOdIRrTSueXzcQObPByExKShCZMfjrYdp87Osr8wpVA1LsPBiwcDxn8qE6H3VkWz4NaWyJXNQlelqwDIwowVOi9udcF1gSVvfV1go3Kwzee921MgHFFT2GV9KceUWujBOmGmDmcG8pmnVGsz16Yrw2DDfQgLDTSfBpo6J0NJkqsn2Xm4g",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
