import bannerImage from "../../assets/banner.png";

const Banner = () => {
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

  return (
    <div style={styles.banner}>
      <div style={styles.content}>
        <h2>This is banner</h2>
      </div>
    </div>
  );
};

export default Banner;
