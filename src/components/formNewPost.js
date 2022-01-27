const createNewPost = () => {
    let headerCenter = document.querySelector('.default-menu')
    let postForm = document.querySelector('.new-post-form')
    let btnNewPost = document.querySelector('#new-post-link')

    postForm.innerHTML = `<label htmlFor="post-title">Titre</label>
<input style={{ width: 285 }} type='text' id="post-title" name="post-title"></input>

<label htmlFor="post-body">Votre message</label>
<textarea id="post-body" cols="35" rows="3"></textarea>
<button class="btn-send-new-post" type="submit">Envoyer</button>`

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
            
        } else {
            postForm.classList.replace('not-visible', 'visible')
        }

    }
}
export default createNewPost;