import type { AstroUserConfig } from 'astro'
import { envField } from 'astro/config'

export const envConfig = {
  schema: {
    SITE_URL: envField.string({
      context: 'server',
      access: 'public',
      default: 'http://localhost:4321',
    }),
    ENV_NAME: envField.string({
      context: 'server',
      access: 'public',
      default: 'staging',
    }),
    GH_API_TOKEN: envField.string({
      context: 'server',
      access: 'secret',
      default: crypto.randomUUID(),
    }),
  },
} as const satisfies AstroUserConfig['env']
