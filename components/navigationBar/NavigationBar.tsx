import {
  AddIcon,
  ButtonIcon,
  CloseIcon,
  GlobeIcon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from '@gluestack-ui/themed';
import { SettingsIcon } from '@gluestack-ui/themed';
import { Heading } from '@gluestack-ui/themed';
import { ModalContent } from '@gluestack-ui/themed';
import {
  Box,
  Button,
  Text,
  Icon,
  MenuIcon,
  Center,
  Menu,
  ButtonText,
  MenuItem,
  MenuItemLabel,
} from '@gluestack-ui/themed';
import { Link } from 'expo-router';
import {
  BoxIcon,
  Package,
  Package2,
  Package2Icon,
  PersonStandingIcon,
} from 'lucide-react-native';
import React, { Dispatch, SetStateAction } from 'react';
import { router } from 'expo-router';
import { usePathChangeEffect } from '../../helper/usePathChangeEffect';

export const NavigationBar = () => {
  return (
    <Box
      sx={{
        bg: '$amber500',
        minHeight: '$12',
        width: '$full',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: '$2',
      }}
    >
      <Link href={'/'}>
        <Heading>Super Company</Heading>
      </Link>
      <Avatar />
      <MenuButton />
    </Box>
  );
};
const Avatar = () => {
  return (
    <Center
      sx={{
        width: '$10',
        height: '$10',
        borderRadius: '$full',
        backgroundColor: '$amber100',
        ml: 'auto',
      }}
    >
      <Text
        sx={{
          color: '$primary400',
        }}
      >
        S
      </Text>
    </Center>
  );
};

const MenuButton = () => {
  const [showModal, setShowModal] = React.useState(false);
  const modalRef = React.useRef(null);

  const navigationLinks = [
    { label: 'Customers', to: '/customers', Icon: PersonStandingIcon },
    { label: 'Products', to: '/customers', Icon: Package2 },
    { label: 'Catalogue', to: '/customers', Icon: Package },
    { label: 'Settings', to: '/customers', Icon: SettingsIcon },
  ];

  usePathChangeEffect(() => {
    setShowModal(false);
  });

  return (
    <>
      <Button
        ref={modalRef}
        size="sm"
        sx={{
          backgroundColor: 'transparent',
          px: '$3',
          py: '$0',
          position: 'relative',
        }}
        onPress={() => setShowModal(true)}
      >
        <Icon as={MenuIcon} m="$0" w="$6" h="$6" color="$amber100" />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={modalRef}
      >
        <ModalBackdrop />
        <ModalContent
          sx={{
            height: 'auto',
            pb: '$10',
          }}
        >
          <ModalHeader>
            <Heading size="lg">Menu</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            {navigationLinks.map((data, index) => {
              return (
                <IconButton
                  key={index}
                  Icon={data?.Icon}
                  text={data?.label}
                  to={data?.to}
                />
              );
            })}
            {/* <IconButton Icon={PersonStandingIcon} text="Customers" />
            <IconButton Icon={Package2Icon} text="Products" />
            <IconButton Icon={Package} text="WholeSale" />
            <IconButton Icon={Package2Icon} text="Catalogue" />
            <IconButton Icon={SettingsIcon} text="Settings" /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const IconButton = ({
  Icon,
  text,
  to,
}: {
  Icon: any;
  text: string;
  to: string;
}) => {
  return (
    <Button
      onPress={() => {
        router.push({
          //@ts-ignore
          pathname: to,
        });
      }}
      sx={{
        mt: '$4',
      }}
    >
      <ButtonIcon as={Icon} />
      <ButtonText
        sx={{
          ml: '$3',
        }}
      >
        {text}
      </ButtonText>
    </Button>
  );
};
