import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () =>{
    return(
        <footer>
            <div className="nav-grid">
            <ul className="list site-footer__links">
                <li className="site-footer__link"><Link to="/" >Home</Link></li>
                <li className="site-footer__link"><a href="https://www.stan.com.au/terms"
                                                     >Terms &amp; Conditions</a></li>
                <li className="site-footer__link"><a href="https://www.stan.com.au/privacy-policy" >Privacy
                    Policy</a></li>
                <li className="site-footer__link"><a href="https://www.stan.com.au/collection-statement"
                                                     >Collection Statement</a></li>
                <li className="site-footer__link"><a
                    href="https://help.stan.com.au?jwToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25jdXJyZW5jeSI6NCwiZGV2aWNlQ2FwIjpbImR5bmFtaWNTaXRlbWFwIiwiY2hhcHRlcnMiXSwiZXhwaXJ5IjoxNTU5ODk3OTgyLCJpYXQiOjE1NTQ3MTM5ODIsInByb2ZpbGVJZCI6IjAxMDIwZjUxYTA5YzRlN2E4M2EzNGQyNzhmZDUyYTllIiwicm9sZSI6InVzZXIiLCJzdHJlYW1zIjoiaGQiLCJ1aWQiOiIwMTAyMGY1MWEwOWM0ZTdhODNhMzRkMjc4ZmQ1MmE5ZSIsInVzZXJDYXAiOlsidWhkIiwiaGRyIiwia2lkcy1mZWVkIiwib2ZmbGluZSJdfQ.C3myl67NdjuczsDv5Khbf9ok3rrLqZUlksmObh4Uuuc&amp;userId=01020f51a09c4e7a83a34d278fd52a9e"
                    >Help</a></li>
                <li className="site-footer__link"><a
                    href="https://help.stan.com.au?jwToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb25jdXJyZW5jeSI6NCwiZGV2aWNlQ2FwIjpbImR5bmFtaWNTaXRlbWFwIiwiY2hhcHRlcnMiXSwiZXhwaXJ5IjoxNTU5ODk3OTgyLCJpYXQiOjE1NTQ3MTM5ODIsInByb2ZpbGVJZCI6IjAxMDIwZjUxYTA5YzRlN2E4M2EzNGQyNzhmZDUyYTllIiwicm9sZSI6InVzZXIiLCJzdHJlYW1zIjoiaGQiLCJ1aWQiOiIwMTAyMGY1MWEwOWM0ZTdhODNhMzRkMjc4ZmQ1MmE5ZSIsInVzZXJDYXAiOlsidWhkIiwiaGRyIiwia2lkcy1mZWVkIiwib2ZmbGluZSJdfQ.C3myl67NdjuczsDv5Khbf9ok3rrLqZUlksmObh4Uuuc&amp;userId=01020f51a09c4e7a83a34d278fd52a9e"
                    >Manage Account</a></li>
            </ul>
            <p className="site-footer__copyright">Copyright © 2019 DEMO Streaming. All Rights Reserved.</p>
            <div className="site-footer__social">
                <a href="https://www.facebook.com/StanAustralia"
                   className="icon icon__social icon__social--facebook" ></a>
                <a href="https://twitter.com/StanAustralia" className="icon icon__social icon__social--twitter" ></a>
                <a href="https://instagram.com/stanaustralia" className="icon icon__social icon__social--instagram" ></a></div>

            <div className="site-footer__store">
                <a href="https://itunes.apple.com/au/app/stan./id948095331?ls=1&amp;mt=8" className="icon icon__store icon__store--ios" ></a>
                <a  href="https://play.google.com/store/apps/details?id=au.com.stan.and"  className="icon icon__store icon__store--android" ></a>
                <a href="https://www.microsoft.com/en-gb/store/apps/stan/9nblggh4wz0p" className="icon icon__store icon__store--microsoft" ></a>
            </div>
            </div>
        </footer>
    )
}
export default Footer;