document.addEventListener("DOMContentLoaded", function () {
    const traceContainer = document.querySelector('.traceContainer')
    const navBar = document.querySelector('.navBar')

    const empresasText = document.querySelector('.empresasText')
    const jogosInterativosText = document.querySelector('.jogosInterativosText')
    const projetosPessoaisText = document.querySelector('.projetosPessoaisText')
    const todosProjetosText = document.querySelector('.todosProjetosText')

    const typeOfProjectSection = document.querySelector('.typeOfProjectSection h1')

    const boxEmpresas = Array.from(document.querySelectorAll('.box.empresasOrganizacoes'))
    const boxJogos = Array.from(document.querySelectorAll('.box.jogosInterativos'))
    const boxPessoais = Array.from(document.querySelectorAll('.box.projetosPessoais'))

    const box = document.querySelectorAll('.box')

    const hideAllBoxes = () => {
        box.forEach(box => box.style.display = 'none')
    }

    const displayBoxesBlock = (boxes) => boxes.forEach(box => box.style.display = 'block')

    const showBoxes = (boxes) => {
        displayBoxesBlock(boxes)
    }

    const typeOfProject = (projectType, boxGroup) => {
        typeOfProjectSection.textContent = `Projetos para ${projectType}`
        hideAllBoxes()
        showBoxes(boxGroup)
    }

    empresasText.addEventListener('click', () => {
        typeOfProject('Empresas e Organizações', boxEmpresas)
    })

    jogosInterativosText.addEventListener('click', () => {
        typeOfProject('Jogos interativos', boxJogos)
    })

    projetosPessoaisText.addEventListener('click', () => {
        typeOfProject('Projetos pessoais', boxPessoais)
    })

    todosProjetosText.addEventListener('click', () => {
        typeOfProjectSection.textContent = 'TODOS OS PROJETOS'
        hideAllBoxes()
        showBoxes(boxEmpresas)
        showBoxes(boxJogos)
        showBoxes(boxPessoais)
    })

    traceContainer.addEventListener('click', () => {
        traceContainer.classList.toggle('change')
        navBar.classList.toggle('show')
    })


    document.getElementById("arrow").addEventListener("click", () => {
        const selection = document.querySelector('.selection')
        selection.scrollIntoView({ behavior: 'smooth' })
    })

    const seeMoreButtons = document.querySelectorAll('.seeMoreButton')

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const descriptionP = button.parentElement.querySelector('.expandableSection p')
            const box = e.target.closest('.box')

            button.classList.toggle('rotate')
            box.classList.toggle('expanded')

            descriptionP.style.display === '' || descriptionP.style.display === 'none'
                ? descriptionP.style.display = 'block'
                : descriptionP.style.display = 'none'

        })
    })

    const sendForms = document.querySelector('#sendForms')

    sendForms.addEventListener('click', () => {
        alert('Formulário enviado!')
    })
})

