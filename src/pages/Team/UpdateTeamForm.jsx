import { useLoaderData, useNavigate } from "react-router-dom";

function UpdateTeamForm() {
  const team = useLoaderData();

  const navigate = useNavigate();

  function handleUpdateTeam(event) {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const position = event.target.position.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const message = event.target.message.value;
    const Updatedteam = {
      fullName: fullName,
      position: position,
      email : email,
      photo : photo,
      message : message,
    };
    fetch(`http://localhost:3000/update-by-id-team/${team?._id}`,{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(Updatedteam)
    })
    .then(res=> res.json())
    .then(data => {
      console.log(data);
        if(data.acknowledged){
            navigate(`/manage-team`)
        }
    })

  }
  return (
    <form onSubmit={handleUpdateTeam} className="my-10 flex flex-col gap-y-5">
      <input
        type="text"
        placeholder="Teammate Name"
        defaultValue={team?.fullName}
        name="fullName"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate Position"
        defaultValue={team?.position}

        name="position"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate Email"
        defaultValue={team?.email}

        name="email"
        className="input w-full input-bordered"
      />
      <input
        type="text"
        placeholder="Teammate image url"
        defaultValue={team?.photo}

        name="photo"
        className="input w-full input-bordered"
      />

      <textarea
        className="textarea textarea-bordered w-full"
        placeholder="About Teammate"
        defaultValue={team?.message}

        name="message"
      ></textarea>
      <div className="flex justify-center">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  );
}

export default  UpdateTeamForm;
