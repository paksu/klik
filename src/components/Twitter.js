import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import _ from 'lodash';

import './Twitter.css';

const tweets = [
  "@company has the best product of all time",
  "OMG @company is amazing",
  "Imma buy everything from @company"
]
const TWEET_GRACE_PERIOD = 2000;
const TWEET_VISIBLE = 10000;

class Twitter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTweet: undefined,
      lastTweetUpdate: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => { this.updateFeed() }, 1000 );
  }
  componentWillUnmountiin() {
    if(this.interval) clearInterval(this.interval);
  }

  updateFeed() {
    const now = new Date();
    const { currentTweet, lastTweetUpdate } = this.state;

    if(now - lastTweetUpdate > TWEET_GRACE_PERIOD && !currentTweet) {
      this.setState({
        currentTweet: _.sample(tweets.filter(t => t !== currentTweet)),
        lastTweetUpdate: now
      });
    } else if(now - lastTweetUpdate > TWEET_VISIBLE && currentTweet) {
      this.setState({
        currentTweet: undefined,
        lastTweetUpdate: now
      });
    }

  }

  render() {
    const tweet = this.state.currentTweet;
    return (
      <ReactCSSTransitionGroup
        transitionName="tweetfeed"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <div key={tweet} style={{display: tweet ? "block" : "none"}}>
          <i className="fa fa-twitter" style={{margin: "0 5px"}}></i>
          <span style={{fontStyle: "italic", display: "inline-block"}} >{tweet}</span>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

export default Twitter;
