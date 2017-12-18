<template>
    <el-menu :default-openeds="['1', '3']" background-color='#545c64' text-color="#fff" active-text-color="#ffd04b"
             @open="handleOpen"
             @close="handleClose">
        <el-menu-item index="0" style="height:100px;  line-height: 4;">
            <i class="el-icon-menu"></i>
            <span style="font-size:1.66em">卖家后台管理</span>
        </el-menu-item>
          <router-link :to="{name:'order'}">
            <el-menu-item index="1-1">订单</el-menu-item>
          </router-link>
        <el-submenu index="2-1">
            <template slot="title">商品</template>
          <el-menu-item-group>
            <template slot="title">操作</template>
            <router-link :to="{name:'goodslist'}">
              <el-menu-item index="2-2">列表</el-menu-item>
            </router-link>
            <router-link :to="{name:'addgoods'}">
              <el-menu-item index="2-3">新增</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
      <el-submenu index="3-1">
        <template slot="title">类目</template>
        <el-menu-item-group>
          <template slot="title">操作</template>
          <router-link :to="{name:'categorylist'}">
            <el-menu-item index="3-2">列表</el-menu-item>
          </router-link>
          <router-link :to="{name:'addcategory'}">
            <el-menu-item index="3-3">新增</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
        <el-menu-item-group>
            <el-menu-item index="4-1">登出</el-menu-item>
        </el-menu-item-group>
    </el-menu>
</template>
<script>
export default {

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }

}

</script>
<style lang="less" scoped>

</style>
