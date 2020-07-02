import React from 'react';

function Food({nm, pic}){
    return <div>
        <h3> My Favorite {nm}</h3>
        <img src={pic} alt="" width={200} />
    </div>

}

// JS obj의 리스트를 어떻게 가져올지 알아보자
const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
    },
    {
        id: 2,
        name: "samgyetang",
        image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
    }
    ]

function App() {
  return (
    <div className="App">
        <h1>Hello!</h1>
        {foodILike.map(dish => <Food nm={dish.name} pic={dish.image} key={dish.id}/> )}
    </div>
  );
}
// 웹사이트에서 동적 데이터를 추가하는 방법을 알아보자
    // function food 컴포넌트를 동적으로 렌더링 한다.
export default App;



// 참고  : error on console
//
// index.js:1 Warning: Each child in a list should have a unique "key" prop.
//
// 관련 solution : https://codingmania.tistory.com/292
// 위의 경우
// 1. const foodILike = [  ] 요소들에 id 배정하고 (API 호출시에는 받아오는 JSON에는 보통 있으므로 걱정ㄴㄴ )
// 2. map 문에 key 정의하여 해결  :  {foodILike.map(dish => <Food nm={dish.name} pic={dish.image} key={dish.id}/> )}

