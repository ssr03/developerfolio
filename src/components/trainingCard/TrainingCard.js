import React, {useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./TrainingCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function TrainingCard({training}) {

  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="subTitle">
            {item}
          </li>
        ))
      : null;
  };
  const {isDark} = useContext(StyleContext);

  return (
    <div>
      <Fade left duration={1000}>
        <div className="training-card">
          <div className="training-card-right">
            <h5 className="training-text-school">{training.courseName}</h5>

            <div className="training-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode training-text-subHeader"
                    : "training-text-subHeader"
                }
              >
                {training.instituteName}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } training-text-duration`}
              >
                {training.duration}
              </p>
              <p className="training-text-desc">{training.desc}</p>
              <div className="training-text-bullets">
                <ul>
                  <GetDescBullets descBullets={training.descBullets} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="training-card-border"></div>
      </Slide>
    </div>
  );
}
