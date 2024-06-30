function HomeBanner() {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img
            className="md:w-1/2"
            src="https://www.apple.com/v/iphone/home/bo/images/meta/iphone__ky2k6x5u6vue_og.png"
          />
          <div className="md:w-1/2">
            <p className="text-sm font-bold">Choose your Favourite One!</p>
            <h1 className="text-5xl font-bold">
              Embrace the Future: Discover a{" "}
              <span className="text-orange-400">Mobile</span> Revolution on Our
              Website{" "}
            </h1>
            <p className="py-6">
              Welcome to our mobile website, where innovation and user
              experience merge seamlessly. Explore a world of effortless
              navigation, stunning visuals, and interactive features that bring
              your mobile browsing to life.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
