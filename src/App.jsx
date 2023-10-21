import logo from "../assets/desktop/logo.svg";
import singer from "../assets/desktop/image-host.jpg";
import singer2 from "../assets/tablet/image-host.jpg";
import spotify from "../assets/desktop/spotify.svg";
import apple from "../assets/desktop/apple-podcast.svg";
import google from "../assets/desktop/google-podcasts.svg";
import pockets from "../assets/desktop/pocket-casts.svg";
import bg from "../assets/desktop/bg-pattern-dots.svg";

import "./App.css";

function App() {
  return (
    <>
      <section className="max-w-[1275px] bg-section-mobile bg-cover h-screen md:bg-none p-4">
        <div className="w-fit mx-auto md:w-auto md:mx-0">
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="md:bg-[#121725] md:p-20 md:relative lg:left-[-4rem] md:left-0 mt-20 md:mt-0">
            <h1
              className="text-[#54e6af] uppercase text-2xl w-96 md:w-auto md:text-5xl 
            font-normal md:text-start mx-auto md:mx-0"
            >
              Publish your podcasts
              <span className="text-white"> everywhere.</span>
            </h1>
            <p className="my-8 mx-auto md:mx-0 w-96 md:text-start text-[#c2cbe5]">
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
            <div className="flex flex-col md:flex-row items-center my-10">
              <input
                type="email"
                placeholder="Email Address"
                className="px-5 py-4 rounded-full bg-[#2c344b] w-[30rem] flex-1"
              />
              <button className="bg-[#54e6af] w-full md:w-auto py-3 px-5 rounded-full my-5 md:my-0 md:relative right-[10.5rem] font-black text-[#121725]">
                Request Access
              </button>
            </div>
            <div className="flex items-center gap-4 mt-5 justify-between">
              <img src={spotify} alt="" className="w-24 md:w-auto" />
              <img src={apple} alt="" className="w-24 md:w-auto" />
              <img src={google} alt="" className="w-24 md:w-auto" />
              <img src={pockets} alt="" className="w-24 md:w-auto" />
            </div>
          </div>
          <img
            src={singer}
            alt=""
            className="h-[600px] hidden lg:block relative right-[30rem] -z-10"
          />
          <img
            src={singer2}
            alt=""
            className="hidden md:block lg:hidden relative right-[20rem] -z-10 bottom-24"
          />
        </div>
        <img src={bg} alt="" className="hidden md:block lg:hidden" />
      </section>
    </>
  );
}

export default App;
