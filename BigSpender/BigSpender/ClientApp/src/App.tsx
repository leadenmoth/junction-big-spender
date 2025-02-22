import React, { FC } from 'react';
import Priorities from './components/Priorities';
import Setup from './components/Setup';
import Dashboard from './components/Dashboard';
import { Router } from '@reach/router';
import BasicInfo from './components/BasicInfo';
import SpendingRequest from './components/SpendingProposal/SpendingRequest';
import SpendApproved from './components/SpendingProposal/SpendApproved';
import SpendRejected from './components/SpendingProposal/SpendRejected';
import OnlineStore from './components/SpendingProposal/OnlineStore';
import ChangedMyMind from './components/SpendingProposal/ChangedMyMind';

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <BasicInfo path="start" />
        <Setup path="setup" />
        <Priorities path="priorities" />
        <OnlineStore path="store" />
        <ChangedMyMind path="changed" />
        <SpendApproved path="spend-yes" />
        <SpendRejected path="spend-no" />
        <SpendingRequest path="spend" />
        <Dashboard path="/" />
      </Router>
    </div>
  );
};

export default App;
