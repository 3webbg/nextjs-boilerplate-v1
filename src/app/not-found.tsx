import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container relative">
      <div className="absolute inset-0 flex-center text-[300px] font-bold opacity-10">
        404
      </div>
      <div className="flex-center flex-col absolute inset-0">
        <h2 className="text-[24px] font-bold mb-2">Custom not found page</h2>
        <p>
          Edit this file{' '}
          <code className="border p-0.5 bg-white rounded-md">
            not-found.tsx
          </code>{' '}
          to change the design of this page.
        </p>

        <Link href="/" className="mt-6 border rounded-md bg-white px-2">
          Return Home
        </Link>
      </div>
    </div>
  )
}
