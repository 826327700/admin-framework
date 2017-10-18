<template>
	<div class="container">
		<Form ref="form" label-position="right" :rules="formRules" :label-width="90" :model="form">
	        <FormItem label="旧密码" prop="oldPassword">
	            <Input v-model="form.oldPassword" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="新密码" prop="newPassword">
	            <Input v-model="form.newPassword" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="确认新密码" prop="newPassword2">
	            <Input v-model="form.newPassword2" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="">
	            <Button type="primary" icon="checkmark" @click="submit">修改</Button>
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
                } else if (value !== this.form.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    oldPassword: '',
                    newPassword:'',
                    newPassword2:'',
                },
                formRules:{
                	oldPassword:[
                		{ required: true, message: '旧密码不能为空', trigger: 'blur' },
                	],
                	newPassword:[
                		{ required: true, message: '新密码不能为空', trigger: 'blur' },
                	],
                	newPassword2:[
                		{ required: true, message: '确认新密码不能为空', trigger: 'blur' },
                		{ validator: validatePassCheck, trigger: 'blur' }
                	],
                }
            }
        },
        methods:{
        	submit(){
        		
        	}
        }
   }
</script>

<style lang="scss">
	.container{
		padding: 15px;
	}
</style>