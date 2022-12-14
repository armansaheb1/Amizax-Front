<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Charts /</span> Vue Echarts
    </h4>

    <hr class="container-m-nx border-light mt-0 mb-5">

    <div class="demo-vertical-spacing">
      <vue-echart :options="lineOptions" :autoresize="true"></vue-echart>
      <vue-echart :options="barOptions" :autoresize="true"></vue-echart>
      <vue-echart :options="pieOptions" :autoresize="true"></vue-echart>
    </div>

  </div>
</template>

<style>
.echarts {
  height: 300px !important;
  width: 100% !important;
}
</style>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import themeSettings from '../../vendor/libs/theme-settings/theme-settings'

const dataAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149]

const colors = ['#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a', '#a7b61a', '#f3e562', '#ff9800', '#ff5722', '#ff4514', '#647c8a', '#3f51b5', '#2196f3', '#00b862', '#afdf0a']
const isDarkStyle = themeSettings.isDarkStyle()

export default {
  name: 'charts-vue-echarts',
  metaInfo: {
    title: 'Vue Echarts - Charts'
  },
  components: {
    'vue-echart': ECharts
  },
  data: () => ({
    lineOptions: {
      color: colors,
      title: {
        text: 'Line chart'
      },
      legend: {
        data: ['line']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      xAxis: {
        data: dataAxis,
        axisLine: {
          lineStyle: { color: isDarkStyle ? '#383b40' : 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: isDarkStyle ? '#fff' : 'rgba(0, 0, 0, .5)' }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: { color: isDarkStyle ? '#383b40' : 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: isDarkStyle ? '#fff' : 'rgba(0, 0, 0, .5)' }
      },
      series: [{
        type: 'line',
        showSymbol: false,
        data: data
      }],
      animationDuration: 2000
    },

    barOptions: {
      color: colors,
      title: {
        text: 'Line chart'
      },
      legend: {
        data: ['bar']
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      xAxis: {
        data: dataAxis,
        axisLine: {
          lineStyle: { color: isDarkStyle ? '#383b40' : 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: isDarkStyle ? '#fff' : 'rgba(0, 0, 0, .5)' }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: { color: isDarkStyle ? '#383b40' : 'rgba(0, 0, 0, .08)' }
        },
        axisLabel: { color: isDarkStyle ? '#fff' : 'rgba(0, 0, 0, .5)' }
      },
      series: [{
        type: 'bar',
        showSymbol: false,
        data: data,
        barCategoryGap: '60%',
        itemStyle: {
          normal: {
            color: function (params) {
              var num = colors.length
              return colors[params.dataIndex % num]
            },
            opacity: 0.5
          },
          emphasis: {
            opacity: 1,
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }],
      animationDuration: 2000
    },

    pieOptions: {
      color: colors,
      title: {
        text: 'Pie chart',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        backgroundColor: '#46494d',
        textStyle: {
          fontSize: 11
        }
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Searching Engine', 'Direct', 'Email', 'Alliance Advertisement', 'Video Advertisement'],
        inactiveColor: isDarkStyle ? '#7c7e82' : '#babbbc',
        textStyle: {
          color: isDarkStyle ? '#fff' : '#4E5155'
        }
      },
      series: [{
        name: 'Reference Page',
        type: 'pie',
        radius: '55%',
        roseType: 'angle',
        data: [
          { value: 400, name: 'Searching Engine' },
          { value: 335, name: 'Direct' },
          { value: 310, name: 'Email' },
          { value: 274, name: 'Alliance Advertisement' },
          { value: 235, name: 'Video Advertisement' }
        ],
        itemStyle: {
          normal: {
            shadowBlur: 50,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis: {
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }],
      animationDuration: 2000
    }
  })
}
</script>
