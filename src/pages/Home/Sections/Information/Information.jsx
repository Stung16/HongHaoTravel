import AboutUs from "../AboutUs/AboutUs";
import MotoTour from "../MotoTour/MotoTour";
import NatureHg from "../NatureHg/NatureHg";

const Information = () => {
  return (
    // #122718
    <div className=" relative min-h-screen bg-[#122718] z-10">
      {/* BGNuis */}
      <AboutUs />
      <div className="Hg_beauty">
        <MotoTour />
        <NatureHg />  
      </div>
    </div>
  );
};

export default Information;
