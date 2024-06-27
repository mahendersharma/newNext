// components/PersonDetailsModal.tsx
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Box,
  } from "@chakra-ui/react";
  
  interface Person {
    name: string;
    species: string[];
    films: string[];
    starships: string[];
    vehicles: string[];
  }
  
  interface PersonDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedPerson: Person | null;
  }
  
  const PersonDetailsModal = ({
    isOpen,
    onClose,
    selectedPerson,
  }: PersonDetailsModalProps) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details for {selectedPerson?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <strong>Species:</strong>
              {Array.isArray(selectedPerson?.species) ? (
                <ul>
                  {selectedPerson?.species.map((species: string, index: number) => (
                    <li key={index}>{species}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedPerson?.species}</p>  
              )}
  
              <strong>Films:</strong>
              {Array.isArray(selectedPerson?.films) ? (
                <ul>
                  {selectedPerson?.films.map((film: string, index: number) => (
                    <li key={index}>{film}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedPerson?.films}</p>  
              )}
  
              <strong>Starships:</strong>
              {Array.isArray(selectedPerson?.starships) ? (
                <ul>
                  {selectedPerson?.starships.map((starship: string, index: number) => (
                    <li key={index}>{starship}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedPerson?.starships}</p>  
              )}
  
              <strong>Vehicles:</strong>
              {Array.isArray(selectedPerson?.vehicles) ? (
                <ul>
                  {selectedPerson?.vehicles.map((vehicle: string, index: number) => (
                    <li key={index}>{vehicle}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedPerson?.vehicles}</p>  
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default PersonDetailsModal;
  