import { useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  const { id } = useParams();

  const donation = donationDetails.find((donate) => donate.id === parseInt(id));

  return (
    <div>
      <div className=" card w-full bg-base-100 shadow-xl">
        <img
          className="object-cover w-5/6 mx-auto"
          src={donation.picture}
          alt=""
        />

        <div className="card-body">
          <h2 className="card-title">{donation.category}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
