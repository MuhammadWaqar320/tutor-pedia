import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface MediaCardPropsType {
  cardMaxWidth: number;
  cardImageHeight: number;
  imgLink: string;
  imgTitle: string;
  cardHeading: string;
  cardDescription: string;
  btnLabel: string;
  btnLink: string;
}

const MediaCard = ({
  cardMaxWidth = 345,
  cardImageHeight = 180,
  imgLink = "",
  imgTitle = "",
  cardHeading = "",
  cardDescription = "",
  btnLabel = "",
  btnLink = "",
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 180,objectFit:'cover' }} image={imgLink} title={imgTitle} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardHeading}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "justify" }}
        >
          {cardDescription.length > 170
            ? `${cardDescription.substring(0, 170)}...`
            : cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={btnLink}>
          <Button size="small">{btnLabel}</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
