<template>
  <div class="tr">
      <b-card  class="col-12 d-none d-md-block">

        <b-card-header class="row no-gutters align-items-center">
            <div class="d-none d-md-block col-12 text-muted">
              <div class="row no-gutters align-items-center">
                <div class="col-3 cent">از</div>
                <div class="col-3 cent">به</div>
                <div class="col-2 cent">زمان</div>
                <div class="col-2 cent">نوع ارز</div>
                <div class="col-2 cent">مقدار </div>
            </div>
          </div>
        </b-card-header>

        
          <b-card-body class="py-3">
            <div v-if="transactions">
              <div class="row no-gutters align-items-center">
                <div class="d-none d-md-block col-12">

                  <div v-for="transaction in transactions" v-bind:key="transaction" class="row no-gutters align-items-center">
                    <div class="col-3 cent" v-if="transaction.transfer_from">{{transaction.transfer_from}}</div>
                    <div class="col-3 cent" v-else>حساب اصلی</div>
                    <div class="col-3 cent" v-if="transaction.transfer_to">{{transaction.transfer_to}}</div>
                    <div class="col-3 cent" v-else>حساب اصلی</div>
                    <div class="col-2 cent">{{transaction.time}}</div>
                    <div class="col-2 cent">{{transaction.coin_type}}</div>
                    <div class="col-2 cent" v-if="transaction.transfer_from" style="color:red">{{transaction.amount}}</div>
                    <div class="col-2 cent" v-if="transaction.transfer_to" style="color:green" >{{transaction.amount}}</div>
                    <hr>
                  </div>

                </div>
              </div>
            </div>
            <div v-if="!transactions" class="cent">
              <h3>تراکنشی پیدا نشد</h3>
            </div>
          </b-card-body>
      </b-card>

      <div  class="d-md-none transm">
            <div v-if="transactions">
              <b-card v-for="transaction in transactions" v-bind:key="transaction" style="min-height:150px" class="row no-gutters align-items-center">
                <div style="width:45% ;float:right">
              <h6  style=" min-height:80px; text-align:center ">از</h6>
              <h6  style=" min-height:80px; text-align:center ">به</h6>
              <h6  style=" min-height:80px; text-align:center ">زمان</h6>
              <h6  style=" min-height:80px; text-align:center ">نوع ارز </h6>
              <h6  style=" min-height:80px; text-align:center "> مقدار </h6>
              </div>
              <div style="width:45% ;float:left">
              <h4  style=" min-height:80px; text-align:center " v-if="transaction.transfer_from">{{transaction.transfer_from}}</h4>
              <h4  style=" min-height:80px; text-align:center " v-else>حساب اصلی</h4>
              <h4  style=" min-height:80px; text-align:center " v-if="transaction.transfer_to">{{transaction.transfer_to}}</h4>
              <h4  style=" min-height:80px; text-align:center " v-else>حساب اصلی</h4>
              <h4  style=" min-height:80px; text-align:center ">{{transaction.time}}</h4>
              <h4  style=" min-height:80px; text-align:center ">{{transaction.coin_type}}</h4>
              <h4  style=" min-height:80px; text-align:center  ; color:red" v-if="transaction.transfer_from">{{transaction.amount}}</h4>
              <h5  style=" min-height:80px; text-align:center  ; color:green" v-if="transaction.transfer_to">{{transaction.amount}}</h5>
              </div>
                  </b-card><br>
            <div v-if="!transactions" class="cent">
              <h3>تراکنشی پیدا نشد</h3>
            </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pages-forums-list',
  metaInfo: {
    title: 'Forum list - Pages'
  },
  data: () => ({
    transactions: [],
    forumPath: [
      { text: ' سفارشات باز', active: true }
    ],

    sectionsData: [{
      title: ' شناسه',
      forums: [{
        title: 'Getting started',
        threads: 12,
        replies: 34,
        lastUpdate: {
          date: '1d',
          thread: { title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus' },
          user: { avatar: 'btc.png', name: 'Leon Wilson' }
        }
      }, {
        title: 'Announcements',
        threads: 43,
        replies: 112,
        lastUpdate: {
          user: { avatar: 'btc.png', name: 'Allie Rodriguez' }
        }
      }]
    }]
  }),
  mounted () {
    this.check()
    this.checklevel()
    this.gettransactions()
  },
  methods: {
    async checklevel (id) {
      await axios
        .get('/userinfo')
        .then(response => {
          if (response.data[0].level === 0) {
            this.$swal.fire({
              title: 'توجه',
              text: 'برای استفاده از این بخش ابتدا احراز هویت را کامل کنید',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'شروع تایید هویت',
              cancelButtonText: 'بعدا انجام میدهم'
            }).then(result => {
              if (result.isConfirmed) {
                const toPath = this.$route.query.to || '/user-level'
                this.$router.push(toPath)
              }else {
                const toPath = this.$route.query.to || '/dashboard'
                this.$router.push(toPath)
              }
            })
          }
        })
    },
    async gettransactions (id) {
      await axios
        .get('/adminpanel/cp_history/all')
        .then(response => {
          this.transactions = response.data.data
        })
    },
    check () {
      if (!this.$store.state.isAuthenticated) {
        const toPath = this.$route.query.to || '/login'
        this.$router.push(toPath)
      }
    }
  }
}
</script>
<style>
.cent{
  text-align: center;
}
.tr .card-body{
  padding:0;
  width:100%
}
</style>
