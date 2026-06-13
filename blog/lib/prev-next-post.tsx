export function prevNextPost(
  getAllSlugs: { slug: string; title: string }[],
  currentSlug: string
) {
  const numberOfPosts = getAllSlugs.length

  const index = getAllSlugs.findIndex(
    (post) => post.slug === currentSlug
  )

  const prevPost = index > 0 ? getAllSlugs[index - 1] : null
  const nextPost = index < numberOfPosts - 1 ? getAllSlugs[index + 1] : null

  return { prevPost, nextPost }
}
