<template>
	<div class="layout-bottom">
		<div class="bottom-p"></div>
		<div class="bottom-right">
			<div class="layout-bottom-left">
				20178484448444849
			</div>
			<div class="layout-bottom-right">
				<ul>
					<li>qwe</li>
					<li>wqe</li>
					<li>ewq</li>
					<li>ewq</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'layout-footer',
		data () {
			return {

			}
		},
		mounted () {
		},
		methods: {
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.layout-bottom {
		width: 100%;
		height: 45px;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 2px solid #e5e5e5;
		z-index: 9998;
		background: white;
		display: flex;
		.bottom-p {
			width: 80px;
			height: 45px;
		}
		.bottom-right {
			flex: 1;
			display: flex;
		}
		.layout-bottom-left {
			height: 45px;
			line-height: 55px;
			color: #666c7a;
			padding-left: 30px;
		}
		.layout-bottom-right {
			flex: 1;
			height: 45px;
			ul {
				display: flex;
				height: 45px;
				justify-content: flex-end;
				align-items: center;
				padding-right: 200px;
				li {
					height: 45px;
					padding: 0 20px;
					line-height: 45px;
					color: #666c7a;
				}
			}
		}
	}
</style>
