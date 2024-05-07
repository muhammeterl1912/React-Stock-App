import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import StoreIcon from "@mui/icons-material/Store";
import StarsIcon from "@mui/icons-material/Stars";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useNavigate } from "react-router-dom";

const DrawerMenuList = () => {
  const navigate = useNavigate();

  const icons = [
    {
      iconName: <GridViewIcon />,
      title: "Dashboard",
      path: "/stock",
    },
    {
      title: "Purchases",
      iconName: <ShoppingCartIcon />,
      path: "/stock/purchases/",
    },
    {
      title: "Sales",
      iconName: <AttachMoneyIcon />,
      path: "/stock/sales/",
    },
    {
      title: "Firms",
      iconName: <StoreIcon />,
      path: "/stock/firms/",
    },
    {
      title: "Brands",
      iconName: <StarsIcon />,
      path: "/stock/brands/",
    },
    {
      title: "Products",
      iconName: <InventoryIcon />,
      path: "/stock/products/",
    },
  ];

  return (
    <div>
      <List>
        {icons?.map((icon, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(icon.path)}
          >
            <ListItemButton>
              <ListItemIcon>{icon.iconName}</ListItemIcon>
              <ListItemText primary={icon.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerMenuList;
