import {useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
function TeamTable() {

  const data = useLoaderData();
  console.log(data);
  const [teams, setTeams] = useState(data);
  // Function for handling the deletion of a single team
  function handleDeleteTeam(personId) {
    fetch(`http://localhost:3000/delete-by-id/${personIdId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const otherTeam = personId?.filter(
            (team) => team._id != personId
          );
          setTeams(otherTeam);
        }
      });
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Member Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teams?.map((team) => (
            <tr key={team._id}>
              <td>{team.fullName}</td>
              <td>
                <Link to={`/team/${team?._id}`}>
                  <button className="btn btn-success">D</button>
                </Link>
                <button
                  className="btn btn-warning"
                  onClick={() => handleDeleteTeam(team._id)}
                >
                  X
                </button>
                <Link to={`/update-team/${team?._id}`}>
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
export default TeamTable;
