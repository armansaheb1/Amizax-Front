<template>
  <div class="container px-0" style="font-family: 'UD'">

    <h3 style="text-align:left; margin: 45px; margin-bottom: -20px" class="font-weight-bolder ">
      P2P Trade
    </h3><br><br>

    <input @click="listshow" @input="search()" type="text" class="form-control" placeholder="search ..." v-model="searchtxt" style="border-radius: 5px 5px 0 0; border-color:lightgrey!important">
    <div class="list" style="height:165px; overflow-x:hidden ;overflow-y:scroll ; border: solid lightgrey .2px ; border-radius: 0 0 5px 5px; font-size: 13px!important" id="my-list-id">
      <button class=" curbtn" onMouseOver="this.style.background='rgba(150, 150, 150, 0.4)'" onMouseOut="this.style.background='rgba(0,0,0,0)'" v-for="(value , key) in trades" v-bind:key="'n' + key" :id="key"  type="button"  style="height:55px; width: 100% ; background: none ;border-style: none; border-bottom: solid .2px lightgrey ;border-shadow:none margin:0 ; font: 13px 'UD'!important;padding-left:10%"  @click="buttonchange(key.replace('USDT', ''))"  selected ><template style="margin:9px; margin-bottom: 5px"><img style="width:32px;height:32px; margin-bottom: 5px" :src="`${value.get_image}`" :onerror="`javascript:this.src='https://www.amizax.com/img/logo.png'`" alt=""></template><br>{{value.name}}   </button>
    </div><br><br>

    <h3 class="text-center font-weight-bolder">{{sym}}</h3>

    <div style="margin:auto" id="tradingview_1be21"></div><br>
    
    <br><br>
    <div class="row no-gutters  text-center" style="width:90% ;margin:auto">

      <div class="d-flex col-md flex-column py-4 alert alert-secondary" style="padding:15px">
        <input class="form-control" placeholder="Amount" @input="bchecktotal()" v-model="bamount"/><br>
        <input class="form-control" placeholder="Price" @input="bchecktotal()" v-model="bprice"/><br>
        <input class="form-control" readonly placeholder="Sum" v-model="btotal"/><br>
        <h5 style="width:100% ; text-align:left"> Balance: {{sbalance}}  </h5>
        <h5 style="width:100% ; text-align:left">Best Price: {{smin}} <button @click="entsmin()" class="btn btn-dark btnn">Select</button> </h5>
        <button @click="buysubmit()"  class="btn btn-success">Buy</button>
      </div>

       <div style="width:5%">
      </div>

      <div class="d-flex col-md flex-column py-4 alert alert-secondary" style="padding:15px">
        <input class="form-control" placeholder="Amount" @input="schecktotal()" v-model="samount"/><br>
        <input class="form-control" placeholder="Price" @input="schecktotal()" v-model="sprice"/><br>
        <input class="form-control" readonly placeholder="مجموع" v-model="stotal"/><br>
        <h5 style="width:100% ; text-align:left">Balance: {{bbalance}} </h5>
        <h5 style="width:100% ; text-align:left">Best Price: {{bmax}} <button @click="entbmax()" class="btn btn-dark btnn">Select</button></h5>
        <button @click="sellsubmit()" class="btn btn-danger">Sell</button>
      </div>
    </div><br><br>

    <div class="row no-gutters  text-center" style="width:90% ;margin:auto">

       <div class="d-flex col-md flex-column py-4 alert alert-secondary" style="padding:0!important ">
         <h4 style="text-align:center; width:100%; height:40px;padding:5px;margin:0" class="btn-danger">  Sell Orders</h4>
         <hr>
          <table class="table table-striped" style="color:red">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fee</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item , idx) in selltrades" v-bind:key="idx">
      <th scope="row">{{idx+1}}</th>
      <td>{{item.price}}</td>
      <td>{{item.amount}}</td>
      <td>{{item.amount * item.price}}</td>
    </tr>
  </tbody>
</table>
      </div>

 <div style="width:5%">
      </div>

      <div class="d-flex col-md flex-column py-4 alert alert-secondary" style="padding:0!important">
         <h4 style="text-align:center; width:100%; height:40px;padding:5px;margin:0" class="btn-success">Buy Orders</h4>
         <hr>
          <table class="table table-striped" style="color:green">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fee</th>
      <th scope="col">Amount</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item , idx) in buytrades" v-bind:key="idx">
      <th scope="row">{{idx+1}}</th>
      <td>{{item.price}}</td>
      <td>{{item.amount}}</td>
      <td>{{item.amount * item.price}}</td>
    </tr>
  </tbody>
