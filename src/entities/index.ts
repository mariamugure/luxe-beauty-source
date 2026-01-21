/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  postTitle?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  coverImage?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType datetime */
  publishDate?: Date | string;
}


/**
 * Collection ID: brandbenefits
 * Interface for BrandBenefits
 */
export interface BrandBenefits {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  benefitTitle?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  iconImage?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType url */
  linkUrl?: string;
}


/**
 * Collection ID: faqs
 * Interface for FAQs
 */
export interface FAQs {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
  /** @wixFieldType datetime */
  lastUpdated?: Date | string;
}


/**
 * Collection ID: testimonials
 * Interface for Testimonials
 */
export interface Testimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  reviewText?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  customerImage?: string;
  /** @wixFieldType date */
  testimonialDate?: Date | string;
}
