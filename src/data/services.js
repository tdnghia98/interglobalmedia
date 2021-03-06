import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTerminal, faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import {faNodeJs, faJira, faGitSquare} from '@fortawesome/free-brands-svg-icons'

const data = [
    {
        title: 'Full Stack JavaScript',
        shortDescription:
            'Development Tools, Frameworks, and Services Related To Full Stack Javascript',
        path: '/fsjs',
        tags: [
            'atlassian bitbucket',
            ', ',
            'atlassian jira issue & project tracking software',
            ', ',
            'aws amplify',
            ', ',
            'babel',
            ', ',
            'bootstrap',
            ', ',
            'command line',
            ', ',
            'css3',
            ', ',
            'ejs',
            ', ',
            'es6 modules',
            ', ',
            'express',
            ', ',
            'gatsbyjs',
            ', ',
            'git version control',
            ', ',
            'github gh-pages',
            ', ',
            'github source code management',
            ', ',
            'and more',
        ],
        icon: (
            <FontAwesomeIcon
                icon={faNodeJs}
                className="fa-pulse"
                title={`the Nodejs JavaScript run-time environment animated brand icon from fontawesome`}
            />
        ),
    },
    {
        title: 'Development Workflows',
        shortDescription:
            'Development Workflows Related to Full Stack Javascript',
        path: '/dev-workflows',
        tags: [
            'react workflows',
            ', ',
            'vanilla javascript frontend workflows',
            ', ',
            'javascript backend workflows',
            ', ',
            'javascript frontend directory and file structure',
            ', ',
            'javascript backend directory and file structure',
            ', ',
            'and more',
        ],
        icon: (
            <FontAwesomeIcon
                icon={faJira}
                className="fa-pulse"
                title={`The Jira project management tool animated brand icon from fontawesome`}
            />
        ),
    },
    {
        title: 'Git for Developers',
        shortDescription: 'Git Distributed Version Control For Developers',
        path: '/git-for-devs',
        tags: [
            'using the command line with git',
            ', ',
            'initializing the local repository',
            ', ',
            'adding file versions to the staging area',
            ', ',
            'committing file versions to the local repository',
            ', ',
            'pushing file versions to the remote repository',
            ', ',
            'creating the development branch for feature branch merging and local development',
            ', ',
            'creating the staging branch for the remote staging environment',
            ', ',
            'creating feature branches',
            ', ',
            'git stashing',
            ', ',
            'resolving merge conflicts',
            ', ',
            'creating the gh-pages branch on the remote repository for free static site hosting on github',
            ', ',
            'and more',
        ],
        icon: (
            <FontAwesomeIcon
                icon={faGitSquare}
                className="fa-pulse"
                title={`The Git distributed version control system square animated brand icon from fontawesome`}
            />
        ),
    },
    {
        title: 'Git For Non-Developers',
        shortDescription: 'Git Distributed Version Control For Non-Developers',
        path: '/git-for-non-devs',
        tags: [
            'using the command line with git',
            ', ',
            'initializing the local repository',
            ', ',
            'adding file versions to the staging area',
            ', ',
            'committing file versions to the local repository',
            ', ',
            'pushing file versions to the remote repository',
            ', ',
            'creating the development branch for feature branch merging and local development',
            ', ',
            'creating the staging branch for the remote staging environment',
            ', ',
            'creating feature branches',
            ', ',
            'git stashing',
            ', ',
            'resolving merge conflicts',
            ', ',
            'creating the gh-pages branch on the remote repository for free static site hosting on github',
            ', ',
            'and more',
        ],
        icon: (
            <FontAwesomeIcon
                icon={faCodeBranch}
                className="fa-pulse"
                title={`The Git distributed version control system code branch animated solid icon from fontawesome`}
            />
        ),
    },
    {
        id: 5,
        path: '/command-line',
        title: 'The Command Line Interface',
        shortDescription:
            'Getting To Know Your Computer Better via The Command Line Interface (CLI) aka Terminal Program on OSX',
        icon: (
            <FontAwesomeIcon
                icon={faTerminal}
                className="fa-pulse"
                title={`The Command Line Interface animated solid icon from fontawesome`}
            />
        ),
    },
]

export default data
