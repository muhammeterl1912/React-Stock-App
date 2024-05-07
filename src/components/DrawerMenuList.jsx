import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GridViewIcon from '@mui/icons-material/GridView';
const DrawerMenuList = () => {

const icons = [{
    iconName:<GridViewIcon />,
    title:"Dashboard",
    path:"/stock",
}]


  return (
    <div>
      <List>
        {icons?.map((icon, index) => (
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon.iconName}
              </ListItemIcon>
              <ListItemText primary={icon.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerMenuList;
