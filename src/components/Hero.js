import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import data from './data'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const Hero = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  //setting exact positions for slides positive and negative
  useEffect(() => {
    const lastIndex = people.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) setIndex(0)
  }, [index, people])

  //setting auto slide
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <Wrapper className='section-center'> 
        
        <div className='section-center'>
          {people.map((person, personIndex) => {
            const { id, image, name, title } = person

            //seting slides
            let position = 'nextSlide'
            if (personIndex === index) {
              position = 'activeSlide'
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide'
            }
            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img' />
                <h4>{name}</h4>
                <p className='title'>{title}</p>
                <Link to='/products' className='btn hero-btn'>
                  shop now
                </Link>
              </article>
            )
          })}
          <button className='prev' onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className='next' onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }

    .title {
      text-align: center;
      margin-bottom: 2rem;
    }

    .title h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
    }

    .title span {
      font-size: 0.85em;
      color: var(--clr-primary-5);
      margin-right: 0rem;
      font-weight: 700;
    }

    .section-center {
      margin: 0 auto;
      margin-top: 1rem;
      width: 150vw;
     // has to have a height 
      height: 680px;
      max-width: 1200px;
      text-align: center;
      position: relative;
      display: flex;
       overflow: hidden; 
    }

    .person-img {
      border-radius: 0%;
      margin-bottom: 1rem;
      width: 1000px;
      height: 350px;
      object-fit: cover;
      border: 4px solid var(--clr-grey-8);
      box-shadow: var(--dark-shadow);
    }

    article h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }

    .title {
      text-transform: capitalize;
      margin-bottom: 0.75rem;
      color: var(--clr-grey-3);
      text-align: center;
    }

    .text {
      max-width: 50em;
      margin: 0 auto;
      margin-top: 4rem;
      line-height: 2;
      color: var(--clr-grey-5);
    }

    .icon {
      font-size: 3rem;
      margin-top: 1rem;
      color: var(--clr-primary-5);
    }

    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }

    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
    }

    @media (min-width: 800px) {
      .text {
        max-width: 45em;
      }

      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }

    /* to set slider*/
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }

    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }

    article.lastSlide {
      transform: translateX(-100%);
    }

    article.nextSlide {
      transform: translateX(100%);
    }
  }
`

export default Hero
