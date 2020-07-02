import React from 'react';
import PropTypes from 'prop-types';
// npm i prop-types
// 내가 전달받은 props가 내가 원하는 props인지 확인해 주는 기능

function Food({ nm, pic, rating }){
    return <div>
        <h3> My Favorite {nm}</h3>
        <h4> {rating}/5.0 </h4>
        <img src={pic} alt={nm} width={200} />
    </div>

}

// JS obj의 리스트를 어떻게 가져올지 알아보자
const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
        rating: 4.4
    },
    {
        id: 2,
        name: "samgyetang",
        image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
        rating: 4.6
    },
    {
        id: 3,
        name: "vegi",
        image: "https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg",
        rating: 3.3
    }
    ]

function renderFood(dish){
    console.log(dish)
    return <Food nm={dish.name} pic={dish.image} key={dish.id} rating={dish.rating} />
}


// 관련 공식문서 https://ko.reactjs.org/docs/typechecking-with-proptypes.html
Food.propTypes = {
    nm : PropTypes.string.isRequired,
    pic : PropTypes.string,
    // isRequired = 필수요소 여부 : isRequired를 생략하면 prop이 없어도 오류가 뜨지 않는다.

    // rating : PropTypes.string.isRequired
//  rating을 string으로 체크했을 때, int로 들어오면 콘솔에서 오류 메세지가 뜬다.
    //Warning: Failed prop type: Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
    rating : PropTypes.number.isRequired
    // 오류가 해결됐다
};


function App() {
  return (
    <div className="App">
        <h1>Hello!</h1>
        {/* map 처리를 함수(renderFood)로 묶어 사용할 수 있다. */}
        {/*{foodILike.map( dish => <Food nm={dish.name} pic={dish.image} key={dish.id}> )}*/}
        {foodILike.map(  renderFood )}
        {console.log(foodILike.map(renderFood,'check!'))}

    </div>
  );
}
export default App;
