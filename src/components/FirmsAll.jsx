import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useSelector } from "react-redux"
export default function FirmsAll() {
    const data = useSelector((item)=>item.firms.firms)


    return (
<Box sx={{display:"flex",flexWrap:"wrap",gap:"1.5rem"}}>
{
    data?.map(firm =>(
    <Card sx={{ maxWidth: 345,display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem",borderRadius:"8px" }}>
    <Typography gutterBottom variant="h5" component="div">
         {firm.name}
        </Typography>
    <Typography variant="body2" color="text.secondary" pb={"5px"}>
        {firm.address}
        </Typography>
      <CardMedia
        component="img"
        alt="green iguana"
    
        width="100%"
        sx={{objectFit :"contain",   maxHeight:"140px",height:"140px"}}
        
        image={firm.image}
      />
      <CardContent>
     
     
      </CardContent>
      <CardActions>
        <IconButton size="small"><EditIcon/></IconButton>
        <IconButton size="small"><DeleteIcon/></IconButton>
      </CardActions>
    </Card>
))
}
</Box>


    )
}
