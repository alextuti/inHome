import React from "react";

import classes from "./MemberCard.module.scss";

const MemberCard = props => {
  return (
    <article className={classes.MemberCard}>
      <figure className={classes.MemberCard__Figure}>
        <img
          src={require(`../../../assets/members/${props.profilePictureSrc}.jpg`)}
          alt={props.memberName + "profile picture"}
        />
        <figcaption>{props.memberName}</figcaption>
      </figure>
      <span
        className={
          props.status === "home"
            ? [
                classes.MemberCard__Status,
                classes["MemberCard__Status--green"]
              ].join(" ")
            : [
                classes.MemberCard__Status,
                classes["MemberCard__Status--red"]
              ].join(" ")
        }
      >
        {props.status}
      </span>
      <span
        className={
          props.role === "administrator"
            ? [
                classes.MemberCard__Role,
                classes["MemberCard__Role--green"]
              ].join(" ")
            : [
                classes.MemberCard__Role,
                classes["MemberCard__Role--yellow"]
              ].join(" ")
        }
      >
        {props.role}
      </span>
    </article>
  );
};

export default MemberCard;
