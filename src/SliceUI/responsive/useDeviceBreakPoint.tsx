import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Breakpoints, getDeviceBreakpoint } from './helper'; // Assume getDeviceBreakpoint exists in helper

export const useDeviceBreakpoint = (): keyof typeof Breakpoints => {
  const [deviceBreakpoint, setDeviceBreakpoint] = useState<keyof typeof Breakpoints>(
    getDeviceBreakpoint() // Initialize with the current breakpoint
  );

  useEffect(() => {
    const handleResize = (): void => {
      setDeviceBreakpoint(getDeviceBreakpoint());
    };

    // Add listener for dimension changes
    const subscription = Dimensions.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => {
      if (subscription?.remove) {
        subscription.remove(); // For React Native >= 0.65
      }
    };
  }, []);

  return deviceBreakpoint;
};

export const withDeviceBreakpoint = <P extends object>(
  WrappedComponent: React.ComponentType<P & { deviceBreakpoint: string }>
) => {
  return function WrapperComponent(props: P) {
    const deviceBreakpoint = useDeviceBreakpoint();
    return <WrappedComponent {...props} deviceBreakpoint={deviceBreakpoint} />;
  };
};
