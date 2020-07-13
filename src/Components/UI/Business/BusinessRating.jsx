import React from "react";
import {
  IconConfused,
  IconHappy,
  IconSad,
  IconSmile,
  IconVerySad,
} from "../../../icons";
import { FlatIcon, ScoreThermometer } from "../../UI";

export default () => {
  const iconList = [
    <IconVerySad />,
    <IconSad />,
    <IconConfused />,
    <IconSmile />,
    <IconHappy />,
  ];
  const iconHTML = (list, rating) => {
    let mood;
    switch (Math.round(rating)) {
      case 1 || 2:
        mood = 0;
        break;
      case 3 || 4:
        mood = 1;
        break;
      case 5 || 6:
        mood = 2;
        break;
      case 7 || 8:
        mood = 3;
        break;
      case 9 || 10:
        mood = 4;
        break;
      default:
        break;
    }
    return list.map((item, idx) => (
      <FlatIcon
        key={idx}
        style={{ opacity: mood === idx ? "1" : "0.5" }}
        icon={item}
      />
    ));
  };

  return (
    <>
      <div className="d-flex justify-content-center mb-1">
        {iconHTML(iconList, 5)}
      </div>
      <ScoreThermometer score={5} ratingCount={20} />
    </>
  );
};
