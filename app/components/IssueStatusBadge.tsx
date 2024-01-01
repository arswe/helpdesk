import { Status } from '@prisma/client'
import { Badge, Flex } from '@radix-ui/themes'

const statusMap: Record<Status, { label: string; color: 'red' | 'violet' | 'green' }> = {
  OPEN: { label: 'Open', color: 'red' },
  IN_PROGRESS: { label: 'In progress', color: 'violet' },
  CLOSED: { label: 'Closed', color: 'green' },
}

const IssuStatusBadge = ({ status }: { status: Status }) => {
  if (status === Status.OPEN) return <Badge color='red'>Open</Badge>

  return (
    <Flex gap='2'>
      <Badge color={statusMap[status].color}> {statusMap[status].label} </Badge>
    </Flex>
  )
}

export default IssuStatusBadge
