/** @jsx jsx */
import { jsx } from '@emotion/core'



import { Card, Row, Col } from 'react-bootstrap';

import {
  wrapperCover, centerText, petImage, margin, category,
  whitecolor, sortby, center, 
} from './CategoryAllPets.style'

const CategoryPet = () => {

  return (
    <div>
        <div css={wrapperCover}>
          <div css={whitecolor} style={{paddingTop:"200px"}}>
            <h1 style={{fontWeight:"700"}}>Not sure what you're looking for?</h1>
            <h4 style={{fontWeight:"500"}}>Take a look around the categories below!</h4>
            </div>
        </div>
        <div css={sortby}>
          <h1 css={centerText}>
            ALL CATEGORIES
              </h1>
        </div>
      <div >
        <Row css={category}>
          <Col md={3} css={margin} key="">
            <a href="/all-breeds/category/Dog">
              <Card css={petImage}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1555325084-b068599743c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=323&q=80" />
                <Card.Body css={center}>
                  <Card.Title>
                    <h4>
                      Dog
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    "There's a reason dogs are called man's best friend."
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
          <Col md={3} css={margin} key="">
          <a href="/all-breeds/category/Cat ">
            <Card css={petImage}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1520315342629-6ea920342047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" />
              <Card.Body css={center}>
                <Card.Title>
                  <h4>
                    Cat
                    </h4>
                </Card.Title>
                <Card.Text>
                  "A cat's courage is as strong as a dog's chain"
                  </Card.Text>
              </Card.Body>
            </Card>
            </a>
          </Col>
          <Col md={3} css={margin} key="">
            <Card css={petImage}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              <Card.Body css={center}>
                <Card.Title>
                  <h4>
                    Small and Furry
                    </h4>
                </Card.Title>
                <Card.Text>
                  "The world's tragedy is that men love women, women love children, and children love hamsters."
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row css={category}>
          <Col md={3} css={margin} key="">
            <Card css={petImage}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1574040692842-6c45d85907a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=741&q=80" />
              <Card.Body css={center}>
                <Card.Title>
                  <h4>
                    Birds
                    </h4>
                </Card.Title>
                <Card.Text>
                  "A pleasant morning wake up call goes a long way"
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} css={margin} key="">
            <Card css={petImage}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1598674953515-32809625dfa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=484&q=80" />
              <Card.Body css={center}>
                <Card.Title>
                  <h4>
                    Fish
                    </h4>
                </Card.Title>
                <Card.Text>
                  "Fish are friends, not food"
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} css={margin} key="">
            <Card css={petImage}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1591913928909-af4bbc97ec34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
              <Card.Body css={center}>
                <Card.Title>
                  <h4>
                    Horses
                    </h4>
                </Card.Title>
                <Card.Text>
                  "Horses are like chocolates you can't just have one"
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CategoryPet;