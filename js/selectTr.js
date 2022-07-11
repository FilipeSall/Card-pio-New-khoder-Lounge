const trs = document.querySelectorAll('tr')

const tbodys = document.querySelectorAll('tbody')
tbodys.forEach(tbody => {
    const trsBody = tbody.querySelectorAll('tr')
    trsBody.forEach(trBody => {
        trBody.classList.add('cel-table')

        const celTables = tbody.querySelectorAll('.cel-table')
        celTables.forEach(celTable => {
            const cel = celTable.querySelectorAll('td')
            cel[0].classList.add('code')
            cel[1].classList.add('product-name')
            cel[2].classList.add('price')
        })
    })
})

trs.forEach(function (tr) {
    tr.addEventListener('click', function () {
        tds = tr.querySelectorAll('td')
        tds.forEach(function (td) {
            td.classList.toggle('selected')
        })
    })
})

