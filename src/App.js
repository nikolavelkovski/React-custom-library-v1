import Modal from "./Components/Modal/Modal";
import Navigation from "./Layout/Navigation/Navigation";
import ModalProvider from "./store/modalProvider";
import { Routes, Route } from "react-router-dom";
import  Main  from "./Layout/Main/Main";
import AccordionLanding from "./Pages/AccordionLanding/AccordionLanding";
import Footer from "./Layout/Footer/Footer"
import TooltipLanding from "./Pages/TooltipLanding/TooltipLanding";
import CarouselLanding  from "./Pages/CarouselLanding/CarouselLanding";
import PaginationLanding from "./Pages/PaginationLanding/PaginationLanding";
import GridLanding from "./Pages/GridLanding/GridLanding";
import HomeLanding from "./Pages/HomeLanding/HomeLanding";
function App() {
  return (
    <>
      <Navigation />
      <Main>
        <Routes>
          <Route path="/"  element={<HomeLanding />} />
          <Route
            path="/Modal"
            element={
              <ModalProvider>
                <Modal
                  type="info-success"
                  title="hello world"
                  message="This its a pretty beautiful message"
                />
              </ModalProvider>
            }
           
          />
           <Route path ="/Accordion" element={<AccordionLanding />} />
           <Route path ="/Tooltip" element={<TooltipLanding />} />
           <Route path ="/Carousel" element={<CarouselLanding />} />
           <Route path ="/Pagination" element={<PaginationLanding />} />
           <Route path ="/Grid" element={<GridLanding />} />
        </Routes>
      </Main>
      <Footer />
       
    </>
  );
}

export default App;
