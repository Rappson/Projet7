function SignIn() {
    return <div id="sign-in">
        <div className='bg-success p-5'>
            <div id="message" className="h2 mx-5">S'inscrire</div>


            <form className="mx-5">

                <div id="name" className="mt-3">
                    <label htmlFor="name">Nom&ensp;</label>
                    <input type="text" id="name" name="name"></input>

                    <label htmlFor='first-name'>Prénom&ensp;</label>
                    <input type="text" id="first-name" name="first-name"></input>
                </div>

                <div id="email" className="mt-2 mb-2">
                    <label htmlFor="email">Email&ensp;</label>
                    <input type="email" id="email" name="email"></input>
                </div>

                <div id='date'>
                    <label htmlFor="date">Date de naissance&ensp;</label>
                    <input type="date" id="date" name="date"></input>
                </div>
                <input type="submit" value="S'inscrire" className='btn btn-primary my-2 border border-dark'></input>
            </form>


        </div>
    </div>
}

export default SignIn