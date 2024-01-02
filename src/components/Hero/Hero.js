import React from 'react'
import Fortune from "../../containers/Fortune/Fortune";
import Explorer from "../../containers/Explorer/Explorer";
import './Hero.css'

export default function (props) {

    const waves = () => (
        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28 " preserveAspectRatio="none">
            <defs>
                <path id="wave-path"
                      d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
            </defs>
            <g className="wave1">
                <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"/>
            </g>
            <g className="wave2">
                <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"/>
            </g>
            <g className="wave3">
                <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"/>
            </g>
        </svg>
    )

    const onlyFortune = () => (
        <table className="fortune-space">
            <tbody>
                <tr>
                    <td>
                        <Fortune />
                    </td>
                </tr>
            </tbody>
        </table>
    )

    const withExplorer = () => (
        <div className="fortune-space col-9 pl-4">
            <table className="col-12">
                <tbody>
                <tr>
                    <td className="col-explorer overflow-auto rounded rounded-2">
                        <Explorer/>
                    </td>
                    <td className="p-4">
                        <Fortune/>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    )

    return (
        <section id="hero" className="d-flex flex-column justify-content-end align-items-center">
            {props.explorer === true ? withExplorer() : onlyFortune()}
            {waves()}
        </section>
    )
}
