<template>
	<div class="container">
		<Form ref="formInline" label-position="left" :label-width="70" :model="formInline" inline>
	        <FormItem label="客户名称" prop="customerName">
	            <Input v-model="formInline.customerName" placeholder="请输入"></Input>
	        </FormItem>
	        <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
	    </Form>
	    <div class="">
	    	<Button type="primary" icon="plus" @click="addCustomer">添加</Button>
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
                        title: '客户名称',
                        key: 'name'
                    },
                    {
                        title: '业务板块',
                        key: 'plate'
                    },
                    {
                        title: '状态',
                        key: 'status',
                        width: 80,
                        render: (h, params) => {
                        	return h('span',params.row.status?'已启用':'未启用')
                        }
                    },{
                        title: '有效期',
                        key: 'validdate',
                        width: 100,
                    },{
                        title: '有效天数',
                        key: 'validdays',
                        align:'center',
                        width: 100,
                    },{
                        title: '本月销售额',
                        key: 'sales'
                    },{
                        title: '操作',
                        key: 'action',
                        width: 200,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.detail(params)
                                        }
                                    },
                                    style:{
                                    	marginRight:'10px'
                                    }
                                }, '查看'),
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
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },
                    {
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },
                    {
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
                    },{
                        name: '某某旅游',
                        plate: '酒店、机票、门票、签证',
                        status: false,
                        validdate:'2017-09-26',
                        validdays:'365',
                        sales:'9965286.00'
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
            addCustomer(){
            	this.$router.push('addcustomer')
            }
        }
    }
</script>

<style lang="scss">
	.table-wrap{
		margin: 15px 0;
	}
</style>