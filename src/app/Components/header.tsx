import Link from "next/link"

export default () => {
    return (
        <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
            <div className="container">
                <a className="navbar-brand" href="index.html">Furni<span>.</span></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>
                        <li><Link className="nav-link" href="/shop">Shop</Link></li>
                        <li><Link className="nav-link" href="/about">About us</Link></li>
                        <li><Link className="nav-link" href="/services">Services</Link></li>
                        <li><Link className="nav-link" href="/blog">Blog</Link></li>
                        <li><Link className="nav-link" href="/contact">Contact us</Link></li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><Link className="nav-link" href="/#"><img src="images/user.svg"/></Link></li>
                        <li><Link className="nav-link" href="/cart"><img src="images/cart.svg"/></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}