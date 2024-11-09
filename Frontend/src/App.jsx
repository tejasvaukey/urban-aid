import {
  Navbar,
  ServiceProvider,
  Footer,
  HomePage,
  LandingPage,
  SubNavbar,
} from "./components/index";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <SubNavbar /> */}
      {/* <ServiceProvider /> */}
      <LandingPage />
      <Footer />

      {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}
