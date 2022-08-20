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
      width: 200,
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

  const datas = [
    {
      uuid: "983e906e-4841-4b72-8092-92d2e1951c0e",
      Title: "Mr",
      Nationality: "Thai",
      Gender: "male",
      Salary: "30,000",
      country: { code: "TH", label: "Thailand", phone: "66" },
      FirstName: "charin",
      LastName: "aewzipo",
      BirthDay: "2022-08-04T17:00:00.000Z",
      CitizenID: "1929900543963",
      Phone: "0950924619",
    },
    {
      uuid: "083e906e-4841-4b72-8092-92d2e1901c1e",
      Title: "Mr",
      Nationality: "Thai",
      Gender: "male",
      Salary: "30,000",
      country: { code: "TH", label: "Thailand", phone: "66" },
      FirstName: "kongsak",
      LastName: "pomsuk",
      BirthDay: "2022-08-04T17:00:00.000Z",
      CitizenID: "1929902054963",
      Phone: "0950924619",
    },
    {
      uuid: "983e906e-4841-4b72-8092-92d2e1901c0e",
      Title: "Mr",
      Nationality: "Thai",
      Gender: "female",
      Salary: "50,000",
      country: { code: "TH", label: "Thailand", phone: "66" },
      FirstName: "nakom",
      LastName: "konglek",
      BirthDay: "2022-08-05T17:00:00.000Z",
      CitizenID: "325103333251",
      Phone: "0652113325",
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
