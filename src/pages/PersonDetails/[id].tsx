// pages/PersonDetails/[id].tsx
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PersonCard from "../../pages/components/PersonCard";

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  skin_color: string;
  created: string;
  edited: string;
}

const PersonDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      if (id && typeof id === "string") {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${id}/`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data: Person = await response.json();
          setPerson(data);
        } catch (error) {
          console.error("Error fetching person details:", error);
        }
      }
    };

    fetchPerson();
  }, [id]);

  if (!person) {
    return (
      <Box textAlign="center" mt="50px">
        <Heading>Loading...</Heading>
      </Box>
    );
  }

  return (
    <Box p={5} display="flex" justifyContent="center">
      <PersonCard person={person} />
    </Box>
  );
};

export default PersonDetails;
