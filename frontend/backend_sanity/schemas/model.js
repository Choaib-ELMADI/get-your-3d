export default {
    name   : 'model',
    title  : 'Model',
    type   : 'document',
    fields : [
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
            name   : 'name',
            title  : 'Name',
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
            name   : 'file',
            title  : 'File',
            type   : 'file',
        }
    ]
}