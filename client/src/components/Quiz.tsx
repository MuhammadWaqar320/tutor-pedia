import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
} from "@mui/material";

export interface Question {
  question: string;
  options: string[];
  correctOptionIndex: number;
}

interface QuizProps {
  questions: Question[];
  category: string;
  handleStates: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, category, handleStates }) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    new Array(questions.length).fill(-1)
  );

  const [timer, setTimer] = useState<number>(180);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          setIsTimeUp(true);
          handleSubmit();
            setSelectedOptions(new Array(questions.length).fill(-1));
            setTimer(180)
          return prevTimer;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = parseInt(event.target.value, 10);
    setSelectedOptions(newSelectedOptions);
  };

  const calculateScore = (): number => {
    let score = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption === questions[index].correctOptionIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const totalScore = calculateScore();
    if (totalScore >= 7) {
      handleStates();
      alert(
        `Congratulations! You have passed the test with a score of ${totalScore} out of ${questions.length}.`
      );
    } else {
        setTimer(180)
      alert(
        `Sorry, you have failed the test. Your score is ${totalScore} out of ${questions.length}. Please try again.`
      );
    }
    // {calculateScore()} / ${questions.length}
  };
  return (
    <Card
      sx={{
        maxWidth: 800,
        margin: "auto",
        marginTop: 5,
        marginBottom: 5,
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {category} Test
      </h1>
      <h1
        style={{
          textAlign: "center",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Remaining time: {formatTime(timer)}
      </h1>
      <CardContent>
        {questions.map((question, index) => (
          <div key={index}>
            <Typography
              variant="body1"
              style={{ fontWeight: "bold", userSelect: "none" }}
              gutterBottom
            >
              {question.question}
            </Typography>
            <FormControl component="fieldset" style={{ userSelect: "none" }}>
              <RadioGroup
                value={selectedOptions[index]}
                onChange={(event) => handleOptionChange(event, index)}
              >
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel
                    key={optionIndex}
                    value={optionIndex}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ))}
        <Button
          variant="contained"
          style={{ background: "#1976d2", marginTop: "20px" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </CardContent>
    </Card>
  );
};

export default Quiz;
