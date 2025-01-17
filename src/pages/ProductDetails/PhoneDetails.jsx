import { useLoaderData } from "react-router-dom";
import Footer from "../../components/Shared/Footer";
import Navbar from "../../components/Shared/Navbar";

function PhoneDetails() {
    const details = useLoaderData();
   
  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {/* Phone details here */}
        <div className="my-10 card lg:card-side bg-base-100 shadow-2xl">
          <figure className="md:w-1/2">
            <img
              src={details?.image}
              alt="Album"
            />
          </figure>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">{details?.brand}</h2>
            <h2 className="card-title">{details?.model}</h2>
            <p>{details?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">$ {details?.price}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default PhoneDetails;
