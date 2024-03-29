var React = require('react');

var Landing = (props) => {
  return (
    <div>
      <div className='row align-center'>
          <img className='main-logo' src='https://s3-us-west-1.amazonaws.com/montmatch-resources/mm.png'/>
      </div>
      <h1 className='text-center page-title'>Welcome</h1>
      <p>
        This is a weather application build on React. I have built this
        for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = Landing;
