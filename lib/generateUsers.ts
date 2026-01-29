export type User = {
  id: number
  name: string
  email: string
  role: 'admin' | 'editor' | 'user'
  createdAt: string
}

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['admin', 'editor', 'user'][i % 3] as User['role'],
    createdAt: new Date(
      Date.now() - i * 1000 * 60 * 60
    ).toISOString(),
  }))
}