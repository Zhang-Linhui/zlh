console.log("1");
let sss = 0;
const wblist = [
    [".bui-switch-input", 81],//弹幕开关
    ["#图层_1", 90],//全屏
    [".squirtle-select-item.active:last", 66],//倍速
    [".squirtle-select-item.active:first", 86],//清晰度
    [".squirtle-pagefullscreen-inactive", 88],//网页全屏
    [".squirtle-widescreen-inactive", 32],//网页宽屏
]
wblist.forEach((s, i) => {
    $(document).on("keydown", e => {
        let u = $(s[1]).next().length ? $(s[1]).next() : $(s[1]).siblings().first()
        let d = $(s[1]).prev().length ? $(s[1]).prev() : $(s[1]).siblings().last()
        if (e.ctrlKey && e.keyCode == s[0]) {
            u.click()
        }
    })
})
const kx = {
    core(ke, fun) {
        $(document).keydown(event => {
            if (event.ctrlKey && event.keyCode == ke) {
                fun();
            }
        })
    }
}
const keylist = [
    () => {
        console.log("弹幕切换")
        $(".bui-switch-input").click()
    }, () => {
        let ad = $(".bui-select-list:first .bui-select-item-active");
        (ad.next().length ? ad.next() : ad.siblings().first()).click();
    }, () => {
        let ad = $(".bilibili-player-video-btn-speed-menu-wrap .bilibili-player-active");
        (ad.prev().length ? ad.prev() : ad.siblings().last()).click();
    }, () => {
        $(".bilibili-player-iconfont-volume").click();
    }, () => {
        $("[data-text=进入全屏]").click();
    }, () => {
        $(".van-icon-videodetails_like").click();
    }
]
const key = [81, 86, 66, 77, 90, 191];
// $.each(key, (k, value) => {
//     kx.core(value, keylist[k]);
// })
