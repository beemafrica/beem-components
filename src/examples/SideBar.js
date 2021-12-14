import React, { useState } from "react";
import { BmTabItem } from "../lib/components/tabs";
import { BmSearch } from "../lib/components/search";
import ForumIcon from "@material-ui/icons/Forum";
import {
  BmSideBar,
  BmSideBarBtnIcon,
  BmSideBarSearch,
  BmSideBarTab,
} from "../lib/components/sidebar";
import { FilterList } from "@material-ui/icons";
import {
  BmContact,
  BmContactItem,
  BmContactName,
  BmContactMessage,
  BmContactTime,
  BmContactDetails,
  BmContactSideBar,
  BmMessageContact,
  BmMessageText,
  BmUnreadMessage,
} from "../lib/components/contacts";
import { BmAvatar } from "../lib/components/avatars";
import { BmTag } from "../lib/components/tags";
import { BmContactIcon } from "../lib/components/contacts";

export const SideBar = () => {
  const [selectedContact, setSelectedContact] = useState(false);
  return (
    <BmSideBar>
      {/* Tabs */}
      <BmTabItem>
        <BmSideBarTab leadingIcon={<ForumIcon />} state="active">
          Active
        </BmSideBarTab>
        <BmSideBarTab trailingIcon={<ForumIcon />} state="inactive">
          Resolved
        </BmSideBarTab>
      </BmTabItem>
      {/* Search */}
      <BmSideBarSearch>
        <BmSearch placeholder="Search here" />
        <BmSideBarBtnIcon
          icon={<FilterList />}
          variant="neutral"
          onClick={() => alert("hello")}
        />
      </BmSideBarSearch>
      {/* Contacts */}
      <BmContactSideBar>
        <BmContact
          onClick={() => setSelectedContact(!selectedContact)}
          active={selectedContact}
        >
          {/* Contact Icon */}
          <BmContactIcon>
            <BmAvatar user="default" size="xsmall" />
          </BmContactIcon>
          {/* Contact Item */}
          <BmContactItem>
            <BmContactName>Hello</BmContactName>
            <BmMessageContact>
              <BmMessageText>255784021800</BmMessageText>
              <BmUnreadMessage>1</BmUnreadMessage>
            </BmMessageContact>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>03:00 pm</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>
        <BmContact>
          {/* Contact Icon */}
          <BmContactIcon>
            <BmAvatar user="default" />
          </BmContactIcon>
          {/* Contact Item */}
          <BmContactItem>
            <BmContactName>Hello</BmContactName>
            <BmContactMessage>MessageText</BmContactMessage>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>03:00 pm</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>
        <BmContact>
          {/* Contact Icon */}
          <BmContactIcon>
            <BmAvatar user="default" />
          </BmContactIcon>
          {/* Contact Item */}
          <BmContactItem>
            <BmContactName>Hello</BmContactName>
            <BmContactMessage>MessageText</BmContactMessage>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>03:00 pm</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>

        <BmContact>
          {/* Contact Icon */}
          <BmContactIcon>
            <BmAvatar user="default" />
          </BmContactIcon>
          {/* Contact Item */}
          <BmContactItem>
            <BmContactName>Hello</BmContactName>
            <BmContactMessage>MessageText</BmContactMessage>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>03:00 pm</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>
        <BmContact>
          {/* Contact Icon */}
          <BmContactIcon>
            <BmAvatar user="default" />
          </BmContactIcon>
          {/* Contact Item */}
          <BmContactItem>
            <BmContactName>Hello</BmContactName>
            <BmContactMessage>MessageText</BmContactMessage>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>03:00 pm</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>
        <BmContact>
          <BmAvatar user="default" />
          <BmContactItem>
            <BmContactName>ContacNamekvnfvfnvkfnvnv</BmContactName>
            <BmContactMessage>Message Text</BmContactMessage>
            <BmContactDetails>
              <BmTag size="default" variant="neutral">
                label
              </BmTag>
              <BmContactTime>10:00 am</BmContactTime>
            </BmContactDetails>
          </BmContactItem>
        </BmContact>
      </BmContactSideBar>
    </BmSideBar>
  );
};

export default SideBar;
