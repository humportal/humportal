---
title: Earmarking
summary: How IATI data can be used to track Grand Bargain earmarking commitments.
---

`DRAFT FOR CONSULTATION: 9 February 2023`

# IATI data for Earmarking

*Guidance note from the technical leads of the Grand Bargain Transparency Workstream*

<b-alert show>
<p><b>Summary</b></p>
<p>IATI data can be used to track Grand Bargain earmarking commitments, with some caveats. This technical note outlines a methodology which can be followed by both Grand Bargain signatories and those tasked with monitoring the implementation of these commitments.</p>
<ul>
  <li>Donors should code their data using the more detailed OECD DAC Aid Types;</li>
  <li>Stakeholders in the quality funding community should agree how to map from OECD DAC Aid Types to Grand Bargain Earmarking Categories. A draft mapping is included in this note.</li>
</ul>
</b-alert>

<b-alert show variant="success">
<p><b><font-awesome-icon :icon="['fas', 'comments']" class="text-success"></font-awesome-icon> What do you think?</b></p>
This is an draft note for consultation. We welcome feedback and discussion on this note, which can be discussed in detail on IATI Connect.
</b-alert>

## Grand Bargain Earmarking Commitments

Aid organisations and donors committed to:

> Jointly determine, on an annual basis, the most effective and efficient way of reporting on unearmarked and softly earmarked funding and to initiate this reporting by the end of 2017.
>
> Reduce the degree of earmarking of funds contributed by governments and regional groups who currently provide low levels of flexible finance. Aid organisations in turn commit to do the same with their funding when channelling it through partners.

Aid organisations committed to:

> Be transparent and regularly share information with donors outlining the criteria for how core and unearmarked funding is allocated (for example, urgent needs, emergency preparedness, forgotten contexts, improved management).
>
> Increase the visibility of unearmarked and softly earmarked funding, thereby recognising the contribution made by donors.

Donors committed to:

> Progressively reduce the earmarking of their humanitarian contributions. The aim is to aspire to achieve a global target of 30 per cent of humanitarian contributions that is nonearmarked or softly earmarked by 2020.

