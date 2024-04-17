import React, { ReactNode, useState } from "react";
import ModalComponent from "./Modal";
import Form from "react-bootstrap/Form";
import { Rating as ReactRating } from "@smastrom/react-rating";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { AddTeacherFeedBack } from "@/api/teacher";
import useAppContext from "@/hooks/useAppContext";
import { toastErrMessage, toastSuccessMessage } from "@/utils/functions";

interface RatingProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  teacherId: string;
}

const Rating: React.FC<RatingProps> = ({ open, setOpen, teacherId = "" }) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAppContext();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await AddTeacherFeedBack({
        rating,
        feedback,
        student: user?.id ?? "",
        teacher: teacherId,
      });
      if (res.success) {
        toastSuccessMessage("Feedback submitted");
      } else {
        toastErrMessage("Something is went wrong.");
      }
    } catch (error) {
      toastErrMessage("Something is went wrong.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <ModalComponent
      open={open}
      setOpen={setOpen}
      closeIconStyle={{ color: "black", marginRight: "-35px" }}
      containerStyle={{ color: "black" }}
    >
      <div
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Rate Your Teacher
      </div>
      <Form.Group controlId="formGridFirstName" className="mb-1.5">
        <Form.Label className="mb-0.5">Feedback</Form.Label>
        <Form.Control
          as="textarea" // Use textarea instead of text
          placeholder="Give feedback about teacher"
          name="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </Form.Group>
      <div>Rate Now</div>
      <ReactRating
        style={{ maxWidth: 150 }}
        value={rating}
        onChange={setRating}
      />
      <div style={{ textAlign: "center", marginTop: "35px" }}>
        <Button
          variant="contained"
          startIcon={
            isLoading ? <CircularProgress size={22} color="warning" /> : null
          }
          onClick={handleSubmit}
          style={{
            background: "#002D5F",
            width: "300px",
            borderRadius: "20px",
          }}
        >
          Submit
        </Button>
      </div>
    </ModalComponent>
  );
};

export default Rating;
