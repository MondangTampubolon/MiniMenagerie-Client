/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Carousel, Row } from 'react-bootstrap';

import { img_fluid } from './CarouselSection.styles'

const CarouselSection = ({ data }) => {
    return (
        <Row>
            <Carousel>
                {
                    data.map(value => {
                        return (
                            <Carousel.Item css={img_fluid}>
                                <img
                                    src={value.image}
                                    alt="slide"
                                />
                                <Carousel.Caption>
                                    <p>{value.caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </Row>
    );
}

export default CarouselSection;