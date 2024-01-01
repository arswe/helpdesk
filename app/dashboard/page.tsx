import Pagination from '../components/Pagination'

const Dashboard = ({ searchParams }: { searchParams: { page: string } }) => {
  return (
    <div>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />
    </div>
  )
}

export default Dashboard
