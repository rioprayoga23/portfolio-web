import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const WorkspaceSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="30%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt={"-100px"}
    color="white"
  />
);

// eslint-disable-next-line react/display-name
export const WorkspaceBox = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={["-40px"]}
    mb={["-200px"]}
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
