import { Styled } from '@gluestack-style/react/lib/typescript/types';
import { Box } from '@gluestack-ui/themed';
import { styled } from '@gluestack-ui/themed';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StyledEKeyboardAwareScrollView = styled(
  KeyboardAwareScrollView,
  {
    flexGrow: 1,
    minHeight: '100%',
    backgroundColor: '$darkBlue800',
  },
  {
    componentName: 'StyledEKeyboardAwareScrollView',
  }
);

export default function ScrollViewContentContainer({
  children,
  sx,
  boxSx,
}: {
  children?: React.ReactNode;
  sx?: Styled;
  boxSx?: Styled;
}) {
  return (
    <StyledEKeyboardAwareScrollView sx={sx}>
      <Box
        w="$full"
        flex={1}
        sx={{
          justifyContent: 'flex-start',
          px: '$4',
          pt: '$6',
          pb: '$32',
          ...boxSx,
        }}
      >
        {children}
      </Box>
    </StyledEKeyboardAwareScrollView>
  );
}
