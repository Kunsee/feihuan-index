// 百度地图API功能
export default {
    bMap() {
        var map = new BMap.Map("l-map"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(113.251174, 23.10001), 17);
        var local = new BMap.LocalSearch(map, {
            renderOptions: { map: map, panel: "r-result" }
        });
        local.search("七喜创意产业园");
    }
}