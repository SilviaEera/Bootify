import React from "react";
import "./Development.css";
import photo from "../../assets/spring-boot-advanced-settings.png";

const DevelopmentRowOne = () => {
  return (
    <div className="developmentRow">
      <div className="developmentRowWrapper">
        <div className="rowOne">
          <div className="rowContainer">
            <div className="imgContainer">
              <img className="rowOneImg" src={photo} alt="" />
            </div>
            <div className="textContainer">
              <div className="details">
                <h3 className="rowHeading">
                  <span className="rowNum">1.</span> Project and database
                  settings
                </h3>
                <p className="rowDeatils">
                  <strong>Select how you work</strong> - build with Maven or
                  Gradle, use Java or Kotlin, add your frontend, enable Swagger
                  UI and much more.{" "}
                  <strong>All major databases are supported</strong> - including
                  MySQL, Postgres, MongoDB and embedded databases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentRowOne;
