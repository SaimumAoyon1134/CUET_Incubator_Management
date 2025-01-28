import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/apiCalls";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function UserList() {
  const [data, setData] = useState(userRows);
  const dispatch =useDispatch();
  const users = useSelector((state)=>state.guser.users);
  useEffect(()=>{
    getUsers(dispatch);
  },[dispatch])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];


  return (
   
    <div className="userList">

      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
