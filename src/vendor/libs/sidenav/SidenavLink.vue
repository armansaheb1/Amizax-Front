<template>
  <div class="sidenav-item" :class="{active: active, disabled: disabled}">
    <a :href="href" :target="target" class="sidenav-link" :class="linkClass" style="font-family: 'Yekan'">
      <i class="sidenav-icon" style="color: rgb(254 208 15)!important; font-size: 18px" v-if="icon" :class="icon"></i>
      <div><slot></slot></div>
      <div v-if="badge" class="pl-1 ml-auto"><div class="badge" :class="badgeClass">{{badge}}</div></div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'sidenav-link',
  props: {
    href: String,
    icon: String,
    target: {
      type: String,
      default: '_self'
    },
    linkClass: {
      type: String,
      default: ''
    },
    badge: {
      default: null
    },
    badgeClass: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
