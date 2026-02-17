'use client';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from '@heroui/react';
import {ICard} from './Card';
import {LuExternalLink} from 'react-icons/lu';

interface IModalProps extends ICard {
  onClose: () => void;
  onOpen: () => void;
  isOpen: boolean;
}

export const ModalPopup: React.FC<IModalProps> = ({content, title, isOpen, onClose, onClick}) => {
  return (
    <>
      <Modal
        backdrop={'blur'}
        isOpen={isOpen}
        onClose={onClose}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody className='whitespace-break-spaces'>{content}</ModalBody>
              <ModalFooter>
                {/*<Button
                  color='danger'
                  variant='light'
                  onPress={onClose}
                >
                  Close
                </Button>*/}
                <Button
                  color='primary'
                  onPress={onClick}
                >
                  Demo <LuExternalLink />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
