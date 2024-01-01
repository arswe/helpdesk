import prisma from '@/prisma/client'
import { Flex, Grid } from '@radix-ui/themes'
import IssueChart from './IssueChart'
import IssueSummary from './IssueSummary'
import LatestIssues from './LatestIssues'

const Dashboard = async () => {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } })
  const inProgress = await prisma.issue.count({ where: { status: 'IN_PROGRESS' } })
  const close = await prisma.issue.count({ where: { status: 'CLOSED' } })

  return (
    <Grid columns={{ initial: '1', md: '2' }} gap={'5'}>
      <Flex direction={'column'} gap={'5'}>
        <IssueSummary open={open} inProgress={inProgress} close={close} />
        <IssueChart open={open} inProgress={inProgress} close={close} />
      </Flex>
      <LatestIssues />
    </Grid>
  )
}

export default Dashboard
