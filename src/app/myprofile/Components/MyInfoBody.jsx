import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";

export default function MyInfoBody() {
  const [user, setUser] = useState([]);
  const [editableFields, setEditableFields] = useState({
    hometwon: false,
    homecity: false,
    position: false,
    relationshipstatus: false,
    gender: false,
    age: false,
  });

  const handleEditClick = (field) => {
    setEditableFields((prevEditableFields) => ({
      ...prevEditableFields,
      [field]: true,
    }));
  };

  const handleInputChange = (field, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSaveClick = async (field) => {
    setEditableFields((prevEditableFields) => ({
      ...prevEditableFields,
      [field]: false,
    }));
    await api
      .put(`/api/v1/user/me/edit/${user._id}`, user)
      .then((response) => {
        if (response) {
          console.log(response);
        }
      })
      .catch((error) => {
        if (error) {
          console.log(error);
        }
      });
  };

  return (
    <div className="p-4">
      {Object.keys(editableFields).map((field) => (
        <div className="py-1 flex" key={field}>
          <span className="text-white w-3/6">{field}</span>
          <input
            className="text-white bg-slate-900 w-2/6"
            type="text"
            value={user[field]}
            disabled={!editableFields[field]}
            onChange={(e) => handleInputChange(field, e.target.value)}
          />
          {editableFields[field] ? (
            <>
              <button
                className="py-1 px-2 text-xs bg-slate-800 rounded-md text-slate-400"
                type="button"
                onClick={() => handleSaveClick(field)}
              >
                Save
              </button>
            </>
          ) : (
            <button
              className="py-1 px-2 text-xs bg-slate-800 rounded-md text-slate-400"
              type="button"
              onClick={() => handleEditClick(field)}
            >
              <AiFillEdit />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
