const input = document.querySelector('#input')

input.addEventListener('input', function () {
    const allCells = document.querySelectorAll('.cel-table')

    if (input.value.length > 0) {
        allCells.forEach(cell => {
            const tdNome = cell.querySelector('.product-name')
            const nome = tdNome.textContent
            const expressao = new RegExp(this.value, "i")
            if (expressao.test(nome)) {
                tds = cell.querySelectorAll('td')
                tds.forEach(td => {
                    td.classList.remove('invisivel')
                })
            } else {
                tds = cell.querySelectorAll('td')
                tds.forEach(td => {
                    td.classList.add('invisivel')
                })
            }
        })
    } else {
        allCells.forEach(cell => {
            tds = cell.querySelectorAll('td')
            tds.forEach(td => {
                td.classList.remove('invisivel')
            })
        })
    }
})
