import React, { useState } from 'react';
import NavBar from './Navbar/NavBar';
import Home from './Components/Home/Home';
import Header from './Header/Header';
import { Switch, Route } from 'react-router-dom';
import RightSideBar from './SideBar/RightSideBar/RightSideBar';
import LeftSideBar from './SideBar/LeftSideBar/LeftSideBar';
import Footer from './Footer/Footer';
import CallForPaper from './Components/CallForPaper/CallForPaper';
import Register from './Components/Register/Register';
import ImportantDates from './Components/ImportantDates/ImportantDates';
import OrganisingCommittee from './Components/Committee/OrganisingCommittee/OrganisingCommittee';
import AdvisoryCommittee from './Components/Committee/AdvisoryCommittee/AdvisoryCommittee';
import TechnicalCommittees from './Components/Committee/TechnicalCommittees/TechnicalCommittees';
import KeyNoteSpeaker from './Components/KeyNoteSpeaker/KeyNoteSpeaker';
import PaperSubmission from './Components/PaperSubmission/PaperSubmission';
import ContactUs from './Components/ContactUs/ContactUs';
import Notice from './Notice/Notice';

function App() {
  const [Msg, setMsg] = useState('');
  console.log(Msg);
  const sendMessage = (data) => {
    setMsg(data);
  };
  return (
    <div>
      <div className='min-h-screen'>
        <NavBar getMessage={sendMessage} />
        <Header sendMessage={Msg} />
        <Notice />
        <div className='flex xl:flex-row flex-col mt-16'>
          <div className='xl:w-1/5 mx-auto p-6'>
            <RightSideBar />
          </div>
          <div className='xl:w-3/5 w-full mx-auto  md:p-6'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/callforpaper' component={CallForPaper} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/importantdates' component={ImportantDates} />
              <Route exact path='/organising' component={OrganisingCommittee} />
              <Route exact path='/advisory' component={AdvisoryCommittee} />
              <Route exact path='/technical' component={TechnicalCommittees} />
              <Route exact path='/keynotespeaker' component={KeyNoteSpeaker} />
              <Route exact path='/contact' component={ContactUs} />
              <Route
                exact
                path='/papersubmission'
                component={PaperSubmission}
              />
            </Switch>
          </div>
          <div className='xl:w-1/5 mx-auto p-6'>
            <LeftSideBar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
