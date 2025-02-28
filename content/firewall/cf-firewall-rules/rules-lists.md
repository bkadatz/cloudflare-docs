---
pcx-content-type: concept
title: IP Lists
weight: 241
---

# IP Lists

Use IP Lists to refer to a group of IP addresses collectively, by name, in your Firewall Rule expression. You can choose to create your own custom list of IP addresses or use a list managed by Cloudflare.

For example, use a list of known office IP addresses in a Firewall Rule that allows requests from the addresses on the list to bypass security features. Or you may want to block requests that don't come from the known office addresses.

When you update the content of a list, any rules that use the list are automatically updated, so you can make a single change to your Firewall Rules list rather than modify rules individually.

Cloudflare stores your lists at the account level and sends to the edge, so you can view, manage, and incorporate them into Firewall Rules for any of your zones.

## Advantages of IP Lists

Using IP Lists has these advantages:

- When creating a Firewall Rule, using an IP List is easier and less error-prone than adding a long list of IP addresses to a Firewall Rules expression.
- When updating a set of Firewall Rules that target the same group of IP addresses, using an IP List is easier and less error prone than editing multiple Firewall Rules.
- IP Lists are easier to read and more informative, particularly when you use descriptive names for your lists.

## Managed IP Lists: Open Proxies

Use Managed IP Lists to access Cloudflare's IP threat intelligence.

Cloudflare scans public, open proxy lists for reachable, open proxies. After verifying the proxies, Cloudflare determines their exit IPs and creates a list of IPs you can use when writing rules via the dashboard or API.

## Entitlements

The number of IP Lists you can create depends on the Cloudflare plans associated with the zones in your account. Regardless of plan, you can store up to a total of 10,000 items, spread across all of your lists.

{{<table-wrap>}}<table style="width: 100%">

  <thead>
    <tr>
      <td></td>
      <td colspan="4" style="text-align:center"><strong>Cloudflare plan</strong></td>
    </tr>
    <tr>
      <th></th>
      <th>Free</th>
      <th>Pro</th>
      <th>Business</th>
      <th>Enterprise</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Number of IP Lists</strong></td>
      <td>1</td>
      <td>10</td>
      <td>10</td>
      <td>10</td>
    </tr>
  </tbody>
</table>{{</table-wrap>}}

{{<Aside type="note" header="Important">}}

Access to the Open Proxy List in the rule builder and <code>cf.open_proxies</code> requires a Cloudflare Enterprise plan.

{{</Aside>}}

## User role requirements

The following user roles have access to the List management functionality:

- Super Administrator
- Administrator
- Firewall

## Managing lists

- To manage and edit IP Lists from your Cloudflare account interface, refer to [Use IP Lists](/firewall/cf-dashboard/rules-lists/).
- To manage and edit IP Lists using the Cloudflare API, refer to [Lists API](/firewall/api/cf-lists/).

## Using lists in expressions

Both the Cloudflare dashboard and the Cloudflare API support IP Lists.

To use IP Lists in an expression from the Cloudflare dashboard, refer to [Use lists in expressions](/firewall/cf-dashboard/rules-lists/use-lists-in-expressions/).

To refer to an IP List in a Cloudflare Filters API expression, refer to [Values: Lists](/ruleset-engine/rules-language/values#lists) in the Rules language reference.
