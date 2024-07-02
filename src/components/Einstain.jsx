import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import einstein from "../images/einstain.jpg";

const Einstain = ({ image, name, quote, intro }) => {
  return (
    <Card sx={{ width: 345 }} style={{ marginLeft: "2%" }}>
      <CardMedia sx={{ height: 140 }} image={image} title="Albert Einstein" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {intro}
        </Typography>
      </CardContent>
      <CardActions>{quote}</CardActions>{" "}
      <Button size="small">Learn More</Button>
    </Card>
  );
};

export default Einstain;
