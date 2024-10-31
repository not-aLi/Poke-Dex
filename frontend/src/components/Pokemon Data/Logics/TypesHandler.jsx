import React from "react";
import getTypeStyles from "./getTypeStyles";
import Types from "../Sub Layouts/Types";

const TypesHandler = () => {
  /**
   * The `renderColor` function returns styles based on the provided type.
   * @returns The `renderColor` function returns the styles for a given type if the type is provided,
   * otherwise it returns an empty object.
   */
  const renderColor = (type) => {
    if (type) {
      return getTypeStyles(type);
    }
    return {};
  };
  return (
    <div>
      <Types renderColor={renderColor} />
    </div>
  );
};

export default TypesHandler;
