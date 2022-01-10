# 쇼핑몰 페이지 만들기
React 연습을 위한 간단한 쇼핑몰 페이지 입니다.

https://miirmoon.github.io/react-shopping-webapp/

## 💡 기능 요구사항
- 테마별 상품 목록을 보여준다.
- 상품의 상세 설명을 보여준다.
- 상품을 장바구니에 담는다.

## 📝배운 것

#### 1. react-router v5 → v6

 1. 명칭 변경

    - Switch → Routes

      ```react
      // v5
      <Switch>
          <Route />
      </Switch>
      
      // v6
      <Routes>
          <Route />
      </Routes>
      ```

    - useHistory → useNavigate

      ```react
      // v5
      const history = useHistory();
      
      history.push('/home');
      history.goBack();
      history.goForward();
      
      // v6
      const navigate = useNavigate();
      
      navigate('/home');
      navigate(-1);
      navigate(1);
      ```

2. route에서 바로 컴포넌트 렌더링

   - v5에서는 Route컴포넌트의 render 속성에서 arrowFunction을 사용하여 컴포넌트를 렌더링했으나, v6에서는 element 속성을 통해 바로 렌더링할 수 있도록 개선됨

     ```react
     import ProductDetail from 'pages/ProductDetail';
     
     // v5
     <Route path='/product/:id' component={ProductDetail} />
     <Route
         path='/product/:id'
         render={routeProps =>(
         	<ProductDetail routeProps={routeProps} />
         )}
     />
     
     // v6
     <Route path="/product/:id" element={<ProductDetail />} />
     ```
