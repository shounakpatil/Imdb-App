import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fallbackImg from "../assets/sample.jpg"; // added fallback import

const genreColors = {
  Action: { bg: "rgba(255,99,71,0.12)", dot: "rgba(255,99,71,1)" },
  Drama: { bg: "rgba(99,102,241,0.12)", dot: "rgba(99,102,241,1)" },
  Comedy: { bg: "rgba(34,197,94,0.12)", dot: "rgba(34,197,94,1)" },
  Thriller: { bg: "rgba(236,72,153,0.12)", dot: "rgba(236,72,153,1)" },
  "Sci-Fi": { bg: "rgba(56,189,248,0.12)", dot: "rgba(56,189,248,1)" },
  Romance: { bg: "rgba(255,128,171,0.12)", dot: "rgba(255,128,171,1)" },
  Default: { bg: "rgba(16,24,40,0.03)", dot: "#A9A9A9" },
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const DisplayCard = ({ details }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardMedia
        component="img"
        height={expanded ? "600" : "150"}
        image={
          details.image || fallbackImg
        } /* use fallback if details.image falsy */
        alt={details.title}
        onError={(e) => {
          const t = e.currentTarget;
          t.onerror = null;
          t.src = fallbackImg;
        }} /* ensure broken links use local dummy image */
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.year}
        </Typography>
        <Typography className="desc" sx={{ fontSize: "15px" }}>
          {details.genre.map((g) => {
            const c = genreColors[g] || genreColors.Default;
            return (
              <span
                key={g}
                style={{
                  // set CSS variables used by App.css
                  "--chip-bg": c.bg,
                  "--chip-dot": c.dot,
                }}
              >
                <i className="fa fa-circle" aria-hidden="true"></i> {g}
              </span>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <span>
            {" "}
            <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>{" "}
            {details.rating}
          </span>

          <p> {details.description}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DisplayCard;