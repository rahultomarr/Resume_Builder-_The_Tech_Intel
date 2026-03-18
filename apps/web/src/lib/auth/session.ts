import { auth } from '@/auth'
import { redirect } from 'next/navigation'

/**
 * Get the current session on the server side.
 * Returns null if not authenticated.
 */
export async function getCurrentSession() {
  return await auth()
}

/**
 * Get the current user from the session.
 * Returns null if not authenticated.
 */
export async function getCurrentUser() {
  const session = await auth()
  return session?.user ?? null
}

/**
 * Require authentication. Redirects to /login if not authenticated.
 */
export async function requireAuth() {
  const session = await auth()
  if (!session?.user) {
    redirect('/login')
  }
  return session
}
