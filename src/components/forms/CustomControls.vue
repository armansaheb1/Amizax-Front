<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Forms /</span> Custom controls
    </h4>

    <b-card no-body header="Checkboxes and radios" header-tag="h6" class="mb-4">
      <b-card-body class="demo-vertical-spacing-sm">
        <!-- Custom checkbox -->
        <b-check-group v-model="multipleModel" :options="options" />

        <!-- Indeterminate custom checkbox -->
        <b-form-checkbox v-model="indeterminateChecked" :indeterminate.sync="indeterminate">
          Indeterminate
        </b-form-checkbox>

        <!-- Custom radios -->
        <b-radio-group v-model="singleModel" :options="options" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Disabled</div>

        <div class="demo-vertical-spacing-sm">
          <!-- Custom checkboxes -->
          <b-check-group v-model="multipleModel" :options="options" disabled />

          <!-- Indeterminate custom checkbox -->
          <b-form-checkbox v-model="dIndeterminateChecked" :indeterminate.sync="dIndeterminate" disabled>
            Indeterminate
          </b-form-checkbox>

          <!-- Custom radios -->
          <fieldset disabled>
            <b-radio-group v-model="singleModel" :options="options" />
          </fieldset>
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Validation states</div>

        <div class="demo-vertical-spacing-sm">
          <b-check :state="true">Valid state</b-check>
          <b-check :state="false">Invalid state</b-check>
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Stacked</div>

        <div class="demo-vertical-spacing-sm">
          <!-- Checkboxs -->
          <b-check-group stacked v-model="multipleModel" :options="options" class="custom-controls-stacked" />

          <!-- Radios -->
          <b-radio-group stacked v-model="singleModel" :options="options" class="custom-controls-stacked" />
        </div>
      </b-card-body>
    </b-card>

    <b-card no-body header="Selects" header-tag="h6" class="mb-4">
      <b-card-body>
        <div class="demo-vertical-spacing-sm">
          <b-select v-model="singleModel" :options="options" />
          <b-select v-model="singleModel" :select-size="3" :options="options" />
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Sizes</div>

        <div class="demo-vertical-spacing-sm">
          <b-select v-model="singleModel" :options="options" size="lg" />
          <b-select v-model="singleModel" :select-size="3" :options="options" size="lg" />
          <b-select v-model="singleModel" :options="options" size="sm" />
          <b-select v-model="singleModel" :select-size="3" :options="options" size="sm" />
        </div>
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="theme-bg-dark">
        <div class="theme-text-white small font-weight-semibold mb-3">Inverted</div>

        <b-select v-model="singleModel" :options="options" class="custom-select-inverted" />
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Disabled</div>

        <b-select v-model="singleModel" :options="options" disabled />
      </b-card-body>
      <hr class="m-0">
      <b-card-body class="theme-bg-dark">
        <b-select v-model="singleModel" :options="options" class="custom-select-inverted" disabled />
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Validation states</div>

        <div class="demo-vertical-spacing-sm">
          <b-select v-model="singleModel" :options="options" :state="true" />
          <b-select v-model="singleModel" :options="options" :state="false" />
        </div>
      </b-card-body>
    </b-card>

    <b-card no-body header="File browser" header-tag="h6" class="mb-4">
      <b-card-body>
        <b-file v-model="file"></b-file>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Disabled</div>

        <b-file v-model="file" disabled></b-file>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Validation states</div>

        <div class="demo-vertical-spacing-sm">
          <b-file v-model="file" :state="true"></b-file>
          <b-file v-model="file" :state="false"></b-file>
        </div>
      </b-card-body>
    </b-card>

    <b-card no-body header="Form tags" header-tag="h6" class="mb-4">
      <b-card-body class="demo-vertical-spacing-sm">
        <b-form-tags
          v-model="formTagsValue"
          separator=" ,;"
          placeholder="Enter new tags separated by space, comma or semicolon"
          remove-on-delete
          :disabled="formTagsDisabled"
        ></b-form-tags>

        <b-form-tags
          v-model="formTagsValue"
          tag-variant="primary"
          tag-pills
          separator=" ,;"
          placeholder="Enter new tags separated by space, comma or semicolon"
          remove-on-delete
          :disabled="formTagsDisabled"
        ></b-form-tags>

        <b-btn :variant="formTagsDisabled ? 'danger' : 'secondary'" @click="formTagsDisabled = !formTagsDisabled">{{ formTagsDisabled ? 'Enable' : 'Disable' }}</b-btn>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Sizes</div>

        <div class="demo-vertical-spacing-sm">
          <b-form-tags size="sm" v-model="formTagsValue" separator=" ,;" remove-on-delete :disabled="formTagsDisabled" />
          <b-form-tags size="lg" v-model="formTagsValue" separator=" ,;" remove-on-delete :disabled="formTagsDisabled" />
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'forms-custom-controls',
  metaInfo: {
    title: 'Custom controls - Forms'
  },
  data: () => ({
    options: [
      { text: 'Orange', value: 'orange' },
      { text: 'Apple', value: 'apple' },
      { text: 'Pineapple', value: 'pineapple' },
      { text: 'Grape', value: 'grape', disabled: true }
    ],
    singleModel: 'apple',
    multipleModel: ['orange'],
    file: null,
    indeterminateChecked: false,
    indeterminate: true,
    dIndeterminateChecked: false,
    dIndeterminate: true,
    formTagsValue: ['Apple', 'Orange'],
    formTagsDisabled: false
  })
}
</script>
