// used to talk to sanity

import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:"8oev449o",
    dataset: "production"
})