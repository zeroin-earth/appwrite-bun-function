import { Client } from 'node-appwrite'
import type { AppwriteContext } from './types'

export default async function handler(context: AppwriteContext) {
  const { req, res, log, error } = context

  log('Hello from Appwrite Bun Function!')

  // const client = new Client()
  //   .setEndpoint(process.env.APPWRITE_ENDPOINT ?? '')
  //   .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID ?? '')

  if (req.method === 'GET') {
    res.json({ message: 'Hello from Appwrite Bun Function!' })
  } else {
    error('Method not allowed')
  }
}
