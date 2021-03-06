import React from 'react'
import { IndexRoute, Route } from 'react-router'
import {
  App,
  ApplyPage,
  Cloud9Setup,
  DonationPage,
  HackbotNewTeam,
  HomePage,
  LeaderIntake,
  NotFound,
  OneOffFormWrapper,
  RedeemTechDomain,
  SlackInvite,
  StartPage,
  TeamPage,
  WorkshopWrapper,
} from './containers'

import './styles'

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute components={HomePage} />
      <Route path="start" component={StartPage} />
      <Route path="apply" component={ApplyPage} />
      <Route path="donate" component={DonationPage} />

      <Route path="team" component={TeamPage} />

      <Route path="workshops" component={WorkshopWrapper} />
      <Route path="workshops/*" component={WorkshopWrapper} />

      <Route component={OneOffFormWrapper}>
        <Route path="slack_invite" component={SlackInvite} />
        <Route path="cloud9_setup" component={Cloud9Setup} />
        <Route path="hackbot/teams/new" component={HackbotNewTeam} />
        <Route path="intake" component={LeaderIntake} />
        <Route path="redeem_tech_domain" component={RedeemTechDomain} />
      </Route>

      <Route path="*" component={NotFound} status={404} />
    </Route>
  )
}
