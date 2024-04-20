import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (evt) => {
    const { name } = evt.target;
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };


  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad; 
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
		const actualState = this.state;
		const total = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
    <>
    <Section title="Please leave feedback">
					<FeedbackOptions options={actualState} onLeaveFeedback={this.handleFeedback} />
				</Section>        

  <Section title="Statistics">
    {total ? (
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage} />
    ) : (
    <Notification message="No feedback given." />
    )}
  </Section> 
    </>
  );
  }
}

export default App;