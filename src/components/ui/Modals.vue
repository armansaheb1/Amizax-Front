<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">UI elements /</span> Modals
    </h4>

    <b-card no-body header="Bootstrap modals" header-tag="h6" class="mb-4">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Default</div>

        <b-radio-group v-model="defaultModalSize" :options="sizes" name="modals-default-size" class="mb-3" />
        <b-btn variant="primary" v-b-modal.modals-default>Show</b-btn>

        <!-- Modal template -->
        <b-modal id="modals-default" :size="defaultModalSize">
          <div slot="modal-title">
            Payment <span class="font-weight-light">Information</span><br>
            <small class="text-muted">We need payment information to process your order.</small>
          </div>

          <b-form-row>
            <b-form-group label="Card number" class="col">
              <b-input placeholder="XXXX XXXX XXXX XXXX" />
            </b-form-group>
          </b-form-row>
          <b-form-row>
            <b-form-group label="Expiration date" class="col mb-0">
              <b-input placeholder="DD / MM" />
            </b-form-group>
            <b-form-group label="Card holder" class="col mb-0">
              <b-input placeholder="Name on card" />
            </b-form-group>
          </b-form-row>
        </b-modal>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Top</div>

        <b-radio-group v-model="topModalSize" :options="sizes" name="modals-top-size" class="mb-3" />
        <b-btn variant="primary" v-b-modal.modals-top>Show</b-btn>

        <!-- Modal template -->
        <b-modal id="modals-top" :size="topModalSize" modal-class="modal-top">
          <div slot="modal-title">
            Payment <span class="font-weight-light">Information</span><br>
            <small class="text-muted">We need payment information to process your order.</small>
          </div>

          <b-form-row>
            <b-form-group label="Card number" class="col">
              <b-input placeholder="XXXX XXXX XXXX XXXX" />
            </b-form-group>
          </b-form-row>
          <b-form-row>
            <b-form-group label="Expiration date" class="col mb-0">
              <b-input placeholder="DD / MM" />
            </b-form-group>
            <b-form-group label="Card holder" class="col mb-0">
              <b-input placeholder="Name on card" />
            </b-form-group>
          </b-form-row>
        </b-modal>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Slide</div>

        <b-btn variant="primary" @click="showSlideModal()">Show</b-btn>

        <!-- Modal template -->
        <b-modal ref="slideModal" modal-class="modal-slide" hide-header hide-footer>
          <p class="text-center text-big mb-4">Before you proceed, you have to login to make the necessary changes</p>
          <b-btn block variant="primary" @click="hideSlideModal()">Continue</b-btn>
          <b-btn block variant="default" @click="hideSlideModal()">Cancel</b-btn>
        </b-modal>
      </b-card-body>
      <hr class="m-0">
      <b-card-body>
        <div class="text-light small font-weight-semibold mb-3">Fill-In</div>

        <b-radio-group v-model="fillInModalSize" :options="sizes" name="modals-fill-in-size" class="mb-3" />
        <b-btn variant="primary" v-b-modal.modals-fill-in>Show</b-btn>

        <!-- Modal template -->
        <b-modal id="modals-fill-in" :size="fillInModalSize" modal-class="modal-fill-in" hide-header hide-footer>
          <p class="text-white text-large font-weight-light mb-3">Subscribe to our newsletter</p>
          <b-input-group size="lg" class="mb-3">
            <b-input placeholder="Your email" class="bg-white border-0"></b-input>
            <b-input-group-btn slot="right">
              <b-btn variant="primary">Subscribe</b-btn>
            </b-input-group-btn>
          </b-input-group>
          <div class="text-center text-right text-white opacity-50">We will not sell/rent your email address</div>
        </b-modal>
      </b-card-body>
    </b-card>

    <b-card no-body header="Sweet Modal Vue" header-tag="h6" class="mb-4">
      <b-card-body class="demo-inline-spacing clearfix">
        <div class="d-inline-block">
          <b-btn @click="$refs.simpleAlert.open()">Simple</b-btn>
          <sweet-modal ref="simpleAlert">This is an alert.</sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.successAlert.open()">Success</b-btn>
          <sweet-modal icon="success" ref="successAlert">This is a success!</sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.warningAlert.open()">Warning</b-btn>
          <sweet-modal icon="warning" ref="warningAlert">This is a warning!</sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.errorWithButtonAlert.open()">Error with button</b-btn>
          <sweet-modal icon="error" title="Oh noes???" ref="errorWithButtonAlert">
            This is an error???
            <template slot="button"><b-btn @click="$refs.errorWithButtonAlert.close()">Close</b-btn></template>
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.withAdditionalControls.open()">With additional controls</b-btn>
          <sweet-modal title="Alert" ref="withAdditionalControls">
            This is an alert.
            <template slot="box-action">
              <a href="javascript:void(0)">Action 1</a> &nbsp;
              <a href="javascript:void(0)">Action 2</a>
            </template>
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.ultraWide.open()">Ultra wide</b-btn>
          <sweet-modal title="Ultra Wide" width="100%" ref="ultraWide">
            This is a very wide modal.
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.longModal.open()">Long modal</b-btn>
          <sweet-modal ref="longModal">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat scelerisque risus, at gravida metus ultricies et. Vestibulum vehicula massa leo, vel sodales sem dapibus eu. Nullam non laoreet nunc. Ut faucibus nisl a dolor consectetur, id bibendum tortor aliquet. Sed at mi eu ligula dignissim dignissim eget lacinia nunc. Suspendisse rhoncus ut neque at hendrerit. Vivamus mollis, odio vel mollis lacinia, massa dolor pharetra quam, ac semper ante neque vitae lorem. Quisque maximus orci ac ligula rhoncus volutpat. Donec et interdum metus. Nunc sem urna, egestas eget feugiat et, sollicitudin eu ligula. Praesent vitae sapien aliquet, fermentum lectus id, placerat quam. Donec finibus lectus in quam luctus, at efficitur purus suscipit. Proin tempor vestibulum ante.</p>
            <p>Duis sit amet felis sagittis risus sodales ultrices eget id turpis. Sed feugiat eu nisi a lobortis. Etiam luctus elit vitae tellus malesuada, vel aliquet arcu rutrum. Aliquam pretium dolor quis massa eleifend, in gravida libero rhoncus. Donec ac mollis felis. Suspendisse scelerisque ullamcorper blandit. Maecenas posuere dapibus urna. In quis tincidunt eros. Etiam odio odio, tincidunt sed lectus sed, viverra fringilla turpis. Morbi sit amet lorem a leo convallis egestas. Vestibulum facilisis scelerisque eros a pharetra. Morbi in mi pulvinar, viverra ante a, vulputate mi. Sed vestibulum dolor vel orci laoreet commodo. Mauris congue imperdiet tincidunt. Mauris est dolor, mattis lobortis erat id, feugiat egestas arcu. Cras et dui non metus dictum rutrum ac et dui.</p>
            <p>Curabitur luctus vulputate massa nec efficitur. Duis at tortor consequat, mattis neque et, vestibulum lorem. Vestibulum ac aliquet purus. Phasellus eu sem aliquam, pulvinar dolor ac, tincidunt leo. Nam non lorem lacus. Vivamus interdum lacus a sem porta feugiat. Sed vitae molestie magna. Morbi enim erat, lobortis sed quam vel, blandit ultricies ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris orci augue, venenatis ut dignissim mollis, facilisis a leo. Duis laoreet erat at sem pretium fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            <p>Nulla auctor metus in leo tempor pellentesque. Maecenas sollicitudin leo vel lectus venenatis vulputate. Phasellus finibus purus hendrerit convallis pulvinar. Mauris venenatis orci nec porttitor auctor. Duis non urna ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vulputate porta lacus eu fringilla. Quisque nisl lectus, eleifend sollicitudin vestibulum id, elementum eget mauris. In vel maximus ipsum, at pulvinar quam. Pellentesque dignissim nunc sed metus aliquam ultricies. Donec lorem urna, mattis rhoncus lectus at, euismod maximus quam. Integer in malesuada odio. Maecenas ornare sapien at imperdiet venenatis. Pellentesque vel faucibus eros. Donec cursus a lorem sit amet placerat.</p>
            <p>Phasellus sed orci ac mauris dictum dapibus. Mauris pellentesque consequat odio, et varius sem accumsan sit amet. Vivamus tincidunt erat semper, sollicitudin ligula vel, fringilla leo. Morbi sodales lorem ac dignissim luctus. Vestibulum risus eros, ultrices sit amet nisl quis, fermentum vulputate ante. Aenean vitae elit sollicitudin, placerat nunc in, suscipit massa. Vivamus ipsum purus, placerat quis ex eu, commodo dictum leo. Proin sapien nunc, pulvinar at risus ut, elementum cursus augue. Sed vitae risus ex. Morbi augue elit, aliquam et lorem a, aliquet sollicitudin metus. Curabitur at diam rutrum, dictum mi ac, varius quam. Donec vitae dui ex. Sed lobortis lacus nec velit fringilla gravida. Aenean quis urna diam. Suspendisse eget erat risus. Aenean elementum felis dui, eget aliquam eros suscipit lobortis.</p>
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.tabbed.open()">Tabbed</b-btn>
          <sweet-modal ref="tabbed">
            <sweet-modal-tab title="Tab 1" id="tab1">Contents of Tab 1</sweet-modal-tab>
            <sweet-modal-tab title="Tab 2" id="tab2">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Tab 3" id="tab3" disabled>Tab 3 is disabled</sweet-modal-tab>
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.tabbedWithIcons.open()">Tabbed with Icons</b-btn>
          <sweet-modal ref="tabbedWithIcons">
            <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons.beaker">Contents of Tab 1</sweet-modal-tab>
            <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons.fork">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons.heart" disabled>Tab 3 is disabled</sweet-modal-tab>
            <!-- icons is an object containing SVG strings -->

            <b-btn slot="button" @click="$refs.tabbedWithIcons.close()">Close</b-btn>
            <b-btn slot="button" variant="primary" @click="$refs.tabbedWithIcons.close()" class="ml-2">OK</b-btn>
          </sweet-modal>
        </div>

        <div class="d-inline-block">
          <b-btn @click="$refs.tabbedWithTitle.open()">Tabbed with Title</b-btn>
          <sweet-modal ref="tabbedWithTitle" title="This is a Tabbed Modal">
            <sweet-modal-tab title="Tab 1" id="tab1" :icon="icons.beaker">Contents of Tab 1</sweet-modal-tab>
            <sweet-modal-tab title="Tab 2" id="tab2" :icon="icons.fork">Contents of Tab 2</sweet-modal-tab>
            <sweet-modal-tab title="Tab 3" id="tab3" :icon="icons.heart" disabled>Tab 3 is disabled</sweet-modal-tab>
            <!-- icons is an object containing SVG strings -->
          </sweet-modal>
        </div>
      </b-card-body>
    </b-card>

  </div>
</template>

<style src="@/vendor/libs/sweet-modal-vue/sweet-modal-vue.scss" lang="scss"></style>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
  name: 'ui-modals',
  metaInfo: {
    title: 'Modals - UI elements'
  },
  components: {
    SweetModal,
    SweetModalTab
  },
  data: () => ({
    //
    // Bootstrap modals
    //

    sizes: [
      { text: 'Small', value: 'sm' },
      { text: 'Medium', value: null },
      { text: 'Large', value: 'lg' }
    ],
    defaultModalSize: null,
    topModalSize: null,
    fillInModalSize: null,

    //
    // Sweet modals
    //

    icons: {
      beaker: '<i class="ion ion-ios-flask text-big"></i>',
      fork: '<i class="ion ion-md-git-branch text-big"></i>',
      heart: '<i class="ion ion-ios-heart text-big"></i>'
    }
  }),
  methods: {
    //
    // Bootstrap modals
    //

    showSlideModal () {
      this.$refs.slideModal.show()
    },
    hideSlideModal () {
      this.$refs.slideModal.hide()
    }
  }
}
</script>
