import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const WorkspaceSpinner = () => (
  <Box
    className="workspaceBox"
    m="auto"
    mt={["-40px"]}
    mb={["-230px"]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    <Spinner
      size="xl"
      position="absolute"
      left="50%"
      top="40%"
      ml="calc(0px - var(--spinner-size) / 2)"
      mt="calc(0px - var(--spinner-size))"
      color="white"
    />
  </Box>
);

// eslint-disable-next-line react/display-name
export const WorkspaceBox = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="workspaceBox"
    m="auto"
    mt={["-40px"]}
    mb={["-230px"]}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <WorkspaceBox>
      <WorkspaceSpinner />
    </WorkspaceBox>
  );
};

export default Loader;
