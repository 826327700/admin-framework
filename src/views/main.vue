<template>
	<div class="layout" :class="{'layout-hide-text': hiddenMenusText}">
		<div class="header-bar">
			<div class="logo-wrap">
				<div class="logo-img">
					<img src="../assets/logo.png"/>
				</div>
				<div class="logo-txt">
					xxx管理系统
				</div>
			</div>
			<div class="right-wrap">
				<div class="account">
					<Avatar style="background-color: #87d068" icon="person" /> 186xxxx2020
				</div>
				<div class="logout" @click="logout">
					<Icon type="power" />
				</div>
			</div>
		</div>
		<div class="flex-container">
			<div class="layout-menu-left" ref="layoutleft" v-show="!menuCollapsed" style="width: 220px;">
				<Menu :active-name="currentRoute.path" theme="dark" width="auto" accordion @on-select="selectMenu">
					<!--<div class="layout-logo-left"></div>-->
					<div v-for='item in menus.children'>
						<Submenu :name="item.path" v-if="item.children&&item.children.length>0&&!item.hidden">
							<template slot="title">
								<Icon type="ios-navigate" :size="iconSize"></Icon>
								<span class="layout-text" v-text="item.name"></span>
							</template>
							<MenuItem class="layout-text" v-for="m in item.children" :name="m.path" v-text='m.name' v-if="!m.hidden"></MenuItem>
						</Submenu>
						<MenuItem :name="item.path" v-if="(!item.children||item.children.length==0)&&!item.hidden">
						<Icon type="ios-navigate" :size="iconSize"></Icon>
						<span class="layout-text" v-text="item.name"></span>
						</MenuItem>
					</div>
				</Menu>
			</div>
			<div class="layout-menu-left-mini" v-show="menuCollapsed">
				<ul class="ivu-menu ivu-menu-dark ivu-menu-vertical"  style="width: auto;">
					<li class="ivu-menu-submenu" v-for='item in menus.children' v-if="!item.hidden">
						<div class="ivu-menu-submenu-title">
							<Icon type="ios-navigate" :size="iconSize"></Icon>
						</div>
						<ul class="sub">
							<template v-if="item.children&&item.children.length>0">
								<li class="ivu-menu-item" v-for="m in item.children" v-if="!m.hidden" @click="selectMenu(m.path)">{{m.name}}</li>
							</template>
							<template v-if="!item.children||item.children.length==0">
								<li class="ivu-menu-item" @click="selectMenu(item.path)">{{item.name}}</li>
							</template>
						</ul>
					</li>
				</ul>
			</div>
			<div class="layout-container">
				<div class="layout-header">
					<Button type="text" @click="toggleClick">
	                    <Icon type="navicon" size="32"></Icon>
	                </Button>
	                <Breadcrumb>
	                	<template v-for="(item,index) in currentRoute.matched" v-if="currentRoute.matched.length>2">
	                		<BreadcrumbItem v-if="index==1">{{item.name}}</BreadcrumbItem>
				        	<BreadcrumbItem v-if="index>1">{{item.name}}</BreadcrumbItem>
				        </template>
				        <template v-for="(item,index) in currentRoute.matched" v-if="currentRoute.matched.length<=2">
				        	<BreadcrumbItem v-if="index>0">{{item.name}}</BreadcrumbItem>
				        </template>
				    </Breadcrumb>
				</div>
				<div class="layout-content">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</div>
				<div class="layout-copy">
					2011-2017 &copy; xxx科技有限公司
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import routes from '../router-sync'
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				menus: routes[0],
				hiddenMenusText:false,
				menuCollapsed:false,
				iconSize:14
			}
		},
		
		computed: mapState({
		    currentRoute: state => state.currentRoute
		}),
		watch:{
			'$route':function(val){
				//this.currentRoute=val
				console.log(val)
				this.$store.dispatch('setcurrentroute',val)
			},
			'menuCollapsed':function(val){
				if(val){
					this.iconSize=24
				}else{
					this.iconSize=14
				}
			}
		},
		methods: {
			toggleClick() {
				if(this.$refs.layoutleft.style.width=='60px'){
					this.menuCollapsed=!this.menuCollapsed
					setTimeout(()=>{
						this.$refs.layoutleft.style.width='220px'
					},5)
					setTimeout(()=>{
						this.hiddenMenusText=!this.hiddenMenusText
					},300)
				}else{
					this.$refs.layoutleft.style.width='60px'
					this.hiddenMenusText=!this.hiddenMenusText
					setTimeout(()=>{
						this.menuCollapsed=!this.menuCollapsed
					},300)
				}
				
				
			},
			selectMenu(name) {
				this.$router.push(name);
			},
			logout(){
				this.$Modal.confirm({
                    title: '提示',
                    content: '<p>确认退出登录？</p>',
                    onOk: () => {
                        this.$router.push('login')
                    },
                    onCancel: () => {
                    }
                });
				
			}
		}
	}
