console.log("1");
let sss = 0;
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
$.each(key, (k, value) => {
    kx.core(value, keylist[k]);
})
