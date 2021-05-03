$.ajax({
    type: "post",
    url: "https://api.vc.bilibili.com/feed/v1/feed/SetUserFollow",
    xhrFields: { withCredentials: true },
    data: {
        "follow": "518888859",
        "type": 1,
        "csrf": "ccc9a6374293bd65b0bbedb960d5137c"
    },
    success: function (res) {
        console.log(res)
    }
});