*For the full commitments under this workstream, see [Grand Bargain Website: Workstreams 7 & 8. Enhanced quality funding](https://interagencystandingcommittee.org/Quality-funding).*

## Can IATI data Help Track Commitments?

If published correctly, IATI data can be used for automatically tracking whether organisations are:

* reporting on the unearmarked and softly earmarked funding
* reducing the degree of earmarking of funding
* achieving a global target of 30% of humanitarian contributions that is unearmarked or softly earmarked.

Note: this note assumes that the priority is to track earmarking according to the broad categories of:

* **Unearmarked** (Fully flexible core contribution; Fully flexible core contribution to the CERF; Core contribution)
* **Softly Earmarked** (Core contribution with limitations; Directed to a geographical region or a strategic objective; Directed to a Country-Based Pooled Fund)
* **Earmarked** (Directed to an aid organisation's country operations; Directed to a sub-objective/target)
* **Tightly Earmarked** (Directed to a specific project; Directed geographically and thematically, tied financially; Directed geographically and thematically, in kind)

These definitions are according to [Annex 1 of the Grand Bargain agreement](https://reliefweb.int/sites/reliefweb.int/files/resources/Grand_Bargain_final_22_May_FINAL-2.pdf).

<b-alert show variant="info">
NB: This draft note focuses on tracking earmarking on <b>outgoing</b> funding. Tracking earmarking on <b>incoming</b> funding is possible but may require some more thought. See <b><a href="#which-level-does-earmarking-need-to-be-tracked-at">Which level does earmarking need to be tracked at?</a></b> (below).
</b-alert>

## What to Publish to Enable Automatic Tracking

Grand Bargain signatories should publish data in a way that identifies the type of aid that they are providing. The degree of earmarking can be derived from this classification using a mapping table.

Grand Bargain signatories should:

* publish the “Aid Type” of their funding, either at the activity or the transaction level, using the OECD DAC codelist;
* include the new more granular DAC “Aid Types” in their systems;
* use the more granular DAC “Aid Types” where relevant.

## Progress in Implementation


986 out of 1,497 IATI publishers currently publish the Aid Type element; almost all of these use the OECD DAC Aid Type codelist. For the new Aid Type codes which allow greater precision in the degree of earmarking, 10 organisations have begun using at least one of the new codes. All 10 of these organisations are Grand Bargain signatories. 8 of them are governments.

Even though the more granular additions to the OECD DAC Aid Type codelist were introduced three years later (2020) than the introduction of the Grand Bargain Earmarking codelists (in 2017), far more donor governments have begun publishing this information. This is probably not surprising: adding new codelists into systems normally means system upgrades, which are often expensive and take a lot of time. Adding new codes to existing codelists, by contrast, is generally a much more straightforward task. The OECD DAC Aid Type codelist is also used for the OECD DAC CRS. This means that both IATI data and OECD DAC CRS data can be classified in the same way.

Select a publisher among Grand Bargain signatories to see progress in implementation below.

<aid-types></aid-types>


## How to Track Commitments Using IATI Data

Organisations monitoring Grand Bargain earmarking commitments can use IATI data to identify the share of funding that is earmarked or unearmarked. This section outlines a general methodology which could be used to calculate the degree of earmarking of each publisher’s data.

1. Download data from the [Country Development Finance Data tool](https://countrydata.iatistandard.org/), for each publisher, filtering to only include humanitarian data (where “Humanitarian” is “Humanitarian”, which appears as “1” in the export).
2. Lookup the “Aid Type” field against the [Aid Type &ndash; Earmarking mapping table](#mapping-oecddac-aid-types-to-earmarking-classifications).
3. Summarise the total value in USD by each type of earmarking for this publisher.


Select a publisher among Grand Bargain signatories to see how such a methodology might work.

<earmarking></earmarking>


---

## Technical Annex

### 1. Can the level of earmarking of funding flows be tracked using the IATI Standard?

> “... reporting on unearmarked and softly earmarked funding …”

* Yes. This is possible either using Grand Bargain earmarking classifications or OECD DAC aid types.

> “... reduce the degree of earmarking of funds …”

* Yes. Specific activities or transactions can be marked with Grand Bargain earmarking classifications or OECD DAC aid types, making it possible to track change over time.

> “... aspire to achieve a global target of 30 per cent of humanitarian contributions that is nonearmarked or softly earmarked by 2020… ”

* Yes. It is possible to mark activities or transactions as being humanitarian in nature.

### 2. How can the level of earmarking of funding flows be tracked using the IATI Standard?

There are currently two different ways of tracking the level of earmarking of funding flows. IATI publishers can use one or more of the following classifications using the Aid Type element, on either activities or individual transactions.

Firstly, since 2017, Grand Bargain-specific Earmarking Categories (Unearmarked; Soft Earmarked; Earmarked; Tightly Earmarked) can be used to provide information on the level of earmarking according to Grand Bargain definitions[^1]. Earmarking Modalities can also be used to provide more detailed information on the level of earmarking according to Grand Bargain definitions. These modalities are grouped into the aforementioned Earmarking Categories. For example:

* Earmarked ← Earmarking Category
* Directed to an aid organisation’s country operations ← Earmarking Modality
* Directed to a sub-objective/target ← Earmarking Modality

The second approach is to use the OECD DAC Aid Type codelist, which is a standard codelist used in the IATI Standard[^2]. When the Grand Bargain was agreed, this codelist was insufficiently detailed to provide information on the level of earmarking. However, in 2020, this codelist was adjusted to provide a more granular breakdown of modalities[^3]. The adjustments took place for reporting on 2020 activities to the CRS, on a voluntary basis. The codelist makes it possible to map against the Grand Bargain Earmarking Categories. It may also be possible to use this and other data to map against the more granular Earmarking Modalities.

#### Can the OECD DAC Aid Type codelist alone satisfy the needs for tracking earmarking under the Grand Bargain?

As previously mentioned, the OECD DAC Aid Type codelist previously could not satisfy the needs for tracking earmarking under the Grand Bargain, as until 2020 it did not have the level of granularity required to track earmarking.

Following the more granular codes added to the OECD DAC Aid Type codelist, it should now be possible to meet the needs for tracking earmarking under the Grand Bargain. The section OECD/DAC Aid Types and Earmarking (below) provides an initial comprehensive mapping between OECD/DAC Aid Types and Grand Bargain Earmarking Categories[^4].

#### Identifying indirect earmarking

There is still somewhat limited progress in the implementation of traceability throughout the humanitarian system. Only 14% of Netherlands MFA and 4% of UK FCDO funding is currently traceable. As these figures include all activities, sometimes stretching back decades (not only “current” or “ongoing” activities), they may underestimate the amount of funding that is currently traceable. It is probably the case that older activities have less traceability (and are also probably less relevant), and it may be the case that funding implemented through certain types of organisations (e.g. multilaterals) has less traceability.

#### Which level does earmarking need to be tracked at?

The initial focus of the earmarking commitment appears to be on donors.

However, the commitment notes that “Aid organisations in turn commit to do the same”. Earmarking could therefore also be tracked when being channelled through other aid organisations (such as multilaterals or INGOs). Although possible in the IATI Standard, assessing earmarking at this level is more complex; should aid organisations be assessed on their own delivery on the earmarking commitment if the funds they receive are largely earmarked?

An approach here might be to compare the earmarking of funding that aid organisations receive (either as reported by the organisation’s donor, or as reported by the organisation itself as incoming funding), with the funding they provide. If there is a higher degree of earmarking on the funding that the organisation is providing, they could be considered as not meeting their part of the commitment. In any case, such a methodology would need more work, as well as consultation with relevant organisations to understand whether they would be able to differentiate earmarking on the funds they receive compared with the funds they provide.

### 3. Progress in implementation

So far, only 16 publishers have used Grand Bargain Earmarking Categories, and only 7 publishers have used Grand Bargain Earmarking Modalities[^5]. In total, this covers parts of 10 Grand Bargain signatories, and only 2 governments. This is out of a total of 1,497 publishers on the IATI Registry.

In contrast, 986 publishers publish the Aid Type element; almost all of these use the OECD DAC Aid Type codelist. For the new Aid Type codes which allow greater precision in the degree of earmarking, 10 organisations have begun using at least one of the new codes. All 10 of these organisations are Grand Bargain signatories. 8 of them are governments.

Even though the additions to the OECD DAC Aid Type codelist were introduced three years later (2020) than the introduction of the Grand Bargain Earmarking codelists (in 2017), far more donor governments have begun publishing this information. This is probably not surprising: adding new codelists into systems normally means system upgrades, which are often expensive and take a lot of time. Adding new codes to existing codelists, by contrast, is generally a much more straightforward task. The OECD DAC Aid Type codelist is also used for the OECD DAC CRS. This means that both IATI data and OECD DAC CRS data can be classified in the same way.

### 4. Considerations and next steps

Currently, the level of earmarking specified in IATI data using the Grand Bargain-specific classifications is limited to 10 out of 65 signatories. However, the quality of publication is much better when looking at the OECD DAC Aid Types. There are two main options to proceed:

1. Grand Bargain signatories commit to publishing the detailed Grand Bargain Earmarking Categories and/or Modalities. This seems ambitious, and probably unlikely, five years on from the launch of the Grand Bargain.
2. Grand Bargain signatories commit to fully using the more granular OECD DAC Aid Type codes. This is the most likely approach to work, but will likely take some time for organisations to:
   * include the new, more granular codes in their systems;
   * undertake communications activities to encourage project officers to use the new codes, recoding relevant activities where required.

In the case of the (preferred) option 2, Grand Bargain signatories should also agree a methodology for mapping from the OECD DAC Aid Type codes to the Grand Bargain Earmarking Categories. Might it be possible to approximate this even without signatories using the new, more granular OECD DAC Aid Type codes? 

This also assumes that Earmarking Categories are a sufficient target to aim at, and that the more granular Earmarking Modalities are not needed (or a realistic ambition) at this point in time.

---


## Mapping OECD/DAC Aid Types to Earmarking Classifications

The following table is an initial attempt to comprehensively map from the OECD/DAC Aid Types to the Grand Bargain earmarking classifications. The reform of the OECD/DAC Aid Types was undertaken with Grand Bargain classifications in mind. However, currently, there is no comprehensive mapping between these two lists. Agreeing a systematic approach to mapping would make it easier to assess earmarking on the basis of IATI data, as well as OECD DAC CRS data. It would not be necessary to publish Grand Bargain-specific earmarking information; but Grand Bargain earmarking categories could be derived from the standard OECD/DAC Aid Type codes published by a much wider range of organisations.

It might also be possible to map from these classifications (plus other data) to the more detailed Earmarking Modalities, but that possibility is not explored here.

<div class="table">

| Code | Name | GB Earmarking | Rationale |
| --- | --- | --- | --- |
| A01 | General budget support | Softly earmarked | Follows GB Earmarking Modality F “Country-Based Pooled Fund”. Country-specific but otherwise fully flexible. |
| A02 | Sector budget support | Earmarked | Follows GB Earmarking Modality G “Directed to an aid organisation’s country operations”. Country and thematic specific but otherwise fully flexible. |
| B01 | Core support to NGOs, other private bodies, PPPs and research institutes | Unearmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| B02 | Core contributions to multilateral institutions and global funds | Unearmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| B021 | Core contributions to multilateral institutions | Unearmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| B022 | Core contributions to global funds | Unearmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| B03 | Contributions to specific-purpose programmes and funds managed by implementing partners | Softly earmarked (if global / regional) or Earmarked (if country) | Follows logic of new underlying codes. |
| B031 | Contributions to multi-donor/multi-entity funding mechanisms | Softly earmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| B032 | Contributions to multi-donor/single-entity funding mechanisms | Softly earmarked (if global / regional) or Earmarked (if country) | Follows DCD/DAC/STAT(2020)24/REV1 |
| B033 | Contributions to single-donor funding mechanisms and contributions earmarked for a specific funding window or geographical location | Earmarked? | Follows logic of B032 (for a specific geographical location; though unclear whether earmarking for a specific funding window should count as earmarked) |
| B04 | Basket funds/pooled funding | Softly earmarked (if global / regional) or Earmarked (if country) | Following logic of B032. In general, basket funds / pooled funds normally refer to country-level funds, so are likely to be Earmarked. |
| C01 | Project-type interventions | Tightly earmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| D01 | Donor country personnel | Tightly earmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| D02 | Other technical assistance | Tightly earmarked | Follows DCD/DAC/STAT(2020)24/REV1 |
| E01 | Scholarships/training in donor country | Tightly earmarked | Follows DCD/DAC/STAT(2020)24/REV1 |

</div>

The following OECD DAC aid types either should be excluded from analysis (as they are not relevant at the country level), or should be considered as “tightly earmarked”:


<div class="table">

| Code | Name |
| --- | --- |
| E02 | Imputed student costs |
| F01 | Debt relief |
| G01 | Administrative costs not included elsewhere |
| H01 | Development awareness |
| H02 | Refugees/asylum seekers in donor countries |
| H03 | Asylum-seekers ultimately accepted |
| H04 | Asylum-seekers ultimately rejected |
| H05 | Recognised refugees |

</div>


---

Examples
--------

This section provides examples of how the level of earmarking can be stated in IATI data using various codelists.

Using the **Grand Bargain Earmarking Category** codelist:

```xml
<default-aid-type vocabulary="2" code="3" />
```

*Explanation:*

The activity has been classified as “Earmarked” (code 3) according to the Grand Bargain Earmarking Category codelist (vocabulary 2).

Using the **Grand Bargain Earmarking Modality** codelist:

```xml
<default-aid-type vocabulary="3" code="G" />
```

*Explanation:*

The activity has been classified as “Earmarked → Directed to an aid organisation’s country operations” (code G) according to the Grand Bargain Earmarking Modality codelist (vocabulary 3).

Using the **OECD DAC Aid Type** codelist:

```xml
<default-aid-type vocabulary="1" code="B033" />
```

*Explanation:*

The activity has been classified as “Contributions to single-donor funding mechanisms and contributions earmarked for a specific funding window or geographical location” (code B033) according to the OECD DAC Aid Type codelist (vocabulary 1)[^6].



[^1]: See Annex 1, final page of this document: [https://reliefweb.int/sites/reliefweb.int/files/resources/Grand\_Bargain\_final\_22\_May\_FINAL-2.pdf](https://reliefweb.int/sites/reliefweb.int/files/resources/Grand_Bargain_final_22_May_FINAL-2.pdf)

[^2]: Renamed to the “Co-operation Modality” codelist in 2020, but still referred to in the IATI Standard as the Aid Type codelist.

[^3]: OECD DAC - Revised Proposal on Refinements to the Type of Aid / Cooperation Modality Classification (DCD/DAC/STAT(2020)24/REV1): [https://www.oecd.org/officialdocuments/publicdisplaydocumentpdf/?cote=DCD/DAC/STAT(2020)24/REV1&docLanguage=En](https://www.oecd.org/officialdocuments/publicdisplaydocumentpdf/?cote%3DDCD/DAC/STAT(2020)24/REV1%26docLanguage%3DEn)

[^4]: Mapping to Earmarking Modalities may also be possible, but this is significantly more challenging, as it involves also considering the Implementing Organisation (or “Channel” in OECD DAC terminology), and this information may not be published in a consistent way.

[^5]: At the transaction level: [https://analytics.codeforiati.org/codelist/2/transaction\_aid-type\_@vocabulary.html](https://analytics.codeforiati.org/codelist/2/transaction_aid-type_@vocabulary.html); At the activity level: [https://analytics.codeforiati.org/codelist/2/default-aid-type\_@vocabulary.html](https://analytics.codeforiati.org/codelist/2/default-aid-type_@vocabulary.html)

[^6]: Note that, according to the conventions of the IATI Standard, as this is the default codelist for the Aid Type element, the vocabulary attribute can be omitted and the OECD DAC codelist is assumed.

