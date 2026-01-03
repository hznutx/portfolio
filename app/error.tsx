'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('App error:', error);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 text-center shadow-lg">
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">
          Something went wrong
        </h2>

        <p className="mb-6 text-sm text-gray-600">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Try again
        </button>

        {process.env.NODE_ENV === 'development' && (
          <pre className="mt-4 max-h-40 overflow-auto rounded bg-gray-100 p-3 text-left text-xs text-red-600">
            {error.message}
          </pre>
        )}
      </div>
    </div>
  );
}
