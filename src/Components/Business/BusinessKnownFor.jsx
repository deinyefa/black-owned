import React from "react";
import {
  IconDiamond,
  IconPiggyBank,
  IconSalad,
  IconShoppingBag,
  IconShoppingBagTime,
} from "../../icons";
import { FlatIcon } from "../UI";

const knownFor = [
  "Quality Products",
  "Fast Delivery",
  "Sweet Packaging",
  "Affordable",
  "Green",
];

export default () => {
  return (
    <>
      <h3 className="text-uppercase text-muted h6 mt-4 mb-3">Known for</h3>
      {knownFor.map((k) => {
        let icon;
        switch (k) {
          case "Quality Products":
            icon = <IconDiamond />;
            break;
          case "Fast Delivery":
            icon = <IconShoppingBagTime />;
            break;
          case "Affordable":
            icon = <IconPiggyBank />;
            break;
          case "Sweet Packaging":
            icon = <IconShoppingBag />;
            break;
          case "Green":
            icon = <IconSalad />;
            break;
          default:
            icon = null;
            break;
        }
        return (
          <div key={k} className="d-flex mb-3">
            <FlatIcon icon={icon} />
            <span className="align-self-center">{k}</span>
          </div>
        );
      })}
    </>
  );
};
