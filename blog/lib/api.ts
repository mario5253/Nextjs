import { client } from './client'

export async function getPostBySlug(slug : string) {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        filters: `slug[equals]${encodeURIComponent(slug)}`,
        limit: 1
      },
      // customRequestInit: {
      //   cache: "no-store"
      // }
    })

    return data.contents[0] ?? null
  } catch (err) {
    console.log('~~ getPostBySlug ~~')
    console.log(err)
    return null
  }
}





export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blog',
      queries: {fields: 'title,slug', orders: '-publishDate', limit: limit},
    })
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        fields: 'title,slug,eyecatch,categories',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('-- getAllPosts--')
    console.log(err)
  }
}

export async function getAllCategories(limit= 100) {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'name,id,slug',
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log('--categories--')
    console.log(err)
  }
}

export async function getPostsByCategory(slug: string) {
  const allPosts = await getAllPosts(100)

  return allPosts.filter((post: {categories?: {slug: string}[]}) =>
    post.categories?.some(cat => cat.slug === slug)
  )
}


