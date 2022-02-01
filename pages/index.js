import TopCard from '../components/Dashboard/TopCard/TopCard';
import Shipments from "../components/Dashboard/Shipments/Shipments";
import Statistics from "../components/Dashboard/Statistics/Statistics";

const ClientDashboard = () => {
  return (
    <div className="main-content">
      <TopCard />
      <section className="standard-section">
        <div className="container-fluid">
          <div className="row">
            <Shipments />
            <Statistics />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientDashboard;
