<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Pickers
    </h4>

    <b-card no-body header="Bootstrap-Vue Pickers" header-tag="h6" class="mb-4">
      <b-card-body class="demo-vertical-spacing">
        <b-form-radio-group v-model="bsVueState">
          <b-form-radio class="mb-0" value="normal">Normal</b-form-radio>
          <b-form-radio class="mb-0" value="disabled">Disabled</b-form-radio>
          <b-form-radio class="mb-0" value="readonly">Readonly</b-form-radio>
        </b-form-radio-group>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-vertical-spacing">
        <div class="text-light small font-weight-semibold">Calendar</div>
        <b-calendar v-model="bsVueDate" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-vertical-spacing">
        <div class="text-light small font-weight-semibold">Form Datepicker</div>
        <b-form-datepicker id="example-bsvue-datepicker-1" v-model="bsVueDate" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
        <b-form-datepicker id="example-bsvue-datepicker-2" size="sm" v-model="bsVueDate" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
        <b-form-datepicker id="example-bsvue-datepicker-3" size="lg" v-model="bsVueDate" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="demo-vertical-spacing">
        <div class="text-light small font-weight-semibold">Form Timepicker</div>
        <b-form-timepicker id="example-bsvue-timepicker-1" v-model="bsVueTime" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
        <b-form-timepicker id="example-bsvue-timepicker-2" size="sm" v-model="bsVueTime" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
        <b-form-timepicker id="example-bsvue-timepicker-3" size="lg" v-model="bsVueTime" :disabled="bsVueState === 'disabled'" :readonly="bsVueState === 'readonly'" />
      </b-card-body>
    </b-card>

    <b-card header="Vuejs Datepicker" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing">
        <datepicker v-model="date1" :bootstrapStyling="true" />

        <!-- Features -->

        <datepicker
          v-model="date1"
          :bootstrapStyling="true"
          :monday-first="true"
          :full-month-name="true"
          placeholder="Select arrival date"
          :calendar-button="true"
          calendar-button-icon="ion ion-md-calendar"
          :clear-button="true"
          :disabled-dates="disabledDates"
          :highlighted="highlightedDates" />

        <!-- Inline -->

        <datepicker v-model="date1" :bootstrapStyling="true" :inline="true" />
      </div>
    </b-card>

    <b-card header="Vue Flatpickr Component" header-tag="h6" class="mb-4" body-class="pt-0">
      <div class="demo-vertical-spacing">
        <flat-pickr v-model="date" :config="dateConfig" :placeholder="!isIEMode ? 'Date picker' : null" />
        <flat-pickr v-model="time" :config="timeConfig" :placeholder="!isIEMode ? 'Time picker' : null" />
        <flat-pickr v-model="datetime" :config="datetimeConfig" :placeholder="!isIEMode ? 'Datetime picker' : null" />
        <flat-pickr v-model="full" :config="fullConfig" :placeholder="!isIEMode ? 'Features' : null" />
        <flat-pickr v-model="range" :config="rangeConfig" :placeholder="!isIEMode ? 'Range picker' : null" />
        <div>
          <flat-pickr v-model="inline" :config="inlineConfig" :placeholder="!isIEMode ? 'Inline datepicker' : null" input-class="d-none" />
        </div>
      </div>
    </b-card>

    <b-card header="Vue Color" header-tag="h6" class="mb-4">
      <div class="demo-vertical-spacing">
        <material-picker v-model="colors" />
        <compact-picker v-model="colors" />
        <swatches-picker v-model="colors" />
        <slider-picker v-model="colors" />
        <sketch-picker v-model="colors" />
        <chrome-picker v-model="colors" />
        <photoshop-picker v-model="colors" />
      </div>
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/vuejs-datepicker/vuejs-datepicker.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-color/vue-color.scss" lang="scss"></style>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'
import flatPickr from 'vue-flatpickr-component'
var vueColor = require('vue-color')

function isRtlMode () {
  return document.documentElement.getAttribute('dir') === 'rtl' ||
         document.body.getAttribute('dir') === 'rtl'
}

export default {
  name: 'forms-pickers',
  metaInfo: {
    title: 'Pickers - Forms'
  },
  components: {
    Datepicker,
    flatPickr,
    'chrome-picker': vueColor.Chrome,
    'compact-picker': vueColor.Compact,
    'material-picker': vueColor.Material,
    'sketch-picker': vueColor.Sketch,
    'slider-picker': vueColor.Slider,
    'swatches-picker': vueColor.Swatches,
    'photoshop-picker': vueColor.Photoshop
  },
  data: () => ({
    //
    // Bootstrap Vue pickers
    //

    bsVueState: 'normal',
    bsVueDate: '',
    bsVueTime: '',

    //
    // Vuejs Datepicker
    //

    date1: moment().toDate(),
    disabledDates: {
      days: [0] // Disable sunday
    },
    highlightedDates: {
      dates: [
        moment().add(1, 'd').toDate(),
        moment().add(2, 'd').toDate(),
        moment().add(3, 'd').toDate()
      ]
    },

    //
    // Vue Flatpickr Component
    //

    date: null,
    time: null,
    datetime: null,
    full: null,
    range: null,
    inline: null,

    dateConfig: {
      altInput: true,
      animate: !isRtlMode()
    },

    timeConfig: {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      animate: !isRtlMode()
    },

    datetimeConfig: {
      enableTime: true,
      altInput: true,
      animate: !isRtlMode()
    },

    fullConfig: {
      weekNumbers: true,
      enableTime: true,
      mode: 'multiple',
      minDate: 'today',
      altInput: true,
      animate: !isRtlMode()
    },

    rangeConfig: {
      mode: 'range',
      altInput: true,
      animate: !isRtlMode()
    },

    inlineConfig: {
      inline: true,
      altInput: true,
      allowInput: false,
      animate: !isRtlMode()
    },

    //
    // Vue Color
    //

    colors: {
      hex: '#194d33',
      hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
      },
      hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
      },
      rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
      },
      a: 1
    }
  })
}
</script>
