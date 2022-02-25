import React from "react"

import PoPs from "@adaptivelink/pops"

import AccessibleSVG from "./accessible-svg"

const defaultTitle = "Cloudflare network global map"
const defaultDatacenters = PoPs.cloudflare.geo

const globePathD = "M1669.1 756.9l-.8 2.6 5.6-2.5-.5 2.6-2.1 2.6-4.2 2.9-7 4.5-4.6 2.5-.6 2.9-4 .1-6.2 2.3-4.7 4.1-8.1 6.2-6.3 2.8-4 1.8-4.5-.1-1.5-2.1-5.1-.4 1.1-2.3 6.4-4.6 11.3-6.1 4.3-1.1 5.5-2.4 7-3.2 5.6-3.2 5.9-4.6 3.2-1.6 3.4-3.4 5.8-2.9-.9 2.6zm28.8-30.5l-.4 6.8 2.9-4.4 1.2 1.8-2.3 4.9 2.9 2.1 3.2.5 4.6-2.5 2.1.8-5.1 5.7-4.2 3.8-3.8-.2-2.8 2-1.5 2.7-1.6 1.2-4.5 3.4-5.9 4.2-5.9 2.5.4-1.6-1.4-.9 6.9-5.1.8-3.5-3.7-2.5 1.7-2.4 5.3-2.2 4.2-5 2.4-4.1.6-4.4.9-1.1-.9-2.7-.8-5.7.4-4.6 2.3-.5.8 3.6 3.1 1.7-1.9 5.7zm-120.6-142.6l.5-2.3.1-3.6-1.6-3.2.1-2.7-1.3-.8.1-3.9-1.2-3.2-2.3 2.4-.4 1.8-1.5 3.5-1.8 3.4.6 2.1-1.2 1.3-1.5 4.8.1 3.7-.7 1.8.3 3.1-2.6 5-1.3 3.5-1.7 2.9-1.7 3.4-4.1 2.1-4.9-2.1-.5-2-2.5-1.6h-1.6l-3.3-3.8-2.5-2.2-3.9-2-3.9-3.5-.1-1.8 2.5-3.1 2.1-3.2-.3-2.6 1.9-.2 2.5-2.5 2-3.4-2.2-3.2-1.5 1.2-2-.5-3.5 1.8-3.2-2-1.7.7-4.5-1.6-2.7-2.7-3.5-1.5-3.1.9 3.9 2.1-.3 3.2-4.8 1.2-2.8-.7-3.6 2.2-2.9 3.7.6 1.5-2.7 1.7-3.4 5.1.6 3.5-3.4-.6h-3.5l-2.5-3.8-3.7-2.9-2.8.8-2.6.9-.3 1.6-2.4-.7-.3 1.8-3 1.1-1.7 2.5-3.5 3.1-1.4 4.8-2.3-1.3-2.2 3.1 1.5 3-2.6 1.2-1.4-5.5-4.8 5.4-.8 3.5-.7 2.5-3.8 3.3-2 3.4-3.5 2.8-6.1 1.9-3.1-.2-1.5.6-1.1 1.4-3.5.7-4.7 2.4-1.4-.8-2.6.5-4.6 2.3-3.2 2.7-4.8 2.1-3.1 4.4.4-4.8-3.1 4.6-.1 3.7-1.3 3.2-1.5 1.5-1.3 3.7.9 1.9.1 2 1.6 5-.7 3.3-1-2.5-2.3-1.8.4 5.9-1.7-2.8.1 2.8 1.8 5-.6 5 1.7 2.5-.4 1.9.9 4.1-1.3 3.6-.3 3.6.7 6.5-.7 3.7-2.2 4.4-.6 2.3-1.5 1.5-2.9.8-1.5 3.7 2.4 1.2 4 4.1h3.6l3.8.3 3.3-2.1 3.4-1.8 1.4.3 4.5-3.4 3.8-.3 4.1-.7 4.2 1.2 3.6-.6 4.6-.2 3-2.6 2.3-3.3 5.2-1.5 6.9-3.2 5 .4 6.9-2.1 7.8-2.3 9.8-.6 4 3.1 3.7.2 5.3 3.8-1.6 1.5 1.8 2.4 1.3 4.6-1.6 3.4 2.9 2.6 4.3-5.1 4.3-2.1 6.7-5.5-1.6 4.7-3.4 3.2-2.5 3.7-4.4 3.5 5.2-1.2 4.7-4.4-.9 4.8-3.2 3.1 4.7.8 1.3 2.6-.4 3.3-1.5 4.9 1.4 4 4 1.9 2.8.4 2.4 1 3.5 1.8 7.2-4.7 3.5-1.2-2.7 3.4 2.6 1.1 2.7 2.8 4.7-2.7 3.8-2.5 6.3-2.7 6-.2 4.2-2.3.9-2 3-4.5 3.9-4.8 3.6-3.2 4.4-5.6 3.3-3.1 4.4-5 5.4-3.1 5-5.8 3.1-4.5 1.4-3.6 3.8-5.7 2.1-2.9 2.5-5.7-.7-5.4 1.7-3.9 1.1-3.7V657l-2.8-5.1-1.9-2.5-2.9-3.9.7-6.7-1.5 1-1.6-2.8-2.5 1.4-.6-6.9-2.2-4 1-1.5-3.1-2.8-3.2-3-5.3-3.3-.9-4.3 1.3-3.3-.4-5.5-1.3-.7-.2-3.2-.2-5.5 1.1-2.8-2.3-2.5-1.4-2.7-3.9 2.4-1.2-5zm-829.5-428l.7 4.3-3.9 5.4-8.7 3.6-6.7-.9 4.2-6.4-2.1-6.1 6.7-4.7 3.7-2.8 3.9-.3 4.9 3.7-2.7 4.2zm635.6 224.7l-4.9-2-1-5.5 2.2-2.8 5.8-1.8 3.2.1 1.6 2.5-2 2.8-.6 3.6-4.3 3.1zm66.6 181l-7-4.4 5.3-1.3 2.8 2 1.8 1.9-.5 1.7-2.4.1zm26.9-8.7l.8-1.5 4.9-1.4 4-.2 1.8-.8 2 .8-2.2 1.7-6 2.8-4.9 1.8-4 4.8-5 1.4-.6-.8.7-2.1 2.8-3.9 5.7-2.6zm-37.3-3.3l3.5-.6 1.2 2.8-6.6 1.2-3.9.9-3-.1 2.2-3.6 3.1-.1 1.6-2.2 1.9 1.7zm26.2-1.7l-1.1 3.5-8.6 1.8-7.4-.8.2-2.3 4.5-1.3 3.4 1.9 3.8-.5 5.2-2.3zM1397 540l1.3-2.6 10.3 3.1 1.8 4.1 8.3 1.1 6.6 3.8-6.6 2.4-5.9-2.5-5.1.2-5.8-.5-5.2-1.2-6.3-2.4-4.1-.6-2.4.8-10-2.6-.8-2.8-5.1-.4 4.1-6.1 6.8.4 4.4 2.4 2.3.5.7 2.3 10.7.6zm132.7.1l-.3-4.8 1.2-2.2 1.3-2.2 1.2 1.9-.2 3-3.2 4.3zm-37.8-21.8l-2.2 2.1-3.9-1.2-1-2.7 5.7-.3 1.4 2.1zm20 2.5l-4.7-2.6-4.6-.5-3.2.4-3.9-.2 1.5-3.5 6.9-.3 6.1 1.8 1.9 4.9zm-35.3-27.3l-4.3 1.3-5.4-1.3-9.3.3-4.9 1-.9 4.8 5 5.6 3.1-2.9 10.5-2.1-.5 2.9-2.4-.9-2.6 3.7-5 2.5 5.1 8.1-1.1 2.2 4.7 7.4-.3 4.1-3.1 1.9-2.1-2.2 3-5.2-5.6 2.4-1.3-1.7.8-2.5-3.9-3.7.7-6.2-3.8 1.9.2 7.4-.3 9.1-3.6 1-2.3-1.9 1.9-5.9-.6-6.1-2.3-.1-1.6-4.3 2.4-4.2.9-5 2.9-9.6 1.2-2.6 4.7-4.8 4.4 1.9 7.1.9 6.5-.3 5.5-4.6 1 1.4-4.4 6.3zm23.6 1.1l-2.9-.6-.9 3.9 2.3 3.3-1.6.8-2.2-4-1.7-8.2 1-5.1 1.8-2.3.5 3.5 3.3.6.6 2.6-.2 5.5zm-106.8-11.1l4.1 2.2 4.4-1.2.9-5.4 2.4-1.2 6.7-1.4 3.8-5 2.6-4 2.1-2.4 4.6-3.5 4.1-4.4 2.5-5h2.3l3.1 3.2.4 2.8 3.8 1.7 4.8 2-.3 2.4-3.8.4 1.2 3.1-4 2.1-3 5.8 4.3 6-.9 2.9 6.5 5.9-6.7.8-1.8 4.3.2 5.8-5.5 4.3-.3 6.4-2.5 9.7-.8-2.3-6.5 2.9-2-3.9-4-.4-2.8-2-6.7 2.3-2-3.1-3.6.4-4.6-.8-.7-8.5-2.8-1.8-2.6-5.4-.8-5.6.6-5.9 3.3-4.2zm-28.8 50.1l-4.5-5.3-7-5.2-2.2-3.8-4.1-5.2-2.7-4.8-4.1-8.9-4.9-5.3-1.7-5.5-2.2-4.9-5.1-4-3.1-5.5-4.4-3.6-6.1-7-.6-3.2 3.6.3 8.8 1.2 5.2 6.2 4.5 4.3 3.2 2.7 5.5 6.8 5.7.1 4.8 4.4 3.3 5.3 4.3 2.9-2.3 5.2 3.2 2.2 2 .2.9 4.4 1.9 3.6 4.1.5 2.6 4-1.7 8-.7 9.8-6.2.1zm-136.7-75.3l-2.8-5.1-1.4-9.1 1.9-10.3 4.1 3.5 2.9 4.5 3 6.6-.6 6.6-2.3 1.8-4.8 1.5zM1005.4 60.1l-13.4-.7-2.2-2.3-7.9-1.4-1.9-2.8 3.4-1.1-1.6-2.8 5.4-4.3-3.9-.7 6.6-4.4-2.5-2.2 6.8-2.7 10.1-3.1 11.7-.9 4.9-1.8 6.6-.6 4.2 1.9-1.3 1.5-11.3 2.4-9.8 2.4-8.6 4.7-2.8 5-3.3 4.9 3.1 4.3 9.9 4.3-2.2.4zm482.4 125.6l-8.9-2 3.7 9 9.5 6.3 3 4.4-6.5-3.8.1 4.8-4.6-5.2-3.8-6-5.5-6.8-2.4-4.6-6.4-8.3-7.8-6-6.8-8.3 1.9-2.8-4.4-2.8 1.3-.8 4.9 4 6.8 5.8 5.1 6 7.2 6.2 13.6 10.9zM834 150.2l-5.1-3.4-.9-2.5 6.7-2 1.7 3-2.4 4.9zm-75.5-16.5l4.7-.8h5l-1.3 4.9-4.2 5.3 4.8.4.4.6 4.1 7.1 3.2 1 2.9 6.9 1.3 2.3 5.8 1.2-.5 3.9-2.4 1.8 1.9 3.1-4.3 3.3-6.5-.1-8.3 1.7-2.2-1.2-3.3 2.9-4.5-.7-3.5 2.3-2.5-1.2 7.3-6.5 4.3-1.3-7.5-1-1.3-2.4 5.1-1.9-2.6-3.3 1-4 7.1.6.8-3.5-3.1-3.8-5.8-1.1-1-1.6 1.7-2.7-1.4-1.6-2.6 2.8-.1-5.8-2.2-3 1.9-6.1 3.7-4.8 3.6.4 5.5-.5-5 6.4zm69.4 104.5l-.4 8.4-2.4-.4-2 2.1-2.1-1.7-.4-7.6-1.3-3.6 2.8.3 2.5-1.9 3.3 4.4zm38.8-214.3l-7.6 2-6.7-1.1 2.2-1.2-2.6-1.5 7.2-.9 1.9 1.7 5.6 1zm-12.9-5l-8.5 1.8-1.2 3.4-3 .9-.9 3.9-4.4.2-8.4-2.9 3-1.7-5.7-1.4-7.6-3.8-3.2-3.5 9.3-1.6 2.2 1.5h5l1-1.5 5.1-.2 4.8 1.6 12.5 3.3zm19-4.9l-4.3 2.4-10.1.5-10.6-.7-.9-1.3h-5.1l-4.3-2 10.4-1.2 5.3 1 3.2-1.2 9.1 1 7.3 1.5zm-48.1 218.7l-2.4-1.2-1.4-4.2 1-2.3 3.2-2.3 1.1 5.2-1.5 4.8zm-442.8 137l4.4.1 3.1 1.6 1.4-.1.8 2.2 3-.1-.3 1.9 2.4.2 2.5 2.3-2.3 2.6-2.5-1.3-2.6.2-1.8-.3-1.1 1.2-2.2.4-.6-1.6-2 .9-2.6 4.4-1.4-1v-1.8l-3.6-1.1-2.7.4-3.3-.4-2.7 1.1-2.8-1.9.7-2.1 5 .9 4.2.5 2.1-1.4-2.2-2.8.3-2.4-3.4-1 1.4-1.7 3.4.2 4.6 1 .8-1.1zM714.8 86.3l4.4 3.8-6.1 4.2-12.9 3.9-3.9 1-5.6-.8-11.7-1.8 4.6-2.5-8.8-2.7 7.8-1.1.1-1.6-8.7-1.3 3.6-3.7 6.5-.8 5.9 3.8 6.9-3 5.1 1.5 7.3-2.9 6.9.4-1.4 3.6zM349.4 383.6l-3-1-2.9-2.3.8-1.5 2.4-.4 1.2.2 3.7.6 2.7 1.5.8 1.8-3.9.1-1.8 1zm707.3 206.6l1.3 2.9-.8 3.1-1.1 1.9-1.6-3.8-1.2 1.9.8 4.7-.7 2.7-1.6 1.5-.8 5.4-2.7 7.4-3.3 8.8-4.3 12-2.8 8.9-3.1 7.4-4.6 1.5-5 2.7-3-1.7-4.2-2.3-1.2-3.3.1-5.7-1.6-5-.2-4.6 1.3-4.6 2.6-1.1.2-2.1 2.9-4.8.8-4.1-1.1-3-.8-4-.1-5.9 2.2-3.5 1-4.1 2.8-.2 3.1-1.3 2.2-1.2h2.4l3.4-3.7 4.8-3.9 1.8-3.2-.6-2.7 2.3.8 3.3-4.5.3-3.8 2-2.8 1.8 2.7 1.4 2.7 1.1 4.2.5 7.7zM341.4 353.8l5.2-.8 1.8 1.5 4.2 4 3 2.8h1.9l3.1 1.3-.6 1.7 4 .3 3.9 2.6-.8 1.5-3.8.8-3.7.3-3.8-.5-7.9.6 4.1-3.5-2.1-1.7-3.5-.4-1.7-1.8-.8-3.6-3.2.2-4.9-1.7-1.5-1.3-7-1-1.8-1.3 2.3-1.6-5.4-.3-4.4 3.3-2.3.1-.9 1.6-2.9.7-2.2-.6 3.1-2 1.5-2.3 2.7-1.4 3-1.3 4.2-.6 1.4-.7 4.7.5 4.3.1 4.9 2.1 1.9 2.4zm37.1 69l-3.3.8 1.7 2.9-.3 3.3-2.7 3.7 1.9 5 2.4-.4 1.5-4.6-1.6-2.2v-4.8l7.1-2.6-.6-3 2.1-2 1.7 4.5 3.9.1 3.5 3.5.1 2.1 5 .1 6-.7 3.1 2.9 4.2.7 3.2-1.9.2-1.6 6.9-.4 6.7-.1-4.8 1.9 1.8 3 4.4.4 4.1 3.2.7 5.1 2.9-.2 2.2 1.5 3.6 2.4 3.3 4.1.1 3.3 2.1.1 2.9 3.1 2.1 2.3 6.7 1.3.6-1.1 4.6-.5 6 1.7 1.9.7 4.1 1.5 5.8 5.4.9 2.5 1.9-.3 1.3 3.5 3 11.2 3 1 .1 4.4-4.2 5.2 1.7 2 9.9 1 .3 6.3 4.2-4.1 7.1 2.3 9.4 3.8 2.7 3.8-.8 3.5 6.5-2 10.9 3.4 8.4-.3 8.4 5.3 7.3 7.1 4.3 1.9 4.8.2 2.1 2 2 8.1 1 3.9-2 10.5-2.7 4.2-7.7 8.8-3.3 7.2-3.9 5.5-1.4.1-1.4 4.7 1 11.9-1.1 9.9-.3 4.1-1.6 2.6-.5 8.5-5.1 8.3-.6 6.5-4.2 2.8-1.1 3.8h-5.9l-8.5 2.4-3.6 2.9-6 1.8-6 5.1-4.1 6.3-.3 4.8 1.3 3.5-.3 6.4-.8 3.1-3.4 3.5-4.5 11.2-3.9 5-3.2 3-1.5 6-2.9 3.7-2.6 4.2-3.2 1.4-2.4 1.3h-6.4l-8.8-2.7-3.3-3.3.3 3.3 7.8 5.5.1 4.5 3.9 2.8.3 3.2-3.3 8.3-6.9 3.4-10.2 1.3-5.8-.6 2 3.8.1 4.8 1.8 3.1-2.5 2.2-5 .9-5.6-2.3-1.5 1.6 2.5 6.2 4 1.9 2.2-2 2.5 3.2-4.1 1.9-2.9 3.9 1.2 6.1-.2 3.3-4.7.1-2.9 3.1.1 4.7 6.4 4.5 5.2 1.3.2 5.6-4.7 3.5-.5 7.2-3.5 2.5-.9 2.9 4.1 6.3 4.7 3.6-2.2-.4h-4.2l-1.7 1.5-3.4 2.2 3.1 4.3-.2-4.1 3.3-2.5 3.7.7 2.3 2.8 4.3 4.6 7.7 3.6 7.3 1.5-.9 3-4.3.3-2.7-1.7-.4 2-3.2 1.8-2.3-.1-3-.5-4.3-1.8-5.3-.9-7.5-3.4-6.3-3.2-9.7-6.8-2.9-3.5-3.3-3.8-.2-3.6-4.2-4.1-5-10.6-.2-6 3.4-4.8-8.2-1.8 2.7-5.5-2-10.2-1.8-5.4-1.5-8.8-1.9-11.6 1.1-4.3-3.3-6.3-2.4-7.3 2.1-.2.6-10.5 1.2-10.2.1-9.5-3.2-9.5.5-5.3-2.1-7.8 1.9-7.8-.9-12.3v-13.2l.1-14.2-1.5-10.4-2.1-9-5.9-3.7-.7-2.6-11.6-6.4-10.7-6.9-4.6-3.9-2.8-5.3.8-1.8-5.4-8.4-6.2-11.7-6-12.7-2.4-2.9-2-4.7-4.5-4.1-4.1-2.6 1.7-2.8-3-6.1 1.6-4.5 4.4-4 2.9-4.7-1.3-2.8-2.1 2.9-3.4-2.7 1.1-1.8-1-5.8 1.9-1 1-3.9 2.2-4.1-.4-2.6 3.1-1.4 3.9-2.5-.8-2 2.1-.5-.2-3.2 1.4-2.3 2.8-.4 2.5-4 2.2-3.3-2-1.5 1.2-3.7-1.1-5.9 1.2-1.6-.6-5.4-2.2-3.4.9-3.1 1.8.5 1.1-1.9-1.1-3.8.7-.9 2.9.2 4.4-4.4 2.4-.7.1-2.1 1.4-5.4 3.3-3 3.6-.1.5-1.3 4.3.5 4.6-3.2 2.3-1.4 2.9-3.1 2 .4 1.3 1.7-1.2 2.1-.3 1.5zm81-222l3.4.8 4.7-.1-3.3 2.5-1.9.4-5.6-2.6-.5-2.1 2.5-1.9.7 3zm14.4-15.9l-2.5.1-5.7-1.9-3.5-2.9 1.9-.6 5.9 1.6 4.1 2.6-.2 1.1zm-305.3 3.7l-3 .9-6.3-2.8v-2.2l-2.9-2.2.4-1.8-4.3-1.1.6-3.3 1.4-1.5 4.1 1.4 2.4.9 4.1.7.1 2.1.4 2.9 3.2 2.6-.2 3.4zm336.1-13.5l-4.9 5.4 3.8-2 2.9 1.3-2.4 2.1 3.9 1.7 2.7-1.5 4.3 1.9-2.8 4.6 3.7-1.1-.3 3.3.5 3.9-3.5 5.5-2.3.2-3-1.2 2.5-5.1-1.2-.8-7.3 5.4-2.9-.2 4.4-2.9-4.4-1.5-5.4.3-9.6-.1-.2-1.9 3.8-2.2-1.6-1.7 5.3-3.7 8.1-9.8 4.2-3.5 4.9-2.2 2.1.3-1.4 1.7-3.9 3.8zm-356.8-21.2l1.6.8 4.9-.5-7.1 6.9.2 4.9h-1.9l-.7-2.8.6-2.8-.9-1.9 1.4-2.6 1.9-2zm280.9-47l-3.5 3-1.7-.5-.1-1.7.4-.4 2.8-1.7 1.7.1.4 1.2zm-9.6-3.2l-7.1 3.2-3-.2v-1.5l4.9-2.7 6 .1-.8 1.1zm-3.1-16.6l-.9 2.5 2.8-.9 1.5 1.5 3.4 1.9 3.7 1.7-1.3 2.7 3.4-.4 1.9 1.8-4.9 1.8-5.9-1.3-.8-2.6-6.2 3-8.2 3 .8-3.4-6.3.6 5.7-2.8 3.6-4.4 5-5.2 2.7.5zm44.6-8.2l-4.9.2.7-2.6 3.8-3.1 4.2-.7 2.3 1.5-1.4 2.3-1 .7-3.7 1.7zm-73.8-10.7l-4.2 1.9-4.1-1.6-3.8.6-3.5-2.4 5-1.7 4.9-2.3 3 1.5 1.6 1 .3 1 .8 2zm-53.1-21l-4.7 2.4 10.4-1.5 2.6 2.6 7.3-2.7 1.7 1.7-2.2 5.1 4.3-2.1 2.8-5.3 4.2-.8 3 .9 2.2 2-2.7 5.1-2.4 3.6 4.2 2.6 5 2.5-2.6 2.4-7 .4.7 2.1-3.1 1.9-6.7-.8-5.7-1.5-5 .4-9.4 1.8-11.2.8-7.8.5.3-2.5-4.1-1.5-4.2.6-.6-4.2 3.3-.6 7.1-.9 5.5.3 6.2-1-6.5-1.2-9 .4-5.6-.1v-1.9l11.5-2.1-6.2.1-5.4-1.4 7.8-3.9 5.1-2 14.1-3.2 2.8 1zm39.1-1.5l-7 3.4-2.2-3.6 2.1-.7 5.4-.2 1.7 1.1zm107.7 1.6l-.7 1.4-8.2-.2-4.8.7-.9-.3-2-2.8 1.7-1.8 2.1-.3 8.4.5 4.4 2.8zm-39.4-.3l.3 3.2 7.1-4.1 11.6-2.1 2.3 5.3-3.3 3.4 9-1.5 5.2-2.1 6.8 2.6 3.6 2.5-1.1 2.3 8.2-1.2 1.9 3.3 8.3 2.1 2.2 2.1.8 5-9 2.5 7.7 3.5 5.9 1.2 3.2 5.1 6.4.3-3.3 3.9-10.7 6.5-4-2.4-3.8-5.4-5.8.7-2.3 3.2 2.7 3.3 4.4 2.5 1 1.5v5.6l-3.6 4.1-4.7-1.5-8.5-4.6 3.5 4.9 2.8 3.5-.3 2-10.7-2.3-7.6-3.3-3.8-2.8 2.4-1.6-4.7-2.9-4.7-2.7-.9 1.6-13 .9-2.4-1.9 5.4-4.2 8-.1 9.2-.7-.2-2 3.2-2.7 8.6-5.4.4-2.4-.5-1.9-4.6-2.6-7.1-1.8 3.5-1.4-2-3.3-3.3-.3-2-1.8-3.2 1.6-7.9.6-13.8-1.2-7.3-1.5-5.9-.8-1.8-1.9 6.1-2.3-5.6-.1 3.3-5.2 7.1-4.6 5.8-2.1 11.2-1.3-5.7 3.2zm-50-3.4l3.5 1 7.5-.6-.5 1.5-6 2.4 3.8 2.2-5.1 4.7-8.4 2-3.4-.5-.9-2-5.8-3.9 1.7-1.7 7.4.7-.9-3.4 7.1-2.4zm22.3 5.4l-7.7 3.9-4.3-.2 1.8-4.5 2.5-2.6 4.2-2.1 5.2-1.4 7.8.2 6.1 1.2-10 4.5-5.6 1zm-114.7 7.2l-13.4 2.5.6-2.3-5.9-2.7 4.3-2.2 7.4-3.8 7.6-3.3.3-3.1 14-.8 4.1 1.1 9.4.2 1.9 1.5 1.6 2.1-6.4 1.3-13.8 3.6-9.1 3.6-2.6 2.3zm124.1-18.3l-4.1 1.9-5.1-.4-3.2-1.3 4.4-2.2 6.9-1.3 1.4 1.7-.3 1.6zm-8.7-8.6l.2 2.3-2.8 2.5-5.8 3.7-6.8.5-3.2-.8 3.4-2.9-6.6.4 4.3-3.8 3.8.1 7.6-1.6 4.8.3 1.1-.7zm-39.1 2.5l-.7 1.8 4.3-.8 3.7.2-2.3 2.4-5.1 2.3-13.8.8-12.2 2.2-5.9.1 1.5-1.6 10.6-2.2-17.8.5-4.1-.8 11.6-4.8 5.4-1.4 8.2 1.6 2.8 2.9 6.1.4.7-4.7 5.7-1.7 3.1.5-1.8 2.3zm55.2-4.3l2.3 1.6 7.3-.1 1.4 1.6-2.8 1.9 3.1 1.1 1.2 1.1 4.8.3 5.1.4 7-1.1 8-.4 5.8.3 2.3 1.9-1 2-3.5 1.4-6.7 1-4.3-.6-11.6.8-8 .1-5.5-.6-8.5-1.6 1.5-2.8 2.2-2.4-1.4-2.1-7-.6-2.6-1.5 3.8-2 7.1.3zm-75-2.6l-5.8 3.7-5.2 1.6-3.8.3-9.8 2.1-7 .7-3.6-1 11.6-3.7 12.1-3.1 5.5.1 6-.7zm80.5.6l-1.9.1-6.4-.3.6-1.3 7.2.1 1.5.9-1 .5zm-58.4-.8l-8.6 1.3-3.3-1.5 5.1-1.5 5.9-.5 4.1.8-3.2 1.4zm7.8-4.2l-5.6.9h-6l1-.7 5.7-1.3 1.6.2 3.3.9zm46.4 2.5l-6.6 1-1.6-1.1.7-1.8 2.1-1.8 4.4.1 1.7.3 2.3 1.6-3 1.7zm-13.7-1.2l-1.1 1.9-5.2-.5-4-1.5-7.7-.2 5.3-1.4-2.8-1.1 2.1-1.7 6.1.6 7.4 1.7-.1 2.2zm53.7-6.1l2.6 1.5-6.4 1.3-10.5 3.4-6.8.4-6.7-.6-1.6-1.9 2.1-1.6 4.3-1.2h-6.5l-2-1.5.3-1.9 4.9-1.9 4.1-1.3 3.9-.3-.3-.9 8.2-.2 1.6 2.2 4.7.9 4.7.8-.6 2.8z M550.1 1.9l8.5.3 6.7.4 5.2 1-1.1 1.1-9.7 1.6-9 .8-3.9.9h7.4l-10.3 2.5-6.8 1.1-9.3 3.5-7.9.8-3.2.9-11.1.4 4.3.6-3.3.8.8 2.2-5 1.6-6.8 1.3-3.6 1.9-6.5 1.4-.5 1.1 6.4-.2-1 1.1-12.6 3-8.4-1.4-11.7.8-4.9-.6-6.7-.3 2-2.3 8-1.1 2-3.4 2.5-.3 7.5 2-1.7-3-4.8-.9 4.9-1.7 7.5-1.1 2.8-1.6-3-1.7 1.1-2.2 9.3.2 2.2.4 7.2-1.5-7.2-.5-12.4.3-4.4-1.5-.8-1.6-2.5-1.2 1.1-1.3 6-.8 4.1-.1 7.4-.6 6.7-1.4 3.9.2 2.3 1 5-2 5.1-.6 6.4-.4 10.3-.2 1.4.4 10.2-.6 6.9.3 7 .2z M687.9.4l19.7 2.9-6.6 1.4-12.9.2-18.3.4 1.4.7 12.1-.5 9.7 1.4 7-1.2 2.3 1.4-4.5 2.3 9.2-1.5 16.9-1.5 10 .8 1.6 1.7-14.6 2.9-2.2 1-11.3.7 8 .2-4.9 3.2-3.6 2.9-1.1 5.1 3.6 3.2-5.8.1-6.4 1.6 6.2 2.5-.1 4.2-4.1.5 4 4.3-8.6.3 4 2.1-1.7 1.8-5.6.8h-5.4l4.1 3.4-.5 2.3-7.2-2.1-2.4 1.4 5 1.3 4.5 3.1.6 4.3-7.3 1-2.7-2.1-4.2-3 .5 3.6-5.3 2.8 10.6.2 5.5.3-11.9 4.6-12.1 4.3-12.5 1.8-4.6.1-4.8 2.1-7.4 5.7-10.2 3.9-3 .2-6.1 1.4-6.5 1.3-4.7 3.5-1.4 3.9-3.3 3.7-8.6 4.6.3 4.4-3.5 4.8-4.1 5.7-6.5.3-5-4.7h-8.9l-3.1-3.2-.8-5.6-4.8-7.1-.7-3.7 1.5-5-3.7-5.2 3.4-4-2-2 7-6.3 7.1-2 2.6-2.3 2.8-4.2-5.5 1.9-2.6.8-4 .8-4.2-1.8 1.5-3.6 3-2.8h3.8l7.5 1.4-5.3-3.4-2.6-1.8-4.4.8-2.6-1.3 7-4.8-1.4-1.9-1-3.6-1.4-5.3-3.6-1.9 1.4-2.1-8-2.9-7.6-.3-10.1.2-9.4.3-3-1.5-3.8-3.1 10.9-1.5 7.5-.2-14.5-1.2-6.4-2 2.2-1.7 15.5-2.2 14.9-2.2 2.8-1.6-8.1-1.5 4.6-1.7 14.6-2.9 5.3-.5.2-1.8 8.9-1 10.9-.6H595l2.7 1.2 10.6-2.1 7 1.4 4.5.3 6.2 1.3-6.7-2.1 1.6-1.7 12.7-2.1 11.5.1 5-1.3 11.8-.3 26 .4zM1493 279l1.6 2.2-1.3 3.9-3.1-2.1-2.1 1.5.1 3.7-4.2-1.8-1.2-3 1.3-3.8 3.3.8 1.1-2.7 4.5 1.3zm24.4-19.3l.6 5.2 2.5 3.2-.6 4.6-5.4 3-9.1.4-4.4 7.3-4.6-2.4-2.4-4.8-8.6 1.4-5 3-6.1.1 7.3 4.7.8 10.8-2.5 2.7-3.5-2.5-.9-5.7-4.1-1.9-4-4.3 4.3-2 1.1-4 3.9-3.3 1.9-4.4 9.6-1.9 6.3 1.3v-11.5l5 3.1 4.5-6.5 1.7-2.5-1-7.9-5.1-7.1-.2-3.9 4.8-1.2 8.1 8.7 2.8 5.2-1.3 6.4 3.6 6.7zm-11.8-44.2l4.5 1.3 1.7-2.6 6 6.9-6.4 1.7-.4 6.1-10.8-4.2 1.6 6.8h-5.7l-4.6-6.1-.6-4.7 5.2-.4-4.3-8.5-1.9-4.8 10.4 6.4 5.3 2.1zm-20.5 227.2l.8 4.3.6 3.5-1.5 5.8-2.5-6.4-2.4 3.2 2.1 4.7-1.4 3-6.8-3.7-1.9-4.6 1.5-3.1-3.8-3-1.5 2.7-2.7-.3-3.9 3.6-1.1-1.9 1.9-5.4 3.4-1.7 2.8-2.4 2.2 2.8 4.2-1.7.7-2.8 3.9-.2-.8-4.9 4.8 3 .8 3.2.6 2.3zm-14.5-11.8l-1.8 2.1-1.4 4-1.6 1.9-3.8-4.4 1-1.7 1.2-1.8.3-4 3-.3-.5 4.2 3.6-6.1v6.1zm-30.1 6.1l-7 6 2.4-4.4 3.8-4 2.9-4.4 2.4-6.3 1.5 5.2-3.4 3.5-2.6 4.4zm17.4-16.4l3.5 2h3.6l.2 2.6-2.4 2.7-3.3 1.9-.5-2.9.1-3.3-1.2-3zm20-1.7l2.3 7.1-4.5-1.7.4 2.1 1.7 4-2.5 1.4-.7-4.5-1.7-.3-1.2-3.9 3.3.5-.3-2.4-4-4.8 5.4.1 1.8 2.4zm-22.9-5.8l-.8 5.5-2.8-3.2-3.4-4.8 4.8.2 2.2 2.3zm-6.4-34.6l3.7 1.8 1.5-1.6.7 1.6-.4 2.6 2.7 4.6-.6 5.3-3 2.1-.1 5.1 2 5.1 3.1.7 2.3-.8 7.5 3.6-.1 3.4 2 1.6-.2 2.9-4.8-3.1-2.5-3.4-1.1 2.4-4-3.8-5 .9-2.9-1.4-.1-2.6 1.5-1.7-1.8-1.4-.4 2.3-3.3-3.7-1.2-2.8-1.2-6 2.6 2-1.1-9.9.9-5.8h3.3zm202.6 161.2l-1.6.6-2.2-2.5-2.2-4-.9-4.8.8-.7.5 1.9 1.6 1.5 2.5 4 2.4 2.2-.9 1.8zm-21.2-8.6l-3 .5-1 1.8-6.2 3.1h-2.9l-4.5-1.9-3.1-1.8.6-1.9 5 .9 3.1-.5 1-3.1.8-.1.4 3.4 3.2-.5 1.7-2.2 3.3-2.3-.4-3.7 3.4-.1 1.1 1-.4 3.5-2.1 3.9zm6.9-6.2l-1.9 1.7-.8-3.8-1.2-2.4-2.4-2.1-3.1-2.7-3.9-1.9 1.6-1.5 2.9 1.8 1.9 1.4 2.3 1.5 2.1 2.6 2 2.1.5 3.3zm-194.1-173.6l-1.3 5.2-4-5.4-1.5-4.7 1.9-6.3 3.3-4.8 2.9 1.9-.1 3.9-1.2 10.2zm126.5 161.5l9.6 4.4 10.2 3.6 3.7 3.3 2.9 3.2.6 3.7 9.1 4 1.1 3.3-5.2.7.9 4.3 4.7 4.1 3 6.8 3.2-.2-.5 2.8 4.2 1.1-1.8 1.2 5.6 2.7-.8 1.8-3.8.4-1.1-1.6-4.8-.7-5.5-1-3.9-4-2.9-3.5-2.4-5.6-7-2.8-4.9 1.8-3.6 2.1.3 4.7-4.6 2.2-3.1-1.1-5.7-.2-4.6-5.2-5.5-1.3-1.6 1.8-7.1.2 2.8-5.2 3.7-1.8-1-6.9-2.3-5.3-10.6-5.4-4.6-.5-8.2-5.9-1.8 3.1-2.1.5-1.2-2.3.1-2.8-4.2-3.1 6.2-2.3 4 .1-.4-1.6-8.3-.1-2.1-3.7-5-1.2-2.3-3.2 7.6-1.5 2.9-2.1 9 2.6.8 2.4 1.3 10.3 5.7 3.8 4.9-6.8 6.6-3.8h5l4.7 2.2 4.1 2.3 6 1.2zM439.5 211.6l-6.3 3-6 2.1-5.9 1.8-3.9 3.7-1.4 1.3-1.1 3.3.6 3.3 2.1.1.2-2.2 1.1 1.4-1 1.7-3.8 1-2.4-.1-4.1 1.1-2.4.3-3.1.3-4.8 1.8 7.9-1.2 1.1 1.2-7.8 1.9h-3.3l-1.7 1-1.1 4.8-5.2 4.9.1-1.6-2.3-2 .1 3.5.9 1.1-.6 2.5-2.4 2.5-4.4 5.1 2.5-4.6-2-2.5 1-5.3-1.9 2.7v4.1l-3.2-1 3 2.1-1.5 6.2 1.3 2.6-.9 6.5-4.6 4.8-6 1.9-4.4 3.8-2.8.4-3.3 2.3-1.3 2.2-6.9 4.1-3.7 3-3.5 3.8-1.8 4.5-.1 4.4.7 5.4 1.5 4.5-.5 2.7 1.2 7.4-.9 4.3-.7 2.5-2 3.9-1.7.8-2.6-.8-.4-2.8-1.8-1.4-2-5.5-1.6-4.9-.4-2.5 2-4.2-.8-3.5-3-5.3-1.9-1-6.1 2.9-2.9-3.3-3-1.5-6.2.8-4.7-.7-4.2.4-2.4 1 .5 1.7-.7 2.5.9 1.3-1.3.8-1.7-.9-2.4 1.2-3.8-.2-3.3-3.4-4.9.8-3.5-1.4-3.5.4-4.9 1.5-6.1 4.7-6 2.7-3.7 3.1-1.9 2.8-1 4.4-.4 3.1.6 2.2-3.1 5.6-1.8 4.5-1.8 8.6-1.1 3.1.5 3.4 1.2 3.1.4 5 3 4.7.7 3.6 1.8 3.2 5.6 1.7 1.9 2.6 5.1-1.8 4.3-.6 4.3-1.1 3.6-1.1 3.9-2.6 1.8-3.7 1.2-5.4 1.2-1.8 4-1.7 6-1.5 4.8.2 3.4-.5 1.2 1.3-.6 3.1-3.5 3.8-1.8 3.9.9 1.1-1.2 2.7-2 5-1.4-.6-.3 1.8-1.3 2.7-.5 3.3-.7 3.8-1.3 1.7-2.4 2.4 1.7 1.1 2.1-.1 1.9-.9 1.6-.1 3.9.8 2.6-.2 1.8-.7 2.5-.3 2.8.2 3.6.4 2.4 1.3 1.5 1.4 1.9 1 1.3 1.8-1 2 .3 2.3-1.4 2.2-.9 2.5-.4 2.8.2 1.7-.1 2.8-1.6 3.4.2 1.7-1.2 1.6.1 1.7.8 1.1 1.2 3.4 2 2.6 2.4 2.7 1.9 2.3-.2 1.3 2.3.3 2 1.1 2.7-.5 2.5-1.6 3.5-1.3 2-1.9 3.1.4 2.8.8 2.5 1.1 1.7 1.9 2 1.8.4 4.7-1.1 1.9-1.8-.5-.9 3.1-1.8-1.8-1-3.5 1.5-1.7-2.4-2.5-2.7-1.8-2.5.4-1.2 2.2-2.3 1.6-1.9 1.6 2.5 3.4-1.5.9-3.5 1.2-.8-3.8-.8 1.1-1.8-.4-1-2.5-2.3-.5-1.4-.7h-2.4l-.3 1.4-3.5-2.4-1.1-1.3.7-1.1-.1-1.4-1.5-1.5-2.1-1.3-1.9-.8-.3-1.9-1.4-1.1.3 1.8-1.2 1.6-1.2-1.8-1.7-.6-.7-1.3.1-2 .9-2-1.5-.9 1.4-1.2-1.8-2-2.5-2.6-1-2.1-2.2-2-2.6-2.9h1.6l-.3-2.4-1.7-.6-.7 1.5-3.3-.1-1.9-.6-2.2-1.3-3.1-.4-1.4-1.3-2.8-1.1-3.4-.1-2.5-1.3-2.7-2.6-5.5-6.9-2.6-2.1-4.4-1.6-3.1.4-4.8 2.4-2.9.7-3.7-1.7-4-1.2-4.8-2.9-4-.9-5.9-3-4.2-3-1.2-1.7-3-.4-5.4-2-1.9-2.9-5.3-3.6-2.2-4-.8-3.1 1.9-.7-.3-1.8 1.6-1.6.3-2.2-1.4-2.9v-2.5l-1.3-3.2-3.8-6.4-4.5-4.9-1.9-4-4.1-2.6-.7-1.5 1.8-4-2.5-1.5-2.4-3.1-.3-4.4-2.7-.5-2.3-3.4-1.7-3.1.4-2-1.5-4.7-.4-4.9.9-2.4-3.1-2.5-1.9.2-2.4-1.7-1.8 2.6-.1 3-1 4.8 1.1 2.6 2.7 4.4.4 1.4.8 2.7 1 4 1.2 1.6.6 2.3 2.6 3.2.5 5.9 1 2.8.9 3-.4 3.4 2.6.2 1.6 2.9 1.5 2.8-.4 1.2-2.7 2.3-1.7-3.9-2.9-3.6-3.3-3.1-2.5-1.6 1.2-4.7-.1-3.4-2.1-2-3.1-2.9-1.9-.8-2.9-1.5-2.3-3.7 2.7-.2 2.7-2.3 1-2.9-2.9-4.5-2.6-1.8-.8-4-.7-4.1-.7-5.1-.2-5.7.3-3.2-2.1-3.7-2.2-.7.1-1.9-2.8-.3-1.3-1.7-4.6-.7-1-1 .8-3.5-2.5-6.5-.4-9 .8-1.5-1.3-2.2-1.5-5.4 1.9-5.2-1-3.4 3.9-5.2 2.8-5.3 1.1-4.7 5.4-5.8 8-11.2 4.2-8.3 1.8-5.4.4-2.9 1.4-1.2 5.8 2.1-1.1 5.9 2.3-1.6 2.4-5.1 1.6-5.1-6.1-6.1-1.6-2.7-6.9-2.5 1.3-5.5 3.6-3.7-4.1-2.6 3.1-4.9-2.1-4.4 2.5-3.1-.6-2.2-2.5-1.9 3.3-5.2-1.6-4.9 2.7-5.5-4.1-.4-7.1-.2-3.7-1.7-3.3-6.1-3.2-1.1-5.7-2-6.7.5-6-2.7-2.6-2.5-6.3 1.2-3.5 4.1-2.9.3-6.5 1.3-6.1 1.9-6.4 1.3 3.2-3.5 8.3-5.7 6.7-1.8.4-1.4-9.2 3.2-7.4 3.9-11.1 4.1.2 2.9-8.9 4.2-7.6 2.5-6.6 1.8-3.9 2.6-10.5 3.1-4.5 2.8-8.1 2.6-2.8-.5-6.1 1.7-6.9 2-6 2-10 1.7 8.5-3.8 6.6-1.8 8.5-3.3 6.5-.7 4.9-2.4 10.3-3.6 2.3-1.2 5.7-2.1 5.7-4.5 6.2-3.4-7.2 1.8-5.2 1.1.4-3-3.6 2.1 1.6-2.9-7.2 2.3h-2.8l3.6-3.5 3.3-2.1-.4-2.1-7.2 1.1-.5-2.7-1.4-1.4 4-3.3-.3-2.4 5.8-3.4 7.6-3.1 5.3-3 4.1-.4 1.8.9 7-2.7 2.5.5 5.5-1.8 2.5-2.6-1.1-1 5.9-2.1h-2.7l-6.1 1.2-2.9 1.3-1.8-1.3-6.9.7-4.5-1.4 1.2-2.2-1-3.3 9.1-2.3L86.7 82h3.4l-4.3 2.8 9.2-.2 1.2-3.5-2.3-2.1.8-2.7L94 74l-3.2-1.7 6.3-2.9 7.6-.1 8.6-2.5 4.8-2.6 7.8-2.5 4.8-.6 11-2.3 3.2.3 10.2-2.8 4.4 1.1-.5 2.4 3.3-1 6.3.3-2 1.2 4.9.9 4.8-.5 6.2 1.6 7.1.5 2.2.7 6.5-.8 4.1 1.6 3.5.7 5.9 1.3 3.3 2.6 3.7.5 6.2-2.3 7-1.6 5.2.6 8.8-2.3 8.2-1.4.2 2.2 4.5-1.2 3.8-2.5 2.1.6 1.4 4.7 9.4-3.6-3.9 4.1 5.9-.9 3.3-1.6 4.5.3 3.8 2.3 7.5 1.9 4.7 1 4.4-.4 2.8 2.8-8.5 2.6 6.4 1.2 11.8-.6 4.4-1 1.4 3.3 7-2.8-2-2.3 4.4-1.8 5.2-.3 3.8-.5 2.1 1.3 1.5 2.9 5-.4 5.1 2.4 7.2-.8 5.9.1 2.4-3.4 4.5-.9 4.8 1.8-4.2 5.2 6.2-4.4 3.2.2 6.3-5.5-1.6-3.3L388 63l5.5-5.8 8.1-3.8 4.5.8 1.9 2.3.4 6-5.7 2.6 6.6 1-4.3 5.5 8.7-4.2 2.2 3.5-4.2 4 1.3 3.7 7.2-4 6.5-4.6 4.6-5.9 5.5.4 5.4.8 3.5 2.6-1.7 2.7-5 2.9.8 2.9-2.3 2.7-10.8 3.8-6.5.9-3.2-1.7-3.2 2.8-7.4 4.7-2.9 2.4-7.7 3.8-6.4.4-5.1 2.4-2.9 3.7-5.6.7-8.6 4.6-9.4 6.5-4.9 4.6-4.9 6.8 6 1-1.5 5.5-.7 4.5 7.1-1.2 7 2.6 3.3 2.2 1.7 2.9 4.8 1.6 3.6 2.5 7.5.4 4.8.6-3.6 5.2-1.7 6 .1 6.8 4.4 5.8 4.6-1.9 5.6-6.3 2.2-9.6-1.7-3.2 9-2.8 7.5-4.2 4.7-4.1 1.7-4-.5-5-3.1-4.5 8.8-6.1 1-5.3 3.8-9 3.9-1.3 6.6 1.6 4.2.5 4.5-1.5 3 2 3.6 3.3.1 2.2 7.7.5-2.6 4.9-2.2 7.3 3.7 1 1.6 3.4 8.1-3.2 7.4-6.5 4.3-2.7 1 5.2 2.6 7.5 2 7.1-3.4 3.7 4.8 3.4 2.8 3.4 6.9 1.6 2.3 1.9v5.1l3.4.8 1.1 2.3-2 6.8-4.2 2.3-4.2 2.1-8.7 2.2-7.8 5.1-8.6 1-10-1.3-7.3-.1-5.2.5-5.7 4.4-7.2 2.7-10.1 8.3-7.8 5.7 4.6-1 10.9-8.2 12.1-5.2 7.6-.6 3.3 3.1-6.1 4.1-.6 6.8.1 4.6 5.5 3.1 8.6-.8 7.1-7-1 4.5 2.6 2.2-7.5 4.1-12.2 3.7-5.8 2.4-7.1 4.5-3.7-.5 1.5-5.2 10.4-5.1-8.1.2-5.9.8.2 2zm1003.7 17.9l.6 3.1.8 4.6-1.4 2.9-4.7 2.7.9 3.8 2.9 1 3.8 2.6 4.5 4 4.3 3.9 3 4.2 3.3 7v3.6l-4.9 1.6-2.9 2.8h-4.6l-1.9-3.4-.8-4.6-5.3-7 3-.9-6.1-6h-4.9l-3.6-2.1v-4.5l-1.4-4.7-3.7-.6-2.9-1.8-6.4 2-2.4 2.9-4.8 1.8 1.4-3-2.3-2.5 1.9-4.2-4.4-3.3-3.4 2.2-3.6 4.4-1.2 4.1-5 .3-1.2 3 4.7 4.4 4.7 1 1.5 2.9 4.9 1.9 3.9-4.6 5.8 2.5 3.4.2 2.4 3.4-6.7 1.8-1 3.5-3.8 3.2-.9 4.6 7.1 3.5 4.6 6.3 5.4 5.8 5.4 4.9 1.6 4.7-2.8 1.7 2.5 3.4 3.8 2 .8 5.1.1 5.1-2.8.5-2.1 6.9-2.3 8.4-3.3 7.6-6.3 5.9-6.6 5.3-6.1.7-2.8 2.9-2.3-2.1-2.5 3.2-7.2 3.2-5.6.9-.8 6.7-3 .4-2.2-4.6.9-2.5-7.7-2-2.4 1-6.5 5.5-3.7 6-.5 4.4 5.3 6.7 6.4 8.3 5.6 4 4.1 5.1 4 11.7.4 11.2-4.3 4.2-6.1 4.1-4.1 5.3-6.6 5.9-2.3-4 1.3-4.3-4.5-3.7-4.7-.9-2.6-3.3-3.4-6.6-5.3-2.9-4.7.1.3-5-4.9.1.2 7-2.2 9.3-1.4 5.6.7 4.6 3.7.2 2.6 5.8 1.4 5.5 3.3 3.6 3.4.8 3.1 3.3 4.8 4.4 2.6 4.3.5 4.3-.5 2.9.6 2.1.5 3.8 2.1 1.8 2.3 5.6-.1 2.1-4 .5-5.4-4.8-6.7-5-.8-3.2-3.4-4.3-1-5.3-2.1-3.4.4-4.7-1.4-2.7-2.4-2.4-1.1-3.2-3.2-3.5-2.9-3.1-.7 3.8-1.2-3.6.3-3.9 1.3-6.1-.9-4.8 1.3-4.8-2.2-3.8-.2-6.9-2.6-3.3-2.6-7.6-2-8.1-3.1-5.2-3.2 3.1-5.8 4.6-3.2-.6-3.6-1.5.9-7.9-1.9-5.9-5.4-7.4.4-2.2-3.4-.9-4.6-5.2-1.1-5.1 1.6-3.6.5 4.6-1 4.1-2-3.3-.8-3.2-1.5-3.1-2.8-3.7-5.1-.2.9 2.6-1.3 3.5-2.5-1.3-4.5-.1-.5 2.4-3.7-.1-6.6 1.3.9 4.8-2.4 3.8-7.4 4.2-5.3 7.5-3.7 4-5 4.2.3 2.9-2.6 1.6-4.8 2.3-3.7 5.2 1.9 8.2.7 5.3-1.9 6.1.7 10.8-2.9.3-2.2 4.8 1.8 2.1-5 1.8-1.7 4.4-2.2 1.8-5.5-6-3.1-8.9-2.5-6.4-2.2-3-3.4-6.1-2-8-1.3-3.9-5.8-8.8-3.6-12.3-2.5-8.1-.8-7.8-1.7-5.9-7.6 3.8-4-.8-8-7.7 2.4-2.3-1.9-2.5-7.1-5.4-4.2-1.6-2.1-4.6-4.9-4.8-9.9 1.2-8.9.1-7.6.9-10.5-1.9-6.1-1.5-6.3-.8-3.2-7.8-2.8-1.1-4 1.1-5.1 3.1-6.9-2.1-6.1-4.9-5.5-1.8-4.3-6.1-5.1-8.4-2.8 1-3.7-2.1-1.7 2.5-3.2-.4 1.4 2.8 2.1 6.3 2.7 5.5 2.9 1.4 1.2 2.3 4 2.6.6 2.7-.4 2.1 1 2.1 1.7 1.8.9 2.1.2-3.1 1.1-3.3 3.3 1.3.5 3.7-.8 3.8 1.2 2.4 5.5.4 4.6.2 3.3.2 3.3-4.3 3.7-4.1 3-3.9 1.3 2.2 1.3 5 2.9 4.3 3.3 2.3 4.1.9 3.3 1.1 2.9 3.7 1.6 2.1 2.2 2.2-1.6 3.8-2.9 3.8-1.7 4.4-3.5 1.2-.6 3.2 1 4.2-3 .8-3.3 2.4-.2 3.1-4.6 1.3-2.1 1.6.2 2.5-2.5 1.8-3.1-.6-3.6 2.2-6.4 2-.9 2.9v2.1l-5.3 2.7-8.8 3-4.7 4.5-4.1-.1-3.1 2.7-3.5 1.2-4.7.3-2.5 2.1-2.3 2.1-2.7-.2-5.7.6-1.6-3.8v-3.4l-2.3-6.6-1.7-2.6.4-3.2.2-4-.9-2.8-1.8-1.9-.6-2.5-3-2.3-3.2-5.3-1.9-5.2-4.1-4.4-2.5-1-4-6.1-.9-4.4v-3.8l-3.6-7-2.8-2.5-3-1.3-2.1-3.7-1.5-4.7-4.2-6.2-3.7-5.1-3.2-4.4h-2.7l.6-3.5V312l.2-3.4-1.3 2.5-.7 4.8-1.2 3.3-3.2-.9-2.7-2.9-5.1-8.5 2.8 6.7 3.9 6.4 4.8 9.9 2.3 3.5 2 3.6 5.3 7-.6 5.3 6.8 5.7 3.1 7.5v7.7l2.5 7.6 2.2 1.6 3.1 2.4 3.7 7.3 1.8 5.9 3.2 3.1 7.9 6 3.2 3.6 3.2 3.7 1.9 2.2 2.8 1.9 1.4 1.9-.1 2.7-3.1 1.5 2.5 1.7-2 3.4-1.1 2.3 2.2 3.5 2.1 3.1 2.2 2.2 18.5 7.6 4.8-.1-15.4 19.1-7.4.3-4.9 4.5-3.6.1-1.5 2-4.8 7.2.2 23.2 3.3 5.3-4 2.5-1.4 2.7-3 4.9-1.8 2.6-1.2 4.2-2.2 2.1-2.8 7.9.3 3.6 3.5 2.3-1.5 5.5-.1 5 1.8 3.9 2.2 6.3 2 1.4.8 2.9-.4 6.3.4 5.6-.2 9.9.9 3.1-1.9 4.6-2.4 4.4-3.7 3.9-5.2 2.5-6.4 3.1-6.7 6.8-6.3 5.7-2.3 1.4-.7 4.6 2.4 4.8.8 3.7.5 7.8-1.1 3 .3 3.7-2.5 2.3-4.6 2.2-6.8 3.4-2.6 2.4.3 2.6.7 3.8-1.7 4.7-1.1 5.2-1.6 2.9-3.9 3.2-3.7 4.2-1.8 3.2-3.4 4.6-6.7 6.5-4.1 3.8-4.3 2.9-5.8 2.5-2.7.3-4 .8-2.7 1.2-5.7-1.2-3.3.8-7.8 2.2-4.6 1-3.5 2.4-4.5-2.1-4.2-2.1-.4-5.5-1.4-4.2 1.9-6-3.2-6-2.5-5.4-3.5-8.2-3.9-4.8-1.9-4.7-1-6.2-1.2-4.6-1.6-9.8v-7.6l-.6-3.5-2.1-2.6-2.7-5.2-2.8-7.7-1.1-4-4.4-6.2-.2-4.9-.5-4 .9-5.5 2-5.9.3-2.7 1.9-5.7 1.3-2.6 3.3-4.2 1.8-2.8.7-4.8-.3-3.6-1.6-2.2-1.5-3.9-1.3-3.8 2-3.9-1.6-6.1-1.1-4.3-2.8-4-.3-3.2-1.4-4.8-4.6-6.7-5.8-6.4-3.7-5.3-3.4-6.6.2-2.1 1.3-2 1.3-4.6 1.1-4.8.9-8.1.8-5-2.2-4.2-2.6-1.1-1.1-2.8-1.4-2.7-5.8 2.3-4.3 1.1-4.5-.2-3-3.9-1.9-4.6-3.9-4.2h-9.2l-4.6.8-4.6 1.3-8.7 3.8-3.2 2.1-5 1.9-5-1.8-6.5-1.2-3.6.1-6.6 1.1-3.9 1.8-5.6 2.4-8.3-3.2-5.1-4.8-4.8-3.5-3.7-4.1-7.2-4.1-2.9-9.4-2.4-3.7-2.1-2.5-2.8-2.1-.7-2.8-2.4-2.5-2.9-2.6-3.6-2.3-1.7-2.3-.9-5.2.2-4.5-5.5-6.4 5.3-3.6.9-8.2 1.7-4.6 1.8-6.9-1.9-7.1 1.9-4.8-4.4-4.1V360l.3-3 2.2-1.7 1.9-3.3-.3-2.2 2-4.5 3.1-4 3.5-4.8.2-3.3 2.1-4 3.7-2.3 3.7-6.6 2.8-2.4 5.1-.7 4.4-4.4 2.7-1.7 4.7-5.3-1.1-7.9 2.1-5.4.9-3.4 3.5-4.3 5.4-2.9 4-2.6 3.7-6.7 1.8-3.9h3.9l3.1 2.7 5-.4 5.5 1.4 7.4-3.4 5.7-1.2 3.4-2.6 5-2 8.9-1.2 8.7-.5 2.7 1 4.9-2.6h5.6l2.2 1.5 3.6-.4 5.6-2.6 3.7.7-.1 3.3 4.4-2.4-2.1 4.5.1 3 1.9 1.6-.5 5.6-3.4 3.2 1.1 3.5 2.8.1 1.5 3 8.4 3.2 6.7.5 7.2 2.8 2.8 5.7 4.9 1.2 7.7 2.7 5.9 3.1 2.5-1.6 2.4-3-1.5-4.8 1.5-3.1 3.7-3 3.6-.8 7.3 1.3 2 2.8 3.8 1.1 5.4.8 1.5 2.1 7.1-.2 5.3 1.7 5.5 1.9 2.6 1 3.9-2 2.1-1.8 4.7-.6 3.9.8 1.7 3.2 1.1-2.1 4.4 1.5 4.2.4 2.5-1.6 1-2.5 1.1-2.9.6-4.8 2-6.9 2.2-4.7-1.1-5 1-2.6-2.3-3 1.7-2.4-3.2.6-4.6-1.5-3.1 3.7-8 .7-4.6-3.5-5.7-.2-.9 2.7-3.6.8-5.4-3.5-5.8.1-3.7-6.4-4.2-3.6 2-5-3.6-3 5.1-6.1 7.9-.2 1.6-4.8 9.9.8 5.6-4 5.7-1.7 8.5-.2 9.7 4.4 7.8 2.4 5.8-1 4.5.6 5.5-3.2.3-2.7-2.1-4.2-3.4-2.3-3-.7-2.2-1.9-7.4-5.1-6.2-2.4-5-3.6 3.4-1 3.2-5.2-3.2-2.4 7.1-2.3-12.6.9-3.8 1.3-3.9 2.3 1 3.9 2.7 1.5 5.1-.4-.6 2.2-5.3 1.1-6.3 3.6-3-1.3.6-2.9-5.8-1.8 5.2-3.3-9.7-2.9-.7-2.4-4.5.8-1.3 3.4-3.3 4.6-1.9 2.9-2 6.9-2.2 2.5-1.3 4.4 2.1 3.5.9 2.4 4.7 2-6.8 1.9-2 1.9-3.9 3.4-1.9-2.9-3.3-1.5-2.7-.6-6.1 1.6 3.9 3.6-2.5 1h-2.9l-3-3.2v3.6l3.7 4.6-2.1 1.8 3.3 2.5 2.7 1.8.4 3.7-5-1.7 1.9 3.3-3.3.7 2.4 5.7-3.4.1-4.6-2.9-2.3-5.1-1.3-4.3-2.3-3-2.9-3.6-1.5-2.3-3.2-3.5-.7-3 .1-4.3-.5-2.9-2.7-2.5-3.2-1.1-4.1-2.4-3.1-2.2-4.8-1.8-4.6-4.5-1.5-4.3-3.6-1.8-1.3 2.6-1.7-2v-2.2l-2.8-1.5-3.9 2.2.1 5 1.7 2.9 4.9 3.1 2.9 5.1 6 5 4-.1v2.6l4.8 2.3 3.9 1.9 4.7 3.2-.2 3.5-3.1-3-4.5-1-1.9 4.1 3.9 2.3-.4 3.3-4.6 6-4.7 3.5.9 2-.9 3.3-4.2-2.4-2.7-.7-7.5-3.3.6-3.4 6.2.6 5.2-.7 3.3-.4 2.4-3.5-1.2-5-1.8-3.2-3.9-3.5-3.4-1.2-2.3-2.5-3.9-.4-4.2-2.8-4.9-4-3.6-3.6-1.9-6-2.6-.7-4.2-2.1-5.1 3.7-6.6 3.9-10-1.6-7.4 2-.5 3.7.3 3.5-4.8 4.2-6.6 1.3-.5 2.1-3.1 3.5-2 5.1 2 3.7-3 2.9-1.2 4.2-3.9 1.3-3.8 5h-6.7l-5-.1-3.3 2.3-2.1 2.5-4.5-2.8-1.4-3.7-4.8-1-2.2 1.7-2.7-.9-2.8.7 1-5.1-.4-4-3.5-3 .6-4.2 2.2-2.3.4-2.5 1.3-3.8-.1-2.7-.9-2.2-.1-2.1.4-4.4-2-2.6 7.4-4.5 6.2 1.1h6.8l5.4 1 4.2-.3 8.2.2 2.7-3.7 1-12.3-5.1-6.5-3.6-3.1-7.5-2.4-.4-4.6 6.4-1.3 8.2 1.6-1.4-7 4.6 2.6 11.3-4.8 1.4-5.1 4.3-1.2 3.4-1.3 6.8-10.5 6.5-2.6-6.5 2.6 6.1-2.1 4.3-.3 4.8-1.6 4-1.7-1.2-2.2-.4-3.4-2.1-3.4-.4-6.1 1.9-3.3 4-.4 5.1-3.3.1 3-1.3 2 3.3 2.5-1 2.3-4.5 3.6 1.5 3 .2 2.3 4.9 1.4.1 2.1 4.7-1.1 2.5-1.7 5.5 2.4 2.4 1.9 3.1-1.7 7.1-2.8 5.7-2.1 4.8 1.1 5.1 1.5.7-2.6 6.3-2-1.7-5-.5-4.5 1.7-3.7 4-2.1 4.4 4.5 3.6-.1.2-4.6-.1-3.5-4.8-1.3-.9-3.4 5.4-1.6 5.5-.9 5.1 1c3.4-1.8 5.1-3.1 7.7-4.2l-3.9-2-8 .5-7.5 2.1-7.1 1.2-3.1-3.1-4.7-1.9.1-5.7-2.9-5.2 1.5-3.3 3.3-3.6 8.7-6.1 2.6-1.2-.9-2.3-6.4-2.6-7 1.5-3.4 3.9 1.2 3.5-6.1 4.5-7.7 4.9-2.1 8.1 3.6 4 4.8 3.3-3.3 6.6-4.6 1.3-.6 10-2 5.5-5.7-.5-2.2 4.7-5.3.3-2-5.7-4.4-6.7-4.2-8.4-3.3-3.6-8.5 6.8-6 1.4-6.4-3-1.9-6.3-1.9-13.4 3.9-3.6 11.2-4.8 8.1-5.8 7.1-7.8 8.8-10.7 6.4-4 10.1-6.8 8.5-2.3 6.7.3 5.1-4.4 7.3.3 6.9-1.1 13.6 3.9-4.8 1.4 5.4 3.3 3.6-1.8 7.6 3.2 11.6 1.3 17.6 6.1 4 2.6 1.6 3.6-3.7 2.9-6.4 1.5-20.1-4.2-2.9.7 8 4 1 2.6 1.9 5.8 6 1.7 3.8 1.4-.2-2.7-3.3-2.4 2.1-2.1 11.4 3.5 3.2-1.4-4.2-4.1 8-5.4 4 .3 4.6 1.9 1.1-3.8-4.7-3.3.8-3.2-4.3-3.4 12.2 1.8 3.6 3-5 .7 1.2 3 4 1.9 6-1.2-.4-3.5 7.6-2.6 12.3-4.6 3.2.2-2.5 3.3 5.3.6 2.1-1.9 7.6-.1 5-2.2 6.4 3.2 2.7-3.6-5.9-3.1 14-.1 6.6 1.7 18.5 6.1 1-2.8-5.8-2.9-6.1-1.6-.1-2.6-4.7-4.1 3.1-6.4-.5-4.7 13.4.4 2.9 2.9-.8 4.2 3.6 1.6 3.7 3.7 3.8 7.3 6.7 3.3.5 3.6-3.5 7.8 5.3.8 4.2-3.4-.5-2.7 1.9-2.6-4.4-3.1-.4-3.5-4.7-.5-2.9-2.9-.4-5.4-8.1-4.2 4.6-3.5-3.6-3.7 6 2.7 2.1 5 4.9 1-4.5-3.8 5.1-2 7.9-.3 9.6 3-6.9-4.3-4.8-5.4 5.8-1.1 9.5.3 7.7-.7-5.5-2.6 1.2-3.3 4.2-.2 4.9-2.4 9.2-.7 9-1.8 4.3 1.1 5.3-2.6 6.9.1-1.5-2.1 1-2 6.1-1.9 8.2 1.5-3.4 1.2 9.2.7 4.1 2.4 12.7-1.1 11.5 2.3 5.5 1.9 2.4 2.5-2.3 1.5-6.6 2.8 4.5 2.2 7.2 1.2 8.1 2.3 5.4-2.1 13.3.9 3.9 2.3 17.2.8-4.7-3.9 9.3.9h6.1l9.8 2.6 6 3.3.4 2.2 10 4.1 8.9 2.1-3-5.5 9.3 2.4 5-1.4 9.7 1.6 8.5-.8-9.3-4.8 2.1-2.2 40.1 3.4 7.8 3 16.1 4 14.7-1 9.2.9 6.5 2.2 5.1 3.8 7.2 1.6 3.9-1.1 7-.2 9.2 1.1 6.8-.6 14.2 4.8 2.5-1.8-8.5-3.4-1.8-2.3 15.2 1.4 7.9-.3 15.7 2.6 9.4 2.3 32.9 21.9-2 2.5-6.1-.4 8.1 3 9.1 4.6 4.1 1.6 3.8 2.3-8.9.3-6.5 4.3-3.1.7-1.5 4-2 3.6 1.7 2.6-11.4-4-6.1 4.6-4.7-2.2-1.3 2.5-7-.8 3.1 3.9 1.1 5.6 2.9 2.4 6.7 1.4 9 8.6-4.1.2 3.4 5 4.7 2.6-5 3.1 5.4 6.9-5.7 1.5 4.5 6.2-1.6 5.7-5.7-4.3-10.5-8.8-16-13.4-6.4-8.3.1-3.6-2.8-2.7 5.7-1.3-.3-7.5.8-6 2.4-4.6-6.5-8.1-4.7.5 3.2 4.7-3.6 6.4-12.1-7.1-9.1 1.9v9.8l7.7 3.5-8.4 1.6-6.4.6-4.3-4.3-7.9-.8-2.5 2.8-14.9-1-13.1 1.8-3.5 11.5-4.9 14.1 8 .7 5.7 3.8 5.8 1.3.3-3 5.6.4 12.7 6.7 4.7 5.1 1.3 6.2 5.5 7.3 5.2 9.9-1 9 1.3 4.3-1.9 7.2-2.1 7.1-1 3.7-4.4 3.6-3.2.1-5.1-3-4 4.5-5.9-2.4 4.3 4.4-1.4 2zm-424.6-10.6v3.7l7.3 7.5 7.4 8.6-1.1 10.6 2.6 8.7 4.9 1 4.1 2.6 9.3 1.4 7.7-1.4-2.2-5.6v-6.7l-4.4-3.5-4.1-4.4v-4h5.5l3-2.8-5.5-6.5-4 1.1-3.2-5.1-6.2-1.5-3.3-6.1-4.2-1.7v-1.7h4.2v-4l3.3-1.1h4.1l-2.1-9.3-5.3 1.6-4.2-3.1-4.1 3.1-6.6 1.2v4.2h-4.5l-4.4 7.4 6 5.8z"

