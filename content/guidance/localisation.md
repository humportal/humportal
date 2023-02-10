---
title: Localisation
summary: How IATI data can be used to track Grand Bargain localisation commitments.
---

`DRAFT FOR CONSULTATION: 9 February 2023`

# IATI data for Localisation

*Guidance note from the technical leads of the Grand Bargain Transparency Workstream*

<b-alert show>
<p><b>Summary</b></p>
<p>IATI data can be used to track Grand Bargain localisation commitments, with some caveats. This technical note outlines a methodology which can be followed by both Grand Bargain signatories and those tasked with monitoring the implementation of these commitments.</p>
<ul>
  <li>All publishers should publish names, identifiers and types for all of the organisations they are working with, wherever possible;</li>
  <li>The IATI community should agree and add missing definitions to the Organisation Type codelist;
  <li>Stakeholders in the localisation community should agree a methodology for how to use this data to track progress against the localisation commitments. A draft methodology is proposed below.</li>
</ul>
</b-alert>

<b-alert show variant="success">
<p><b><font-awesome-icon :icon="['fas', 'comments']" class="text-success"></font-awesome-icon> What do you think?</b></p>
This is an draft note for consultation. We welcome feedback and discussion on this note, which can be discussed in detail on IATI Connect.
</b-alert>

## Grand Bargain Localisation Commitments

Aid organisations and donors committed to:

> Achieve by 2020 a global, aggregated target of at least 25 per cent of humanitarian funding to local and national responders as directly as possible to improve outcomes for affected people and reduce transactional costs.

