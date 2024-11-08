import { Navbar, ServiceProvider, Footer } from "./components/index";

export default function App() {
  return (
    <>
      <Navbar />
      <ServiceProvider />
      <Footer />
      

      {/* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}
