import { api } from '@/services/api'
import { useQuery } from 'react-query'

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUserResponse = {
  totalCount: number
  users: User[]
}

export async function getUser(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get('/api/users', {
    params: {
      page,
    },
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: any) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    }
  }) as User[]

  return {
    users,
    totalCount,
  }
}

export function useUsers(page: number) {
  return useQuery(['user', { page }], () => getUser(page), {
    staleTime: 1000 * 10, // 10 seconds
  })
}
