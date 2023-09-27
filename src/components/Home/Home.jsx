import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonationDataCard from "../DonationDataCard/DonationDataCard";

const Home = () => {
  const [donationData, setDonationData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDonationData(data));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter data based on the search term
    const filteredResults = donationData.filter((item) =>
      item.category.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredResults);
    console.log(filteredResults);
  };

  return (
    <div className="">
      <div>
        <Banner
          donationData={donationData}
          handleSearch={handleSearch}
          searchTerm={searchTerm}
        ></Banner>
      </div>

      <div className=" my-24 p-5 md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3  lg:gap-6">
        {searchTerm
          ? searchResults.map((data, idx) => (
              <DonationDataCard key={idx} data={data}></DonationDataCard>
            ))
          : donationData.map((data, idx) => (
              <DonationDataCard key={idx} data={data}></DonationDataCard>
            ))}
      </div>
    </div>
  );
};

export default Home;
