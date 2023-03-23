import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
const AddUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Ordered");
  const navigate = useNavigate();
 
  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        phone,
        status,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
            <label className="label">Phone</label>
            <div className="control">
              <input
                type=""
                className="input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="phone"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select disabled
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddUser;