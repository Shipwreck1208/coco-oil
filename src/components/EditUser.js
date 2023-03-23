import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const EditUser = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("Ordered");
    const navigate = useNavigate();
    const { id } = useParams();
    
    useEffect(() => {
        getUserById();
        // eslint-disable-next-line
    }, []);
    
    const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setPhone(response.data.phone);
    setStatus(response.data.status);
  };
 
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        phone,
        status,
      });
      navigate("/moeadmin16");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">phone</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="Ordered">Ordered</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
              <Link to="/moeadmin16" className="button is-success">
          Home
        </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default EditUser;