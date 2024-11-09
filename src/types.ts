import type { Models } from 'node-appwrite'

export type AppwriteContext = {
  req: AppwriteRequest
  res: AppwriteResponse
  log: (message: string) => void
  error: (message: string) => void
}

export type Headers = {
  'x-appwrite-trigger'?: string
  'x-appwrite-event'?: string
  'x-appwrite-user-id'?: string
  'x-appwrite-user-jwt'?: string
  'x-appwrite-country-code'?: string
  'x-appwrite-continent-code'?: string
  'x-appwrite-continent-eu'?: string
  [key: string]: string | undefined
}

type AppwriteRequest = {
  bodyRaw: string
  body: string
  headers: Headers
  scheme: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  host: string
  port: number
  path: string
  queryString: string
  query: Record<string, string>
}

type AppwriteResponse = {
  empty: () => void
  json: (body: Record<string, any>) => void
  redirect: (url: string, status?: number) => void
  send: (body: string, status?: number, headers?: Record<string, string>) => void
}

export type Story = Models.Document & {
  fileId: string
  url: string
  reqStories?: string[]
  reqAge?: number
  reqDate?: [string, string]
  priority: number
  oneTime?: boolean
  enabled: boolean
}
