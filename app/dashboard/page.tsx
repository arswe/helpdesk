import Pagination from '../components/Pagination'

const Dashboard = () => {
  return (
    <div>
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
    </div>
  )
}

export default Dashboard
