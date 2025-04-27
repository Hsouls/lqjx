<template>
  <div class="container">
    <van-nav-bar title="龙泉职工食堂" class="nav-bar"  fixed />
    <div class="user-info">
      <span>程富强</span>
      <span class="date">2025/04/26</span>
    </div>
    <van-list class="dish-list">
      <van-cell v-for="(item, index) in dishes" :key="index" :title="item.title" :label="item.label">
        <template #title>
          <span v-if="index === 0" class="required">
            <van-checkbox v-model="item.checked" :disabled="true" />
            {{ item.name }}
            <span class="price">¥{{ item.price }}</span>
          </span>
          <span v-else>
            <van-checkbox v-model="item.checked" />
            {{ item.name }}
            <span class="price">¥{{ item.price }}</span>
          </span>
        </template>
        <template #label>
          <span v-if="index === 0" class="desc">{{ item.desc }}</span>
          <span v-else class="desc">{{ item.desc }}</span>
          <div class="quantity-wrap">
            <span v-if="index === 0" class="fixed-quantity">{{ item.quantity }}</span>
            <van-stepper
              v-else
              v-model="item.quantity"
              :min="0"
              :max="99"
              class="stepper"
            />
          </div>
        </template>
      </van-cell>
    </van-list>
    <div class="footer">
      <span class="selected-total">已选：¥{{ selectedTotal }}</span>
      <span class="balance">本月余额：¥407.00</span>
      <van-button type="primary" class="confirm-btn">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dishes: [
        {
          name: '标准午餐（必选）',
          desc: '一荤一素',
          price: 13,
          quantity: 1,
          checked: true,
          disabled: true,
          title: '',
          label: ''
        },
        {
          name: '煮素菜',
          desc: '',
          price: 2,
          quantity: 0,
          checked: false,
          title: '',
          label: ''
        },
        {
          name: '煮荤菜',
          desc: '',
          price: 3,
          quantity: 0,
          checked: false,
          title: '',
          label: ''
        },
        {
          name: '煮福袋',
          desc: '',
          price: 4,
          quantity: 0,
          checked: false,
          title: '',
          label: ''
        },
        {
          name: '炸鸡腿',
          desc: '',
          price: 10,
          quantity: 0,
          checked: false,
          title: '',
          label: ''
        },
        {
          name: '狮子头',
          desc: '',
          price: 10,
          quantity: 0,
          checked: false,
          title: '',
          label: ''
        }
      ]
    };
  },
  computed: {
    selectedTotal() {
      return this.dishes.reduce((sum, item) => sum + item.quantity * item.price, 0);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #f5f5f5;
}
.nav-bar {
  background-color: #3498db;
  color: white;
}
.user-info {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.date {
  color: #666;
}
.dish-list {
  background-color: white;
}
.price {
  color: red;
  float: right;
}
.desc {
  color: #666;
}
.quantity-wrap {
  text-align: right;
}
.fixed-quantity {
  border: 1px solid #e0e0e0;
  padding: 2px 6px;
  border-radius: 4px;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.selected-total {
  font-size: 16px;
}
.balance {
  font-size: 16px;
  color: #666;
}
.confirm-btn {
  background-color: #4cd964;
  border-color: #4cd964;
}
</style>