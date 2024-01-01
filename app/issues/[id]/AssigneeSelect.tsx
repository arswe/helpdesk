'use client'
import Skeleton from '@/app/components/Skeleton'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers()

  if (isLoading) return <Skeleton />

  if (error) return null

  const assignIssue = (userId: string) => {
    axios
      .patch('/api/issues/' + issue.id, { assignedToUserId: userId === 'Unassigned' ? null : userId })
      .catch((error) => {
        toast.error('Changes could not be saved.')
      })
  }

  return (
    <>
      <Select.Root defaultValue={issue.assignedToUserId || 'Unassigned'} onValueChange={assignIssue}>
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

      <Toaster position='top-right' reverseOrder={false} />
    </>
  )
}

const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: () => axios.get<User[]>('/api/users').then((response) => response.data),
    staleTime: 60 * 1000, // 1 minute
    retry: 3,
  })

export default AssigneeSelect
