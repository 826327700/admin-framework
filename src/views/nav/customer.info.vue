<template>
	<div class="customer-info">
		<Tabs value="name1" :animated='false'>
	        <TabPane label="客户信息" name="name1" class="text-row">
	        	<Form ref="formInline" label-position="right" :label-width="90">
			        <FormItem label="客户名称">
			            	某某旅游科技有限公司
			        </FormItem>
			       <FormItem label="客户名称">
			            	某某旅游之家科技有限公司
			        </FormItem>
			        <FormItem label="业务开通">
			           	<Tag type="border" color="green">酒店</Tag>
			           	<Tag type="border" color="green">机票</Tag>
			           	<Tag type="border" color="green">签证</Tag>
			           	<Tag type="border" color="green">跟团游</Tag>
			        </FormItem>
			        <FormItem label="佣金设置">
			           	<p>按业务板块抽佣</p>
			           	<div>酒店：佣金比例0.05%</div>
			           	<div>机票：佣金比例0.05%</div>
			           	<div>签证：佣金比例0.05%</div>
			           	<div>跟团游：佣金比例0.05%</div>
			        </FormItem>
			        <FormItem label="有效日期至">
			           	2017年10月1日
			        </FormItem>
			    </Form>
			    <div class="section-title">
			    	<Icon type="clipboard"></Icon> 授权记录
			    </div>
	        	<div class="table-wrap">
			    	<Table  :columns="table.columns" :data="table.data"></Table>
			    </div>
	        </TabPane>
	        <TabPane label="销量统计" name="name2">
	        	<Row :gutter="16">
			        <Col span="16">
			            <Form ref="formInline" label-position="right" :label-width="90">
					        <FormItem label="对账月份">
					            	<DatePicker :transfer="true" type="month" placeholder="选择日期" style="width: 200px"></DatePicker>
					        </FormItem>
					       <FormItem label="时间段">
					            	<DatePicker :transfer="true" placement="bottom-start" type="daterange"  placeholder="选择日期" style="width: 200px"></DatePicker>
					        </FormItem>
					        <FormItem label="业务板块">
					            	<Tag type="dot" color="green">酒店</Tag>
					            	<Tag type="dot" color="green">机票</Tag>
					            	<Tag type="dot" color="green">签证</Tag>
					            	<Tag type="dot" color="green">跟团游</Tag>
					        </FormItem>
					    </Form>
			        </Col>
			        <Col span="8">
			            <div class="rank-card">
			            	<Card :bordered="false">
					            <div slot="title">
					            	<ButtonGroup>
					            	<Button type="primary" size="small">销售榜</Button>
        							<Button type="ghost" size="small">佣金榜</Button>
        							</ButtonGroup>
					            </div>
					            <p>销售排名：<span class="number">2</span></p>
					            <p>销售额：<span class="number">￥109625623.00</span></p>
					        </Card>
			            </div>
			        </Col>
			    </Row>
	        	<div class="section-title">
	        		<Button type="primary" icon="archive">导出</Button>
        			<Button type="primary" icon="printer">打印</Button>
	        	</div>
	        	<div class="table-title">
	        		<h2>某某旅游科技有限公司</h2>
	        		<h3>对账单</h3>
	        		<p><span>对账月份：2017年8月</span><span style="margin-left: 20px;">对账日期：2017年8月25日</span></p>
	        	</div>
	        	<div class="table-wrap">
			    	<Table  :columns="table2.columns" :data="table2.data"></Table>
			    </div>
			    <div class="table-page">
			    	<Page :total="100" show-sizer show-elevator></Page>
			    </div>
	        </TabPane>
	    </Tabs>
	</div>
</template>

<script>
	export default {
        data () {
            return {
            	table:{
            		columns:[{
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '授权方式',
                        key: 'type'
                    },{
                        title: '有效期',
                        key: 'validdate'
                    },{
                        title: '操作人',
                        key: 'admin'
                    }],
                    data:[{
                        date: '2017-09-26',
                        type: '系统授权',
                        validdate: '2017-10-26',
                        admin:'小包子',
                    },{
                        date: '2017-09-26',
                        type: '系统授权',
                        validdate: '2017-10-26',
                        admin:'小包子',
                    },{
                        date: '2017-09-26',
                        type: '系统授权',
                        validdate: '2017-10-26',
                        admin:'小包子',
                    },{
                        date: '2017-09-26',
                        type: '系统授权',
                        validdate: '2017-10-26',
                        admin:'小包子',
                    }]
            	},
            	table2:{
            		columns:[{
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '订单号',
                        key: 'orderNo'
                    },{
                        title: '订单类型',
                        key: 'orderType'
                    },{
                        title: '销售渠道',
                        key: 'saleChannel'
                    },{
                        title: '订单金额（元）',
                        key: 'orderMoney'
                    },{
                        title: '佣金金额（元）',
                        key: 'commission'
                    }],
                    data:[{
                        date: '2017-09-26',
                        orderNo: 'wq1792546323',
                        orderType: '酒店',
                        saleChannel:'B2C',
                        orderMoney:3589.00,
                        commission:3.5
                    },{
                        date: '2017-09-26',
                        orderNo: 'wq1792546323',
                        orderType: '酒店',
                        saleChannel:'B2C',
                        orderMoney:3589.00,
                        commission:3.5
                    },{
                        date: '2017-09-26',
                        orderNo: 'wq1792546323',
                        orderType: '酒店',
                        saleChannel:'B2C',
                        orderMoney:3589.00,
                        commission:3.5
                    },{
                        date: '2017-09-26',
                        orderNo: 'wq1792546323',
                        orderType: '酒店',
                        saleChannel:'B2C',
                        orderMoney:3589.00,
                        commission:3.5
                    },{
                        date: '',
                        orderNo: '',
                        orderType: '',
                        saleChannel:'合计',
                        orderMoney:4000.00,
                        commission:43.5
                    }]
            	}
            }
        }
   }
</script>

<style lang="scss">
	.customer-info{
		.ivu-form-item{
			margin-bottom: 5px;
			.ivu-form-item-content{
				font-size: 14px!important;
			}
		}
		.table-wrap{
			margin: 15px;
		}
		.rank-card{
			width: 230px;
			float: right;
			border:1px solid #e5e5e5;
			.number{
				font-size: 16px;
				font-weight: 600;
				color: rgb(254,126,118);
			}
		}
		.table-title{
			margin: 30px 15px 0px 15px;
			color: #666;
			h2,h3{
				text-align: center;
			}
		}
		.table-page{
			padding: 10px 15px;
		}
	}
	.section-title{
		border-bottom: 1px solid #eee;
		margin: 0 15px;
		padding:5px ;
		font-size: 14px;
		color: #2d8cf0;
	}
	
</style>