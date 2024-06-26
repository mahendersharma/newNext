// src/pages/Favorites.tsx
import { useState, useEffect } from "react";
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, HStack } from "@chakra-ui/react";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const Favorites = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch favorites from localStorage when component mounts
    const storedFavorites = localStorage.getItem("favorites");
    console.log("Stored favorites:", storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFavorites = favorites.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  console.log("Current favorites:", currentFavorites);

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Favorite Star Wars Characters
      </Heading>
      {favorites.length === 0 ? (
        <Text>No favorite characters selected.</Text>
      ) : (
        <>
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>Index</Th>
                <Th>Name</Th>
                <Th>Height</Th>
                <Th>Mass</Th>
                <Th>Hair Color</Th>
                <Th>Skin Color</Th>
                <Th>Eye Color</Th>
                <Th>Birth Year</Th>
                <Th>Gender</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentFavorites.map((character: Character, index: number) => (
                <Tr key={index}>
                  <Td>{indexOfFirstItem + index + 1}</Td>
                  <Td>{character.name}</Td>
                  <Td>{character.height}</Td>
                  <Td>{character.mass}</Td>
                  <Td>{character.hair_color}</Td>
                  <Td>{character.skin_color}</Td>
                  <Td>{character.eye_color}</Td>
                  <Td>{character.birth_year}</Td>
                  <Td>{character.gender}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <HStack spacing={2} mt={4}>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button key={i} onClick={() => handlePageChange(i + 1)} disabled={currentPage === i + 1}>
                {i + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Box>
  );
};

export default Favorites;
