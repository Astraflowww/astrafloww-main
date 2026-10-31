import { ENV_NAME, GH_API_TOKEN, SITE_URL } from 'astro:env/server'

const IS_PRODUCTION = ENV_NAME === 'production'
const IS_LOCAL = import.meta.env.DEV

export const ENV = {
  IS_LOCAL,
  IS_PRODUCTION,
  SITE_URL,
  ENV_NAME,
  GH_API_TOKEN,
} as const
