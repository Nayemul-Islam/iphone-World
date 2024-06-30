import {useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
function ManageProductsTable() {

  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  // Function for handling the deletion of a single phone
  function handleDeletePhone(phoneId) {
    fetch(`http://localhost:3000/delete-by-id/${phoneId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const otherPhone = phones?.filter(
            (phone) => phone._id != phoneId
          );
          setPhones(otherPhone);
        }
      });
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Price $</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {phones?.map((phone) => (
            <tr key={phone._id}>
              <td>{phone.brand}</td>
              <td>{phone.model}</td>
              <td>{phone.price}</td>
              <td>
                <Link to={`/phone/${phone?._id}`}>
                  <button className="btn btn-success">D</button>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDeletePhone(phone._id)}
                >
                  X
                </button>
                <Link to={`/update-phone/${phone?._id}`}>
                  <button className="btn btn-outline">U</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ManageProductsTable;



fetch(`http://localhost:3000/phone/${params.id}`)



app.get("/phone/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await phoneCollection.findOne(query);

  res.send(result);
});