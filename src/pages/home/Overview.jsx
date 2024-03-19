// @ts-nocheck
/* eslint-disable react/prop-types */
import { Box, FormControl, IconButton, NativeSelect, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from "@mui/material";
import Card from "../../component/Card";
import React from "react";
import Line from "../../component/Line";
import { BorderColor, DeleteOutline } from "@mui/icons-material";
import DataOptions from "../../component/DataOptions";
import UserData from "../../component/UserData";


const Overview = ({ data }) => {
  console.log('Overview Page')
  const cloneEl = data.cardData.map((card, index) => React.cloneElement(<Card dataCard={card} />, { key: index }));
  const rows = data.patientData.rowData;
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'start', gap: 2, ml: -10}}>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ my: 5 }}>
          Overview
        </Typography>
        <Stack direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{ xs: "center", sm: "space-between" }} >
          {cloneEl}
        </Stack>
        <Paper sx={{ p: 3, backgroundColor: "#0B1739", borderRadius: "10px", mt: 2, }} >
          <Stack direction={"row"} justifyContent={"space-between"} sx={{ minWidth: '600px', overflow: 'auto'}}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Patient Visit
            </Typography>
            <FormControl>
              <NativeSelect
                sx={{ color: "#ffffff96 !important", backgroundColor: "#0a1330", p: "3px 8px", borderRadius: 2,
                  "& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon, .css-1636szt": {
                    color: "#ffffff96",
                  },
                  "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option, .css-1gtikml:not([multiple]) option":
                    {
                      backgroundColor: "white !important",
                      color: "black !important",
                    },
                }}
                defaultValue={"this"}
                inputProps={{
                  name: "this",
                  id: "uncontrolled-native",
                }}
              >
                <option value={"this"}>this month</option>
                <option value={"last"}>last month</option>
              </NativeSelect>
            </FormControl>
          </Stack>
        
          <Box sx={{ height: "250px"}}>
            <Line data={data.userData.lineChartData} />
          </Box>
          <Box>
            <DataOptions data={data.patientData} />
            
            <TableContainer component={Paper} sx={{ backgroundColor: 'inherit'}}>
              <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
                <TableHead >
                  <TableRow >
                    <TableCell sx={{ color: '#ffffff96', fontSize: '18px', pb: 3, borderColor: '#ffffff96'}}>Patient name</TableCell>
                    <TableCell sx={{ color: '#ffffff96', fontSize: '18px', pb: 3, borderColor: '#ffffff96'}} align="center">Date In</TableCell>
                    <TableCell sx={{ color: '#ffffff96', fontSize: '18px', pb: 3, borderColor: '#ffffff96'}} align="center">Symptoms</TableCell>
                    <TableCell sx={{ color: '#ffffff96', fontSize: '18px', pb: 3, borderColor: '#ffffff96'}} align="center">Status</TableCell>
                    <TableCell sx={{borderColor: '#ffffff96'}} align="center"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row,index) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell sx={{ color: '#fff', border: 0, pt: index == 0 && '50px', display: 'flex', alignItems: 'center', gap: 1}} component="th" scope="row">
                        <img src={row.src} style={{width: '40px', height: '40px'}} />
                        {row.name}
                      </TableCell>
                      <TableCell sx={{ color: '#ffffff96', border: 0, pt: index == 0 && '30px'}} align="center">{row.date}</TableCell>
                      <TableCell sx={{ color: '#ffffff96', border: 0, pt: index == 0 && '30px'}} align="center">{row.symptoms}</TableCell>
                      <TableCell sx={{ color: row.status == 'Confirmed' ? '#53c533' : row.status == 'Incoming'  ? '#e1a407' : '#e32d31' , border: 0, pt: index == 0 && '30px'}} align="center"
                      >{row.status}</TableCell>
                      <TableCell sx={{ color: '#ffffff96', border: 0, pt: index == 0 && '30px'}} align="center">
                        <Stack direction={'row'} justifyContent={'end'}>
                          <IconButton onClick={()=> console.log(row)} sx={{'&:hover': {backgroundColor: '#1e2c6b'}}}><BorderColor sx={{color: '#ffffff96'}} /></IconButton>
                          <IconButton onClick={()=> console.log(row)} sx={{'&:hover': {backgroundColor: '#1e2c6b'}}}><DeleteOutline color="error" /></IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Box>
      {useMediaQuery("(min-width:1201px)") && <UserData data={data.userData} /> }
    </Box>
  );
};

export default Overview;
