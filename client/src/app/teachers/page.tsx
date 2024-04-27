"use client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MediaCard from "@/components/Card";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container } from "@/styles/course.style";
import { useEffect, useState } from "react";
import { TeacherType } from "@/api/teacher";
import { getAllTeachers } from "@/api/teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState<TeacherType[]>([]);

  const fetchCourses = async () => {
    const teacherData = await getAllTeachers();
    if (teacherData) {
      setTeachers(teacherData);
    } else {
      alert("An error occurred while fetching gigs.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container>
      <Header />

      <div className="course-section">
        <h2 className="course-heading">Our Qualified Staff</h2>
        <Grid container spacing={2}>
          {teachers.map((item: TeacherType) => (
            <Grid item xs={6} md={4} lg={3} key={item.id}>
              <MediaCard
                imgLink={item.user.profileUrl}
                cardHeading={`${item.user.firstName} ${item.user.lastName}`}
                cardDescription={item.bio}
                btnLabel="More Detail"
                btnLink="/"
                cardImageHeight={300}
                isTeacher={true}
                teacherData={item}
                itemId={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </Container>
  );
};

export default Teachers;
