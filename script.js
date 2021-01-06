const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        panel.classList.remove('notSelected')
    })
})

function removeActiveClasses(){
    panels.forEach (panel => {
        panel.classList.remove('active')
        panel.classList.add('notSelected')
    })
}

