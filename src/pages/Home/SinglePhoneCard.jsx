import { Link } from "react-router-dom";

function SinglePhoneCard({phone}) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={phone?.image} alt={phone?.brand + " " + phone?.model} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{phone?.brand + " " + phone?.model}</h2>
        <p>{phone?.description?.slice(0,100)}...</p>
        <div className="card-actions justify-between">

          <button className="btn btn-primary">$ {phone?.price}</button>
          <Link to={`/phone/${phone?._id}`}>
          <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SinglePhoneCard;
