<template>
	<section>
		<div class="layout-top">
			<div class="layout-top-navbar">
				<div class="nav-logo">
					<span class="logo">
						<img src="../../../../assets/img/logo.png" alt="" class="logo-icon">
					</span>
				</div>
				<div class="center-navbar-left">
					<x-icon src='tree.svg'></x-icon>
					<span>模版中心</span>
				</div>
				<div class="center-navbar-right">
					<ul class="right-item-box">
						<li class="right-item">
							<x-screenfull class="screenfull right-menu-item"> </x-screenfull>
						</li>
						<li class="right-item">
							<span class="item-icon">
								<x-icon src='phone.svg'></x-icon>
							</span>
							<span>手机</span>
						</li>
						<li class="right-item">
							<span>保存</span>
						</li>
						<li class="right-item">
							<span>预览</span>
						</li>
						<li class="right-item">
							<div class="item-sumbit">
								发布
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import 'src/assets/styles/mixin.scss';
	section {
		@include clearfix;
		height: 100%;
		width: 100%;
		display: flex;
	}
	.layout-top {
		flex: 1;
		.layout-top-navbar {
			z-index: -1;
			height: 70px;
			width: 100%;
			display: flex;
			position: absolute;
			overflow: hidden;
			top: 0;
			left: 0;
			align-items: center;
			border-bottom: 1px solid #ceced0;
			box-shadow: 0 0 130px 0px #e5e5e5;
			.nav-logo {
				height: 100%;
				.logo {
					display: block;
					padding: 14px 15px;
					text-align: center;
					.logo-icon {
						width: 40px;
						height: 40px;
						vertical-align: bottom;
					}
				}
			}
			.right-item-box {
				padding-right: 50px;
				width: auto;
				height: 100%;
				display: flex;
				flex-flow: row wrap;
				justify-content: justify-content;
				.right-item {
					margin-top: 21px;
					padding: 0 20px;
					height: 50px;
					line-height: 24px;
					&:nth-child(2) {
						background-color: #fff;
						span {
							display: inline;
							position: relative;
						}
						.item-icon {
							vertical-align: middle;
							display: inline-block;
							padding-top: 3px;
							margin-right: -4px;
						}
					}
					.el-tooltip {
						margin-top: -3px;
					}

					&:nth-child(3) {
						position: relative;
					}

					&:nth-child(3)::before {
						content: '';
						border: 2px solid #f0f9ff;
						height: 120px;
						position: absolute;
						top: -30px;
						left: 0;
					}

					&:nth-child(3)::after {
						content: '';
						border: 2px solid #f0f9ff;
						height: 120px;
						position: absolute;
						top: -30px;
						right: 0;
					}
					&:last-child {
						color: #fff;
						position: relative;
						background-color: #3898ec;
					}
					.item-sumbit::before {
						content: '';
						position: absolute;
						width: 72px;
						height: 23px;
						background: #3898ec;
						top: -22px;
						left: 0px;
					}
				}
			}
			.center-navbar-left {
				width: 200px;
				height: 100%;
				padding-left: 38px;
				display: flex;
				align-items: center;
				svg {
					color: #716aca;
				}
				span {
					margin-left: 5px;
					font-size: 16px;
					color: #716aca;
				}
			}
			.center-navbar-right {
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				padding: 0 10px;
			}
		}
	}
</style>
