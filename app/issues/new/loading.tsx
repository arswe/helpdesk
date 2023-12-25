import { Skeleton } from '@/app/components'
import { Box } from '@radix-ui/themes'
import delay from 'delay'

const LoadingNewIssuePage = () => {
  delay(3000)
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Skeleton height='20rem' />
    </Box>
  )
}

export default LoadingNewIssuePage
