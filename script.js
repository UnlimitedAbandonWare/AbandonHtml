/* style.css */

/* 기본 글꼴 및 레이아웃 */
body {
    font-family: sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s;
  }
  
  /* 히어로 섹션 */
  .hero {
    background: url("https://via.placeholder.com/1200x400?text=Banner+Image")
      center/cover no-repeat;
    height: 300px;
    border-radius: 8px;
    position: relative;
  }
  .hero-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .hero-text h1 {
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
  }
  
  /* 장바구니 모달 (커스텀) */
  .cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .cart-overlay.active {
    display: flex;
    opacity: 1;
  }
  .cart-modal {
    background-color: #fff;
    width: 90%;
    max-width: 600px;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
  }
  .cart-modal h3 {
    margin-top: 0;
  }
  .cart-items {
    margin-bottom: 1rem;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  .cart-item-name {
    font-weight: 500;
  }
  .cart-item-price {
    color: #555;
  }
  .close-cart {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .checkout-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .checkout-btn:hover {
    background-color: #0069d9;
  }
  
  /* 상품 카드 (Bootstrap col, row 활용)
     아래는 커스텀 박스 효과 (그림자, 호버 등) 예시 */
  .product-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  .product-card img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
  .product-card h2 {
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }
  .product-card p {
    margin: 0.5rem 0;
    color: #777;
  }
  .product-card .price {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .product-card button {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
  .product-card button:hover {
    background-color: #218838;
  }
  