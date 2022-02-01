import './App.css';
import { Multiselect } from './lib/index'

function App() {
    
    const handleSelect = (selectedValue, selectedName, e) => {
        console.log(selectedValue)
        console.log(selectedName)
    }

    const handleHide = () => {
        console.log('hide or Update button clicked')
    }
    return (
        <Multiselect
            handleSelect={handleSelect}
            handleHide={handleHide}
            values={[1]}
            isMulti={true}
            valueKey="id" //Default value is id
            nameKey="name" //Default value is name
            title="Select Languages"
            options={[{ id: 1, name: 'Tamil' }, { id: 2, name: 'English' }]}
            show={true}
            buttonText={'Add / Update'}
        />
    );
}

export default App;
