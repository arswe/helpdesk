import { Status } from '@prisma/client'
import { Select } from '@radix-ui/themes'

const IssueStatusFilter = () => {
  const statuses: { label: string; value?: Status }[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
  ]
  return (
    <Select.Root>
      <Select.Trigger placeholder='Filter By Status...' />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.label} value={status.value || ''}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter