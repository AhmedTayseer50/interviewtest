import React from 'react';
import LeftSearchBar1 from './components/LeftSearchBar1';
import RightSearchBar from './components/RightSearchBar';
import LeftResultPreview1 from './components/LeftResultPreview1';
import RightResultPreview1 from './components/RightResultPreview1';
import CombinedInfo1 from './components/CombinedInfo1';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Import your Redux store

const App1 = () => {
    return (
        <Provider store={store}> {/* Wrap your component with Provider */}
            <div>
                <h1>Entity Search</h1>
                <div className="left-section">
                    <LeftSearchBar1 />
                    <LeftResultPreview1 />
                </div>
                <div className="right-section">
                    <RightSearchBar />
                    <RightResultPreview1 />
                </div>
                <CombinedInfo1 />
            </div>
        </Provider>
    );
};

export default App1;
