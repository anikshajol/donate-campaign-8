import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonationDataCard from "../DonationDataCard/DonationDataCard";

const Home = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  return (
    <div className="">
      <Banner></Banner>

      <div className=" my-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3  lg:gap-6">
        {donationData.map((data, idx) => (
          <DonationDataCard key={idx} data={data}></DonationDataCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
