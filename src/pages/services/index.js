import React, {Component} from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'
import {Helmet} from 'react-helmet'
import Layout from '../../components/Layout/Layout'
import servicesData from '../../data/services'

const ServicesWrapperDiv = styled.div`
    width: 90%;
    max-width: 1026px;
    margin: 3rem auto;
    @media (min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: fit-content(40%);
        column-gap: 1rem;
    }
`

const ServicesUl = styled.ul`
    list-style-type: none;
    width: 100%;
    max-width: 1026px;
    margin: 0 auto 1rem;
    border: 1px solid gainsboro;
    box-shadow: 0 -1px 4px #ede7e7;
    padding: 1.5rem 1rem 0;
    &:hover {
        background-color: rgba(255, 153, 0, 0.5);
    }
    & a {
        @media (min-width: 400px) {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 800px) {
        display: grid;
    }
`

const MoreLi = styled.li`
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`

class ServicesIndex extends Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description',
        )
        return (
            <Layout>
                <Helmet
                    htmlAttributes={{lang: 'en'}}
                    meta={[{name: 'description', content: siteDescription}]}
                    title={`Services | ${siteTitle}`}
                />
                <ServicesWrapperDiv as="div">
                    {servicesData.map((service, index) => (
                        <ServicesUl as="ul" key={index}>
                            <li>
                                <a
                                    href={service.path}
                                    key={service.title}
                                    title={`visit the ${
                                        service.title
                                    } Services page to learn more`}
                                >
                                    {service.icon} {service.title}
                                </a>
                            </li>
                            <p>{service.shortDescription}</p>
                            {service.tags}
                            <br />
                            <MoreLi as="li">
                                <a
                                    href={service.path}
                                    key={service.title}
                                    title={`view more about ${
                                        service.title
                                    } Services on the ${
                                        service.title
                                    } Services page`}
                                >
                                    <p>view more</p>
                                </a>
                            </MoreLi>
                        </ServicesUl>
                    ))}
                </ServicesWrapperDiv>
            </Layout>
        )
    }
}

export default ServicesIndex

export const servicesQuery = graphql`
    query servicesQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`
