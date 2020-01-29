import React from "react";

import classes from "./Settings.module.scss";
import SettingCard from "./SettingCard/SettingCard";
import MemberCard from "./MemberCard/MemberCard";

const Settings = () => {
  return (
    <main className={classes.Settings}>
      <article
        className={[
          classes.Settings__Category,
          classes.Settings__Category__Notifications
        ].join(" ")}
      >
        <h1 className={classes.Settings__Category__Header}>Notifications</h1>
        <ul className={classes.Settings__Category__List}>
          <li>
            <SettingCard
              name="notification-delivery-notification"
              settingTitle="Delivery notification"
              settingDescription="Send me a message when a package arrived"
            />
          </li>
          <li>
            <SettingCard
              name="notification-pet-alert"
              settingTitle="Pet alert"
              settingDescription="Send me a message when the dog behaves strangely"
            />
          </li>
          <li>
            <SettingCard
              name="notification-thief-protection"
              settingTitle="Thief protection"
              settingDescription="Send me a message when unusual activity is detected"
            />
          </li>
          <li>
            <SettingCard
              name="notification-utilities-due-date"
              settingTitle="Utilities due date"
              settingDescription="Send me a message one day before utilities need to be paid"
            />
          </li>
        </ul>
      </article>
      <article
        className={[
          classes.Settings__Category,
          classes.Settings__Category__Power
        ].join(" ")}
      >
        <h1 className={classes.Settings__Category__Header}>Power</h1>
        <ul className={classes.Settings__Category__List}>
          <li>
            <SettingCard
              name="power-switch-off"
              settingTitle="Switch off"
              settingDescription="Switch off the lights if nobody is in the room"
            />
          </li>
          <li>
            <SettingCard
              name="power-media-switch-off"
              settingTitle="Media switch off"
              settingDescription="Switch off media devices after 10 minutes of no use"
            />
          </li>
        </ul>
      </article>
      <article
        className={[
          classes.Settings__Category,
          classes.Settings__Category__Members
        ].join(" ")}
      >
        <h1 className={classes.Settings__Category__Header}>Members</h1>
        <ul className={classes.Settings__Category__List}>
          <li>
            <MemberCard
              memberName="John Michael"
              role="administrator"
              status="home"
              profilePictureSrc="john_michael"
            />
          </li>
          <li>
            <MemberCard
              memberName="Elisabeth Polanski"
              role="member"
              status="away"
              profilePictureSrc="elisabeth_polanski"
            />
          </li>
          <li>
            <MemberCard
              memberName="Robert Carrey"
              role="member"
              status="away"
              profilePictureSrc="robert_carrey"
            />
          </li>
          <li>
            <MemberCard
              memberName="Diana Ferguson"
              role="member"
              status="home"
              profilePictureSrc="diana_ferguson"
            />
          </li>
        </ul>
      </article>
    </main>
  );
};

export default Settings;
