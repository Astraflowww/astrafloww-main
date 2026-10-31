export const defaultSeo = {
  baseTitle: 'Devanshi Jaiswal',
  jobTitle: 'Bespoke Software Studio & Elite Engineering',
  pageTitle: (title: string) => `${title} | ${defaultSeo.baseTitle}` as const,
  metaDescription:
    'Devanshi Jaiswal is a custom software developer engineering full-cycle cloud-native platforms, AI systems, and high-velocity digital architectures.',
} as const

export const OG_FALLBACK_SLUG = 'base'

/** OG image dimensions — shared by the renderer and the meta tags. */
export const OG_IMAGE = { width: 1200, height: 630 } as const

export const staticPageOgFallback = {
  id: OG_FALLBACK_SLUG,
  data: {
    title: 'Devanshi Jaiswal',
    description:
      'Custom Software Developer — Full-Cycle Engineering, Cloud-Native Architecture, and Enterprise Systems.',
  },
} as const
