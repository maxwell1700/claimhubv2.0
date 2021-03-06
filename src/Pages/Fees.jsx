import React from 'react'
import '../stylesheet/fees.css'
import table from '../assets/Examples Table.png'

function Fees() {
    return (
        <div className="fees-container">
            <div className="fees-info">
                <div className="fees-section1">
                    <div className="fees-text">
                        <p>When it comes to fees, we like to keep things simple. We operate on a no win, no fee basis and we charge 30% on any money we get back for you. For example, if we recover £300.00 for you then we will charge a fee of £100.00.</p>

                    </div>
                    <div className="fees-img">
                        <img src={table} alt="work" />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Fees
