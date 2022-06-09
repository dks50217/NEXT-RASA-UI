<template>
    <el-row :gutter="20">
        <el-col :span="1">
            <!--<hamburger :is-active="$root.isMenuCollapse" class="hamburger-container" @toggleclick="toggleSideBar" />-->
            <el-button v-if="$root.isMenuCollapse" icon="el-icon-s-unfold" type="primary" size="small" v-on:click="toggleSideBar()"></el-button>
            <el-button v-else icon="el-icon-s-fold" type="primary" size="small" v-on:click="toggleSideBar()"></el-button>
        </el-col>
        <el-col :span="3">
            <el-breadcrumb class="app-breadcrumb" separator="/">
                <transition-group name="breadcrumb">
                    <el-breadcrumb-item v-for="(item,index) in breadcrumbList" :key="item.path">
                        <span v-if="!item.redirect || index==breadcrumbList.length-1" class="no-redirect">{{ item.title }}</span>
                        <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
                    </el-breadcrumb-item>
                </transition-group>
            </el-breadcrumb>
        </el-col>
    </el-row>
</template>

<script>

module.exports = {
    name: 'my-header',
    data() {
        return {
            breadcrumbList: [
                { title: "首頁", path: "/", redirect: false },
                { title: "管理", path: "/", redirect: false }
            ]
        };
    },
    components: {
        /*'hamburger': httpVueLoader('../component/hamburger.vue')*/
    },
    methods: {
        toggleSideBar() {
            vm.isMenuCollapse = !vm.isMenuCollapse;
        },
        handleLink(item) {
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return;
            }
            this.$router.push(this.pathCompile(path))
        }
    },
}
</script>

<style>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-top: 5px;
    }

    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
</style>
