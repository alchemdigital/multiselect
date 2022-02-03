import { Multiselect } from './lib/index'

function App() {
    
    const handleSelect = (selectedValue, selectedLabel, e) => {
        console.log(selectedValue)
        console.log(selectedLabel)
    }

    const handleHide = () => {
        console.log('Hide or Update button clicked')
    }

    return (
        <Multiselect
            handleSelect={handleSelect}
            handleHide={handleHide}
            values={[1]} // Selected values to highlight
            isMulti={true} // Single or Multiple select
            valueKey="value" // Default value is id
            labelKey="label" // Default value is name
            title="Select Language(s)"
            options={[
                { value: 1, label: 'Tamil' },
                { value: 2, label: 'English' }
            ]}
            show={true} // Show or Hide
            buttonText={'Add / Update'}
        />
    )
}

export default App
