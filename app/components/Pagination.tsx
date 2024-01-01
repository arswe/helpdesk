import { Flex, Text } from '@radix-ui/themes'

interface Props {
  itemCount: number
  pageSize: number
  currentPage: number
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize)
  return (
    <Flex>
      <Text>Page {currentPage} of</Text>
    </Flex>
  )
}

export default Pagination
