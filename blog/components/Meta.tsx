import {siteMeta} from '../lib/constants'

export function generateMeta({
  title,
  description
}:{
  title: string
  description: string
}) {
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    siteLocale,
    siteType,
    siteIcon,
  } = siteMeta

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDesc = description || siteDesc

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: siteUrl,
      locale: siteLocale,
      type: siteType,
    },
    icons: {
      icon: siteIcon,
    }
  }
}