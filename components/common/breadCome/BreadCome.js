import { faHouse } from '@fortawesome/free-regular-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

export default class BreadCome extends Component {
    render() {
        return (
            <div className='flex items-center '>
                <FontAwesomeIcon icon={faHouse} />

                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        )
    }
}
