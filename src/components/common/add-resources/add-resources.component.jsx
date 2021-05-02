import React from 'react'
import './add-resources.styles.scss'

const AddResources = ({children, ...otherButtonProps}) => {
    return (
        <div className="banner-ar">
            <p className="text-ar">If you have resources please add</p>
             <button className="btn-ar" {...otherButtonProps}>
                {children}
             </button>
        </div>
       
    )
}

export default AddResources