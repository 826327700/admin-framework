<template>
	<div class="container">
		<Card>
	        <p slot="title">真实数据</p>
		        <Form ref="form" label-position="right" :label-width="90" :model="realData" inline>
		        <FormItem label="真实客户数据">
		            <Select v-model="realData.customerData.name" @on-change="selectChange1" style="width:200px">
				        <Option v-for="item in realData.customersData" :value="item.name" :key="item.name">{{ item.name }}</Option>
				    </Select>
		        </FormItem>
		        <FormItem label="销售数据调高">
		        	<InputNumber :min="0" v-model="realData.customerData.promote"></InputNumber>
		        	<span>%</span>
		        </FormItem>
		   </Form>
	    </Card>
		<Card class="m-t-20">
	        <p slot="title">模拟数据</p>
		    <Button type="primary" icon="plus" @click="addShamCustomer">添加</Button>
	   		<Button type="ghost" icon="trash-a">删除</Button>
		   <div class="div-table m-t-20">
	        	<Table  :columns="shamCustomerData.columns" :data="shamCustomerData.data"></Table>
	        </div>
	    </Card>
	    
	</div>
</template>

<script>
	export default {
        data () {
            return {
                realData: {
                    customersData:[{
                    	name:'某某旅游',
                    	promote:10
                    },{
                    	name:'XX旅行社',
                    	promote:15
                    }],
                    customerData:{
                    	name:'',
                    	promote:0
                    }
                },
                shamCustomerData:{
                	columns:[{
                        title: '模拟客户名称',
                        key: 'name'
                    },{
                        title: '数据提升率',
                        key: 'promote'
                    },{
                        title: '是否显示',
                        key: 'show',
                        render: (h, params) => {
                        	return h('span',params.row.show?'启用':'禁用')
                        }
                    },{
                        title: '操作',
                        render: (h, params) => {
                        	var btnType=params.row.show?'warning':'success'
                        	return h('div', [
                        		h('Button', {
                                    props: {
                                        type: 'ghost',
                                        size: 'small'
                                    },
                                    style:{
                                    	marginRight:'10px'
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: btnType,
                                        size: 'small'
                                    }
                                },!params.row.show?'启用':'禁用')
                            ])
                        }
                    }],
                    data:[{
	                	name:'某某旅游',
	                	show:false,
	                	promote:10
	                },{
	                	name:'XX旅行社',
	                	show:true,
	                	promote:15
	                }]
                },
                formRules:{
                }
            }
        },
        methods:{
        	selectChange1(event){
          		this.realData.customersData.forEach((item)=>{
        			if(item.name==event){
        				this.realData.customerData.promote=item.promote
        			}
        		})
        	},
        	selectChange2(){
        		
        	},
        	addShamCustomer(){
        		
        	}
        }
   }
</script>

<style lang="scss">
	.div-table{
			width: 600px;
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
		.m-l-20{
			margin-left: 20px;
		}
		.m-t-20{
			margin-top: 20px;
		}
</style>