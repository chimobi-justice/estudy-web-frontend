import { useState } from "react";

import StudentLayout from "../../../Layouts/Student";

import STUDENT_SETTING_ASIDE_LEFT_BOX from "../../../constants/studentSetting";

import General from "./General";
import EmailNotification from "./EmailNotification";
import Subcription from "./Subcription";
import Payment from "./Payment";
import LearningReminder from "./LearningReminder";

import {
  Wrapper,
  AsideLeftWrapper,
  AsideRighttWrapper,
  AsideLeftBox,
} from "./styled.setting";

const StudentSetting = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <StudentLayout label="Setting">
      <Wrapper>
        <AsideLeftWrapper>
          {STUDENT_SETTING_ASIDE_LEFT_BOX.map((box) => (
            <AsideLeftBox
              key={box.id}
              onClick={() => {
                handleActive(box.id);
              }}
              style={{
                background: box.id === active && "rgba(209, 250, 229)",
              }}
            >
              {box.icon}
              <p>{box.text}</p>
            </AsideLeftBox>
          ))}
        </AsideLeftWrapper>

        <AsideRighttWrapper>
          {active === 1 ? (
            <General />
          ) : active === 2 ? (
            <EmailNotification />
          ) : active === 3 ? (
            <Subcription />
          ) : active === 4 ? (
            <Payment />
          ) : (
            <LearningReminder />
          )}
        </AsideRighttWrapper>
      </Wrapper>
    </StudentLayout>
  );
};

export default StudentSetting;
