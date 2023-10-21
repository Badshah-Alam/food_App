// import { configureStore } from "@reduxjs/toolkit";
import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [visibleSection, setIsvisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "this is  the about section of instamart Lorem Ipsum is simply dummy text of the "
        }
        isVisible={visibleSection == "about"}
        setIsVisible={() => setIsvisibleSection("about")}
      />
      <Section
        title={"Team Instamaart"}
        description={
          "This is the team seaction of instamart. the team has 50 memeber....Lorem Ipsum is  ."
        }
        isVisible={visibleSection == "Team"}
        setIsVisible={() => setIsvisibleSection("Team")}
      />
      <Section
        title={"careers"}
        description={
          "This is the team seaction of instamart. the team has 50 memeber....Lorem Ipsum is simply dummen th"
        }
        isVisible={visibleSection == "careers"}
        setIsVisible={() => setIsvisibleSection("careers")}
      />
      <Section
        title={"Product"}
        description={
          "This is the team seaction of instamart. the team has 50 memeber....Lorem Ipsum is simply dummy text of the pry. Lorem Ipsum has been the "
        }
        isVisible={visibleSection == "Product"}
        setIsVisible={() => setIsvisibleSection("Product")}
      />
      <Section
        title={"Details"}
        description={
          "This is the team seaction of instamart. the team has 50 memeber....Lorem Ipsum is simply dummy text ofsurvived not only five ."
        }
        isVisible={visibleSection == "Details"}
        setIsVisible={() => setIsvisibleSection("Details")}
      />

      {/* <AboutIndtaMart/>
      <DetailsofInstamart/>
      <TeamInstamart/>
      <Product/>
      <Careers/> */}
    </div>
  );
};

export default Instamart;
