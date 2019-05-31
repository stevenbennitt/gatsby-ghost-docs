import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { IntegrationsContent } from '../components/integrations'
import { MetaData, getMetaImageUrls } from '../components/common/meta'

const IntegrationsPage = ({ data, location }) => {
    // Add meta title and description for this page here to overwrite the site meta data as set in the config
    const title = `Integrations – Connect your favourite Tools & Apps to your site`
    const description = `Keep your stack aligned and integrate your most used tools & apps with your Ghost site: automation, analytics, marketing, support and much more! 👉`
    const imageUrl = getMetaImageUrls(`integrations`)

    //const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="website"
                title={title}
                description={description}
                image={imageUrl}
            />
            <IntegrationsContent
                location={location}
            />
        </>
    )
}

export default IntegrationsPage