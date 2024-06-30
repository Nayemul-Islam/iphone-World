import { useNavigate } from "react-router-dom";

function AddProductForm() {
  const navigate = useNavigate();

  function handlePostPhone(event) {
    event.preventDefault();
    // Capture form values
    const brand = event.target.brand.value;
    const model = event.target.model.value;
    const image = event.target.image.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    // Create a new object with the form values
    const phone = {
      brand: brand,
      model: model,
      image: image,
      rent: price,
      description: description,
    };
    // Now make a post request to the server form storing this object.
    console.log(phone);

    fetch(`http://localhost:3000/add-a-phone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phone),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate('/manage-products');
        }
      });
  }

  return (
    <div>
      <div className="text-center mt-10">
        <p className="text-orange-500 font-bold">Add Phones</p>
        <h2 className="text-2xl font-bold">
          Fill up the form to add a new phone
        </h2>
      </div>
      <form
        onSubmit={handlePostPhone}
        className="my-10 flex flex-col gap-y-5"
      >
        <input
          type="text"
          placeholder="Brand Name"
          name="brand"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Phone Model"
          name="model"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Phone Image"
          name="image"
          className="input w-full input-bordered"
        />
        <input
          type="text"
          placeholder="Phone Price"
          name="price"
          className="input w-full input-bordered"
        />
        <textarea
          className="textarea textarea-bordered w-full"
          name="description"
          placeholder="Phone Description"
        ></textarea>
        <div className="flex justify-center">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
export default AddProductForm;


const names = ["Nayem","Sajid","Abs"];
let cnt = 0;
names.map((ele) => {
  <h1 key={cnt++}>{ele}</h1>
})
fetch("/xyrdf/:?")