import StudentLayout from "../../../Layouts/Student";

import Chat from "./chat";

import { Wrapper } from "./styled.chat";

const StudentChat = () => {
  return (
    <StudentLayout label="Chat">
      <Wrapper>
        <Chat />
      </Wrapper>
    </StudentLayout>
  );
};

export default StudentChat;
