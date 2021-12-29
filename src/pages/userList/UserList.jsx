import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./userList.css";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import {userRows} from "../../dummyData";
import {Link} from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 120,
      renderCell: (params) => {
        return (
            <div className="userDetail">
              <img src={params.row.avatar} alt="" className="avatar"/>
              {params.row.firstName}
            </div>
        )
      }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      valueGetter: (params) => {
        return params.row.status ? 'active' : 'Deactive'
      },
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
          `${params.getValue(params.id, 'firstName') || ''} ${
              params.getValue(params.id, 'lastName') || ''
          }`,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell: (params) => {
        return(
            <>
              <Link to={"/user/" + params.row.id} className="d-flex">
                <EditIcon className="userListEdit"/>
              </Link>
              <DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)}/>
            </>
        )
      }
    }
  ];

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id))
  };


    return (
        <div className="userList">
          <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableSelectionOnClick
          />
        </div>
    );
};

export default UserList;