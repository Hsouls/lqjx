<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar
      title="学员点餐"
      fixed
    />
    
    <!-- 推荐商品 -->
    <van-panel title="推荐美食" desc="以下为推荐美食列表">
      <van-card
        v-for="product in products"
        :key="product.id"
        :title="product.name"
        :desc="product.description"
        :price="product.price"
        :thumb="product.image"
      >
      <!-- eslint-disable-next-line -->
      <template v-slot:footer>
          <van-button size="mini" @click="addToCart(product)">加入购物车</van-button>
          </template>
      </van-card>
    </van-panel>
    
    <!-- 购物车信息 -->
    <div class="cart-info">
      <!-- 购物车总价格 -->
      <div class="cart-total">
        总价格：{{ totalPrice }}元
      </div>
      
      <!-- 查看购物车按钮 -->
      <div class="view-cart">
        <van-button type="primary" @click="showCart = true">查看购物车</van-button>
      </div>
    </div>
    
    <!-- 购物车弹窗 -->
    <van-popup v-model="showCart" position="bottom">
      <van-card
        v-for="product in cart"
        :key="product.id"
        :title="product.name"
        :desc="product.description"
        :price="product.price"
        :thumb="product.image"
      >
      <!-- eslint-disable-next-line -->
      <template v-slot:footer>
        <van-button size="mini" @click="removeFromCart(product.id)">删除</van-button>
      </template>
      </van-card>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
      categories: [
        { id: 1, name: '美食', icon: 'https://example.com/icon1.png' },
        { id: 2, name: '甜品', icon: 'https://example.com/icon2.png' },
        // 更多分类...
      ],
      products: [
        { id: 1, name: '汉堡', description: '美味汉堡', price: '20元', image: 'https://example.com/product1.jpg' },
        { id: 2, name: '披萨', description: '美味披萨', price: '30元', image: 'https://example.com/product2.jpg' },
        // 更多商品...
      ],
      cart: [], // 新增购物车数组
      showCart: false, // 控制购物车弹窗显示
    };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter(item => item.id !== productId);
    }
  }
};
</script>

<style scoped>
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
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
}
.cart-total {
  padding: 10px;
}
.view-cart{
    margin-right: 20px;
}
</style>
