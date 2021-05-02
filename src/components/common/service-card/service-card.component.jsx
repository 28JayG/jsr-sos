import React from 'react'
import './service-card.styles.scss'

const ServiceCard = ({title,date,verify,direction,contact}) => {
    return (
        <div className="service-card">
            <div className="title-badge-sc">
                <p className="title-sc">Marwari Yuva Manch</p>
                <p className="badge-sc">verified</p>
            </div>
            <p className="date-sc">Verified on: Apr 28, 2021</p>
            <div className="button-sc">
                <button className="btn-common-sc btn-one-sc">Get Direction</button>
                <button className="btn-common-sc btn-two-sc">Call</button>
            </div>
        </div>
    )
}

export default ServiceCard;