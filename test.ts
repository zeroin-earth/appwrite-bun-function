import service from './src'

service({
  req: {
    bodyRaw: '',
    body: {},
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
    json: (body: Record<string, any>) => console.log(body),
    empty: () => console.log('empty'),
    redirect: (url: string, status?: number) => console.log(url, status),
    send: (body: string, status?: number, headers?: Record<string, string>): void =>
      console.log(body, status, headers),
  },
  log: console.log,
  error: console.error,
})
