import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="">
          <h1>About Us</h1>
          <span>
            At Besnik Consultancy, we take pride in our values – service,
            integrity, and excellence.
          </span>
        </div>
        <button>Learn more</button>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2">
          <div className="">
            <h1>1. Who We Are </h1>

            <span>
              You get a 2-week free trial to kick the Smarty tries. We want you
              to.
            </span>
          </div>
          <div className="">
            <h1>2. What Do We Do</h1>

            <span>
              We give you a free course that guides you through the process.
            </span>
          </div>
          <div className="">
            <h1>3. How Do We Help</h1>

            <span>
              Use our multimedia lecturers, videos, and coaching sessions.
            </span>
          </div>
          <div className="">
            <h1>4. Create success story</h1>

            <span>
              With access to online learning resources anyone can transfrm.
            </span>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="">
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
