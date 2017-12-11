<template>
  <div id="app">
    <el-container style="width:100%;min-height:900px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color:#545c64">

        <leftnav></leftnav>

      </el-aside>
      <el-main>

        <router-view/>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
import leftnav from '@/components/LeftNav'
export default {
  components:{
    leftnav
  },
  name: "app"
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
}
</style>