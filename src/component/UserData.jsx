/* eslint-disable react/prop-types */
import { Box, Button, Divider, FormControl, NativeSelect, Stack, Typography, useMediaQuery } from "@mui/material";
import DataOptions from "./DataOptions";
import Pie from "./Pie";
const UserData = ({data}) => {
    console.log('UserData Page');
    return (
        <Stack sx={{ width: `350px`, textAlign: 'center', ml: 2}} >
          {useMediaQuery("(min-width:1201px)") && (<Button>
            <img src={data.image} style={{width: '100px', marginTop: 10}} />
          </Button>)}
          <Typography sx={{color: 'white' ,textAlign: 'center', mt: 3}}>{data.userName}</Typography>
          <Stack direction={'row'} sx={{py:2, mt: 2, justifyContent: 'space-between', mr: 1}}>
            {data.Achievements.map((el, index) => 
            <Stack direction={'row'} key={index} sx={{textAlign: 'center'}}>
              <Box sx={{mr: 2}}>
                <Typography variant="body1" sx={{color: '#ffffff6b', mb: 2}}>{el.name}</Typography>
                <Typography variant="body1" sx={{color: '#fff'}}>{el.value}</Typography>
              </Box>
              {index != 2 && <Divider orientation="vertical" variant="middle" sx={{backgroundColor: '#fff', mx: 'auto'}}/>}
            </Stack>
            )}
          </Stack>
          <Divider sx={{backgroundColor: '#fff', width: 'calc(100% - 20px)', my: 3}}  />
          <DataOptions  data={data}/>
          <Stack direction={'row'} alignItems={'center'} color={'#234c9f'} my={1} >
            <Typography sx={{mr: 3}}>July 30, 2022</Typography>
            <Divider sx={{backgroundColor: '#234c9f', width: '60%'}} />
          </Stack>

          {data.userVisited.map((el, index) => 
          <Stack key={index} direction={'column'} sx={{textAlign:'start', gap: 1, justifyContent: 'center'}}>
            <FormControl sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', width: '90%'}}>
              <Box sx={{width: '8px', height: '8px', backgroundColor: '#ffffff6b', borderRadius: '50%', mr: 1}} />
                <NativeSelect
                  sx={{
                    color: "#ffffff96 !important",
                    backgroundColor: 'inherit',
                    flex:1,
                    p: "3px 8px",
                    borderRadius: 2,
                    "& .css-1g12qau-MuiSvgIcon-root-MuiNativeSelect-icon": {
                      color: "#ffffff96",
                    },
                    "& .css-19ygod6-MuiNativeSelect-select-MuiInputBase-input-MuiInput-input:not([multiple]) option":
                      {
                        backgroundColor: "white !important",
                        color: "black !important",
                      },
                  }}
                  defaultValue={"am"}
                  inputProps={{
                    name: "am",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={'am'}>08:30 am - 10:30 am</option>
                  <option value={'pm'}>06:30 am - 8:30 am</option>
                </NativeSelect>
              </FormControl>
              <Typography variant="body1" sx={{ml: 3, color: '#fff'}}>{el.visited}</Typography>
              <Typography variant="body1" sx={{ml: 3, color: '#ffffff6b'}}>{el.visitedName}</Typography>
              <Divider sx={{backgroundColor: '#ffffff6b', my: 3}} />
            </Stack>
          )}
          <Typography variant="h6" sx={{color: '#fff' , textAlign: 'start', mb: 4}}>Patient Satisfaction</Typography>
          <Box sx={{height: '300px'}}>

            <Box sx={{flexGrow: 1,minWidth: "300px",maxWidth: '300px', position: 'relative' }}>

              <Pie data={data.pieChartData} />
              <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-80px, -40px)'}}>
                <Typography variant="h6" align="center" sx={{ mt: "15px" , fontSize: '14px'}}>
                  Total
                </Typography>
                <Typography variant="body2" px={0.7} pb={3} align="center" sx={{fontSize: '18px', fontWeight: 'bold' ,color : '#306bde'}}>
                  {data.pieTotal} 
                </Typography>
              </Box>
            </Box>
          
          </Box>
      </Stack>
    );
}

export default UserData;
