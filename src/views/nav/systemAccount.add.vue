<template>
	<div class="container">
		<Form ref="form" :rules="formRules" label-position="right" :label-width="70" :model="form">
	        <FormItem label="账号" prop="account">
	            <Input v-model="form.account" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="账号描述">
	            <Input v-model="form.desc" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="密码" prop="password">
	            <Input v-model="form.password" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="确认密码" prop="confirmPassword">
	            <Input v-model="form.confirmPassword" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="菜单权限">
	            <CheckboxGroup v-model="form.menu">
			        <Checkbox label="1">客户管理</Checkbox>
			        <Checkbox label="2">模拟数据</Checkbox>
			        <Checkbox label="3">后台账号管理</Checkbox>
			        <Checkbox label="4">看板账号管理</Checkbox>
			        <Checkbox label="5">修改密码</Checkbox>
			    </CheckboxGroup>
	        </FormItem>
	        <FormItem label="">
	        	<Button type="primary" icon="plus" @click="submit">添加</Button>
	        </FormItem>
	    </Form>
	</div>
</template>

<script>
	export default {
        data () {
        	const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
            	form: {
                    account: '',
                    desc:'',
                    password:'',
                    confirmPassword:'',
                    menu:[]
                    
                },
                formRules:{
                	account: [
                        { required: true, message: '账号不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码不能少于6位数', trigger: 'blur' }
                    ],
                    confirmPassword: [
                        { required: true, message: '确认密码不能为空', trigger: 'blur' },
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                }
            }
        },
        methods:{
        	submit(){
        		this.$router.go(-1)
        	}
        }
   }
</script>

<style>
</style>