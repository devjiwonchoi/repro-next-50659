'use server'

import { headers } from 'next/headers'

export async function doTheThing() {
  const headerList = headers()
  return 'The Thing'
}
