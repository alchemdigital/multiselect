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
    return (
        <div>
            {props?.show &&
                <>
                    <div className="main-header">
                        <h1>{props.title}</h1>
                        <span className="close-btn" onClick={props.handleHide}>
                        &#10006;
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
                                            onClick={(e) => props.handleSelect(option[valueKey], option[labelKey], e)}
                                            className={values && values?.indexOf(option[valueKey]) !== -1 ? 'list selected' : 'list'}
                                        >
                                            {option[labelKey]}
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
