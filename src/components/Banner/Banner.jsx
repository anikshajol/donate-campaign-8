import bannerImage from "../../assets/banner.png";
import "./Banner.css";
import PropsTypes from "prop-types";

const Banner = ({ searchTerm, handleSearch }) => {
  const styles = {
    banner: {
      backgroundImage: `url(${bannerImage})`,
      height: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    content: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
    },
  };

  // console.log(search, setSearch, handleSearch);

  return (
    <div style={styles.banner} className="">
      <div
        style={styles.content}
        className="flex flex-col items-center justify-center px-2 "
      >
        <h2 className="banner-title">I Grow By Helping People In Need</h2>
        <div
          onSubmit={handleSearch}
          className=" w-80 md:w-96 rounded-lg border border-[#dedede] mt-10 flex justify-between items-center outline-none"
        >
          <input
            type="search"
            name="search"
            className=" outline-none  p-3"
            id="search"
            placeholder="Search Here..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <input className="search-btn " type="btn" value="Search" />
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  searchTerm: PropsTypes.string,
  handleSearch: PropsTypes.func,
};

export default Banner;
