import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import myProfleImage from "../assets/profile1.png";
import jsLogo from "../assets/js_logo-removebg-preview.png";
import reactLogo from "../assets/react_logo-removebg-preview.png";
import wordPressLogo from "../assets/wordpress_logo-removebg-preview.png";
import phpLogo from "../assets/pngwing.com.png";
import instagramLogo from "../assets/instagram.png";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github-logo.png";
import arrow from "../assets/right-arrow.png";

const UserClass = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const instaURL = "https://www.instagram.com/_rohit__7/";
  const linkedinURL = "https://www.linkedin.com/in/rohit-mathur-3619651b0/";
  const githubURL = "https://github.com/rohitmathur-7";

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const newStep = parseInt(queryParams.get("step")) || 0;
    setStep(newStep);
    if (newStep === 0) {
      navigate("/about");
    }
  }, [location.search]);

  const handleStepChange = (newStep) => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("step", newStep);
    navigate(`?${queryParams.toString()}`);
  };

  return (
    <div className="flex justify-center items-center  w-full h-full">
      <div className="flex customShadow rounded-3xl w-10/12 tb:h-[70%] tb:gap-4 tb:flex-col tb:justify-center">
        <div className={`flex basis-1/3 tb:h-1/2 tb:basis-auto`}>
          <img
            src={myProfleImage}
            className="object-cover rounded-tl-3xl rounded-bl-3xl w-full tb:rounded-3xl "
            alt="Profile"
          ></img>
        </div>
        <div
          className={`flex flex-col justify-center basis-2/3 my-5 mr-5 lg:ml-5 tb:m-0 tb:ml-0 tb:h-1/2 tb:p-5 tb:pt-0 tb:basis-auto`}
        >
          {step === 0 && (
            <div className="flex flex-col gap-8 tb:gap-4 tb:items-center">
              <h2 className="text-xl md:text-4xl lg:text-5xl">
                Hi 👋, I'm Rohit Mathur
              </h2>
              <div className="flex flex-col gap-3 tb:items-center w-full sm:w-[70%] lg:w-full text-xs md:text-xl">
                <p>A passionate Web developer from Jaipur, India.</p>
                <p className="tb:w-5/6 tb:text-center">
                  I am currently working as a Software Engineer at rtCamp
                  Solutions Pvt. Ltd
                </p>
                <button
                  onClick={() => handleStepChange(1)}
                  className="tb:flex tb:justify-center"
                >
                  <img
                    src={arrow}
                    className="h-6 sm:h-10 transition-transform hover:translate-x-2 duration-500"
                    alt="Next"
                  ></img>
                </button>
              </div>
              <div className="flex flex- gap-10">
                <Link to={instaURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[30px] transition-transform hover:scale-150 duration-200"
                    src={instagramLogo}
                    alt="Instagram"
                  />
                </Link>
                <Link
                  to={linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="object-contain w-[30px] transition-transform hover:scale-150 duration-200"
                    src={linkedinLogo}
                    alt="LinkedIn"
                  />
                </Link>
                <Link to={githubURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[30px] transition-transform hover:scale-150 duration-200"
                    src={githubLogo}
                    alt="GitHub"
                  />
                </Link>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col gap-5 tb:items-center">
              <h2 className="text-xl text-center sm:text-left sm:text-2xl font-normal sm:font-medium">
                I am currently Learning and Working on:
              </h2>
              <div className="flex gap-10">
                <img
                  className="object-contain w-[45px] sm:w-[75px]"
                  src={reactLogo}
                  alt="React"
                />
                <img
                  className="object-contain w-[45px] sm:w-[75px]"
                  src={jsLogo}
                  alt="JavaScript"
                />
                <img
                  className="object-contain w-[45px] sm:w-[75px]"
                  src={wordPressLogo}
                  alt="WordPress"
                />
                <img
                  className="object-contain w-[45px] sm:w-[75px]"
                  src={phpLogo}
                  alt="PHP"
                />
              </div>
              <div className="flex justify-between tb:w-1/2">
                <button onClick={() => handleStepChange(0)}>
                  <img
                    src={arrow}
                    className="h-6 sm:h-10 rotate-180 transition-transform hover:translate-x-2 duration-500"
                    alt="Previous"
                  ></img>
                </button>
                <button onClick={() => handleStepChange(2)}>
                  <img
                    src={arrow}
                    className="h-6 sm:h-10 transition-transform hover:translate-x-2 duration-500"
                    alt="Next"
                  ></img>
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-5 tb:items-center tb:gap-5">
              <h2 className="text-xl tb:text-center lg:text-left sm:text-2xl font-normal sm:font-medium mb-5 tb:mb-0 sm:w-4/5">
                Let's connect and have some amazing Conversations about anything
                you want!😎
              </h2>
              <div className="flex gap-10">
                <Link to={instaURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[45px] sm:w-[75px] transition-transform hover:scale-125 duration-200"
                    src={instagramLogo}
                    alt="Instagram"
                  />
                </Link>
                <Link
                  to={linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="object-contain w-[45px] sm:w-[75px] transition-transform hover:scale-125 duration-200"
                    src={linkedinLogo}
                    alt="LinkedIn"
                  />
                </Link>
                <Link to={githubURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[45px] sm:w-[75px] transition-transform hover:scale-125 duration-200"
                    src={githubLogo}
                    alt="GitHub"
                  />
                </Link>
              </div>
              <button onClick={() => handleStepChange(1)}>
                <img
                  src={arrow}
                  className="h-6 sm:h-10 rotate-180 transition-transform hover:translate-x-2 duration-500"
                  alt="Previous"
                ></img>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserClass;
