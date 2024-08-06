'use client'

import { startTransition } from 'react'
import { doTheThing } from './serverFunction'

export default function ClientComponent() {
  return (
    <>
      <p>Check the console for output</p>
      <button
        onClick={() => {
          startTransition(() => {
            doTheThing().then((res) => {
              console.log('Result was', res)
            })
          })
        }}
      >
        Click me
      </button>
    </>
  )
}
