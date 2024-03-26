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
import { getCourses } from "@/api/course";
import { CourseType } from "@/api/course";

const Courses = () => {
  const [courses, setCourses] = useState<CourseType[]>([]);

  const fetchCourses = async () => {
    const data = await getCourses();
    if (data) {
      setCourses(data);
    } else {
      alert("An error occurred while fetching courses.");
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  console.log(courses);
  return (
    <Container>
      <Header />
      <div className="course-section">
        <h2 className="course-heading">All New Courses</h2>
        <Grid container spacing={2}>
          {courses.map((item: CourseType) => (
            <Grid item xs={6} md={4} lg={3} key={item.id}>
              <MediaCard
                imgLink={item.coverPhotoUrl}
                cardHeading={item.name}
                cardDescription={item.description}
                btnLabel="More Detail"
                btnLink="/"
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </Container>
  );
};

export default Courses;
