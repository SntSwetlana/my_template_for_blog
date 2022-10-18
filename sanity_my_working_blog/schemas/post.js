const textEditorStyles = [
    { title: 'Paragraph', value: 'normal' },
    { title: 'Heading 1', value: 'h1' },
    { title: 'Heading 2', value: 'h2' },
    { title: 'Heading 3', value: 'h3' },
    { title: 'Bullet', value: 'bulletl' },
    { title: 'Numbered', value: 'normal' },
    { title: 'Quote', value: 'blockquote' },
];

export default {
    name: 'post',
    type: 'document',
    title: 'Post 1',
    groups: [
        {
          name: 'content',
          title: 'Content',
        },
        {
            name: 'meta',
            title: 'Meta',
          },
        ],
    
    fields: [
      {
        name: 'meta_title',
        type: 'string',
        title: 'Meta title',
        validation: Rule => Rule.required(),
        group: 'meta',

      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        validation: Rule => Rule.required(),
        group: 'content',

      },
      {
        name: 'publishedDate', 
        type: 'date',
        title: 'Published Date',
        validation: Rule => Rule.required(),
        group: 'content',

      },
      {
        name: 'image',
        type: 'image',
        title: 'Image',
        validation: Rule => Rule.required(),
        group: 'content',

        fields: [
            {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                isHighlighted: true 
                }
            },
            {
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
            }
        ]
      },
      {
        title: 'Slug',
        name: 'slug', 
        type: 'slug',
        validation: Rule => Rule.required(),
        group: 'content',

        options: {
            source: 'title',
            maxLength: 200, // will be ignored if slugify is set
            slugify: input => input
                                 .toLowerCase()
                                 .replace(/\s+/g, '-')
                                 .slice(0, 200)
        }
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
        validation: Rule => Rule.required(),
        group: 'content',

      },
      {
        title: 'Body content',
        name: 'body',
        type: 'array',
        group: 'content',

        of: [
            {
                type: 'block',
                styles: textEditorStyles,
            },
            {
                type: 'image',
            }

        ],
        validation: Rule => Rule.required(),
      }
    ]
  }