// components/Pagination.tsx
import { HStack, Button } from "@chakra-ui/react";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  return (
    <HStack mt={4} spacing={2} justify="center">
      <Button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        colorScheme="blue"
      >
        Previous
      </Button>
      {Array.from(Array(totalPages).keys()).map((pageNumber) => (
        <Button
          key={pageNumber + 1}
          onClick={() => onPageChange(pageNumber + 1)}
          colorScheme={pageNumber + 1 === page ? "blue" : "gray"}
        >
          {pageNumber + 1}
        </Button>
      ))}
      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        colorScheme="blue"
      >
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
