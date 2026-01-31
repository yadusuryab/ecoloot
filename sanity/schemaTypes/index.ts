import { type SchemaTypeDefinition } from 'sanity'
export const categorySchema = {
  name: 'category' as const,
  type: 'document' as const,
  title: 'Category',
  fields: [
    {
      name: 'name',
      type: 'string' as const,
      title: 'Category Name',
      description: "The name of the category (e.g., Casual Dresses, Evening Gowns, Wedding Dresses).",
    },
    {
      name: 'slug',
      type: 'slug' as const,
      title: 'Slug',
      description: 'A unique identifier for the category used in URLs.',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
};

export const bannerSchema = {
  name: 'banner' as const,
  type: 'document' as const,
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string' as const,
      title: 'Banner Title',
      description: 'Main headline for the banner',
    },
    {
      name: 'subtitle',
      type: 'string' as const,
      title: 'Subtitle',
      description: 'Secondary text or tagline',
    },
    {
      name: 'mediaType',
      type: 'string' as const,
      title: 'Media Type',
      description: 'Choose between image or video for the banner background',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio' as const,
      },
      initialValue: 'image',
    },
    {
      name: 'image',
      type: 'image' as const,
      title: 'Banner Image',
      description: 'Main banner image (recommended size: 1920x600px)',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }: { parent: any }) => parent?.mediaType === 'video',
    },
    {
      name: 'video',
      type: 'file' as const,
      title: 'Banner Video',
      description: 'Main banner video (recommended: MP4 format, max 30MB)',
      options: {
        accept: 'video/mp4,video/webm,video/ogg',
      },
      hidden: ({ parent }: { parent: any }) => parent?.mediaType === 'image',
    },
    {
      name: 'videoPoster',
      type: 'image' as const,
      title: 'Video Poster',
      description: 'Thumbnail image for the video (displayed before video loads)',
      hidden: ({ parent }: { parent: any }) => parent?.mediaType === 'image',
    },
    {
      name: 'buttonText',
      type: 'string' as const,
      title: 'Button Text',
      description: 'Text displayed on the call-to-action button',
    },
    {
      name: 'buttonLink',
      type: 'string' as const,
      title: 'Button Link',
      description: 'URL or path where the button should lead',
    },
    {
      name: 'textPosition',
      type: 'string' as const,
      title: 'Text Position',
      description: 'Position of the text content on the banner',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio' as const,
      },
      initialValue: 'center',
    },
    {
      name: 'textColor',
      type: 'string' as const,
      title: 'Text Color',
      description: 'Color scheme for the text content',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Dark', value: 'dark' },
        ],
        layout: 'radio' as const,
      },
      initialValue: 'dark',
    },
    {
      name: 'active',
      type: 'boolean' as const,
      title: 'Active',
      description: 'Toggle to show/hide this banner',
      initialValue: true,
    },
    {
      name: 'order',
      type: 'number' as const,
      title: 'Order',
      description: 'Display order (lower numbers appear first)',
      initialValue: 0,
    },
    {
      name: 'startDate',
      type: 'datetime' as const,
      title: 'Start Date',
      description: 'When this banner should start appearing',
    },
    {
      name: 'endDate',
      type: 'datetime' as const,
      title: 'End Date',
      description: 'When this banner should stop appearing',
    },
  ],
};
export const sizeChartSchema = {
  name: 'sizeChart',
  type: 'object',
  title: 'Size Chart',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'measurements',
      type: 'array',
      title: 'Sizes',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'size', type: 'string', title: 'Size' },
            { name: 'chest', type: 'string', title: 'Chest' },
            { name: 'length', type: 'string', title: 'Length' },
          ],
        },
      ],
    },
  ],
};


