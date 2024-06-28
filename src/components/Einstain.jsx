import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import einstein from "../images/einstain.jpg";

const Einstain = () => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ width: "33%", marginLeft: "2%" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={einstein}
        title="Albert Einstein"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Albert Einstein
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Albert Einstein was a theoretical physicist who developed the theory
          of relativity, one of the two pillars of modern physics. His work is
          also known for its influence on the philosophy of science.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Einstain;
