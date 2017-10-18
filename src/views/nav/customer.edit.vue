<template>
	<div class="edit-customer">
		<Form ref="form" label-position="right" :label-width="70" :model="form">
	        <FormItem label="客户名称" prop="customerName">
	            <Input v-model="form.customerName" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="使用系统" prop="customerName">
	            <RadioGroup v-model="form.useSystem">
			        <Radio label="2">V2.0系统</Radio>
			        <Radio label="1">V1.0系统</Radio>
			    </RadioGroup>
	        </FormItem>
	        <FormItem label="API" prop="customerName">
	            <Input v-model="form.api" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="token" prop="customerName">
	            <Input v-model="form.token" placeholder="请输入" style="width: 200px;"></Input>
	        </FormItem>
	        <FormItem label="开通业务" prop="customerName">
	            <CheckboxGroup v-model="form.business">
			        <Checkbox label="1">酒店</Checkbox>
			        <Checkbox label="2">机票</Checkbox>
			        <Checkbox label="3">门票</Checkbox>
			        <Checkbox label="4">年票</Checkbox>
			        <Checkbox label="5">跟团游</Checkbox>
			        <Checkbox label="6">自由行</Checkbox>
			        <Checkbox label="7">邮轮</Checkbox>
			        <Checkbox label="8">签证</Checkbox>
			        <Checkbox label="9">租车</Checkbox>
			        <Checkbox label="10">组合</Checkbox>
			        <Checkbox label="11">旅游卡</Checkbox>
			        <Checkbox label="12">周边游</Checkbox>
			    </CheckboxGroup>
	        </FormItem>
	        <FormItem label="佣金设置" prop="customerName">
	            <RadioGroup v-model="form.commission.type">
			        <Radio label="1">整体抽佣</Radio>
			        <Radio label="2">按业务板块抽佣</Radio>
			    </RadioGroup>
	        </FormItem>
	        <FormItem label="佣金比例" prop="customerName" v-if="form.commission.type=='1'">
	            <Input v-model="form.commission.proportion" placeholder="请输入" style="width: 200px;">
	            	<span slot="append">%</span>
	            </Input>
	        </FormItem>
	        <div class="div-table" v-if="form.commission.type=='2'">
	        	<div class="table-header">
	        		<Row>
	        			<Col span="4">业务板块</Col>
				        <Col span="5">全部</Col>
				        <Col span="5">国内</Col>
				        <Col span="5">国际</Col>
				        <Col span="5">港澳台</Col>
				    </Row>
	        	</div>
	        	<div class="table-body">
	        		<Row v-for="item in form.commission.proportions">
	        			<RadioGroup v-model="item.active">
	        			<Col span="4" v-text="item.name"></Col>
				        <Col span="5">
				        	<Radio label="1">&nbsp;</Radio>
				        	<Input size="small" :number="true" v-model="item.all" placeholder="" style="width: 80px;">
				            	<span slot="append">%</span>
				            </Input>
				        </Col>
				        <Col span="5">
				        	<Radio label="2">&nbsp;</Radio>
				        	<Input size="small" :number="true" v-model="item.pro1" placeholder="" style="width: 80px;">
				            	<span slot="append">%</span>
				            </Input>
				        </Col>
				        <Col span="5">
				        	<Radio label="3">&nbsp;</Radio>
				        	<Input size="small" :number="true" v-model="item.pro2" placeholder="" style="width: 80px;">
				            	<span slot="append">%</span>
				            </Input>
				        </Col>
				        <Col span="5">
				        	<Radio label="4">&nbsp;</Radio>
				        	<Input size="small" :number="true" v-model="item.pro3" placeholder="" style="width: 80px;">
				            	<span slot="append">%</span>
				            </Input>
				        </Col>
				        </RadioGroup>
				    </Row>
	        	</div>
	        </div>
	        <FormItem label="有效期" prop="customerName" >
	            <p><span>有效期至</span><span class="validity">2017-12-30</span><Button type="ghost" size="small" class="m-l-20">更改</Button><Button type="ghost" size="small" class="m-l-20">通过API更新</Button></p>
	            <p><span>授权码</span><span class="m-l-20">79al2ud72dg4n</span><Button type="ghost" size="small" class="m-l-20">生成授权码</Button><Button class="m-l-20" size="small" type="ghost">复制</Button></p>
	        </FormItem>
	   </Form>
	   <Button type="primary" icon="android-checkbox-outline">保存</Button>
       <Button type="ghost" icon="ios-undo-outline">返回</Button>
    </div>
</template>

<script>
	export default {
        data () {
            return {
            	form: {
                    customerName: '',
                    useSystem:'2',
                    api:'',
                    token:'',
                    business:[],
                    commission:{
                    	type:'1',
                    	proportion:'',
                    	proportions:[]
                    },
                    validity:''
                    
                },
            }
        },
        watch:{
        	'form.business':function(val){
        		this.form.commission.proportions=[]
        		var names=[ '酒店','机票','门票 ','年票','跟团游 ','自由行','邮轮','签证','租车','组合','旅游卡','周边游']
        		val.forEach((i)=>{
        			i=Number(i)
        			var item={
                    		name:names[i-1],
                    		active:'1',
                    		all:'',
                    		pro1:'',
                    		pro2:'',
                    		pro3:'',
                    	}
        			this.form.commission.proportions.push(item)
        		})
        	}
        },
        methods:{
        	handleSubmit(){
        		
        	}
        }
    }
</script>

<style lang="scss">
	.edit-customer{
		padding: 15px;
		.ivu-form-item{
			margin-bottom: 20px;
		}
		.div-table{
			width: 900px;
			margin-bottom: 20px;
			.table-header{
				background: rgb(238,241,246);
				padding: 5px 0;
			}
			.table-body{
				border-left:1px solid #e5e5e5;
				border-right:1px solid #e5e5e5;
				.ivu-row{
					border-bottom: 1px solid #e5e5e5;
					padding: 15px 0;
					.ivu-radio-group{
						width: 100%;
					}
				}
			}
			.ivu-col{
				display: flex;
				-webkit-box-align: center;
			    -moz-align-items: center;
			    -webkit-align-items: center;
			    align-items: center;
			    padding: 0 15px;
			    min-height: 24px;
			}
		}
		.validity{
			color: rgb(254,126,118);
			margin-left: 10px;
		}
		.m-l-20{
			margin-left: 20px;
		}
	}
</style>