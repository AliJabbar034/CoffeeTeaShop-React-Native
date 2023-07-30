

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tea',
  title: 'Tea',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),


    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),



    defineField({
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'size' } }],
    }),
  ]



})

