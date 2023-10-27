import React from 'react'
import { fortuneUrl, setFortuneUrl } from "../services/get-fortune";
import Explorer from "../containers/Explorer/Explorer";

const ApiSelect = (props) => {

    const urlChanged = (event) => {
        setFortuneUrl('https://' + event.target.value)
    }

    return (
        <div>
            <div className="row justify-content-end">
                <div className="col-auto d-flex align-items-center">
                    <label className="api-label mb-0" id="api-url-select-label" htmlFor="api-url">API:</label>
                </div>
                <div className="col-auto">
                    <select className="form-control-sm" id="api-url-select" onChange={urlChanged}>
                        {props.options.map((option) => {
                            return <option key={option} value={option}>{option}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="row justify-content-end mt-2">
                <div className="col-auto d-flex align-items-center api-label">
                    API links:
                </div>
                <div className="col-auto">
                    {props.options.map((option) => {
                        return (
                            <div className="container pr-0">
                                <a href={`https://${option}/docs`}>{`https://${option}`}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ApiSelect
