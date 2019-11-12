import React from 'react';

import Splash from './src/components/Splash';
import TabNavigator from "./src/components/TabNavigator";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Splash />
      );
    } else {
      return (
        <TabNavigator />
      );
    }
  }

};

export default App;

