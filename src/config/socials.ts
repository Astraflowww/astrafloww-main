type SocialLink = {
  id: 'linkedin' | 'instagram' | 'mail'
  label: string
  url: string
  iconName: string
}

export const socials = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/astrafloww/',
    iconName: 'ph:linkedin-logo',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/astrafloww/',
    iconName: 'ph:instagram-logo',
  },
  {
    id: 'mail',
    label: 'Mail',
    url: 'mailto:contact@astrafloww.com?subject=Astrafloww Contact&body=Hello, I am interested in learning more about Astrafloww. Please let me know if you have any questions or need any assistance.',
    iconName: 'ph:envelope',
  },
] as const satisfies readonly SocialLink[]
