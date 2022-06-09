<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="$root.isMenuCollapse" :router="true">
      <el-menu-item v-for="(item, index) in menuList" :index="item.router" :key="index">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>設定工具</span>
        </template>
        <el-menu-item v-for="(item, index) in submenuList" :index="item.router">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
</template>


<script>
module.exports = {
        name: "my-aside",
        data() {
            return {
                menuList: [
                    { name: "測試一", router: "/home", icon:"el-icon-menu"}
                ],
                submenuList: [
                    { name: "測試二", router: "/test1", icon: "el-icon-setting" },
                    { name: "測試三", router: "/test2", icon: "el-icon-setting" },
                    { name: "測試四", router: "/test3", icon: "el-icon-setting" },
                    { name: "測試五", router: "/test4", icon: "el-icon-setting" },
                ]
            };
        },
        methods: {

        },
        created() {
           
        },
        mounted: function () {
            
        },
    };
</script>


<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 500px;
    }

    .el-menu-vertical-demo {
        background-color: rgb(238, 241, 246);
    }
</style>
