# What is Multiselect

Instead of using dropdown, you can use this component to let the user select single or multiple options without scrolling. Use this component in models for better UI.

## Compatability

It works with react and tested esecially with functional components

## How to use
```
    npm i @alchemdigital/multiselect
```
```js
    import { Multiselect } from '@alchemdigital/multiselect'

    function MyComponent() {

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
```

## Demo output
![alt text](public/multi.PNG)

## Support

Alchem Digital (bairavan@alchemdigital.com)