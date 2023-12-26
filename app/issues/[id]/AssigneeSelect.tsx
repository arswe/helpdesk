'use client'
import Skeleton from '@/app/components/Skeleton'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get<User[]>('/api/users').then((response) => response.data),
    staleTime: 60 * 1000, // 1 minute
    retry: 3,
  })

  if (isLoading) return <Skeleton />

  if (error) return null

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || 'Unassigned'}
      onValueChange={(userId) => {
        axios.patch('/api/issues/' + issue.id, { assignedToUserId: userId === 'Unassigned' ? null : userId })
      }}>
      <Select.Trigger placeholder='Assign...' />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>

          <Select.Item value='Unassigned'>Unassigned</Select.Item>

          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
        <Select.Separator />
      </Select.Content>
    </Select.Root>
  )
}

export default AssigneeSelect
