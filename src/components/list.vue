<!--我的页面提醒组件-->
<template>
    <div class="list">
        <slot name="icon"></slot>
        <slot name="listText"></slot>
        <slot name="rightIcon"></slot>
      <slot name="jianGe"></slot>
      <slot name="zanwu"></slot>
    </div>
</template>

<style>
    .list{
        width: 100%;
        height: 80px;
        background: #f8f5f5;
        position: relative;
        margin: 10px 0;
    }
</style>
