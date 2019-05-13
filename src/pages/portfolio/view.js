import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, graphql} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../../components/Layout/Layout'

export const ViewDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem auto;
    width: 90%;
    color: rgb(88, 86, 86);
    & a {
        box-shadow: none;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto 1rem;
        cursor: pointer;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export const TitleH2Style = styled.h2`
    text-align: center;
    font-weight: 400;
    color: rgb(216, 132, 46);
`

export const ShortDescDiv = styled.div`
    // display: flex;
`

export const AnchorsUl = styled.ul`
    display: grid;
    margin-top: 1.5rem;
    list-style-type: square;
`

export class View extends Component {
    render() {
        const passedData = this.props.location.state || {
            title: 'default title',
            shortDescription: 'default description',
            image: 'https://via.placeholder.com/350',
            website: 'https://via.placeholder.com',
        }
        const {
            title,
            repository,
            shortDescription,
            image,
            website,
            more,
        } = passedData
        return (
            <Layout>
                <Helmet>
                    <meta charset="utf-8" />
                    <meta
                        name="keywords"
                        content="web development, react, gatsbyjs, google custom search, mongodb, postgresql, nodejs, npm, office 365, dropbox paper, trello, jsx, css in js, styled components, jira, atlassian, git, distributed version control, github, development, production, feature branches, continuous deployment, aws amplify, git integration, css3, html5, audio, video, full stack development, front end development, back end development, automated workflows, aws, netlify, gh pages, heroku, command line, osx, serverless stack, cross browser compatibility, shadow dom, testing, jest testing, html5 canvas, webgl, linting, eslint, prettier, babel, webpack, css modules, sass, node sass, homebrew, responsive design, es6, modern javascript, node security, npm audit fix, snyk"
                    />
                    <title>{`${title} | Inter-Global Media Network, Inc.`}</title>
                    <meta name="repository" content={repository} />
                    <meta name="description" content={shortDescription} />
                    <meta name="image" content={image} />
                    <meta name="website" content={website} />
                    <meta name="more" content={more} />
                </Helmet>
                <ViewDiv>
                    <Link to="/portfolio">&larr; back</Link>

                    <TitleH2Style data-testid="project-title">
                        {title}
                    </TitleH2Style>
                    <img data-testid="project-image" src={image} alt={title} />
                    <ShortDescDiv data-testid="project-shortDesc">
                        {shortDescription}
                    </ShortDescDiv>
                    <AnchorsUl>
                        <li>
                            <a
                                href={more}
                                target="_new"
                                data-testid="project-more"
                            >
                                Read More About {title}
                            </a>
                        </li>
                        <li>
                            <a
                                href={repository}
                                target="_new"
                                data-testid="project-repository"
                            >
                                {title} Source Code
                            </a>
                        </li>
                        <li>
                            <a
                                href={website}
                                target="_new"
                                data-testid="project-website"
                            >
                                {title} Live Site
                            </a>
                        </li>
                    </AnchorsUl>
                </ViewDiv>
            </Layout>
        )
    }
}

export default View

export const viewQuery = graphql`
    query viewQuery {
        site {
            siteMetadata {
                title
                keywords
            }
        }
    }
`
