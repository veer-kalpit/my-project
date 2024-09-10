import Navbar from "./component/Navbar/navbar";
import Hero from "./component/Hero/Hero";
import Stats from "./component/Statistics/stats";
import Banner from "./component/Urgent_cause/banner";
import Donate from "./component/Donate/Donate";
import Footer from "./component/Footer/footer";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#F8F6E4]">
      <Navbar />
      <Hero />
      <Stats />
      <Banner />
      <Donate />
      <Footer />
    </div>
  );
};

export default App;
