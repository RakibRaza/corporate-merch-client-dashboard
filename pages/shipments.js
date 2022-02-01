import ShipmentTable from "../components/Shipments/ShipmentTable/ShipmentTable";
import ShipmentTop from "../components/Shipments/ShipmentTop/ShipmentTop";

const Shipments = () => {
  return (
    <div className="main-content">
      <ShipmentTop />
      <ShipmentTable />
    </div>
  )
}

export default Shipments;
