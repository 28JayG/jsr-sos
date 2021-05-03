import React from 'react'
import './bottom-nav.styles.scss'
import {bottomNavRoutes} from '../../../constants/routes'
import {Link} from 'react-router-dom'

const BottomNav = () => {

    return (

            <div className="bottom-nav">
                {Object.values(bottomNavRoutes).map((item) => {
                return (
                <Link to={item.route}>
                    {/* icon will go here */}
                    <div className="icon-bn"/>
                    <p className="text-bn">{item.title}</p>
                </Link>
                )
            })}
            </div>
    )
}

export default BottomNav;