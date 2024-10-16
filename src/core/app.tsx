import NavigationProvider from "./navigation";
import ApplicationProviders from "./providers";

const MainApplication = () => {
  return (
    <ApplicationProviders>
      <NavigationProvider />
    </ApplicationProviders>
  );
};

export default MainApplication;
