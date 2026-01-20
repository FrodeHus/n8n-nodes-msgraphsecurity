# n8n-nodes-msgraphsecurity

This is an n8n community node. It lets you use the Unified Security API in Microsoft Graph in your n8n workflows.

The Microsoft Graph security API provides a unified interface and schema to integrate with security solutions from Microsoft and ecosystem partners. It empowers customers to streamline security operations and better defend against increasing cyber threats. The Microsoft Graph security API federates queries to all onboarded security providers and aggregates responses. Use the Microsoft Graph security API to build applications that:

- Consolidate and correlate security alerts from multiple sources.
- Pull and investigate all incidents and alerts from services that are part of or integrated with Microsoft 365 Defender.
- Unlock contextual data to inform investigations.
- Automate security tasks, business processes, workflows, and reporting.
- Send threat indicators to Microsoft products for customized detections.
- Invoke actions in response to new threats.
- Provide visibility into security data to enable proactive risk management.

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

Tested with recent n8n 2.x releases. Older versions may work, but are not guaranteed.

## Usage

[Try it out](https://docs.n8n.io/try-it-out/)

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Microsoft Graph security API overview](https://learn.microsoft.com/en-us/graph/api/resources/security-api-overview?view=graph-rest-beta)

## Version history

[Changelog](./CHANGELOG.md)
