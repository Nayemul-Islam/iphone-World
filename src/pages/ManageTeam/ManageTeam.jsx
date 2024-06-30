
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";
import TeamTable from "./TeamTable";
function ManageTeam() {
  
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {/* Manage Phone heading starts */}
        <div className="text-center my-10">
          <p className="text-orange-500 font-bold">Manage Team</p>
          <h2 className="text-2xl font-bold">
            You can update or delete any Team here.
          </h2>
        </div>
        {/* Manage Phone heading ends */}

        {/* table for managing products */}
        <TeamTable></TeamTable>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ManageTeam;
