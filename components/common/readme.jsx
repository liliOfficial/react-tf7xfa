import React from "react";

const ReadMe = () => {
  return (
    <div className="readme">
      <h3>Read Me:</h3>
      <p>Welcome to Li Li React demo.</p>
      <h4>Key Requirements:</h4>
      <ul>
        <li>
          Using the Unsplash API to create a micro app that allows a user to
          search for a tag and show the matchingphotos.
        </li>
        <li>
          The app should be written in react, and it should be styled to be
          visually pleasing.
        </li>
        <li>
          Host the app so we can see your source and the application running,
          and share the link.
        </li>
        <li>Time: half an hour.</li>
      </ul>
      <h4>Solution Step by Step:</h4>
      <ul>
        <li>Use stackblitz to host and run the react application.</li>
        <li>Use material ui as the style library to save time.</li>
        <li>Read Unsplash document create unsplashService to pass the key.</li>
        <li>
          Create main component as the homepage and create three common
          components: input, pagination and show the list to show the result.
        </li>
        <li>Show message for no result match.</li>
        <li>Add read me.</li>
      </ul>
      <h4>Further Improvement:</h4>
      <p>
        Since the time limitation is half an hour, this demo only has the basice
        founction to meet the requiements. If letting more time, the following key points can be improved.
      </p>
      <ul>
        <li>UI improvement and responsive design</li>
        <li>Unit test</li>
        <li>Error handle</li>
        <li>Router for redirect</li>
      </ul>
    </div>
  );
};

export default ReadMe;