</script>

<style scoped lang="scss">
	
	.layout {
		border: 1px solid #d7dde4;
		background: #f5f7f9;
		position: relative;
		border-radius: 4px;
		overflow: hidden;
		height: 100%;
		display: flex;
				-webkit-box-direction: normal;
				-webkit-box-orient: vertical;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				flex-direction: column;
		.layout-container {
				display: flex;
				-webkit-box-direction: normal;
				-webkit-box-orient: vertical;
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				flex-direction: column;
			}
	}
	
	.layout-breadcrumb {
		padding: 10px 15px 0;
	}
	
	.layout-content {
		min-height: 200px;
		margin: 15px;
		overflow: auto;
		background: #fff;
		border-radius: 4px;
		flex: 1;
		padding: 20px 10px;
		min-width: 1000px;
	}
	
	.layout-content-main {
		padding: 10px;
	}
	
	.layout-copy {
		text-align: center;
		padding-bottom: 5px;
		color: #9ea7b4;
	}
	
	.layout-menu-left {
		background: #464c5b;
	}
	
	.layout-header {
		/*height: 60px;*/
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
		display: flex;
		.ivu-breadcrumb{
			margin-left: 20px;
			display: flex;
			-webkit-box-align: center;
			    -moz-align-items: center;
			    -webkit-align-items: center;
			    align-items: center;
			
		}
	}
	.ivu-breadcrumb>span:last-child{
		font-weight: normal!important;
		
	}
	
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
	
	.layout-ceiling-main a {
		color: #9ba7b5;
	}
	
	.layout-hide-text .layout-text {
		display: none;
	}
	
	.ivu-col {
		transition: width .2s ease-in-out;
	}
	.ivu-menu-submenu{
		position: relative;
		.sub{
			display: none;
			margin: 0;
			padding: 0;
			position: absolute;
			left:100% ;
			top: 0;
			background: #464c5b;
			min-width: 180px;
			z-index: 99999999;
		}
		&:hover .sub{
			display: block;
		}
	}
	.flex-container{
		display: flex;
		flex: 1;
		.layout-menu-left{
			width: 220px;
			transition: width 0.3s;
		}
		.layout-menu-left-mini{
			width: 60px;
			background: #464c5b;
		}
		.layout-container{
			flex: 1;
			transition: width 0.3s;
			overflow-x: auto;
			
		}
	}
	.header-bar{
		height: 60px;
		width: 100%;
		background: -webkit-linear-gradient(right, #1d7fee, #33b7f7);
		/* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #1d7fee, #33b7f7);
		/* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #1d7fee, #33b7f7);
		/* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #1d7fee, #33b7f7);
		
		.logo-wrap{
			float: left;
			display: flex;
			height:100%;
			padding:15px 20px;
			color:rgba(255,255,255,.85);
			.logo-img{
				height: 100%;
				img{
					height: 100%;
				}
			}
			.logo-txt{
				display: flex;
				 -webkit-box-align: center;
			    -moz-align-items: center;
			    -webkit-align-items: center;
			    align-items: center;
				font-size: 16px;
				padding-left: 20px;
				border-left: 2px solid rgba(255,255,255,.7);
				margin-left: 20px;
			}
		}
		
		.right-wrap{
			display: flex;
			float: right;
			height: 100%;
			padding-right: 20px;
			color: #fff;
			.account{
				display: flex;
				 -webkit-box-align: center;
			    -moz-align-items: center;
			    -webkit-align-items: center;
			    align-items: center;
			}
			.logout{
				display: flex;
				 -webkit-box-align: center;
			    -moz-align-items: center;
			    -webkit-align-items: center;
			    align-items: center;
			    padding: 0 20px;
			    font-size: 24px!important;
			    cursor: pointer;
			    i{
			    	color: rgba(255,255,255,0.8);
			    	&:hover{
			    		color: rgba(255,255,255,1);
			    	}
			    }
			}
		}
	}
</style>