import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Footer() {
  return (
    <div className="mt-5 py-2 text-center bg-light">
      <p className="text-muted my-auto">
        <small>
          Made with{" "}
          {<FavoriteIcon style={{ fontSize: "17px", margin: "2px" }} />} by
          Joanne Cheong
        </small>
      </p>
    </div>
  );
}

export default Footer;
export { default as Footer } from "./Footer";
