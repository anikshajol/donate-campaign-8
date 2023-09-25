import { useLoaderData, useParams } from "react-router-dom";
import "./DonationDetails.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../utility/localstorage";

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();

  const donation = donationDetails.find((donate) => donate.id === parseInt(id));

  const handleDonateAdd = () => {
    saveDonation(parseInt(id));

    toast("Congratulation! Your donation has been successfully received ");
  };

  return (
    <div className=" mt-20">
      <div className=" card w-full bg-base-100 ">
        <div className="relative">
          <img
            className="object-cover w-5/6 mx-auto "
            src={donation.picture}
            alt=""
          />
          <div className="w-5/6 mx-auto relative -top-32 bg-[#0b0b0b80] h-32">
            <div className=" pt-10 pl-9 items-center">
              <button
                onClick={handleDonateAdd}
                className="rounded px-2 py-1 btn-text"
                style={{
                  color: "white",
                  backgroundColor: donation.text_button_bg,
                }}
              >
                Donate ${donation.price}
              </button>
              <ToastContainer position="top-center" />
            </div>
          </div>

          <div className=" relative -top-24 w-5/6 mx-auto">
            <h2 className="details_title">{donation.category}</h2>
            <p className="description">{donation.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
