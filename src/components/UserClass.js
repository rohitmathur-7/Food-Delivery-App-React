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
    <div className="flex justify-center items-center h-full">
      <div className="flex customShadow rounded-3xl w-[1150px]">
        <div className="flex justify-center">
          <img
            src={myProfleImage}
            className="object-cove rounded-tl-3xl rounded-bl-3xl"
            width={400}
            alt="Profile"
          ></img>
        </div>
        <div className="flex flex-col justify-center px-12 w-[700px] ">
          {step === 0 && (
            <div className="flex flex-col gap-8">
              <h2 className="text-5xl">Hi 👋, I'm Rohit Mathur</h2>
              <div className="flex flex-col gap-3">
                <p className="text-xl">
                  A passionate Web developer from Jaipur, India.
                </p>
                <p className="text-xl">
                  I am currently working as a Software Engineer at rtCamp
                  Solutions Pvt. Ltd
                </p>
                <button onClick={() => handleStepChange(1)}>
                  <img
                    src={arrow}
                    className="h-10 transition-transform hover:translate-x-2 duration-500"
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
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-medium">
                I am currently Learning and Working on:
              </h2>
              <div className="flex flex- gap-10">
                <img
                  className="object-contain"
                  src={reactLogo}
                  width={75}
                  height={75}
                  alt="React"
                />
                <img
                  className="object-contain"
                  src={jsLogo}
                  width={75}
                  height={75}
                  alt="JavaScript"
                />
                <img
                  className="object-contain"
                  src={wordPressLogo}
                  width={75}
                  height={75}
                  alt="WordPress"
                />
                <img
                  className="object-contain"
                  src={phpLogo}
                  width={75}
                  height={75}
                  alt="PHP"
                />
              </div>
              <div className="flex justify-between">
                <button onClick={() => handleStepChange(0)}>
                  <img
                    src={arrow}
                    className="h-10 rotate-180 transition-transform hover:translate-x-2 duration-500"
                    alt="Previous"
                  ></img>
                </button>
                <button onClick={() => handleStepChange(2)}>
                  <img
                    src={arrow}
                    className="h-10 transition-transform hover:translate-x-2 duration-500"
                    alt="Next"
                  ></img>
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-medium mb-5">
                Let's connect and have some amazing Conversations about anything
                you want!😎
              </h2>
              <div className="flex gap-10">
                <Link to={instaURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[75px] h-[75px] transition-transform hover:scale-125 duration-200"
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
                    className="object-contain w-[75px] h-[75px] transition-transform hover:scale-125 duration-200"
                    src={linkedinLogo}
                    alt="LinkedIn"
                  />
                </Link>
                <Link to={githubURL} target="_blank" rel="noopener noreferrer">
                  <img
                    className="object-contain w-[75px] h-[75px] transition-transform hover:scale-125 duration-200"
                    src={githubLogo}
                    alt="GitHub"
                  />
                </Link>
              </div>
              <button onClick={() => handleStepChange(1)}>
                <img
                  src={arrow}
                  className="h-10 rotate-180 transition-transform hover:translate-x-2 duration-500"
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
