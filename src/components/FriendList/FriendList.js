import React from "react";
import PropTypes from "prop-types";
import style from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.js";

function FriendList({ friends }) {
  return (
    <ul className={style.friend_list}>
      {friends.map((item) => (
        <FriendListItem
          avatar={item.avatar}
          status={item.isOnline}
          name={item.name}
          key={item.id} />
      ))}
    </ul>
  );
}

// Default props
FriendList.defaultProps = {
  friends: [],
};

// PropTypes
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
