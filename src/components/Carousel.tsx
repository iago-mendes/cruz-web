import { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                    <img
                        src="https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A01-3.jpg"
                        alt="Produto pachá"
                        />
                    <img
                        src="https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A01-2.jpg"
                        alt="Produto pachá"
                    />
                    <img
                        src="https://pachaalimentos.com/wp-content/uploads/2017/05/home_BANNER-PRINCIPAL_A02.jpg"
                        alt="Produto pachá"
                    />
            </Carousel>
        );
    }
};

export default MyCarousel