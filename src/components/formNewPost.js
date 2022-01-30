const createNewPost = () => {
    let headerCenter = document.querySelector('.default-menu')
    let postForm = document.querySelector('.new-post-form')
    let btnNewPost = document.querySelector('#new-post-link')

    if (headerCenter) {
        headerCenter.classList.replace('default-menu', 'unroll')
        postForm.classList.replace('not-visible', 'visible')
        btnNewPost.innerHTML = `<i class="fas fa-times-circle"></i>`

    } else {
        headerCenter = document.querySelector('#header-center')

        /* si le menu est enroulé */
        if (headerCenter.classList.contains('unroll')) {
            headerCenter.classList.replace('unroll', 'rolled-up')
            btnNewPost.innerHTML = `<i class="fas fa-plus-circle"></i>`
        } else {
            headerCenter.classList.replace('rolled-up', 'unroll')
            btnNewPost.innerHTML = `<i class="fas fa-times-circle"></i>`
        }

        /* si le champs de new post est visible */
        if (postForm.classList.contains('visible')) {
            postForm.classList.replace('visible', 'not-visible')
            postForm.innerHTML = ''
        } else {
            postForm.classList.replace('not-visible', 'visible')
            postForm.innerHTML = `<label htmlFor="post-title">Titre</label>
            <input style={{ width: 285 }} type='text' id="post-title" name="title" onChange={handleChange}></input>

            <label htmlFor="post-body">Votre message</label>
            <textarea id="post-body" name='body' onChange={handleChange} cols="35" rows="3"></textarea>
            <input class="btn-send-new-post" type="submit" value='envoyer' />`
        }

    }
}
export default createNewPost;