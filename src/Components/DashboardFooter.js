import React from 'react'
import { Link } from 'react-router-dom'
import '../StyleSheets/Footer.css'

export default function DashboardFooter() {
    return (
        <div>
            <footer className="footer " id='Footerbg'>

                <p className="text-center">Copyright @2023
                    <div>
                        Designed With By <div>
                        <Link to="https://www.codiot.com/">codiot technologies llp</Link>
                        </div>
                    </div>
                </p>
            </footer>
        </div>
    )
}
