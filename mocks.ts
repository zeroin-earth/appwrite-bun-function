/* eslint-disable @typescript-eslint/no-unused-vars */
import { Client, type Payload, type UploadProgress } from 'node-appwrite'

import type { AppwriteContext } from './src/types'

export const mockClient: Client = {
  setEndpoint: (_endpoint: string) => mockClient,
  setProject: (_projectId: string) => mockClient,
  setJWT: (_jwt: string) => mockClient,
  setSelfSigned: (_status?: boolean): Client => mockClient,
  setKey: (_key: string): Client => mockClient,
  setLocale: (_locale: string): Client => mockClient,
  setSession: (_session: string): Client => mockClient,
  setForwardedUserAgent: (_forwardeduseragent: string): Client => mockClient,
  config: {
    endpoint: '',
    selfSigned: false,
    project: '',
    key: '',
    jwt: '',
    locale: '',
    session: '',
    forwardeduseragent: '',
  },
  headers: {},
  addHeader: (_header: string, _value: string): Client => mockClient,
  prepareRequest: (
    _method: string,
    _url: URL,
    _headers?: { [key: string]: string },
    _params?: Payload,
  ): { uri: string; options: RequestInit } => ({} as any),
  chunkedUpload: (
    _method: string,
    _url: URL,
    _headers: { [key: string]: string } | undefined,
    _originalPayload: Payload | undefined,
    _onProgress: (progress: UploadProgress) => void,
  ): Promise<any> => Promise.resolve({}),
  redirect: (
    _method: string,
    _url: URL,
    _headers?: { [key: string]: string },
    _params?: Payload,
  ): Promise<string> => Promise.resolve(''),
  call: (
    _method: string,
    _url: URL,
    _headers?: { [key: string]: string },
    _params?: Payload,
    _responseType?: string,
  ): Promise<any> => Promise.resolve({}),
}

export const mockContext: AppwriteContext = {
  req: {
    bodyRaw: '',
    body: '{}',
    headers: {},
    scheme: 'http',
    method: 'GET',
    url: 'http://localhost:3000',
    host: 'localhost',
    port: 3000,
    path: '/',
    queryString: '',
    query: {},
  },
  res: {
    json: (body: Record<string, any>) => {
      console.log(body)
      return body
    },
    empty: () => {
      console.log('empty')
      return ''
    },
    redirect: (url: string, status?: number) => console.log(url, status),
    send: (body: string, status?: number, headers?: Record<string, string>) => {
      console.log(body, status, headers)
      return {
        body,
        status,
        headers,
      }
    },
  },
  log: console.log,
  error: console.error,
}
