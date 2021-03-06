/* eslint-disable no-undef */
import React, {Component} from 'react'
import classes from './Search.scss'

class Search extends Component {
    componentDidMount() {
        const myCallback = function() {
            if (document.readyState === 'complete') {
                google.search.cse.element.render({
                    div: 'search',
                    tag: 'search',
                })
            } else {
                google.setOnLoadCallback(() => {
                    google.search.cse.element.render({
                        div: 'search',
                        tag: 'search',
                    })
                }, true)
            }
        }

        window.__gcse = {
            parsetags: 'explicit',
            callback: myCallback,
        }
        ;(function() {
            var cx = '012416285473482070682:wbcp7aypprq'
            var gcse = document.createElement('script')
            gcse.type = 'text/javascript'
            gcse.async = true
            gcse.src = 'https://cse.google.com/cse.js?cx=' + cx
            var s = document.getElementsByTagName('script')[0]
            s.parentNode.insertBefore(gcse, s)
        })()
        console.log(window.__gcse)
    }

    render() {
        return (
            <div id="search" className={classes.Search}>
                <div
                    className="gcse-search-box"
                    data-resultsurl="https://www.interglobalmedianetwork.com"
                    data-newwindow="true"
                    queryparametername="search"
                />
            </div>
        )
    }
}

export default Search
