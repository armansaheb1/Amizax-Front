<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Vue Cropper
    </h4>

    <hr class="container-m-nx border-light mt-0 mb-4">

    <b-modal v-model="previewOpened" :ok-only="true" ok-title="Close" ok-variant="secondary" :hide-header="true">
      <img :src="previewData" alt="" class="img-fluid d-block mx-auto">
    </b-modal>

    <div class="mb-3" :class="{ 'd-none': !image }" style="height: 500px;">
      <vueCropper
        ref="cropper"
        :img="image"
        :outputSize="outputSize"
        :outputType="outputType"
        :info="true"
        @realTime="realTimePreview" />
    </div>

    <div class="demo-inline-spacing">
      <label class="btn btn-primary" for="cropper-upload">
        <input class="sr-only" type="file" id="cropper-upload" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event)">
        Upload
      </label>

      <b-btn @click="startCrop" v-if="!cropping" :disabled="!image">Start cropping</b-btn>
      <b-btn @click="stopCrop" v-else :disabled="!image">Stop cropping</b-btn>
      <b-btn @click="clearCrop" :disabled="!image">Clear</b-btn>

      <b-btn @click="changeScale(1)" :disabled="!image">+</b-btn>
      <b-btn @click="changeScale(-1)" :disabled="!image">-</b-btn>

      <b-btn @click="rotateLeft" :disabled="!image">rotateLeft</b-btn>
      <b-btn @click="rotateRight" :disabled="!image">rotateRight</b-btn>

      <b-btn @click="previewImg('base64')" :disabled="!image">Preview Base64</b-btn>
      <b-btn @click="previewImg('blob')" :disabled="!image">Preview Blob</b-btn>

      <b-btn @click="downloadImg('base64')" :disabled="!image">Download Base64</b-btn>
      <b-btn @click="downloadImg('blob')" :disabled="!image">Download Blob</b-btn>

      <b-form-group label="Output type" class="mt-3">
        <b-radio-group v-model="outputType" :disabled="!image" :options="[{ text: 'jpeg', value: 'jpeg' }, { text: 'png', value: 'png' }, { text: 'webp', value: 'webp' }]" />
      </b-form-group>

      <div :style="{'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden', 'margin': '5px'}">
        <div :style="previews.div">
          <img :src="previews.url" :style="previews.img">
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.dark-style .vue-cropper {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABGdBTUEAALGPC/xhBQAAAH9JREFUOBHFkrkNgDAMRRPEHkCBRMX+2wCTAB/pRcgGuUgRF/H1fSfPy3pO45A6Pdt+pPxtSTcJIuoRhBc9MRJwdFLe5EIcouQgjFzoLgIHvNTAQHvoYYb6HsISIaB+irBECHB7YINwexvs8LACwD/ePoG7g23V/i7rbz9CdQcXzGsiNjZUoNMAAAAASUVORK5CYII=');
}
</style>

<script>
import vueCropper from 'vue-cropper/src/vue-cropper'

export default {
  name: 'ui-vue-cropper',
  metaInfo: {
    title: 'Vue Cropper - UI elements'
  },
  components: {
    vueCropper
  },
  data: () => ({
    image: '',
    outputSize: 1,
    outputType: 'jpeg',
    previews: {},
    cropping: false,
    previewData: null,
    previewOpened: false
  }),
  mounted () {
    this.image = `${this.publicUrl}img/bg/13.jpg`
  },
  methods: {
    startCrop () {
      this.cropping = true
      this.$refs.cropper.startCrop()
    },

    stopCrop () {
      this.cropping = false
      this.$refs.cropper.stopCrop()
    },

    clearCrop () {
      this.$refs.cropper.clearCrop()
    },

    changeScale (num) {
      this.$refs.cropper.changeScale(num || 1)
    },

    rotateLeft () {
      this.$refs.cropper.rotateLeft()
    },

    rotateRight () {
      this.$refs.cropper.rotateRight()
    },

    realTimePreview (data) {
      this.previews = data
    },

    previewImg (type) {
      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          var img = window.URL.createObjectURL(data)
          this.previewData = img
          this.previewOpened = true
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.previewData = data
          this.previewOpened = true
        })
      }
    },

    downloadImg (type) {
      var aLink = document.createElement('a')
      aLink.download = 'demo'

      if (type === 'blob') {
        this.$refs.cropper.getCropBlob((data) => {
          this.downloadImgData = window.URL.createObjectURL(data)
          aLink.href = window.URL.createObjectURL(data)
          aLink.click()
        })
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downloadImgData = data
          aLink.href = data
          aLink.click()
        })
      }
    },

    uploadImg (e) {
      var file = e.target.files[0]
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert('Unknown image extension. Allowed extensions: gif, jpeg, jpg, png, bmp')
        return false
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        this.image = data
      }
      reader.readAsArrayBuffer(file)
    }
  }
}
</script>
