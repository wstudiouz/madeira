import React, {ReactElement} from "react";
import ListItem from "@mui/material/ListItem";
import {theme} from "../../theme";
import {Link} from "react-router-dom";
type ComponentProps = {
  MyIcon: ReactElement;
  url: string;
};
const HeaderIcon = ({MyIcon, url}: ComponentProps): ReactElement => {
  const styles = {
    position: "absolute",
    content: '""',
    width: "100%",
    overflowX: "hidden",
    display: "block",
    border: `1px solid ${theme.palette.secondary.main}`,
  };
  return (
    <ListItem
      sx={{
        "width": "40px",
        "height": "40px",
        "position": "relative",
        "overflow": "hidden",
        "border": `1px solid ${theme.palette.secondary.main}`,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "margin": "0 3px",
        "&:before": {
          ...styles,
          marginTop: "-33px",
        },
        "&:after": {
          ...styles,
          marginTop: "33px",
        },
      }}
    >
      <Link
        to={url}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: theme.palette.secondary.main,
        }}
      >
        {MyIcon}
      </Link>
    </ListItem>
  );
};
export default HeaderIcon;
