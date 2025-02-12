import { Box, Heading, Text,Stack } from "@chakra-ui/react";
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
  films: string;
  species: string;
  starships: string;
  url: string;
  vehicles: string;
  created: string;
  edited: string;
}

const PersonDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("Router Query:", router.query);
  console.log("Person ID in [id].tsx:", id);

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
      <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      boxShadow="lg"
      bgGradient="linear(to-r, teal.500, green.500)"
      color="white"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        {person.name}
      </Heading>
      <Stack spacing={3}>
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
          <strong>Films:</strong> {Array.isArray(person?.films) ? (
            <ul>
              {person?.films.map((films: string, index: number) => (
                <li key={index}>{films}</li>
              ))}
            </ul>
          ) : (
            <p>{person?.films}</p> 
          )}
        </Text><Text>
          <strong>Species:</strong> {Array.isArray(person?.species) ? (
            <ul>
              {person?.species.map((species: string, index: number) => (
                <li key={index}>{species}</li>
              ))}
            </ul>
          ) : (
            <p>{person?.species}</p>
          )}
        </Text><Text>
        </Text><Text>
          <strong>Vehicles:</strong> {Array.isArray(person?.vehicles) ? (
            <ul>
              {person?.vehicles.map((vehicles: string, index: number) => (
                <li key={index}>{vehicles}</li>
              ))}
            </ul>
          ) : (
            <p>{person?.vehicles}</p> 
          )}
        </Text>
        <Text>
          <strong>Starships:</strong> {Array.isArray(person?.starships) ? (
            <ul>
              {person?.starships.map((starships: string, index: number) => (
                <li key={index}>{starships}</li>
              ))}
            </ul>
          ) : (
            <p>{person?.starships}</p> 
          )}
        </Text>
        <Text>
          <strong>Created:</strong> {person.created}
        </Text>
        <Text>
          <strong>Edited:</strong> {person.edited}
        </Text>
      </Stack>
    </Box>
    </Box>
  );
};

export default PersonDetails;
