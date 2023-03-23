import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  // const [users, setUser] = useState([]);
 
  // useEffect(() => {
  //   getUsers();
  // }, []);
 
  // const getUsers = async () => {
  //   const response = await axios.get("http://localhost:5000/users");
  //   setUser(response.data);
  // };
 
  // const deleteUser = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/users/${id}`);
  //     getUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
 
  return (
    <div className="">
      <div className="flex justify-center mt-44">
        <Link to="add" className="bg-green-400 p-2 rounded-lg ">
          Place Your Order
        </Link>
        <Link to="moeadmin16" className="">
          Admin
        </Link>
        {/* <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`edit/${user._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};
 
export default UserList;