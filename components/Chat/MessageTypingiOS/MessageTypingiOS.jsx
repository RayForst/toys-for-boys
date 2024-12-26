import React from "react";

// import PropTypes from "prop-types";

import "./MessageTypingiOS.scss";

/** Primary UI component for user interaction */
export const MessageTypingiOS = () => {
  return (
    <div class="chat-bubble">
      <div class="loading">
        <div class="dot one"></div>
        <div class="dot two"></div>
        <div class="dot three"></div>
      </div>
      <div class="tail"></div>
    </div>
  );
};

// Button.propTypes = {
//   /** Is this the principal call to action on the page? */
//   primary: PropTypes.bool,
//   /** What background color to use */
//   backgroundColor: PropTypes.string,
//   /** How large should the button be? */
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   /** Button contents */
//   label: PropTypes.string.isRequired,
//   /** Optional click handler */
//   onClick: PropTypes.func
// };

MessageTypingiOS.defaultProps = {};
