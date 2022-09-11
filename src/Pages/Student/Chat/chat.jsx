import { Avatar, Badge, Divider, Input } from "antd";

import Button from "../../../Components/Button";

import STUDENT_CHAT from "../../../constants/studentChat";

import {
  Wrapper,
  AsideLeftWrapper,
  AsideRightWrapper,
  AsideRightHeader,
  AsideRightFooter,
  AsideRightContainer,
  StudentChatBoard,
} from "./styled.chat";

import {
  MoreOutlined,
  PhoneOutlined,
  SendOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const Chat = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <Wrapper>
      <AsideLeftWrapper>
        <h2 className="text-lg text-gray-500 font-semibold">Chat</h2>
        <div>
          <Search
            placeholder="Search"
            onSearch={onSearch}
            style={{
              width: "100%",
            }}
            className="mb-5"
          />
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <Button type="button" bgColor="primary" label="Instructor" />
          </div>
          <div>
            <Button type="button" bgColor="secondary" label="Peers" />
          </div>
        </div>
        {STUDENT_CHAT.map((chat) => (
          <div key={chat.id}>
            <div className="flex justify-between items center cursor-pointer mb-0">
              <div className="flex justify-between items center">
                <div>
                  <Badge status="success">
                    <Avatar
                      shape="circle"
                      size="large"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Badge>
                </div>
                <div className="ml-1">
                  <p className="text-sm text-gray-600 font-bold mb-0">
                    {chat.name}
                  </p>
                  <p className="text-xs text-gray-400 mb-0">{chat.text}</p>
                </div>
              </div>
              <div className="text-center">
                <p className="mb-0 text-gray-400 text-xs">{chat.time}</p>
                <p className="mb-0 bg-blue-400 rounded-3xl text-white text-sm">
                  {chat.messageCount}
                </p>
              </div>
            </div>
            <Divider style={{ marginTop: "10px" }} />
          </div>
        ))}
      </AsideLeftWrapper>
      
      <AsideRightWrapper>
        <AsideRightContainer>
          <AsideRightHeader>
            <div className="flex justify-between items-center mb-0">
              <div className="flex justify-between items-center">
                <div>
                  <Badge status="success">
                    <Avatar
                      shape="circle"
                      size="large"
                      style={{ height: "40px", width: "40px" }}
                    />
                  </Badge>
                </div>
                <div className="ml-1">
                  <p className="text-sm text-gray-600 font-bold mb-0">
                    Justice Roy
                  </p>
                  <p className="text-xs text-gray-400 mb-0">online</p>
                </div>
              </div>
              <div>
                <PhoneOutlined />
                <VideoCameraAddOutlined className="mr-2 ml-2" />
                <MoreOutlined />
              </div>
            </div>
          </AsideRightHeader>

          <StudentChatBoard>
            <div className="mb-3">
              <div className="p-2 mb-0 flex justify-start">
                <Avatar
                  shape="circle"
                  size="large"
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "4px",
                  }}
                />
                <div className="w-6/12 mb-0">
                  <p className="shadow-lg h-auto mb-1 p-2 leading-6 text-gray-500 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolores distinctio tenetur atque beatae vitae quidem
                    reiciendis accusantium debitis, harum vel.
                  </p>
                  <p className="text-xs text-gray-400">3 min ago</p>
                </div>
              </div>
            </div>

            <div className="p-2 flex justify-end">
              <div className="w-6/12 mb-0">
                <p className="shadow-lg h-auto mb-1 p-2 leading-6 text-gray-500 text-sm bg-red-50">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores distinctio tenetur atque beatae vitae quidem
                  reiciendis accusantium debitis, harum vel. Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Dolores distinctio
                  tenetur atque beatae vitae quidem reiciendis accusantium
                  debitis, harum vel.
                </p>
                <p className="text-xs text-gray-400">3 min ago</p>
              </div>
              <Avatar
                shape="circle"
                size="large"
                style={{ height: "20px", width: "20px", marginLeft: "4px" }}
              />
            </div>
          </StudentChatBoard>

          <AsideRightFooter>
            <div className="w-full">
              <Input
                placeholder="type a message"
                name="message"
                style={{ padding: "7px", fontSize: "15px" }}
              />
            </div>
            <div>
              <Button
                type="button"
                bgColor="secondary"
                label={<SendOutlined />}
              />
            </div>
          </AsideRightFooter>
        </AsideRightContainer>
      </AsideRightWrapper>
    </Wrapper>
  );
};

export default Chat;
