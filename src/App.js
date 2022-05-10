import './App.css';
import {Button, DatePicker, version} from 'antd';
import "antd/dist/antd.css";
import DemoLine from "./components/DemoLine.js";
import {DeleteOutlined,CloseCircleOutlined,AlignRightOutlined, DragOutlined } from '@ant-design/icons';

function App() {
    return (
        <div className="App">
            <h1>antd version: {version}</h1>
            <DatePicker/>
            <Button type="primary" size="small" loading="true" style={{marginLeft: 8, fontSize: 7}}>
                Primary Button
            </Button>
            <div className="w-1/4 flex flex-row justify-center items-center">
                <DemoLine/>
            </div>
            <div className="flex justify-center py-8 my-8">
                <DeleteOutlined />
                <CloseCircleOutlined />
                <AlignRightOutlined />
                <DragOutlined />
            </div>
        </div>
    );
}

export default App;
