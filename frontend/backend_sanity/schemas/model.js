export default {
    name   : 'model',
    title  : 'Model',
    type   : 'document',
    fields : [
        {
            name   : 'name',
            title  : 'Name',
            type   : 'string',
        },
        {
            name   : 'software',
            title  : 'Software (S/A/C/F)',
            type   : 'string',
        },
        {
            name   : 'image',
            title  : 'Image',
            type   : 'array',
            of     : [{ type: 'image' }],
            options: {
                hotspot: true,
            }
        },
        {
            name   : 'file',
            title  : 'File',
            type   : 'file',
        },
        {
            name   : 'price',
            title  : 'Price',
            type   : 'number',
        },
        {
            name   : 'details',
            title  : 'Details',
            type   : 'string',
        },
        {
            name   : 'slug',
            title  : 'Slug',
            type   : 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
    ]
}