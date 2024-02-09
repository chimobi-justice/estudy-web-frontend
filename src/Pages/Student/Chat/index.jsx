import Layout from "../../../Layouts";
import Chat from "./chat";
import { Wrapper } from "./styled.chat";

const StudentChat = () => {
  return (
    <Layout label="Chat">
      <Wrapper>
        <Chat />
      </Wrapper>
    </Layout>
  );
};

export default StudentChat;
