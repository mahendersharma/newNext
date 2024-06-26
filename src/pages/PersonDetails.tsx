// PersonDetails.tsx
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  const { personId } = router.query;
  const [person, setPerson] = useState<Person | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      if (personId && typeof personId === "string") {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${personId}/`);
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
  }, [personId]);

  if (!person) {
    return (
      <Box textAlign="center" mt="50px">
        <Heading>Loading...</Heading>
      </Box>
    );
  }

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        {person.name} Details
      </Heading>
      <Box>
        <Text>
          <strong>Name:</strong> {person.name}
        </Text>
        <Text>
          <strong>Height:</strong> {person.height}
        </Text>
        <Text>
          <strong>Mass:</strong> {person.mass}
        </Text>
        <Text>
          <strong>Hair Color:</strong> {person.hair_color}
        </Text>
        <Text>
          <strong>Eye Color:</strong> {person.eye_color}
        </Text>
        <Text>
          <strong>Birth Year:</strong> {person.birth_year}
        </Text>
        <Text>
          <strong>Gender:</strong> {person.gender}
        </Text>
        <Text>
          <strong>Homeworld:</strong> {person.homeworld}
        </Text>
        <Text>
          <strong>Skin Color:</strong> {person.skin_color}
        </Text>
        <Text>
          <strong>Created:</strong> {person.created}
        </Text>
        <Text>
          <strong>Edited:</strong> {person.edited}
        </Text>
      </Box>
    </Box>
  );
};

export default PersonDetails;
