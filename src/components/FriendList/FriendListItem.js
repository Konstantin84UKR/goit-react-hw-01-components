import React from "react";
import PropTypes from "prop-types";
import style from "./FriendListItem.module.css";

function FriendListItem({ avatar, status, name }) {
  return (
    <li className={style.item}>
      <span className={status ? style.statusTrue : style.statusFalse}>
        {status ? "online" : "offline"}
      </span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

// Default props
FriendListItem.defaultProps = {
  avatar: "",
  status: false,
  name: "noName",
  id: 0,
};

// PropTypes
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
