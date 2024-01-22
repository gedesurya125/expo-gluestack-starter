import { LinearGradient } from 'expo-linear-gradient';
import { styled } from '@gluestack-ui/themed';

const ExpoLinearGradient = styled(
  LinearGradient,
  {},

  {
    resolveProps: ['colors'],
  },
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  }
);

export default ExpoLinearGradient;
