<script setup lang="ts">

</script>

<template>
  <div class="container">
    <HospitalTop />

    <div class="content"> // 展示路由组件的区域
      xxxxxxxxxxxxx
    </div>
    <div class="bottom">
      hhhhhhhhhhhhh
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      margin-top: 70px;
      width: 1200px;
      height: 700px;
      background: red;
    }

    .bottom {
      width: 100%;
      height: 50px;
      background: cyan;
    }
  }
</style>