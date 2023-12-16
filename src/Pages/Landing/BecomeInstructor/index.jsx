import Button from "../../../Components/Button";

import {
  BecomeInstructorWrapper,
  BecomeInstructorHolder,
  BecomeInstructorContentBox,
  BecomeInstructorImageBox,
} from "./styled.BecomeInstructor";

import lifetime from "../../../assets/images/lifetime.svg";

const BecomeInstructor = () => {
  const handleClick = () => {
    window.location.href = "register?auth=teacher";
  };

  return (
    <BecomeInstructorWrapper>
      <BecomeInstructorHolder>
        <BecomeInstructorContentBox>
          <h3 className="text-3xl text-white font-bold mb-3 leading-10">
            Do you want to be an instructor?
          </h3>
          <p className="text-sm text-white font-light mb-3 leading-6">
            Explore your creativity as a instructor with people. A professional
            mentor make the students pandemic customer service through scalable
          </p>
          <Button 
            label="join Now" 
            type="button" 
            bgColor="default" 
            handleClick={handleClick}
          />
        </BecomeInstructorContentBox>

        <BecomeInstructorImageBox>
          <img src={lifetime} alt="" className="lg:w-full sm:w-10"/>
        </BecomeInstructorImageBox>
      </BecomeInstructorHolder>
    </BecomeInstructorWrapper>
  );
};

export default BecomeInstructor;
