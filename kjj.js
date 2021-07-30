class shotcut {
    #wblist
    #excu
    constructor(wbl, ex) {
        this.#wblist = [
            [".bui-switch-input", 81],//弹幕开关
            ["#图层_1", 90],//全屏
            [".squirtle-select-item.active:last", 66],//倍速
            [".squirtle-select-item.active:first", 86],//清晰度
            [".squirtle-pagefullscreen-inactive", 88],//网页全屏
            [".squirtle-widescreen-inactive", 32],//网页宽屏
        ]
        this.#excu = [86, 66] //轮换设置
        if (wbl != undefined && Array.isArray(wbl)) {
            this.#wblist = wbl
        }
        if (ex != undefined && Array.isArray(ex)) {
            this.#excu = ex
        }
    }
    st() {
        $(document).on("keydown", e => {
            this.#wblist.forEach((s, i) => {
                var d = ($(s[0]).next().length ? $(s[0]).next() : $(s[0]).parent().children().first())
                var u = ($(s[0]).prev().length ? $(s[0]).prev() : $(s[0]).parent().children().last())
                if (!this.#excu.includes(s[1]))
                    u = $(s[0])
                else if (e.altKey && e.keyCode == s[1])
                    d.click()
                if (e.ctrlKey && e.keyCode == s[1])
                    u.click()
            })
        })
    }
    cl() {
        $(document).off("keydown")
    }
}
