<template>
	<div class="login">
		<div class="login-wrap">
			<div class="logo">
				<img src="../assets/logo.png" />
			</div>
			<div class="form">
				<div class="row title">
					xxx管理系统
					<span>v1.0</span>
				</div>
				<Form :model="form" :rules="formRules" ref="loginForm">
					<FormItem prop="userName">
			            <Input type="text" v-model="form.userName" placeholder="用户名">
			                <Icon type="ios-person-outline" slot="prepend"></Icon>
			            </Input>
			        </FormItem>
			        <FormItem prop="passWord">
			            <Input type="text" v-model="form.passWord" placeholder="密码">
			                <Icon type="ios-locked-outline" slot="prepend"></Icon>
			            </Input>
			        </FormItem>
					<FormItem label="记住我">
			            <Switch>
					        <Icon type="android-done" slot="open"></Icon>
					        <Icon type="android-close" slot="close"></Icon>
					    </Switch>
			        </FormItem>
					<div class="row sumbit m-t-2">
						<Button type="warning" long @click.native.prevent="onSubmit" :loading="loading">登录</Button>
					</div>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				form:{
					userName:'',
					passWord:''
				},
				remember:false,
				formRules:{
					userName: [{
						 required: true, message: '请输入用户名', trigger: 'blur'
					}],
					passWord: [{
						 required: true, message: '请输入密码', trigger: 'blur'
					}],
				},
				loading:false
			}
		},
		mounted(){
			this.$refs.loginForm.$el.onkeypress=  (event)=> {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e && e.keyCode == 13) {
                	this.onSubmit()
                }
            }
		},
		methods:{
			onSubmit(){
				this.$refs.loginForm.validate((valid) => {
					if(valid){
						this.loading=true
						setTimeout(()=>{
							this.$router.push({
								path: '/customer'
							});
						},1500)
					}
				})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.login {
		height: 100%;
		background: url(../assets/img/logo-bg.jpg);
		background-repeat: no-repeat;
		background-position: center top;
		background-size: cover;
		position: relative;
	}
	
	.login-wrap {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 600px;
		
		display: flex;
		border: 5px solid rgba(255,255,255,.5);
		.logo {
			width: 40%;
			display: flex;
			-webkit-box-pack: center;
			-moz-justify-content: center;
			-webkit-justify-content: center;
			justify-content: center;
			-webkit-box-align: center;
			-moz-align-items: center;
			-webkit-align-items: center;
			align-items: center;
			background: #fff;
		}
		.form{
			flex: 1;
			padding: 2.8rem 1rem;
			background: #fff;
			.row{
				margin: 0.8rem;
			}
			.title{
				font-size: 1.7rem;
				color: #1b93e1;
				span{
					float: right;
					margin: 1rem;
					font-size: 0.8rem;
				}
			}
			.m-t-2{
				margin-top: 2rem;
			}
			.sumbit .el-button{
				display: block;
				width: 100%;
			}
		}
	}
</style>