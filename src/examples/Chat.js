import {
  BmChat,
  BmChatMenu,
  MessageIn,
  MessageOut,
} from "../lib/components/Chats/chatwrapper";
import {
  BmFileChat,
  BmImage,
  BmImageChat,
  BmUserChat,
  BmImageFileName,
} from "../lib/components/Chats/chat";
import {
  BmMessageTab,
  BmAttachment,
  BmMessageTabInput,
  BmMessage,
  BmSend,
} from "../lib/components/Chats/chatInput";
import { BmEmojiIcon } from "../lib/components/iconStyles";
import { AttachFile } from "@material-ui/icons";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { BmLoader, Loader } from "../lib/components/loaders";
import Image from "../lib/assets/chart-img.png";

export const Chat = () => {
  return (
    <>
      {/* Main Wrapper */}
      <BmChat>
        {/* Sub Wrapper */}
        <BmChatMenu>
          <Loader>
            <BmLoader size="large" />
          </Loader>
          {/* Incomming Message */}
          <MessageIn>
            {/* Text Messages */}
            <BmUserChat displayTime="3:54pm" type="inbound">
              https://bl-sms-web-app-reseller-logos.s3.eu-west-1.amazonaws.com/avatar?AWSAccessKeyId=AKIAVCAYXA54IQYB6C7A&Expires=1706875188&Signature=xp%2BBZGkOjvKlehv%2Br24p1tcgAxs%3D
            </BmUserChat>
            <BmUserChat displayTime="3:54pm" type="inbound">
              Hello
            </BmUserChat>
          </MessageIn>
          {/* Outgoing Message */}
          <MessageOut>
            {/* Text Messages */}
            <BmImageChat displayTime="3:54pm" type="outbound">
              <BmImage src={Image} alt="src"/>
              <BmImageFileName type="outbound">attactment.jpg</BmImageFileName>
            </BmImageChat>
            <BmFileChat displayTime="3:54pm" type="inbound">
              attachment.jpg
            </BmFileChat>
            <BmUserChat displayTime="3:54pm" type="outbound" status="failed">
              Hi gfjefleflekf
              lvnlfdnvlnvldnvldknndscndndndslkncdsnclkdndlknldsncndslnnsncdslknldsndsnldsndsnlkdsnc
              lcndcndcndcdknsclkdlkfndlknlknlkfdnlfdnlfdn
              lvndvndflkvnfdvlkdnvlkdn lnldsknvldnvldvnlkdvclkdnccndlcndlnclk
              dnlvncxlvkndflkdsnflkdsn
            </BmUserChat>
          </MessageOut>
        </BmChatMenu>

        {/* Chat Search Tab */}
        {/* Main wrapper */}
        <BmMessageTab>
          {/* Attachment Icons */}
          <BmAttachment>
            <BmEmojiIcon icon={<EmojiEmotionsIcon />} />
            <BmEmojiIcon icon={<AttachFile />} />
          </BmAttachment>
          {/* Message Input */}
          <BmMessage>
            <BmMessageTabInput placeholder="Type your message" />
          </BmMessage>
          {/* Send Button */}
          <BmSend />
        </BmMessageTab>
      </BmChat>
    </>
  );
};
