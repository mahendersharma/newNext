import { Box, Heading, Text, Stack, Image } from "@chakra-ui/react";

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

const PersonCard = ({ person }: { person: Person }) => {
  return (
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
  );
};

export default PersonCard;