export const productSchema = {
  name: 'product' as const,
  type: 'document' as const,
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string' as const,
      title: 'Product Name',
      description: 'The name of the dress.',
    },
    {
      name: 'category',
      type: 'reference' as const,
      title: 'Category',
      description: 'The category this dress belongs to.',
      to: [{type: 'category' as const}],
    },
    {
      name: 'fabric',
      type: 'string' as const,
      title: 'Fabric',
      description: 'The fabric material of the dress (e.g., Silk, Cotton, Linen, Chiffon, Satin).',
    },
    {
      name: 'careInstructions',
      type: 'text' as const,
      title: 'Care Instructions',
      description: 'Instructions for cleaning and maintaining the dress.',
    },
    {
      name: 'dressType',
      type: 'string' as const,
      title: 'Dress Type',
      description: 'The style or type of dress.',
      options: {
        list: [
          { title: 'A-Line', value: 'a-line' },
          { title: 'Bodycon', value: 'bodycon' },
          { title: 'Maxi', value: 'maxi' },
          { title: 'Midi', value: 'midi' },
          { title: 'Mini', value: 'mini' },
          { title: 'Shift', value: 'shift' },
          { title: 'Wrap', value: 'wrap' },
          { title: 'Ball Gown', value: 'ball-gown' },
          { title: 'Sheath', value: 'sheath' },
          { title: 'Fit and Flare', value: 'fit-flare' },
        ],
        layout: 'dropdown' as const
      }
    },
    {
      name: 'sizes',
      type: 'array' as const,
      title: 'Available Sizes',
      description: 'The sizes available for this dress.',
      of: [{type: 'string' as const}],
      options: {
        list: [
          {title: 'XS', value: 'xs'},
          {title: 'S', value: 's'},
          {title: 'M', value: 'm'},
          {title: 'L', value: 'l'},
          {title: 'XL', value: 'xl'},
          {title: 'XXL', value: 'xxl'},
          {title: '0', value: '0'},
          {title: '2', value: '2'},
          {title: '4', value: '4'},
          {title: '6', value: '6'},
          {title: '8', value: '8'},
          {title: '10', value: '10'},
          {title: '12', value: '12'},
          {title: '14', value: '14'},
          {title: '16', value: '16'},
        ]
      }
    },
    {
      name: 'colors',
      type: 'array' as const,
      title: 'Available Colors',
      description: 'The colors available for this dress.',
      of: [{type: 'string' as const}],
    },
    {
      name: 'length',
      type: 'string' as const,
      title: 'Length',
      description: 'The length of the dress.',
      options: {
        list: [
          { title: 'Mini', value: 'mini' },
          { title: 'Knee Length', value: 'knee-length' },
          { title: 'Tea Length', value: 'tea-length' },
          { title: 'Midi', value: 'midi' },
          { title: 'Maxi', value: 'maxi' },
          { title: 'Ankle Length', value: 'ankle-length' },
        ],
        layout: 'dropdown' as const
      }
    },
    {
      name: 'neckline',
      type: 'string' as const,
      title: 'Neckline',
      description: 'The style of the neckline.',
      options: {
        list: [
          { title: 'V-Neck', value: 'v-neck' },
          { title: 'Round Neck', value: 'round-neck' },
          { title: 'Square Neck', value: 'square-neck' },
          { title: 'Sweetheart', value: 'sweetheart' },
          { title: 'Halter', value: 'halter' },
          { title: 'Boat Neck', value: 'boat-neck' },
          { title: 'Off-Shoulder', value: 'off-shoulder' },
          { title: 'High Neck', value: 'high-neck' },
        ],
        layout: 'dropdown' as const
      }
    },
    {
      name: 'sleeveType',
      type: 'string' as const,
      title: 'Sleeve Type',
      description: 'The type of sleeves.',
      options: {
        list: [
          { title: 'Sleeveless', value: 'sleeveless' },
          { title: 'Cap Sleeves', value: 'cap-sleeves' },
          { title: 'Short Sleeves', value: 'short-sleeves' },
          { title: 'Three-Quarter Sleeves', value: 'three-quarter-sleeves' },
          { title: 'Long Sleeves', value: 'long-sleeves' },
          { title: 'Five Sleeves', value: 'five-sleeves' },
          { title: 'Bell Sleeves', value: 'bell-sleeves' },
          { title: 'Puff Sleeves', value: 'puff-sleeves' },
        ],
        layout: 'dropdown' as const
      }
    },
    {
      name: 'sleeveLength',
      type: 'string' as const,
      title: 'Sleeve Length',
      description: 'The length of the sleeves.',
      options: {
        list: [
          { title: 'Sleeveless', value: 'sleeveless' },
          { title: 'Short', value: 'short' },
          { title: 'Three-Quarter', value: 'three-quarter' },
          { title: 'Long', value: 'long' },
        ],
        layout: 'dropdown' as const
      }
    },
    {
      name: 'images',
      type: 'array' as const,
      title: 'Images',
      of: [{type: 'image' as const}],
      description: 'Multiple images of the dress from different angles.',
    },
    {
      name: 'price',
      type: 'number' as const,
      title: 'Price',
      description: 'The original price of the dress.',
    },
    {
      name: 'offerPrice',
      type: 'number' as const,
      title: 'Offer Price',
      description: 'The discounted price of the dress (if on sale).',
    },
    {
      name: 'description',
      type: 'text' as const,
      title: 'Description',
      description: 'A detailed description of the dress including features and occasion.',
    },
    {
      name: 'sizeChart',
      type: 'sizeChart' ,
      title: 'Size Chart',
      description: 'Detailed size measurements and guide for this product',
    },
    {
      name: 'soldOut',
      type: 'boolean' as const,
      title: 'Sold Out',
      description: 'Toggle to mark the dress as sold out.',
      initialValue: false,
    },
    {
      name: 'featured',
      type: 'boolean' as const,
      title: 'Featured Product',
      description: 'Toggle to feature this dress on the homepage.',
      initialValue: false,
    },
    {
      name: 'occasion',
      type: 'array' as const,
      title: 'Occasion',
      description: 'Suitable occasions for this dress.',
      of: [{type: 'string' as const}],
      options: {
        list: [
          {title: 'Casual', value: 'casual'},
          {title: 'Formal', value: 'formal'},
          {title: 'Wedding', value: 'wedding'},
          {title: 'Party', value: 'party'},
          {title: 'Office', value: 'office'},
          {title: 'Cocktail', value: 'cocktail'},
          {title: 'Beach', value: 'beach'},
          {title: 'Vacation', value: 'vacation'},
        ]
      }
    },
  ],
};
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categorySchema, productSchema, bannerSchema,sizeChartSchema]
}

