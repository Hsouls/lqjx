<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar title="学员点餐" fixed />

    <!-- 推荐商品 -->
    <van-panel title="推荐美食" desc="以下为推荐美食列表">
      <van-card v-for="product in products" :key="product.id" :title="product.name" :desc="product.description"
        :price="product.price" :thumb="product.image">
        <!-- eslint-disable-next-line -->
        <template v-slot:footer>
          <div v-if="cartItems[product.id]">
            <van-button class="btn" size="mini" @click="decreaseQuantity(product.id)">-</van-button>
            <span style="padding: 0 10px; line-height: 24px;">{{ cartItems[product.id] }}</span>
            <van-button class="btn" size="mini" @click="increaseQuantity(product.id)">+</van-button>
          </div>
          <van-button v-else size="mini" @click="addToCart(product)">加入购物车</van-button>
        </template>
      </van-card>
    </van-panel>

    <!-- 购物车信息 -->
    <div class="cart-info">
      <!-- 购物车总价格 -->
      <div class="cart-total">
        总价格：{{ totalPrice }}元
      </div>

      <!-- 悬浮的查看购物车圆形图标按钮 -->
      <div class="view-cart-icon">
        <van-button class="icon-button" type="primary" icon="shopping-cart-o" @click="showCarts"></van-button>
      </div>

      <!-- 确认按钮 -->
      <div class="confirm-button">
        <van-button type="primary" @click="confirmOrder">确认</van-button>
      </div>
    </div>

    <!-- 购物车弹窗 -->
    <van-popup v-model="showCart" position="bottom">
      <h4>已选商品</h4>
      <template>
        <van-card v-show="cart.length > 0" v-for="(product) in cart" :key="product.id" :title="product.name"
          :desc="product.description" :price="product.price * cartItems[product.id]" :thumb="product.image">
          <!-- eslint-disable-next-line -->
          <template v-slot:footer>
            <van-button size="mini" @click="decreaseQuantity(product.id)">-</van-button>
            <span>{{ cartItems[product.id] }}</span>
            <van-button size="mini" @click="increaseQuantity(product.id)">+</van-button>
          </template>
        </van-card>
      </template>
      <van-nodata v-show="cart.length === 0" description="购物车为空" />
    </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      products: [
        { id: 1, name: '汉堡', description: '美味汉堡', price: 20, image: 'https://example.com/product1.jpg' },
        { id: 2, name: '披萨', description: '美味披萨', price: 30, image: 'https://example.com/product2.jpg' },
        // 更多商品...
      ],
      cart: [], // 新增购物车数组
      cartItems: {}, // 新增购物车商品数量对象
      showCart: false, // 控制购物车弹窗显示
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * this.cartItems[item.id], 0).toFixed(2);
    }
  },
  methods: {
    showCarts() {
      if (this.cart.length > 0) {
        this.showCart = true
      }
    },
    addToCart(product) {
      if (this.cartItems[product.id]) {
        this.cartItems[product.id]++;
      } else {
        this.cart.push(product);
        Vue.set(this.cartItems, product.id, 1);
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
      Vue.delete(this.cartItems, productId);
    },
    increaseQuantity(productId) {
      if (this.cartItems[productId]) {
        Vue.set(this.cartItems, productId, this.cartItems[productId] + 1);
      }
    },
    decreaseQuantity(productId) {
      if (this.cartItems[productId] > 1) {
        Vue.set(this.cartItems, productId, this.cartItems[productId] - 1);
      } else {
        this.removeFromCart(productId);
      }
    },
    confirmOrder() {
      // 确认订单的逻辑
    }
  }
};
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: auto;
}

.cart-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}

.cart-total {
  padding: 10px;
}

.view-cart-icon {
  position: absolute;
  top: -80px;
  right: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .icon-button {
    border-radius: 50%;
  }
}

.view-cart {
  margin-right: 20px;
}

.confirm-button {
  margin-right: 20px;
}
.btn{
 width: 30px;
 margin-left: 0 !important; 
}
</style>



