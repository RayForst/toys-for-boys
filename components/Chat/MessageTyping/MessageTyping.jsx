import React from "react";

// import PropTypes from "prop-types";

import "./MessageTyping.scss";

/** Primary UI component for user interaction */
export const MessageTyping = () => {
  return (
    <div class="chat-bubble-1">
      <div class="typing">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
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

MessageTyping.defaultProps = {};
