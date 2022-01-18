function errorPage() {

    return (
        <div id="container-error">
            <div id="body-error">
                <section classname="notFound">
                    <div classname="img">
                        <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                        <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
                    </div>
                    <div classname="text">
                        <h1>404</h1>
                        <h2>PAGE NOT FOUND</h2>
                        <h3>BACK TO HOME?</h3>
                        <a href="http://localhost:3000" classname="yes">YES</a>
                        <a href="#">NO</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default errorPage;