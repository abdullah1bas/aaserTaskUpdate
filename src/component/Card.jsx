/* eslint-disable react/prop-types */
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

// eslint-disable-next-line no-unused-vars
const Card = ({dataCard, key}) => {
    let IconPaper = dataCard.icon;
    // console.log(dataCard)
  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "200px",
        p: 3,
        backgroundColor: "#0B1739",
        borderRadius: "10px",
      }}
      key={key}
    >
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Box>
          <Typography sx={{color: '#ffffffad'}}>{dataCard.title}</Typography>
          <Typography sx={{fontSize: '34px', color: '#fff', my: 2}}>{dataCard.num}</Typography>
        </Box>
        <Avatar sx={{ bgcolor: dataCard.bg , borderRadius: 4, width: '50px', height: '50px'}} >
          <IconPaper sx={{color: dataCard.color}}/>
        </Avatar>
      </Stack>
      <Box sx={{display: 'flex', alignItems: 'center', color: '#ffffffad'}}>
        <Box sx={{color: dataCard.rate < 0 ? pink[200] : '#0fa775' , display: 'flex', alignItems: 'center', mr: 1}}>
          <Avatar sx={{ bgcolor: dataCard.rate < 0 ? pink[900] : '#18404b'  , width: '30px', height: '30px', mr: 1}}>
            {dataCard.rate < 0 ? <ArrowDownward  sx={{ color: dataCard.rate < 0 ? pink[200] : '#0fa775'  , width: '20px', height: '20px'}} />
            : <ArrowUpward  sx={{ color: dataCard.rate < 0 ? pink[200] : '#0fa775'  , width: '20px', height: '20px'}} /> }
        </Avatar> {dataCard.rate}%
        </Box>
        Up from last month
      </Box>
    </Paper>
  );
};

export default Card;
