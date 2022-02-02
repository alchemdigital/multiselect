import { useState } from 'react'
import { Multiselect } from './lib/index'

function App() {
    const [selectedValues, setSelectedValues] = useState([])

    const handleSelect = (selectedValue, selectedName, e) => {
        setSelectedValues([...selectedValues, selectedValue])
        console.log(selectedName)
    }

    const handleHide = () => {
        console.log('Hide or Update button clicked')
    }

    const options = [
        {
            "value": 0,
            "label": "option-0"
        },
        {
            "value": 1,
            "label": "option-1"
        },
        {
            "value": 2,
            "label": "option-2"
        },
        {
            "value": 3,
            "label": "option-3"
        },
        {
            "value": 4,
            "label": "option-4"
        },
        {
            "value": 5,
            "label": "option-5"
        },
        {
            "value": 6,
            "label": "option-6"
        },
        {
            "value": 7,
            "label": "option-7"
        },
        {
            "value": 8,
            "label": "option-8"
        },
        {
            "value": 9,
            "label": "option-9"
        },
        {
            "value": 10,
            "label": "option-10"
        },
        {
            "value": 11,
            "label": "option-11"
        },
        {
            "value": 12,
            "label": "option-12"
        },
        {
            "value": 13,
            "label": "option-13"
        },
        {
            "value": 14,
            "label": "option-14"
        },
        {
            "value": 15,
            "label": "option-15"
        },
        {
            "value": 16,
            "label": "option-16"
        },
        {
            "value": 17,
            "label": "option-17"
        },
        {
            "value": 18,
            "label": "option-18"
        },
        {
            "value": 19,
            "label": "option-19"
        },
        {
            "value": 20,
            "label": "option-20"
        },
        {
            "value": 21,
            "label": "option-21"
        },
        {
            "value": 22,
            "label": "option-22"
        },
        {
            "value": 23,
            "label": "option-23"
        },
        {
            "value": 24,
            "label": "option-24"
        },
        {
            "value": 25,
            "label": "option-25"
        },
        {
            "value": 26,
            "label": "option-26"
        },
        {
            "value": 27,
            "label": "option-27"
        },
        {
            "value": 28,
            "label": "option-28"
        },
        {
            "value": 29,
            "label": "option-29"
        },
        {
            "value": 30,
            "label": "option-30"
        },
        {
            "value": 31,
            "label": "option-31"
        },
        {
            "value": 32,
            "label": "option-32"
        },
        {
            "value": 33,
            "label": "option-33"
        },
        {
            "value": 34,
            "label": "option-34"
        },
        {
            "value": 35,
            "label": "option-35"
        },
        {
            "value": 36,
            "label": "option-36"
        },
        {
            "value": 37,
            "label": "option-37"
        },
        {
            "value": 38,
            "label": "option-38"
        },
        {
            "value": 39,
            "label": "option-39"
        },
        {
            "value": 40,
            "label": "option-40"
        },
        {
            "value": 41,
            "label": "option-41"
        },
        {
            "value": 42,
            "label": "option-42"
        },
        {
            "value": 43,
            "label": "option-43"
        },
        {
            "value": 44,
            "label": "option-44"
        },
        {
            "value": 45,
            "label": "option-45"
        },
        {
            "value": 46,
            "label": "option-46"
        },
        {
            "value": 47,
            "label": "option-47"
        },
        {
            "value": 48,
            "label": "option-48"
        },
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        },
        {
            "value": 21,
            "label": "option-21"
        },
        {
            "value": 22,
            "label": "option-22"
        },
        {
            "value": 23,
            "label": "option-23"
        },
        {
            "value": 24,
            "label": "option-24"
        },
        {
            "value": 25,
            "label": "option-25"
        },
        {
            "value": 26,
            "label": "option-26"
        },
        {
            "value": 27,
            "label": "option-27"
        },
        {
            "value": 28,
            "label": "option-28"
        },
        {
            "value": 29,
            "label": "option-29"
        },
        {
            "value": 30,
            "label": "option-30"
        },
        {
            "value": 31,
            "label": "option-31"
        },
        {
            "value": 32,
            "label": "option-32"
        },
        {
            "value": 33,
            "label": "option-33"
        },
        {
            "value": 34,
            "label": "option-34"
        },
        {
            "value": 35,
            "label": "option-35"
        },
        {
            "value": 36,
            "label": "option-36"
        },
        {
            "value": 37,
            "label": "option-37"
        },
        {
            "value": 38,
            "label": "option-38"
        },
        {
            "value": 39,
            "label": "option-39"
        },
        {
            "value": 40,
            "label": "option-40"
        },
        {
            "value": 41,
            "label": "option-41"
        },
        {
            "value": 42,
            "label": "option-42"
        },
        {
            "value": 43,
            "label": "option-43"
        },
        {
            "value": 44,
            "label": "option-44"
        },
        {
            "value": 45,
            "label": "option-45"
        },
        {
            "value": 46,
            "label": "option-46"
        },
        {
            "value": 47,
            "label": "option-47"
        },
        {
            "value": 48,
            "label": "option-48"
        },
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        }
        ,
        {
            "value": 49,
            "label": "option-49"
        },
        {
            "value": 50,
            "label": "option-50"
        },
        {
            "value": 21,
            "label": "option-21"
        },
        {
            "value": 22,
            "label": "option-22"
        },
        {
            "value": 23,
            "label": "option-23"
        },
        {
            "value": 24,
            "label": "option-24"
        },
        {
            "value": 25,
            "label": "option-25"
        },
        {
            "value": 26,
            "label": "option-26"
        },
        {
            "value": 27,
            "label": "option-27"
        },
        {
            "value": 28,
            "label": "option-28"
        },
        {
            "value": 29,
            "label": "option-29"
        },
        {
            "value": 30,
            "label": "option-30"
        },
        {
            "value": 31,
            "label": "option-31"
        },
        {
            "value": 32,
            "label": "option-32"
        }
    ]
    return (
        <Multiselect
            handleSelect={handleSelect}
            handleHide={handleHide}
            values={selectedValues}
            isMulti={true}
            valueKey="id" //Default value is id
            nameKey="name" //Default value is name
            title="Select Language(s)"
            options={options}
            show={true}
            buttonText={'Add / Update'}
        />
    );
}

export default App
