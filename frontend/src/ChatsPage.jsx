import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style = {{ height:'100vh'}}>
      <PrettyChatWindow
        projectId='f7797cbd-fb70-4445-a2d2-14f37847f9a2'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;