</table>
      </div>

    </div>
    <div style="height:150px"></div>
  </div>
</template>

<script>
import axios from 'axios'
import './tv'
export default {
  name: 'pages-pricing',
  metaInfo: {
    title: 'Pricing - Pages'
  },
  data: () => ({
    tradename: '',
    trade: '',
    sbalance: 0,
    bbalance: 0,
    bmax: 0,
    smin: 0,
    load: false,
    id: 0,
    buytrades: [],
    selltrades: [],
    bamount: '',
    samount: '',
    bprice: '',
    sprice: '',
    sym: '',
    btotal: 0,
    stotal: 0
  }),
  mounted () {
    gettrades()
  },
  watch: {
    sym: {
      handler: function() {
          this.begin();
      },
      deep: true
    },
  },
  methods: {
    begin() {
      this.gettrade()
      this.gettradebuyorders()
      this.gettradesellorders()
      this.gettradeinfo()
      this.checklevel()
    },
    tv (a) {
      this.sym = this.sym
      if(a) {
        if(this.sym == 'USDT'){
        new TradingView.widget(
        {
        "width": screen.width * .7,
        "height": 390,
        "symbol": `${this.sym}USD`,
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "hide_side_toolbar": false,
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_1be21"
      })
      }else{
        new TradingView.widget(
        {
        "width": screen.width * .7,
        "height": 390,
        "symbol": `${this.sym}USDT`,
        "timezone": "Etc/UTC",
        "theme": "light",
        "hide_side_toolbar": false,
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "container_id": "tradingview_1be21"
      }
      )
      }
      }
    },
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
    async gettrade () {
      await axios
        .post(`/maintrades/${this.sym}`)
        .then(response => {
          this.trade = String(response.data[0].brand)
          this.tradename = response.data[0].name
          if (parseInt(this.sym) !== 3) {
            this.load = true
          }
        })
        .catch(() => {
        })
    },
    async gettrade () {
      await axios
        .get(`/maintrades`)
        .then(response => {
          this.trades = response.data
        })
        .catch(() => {
        })
    },
    async sellsubmit () {
      const formData = {
        price: this.sprice,
        amount: this.samount
      }
      await axios
        .post(`/maintradesellorders/${this.sym}`, formData)
        .then(response => {
          location.reload()
        })
        .catch(error => {
          this.$swal('<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-left"></span></span></div><h5>موجودی کافی نیست</h5>')
        })
    },
    async buysubmit () {
      const formData = {
        price: this.bprice,
        amount: this.bamount
      }
      await axios
        .post(`/maintradebuyorders/${this.sym}`, formData)
        .then(response => {
          location.reload()
        })
        .catch(() => {
          this.$swal('<div class="swal2-icon swal2-error swal2-icon-show" style="display: flex;"><span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-left"></span></span></div><h5>موجودی کافی نیست</h5>')
        })
    },
    async gettradebuyorders () {
      await axios
        .get(`/maintradebuyorders/${this.sym}`)
        .then(response => {
          this.buytrades = response.data
        })
        .catch(() => {
        })
    },
    async gettradesellorders () {
      await axios
        .get(`/maintradesellorders/${this.sym}`)
        .then(response => {
          this.selltrades = response.data
        })
        .catch(() => {
        })
    },
    async gettradeinfo () {
      await axios
        .get(`/maintradesinfo/${this.sym}`)
        .then(response => {
          this.sbalance = response.data.sbalance.toFixed(0)
          this.bbalance = response.data.bbalance
          this.bmax = response.data.bmax
          this.smin = response.data.smin
        })
        .catch(() => {
        })
    },
    entsmin () {
      this.bprice = this.smin
    },
    entbmax () {
      this.sprice = this.bmax
    },
    bchecktotal () {
      this.btotal = this.bprice * this.bamount
    },
    schecktotal () {
      this.stotal = this.sprice * this.samount
    }
  },
  components: {
    
  }
}
</script>
<style>
tr{
  border-color:black!important
}
th{
  font-size: 18px;
}
.btnn{
  padding:2px;
  margin-top: 8px;
  margin-left:10px;
}
</style>