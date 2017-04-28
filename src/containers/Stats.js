import React from 'react';
import { connect } from 'react-redux';

const Stats = ({stats}) => (
  <div className="row">
    <div className="col-md-8 col-offset-2">
      <dl className="dl-horizontal">
        <dt>Maximum money</dt>
        <dd>{stats.maxMoney}</dd>

        <dt>Total earnings</dt>
        <dd>{stats.totalMoneyEarned}</dd>

        <dt>Total spendings</dt>
        <dd>{stats.totalMoneySpent}</dd>

        <dt>Maximum income</dt>
        <dd>{stats.maxIncome}</dd>

        <dt>Achivements</dt>
        <dd>{stats.achievementCount}</dd>

        <dt>Maximum staff</dt>
        <dd>{stats.maxStaff}</dd>

        <dt>Times clicked</dt>
        <dd>{stats.timesClicked}</dd>
      </dl>
    </div>
  </div>
)


const mapStateToProps = (state) => {
  return {
    stats: state.stats
  }
}

export default connect(
  mapStateToProps
)(Stats)
