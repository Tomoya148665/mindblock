import { useMediaQuery } from "react-responsive";

export function useResponsiveBackgroundImage() {
  // Define your breakpoint sizes here
  const breakpoints = {
    sm: "(max-width: 640px)",
    md: "(max-width: 768px)",
    lg: "(max-width: 1024px)",
    xl: "(max-width: 1280px)",
  };

  // Use the useMediaQuery hook to check for the current active breakpoint
  const isSm = useMediaQuery({ query: breakpoints.sm });
  const isMd = useMediaQuery({ query: breakpoints.md });
  const isLg = useMediaQuery({ query: breakpoints.lg });
  const isXl = useMediaQuery({ query: breakpoints.xl });
}
