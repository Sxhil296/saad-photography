import React from "react";
import {
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImFacebook,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook />
          </a>
        </li>
        <li>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImInstagram />
          </a>
        </li>
        <li>
          <a
            href="http://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImPinterest />
          </a>
        </li>
        <li>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImTwitter />
          </a>
        </li>

        <li>
          <a
            href="http://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
