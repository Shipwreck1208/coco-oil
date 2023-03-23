import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
const Admin = () => {
  const [users, setUser] = useState([]);
 
  useEffect(() => {
    getUsers();
  }, []);
 
  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };
 
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

   // React States
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   // User Login info
   const database = [
     {
       username: "admin",
       password: "admin"
     }
   ];
 
   const errors = {
     uname: "Incorrect Credientails",
     pass: "Incorrect Credientails"
   };
 
   const handleSubmit = (event) => {
     //Prevent page reload
     event.preventDefault();
 
     var { uname, pass } = document.forms[0];
 
     // Find user login info
     const userData = database.find((user) => user.username === uname.value);
 
     // Compare user info
     if (userData) {
       if (userData.password !== pass.value) {
         // Invalid password
         setErrorMessages({ name: "pass", message: errors.pass });
       } else {
         setIsSubmitted(true);
       }
     } else {
       // Username not found
       setErrorMessages({ name: "uname", message: errors.uname });
     }
   };
 
   // Generate JSX code for error message
   const renderErrorMessage = (name) =>
     name === errorMessages.name && (
       <div className="error">{errorMessages.message}</div>
     );
 
   // JSX code for login form
   const renderForm = (
     <div className="form">
       <form onSubmit={handleSubmit}>
         <div className="input-container">
           <label>Username </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Password </label>
           <input type="password" name="pass" required />
           {renderErrorMessage("uname")}
           {renderErrorMessage("pass")}
         </div>
         <div className="button-container">
           <input type="submit" />
         </div>
       </form>
     </div>
   );

   return (
    <div className="app">
      <div className="login-form">
        <div className="title">Admin Dashboard</div>
        {isSubmitted ? 
        <div className="columns mt-5">
            <div className="column is-half">
              <Link to="/add" className="button is-success">
                Place an Order
              </Link>
              <Link to="/" className="button is-success">
                Home
              </Link>
              <div>
                <p>Number of Records: #</p>
              </div>
              <table className="table is-striped is-fullwidth mt-2">
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
                      <td>{user.phone}</td>
                      <td>{user.status}</td>
                      <td>
                        <Link
                          to={`/edit/${user._id}`}
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
              </table>
            </div>
          </div>
        : renderForm}
      </div>
    </div>
  );
  
 
  // return (
  //   <div className="columns mt-5">
  //     <div className="column is-half">
  //       <Link to="/add" className="button is-success">
  //         Place an Order
  //       </Link>
  //       <Link to="/" className="button is-success">
  //         Home
  //       </Link>
  //       <div>
  //         <p>Number of Records: #</p>
  //       </div>
  //       <table className="table is-striped is-fullwidth mt-2">
  //         <thead>
  //           <tr>
  //             <th>No</th>
  //             <th>Name</th>
  //             <th>Email</th>
  //             <th>Gender</th>
  //             <th>Actions</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {users.map((user, index) => (
  //             <tr key={user._id}>
  //               <td>{index + 1}</td>
  //               <td>{user.name}</td>
  //               <td>{user.phone}</td>
  //               <td>{user.status}</td>
  //               <td>
  //                 <Link
  //                   to={`/edit/${user._id}`}
  //                   className="button is-info is-small mr-1"
  //                 >
  //                   Edit
  //                 </Link>
  //                 <button
  //                   onClick={() => deleteUser(user._id)}
  //                   className="button is-danger is-small"
  //                 >
  //                   Delete
  //                 </button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );
};
 
export default Admin;