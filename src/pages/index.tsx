// pages/index.tsx
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Spinner,
  IconButton,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { AiFillEye, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import Pagination from "../pages/components/Pagination";
import PersonDetailsModal from "../pages/components/PersonDetailsModal";
import { useDisclosure } from "@chakra-ui/react";

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  created: string;
  url: string;
  films: string[];
  homeworld: string;
  skin_color: string;
  vehicles: string[];
  birth_year: string;
  gender: string;
  species: string[];
  edited: string;
  starships: string[];
}

const ITEMS_PER_PAGE = 10; // Number of items to display per page

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [expandedPerson, setExpandedPerson] = useState<string | null>(null);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [favorites, setFavorites] = useState<Person[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    fetchPeople();
  }, [page]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchPeople = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
        setTotalPages(Math.ceil(data.count / ITEMS_PER_PAGE));
        setLoading(false);
      });
  };

  const handleViewDetails = (person: Person) => {
    setSelectedPerson(person);
    onOpen();
  };

  const toggleFavorite = (person: Person) => {
    if (favorites.some((fav) => fav.name === person.name)) {
      setFavorites(favorites.filter((fav) => fav.name !== person.name));
    } else {
      setFavorites([...favorites, person]);
    }
  };

  const isFavorite = (name: string) =>
    favorites.some((fav) => fav.name === name);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const toggleExpandPerson = (name: string) => {
    if (expandedPerson === name) {
      setExpandedPerson(null);
    } else {
      setExpandedPerson(name);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt="50px">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Star Wars Characters
      </Heading>
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Height</Th>
            <Th>Mass</Th>
            <Th>Hair Color</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {people.map((person, index) => (
            <>
              <Tr key={index} onClick={() => toggleExpandPerson(person.name)}>
                <Td>{person.name}</Td>
                <Td>{person.height}</Td>
                <Td>{person.mass}</Td>
                <Td>{person.hair_color}</Td>
                <Td>
                  <IconButton
                    icon={
                      isFavorite(person.name) ? (
                        <AiFillHeart color="red" />
                      ) : (
                        <AiOutlineHeart />
                      )
                    }
                    aria-label={
                      isFavorite(person.name)
                        ? "Remove from Favorites"
                        : "Add to Favorites"
                    }
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering the expand
                      toggleFavorite(person);
                    }}
                    mr={2}
                  />
                  <Tooltip label="View Details">
                    <IconButton
                      icon={<AiFillEye />}
                      aria-label="View Details"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the expand
                        handleViewDetails(person);
                      }}
                      mr={2}
                    />
                  </Tooltip>

                  <Link
                    href={`/PersonDetails/${encodeURIComponent(
                      person.url.split("/")[5]
                    )}`}
                    passHref
                  >
                    <Button as="a" colorScheme="blue">
                      View Details Page
                    </Button>
                  </Link>
                </Td>
              </Tr>
              {expandedPerson === person.name && (
                <Tr>
                  <Td colSpan={5}>
                    <Table size="sm" variant="striped" colorScheme="gray">
                      <Thead>
                        <Tr>
                          <Th>Birth Year</Th>
                          <Th>Gender</Th>
                          <Th>Homeworld</Th>
                          <Th>Skin Color</Th>
                          <Th>Created</Th>
                          <Th>Edited</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>{person.birth_year}</Td>
                          <Td>{person.gender}</Td>
                          <Td>{person.homeworld}</Td>
                          <Td>{person.skin_color}</Td>
                          <Td>{person.created}</Td>
                          <Td>{person.edited}</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Td>
                </Tr>
              )}
            </>
          ))}
        </Tbody>
      </Table>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <PersonDetailsModal
        isOpen={isOpen}
        onClose={onClose}
        selectedPerson={selectedPerson}
      />
    </Box>
  );
}
