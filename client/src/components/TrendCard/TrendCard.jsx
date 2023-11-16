import React from "react";
import { TrendData } from "../../Data/TrendData";

const TrendCard = () => {
  return (
    <div>
      <h3 className="text-center fw-bold mt-4">Trend Data</h3>
      {TrendData.map((trend, index) => (
        <div key={index} className="text-center">
          <div
            className="card mb-1"
            style={{
              backgroundColor: "transparent",
              border: "1px solid black",
            }}
          >
            <div className="">
              <span href="#hashtag1" className="text-danger fw-bold">
                {trend.name} <br />
                {trend.shares}k
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
