import React from "react";

// import PropTypes from "prop-types";

import "./ChatWindow.scss";

/** Primary UI component for user interaction */
export const ChatWindow = () => {
  return (
    <div className="container">
      <div className="chat-bubble">
        <span className="chat-message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, soluta
          dolorem. Officia temporibus ipsam consectetur quibusdam in totam
          recusandae voluptatem. Impedit, sapiente delectus quaerat eius
          perspiciatis repudiandae facere dicta sed?
        </span>
      </div>
      <div className="chat-bubble mine">
        <span className="chat-message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, soluta
          dolorem. Officia temporibus ipsam consectetur quibusdam in totam
          recusandae voluptatem. Impedit, sapiente delectus quaerat eius
          perspiciatis repudiandae facere dicta sed?
        </span>
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

ChatWindow.defaultProps = {};
