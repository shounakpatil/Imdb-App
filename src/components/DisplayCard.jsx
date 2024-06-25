import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardMedia} from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
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
        height={expanded?"600":"150"}
        image={details.image}
        alt={details.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.year}
        </Typography>
        <Typography className="desc" sx={{fontSize:"15px",}}>
        {details.genre.map((item)=>(
          <span> <i className="fa fa-circle" style={{color: "#A9A9A9",}}></i> {item} </span>
        ))}
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
          <span> <i className="fas fa-star" style={{color: "#FFD43B",}} ></i>  {details.rating}</span>

         <p> {details.description}</p>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DisplayCard;
