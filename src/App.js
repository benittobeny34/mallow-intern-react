import './App.css';
import ComponentA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import ComponentB from "./components/ComponentB";
import {UserContext, user} from "./components/UserContext";
import {ChannelContext,channel} from "./components/ChannelContext";

function App() {
    return (
        <UserContext.Provider value={user}>
            <ChannelContext.Provider value={channel}>
                <div className="App">
                    <ComponentA/>
                    <ComponentB/>
                    <ComponentC/>
                </div>
            </ChannelContext.Provider>
        </UserContext.Provider>
    );
}

export default App;