// https://en.wikipedia.org/wiki/Robinson_projection
const robinson = {
  aa: [.8487,.84751182,.84479598,.840213,.83359314,.8257851,.814752,.80006949,.78216192,.76060494,.73658673,.7086645,.67777182,.64475739,.60987582,.57134484,.52729731,.48562614,.45167814],
  bb: [0,.0838426,.1676852,.2515278,.3353704,.419213,.5030556,.5868982,.67182264,.75336633,.83518048,.91537187,.99339958,1.06872269,1.14066505,1.20841528,1.27035062,1.31998003,1.3523]
}

const projectRobinson = (lat, lon, width, offsetX, offsetY) => {
  const latAbs = Math.abs(lat)
  const lat0 = Math.floor(latAbs / 5)
  const lat1 = Math.ceil(latAbs / 5)
  const latInterp = (latAbs - lat0 * 5) / 5

  const AA = robinson.aa[lat0] + (robinson.aa[lat1] - robinson.aa[lat0]) * latInterp
  const BB = robinson.bb[lat0] + (robinson.bb[lat1] - robinson.bb[lat0]) * latInterp

  const robinsonWidth = 2 * Math.PI * robinson.aa[0]
  const widthFactor = width / robinsonWidth
  const latSign = Math.sign(lat) || 1
  const x = (widthFactor * AA * lon * Math.PI) / 180 + offsetX
  const y = widthFactor * BB * latSign + offsetY

  return [x, y]
}

const project = (lat, lon) => {
  const width = 2025
  const ratio = Math.PI * robinson.aa[0] / robinson.bb[18]

  const [x, y] = projectRobinson(lat, lon, width, -235.5, 19.5)

  return [
    width / 2 + x,
    width / ratio / 2 - y
  ]
}

const NetworkMap = (props) => {
  const points = props.datacenters.map(([lat, lon]) => project(lat, lon))

  return (
    <AccessibleSVG title={props.title} className="NetworkMap" viewBox="0 0 1713 848">
      <path className="NetworkMap--land" d={globePathD}/>

      <g className="NetworkMap--datacenters">
        {points.map(([x, y], i) => (
          <circle r={props.datacentersRadius} cx={x} cy={y} key={i}/>
        ))}
      </g>
    </AccessibleSVG>
  )
}

NetworkMap.defaultProps = {
  title: defaultTitle,
  datacenters: defaultDatacenters,
  datacentersRadius: 8
}

export default NetworkMap
