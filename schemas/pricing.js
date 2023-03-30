export default {
    type: 'document',
    name: 'pricing',
    title: 'Pricing',
    fields: [
      {
        title: 'Heading',
        name: 'heading',
        type: 'string',
      },
      {
        title: 'Price',
        name: 'price',
        type: 'string',
      },
      {
        title: 'Sub Sections',
        name: 'subSections',
        type: 'array',
        of: [
          {
            title: 'Sub Section',
            name: 'subSection',
            type: 'object',
            fields: [
              {
                title: 'Sub Heading',
                name: 'subHeading',
                type: 'string',
              },
              {
                title: 'Image',
                name: 'image',
                type: 'image',
              },
              {
                title: 'Description',
                name: 'description',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };