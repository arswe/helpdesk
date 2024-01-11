import { Status } from '@prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'

interface Props {
  open: number
  inProgress: number
  close: number
}

const IssueSummary = ({ open, inProgress, close }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: 'Open issues', value: open, status: 'OPEN' },
    { label: 'In progress issues', value: inProgress, status: 'IN_PROGRESS' },
    { label: 'Closed issues', value: close, status: 'CLOSED' },
  ]
  return (
    <Flex gap={'4'}>
      {containers.map((container) => (
        <Card key={container.label} className='w-96'>
          <Flex direction={'column'} gap={'1'}>
            <Link className='text-sm font-medium' href={`/issues/list?status=${container.status}`}>
              {container.label}
            </Link>
            <Text size={'6'} className='font-bold'>
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  )
}

export default IssueSummary
