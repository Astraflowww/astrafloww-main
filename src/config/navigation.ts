import { ROUTES } from './routes'

type Navigation = {
  href: string
  label: string
}

export const headerNavigation = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
  { href: ROUTES.blog._, label: 'Blog' },
] as const satisfies readonly Navigation[]

export const createfooterNavigation = () =>
  ({
    explore: headerNavigation,
    elsewhere: [],
  }) as const satisfies Record<string, readonly Navigation[]>
