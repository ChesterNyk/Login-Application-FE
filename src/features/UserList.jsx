import React from "react";
import { getUserList } from "../api/UserAPI";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Card, Typography } from "@mui/material";

const UserList = () => {
    const [tableData, setTableData] = React.useState([]);

    const handleResponse = (res) => {
        console.log(res);

        const newData = res.data.map((info, index) => ({
            id: info.userId,
            role: info.role,
            username: info.username,
            name: info.name,
        }));

        console.log(newData);

        setTableData(newData);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 100 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "role", headerName: "Role", width: 150 },
        { field: "username", headerName: "Username", width: 200 },
    ];

    React.useEffect(() => {
        getUserList(handleResponse);
    }, []);

    return (
        <Card sx={{ py: 1, my: 1, width: "60%" }}>
            <Box sx={{ px: 1, py: 1 }}>
                <Typography
                    variant="h4"
                    sx={{ fontSize: "12pt", fontWeight: "bold", py: 1 }}
                >
                    User List
                </Typography>
                <DataGrid
                    rows={tableData}
                    columns={columns}
                    disableColumnFilter={true}
                    disableColumnMenu={true}
                    disableRowSelectionOnClick={true}
                    pageSizeOptions={false}
                    sx={{ px: 1 }}
                />
            </Box>
        </Card>
    );
};

export default UserList;
