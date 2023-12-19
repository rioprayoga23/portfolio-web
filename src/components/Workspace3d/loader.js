import { forwardRef } from "react";

export const WorkspaceSpinner = () => (
  <div className="absolute w-full top-[50px] md:top-10 lg:top-[135px]">
    <div className="flex h-48 md:h-[330px] lg:h-[200px] W-full justify-center">
      <div className="md:w-[400px] lg:w-[500px] xl:w-[560px] flex flex-col items-center justify-center">
        <div className="lds-hourglass"></div>
        <p>Nungguin yah?😜</p>
      </div>
    </div>
  </div>
);

// eslint-disable-next-line react/display-name
export const WorkspaceBox = forwardRef(({ children, loading }, ref) => (
  <div
    className={`absolute w-full top-0 ${
      !loading && "top-14 md:top-20 lg:top-11"
    }`}
  >
    <div className="flex h-80 md:h-[390px] lg:h-[500px] xl:h-[580px] W-full justify-center">
      <div
        ref={ref}
        className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] flex justify-center"
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
