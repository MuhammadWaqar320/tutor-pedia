import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import ReviewsIcon from "@mui/icons-material/Reviews";
import SubjectIcon from "@mui/icons-material/Subject";
import SchoolIcon from "@mui/icons-material/School";

interface MediaCardPropsType {
  cardMaxWidth?: number;
  cardImageHeight?: number;
  imgLink?: string;
  imgTitle?: string;
  cardHeading?: string;
  cardDescription?: string;
  btnLabel?: string;
  btnLink?: string;
  isTeacher?: boolean;
  teacherData?: any;
  itemId?: string;
}

const MediaCard: React.FC<MediaCardPropsType> = ({
  cardMaxWidth = 345,
  cardImageHeight = 180,
  imgLink = "",
  imgTitle = "",
  cardHeading = "",
  cardDescription = "",
  btnLabel = "",
  btnLink = "",
  isTeacher = false,
  teacherData,
  itemId,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const generateRandomRating = () => {
    // Generate a random number between 1 and 5 with one decimal point
    const rating = (Math.random() * (5 - 1) + 1).toFixed(1);
    return parseFloat(rating);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: cardImageHeight, objectFit: "cover" }}
        image={imgLink}
        title={imgTitle}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ borderBottom: "1px solid #d9d7d7" }}
        >
          {cardHeading}
        </Typography>
        {isTeacher ? (
          <>
            <Typography
              variant="body2"
              style={{ textAlign: "justify", height: "80px" }}
            >
              <span style={{ fontWeight: "bold" }}>Bio: </span>{" "}
              {cardDescription.length > 115
                ? `${cardDescription.substring(0, 115)}...`
                : cardDescription}
            </Typography>
            <Typography>
              <SchoolIcon />
              <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                Qualification:{" "}
              </span>{" "}
              {teacherData?.qualification}
            </Typography>
            <Typography>
              <SubjectIcon />
              <span style={{ fontWeight: "bold", marginLeft: "3px" }}>
                Specialization:{" "}
              </span>{" "}
              {teacherData?.specialization}
            </Typography>
            <Typography>
              <ReviewsIcon fontSize="small" />
              <span style={{ fontWeight: "bold", marginLeft: "6px" }}>
                Rating:{" "}
              </span>{" "}
              {generateRandomRating()}
              <StarIcon
                fontSize="small"
                style={{ marginBottom: "2px", color: "orange" }}
              />
            </Typography>
          </>
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: "justify", height: "80px" }}
          >
            {cardDescription.length > 170
              ? `${cardDescription.substring(0, 170)}...`
              : cardDescription}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {isTeacher ? (
          <Link href={`/teachers/${itemId}`}>
            <Button size="small" aria-describedby={id}>
              {btnLabel}
            </Button>
          </Link>
        ) : (
          <Link href={`/courses/${itemId}`}>
            <Button size="small" aria-describedby={id}>
              {btnLabel}
            </Button>
          </Link>
        )}
      </CardActions>
    </Card>
  );
};

export default MediaCard;
