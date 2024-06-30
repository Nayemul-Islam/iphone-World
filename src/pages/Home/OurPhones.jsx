import { useLoaderData } from "react-router-dom";
import SinglePhoneCard from "./SinglePhoneCard";

function OurPhones() {
  // get all the phones using useLoaderData() hook of react-router-dom
  const phones = useLoaderData();

  return (
    <div className="my-10">
      {/* Our phones heading */}
      <div className="text-center mb-8">
        <p className="font-bold">Phone Models</p>
        <h1 className="text-3xl font-bold">
          Our <span className="text-orange-500">Phones</span>
        </h1>
      </div>
      {/* cards of all the available phones */}
      {/* Map the fetched array */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {phones?.map((phone) => (
          <SinglePhoneCard key={phone._id} phone={phone}></SinglePhoneCard>
        ))}
      </div>
    </div>
  );
}

export default OurPhones;
