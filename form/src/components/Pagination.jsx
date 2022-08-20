import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

const Container = styled.div`
  height: 400px;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px;
  margin: 5px;
`;

const Pagination = () => {
  const columns = [
    {
      field: "fullName",
      headerName: "Full name",
      width: 300,
      valueGetter: (params) =>
        `${params?.row.FirstName || ""} ${params?.row.LastName || ""}`,
    },
    { field: "Gender", headerName: "Gender", width: 130 },
    {
      field: "Mobile Phone",
      headerName: "Mobile Phone",
      width: 300,
      valueGetter: (params) =>
        `+${params?.row.country.phone || ""} ${params.row?.Phone || ""}`,
    },
    { field: "Nationality", headerName: "Nationality", width: 200 },
    {
      field: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <EditButton params={params?.row.uuid} />
            <DeleteButton params={params?.row.uuid} />
          </>
        );
      },
    },
  ];

  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users"));
    if (data) {
      setUsers(data);
    }
    console.log(data);
  }, []);
  const DeleteButton = ({ params }) => {
    return <Button onClick={() => handleDelete(params)}>Delete</Button>;
  };
  const handleDelete = (id) => {
    // console.log(id);
    const result = users.filter((data) => data.uuid !== id);
    setUsers(result);
  };
  const EditButton = ({ params }) => {
    return <Button>Edit</Button>;
  };

  return (
    <Container>
      <DataGrid
        rows={users}
        getRowId={(row) => row.uuid}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default Pagination;
