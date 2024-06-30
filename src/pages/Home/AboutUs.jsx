function AboutUs() {
  const style = {
      border : "none",
      height: "1px",
      color : "#333",
      backgroundColor: "#333",
  }
return (
  <div>
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://fdn2.mobgsm.com/vv/pics/apple/apple-iphone-14-pro-4.jpg"
          className="max-w-sm rounded-lg shadow-2xl bg-white mx-5"
        />
        <div>
          <p className="text-lg font-semibold">About Us</p>
          <h1 className="text-5xl font-bold">Surprise Are Waiting!!<br />
          Choose Your Desired Phone.</h1>
          <p className="py-6">
          Welcome to our mobile-friendly website! Explore our world of seamless navigation, responsive design, and captivating content, all at your fingertips.
          </p>
          <hr style={style} />
          <div className="grid grid-cols-1 md: grid-cols-3" >
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default AboutUs;
