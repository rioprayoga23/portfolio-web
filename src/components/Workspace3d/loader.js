import { forwardRef } from "react";

export const WorkspaceSpinner = () => (
  <div className="absolute w-full top-[60px] md:top-[35px] lg:top-[50px] xl:top-[80px]">
    <div className="flex h-48 md:h-[330px] lg:h-[300px] W-full justify-center">
      <div className="md:w-[400px] lg:w-[500px] xl:w-[560px] flex flex-col items-center justify-center">
        <div className="lds-hourglass"></div>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react/display-name
export const WorkspaceBox = forwardRef(({ children, loading }, ref) => (
  <div
    className={`absolute w-full top-0 ${
      !loading && "top-[20px] md:top-5 lg:top-0"
    }`}
  >
    <div className="flex h-72 md:h-[390px] lg:h-[500px] xl:h-[550px] W-full justify-center">
      <div
        ref={ref}
        className="w-[300px] md:w-[450px] lg:w-[500px] xl:w-[660px] flex justify-center"
      >
        {children}
      </div>
    </div>
  </div>
));

const Loader = () => {
  return (
    <WorkspaceBox>
      <WorkspaceSpinner />
    </WorkspaceBox>
  );
};

export default Loader;
