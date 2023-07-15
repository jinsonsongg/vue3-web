<template>
    <div class="home_div">
        <div id="container"></div>
    </div>
</template>
<script setup>
// 地图map
import AMapLoader from "@amap/amap-jsapi-loader"
import { reactive, ref, onMounted, nextTick, defineProps } from 'vue';
import { shallowRef } from '@vue/reactivity'

window._AMapSecurityConfig = {
    securityJsCode: 'a4ed4ad1fccb7f49023dbd98d18be759', // 应用生成的秘钥
}

const searchValue = ref('')
const lnglat = ref('')
const state = reactive({

    map: null,
    placeSearch: null,
    autoComplete: null,
    marker: null,
    form: {
        address: '公司地点',
        lng: '119.21842',
        lat: '25.98810',
    },
})


// 地图初始化
function initMap(arr) {  // 参数为中心点经纬度坐标 
    AMapLoader.load({
        key: "d4c44f68de3b549b59ccdcf894d84879",
        version: "2.0",
        plugins: ["AMap.ToolBar", "AMap.ControlBar", 'AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Geocoder', 'AMap.Marker'], // 地图插件 根据需求从高德开放平台添加
    }).then((AMap) => {
        state.map = new AMap.Map('container', {
            viewMode: "3D",  //  是否为3D地图模式
            zoom: 10, //  地图显示的缩放级别
            zooms: [2, 22], // 地图缩放范围
            center: arr, //  地图中心点坐标
            resizeEnable: true  //  是否监控地图容器尺寸变化
        });
        // 地图放大缩小插件
        let toolBar = new AMap.ToolBar({
            position: {
                top: '120px',
                right: '51px'
            }
        })
        // 3D地图插件
        let controlBar = new AMap.ControlBar({
            position: {
                top: '20px',
                right: '20px',
            },
        });

        state.geoCoder = new AMap.Geocoder({
            city: '全国', // 默认：“全国”
            radius: 1000 // 范围，默认：500
        })

        state.autoComplete = new AMap.AutoComplete({ city: '全国' });

        state.placeSearch = new AMap.PlaceSearch({
            map: state.map
        })
        //state.map.on('click', clickMap)
        state.map.addControl(toolBar);   // 添加右上角的放大缩小
        state.map.addControl(controlBar);   // 添加右上角的放大缩小
    }).catch((e) => {
        console.error(e);  //加载错误提示
    }).finally(() => {
        initCoord([state.form.lng, state.form.lat])
    })
}

// 地图点击事件
function clickMap(e) { // 点击地图事件
    if (!e && !e.lnglat) {
        return
    }
    state.form.lng = e.lnglat.lng
    state.form.lat = e.lnglat.lat
    regeocoder()
    // removeMarker() // 先删除地图上标记点
    setMapMarker() // 在添加新的标记点
}


// 坐标转换
function initCoord(gps) {
    // 其他坐标转J02坐标
    AMap.convertFrom(gps, 'gps', function (status, result) {
        if (result.info === 'ok') {
            state.form.lng = result.locations[0].lng
            state.form.lat = result.locations[0].lat
            nextTick(function () {
                removeMarker()
                setMapMarker()
            })
        }
    });
}

// 设置标记
function setMapMarker() {
    if (state.form.lng == '' && state.form.lat == '') {
        return
    }
    state.map.setFitView()
    state.marker = new AMap.Marker({
        map: state.map,
        position: [state.form.lng, state.form.lat],
    })
    toGetAddress()
    state.map.add(state.marker)
    state.map.setFitView()
}

// 清除标记
function removeMarker() {
    if (state.marker) {
        state.map.remove(state.marker)
    }
}

// 坐标位置转换
function regeocoder() {
    let lnglat = [state.form.lng, state.form.lat]
    state.geoCoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
            state.form.address = result.regeocode.formattedAddress // 返回位置信息
        }
    })
}

// 获取地址
function toGetAddress() {
    let lnglat = [state.form.lng, state.form.lat]
    state.geoCoder.getAddress(lnglat, (status, result) => {
        if (status === 'complete' && result.regeocode) {
            // 此处写处理逻辑
        }
    })
}

function toGetCoordinate() {
    let address = state.form.address
    state.geocoder.getLocation(address, function (status, result) {
        if (status === 'complete' && result.info === 'OK') {
            initMap([result.geocodes[0].location.lng, result.geocodes[0].location.lat])
            state.form.lng = result.geocodes[0].location.lng
            state.form.lat = result.geocodes[0].location.lat
            state.form.address = result.geocodes[0].formattedAddress
        }
    })
    nextTick(function () {
        removeMarker()
        setMapMarker()
    })
}

onMounted(() => {
    //组件挂载
    initMap([119.22964, 25.99076])
});

</script>
<style scope>
.home_div {
    height: 100%;
    width: 100%;
    padding: 0px;
    margin: 0px;
    position: relative;
}

#container {
    padding: 0px;
    margin: 0px;
}

html,
body,
#container {
    height: 100%;
    width: 100%;
}

.content-window-card {
    position: relative;
    box-shadow: none;
    bottom: 0;
    left: 0;
    width: auto;
    padding: 0;
}

.content-window-card p {
    height: 2rem;
}

.custom-info {
    border: solid 1px silver;
}

div.info-top {
    position: relative;
    background: none repeat scroll 0 0 #F9F9F9;
    border-bottom: 1px solid #CCC;
    border-radius: 5px 5px 0 0;
}

div.info-top div {
    display: inline-block;
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    line-height: 31px;
    padding: 0 10px;
}

div.info-top img {
    position: absolute;
    top: 10px;
    right: 10px;
    transition-duration: 0.25s;
}

div.info-top img:hover {
    box-shadow: 0px 0px 5px #000;
}

div.info-middle {
    font-size: 12px;
    padding: 10px 6px;
    line-height: 20px;
}

div.info-bottom {
    height: 0px;
    width: 100%;
    clear: both;
    text-align: center;
}

div.info-bottom img {
    position: relative;
    z-index: 104;
}

span {
    margin-left: 5px;
    font-size: 11px;
}

.info-middle img {
    float: left;
    margin-right: 6px;
}
</style>