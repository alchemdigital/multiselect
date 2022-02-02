import React from 'react'
import '../main.css'

function Multiselect(props) {

    let values = props.values
    if (!props.isMulti)
        values = [props.values]
    let valueKey = 'id'
    if (props.valueKey)
        valueKey = props.valueKey
    let labelKey = 'name'
    if (props.labelKey)
        labelKey = props.labelKey
    console.log(values)
    return (
        <div>
            {props?.show &&
                <>
                    <div className="main-header">
                        <h1>{props.title}</h1>
                        <span className="close-btn" onClick={props.handleHide}>
                            X
                        </span>
                    </div>
                    <div className="content-container">
                        <div className="content-part">
                            <ul className="list-header">
                                {
                                    props.options != null &&
                                    props.options.map((option) => (
                                        <li
                                            key={option[valueKey]}
                                            onClick={(e) => props.handleSelect(option.value, option.label, e)}
                                            className={values && values?.indexOf(option.value) !== -1 ? 'list selected' : 'list'}
                                        >
                                            {option.label}
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="text-end">
                                <button className='update-btn' onClick={props.handleHide}>
                                    {props.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Multiselect
