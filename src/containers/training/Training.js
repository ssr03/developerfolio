import React from "react";
import "./Training.scss";
import {trainingInfo} from "../../portfolio";
import TrainingCard from "../../components/trainingCard/TrainingCard";

export default function Training() {
  if (trainingInfo.display) {
    return (
      <div className="training-section" id="training">
        <h1 className="training-heading">Training</h1>
        <div className="training-card-container">
          {trainingInfo.trainings.map((training, index) => (
            <TrainingCard key={index} training={training} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
