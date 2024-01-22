import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import React from 'react';
import StyledKeyBoardAdwareScrollView from '../../components/StyledKeyBoardAdwareScrollView';
import { customersData } from '../../data/customersData';
import { ModalBackdrop } from '@gluestack-ui/themed';
import { ModalContent } from '@gluestack-ui/themed';
import { CloseIcon } from '@gluestack-ui/themed';

const CustomersPage = () => {
  return (
    <StyledKeyBoardAdwareScrollView>
      <CustomerContainer />
    </StyledKeyBoardAdwareScrollView>
  );
};

export default CustomersPage;

const CustomerContainer = () => {
  return (
    <Box
      sx={{
        rowGap: '$4',
      }}
    >
      {customersData.map((data, index) => (
        <CustomerCard data={data} key={index} />
      ))}
    </Box>
  );
};
const CustomerCard = ({ data }: { data: any }) => {
  return (
    <Pressable
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '$full',
        justifyContent: 'space-between',
        p: '$2',
        backgroundColor: '$darkBlue700',
        borderRadius: '$md',
      }}
    >
      <CustomerAvatar
        fallBackText={data?.name?.slice(0.2)}
        imageUri={data?.avatar?.src}
      />
      <Box
        sx={{
          ml: '$3',
          flex: 1,
        }}
      >
        <Heading>{data?.name}</Heading>
        <Text>{data?.email}</Text>
      </Box>
      <Text
        sx={{
          ml: '$3',
          textAlign: 'right',
        }}
      >
        {data?.spend}
      </Text>
    </Pressable>
  );
};

const CustomerAvatar = ({
  fallBackText,
  imageUri,
}: {
  fallBackText: string;
  imageUri: string;
}) => {
  return (
    <Avatar>
      <AvatarFallbackText>{fallBackText}</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: imageUri,
        }}
        alt="fallback-image"
      />
    </Avatar>
  );
};

// const CustomerDetail = React.forwardRef(({ showModal, setShowModal }) => {
//   return (
//     <Modal
//       isOpen={showModal}
//       onClose={() => {
//         setShowModal(false);
//       }}
//       finalFocusRef={modalRef}
//     >
//       <ModalBackdrop />
//       <ModalContent
//         sx={{
//           height: 'auto',
//           pb: '$10',
//         }}
//       >
//         <ModalHeader>
//           <Heading size="lg">Customer Detail</Heading>
//           <ModalCloseButton>
//             <Icon as={CloseIcon} />
//           </ModalCloseButton>
//         </ModalHeader>
//         <ModalBody>
//           {/* <IconButton Icon={PersonStandingIcon} text="Customers" />
//             <IconButton Icon={Package2Icon} text="Products" />
//             <IconButton Icon={Package} text="WholeSale" />
//             <IconButton Icon={Package2Icon} text="Catalogue" />
//             <IconButton Icon={SettingsIcon} text="Settings" /> */}
//         </ModalBody>
//       </ModalContent>
//     </Modal>
//   );
// });
