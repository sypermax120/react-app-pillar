import '../style/App.scss';
import Header from './Header';
import MainLogo from './MainLogo';
import FacilitiesBlock from './FacilitiesBlock'
import CityBlock from './CityBlock';
import Resort from './Resort';
import Relaxing from './Relaxing';
import Woman from './Woman';
import Footer from './Footer';

function App({users, setUsers, setAuthUser, authUser}) {
  // console.log(props);

  return (
    <div className="App">
      <section className='App__first'>
        <Header users={users} setUsers={setUsers} setAuthUser={setAuthUser} authUser={authUser}/>
        <MainLogo />
        <FacilitiesBlock />
        <CityBlock />
        <Resort />
        <Relaxing />
      </section>

      <section className='App__middle'>
        <Woman />
      </section>

      <section className='App__bottom'>
        <Footer />
      </section>
    </div>
  );
}

export default App;
