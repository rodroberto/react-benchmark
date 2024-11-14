import { ReactNode } from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: ModalSize;
}

const Modal = ({
  title,
  isOpen,
  onClose,
  children,
  size = 'md',
}: ModalProps) => {
  return (
    <ChakraModal size={size} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create {title}</ModalHeader>
        <ModalCloseButton />
        {children}
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
