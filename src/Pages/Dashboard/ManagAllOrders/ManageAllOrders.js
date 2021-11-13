import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    console.log(user);

    useEffect(() => {

        fetch("https://stormy-island-04558.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {

                setOrders(data)
            });
    }, [user.email])

    //Delete order
    const handleDeleteOrder = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `https://stormy-island-04558.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })

        }

    }
    return (
        <div>
            <h2 className='arrived'>All Orders {orders.length}</h2>
            <hr className="w-25 mx-auto mb-5 text-dark " />
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 600 }}>Client-Name</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Product-Name</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">email</TableCell>
                            <TableCell style={{ fontWeight: 600 }} align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ color: 'gray' }} component="th" scope="row">
                                    {row.clientName}
                                </TableCell>
                                <TableCell style={{ color: 'gray' }} align="right">{row.serviceName}</TableCell>
                                <TableCell style={{ color: 'gray' }} align="right">{row.email}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteOrder(row._id)} style={{ backgroundColor: 'white', border: "1px solid rgba(231, 24, 59, 0.746)", fontWeight: 600, color: "rgba(231, 24, 59, 0.746)" }}  >Cancle</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageAllOrders;