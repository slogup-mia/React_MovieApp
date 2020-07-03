import React from "react";

class Detail extends React.Component{
    componentDidMount() {
        const{ location, history } = this.props;
        console.log(location.state)

        // props에 영화 info가 포함되어 접근하지 않는다면 (url로 직접 '/movie-detail'에 접근할 경우)
            // '/' 으로 redirect하겠다.
        if(location.state === undefined){
            // props.history 는 url을 여러 방향으로 바꿀 수 있다.
                // go, goBack, goFoward 등
            history.push('/');
        }
    }
    render() {
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        } else {
            return null;
        }
    }
}
export default Detail;