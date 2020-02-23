import React, { useState, useEffect, Fragment } from 'react';

import Loader from 'react-loader-spinner';
import EventDispatcher from '@garney/event-dispatcher';


class BusyDispatcher extends EventDispatcher {
  constructor() {
    super();
    this.state = false;
  }

  setBusyStatus(status) {
    this.state = status;
    this.dispatchEvent(BusyDispatcher.events.SET_BUSY_STATUS, this.state);
  }

  get status() {
    return this.state;
  }
}

BusyDispatcher.instance = new BusyDispatcher();
BusyDispatcher.events = {
  SET_BUSY_STATUS: "SET_BUSY_STATUS"
};
function BusyIndicator({ options = {} }) {
  const defaultOptions = {
    type: 'Puff',
    color: '#00BFFF',
    height: 50,
    width: 50
  };
 const busyStyle =  {
      'background-color': options.backgroundColor || 'rgba(0,0,0,.5)',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    };

  options = {
    ...defaultOptions,
    ...options
  };

  const { type, color, height, width } = options;
  const [status, setStatus] = useState(BusyDispatcher.instance.status);

  useEffect(() => {
    BusyDispatcher.instance.addEventListener(BusyDispatcher.events.SET_BUSY_STATUS, (status) => {
      setStatus(status);
    })
  }, []);

  const view = status ? (
      <div style={busyStyle}>
        <Loader
            type={type}
            color={color}
            height={height}
            width={width}
        />
      </div>
  ): '';
  return view;
}

function setBusyStatus(status) {
  BusyDispatcher.instance.setBusyStatus(status)
}


module.exports = {
  BusyIndicator,
  setBusyStatus,
  status: BusyDispatcher.instance.status
};