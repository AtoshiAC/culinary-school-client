import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((response) => response.json())
      .then((data) => {
        // Sort the instructors based on the number of students
        const sortedInstructors = data.sort((a, b) => b.students - a.students);
        // Slice the array to get the top 6 instructors
        const topInstructors = sortedInstructors.slice(0, 6);
        setInstructors(topInstructors);
      });
  }, []);

  return (
    <div>
      <SectionTitle
        heading="Best of the School"
        subHeading="Popular Instructors"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-10">
        {instructors.map((instructor) => (
          <InstructorCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
