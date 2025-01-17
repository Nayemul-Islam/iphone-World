
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import ManageProductsTable from "./ManageProductsTable";

function ManageProducts() {
  
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {/* Manage Phone heading starts */}
        <div className="text-center my-10">
          <p className="text-orange-500 font-bold">Manage Phones</p>
          <h2 className="text-2xl font-bold">
            You can update or delete any Phone here.
          </h2>
        </div>
        {/* Manage Phone heading ends */}

        {/* table for managing products */}
        <ManageProductsTable></ManageProductsTable>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ManageProducts;
