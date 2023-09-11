import { Box, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, } from "@chakra-ui/react";
import { DeleteModalProps } from "../../types/types";


const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onClose,
  onDelete, 
}) => {
  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.5)" p={{ base: 4, md: "unset" }} />
        <ModalContent>
          <ModalHeader>Confirm Deletion</ModalHeader>
          <ModalBody>Are you sure you want to delete this task?</ModalBody>
          <ModalFooter>
            <button
              onClick={onDelete}
              type="button"
              className="rounded-md	px-2 py-2 text-red-500 bg-red-50 ml-2 font-bold">
               Delete
            </button>

            <button onClick={onClose} className="ml-3">
              Cancel
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default DeleteModal;