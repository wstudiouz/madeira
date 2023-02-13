import React, {ReactElement} from "react";
import {theme} from "../../theme";
import {Link} from "react-router-dom";
import {Stack, SxProps} from "@mui/system";
type ComponentProps = {
  content: ReactElement | string;
  url?: string;
  sx?: SxProps;
};
const MiniGoldCard = ({content, url, sx}: ComponentProps): ReactElement => {
  const styles = {
    position: "absolute",
    content: '""',
    width: "100%",
    overflowX: "hidden",
    display: "block",
    border: `1px solid ${theme.palette.secondary.main}`,
  };
  return (
    <Stack sx={{position: "relative"}}>
      <Stack
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
          ...sx,
        }}
      >
        {url ? (
          <Link
            to={url}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: theme.palette.secondary.main,
              textDecoration: "none",
            }}
          >
            {content}
          </Link>
        ) : (
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: theme.palette.secondary.main,
            }}
          >
            {content}
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
export default MiniGoldCard;
