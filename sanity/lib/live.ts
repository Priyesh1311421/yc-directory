import "server-only"
import { client } from "./client"
import { defineLive } from "next-sanity"

export const {sanityFetch, SanityLive} = defineLive({ client })