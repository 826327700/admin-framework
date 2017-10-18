<template>
	<div class="container">
		<Form ref="formInline" label-position="left" :label-width="70" :model="formInline" inline>
	        <FormItem label="账号" prop="customerName">
	            <Input v-model="formInline.customerName" placeholder="请输入"></Input>
	        </FormItem>
	        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
	    </Form>
	    <div class="">
	    	<Button type="primary" icon="plus" @click="addAccount">添加</Button>
	   		<Button type="ghost" icon="trash-a">删除</Button>
	    </div>
	    <div class="table-wrap">
	    	<Table @on-select="tableSelect" :columns="columns1" :data="data1"></Table>
	    </div>
	    <div class="">
	    	<Page :total="100" show-sizer show-elevator></Page>
	    </div>
    </div>
</template>

<script>
	export default {
        data () {
            return {
                formInline: {
                    customerName: '',
                },
                columns1: [
                 	{
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                    	title: '序号',
                        align: 'center',
                        width: 60,
                        render: (h, params) => {
                        	return h('span',params.index+1)
                        }
                    },
                    {
                        title: '账号',
                        key: 'name',
                        width: 100,
                    },
                    {
                        title: '描述',
                        key: 'desc'
                    },{
                        title: '客户数据',
                        key: 'customer'
                    },
                    {
                        title: '佣金',
                        key: 'commission',
                        width: 80,
                        render: (h, params) => {
                        	return h('span',params.row.commission?'显示':'不显示')
                        }
                        
                    },{
                        title: '状态',
                        key: 'status',
                        width: 80,
                        render: (h, params) => {
                        	return h('span',params.row.status?'已启用':'未启用')
                        }
                    },{
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'ghost',
                                        size: 'small'
                                    },
                                    style:{
                                    	marginRight:'10px'
                                    }
                                }, '修改密码'),
                                h('Button', {
                                    props: {
                                        type: 'success',
                                        size: 'small'
                                    }
                                },'启用')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: 'report1',
                        desc: '看板账号1',
                        commission:true,
                        status: false,
                        customer:'全部',
                    },
                    {
                        name: 'report2',
                        desc: '看板账号2',
                        commission:true,
                        status: false,
                        customer:'某某旅游，某某旅行社',
                    },
                    {
                        name: 'report3',
                        desc: '看板账号3',
                        commission:true,
                        status: false,
                        customer:'某某旅游',
                    },{
                         name: 'report4',
                        desc: '看板账号4',
                        commission:true,
                        status: false,
                        customer:'某某旅游',
                    },{
                         name: 'report5',
                        desc: '看板账号5',
                        commission:true,
                        status: false,
                        customer:'某某旅游',
                    },
                ]
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            detail (index) {
            	this.$router.push('customer/123')
            },
            tableSelect(data,data2){
            	console.log(data)
            	console.log(data2)
            },
            addAccount(){
            	this.$router.push('report-account-add')
            }
        }
    }
</script>

<style lang="scss">
	.table-wrap{
		margin: 15px 0;
	}
</style>