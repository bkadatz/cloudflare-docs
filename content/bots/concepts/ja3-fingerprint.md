---
pcx-content-type: concept
title: JA3 Fingerprint
---

# JA3 Fingerprint

A [**JA3 Fingerprint**](https://github.com/salesforce/ja3) helps you profile specific SSL/TLS clients across different destination IPs, Ports, and X509 certificates.

{{<Aside type="note" header="Note">}}

JA3 Fingerprints are only available to Enterprise customers who have purchased Bot Management.

{{</Aside>}}

## Analytics

To get more information about potential bot requests, use these JA3 Fingerprints in:

- [Bot Analytics](/bots/bot-analytics/bm-subscription/)
- [Firewall Analytics](/waf/analytics)
- [Analytics GraphQL API](/analytics/graphql-api), specifically the **HTTP Requests** data set

## Actions

To adjust how your application responds to specific fingerprints, use them with:

- [Firewall Rules](/firewall/cf-dashboard)
- [Transform Rules](/rules/transform)
- [Cloudflare Workers](/workers/runtime-apis/request#incomingrequestcfproperties)

## Use cases

### Block or allow certain traffic

A group of similar requests may share the same JA3 fingerprint. For this reason, JA3 may be useful in blocking an incoming threat. For example, if you notice that a bot attack is not caught by existing defenses, create a [Firewall Rule](/firewall/cf-dashboard) that blocks/challenges the JA3 used for the attack.

Alternatively, if existing defenses are blocking traffic that is actually legitimate, create a [Firewall Rule](/firewall/cf-dashboard) that allows the JA3 seen across good requests.

JA3 may also be useful if you want to immediately remedy false positives or false negatives with Bot Management.

### Allow mobile traffic

Often, mobile application traffic will produce the same JA3 fingerprint across devices and users. This means you can identify your mobile application traffic by its JA3 fingerprint.

Use the JA3 fingerprint to [allow traffic](/firewall/recipes/challenge-bad-bots#adjust-for-mobile-traffic) from your mobile application, but block or challenge remaining traffic.
