import { config, fields, singleton } from "@keystatic/core";

// When a Keystatic Cloud project is configured (via env var), content is
// managed through Keystatic Cloud so editors can sign in without a GitHub
// account. Otherwise we fall back to local file storage for development.
const cloudProject = process.env.NEXT_PUBLIC_KEYSTATIC_CLOUD_PROJECT;

const homepageGalleryTip =
  "Up to 12 starred photos appear on the homepage (in this order). Any extras still show on the full Gallery page.";
const homepageReviewsTip =
  "Up to 6 starred reviews appear on the homepage (in this order). Any extras still show on the full Reviews page.";

const gallery = singleton({
  label: "Gallery photos",
  path: "src/content/gallery/",
  schema: {
    photos: fields.array(
      fields.object({
        image: fields.image({
          label: "Photo",
          directory: "public/images/gallery",
          publicPath: "/images/gallery",
          validation: { isRequired: true },
        }),
        alt: fields.text({
          label: "Description (alt text)",
          description: "Describe the photo for accessibility and SEO.",
          validation: { length: { min: 1 } },
        }),
        featured: fields.checkbox({
          label: "Show on homepage",
          description: homepageGalleryTip,
          defaultValue: false,
        }),
      }),
      {
        label: "Photos",
        itemLabel: (props) => props.fields.alt.value || "Photo",
      }
    ),
  },
});

const story = singleton({
  label: "Our Story photos",
  path: "src/content/story/",
  schema: {
    photos: fields.array(
      fields.object({
        image: fields.image({
          label: "Photo",
          directory: "public/images/story",
          publicPath: "/images/story",
          validation: { isRequired: true },
        }),
        alt: fields.text({
          label: "Description (alt text)",
          validation: { length: { min: 1 } },
        }),
      }),
      {
        label: "Photos",
        description:
          "The 'Our Story' section is designed for 4 photos (the first 4 are shown).",
        itemLabel: (props) => props.fields.alt.value || "Photo",
      }
    ),
  },
});

const reviews = singleton({
  label: "Reviews",
  path: "src/content/reviews/",
  schema: {
    items: fields.array(
      fields.object({
        name: fields.text({
          label: "Customer name",
          validation: { length: { min: 1 } },
        }),
        body: fields.text({
          label: "Review",
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        rating: fields.integer({
          label: "Star rating",
          defaultValue: 5,
          validation: { min: 1, max: 5 },
        }),
        featured: fields.checkbox({
          label: "Show on homepage",
          description: homepageReviewsTip,
          defaultValue: false,
        }),
      }),
      {
        label: "Reviews",
        itemLabel: (props) => props.fields.name.value || "Review",
      }
    ),
  },
});

export default config({
  storage: cloudProject ? { kind: "cloud" } : { kind: "local" },
  cloud: cloudProject ? { project: cloudProject } : undefined,
  ui: {
    brand: { name: "Lee Roofing" },
  },
  singletons: { gallery, story, reviews },
});
