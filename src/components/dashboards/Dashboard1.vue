<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      داشبورد
      <div class="text-muted text-tiny mt-1"><small class="font-weight-normal">Today is {{date}}</small></div>
    </h4>

    <!-- Counters -->
    <div class="row">
      <div class="col-sm-6 col-xl-6">

        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-cart display-4 text-success"></div>
            <div class="ml-4">
              <div class="text-muted small">دارایی ریالی</div>
              <div class="text-large" ><a v-if="dashboardinfo.balance" style="font-family: 'UR'!important">{{parseInt(dashboardinfo.balance).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</a> <a v-if="!dashboardinfo.balance">0</a> ریال</div>
            </div>
          </div>
        </b-card>
      </div>
        <div class="col-sm-6 col-xl-6">
        <b-card class="mb-4">
          <div class="d-flex align-items-center">
            <div class="lnr lnr-cart display-4 text-success"></div>
            <div class="ml-4">
              <div class="text-muted small">مجموع دارایی دیجیتال به دلار</div>
              <div class="text-large"><a v-if="dashboardinfo.usbalance" style="font-family: 'UR'!important">{{parseInt(dashboardinfo.usbalance)}}</a> <a v-if="!dashboardinfo.usbalance">0</a> $</div>
            </div>
          </div>
        </b-card>

      </div>

      <div class="col-12">
        <div style="clear:both"></div>

         <b-card>
         <b-card-header>
           <h3>لینک دعوت دوستان</h3>
         </b-card-header>
         <div style="direction:rtl" class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-success" type="button">copy</button>
  </div>
  <input style="text-align:center" :value="referalid" type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>
          </b-card><br><br>

      </div>
      <div class="col-12">
        <div style="clear:both"></div>

         <b-tabs>

           <b-tab title="خرید">
             <b-card>
                <buy />
              </b-card>
            </b-tab>
            <b-tab title="فروش">
             <b-card>
                <sell />
              </b-card>
            </b-tab>
            <b-tab title="تبدیل">
             <b-card>
                <exchange />
              </b-card>
            </b-tab>

          </b-tabs><br><br>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueChartJs from 'vue-chartjs'
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'
import themeSettings from '../../vendor/libs/theme-settings/theme-settings'
import { buy } from './../pages'
import { sell } from './../pages'
import { exchange } from './../pages'

const isDarkStyle = themeSettings.isDarkStyle()

Vue.component('dashboard1-chart1', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      labels: ['2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05'],
      datasets: [{
        label: 'Visits',
        data: [93, 25, 95, 59, 46, 68, 4, 41],
        borderWidth: 1,
        backgroundColor: 'rgba(28,180,255,.05)',
        borderColor: 'rgba(28,180,255,1)'
      }, {
        label: 'Returns',
        data: [83, 1, 43, 28, 56, 82, 80, 66],
        borderWidth: 1,
        borderDash: [5, 5],
        backgroundColor: 'rgba(136, 151, 170, 0.1)',
        borderColor: '#8897aa'
      }]
    }, {
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: isDarkStyle ? '#fff' : '#aaa'
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            fontColor: isDarkStyle ? '#fff' : '#aaa',
            stepSize: 20
          }
        }]
      },
      legend: isDarkStyle ? {
        labels: { fontColor: '#fff' }
      } : {},

      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart2', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#009688',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1,
        lineTension: 0
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart3', {
  extends: VueChartJs.Bar,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
        ],
        borderWidth: 0,
        backgroundColor: '#673AB7'
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart4', {
  extends: VueChartJs.Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47
        ],
        borderWidth: 1,
        backgroundColor: 'rgba(206, 221, 54, 0.2)',
        borderColor: '#cedd36',
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        pointRadius: 1
      }],
      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart5', {
  extends: VueChartJs.Doughnut,
  mounted () {
    this.renderChart({
      datasets: [{
        data: [85, 15],
        backgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
        hoverBackgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
        borderWidth: 0
      }]
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      cutoutPercentage: 94,
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

Vue.component('dashboard1-chart6', {
  extends: VueChartJs.Pie,
  mounted () {
    this.renderChart({
      labels: ['Desktops', 'Smartphones', 'Tablets'],
      datasets: [{
        data: [1225, 654, 211],
        backgroundColor: ['rgba(99,125,138,0.5)', 'rgba(28,151,244,0.5)', 'rgba(2,188,119,0.5)'],
        borderColor: ['#647c8a', '#2196f3', '#02bc77'],
        borderWidth: 1
      }]
    }, {
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      legend: {
        position: 'right',
        labels: isDarkStyle ? {
          boxWidth: 12,
          fontColor: '#fff'
        } : { boxWidth: 12 }
      },
      responsive: false,
      maintainAspectRatio: false
    })
  }
})

export default {
  name: 'dashboard-1',
  metaInfo: {
    title: 'Dashboard 1 - Dashboards'
  },
  components: {
    PerfectScrollbar,
    buy,
    sell,
    exchange
  },
  data() {
      return {
        referalid: '',
        sym : 'BTCUSDT',
        dashboardinfo : [],
        leverage : [],
        currenciescount: 0,
        unread:0,
      }
    },
    methods: {
      tv () {
      new TradingView.widget(
        {
        "width": screen.width * .7,
        "height": 390,
        "symbol": `${this.sym}`,
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_1be21"
      });
    },
      async get_history () {
      await axios
        .get('/pricehistory')
        .then(response => {
          for (item of response.data){
          }
        })
        .catch(data => {
          
        })
    },
    async currencies () {
      await axios
        .get('/cp_mg_main')
        .then(response => {
          console(response)
          for (item of response.data){
            this.currenciescount = response.data.length
          }
        })
        .catch(data => {
          
        })
    },
    async get_info () {
      await axios
        .get('/dashboardinfo')
        .then(response => {
          this.dashboardinfo = response.data[0]
        })
    },
    async getlev () {
      await axios
        .get('/leverages')
        .then(response => {
          this.leverage = response.data
        })
    },
    async get_user () {
      await axios
        .get('/userinfo')
        .then(response => {
          this.referalid = response.data[0].get_referal
          console.log(response)
        })
    },
  },

  // Resize charts
  //
  computed:{
    date(){
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return new Date().toLocaleDateString("en-US", options)
    }
  },

  mounted () {
    this.get_history()
    this.get_info()
    this.getlev()
    this.currencies()
    this.get_user()
    const charts = this.$children.filter(component => /-chart\d+$/.test(component.$options._componentTag))

    const resizeCharts = () => charts.forEach(chart => chart._data._chart.resize())

    // Initial resize
    resizeCharts()

    // For performance reasons resize charts on delayed resize event
    this.layoutHelpers.on('resize.dashboard-1', resizeCharts)
  },
  beforeDestroy () {
    this.layoutHelpers.off('resize.dashboard-1')
  }
}
</script>
<style>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}
</style>
