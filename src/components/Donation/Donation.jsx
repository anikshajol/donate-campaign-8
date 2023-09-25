import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";
import Donated from "../Donated/Donated";

const Donation = () => {
  const donation = useLoaderData();
  const [donate, setDonate] = useState([]);
  const [donateDataLength, setDonateDataLength] = useState(4);
  // console.log(donation);
  useEffect(() => {
    const storedDonateId = getStoredDonation();

    if (donation.length > 0) {
      const donated = donation.filter((donate) =>
        storedDonateId.includes(parseInt(donate.id))
      );

      console.log(donation, storedDonateId, donated);
      setDonate(donated);
    }
  }, [donation]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className=" mt-32 md:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {donate.slice(0, donateDataLength).map((donated, idx) => (
          <Donated key={idx} donated={donated}></Donated>
        ))}
      </div>
      <div
        className={
          donateDataLength === donate.length ? " hidden" : "text-center py-4"
        }
      >
        <button
          onClick={() => setDonateDataLength(donate.length)}
          className="btn bg-[#009444] text-white font-semibold hover:bg-[#0094458e] hover:text-black hover:font-semibold"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
