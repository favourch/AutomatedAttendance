'use strict';

import React from 'react';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className="header">
          Questions or comments?
        </h3>
        <h5>
          Contact us:
        </h5>
        <a href="mailto:AAAllstars@gmail.com?Subject=Automated%20Attendance%20Support">AAAllstars@gmail.com</a>
      </div>
    );
  }
}