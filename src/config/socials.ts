type SocialLink = {
  id: 'linkedin' | 'bluesky' | 'mail'
  label: string
  url: string
  iconName: string
}

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/devanshi-sharma-3b0762201',
    iconName: 'ph:linkedin-logo',
  },
  {
    id: 'bluesky',
    label: 'Bluesky',
    url: 'https://bsky.app/profile/jbdevanshisharma.com',
    iconName: 'ph:butterfly',
  },
  {
    id: 'mail',
    label: 'Mail',
    url: 'mailto:hi@jbdevanshisharma.com',
    iconName: 'ph:envelope',
  },
] as const satisfies readonly SocialLink[]
