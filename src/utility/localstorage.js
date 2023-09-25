const getStoredDonation = () => {
  const storedDonationInfo = localStorage.getItem("donation-info");

  if (storedDonationInfo) {
    return JSON.parse(storedDonationInfo);
  }
  return [];
};

const saveDonation = (id) => {
  const storedDonationInformation = getStoredDonation();

  const exist = [];
  if (exist) {
    storedDonationInformation.push(id);
    localStorage.setItem(
      "donation-info",
      JSON.stringify(storedDonationInformation)
    );
  }
};

export { saveDonation, getStoredDonation };
