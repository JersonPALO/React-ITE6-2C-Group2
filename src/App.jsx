import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/activities/activity1/Landing";
import ClickTracker from "./pages/activities/activity2/ClickTracker";
import CounterApp from "./pages/activities/activity3/CounterApp";
import MusicList from "./pages/activities/activity4/musiclist";
import Songs from "./pages/activities/activity5/Songs";
import MCO from "./MCO";

const App = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MCO/>}/>
            <Route path="/Activity1" element={<Landing/>}/>
            <Route path="/Activity2" element={<ClickTracker/>}/>
            <Route path="/Activity3" element={<CounterApp/>}/>
            <Route path="/Activity4" element={<MusicList/>}/>
            <Route path="/Activity5" element={<Songs/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;