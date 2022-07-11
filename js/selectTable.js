const btns = document.querySelectorAll('.btn')

function openTable(tableOpen, buttonActive) {
    document.querySelector(tableOpen).classList.toggle('table-desativado')
    document.querySelector(buttonActive).classList.toggle('btn_ativado')
}

function closeTable() {
    const tables = document.querySelectorAll('.table')
    tables.forEach(table => {
        btns.forEach(btn => {
            table.classList.add("table-desativado")
            btn.classList.remove('btn_ativado')
        })
    })
}

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {

        const tableId = btn.id.split('-')[1]
        const table = `#${tableId}`

        const activeBtnId = e.target.id
        const activeBtn = `#${activeBtnId}`

        if (btn.matches('.btn_ativado')) {
            e.target = openTable(table, activeBtn)
        } else if (btn.className != 'btn_ativado') {
            closeTable()
            e.target = openTable(table, activeBtn)
        }
    })
})
