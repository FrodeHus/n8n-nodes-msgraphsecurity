# n8n-nodes-msgraphsecurity

This is an n8n community node. It lets you use _app/service name_ in your n8n workflows.

_App/service name_ is _one or two sentences describing the service this node integrates with_.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- Secure Score
  - Get Many Secure Score
- Custom Detection Rule
  - Get One Detection Rule
  - Create Detection Rule
  - Delete Detection Rule
  - Get All Detection Rule

## Credentials

Required Microsoft Graph permissions (Type: Application):

- CustomDetection.ReadWrite.All
- SecurityEvents.Read.All
- SecurityIncident.ReadWrite.All
- SecurityEvents.Read.All
- SecurityActions.ReadWrite.All
- SecurityAlert.ReadWrite.All

## Compatibility

_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._

## Usage

_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._

_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- _Link to app/service documentation._

## Version history

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._
