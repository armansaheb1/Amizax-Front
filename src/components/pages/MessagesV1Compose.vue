<template>
  <!-- `.messages-wrapper` fills all available space of container -->
  <div class="messages-wrapper" :class="{'messages-sidebox-open': sideboxOpen}">

    <!-- Messages content wrapper -->
    <div class="d-flex flex-column w-100">

      <!-- Wrap `.messages-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll -->
      <div class="flex-grow-1 position-relative">

        <!-- Remove `.messages-scroll` and add `.flex-grow-1` if you don't need scroll -->
        <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="messages-content messages-scroll">

          <!-- Header -->
          <h4 class="font-weight-bold container-p-x py-3 py-lg-4 m-0">
            <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="messages-sidebox-toggler d-lg-none text-muted align-middle px-3 mr-2"><i class="ion ion-md-more"></i></a>
            تیکت جدید
          </h4>
          <hr class="border-light m-0">
          <!-- / Header -->

          <div style="width:100%" class="container-p-x py-4">

            <b-form-group label="موضوع:">
              <b-input v-model="messageData.subject" />
            </b-form-group>

            <b-form-group class="mt-4" label="متن:">
              <b-textarea v-model="messageData.content" style="height: 400px" />
            </b-form-group>

            <div class="text-right mt-4">
              <b-btn variant="dark ml-2"><i class="ion ion-ios-paper-plane"></i>&nbsp; ارسال</b-btn>
            </div>
          </div>

        </perfect-scrollbar><!-- / .messages-content -->
      </div>

    </div>

  </div><!-- / .messages-wrapper -->
</template>

<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<!-- Page -->
<style src="@/vendor/styles/pages/messages.scss" lang="scss"></style>

<style lang="scss">
  .ql-container.ql-snow {
    height: 400px;
  }
</style>

<script>
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

export default {
  name: 'pages-messages-v1-compose',
  metaInfo: {
    title: 'Compose message v1 - Pages'
  },
  components: {
    PerfectScrollbar
  },
  data: () => ({
    sideboxOpen: false,

    // Mail boxes
    currentMailBox: null,
    mailBoxes: {
      inbox: { title: 'Inbox', icon: 'ion ion-ios-filing', count: 15 },
      sent: { title: 'Sent', icon: 'ion ion ion-ios-mail' },
      drafts: { title: 'Drafts', icon: 'ion ion ion-md-create' },
      spam: { title: 'Spam', icon: 'ion ion ion-md-folder-open' },
      trash: { title: 'Trash', icon: 'ion ion ion-md-trash' }
    },

    // Labels
    labels: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    // Message
    messageData: {
      to: '',
      subject: '',
      content: ''
    },

    // Editor
    editorOptions: {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }, { font: [] }, { size: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ color: [] }, { background: [] }],
          [{ script: 'sub' }, { script: 'super' }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }, { align: [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    }
  }),
  mounted () {
    this.layoutHelpers.setCollapsed(true, false)
  }
}
</script>