*For the full commitments under this workstream, see [Grand Bargain Website: Workstream 2. More support and funding tools for local and national responders](https://interagencystandingcommittee.org/more-support-and-funding-tools-for-local-and-national-responders).*

Local and national actors are [defined](https://interagencystandingcommittee.org/system/files/categories_for_tracking_direct_as_possible_funding_to_local_and_national_actors_003.pdf) as follows:

<div class="table">

| Subcategory | Definition |
| --- | --- |
| Local and national nonstate actors | Organisations engaged in relief that are headquartered and operating in their own aid recipient country and which are not affiliated to an international NGO. |
| National and sub-national state actors | State authorities of the affected aid recipient country engaged in relief, whether at local or national level. |

</div>

Direct and indirect funding is defined as follows:

<table class="table">
  <thead>
    <tr>
      <th>Category</th>
      <th>Subcategory</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Direct funding</td>
      <td>Direct funding (donors)</td>
      <td>Direct funding from the original donor to local and national actors for humanitarian purposes</td>
    </tr>
    <tr>
      <td>Direct funding (aid organizations)</td>
      <td>Direct funding to local and national actors coming from privately raised donations</td>
    </tr>
    <tr>
      <td rowspan="2">Indirect funding to be tracked (for later decision as to whether both should be “counted” as “direct as possible”)</td>
      <td>Pooled Funding</td>
      <td>Funding channelled through a pooled fund that is directly accessed by local and national actors, e.g. CBPF, DREF, START.</td>
    </tr>
    <tr>
      <td>Single intermediary</td>
      <td>Funding to a single international aid organization (including a federated/membership organization) that reaches a local / national actor directly from that one intermediary.</td>
    </tr>
  </tbody>
</table>

## Can IATI Data Help Track Commitments?

If published correctly, IATI data can be used for automatically tracking most of the criteria outlined above. The following table summarises when IATI data can be used.

<div class="table">

Organisations engaged in relief… | Can IATI be used?
--- | ---
… are headquartered in any recipient country | <font-awesome-icon :icon="['fas', 'check-circle']" class="text-success" />
… are headquartered in the aid recipient country | <font-awesome-icon :icon="['fas', 'check-circle']" class="text-success" />
… are state authorities, either at local or national level | <font-awesome-icon :icon="['fas', 'check-circle']" class="text-success" />
… are not affiliated to an INGO | <font-awesome-icon :icon="['fas', 'question-circle']" class="text-warning" />

</div>

This can be tracked both for direct and indirect funding to local and national actors.

IATI data cannot currently be used to automatically track whether an organisation is affiliated to an INGO. This would require further work, either to develop an appropriate methodology to automatically identify such organisations, or periodic work to manually identify such organisations during monitoring exercises.

## What to Publish to Enable Automatic Tracking

### Direct Funding

Grand Bargain signatories should publish data in a way that specifically identifies the organisations they are working with, subject to appropriate controls to exclude from publication information that may cause harm, according to each organisation’s process or legislative framework.

Grand Bargain signatories should:

* publish the **name** of their implementing (or receiver) organisations;
* publish the **type** of their implementing (or receiver) organisations;
* publish the **organisation identifier** of their implementing (or receiver) organisations;
* when there is more than one partner organisation receiving funding from an IATI activity, specify them, by name, type and organisation identifier, at the transaction level.

### Indirect Funding

In order to enable tracking of indirect funding to local and national actors, Grand Bargain signatories should encourage their implementing organisations to:

* publish data in line with the previous section (Publication - Direct Funding)
* refer back to the funding organisation’s activity, in line with [IATI traceability guidance](https://iatistandard.org/en/guidance/standard-guidance/traceability/).

## Progress in Implementation

### Direct Funding

Across 65 Grand Bargain Signatories on average, 21% of implementing organisations in IATI data have a correctly formatted identifier. There is wide variation, with some signatories not publishing any implementing organisations’ names or correctly formatted identifiers. However, some signatories are publishing correctly formatted identifiers for most of their implementing organisations - e.g. 79% for UK FCDO, 78% for Global Affairs Canada, and 63% for DG ECHO.

There are a number of other publishers correctly using organisation identifiers, making it possible to see funding to NGOs or companies registered in Bangladesh, Benin, Ghana, India, Kenya, Lebanon, Malawi, Mozambique, Nigeria, Nepal, Pakistan, South Africa, Tanzania and Uganda.

Select a signatory to see progress in implementation below.

<localisation></localisation>

Select a signatory to see how many organisations they are working with which are registered in “Developing” countries, according to the [UNM49 definition](https://unstats.un.org/unsd/methodology/m49/overview/).

<localisation-organisations></localisation-organisations>

### Indirect Funding

There is still somewhat limited progress in the implementation of traceability throughout the humanitarian system. Only 14% of Netherlands MFA and 4% of UK FCDO funding is currently traceable. As these figures include all activities, sometimes stretching back decades (not only “current” or “ongoing” activities), they may underestimate the amount of funding that is currently traceable. It is probably the case that older activities have less traceability (and are also probably less relevant), and it may be the case that funding implemented through certain types of organisations (e.g. multilaterals) has less traceability.

Select a signatory to see progress in implementation below.

<traceability></traceability>

## How to Track Commitments Using IATI Data

Those monitoring Grand Bargain localisation commitments can use IATI data to identify the share of funding that is channelled to local and national actors. The analytical power of these findings will depend on the extent to which signatories are publishing good data. This section outlines a general methodology which could be used to calculate the degree of localisation of each publisher’s data.

### Direct Funding

1. Download data from the [Country Development Finance Data tool](https://countrydata.iatistandard.org/), for each publisher, filtering to only include humanitarian data (where “Humanitarian” is “Humanitarian”, which appears as “1” in the export).
2. From the “Receiver Organisation” field, extract the country in which the organisation is registered, where this is available.
3. Calculate whether this row is providing funding to a local and national actor, depending on the definition that is adopted or preferred. For example:
   1. *If the organisation is headquartered in the aid recipient country*: the country code in step (2) will be the same as the “Recipient Country or Region” field.
   2. *If the organisation is in any aid recipient country*: the country code in step (2) will be on a list of “aid recipient countries”. (Depending on how this is defined, this could be according to the UN M49 definition of “developing” countries.)
   3. *If the organisation is a state authority*: the country code in step (2) will be the same as the “Recipient Country or Region” field, and the “Receiver Organisation Type” field will be “10” (Government) or “11” (Local Government).
4. Summarise the total value in USD by whether implementing organisations are local and national actors according to the definitions in step (3).

To exclude INGOs, an additional set of work would have to be undertaken. This could be done:

1. **Automatically**, by excluding organisations including the name of an international NGO in their name (e.g. “ActionAid”, “Save the Children”, “Oxfam”). This could be challenging if the name of the organisation is published in another language.
2. **Manually**, by manually reviewing the list of organisations in the “Receiver Organisation” in steps (3.a.) or (3.b.) above, and manually excluding those that are known to be affiliated to an INGO.
3. **By extension**: create an IATI extension (in a new namespace) that allows an additional attribute to specify whether an org is part of an international federation, with the goal of having that extension incorporated into the core in a future IATI release.

### Indirect Funding

As progress on traceability is currently quite limited, a simple way to estimate localisation through indirect funding could be to look at each organisation’s total proportion of funding that is calculated as provided to local and national actors in the previous subsection (section: Direct Funding). The total amount of funding provided to that organisation could then be multiplied by the share of the organisation’s spending that is localised.

For example:

* 10% of Organisation A’s funding is to local and national actors
* 20% of Organisation B’s funding is to local and national actors

A funder provides $100 to each organisation. So, $30 ($100\*0.1 + $100\*0.2) out of $200 is localised, or 15%.



---


## Technical Annex

### 1. Can funding to local and national actors be tracked using the IATI Standard?

“organisations engaged in relief that are headquartered and operating in their own aid recipient country…”

* **Yes, with exceptions**. It is possible to publish data to IATI that clearly identifies funding to organisations registered in specific countries. However, there may be limitations in specific countries if an organisation does not have a registration code (e.g. company or charity registration number) issued by a national registration body.

“... and which are not affiliated to an international NGO…”

* **Not automatically**. There is currently no way of automatically identifying (and excluding) organisations that are affiliated to an international NGO, though this analysis should be possible to conduct through additional manual analysis.

“... or state authorities of the affected aid recipient country engaged in relief, whether at local or national level”

* **Yes**. It is (as of 2022) possible to publish data to IATI that clearly identifies funding to state authorities for every country.

### 2. How can funding to local and national actors be tracked using the IATI Standard?

Funding to different organisations can be identified by looking at the **Implementing organisation** in an IATI activity[^1], or the **Receiver organisation** on a transaction. These are often interchangeable, i.e. there is often a single Implementing organisation for an activity, which will therefore also be the Receiver organisation for all transactions in that activity. However, where there are multiple Implementing organisations, the specific Receiver organisation needs to be stated to distinguish which organisation is actually receiving the funds for a particular transaction. In both cases, a publisher can state the **name** and the **type** of the organisation, as well as an **organisation identifier** to uniquely and unambiguously refer to that organisation.

For example:

```xml
<receiver-org type="24" ref="BD-NAB-0210">
  <narrative>ActionAid Bangladesh</narrative>
</receiver-org>
```

*Explanation:*

In this example, the receiver organisation is called ActionAid Bangladesh. The type of organisation has been classified by the publisher as a “Partner-country based NGO (24)”, and is registered in Bangladesh (BD…) with the NGO Affairs Bureau (BD-NAB-…) with the registration code 0210, meaning that this organisation’s identifier is BD-NAB-0210.

#### Organisation names are important

Stating the name of the organisation is important because otherwise it is impossible to understand who is receiving the funding. Even if the organisation identifier is published (see below), the name is important to also state[^2].

#### Organisation types are not sufficiently accurate for our purposes

In both cases, it is possible to state the type of organisation, according to a list of possible types (see <a href="#organisation-type-codelist">Organisation Type Codelist</a> below). These types do not clearly identify the organisation in a way that matches the Grand Bargain definition. Some of them (e.g. 11 – Local Government) explicitly allow government organisations in a “donor or recipient country”. The closest type to the Grand Bargain definition is “24 – Partner Country based NGO”, but this is ambiguous on whether the organisation can be registered in any partner country, or if it has to be registered in the country receiving these funds.

In any case, only 74 out of 1,497 publishers have used code “24 – Partner-country based NGO” for any of their receiver organisations[^3]. 83 publishers have used this code for any participating organisations, a field that includes implementing organisations[^4]:.

The organisation type “National NGO” could be another option to get closer to identifying local and national actors. This code may indeed have been intended to classify organisations that are not INGOs (as INGO is a separate organisation type). However, there are currently no definitions for these organisation types. Out of the 348 organisations currently publishing data to IATI which classify themselves as a “National NGO”, 38% are based in Western Europe or North America. Adding definitions to the Organisation Type codelist would need to be accompanied with some outreach activities to re-code data in a more consistent way.

#### Organisation identifiers are very accurate

As explained in the example above, organisation identifiers state:

1. The country (e.g Bangladesh, BD)
2. The national registration agency (e.g. Bangladesh NGO Affairs Bureau, BD-NAB)
3. The registration code assigned by that registration agency (e.g. ActionAid Bangladesh, 0210)

This allows a user to check which country an organisation is registered in, and to ensure that this funding is unambiguously being channelled to ActionAid Bangladesh (rather than another ActionAid, or any other NGO).

Quick analysis suggests that more than half of countries do not have a recognised registration agency[^5]. There is a need to add to the list of recognised registration agencies. There is also a need to find a long-term home for this list of recognised registration agencies, and in the medium term, to provide funding to maintain and update this list.

There could also be some countries where there is no registration body, or where the registration body does not issue an actual or stable registration code to the organisation.

However, in general, organisation identifiers should make it possible to identify funding to organisations registered in almost all countries.

#### Identifying whether organisations are affiliated to international NGOs

There is no automatic way of identifying funding to international NGOs. There are three ways in which this could be done:

1. Automatically excluding organisations including the name of an international NGO in their name (e.g. “ActionAid”, “Save the Children”, “Oxfam”). This could be challenging if the name of the organisation is published in another language.
2. Manually excluding organisations when undertaking additional analysis. Providing the above information accurately would mean that analysts would only have to sift through the list of organisations identified as being registered in a specific country.
3. By extension: IATI publishers could create an IATI extension (in a new namespace) that allows an additional attribute to specify whether an org is part of an international federation, with the goal of having that extension incorporated into the core in a future IATI release.

#### Identifying funding to state authorities in the affected country

It is now possible to clearly state where funding is channelled to a state authority in the affected country. There are two ways in which this can be done:

1. Organisation identifier starts with the affected country (e.g. BD), and the organisation type is Government (10) or Local Government (11).
2. Organisation identifier starts with the affected country, followed by COA (e.g. BD-COA). COA stands for “Chart of Accounts”, and is a standardised methodology to refer to public bodies in all countries, using the codes used in the country’s budget or “Chart of Accounts”[^6].

Caveat: at present, it might be more difficult to apply the existing “XX-COA” methodology to local government entities, particularly in federal countries (e.g. Nigeria), where the local entities are not captured in the national budget. In these cases, the methodology could be adapted and expanded through further consultation.

#### Identifying indirect funding to local and national actors

Traceability makes it possible to identify indirect funding, by making it possible for implementers to state which organisation provided the funding for the project they are implementing. This means, for example, that if Oxfam Novib is receiving funding from the Netherlands Ministry of Foreign Affairs, the funding from the MFA can be tracked down to Oxfam Novib.

### 3. Considerations and next steps

There are two main options:

1. IATI Secretariat and community agree to adjust organisation types to be more accurate
* This is very unlikely to happen any time soon, given the institutional changes in IATI right now, and the lack of appetite for an upgrade. However, adding clearer definitions to the existing organisation types, and then improving the way that implementing organisations are classified in publishers’ systems, could make it much easier to identify local and national actors.
* This would also be useful for organisations which do not publish the name or other identifying information about the partners they work with, for security reasons.
2. IATI publishers use correct organisation identifiers for all of the organisations that they work with – this is a more robust fix, but will likely take some time for organisations to:
* adjust their systems (to make it possible to capture organisation identifiers);
* research and enter organisation identifiers into their systems;
* add entries to the list of recognised registration agencies; fund the maintenance and update of this list; and in the medium term, agree a home for its hosting.

<div class="table">


| Organisation is… | Based on currently published data | With improvement to publication of organisation identifiers |
| --- | --- | --- |
| registered in a specific country | RARELY | **YES** |
| an NGO | YES | YES |
|    … registered in a specific country | SOMEWHAT (“partner country based NGO”) | YES |
| a state actor | YES | **YES** |
|    … registered in a specific country | NO | YES |
| affiliated with an INGO | NO | **SOMEWHAT** (Becomes easier to identify) |

</div>

### Organisation Type Codelist

<div class="table">

| Code | Name | Description |
| --- | --- | --- |
| 10 | Government |   |
| 11 | Local Government | Any local (sub national) government organisation in either donor or recipient country. |
| 15 | Other Public Sector |   |
| 21 | International NGO |   |
| 22 | National NGO |   |
| 23 | Regional NGO |   |
| 24 | Partner Country based NGO | Local and National NGO / CSO based in aid/assistance recipient country |
| 30 | Public Private Partnership |   |
| 40 | Multilateral |   |
| 60 | Foundation |   |
| 70 | Private Sector |   |
| 71 | Private Sector in Provider Country | Is in provider / donor country. |
| 72 | Private Sector in Aid Recipient Country | Is in aid recipient country. |
| 73 | Private Sector in Third Country | Is not in either a donor or aid recipient country. |
| 80 | Academic, Training and Research |   |
| 90 | Other |   |

</div>


[^1]: In the data, this is coded as a Participating Organisation with role “implementing”.

[^2]: As registration bodies do not always have online, public databases, where users can lookup the name of an organisation using its registration number. In any case, these are not standardised, so it is not really possible for machines to perform this lookup for organisations registered with different registration bodies.

[^3]: [https://analytics.codeforiati.org/codelist/2/transaction\_receiver-org\_@type.html](https://analytics.codeforiati.org/codelist/2/transaction_receiver-org_@type.html)

[^4]: [https://analytics.codeforiati.org/codelist/2/participating-org\_@type.html](https://analytics.codeforiati.org/codelist/2/participating-org_@type.html)

[^5]: See the OrganisationRegistrationAgency codelist: [https://codelists.codeforiati.org/OrganisationRegistrationAgency/](https://codelists.codeforiati.org/OrganisationRegistrationAgency/)

[^6]: See [https://gov-id-finder.codeforiati.org/](https://gov-id-finder.codeforiati.org/) for more information, example codes, and a brief methodology
