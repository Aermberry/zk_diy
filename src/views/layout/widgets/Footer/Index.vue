<template>
	<el-footer class="m-footer" height="38">
		<el-row>
			<el-col :span="20">
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>布局</el-breadcrumb-item>
					<el-breadcrumb-item>组件</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
			<el-col :span="4">
				<span class="m-footer__copyright">
					{{year}} © ZKcloud_V11 by
					<a href="http://www.5ug.com" class="m-link" target="_blank">
						5ug.com
					</a>
				</span>
			</el-col>
		</el-row>
	</el-footer>
</template>
<script>
	export default {
		name: 'layout-footer',
		data () {
			return {
				year: ''
			}
		},
		mounted () {
			this.init()
		},
		methods: {
			init () {
				var myDate = new Date()
				this.year = myDate.getFullYear()
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.m-footer {
		padding-top: 10px;
		padding-left: 70px;
		height: 38px;
		min-height: 38px;
		vertical-align: middle;
		background: #ffffff;
		-webkit-box-shadow: -2px -8px 41px -14px rgba(202, 210, 222, 0.61);
		-moz-box-shadow: -2px -8px 41px -14px rgba(202, 210, 222, 0.61);
		box-shadow: -2px -8px 41px -14px rgba(202, 210, 222, 0.61);
	}
	.m-footer .m-footer__copyright {
		font-size: 0.75rem;
		font-weight: 400;
		color: #a9a9aa;
		text-align: right;
		float: right;
		a {
			color: #716aca;
		}
	}
</style>
